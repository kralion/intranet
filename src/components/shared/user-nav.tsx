import SignOutButton from "@/components/signout-button";
import { ThemeToggleLarger } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getServerAuthSession } from "@/server/auth";
enum Role {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
}

export async function UserNav() {
  const session = await getServerAuthSession();
  if (!session) {
    return null;
  }
  const image =
    (session.user.role as Role) === Role.ADMIN
      ? "https://img.icons8.com/?size=48&id=lZbMMFzEyi1c&format=png"
      : (session.user.role as Role) === Role.STUDENT
        ? "https://img.icons8.com/?size=48&id=mcOUoqsodz8x&format=png"
        : "https://img.icons8.com/?size=48&id=HN83zbO5wYSH&format=png";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8 rounded">
            <AvatarImage src={image} alt="@shadcn" />
            <AvatarFallback>{session.user.role.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className=" rounded bg-lime-400 font-normal">
          <span className=" font-mono font-semibold tracking-tighter text-black">
            {session.user.role}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>
            <ThemeToggleLarger />
          </DropdownMenuItem>
          <DropdownMenuItem>Configuracion</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton />
          <DropdownMenuShortcut className="w-16 pr-0">
            <kbd className="text-xs tracking-tighter">Ctrl+ Q</kbd>
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
