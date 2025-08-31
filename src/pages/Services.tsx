import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  Atom
} from 'lucide-react';

type Service = {
  title: string;
  description: string;
  priceRange: string;
  learnMoreUrl?: string;
  ctaUrl?: string;
};

const featuredServices: Service[] = [
  {
    title: 'AI Legal Document Automation Platform',
    description: 'AI-powered legal document generation, review, and compliance automation.',
    priceRange: '$299 - $1,999/month',
    learnMoreUrl: '/innovative-services-showcase-2025',
  },
  {
    title: 'AI Healthcare Analytics Platform',
    description: 'Advanced healthcare data analytics with predictive modeling and patient insights.',
    priceRange: '$499 - $2,999/month',
    learnMoreUrl: '/innovative-services-showcase-2025',
  },
  {
    title: 'AI Financial Risk Management Platform',
    description: 'Real-time financial risk assessment and predictive analytics for enterprises.',
    priceRange: '$799 - $3,999/month',
    learnMoreUrl: '/innovative-services-showcase-2025',
  },
  {
    title: 'AI Supply Chain Optimization Platform',
    description: 'Intelligent supply chain management with predictive analytics and automation.',
    priceRange: '$599 - $2,499/month',
    learnMoreUrl: '/innovative-services-showcase-2025',
  },
  {
    title: 'AI Carbon Footprint Management Platform',
    description: 'Environmental impact tracking and sustainability optimization for businesses.',
    priceRange: '$199 - $1,499/month',
    learnMoreUrl: '/innovative-services-showcase-2025',
  },
  {
    title: 'Quantum Edge Computing Solutions',
    description: 'Next-generation quantum computing with edge deployment capabilities.',
    priceRange: '$1,999 - $9,999/month',
    learnMoreUrl: '/innovative-services-showcase-2025',
  },
];

const microSaaS: Service[] = [
  {
    title: 'LeadGen AI Microsite',
    description: 'SEO + AI chat, CRM integration, and analytics for B2B lead capture.',
    priceRange: '$99 - $499/mo',
    learnMoreUrl: 'https://vercel.com/ai',
  },
  {
    title: 'Agentic Support Bot',
    description: 'Retrieval-augmented agent with help center and Slack/Teams connectors.',
    priceRange: '$149 - $999/mo',
    learnMoreUrl: 'https://platform.openai.com/',
  },
  {
    title: 'Automated Reporting Studio',
    description: 'Auto-ingest spreadsheets/CSV, generate dashboards and scheduled PDFs.',
    priceRange: '$79 - $399/mo',
    learnMoreUrl: 'https://www.metabase.com/',
  },
  {
    title: 'Security Posture Scanner',
    description: 'Continuous cloud config checks and CIS benchmarks with alerts.',
    priceRange: '$199 - $1,499/mo',
    learnMoreUrl: 'https://www.aquasec.com/cloud-security/',
  },
  {
    title: 'Image/Doc OCR Pipeline',
    description: 'OCR + LLM extraction for invoices, IDs, and contracts at scale.',
    priceRange: '$0.50 - $2.00 / 1k tokens + hosting',
    learnMoreUrl: 'https://platform.openai.com/docs/guides/vision',
  },
  {
    title: 'Synthetic Data Generator',
    description: 'Privacy-safe tabular and text data generation to augment small datasets.',
    priceRange: '$299 - $1,999/mo',
    learnMoreUrl: 'https://huggingface.co/',
  },
];

const Services: React.FC = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'digital', name: 'Digital Transformation', icon: Zap },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket }
  ];

  const coreServices = [
    {
      category: 'ai',
      icon: Brain,
      title: "AI Business Intelligence Elite",
      description: "Advanced AI-powered analytics platform with real-time insights, predictive analytics, and automated reporting.",
      features: ["GPT-4 & Claude 3.5 Integration", "Real-time BI", "Predictive Analytics", "Enterprise Security"],
      pricing: "$2,500 - $12,000/month",
      color: "from-purple-500 to-pink-500",
      featured: true,
      href: "/services/ai-business-intelligence-elite"
    },
    {
      category: 'security',
      icon: Shield,
      title: "AI Cybersecurity Elite",
      description: "Military-grade AI-powered cybersecurity platform with real-time threat detection and automated response.",
      features: ["AI Threat Detection", "Zero-Day Protection", "Automated Response", "Compliance Ready"],
      pricing: "$3,500 - $18,000/month",
      color: "from-red-500 to-orange-500",
      featured: true,
      href: "/services/ai-cybersecurity-elite"
    },
    {
      category: 'quantum',
      icon: Atom,
      title: "Quantum Computing Elite",
      description: "Access to cutting-edge quantum computing with AI-quantum hybrid systems for complex problem solving.",
      features: ["1000+ Qubit Access", "AI-Quantum Hybrid", "Quantum-Safe Crypto", "Global Network"],
      pricing: "$8,500 - $45,000/month",
      color: "from-blue-500 to-cyan-500",
      featured: true,
      href: "/services/quantum-computing-elite"
    },
    {
      category: 'micro-saas',
      icon: Rocket,
      title: "Micro-SaaS Platform Elite",
      description: "Complete platform to launch and scale your micro-SaaS business with proven templates and automation.",
      features: ["Rapid Launch", "Built-in Payments", "AI Automation", "Multi-tenant Architecture"],
      pricing: "$2,500 - $12,000/month",
      color: "from-green-500 to-emerald-500",
      featured: true,
      href: "/services/micro-saas-platform-elite"
    },
    {
      category: 'ai',
      icon: Brain,
      title: "AI Development & Strategy",
      description: "Custom AI models, machine learning solutions, and strategic AI roadmapping for your business.",
      features: ["Custom AI Models", "ML Strategy", "Model Training", "Deployment Pipeline"],
      pricing: "$5,000 - $50,000/month",
      color: "from-indigo-500 to-purple-500",
      featured: false,
      href: "/services/ai-development-strategy"
    },
    {
      category: 'cloud',
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description: "Scalable cloud solutions with CI/CD pipelines, monitoring, and infrastructure automation.",
      features: ["Multi-Cloud Strategy", "CI/CD Pipelines", "Infrastructure as Code", "24/7 Monitoring"],
      pricing: "$3,000 - $25,000/month",
      color: "from-blue-500 to-cyan-500",
      featured: false,
      href: "/services/cloud-infrastructure-devops"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? coreServices 
    : coreServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of AI-powered technology solutions designed to transform your business
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Featured Services Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our most popular and innovative solutions that are transforming businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="text-cyan-300 font-semibold mb-4">{service.priceRange}</div>
              <div className="flex gap-3">
                {service.learnMoreUrl && (
                  <a
                    href={service.learnMoreUrl}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-100 mb-6">
              Discover our complete range of innovative services and comprehensive pricing options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/innovative-services-showcase-2025"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View All Innovative Services <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/comprehensive-pricing-guide-2025"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                View Complete Pricing Guide <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Core Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive suite of technology solutions designed for modern enterprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="mb-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-cyan-300 font-semibold mb-4">{service.pricing}</div>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and discover how our services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;

