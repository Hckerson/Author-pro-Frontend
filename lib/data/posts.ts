import { Post } from '@/types/blog';
import { ReactNode } from 'react';

// Sample data for blog posts
export const allPosts: Post[] = [
  {
    title: 'The Art of Storytelling: Creating Memorable Characters',
    slug: 'art-of-storytelling-characters',
    excerpt: 'Creating characters that resonate with readers is essential for any storyteller. Learn how to craft complex, believable characters that drive your narrative forward.',
    content: 'In the world of storytelling, characters are the heart and soul of your narrative. They are the ones who bring your story to life, evoke emotions, and keep readers engaged. In this post, we will explore the art of character creation, focusing on how to develop memorable and relatable characters that resonate with your audience.\n\n### Understanding Your Characters\n\nBefore you start writing, it\'s crucial to understand who your characters are. What are their motivations, fears, and desires? What makes them tick? Spend time developing detailed character profiles that include their background, personality traits, and relationships with other characters. This will help you create depth and complexity in your storytelling.\n\n### Making Characters Relatable\n\nReaders connect with characters who feel real and relatable. To achieve this, give your characters flaws and vulnerabilities. Show their struggles and triumphs, allowing readers to empathize with their journey. Use dialogue and actions that reflect their personality and background, making them feel authentic.\n\n### The Role of Conflict\n\nConflict is essential for character development. It challenges your characters, forcing them to grow and evolve throughout the story. Whether it\'s internal conflict or external obstacles, ensure that your characters face meaningful challenges that test their resolve and shape their arc.\n\n### Conclusion\n\nCreating memorable characters is an art that requires careful thought and planning. By understanding your characters deeply, making them relatable, and placing them in conflict, you can craft stories that resonate with readers long after they turn the last page.',
    date: 'April 24, 2025',
    coverImage: 'https://images.pexels.com/photos/6344231/pexels-photo-6344231.jpeg',
    readingTime: 5,
    categories: ['Writing Tips', 'Fiction'],
    previousPost: {
      title: 'Finding Your Writing Voice',
      slug: 'finding-your-writing-voice',
    },
    nextPost: {
      title: 'Mastering Dialogue in Fiction',
      slug: 'mastering-dialogue-fiction',
    },
  },
  // ... other posts with the same structure
];

// Sample data for featured posts
export const featuredPosts = allPosts.slice(0, 5);


// Function to get all posts
export function getAllPosts(): Post[] {
  return allPosts;
}

// Function to get a post by slug
export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}

// Function to get related posts
export function getRelatedPosts(currentSlug: string, categories: string[]): Post[] {
  return allPosts
    .filter((post) => {
      // Don't include the current post
      if (post.slug === currentSlug) return false;
      
      // Check if there's any category overlap
      return post.categories.some((category) => categories.includes(category));
    })
    .slice(0, 3); // Limit to 3 related posts
}

// Function to get all categories with post counts
export function getAllCategories(): { name: string; count: number }[] {
  const categoryCounts: Record<string, number> = {};
  
  allPosts.forEach((post) => {
    post.categories.forEach((category) => {
      if (categoryCounts[category]) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    });
  });
  
  return Object.entries(categoryCounts).map(([name, count]) => ({ name, count }));
}