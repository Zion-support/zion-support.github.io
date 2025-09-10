import { ProductListing } from "@/types/listings";
import { REGIONS } from "@/data/filterConstants";

// Category definitions with average price ranges
const categories = [
  { name: "AI Models & APIs", priceRange: [1000, 3000] },
  { name: "Services", priceRange: [3000, 8000] },
  { name: "Content Creation", priceRange: [200, 800] },
  { name: "Data Analysis", priceRange: [1500, 4000] },
  { name: "Computer Vision", priceRange: [700, 1500] },
  { name: "Virtual Assistants", priceRange: [2000, 4000] },
  { name: "Voice & Speech", priceRange: [1000, 2000] },
  { name: "Developer Tools", priceRange: [300, 1000] },
  { name: "Business Solutions", priceRange: [8000, 20000] },
  { name: "Research", priceRange: [200, 500] },
  { name: "Robotics", priceRange: [5000, 10000] },
  { name: "Workstations", priceRange: [4000, 7000] },
  { name: "Servers", priceRange: [15000, 30000] }
];

const titlePhrases = [
  "Professional Suite",
  "Enterprise Package",
  "Starter Kit",
  "Integration Service",
  "Optimization Tools",
  "Automation Platform",
  "Consulting Bundle",
  "Deployment Toolkit",
  "Managed Solution",
  "Cloud Edition"
];

const providers = [
  "AI Solutions Inc.",
  "DataMinds",
  "TechGear Pro",
  "ContentGenius",
  "InsightAnalytica",
  "VisionTech",
  "AssistantCraft",
  "VoiceIntelligence",
  "CodeGenius",
  "BusinessAI Consultants",
  "RoboticsMind",
  "CloudWorks",
  "DataAnalyticsPro",
  "AIVault",
  "DevOps Masters"