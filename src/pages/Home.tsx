import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  TrendingUp,
  PenTool
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Link } from 'react-router-dom';

// Lazy load heavy components
const CategoriesSection = React.lazy(() => import("@/components/CategoriesSection"));
const BenefitsSection = React.lazy(() => import("@/components/BenefitsSection"));
const HowItWorksSection = React.lazy(() => import("@/components/HowItWorksSection"));
const NewsletterSection = React.lazy(() => import("@/components/NewsletterSection"));
const FeaturedListingsSection = React.lazy(() => import("@/components/FeaturedListingsSection"));
const QuickAccess = React.lazy(() => import("@/components/home/QuickAccess"));
const FeatureCTAs = React.lazy(() => import("@/components/home/FeatureCTAs"));
const FeatureHighlights = React.lazy(() => import("@/components/home/FeatureHighlights"));
const ITServiceRequestHero = React.lazy(() => import("@/components/home/ITServiceRequestHero"));
const FloatingCTA = React.lazy(() => import("@/components/FloatingCTA"));
const PricingSection = React.lazy(() => import("@/components/PricingSection"));
const TechSolutionsSection = React.lazy(() => import("@/components/TechSolutionsSection"));
const CaseStudiesSection = React.lazy(() => import("@/components/CaseStudiesSection"));
const TeamExpertiseSection = React.lazy(() => import("@/components/TeamExpertiseSection"));
const GlobalPresenceSection = React.lazy(() => import("@/components/GlobalPresenceSection"));
const InnovationResearchSection = React.lazy(() => import("@/components/InnovationResearchSection"));
const ClientSuccessStoriesSection = React.lazy(() => import("@/components/ClientSuccessStoriesSection"));
const TechnologyStackSection = React.lazy(() => import("@/components/TechnologyStackSection"));
const SecurityComplianceSection = React.lazy(() => import("@/components/SecurityComplianceSection"));
const AIServicesShowcase = React.lazy(() => import("@/components/AIServicesShowcase"));
const InteractiveTestimonials = React.lazy(() => import("@/components/InteractiveTestimonials"));
const ServicesShowcase = React.lazy(() => import("@/components/ServicesShowcase"));
const EnhancedServicesShowcase = React.lazy(() => import("@/components/EnhancedServicesShowcase"));

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface AIService {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  href: string;
  color: string;
}

interface ServiceCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  count: number;
  color: string;
  services: string[];
}

interface EmergingTech {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  price: string;
  category: string;
}

