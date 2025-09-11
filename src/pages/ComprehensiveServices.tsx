import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Database, 
  Rocket, 
  Target, 
  Users, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Workflow,
  Atom,
  MessageCircle,
  PenTool,
  Calendar,
  Heart,
  DollarSign,
  ShoppingBag,
  Settings,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react';
import { SEO } from '../components/SEO';

const ComprehensiveServices: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      services: [
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence" },
        { name: "AI Workflow Automation", path: "/services/ai-workflow-automation" },
        { name: "AI Cybersecurity", path: "/services/ai-cybersecurity" },
        { name: "AI Content Generation", path: "/services/ai-content-generator" }
      ],
      featured: true
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: Atom,
      services: [
        { name: "Quantum Computing Solutions", path: "/services/quantum-computing-solutions" },
        { name: "Quantum Neural Networks", path: "/services/quantum-neural-networks" },
        { name: "Quantum Financial Trading", path: "/services/quantum-financial-trading" }
      ],
      featured: true
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure solutions",
      icon: Cloud,
      services: [
        { name: "Cloud DevOps", path: "/services/cloud-devops" },
        { name: "Cloud FinOps Optimization", path: "/services/cloud-finops-optimizer" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure" }
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Smart device solutions",
      icon: Cpu,
      services: [
        { name: "IoT Edge Computing", path: "/services/iot-edge-computing" },
        { name: "Digital Twin Platform", path: "/services/digital-twin" },
        { name: "Smart Manufacturing", path: "/services/manufacturing-solutions" }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      description: "Productized business tools",
      icon: Rocket,
      services: [
        { name: "Micro SaaS Solutions", path: "/services/micro-saas-solutions" },
        { name: "Micro CRM", path: "/services/micro-crm" },
        { name: "Website Analytics", path: "/services/website-analytics" }
      ]
    },
    {
      title: "Business Intelligence",
      description: "Data-driven insights",
      icon: BarChart3,
      services: [
        { name: "Data Analytics", path: "/services/data-analytics" },
        { name: "AI Data Analytics", path: "/services/ai-data-analytics" },
        { name: "Business Intelligence", path: "/services/ai-business-intelligence" }
      ]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services - Zion Tech Group"
        description="Explore our complete portfolio of innovative technology solutions including AI, Quantum Computing, Cloud DevOps, IoT, and Micro SaaS services."
        keywords="technology services, AI solutions, quantum computing, cloud services, IoT solutions, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              From artificial intelligence to quantum computing, discover our complete portfolio 
              of innovative solutions designed to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-cyan-400 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Service Categories</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet 
              every aspect of your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${
                  category.featured ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-blue-500/5' : 'border-slate-700/50'
                }`}
              >
                {category.featured && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-semibold">Featured Category</span>
                  </div>
                )}
                
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-slate-300 mb-6">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link
                        to={service.path}
                        className="flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={`/services#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  View All {category.title}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive technology services can revolutionize 
              your operations and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServices;