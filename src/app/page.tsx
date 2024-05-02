import AppLogo from "@/assets/images/app-logo.png";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex  w-full items-center justify-between p-6">
      <div>
        <img
          className="filter-none dark:invert dark:filter"
          src={AppLogo.src}
          alt="Logo"
          width="200"
          height="100"
        />
      </div>
      <Link href="/auth/login">
        <button className="animate-buttonheartbeat m-9 flex items-center rounded-sm bg-neutral-800 px-4 py-2 text-sm  text-white dark:bg-white dark:text-neutral-800">
          Iniciar sesión
          <MoveRight className="ml-2 h-4 w-4" />
        </button>
      </Link>
    </div>
  );
}
