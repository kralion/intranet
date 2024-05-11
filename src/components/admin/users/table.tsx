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
import UserForm from "./update-form";
import { DestructiveAlertDialog } from "@/components/shared/destructive-alert";
export default function UsersTable() {
  const [userDetailsSheetOpen, setUserDetailsSheetOpen] = React.useState(false);
  const [userUpdateFormOpen, setUserUpdateFormOpen] = React.useState(false);
  const [userDeleteDialogOpen, setUserDeleteDialogOpen] = React.useState(false);
  const userDeleteMutation = api.user.delete.useMutation();
  const [userId, setUserId] = React.useState<string>("");
  const { data: users, refetch } = api.user.getAll.useQuery();
  return (
    <>
      <Table>
        <TableCaption>Lista de usuarios del sistema</TableCaption>
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
                      <DropdownMenuItem
                        onSelect={() => {
                          setUserUpdateFormOpen(true);
                          setUserId(user.id);
                        }}
                      >
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => {
                          setUserDetailsSheetOpen(true);
                          setUserId(user.id);
                        }}
                      >
                        Ver Detalles
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => {
                          setUserDeleteDialogOpen(true);
                          setUserId(user.id);
                        }}
                        className="text-red-500"
                      >
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
      <UserForm
        open={userUpdateFormOpen}
        onOpenChange={setUserUpdateFormOpen}
        userId={userId}
      />
      <DestructiveAlertDialog
        open={userDeleteDialogOpen}
        onOpenChange={setUserDeleteDialogOpen}
        title="Eliminar usuario"
        description="¿Está seguro que desea eliminar este usuario?"
        cancel="Cancelar"
        actionText="Eliminar"
        action={async () => {
          userDeleteMutation.mutate(userId);
          await refetch();
          setUserDetailsSheetOpen(false);
          setUserUpdateFormOpen(false);
        }}
      />
    </>
  );
}
