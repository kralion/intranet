"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/trpc/react";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { UserDetailsSheet } from "./details";

export default function UsersTable() {
  const [userDetailsSheetOpen, setUserDetailsSheetOpen] = React.useState(false);
  const [userId, setUserId] = React.useState<string>("");
  const { data: users } = api.user.getAll.useQuery();
  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="w-[100px]">{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontal />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-36"
                    align="start"
                    forceMount
                  >
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => {
                          setUserDetailsSheetOpen(true);
                          setUserId(user.id);
                        }}
                      >
                        Ver Detalles
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UserDetailsSheet
        open={userDetailsSheetOpen}
        onOpenChange={setUserDetailsSheetOpen}
        userId={userId}
      />
    </>
  );
}
