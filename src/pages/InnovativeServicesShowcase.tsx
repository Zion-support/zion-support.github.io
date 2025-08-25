import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import {
  Bot,
  Shield,
  Cloud,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Settings,
  Users,
  Zap,
  Code,
  Building,
  ArrowRight,
  Brain,
  Lock,
  Cpu,
  Network,
  Palette,
  BarChart3,
  Target,
  Rocket,
  Lightbulb,
  TrendingUp,
  Heart,
  Briefcase,
  Home,
  Truck,
  UserCheck,
  MessageCircle,
  FileText,
  Calendar,
  CheckCircle,
  Star,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

interface InnovativeService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  price: number;
  currency: string;
  pricingModel: string;
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  websiteUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
}

const INNOVATIVE_SERVICES: InnovativeService[] = [
  // AI-Powered Financial Services
  {
    id: "ai-powered-financial-advisory-platform",
    title: "AI-Powered Financial Advisory & Wealth Management Platform",
    description: "Intelligent financial advisory platform that provides personalized investment recommendations, portfolio optimization, and automated wealth management using advanced AI algorithms.",
    category: "Financial Technology",
    subcategory: "Wealth Management",
    icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
    features: [
      "AI-driven investment recommendations",
      "Portfolio optimization algorithms",
      "Risk assessment and management",
      "Tax optimization strategies",
      "Real-time market analysis",
      "Automated rebalancing",
      "Goal-based planning",
      "Multi-account aggregation",
      "Compliance monitoring",
      "Client reporting dashboard"
    ],
    benefits: [
      "Increase portfolio returns by 15-25%",
      "Reduce investment fees by 30%",
      "Automated tax optimization",
      "24/7 portfolio monitoring",
      "Personalized financial planning",
      "Regulatory compliance automation"
    ],
    useCases: [
      "Financial advisors",
      "Wealth management firms",
      "Family offices",
      "High-net-worth individuals",
      "Retirement planning",
      "Estate planning"
    ],
    targetAudience: [
      "Financial advisors",
      "Wealth managers",
      "Investment firms",
      "High-net-worth clients",
      "Retirement planners"
    ],
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$3,500 - $12,000/month",
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-financial-advisory"
  },

  // AI-Powered Healthcare Services
  {
    id: "ai-powered-healthcare-diagnostic-platform",
    title: "AI-Powered Healthcare Diagnostic & Treatment Platform",
    description: "Advanced healthcare platform that uses AI to assist medical professionals in diagnosis, treatment planning, and patient care management with predictive analytics.",
    category: "Healthcare Technology",
    subcategory: "Diagnostic AI",
    icon: <Heart className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
    features: [
      "AI-powered diagnostic assistance",
      "Medical image analysis",
      "Treatment recommendation engine",
      "Patient risk assessment",
      "Drug interaction checking",
      "Clinical decision support",
      "Electronic health records integration",
      "Telemedicine capabilities",
      "Compliance with HIPAA/FDA",
      "Real-time monitoring"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce medical errors by 40%",
      "Faster treatment decisions",
      "Better patient outcomes",
      "Cost-effective healthcare",
      "Regulatory compliance"
    ],
    useCases: [
      "Hospitals and clinics",
      "Medical imaging centers",
      "Primary care practices",
      "Specialty medical practices",
      "Telemedicine providers",
      "Medical research institutions"
    ],
    targetAudience: [
      "Healthcare providers",
      "Medical administrators",
      "Clinical researchers",
      "Healthcare IT teams",
      "Medical device companies"
    ],
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$4,200 - $15,000/month",
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-healthcare-diagnostic"
  },

  // AI-Powered Legal Services
  {
    id: "ai-powered-legal-research-assistant",
    title: "AI-Powered Legal Research & Document Analysis Platform",
    description: "Intelligent legal research platform that automates case law analysis, contract review, and legal document generation using advanced AI and natural language processing.",
    category: "Legal Technology",
    subcategory: "Legal Research",
    icon: <FileText className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
    features: [
      "AI-powered case law research",
      "Contract analysis and review",
      "Legal document generation",
      "Precedent identification",
      "Risk assessment tools",
      "Compliance checking",
      "Document comparison",
      "Legal citation management",
      "Multi-jurisdiction support",
      "Client portal integration"
    ],
    benefits: [
      "Reduce research time by 70%",
      "Improve case outcomes",
      "Automated compliance checking",
      "Faster document preparation",
      "Cost-effective legal services",
      "Better client communication"
    ],
    useCases: [
      "Law firms",
      "Corporate legal departments",
      "Government agencies",
      "Legal research institutions",
      "Compliance officers",
      "Contract managers"
    ],
    targetAudience: [
      "Attorneys",
      "Legal researchers",
      "Compliance officers",
      "Legal administrators",
      "Corporate counsel"
    ],
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$2,800 - $8,500/month",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-legal-research"
  },

  // AI-Powered Real Estate Services
  {
    id: "ai-powered-real-estate-analytics-platform",
    title: "AI-Powered Real Estate Analytics & Investment Platform",
    description: "Comprehensive real estate platform that uses AI to analyze market trends, predict property values, and optimize investment strategies with predictive analytics.",
    category: "Real Estate Technology",
    subcategory: "Market Analytics",
    icon: <Home className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
    features: [
      "AI-powered market analysis",
      "Property value prediction",
      "Investment opportunity identification",
      "Market trend forecasting",
      "Comparative market analysis",
      "Risk assessment tools",
      "Portfolio optimization",
      "Market reports generation",
      "Geographic analysis",
      "Investment calculator"
    ],
    benefits: [
      "Improve investment returns by 20-35%",
      "Reduce market research time by 80%",
      "Better risk assessment",
      "Data-driven decisions",
      "Market timing optimization",
      "Portfolio diversification"
    ],
    useCases: [
      "Real estate investors",
      "Property developers",
      "Real estate agents",
      "Investment firms",
      "Property management companies",
      "Real estate consultants"
    ],
    targetAudience: [
      "Real estate investors",
      "Property developers",
      "Real estate professionals",
      "Investment advisors",
      "Property managers"
    ],
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,800 - $5,500/month",
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-real-estate-analytics"
  },

  // AI-Powered Supply Chain Services
  {
    id: "ai-powered-supply-chain-optimization",
    title: "AI-Powered Supply Chain Optimization & Management Platform",
    description: "Intelligent supply chain platform that optimizes inventory, logistics, and procurement using AI to reduce costs, improve efficiency, and enhance visibility.",
    category: "Supply Chain Technology",
    subcategory: "Optimization",
    icon: <Truck className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
    features: [
      "AI-powered demand forecasting",
      "Inventory optimization",
      "Route optimization",
      "Supplier performance analytics",
      "Risk assessment and mitigation",
      "Real-time tracking",
      "Cost optimization",
      "Sustainability metrics",
      "Compliance monitoring",
      "Integration with ERP systems"
    ],
    benefits: [
      "Reduce supply chain costs by 25-40%",
      "Improve inventory turnover by 30%",
      "Faster delivery times",
      "Better supplier relationships",
      "Risk mitigation",
      "Sustainability improvements"
    ],
    useCases: [
      "Manufacturing companies",
      "Retail chains",
      "E-commerce businesses",
      "Logistics providers",
      "Distribution centers",
      "Procurement departments"
    ],
    targetAudience: [
      "Supply chain managers",
      "Operations directors",
      "Logistics coordinators",
      "Procurement officers",
      "Business analysts"
    ],
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$3,200 - $10,000/month",
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-supply-chain-optimization"
  },

  // AI-Powered HR Services
  {
    id: "ai-powered-hr-recruitment-platform",
    title: "AI-Powered HR & Recruitment Platform",
    description: "Intelligent HR platform that automates recruitment, employee management, and workforce analytics using AI to improve hiring quality and employee retention.",
    category: "Human Resources Technology",
    subcategory: "Recruitment",
    icon: <UserCheck className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
    features: [
      "AI-powered candidate screening",
      "Skills assessment automation",
      "Predictive hiring analytics",
      "Employee performance tracking",
      "Retention prediction",
      "Diversity and inclusion metrics",
      "Automated onboarding",
      "Performance review automation",
      "Employee engagement tools",
      "HR analytics dashboard"
    ],
    benefits: [
      "Improve hiring quality by 40%",
      "Reduce recruitment time by 60%",
      "Better employee retention",
      "Reduced hiring bias",
      "Cost-effective recruitment",
      "Data-driven HR decisions"
    ],
    useCases: [
      "HR departments",
      "Recruitment agencies",
      "Talent acquisition teams",
      "HR consultants",
      "Small to medium businesses",
      "Enterprise organizations"
    ],
    targetAudience: [
      "HR professionals",
      "Recruiters",
      "Talent acquisition specialists",
      "HR managers",
      "Business owners"
    ],
    price: 1500,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,500 - $4,500/month",
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-hr-recruitment"
  },

  // AI-Powered Customer Support Services
  {
    id: "ai-powered-customer-support-automation",
    title: "AI-Powered Customer Support & Chatbot Platform",
    description: "Intelligent customer support platform that uses AI chatbots, sentiment analysis, and automated ticket routing to provide 24/7 customer service excellence.",
    category: "Customer Experience",
    subcategory: "Support Automation",
    icon: <MessageCircle className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
    features: [
      "AI-powered chatbots",
      "Natural language processing",
      "Sentiment analysis",
      "Automated ticket routing",
      "Knowledge base management",
      "Multi-channel support",
      "Customer satisfaction tracking",
      "Performance analytics",
      "Integration with CRM systems",
      "Customizable workflows"
    ],
    benefits: [
      "Reduce support costs by 50%",
      "Improve response time by 80%",
      "24/7 customer support",
      "Better customer satisfaction",
      "Scalable support operations",
      "Data-driven insights"
    ],
    useCases: [
      "E-commerce businesses",
      "SaaS companies",
      "Customer service departments",
      "Support teams",
      "Online businesses",
      "Service providers"
    ],
    targetAudience: [
      "Customer service managers",
      "Support team leaders",
      "Business owners",
      "Operations managers",
      "Customer experience specialists"
    ],
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,200 - $3,800/month",
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-customer-support"
  },

  // AI-Powered Content Marketing Services
  {
    id: "ai-powered-content-marketing-automation",
    title: "AI-Powered Content Marketing & SEO Automation Platform",
    description: "Comprehensive content marketing platform that automates content creation, SEO optimization, and social media management using AI to drive organic growth.",
    category: "Digital Marketing",
    subcategory: "Content Automation",
    icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
    features: [
      "AI-powered content generation",
      "SEO optimization automation",
      "Social media scheduling",
      "Content performance analytics",
      "Keyword research tools",
      "Competitor analysis",
      "Content calendar management",
      "Multi-platform publishing",
      "Performance tracking",
      "ROI measurement"
    ],
    benefits: [
      "Increase organic traffic by 60%",
      "Reduce content creation time by 70%",
      "Better SEO rankings",
      "Consistent content output",
      "Data-driven content strategy",
      "Improved brand visibility"
    ],
    useCases: [
      "Digital marketing agencies",
      "Content creators",
      "E-commerce businesses",
      "B2B companies",
      "Startups",
      "Enterprise marketing teams"
    ],
    targetAudience: [
      "Digital marketers",
      "Content creators",
      "SEO specialists",
      "Marketing managers",
      "Business owners"
    ],
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$899 - $2,999/month",
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-content-marketing"
  },

  // AI-Powered Project Management Services
  {
    id: "ai-powered-project-management-automation",
    title: "AI-Powered Project Management & Workflow Automation Platform",
    description: "Intelligent project management platform that uses AI to automate task allocation, resource optimization, and project tracking for improved productivity.",
    category: "Project Management",
    subcategory: "Workflow Automation",
    icon: <Calendar className="h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" />,
    features: [
      "AI-powered task allocation",
      "Resource optimization",
      "Project timeline prediction",
      "Risk assessment automation",
      "Team performance analytics",
      "Automated reporting",
      "Integration with project tools",
      "Real-time collaboration",
      "Progress tracking",
      "Budget management"
    ],
    benefits: [
      "Improve project delivery by 30%",
      "Reduce project costs by 25%",
      "Better resource utilization",
      "Faster decision making",
      "Risk mitigation",
      "Improved team collaboration"
    ],
    useCases: [
      "Project management teams",
      "Construction companies",
      "Software development teams",
      "Consulting firms",
      "Marketing agencies",
      "Event planning companies"
    ],
    targetAudience: [
      "Project managers",
      "Team leaders",
      "Operations managers",
      "Business consultants",
      "Department heads"
    ],
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,800 - $5,500/month",
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-project-management"
  },

  // AI-Powered Data Governance Services
  {
    id: "ai-powered-data-governance-platform",
    title: "AI-Powered Data Governance & Compliance Platform",
    description: "Comprehensive data governance platform that ensures data quality, privacy compliance, and regulatory adherence using AI-powered monitoring and automation.",
    category: "Data Management",
    subcategory: "Governance & Compliance",
    icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
    features: [
      "AI-powered data quality monitoring",
      "Privacy compliance automation",
      "Regulatory reporting",
      "Data lineage tracking",
      "Access control management",
      "Audit trail automation",
      "GDPR/CCPA compliance",
      "Data classification",
      "Risk assessment tools",
      "Integration with data platforms"
    ],
    benefits: [
      "Ensure 100% compliance",
      "Reduce audit preparation time by 80%",
      "Better data quality",
      "Risk mitigation",
      "Cost-effective compliance",
      "Automated reporting"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "E-commerce businesses",
      "Data-driven companies",
      "Compliance departments"
    ],
    targetAudience: [
      "Data governance officers",
      "Compliance officers",
      "Data architects",
      "Legal teams",
      "IT security teams"
    ],
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$2,500 - $8,000/month",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-data-governance"
  },

  // AI-Powered Voice Commerce Services
  {
    id: "ai-powered-voice-commerce-platform",
    title: "AI-Powered Voice Commerce & Shopping Assistant Platform",
    description: "Intelligent voice commerce platform that enables businesses to create voice-enabled shopping experiences using AI-powered voice recognition and natural language processing.",
    category: "AI & Voice Technology",
    subcategory: "Voice Commerce",
    icon: <Smartphone className="h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" />,
    features: [
      "Voice recognition and processing",
      "Natural language understanding",
      "Voice-enabled product search",
      "Voice shopping cart management",
      "Voice payment processing",
      "Multi-language support",
      "Integration with e-commerce platforms",
      "Voice analytics dashboard",
      "Custom voice skills development",
      "Voice commerce API"
    ],
    benefits: [
      "Increase conversion rates by 35%",
      "Improve customer engagement",
      "Accessibility for all users",
      "Faster shopping experience",
      "Competitive advantage",
      "Future-ready technology"
    ],
    useCases: [
      "E-commerce businesses",
      "Retail stores",
      "Voice assistant platforms",
      "Mobile commerce apps",
      "Smart home devices",
      "Automotive commerce"
    ],
    targetAudience: [
      "E-commerce managers",
      "Digital marketers",
      "Product managers",
      "UX designers",
      "Business owners"
    ],
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,800 - $5,500/month",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-voice-commerce"
  },

  // AI-Powered Emotional Intelligence Services
  {
    id: "ai-powered-emotional-intelligence-platform",
    title: "AI-Powered Emotional Intelligence & Sentiment Analysis Platform",
    description: "Advanced emotional intelligence platform that analyzes human emotions, sentiment, and behavioral patterns using AI to improve customer interactions and business decisions.",
    category: "AI & Psychology",
    subcategory: "Emotional Intelligence",
    icon: <Brain className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
    features: [
      "Real-time emotion detection",
      "Sentiment analysis engine",
      "Behavioral pattern recognition",
      "Emotional response prediction",
      "Multi-modal emotion analysis",
      "Customer emotion tracking",
      "Emotional intelligence scoring",
      "Personalized recommendations",
      "Integration with CRM systems",
      "Emotional analytics dashboard"
    ],
    benefits: [
      "Improve customer satisfaction by 45%",
      "Better understanding of customer needs",
      "Personalized customer experiences",
      "Enhanced decision making",
      "Competitive advantage",
      "Data-driven insights"
    ],
    useCases: [
      "Customer service departments",
      "Sales teams",
      "Marketing campaigns",
      "Product development",
      "HR departments",
      "Healthcare providers"
    ],
    targetAudience: [
      "Customer experience managers",
      "Sales managers",
      "Marketing managers",
      "HR professionals",
      "Business analysts"
    ],
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$2,200 - $6,500/month",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-emotional-intelligence"
  },

  // AI-Powered Creative Design Services
  {
    id: "ai-powered-creative-design-automation",
    title: "AI-Powered Creative Design & Brand Automation Platform",
    description: "Intelligent design platform that automates creative processes, brand consistency, and visual content generation using AI to streamline marketing and design workflows.",
    category: "AI & Creative Design",
    subcategory: "Design Automation",
    icon: <Palette className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
    features: [
      "AI-powered design generation",
      "Brand consistency automation",
      "Template customization",
      "Visual content creation",
      "Design trend analysis",
      "Automated brand guidelines",
      "Multi-format export",
      "Collaborative design tools",
      "Version control management",
      "Design analytics dashboard"
    ],
    benefits: [
      "Reduce design time by 70%",
      "Maintain brand consistency",
      "Faster content creation",
      "Cost-effective design",
      "Scalable creative operations",
      "Better visual communication"
    ],
    useCases: [
      "Marketing teams",
      "Design agencies",
      "Brand managers",
      "Content creators",
      "Small businesses",
      "Enterprise marketing"
    ],
    targetAudience: [
      "Marketing managers",
      "Graphic designers",
      "Brand managers",
      "Content creators",
      "Business owners"
    ],
    price: 1200,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$1,200 - $3,800/month",
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-creative-design"
  },

  // AI-Powered Predictive Maintenance Services
  {
    id: "ai-powered-predictive-maintenance-platform",
    title: "AI-Powered Predictive Maintenance & Asset Management Platform",
    description: "Intelligent maintenance platform that predicts equipment failures, optimizes maintenance schedules, and reduces downtime using AI-powered analytics and IoT sensors.",
    category: "AI & Industrial IoT",
    subcategory: "Predictive Maintenance",
    icon: <Settings className="h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" />,
    features: [
      "AI-powered failure prediction",
      "Predictive maintenance scheduling",
      "Real-time equipment monitoring",
      "IoT sensor integration",
      "Maintenance cost optimization",
      "Asset performance analytics",
      "Automated alert systems",
      "Maintenance history tracking",
      "Integration with CMMS systems",
      "Predictive analytics dashboard"
    ],
    benefits: [
      "Reduce unplanned downtime by 50%",
      "Lower maintenance costs by 30%",
      "Extend equipment lifespan",
      "Improve operational efficiency",
      "Better resource planning",
      "Data-driven maintenance"
    ],
    useCases: [
      "Manufacturing companies",
      "Industrial facilities",
      "Energy companies",
      "Transportation companies",
      "Healthcare facilities",
      "Data centers"
    ],
    targetAudience: [
      "Maintenance managers",
      "Operations directors",
      "Facility managers",
      "Asset managers",
      "Industrial engineers"
    ],
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$2,800 - $8,500/month",
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-predictive-maintenance"
  },

  // AI-Powered Energy Optimization Services
  {
    id: "ai-powered-energy-optimization-platform",
    title: "AI-Powered Energy Optimization & Sustainability Platform",
    description: "Intelligent energy management platform that optimizes energy consumption, reduces costs, and improves sustainability using AI-powered analytics and smart grid integration.",
    category: "AI & Energy Management",
    subcategory: "Energy Optimization",
    icon: <Zap className="h-10 w-10 p-2 rounded-md bg-yellow-100 text-yellow-700" />,
    features: [
      "AI-powered energy consumption analysis",
      "Real-time energy monitoring",
      "Predictive energy optimization",
      "Smart grid integration",
      "Renewable energy management",
      "Carbon footprint tracking",
      "Energy cost optimization",
      "Sustainability reporting",
      "Integration with building systems",
      "Energy analytics dashboard"
    ],
    benefits: [
      "Reduce energy costs by 25-40%",
      "Improve sustainability metrics",
      "Better energy efficiency",
      "Regulatory compliance",
      "Cost-effective operations",
      "Environmental impact reduction"
    ],
    useCases: [
      "Commercial buildings",
      "Industrial facilities",
      "Data centers",
      "Retail chains",
      "Educational institutions",
      "Government buildings"
    ],
    targetAudience: [
      "Facility managers",
      "Energy managers",
      "Sustainability officers",
      "Operations directors",
      "Building owners"
    ],
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$3,200 - $10,000/month",
    estimatedDelivery: "4-5 weeks",
    supportLevel: "enterprise",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/ai-energy-optimization"
  }
];

const InnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES.map(service => service.category)))];
  const priceRanges = [
    'all',
    'Under $1,000',
    '$1,000 - $2,000',
    '$2,000 - $3,000',
    '$3,000 - $5,000',
    'Over $5,000'
  ];

  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const price = service.price;
      switch (selectedPriceRange) {
        case 'Under $1,000':
          matchesPrice = price < 1000;
          break;
        case '$1,000 - $2,000':
          matchesPrice = price >= 1000 && price < 2000;
          break;
        case '$2,000 - $3,000':
          matchesPrice = price >= 2000 && price < 3000;
          break;
        case '$3,000 - $5,000':
          matchesPrice = price >= 3000 && price < 5000;
          break;
        case 'Over $5,000':
          matchesPrice = price >= 5000;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getPriceRange = (price: number) => {
    if (price < 1000) return 'Under $1,000';
    if (price < 2000) return '$1,000 - $2,000';
    if (price < 3000) return '$2,000 - $3,000';
    if (price < 5000) return '$3,000 - $5,000';
    return 'Over $5,000';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Innovative AI & Technology Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our comprehensive suite of AI-powered solutions, micro SAAS services, and cutting-edge technology platforms designed to transform your business operations and drive innovation.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Mail className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <Globe className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Website</h3>
              <p className="text-gray-300">ziontechgroup.com</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Select Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(range => (
                  <SelectItem key={range} value={range}>
                    {range === 'all' ? 'All Prices' : range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {service.subcategory}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <Star className="h-3 w-3 mr-2 text-yellow-400" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-blue-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-blue-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-white">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <p className="text-sm text-gray-400">Market: {service.marketPrice}</p>
                  <p className="text-xs text-gray-500 mt-1">Delivery: {service.estimatedDelivery}</p>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-3">
                <div className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </div>
                
                <div className="w-full grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-black">
                    <Phone className="mr-2 h-3 w-3" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-black">
                    <Mail className="mr-2 h-3 w-3" />
                    Quote
                  </Button>
                </div>

                {/* Contact Information */}
                <div className="w-full text-center text-xs text-gray-400 space-y-1">
                  <p>{service.contactInfo.phone}</p>
                  <p>{service.contactInfo.email}</p>
                  <p>{service.contactInfo.website}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these innovative solutions and drive your business forward with cutting-edge AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Mail className="mr-2 h-5 w-5" />
                Request Custom Solution
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase;