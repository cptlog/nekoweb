import PostCard from "@/components/PostCard";
import getPostMetadata from "@/utils/getPostMetadata";
import Image from "next/image";

export default function Home() {
  const postMetadata = getPostMetadata('posts')
  return (
    <main>
      <div className="container">
        {postMetadata.map((post, postIndex) => {
          return (
            <PostCard key={postIndex} post={post} />
          )
        })}
      </div>
    </main>
  );
}
