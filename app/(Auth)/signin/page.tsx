import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import AuthBtn from "./auth-btn";

function SignInPage() {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Continue with GitHub</CardTitle>
          <CardDescription>
            You will be redirected to GitHub to sign in.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <AuthBtn></AuthBtn>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignInPage;
