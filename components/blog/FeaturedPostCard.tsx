import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Post } from '@/types/blog';

interface FeaturedPostCardProps {
  post: Post;
}

export default function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <article className="bg-card rounded-2xl shadow-lg overflow-hidden card-hover border border-border/50 group">
      <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
        <Image 
          src={post.coverImage} 
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {post.categories.slice(0, 2).map((category) => (
            <Badge key={category} variant="secondary" className="text-xs font-medium">
              {category}
            </Badge>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors line-clamp-2 group-hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <div className="flex items-center text-sm text-muted-foreground mb-4 gap-4">
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1.5" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <Button asChild variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group">
          <Link href={`/blog/${post.slug}`}>
            Read More 
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </article>
  );
}