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
  Award
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
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
      color: "from-red-500 to-orange-500",
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
      color: "from-blue-500 to-cyan-500",
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
      color: "from-green-500 to-emerald-500",
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
      color: "from-indigo-500 to-purple-500",
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
      description: "Transform your business with innovative technology",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      services: [
        "Business Process Automation",
        "Digital Strategy Consulting",
        "Change Management",
        "Technology Roadmapping",
        "Legacy System Modernization",
        "Digital Innovation Labs"
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected devices and edge intelligence",
      icon: Cpu,
      color: "from-green-500 to-blue-500",
      services: [
        "IoT Platform Development",
        "Edge Computing Solutions",
        "Sensor Integration",
        "Real-time Data Processing",
        "IoT Security",
        "Smart City Solutions"
      ]
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized and blockchain solutions",
      icon: Lock,
      color: "from-purple-500 to-indigo-500",
      services: [
        "Smart Contract Development",
        "DeFi Platform Development",
        "NFT Marketplace",
        "Blockchain Infrastructure",
        "Web3 Applications",
        "Cryptocurrency Solutions"
      ]
    }
  ];

  const featuredServices = [
    {
      title: "Quantum-Classical Hybrid AI",
      description: "Revolutionary AI platform combining quantum computing with classical AI algorithms",
      price: "$15,999/month",
      features: [
        "Quantum-classical algorithm orchestration",
        "Quantum error correction",
        "Hybrid optimization algorithms",
        "Real-time quantum simulation"
      ],
      link: "/ai-services/quantum-classical-hybrid-ai"
    },
    {
      title: "6G Network Infrastructure",
      description: "Next-generation 6G network with terahertz frequencies and ultra-low latency",
      price: "$29,999/month",
      features: [
        "Terahertz frequency bands",
        "Ultra-low latency (0.1ms)",
        "Ultra-high bandwidth (1Tbps+)",
        "AI-powered network optimization"
      ],
      link: "/it-services/6g-network-infrastructure"
    },
    {
      title: "Synthetic Biology AI",
      description: "AI-powered platform for designing and optimizing biological systems",
      price: "$12,999/month",
      features: [
        "AI-driven DNA design",
        "Biological system simulation",
        "Protein structure prediction",
        "CRISPR design automation"
      ],
      link: "/ai-services/synthetic-biology-ai"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology services designed to transform your business and drive innovation.
          </p>
        </motion.div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Revolutionary Services
          </h2>
          <p className="text-lg text-zion-slate-light">
            Experience the future of technology with our most innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link to={service.link}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-zion-cyan font-semibold text-xl">
                    {service.price}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Service Categories
          </h2>
          <p className="text-lg text-zion-slate-light">
            Explore our comprehensive range of technology services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-6`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              <p className="text-zion-slate-light mb-6">{category.description}</p>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
              <Link
                to={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center mt-6 text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Learn More
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Let's discuss how our innovative services can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-full hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-full hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
