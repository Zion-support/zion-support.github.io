import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Zap,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Code,
  Server,
  Chip,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Building2,
  FileText,
  HelpCircle,
  BarChart,
  Settings,
  Palette,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  ShoppingCart,
  Globe2,
  Network,
  Smartphone,
  Lock,
  Wifi,
  Database,
  Truck,
  Calendar,
  Clock,
  CreditCard,
  Headphones,
  Monitor,
  Smartphone as PhoneIcon,
  Globe,
  Key,
  Lock as LockIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Building2 as Building2Icon,
  FileText as FileTextIcon,
  HelpCircle as HelpCircleIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  Rocket as RocketIcon,
  Handshake as HandshakeIcon,
  Lightbulb as LightbulbIcon,
  Cpu as CpuIcon,
  Leaf as LeafIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  Activity as ActivityIcon,
  MessageCircle as MessageCircleIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Globe2 as Globe2Icon,
  Network as NetworkIcon,
  Smartphone as SmartphoneIcon,
  Lock as LockIcon2,
  Wifi as WifiIcon,
  Database as DatabaseIcon,
  Truck as TruckIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  CreditCard as CreditCardIcon,
  Headphones as HeadphonesIcon,
  Monitor as MonitorIcon,
  Phone as PhoneIcon2
} from 'lucide-react';

