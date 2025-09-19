import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/blog';

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.slug} className="flex gap-3">
          <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0">
            <Image
              src={post.coverImg}
              alt={post.title}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium hover:text-accent transition-colors line-clamp-2"
            >
              {post.title}
            </Link>
            <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}