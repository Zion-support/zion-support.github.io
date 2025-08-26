import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Brain,
  Shield,
  Cloud,
  Globe,
  Zap,
  Settings,
  Users,
  BarChart3,
  Lock,
  Server,
  Code,
  Database,
  Smartphone,
  Monitor,
  Network
} from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions to transform your business operations",
      icon: <Brain className="h-12 w-12 text-zion-cyan" />,
      link: "/services/ai",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Automation", "Neural Networks"]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and ensure compliance",
      icon: <Shield className="h-12 w-12 text-zion-purple" />,
      link: "/services/cybersecurity",
      features: ["Threat Detection", "Vulnerability Assessment", "Security Audits", "Compliance Management", "Incident Response", "Security Training"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation solutions for modern applications",
      icon: <Cloud className="h-12 w-12 text-zion-cyan" />,
      link: "/services/cloud",
      features: ["Cloud Migration", "DevOps Automation", "Container Management", "Infrastructure as Code", "Monitoring & Logging", "Cost Optimization"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation services",
      icon: <Globe className="h-12 w-12 text-zion-purple" />,
      link: "/services/transformation",
      features: ["Process Optimization", "Technology Strategy", "Change Management", "Legacy Modernization", "Digital Strategy", "Innovation Consulting"]
    }
  ];

  const specializedServices = [
    {
      title: "IT Infrastructure",
      description: "Robust and scalable IT infrastructure solutions",
      icon: <Server className="h-10 w-10 text-zion-cyan" />,
      link: "/services/infrastructure"
    },
    {
      title: "Software Development",
      description: "Custom software solutions and application development",
      icon: <Code className="h-10 w-10 text-zion-purple" />,
      link: "/services/software"
    },
    {
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence solutions",
      icon: <BarChart3 className="h-10 w-10 text-zion-cyan" />,
      link: "/services/analytics"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile application development",
      icon: <Smartphone className="h-10 w-10 text-zion-purple" />,
      link: "/services/mobile"
    },
    {
      title: "Network Security",
      description: "Comprehensive network security and monitoring solutions",
      icon: <Network className="h-10 w-10 text-zion-cyan" />,
      link: "/services/network"
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and management services",
      icon: <Database className="h-10 w-10 text-zion-purple" />,
      link: "/services/database"
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant technology solutions for healthcare organizations",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Secure financial technology solutions with regulatory compliance",
      icon: "💳"
    },
    {
      title: "Manufacturing",
      description: "Industry 4.0 and smart manufacturing solutions",
      icon: "🏭"
    },
    {
      title: "Retail",
      description: "E-commerce and retail technology solutions",
      icon: "🛍️"
    },
    {
      title: "Education",
      description: "EdTech solutions for modern learning environments",
      icon: "🎓"
    },
    {
      title: "Government",
      description: "Secure government technology solutions and consulting",
      icon: "🏛️"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-zion-blue-dark/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive technology solutions designed to transform your business and drive innovation
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-zion-purple hover:bg-zion-purple/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-zion-purple/30 text-zion-purple-light hover:bg-zion-purple/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Our flagship services that drive business transformation and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zion-purple/20 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6 text-lg">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple-light transition-colors font-medium"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Specialized Services</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Additional technology services to meet your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-zion-purple/20 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple-light transition-colors text-sm"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Tailored technology solutions designed for specific industry challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-zion-slate-light">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-purple px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
