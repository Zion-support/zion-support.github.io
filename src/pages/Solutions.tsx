<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

export default function Solutions() {
  const industrySolutions = [
    {
      title: "Healthcare",
      description: "AI-powered diagnostics, patient monitoring, and healthcare analytics solutions",
      icon: "🏥",
      features: ["Patient data management", "AI diagnostics", "Telemedicine platforms", "Compliance solutions"]
    },
    {
      title: "Finance",
      description: "Secure financial technology solutions for banking and fintech companies",
      icon: "💳",
      features: ["Fraud detection", "Risk assessment", "Digital banking", "Regulatory compliance"]
    },
    {
      title: "Manufacturing",
      description: "Smart manufacturing solutions with IoT and predictive analytics",
      icon: "🏭",
      features: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Automation"]
    },
    {
      title: "Retail",
      description: "E-commerce and retail technology solutions for modern businesses",
      icon: "🛍️",
      features: ["Omnichannel platforms", "Inventory management", "Customer analytics", "Mobile commerce"]
    }
  ];

  const technologySolutions = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business automation",
      icon: Zap,
      features: ["Predictive analytics", "Natural language processing", "Computer vision", "Automated decision making"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and development operations solutions",
      icon: Globe,
      features: ["Multi-cloud strategy", "Container orchestration", "CI/CD pipelines", "Infrastructure as code"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: Shield,
      features: ["Threat detection", "Identity management", "Data protection", "Compliance auditing"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation solutions for modern businesses",
      icon: TrendingUp,
      features: ["Process optimization", "Technology modernization", "Change management", "Performance metrics"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Tailored technology solutions designed for your industry and business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions designed for your industry's unique challenges and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Lightbulb,
  Rocket,
  Database,
  Network,
  Lock,
  Cpu
} from 'lucide-react';

const Solutions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Solutions', icon: Zap },
    { id: 'ai', label: 'AI & ML', icon: Brain },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'infrastructure', label: 'Infrastructure', icon: Server },
    { id: 'digital', label: 'Digital Transformation', icon: Rocket }
  ];

  const solutions = [
    {
      id: 'ai-automation',
      category: 'ai',
      title: 'AI-Powered Business Automation',
      description: 'Transform your operations with intelligent automation that learns and adapts to your business needs.',
      icon: Brain,
      features: [
        'Intelligent process automation',
        'Machine learning algorithms',
        'Natural language processing',
        'Predictive analytics',
        'Custom AI model development'
      ],
      benefits: [
        'Reduce manual tasks by 80%',
        'Improve accuracy and consistency',
        '24/7 automated operations',
        'Scalable AI solutions'
      ]
    },
    {
      id: 'cloud-migration',
      category: 'cloud',
      title: 'Cloud Migration & Optimization',
      description: 'Seamlessly migrate to the cloud and optimize your infrastructure for maximum performance and cost efficiency.',
      icon: Cloud,
      features: [
        'Multi-cloud strategy',
        'Legacy system migration',
        'Performance optimization',
        'Cost management',
        'Disaster recovery'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Faster deployment times'
      ]
    },
    {
      id: 'cybersecurity-suite',
      category: 'security',
      title: 'Advanced Cybersecurity Suite',
      description: 'Protect your business with enterprise-grade security solutions that adapt to evolving threats.',
      icon: Shield,
      features: [
        'Threat detection & response',
        'Zero-trust architecture',
        'Compliance management',
        'Security awareness training',
        'Incident response planning'
      ],
      benefits: [
        'Real-time threat protection',
        'Compliance with industry standards',
        'Reduced security incidents',
        'Peace of mind for stakeholders'
      ]
    },
    {
      id: 'quantum-computing',
      category: 'ai',
      title: 'Quantum Computing Solutions',
      description: 'Harness the power of quantum computing for complex problem-solving and optimization challenges.',
      icon: Cpu,
      features: [
        'Quantum algorithm development',
        'Optimization problem solving',
        'Cryptography applications',
        'Research partnerships',
        'Custom quantum solutions'
      ],
      benefits: [
        'Solve previously impossible problems',
        'Exponential performance gains',
        'Future-proof technology investment',
        'Competitive advantage'
      ]
    },
    {
      id: 'iot-platform',
      category: 'infrastructure',
      title: 'IoT Edge Computing Platform',
      description: 'Build intelligent, connected systems that process data at the edge for real-time insights and control.',
      icon: Network,
      features: [
        'Edge computing infrastructure',
        'Real-time data processing',
        'Device management',
        'Analytics & visualization',
        'Integration capabilities'
      ],
      benefits: [
        'Real-time decision making',
        'Reduced latency and bandwidth',
        'Enhanced operational efficiency',
        'Scalable IoT deployments'
      ]
    },
    {
      id: 'digital-transformation',
      category: 'digital',
      title: 'Digital Transformation Consulting',
      description: 'Navigate your digital journey with expert guidance and proven methodologies for business transformation.',
      icon: Rocket,
      features: [
        'Strategy development',
        'Change management',
        'Technology roadmap',
        'Process optimization',
        'Training & adoption'
      ],
      benefits: [
        'Clear transformation roadmap',
        'Minimized disruption',
        'Increased employee adoption',
        'Measurable business outcomes'
      ]
    }
  ];

  const filteredSolutions = activeCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeCategory);

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Lightbulb, value: '200+', label: 'Solutions Delivered' },
    { icon: Rocket, value: '40%', label: 'Cost Reduction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Technology Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your business with cutting-edge technology solutions designed to drive innovation, 
            efficiency, and competitive advantage in the digital age.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-zion-slate/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20">
                  <stat.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-cyan/80">{stat.label}</div>
                </div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

      {/* Category Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Explore Our Solutions</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Discover how our technology solutions can address your specific business challenges 
              and drive measurable results.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-zion-slate-dark'
                    : 'bg-zion-slate/30 text-zion-cyan hover:bg-zion-slate/50 border border-zion-cyan/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-zion-cyan/30 transition-all duration-300">
                  <solution.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-cyan/80 mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-cyan/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Business Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-cyan/80 text-sm">
                        <TrendingUp className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Solution Process</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful implementation and maximum value delivery.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your business needs, challenges, and objectives to understand your requirements.'
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Our experts design a customized solution that addresses your specific needs and goals.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We implement the solution with minimal disruption to your business operations.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and optimization to ensure maximum performance and ROI.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-zion-cyan">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-zion-cyan/80 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-cyan/80 mb-8">
              Let's discuss how our technology solutions can help you achieve your business goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                Download Solutions Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
>>>>>>> cursor/expand-services-and-deploy-updates-fd31

      {/* Technology Solutions Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology solutions to drive innovation and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our solutions can address your specific business challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}