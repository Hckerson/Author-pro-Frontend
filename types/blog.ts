export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string | React.ReactNode;
  date: string;
  coverImage: string;
  readingTime: number;
  categories: string[];
  tags?: string[];
  status?: 'draft' | 'published';
  author?: {
    name: string;
    image: string;
  };
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
  status: 'draft' | 'published';
}