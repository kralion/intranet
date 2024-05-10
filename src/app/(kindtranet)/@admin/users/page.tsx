import UserForm from "@/components/admin/users/form";
import UsersTable from "@/components/admin/users/table";
import React from "react";

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1>Users</h1>
        <UserForm />
      </div>
      <UsersTable />
    </div>
  );
}
