import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Atom,
  Search,
  Lock,
  ChartLineUp,
  Link as LinkIcon,
  Heart,
  Eye,
  Key,
  Satellite
} from 'lucide-react';

const ServicesShowcase: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Solutions",
      subtitle: "Cutting-edge artificial intelligence and machine learning platforms that transform business operations",
      icon: Brain,
      color: "from-purple-600 to-indigo-700",
      services: [
        {
          name: "Quantum AI Optimization Platform",
          description: "Advanced quantum computing algorithms combined with AI to solve complex optimization problems in logistics, finance, and operations.",
          features: [
            "Quantum annealing algorithms",
            "AI-driven optimization",
            "Real-time problem solving",
            "Multi-objective optimization",
            "Performance analytics"
          ],
          pricing: "$299/month",
          benefits: [
            "30-50% improvement in operational efficiency",
            "Quantum advantage for complex problems",
            "Real-time optimization",
            "Enterprise-grade security",
            "Custom algorithm development"
          ],
          marketPosition: "First-to-market quantum AI optimization platform for enterprise",
          competitors: ["D-Wave", "IBM Quantum", "Google Quantum AI"],
          competitiveAdvantage: "Quantum computing integration, custom algorithms, enterprise deployment",
          link: "/services/quantum-ai-optimization",
          icon: "⚛️",
          category: "AI & Machine Learning"
        },
        {
          name: "AI Autonomous Research Assistant",
          description: "AI-powered research platform that autonomously conducts market research, competitive analysis, and generates comprehensive reports.",
          features: [
            "Autonomous data collection",
            "Real-time market monitoring",
            "Competitive intelligence",
            "Automated report generation",
            "Custom research workflows"
          ],
          pricing: "$199/month",
          benefits: [
            "80% reduction in research time",
            "24/7 autonomous operation",
            "Real-time insights",
            "Custom research workflows",
            "Integration with existing tools"
          ],
          marketPosition: "Next-generation autonomous research platform",
          competitors: ["Crayon", "Kompyte", "Brandwatch"],
          competitiveAdvantage: "Fully autonomous operation, custom data sources, advanced AI algorithms",
          link: "/services/ai-autonomous-research-assistant",
          icon: "🔍",
          category: "AI & Machine Learning"
        }
      ]
    },
    {
      title: "Cybersecurity & Defense",
      subtitle: "Advanced security solutions powered by artificial intelligence and quantum technology",
      icon: Shield,
      color: "from-red-600 to-orange-700",
      services: [
        {
          name: "AI-Powered Cybersecurity Suite",
          description: "Advanced cybersecurity platform using AI to detect, analyze, and respond to threats in real-time across all network endpoints.",
          features: [
            "AI threat detection",
            "Behavioral analysis",
            "Automated incident response",
            "Threat intelligence",
            "Compliance reporting"
          ],
          pricing: "$399/month",
          benefits: [
            "60% reduction in incident response time",
            "Real-time threat detection",
            "Automated response capabilities",
            "Compliance automation",
            "Enterprise-grade security"
          ],
          marketPosition: "Enterprise-grade AI cybersecurity with autonomous response",
          competitors: ["CrowdStrike", "SentinelOne", "Darktrace"],
          competitiveAdvantage: "AI-powered detection, autonomous response, comprehensive integration",
          link: "/services/ai-cybersecurity-suite",
          icon: "🛡️",
          category: "Cybersecurity"
        },
        {
          name: "Quantum Cryptography Platform",
          description: "Next-generation quantum cryptography platform that provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms.",
          features: [
            "Quantum key distribution",
            "Quantum-resistant algorithms",
            "Real-time encryption",
            "Network security",
            "Compliance certification"
          ],
          pricing: "$1,299/month",
          benefits: [
            "100% protection against quantum attacks",
            "Unbreakable encryption",
            "Future-proof security",
            "Compliance certification",
            "Enterprise deployment"
          ],
          marketPosition: "Enterprise quantum cryptography solution for critical infrastructure",
          competitors: ["ID Quantique", "Qrypt", "Quantum Xchange"],
          competitiveAdvantage: "Quantum hardware integration, custom protocols, compliance frameworks",
          link: "/services/quantum-cryptography",
          icon: "🔐",
          category: "Emerging Technology"
        }
      ]
    },
    {
      title: "Fintech & Blockchain Solutions",
      subtitle: "Innovative financial technology and blockchain platforms for modern businesses",
      icon: ChartLineUp,
      color: "from-green-600 to-emerald-700",
      services: [
        {
          name: "AI-Powered Trading Algorithm Platform",
          description: "Advanced algorithmic trading platform that uses AI to analyze market patterns and execute trades automatically.",
          features: [
            "AI market analysis",
            "Automated trading execution",
            "Risk management",
            "Performance analytics",
            "Multi-asset support"
          ],
          pricing: "$599/month",
          benefits: [
            "15-25% improvement in trading performance",
            "Automated execution",
            "Risk management",
            "Real-time analytics",
            "Multi-asset support"
          ],
          marketPosition: "Professional-grade AI trading platform for institutional clients",
          competitors: ["QuantConnect", "Alpaca", "Interactive Brokers"],
          competitiveAdvantage: "Custom algorithms, exchange integrations, compliance frameworks",
          link: "/services/ai-trading-algorithm",
          icon: "📈",
          category: "Fintech & Blockchain"
        },
        {
          name: "Blockchain Supply Chain Tracking",
          description: "Blockchain-based platform for end-to-end supply chain tracking, verification, and transparency across global networks.",
          features: [
            "Blockchain verification",
            "Real-time tracking",
            "Smart contracts",
            "Compliance reporting",
            "Supplier management"
          ],
          pricing: "$149/month",
          benefits: [
            "40% reduction in supply chain fraud",
            "Complete transparency",
            "Real-time tracking",
            "Compliance automation",
            "Cost reduction"
          ],
          marketPosition: "Enterprise blockchain supply chain solution with AI integration",
          competitors: ["IBM Food Trust", "VeChain", "OriginTrail"],
          competitiveAdvantage: "Custom blockchain networks, IoT integration, compliance frameworks",
          link: "/services/blockchain-supply-chain",
          icon: "🔗",
          category: "Fintech & Blockchain"
        }
      ]
    },
    {
      title: "Healthcare & Biotech Innovation",
      subtitle: "Advanced healthcare solutions powered by artificial intelligence and cutting-edge technology",
      icon: Heart,
      color: "from-teal-600 to-cyan-700",
      services: [
        {
          name: "AI Medical Imaging Analysis Platform",
          description: "AI-powered medical imaging platform that assists radiologists in detecting and analyzing medical conditions from various imaging modalities.",
          features: [
            "AI image analysis",
            "Multi-modality support",
            "Diagnostic assistance",
            "Report generation",
            "Integration with PACS"
          ],
          pricing: "$799/month",
          benefits: [
            "30% improvement in diagnostic accuracy",
            "Faster diagnosis",
            "Reduced workload",
            "24/7 availability",
            "FDA compliance"
          ],
          marketPosition: "FDA-cleared AI medical imaging platform",
          competitors: ["Aidoc", "Zebra Medical", "Enlitic"],
          competitiveAdvantage: "FDA compliance, clinical validation, hospital integration",
          link: "/services/ai-medical-imaging",
          icon: "🏥",
          category: "Healthcare & Biotech"
        }
      ]
    },
    {
      title: "Emerging Technology Platforms",
      subtitle: "Next-generation technology solutions for the future",
      icon: Rocket,
      color: "from-slate-600 to-gray-700",
      services: [
        {
          name: "Space Technology Data Analytics Platform",
          description: "Comprehensive platform for analyzing satellite data, space weather, and space technology applications for commercial and research purposes.",
          features: [
            "Satellite data processing",
            "Space weather monitoring",
            "Predictive analytics",
            "Custom algorithms",
            "API access"
          ],
          pricing: "$499/month",
          benefits: [
            "50% improvement in space operations efficiency",
            "Real-time data access",
            "Predictive capabilities",
            "Custom analytics",
            "Research partnerships"
          ],
          marketPosition: "Leading space technology analytics platform for commercial applications",
          competitors: ["Planet Labs", "Maxar", "SpaceNet"],
          competitiveAdvantage: "Satellite data integration, custom analytics, research partnerships",
          link: "/services/space-tech-analytics",
          icon: "🚀",
          category: "Emerging Technology"
        }
      ]
    },
    {
      title: "IT Infrastructure & Management",
      subtitle: "Intelligent infrastructure solutions for modern enterprises",
      icon: Cpu,
      color: "from-blue-600 to-indigo-700",
      services: [
        {
          name: "AI-Powered IT Asset Management",
          description: "AI-driven platform for comprehensive IT asset management, including tracking, maintenance, and optimization across enterprise infrastructure.",
          features: [
            "Asset discovery and tracking",
            "Predictive maintenance",
            "Cost optimization",
            "Compliance management",
            "Integration capabilities"
          ],
          pricing: "$89/month",
          benefits: [
            "25% reduction in IT asset costs",
            "Predictive maintenance",
            "Automated compliance",
            "Real-time tracking",
            "Integration with existing tools"
          ],
          marketPosition: "Next-generation IT asset management with AI optimization",
          competitors: ["ServiceNow", "BMC Helix", "Ivanti"],
          competitiveAdvantage: "Custom integrations, predictive models, compliance frameworks",
          link: "/services/ai-it-asset-management",
          icon: "💻",
          category: "IT Infrastructure"
        }
      ]
    },
    {
      title: "Green Technology & Sustainability",
      subtitle: "AI-powered solutions for a sustainable future",
      icon: Zap,
      color: "from-green-600 to-emerald-700",
      services: [
        {
          name: "AI Energy Optimization Platform",
          description: "AI-powered platform for optimizing energy consumption, reducing costs, and improving sustainability across commercial and industrial facilities.",
          features: [
            "Real-time energy monitoring",
            "AI optimization algorithms",
            "Predictive analytics",
            "Sustainability reporting",
            "Cost analysis"
          ],
          pricing: "$179/month",
          benefits: [
            "20-30% reduction in energy costs",
            "Real-time optimization",
            "Sustainability compliance",
            "Predictive maintenance",
            "Cost savings"
          ],
          marketPosition: "Leading AI energy optimization platform for commercial buildings",
          competitors: ["Verdigris", "GridPoint", "Enel X"],
          competitiveAdvantage: "IoT deployment, custom algorithms, building integration",
          link: "/services/ai-energy-optimization",
          icon: "⚡",
          category: "Green Technology"
        }
      ]
    }
  ];

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Innovative Micro SAAS Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover cutting-edge AI, blockchain, quantum computing, and emerging technology solutions designed to transform your business operations and drive innovation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 bg-black/30 border-y border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-zion-cyan">📱</span>
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zion-cyan">✉️</span>
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zion-cyan">📍</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full mb-6">
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-zion-cyan">{service.pricing}</div>
                        <div className="text-sm text-gray-400">{service.category}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <span className="text-zion-cyan">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-zion-cyan mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-300">
                            <span className="text-zion-cyan">🚀</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-zion-cyan mb-3">Market Position</h4>
                      <p className="text-gray-300 text-sm">{service.marketPosition}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-zion-cyan mb-3">Competitive Advantage</h4>
                      <p className="text-gray-300 text-sm">{service.competitiveAdvantage}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to={service.link}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-zion-cyan to-blue-600 rounded-lg font-semibold text-white text-center hover:from-zion-cyan/80 hover:to-blue-600/80 transition-all duration-300"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold text-center hover:bg-zion-cyan hover:text-white transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Innovation Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses already transforming their operations with Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-blue-600 rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-blue-600/80 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
            </Link>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase;
