export const generateRandomBlogPost = () => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    title: "Sample Blog Post",
    excerpt: "This is a sample blog post excerpt for demonstration purposes.",
    content: "This is a sample blog post content. It contains placeholder text that can be replaced with actual content.",
    author: "Zion Team",
    publishedAt: new Date().toISOString(),
    tags: ["AI", "Technology", "Innovation"],
    slug: "sample-blog-post"
  };
};