interface MicroSaasService {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  price: string;
  category: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const stats: StatItem[] = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500"
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: Brain,
      color: "from-cyan-400 to-blue-500"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: Clock,
      color: "from-blue-400 to-indigo-500"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services",
      icon: Shield,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const aiServices: AIService[] = [
    {
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and machine learning",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"],
      href: "/services/ai-business-intelligence",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "AI Compliance Assistant",
      description: "Automate regulatory compliance with AI-powered monitoring and reporting",
      icon: Shield,
      features: ["Automated Auditing", "Risk Assessment", "Compliance Reporting"],
      href: "/services/ai-compliance-assistant",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "AI Sales Copilot",
      description: "Boost sales performance with intelligent lead scoring and customer insights",
      icon: Users,
      features: ["Lead Scoring", "Customer Insights", "Sales Forecasting"],
      href: "/services/ai-sales-copilot",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const serviceCategories: ServiceCategory[] = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      href: "/ai-services",
      count: 25,
      color: "from-cyan-400 to-blue-500",
      services: ["AI Business Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      href: "/cloud-devops",
      count: 18,
      color: "from-blue-400 to-indigo-500",
      services: ["AWS/Azure/GCP", "Container Orchestration", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive security and compliance solutions for modern businesses",
      icon: Shield,
      href: "/cybersecurity",
      count: 22,
      color: "from-red-400 to-pink-500",
      services: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Incident Response"]
    },
    {
      name: "Digital Transformation",
      description: "End-to-end digital modernization and process optimization services",
      icon: Rocket,
      href: "/digital-transformation",
      count: 15,
      color: "from-purple-400 to-pink-500",
      services: ["Process Automation", "Legacy Modernization", "Change Management", "Digital Strategy"]
    }
  ];

  const emergingTech: EmergingTech[] = [
    {
      title: "Quantum Computing Solutions",
      description: "Harness quantum mechanics for complex problem solving",
      icon: Atom,
      href: "/services/quantum-computing",
      price: "From $8,000/month",
      category: "Emerging Tech"
    },
    {
      title: "Edge AI Processing",
      description: "Real-time AI processing at the network edge",
      icon: Cpu,
      href: "/services/edge-ai",
      price: "From $3,500/month",
      category: "AI & ML"
    },
    {
      title: "Blockchain Integration",
      description: "Secure, transparent blockchain solutions for business",
      icon: Lock,
      href: "/services/blockchain",
      price: "From $4,200/month",
      category: "Security"
    }
  ];

  const microSaasServices: MicroSaasService[] = [
    {
      title: "AI Content Generator",
      description: "Automated content creation for marketing teams",
      icon: PenTool,
      href: "/services/ai-content-generator",
      price: "$99/month",
      category: "Content"
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business intelligence and reporting",
      icon: BarChart3,
      href: "/services/smart-analytics",
      price: "$149/month",
      category: "Analytics"
    },
    {
      title: "Automated Customer Support",
      description: "AI-powered customer service automation",
      icon: MessageCircle,
      href: "/services/automated-support",
      price: "$79/month",
      category: "Support"
    }
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <SEO 
        title="Zion Tech Group - AI-Powered Business Solutions & Digital Transformation"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, cloud infrastructure, and digital transformation services. Drive innovation and growth."
        keywords="AI solutions, digital transformation, cloud services, cybersecurity, business intelligence, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Access to Key Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with our most popular solutions in just a few clicks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={category.href}
                  className="block p-6 bg-white rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium">
                      {category.count} services
                    </span>
                    <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leverage the power of artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself. See why hundreds of companies choose Zion Tech Group 
              for their digital transformation needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="text-lg font-semibold text-purple-100 mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-purple-200 text-center">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Emerging Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our cutting-edge technology solutions that are shaping 
              the future of business and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergingTech.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
                      {tech.category}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {tech.price}
                    </span>
                  </div>
                  
                  <Link
                    to={tech.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Explore Technology
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Micro SaaS <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Affordable, focused solutions that deliver immediate value without the complexity 
              of enterprise software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {service.price}
                    </span>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of companies that have already accelerated their digital transformation 
              with Zion Tech Group. Let's build the future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </>
  );
});

// Loading fallback component
const LoadingFallback = ({ message }: { message: string })   => (
  <div className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-slate-700 rounded-lg mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-slate-700 rounded-lg max-w-2xl mx-auto"></div>
        </div>
        <p className="text-slate-400 mt-4">{message}</p>
      </div>
    </div>
  </div>
);

// Service categories data
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: "🤖",
    href: "/ai-services",
    count: 20,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Edge & IoT",
    description: "Ultra-low latency edge computing and IoT platform solutions",
    icon: "⚡",
    href: "/services/edge-computing-platform",
    count: 8,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    href: "/services/cloud-devops",
    count: 12,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/ai-compliance-copilot",
    count: 10,
    color: "from-red-500 to-orange-600"
  },
  {
    name: "Data Governance",
    description: "AI-powered data protection and compliance management",
    icon: "🛡️",
    href: "/services/ai-data-governance",
    count: 6,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Customer Success",
    description: "AI-driven customer engagement and retention platforms",
    icon: "💝",
    href: "/services/ai-customer-success-platform",
    count: 5,
    color: "from-yellow-500 to-orange-600"
  }
];

// Animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stats data
const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Global Clients",
    description: "Trusted worldwide"
  },
  {
    icon: Rocket,
    value: "1000+",
    label: "Projects Delivered",
    description: "Successfully completed"
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise reliability"
  },
  {
    icon: Star,
    value: "24/7",
    label: "Expert Support",
    description: "Always available"
  }
];

// AI Services data
const aiServices = [
  {
    icon: Brain,
    title: "AI Business Intelligence",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    path: "/services/ai-business-intelligence",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Automated Reporting",
      "Custom ML Models"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud DevOps",
    description: "Streamline your development pipeline with automated cloud infrastructure.",
    path: "/services/cloud-devops",
    features: [
      "CI/CD Automation",
      "Infrastructure as Code",
      "Container Orchestration",
      "Security Integration"
    ]
  },
  {
    icon: Shield,
    title: "AI Cybersecurity",
    description: "Protect your business with intelligent threat detection and response systems.",
    path: "/services/ai-cybersecurity-suite",
    features: [
      "Threat Intelligence",
      "Automated Response",
      "Zero Trust Architecture",
      "Compliance Monitoring"
    ]
  }
];

// Why Choose Us data
const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "15+ years of proven technology leadership and innovation"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 50+ countries with 24/7 support"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance standards"
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "98% customer satisfaction with dedicated success managers"
  }
];

// Trust Signals data
const trustSignals = [
  {
    icon: Award,
    label: "ISO 27001 Certified",
    description: "Information security management"
  },
  {
    icon: Shield,
    label: "SOC 2 Compliant",
    description: "Security, availability, and confidentiality"
  },
  {
    icon: Globe,
    label: "GDPR Ready",
    description: "Data protection compliance"
  },
  {
    icon: Star,
    label: "99.9% Uptime",
    description: "Enterprise-grade reliability"
  }
];

export default function Home(...args: any[]): any {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    // Handle get started action
    // console.log('Get Started clicked');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <FuturisticBackground />
      
      <HeroSection onGetStarted={handleGetStarted} />
      <StatsSection />
      <FeaturedServices />

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss how our innovative services can drive your success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((category, index)   => (
              <motion.div
                key={category.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-lg"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Access Section */}
      <Suspense fallback={<LoadingFallback message="Loading Quick Access..." />}>
        <QuickAccess />
      </Suspense>

      {/* Feature Highlights */}
      <Suspense fallback={<LoadingFallback message="Loading Features..." />}>
        <FeatureHighlights />
      </Suspense>

      {/* Tech Solutions Section */}
      <Suspense fallback={<LoadingFallback message="Loading Tech Solutions..." />}>
        <TechSolutionsSection />
      </Suspense>

      {/* Case Studies Section */}
      <Suspense fallback={<LoadingFallback message="Loading Case Studies..." />}>
        <CaseStudiesSection />
      </Suspense>

      {/* Team Expertise Section */}
      <Suspense fallback={<LoadingFallback message="Loading Team Expertise..." />}>
        <TeamExpertiseSection />
      </Suspense>

      {/* Technology Stack Section */}
      <Suspense fallback={<LoadingFallback message="Loading Technology Stack..." />}>
        <TechnologyStackSection />
      </Suspense>

      {/* Security & Compliance Section */}
      <Suspense fallback={<LoadingFallback message="Loading Security & Compliance..." />}>
        <SecurityComplianceSection />
      </Suspense>

      {/* AI Services Showcase */}
      <Suspense fallback={<LoadingFallback message="Loading AI Services..." />}>
        <AIServicesShowcase />
      </Suspense>

      {/* Interactive Testimonials */}
      <Suspense fallback={<LoadingFallback message="Loading Testimonials..." />}>
        <InteractiveTestimonials />
      </Suspense>

      {/* Services Showcase */}
      <Suspense fallback={<LoadingFallback message="Loading Services..." />}>
        <ServicesShowcase />
      </Suspense>

      {/* Feature CTAs */}
      <Suspense fallback={<LoadingFallback message="Loading Features..." />}>
        <FeatureCTAs />
      </Suspense>

      {/* Pricing Section */}
      <Suspense fallback={<LoadingFallback message="Loading Pricing..." />}>
        <PricingSection />
      </Suspense>

      {/* Global Presence Section */}
      <Suspense fallback={<LoadingFallback message="Loading Global Presence..." />}>
        <GlobalPresenceSection />
      </Suspense>

      {/* Innovation & Research Section */}
      <Suspense fallback={<LoadingFallback message="Loading Innovation..." />}>
        <InnovationResearchSection />
      </Suspense>

      {/* Client Success Stories */}
      <Suspense fallback={<LoadingFallback message="Loading Success Stories..." />}>
        <ClientSuccessStoriesSection />
      </Suspense>

      {/* Categories Section */}
      <Suspense fallback={<LoadingFallback message="Loading Categories..." />}>
        <CategoriesSection />
      </Suspense>

      {/* Benefits Section */}
      <Suspense fallback={<LoadingFallback message="Loading Benefits..." />}>
        <BenefitsSection />
      </Suspense>

      {/* How It Works Section */}
      <Suspense fallback={<LoadingFallback message="Loading How It Works..." />}>
        <HowItWorksSection />
      </Suspense>

      {/* Featured Listings Section */}
      <Suspense fallback={<LoadingFallback message="Loading Featured Listings..." />}>
        <FeaturedListingsSection />
      </Suspense>

      {/* Newsletter Section */}
      <Suspense fallback={<LoadingFallback message="Loading Newsletter..." />}>
        <NewsletterSection />
      </Suspense>

      {/* Floating CTA */}
      <Suspense fallback={null}>
        <FloatingCTA />
      </Suspense>
    </div>
  );
};

export default Home;
