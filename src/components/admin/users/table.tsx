"use client";
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

export default function UsersTable() {
  const { data: users } = api.user.getAll.useQuery();
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="w-[100px]">{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <MoreHorizontal />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
