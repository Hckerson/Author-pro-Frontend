import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { Post } from '@/types/blog';

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (!posts.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl mb-2">No posts found</h3>
        <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <article key={post.slug} className="flex flex-col md:flex-row gap-6 group">
          <Link 
            href={`/blog/${post.slug}`} 
            className="relative block h-60 md:h-40 md:w-60 overflow-hidden rounded-lg shrink-0"
          >
            <Image 
              src={post.coverImage} 
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 240px"
            />
          </Link>
          <div className="flex-1">
            <div className="flex gap-2 mb-2">
              {post.categories.slice(0, 2).map((category) => (
                <Badge key={category} variant="secondary" className="font-normal">
                  {category}
                </Badge>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl md:text-2xl font-medium mb-2 hover:text-accent transition-colors">
                {post.title}
              </h2>
            </Link>
            <div className="flex text-sm text-muted-foreground mb-3 gap-4">
              <div className="flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              {post.excerpt}
            </p>
            <Button asChild variant="ghost" className="p-0 h-auto font-medium hover:text-accent">
              <Link href={`/blog/${post.slug}`}>
                Read More
              </Link>
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}