import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Atom, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Cpu,
  Lock,
  Network,
  Server,
  Globe,
  Rocket,
  Target,
  BarChart3,
  Workflow,
  Leaf,
  Satellite,
  Link as LinkIcon,
  MessageCircle,
  HelpCircle,
  Smartphone,
  ShoppingCart,
  FileText,
  Video,
  GraduationCap,
  TestTube,
  Building2,
  Car,
  Factory,
  Heart,
  DollarSign,
  ShoppingBag,
  Plane,
  Ship,
  Truck
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Zap },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'data-analytics', name: 'Data & Analytics', icon: Database },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Server },
    { id: 'emerging-tech', name: 'Emerging Technologies', icon: TestTube }
  ];

  const allServices = [
    // AI & Machine Learning
    {
      id: 'ai-autonomous-research-assistant',
      name: 'AI Autonomous Research Assistant',
      category: 'ai-ml',
      icon: Brain,
      description: 'Intelligent research automation that discovers insights and patterns across vast datasets.',
      features: ['Automated data collection', 'Pattern recognition', 'Insight generation', 'Research synthesis'],
      pricing: 'Starting at $5,000/month',
      link: '/services/ai-autonomous-research-assistant'
    },
    {
      id: 'ai-edge-computing-platform',
      name: 'AI Edge Computing Platform',
      category: 'ai-ml',
      icon: Cpu,
      description: 'Revolutionary edge AI platform for real-time processing and distributed intelligence.',
      features: ['Real-time AI processing', 'Edge AI optimization', 'Distributed intelligence', 'Edge-cloud hybrid'],
      pricing: 'Starting at $2,500/month',
      link: '/services/ai-edge-computing-platform'
    },
    {
      id: 'ai-business-intelligence-platform',
      name: 'AI Business Intelligence Platform',
      category: 'ai-ml',
      icon: BarChart3,
      description: 'AI-powered BI platform with predictive analytics and natural language queries.',
      features: ['Predictive analytics', 'Natural language query', 'Real-time dashboards', 'Automated insights'],
      pricing: 'Starting at $3,500/month',
      link: '/services/ai-business-intelligence-platform'
    },
    {
      id: 'ai-customer-experience-platform',
      name: 'AI Customer Experience Platform',
      category: 'ai-ml',
      icon: MessageCircle,
      description: 'Intelligent customer experience platform with AI chatbots and sentiment analysis.',
      features: ['AI chatbots', 'Sentiment analysis', 'Personalized recommendations', 'Omnichannel support'],
      pricing: 'Starting at $1,500/month',
      link: '/services/ai-customer-experience-platform'
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      category: 'ai-ml',
      icon: Shield,
      description: 'Advanced threat detection and response using machine learning algorithms.',
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', 'Compliance reporting'],
      pricing: 'Starting at $8,000/month',
      link: '/services/ai-cybersecurity-platform'
    },
    {
      id: 'ai-healthcare-platform',
      name: 'AI Healthcare Platform',
      category: 'ai-ml',
      icon: Heart,
      description: 'AI-powered healthcare solutions for diagnosis, treatment planning, and patient care.',
      features: ['Medical image analysis', 'Predictive diagnostics', 'Treatment optimization', 'Patient monitoring'],
      pricing: 'Starting at $12,000/month',
      link: '/services/ai-healthcare-platform'
    },
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization',
      category: 'ai-ml',
      icon: ShoppingCart,
      description: 'Intelligent supply chain management with predictive analytics and optimization.',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Risk assessment'],
      pricing: 'Starting at $6,000/month',
      link: '/services/ai-supply-chain-optimization'
    },

    // Quantum Computing
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI-Quantum Hybrid Platform',
      category: 'quantum',
      icon: Atom,
      description: 'Next-generation computing combining AI and quantum algorithms for complex problem solving.',
      features: ['Quantum algorithm optimization', 'Hybrid classical-quantum processing', 'Quantum machine learning', 'Cryptographic solutions'],
      pricing: 'Starting at $25,000/month',
      link: '/services/ai-quantum-hybrid-platform'
    },
    {
      id: 'quantum-neural-network',
      name: 'Quantum Neural Network Platform',
      category: 'quantum',
      icon: Brain,
      description: 'Quantum-enhanced neural networks for advanced pattern recognition and optimization.',
      features: ['Quantum superposition', 'Entanglement-based learning', 'Exponential speedup', 'Quantum error correction'],
      pricing: 'Starting at $20,000/month',
      link: '/services/quantum-neural-network'
    },

    // Cybersecurity
    {
      id: 'cybersecurity-solutions',
      name: 'Advanced Cybersecurity Solutions',
      category: 'cybersecurity',
      icon: Lock,
      description: 'Comprehensive security solutions protecting against modern cyber threats.',
      features: ['Zero-trust architecture', 'Advanced threat hunting', 'Incident response', 'Security training'],
      pricing: 'Starting at $3,000/month',
      link: '/services/cybersecurity-solutions'
    },
    {
      id: 'ai-threat-intelligence',
      name: 'AI Threat Intelligence',
      category: 'cybersecurity',
      icon: Brain,
      description: 'Intelligent threat detection and analysis using artificial intelligence.',
      features: ['Behavioral analytics', 'Threat correlation', 'Predictive intelligence', 'Automated response'],
      pricing: 'Starting at $4,500/month',
      link: '/services/ai-threat-intelligence'
    },

    // Cloud & DevOps
    {
      id: 'cloud-devops-automation',
      name: 'Cloud DevOps Automation',
      category: 'cloud-devops',
      icon: Cloud,
      description: 'Automated cloud infrastructure and deployment pipelines for rapid development.',
      features: ['Infrastructure as Code', 'CI/CD pipelines', 'Auto-scaling', 'Monitoring & alerting'],
      pricing: 'Starting at $2,500/month',
      link: '/services/cloud-devops-automation'
    },
    {
      id: 'ai-devops-automation-platform',
      name: 'AI DevOps Automation Platform',
      category: 'cloud-devops',
      icon: Cpu,
      description: 'AI-powered DevOps platform with intelligent CI/CD and predictive infrastructure.',
      features: ['Intelligent CI/CD', 'Predictive infrastructure', 'Automated security', 'Smart monitoring'],
      pricing: 'Starting at $4,000/month',
      link: '/services/ai-devops-automation-platform'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      category: 'cloud-devops',
      icon: Cloud,
      description: 'Seamless migration of legacy systems to modern cloud infrastructure.',
      features: ['Assessment & planning', 'Data migration', 'Application modernization', 'Performance optimization'],
      pricing: 'Starting at $15,000',
      link: '/services/cloud-migration'
    },

    // Data & Analytics
    {
      id: 'advanced-data-analytics',
      name: 'Advanced Data Analytics',
      category: 'data-analytics',
      icon: BarChart3,
      description: 'Comprehensive data analysis and business intelligence solutions.',
      features: ['Real-time analytics', 'Predictive modeling', 'Data visualization', 'Custom dashboards'],
      pricing: 'Starting at $3,500/month',
      link: '/services/advanced-data-analytics'
    },
    {
      id: 'big-data-processing',
      name: 'Big Data Processing',
      category: 'data-analytics',
      icon: Database,
      description: 'Scalable big data processing and analytics for enterprise applications.',
      features: ['Data ingestion', 'Stream processing', 'Batch processing', 'Data warehousing'],
      pricing: 'Starting at $5,000/month',
      link: '/services/big-data-processing'
    },

    // Digital Transformation
    {
      id: 'digital-transformation-suite',
      name: 'Digital Transformation Suite',
      category: 'digital-transformation',
      icon: Rocket,
      description: 'End-to-end digital transformation solutions for modern businesses.',
      features: ['Process automation', 'Legacy modernization', 'Change management', 'Innovation consulting'],
      pricing: 'Starting at $10,000/month',
      link: '/services/digital-transformation-suite'
    },
    {
      id: 'process-automation',
      name: 'Business Process Automation',
      category: 'digital-transformation',
      icon: Workflow,
      description: 'Intelligent automation of business processes for increased efficiency.',
      features: ['RPA implementation', 'Workflow automation', 'Integration services', 'Performance monitoring'],
      pricing: 'Starting at $4,000/month',
      link: '/services/process-automation'
    },

    // IT Infrastructure
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Solutions',
      category: 'it-infrastructure',
      icon: Server,
      description: 'Comprehensive IT infrastructure design, implementation, and management.',
      features: ['Network design', 'Server management', 'Storage solutions', 'Backup & recovery'],
      pricing: 'Starting at $2,000/month',
      link: '/services/it-infrastructure'
    },
    {
      id: 'it-onsite-services',
      name: 'IT Onsite Services',
      category: 'it-infrastructure',
      icon: Users,
      description: 'Onsite IT support and maintenance services for businesses.',
      features: ['Hardware support', 'Software installation', 'Network troubleshooting', 'Emergency response'],
      pricing: 'Starting at $150/hour',
      link: '/services/it-onsite-services'
    },

    // Emerging Technologies
    {
      id: 'blockchain-enterprise-solutions',
      name: 'Blockchain Enterprise Solutions',
      category: 'emerging-tech',
      icon: LinkIcon,
      description: 'Enterprise-grade blockchain solutions for secure, transparent operations.',
      features: ['Smart contracts', 'Supply chain tracking', 'Digital identity', 'Asset tokenization'],
      pricing: 'Starting at $8,000/month',
      link: '/services/blockchain-enterprise-solutions'
    },
    {
      id: 'space-technology-solutions',
      name: 'Space Technology Solutions',
      category: 'emerging-tech',
      icon: Satellite,
      description: 'Innovative space technology applications for terrestrial and orbital use.',
      features: ['Satellite communications', 'Space data analytics', 'Orbital mechanics', 'Space robotics'],
      pricing: 'Starting at $50,000/month',
      link: '/services/space-technology-solutions'
    },
    {
      id: 'green-technology-solutions',
      name: 'Green Technology Solutions',
      category: 'emerging-tech',
      icon: Leaf,
      description: 'Sustainable technology solutions for environmental conservation and efficiency.',
      features: ['Energy optimization', 'Carbon tracking', 'Sustainable computing', 'Green infrastructure'],
      pricing: 'Starting at $6,000/month',
      link: '/services/green-technology-solutions'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered diagnostics, patient care, and medical research solutions.',
      services: ['AI Healthcare Platform', 'Medical Data Analytics', 'Telemedicine Solutions']
    },
    {
      name: 'Financial Services',
      icon: DollarSign,
      description: 'Secure, compliant financial technology solutions for modern banking.',
      services: ['AI Financial Trading', 'Blockchain Solutions', 'RegTech Compliance']
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing and Industry 4.0 transformation solutions.',
      services: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain AI']
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingBag,
      description: 'Digital commerce and customer experience optimization.',
      services: ['AI Customer Analytics', 'Omnichannel Solutions', 'Inventory Optimization']
    },
    {
      name: 'Transportation & Logistics',
      icon: Truck,
      description: 'Intelligent logistics and transportation management systems.',
      services: ['Route Optimization', 'Fleet Management', 'Supply Chain AI']
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Digital learning and educational technology solutions.',
      services: ['Learning Analytics', 'Virtual Classrooms', 'AI Tutoring Systems']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Discover Zion Tech Group's comprehensive range of AI, quantum computing, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions powered by AI, quantum computing, and cutting-edge innovations. 
              Transform your business with our proven expertise and innovative approaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-xl text-gray-300">Explore our comprehensive range of technology services</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                    : 'border-slate-600/30 bg-slate-800/50 text-gray-300 hover:border-cyan-500/50 hover:bg-cyan-500/10'
                }`}
              >
                <category.icon className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {activeCategory === 'all' ? 'All Services' : serviceCategories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="text-xl text-gray-300">
              {activeCategory === 'all' 
                ? 'Comprehensive technology solutions for every business need'
                : `Specialized ${serviceCategories.find(c => c.id === activeCategory)?.name.toLowerCase()} solutions`
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-cyan-400">{service.pricing}</span>
                </div>
                
                <a
                  href={service.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-300">Tailored technology solutions for specific industries</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{industry.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Featured Services:</h4>
                  <ul className="space-y-1">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can help you achieve 
              your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/case-studies"
                className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
