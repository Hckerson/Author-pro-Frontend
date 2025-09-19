"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Post } from "@/types/blog";

interface BlogSearchProps {
  className?: string;
  posts: Post[];
  setPost: (post: Post[]) => void;
}

export default function 
BlogSearch({
  className = "",
  posts,
  setPost,
}: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [allPost, setAllPost] = useState<Post[]>();

  useEffect(() => {
    setAllPost(posts);
    console.log(posts)
  }, []);

  const handleSearch = () => {
    if (searchTerm.length < 1) setPost(allPost || [])
    // TODO: Implement search functionality
    const post = allPost?.filter((post) => {
      return [post.author, ...post.categories, post.slug, post.title].some((r) =>
        r?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    if (post) setPost(post);

  };

  return (
    <form className={className}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search articles..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch();
          }}
        />
      </div>
    </form>
  );
}
