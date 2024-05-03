import AppLogo from "@/assets/images/app-logo.png";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import Features from "@/components/landing/features";
import ShimmerButton from "@/components/landing/shimmer-btn";
import { Button } from "@/components/ui/button";
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

export default function Home() {
  return (
    <div>
      <BackgroundGradientAnimation>
        <div className="flex items-center justify-between p-10">
          <Link href="/" className="z-10">
            <img
              className=" invert filter "
              src={AppLogo.src}
              alt="Logo"
              width="200"
              height="100"
            />
          </Link>
          <div className="z-10 flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                className=" font-medium text-white transition-colors hover:text-white/90"
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link className="z-10" href="/auth/login">
            <button className="flex animate-buttonheartbeat items-center rounded-sm bg-white  px-4 py-2 text-sm text-neutral-800  hover:opacity-90  ">
              Iniciar sesión
              <MoveRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl">
          <p className="bg-gradient-to-b from-white/90 to-white/30 bg-clip-text px-36 text-transparent drop-shadow-2xl">
            Solución de Intranet Educativo
          </p>
          <Link href="/auth/login">
            <ShimmerButton />
          </Link>
        </div>
      </BackgroundGradientAnimation>
      {/* <Features /> */}
    </div>
  );
}
