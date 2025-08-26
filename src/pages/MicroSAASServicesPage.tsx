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
  RefreshCw
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
      deployment: '2-3 days'
    },
    {
      id: 2,
      title: 'Project Management Suite',
      description: 'Complete project tracking and team collaboration platform',
      icon: Target,
      features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Resource Planning'],
      useCases: ['Development Teams', 'Creative Agencies', 'Construction Firms', 'Event Planning'],
      pricing: 'Starting at $39/month',
      deployment: '1-2 days'
    },
    {
      id: 3,
      title: 'Inventory Management System',
      description: 'Smart inventory tracking and order management',
      icon: Package,
      features: ['Stock Tracking', 'Order Management', 'Supplier Management', 'Analytics'],
      useCases: ['Retail Stores', 'Manufacturing', 'E-commerce', 'Warehouses'],
      pricing: 'Starting at $49/month',
      deployment: '3-5 days'
    },
    {
      id: 4,
      title: 'Financial Management Platform',
      description: 'Comprehensive financial tracking and reporting',
      icon: BarChart3,
      features: ['Expense Tracking', 'Invoice Management', 'Budget Planning', 'Financial Reports'],
      useCases: ['Small Businesses', 'Freelancers', 'Consultants', 'Startups'],
      pricing: 'Starting at $35/month',
      deployment: '2-4 days'
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

      {/* Micro SAAS Services Grid */}
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
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready-to-deploy software solutions for common business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSAASServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Ideal For:</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <Target className="w-4 h-4 text-zion-purple" />
                          <span className="text-sm">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                    <span className="text-zion-slate-light text-sm">Deploy in {service.deployment}</span>
                  </div>
                  <Link 
                    to="/contact"
                    className="text-zion-cyan hover:text-zion-blue transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 inline" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAAS Solutions Overview */}
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
              SAAS <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Platforms</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Advanced features and capabilities for enterprise-grade applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
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
              Technical <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built with modern technologies for performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cloud, title: 'Cloud-Native', description: 'Built for scalability and reliability' },
              { icon: Lock, title: 'Enterprise Security', description: 'Bank-level security and compliance' },
              { icon: Settings, title: 'Easy Integration', description: 'Simple APIs and webhook support' },
              { icon: Database, title: 'Data Management', description: 'Robust data handling and backup' },
              { icon: Network, title: 'High Availability', description: '99.9% uptime guarantee' },
              { icon: Code, title: 'Custom Development', description: 'Tailored to your specific needs' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Deploy</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get your specialized software solution up and running in days
            </p>
            
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Quick Start</h3>
                  <p className="text-zion-slate-light mb-4">
                    Deploy your solution in as little as 1-3 days
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Start Project
                  </Link>
                </div>
                
                <div className="text-center">
                  <Clock className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Free Consultation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Discuss your needs with our experts
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;