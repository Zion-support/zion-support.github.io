import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface InnovativeService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
  useCases: string[];
  targetAudience: string[];
  tags: string[];
}

const INNOVATIVE_SERVICES: InnovativeService[] = [
  {
    id: "ai-autonomous-code-review",
    title: "AI Autonomous Code Review & Quality Assurance",
    description: "Intelligent code review system that automatically analyzes, reviews, and suggests improvements for code quality, security, and performance.",
    category: "AI & Machine Learning",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated code analysis",
      "Security vulnerability detection",
      "Performance optimization suggestions",
      "Code style enforcement",
      "Integration with CI/CD pipelines",
      "Real-time feedback",
      "Custom rule configuration",
      "Multi-language support"
    ],
    benefits: [
      "Reduce code review time by 80%",
      "Improve code quality by 60%",
      "Early bug detection",
      "Consistent coding standards",
      "Reduced technical debt"
    ],
    marketPrice: "$899 - $2,499/month",
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium",
    useCases: [
      "Software development teams",
      "DevOps teams",
      "Quality assurance teams",
      "Open source projects",
      "Enterprise development"
    ],
    targetAudience: [
      "Software developers",
      "DevOps engineers",
      "QA engineers",
      "Engineering managers",
      "CTOs"
    ],
    tags: ["AI", "Code Review", "Quality Assurance", "DevOps", "Automation"]
  },
  {
    id: "quantum-encryption-as-a-service",
    title: "Quantum Encryption as a Service (QEaaS)",
    description: "Next-generation encryption platform leveraging quantum-resistant algorithms to protect data against future quantum computing threats.",
    category: "Cybersecurity",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-resistant algorithms",
      "Post-quantum cryptography",
      "Hybrid encryption systems",
      "Key management",
      "Compliance certifications",
      "Real-time threat monitoring",
      "API integrations",
      "Zero-knowledge proofs"
    ],
    benefits: [
      "Future-proof security",
      "Quantum-resistant protection",
      "Regulatory compliance",
      "Scalable encryption",
      "Advanced key management"
    ],
    marketPrice: "$3,500 - $12,000/month",
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Defense contractors",
      "Cloud service providers"
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
      "Compliance officers",
      "Government officials",
      "Financial regulators"
    ],
    tags: ["Quantum Security", "Encryption", "Post-Quantum", "Compliance", "Zero-Trust"]
  },
  {
    id: "ai-powered-business-process-automation",
    title: "AI-Powered Business Process Automation Platform",
    description: "Intelligent automation platform that uses AI to identify, optimize, and automate complex business processes across organizations.",
    category: "AI & Machine Learning",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Process discovery and mapping",
      "AI-powered optimization",
      "RPA integration",
      "Workflow automation",
      "Process analytics",
      "Custom automation rules",
      "Multi-department support",
      "Compliance tracking"
    ],
    benefits: [
      "Reduce process time by 70%",
      "Increase efficiency by 50%",
      "Cost savings of 30-40%",
      "Improved accuracy",
      "Scalable automation"
    ],
    marketPrice: "$2,200 - $7,500/month",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    useCases: [
      "Human resources",
      "Finance and accounting",
      "Customer service",
      "Supply chain management",
      "Sales operations"
    ],
    targetAudience: [
      "Operations managers",
      "Process improvement teams",
      "Business analysts",
      "CIOs",
      "Operations directors"
    ],
    tags: ["AI", "Automation", "RPA", "Process Optimization", "Workflow"]
  },
  {
    id: "edge-computing-orchestration-platform",
    title: "Edge Computing Orchestration & Management Platform",
    description: "Comprehensive edge computing platform that manages, monitors, and optimizes distributed edge infrastructure for IoT and 5G applications.",
    category: "Edge Computing",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge node management",
      "Distributed computing orchestration",
      "Real-time monitoring",
      "Load balancing",
      "Security management",
      "Performance optimization",
      "API gateway",
      "Multi-cloud integration"
    ],
    benefits: [
      "Reduce latency by 80%",
      "Improve reliability by 90%",
      "Cost-effective edge deployment",
      "Scalable infrastructure",
      "Enhanced security"
    ],
    marketPrice: "$1,800 - $6,000/month",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    useCases: [
      "IoT deployments",
      "5G networks",
      "Autonomous vehicles",
      "Smart cities",
      "Industrial IoT"
    ],
    targetAudience: [
      "IoT architects",
      "Network engineers",
      "DevOps teams",
      "Infrastructure managers",
      "Technology consultants"
    ],
    tags: ["Edge Computing", "IoT", "5G", "Orchestration", "Infrastructure"]
  },
  {
    id: "ai-powered-financial-fraud-detection",
    title: "AI-Powered Financial Fraud Detection System",
    description: "Advanced fraud detection platform that uses machine learning to identify and prevent financial fraud in real-time across multiple channels.",
    category: "AI & Machine Learning",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time fraud detection",
      "Multi-channel monitoring",
      "Machine learning models",
      "Risk scoring",
      "Alert management",
      "Compliance reporting",
      "API integrations",
      "Custom rule engine"
    ],
    benefits: [
      "Reduce fraud losses by 90%",
      "Improve detection accuracy by 85%",
      "Real-time protection",
      "Regulatory compliance",
      "Cost-effective security"
    ],
    marketPrice: "$2,800 - $9,000/month",
    estimatedDelivery: "2-3 weeks",
    supportLevel: "enterprise",
    useCases: [
      "Banks and credit unions",
      "Payment processors",
      "E-commerce platforms",
      "Insurance companies",
      "Investment firms"
    ],
    targetAudience: [
      "Risk managers",
      "Compliance officers",
      "Security teams",
      "Financial executives",
      "Fraud investigators"
    ],
    tags: ["AI", "Fraud Detection", "FinTech", "Security", "Compliance"]
  },
  {
    id: "metaverse-development-platform",
    title: "Metaverse Development & Management Platform",
    description: "Comprehensive platform for creating, deploying, and managing metaverse experiences with AI-powered content generation and user engagement tools.",
    category: "Emerging Technology",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D world builder",
      "AI content generation",
      "Avatar customization",
      "Virtual economy tools",
      "Social interaction features",
      "Analytics dashboard",
      "Multi-platform support",
      "NFT integration"
    ],
    benefits: [
      "Reduce development time by 60%",
      "Increase user engagement by 80%",
      "Scalable metaverse creation",
      "AI-powered content",
      "Monetization opportunities"
    ],
    marketPrice: "$3,200 - $10,000/month",
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    useCases: [
      "Gaming companies",
      "Educational institutions",
      "Virtual events",
      "Real estate companies",
      "Brand experiences"
    ],
    targetAudience: [
      "Game developers",
      "Digital artists",
      "Marketing teams",
      "Educational technologists",
      "Brand managers"
    ],
    tags: ["Metaverse", "3D Development", "AI", "Virtual Reality", "NFT"]
  },
  {
    id: "ai-powered-healthcare-diagnostics",
    title: "AI-Powered Healthcare Diagnostics & Analytics Platform",
    description: "Advanced healthcare platform that uses AI to analyze medical data, assist in diagnostics, and provide predictive health insights.",
    category: "AI & Machine Learning",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Medical image analysis",
      "Predictive diagnostics",
      "Patient data analytics",
      "Clinical decision support",
      "Health monitoring",
      "Compliance management",
      "Integration with EHR systems",
      "Telemedicine support"
    ],
    benefits: [
      "Improve diagnostic accuracy by 40%",
      "Reduce diagnosis time by 60%",
      "Better patient outcomes",
      "Cost-effective healthcare",
      "Regulatory compliance"
    ],
    marketPrice: "$4,500 - $15,000/month",
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    useCases: [
      "Hospitals and clinics",
      "Radiology departments",
      "Primary care practices",
      "Specialty clinics",
      "Research institutions"
    ],
    targetAudience: [
      "Healthcare providers",
      "Radiologists",
      "Medical researchers",
      "Healthcare administrators",
      "Clinical directors"
    ],
    tags: ["AI", "Healthcare", "Diagnostics", "Medical Imaging", "Analytics"]
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Development Platform",
    description: "Advanced platform that combines quantum computing with machine learning to solve complex optimization problems and accelerate AI model training.",
    category: "AI & Machine Learning",
    price: 5500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum ML algorithms",
      "Hybrid classical-quantum models",
      "Optimization solvers",
      "Model training acceleration",
      "Quantum feature selection",
      "Performance benchmarking",
      "Cloud quantum access",
      "Research collaboration tools"
    ],
    benefits: [
      "Accelerate ML training by 100x",
      "Solve complex optimization problems",
      "Future-proof AI development",
      "Research advancement",
      "Competitive advantage"
    ],
    marketPrice: "$5,500 - $18,000/month",
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    useCases: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Technology companies",
      "Government agencies"
    ],
    targetAudience: [
      "AI researchers",
      "Data scientists",
      "Quantum physicists",
      "Technology leaders",
      "Research directors"
    ],
    tags: ["Quantum AI", "Machine Learning", "Optimization", "Research", "Advanced Computing"]
  }
];

