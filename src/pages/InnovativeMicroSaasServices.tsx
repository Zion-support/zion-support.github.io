import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const INNOVATIVE_SERVICES = [
  {
    id: "ai-powered-legal-document-generator",
    title: "AI-Powered Legal Document Generator",
    description: "Intelligent legal document creation platform that generates contracts, agreements, and legal forms with AI-powered compliance checking.",
    category: "Legal Technology",
    price: 450,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$450 - $1,200/month",
    features: [
      "AI-powered document templates",
      "Compliance checking",
      "Legal clause suggestions",
      "Multi-jurisdiction support",
      "E-signature integration"
    ],
    benefits: [
      "Reduce legal document creation time by 80%",
      "Ensure compliance accuracy",
      "Lower legal costs",
      "Standardize document quality"
    ],
    useCases: ["Law firms", "Corporate legal departments", "Startups", "Real estate agencies"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-cryptography-platform",
    title: "Quantum Cryptography & Security Platform",
    description: "Next-generation cryptographic platform using quantum key distribution for unbreakable encryption and secure communications.",
    category: "Quantum Security",
    price: 8000,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$8,000 - $25,000/month",
    features: [
      "Quantum key distribution",
      "Post-quantum cryptography",
      "Secure communication channels",
      "Quantum-resistant algorithms",
      "Real-time encryption"
    ],
    benefits: [
      "Unbreakable encryption",
      "Future-proof security",
      "Quantum-resistant protection",
      "Regulatory compliance"
    ],
    useCases: ["Financial institutions", "Government agencies", "Healthcare organizations", "Defense contractors"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-ai-research-assistant",
    title: "Autonomous AI Research Assistant",
    description: "Self-learning AI research platform that autonomously conducts research, analyzes data, and generates insights across multiple domains.",
    category: "AI & Machine Learning",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$3,500 - $12,000/month",
    features: [
      "Autonomous research execution",
      "Multi-domain knowledge synthesis",
      "Real-time data analysis",
      "Insight generation",
      "Research report creation"
    ],
    benefits: [
      "Accelerate research by 10x",
      "Reduce research costs",
      "Discover hidden insights",
      "Automate literature reviews"
    ],
    useCases: ["Academic institutions", "Research organizations", "Pharmaceutical companies", "Market research firms"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Platform",
    description: "Advanced machine learning platform that leverages quantum computing to solve complex optimization problems and accelerate AI training.",
    category: "Quantum Computing",
    price: 12000,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$12,000 - $40,000/month",
    features: [
      "Quantum neural networks",
      "Quantum optimization algorithms",
      "Hybrid quantum-classical ML",
      "Quantum feature selection",
      "Real-time model training"
    ],
    benefits: [
      "Exponential speedup for ML tasks",
      "Solve previously intractable problems",
      "Better model accuracy",
      "Faster training times"
    ],
    useCases: ["Financial modeling", "Drug discovery", "Logistics optimization", "Climate modeling"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-healthcare-diagnostics",
    title: "AI-Powered Healthcare Diagnostics Platform",
    description: "Comprehensive medical diagnostics platform using AI to analyze medical images, patient data, and provide diagnostic recommendations.",
    category: "Healthcare Technology",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$2,800 - $8,500/month",
    features: [
      "Medical image analysis",
      "Patient data analytics",
      "Diagnostic recommendations",
      "Risk assessment",
      "Treatment planning"
    ],
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce diagnostic time",
      "Lower healthcare costs",
      "Better patient outcomes"
    ],
    useCases: ["Hospitals", "Medical clinics", "Radiology centers", "Research institutions"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-financial-modeling",
    title: "Quantum Financial Modeling & Risk Assessment",
    description: "Advanced financial modeling platform using quantum computing for portfolio optimization, risk assessment, and market prediction.",
    category: "Quantum Computing",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$15,000 - $50,000/month",
    features: [
      "Quantum portfolio optimization",
      "Risk assessment algorithms",
      "Market prediction models",
      "Real-time trading signals",
      "Regulatory compliance"
    ],
    benefits: [
      "Superior portfolio optimization",
      "Better risk management",
      "Faster market analysis",
      "Regulatory compliance"
    ],
    useCases: ["Investment banks", "Hedge funds", "Asset management firms", "Insurance companies"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "autonomous-cybersecurity-operations",
    title: "Autonomous Cybersecurity Operations Center",
    description: "Self-operating cybersecurity platform that autonomously detects, analyzes, and responds to security threats in real-time.",
    category: "Cybersecurity",
    price: 4200,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$4,200 - $15,000/month",
    features: [
      "Autonomous threat detection",
      "AI-powered incident response",
      "Behavioral analysis",
      "Threat hunting automation",
      "Vulnerability assessment"
    ],
    benefits: [
      "Reduce response time by 90%",
      "Lower security operations costs",
      "Continuous protection",
      "Proactive threat prevention"
    ],
    useCases: ["Large enterprises", "Government agencies", "Financial institutions", "Healthcare organizations"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-creative-design-platform",
    title: "AI-Powered Creative Design Platform",
    description: "Intelligent design platform that uses AI to generate creative content, logos, graphics, and marketing materials.",
    category: "Creative Design",
    price: 180,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$180 - $500/month",
    features: [
      "AI logo generation",
      "Graphic design automation",
      "Brand identity creation",
      "Marketing material design",
      "Social media graphics"
    ],
    benefits: [
      "Reduce design costs by 70%",
      "Faster design creation",
      "Consistent brand identity",
      "Professional quality output"
    ],
    useCases: ["Startups", "Small businesses", "Marketing agencies", "E-commerce businesses"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-drug-discovery-platform",
    title: "Quantum Drug Discovery Platform",
    description: "Advanced pharmaceutical research platform using quantum computing to accelerate drug discovery and molecular modeling.",
    category: "Quantum Computing",
    price: 20000,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$20,000 - $75,000/month",
    features: [
      "Quantum molecular modeling",
      "Drug candidate screening",
      "Protein folding simulation",
      "Chemical reaction prediction",
      "Toxicity assessment"
    ],
    benefits: [
      "Accelerate drug discovery by 10x",
      "Reduce research costs",
      "Better drug candidates",
      "Faster time to market"
    ],
    useCases: ["Pharmaceutical companies", "Biotech startups", "Research institutions", "Government agencies"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ai-powered-education-platform",
    title: "AI-Powered Personalized Education Platform",
    description: "Intelligent learning platform that adapts to individual student needs, providing personalized education experiences and automated tutoring.",
    category: "Education Technology",
    price: 220,
    currency: "$",
    pricingModel: "monthly",
    marketPrice: "$220 - $800/month",
    features: [
      "Personalized learning paths",
      "AI tutoring assistance",
      "Adaptive assessments",
      "Progress tracking",
      "Content recommendation"
    ],
    benefits: [
      "Improve learning outcomes by 40%",
      "Personalized education",
      "24/7 learning support",
      "Scalable education"
    ],
    useCases: ["K-12 schools", "Universities", "Corporate training", "Online education"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default function InnovativeMicroSaasServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES.map(service => service.category)))];
  
  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
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
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our cutting-edge micro SAAS solutions that combine AI, quantum computing, and autonomous systems to transform your business
          </p>
          
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
                    ? 'bg-zion-cyan text-black shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 hover:text-white border border-zion-cyan/30'
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
              className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">
                    {service.currency}{service.price.toLocaleString()}/{service.pricingModel}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    Market: {service.marketPrice}
                  </span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                  {service.category}
                </span>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-xs flex items-center">
                      <span className="text-zion-cyan mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-xs flex items-center">
                      <span className="text-zion-cyan mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.useCases.slice(0, 3).map((useCase, index) => (
                    <span key={index} className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="text-center">
                  <p className="text-zion-slate-light text-xs mb-2">Ready to get started?</p>
                  <div className="space-y-2 text-xs">
                    <p className="text-zion-cyan">
                      <span className="text-zion-slate-light">Phone:</span> {service.contactInfo.phone}
                    </p>
                    <p className="text-zion-cyan">
                      <span className="text-zion-slate-light">Email:</span> {service.contactInfo.email}
                    </p>
                    <a
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-zion-cyan text-black font-medium rounded-lg hover:bg-zion-cyan-light transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-zion-cyan mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our innovative micro SAAS services combine cutting-edge technology with practical business solutions. 
              Get in touch to discover how we can help you stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-zion-cyan text-black font-medium rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-black transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
              >
                Visit our website →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}