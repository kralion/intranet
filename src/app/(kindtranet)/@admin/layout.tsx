import Navbar from "@/components/shared/navbar";
import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
