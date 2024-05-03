import { cn } from "@/lib/utils";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";

const adminLinks = [
  {
    href: "/users",
    label: "Usuarios",
  },
  {
    href: "/courses",
    label: "Cursos",
  },
  {
    href: "/reports",
    label: "Reportes",
  },
];

const teacherLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/dashboard",
    label: "Reportes",
  },
  {
    href: "/profile",
    label: "Perfil",
  },
];
const studentLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/dashboard",
    label: "Reportes",
  },
  {
    href: "/profile",
    label: "Perfil",
  },
];

enum Role {
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
}

export async function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const session = await getServerAuthSession();
  const links =
    (session?.user.role as Role) === Role.ADMIN
      ? adminLinks
      : (session?.user.role as Role) === Role.TEACHER
        ? teacherLinks
        : studentLinks;

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-muted-foreground"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
