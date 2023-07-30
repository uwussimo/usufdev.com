import PostCard from "@/components/blog/post-card";

export default async function Home() {
  const blogPosts = await fetch("http://localhost:3000/api/blog");
  const posts = await blogPosts.json().then((data) => data.data);
  const firstPost = posts[0]; // first post
  const restPosts = posts.slice(1, posts.length); // rest of the posts
  return (
    <main className="p-6 xl:px-36">
      <div
        className="grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div className="md:col-span-2 md:row-span-2">
          <PostCard title={firstPost.title} content={firstPost.content} />
        </div>
        {restPosts.map((post: any) => {
          return (
            <>
              <PostCard title={post.title} content={post.content} />
            </>
          );
        })}
      </div>
    </main>
  );
}
