import { UserAuthForm } from "@/components/_design_t/user-auth-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autenticación - Kindtranet",
  description: "Autenticación de usuarios para acceso al sistema",
};

export default function SignUpPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/src/assets/images/authentication-light.jpg"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/src/assets/images/authentication-dark.jpg"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/auth/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8",
          )}
        >
          Ingresar
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src="/src/assets/svg/logo.svg"
              width={32}
              height={32}
              alt="Kindtranet"
            />
            Kindtranet
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Expresion literal de la mision del colegio / ie.&rdquo;
              </p>
              <footer className="text-sm">Nombre del colegio</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Crear una cuenta
              </h1>
              <p className="text-sm text-muted-foreground">
                Ingresa tu email y contraseña para crear una cuenta
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Al registrarte, aceptas nuestros{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Términos de Servicio
              </Link>{" "}
              y{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Políticas de Privacidad
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
