import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain,
  Clock,
  DollarSign,
  Users,
  CheckCircle
} from 'lucide-react';
import { expandedServiceCategories, getFeaturedServices } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';

export default function ServicesOverviewPage() {
  const featuredServices = getFeaturedServices();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Complete Tech Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            From AI-powered chatbots to enterprise cloud solutions, we provide comprehensive technology services 
            that drive innovation and growth for businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-lg px-8 py-4">
              Explore All Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-4">
              Get Free Consultation
            </Button>
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Link as LinkIcon, 
  Settings as Wifi, 
  Shield, 
  Zap, 
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap as Cpu,
  Cloud,
  Database,
  Users,
  BarChart3,
  PenTool,
  Eye,
  Lock,
  AlertTriangle,
  TrendingUp as Activity,
  Smartphone,
  Network,
  DollarSign as Coins,
  Wallet
} from "lucide-react";
import { TrustedBySection } from "@/components/TrustedBySection";

const serviceCategories = [
  {
    id: "ai-services",
    title: "AI & Machine Learning Services",
    description: "Transform your business with cutting-edge artificial intelligence solutions",
    icon: <Brain className="h-12 w-12" />,
    color: "from-blue-500 to-purple-600",
    services: [
      {
        title: "AI Content Generation",
        description: "Automated content creation for blogs, social media, and marketing materials",
        price: 299,
        period: "/month",
        features: ["Unlimited content", "Multi-language support", "SEO optimization", "Brand voice customization"],
        link: "/ai-services"
      },
      {
        title: "AI-Powered Customer Support Bot",
        description: "Intelligent chatbot with natural language processing for 24/7 support",
        price: 450,
        period: "/month",
        features: ["NLP capabilities", "Multi-channel integration", "Lead qualification", "Analytics dashboard"],
        link: "/ai-services"
      },
      {
        title: "AI-Powered Video Analytics",
        description: "Computer vision platform for surveillance and behavioral analysis",
        price: 1800,
        period: "/month",
        features: ["Real-time detection", "Facial recognition", "Behavioral analysis", "Custom training"],
        link: "/ai-services"
      },
      {
        title: "Predictive Analytics Dashboard",
        description: "Business intelligence with predictive modeling for forecasting",
        price: 800,
        period: "/month",
        features: ["Predictive modeling", "Real-time dashboards", "Custom algorithms", "Data visualization"],
        link: "/ai-services"
      }
    ]
  },
  {
    id: "blockchain-services",
    title: "Blockchain & Web3 Solutions",
    description: "Build the future with decentralized technology and smart contracts",
    icon: <LinkIcon className="h-12 w-12" />,
    color: "from-orange-500 to-red-600",
    services: [
      {
        title: "Smart Contract Development",
        description: "Custom smart contracts for DeFi, NFTs, and enterprise solutions",
        price: 3500,
        period: "/project",
        features: ["Custom development", "Security auditing", "Gas optimization", "Multi-chain deployment"],
        link: "/blockchain-services"
      },
      {
        title: "DeFi Platform Development",
        description: "Complete DeFi platform with DEX, lending, and yield farming",
        price: 15000,
        period: "/platform",
        features: ["DEX development", "Lending protocols", "Yield farming", "Security audits"],
        link: "/blockchain-services"
      },
      {
        title: "NFT Marketplace Development",
        description: "Custom NFT marketplace with minting, trading, and auctions",
        price: 8000,
        period: "/marketplace",
        features: ["NFT minting", "Auction system", "Royalty distribution", "Multi-chain support"],
        link: "/blockchain-services"
      },
      {
        title: "Enterprise Blockchain Solutions",
        description: "Private blockchain networks for supply chain and identity management",
        price: 25000,
        period: "/solution",
        features: ["Private blockchain", "Consensus mechanisms", "Identity management", "Integration APIs"],
        link: "/blockchain-services"
      }
    ]
  },
  {
    id: "iot-services",
    title: "IoT & Edge Computing",
    description: "Connect and optimize your world with intelligent IoT solutions",
    icon: <Wifi className="h-12 w-12" />,
    color: "from-green-500 to-teal-600",
    services: [
      {
        title: "IoT Device Management Platform",
        description: "Complete IoT solution with device provisioning and monitoring",
        price: 1200,
        period: "/month",
        features: ["Device provisioning", "Real-time monitoring", "Data collection", "Analytics dashboard"],
        link: "/iot-services"
      },
      {
        title: "IoT Data Analytics & Insights",
        description: "Advanced analytics for IoT data processing and predictive maintenance",
        price: 800,
        period: "/month",
        features: ["Real-time processing", "Machine learning", "Predictive maintenance", "Custom dashboards"],
        link: "/iot-services"
      },
      {
        title: "Edge Computing Platform",
        description: "Distributed edge computing for real-time data processing",
        price: 2000,
        period: "/month",
        features: ["Edge deployment", "Local processing", "Real-time analytics", "Edge AI models"],
        link: "/iot-services"
      },
      {
        title: "IoT System Integration",
        description: "Seamless integration with existing enterprise systems",
        price: 3000,
        period: "/project",
        features: ["System integration", "API development", "Data mapping", "Workflow automation"],
        link: "/iot-services"
      }
    ]
  },
  {
    id: "cybersecurity-services",
    title: "Cybersecurity & Compliance",
    description: "Protect your business with enterprise-grade security solutions",
    icon: <Shield className="h-12 w-12" />,
    color: "from-red-500 to-pink-600",
    services: [
      {
        title: "AI-Powered Threat Detection",
        description: "Advanced cybersecurity with machine learning threat detection",
        price: 1200,
        period: "/month",
        features: ["Real-time detection", "Behavioral analysis", "Automated response", "24/7 SOC support"],
        link: "/cybersecurity-services"
      },
      {
        title: "Zero-Trust Security Framework",
        description: "Zero-trust architecture with identity verification and monitoring",
        price: 4200,
        period: "/month",
        features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Access control"],
        link: "/cybersecurity-services"
      },
      {
        title: "Penetration Testing & Assessment",
        description: "Comprehensive security testing and vulnerability assessment",
        price: 2500,
        period: "/assessment",
        features: ["External testing", "Internal assessment", "Web app testing", "Social engineering"],
        link: "/cybersecurity-services"
      },
      {
        title: "Incident Response & Forensics",
        description: "Rapid response to security incidents with digital forensics",
        price: 3500,
        period: "/incident",
        features: ["24/7 response", "Digital forensics", "Evidence preservation", "Recovery planning"],
        link: "/cybersecurity-services"
      }
    ]
  },
  {
    id: "traditional-it",
    title: "Traditional IT & Infrastructure",
    description: "Reliable IT services for modern business needs",
    icon: <Cpu className="h-12 w-12" />,
    color: "from-gray-500 to-blue-600",
    services: [
      {
        title: "Cloud Infrastructure Management",
        description: "24/7 monitoring and management of cloud infrastructure",
        price: 3000,
        period: "/month",
        features: ["24/7 monitoring", "Performance optimization", "Security management", "Cost efficiency"],
        link: "/services"
      },
      {
        title: "IT Infrastructure Modernization",
        description: "Transform legacy systems into modern, agile infrastructure",
        price: 8500,
        period: "/project",
        features: ["Digital transformation", "Legacy modernization", "Infrastructure upgrade", "Training & support"],
        link: "/services"
      },
      {
        title: "API Gateway & Management",
        description: "Enterprise-grade API management with rate limiting and monitoring",
        price: 650,
        period: "/month",
        features: ["API management", "Rate limiting", "Authentication", "Developer portal"],
        link: "/services"
      },
      {
        title: "Multi-Cloud Cost Optimization",
        description: "Automated cost optimization across AWS, Azure, and Google Cloud",
        price: 550,
        period: "/month",
        features: ["Cost optimization", "Resource scaling", "Automation", "Multi-cloud support"],
        link: "/services"
      }
    ]
  }
];

const benefits = [
  {
    title: "Innovation First",
    description: "Cutting-edge technology solutions that keep you ahead of the competition",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Expert Team",
    description: "Certified professionals with deep expertise in their respective domains",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Scalable Solutions",
    description: "Services that grow with your business and adapt to changing needs",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support and monitoring for critical services",
    icon: <Globe className="h-6 w-6" />
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
    Server,
  TrendingUp,
  CheckCircle,
  Users,
  Settings,
  Globe,
  Zap,
  Search,
  Shield,
  BarChart3,
  MessageSquare,
  FileText,
  Mail,
  Eye,
  Video,
  Cloud,
  Database,
  Code,
  Smartphone,
  HardDrive,
  Monitor,
  Leaf,
  Lightbulb,
  Building,
  DollarSign,
  Star,
  ShoppingCart,
  Phone
} from 'lucide-react';

const ServiceCategories = [
  {
    title: "AI Services & Solutions",
    description: "Transform your business with cutting-edge artificial intelligence",
    icon: <Brain className="h-16 w-16 text-zion-cyan" />,
    link: "/ai-services",
    badge: "New",
    color: "from-cyan-500 to-blue-600",
    services: [
      "AI Strategy Consulting",
      "Custom AI Model Development", 
      "Computer Vision Solutions",
      "Natural Language Processing",
      "AI Ethics & Compliance",
      "AI Training & Workshops"
    ],
    priceRange: "$500 - $50,000+",
    features: ["Machine Learning", "Deep Learning", "AI Integration", "Model Optimization"]
  },
  {
    title: "IT Services & Infrastructure",
    description: "Build robust, scalable, and secure technology infrastructure",
    icon: <Server className="h-16 w-16 text-zion-blue" />,
    link: "/it-services",
    badge: "Popular",
    color: "from-blue-500 to-purple-600",
    services: [
      "Cloud Infrastructure Management",
      "Cybersecurity Services",
      "DevOps & CI/CD",
      "Network Infrastructure",
      "Data Center Services",
      "24/7 IT Support"
    ],
    priceRange: "$500 - $20,000/month",
    features: ["Cloud Migration", "Security", "Automation", "Monitoring"]
  },
  {
    title: "Digital Marketing Services",
    description: "Drive growth with data-driven marketing strategies",
    icon: <TrendingUp className="h-16 w-16 text-zion-purple" />,
    link: "/digital-marketing",
    badge: "Featured",
    color: "from-purple-500 to-pink-600",
    services: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Management",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Email Marketing Campaigns",
      "Marketing Analytics"
    ],
    priceRange: "$500 - $15,000/month",
    features: ["SEO", "PPC", "Social Media", "Content", "Analytics"]
  },
  {
    title: "Business Solutions & Consulting",
    description: "Strategic consulting and process optimization for growth",
          icon: <CheckCircle className="h-16 w-16 text-zion-green" />,
    link: "/business-solutions",
    color: "from-green-500 to-emerald-600",
    services: [
      "Business Strategy Consulting",
      "Process Automation",
      "Digital Transformation",
      "Change Management",
      "Financial Planning",
      "Market Research"
    ],
    priceRange: "$150 - $200,000+",
    features: ["Strategy", "Automation", "Transformation", "Consulting"]
  },
  {
    title: "Talent & Recruitment",
    description: "Connect with verified AI and tech specialists worldwide",
    icon: <Users className="h-16 w-16 text-zion-pink" />,
    link: "/talent",
    badge: "Premium",
    color: "from-pink-500 to-rose-600",
    services: [
      "AI Talent Matching",
      "Talent Directory Access",
      "Recruitment Services",
      "Skill Assessment",
      "Background Verification",
      "Contract Management"
    ],
    priceRange: "Free - $5,000+",
    features: ["AI Matching", "Verification", "Assessment", "Management"]
  },
  {
    title: "Equipment & Hardware",
    description: "Access cutting-edge technology and specialized equipment",
    icon: <Settings className="h-16 w-16 text-zion-amber" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
    services: [
      "AI Development Hardware",
      "GPU Clusters & Servers",
      "Specialized Equipment",
      "Rental Services",
      "Maintenance Support",
      "Technical Consultation"
    ],
    priceRange: "$100 - $100,000+",
    features: ["Hardware", "Rental", "Support", "Consultation"]
  }
];

const AdditionalServices = [
  {
    title: "Onsite IT Services",
    description: "Professional IT support at your location",
    icon: <Globe className="h-8 w-8 text-zion-cyan" />,
    link: "/it-onsite-services",
    price: "From $150/hour"
  },
  {
    title: "Zion Hire AI",
    description: "AI-powered recruiting assistant",
    icon: <Brain className="h-8 w-8 text-zion-purple" />,
    link: "/zion-hire-ai",
    price: "From $500/month"
  },
  {
    title: "Enterprise Solutions",
    description: "Custom solutions for large organizations",
    icon: <Building className="h-8 w-8 text-zion-blue" />,
    link: "/enterprise",
    price: "Custom pricing"
  },
  {
    title: "Green IT Solutions",
    description: "Sustainable technology solutions",
    icon: <Leaf className="h-8 w-8 text-zion-green" />,
    link: "/green-it",
    price: "From $1,000"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
  }
];

export default function ServicesOverviewPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Service Portfolio
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              From AI and blockchain to IoT and cybersecurity, we offer comprehensive technology solutions 
              that drive innovation and business growth. Choose from our extensive portfolio of services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Custom Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and highly-rated services that deliver exceptional value and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 right-3 bg-zion-purple text-white">
                    Featured
                  </Badge>
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {service.rating}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-zion-purple transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-zion-purple" />
                      <span className="text-sm font-medium">AI Score: {service.aiScore}</span>
                    </div>
                    <Badge variant="secondary">
                      {service.category}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-zion-purple">
                        ${service.pricing.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {service.pricing.type === 'monthly' ? '/month' : 'one-time'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.deliveryTime}
                      </div>
                      <div className="text-xs text-gray-500">Delivery</div>
                    </div>
                  </div>

                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
=======
      {/* Benefits Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive solutions backed by expertise and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expandedServiceCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Popular Services:</h4>
                    {category.services.slice(0, 3).map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm font-medium text-gray-700">{service.title}</span>
                        <Badge variant="outline" className="text-xs">
                          ${service.pricing.amount.toLocaleString()}
                        </Badge>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-sm text-zion-purple text-center">
                        +{category.services.length - 3} more services
                      </div>
                    )}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-zion-purple group-hover:text-white transition-colors">
                    View All {category.name} Services
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Brain className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-First Approach</h3>
              <p className="text-zion-slate-light">
                Leverage the latest AI technologies to automate, optimize, and innovate your business processes
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-grade security and compliance standards to protect your data and maintain trust
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Zap className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
              <p className="text-zion-slate-light">
                Quick implementation and deployment to get your solutions up and running faster
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-zion-slate-light">
                24/7 technical support and dedicated account management for ongoing success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Competitive pricing with flexible options to fit your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">$450</div>
              <div className="text-lg text-gray-600 mb-4">Starting Monthly</div>
              <p className="text-gray-500">
                Perfect for small businesses and startups looking to implement AI and automation solutions
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">$8,500</div>
              <div className="text-lg text-gray-600 mb-4">Average Project</div>
              <p className="text-gray-500">
                Comprehensive solutions for medium-sized businesses requiring custom development
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">$25,000+</div>
              <div className="text-lg text-gray-600 mb-4">Enterprise Solutions</div>
              <p className="text-gray-500">
                Large-scale implementations for enterprise clients with complex requirements
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              All prices include setup, training, and initial support
            </p>
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can transform your business. 
            Get in touch for a free consultation and personalized quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-lg px-8 py-4">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-4">
              View Portfolio
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zion-slate-light">
            <div>
              <h3 className="font-semibold text-white mb-2">Contact Information</h3>
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Address</h3>
              <p>364 E Main St STE 1008</p>
              <p>Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
=======
            <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
          
          {serviceCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-full mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-zion-purple">
                          ${service.price}
                        </span>
                        <span className="text-muted-foreground text-sm">{service.period}</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full">
                        <Link to={service.link}>
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Choose from our comprehensive portfolio of technology services and start your digital transformation journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>📞 <strong>Mobile:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
<<<<<<< HEAD
=======
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  Zap, 
  Eye, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Database,
  Code,
  Lock
} from "lucide-react";
import { SERVICE_CATEGORIES, PRICING_TIERS } from "@/data/comprehensiveServices";

export default function ServicesOverviewPage() {
  const getCategoryIcon = (icon: string) => {
    return <span className="text-4xl">{icon}</span>;
  };

  const getCategoryColor = (color: string) => {
    return `bg-gradient-to-br ${color}`;
  };

  return (
    <>
      <SEO 
        title="Services Overview - Zion Tech Group" 
        description="Explore our comprehensive range of AI, cybersecurity, cloud, and digital transformation services. Expert solutions for every business need."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, IT services overview"
        canonical="https://ziontechgroup.com/services-overview"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-blue to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <GradientHeading className="text-5xl md:text-6xl mb-6">
              Complete Service Portfolio
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              From AI-powered automation to enterprise cybersecurity, discover our comprehensive suite of 
              technology services designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info Banner */}
        <section className="py-8 bg-zion-blue-light border-b border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Headquarters</p>
                  <p className="text-white font-medium">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-cyan/20 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Contact</p>
                  <p className="text-white font-medium">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Email</p>
                  <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Service Categories</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services across multiple domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_CATEGORIES.map((category) => (
                <Card key={category.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20 group">
                  <div className={`${getCategoryColor(category.color)} p-8 rounded-t-lg flex items-center justify-center`}>
                    {getCategoryIcon(category.icon)}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <p className="text-zion-cyan font-medium mb-2">
                        {category.services.length} Services Available
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.services.slice(0, 3).map((service) => (
                          <Badge key={service.id} variant="secondary" className="bg-zion-blue-light text-zion-slate-light text-xs">
                            {service.title.split(' ').slice(0, 2).join(' ')}
                          </Badge>
                        ))}
                        {category.services.length > 3 && (
                          <Badge variant="outline" className="border-zion-purple/30 text-zion-purple text-xs">
                            +{category.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                      asChild
                    >
                      <a href={`/comprehensive-services?category=${category.id}`}>
                        Explore Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Why Choose Our Services?</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                We deliver exceptional value through innovation, expertise, and proven results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
                <p className="text-zion-slate-light">Leverage cutting-edge AI technologies for competitive advantage</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">Bank-grade security and compliance for critical systems</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-zion-slate-light">Quick implementation with minimal business disruption</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                <p className="text-zion-slate-light">24/7 technical support and dedicated account management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Flexible Pricing Options</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Choose the service level that best fits your business needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PRICING_TIERS.map((tier, index) => (
                <Card key={tier.name} className={`bg-zion-blue-dark border p-8 text-center relative ${
                  index === 1 ? 'border-zion-purple scale-105 shadow-xl shadow-zion-purple/20' : 'border-zion-blue-light'
                }`}>
                  {index === 1 && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zion-purple text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                    asChild
                  >
                    <a href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry">
                      Get Started
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Service Highlights</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Key features and capabilities that set our services apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
                <p className="text-zion-slate-light">Our services grow with your business, from startup to enterprise scale</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-cyan/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-zion-slate-light">Services available worldwide with local compliance and support</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Database className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data-Driven</h3>
                <p className="text-zion-slate-light">Analytics and insights to optimize performance and ROI</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-cyan/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Development</h3>
                <p className="text-zion-slate-light">Tailored solutions designed specifically for your business needs</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-zion-slate-light">Enterprise-grade security built into every solution</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-cyan/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Future-Ready</h3>
                <p className="text-zion-slate-light">Built with emerging technologies and forward-thinking architecture</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Contact our team today for a free consultation and discover how our comprehensive services 
              can transform your business and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Visit Our Office</h3>
              <p className="text-zion-slate-light mb-2">
                <MapPin className="inline h-4 w-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-zion-slate-light">
                <Clock className="inline h-4 w-4 mr-2" />
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7440
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-4xl mx-auto mb-8">
            Comprehensive technology services to transform your business. From AI development to IT infrastructure, 
            digital marketing to business consulting - we provide end-to-end solutions for the modern enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Explore All Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Main Service Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Core Service Categories
          </h2>
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
            Choose from our comprehensive range of professional services designed to meet your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {ServiceCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-zion-blue-dark/50 backdrop-blur-sm overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-4 rounded-xl bg-zion-purple/10 group-hover:bg-zion-purple/20 transition-colors">
                    {category.icon}
                  </div>
                  {category.badge && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {category.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-zion-cyan transition-colors mb-2">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light text-lg">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="mb-6">
                  <p className="text-xl font-bold text-zion-cyan mb-2">{category.priceRange}</p>
                  <p className="text-sm text-zion-slate-light">Price range</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-zion-cyan border-zion-cyan/30">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white">
                  <Link to={category.link}>
                    Explore {category.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Additional Services
          </h3>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
            Specialized solutions and add-on services to complement your core needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AdditionalServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-zion-blue/20 hover:border-zion-blue/50 bg-zion-blue-dark/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="p-3 rounded-lg bg-zion-blue/10 group-hover:bg-zion-blue/20 transition-colors mb-3">
                  {service.icon}
                </div>
                <CardTitle className="text-lg text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-lg font-bold text-zion-cyan mb-4">{service.price}</p>
                <Button asChild className="w-full bg-gradient-to-r from-zion-blue to-zion-cyan hover:from-zion-blue-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Our expert team is ready to help you choose the right services and create a customized solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <FileText className="h-5 w-5 mr-2" />
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue/10">
              <Phone className="h-5 w-5 mr-2" />
              Call Us: +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
  );
}