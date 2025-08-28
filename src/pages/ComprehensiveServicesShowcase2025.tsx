import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Code, 
  Cloud, 
  Lock,
  TrendingUp,
  Users,
  Cpu,
  Database,
  Network,
  Smartphone,
  Search,
  FileText,
  MessageSquare,
  CreditCard,
  Building,
  Factory,
  Car,
  Heart,
  Scale,
  Palette,
  Camera,
  Video,
  Mic,
  Mail,
  Calendar,
  Target,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      name: 'IT & Infrastructure',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-900/20 to-cyan-900/20'
    },
    {
      name: 'Business Intelligence',
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-900/20 to-teal-900/20'
    },
    {
      name: 'Development & Automation',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-900/20 to-red-900/20'
    }
  ];

  const services = [
    // AI & Machine Learning Services
    {
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent process automation with AI-driven optimization',
      category: 'AI & Machine Learning',
      price: '$99/month',
      features: ['Process Mapping', 'Smart Triggers', 'Performance Analytics'],
      icon: Zap,
      link: '/services/ai-workflow-orchestrator',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Data Governance Platform',
      description: 'Enterprise data protection and compliance automation',
      category: 'AI & Machine Learning',
      price: '$149/month',
      features: ['Data Discovery', 'Compliance Management', 'Access Control'],
      icon: Shield,
      link: '/services/ai-data-governance-platform',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Customer Experience Analytics',
      description: 'Intelligent analytics and insights for data-driven decisions',
      category: 'AI & Machine Learning',
      price: '$99/month',
      features: ['Sentiment Analysis', 'Journey Mapping', 'Churn Prediction'],
      icon: Users,
      link: '/services/ai-customer-experience-analytics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Sales Assistant',
      description: 'Intelligent lead qualification and personalized outreach',
      category: 'AI & Machine Learning',
      price: '$199/month',
      features: ['Lead Scoring', 'Personalization', 'Follow-up Automation'],
      icon: Target,
      link: '/services/ai-sales-copilot',
      color: 'from-purple-500 to-pink-500'
    },
    
    // IT & Infrastructure Services
    {
      title: 'Cloud DevOps Platform',
      description: 'Streamlined cloud infrastructure and deployment automation',
      category: 'IT & Infrastructure',
      price: '$299/month',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring'],
      icon: Cloud,
      link: '/services/cloud-devops',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure monitoring and optimization',
      category: 'IT & Infrastructure',
      price: '$399/month',
      features: ['Network Monitoring', 'Performance Optimization', 'Security'],
      icon: Network,
      link: '/services/it-infrastructure',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Zero Trust Network Access',
      description: 'Advanced network security with identity-based access control',
      category: 'IT & Infrastructure',
      price: '$249/month',
      features: ['Identity Verification', 'Access Control', 'Threat Detection'],
      icon: Lock,
      link: '/services/zero-trust-network-access',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Security Headers & CSP',
      description: 'Advanced web security with content security policies',
      category: 'IT & Infrastructure',
      price: '$99/month',
      features: ['Security Headers', 'CSP Implementation', 'Vulnerability Scanning'],
      icon: Shield,
      link: '/services/security-headers-csp',
      color: 'from-blue-500 to-cyan-500'
    },
    
    // Business Intelligence Services
    {
      title: 'AI Business Intelligence',
      description: 'Intelligent analytics and insights for data-driven decisions',
      category: 'Business Intelligence',
      price: '$199/month',
      features: ['Data Analytics', 'Predictive Modeling', 'Real-time Dashboards'],
      icon: BarChart3,
      link: '/services/ai-business-intelligence',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'AI Financial Analytics',
      description: 'Advanced financial modeling and risk assessment',
      category: 'Business Intelligence',
      price: '$299/month',
      features: ['Financial Modeling', 'Risk Assessment', 'Performance Tracking'],
      icon: CreditCard,
      link: '/services/ai-financial-analytics',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Website Analytics Platform',
      description: 'Comprehensive website performance and user behavior tracking',
      category: 'Business Intelligence',
      price: '$149/month',
      features: ['User Behavior', 'Performance Metrics', 'Conversion Tracking'],
      icon: BarChart3,
      link: '/services/website-analytics',
      color: 'from-emerald-500 to-teal-500'
    },
    
    // Development & Automation Services
    {
      title: 'Developer Productivity Copilot',
      description: 'AI-powered development assistance and code optimization',
      category: 'Development & Automation',
      price: '$199/month',
      features: ['Code Review', 'Bug Detection', 'Performance Optimization'],
      icon: Code,
      link: '/services/ai-autonomous-code-reviewer',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI Content Creation Suite',
      description: 'Automated content generation and optimization',
      category: 'Development & Automation',
      price: '$149/month',
      features: ['Content Generation', 'SEO Optimization', 'Multi-format Support'],
      icon: FileText,
      link: '/services/ai-content-creation-suite',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Landing Page Generator',
      description: 'AI-powered landing page creation and optimization',
      category: 'Development & Automation',
      price: '$99/month',
      features: ['Template Library', 'A/B Testing', 'Conversion Optimization'],
      icon: Globe,
      link: '/services/landing-page-generator',
      color: 'from-orange-500 to-red-500'
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Header */}
      <motion.header 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Zion Tech Group
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive Micro SAAS, IT & AI Services Portfolio 2025
          </motion.p>
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform your business with our cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. 
            Leading the future of technology with real, practical solutions.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Get Started Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>https://ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Services by Category */}
      <motion.section 
        className="py-20 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              className="mb-20"
              variants={itemVariants}
            >
              <div className="text-center mb-12">
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.name}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(service => service.category === category.name)
                  .map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      className={`relative group cursor-pointer`}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link to={service.link}>
                        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.bgColor} border border-slate-600/50 backdrop-blur-sm p-6 h-full transition-all duration-300 group-hover:border-slate-500/70 group-hover:shadow-2xl group-hover:shadow-purple-500/20`}>
                          {/* Service Icon */}
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Service Title */}
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                            {service.title}
                          </h3>
                          
                          {/* Service Description */}
                          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            {service.description}
                          </p>
                          
                          {/* Service Price */}
                          <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
                            {service.price}
                          </div>
                          
                          {/* Service Features */}
                          <div className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* CTA Button */}
                          <div className="mt-auto">
                            <div className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:text-pink-400 transition-colors duration-300">
                              <span>Learn More</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                          
                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Contact Form */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Ready to Transform Your Business?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Contact Information</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    <span>https://ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-pink-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-blue-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Quick Contact</h4>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <textarea 
                    placeholder="Tell us about your project" 
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer CTA */}
      <motion.section 
        className="py-20 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-6">
            Start Your Digital Transformation Journey
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses already leveraging our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/comprehensive-pricing-guide-2025"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              View Pricing
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;