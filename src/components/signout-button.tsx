"use client";
import { signOut } from "next-auth/react";
import Hotkeys from "react-hot-keys";
export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/auth/login",
      redirect: true,
    });
  };

  return (
    <Hotkeys keyName="ctrl + q" onKeyDown={handleSignOut}>
      <span
        className="my-0 w-full p-1 py-0"
        onClick={handleSignOut}
        tabIndex={0}
      >
        Sign out
      </span>
    </Hotkeys>
  );
}
