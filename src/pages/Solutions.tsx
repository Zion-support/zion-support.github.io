import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Database, 
  Globe,
  Lock,
  Code,
  Heart,
  Users,
  Award,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  BarChart3,
  Cpu,
  Network,
  Atom,
  Rocket,
  Lightbulb,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Wifi,
  Eye,
  Fingerprint,
  Key,
  Search,
  Filter,
  Play,
  Download,
  Share2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ShoppingBag,
  Truck
} from 'lucide-react';

const solutionCategories = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that learn, adapt, and optimize business processes',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    solutions: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Automated Decision Making',
      'Intelligent Process Automation'
    ],
    benefits: [
      'Increased operational efficiency',
      'Data-driven insights',
      'Automated workflows',
      'Improved customer experience'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect digital assets and infrastructure',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    solutions: [
      'Threat Detection & Response',
      'Identity & Access Management',
      'Data Encryption',
      'Security Monitoring',
      'Incident Response',
      'Compliance Management'
    ],
    benefits: [
      'Enhanced threat protection',
      'Regulatory compliance',
      'Reduced security risks',
      '24/7 security monitoring'
    ]
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and platform solutions for modern businesses',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-500',
    solutions: [
      'Cloud Migration',
      'Multi-Cloud Management',
      'Serverless Computing',
      'Container Orchestration',
      'Cloud Security',
      'Cost Optimization'
    ],
    benefits: [
      'Scalable infrastructure',
      'Reduced operational costs',
      'Improved performance',
      'Enhanced flexibility'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for strategic decision-making',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500',
    solutions: [
      'Business Intelligence',
      'Real-time Analytics',
      'Data Warehousing',
      'Predictive Modeling',
      'Data Visualization',
      'Performance Monitoring'
    ],
    benefits: [
      'Data-driven decisions',
      'Improved performance',
      'Competitive insights',
      'Operational efficiency'
    ]
  },
  {
    id: 'iot-edge',
    title: 'IoT & Edge Computing',
    description: 'Connected devices and edge processing for real-time intelligence',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    solutions: [
      'IoT Device Management',
      'Edge AI Processing',
      'Sensor Networks',
      'Real-time Monitoring',
      'Predictive Maintenance',
      'Smart City Solutions'
    ],
    benefits: [
      'Real-time insights',
      'Reduced latency',
      'Lower bandwidth costs',
      'Enhanced automation'
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'End-to-end digital solutions to modernize business operations',
    icon: Rocket,
    color: 'from-indigo-500 to-purple-500',
    solutions: [
      'Process Automation',
      'Digital Workflows',
      'Legacy System Modernization',
      'Change Management',
      'Digital Strategy',
      'Technology Consulting'
    ],
    benefits: [
      'Improved efficiency',
      'Enhanced customer experience',
      'Reduced operational costs',
      'Competitive advantage'
    ]
  }
];

const industrySolutions = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Digital health solutions that improve patient care and operational efficiency',
    icon: Heart,
    solutions: [
      'Electronic Health Records',
      'Telemedicine Platforms',
      'Medical Imaging AI',
      'Patient Monitoring',
      'Healthcare Analytics',
      'Compliance Management'
    ],
    caseStudies: 12,
    clients: 25
  },
  {
    id: 'finance',
    title: 'Financial Services',
    description: 'Secure, compliant solutions for banking, insurance, and fintech companies',
    icon: Shield,
    solutions: [
      'Fraud Detection',
      'Risk Management',
      'Digital Banking',
      'Regulatory Compliance',
      'Customer Analytics',
      'Blockchain Solutions'
    ],
    caseStudies: 18,
    clients: 32
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Smart manufacturing solutions for Industry 4.0 and operational excellence',
    icon: Settings,
    solutions: [
      'Predictive Maintenance',
      'Quality Control AI',
      'Supply Chain Optimization',
      'Digital Twins',
      'Production Analytics',
      'IoT Integration'
    ],
    caseStudies: 15,
    clients: 28
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    description: 'Digital commerce solutions that enhance customer experience and drive sales',
    icon: ShoppingBag,
    solutions: [
      'E-commerce Platforms',
      'Customer Analytics',
      'Inventory Management',
      'Personalization Engines',
      'Omnichannel Solutions',
      'Mobile Apps'
    ],
    caseStudies: 20,
    clients: 45
  },
  {
    id: 'energy',
    title: 'Energy & Utilities',
    description: 'Smart energy solutions for sustainability and operational efficiency',
    icon: Zap,
    solutions: [
      'Smart Grid Management',
      'Energy Analytics',
      'Predictive Maintenance',
      'Renewable Energy Integration',
      'Demand Response',
      'Asset Management'
    ],
    caseStudies: 10,
    clients: 18
  },
  {
    id: 'transportation',
    title: 'Transportation & Logistics',
    description: 'Intelligent solutions for supply chain optimization and fleet management',
    icon: Truck,
    solutions: [
      'Route Optimization',
      'Fleet Management',
      'Supply Chain Analytics',
      'Last-Mile Delivery',
      'Real-time Tracking',
      'Predictive Logistics'
    ],
    caseStudies: 14,
    clients: 22
  }
];

