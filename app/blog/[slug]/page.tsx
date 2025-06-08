import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ShareButtons from '@/components/blog/ShareButtons';
import NewsletterSignup from '@/components/common/NewsletterSignup';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { getPostBySlug, getRelatedPosts } from '@/lib/data/posts';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Author Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }
  
  const relatedPosts = await getRelatedPosts(post.slug, post.categories);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <article>
        <div className="relative h-[40vh] lg:h-[50vh]">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-10" />
          <Image 
            src={post.coverImage} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="container relative z-20 h-full flex flex-col justify-end pb-12">
            <div className="max-w-3xl">
              <div className="flex gap-2 mb-4">
                {post.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
              <h1 className="mb-4">{post.title}</h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="container py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="prose dark:prose-invert max-w-none">
                {post.content}
              </div>
              
              <div className="mt-12 pt-8 border-t">
                <ShareButtons title={post.title} />
              </div>
              
              <div className="mt-12 flex items-center p-6 bg-muted/30 rounded-lg">
                <Avatar className="h-16 w-16 mr-6">
                  <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Author" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="text-muted-foreground">
                    Author, blogger, and storyteller passionate about crafting narratives that inspire and connect.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 flex justify-between">
                <Button asChild variant="ghost">
                  <Link href="/blog">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back to Blog
                  </Link>
                </Button>
                <div className="flex gap-4">
                  {post.previousPost && (
                    <Button asChild variant="outline">
                      <Link href={`/blog/${post.previousPost.slug}`}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                      </Link>
                    </Button>
                  )}
                  {post.nextPost && (
                    <Button asChild variant="outline">
                      <Link href={`/blog/${post.nextPost.slug}`}>
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="bg-card rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-medium mb-4">Newsletter</h3>
                  <p className="text-muted-foreground mb-4">
                    Subscribe to get notified about new posts and updates.
                  </p>
                  <NewsletterSignup />
                </div>
                
                <div className="bg-card rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-medium mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <Badge key={category} variant="outline" className="py-1.5">
                        <Tag className="h-3.5 w-3.5 mr-1" />
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {relatedPosts.length > 0 && (
                  <div className="bg-card rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-medium mb-4">Related Posts</h3>
                    <RelatedPosts posts={relatedPosts} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}