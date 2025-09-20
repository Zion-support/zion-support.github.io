interface MarketplaceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

const sampleTitles = [
  "AI-Powered Analytics Platform",
  "Cybersecurity Assessment Tool",
  "Cloud Migration Service",
  "IoT Edge Computing Solution",
  "Quantum Computing Hardware",
  "Data Science Consulting",
  "Blockchain Development Service",
  "Machine Learning Platform",
  "DevOps Automation Tool",
  "Network Security Solution"
];

const sampleDescriptions = [
  "A comprehensive solution for modern businesses",
  "Cutting-edge technology for the digital age",
  "Professional services with proven results",
  "Innovative approach to complex problems",
  "Scalable and reliable platform",
  "Expert consultation and implementation",
  "Advanced features and capabilities",
  "Industry-leading performance and security"
];

const categories = [
  "AI & Machine Learning",
  "Cybersecurity",
  "Cloud Computing",
  "Data Analytics",
  "Blockchain",
  "IoT",
  "DevOps",
  "Consulting"
];

export function generateRandomListing(): MarketplaceItem {
  const randomTitle = sampleTitles[Math.floor(Math.random() * sampleTitles.length)];
  const randomDescription = sampleDescriptions[Math.floor(Math.random() * sampleDescriptions.length)];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomPrice = Math.floor(Math.random() * 10000) + 1000;

  return {
    id: Math.random().toString(36).substr(2, 9),
    name: randomTitle,
    description: randomDescription,
    price: randomPrice,
    category: randomCategory
  };
}