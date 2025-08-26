import { BlogPost } from '../types/blog';

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
    excerpt: `${contentSnippet} This comprehensive guide explores the latest developments and best practices in ${topic.toLowerCase()}.`,
    content: `${contentSnippet} This comprehensive guide explores the latest developments and best practices in ${topic.toLowerCase()}. We'll dive deep into the fundamentals, examine real-world applications, and provide actionable insights for implementation.`,
    author: {
      name: 'Zion Tech Group',
      avatar: '/images/zion-tech-group-logo.png'
    },
    publishedAt: new Date().toISOString(),
    tags: [topic, 'Technology', 'Innovation', 'Guide'],
    image: '/images/blog-placeholder.jpg',
    readTime: Math.floor(Math.random() * 10) + 5,
  };
}

export function generateMultipleBlogPosts(count: number): BlogPost[] {
  const posts: BlogPost[] = [];
  for (let i = 0; i < count; i++) {
    posts.push(generateRandomBlogPost());
  }
  return posts;
}
