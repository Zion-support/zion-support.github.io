import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Database, 
  Shield, 
  Workflow, 
  Zap, 
  Cloud, 
  Lock, 
  Users,
  BarChart3,
  Globe,
  Cpu,
  Rocket,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Target,
  Code,
  Server,
  Network,
  Bot,
  MessageCircle,
  FileText,
  Search,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          title: 'AI Workflow Orchestrator',
          description: 'Intelligent process automation with AI-driven optimization',
          price: 'From $99/month',
          features: ['Process mapping', 'Smart triggers', 'Performance analytics', 'Compliance tools'],
          href: '/services/ai-workflow-orchestrator',
          popular: true
        },
        {
          title: 'AI Data Governance Platform',
          description: 'Enterprise data protection and compliance automation',
          price: 'From $149/month',
          features: ['Data discovery', 'Compliance management', 'Access control', 'Quality analytics'],
          href: '/services/ai-data-governance-platform',
          popular: false
        },
        {
          title: 'AI Sales Assistant',
          description: 'Intelligent lead qualification and personalized outreach',
          price: 'From $199/month',
          features: ['Lead scoring', 'Personalization', 'Follow-up automation', 'Performance tracking'],
          href: '/services/ai-sales-assistant',
          popular: false
        },
        {
          title: 'AI SEO Auditor',
          description: 'Automated SEO optimization with AI-powered insights',
          price: 'From $149/month',
          features: ['Site audits', 'Keyword optimization', 'Content analysis', 'Performance tracking'],
          href: '/services/ai-seo-auditor',
          popular: false
        }
      ]
    },
    {
      name: 'IT & Infrastructure',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          title: 'Cloud DevOps Platform',
          description: 'Streamlined cloud infrastructure and deployment automation',
          price: 'From $299/month',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Auto-scaling'],
          href: '/services/cloud-devops',
          popular: false
        },
        {
          title: 'IT Infrastructure Management',
          description: 'Comprehensive IT infrastructure monitoring and optimization',
          price: 'From $399/month',
          features: ['Network monitoring', 'Performance optimization', 'Security management', '24/7 support'],
          href: '/services/it-infrastructure',
          popular: false
        },
        {
          title: 'Zero Trust Network Access',
          description: 'Advanced network security with identity-based access control',
          price: 'From $249/month',
          features: ['Identity verification', 'Access control', 'Threat detection', 'Compliance reporting'],
          href: '/services/zero-trust-network-access',
          popular: false
        },
        {
          title: 'Security Headers & CSP',
          description: 'Advanced web security with content security policies',
          price: 'From $99/month',
          features: ['Security headers', 'CSP implementation', 'Vulnerability scanning', 'Compliance monitoring'],
          href: '/services/security-headers-csp',
          popular: false
        }
      ]
    },
    {
      name: 'Business Intelligence',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          title: 'AI Business Intelligence',
          description: 'Intelligent analytics and insights for data-driven decisions',
          price: 'From $399/month',
          features: ['Predictive analytics', 'Data visualization', 'Custom dashboards', 'Real-time insights'],
          href: '/services/ai-business-intelligence',
          popular: false
        },
        {
          title: 'AI Financial Analytics',
          description: 'Advanced financial modeling and risk assessment',
          price: 'From $299/month',
          features: ['Financial modeling', 'Risk analysis', 'Forecasting', 'Compliance reporting'],
          href: '/services/ai-financial-analytics',
          popular: false
        },
        {
          title: 'AI Customer Experience Analytics',
          description: 'Deep insights into customer behavior and satisfaction',
          price: 'From $249/month',
          features: ['Customer journey mapping', 'Sentiment analysis', 'Churn prediction', 'ROI optimization'],
          href: '/services/ai-customer-experience-analytics',
          popular: false
        },
        {
          title: 'Website Analytics Platform',
          description: 'Comprehensive website performance and user behavior tracking',
          price: 'From $99/month',
          features: ['User behavior', 'Performance metrics', 'Conversion tracking', 'A/B testing'],
          href: '/services/website-analytics',
          popular: false
        }
      ]
    },
    {
      name: 'Development & Automation',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          title: 'Developer Productivity Copilot',
          description: 'AI-powered development assistance and code optimization',
          price: 'From $199/month',
          features: ['Code review', 'Test generation', 'CI insights', 'Performance optimization'],
          href: '/services/developer-productivity-copilot',
          popular: false
        },
        {
          title: 'AI Workflow Orchestrator',
          description: 'Intelligent process automation and workflow management',
          price: 'From $99/month',
          features: ['Process mapping', 'Smart triggers', 'Performance analytics', 'Compliance tools'],
          href: '/services/ai-workflow-orchestrator',
          popular: true
        },
        {
          title: 'AI Content Creation Suite',
          description: 'Automated content generation and optimization',
          price: 'From $149/month',
          features: ['Content generation', 'SEO optimization', 'Brand consistency', 'Performance tracking'],
          href: '/services/ai-content-creation-suite',
          popular: false
        },
        {
          title: 'Landing Page Generator',
          description: 'AI-powered landing page creation and optimization',
          price: 'From $79/month',
          features: ['Template library', 'A/B testing', 'Conversion optimization', 'Analytics integration'],
          href: '/services/landing-page-generator',
          popular: false
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_25%,rgba(139,92,246,0.1)_50%,transparent_50%,transparent_75%,rgba(139,92,246,0.1)_75%)] bg-[length:20px_20px] animate-pulse" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 animate-pulse" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.header 
          className="pt-20 pb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4" />
              2025 Innovation Showcase
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Comprehensive Services
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Discover our complete portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology platforms designed to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                Get Started Today
              </motion.button>
              <motion.button 
                className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-5 h-5" />
                Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <motion.section 
            key={category.name}
            className="py-20 px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className={`inline-flex items-center gap-3 p-3 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {category.name}
                  </h2>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Cutting-edge solutions designed to accelerate your digital transformation and drive business growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.title}
                    className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                      service.popular 
                        ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20' 
                        : 'border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (serviceIndex * 0.1), duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="text-2xl font-bold text-purple-400 mb-4">
                        {service.price}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-3">
                      <Link
                        to={service.href}
                        className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                      <motion.button 
                        className="px-6 py-3 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}

        {/* Contact & CTA Section */}
        <motion.section 
          className="py-20 px-6 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-pink-900/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our team to discuss how our innovative services can help you achieve your technology goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <p className="text-white font-semibold">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <p className="text-white font-semibold">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Address</p>
                      <p className="text-white font-semibold">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Quick Contact Form */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                  />
                  <textarea 
                    placeholder="Tell us about your project" 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 resize-none"
                  />
                  <motion.button 
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
