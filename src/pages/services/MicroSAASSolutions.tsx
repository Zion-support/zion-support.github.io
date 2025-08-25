import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Zap, 
  Users, 
  Globe, 
  Brain,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Target,
  Brain,
  Lock,
  Cloud,
  Database,
  Workflow,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  Target,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Clock
=======
  Palette,
  FileText,
  Video,
  Music,
  Camera,
  Car,
  Home,
  ShoppingCart,
  CreditCard,
  Calendar,
  MessageSquare,
  FileImage,
  Monitor,
  Server,
  Network,
  Key,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
  Award,
  Lightbulb,
  Compass,
  Layers,
  GitBranch,
  Zap as Lightning,
  Globe as World,
  Shield as Security,
  Heart,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Package,
  BookOpen,
  Factory,
  ShoppingBag,
  Atom
=======
  Shield, 
  TrendingUp, 
  Database,
  Cpu,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Monitor,
  Key,
  Settings,
  Cloud
=======
  ArrowRight,
  Brain
} from 'lucide-react';

const MicroSAASSolutions = () => {
  const features = [
    {
      icon: Package,
      title: "Lightweight Applications",
      description: "Small, focused applications that solve specific business problems without overwhelming complexity.",
      benefits: ["Fast deployment", "Easy maintenance", "Focused functionality"]
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Quick development cycles that allow you to iterate and improve your solutions rapidly.",
      benefits: ["Quick time-to-market", "Agile development", "Continuous improvement"]
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Applications designed with the end-user in mind, ensuring high adoption and satisfaction rates.",
      benefits: ["High user adoption", "Intuitive interfaces", "Customer satisfaction"]
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Built to grow with your business, from startup to enterprise scale.",
      benefits: ["Flexible scaling", "Cost-effective growth", "Future-proof design"]
    }
  ];

  const services = [
    {
      title: "Custom SAAS Development",
      description: "Tailored software-as-a-service solutions designed specifically for your business needs and industry requirements.",
      icon: Code,
      price: "$2,500",
      pricingModel: "monthly",
      features: ["Custom workflows", "API integration", "User management", "Scalable architecture"],
      benefits: ["Reduce development time by 40%", "Custom fit for your business", "Scalable from startup to enterprise", "Competitive advantage"],
      marketPrice: "$2,500 - $15,000/month",
      roi: "300-500% within 18 months"
    },
    {
      title: "Cybersecurity Threat Detection",
      description: "AI-powered security platform with real-time threat detection, automated incident response, and compliance monitoring.",
      icon: Shield,
      features: ["Real-time Monitoring", "AI Threat Detection", "Automated Response", "Compliance Reports", "24/7 Protection"],
      price: "$499/month",
      marketPrice: "$1,200/month",
      savings: "58% savings",
      category: "Security",
      rating: 4.8,
      reviewCount: 189
    },
    {
      title: "Cloud Cost Optimization",
      description: "AI-driven cloud cost management that automatically reduces spending by 30-50% through intelligent resource optimization.",
      icon: Cloud,
      features: ["Cost Analysis", "Automated Optimization", "Resource Scheduling", "Budget Management", "ROI Tracking"],
      price: "$199/month",
      marketPrice: "$450/month",
      savings: "56% savings",
      category: "Cloud Management",
      rating: 4.7,
      reviewCount: 234
    },
    {
      title: "HR & Recruitment AI",
      description: "Intelligent talent management platform with AI-powered candidate screening, automated interviews, and performance analytics.",
      icon: Users,
      features: ["Data isolation", "Resource sharing", "Customization options", "Performance optimization"],
      price: "From $25,000",
      delivery: "8-16 weeks"
=======
      price: "$3,200",
      pricingModel: "monthly",
      features: ["Data isolation", "Resource sharing", "Customization options", "Performance optimization"],
      benefits: ["Reduce infrastructure costs by 50%", "Improved resource utilization", "Enhanced security isolation", "Scalable architecture"],
      marketPrice: "$3,200 - $20,000/month",
      roi: "400-600% within 24 months"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial insights with AI-powered forecasting, expense tracking, and automated reporting for better decision making.",
      icon: BarChart3,
      features: ["Flexible pricing", "Automated billing", "Usage tracking", "Payment processing"],
      price: "From $8,000",
      delivery: "4-8 weeks"
=======
      price: "$1,800",
      pricingModel: "monthly",
      features: ["Flexible pricing", "Automated billing", "Usage tracking", "Payment processing"],
      benefits: ["Increase revenue by 35%", "Reduce billing errors by 90%", "Automated renewals", "Better cash flow"],
      marketPrice: "$1,800 - $8,000/month",
      roi: "250-400% within 12 months"
    },
    {
      title: "Inventory Management System",
      description: "Smart inventory tracking with AI demand forecasting, automated reordering, and real-time stock monitoring.",
      icon: Database,
      features: ["AI Demand Forecasting", "Automated Reordering", "Real-time Monitoring", "Barcode Scanning", "Supplier Management"],
      price: "$179/month",
      marketPrice: "$400/month",
      savings: "55% savings",
      category: "Operations",
      rating: 4.5,
      reviewCount: 127
    },
    {
      title: "Project Management Suite",
      description: "Collaborative project management with AI task prioritization, time tracking, and automated workflow optimization.",
      icon: Target,
      features: ["AI Task Prioritization", "Time Tracking", "Workflow Automation", "Team Collaboration", "Progress Analytics"],
      price: "$159/month",
      marketPrice: "$350/month",
      savings: "55% savings",
      category: "Project Management",
      rating: 4.7,
      reviewCount: 298
    },
    {
      title: "Customer Support Automation",
      description: "AI-powered customer support with intelligent ticket routing, automated responses, and sentiment analysis.",
      icon: Smartphone,
      features: ["AI Ticket Routing", "Automated Responses", "Sentiment Analysis", "Multi-channel Support", "Performance Metrics"],
      price: "$129/month",
      marketPrice: "$300/month",
      savings: "57% savings",
      category: "Customer Support",
      rating: 4.6,
      reviewCount: 178
=======
      title: "AI-Powered Business Intelligence Platform",
      description: "Intelligent analytics platform that transforms raw data into actionable business insights using advanced AI algorithms.",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom AI Models", "Automated Reporting"],
      price: "$2,500/month",
      category: "AI & Analytics",
      rating: 4.9,
      reviewCount: 156,
      path: "/services/ai-bi-platform"
    },
    {
      title: "Quantum-Safe Cybersecurity Suite",
      description: "Next-generation security platform using quantum-resistant encryption to protect against future cyber threats.",
      icon: Lock,
      features: ["Quantum Encryption", "Threat Intelligence", "Zero-Trust Architecture", "Compliance Monitoring"],
      price: "$3,200/month",
      category: "Cybersecurity",
      rating: 4.8,
      reviewCount: 89,
      path: "/services/quantum-security"
    },
    {
      title: "Intelligent Workflow Automation",
      description: "AI-driven process automation that learns from your business operations and continuously optimizes workflows.",
      icon: Workflow,
      features: ["Process Mining", "Smart Automation", "Performance Analytics", "Integration Hub"],
      price: "$1,800/month",
      category: "Automation",
      rating: 4.7,
      reviewCount: 234,
      path: "/services/workflow-automation"
    },
    {
      title: "Predictive Customer Success Platform",
      description: "AI-powered customer success platform that predicts churn, identifies upsell opportunities, and automates customer engagement.",
      icon: Users,
      features: ["Churn Prediction", "Customer Scoring", "Automated Engagement", "Success Metrics"],
      price: "$2,100/month",
      category: "Customer Success",
      rating: 4.9,
      reviewCount: 178,
      path: "/services/customer-success"
    },
    {
      title: "Real-Time Supply Chain Intelligence",
      description: "End-to-end supply chain visibility with AI-powered demand forecasting and risk assessment.",
      icon: Globe,
      features: ["Demand Forecasting", "Risk Assessment", "Real-time Tracking", "Optimization Engine"],
      price: "$2,800/month",
      category: "Supply Chain",
      rating: 4.6,
      reviewCount: 92,
      path: "/services/supply-chain-intelligence"
    },
    {
      title: "Intelligent Document Processing",
      description: "AI-powered document analysis and processing platform that extracts insights from unstructured data.",
      icon: FileText,
      features: ["OCR & Text Extraction", "Intelligent Classification", "Data Validation", "Workflow Integration"],
      price: "$1,500/month",
      category: "Document AI",
      rating: 4.8,
      reviewCount: 145,
      path: "/services/document-processing"
    },
    {
      title: "Predictive Maintenance System",
      description: "IoT-enabled predictive maintenance platform that prevents equipment failures and optimizes maintenance schedules.",
      icon: Cpu,
      features: ["RESTful APIs", "GraphQL support", "Webhook integration", "API documentation"],
      price: "From $12,000",
      delivery: "6-10 weeks"
=======
      price: "$2,200",
      pricingModel: "monthly",
      features: ["RESTful APIs", "GraphQL support", "Webhook integration", "API documentation"],
      benefits: ["Faster system integration", "Reduced development costs", "Better third-party connectivity", "Enhanced user experience"],
      marketPrice: "$2,200 - $12,000/month",
      roi: "350-500% within 15 months"
    },
    {
      title: "Analytics & Reporting",
      description: "Advanced analytics dashboards providing insights into user behavior, system performance, and business metrics.",
      icon: TrendingUp,
      title: "AI-Powered Content Generation Platform",
      description: "Advanced AI content creation tool for blogs, social media, and marketing materials with SEO optimization.",
      icon: Brain,
      features: ["GPT-4 integration", "SEO optimization", "Multi-language support", "Brand voice customization"],
      price: "$99/month",
      marketPrice: "$199/month",
      benefits: ["Save 20+ hours/week", "Improve SEO rankings", "Increase engagement by 40%"]
    },
    {
      title: "Intelligent Project Management Suite",
      description: "AI-driven project management with predictive analytics, resource optimization, and automated reporting.",
      icon: Target,
      features: ["AI task prioritization", "Resource forecasting", "Automated reporting", "Team collaboration"],
      price: "$149/month",
      marketPrice: "$299/month",
      benefits: ["Reduce project delays by 30%", "Improve team productivity", "Real-time insights"]
    },
    {
      title: "Smart Customer Relationship Manager",
      description: "AI-powered CRM with predictive analytics, automated follow-ups, and intelligent lead scoring.",
      icon: Users,
      features: ["AI lead scoring", "Automated follow-ups", "Predictive analytics", "Integration APIs"],
      price: "$79/month",
      marketPrice: "$149/month",
      benefits: ["Increase conversions by 35%", "Reduce manual work by 60%", "Better customer insights"]
    },
    {
      title: "Automated Social Media Manager",
      description: "AI social media automation with content scheduling, engagement analysis, and trend prediction.",
      icon: Globe,
      features: ["AI content scheduling", "Engagement analytics", "Trend prediction", "Multi-platform posting"],
      price: "$69/month",
      marketPrice: "$129/month",
      benefits: ["Save 15+ hours/week", "Increase engagement by 50%", "Better content timing"]
    },
    {
      title: "Intelligent Email Marketing Platform",
      description: "AI email marketing with personalization, A/B testing automation, and predictive analytics.",
      icon: MessageSquare,
      features: ["AI personalization", "Automated A/B testing", "Predictive analytics", "Smart segmentation"],
      price: "$89/month",
      marketPrice: "$179/month",
      benefits: ["Improve open rates by 45%", "Increase click-through by 60%", "Automated optimization"]
    },
    {
      title: "Smart Analytics Dashboard",
      description: "AI-powered business intelligence with predictive analytics, automated insights, and custom reporting.",
      icon: BarChart3,
      features: ["Predictive analytics", "Automated insights", "Custom reporting", "Real-time monitoring"],
      price: "$129/month",
      marketPrice: "$249/month",
      benefits: ["Make data-driven decisions", "Identify trends early", "Automated reporting"]
    },
    {
      title: "AI-Powered HR Management System",
      description: "Intelligent HR platform with automated recruitment, performance tracking, and employee engagement.",
      icon: Building,
      features: ["AI recruitment", "Performance tracking", "Employee engagement", "Compliance management"],
      price: "$199/month",
      marketPrice: "$399/month",
      benefits: ["Reduce hiring time by 50%", "Improve retention by 25%", "Automated compliance"]
    },
    {
      title: "Smart Financial Management Tool",
      description: "AI financial platform with expense tracking, budgeting automation, and financial forecasting.",
      icon: DollarSign,
      features: ["AI expense tracking", "Budget automation", "Financial forecasting", "Tax preparation"],
      price: "$59/month",
      marketPrice: "$119/month",
      benefits: ["Save money on expenses", "Better financial planning", "Automated tax prep"]
    },
    {
      title: "Intelligent Inventory Management",
      description: "AI inventory system with demand prediction, automated reordering, and supply chain optimization.",
      icon: Package,
      features: ["Demand prediction", "Automated reordering", "Supply chain optimization", "Real-time tracking"],
      price: "$179/month",
      marketPrice: "$349/month",
      benefits: ["Reduce stockouts by 70%", "Optimize inventory costs", "Improve cash flow"]
    },
    {
      title: "Smart Legal Document Generator",
      description: "AI legal document creation with contract templates, compliance checking, and automated review.",
      icon: FileText,
      features: ["Contract templates", "Compliance checking", "Automated review", "Legal research"],
      price: "$139/month",
      marketPrice: "$279/month",
      benefits: ["Save on legal fees", "Faster document creation", "Reduce legal risks"]
    },
    {
      title: "AI-Powered Video Editor",
      description: "Intelligent video editing with automated cuts, effects, and professional-quality output.",
      icon: Video,
      features: ["Automated editing", "AI effects", "Professional templates", "Cloud rendering"],
      price: "$79/month",
      marketPrice: "$159/month",
      benefits: ["Save editing time by 80%", "Professional quality", "Easy to use"]
    },
    {
      title: "Smart E-commerce Analytics",
      description: "AI e-commerce insights with customer behavior analysis, conversion optimization, and trend prediction.",
      icon: ShoppingCart,
      features: ["Customer behavior analysis", "Conversion optimization", "Trend prediction", "A/B testing"],
      price: "$159/month",
      marketPrice: "$299/month",
      benefits: ["Increase sales by 40%", "Better customer insights", "Optimized conversions"]
    }
  ];

  const emergingServices = [
    {
      title: "Quantum Computing as a Service",
      description: "Access to quantum computing resources for complex calculations and research.",
      icon: Atom,
      price: "$999/month",
      marketPrice: "$2,499/month",
      status: "Early Access"
    },
    {
      title: "AI Consciousness Platform",
      description: "Advanced AI systems with consciousness simulation and ethical AI development.",
      icon: Brain,
      price: "$499/month",
      marketPrice: "$999/month",
      status: "Beta"
    },
    {
      title: "Blockchain Identity Management",
      description: "Decentralized identity verification with blockchain security and privacy protection.",
      icon: Shield,
      price: "$89/month",
      marketPrice: "$179/month",
      status: "Live"
    },
    {
      title: "IoT Device Management Suite",
      description: "Comprehensive IoT device management with AI monitoring and predictive maintenance.",
      icon: Cpu,
      price: "$129/month",
      marketPrice: "$249/month",
      status: "Live"
=======
      price: "$1,500",
      pricingModel: "monthly",
      features: ["Real-time metrics", "Custom reports", "Data visualization", "Export capabilities"],
      benefits: ["Improve decision making by 45%", "Identify growth opportunities", "Better user insights", "Data-driven strategies"],
      marketPrice: "$1,500 - $6,000/month",
      roi: "300-450% within 12 months"
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that streamline business processes and improve operational efficiency.",
      icon: Zap,
      price: "$2,800",
      pricingModel: "monthly",
      features: ["Process automation", "AI decision making", "Workflow optimization", "Performance monitoring"],
      benefits: ["Reduce operational costs by 40%", "Improve efficiency by 60%", "24/7 automation", "Better resource utilization"],
      marketPrice: "$2,800 - $18,000/month",
      roi: "400-700% within 18 months"
=======
      title: "Custom Micro SAAS",
      description: "Tailored micro applications designed specifically for your business needs and workflows.",
      icon: Settings
    },
    {
      title: "Integration Services",
      description: "Seamless integration with existing systems and third-party applications.",
      icon: Cpu
    },
    {
      title: "API Development",
      description: "Robust APIs that enable your micro SAAS to communicate with other systems.",
      icon: Database
    },
    {
      title: "Cloud Deployment",
      description: "Scalable cloud deployment with automatic scaling and high availability.",
      icon: Cloud
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your applications.",
      icon: Monitor
    },
    {
      title: "Analytics & Insights",
      description: "Built-in analytics to track usage, performance, and user behavior.",
      icon: BarChart3
    }
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "PostgreSQL & MongoDB",
    "AWS & Azure",
    "Docker & Kubernetes",
    "GraphQL APIs",
    "Real-time WebSockets"
  ];

  const benefits = [
    {
      description: "Quick time-to-market with agile development methodologies and pre-built AI models",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Scalability",
      description: "Built to grow with your business from day one with cloud-native architecture",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "Cost Efficiency",
      description: "Reduced infrastructure costs with pay-as-you-grow pricing and automated optimization",
      icon: BarChart3,
      color: "text-blue-400"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance standards to protect your business",
      icon: Shield,
      color: "text-red-400"
    },
    {
      title: "AI-First Design",
      description: "Every solution is built with artificial intelligence at its core for maximum efficiency",
      icon: Brain,
      color: "text-purple-400"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to keep your systems running",
      icon: Clock,
      color: "text-cyan-400"
=======
      description: "Quick time-to-market with agile development methodologies",
      icon: Zap,
      details: "Deploy in weeks, not months"
    },
    {
      title: "AI-Powered Intelligence",
      description: "Built-in artificial intelligence for automation and insights",
      icon: Brain,
      details: "Smart automation saves time"
    },
    {
      title: "Scalability",
      description: "Built to grow with your business from day one",
      icon: TrendingUp,
      details: "Grow without limits"
    },
    {
      title: "Cost Efficiency",
      description: "Reduced infrastructure costs with cloud-native solutions",
      icon: DollarSign,
      details: "Save up to 60% on costs"
    },
    {
      title: "Enterprise Security",
      description: "Enterprise-grade security and compliance standards",
      icon: Shield,
      details: "SOC 2, GDPR, HIPAA compliant"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: Clock,
      details: "Always here when you need us"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant patient management systems with AI-powered diagnostics",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Finance",
      description: "Regulatory-compliant financial tools with real-time risk assessment",
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Education",
      description: "Learning management and student tracking with personalized learning paths",
      icon: Building,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Real Estate",
      description: "Property management and client portals with market analysis",
      icon: Building,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Manufacturing",
      description: "Smart factory solutions with predictive maintenance and quality control",
      icon: Building,
      color: "from-gray-500 to-blue-500"
    },
    {
      name: "Retail",
      description: "Omnichannel retail solutions with AI-powered inventory management",
      icon: Building,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$500",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Up to 5 users",
        "Basic AI models",
        "Standard support",
        "Core features",
        "Email support"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Professional",
      price: "$1,500",
      period: "/month",
      description: "Ideal for growing businesses with advanced AI needs",
      features: [
        "Up to 25 users",
        "Advanced AI models",
        "Priority support",
        "Custom integrations",
        "Phone & email support",
        "Advanced analytics"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Enterprise",
      price: "$3,500",
      period: "/month",
      description: "For large organizations requiring enterprise-grade solutions",
      features: [
        "Unlimited users",
        "Custom AI models",
        "24/7 dedicated support",
        "Full customization",
        "On-premise options",
        "SLA guarantees",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
=======
      description: "HIPAA-compliant patient management systems",
      icon: Heart,
      services: ["Patient portals", "Telemedicine", "Medical records", "Billing automation"]
    },
    {
      name: "Finance",
      description: "Regulatory-compliant financial tools",
      icon: CreditCard,
      services: ["Trading platforms", "Risk management", "Compliance tools", "Portfolio tracking"]
    },
    {
      name: "Education",
      description: "Learning management and student tracking",
      icon: BookOpen,
      services: ["LMS platforms", "Student analytics", "Course creation", "Assessment tools"]
    },
    {
      name: "Real Estate",
      description: "Property management and client portals",
      icon: Home,
      services: ["Property listings", "Client management", "Document automation", "Market analysis"]
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing and supply chain solutions",
      icon: Factory,
      services: ["Production tracking", "Quality control", "Supply chain", "Predictive maintenance"]
    },
    {
      name: "Retail",
      description: "Omnichannel retail and customer experience",
      icon: ShoppingBag,
      services: ["POS systems", "Inventory management", "Customer analytics", "E-commerce"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 users",
        "Basic AI features",
        "Email support",
        "Standard integrations",
        "1GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced AI features",
        "Priority support",
        "Custom integrations",
        "10GB storage",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Full AI capabilities",
        "24/7 support",
        "Custom development",
        "Unlimited storage",
        "White-label options"
      ],
      popular: false
=======
      title: "Cost Efficiency",
      description: "Lower development and maintenance costs compared to large enterprise applications.",
      icon: TrendingUp
    },
    {
      title: "Faster Deployment",
      description: "Get your solutions to market quickly with streamlined development processes.",
      icon: Rocket
    },
    {
      title: "Easier Maintenance",
      description: "Simplified codebases that are easier to maintain and update.",
      icon: Settings
    },
    {
      title: "Better User Experience",
      description: "Focused applications that provide superior user experience and satisfaction.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(138,43,226,0.1),transparent_50%)]"></div>
      </div>
=======
        description="Custom software-as-a-service solutions designed for rapid deployment, scalability, and business growth across industries."
        tags={["micro SAAS", "custom software", "subscription management", "multi-tenant", "API development", "business software"]}
        url="https://ziontechgroup.com/services/micro-saas-solutions"
      />

      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group" 
        description="Innovative AI-powered micro SAAS solutions designed for rapid deployment, scalability, and business growth across industries. Save up to 60% on costs with our intelligent automation platforms."
        keywords="micro SAAS, AI software, business automation, subscription management, multi-tenant, API development, business software, AI tools, automation platform"
        canonical="https://ziontechgroup.com/services/micro-saas-solutions"
=======
        description="Cutting-edge micro SAAS solutions powered by AI, designed for rapid deployment, scalability, and business transformation across industries."
        keywords="micro saas, ai solutions, business intelligence, cybersecurity, workflow automation, customer success, supply chain, document processing"
      />
      
      {/* Hero Section */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business ideas into powerful, intelligent software solutions with our cutting-edge micro SAAS 
            development services. Leverage AI automation, save up to 60% on costs, and deploy in weeks, not months.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              View Portfolio
            </button>
=======
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
              AI-Powered Software Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Transform your business operations with our intelligent micro SAAS platforms. 
              From AI-powered analytics to quantum-safe security, we deliver solutions that 
              scale with your business and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#services" className="futuristic-btn text-lg px-8 py-4 group">
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="/contact" className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300">
                Get Custom Quote
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>24/7 support</span>
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build focused, scalable software solutions that solve specific business problems 
              without the complexity of traditional enterprise applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Start Building
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Micro SAAS Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SAAS Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our micro SAAS approach delivers focused solutions that are fast, efficient, 
              and perfectly suited to your specific business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-purple-400">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovative SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS platforms designed to revolutionize your business operations
=======
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Micro SAAS Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From AI content generation to intelligent project management, we provide cutting-edge micro SAAS solutions 
              that accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                    <span className="text-xs text-gray-500">({service.reviewCount})</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  <div className="text-2xl font-bold text-cyan-400 mt-1">{service.price}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.path}
                  className="w-full futuristic-btn text-center group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
=======
                <div className="flex justify-between items-center pt-4 border-t border-zion-blue-light">
                  <div className="text-zion-cyan font-semibold">{service.price}</div>
                  <div className="text-sm text-zion-slate">Delivery: {service.delivery}</div>
                </div>
=======
              <div key={index} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '')) / parseInt(service.marketPrice.replace('$', ''))) * 100)}%
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
=======
                
                {/* Pricing */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-blue-dark">
                      {service.price}
                    </div>
                    <div className="text-sm text-zion-slate">
                      per {service.pricingModel}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-purple rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Info */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate">Market Price:</span>
                    <span className="text-zion-blue-dark font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-zion-slate">ROI:</span>
                    <span className="text-green-600 font-semibold">{service.roi}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Inquiry about Micro SAAS Solutions - ${service.title}"
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Get Started
                  </a>
                </div>
=======
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end services to build, deploy, and maintain your micro SAAS applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
                <p className="text-sm text-zion-cyan font-medium">
                  {benefit.details}
                </p>
=======
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Why Choose Our Micro SAAS Solutions?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the advantages of rapid development, AI-powered intelligence, and cost-effective solutions 
              designed for modern business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-2">
                  {benefit.description}
                </p>
                <p className="text-sm text-green-400 font-medium">
                  {benefit.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-900/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Transparent Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/25' 
                  : 'border-gray-700/50 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-105'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}>
                  Get Started
                </button>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Micro SAAS?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Micro SAAS solutions offer significant advantages over traditional enterprise applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${industry.color} p-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center text-xs text-zion-slate">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Real results from real businesses using our micro SAAS solutions.
=======
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Industry-Specific Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Tailored micro SAAS solutions designed for the unique requirements and compliance needs of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-blue-400 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4 text-center">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <div key={idx} className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded text-center">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs with our flexible pricing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`glass-card p-8 text-center relative ${
                  tier.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-8">{tier.description}</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full futuristic-btn text-center ${
                    tier.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : ''
                  }`}
                >
                  Get Started
                </a>
=======
      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with modern, scalable technologies that ensure performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-purple-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Join thousands of businesses already using our AI-powered micro SAAS solutions to accelerate growth, 
            reduce costs, and stay ahead of the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
=======
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses that have already revolutionized their operations with our AI-powered SAAS solutions
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="/contact"
                  className="futuristic-btn text-lg px-8 py-4 group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="/pricing"
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Micro SAAS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how micro SAAS solutions can solve your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Start Project
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
          <div className="text-center text-gray-400">
            <p className="mb-2">Contact us for custom enterprise solutions</p>
            <p className="text-sm">
              📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a> | 
              📧 <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
            </p>
            <p className="text-sm mt-2">
              📍 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASSolutions;