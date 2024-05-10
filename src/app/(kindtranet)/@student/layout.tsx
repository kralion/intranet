import Navbar from "@/components/_design_t/shared/navbar";
import React from "react";
// DOCS: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#slots

export default async function Page({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      {modal}
    </>
  );
}