// Micro SAAS Service Categories
const microSAASCategories = [
  {
    name: "AI-Powered Business Tools",
    description: "Intelligent automation solutions that streamline business operations",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "AI Project Manager",
        description: "Intelligent project management with AI-powered task prioritization and resource optimization",
        features: ["AI Task Prioritization", "Resource Optimization", "Risk Assessment", "Progress Tracking"],
        pricing: "From $29/month",
        benefits: ["40% faster project completion", "30% reduction in resource waste", "Improved team productivity"],
        path: "/services/ai-project-management-platform"
      },
      {
        name: "AI Content Optimizer Pro",
        description: "Advanced content optimization with AI-powered SEO and multi-platform analytics",
        features: ["SEO Optimization", "Content Analysis", "Performance Tracking", "Multi-platform Publishing"],
        pricing: "From $19/month",
        benefits: ["50% improvement in SEO rankings", "10x faster content creation", "Increased engagement rates"],
        path: "/services/ai-content-optimizer-pro"
      },
      {
        name: "AI Customer Support Automation",
        description: "24/7 AI-powered support with multi-language capabilities and smart ticket routing",
        features: ["24/7 Support", "Multi-language", "Smart Routing", "Analytics Dashboard"],
        pricing: "From $39/month",
        benefits: ["80% reduction in response time", "60% decrease in support costs", "Improved customer satisfaction"],
        path: "/services/ai-customer-support-automation"
      }
    ]
  },
  {
    name: "Financial & Operations",
    description: "Smart financial management and operational efficiency solutions",
    icon: Coins,
    color: "from-yellow-500 to-orange-500",
    services: [
      {
        name: "Cloud FinOps Optimizer",
        description: "Intelligent cloud cost management with automated optimization and budget controls",
        features: ["Cost Optimization", "Budget Management", "Resource Monitoring", "Automated Scaling"],
        pricing: "From $49/month",
        benefits: ["25-40% cloud cost reduction", "Improved resource utilization", "Automated cost optimization"],
        path: "/services/finops-advisor"
      },
      {
        name: "AI Financial Analytics",
        description: "Advanced financial insights with predictive analytics and automated reporting",
        features: ["Financial Forecasting", "Risk Analysis", "Automated Reporting", "Real-time Monitoring"],
        pricing: "From $79/month",
        benefits: ["Improved financial planning", "Reduced risk exposure", "Automated compliance reporting"],
        path: "/services/ai-financial-trading-platform"
      },
      {
        name: "Invoice & Expense Manager",
        description: "Automated invoice processing and expense management with AI-powered insights",
        features: ["Invoice Processing", "Expense Tracking", "Automated Approval", "Financial Reporting"],
        pricing: "From $15/month",
        benefits: ["90% faster invoice processing", "Reduced manual errors", "Improved cash flow management"],
        path: "/services/ai-workflow-automation"
      }
    ]
  },
  {
    name: "Security & Compliance",
    description: "Enterprise-grade security and compliance automation solutions",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    services: [
      {
        name: "SOC2 Compliance Tracker",
        description: "Automated compliance management for SOC2, GDPR, and industry standards",
        features: ["Compliance Monitoring", "Automated Auditing", "Risk Assessment", "Policy Management"],
        pricing: "From $99/month",
        benefits: ["90% reduction in compliance time", "100% audit trail", "Real-time compliance status"],
        path: "/services/soc2-compliance-automation"
      },
      {
        name: "AI Cybersecurity Suite",
        description: "Advanced threat detection and response powered by artificial intelligence",
        features: ["Threat Detection", "Behavioral Analysis", "Automated Response", "24/7 Monitoring"],
        pricing: "From $149/month",
        benefits: ["10x faster threat detection", "70% reduction in false positives", "80% automated response"],
        path: "/services/ai-cybersecurity-suite"
      },
      {
        name: "Vendor Risk Management",
        description: "Comprehensive vendor risk assessment and monitoring platform",
        features: ["Risk Assessment", "Vendor Monitoring", "Compliance Tracking", "Automated Alerts"],
        pricing: "From $69/month",
        benefits: ["Reduced vendor risks", "Improved compliance", "Automated risk monitoring"],
        path: "/services/vendor-risk-management"
      }
    ]
  },
  {
    name: "Marketing & Sales",
    description: "Intelligent marketing automation and sales optimization tools",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "AI Marketing Automation",
        description: "Intelligent marketing campaigns with personalized customer experiences",
        features: ["Campaign Automation", "Personalization Engine", "A/B Testing", "ROI Analytics"],
        pricing: "From $89/month",
        benefits: ["40% increase in conversion rates", "60% reduction in marketing costs", "Improved customer lifetime value"],
        path: "/services/ai-marketing-automation"
      },
      {
        name: "AI Sales Copilot",
        description: "AI-powered sales assistant with lead scoring and opportunity management",
        features: ["Lead Scoring", "Opportunity Management", "Sales Forecasting", "Performance Analytics"],
        pricing: "From $59/month",
        benefits: ["30% increase in sales", "Improved lead quality", "Better sales forecasting"],
        path: "/services/ai-sales-copilot"
      },
      {
        name: "SEO Auditor & Optimizer",
        description: "Comprehensive SEO analysis and optimization with AI-powered insights",
        features: ["SEO Analysis", "Keyword Research", "Performance Tracking", "Competitive Analysis"],
        pricing: "From $25/month",
        benefits: ["Improved search rankings", "Increased organic traffic", "Better content optimization"],
        path: "/services/ai-powered-seo"
      }
    ]
  },
  {
    name: "Development & DevOps",
    description: "Developer tools and DevOps automation solutions",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "AI Code Generator",
        description: "Intelligent code generation and review with security analysis",
        features: ["Code Generation", "Security Review", "Performance Optimization", "Best Practices"],
        pricing: "From $79/month",
        benefits: ["60% faster development", "90% reduction in security vulnerabilities", "Improved code quality"],
        path: "/services/ai-code-review-security"
      },
      {
        name: "AI DevOps Automation",
        description: "Intelligent CI/CD pipelines with automated testing and deployment",
        features: ["Automated Testing", "Smart Deployment", "Performance Monitoring", "Incident Response"],
        pricing: "From $129/month",
        benefits: ["70% faster deployments", "80% reduction in deployment failures", "24/7 automated monitoring"],
        path: "/services/ai-devops-automation-platform"
      },
      {
        name: "API Management Platform",
        description: "Comprehensive API lifecycle management with monitoring and analytics",
        features: ["API Design", "Testing Tools", "Performance Monitoring", "Analytics Dashboard"],
        pricing: "From $45/month",
        benefits: ["Improved API reliability", "Better developer experience", "Reduced maintenance costs"],
        path: "/services/ai-workflow-orchestrator"
      }
    ]
  },
  {
    name: "Industry-Specific Solutions",
    description: "Tailored solutions for specific industry challenges",
    icon: Building2,
    color: "from-indigo-500 to-purple-500",
    services: [
      {
        name: "Healthcare Analytics Platform",
        description: "AI-powered healthcare analytics with patient management and compliance",
        features: ["Patient Analytics", "Compliance Management", "Clinical Decision Support", "Telemedicine Integration"],
        pricing: "From $199/month",
        benefits: ["Improved patient outcomes", "Reduced compliance risks", "Better resource utilization"],
        path: "/services/ai-healthcare-analytics-platform"
      },
      {
        name: "Manufacturing IoT Platform",
        description: "Smart manufacturing solutions with predictive maintenance and quality control",
        features: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Energy Management"],
        pricing: "From $159/month",
        benefits: ["25% reduction in downtime", "30% improvement in quality", "20% energy savings"],
        path: "/services/ai-iot-edge-computing-platform"
      },
      {
        name: "Retail Intelligence Suite",
        description: "AI-powered retail solutions for customer experience and operational efficiency",
        features: ["Customer Analytics", "Inventory Optimization", "Demand Forecasting", "Dynamic Pricing"],
        pricing: "From $89/month",
        benefits: ["35% increase in sales", "40% reduction in inventory costs", "Improved customer satisfaction"],
        path: "/services/ai-business-intelligence"
      }
    ]
  }
];

