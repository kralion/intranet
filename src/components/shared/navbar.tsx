import React from "react";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";
import SemesterSwitcher from "./semester-switcher";
//TODO: Conditional rendering for the options on each element of the NavBar based on the user's role
export default async function Navbar() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <SemesterSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
}
