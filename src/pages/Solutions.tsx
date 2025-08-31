import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Users, 
  Building2,
  Phone,
  Mail,
  Calendar,
  Clock,
  Award,
  Globe,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3,
  ShoppingCart,
  Truck,
  GraduationCap,
  Cpu,
  Heart,
  Factory,
  Car,
  Leaf,
  Atom,
  Database,
  Network,
  Eye,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: Globe },
    { id: 'industry', name: 'Industry Solutions', icon: Building2 },
    { id: 'technology', name: 'Technology Solutions', icon: Cpu },
    { id: 'ai', name: 'AI & ML Solutions', icon: Brain },
    { id: 'quantum', name: 'Quantum Solutions', icon: Atom }
  ];

  const industrySolutions = [
    {
      id: 'healthcare',
      name: 'Healthcare Solutions',
      description: 'Transform healthcare delivery with AI-powered diagnostics, patient care optimization, and secure health data management.',
      icon: Heart,
      features: [
        'AI-Powered Diagnostics',
        'Patient Care Optimization',
        'Health Data Analytics',
        'HIPAA Compliant Security',
        'Telemedicine Platforms',
        'Clinical Decision Support'
      ],
      benefits: [
        'Improved patient outcomes',
        'Reduced healthcare costs',
        'Enhanced operational efficiency',
        'Better resource allocation'
      ],
      image: '/images/solutions/healthcare.jpg',
      link: '/solutions/healthcare'
    },
    {
      id: 'financial',
      name: 'Financial Services',
      description: 'Revolutionize financial operations with blockchain technology, AI-driven risk assessment, and secure payment systems.',
      icon: BarChart3,
      features: [
        'Blockchain Solutions',
        'AI Risk Assessment',
        'Secure Payment Systems',
        'Fraud Detection',
        'Regulatory Compliance',
        'Portfolio Optimization'
      ],
      benefits: [
        'Enhanced security',
        'Reduced fraud risk',
        'Improved compliance',
        'Better customer experience'
      ],
      image: '/images/solutions/financial.jpg',
      link: '/solutions/financial'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      description: 'Optimize manufacturing processes with IoT sensors, predictive maintenance, and smart factory automation.',
      icon: Factory,
      features: [
        'IoT Integration',
        'Predictive Maintenance',
        'Smart Factory Automation',
        'Quality Control AI',
        'Supply Chain Optimization',
        'Energy Management'
      ],
      benefits: [
        'Increased productivity',
        'Reduced downtime',
        'Lower operational costs',
        'Improved quality control'
      ],
      image: '/images/solutions/manufacturing.jpg',
      link: '/solutions/manufacturing'
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      description: 'Enhance customer experience with personalized recommendations, inventory optimization, and omnichannel solutions.',
      icon: ShoppingCart,
      features: [
        'Personalized Recommendations',
        'Inventory Optimization',
        'Omnichannel Solutions',
        'Customer Analytics',
        'Supply Chain Management',
        'Mobile Commerce'
      ],
      benefits: [
        'Higher conversion rates',
        'Improved customer loyalty',
        'Optimized inventory',
        'Better market insights'
      ],
      image: '/images/solutions/retail.jpg',
      link: '/solutions/retail'
    },
    {
      id: 'transportation',
      name: 'Transportation & Logistics',
      description: 'Streamline logistics with route optimization, real-time tracking, and autonomous vehicle technology.',
      icon: Truck,
      features: [
        'Route Optimization',
        'Real-time Tracking',
        'Autonomous Vehicles',
        'Fleet Management',
        'Supply Chain Visibility',
        'Predictive Analytics'
      ],
      benefits: [
        'Reduced delivery times',
        'Lower fuel costs',
        'Improved safety',
        'Better customer service'
      ],
      image: '/images/solutions/transportation.jpg',
      link: '/solutions/transportation'
    },
    {
      id: 'education',
      name: 'Education',
      description: 'Transform learning with adaptive learning platforms, virtual reality classrooms, and AI-powered tutoring.',
      icon: GraduationCap,
      features: [
        'Adaptive Learning Platforms',
        'Virtual Reality Classrooms',
        'AI-Powered Tutoring',
        'Student Analytics',
        'Remote Learning Solutions',
        'Content Personalization'
      ],
      benefits: [
        'Improved learning outcomes',
        'Personalized education',
        'Increased engagement',
        'Better resource utilization'
      ],
      image: '/images/solutions/education.jpg',
      link: '/solutions/education'
    },
    {
      id: 'government',
      name: 'Government',
      description: 'Modernize government services with digital transformation, cybersecurity, and citizen engagement platforms.',
      icon: Building2,
      features: [
        'Digital Transformation',
        'Cybersecurity Solutions',
        'Citizen Engagement',
        'Data Analytics',
        'Process Automation',
        'Cloud Infrastructure'
      ],
      benefits: [
        'Improved service delivery',
        'Enhanced security',
        'Better citizen experience',
        'Operational efficiency'
      ],
      image: '/images/solutions/government.jpg',
      link: '/solutions/government'
    }
  ];

  const technologySolutions = [
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics for solving complex computational problems.',
      icon: Atom,
      features: [
        'Quantum Algorithms',
        'Optimization Problems',
        'Cryptography',
        'Simulation',
        'Machine Learning',
        'Financial Modeling'
      ],
      benefits: [
        'Exponential speedup',
        'Complex problem solving',
        'Advanced cryptography',
        'Scientific breakthroughs'
      ],
      image: '/images/solutions/quantum.jpg',
      link: '/solutions/quantum-computing'
    },
    {
      id: 'blockchain',
      name: 'Blockchain Solutions',
      description: 'Build secure, transparent, and decentralized applications for various industries.',
      icon: Shield,
      features: [
        'Smart Contracts',
        'DeFi Platforms',
        'Supply Chain Tracking',
        'Digital Identity',
        'Tokenization',
        'Cross-chain Interoperability'
      ],
      benefits: [
        'Enhanced security',
        'Transparency',
        'Reduced costs',
        'Trustless operations'
      ],
      image: '/images/solutions/blockchain.jpg',
      link: '/solutions/blockchain'
    },
    {
      id: 'space-technology',
      name: 'Space Technology',
      description: 'Develop cutting-edge solutions for space exploration, satellite technology, and aerospace applications.',
      icon: Rocket,
      features: [
        'Satellite Technology',
        'Space Exploration',
        'Aerospace Solutions',
        'Remote Sensing',
        'Space Communications',
        'Orbital Mechanics'
      ],
      benefits: [
        'Innovation leadership',
        'Global connectivity',
        'Scientific advancement',
        'Economic growth'
      ],
      image: '/images/solutions/space.jpg',
      link: '/solutions/space-technology'
    },
    {
      id: 'green-technology',
      name: 'Green Technology',
      description: 'Create sustainable solutions for environmental challenges and renewable energy systems.',
      icon: Leaf,
      features: [
        'Renewable Energy',
        'Energy Storage',
        'Carbon Capture',
        'Smart Grids',
        'Sustainable Materials',
        'Environmental Monitoring'
      ],
      benefits: [
        'Environmental protection',
        'Cost savings',
        'Regulatory compliance',
        'Brand reputation'
      ],
      image: '/images/solutions/green.jpg',
      link: '/solutions/green-technology'
    }
  ];

  const aiSolutions = [
    {
      id: 'ai-autonomous-business',
      name: 'AI Autonomous Business',
      description: 'Create self-operating business systems that learn, adapt, and optimize automatically.',
      icon: Brain,
      features: [
        'Process Automation',
        'Decision Making',
        'Predictive Analytics',
        'Continuous Learning',
        'Performance Optimization',
        'Resource Management'
      ],
      benefits: [
        '24/7 operation',
        'Reduced human error',
        'Increased efficiency',
        'Scalable operations'
      ],
      image: '/images/solutions/ai-autonomous.jpg',
      link: '/solutions/ai-autonomous-business'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Generate high-quality, personalized content at scale using advanced AI models.',
      icon: Lightbulb,
      features: [
        'Text Generation',
        'Image Creation',
        'Video Production',
        'Content Personalization',
        'Multilingual Support',
        'Quality Assurance'
      ],
      benefits: [
        'Faster content creation',
        'Cost reduction',
        'Consistent quality',
        'Personalized experiences'
      ],
      image: '/images/solutions/ai-content.jpg',
      link: '/solutions/ai-content-generation'
    },
    {
      id: 'ai-powered-security',
      name: 'AI-Powered Security',
      description: 'Protect digital assets with intelligent threat detection and automated response systems.',
      icon: Shield,
      features: [
        'Threat Detection',
        'Behavioral Analysis',
        'Automated Response',
        'Risk Assessment',
        'Compliance Monitoring',
        'Incident Management'
      ],
      benefits: [
        'Proactive protection',
        'Reduced false positives',
        'Faster response times',
        'Comprehensive coverage'
      ],
      image: '/images/solutions/ai-security.jpg',
      link: '/solutions/ai-powered-security'
    }
  ];

  const allSolutions = [...industrySolutions, ...technologySolutions, ...aiSolutions];

  const getFilteredSolutions = () => {
    switch (selectedCategory) {
      case 'industry':
        return industrySolutions;
      case 'technology':
        return technologySolutions;
      case 'ai':
        return aiSolutions;
      default:
        return allSolutions;
    }
  };

  const solutions = getFilteredSolutions();

  return (
    <>
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover comprehensive technology solutions for your industry. From AI and quantum computing to industry-specific solutions, we help businesses transform and succeed."
        keywords="solutions, industry solutions, technology solutions, AI solutions, quantum computing, blockchain, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_1px,_transparent_1px)] bg-[length:50px_50px] opacity-10"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Solutions That Transform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover comprehensive technology solutions tailored to your industry and business needs. 
                From AI and quantum computing to industry-specific solutions, we help businesses succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-started"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-300 border border-slate-600"
                >
                  Call Now: +1 (302) 464-0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                      : 'border-slate-600 bg-slate-700/50 text-gray-300 hover:border-blue-400 hover:bg-slate-700/70'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-xl border border-slate-600 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Solution Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <solution.icon className="w-16 h-16 text-blue-400" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{solution.name}</h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {solution.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <Star className="w-3 h-3 text-yellow-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={solution.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Find Your Perfect Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts help you identify the best technology solutions for your business needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/get-started"
                  className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-600 transition-all duration-300 border border-slate-600"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Solutions;