// Featured Micro SAAS Services
const featuredMicroSAAS = [
  {
    title: "AI Project Management Platform",
    description: "Revolutionary project management with AI-powered insights and automation",
    icon: Brain,
    path: "/services/ai-project-management-platform",
    features: ["AI Task Prioritization", "Resource Optimization", "Risk Assessment", "Progress Tracking"],
    pricing: "From $29/month",
    benefits: ["40% faster project completion", "30% reduction in resource waste", "Improved team productivity"],
    category: "Business Tools"
  },
  {
    title: "Cloud FinOps Optimizer",
    description: "Intelligent cloud cost management with automated optimization",
    icon: Cloud,
    path: "/services/finops-advisor",
    features: ["Cost Optimization", "Budget Management", "Resource Monitoring", "Automated Scaling"],
    pricing: "From $49/month",
    benefits: ["25-40% cloud cost reduction", "Improved resource utilization", "Automated cost optimization"],
    category: "Financial"
  },
  {
    title: "AI Cybersecurity Suite",
    description: "Advanced threat detection and response powered by AI",
    icon: Shield,
    path: "/services/ai-cybersecurity-suite",
    features: ["Threat Detection", "Behavioral Analysis", "Automated Response", "24/7 Monitoring"],
    pricing: "From $149/month",
    benefits: ["10x faster threat detection", "70% reduction in false positives", "80% automated response"],
    category: "Security"
  },
  {
    title: "AI Marketing Automation",
    description: "Intelligent marketing campaigns with personalized experiences",
    icon: Target,
    path: "/services/ai-marketing-automation",
    features: ["Campaign Automation", "Personalization Engine", "A/B Testing", "ROI Analytics"],
    pricing: "From $89/month",
    benefits: ["40% increase in conversion rates", "60% reduction in marketing costs", "Improved customer lifetime value"],
    category: "Marketing"
  }
];

