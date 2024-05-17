"use client";
import AuthenticationDark from "@/assets/images/authentication-dark.jpg";
import AppLogo from "@/assets/images/app-logo.png";
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
import { loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { useState } from "react";
import { Key, LoaderCircle, MoveLeft, User } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
export default function Page() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
    setIsLoading(false);
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
        <div className="mx-auto grid w-[350px] gap-5">
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
                {isLoading ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  "Ingresar"
                )}
              </Button>
            </form>
            <div className=" flex justify-center gap-4 text-xs  text-zinc-600 dark:text-zinc-400">
              <p className="flex items-center gap-1 font-mono ">
                <User size={15} /> <span>student@mail.com</span>
              </p>
              <p className="flex items-center gap-1 font-mono">
                <Key size={15} /> <span>studentuser</span>
              </p>
            </div>
            <div className=" flex justify-center gap-4 text-xs  text-zinc-600 dark:text-zinc-400">
              <p className="flex items-center gap-1 font-mono ">
                <User size={15} /> <span>teacher@mail.com</span>
              </p>
              <p className="flex items-center gap-1 font-mono">
                <Key size={15} /> <span>teacheruser</span>
              </p>
            </div>
          </Form>
        </div>
        <span className="absolute left-5 top-5 text-sm">
          <Link href="/">
            <MoveLeft className="hover:opacity-80 dark:text-white" />
          </Link>
        </span>
        <span className="absolute bottom-5 left-5 text-sm">
          <a
            href="https://grublo.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Grublo Inc
          </a>{" "}
          - All Rights Reserved &copy; {new Date().getFullYear()}{" "}
        </span>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Link
          href="/"
          className="items-centar absolute right-5 top-5 z-10 flex text-xl"
        >
          <img
            className="invert filter hover:opacity-80 dark:filter-none"
            src="https://colegioclaretiano.edu.pe/images/insignia.png"
            alt="Logo del Colegio"
            width="100"
            height="100"
          />
        </Link>
        <div className="absolute bottom-5 right-5 z-10">
          <ThemeToggle />
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
