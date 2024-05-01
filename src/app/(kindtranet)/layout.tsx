import { getServerAuthSession } from "@/server/auth";
import React from "react";
// DOCS: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes
enum Role {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  ADMIN = "ADMIN",
}
export default async function Page({
  children,
  student,
  teacher,
  admin,
}: {
  children: React.ReactNode;
  student: React.ReactNode;
  teacher: React.ReactNode;
  admin: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <div>
      {children}
      {session ? (
        <>
          {(session.user.rol as Role) === Role.STUDENT && student}
          {(session.user.rol as Role) === Role.TEACHER && teacher}
          {(session.user.rol as Role) === Role.ADMIN && admin}
        </>
      ) : (
        <div>Not authenticated</div>
      )}
    </div>
  );
}
