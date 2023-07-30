import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

function PostCard(
  { thumbnail }: { thumbnail?: string },
  props: React.ComponentPropsWithoutRef<typeof Card>
) {
  return (
    <Card {...props}>
      <CardHeader className={cn("flex flex-col gap-y-2")}>
        {thumbnail ? (
          <Image
            src="/no-thumbnail.jpg"
            width={200}
            height={200}
            alt="thumbnail"
            className="rounded-md
            object-cover
            w-full
            "
          />
        ) : (
          <Icons.noThumbnail />
        )}

        <CardTitle>Post Title</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href="#">Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PostCard;