// Pricing Tiers
const pricingTiers = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic features and functionality",
      "Email support",
      "Up to 5 users",
      "Standard integrations",
      "Basic analytics"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Ideal for growing businesses and teams",
    features: [
      "Advanced features and automation",
      "Priority support",
      "Up to 25 users",
      "Advanced integrations",
      "Advanced analytics",
      "Custom workflows",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "/month",
    description: "For large organizations with complex needs",
    features: [
      "All features and unlimited automation",
      "24/7 dedicated support",
      "Unlimited users",
      "Custom integrations",
      "Advanced security",
      "Custom development",
      "Dedicated account manager",
      "SLA guarantees"
    ],
    popular: false
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

// Micro SAAS Category Component
const MicroSAASCategory = ({ category, index }: { category: any; index: number }) => (
  <motion.div
    variants={itemVariants}
    className="group relative"
  >
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <category.icon className="w-8 h-8 text-white" />
        </div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {category.name}
          </h3>
          <p className="text-slate-300 text-sm">
            {category.description}
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        {category.services.map((service: any, idx: number) => (
          <div key={idx} className="bg-slate-800/30 rounded-lg p-4 border border-slate-600/20">
            <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
            <p className="text-slate-300 text-sm mb-3">{service.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <div className="text-xs text-slate-400 mb-1">Features:</div>
                <div className="space-y-1">
                  {service.features.slice(0, 2).map((feature: string, fIdx: number) => (
                    <div key={fIdx} className="flex items-center text-xs text-slate-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Benefits:</div>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit: string, bIdx: number) => (
                    <div key={bIdx} className="flex items-center text-xs text-slate-300">
                      <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-cyan-400 text-sm font-medium">{service.pricing}</div>
              <Link
                to={service.path}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

// Featured Service Card Component
const FeaturedServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    variants={itemVariants}
    className="group"
  >
    <Link to={service.path} className="block h-full">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2">
        <div className="text-center mb-4">
          <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-xs text-cyan-400 font-medium mb-2">{service.category}</div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="space-y-3 mb-4">
          <div className="text-sm text-slate-400 mb-2">Key Features:</div>
          {service.features.slice(0, 3).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center text-xs text-slate-300">
              <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <div className="space-y-3 mb-4">
          <div className="text-sm text-slate-400 mb-2">Benefits:</div>
          {service.benefits.map((benefit: string, idx: number) => (
            <div key={idx} className="flex items-center text-xs text-slate-300">
              <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
              {benefit}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="text-cyan-400 text-sm font-medium mb-2">{service.pricing}</div>
          <div className="text-xs text-slate-400">Click to learn more</div>
        </div>
      </div>
    </Link>
  </motion.div>
);

// Pricing Card Component
const PricingCard = ({ tier, index }: { tier: any; index: number }) => (
  <motion.div
    variants={itemVariants}
    className={`relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}
  >
    <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 h-full ${tier.popular ? 'border-cyan-400/50' : ''}`}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-slate-300 text-sm mb-4">{tier.description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-white">{tier.price}</span>
          <span className="text-slate-400 ml-1">{tier.period}</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {tier.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center text-sm text-slate-300">
            <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
            {feature}
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
          tier.popular
            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
            : 'bg-slate-700 text-white hover:bg-slate-600'
        }`}>
          Get Started
        </button>
      </div>
    </div>
  </motion.div>
);

// Contact Information Component
const ContactInfo = () => (
  <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
    <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-center space-x-3">
        <Phone className="h-6 w-6 text-cyan-400" />
        <div>
          <div className="text-white font-medium">Phone</div>
          <div className="text-slate-300">+1 302 464 0950</div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="h-6 w-6 text-cyan-400" />
        <div>
          <div className="text-white font-medium">Email</div>
          <div className="text-slate-300">kleber@ziontechgroup.com</div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="h-6 w-6 text-cyan-400" />
        <div>
          <div className="text-white font-medium">Address</div>
          <div className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
const MicroSAASSolutionsShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <SEO 
        title="Micro SAAS Solutions Showcase 2025 - Zion Tech Group"
        description="Discover Zion Tech Group's comprehensive micro SAAS solutions including AI-powered business tools, financial management, security, marketing automation, and industry-specific solutions. Transform your business with intelligent automation."
        keywords="micro SAAS, software as a service, business automation, AI tools, cloud solutions, Zion Tech Group"
        canonical="https://ziontechgroup.com/micro-saas-solutions-showcase-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Micro SAAS <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions Showcase 2025</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive portfolio of intelligent micro SAAS solutions designed to transform your business operations
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {['all', 'business-tools', 'financial', 'security', 'marketing', 'development', 'industry'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Micro SAAS Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our most popular and innovative micro SAAS solutions that deliver exceptional value
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {featuredMicroSAAS.map((service, index) => (
                <FeaturedServiceCard key={service.title} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Micro SAAS Categories */}
        <section className="py-20 bg-gradient-to-b from-white/5 to-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Micro SAAS Categories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive solutions organized by category to meet every business need
              </p>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {microSAASCategories.map((category, index) => (
                <MicroSAASCategory key={category.name} category={category} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that best fits your business needs and scale as you grow
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {pricingTiers.map((tier, index) => (
                <PricingCard key={tier.name} tier={tier} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Contact our team to discuss how our micro SAAS solutions can drive your success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Micro SAAS?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Enterprise-Grade Quality</div>
                        <div className="text-slate-300 text-sm">Built with the same technology and security standards as enterprise solutions</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">AI-Powered Intelligence</div>
                        <div className="text-slate-300 text-sm">Advanced AI and machine learning capabilities built into every solution</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Scalable Architecture</div>
                        <div className="text-slate-300 text-sm">Solutions that grow with your business from startup to enterprise</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">24/7 Support</div>
                        <div className="text-slate-300 text-sm">Round-the-clock technical support and monitoring for all solutions</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                  >
                    Schedule a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsShowcase2025;