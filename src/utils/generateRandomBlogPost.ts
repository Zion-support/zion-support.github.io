import { BlogPost } from '@/types/blog';

const topics = [
  'Artificial Intelligence',
  'Machine Learning',
  'Quantum Computing',
  'Cybersecurity',
  'Cloud Computing',
  'Blockchain',
  'Internet of Things',
  'Data Science',
  'DevOps',
  'Software Development'
];

const adjectives = [
  'Revolutionary',
  'Innovative',
  'Cutting-edge',
  'Advanced',
  'Modern',
  'Efficient',
  'Scalable',
  'Secure',
  'Intelligent',
  'Automated'
];

const nouns = [
  'Solutions',
  'Technologies',
  'Platforms',
  'Systems',
  'Applications',
  'Infrastructure',
  'Architecture',
  'Frameworks',
  'Tools',
  'Services'
];

const contentSnippets = [
  'In today\'s rapidly evolving technological landscape, businesses are constantly seeking innovative solutions to stay ahead of the competition.',
  'The integration of artificial intelligence and machine learning has transformed how organizations approach complex problem-solving.',
  'Quantum computing represents the next frontier in computational power, offering unprecedented capabilities for scientific research and business applications.',
  'Cybersecurity has become paramount as digital transformation accelerates across all industries.',
  'Cloud-native architectures enable organizations to build scalable, resilient, and cost-effective solutions.',
  'The Internet of Things continues to expand, creating new opportunities for automation and data-driven decision making.',
  'Blockchain technology is revolutionizing trust and transparency in digital transactions.',
  'Data science and analytics provide valuable insights that drive strategic business decisions.',
  'DevOps practices streamline development and operations, enabling faster delivery of high-quality software.',
  'Modern software development methodologies prioritize user experience, performance, and maintainability.'
];

export function generateRandomBlogPost(): BlogPost {
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const contentSnippet = contentSnippets[Math.floor(Math.random() * contentSnippets.length)];
  
  const title = `${adjective} ${noun} for ${topic}`;
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    title,
    slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    excerpt: `A comprehensive guide to ${title.toLowerCase()} and its impact on modern technology.`,
    content: contentSnippet,
    author: {
      name: 'Zion Tech Group',
      avatar: '/avatars/zion.jpg',
      avatarUrl: '/avatars/zion.jpg',
      bio: 'Leading AI & IT Solutions Provider'
    },
    publishedAt: new Date().toISOString(),
    publishedDate: new Date().toISOString().split('T')[0],
    tags: [topic, 'Technology', 'Innovation'],
    category: 'Technology',
    readTime: Math.floor(Math.random() * 10) + 5,
    featuredImage: `/blog/${Math.random().toString(36).substr(2, 9)}.jpg`
  };
}

export function generateMultipleBlogPosts(count: number): BlogPost[] {
  const posts: BlogPost[] = [];
  for (let i = 0; i < count; i++) {
    posts.push(generateRandomBlogPost());
  }
  return posts;
}
