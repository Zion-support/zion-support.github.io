import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Server,
  Wifi,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Eye,
  Heart,
  ShoppingCart,
  Lightbulb
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      color: "from-zion-cyan to-zion-purple",
      services: [
        "Zero Trust Architecture",
        "Threat Detection & Response",
        "Penetration Testing",
        "Security Audits & Compliance",
        "Incident Response",
        "Vulnerability Assessment"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and DevOps",
      icon: Cloud,
      color: "from-zion-blue to-zion-cyan",
      services: [
        "Cloud Migration",
        "DevOps Automation",
        "Infrastructure as Code",
        "Container Orchestration",
        "Serverless Architecture",
        "Multi-Cloud Management"
      ]
    },
    {
      title: "Software Development",
      description: "Custom software and application development",
      icon: Code,
      color: "from-zion-purple to-zion-cyan",
      services: [
        "Web Application Development",
        "Mobile App Development",
        "API Development",
        "Microservices Architecture",
        "Legacy System Modernization",
        "Quality Assurance & Testing"
      ]
    },
    {
      title: "Data & Analytics",
      description: "Data-driven insights and business intelligence",
      icon: Database,
      color: "from-zion-cyan to-zion-purple",
      services: [
        "Data Engineering",
        "Business Intelligence",
        "Data Warehousing",
        "Real-time Analytics",
        "Data Visualization",
        "Big Data Processing"
      ]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business transformation services",
      icon: Zap,
      color: "from-zion-blue to-zion-purple",
      services: [
        "Process Optimization",
        "Change Management",
        "Technology Strategy",
        "Legacy Modernization",
        "Digital Strategy",
        "Innovation Consulting"
      ]
    }
  ];

  const emergingTechServices = [
    {
      name: 'Quantum Computing',
      description: 'Quantum computing solutions and consulting',
      features: ['Algorithm development', 'Optimization problems', 'Cryptography', 'Research collaboration'],
      price: 'Starting at $100,000/month'
    },
    {
      name: 'Blockchain & DeFi',
      description: 'Blockchain and DeFi platform development and consulting',
      features: ['Smart contracts', 'DeFi protocols', 'Security auditing', 'Platform development'],
      price: 'Starting at $75,000/month'
    },
    {
      name: 'Space Technology',
      description: 'Space technology innovations and satellite solutions',
      features: ['Satellite design', 'Ground systems', 'Data processing', 'Launch coordination'],
      price: 'Starting at $500,000/month'
    },
    {
      name: 'Biotechnology',
      description: 'Biotech and healthcare technology solutions',
      features: ['Drug discovery', 'Medical devices', 'Data analysis', 'Regulatory compliance'],
      price: 'Starting at $150,000/month'
    },
    {
      name: 'Nanotechnology',
      description: 'Nanotechnology applications and research support',
      features: ['Material development', 'Device fabrication', 'Characterization tools', 'Research collaboration'],
      price: 'Starting at $200,000/month'
    },
    {
      name: 'AR/VR Development',
      description: 'Augmented and virtual reality development services',
      features: ['Content creation', 'Platform development', 'Hardware integration', 'User experience design'],
      price: 'Starting at $45,000/month'
    }
  ];

  const featuredServices = [
    {
      title: "AI Autonomous Business Platform",
      description: "Complete AI-powered business automation platform",
      icon: Rocket,
      features: ["Process Automation", "Decision Intelligence", "Predictive Analytics", "24/7 Operations"],
      link: "/services/ai-autonomous-business"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing services",
      icon: Cpu,
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Research & Development"],
      link: "/services/quantum-computing"
    },
    {
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive security and compliance platform",
      icon: Lock,
      features: ["Threat Intelligence", "Automated Response", "Compliance Management", "Security Training"],
      link: "/services/cybersecurity-suite"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered", description: "Successfully completed" },
    { value: "99.9%", label: "Uptime", description: "Reliable service" },
    { value: "24/7", label: "Support", description: "Round-the-clock assistance" },
    { value: "50+", label: "Technologies", description: "Cutting-edge solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Comprehensive AI and technology solutions to transform your business
            </p>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              From artificial intelligence to cybersecurity, cloud infrastructure to quantum computing, 
              we provide cutting-edge solutions that drive innovation and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our flagship services that deliver exceptional value and results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions across all major domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light mb-6">{category.description}</p>
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                >
                  Explore Services <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Tech Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Emerging Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge solutions that define the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTechServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-zion-cyan font-semibold mb-4">{service.price}</div>
                <Link
                  to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <p className="text-zion-slate-light text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Business</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our innovative technology solutions can accelerate your growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
