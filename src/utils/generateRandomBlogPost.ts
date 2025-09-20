interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
}

export function generateRandomBlogPost(): BlogPost {
  const titles = [
    "The Future of AI in Technology",
    "Building Scalable Web Applications",
    "Machine Learning Best Practices",
    "Cloud Computing Trends",
    "Cybersecurity in 2024"
  ];

  const authors = [
    "John Doe",
    "Jane Smith",
    "Mike Johnson",
    "Sarah Wilson",
    "David Brown"
  ];

  const tags = [
    "AI",
    "Technology",
    "Web Development",
    "Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "Programming",
    "Data Science"
  ];

  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, 3);

  return {
    id: Math.random().toString(36).substr(2, 9),
    title: randomTitle,
    content: `This is a sample blog post about ${randomTitle.toLowerCase()}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    author: randomAuthor,
    date: new Date().toISOString(),
    tags: randomTags
  };
}