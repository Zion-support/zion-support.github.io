interface MarketplaceItem {
  id: string;
  title: string;
  category: "products" | "talent" | "equipment" | "services";
  description: string;
  price: string;
  rating: number;
  reviews: number;
  views: number;
  likes: number;
  image: string;
  tags: string[];
  featured: boolean;
  seller: {
    name: string;
    rating: number;
    verified: boolean;
  };
  location: string;
  availability: string;
  deliveryTime: string;
  warranty: string;
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
  "Revolutionary AI-powered analytics platform for enterprise data insights",
  "Comprehensive cybersecurity assessment and protection services",
  "Expert cloud migration and optimization solutions",
  "Advanced IoT edge computing infrastructure and services",
  "Cutting-edge quantum computing hardware and software",
  "Professional data science consulting and implementation",
  "Secure blockchain development and smart contract services",
  "Scalable machine learning platform for business applications",
  "Automated DevOps tools and CI/CD pipeline solutions",
  "Enterprise-grade network security and monitoring systems"
];

const sampleTags = [
  ["AI", "Analytics", "Enterprise"],
  ["Security", "Assessment", "Protection"],
  ["Cloud", "Migration", "Optimization"],
  ["IoT", "Edge Computing", "Infrastructure"],
  ["Quantum", "Computing", "Hardware"],
  ["Data Science", "Consulting", "Analytics"],
  ["Blockchain", "Development", "Smart Contracts"],
  ["Machine Learning", "Platform", "AI"],
  ["DevOps", "Automation", "CI/CD"],
  ["Network", "Security", "Monitoring"]
];

const categories: Array<"products" | "talent" | "equipment" | "services"> = [
  "products", "talent", "equipment", "services"
];

const priceRanges = [
  "$500-$1,200", "$2,500-$5,000", "$8,500-$15,000", "$25,000-$50,000"
];

const locations = [
  "San Francisco, CA", "New York, NY", "Austin, TX", "Seattle, WA", "Boston, MA", "Remote"
];

const sellerNames = [
  "TechCorp Solutions", "SecureNet Professionals", "QuantumTech Labs", 
  "CloudMasters Inc", "IoT Solutions", "ProDataGenius Consulting", 
  "Innovation Labs", "FutureTech Systems"
];

export function generateRandomListing(): MarketplaceItem {
  const randomIndex = Math.floor(Math.random() * sampleTitles.length);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const price = priceRanges[Math.floor(Math.random() * priceRanges.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const sellerName = sellerNames[Math.floor(Math.random() * sellerNames.length)];
  
  return {
    id: `listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title: sampleTitles[randomIndex] || "Default Title",
    category: category || "products",
    description: sampleDescriptions[randomIndex] || "Default description",
    price: price || "$1,000",
    rating: 4.0 + Math.random() * 1.0,
    reviews: Math.floor(Math.random() * 200) + 10,
    views: Math.floor(Math.random() * 5000) + 1000,
    likes: Math.floor(Math.random() * 300) + 20,
    image: "https://images.unsplash.com/photo-1451187580459-43490a279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    tags: sampleTags[randomIndex] || ["Technology", "Solution"],
    featured: Math.random() > 0.7,
    seller: {
      name: sellerName || "Default Seller",
      rating: 4.0 + Math.random() * 1.0,
      verified: Math.random() > 0.3
    },
    location: location || "Remote",
    availability: Math.random() > 0.8 ? "limited" : "available",
    deliveryTime: category === "talent" ? "Immediate" : `${Math.floor(Math.random() * 8) + 2}-${Math.floor(Math.random() * 4) + 4} weeks`,
    warranty: category === "talent" ? "N/A" : `${Math.floor(Math.random() * 3) + 1} year${Math.floor(Math.random() * 3) + 1 > 1 ? "s" : ""}`
  };
}

export function generateRandomListings(count: number): MarketplaceItem[] {
  const listings: MarketplaceItem[] = [];
  for (let i = 0; i < count; i++) {
    listings.push(generateRandomListing());
  }
  return listings;
}