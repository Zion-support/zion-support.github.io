import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Network, 
  Smartphone, 
  FileText, 
  Target, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Heart, 
  Lock, 
  Eye, 
  Atom, 
  Leaf, 
  Gamepad2, 
  Coins, 
  Satellite, 
  Activity, 
  MessageCircle, 
  Server, 
  ShoppingCart, 
  Clock, 
  Code, 
  BookOpen, 
  Truck, 
  Building,
  DollarSign,
  Briefcase,
  Newspaper,
  HelpCircle,
  Video,
  TestTube,
  GraduationCap,
  GitFork,
  ExternalLink,
  ChevronDown,
  Copyright,
  MessageSquare
} from 'lucide-react';

interface Service {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  features: string[];
}

interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  services: Service[];
}

const featuredServices = [
  {
    name: 'AI Solutions',
    href: '/ai-services',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cloud & DevOps',
    href: '/services/cloud-devops',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Cybersecurity',
    href: '/services/cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Micro SaaS',
    href: '/micro-saas',
    icon: Zap,
    color: 'from-green-500 to-emerald-500'
  }
];

const featuredCategories = [
  {
    title: 'AI-Powered Solutions',
    desc: 'Cutting-edge artificial intelligence services',
    href: '/ai-services'
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Scalable cloud solutions and DevOps',
    href: '/services/cloud-devops'
  },
  {
    title: 'Cybersecurity',
    desc: 'Advanced security and compliance',
    href: '/services/cybersecurity'
  }
];

const serviceCategories: ServiceCategory[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Transform your business with cutting-edge AI solutions',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    services: [
      {
        name: 'AI Workflow Orchestrator',
        description: 'Automate complex business processes with AI',
        href: '/services/ai-workflow-orchestrator',
        icon: TrendingUp,
        color: 'from-purple-500 to-pink-500',
        features: ['Process Automation', 'Intelligent Routing', 'Performance Analytics']
      },
      {
        name: 'AI Data Governance Platform',
        description: 'Ensure data quality and compliance',
        href: '/services/ai-data-governance-platform',
        icon: Shield,
        color: 'from-blue-500 to-cyan-500',
        features: ['Data Quality', 'Compliance Monitoring', 'Risk Assessment']
      },
      {
        name: 'AI Customer Experience Analytics',
        description: 'Understand customer behavior with AI insights',
        href: '/services/ai-customer-experience-analytics',
        icon: BarChart3,
        color: 'from-green-500 to-emerald-500',
        features: ['Behavior Analysis', 'Predictive Insights', 'Personalization']
      }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Build scalable and resilient cloud solutions',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    services: [
      {
        name: 'Cloud DevOps',
        description: 'Streamline development and deployment',
        href: '/services/cloud-devops',
        icon: Zap,
        color: 'from-blue-500 to-cyan-500',
        features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring']
      },
      {
        name: 'IT Infrastructure',
        description: 'Modernize your technology foundation',
        href: '/services/it-infrastructure',
        icon: Server,
        color: 'from-gray-500 to-slate-500',
        features: ['Network Design', 'Hardware Optimization', 'Security']
      },
      {
        name: 'Data Analytics',
        description: 'Turn data into actionable insights',
        href: '/services/data-analytics',
        icon: BarChart3,
        color: 'from-green-500 to-emerald-500',
        features: ['Data Processing', 'Visualization', 'Machine Learning']
      }
    ]
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Protect your business with advanced security solutions',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    services: [
      {
        name: 'Zero Trust Network Access',
        description: 'Secure access to your network resources',
        href: '/services/zero-trust-network-access',
        icon: Lock,
        color: 'from-red-500 to-orange-500',
        features: ['Identity Verification', 'Access Control', 'Threat Detection']
      },
      {
        name: 'AI Compliance Assistant',
        description: 'Automate compliance monitoring and reporting',
        href: '/services/ai-compliance-assistant',
        icon: CheckCircle,
        color: 'from-green-500 to-emerald-500',
        features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment']
      },
      {
        name: 'Security Headers CSP',
        description: 'Implement content security policies',
        href: '/services/security-headers-csp',
        icon: Shield,
        color: 'from-blue-500 to-cyan-500',
        features: ['Content Security', 'XSS Protection', 'Data Integrity']
      }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    description: 'Specialized software solutions for specific business needs',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    services: [
      {
        name: 'AI Sales Copilot',
        description: 'Enhance sales performance with AI assistance',
        href: '/services/ai-sales-copilot',
        icon: Users,
        color: 'from-purple-500 to-pink-500',
        features: ['Lead Scoring', 'Sales Automation', 'Performance Analytics']
      },
      {
        name: 'Micro CRM',
        description: 'Streamlined customer relationship management',
        href: '/services/micro-crm',
        icon: Users,
        color: 'from-blue-500 to-cyan-500',
        features: ['Contact Management', 'Sales Tracking', 'Customer Insights']
      },
      {
        name: 'Website Analytics',
        description: 'Comprehensive website performance insights',
        href: '/services/website-analytics',
        icon: BarChart3,
        color: 'from-green-500 to-emerald-500',
        features: ['Performance Metrics', 'User Behavior', 'Conversion Tracking']
      }
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of AI, IT, and Micro SaaS solutions designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={service.href}
                    className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-5 h-5 mr-2" />
                    {service.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization
            </p>
          </motion.div>
          
          <div className="mt-8 text-center space-y-4">
            <Link to="/comprehensive-services-showcase-2025" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Our Comprehensive Services Showcase 2025
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <div>
              <Link to="/innovative-ai-services" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold">
                <TrendingUp className="w-5 h-5 ml-2" />
                Discover Our Innovative AI Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((c) => (
              <Link key={c.title} to={c.href} className="block bg-slate-900/60 border border-cyan-400/15 hover:border-cyan-400/40 rounded-2xl p-6 text-left">
                <div className="text-xs uppercase tracking-wide text-cyan-300/70">Featured</div>
                <div className="mt-2 text-xl font-semibold">{c.title}</div>
                <div className="text-sm text-slate-300">{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-cyan-400/20"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                    <p className="text-gray-400 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link
                        to={service.href}
                        className="block bg-zion-slate/30 rounded-xl p-6 border border-zion-slate/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-zion-slate/50"
                      >
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-purple-dark to-zion-cyan">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-purple-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/comprehensive-services-showcase-2025"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-purple-dark transition-colors duration-300"
              >
                View All Services
                <ChevronDown className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}