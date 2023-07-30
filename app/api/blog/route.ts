export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

const blogPosts = [
  {
    id: 1,
    title: "My first blog post",
    content: "This is my very first blog post. How exciting!",
    author: "John Doe",
  },
  {
    id: 2,
    title: "My second blog post",
    content: "This is my second blog post. Even more exciting!",
    author: "John Doe",
  },
  {
    id: 3,
    title: "My second blog post",
    content: "This is my second blog post. Even more exciting!",
    author: "John Doe",
  },
  {
    id: 4,
    title: "My second blog post",
    content: "This is my second blog post. Even more exciting!",
    author: "John Doe",
  },
];

export async function GET(request: Request) {
  return NextResponse.json({
    data: blogPosts,
  });
}
