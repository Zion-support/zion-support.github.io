import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  RefreshCw, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence and machine learning services",
      icon: Brain,
      path: "/services/ai",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and development operations",
      icon: Cloud,
      path: "/services/cloud",
      features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Infrastructure as Code"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
      icon: Shield,
      path: "/services/cybersecurity",
      features: ["Threat Detection", "Security Audits", "Compliance", "Incident Response"]
    },
    {
      title: "IT Infrastructure",
      description: "Robust and scalable IT infrastructure solutions",
      icon: Server,
      path: "/services/infrastructure",
      features: ["Network Design", "Server Management", "Database Administration", "Monitoring"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services",
      icon: RefreshCw,
      path: "/services/transformation",
      features: ["Process Automation", "Technology Modernization", "Change Management", "Strategy"]
    },
    {
      title: "Technology Consulting",
      description: "Strategic technology consulting and advisory services",
      icon: Lightbulb,
      path: "/services/consulting",
      features: ["Technology Strategy", "Digital Innovation", "Process Optimization", "Change Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions to drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/solutions" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI and cloud solutions to cybersecurity and digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your technology goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/solutions"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
