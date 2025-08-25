import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon,
  SparklesIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  LightBulbIcon,
  BoltIcon,
  EyeIcon,
  FingerPrintIcon
} from '@heroicons/react/24/outline';

const NewServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', color: 'from-cyan-500 to-blue-500' },
    { id: 'ai', name: 'AI & ML', color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum', color: 'from-indigo-500 to-purple-500' },
    { id: 'security', name: 'Security', color: 'from-green-500 to-emerald-500' },
    { id: 'cloud', name: 'Cloud', color: 'from-blue-500 to-cyan-500' },
    { id: 'emerging', name: 'Emerging Tech', color: 'from-orange-500 to-red-500' }
  ];

  const services = [
    {
      id: 1,
      title: "AI-Powered Autonomous Business Operations",
      description: "Revolutionary AI system that autonomously manages and optimizes business processes across your entire organization.",
      category: 'ai',
      features: [
        "24/7 autonomous operation",
        "Real-time process optimization",
        "Predictive analytics and forecasting",
        "Seamless integration with existing systems"
      ],
      benefits: [
        "95% reduction in manual processing",
        "40% increase in operational efficiency",
        "Real-time business intelligence",
        "Scalable across all departments"
      ],
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-600",
      status: "New",
      complexity: "Advanced"
    },
    {
      id: 2,
      title: "Quantum Neural Network Platform",
      description: "Next-generation quantum computing platform that combines quantum algorithms with neural networks for unprecedented computational power.",
      category: 'quantum',
      features: [
        "Quantum-enhanced machine learning",
        "Hybrid quantum-classical computing",
        "Real-time quantum simulation",
        "Advanced optimization algorithms"
      ],
      benefits: [
        "1000x faster computation for complex problems",
        "Breakthrough solutions for optimization",
        "Quantum-safe cryptography",
        "Future-proof technology foundation"
      ],
      icon: SparklesIcon,
      color: "from-indigo-500 to-purple-600",
      status: "Beta",
      complexity: "Expert"
    },
    {
      id: 3,
      title: "AI-Powered IT Asset Management",
      description: "Intelligent system that automatically discovers, tracks, and optimizes all IT assets across your infrastructure.",
      category: 'ai',
      features: [
        "Automated asset discovery",
        "Real-time monitoring and alerts",
        "Predictive maintenance scheduling",
        "Cost optimization recommendations"
      ],
      benefits: [
        "30% reduction in IT costs",
        "99.9% asset visibility",
        "Proactive issue resolution",
        "Compliance automation"
      ],
      icon: CogIcon,
      color: "from-blue-500 to-cyan-600",
      status: "New",
      complexity: "Intermediate"
    },
    {
      id: 4,
      title: "SOC2 Compliance Automation Platform",
      description: "Automated compliance management system that ensures your organization meets and maintains SOC2 Type II certification.",
      category: 'security',
      features: [
        "Automated compliance monitoring",
        "Real-time security assessments",
        "Automated report generation",
        "Continuous compliance validation"
      ],
      benefits: [
        "90% reduction in audit preparation time",
        "Continuous compliance assurance",
        "Automated evidence collection",
        "Risk mitigation automation"
      ],
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-600",
      status: "New",
      complexity: "Intermediate"
    },
    {
      id: 5,
      title: "AI Autonomous Research Assistant",
      description: "Intelligent research platform that autonomously conducts research, analyzes data, and generates insights across multiple domains.",
      category: 'ai',
      features: [
        "Multi-domain research capabilities",
        "Automated data analysis",
        "Intelligent insight generation",
        "Collaborative research tools"
      ],
      benefits: [
        "10x faster research completion",
        "Comprehensive data coverage",
        "AI-powered insights",
        "Collaborative research environment"
      ],
      icon: LightBulbIcon,
      color: "from-yellow-500 to-orange-600",
      status: "Coming Soon",
      complexity: "Advanced"
    },
    {
      id: 6,
      title: "5G Enterprise Solutions Platform",
      description: "Comprehensive 5G platform designed specifically for enterprise needs with AI-powered optimization and management.",
      category: 'emerging',
      features: [
        "Enterprise-grade 5G infrastructure",
        "AI-powered network optimization",
        "Edge computing integration",
        "Advanced security protocols"
      ],
      benefits: [
        "10x faster network speeds",
        "Ultra-low latency operations",
        "Massive IoT device support",
        "Future-ready infrastructure"
      ],
      icon: BoltIcon,
      color: "from-orange-500 to-red-600",
      status: "New",
      complexity: "Advanced"
    },
    {
      id: 7,
      title: "AI Workflow Automation Suite",
      description: "Comprehensive workflow automation platform that uses AI to streamline and optimize business processes across all departments.",
      category: 'ai',
      features: [
        "Intelligent process mapping",
        "Automated workflow generation",
        "Real-time optimization",
        "Cross-platform integration"
      ],
      benefits: [
        "80% reduction in process time",
        "Elimination of manual errors",
        "Scalable automation",
        "ROI within 3 months"
      ],
      icon: RocketLaunchIcon,
      color: "from-cyan-500 to-blue-600",
      status: "New",
      complexity: "Intermediate"
    },
    {
      id: 8,
      title: "Blockchain Enterprise Solutions",
      description: "Enterprise-grade blockchain platform with AI integration for secure, transparent, and efficient business operations.",
      category: 'emerging',
      features: [
        "Enterprise blockchain infrastructure",
        "Smart contract automation",
        "AI-powered security",
        "Multi-chain support"
      ],
      benefits: [
        "100% transaction transparency",
        "Elimination of fraud",
        "Automated compliance",
        "Cost reduction through automation"
      ],
      icon: GlobeAltIcon,
      color: "from-emerald-500 to-teal-600",
      status: "Beta",
      complexity: "Expert"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <RocketLaunchIcon className="w-4 h-4 mr-2" />
              Latest Innovations
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Revolutionary New Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of technology with our cutting-edge service offerings that push the boundaries of what's possible
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-medium`}>
                          {service.status}
                        </span>
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600">
                          {service.complexity}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-cyan-400 mb-3 flex items-center">
                      <EyeIcon className="w-5 h-5 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-green-400 mb-3 flex items-center">
                      <ChartBarIcon className="w-5 h-5 mr-2" />
                      Business Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <button className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex-1`}>
                      Learn More
                    </button>
                    <button className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-medium transition-all duration-300">
                      Demo
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to leverage these revolutionary services and gain a competitive advantage in your industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full font-semibold transition-all duration-300">
                Request Early Access
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewServices;