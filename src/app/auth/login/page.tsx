"use client";
import AuthenticationDark from "@/assets/images/authentication-dark.jpg";
import AppLogo from "@/assets/images/app-logo.png";
import ThemeToogle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { formSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import type { z } from "zod";
export default function Page() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/profile",
    });
    if (result?.error) {
      toast({
        title: "Error",
        description: "Credenciales inválidas",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="w-full lg:grid  lg:grid-cols-2">
      <div className="relative flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-10">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Inicio de Sesión
            </h1>
            <p className="text-balance text-sm text-muted-foreground">
              Ingresa tus credenciales para acceder al sistema
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div>
                    <Label>Email</Label>
                    <FormControl>
                      <Input placeholder="user@mail.com" {...field} />
                    </FormControl>
                    <FormMessage className="mt-2" />
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div>
                    <Label>Email</Label>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage className="mt-2" />
                    <Link
                      href="#"
                      className="ml-auto mt-3 flex justify-end text-sm underline hover:opacity-80"
                    >
                      Olvidaste tu contraseña?
                    </Link>
                  </div>
                )}
              />
              <Button type="submit" className="w-full">
                Ingresar
              </Button>
            </form>
          </Form>
        </div>
        <span className="absolute bottom-5 left-5 text-sm">
          <Link href="#" className="underline">
            Grublo Inc
          </Link>{" "}
          - All Rights Reserved &copy; {new Date().getFullYear()}{" "}
        </span>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Link
          href="/"
          className="items-centar absolute right-5 top-5 z-10 flex text-xl"
        >
          <img
            className="filter-none hover:opacity-80 dark:invert dark:filter"
            src={AppLogo.src}
            alt="Logo"
            width="200"
            height="100"
          />
        </Link>
        <div className="absolute bottom-5 right-5 z-10">
          <ThemeToogle />
        </div>
        <img
          src={AuthenticationDark.src}
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
