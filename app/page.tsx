"use client";
import Link from "next/link";
import { Post } from "@/types/blog";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Star,
  PenTool,
  Zap,
} from "lucide-react";
import FeaturedPostCard from "@/components/blog/FeaturedPostCard";
import NewsletterSignup from "@/components/common/NewsletterSignup";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [posts, setposts] = useState<Post[]>();
  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts", {
          withCredentials: true,
        });
        const allPost = response.data;
        const posts = [];
        for (let i = 0; i < allPost.length; i++) {
          const currentPost = allPost[i];
          const post = {
            title: currentPost.title,
            slug: currentPost.slug,
            excerpt: currentPost.excerpt,
            content: currentPost.content,
            date: currentPost.date.split("T")[0],
            coverImg: currentPost.coverImg,
            readingTime: currentPost.readingTime,
            categories: currentPost.categories,
            featured: currentPost.featured,
            status: currentPost.status,
            author: {
              name: currentPost.author,
              image: currentPost.authorimage,
            },
            previousPost:
              i > 0
                ? {
                    title: allPost[i - 1].title,
                    slug: allPost[i - 1].slug,
                  }
                : undefined,
            nextPost:
              i < allPost.lenght - 1
                ? {
                    title: allPost[i + 1].title,
                    slug: allPost[i + 1].slug,
                  }
                : undefined,
          };
          posts.push(post);
        }
        setposts(posts);
      } catch (error) {
        console.log(`Error fetching post`);
      }
    };
    fetchFeaturedPosts();
  }, []);
  useEffect(() => {
    console.log(posts?.[1].categories);
  });

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 z-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-20">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Award-Winning Author & Content Creator
            </div>
            <h1 className="mb-6 gradient-text">
              Crafting Stories That Inspire & Transform
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional author and content strategist helping brands and
              individuals tell their stories with impact. From compelling
              narratives to strategic content, I bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="btn-hover text-lg px-8 py-6">
                <Link href="/blog">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="btn-hover text-lg px-8 py-6"
              >
                <Link href="/services">
                  <PenTool className="mr-2 h-5 w-5" />
                  Writing Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">
                  Published Articles
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">
                  Books Published
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10k+</div>
                <div className="text-sm text-muted-foreground">
                  Readers Reached
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Featured Content
            </div>
            <h2 className="mb-4">Latest Insights & Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover my latest thoughts on writing, storytelling, and the
              creative process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts?.slice(0, 3).map((post) => (
              <div key={post.slug} className="scale-in">
                <FeaturedPostCard post={post} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="btn-hover">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              Professional Services
            </div>
            <h2 className="mb-4">How I Can Help You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From content strategy to book writing, I offer comprehensive
              writing services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <PenTool className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Writing</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                High-quality, engaging content that resonates with your audience
                and drives results for your business.
              </p>
              <Button
                asChild
                variant="ghost"
                className="p-0 h-auto font-medium text-primary hover:text-primary/80"
              >
                <Link href="/services">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Book Writing</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From concept to completion, I help bring your book ideas to life
                with professional ghostwriting services.
              </p>
              <Button
                asChild
                variant="ghost"
                className="p-0 h-auto font-medium text-primary hover:text-primary/80"
              >
                <Link href="/services">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Strategy</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Strategic content planning and editorial guidance to build your
                brand and engage your audience effectively.
              </p>
              <Button
                asChild
                variant="ghost"
                className="p-0 h-auto font-medium text-primary hover:text-primary/80"
              >
                <Link href="/services">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-hover">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="mb-4">Stay Connected</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Get exclusive writing tips, industry insights, and early
                    access to new content. Join a community of writers and
                    readers who are passionate about great storytelling.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Weekly insights
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      No spam, ever
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Unsubscribe anytime
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-96">
                  <NewsletterSignup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
