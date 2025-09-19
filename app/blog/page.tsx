import BlogPage from "./blogpage";
import { Post } from "@/types/blog";
import axios from "axios";
export const metadata = {
  title: "Blog | Author Portfolio & Blog",
  description: "Explore my latest articles, stories, and writing tips",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default async function Blog(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const posts: Post[] = [];
  try {
    const response = await axios.get("http://localhost:4000/posts", {
      withCredentials: true,
    });
    const allPost = response.data;
    for (let i = 0; i < allPost.length; i++) {
      const currentPost = allPost[i];
      const post = {
        title: currentPost.title,
        slug: currentPost.slug,
        excerpt: currentPost.excerpt,
        content: currentPost.content,
        date: currentPost.date.split("T")[0],
        coverImg: currentPost.coverImg,
        featured: currentPost.featured,
        readingTime: currentPost.readingTime,
        categories: currentPost.categories,
        status: currentPost.status,
        author: currentPost.author,
        authorImg: currentPost.authorImg,
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
  } catch (error) {
    console.log(`Error fetching post`);
  }

  return (
    <BlogPage
      post={posts}
      search={{
        categories: searchParams.categories?.toString().split(",") || [],
      }}
    />
  );
}
