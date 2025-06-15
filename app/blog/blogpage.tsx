"use client";
import Link from "next/link";
import { Post } from "@/types/blog";
import { Bookmark } from "lucide-react";
import BlogList from "@/components/blog/BlogList";
import { Skeleton } from "@/components/ui/skeleton";
import BlogSearch from "@/components/blog/BlogSearch";
import { Suspense, useState, useEffect } from "react";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";

export type category = {
  name: string;
  count: number;
};

export type Urls = { slug: string; img: string };

export default function BlogPage({
  post,
  search,
}: {
  post: Post[];
  search: { categories: string[] };
}) {
  const [posts, setPost] = useState<Post[]>();
  const [categories, setCategories] = useState<category[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPost(post);
    const selectCategories = () => {
      try {
        const categoryCount: Record<string, number> = {};
        post.forEach((post) => {
          post.categories.forEach((category) => {
            if (categoryCount[category]) {
              categoryCount[category]++;
            } else {
              categoryCount[category] = 1;
            }
          });
        });
        const categoriesArray = Object.entries(categoryCount).map(
          ([name, count]) => ({ name, count })
        );
        setCategories(categoriesArray);
      } catch (error) {
        console.log(`Error fetching posts category`);
      } finally {
        setIsLoading(false);
      }
    };

    selectCategories();
  }, [post]);

  useEffect(() => {
    if (posts && search.categories.length > 0) {
      const filtered = posts?.filter((post) =>
        [...post.categories].some((category) =>
          search.categories.some(
            (searchCategories) =>
              category.toString().toLowerCase() == searchCategories.toString().toLowerCase()
          )
        )
      );
      setPost(filtered)
    }
  }, [search.categories]);
  if (isLoading) {
    return <BlogListSkeleton />;
  }
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thoughts, stories, and ideas on writing, publishing, and creative
              living.
            </p>
            <Link
              href={"/blog/create"}
              className="px-4 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md py-3 flex justify-center w-fi items-center"
              dir="rtl"
            >
              Create post
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:pb-24 pt-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <BlogSearch
                posts={posts || []}
                setPost={setPost}
                className="mb-8 lg:hidden"
              />
              <Suspense fallback={<BlogListSkeleton />}>
                <BlogList posts={posts || []} />
              </Suspense>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24">
                <BlogSearch
                  posts={posts || []}
                  setPost={setPost}
                  className="mb-8 hidden lg:block"
                />

                <div className="bg-card rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-accent" /> Categories
                  </h3>
                  <BlogCategoryFilter categories={categories || []} />
                </div>

                <div className="bg-card rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-medium mb-4">Featured Posts</h3>
                  <ul className="space-y-4">
                    {posts?.filter((post)=>post.featured == true).map((post) => (
                      <li
                        key={post.slug}
                        className="border-b border-border pb-4 last:border-0 last:pb-0"
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-accent transition-colors"
                        >
                          <h4 className="text-base font-medium mb-1">
                            {post.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {post.date}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogListSkeleton() {
  return (
    <div className="space-y-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex flex-col md:flex-row gap-6">
          <Skeleton className="h-48 md:h-32 md:w-48 rounded-lg" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      ))}
    </div>
  );
}
