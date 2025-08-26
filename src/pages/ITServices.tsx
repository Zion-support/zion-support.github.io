import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  BarChart3, 
  FileImage, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  FileText, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Lightbulb,
  Building,
  Wrench,
  Leaf,
  Signal
} from 'lucide-react';

const itServices = [
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    description: 'Build and maintain robust, scalable IT infrastructure that supports your business growth.',
    icon: Server,
    features: ['Network Design', 'Server Management', 'Data Center Solutions', 'Cloud Migration'],
    href: '/it-services/infrastructure',
    color: 'from-zion-cyan to-zion-blue',
    category: 'Infrastructure'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Transform your business operations with cutting-edge digital technologies and strategies.',
    icon: Rocket,
    features: ['Process Automation', 'Legacy System Modernization', 'Change Management', 'ROI Optimization'],
    href: '/it-services/digital-transformation',
    color: 'from-zion-purple to-zion-pink',
    category: 'Transformation'
  },
  {
    id: 'consulting',
    name: 'IT Consulting',
    description: 'Expert guidance to align your technology strategy with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
    href: '/it-services/consulting',
    color: 'from-zion-blue to-zion-cyan',
    category: 'Consulting'
  },
  {
    id: 'onsite-support',
    name: 'Onsite Support',
    description: 'Professional IT support services delivered directly to your location.',
    icon: Wrench,
    features: ['Hardware Installation', 'Network Troubleshooting', 'System Maintenance', 'Emergency Response'],
    href: '/it-services/onsite-support',
    color: 'from-zion-green to-zion-blue',
    category: 'Support'
  },
  {
    id: 'green-it',
    name: 'Green IT Solutions',
    description: 'Sustainable technology solutions that reduce environmental impact and operational costs.',
    icon: Leaf,
    features: ['Energy Efficiency', 'Sustainable Hardware', 'Carbon Footprint Reduction', 'Green Certifications'],
    href: '/it-services/green-it',
    color: 'from-zion-green to-zion-cyan',
    category: 'Sustainability'
  },
  {
    id: '5g-solutions',
    name: '5G Enterprise Solutions',
    description: 'Leverage 5G technology to enable next-generation business applications and connectivity.',
    icon: Signal,
    features: ['5G Network Design', 'Enterprise Applications', 'IoT Integration', 'Performance Optimization'],
    href: '/it-services/5g-solutions',
    color: 'from-zion-purple to-zion-blue',
    category: '5G & Connectivity'
  }
];

const serviceCategories = [
  {
    icon: Server,
    title: 'Infrastructure & Cloud',
    description: 'Robust, scalable infrastructure solutions for modern businesses.',
    services: ['Cloud Migration', 'Server Management', 'Network Design', 'Data Center Solutions']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Comprehensive security solutions to protect your digital assets.',
    services: ['Cybersecurity', 'Compliance Management', 'Risk Assessment', 'Incident Response']
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions that streamline operations.',
    services: ['Process Automation', 'AI Integration', 'Machine Learning', 'Predictive Analytics']
  },
  {
    icon: Users,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services for business modernization.',
    services: ['Strategy Development', 'Process Redesign', 'Technology Implementation', 'Change Management']
  }
];

const benefits = [
  {
    icon: Zap,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring for your critical systems.'
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Tailored IT solutions designed specifically for your business needs and objectives.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 compliance and advanced threat protection.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Stay ahead of the curve with cutting-edge technologies and best practices.'
  }
];

export default function ITServices() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive IT services that drive innovation, ensure security, and accelerate your digital transformation. 
              From infrastructure to AI, we have the expertise to support your technology journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="btn-neon px-8 py-4 text-lg"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We offer a comprehensive range of IT services to meet all your technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From infrastructure to cutting-edge technologies, discover how we can help your business thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.href}>
                  <div className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 p-6 h-full hover:bg-zion-slate-dark/70">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-purple transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and unwavering commitment to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a technology foundation that drives growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}