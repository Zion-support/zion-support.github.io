import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('services');
  const [selectedService, setSelectedService] = useState(null);

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

  const features = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your SaaS solution up and running in days, not months'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and encryption'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise'
    },
    {
      icon: Users,
      title: 'Multi-tenant Ready',
      description: 'Support multiple organizations with data isolation'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time to Market',
      description: 'Launch your SaaS product 10x faster than traditional development'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Reduce development costs by up to 70% with our platform'
    },
    {
      icon: Star,
      title: 'Proven Platform',
      description: 'Built on battle-tested infrastructure used by thousands of businesses'
    },
    {
      icon: Rocket,
      title: 'Continuous Updates',
      description: 'Always have the latest features and security updates'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Package className="w-4 h-4 mr-2" />
                Micro SaaS Solutions
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Micro SaaS{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Launch your SaaS business in days with our pre-built, customizable micro SaaS solutions
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'services', label: 'Services', icon: Package },
              { id: 'solutions', label: 'Solutions', icon: Code },
              { id: 'features', label: 'Features', icon: Star },
              { id: 'benefits', label: 'Benefits', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light hover:bg-zion-blue-dark/50 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Services Tab */}
          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready-to-Deploy SaaS Solutions
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  Choose from our library of pre-built SaaS applications and customize them for your business
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {microSAASServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl mb-6">
                      <service.icon className="w-8 h-8 text-zion-cyan" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-zion-cyan mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                      <div>
                        <span className="text-zion-slate-light">Pricing:</span>
                        <div className="text-white font-medium">{service.pricing}</div>
                      </div>
                      <div>
                        <span className="text-zion-slate-light">Deployment:</span>
                        <div className="text-white font-medium">{service.deployment}</div>
                      </div>
                    </div>
                    
                    <button className="w-full px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Solutions Tab */}
          {activeTab === 'solutions' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  SaaS Platform Solutions
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  Core platform components that power modern SaaS applications
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {saasSolutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-medium text-zion-cyan mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-zion-slate-light">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Platform Features
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  Everything you need to build and scale your SaaS business
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-zion-blue-dark/30 p-6 rounded-xl border border-zion-cyan/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl mb-6 mx-auto">
                      <feature.icon className="w-8 h-8 text-zion-cyan" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Why Choose Our Platform?
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  The advantages of building your SaaS on our proven platform
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-zion-slate-light">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Launch Your SaaS?
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get started today and launch your SaaS business in record time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105">
              Start Building
            </button>
            <button className="px-8 py-4 bg-transparent border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;