export default function InnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES.map(service => service.category)))];
  
  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Innovative Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge micro SAAS solutions that combine AI, quantum computing, and emerging technologies to transform your business operations
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-zion-cyan font-semibold">📱 Mobile:</span>
                <br />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <span className="text-zion-cyan font-semibold">✉️ Email:</span>
                <br />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <span className="text-zion-cyan font-semibold">🌐 Website:</span>
                <br />
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/20 hover:border-zion-cyan/50'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price}
                    <span className="text-sm text-zion-slate-light">/{service.pricingModel}</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Market Price & Delivery */}
              <div className="mb-4 p-3 bg-zion-blue-light/10 rounded-lg">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-zion-cyan font-semibold">Market Price:</span>
                    <br />
                    <span className="text-white">{service.marketPrice}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-semibold">Delivery:</span>
                    <br />
                    <span className="text-white">{service.estimatedDelivery}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-xs text-zion-slate-light flex items-center">
                      <span className="text-zion-cyan mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs text-zion-cyan">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="text-xs text-zion-slate-light flex items-center">
                      <span className="text-zion-cyan mr-2">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more information about pricing, features, and implementation.`}
                  className="inline-block w-full bg-gradient-to-r from-zion-cyan to-zion-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-zion-blue-500 hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/30"
                >
                  Get Started Today
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue-500/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our innovative micro SAAS solutions are designed to give you a competitive edge in today's rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovative Services Consultation&body=Hi, I'd like to schedule a consultation to discuss how your innovative services can help transform my business. Please let me know your availability."
                className="bg-zion-cyan text-zion-blue-dark font-bold py-4 px-8 rounded-lg hover:bg-zion-blue-500 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors duration-300 transform hover:scale-105"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}