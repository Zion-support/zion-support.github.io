import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Globe, 
  Rocket, 
  Zap, 
  Cpu, 
  Database, 
  BarChart3, 
  Users, 
  Target,
  DollarSign,
  Heart,
  Lock,
  Satellite,
  Atom,
  Network,
  TrendingUp,
  Smartphone,
  Building2,
  Palette
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const services = [
    {
      id: 'ai-autonomous-financial-advisor',
      title: 'AI Autonomous Financial Advisor',
      description: 'Intelligent financial advisory platform with personalized investment strategies and portfolio optimization',
      category: 'Financial Technology',
      price: '$2,500-6,500/month',
      marketPrice: '$3,500-8,000/month',
      savings: 'Up to 30% savings',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      features: [
        'AI-powered investment strategies',
        'Portfolio optimization',
        'Risk management',
        'Tax optimization',
        'Real-time market analysis'
      ],
      benefits: [
        'Increase portfolio returns by 15-25%',
        'Reduce investment risk by 30%',
        'Automated portfolio management',
        '24/7 market monitoring'
      ],
      link: 'https://ziontechgroup.com/services/ai-autonomous-financial-advisor'
    },
    {
      id: 'ai-autonomous-healthcare-diagnostics',
      title: 'AI Healthcare Diagnostics',
      description: 'Advanced medical diagnostics platform with AI-powered image analysis and disease detection',
      category: 'Healthcare Technology',
      price: '$4,500-12,000/month',
      marketPrice: '$6,000-18,000/month',
      savings: 'Up to 35% savings',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      features: [
        'AI-powered medical image analysis',
        'Multi-modality support',
        'Disease detection',
        'Diagnostic recommendations',
        'PACS integration'
      ],
      benefits: [
        'Improve diagnostic accuracy by 25-40%',
        'Reduce diagnostic time by 60%',
        'Lower diagnostic costs',
        'Better patient outcomes'
      ],
      link: 'https://ziontechgroup.com/services/ai-autonomous-healthcare-diagnostics'
    },
    {
      id: 'ai-autonomous-cybersecurity-operations',
      title: 'AI Cybersecurity Operations',
      description: 'Autonomous cybersecurity platform with 24/7 threat detection and automated response',
      category: 'Cybersecurity',
      price: '$3,500-8,500/month',
      marketPrice: '$4,500-12,000/month',
      savings: 'Up to 30% savings',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',
      features: [
        'AI-powered threat detection',
        'Automated incident response',
        'Threat intelligence',
        'Security monitoring',
        'Compliance management'
      ],
      benefits: [
        'Detect threats 99.9% faster',
        'Reduce false positives by 80%',
        '24/7 autonomous protection',
        'Lower security costs'
      ],
      link: 'https://ziontechgroup.com/services/ai-autonomous-cybersecurity-operations'
    },
    {
      id: 'quantum-edge-computing-solutions',
      title: 'Quantum Edge Computing',
      description: 'Revolutionary platform combining quantum computing with edge processing for ultra-fast computing',
      category: 'Edge Computing',
      price: '$6,500-18,000/month',
      marketPrice: '$8,000-25,000/month',
      savings: 'Up to 30% savings',
      icon: Atom,
      color: 'from-purple-500 to-violet-600',
      features: [
        'Quantum edge processing',
        'High-performance computing',
        'Advanced security',
        'Distributed processing',
        'IoT optimization'
      ],
      benefits: [
        '1000x faster computation',
        'Unbreakable security',
        'IoT optimization',
        'Future-proof technology'
      ],
      link: 'https://ziontechgroup.com/services/quantum-edge-computing-solutions'
    },
    {
      id: 'ai-space-technology-platform',
      title: 'AI Space Technology',
      description: 'Advanced space technology platform with satellite data analytics and space exploration insights',
      category: 'Space Technology',
      price: '$8,000-20,000/month',
      marketPrice: '$10,000-30,000/month',
      savings: 'Up to 35% savings',
      icon: Satellite,
      color: 'from-slate-500 to-gray-600',
      features: [
        'AI-powered satellite analytics',
        'Space debris monitoring',
        'Satellite operations',
        'Space exploration data',
        'Research capabilities'
      ],
      benefits: [
        'Advanced space analytics',
        'Space debris monitoring',
        'Operational optimization',
        'Research capabilities'
      ],
      link: 'https://ziontechgroup.com/services/ai-space-technology-platform'
    },
    {
      id: 'ai-legal-document-automation-platform',
      title: 'AI Legal Document Automation',
      description: 'Intelligent legal platform for document automation, contract analysis, and compliance management',
      category: 'Legal Technology',
      price: '$3,500-8,000/month',
      marketPrice: '$4,500-10,000/month',
      savings: 'Up to 30% savings',
      icon: Building2,
      color: 'from-amber-500 to-orange-600',
      features: [
        'AI legal automation',
        'Contract analysis',
        'Document drafting',
        'Compliance management',
        'Legal AI'
      ],
      benefits: [
        'Reduce legal costs by 40%',
        'Faster document processing',
        'Improved accuracy',
        'Compliance automation'
      ],
      link: 'https://ziontechgroup.com/services/ai-legal-document-automation-platform'
    },
    {
      id: 'ai-educational-content-creation-platform',
      title: 'AI Educational Content Creation',
      description: 'Intelligent platform for creating personalized learning content and adaptive education experiences',
      category: 'Education Technology',
      price: '$3,000-8,000/month',
      marketPrice: '$4,000-10,000/month',
      savings: 'Up to 30% savings',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'AI education',
        'Content creation',
        'Learning analytics',
        'Personalized learning',
        'Adaptive education'
      ],
      benefits: [
        'Personalized learning experiences',
        'Improved student engagement',
        'Reduced content creation time',
        'Better learning outcomes'
      ],
      link: 'https://ziontechgroup.com/services/ai-educational-content-creation-platform'
    },
    {
      id: 'ai-real-estate-investment-analytics-platform',
      title: 'AI Real Estate Analytics',
      description: 'Advanced platform for real estate investment analysis, market intelligence, and property valuation',
      category: 'Real Estate Technology',
      price: '$4,000-10,000/month',
      marketPrice: '$5,000-12,000/month',
      savings: 'Up to 30% savings',
      icon: Target,
      color: 'from-teal-500 to-green-600',
      features: [
        'AI real estate',
        'Investment analytics',
        'Market intelligence',
        'Property valuation',
        'Investment insights'
      ],
      benefits: [
        'Data-driven investment decisions',
        'Market trend analysis',
        'Property value predictions',
        'Risk assessment'
      ],
      link: 'https://ziontechgroup.com/services/ai-real-estate-investment-analytics-platform'
    },
    {
      id: 'ai-carbon-footprint-management-platform',
      title: 'AI Carbon Footprint Management',
      description: 'Intelligent sustainability platform for tracking, analyzing, and optimizing carbon footprints',
      category: 'Sustainability Technology',
      price: '$2,500-6,000/month',
      marketPrice: '$3,500-8,000/month',
      savings: 'Up to 30% savings',
      icon: Globe,
      color: 'from-emerald-500 to-green-600',
      features: [
        'AI sustainability',
        'Carbon footprint tracking',
        'Environmental analytics',
        'Sustainability goals',
        'Green technology'
      ],
      benefits: [
        'Reduce environmental impact',
        'Meet sustainability goals',
        'Cost savings',
        'Regulatory compliance'
      ],
      link: 'https://ziontechgroup.com/services/ai-carbon-footprint-management-platform'
    },
    {
      id: 'ai-mental-health-support-platform',
      title: 'AI Mental Health Support',
      description: 'Intelligent platform for mental health support, wellness monitoring, and stress management',
      category: 'Healthcare Technology',
      price: '$2,000-5,000/month',
      marketPrice: '$2,500-6,000/month',
      savings: 'Up to 30% savings',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      features: [
        'AI mental health',
        'Wellness monitoring',
        'Stress management',
        'Mood tracking',
        'Mental health support'
      ],
      benefits: [
        '24/7 mental health support',
        'Personalized wellness plans',
        'Early intervention',
        'Improved mental health outcomes'
      ],
      link: 'https://ziontechgroup.com/services/ai-mental-health-support-platform'
    },
    {
      id: 'ai-smart-home-energy-management-platform',
      title: 'AI Smart Home Energy',
      description: 'Intelligent platform for optimizing home energy consumption and smart device integration',
      category: 'Smart Home Technology',
      price: '$1,500-4,000/month',
      marketPrice: '$2,000-5,000/month',
      savings: 'Up to 30% savings',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'AI smart home',
        'Energy management',
        'Smart devices',
        'Energy optimization',
        'Home automation'
      ],
      benefits: [
        'Reduce energy costs by 25%',
        'Smart device integration',
        'Environmental impact reduction',
        'Home automation'
      ],
      link: 'https://ziontechgroup.com/services/ai-smart-home-energy-management-platform'
    },
    {
      id: 'ai-autonomous-manufacturing-platform',
      title: 'AI Autonomous Manufacturing',
      description: 'Revolutionary platform for autonomous manufacturing operations and Industry 4.0 optimization',
      category: 'Manufacturing Technology',
      price: '$20,000-50,000/month',
      marketPrice: '$25,000-60,000/month',
      savings: 'Up to 30% savings',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'AI manufacturing',
        'Industry 4.0',
        'Quality control',
        'Predictive maintenance',
        'Autonomous production'
      ],
      benefits: [
        'Increase production efficiency by 40%',
        'Reduce downtime by 60%',
        'Improve quality control',
        'Autonomous operations'
      ],
      link: 'https://ziontechgroup.com/services/ai-autonomous-manufacturing-platform'
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🚀 Innovative Services Showcase 2025
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Zion Tech Group's cutting-edge AI, IT, and micro SAAS services that are transforming industries and creating unprecedented value
          </motion.p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Zion Tech Group</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Phone</h3>
              <p className="text-blue-600 text-lg">+1 302 464 0950</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Email</h3>
              <p className="text-green-600 text-lg">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Address</h3>
              <p className="text-purple-600 text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
                  variants={itemVariants}
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-8 h-8" />
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-gray-800">{service.price}</span>
                        <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-semibold">{service.savings}</span>
                        <span className="text-sm text-gray-500">per month</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More & Get Started
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already leveraging Zion Tech Group's innovative AI and technology solutions to drive growth, efficiency, and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us Today
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Zion Technology Group. All rights reserved. | 
            <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-1">
              ziontechgroup.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;