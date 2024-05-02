import { getServerAuthSession } from "@/server/auth";
import React from "react";
// DOCS: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#slots

export default async function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <div>
      {children}
      {session ? <div>Authenticated</div> : <div>Not authenticated</div>}
    </div>
  );
}
