import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  BarChart3,
  Zap,
  Server,
  Cloud,
  Atom,
  PenTool,
  Eye,
  Workflow,
  TrendingUp,
  Users,
  Target,
  MessageCircle,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Rocket,
  Lightbulb,
  Code,
  Database,
  Network,
  Lock,
  Globe,
  Cpu,
  Palette,
  Video,
  Music,
  FileText,
  Calendar,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';
import { comprehensiveServices2025Enhanced, serviceCategories } from '../data/comprehensive-services-2025-enhanced';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Automation Services',
      description: 'Revolutionary AI-powered solutions that transform business operations',
      icon: <Brain className="w-8 h-8" />,
      services: [
        {
          name: 'AI Enterprise Automation Platform',
          description: 'Comprehensive automation platform for enterprise operations and workflow optimization',
          href: '/services/ai-enterprise-automation-platform',
          features: ['Workflow orchestration', 'Process mining', 'RPA integration', 'Real-time analytics'],
          pricing: 'From $299/month',
          icon: <Workflow className="w-6 h-6" />
        },
        {
          name: 'AI Data Analytics Platform',
          description: 'Enterprise-grade AI-powered analytics for business intelligence and predictive insights',
          href: '/services/ai-data-analytics-platform',
          features: ['Predictive analytics', 'Real-time processing', 'Interactive dashboards', 'Data governance'],
          pricing: 'From $199/month',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'AI Business Intelligence',
          description: 'Advanced BI solutions with AI-powered insights and automated reporting',
          href: '/services/ai-business-intelligence',
          features: ['Automated insights', 'Custom dashboards', 'Real-time monitoring', 'Predictive modeling'],
          pricing: 'From $399/month',
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'AI Content Creation & Marketing',
      description: 'Cutting-edge content creation tools powered by artificial intelligence',
      icon: <PenTool className="w-8 h-8" />,
      services: [
        {
          name: 'AI Content Creation Studio',
          description: 'Revolutionary AI-powered platform for creating text, images, videos, and audio content',
          href: '/services/ai-content-creation-studio',
          features: ['AI text generation', 'Image creation', 'Video production', 'Audio synthesis'],
          pricing: 'From $99/month',
          icon: <Sparkles className="w-6 h-6" />
        },
        {
          name: 'AI Marketing Automation Platform',
          description: 'Intelligent marketing automation with AI-driven personalization and optimization',
          href: '/services/ai-marketing-automation-platform',
          features: ['Personalized campaigns', 'Behavioral targeting', 'A/B testing', 'ROI optimization'],
          pricing: 'From $199/month',
          icon: <Target className="w-6 h-6" />
        },
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent AI assistant that helps sales teams close more deals',
          href: '/services/ai-sales-copilot',
          features: ['Lead scoring', 'Sales forecasting', 'Email automation', 'Performance analytics'],
          pricing: 'From $49/month',
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'AI Customer Experience & Analytics',
      description: 'Advanced customer experience solutions with AI-powered insights',
      icon: <Eye className="w-8 h-8" />,
      services: [
        {
          name: 'AI Customer Experience Analytics Platform',
          description: 'Comprehensive analytics platform for understanding and optimizing customer experiences',
          href: '/services/ai-customer-experience-analytics-platform',
          features: ['Customer insights', 'Journey mapping', 'Sentiment analysis', 'Predictive behavior'],
          pricing: 'From $199/month',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'AI Customer Support Automation',
          description: 'Intelligent customer support with automated responses and human-like interactions',
          href: '/services/ai-customer-support-automation',
          features: ['24/7 support', 'Natural language processing', 'Ticket routing', 'Knowledge base'],
          pricing: 'From $149/month',
          icon: <MessageCircle className="w-6 h-6" />
        },
        {
          name: 'AI HR Management Platform',
          description: 'Comprehensive HR management with AI-powered recruitment and employee analytics',
          href: '/services/ai-hr-management-platform',
          features: ['Smart recruitment', 'Employee analytics', 'Performance tracking', 'Compliance management'],
          pricing: 'From $299/month',
          icon: <Users className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'AI Cybersecurity & Security',
      description: 'Next-generation security solutions powered by AI and quantum computing',
      icon: <Shield className="w-8 h-8" />,
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced AI-powered cybersecurity with real-time threat detection and response',
          href: '/services/ai-cybersecurity-platform',
          features: ['Threat detection', 'Behavioral analysis', 'Automated response', 'Compliance reporting'],
          pricing: 'From $399/month',
          icon: <Lock className="w-6 h-6" />
        },
        {
          name: 'Quantum AI Cybersecurity Platform',
          description: 'Next-generation security combining quantum computing and AI for unbreakable protection',
          href: '/services/quantum-ai-cybersecurity-platform',
          features: ['Quantum encryption', 'AI threat detection', 'Post-quantum crypto', 'Zero-day prevention'],
          pricing: 'From $799/month',
          icon: <Atom className="w-6 h-6" />
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Intelligent compliance management with automated monitoring and reporting',
          href: '/services/ai-compliance-assistant',
          features: ['Regulatory monitoring', 'Automated reporting', 'Risk assessment', 'Audit trails'],
          pricing: 'From $199/month',
          icon: <CheckCircle className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud Solutions',
      description: 'Enterprise-grade infrastructure and cloud management services',
      icon: <Server className="w-8 h-8" />,
      services: [
        {
          name: 'IT Infrastructure Management',
          description: 'Comprehensive IT infrastructure management with 24/7 monitoring and optimization',
          href: '/services/it-infrastructure-management',
          features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Disaster recovery'],
          pricing: 'From $599/month',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Cloud & DevOps Solutions',
          description: 'Modern cloud infrastructure and DevOps practices for scalable applications',
          href: '/services/cloud-devops',
          features: ['Cloud migration', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging'],
          pricing: 'From $399/month',
          icon: <Cloud className="w-6 h-6" />
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization platform that reduces spending and improves resource utilization',
          href: '/services/cloud-finops-optimizer',
          features: ['Cost monitoring', 'Resource optimization', 'Budget management', 'Multi-cloud support'],
          pricing: 'From $99/month',
          icon: <DollarSign className="w-6 h-6" />
        }
      ]
    },
    {
      title: 'Quantum Computing & Emerging Tech',
      description: 'Cutting-edge quantum computing and emerging technology solutions',
      icon: <Atom className="w-8 h-8" />,
      services: [
        {
          name: 'AI Quantum Neural Network Platform',
          description: 'Revolutionary platform combining quantum computing and neural networks',
          href: '/services/ai-quantum-neural-network-platform',
          features: ['Quantum neural networks', 'AI acceleration', 'Quantum advantage', 'Research applications'],
          pricing: 'From $999/month',
          icon: <Brain className="w-6 h-6" />
        },
        {
          name: 'Quantum Edge Computing Solutions',
          description: 'Next-generation edge computing with quantum processing capabilities',
          href: '/services/quantum-edge-computing-solutions',
          features: ['Quantum edge processing', 'Low latency', 'Distributed computing', 'IoT integration'],
          pricing: 'From $699/month',
          icon: <Network className="w-6 h-6" />
        },
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Enterprise-grade blockchain solutions for secure and transparent operations',
          href: '/services/blockchain-enterprise-solutions',
          features: ['Smart contracts', 'Supply chain tracking', 'Digital identity', 'DeFi solutions'],
          pricing: 'From $499/month',
          icon: <Globe className="w-6 h-6" />
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: '10x Faster Implementation',
      description: 'Our AI-powered solutions reduce implementation time from months to weeks'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '40-60% Cost Reduction',
      description: 'Significant cost savings through automation and optimization'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '99.9% Uptime Guarantee',
      description: 'Enterprise-grade reliability with comprehensive SLA guarantees'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from our team of certified professionals'
    }
  ];

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return <Code className="w-6 h-6" />;
      case 'AI Solutions': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Digital Twin': return <Globe className="w-6 h-6" />;
      case 'Sustainable Tech': return <Leaf className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-blue-600 to-cyan-700';
      case 'AI Solutions': return 'from-purple-600 to-indigo-700';
      case 'IT Services': return 'from-green-600 to-emerald-700';
      case 'Digital Twin': return 'from-orange-600 to-red-700';
      case 'Sustainable Tech': return 'from-green-500 to-emerald-600';
      default: return 'from-gray-600 to-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Services Showcase 2025
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-zion-cyan mb-4"
            >
              Comprehensive Services Showcase 2025
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Discover our complete portfolio of innovative micro SaaS, IT services, and AI solutions 
              designed to transform your business in 2025 and beyond. From AI-powered automation to 
              quantum computing solutions, we have everything you need to stay ahead of the competition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/pricing-guide"
                className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors text-lg"
              >
                View Pricing Guide
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-lg"
              >
                Call: +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive service portfolio delivers unmatched value, innovation, and results 
              for businesses of all sizes across every industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category. Each service is designed 
              to work independently or integrate seamlessly with others for maximum business impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      className="bg-zion-blue-darker border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                          <p className="text-sm text-zion-slate-light">{service.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="text-xs text-zion-slate-light flex items-center">
                              <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-zion-slate-light">
                          Starting at: <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                        </div>
                      </div>

                      <Link
                        to={service.href}
                        className="w-full bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zion-cyan-light transition-colors text-center block"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-zion-blue-dark border border-zion-cyan/30 rounded-lg p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to help you implement the perfect combination of services 
                for your business needs. Get in touch today for a personalized consultation and demo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors text-lg"
                >
                  Get Started Today
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-lg"
                >
                  Call Now: +1 302 464 0950
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">50+</div>
                  <div className="text-zion-slate-light">Services Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-slate-light">Expert Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">30-Day</div>
                  <div className="text-zion-slate-light">Money Back Guarantee</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
