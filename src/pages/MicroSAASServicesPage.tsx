import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Code,
  Settings,
  Cloud,
  Lock,
  RefreshCw,
  Brain,
  Server,
  FileText,
  Smartphone,
  Monitor,
  HardDrive,
  ShieldCheck,
  Search,
  BarChart,
  MessageCircle,
  UserCheck,
  CheckCircle2
} from 'lucide-react';

const MicroSAASServicesPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 1,
      title: 'Customer Relationship Management',
      description: 'Streamlined CRM solution for small to medium businesses',
      icon: Users,
      features: ['Contact Management', 'Sales Pipeline', 'Email Integration', 'Reporting Dashboard'],
      useCases: ['Sales Teams', 'Marketing Agencies', 'Consulting Firms', 'Real Estate'],
      pricing: 'Starting at $29/month',
      deployment: '2-3 days',
      marketSize: '$45.5B',
      growthRate: '12.5% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=crm'
    },
    {
      id: 2,
      title: 'Project Management Suite',
      description: 'Complete project tracking and team collaboration platform',
      icon: Target,
      features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Resource Planning'],
      useCases: ['Development Teams', 'Creative Agencies', 'Construction Firms', 'Event Planning'],
      pricing: 'Starting at $39/month',
      deployment: '1-2 days',
      marketSize: '$6.6B',
      growthRate: '10.8% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=project-management'
    },
    {
      id: 3,
      title: 'Inventory Management System',
      description: 'Smart inventory tracking and order management',
      icon: Package,
      features: ['Stock Tracking', 'Order Management', 'Supplier Management', 'Analytics'],
      useCases: ['Retail Stores', 'Manufacturing', 'E-commerce', 'Warehouses'],
      pricing: 'Starting at $49/month',
      deployment: '3-5 days',
      marketSize: '$2.8B',
      growthRate: '8.9% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=inventory-management'
    },
    {
      id: 4,
      title: 'Financial Management Platform',
      description: 'Comprehensive financial tracking and reporting',
      icon: BarChart3,
      features: ['Expense Tracking', 'Invoice Management', 'Budget Planning', 'Financial Reports'],
      useCases: ['Small Businesses', 'Freelancers', 'Consultants', 'Startups'],
      pricing: 'Starting at $35/month',
      deployment: '2-4 days',
      marketSize: '$3.2B',
      growthRate: '11.2% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=financial-management'
    },
    // New innovative services
    {
      id: 5,
      title: 'AI-Powered Content Creation Suite',
      description: 'Automated content generation and optimization platform',
      icon: Brain,
      features: ['AI Writing Assistant', 'SEO Optimization', 'Content Calendar', 'Performance Analytics'],
      useCases: ['Marketing Teams', 'Content Creators', 'Agencies', 'E-commerce'],
      pricing: 'Starting at $79/month',
      deployment: '1-2 days',
      marketSize: '$21.3B',
      growthRate: '280% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=ai-content-creation'
    },
    {
      id: 6,
      title: 'Quantum-Enhanced Data Analytics',
      description: 'Next-generation analytics with quantum computing capabilities',
      icon: Cpu,
      features: ['Quantum Processing', 'Real-time Analytics', 'Predictive Modeling', 'Data Visualization'],
      useCases: ['Financial Services', 'Healthcare', 'Manufacturing', 'Research Institutions'],
      pricing: 'Starting at $299/month',
      deployment: '5-7 days',
      marketSize: '$23.1B',
      growthRate: '320% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=quantum-analytics'
    },
    {
      id: 7,
      title: 'Autonomous Supply Chain Platform',
      description: 'AI-driven supply chain optimization and management',
      icon: Network,
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
      useCases: ['Manufacturing', 'Retail', 'Logistics', 'Distribution'],
      pricing: 'Starting at $199/month',
      deployment: '7-10 days',
      marketSize: '$25.8B',
      growthRate: '300% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=autonomous-supply-chain'
    },
    {
      id: 8,
      title: 'Edge Computing Management Suite',
      description: 'Distributed computing infrastructure management platform',
      icon: Server,
      features: ['Edge Node Management', 'Load Balancing', 'Security Monitoring', 'Performance Analytics'],
      useCases: ['IoT Networks', 'Smart Cities', 'Manufacturing', 'Healthcare'],
      pricing: 'Starting at $149/month',
      deployment: '3-5 days',
      marketSize: '$19.8B',
      growthRate: '300% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=edge-computing'
    },
    {
      id: 9,
      title: 'Blockchain Business Solutions',
      description: 'Enterprise blockchain implementation and management',
      icon: Shield,
      features: ['Smart Contracts', 'Digital Identity', 'Supply Chain Tracking', 'Token Management'],
      useCases: ['Financial Services', 'Healthcare', 'Real Estate', 'Government'],
      pricing: 'Starting at $399/month',
      deployment: '10-15 days',
      marketSize: '$67.4B',
      growthRate: '87.7% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=blockchain-solutions'
    },
    {
      id: 10,
      title: 'Autonomous Customer Success Platform',
      description: 'AI-driven customer engagement and retention system',
      icon: Users2,
      features: ['Churn Prediction', 'Automated Engagement', 'Success Metrics', 'Personalization'],
      useCases: ['SaaS Companies', 'E-commerce', 'Subscription Services', 'B2B Companies'],
      pricing: 'Starting at $89/month',
      deployment: '2-3 days',
      marketSize: '$17.8B',
      growthRate: '280% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=customer-success'
    },
    {
      id: 11,
      title: 'Quantum Cybersecurity Operations',
      description: 'Next-generation security with quantum-resistant encryption',
      icon: ShieldCheck,
      features: ['Quantum Encryption', 'Threat Detection', 'Incident Response', 'Compliance'],
      useCases: ['Financial Institutions', 'Healthcare', 'Government', 'Critical Infrastructure'],
      pricing: 'Starting at $599/month',
      deployment: '7-10 days',
      marketSize: '$31.2B',
      growthRate: '280% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=quantum-cybersecurity'
    },
    {
      id: 12,
      title: 'Autonomous DevOps Platform',
      description: 'Self-healing development and deployment infrastructure',
      icon: Zap2,
      features: ['Auto-scaling', 'Self-healing Systems', 'Performance Optimization', 'Security Automation'],
      useCases: ['Development Teams', 'DevOps Engineers', 'System Administrators', 'Cloud Architects'],
      pricing: 'Starting at $179/month',
      deployment: '5-7 days',
      marketSize: '$18.7B',
      growthRate: '250% annually',
      contactLink: 'https://ziontechgroup.com/contact?service=autonomous-devops'
    }
  ];

  const saasSolutions = [
    {
      title: 'Custom Dashboard Builder',
      description: 'Create personalized dashboards for your business metrics',
      benefits: ['Real-time Data', 'Custom Widgets', 'Mobile Responsive', 'Easy Integration']
    },
    {
      title: 'Automated Workflow Engine',
      description: 'Streamline business processes with intelligent automation',
      benefits: ['Process Automation', 'Error Reduction', 'Time Savings', 'Scalability']
    },
    {
      title: 'Multi-tenant Architecture',
      description: 'Secure, scalable platform for multiple client organizations',
      benefits: ['Data Isolation', 'Custom Branding', 'Role Management', 'API Access']
    },
    {
      title: 'Analytics & Reporting Suite',
      description: 'Comprehensive business intelligence and reporting tools',
      benefits: ['Custom Reports', 'Data Visualization', 'Export Options', 'Scheduled Delivery']
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Grow with your business needs'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Updates',
      description: 'Regular feature updates and improvements'
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Package className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Micro <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  SAAS
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Specialized software solutions that solve specific business problems. 
                Fast deployment, focused functionality, and immediate value delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <button className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Micro SAAS</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Focused solutions that deliver immediate value without the complexity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Micro SAAS</span> Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Innovative, focused solutions that transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, idx) => (
                      <span key={idx} className="px-3 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-sm rounded-full border border-zion-cyan/20">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Pricing:</span>
                    <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Deployment:</span>
                    <span className="text-zion-cyan font-semibold">{service.deployment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Market Size:</span>
                    <span className="text-zion-cyan font-semibold">{service.marketSize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Growth Rate:</span>
                    <span className="text-zion-cyan font-semibold">{service.growthRate}</span>
                  </div>
                </div>

                <Link
                  to={service.contactLink}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 text-center block"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAAS Solutions Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">SAAS</span> Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive platforms and tools to enhance your micro SAAS offerings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {saasSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-sm text-zion-cyan">{benefit}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our team to discuss your specific needs and discover how our micro SAAS solutions can drive your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
              <p className="text-zion-slate-light">{contactInfo.address}</p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 inline-block"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;
