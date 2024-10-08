import { Post } from "@/hashnode/generated/graphql";
import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";

type Props = {
  post: Post;
};

export default function BlogPostListItem({ post }: Props) {
  const coverImage = post?.coverImage?.url || ""
  return (
    <li>
      <div className="flex flex-col prose prose-neutral dark:prose-invert gap-2">
      <Image width={900} height={300} alt={"coverImage"} src={coverImage} />
        <div>
          <Link href={`/blog/${post.slug}`}>
            <span className="text-lg">{post.title}</span>
          </Link>
          <div className="flex items-center text-sm">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span className="mx-1">•</span>
            <span>{post.views.toLocaleString()} views</span>
            <span className="mx-1">•</span>
            <span>{post.readTimeInMinutes} min read</span>
            <span className="mx-1">•</span>
            <span>{post.reactionCount} likes</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-2">{post.tags?.map((tag) => <Badge key={tag.name}>{tag.name.toLocaleLowerCase()}</Badge>)}</div>
        <span className="leading-tight text-sm text-muted-foreground">{post.brief}</span>
      </div>
    </li>
  );
}
