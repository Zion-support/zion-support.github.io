import React, { useState } from 'react';
import { Search, Star, Clock, DollarSign, Users, Zap, Brain, Shield, Eye, Leaf, CreditCard, Phone, Mail, MapPin, Globe, Cpu, Network, Building, Home, Hospital, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const ComprehensiveServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Comprehensive Services Data
  const comprehensiveServices = [
    // AI & Machine Learning Services
    {
      id: "ai-powered-crm",
      name: "AI-Powered Customer Relationship Management",
      category: "AI & Machine Learning",
      subcategory: "Business Applications",
      pricing: "Premium",
      description: "Intelligent CRM system that uses machine learning to predict customer behavior, automate follow-ups, and optimize sales strategies.",
      price: 1500,
      pricingModel: "monthly",
      userLimit: "Up to 100 users",
      features: [
        "Predictive customer analytics",
        "Automated lead scoring",
        "Smart email campaigns",
        "Sales forecasting",
        "Customer sentiment analysis",
        "Integration with existing tools"
      ],
      benefits: [
        "Increase sales conversion by 35%",
        "Reduce manual follow-up time by 60%",
        "Improve customer retention",
        "Data-driven decision making",
        "Scalable automation"
      ],
      targetAudience: [
        "Sales teams",
        "Marketing departments",
        "Customer service",
        "E-commerce businesses",
        "B2B companies"
      ],
      tags: ["AI", "CRM", "Sales Automation", "Customer Analytics", "Machine Learning"],
      estimatedDelivery: "2-3 weeks",
      supportLevel: "premium",
      marketPrice: "$1,500 - $5,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: "quantum-computing-simulation",
      name: "Quantum Computing Simulation Platform",
      category: "AI & Machine Learning",
      subcategory: "Quantum Computing",
      pricing: "Enterprise",
      description: "Advanced quantum computing simulation and optimization platform for research institutions and enterprises exploring quantum algorithms.",
      price: 5000,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: [
        "Quantum circuit simulator",
        "Algorithm optimization tools",
        "Performance benchmarking",
        "Multi-qubit support",
        "Cloud-based access",
        "Real-time collaboration"
      ],
      benefits: [
        "Accelerate quantum research",
        "Reduce hardware costs",
        "Faster algorithm development",
        "Collaborative development",
        "Scalable simulations",
        "Future-proof technology"
      ],
      targetAudience: [
        "Research institutions",
        "Pharmaceutical companies",
        "Financial services firms",
        "Government agencies",
        "Technology companies"
      ],
      tags: ["Quantum Computing", "Simulation", "Research", "Optimization", "Collaboration"],
      estimatedDelivery: "8-12 weeks",
      supportLevel: "enterprise",
      marketPrice: "$5,000 - $15,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: "edge-ai-computing",
      name: "Edge AI Computing Platform",
      category: "Edge Computing",
      subcategory: "Artificial Intelligence",
      pricing: "Premium",
      description: "Advanced edge computing platform that brings AI processing to the edge of networks, enabling real-time decision making and reduced latency for IoT and mobile applications.",
      price: 3200,
      pricingModel: "monthly",
      userLimit: "Up to 200 devices",
      features: [
        "Edge AI processing",
        "Real-time analytics",
        "Low latency inference",
        "Offline capabilities",
        "Scalable deployment",
        "Security protocols"
      ],
      benefits: [
        "Reduced latency by 80%",
        "Bandwidth savings of 60%",
        "Offline operation capability",
        "Real-time insights",
        "Cost efficiency",
        "Scalable architecture"
      ],
      targetAudience: [
        "Manufacturing companies",
        "Autonomous vehicle developers",
        "Smart city initiatives",
        "IoT application developers",
        "Real-time systems"
      ],
      tags: ["Edge Computing", "AI", "IoT", "Real-time", "Low Latency"],
      estimatedDelivery: "6-8 weeks",
      supportLevel: "premium",
      marketPrice: "$3,200 - $8,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: "blockchain-supply-chain",
      name: "Blockchain Supply Chain Management",
      category: "Blockchain",
      subcategory: "Supply Chain",
      pricing: "Enterprise",
      description: "Transparent and secure supply chain management using blockchain technology for end-to-end visibility and trust.",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: [
        "Blockchain tracking",
        "Smart contracts",
        "Real-time visibility",
        "Compliance reporting",
        "Audit trails",
        "Integration APIs"
      ],
      benefits: [
        "Complete transparency",
        "Enhanced security",
        "Regulatory compliance",
        "Cost reduction",
        "Trust building",
        "Automated processes"
      ],
      targetAudience: [
        "Manufacturing companies",
        "Logistics providers",
        "Retail chains",
        "Food industry",
        "Pharmaceutical companies"
      ],
      tags: ["Blockchain", "Supply Chain", "Smart Contracts", "Transparency", "Security"],
      estimatedDelivery: "10-14 weeks",
      supportLevel: "enterprise",
      marketPrice: "$120 - $500/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: "ar-vr-business-solutions",
      name: "AR/VR Business Solutions",
      category: "Immersive Technology",
      subcategory: "Business Applications",
      pricing: "Premium",
      description: "Augmented and virtual reality solutions for business training, customer engagement, and immersive experiences.",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: [
        "AR training modules",
        "VR simulations",
        "3D visualization",
        "Interactive experiences",
        "Analytics dashboard",
        "Content management"
      ],
      benefits: [
        "Enhanced training effectiveness",
        "Better customer engagement",
        "Cost savings on physical resources",
        "Innovation leadership",
        "Scalable training",
        "Immersive learning"
      ],
      targetAudience: [
        "Training companies",
        "Manufacturing firms",
        "Healthcare institutions",
        "Educational organizations",
        "Real estate companies"
      ],
      tags: ["AR/VR", "Immersive Tech", "Training", "3D Visualization", "Innovation"],
      estimatedDelivery: "8-12 weeks",
      supportLevel: "premium",
      marketPrice: "$85 - $300/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: "iot-intelligence-hub",
      name: "IoT Intelligence Hub",
      category: "IoT & Smart Cities",
      subcategory: "Platform Management",
      pricing: "Enterprise",
      description: "Comprehensive IoT platform for smart city and industrial applications with advanced analytics and automation.",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 100 devices",
      features: [
        "Device management",
        "Data analytics",
        "Real-time monitoring",
        "Predictive maintenance",
        "Security protocols",
        "Scalable infrastructure"
      ],
      benefits: [
        "Operational efficiency",
        "Predictive insights",
        "Cost reduction",
        "Automation capabilities",
        "Scalable architecture",
        "Real-time decision making"
      ],
      targetAudience: [
        "Smart city initiatives",
        "Manufacturing companies",
        "Utility companies",
        "Transportation systems",
        "Healthcare facilities"
      ],
      tags: ["IoT", "Smart Cities", "Industrial IoT", "Predictive Maintenance", "Automation"],
      estimatedDelivery: "12-16 weeks",
      supportLevel: "enterprise",
      marketPrice: "$95 - $400/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: "cybersecurity-sentinel",
      name: "Cybersecurity Sentinel",
      category: "Security",
      subcategory: "Threat Detection",
      pricing: "Premium",
      description: "Advanced cybersecurity platform with AI-powered threat detection, response, and compliance management.",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: [
        "AI threat detection",
        "Real-time monitoring",
        "Incident response",
        "Compliance reporting",
        "Security training",
        "24/7 monitoring"
      ],
      benefits: [
        "Proactive security",
        "Threat prevention",
        "Regulatory compliance",
        "Risk reduction",
        "Peace of mind",
        "Cost-effective protection"
      ],
      targetAudience: [
        "Financial services",
        "Healthcare organizations",
        "Government agencies",
        "E-commerce businesses",
        "Technology companies"
      ],
      tags: ["Cybersecurity", "AI", "Threat Detection", "Compliance", "Risk Management"],
      estimatedDelivery: "4-6 weeks",
      supportLevel: "premium",
      marketPrice: "$65 - $200/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: "fintech-solutions-pro",
      name: "FinTech Solutions Pro",
      category: "Financial Technology",
      subcategory: "Digital Banking",
      pricing: "Premium",
      description: "Comprehensive financial technology platform for modern banking, payments, and financial services.",
      price: 70,
      pricingModel: "monthly",
      userLimit: "Up to 40 users",
      features: [
        "Digital banking",
        "Payment processing",
        "Cryptocurrency support",
        "Financial analytics",
        "Compliance tools",
        "API integration"
      ],
      benefits: [
        "Modern banking experience",
        "Cost reduction",
        "Better user experience",
        "Regulatory compliance",
        "Innovation leadership",
        "Scalable solutions"
      ],
      targetAudience: [
        "Banks",
        "Credit unions",
        "Fintech startups",
        "Payment processors",
        "Financial services"
      ],
      tags: ["FinTech", "Digital Banking", "Payments", "Cryptocurrency", "Compliance"],
      estimatedDelivery: "16-20 weeks",
      supportLevel: "premium",
      marketPrice: "$70 - $250/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: "greentech-analytics",
      name: "GreenTech Analytics",
      category: "Sustainability",
      subcategory: "Environmental Impact",
      pricing: "Premium",
      description: "Advanced sustainability analytics and environmental impact assessment platform for businesses and organizations.",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: [
        "Carbon tracking",
        "ESG reporting",
        "Sustainability metrics",
        "Goal setting",
        "Progress monitoring",
        "Regulatory compliance"
      ],
      benefits: [
        "Environmental compliance",
        "Brand reputation enhancement",
        "Cost savings",
        "Sustainability leadership",
        "Investor confidence",
        "Regulatory adherence"
      ],
      targetAudience: [
        "Manufacturing companies",
        "Energy companies",
        "Real estate firms",
        "Investment firms",
        "Government agencies"
      ],
      tags: ["Sustainability", "ESG", "Carbon Tracking", "Environmental Impact", "Compliance"],
      estimatedDelivery: "6-8 weeks",
      supportLevel: "premium",
      marketPrice: "$55 - $180/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: "healthcare-it-solutions",
      name: "Healthcare IT Solutions",
      category: "Healthcare Technology",
      subcategory: "Patient Management",
      pricing: "Enterprise",
      description: "Comprehensive healthcare IT solutions with HIPAA compliance, patient management, and telemedicine capabilities.",
      price: 4500,
      pricingModel: "monthly",
      userLimit: "Up to 1000 patients",
      features: [
        "HIPAA compliance",
        "Patient management",
        "Telemedicine platform",
        "Electronic health records",
        "Billing integration",
        "Security protocols"
      ],
      benefits: [
        "Regulatory compliance",
        "Improved patient care",
        "Operational efficiency",
        "Cost reduction",
        "Better patient experience",
        "Scalable solutions"
      ],
      targetAudience: [
        "Hospitals",
        "Clinics",
        "Medical practices",
        "Healthcare networks",
        "Telemedicine providers"
      ],
      tags: ["Healthcare", "HIPAA", "Telemedicine", "Patient Management", "Compliance"],
      estimatedDelivery: "20-24 weeks",
      supportLevel: "enterprise",
      marketPrice: "$4,500 - $12,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  // Filter services based on search and category
  const filteredServices = comprehensiveServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(comprehensiveServices.map(service => service.category)))];
  const pricingTiers = ['all', ...Array.from(new Set(comprehensiveServices.map(service => service.pricing)))];

  // Get category icon
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'Edge Computing': Cpu,
      'Blockchain': Shield,
      'Immersive Technology': Eye,
      'IoT & Smart Cities': Network,
      'Security': Shield,
      'Financial Technology': CreditCard,
      'Sustainability': Leaf,
      'Healthcare Technology': Home
    };
    return iconMap[category] || Zap;
  };

  // Get pricing color
  const getPricingColor = (pricing: string) => {
    const colorMap: { [key: string]: string } = {
      'Freemium': 'text-green-400',
      'Premium': 'text-blue-400',
      'Enterprise': 'text-purple-400'
    };
    return colorMap[pricing] || 'text-gray-400';
  };

  // Format price
  const formatPrice = (price: number, model: string) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k/${model}`;
    }
    return `$${price}/${model}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of innovative micro SAAS, IT, and AI services designed to transform your business
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2 text-zion-cyan">
              <Rocket className="w-6 h-6" />
              <span className="text-lg font-semibold">30+ Services</span>
            </div>
            <div className="flex items-center space-x-2 text-zion-cyan">
              <Brain className="w-6 h-6" />
              <span className="text-lg font-semibold">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 text-zion-cyan">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-semibold">Enterprise Ready</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-zion-blue-dark text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {pricingTiers.map((tier) => (
                    <option key={tier} value={tier} className="bg-zion-blue-dark text-white">
                      {tier === 'all' ? 'All Pricing' : tier}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const CategoryIcon = getCategoryIcon(service.category);
            return (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-green-400">
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                          {service.pricing}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-white mb-2">
                    {formatPrice(service.price, service.pricingModel)}
                  </div>
                  <div className="text-sm text-gray-400">{service.userLimit}</div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.targetAudience.slice(0, 2).map((audience, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Start your free trial today</span>
                    <a 
                      href={service.contactInfo.website}
                      className="text-green-400 hover:text-green-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our comprehensive solutions are designed to scale with your business needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices;