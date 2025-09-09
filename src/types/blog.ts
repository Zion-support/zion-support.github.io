export interface BlogAuthor {
  name: string;
  title: string;
  avatarUrl: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  /**
   * Descriptive alt text for the featured image
   */
  featuredImageAlt?: string;
  isFeatured?: boolean;
  isPublished?: boolean;
  createdBy?: string;
  updatedAt?: string;
}

// Type for generated blog content
export interface GeneratedBlogContent {
  title: string;
  metaDescription: string;
  body: string;
  tags: string[];
  tweetSummary?: string;
  imagePrompt?: string;
}

  const authors = [
    { name: 'John Doe', avatar: '/avatars/john.jpg' },
    { name: 'Jane Smith', avatar: '/avatars/jane.jpg' },
    { name: 'Mike Johnson', avatar: '/avatars/mike.jpg' },
  ];

  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];

  return {
    id: Math.random().toString(36).substr(2, 9),
    title: randomTitle,
    content: 'This is a sample blog post content...',
    excerpt: 'A brief excerpt from the blog post...',
    author: randomAuthor,
    publishedAt: new Date().toISOString(),
    tags: ['AI', 'Technology', 'Business'],
    image: '/images/blog-placeholder.jpg',
    readTime: Math.floor(Math.random() * 10) + 5,
  };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    content: 'Artificial Intelligence is revolutionizing how businesses operate...',
    excerpt: 'Discover how AI is transforming business operations and creating new opportunities.',
    author: { name: 'John Doe', avatar: '/avatars/john.jpg' },
    publishedAt: '2024-01-15T10:00:00Z',
    tags: ['AI', 'Business', 'Technology'],
    image: '/images/ai-business.jpg',
    readTime: 8,
  },
  {
    id: '2',
    title: 'Building Scalable Web Applications',
    content: 'Scalability is crucial for modern web applications...',
    excerpt: 'Learn the best practices for building web applications that can handle growth.',
    author: { name: 'Jane Smith', avatar: '/avatars/jane.jpg' },
    publishedAt: '2024-01-10T14:30:00Z',
    tags: ['Web Development', 'Scalability', 'Architecture'],
    image: '/images/web-apps.jpg',
    readTime: 12,
  },
];
