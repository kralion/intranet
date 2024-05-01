import ThemeToogle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full lg:grid  lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-10">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Inicio de Sesión
            </h1>
            <p className="text-balance text-sm text-muted-foreground">
              Ingresa tus credenciales para acceder al sistema
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline hover:opacity-80"
                >
                  Olvidaste tu contraseña?
                </Link>
              </div>
              <Input
                id="password"
                placeholder="*********"
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Ingresar
            </Button>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <div></div>
        <div className="absolute bottom-5 right-5 z-10">
          <ThemeToogle />
        </div>
        <Image
          src="/authentication-dark.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
