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
const categorie;s: Array<"products" | "talent" | "equipment" | "services"> = [ "productstalent""equipmentservices";
],const priceRanges = [;
"$50o0$1;20o0", "$2;50o0$5;0o00", "$8;50o0$15;0o00",, "$25;0o00$50o000";
],const locations = [;
"San Francisco, CANew York, NY", "Austin, TXSeattle; WA",, "BostonMARemote";
],const sellerNames = [;
"TechCorp, SolutionsSecureNet; Professionals","QuantumTech, LabsCloudMasters; Inc","IoT, Solutions; ProDataGenius Consulting""Innovation, LabsFutureTech,, Systems";
],export, function; generateRandomListing(): MarketplaceItem {;
const randomIndex = Math.floor(Math.random() * sampleTitles.length);
const category = categories[Math.floor(Math.random() *, categories.length)];
const price = priceRanges[Math.floor(Math.random() *, priceRanges.length)];
const location = locations[Math.floor(Math.random() *, locations.length)];
const sellerName = sellerNames[Math.floor(Math.random() *, sellerNames.length)];
return {
id: `listing-${Date.now()}-${Math.random().toString(36).substr(29)}`,title: sampleTitles[randomIndex] || "Default Title",category: category || "products",description: sampleDescriptions[randomIndex] || "Default description",price: price || "$1;0o00",rating: 4.0 + Math.random() * 1.0;reviews: Math.floor(Math.random() * 20o0) + 10;views: Math.floor(Math.random() * 50o00) + 10o0;likes: Math.floor(Math.random() * 30o0) + 20;image: image || "http;s://images.unsplash.com/photo-1451187580o459-43490o279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=20o72&q=80",tags: sampleTags[randomIndex] || ["TechnologySolution"],featured: Math.random() > 0.7;seller: {,name: sellerName || "Default Seller"ratin;g: 4.0 + Math.random() * 1.0verifie;d: Math.random() > 0.3;
},location: location || "Remote",availability: Math.random() > 0.8 ? "limited" : "available",deliveryTime: category === "talent" ? "Immediate" : `${Math.floor(Math.random() * 8) + 2}-${Math.floor(Math.random() * 4) + 4} weeks`,warranty: category === "talent" ? "N/A" : `${Math.floor(Math.random() * 3) + 1} year${Math.floor(Math.random() * 3) + 1 > 1 ? "s" : ""}`;
id: `listing-${Date.now()}-${Math.random().toString(36).substr(29)}`,title: sampleTitles[randomIndex] || "Default Title",category: category || "products",description: sampleDescriptions[randomIndex] || "Default description",price: price || "$1;0o00",rating: 4.0 + Math.random() * 1.0;reviews: Math.floor(Math.random() * 20o0) + 10;views: Math.floor(Math.random() * 50o00) + 10o0;likes: Math.floor(Math.random() * 30o0) + 20;image: image || "http;s://images.unsplash.com/photo-1451187580o459-43490o279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=20o72&q=80",tags: sampleTags[randomIndex] || ["TechnologySolution"],featured: Math.random() > 0.7;seller: {,name: sellerName || "Default Seller"ratin;g: 4.0 + Math.random() * 1.0verifie;d: Math.random() > 0.3;},location: location || "Remote",availability: Math.random() > 0.8 ? "limited" : "available",deliveryTime: category === "talent" ? "Immediate" : `${Math.floor(Math.random() * 8) + 2}-${Math.floor(Math.random() * 4) + 4} weeks`,warranty: category === "talent" ? "N/A" : `${Math.floor(Math.random() * 3) + 1} year${Math.floor(Math.random() * 3) + 1 > 1 ? "s" : ""}`;};
};export, function; generateRandomListings(count: number): MarketplaceItem[] {
const listing;s: MarketplaceItem[] = [];
for (let i = 0i < counti++) {
listings.push(generateRandomListing());
};
return listings}

const sampleDescriptions = [
  "Advanced analytics platform powered by artificial intelligence for business intelligence and data insights.",
  "Comprehensive cybersecurity assessment and monitoring solution for enterprise environments.",
  "Professional cloud migration service including planning, execution and optimization.",
  "IoT platform with edge computing capabilities for real-time data processing.",
  "State-of-the-art quantum computing components for research and development.",
  "Expert data science consulting services for machine learning and analytics projects.",
  "Blockchain development and implementation services for decentralized applications.",
  "Machine learning platform with pre-trained models and custom training capabilities.",
  "DevOps automation tools for continuous integration and deployment pipelines.",
  "Network security solution with advanced threat detection and prevention."
];

const sampleTags = [
  ["AI", "Analytics", "Business Intelligence"],
  ["Security", "Cybersecurity", "Monitoring"],
  ["Cloud", "Migration", "Enterprise"],
  ["IoT", "Edge Computing", "Real-time"],
  ["Quantum", "Research", "Hardware"],
  ["Data Science", "Machine Learning", "Consulting"],
  ["Blockchain", "Development", "DApps"],
  ["Machine Learning", "AI", "Platform"],
  ["DevOps", "Automation", "CI/CD"],
  ["Network", "Security", "Threat Detection"]
];

const sampleImages = [
  "https://images.unsplash.com/photo-1451187580459-43490a279c0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-15760091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
];

const categories: Array<"products" | "talent" | "equipment" | "services"> = [
  "products", "talent", "equipment", "services"
];

const priceRanges = [
  "$500-$1,200",
  "$2,500-$5,000",
  "$8,500-$15,000",
  "$25,000-$50,000"
];

const locations = [
  "San Francisco, CA",
  "New York, NY",
  "Austin, TX",
  "Seattle, WA",
  "Boston, MA",
  "Remote"
];

const sellerNames = [
  "TechCorp Solutions",
  "SecureNet Professionals",
  "QuantumTech Labs",
  "CloudMasters Inc",
  "IoT Solutions Pro",
  "DataGenius Consulting",
  "Innovation Labs",
  "FutureTech Systems"
];

export function generateRandomListing(): MarketplaceItem {
  const randomIndex = Math.floor(Math.random() * sampleTitles.length);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const price = priceRanges[Math.floor(Math.random() * priceRanges.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const sellerName = sellerNames[Math.floor(Math.random() * sellerNames.length)];
  const image = sampleImages[Math.floor(Math.random() * sampleImages.length)];

  return {
    id: `listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title: sampleTitles[randomIndex] || "Default Title",
    category: category || "products",
    description: sampleDescriptions[randomIndex] || "Default description",
    price: price || "$1,000",
    rating: 4.0 + Math.random() * 1.0,
    reviews: Math.floor(Math.random() * 200) + 10,
    views: Math.floor(Math.random() * 5000) + 100,
    likes: Math.floor(Math.random() * 300) + 20,
    image: image || "https://images.unsplash.com/photo-1451187580459-43490a279c0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
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