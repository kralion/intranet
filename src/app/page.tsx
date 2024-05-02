import AppLogo from "@/assets/images/app-logo.png";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <div>
        <img
          className="absolute left-8 top-8 z-10  invert filter"
          src={AppLogo.src}
          alt="Logo"
          width="200"
          height="100"
        />
      </div>
      <Link href="/auth/login">
        <button className="animate-buttonheartbeat absolute right-8 top-10 z-10 flex items-center rounded-sm bg-white  px-4 py-2 text-sm text-neutral-800  hover:opacity-90  ">
          Iniciar sesión
          <MoveRight className="ml-2 h-4 w-4" />
        </button>
      </Link>
      <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl">
        <p className="bg-gradient-to-b from-white/90 to-white/30 bg-clip-text px-36 text-transparent drop-shadow-2xl">
          Educational Intranet Software
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
