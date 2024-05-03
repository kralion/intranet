import Navbar from "@/components/_design_t/shared/navbar";
import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="p-4 lg:p-8">
        <main className="mx-auto max-w-7xl">{children}</main>
      </div>
    </div>
  );
}
