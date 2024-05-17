import { getServerAuthSession } from "@/server/auth";
import React from "react";
// DOCS: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes
enum Role {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  ADMIN = "ADMIN",
}
export default async function Page({
  student,
  teacher,
  admin,
}: {
  student: React.ReactNode;
  teacher: React.ReactNode;
  admin: React.ReactNode;
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  if (!session) {
    return null;
  }
  return (
    <>
      {(session.user.role as Role) === Role.ADMIN
        ? admin
        : (session.user.role as Role) === Role.TEACHER
          ? teacher
          : student}
    </>
  );
}
