export function generateSearchSuggestions() {
  return [
    "AI Services",
    "Cloud Computing",
    "Cybersecurity",
    "Micro SAAS",
    "IT Infrastructure",
    "Quantum Computing",
    "Blockchain Solutions",
    "IoT Services",
    "Data Analytics",
    "Machine Learning",
    "DevOps Services",
    "Mobile Development",
    "Web Development",
    "Digital Transformation",
    "Enterprise Solutions",
    "Startup Services",
    "Consulting",
    "Training",
    "Support",
    "Maintenance"
  ];
}

// Mock marketplace items data
export const marketplaceItems = [
  {
    id: 1,
    title: "AI-Powered Business Intelligence Platform",
    description: "Advanced analytics and machine learning insights for enterprise decision-making",
    category: "AI Services",
    price: "$2,500/month",
    rating: 4.8,
    location: "Global",
    availability: "Available",
    tags: ["AI", "Analytics", "Business Intelligence", "Machine Learning"],
    images: ["/images/ai-bi-platform.jpg"]
  },
  {
    id: 2,
    title: "Cloud DevOps Automation Suite",
    description: "Complete infrastructure automation and deployment pipeline solution",
    category: "Cloud Computing",
    price: "$1,800/month",
    rating: 4.7,
    location: "Global",
    availability: "Available",
    tags: ["DevOps", "Cloud", "Automation", "Infrastructure"],
    images: ["/images/cloud-devops.jpg"]
  },
  {
    id: 3,
    title: "Cybersecurity Threat Detection System",
    description: "AI-powered security monitoring and threat prevention platform",
    category: "Cybersecurity",
    price: "$3,200/month",
    rating: 4.9,
    location: "Global",
    availability: "Available",
    tags: ["Security", "AI", "Threat Detection", "Monitoring"],
    images: ["/images/cybersecurity.jpg"]
  },
  {
    id: 4,
    title: "Micro SaaS CRM Platform",
    description: "Lightweight customer relationship management for small businesses",
    category: "Micro SAAS",
    price: "$99/month",
    rating: 4.6,
    location: "Global",
    availability: "Available",
    tags: ["CRM", "SaaS", "Business", "Customer Management"],
    images: ["/images/micro-crm.jpg"]
  },
  {
    id: 5,
    title: "IT Infrastructure Management",
    description: "Comprehensive IT infrastructure monitoring and management solution",
    category: "IT Infrastructure",
    price: "$1,500/month",
    rating: 4.5,
    location: "Global",
    availability: "Available",
    tags: ["IT", "Infrastructure", "Monitoring", "Management"],
    images: ["/images/it-infrastructure.jpg"]
  }
];

// Marketplace filters configuration
export const marketplaceFilters = {
  productTypes: [
    "AI Services",
    "Cloud Computing", 
    "Cybersecurity",
    "Micro SAAS",
    "IT Infrastructure",
    "Quantum Computing",
    "Blockchain Solutions",
    "IoT Services",
    "Data Analytics",
    "Machine Learning",
    "DevOps Services",
    "Mobile Development",
    "Web Development",
    "Digital Transformation",
    "Enterprise Solutions",
    "Startup Services",
    "Consulting",
    "Training",
    "Support",
    "Maintenance"
  ],
  locations: [
    "Global",
    "North America",
    "Europe",
    "Asia Pacific",
    "Latin America",
    "Middle East",
    "Africa"
  ],
  availability: [
    "Available",
    "Coming Soon",
    "Limited Availability",
    "Custom Quote Required"
  ]
};