const featuredSolutions = [
  {
    id: 'zion-ai-platform',
    title: 'Zion AI Platform',
    category: 'AI & Machine Learning',
    description: 'Enterprise-grade AI platform that enables organizations to build, deploy, and manage machine learning models at scale.',
    features: [
      'AutoML capabilities',
      'Model versioning',
      'A/B testing',
      'Real-time inference',
      'Model monitoring',
      'Explainable AI'
    ],
    benefits: [
      'Faster AI deployment',
      'Reduced development costs',
      'Improved model accuracy',
      'Enhanced transparency'
    ],
    pricing: 'Starting at $2,500/month',
    demo: true,
    trial: true
  },
  {
    id: 'zion-secure',
    title: 'Zion Secure',
    category: 'Cybersecurity',
    description: 'Comprehensive security platform that provides threat detection, response, and compliance management in a single solution.',
    features: [
      'AI-powered threat detection',
      'Zero-trust architecture',
      'Compliance automation',
      'Incident response',
      'Security analytics',
      '24/7 monitoring'
    ],
    benefits: [
      'Enhanced threat protection',
      'Reduced security risks',
      'Regulatory compliance',
      'Lower security costs'
    ],
    pricing: 'Starting at $1,800/month',
    demo: true,
    trial: true
  },
  {
    id: 'zion-cloud',
    title: 'Zion Cloud',
    category: 'Cloud Computing',
    description: 'Multi-cloud management platform that simplifies cloud operations and optimizes costs across different cloud providers.',
    features: [
      'Multi-cloud management',
      'Cost optimization',
      'Security compliance',
      'Performance monitoring',
      'Automated scaling',
      'Disaster recovery'
    ],
    benefits: [
      'Reduced cloud costs',
      'Improved performance',
      'Enhanced security',
      'Simplified management'
    ],
    pricing: 'Starting at $1,200/month',
    demo: true,
    trial: true
  },
  {
    id: 'zion-analytics',
    title: 'Zion Analytics',
    category: 'Data Analytics',
    description: 'Advanced analytics platform that transforms business data into actionable insights for strategic decision-making.',
    features: [
      'Real-time dashboards',
      'Predictive analytics',
      'Data visualization',
      'Custom reporting',
      'Data integration',
      'Mobile access'
    ],
    benefits: [
      'Data-driven decisions',
      'Improved performance',
      'Competitive insights',
      'Operational efficiency'
    ],
    pricing: 'Starting at $900/month',
    demo: true,
    trial: true
  }
];

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const filteredSolutions = selectedCategory === 'all' && selectedIndustry === 'all' 
    ? featuredSolutions 
    : featuredSolutions.filter(solution => {
        const categoryMatch = selectedCategory === 'all' || solution.category === selectedCategory;
        const industryMatch = selectedIndustry === 'all' || solution.industry === selectedIndustry;
        return categoryMatch && industryMatch;
      });

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Technology Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions that drive digital transformation, enhance security, 
              and unlock new possibilities for businesses across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">6 Solution Categories</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-purple">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">6 Industries</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-blue">
                <Users className="w-5 h-5" />
                <span className="font-semibold">200+ Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Solution Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive portfolio of technology solutions addresses the most critical 
              challenges facing modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Solutions</h4>
                  <ul className="space-y-2">
                    {category.solutions.slice(0, 4).map((solution, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-zion-slate-light text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-purple mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {category.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-purple mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  to={`/solutions/${category.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored technology solutions designed specifically for the unique challenges 
              and opportunities of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Solutions</h4>
                  <ul className="space-y-2">
                    {industry.solutions.slice(0, 4).map((solution, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-zion-slate-light text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zion-slate-light/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-cyan">{industry.caseStudies}</div>
                    <div className="text-xs text-zion-slate-light">Case Studies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-purple">{industry.clients}</div>
                    <div className="text-xs text-zion-slate-light">Clients</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our flagship technology solutions that deliver exceptional value and transformative results 
              for organizations worldwide.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
            >
              <option value="all">All Categories</option>
              {solutionCategories.map((category) => (
                <option key={category.id} value={category.title}>{category.title}</option>
              ))}
            </select>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
            >
              <option value="all">All Industries</option>
              {industrySolutions.map((industry) => (
                <option key={industry.id} value={industry.title}>{industry.title}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-2">
                      {solution.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-zion-cyan">{solution.pricing}</div>
                    <div className="text-xs text-zion-slate-light">Starting Price</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-purple mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-zion-slate-light text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-zion-slate-light/20">
                  <div className="flex space-x-2">
                    {solution.demo && (
                      <button className="px-4 py-2 bg-zion-cyan text-white text-sm font-medium rounded-lg hover:bg-zion-cyan-light transition-colors duration-300">
                        <Play className="w-4 h-4 mr-1 inline" />
                        Demo
                      </button>
                    )}
                    {solution.trial && (
                      <button className="px-4 py-2 border border-zion-cyan text-zion-cyan text-sm font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-colors duration-300">
                        Start Trial
                      </button>
                    )}
                  </div>
                  <Link
                    to={`/solutions/${solution.id}`}
                    className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let our technology solutions drive your digital transformation and unlock new possibilities 
              for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
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