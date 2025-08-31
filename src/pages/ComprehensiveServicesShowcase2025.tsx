import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Atom, 
  Shield, 
  Factory, 
  Heart, 
  Truck, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Star,
  TrendingUp,
  Cpu,
  Eye,
  Lock,
  Package,
  Route,
  BarChart3,
  Wrench,
  Network,
  Target
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const services = [
    {
      title: "AI Quantum Financial Analytics Platform",
      description: "Revolutionary financial analytics platform combining AI and quantum computing for unprecedented market insights and risk management.",
      icon: Atom,
      color: "from-cyan-500 to-blue-600",
      features: [
        "Quantum-Enhanced Risk Modeling",
        "AI-Powered Market Intelligence", 
        "Real-Time Financial Monitoring",
        "Advanced Security & Compliance"
      ],
      pricing: "$299 - $2,499/month",
      benefits: ["99.9% accuracy in risk prediction", "Real-time portfolio optimization", "Multi-dimensional risk analysis"],
      path: "/services/ai-quantum-financial-analytics-platform",
      category: "Financial Technology"
    },
    {
      title: "AI Autonomous Supply Chain Optimization Platform",
      description: "Transform your supply chain operations with the world's most advanced AI platform for autonomous logistics and inventory management.",
      icon: Truck,
      color: "from-green-500 to-emerald-600",
      features: [
        "Autonomous Route Optimization",
        "Predictive Demand Forecasting",
        "Real-Time Supply Chain Monitoring",
        "Intelligent Inventory Management"
      ],
      pricing: "$199 - $1,999/month",
      benefits: ["30% reduction in delivery costs", "95% demand prediction accuracy", "Zero stockout guarantee"],
      path: "/services/ai-autonomous-supply-chain-optimization-platform",
      category: "Supply Chain & Logistics"
    },
    {
      title: "AI Autonomous Healthcare Diagnostics Platform",
      description: "Transform healthcare delivery with the world's most advanced AI platform for autonomous medical diagnostics and disease detection.",
      icon: Heart,
      color: "from-blue-500 to-cyan-600",
      features: [
        "AI-Powered Disease Detection",
        "Autonomous Medical Imaging Analysis",
        "Predictive Health Analytics",
        "HIPAA-Compliant Security"
      ],
      pricing: "$399 - $3,999/month",
      benefits: ["99.7% detection accuracy", "60% faster diagnosis", "40% cost reduction"],
      path: "/services/ai-autonomous-healthcare-diagnostics-platform",
      category: "Healthcare Technology"
    },
    {
      title: "AI Autonomous Cybersecurity Threat Intelligence Platform",
      description: "Transform your cybersecurity operations with the world's most advanced AI platform for autonomous threat detection and incident response.",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      features: [
        "AI-Powered Threat Detection",
        "Autonomous Incident Response",
        "Global Threat Intelligence",
        "Advanced Security Analytics"
      ],
      pricing: "$299 - $2,999/month",
      benefits: ["99.9% threat detection accuracy", "<100ms response time", "90% cost reduction"],
      path: "/services/ai-autonomous-cybersecurity-threat-intelligence-platform",
      category: "Cybersecurity"
    },
    {
      title: "AI Autonomous Manufacturing Optimization Platform",
      description: "Transform your manufacturing operations with the world's most advanced AI platform for autonomous production optimization and quality control.",
      icon: Factory,
      color: "from-orange-500 to-red-600",
      features: [
        "AI-Powered Production Optimization",
        "Autonomous Quality Control",
        "Predictive Maintenance",
        "Supply Chain Integration"
      ],
      pricing: "$499 - $4,999/month",
      benefits: ["25% efficiency increase", "99.8% quality rate", "90% downtime reduction"],
      path: "/services/ai-autonomous-manufacturing-optimization-platform",
      category: "Manufacturing & Industry 4.0"
    }
  ];

  const categories = [
    "Financial Technology",
    "Supply Chain & Logistics", 
    "Healthcare Technology",
    "Cybersecurity",
    "Manufacturing & Industry 4.0"
  ];

  const stats = [
    {
      value: "99.9%",
      label: "Average Accuracy",
      description: "Across all AI services"
    },
    {
      value: "5+",
      label: "Industry Sectors",
      description: "Comprehensive coverage"
    },
    {
      value: "24/7",
      label: "Autonomous Operation",
      description: "Continuous monitoring"
    },
    {
      value: "30%+",
      label: "Cost Reduction",
      description: "Average savings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive AI Services Showcase 2025 - Zion Tech Group"
        description="Explore our revolutionary AI autonomous services covering financial technology, healthcare, cybersecurity, manufacturing, and supply chain optimization."
        keywords="AI services, autonomous platforms, financial technology, healthcare AI, cybersecurity AI, manufacturing AI, supply chain AI"
        canonical="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              AI Autonomous Services Showcase 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-5xl mx-auto mb-8 leading-relaxed">
              Discover our revolutionary suite of AI-powered autonomous platforms that are transforming industries across the globe. 
              From financial analytics to healthcare diagnostics, cybersecurity to manufacturing optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-slate-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the future of technology with our cutting-edge AI autonomous platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-purple-400">{service.pricing}</div>
                  <a
                    href={service.path}
                    className="text-purple-400 hover:text-purple-300 font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>

                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full block text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Coverage
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI services span across multiple industries and sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className="text-lg font-semibold text-white">{category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join the future of technology with our comprehensive suite of AI autonomous services. 
              Get in touch today to schedule personalized demos and see how we can revolutionize your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
            
            <div className="mt-8 text-slate-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
