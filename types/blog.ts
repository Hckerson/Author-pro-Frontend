export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string | React.ReactNode;
  date: string;
  coverImg: string;
  readingTime: number;
  featured: boolean;
  categories: string[];
  status?: "DRAFTED" | "PUBLISHED";
  author?: string;
  authorImg?: string;
  previousPost?: {
    title: string;
    slug: string;
  };
  nextPost?: {
    title: string;
    slug: string;
  };
}

export interface BlogFormData {
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage: string;
  category: string;
  status: "draft" | "published";
}
