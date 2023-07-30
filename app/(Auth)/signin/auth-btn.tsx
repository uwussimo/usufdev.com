"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthBtn() {
  const { data: session } = useSession();
  return (
    <>
      <Button
        onClick={() => {
          session ? signOut() : signIn("github");
        }}
      >
        <Icons.gitHub className="w-4 h-4 mr-2" />
        {session ? "Sign out" : "Sign in"}
      </Button>
    </>
  );
}

export default AuthBtn;
