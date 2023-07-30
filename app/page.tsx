import PostCard from "@/components/blog/post-card";

export default function Home() {
  return (
    <main className="p-6 xl:px-36">
      <div
        className="grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div className="md:col-span-2 md:row-span-2">
          <PostCard />
        </div>
        <PostCard />
        <PostCard />
      </div>
    </main>
  );
}
