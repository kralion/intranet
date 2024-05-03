import AppLogo from "@/assets/images/app-logo.png";
import GrubloFooter from "@/components/landing/footer";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Planes",
    href: "/pricing",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-neutral-900">
      <div className="flex items-center justify-between  p-10">
        <Link href="/">
          <img
            className=" dark:invert dark:filter"
            src={AppLogo.src}
            alt="Logo"
            width="200"
            height="100"
          />
        </Link>
        <div className="z-10 flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              className=" font-medium transition-colors hover:opacity-80"
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link href="/auth/login">
          <button className="flex animate-buttonheartbeat items-center rounded-sm bg-neutral-800 px-4 py-2  text-sm text-white hover:opacity-90 dark:bg-white  dark:text-neutral-800  ">
            Iniciar sesión
            <MoveRight className="ml-2 h-4 w-4" />
          </button>
        </Link>
      </div>
      <div>{children}</div>
      <GrubloFooter />
    </div>
  );
}
