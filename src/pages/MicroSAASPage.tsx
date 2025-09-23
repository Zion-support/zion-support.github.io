import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap,
  Code,
  Database,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  TrendingUp,
  BarChart3,
  Settings,
  Lightbulb,
  Briefcase,
  Award,
  Rocket,
  Target,
  Globe
} from 'lucide-react';
const MicroSAASPage = () => {
  const saasServices = [
    {
      id: 'custom-applications',
      title: 'Custom Applications',
      description: 'Tailored software solutions designed for your specific business needs',
      icon: <Code className="w-8 h-8" />,
      features: ['Custom Development', 'Scalable Architecture', 'User Management', 'API Integration'],
      useCases: ['Business Tools', 'Industry Solutions', 'Process Automation', 'Customer Portals'],
      pricing: 'Starting from $2,500/month'
    },
    {
      id: 'api-development',
      title: 'API Development',
      description: 'Robust and scalable APIs to connect your applications and services',
      icon: <Database className="w-8 h-8" />,
      features: ['RESTful APIs', 'GraphQL Services', 'Authentication', 'Rate Limiting'],
      useCases: ['System Integration', 'Mobile Apps', 'Third-party Services', 'Data Exchange'],
      pricing: 'Starting from $1,800/month'
    },
    {
      id: 'scalable-architecture',
      title: 'Scalable Architecture',
      description: 'Cloud-native architectures that grow with your business',
      icon: <Globe className="w-8 h-8" />,
      features: ['Microservices', 'Containerization', 'Auto-scaling', 'Load Balancing'],
      useCases: ['High-traffic Applications', 'Growing Businesses', 'Enterprise Solutions', 'Global Deployments'],
      pricing: 'Starting from $3,200/month'
    },
    {
      id: 'user-management',
      title: 'User Management',
      description: 'Comprehensive user authentication and authorization systems',
      icon: <Users className="w-8 h-8" />,
      features: ['Single Sign-On', 'Role-based Access', 'Multi-tenancy', 'User Analytics'],
      useCases: ['B2B Applications', 'Enterprise Software', 'Multi-user Platforms', 'SaaS Products'],
      pricing: 'Starting from $1,500/month'
    }
  ];
  const saasBenefits = [
    'Scalability', 'Cost Efficiency', 'Rapid Deployment', 'Easy Updates', 'Accessibility', 'Integration'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Micro SAAS
            </span> Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Build and scale your software-as-a-service business with our micro SAAS solutions.
            From custom applications to scalable architectures, we help you create successful SAAS products.
          </p>
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">90%+</div>
              <div className="text-zion-slate-light">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">50%+</div>
              <div className="text-zion-slate-light">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">24/7</div>
              <div className="text-zion-slate-light">Uptime Support</div>
            </div>
          </div>
        </motion.div>
        {/* SAAS Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {saasServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm text-zion-cyan font-medium">{service.pricing}</div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
              {/* CTA Button */}
              <Link
                to={`/micro-saas/${service.id}`}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {/* SAAS Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Benefits of Micro SAAS
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Discover why micro SAAS solutions are the future of software delivery
              and how they can transform your business.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {saasBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-zion-cyan font-medium">{benefit}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Why Choose Our SAAS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our SAAS Solutions?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rapid Development</h3>
              <p className="text-zion-slate-light">
                Get to market faster with our proven development process
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Built with enterprise-grade security and compliance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scalable Growth</h3>
              <p className="text-zion-slate-light">
                Architecture that grows with your business needs
              </p>
            </div>
          </div>
        </motion.div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your SAAS?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our SAAS experts help you create a successful software product
            that scales with your business and delights your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Start SAAS Project
            </Link>
            <Link
              to="/services/pricing"
              className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View SAAS Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default MicroSAASPage;
