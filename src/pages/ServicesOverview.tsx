import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: 'AI & Analytics Solutions',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with advanced AI algorithms',
          price: 'From $5,000/month',
          href: '/services/ai-business-intelligence',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models']
        },
        {
          name: 'Autonomous Business Intelligence',
          description: 'Self-learning AI platform that autonomously analyzes data and generates insights',
          price: 'From $7,999/month',
          href: '/services/autonomous-business-intelligence',
          features: ['Autonomous Analysis', 'Self-learning Algorithms', 'Predictive Modeling']
        },
        {
          name: 'Consciousness Simulation Platform',
          description: 'Breakthrough AI platform for consciousness research and AGI development',
          price: 'From $15,999/month',
          href: '/services/consciousness-simulation',
          features: ['Neural Network Simulation', 'Consciousness Modeling', 'Research Tools']
        },
        {
          name: 'Quantum Neural Network Platform',
          description: 'Revolutionary platform combining quantum computing with neural networks',
          price: 'From $19,999/month',
          href: '/services/quantum-neural-network',
          features: ['Quantum Neural Processing', 'Hybrid Classical-Quantum', 'Quantum Advantage']
        },
        {
          name: 'AI Emotional Intelligence',
          description: 'Advanced emotional intelligence platform for human-AI interaction',
          price: 'From $5,999/month',
          href: '/services/ai-emotional-intelligence',
          features: ['Emotion Recognition', 'Sentiment Analysis', 'Behavioral Insights']
        },
        {
          name: 'AI Creativity Platform',
          description: 'AI-enhanced creativity platform for design and innovation',
          price: 'From $7,999/month',
          href: '/services/ai-creativity-platform',
          features: ['AI Idea Generation', 'Design Assistance', 'Creative Collaboration']
        },
        {
          name: 'AI Education Platform',
          description: 'Personalized learning platform powered by artificial intelligence',
          price: 'From $4,999/month',
          href: '/services/ai-education-platform',
          features: ['Personalized Learning Paths', 'Adaptive Tutoring', 'Progress Tracking']
        }
      ]
    },
    {
      name: 'Cloud & DevOps Solutions',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and DevOps automation solutions',
          price: 'From $8,000/month',
          href: '/services/cloud-devops',
          features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Cloud Migration']
        },
        {
          name: 'AI DevOps Automation',
          description: 'AI-powered DevOps platform for intelligent automation and optimization',
          price: 'From $5,999/month',
          href: '/services/ai-devops-automation',
          features: ['AI-powered CI/CD', 'Automated Testing', 'Intelligent Monitoring']
        },
        {
          name: 'Quantum-Ready Data Centers',
          description: 'Future-proof data center infrastructure for quantum computing and AI workloads',
          price: 'From $150,000/project',
          href: '/services/quantum-ready-data-center',
          features: ['Quantum-ready Architecture', 'AI-optimized Cooling', 'Energy Efficiency']
        }
      ]
    },
    {
      name: 'Cybersecurity & Identity',
      icon: Shield,
      description: 'Advanced security solutions and identity management systems',
      color: 'from-red-600 to-pink-600',
      services: [
        {
          name: 'Zero Trust Network Architecture',
          description: 'Comprehensive zero trust security implementation with continuous verification',
          price: 'From $15,000/project',
          href: '/services/zero-trust-network-architecture',
          features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring']
        },
        {
          name: 'AI Cybersecurity Threat Hunter',
          description: 'Intelligent cybersecurity platform for proactive threat detection and response',
          price: 'From $4,499/month',
          href: '/services/ai-cybersecurity-threat-hunter',
          features: ['AI-powered Threat Hunting', 'Behavioral Analytics', 'Real-time Detection']
        },
        {
          name: 'Quantum-Enhanced Cryptography',
          description: 'Next-generation cryptography platform with quantum-resistant algorithms',
          price: 'From $7,999/month',
          href: '/services/quantum-enhanced-cryptography',
          features: ['Quantum-resistant Algorithms', 'Post-quantum Cryptography', 'Hybrid Encryption']
        },
        {
          name: 'Blockchain Identity Verification',
          description: 'Decentralized identity verification platform with privacy protection',
          price: 'From $1,999/month',
          href: '/services/blockchain-identity-verification',
          features: ['Decentralized Identity', 'Zero-knowledge Proofs', 'Multi-factor Authentication']
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Zap,
      description: 'Cutting-edge technologies including quantum computing, blockchain, and space tech',
      color: 'from-yellow-600 to-orange-600',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Quantum computing solutions for complex problem solving and optimization',
          price: 'From $25,000/project',
          href: '/services/quantum-computing',
          features: ['Quantum Algorithms', 'Hybrid Computing', 'Performance Optimization']
        },
        {
          name: 'Quantum AI Platform',
          description: 'Hybrid quantum-classical AI platform for unprecedented computational power',
          price: 'From $35,000/project',
          href: '/services/quantum-ai-platform',
          features: ['Quantum Neural Processing', 'Hybrid Algorithms', 'Quantum Advantage']
        },
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Enterprise-grade blockchain solutions for business transformation',
          price: 'From $20,000/project',
          href: '/services/blockchain-enterprise-solutions',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity']
        },
        {
          name: 'Space Technology',
          description: 'Advanced space technology solutions for commercial and research applications',
          price: 'From $50,000/project',
          href: '/services/space-tech',
          features: ['Satellite Systems', 'Space Data Analytics', 'Earth Observation']
        }
      ]
    },
    {
      name: 'Healthcare & Biotech',
      icon: Heart,
      description: 'AI-powered healthcare solutions and biotechnology innovations',
      color: 'from-pink-600 to-rose-600',
      services: [
        {
          name: 'AI Healthcare Diagnostic Assistant',
          description: 'Advanced AI platform for medical diagnostics and treatment recommendations',
          price: 'From $3,499/month',
          href: '/services/ai-healthcare-diagnostic',
          features: ['AI-powered Image Analysis', 'Symptom Assessment', 'Treatment Recommendations']
        },
        {
          name: 'Biotech & Healthcare Technology',
          description: 'Cutting-edge biotechnology solutions for healthcare innovation',
          price: 'From $45,000/project',
          href: '/services/biotech-healthcare-technology',
          features: ['AI-powered Diagnostics', 'Personalized Medicine', 'Drug Discovery']
        }
      ]
    },
    {
      name: 'Business Solutions',
      icon: TrendingUp,
      description: 'AI-powered business solutions for operational excellence',
      color: 'from-teal-600 to-green-600',
      services: [
        {
          name: 'Customer Success AI',
          description: 'AI-powered customer success platform for retention and growth',
          price: 'From $1,499/month',
          href: '/services/ai-customer-success-platform',
          features: ['Predictive Churn Modeling', 'Customer Health Scoring', 'Retention Campaigns']
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent workflow automation with multi-agent coordination',
          price: 'From $2,500/month',
          href: '/services/ai-workflow-orchestrator',
          features: ['Process Orchestration', 'Multi-Agent Systems', 'Dynamic Adaptation']
        },
        {
          name: 'Enterprise RAG Search',
          description: 'Intelligent enterprise search with AI-powered insights',
          price: 'From $8,999/month',
          href: '/services/enterprise-rag-search',
          features: ['Hybrid Search', 'PII Redaction', 'Grounding Citations']
        },
        {
          name: 'Agentic Copilot Suite',
          description: 'Task-driven AI agents for workflow automation across platforms',
          price: 'From $12,999/month',
          href: '/services/agentic-copilot-suite',
          features: ['Guardrailed Tools', 'Human-in-the-loop', 'Audit Trails']
        }
      ]
    },
    {
      name: 'Specialized Services',
      icon: Star,
      description: 'Specialized AI and technology solutions for unique business needs',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'Legal AI Automation',
          description: 'AI-powered legal document automation and analysis platform',
          price: 'From $2,499/month',
          href: '/services/ai-legal-document-automation',
          features: ['Contract Drafting', 'Clause Analysis', 'Risk Assessment']
        },
        {
          name: 'Quantum Supply Chain Optimizer',
          description: 'Revolutionary supply chain optimization using quantum algorithms',
          price: 'From $3,999/month',
          href: '/services/quantum-supply-chain-optimizer',
          features: ['Quantum Route Optimization', 'Demand Forecasting', 'Inventory Optimization']
        },
        {
          name: 'Autonomous Financial Trading',
          description: 'Next-generation autonomous trading platform with AI-driven execution',
          price: 'From $5,999/month',
          href: '/services/autonomous-financial-trading',
          features: ['AI-powered Market Analysis', 'Autonomous Trade Execution', 'Risk Management']
        },
        {
          name: 'Autonomous IoT Edge Computing',
          description: 'Intelligent edge computing platform that autonomously manages IoT devices',
          price: 'From $2,999/month',
          href: '/services/autonomous-iot-edge-computing',
          features: ['Autonomous Device Management', 'Edge AI Processing', 'Real-time Analytics']
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of our innovative AI, IT, and Micro SaaS services. Discover cutting-edge solutions for your business transformation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Technology
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Discover our complete portfolio of innovative AI, IT, and Micro SaaS solutions designed to transform your business and drive digital innovation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered analytics to quantum computing solutions, we offer comprehensive technology services to meet every business need.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700"
              >
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-slate-500 transition-all duration-200 hover:transform hover:scale-105"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="mb-4">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                      </div>
                      <div className="mb-4">
                        <h5 className="text-sm font-medium text-gray-200 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team of technology experts to discuss how our innovative solutions can drive your digital transformation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}