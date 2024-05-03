import Navbar from "@/components/_design_t/shared/navbar";
import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
