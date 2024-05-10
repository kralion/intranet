"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { registerSchema } from "@/schemas";
import { api } from "@/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { hash } from "bcryptjs";
import { LucideLoader, PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

enum UserRole {
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
}

const userRoles = [
  { value: UserRole.ADMIN, label: "Admin" },
  { value: UserRole.TEACHER, label: "Teacher" },
  { value: UserRole.STUDENT, label: "Student" },
];
export default function AddUserForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: UserRole.ADMIN,
    },
  });
  const createUserMutation = api.user.create.useMutation();

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const hashedPassword = await hash(values.password, 10);
    await createUserMutation.mutateAsync(
      {
        ...values,
        password: hashedPassword,
        role: values.role as UserRole,
      },
      {
        onSuccess: (response) => {
          toast({
            title: response.message,
          });
        },
        onError: (error) => {
          toast({
            title: error.message,
            variant: "destructive",
          });
        },
      },
    );
    form.reset();
  }
  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) {
          form.reset();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button>
          <PlusCircle size={15} className="mr-1" />
          Agregar usuario
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar usuario</DialogTitle>
          <DialogDescription>
            Ingresa los datos para el usuario que desea agregar, y sea cauteloso
            al momento de asignar el rol.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              rules={{
                required: {
                  value: true,
                  message: "El email es requerido",
                },
              }}
              name="email"
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="col-span-3"
                    {...field}
                  />
                  <FormMessage className="mt-2" />
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              rules={{
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              }}
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    className="col-span-3"
                    {...field}
                  />
                  <FormMessage className="mt-2" />
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              rules={{
                required: {
                  value: true,
                  message: "Seleccione el rol",
                },
              }}
              render={({ field }) => (
                <div className="space-y-2">
                  <Label className="text-right">Rol</Label>
                  <Select onValueChange={field.onChange} defaultValue="ADMIN">
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Seleccione el rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {userRoles.map((role) => (
                          <SelectItem key={role.value} value={role.value}>
                            {role.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage className="mt-2" />
                </div>
              )}
            />
            <Button type="submit">
              {createUserMutation.isPending ? (
                <LucideLoader className="h-4 w-4 animate-spin" />
              ) : (
                "Registrar"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
