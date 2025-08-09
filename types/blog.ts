export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishDate: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  slug: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar: string;
  replies?: Comment[];
}