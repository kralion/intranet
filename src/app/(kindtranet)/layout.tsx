import React from "react";
// DOCS: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes

export default function Page({
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
  return <div>Page</div>;
}
