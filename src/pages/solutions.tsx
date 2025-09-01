import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Building,
  Globe,
  Shield,
  Cloud,
  Brain,
  Zap,
  Rocket,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  BarChart3,
  Cpu,
  Smartphone,
  Database,
  Network,
  Lock,
  Server,
  Code,
  Wifi,
  Atom,
  Dna,
  Handshake,
  GraduationCap,
  Briefcase,
  Heart,
  Ear
} from 'lucide-react';

export default function Solutions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Financial Services', icon: BarChart3 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Cpu },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'government', name: 'Government', icon: Shield },
    { id: 'energy', name: 'Energy & Utilities', icon: Zap }
  ];

  const technologies = [
    { id: 'all', name: 'All Technologies', icon: Rocket },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud Computing', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Lock },
    { id: 'iot', name: 'Internet of Things', icon: Wifi },
    { id: 'blockchain', name: 'Blockchain', icon: Database },
    { id: 'edge', name: 'Edge Computing', icon: Server },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom }
  ];

  const industrySolutions = [
    {
      id: 'healthcare-ai',
      industry: 'healthcare',
      title: 'AI-Powered Healthcare Solutions',
      description: 'Revolutionary AI diagnostics, patient care optimization, and medical research acceleration',
      technologies: ['ai-ml', 'cloud', 'cybersecurity'],
      benefits: [
        '99.9% diagnostic accuracy',
        '30% reduction in diagnosis time',
        'Personalized treatment plans',
        'HIPAA compliant security'
      ],
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      caseStudy: 'Leading hospital achieved 40% faster diagnosis',
      href: '/solutions/healthcare-ai'
    },
    {
      id: 'finance-blockchain',
      industry: 'finance',
      title: 'Blockchain Financial Infrastructure',
      description: 'Secure, transparent, and efficient financial transactions with blockchain technology',
      technologies: ['blockchain', 'cybersecurity', 'cloud'],
      benefits: [
        '100% transaction transparency',
        '60% reduction in processing time',
        'Enhanced fraud detection',
        'Regulatory compliance'
      ],
      icon: BarChart3,
      color: 'from-green-500 to-emerald-600',
      caseStudy: 'Bank reduced fraud by 85%',
      href: '/solutions/finance-blockchain'
    },
    {
      id: 'manufacturing-iot',
      industry: 'manufacturing',
      title: 'Smart Manufacturing with IoT',
      description: 'Connected factories with real-time monitoring and predictive maintenance',
      technologies: ['iot', 'ai-ml', 'edge'],
      benefits: [
        '25% increase in productivity',
        'Predictive maintenance alerts',
        'Real-time quality control',
        'Energy optimization'
      ],
      icon: Cpu,
      color: 'from-blue-500 to-indigo-600',
      caseStudy: 'Factory achieved 30% efficiency gain',
      href: '/solutions/manufacturing-iot'
    },
    {
      id: 'retail-ai',
      industry: 'retail',
      title: 'AI-Driven Retail Analytics',
      description: 'Customer behavior analysis, inventory optimization, and personalized marketing',
      technologies: ['ai-ml', 'cloud', 'big-data'],
      benefits: [
        '20% increase in sales',
        'Optimized inventory management',
        'Personalized customer experience',
        'Real-time analytics'
      ],
      icon: ShoppingCart,
      color: 'from-purple-500 to-violet-600',
      caseStudy: 'Retailer boosted conversion by 35%',
      href: '/solutions/retail-ai'
    },
    {
      id: 'education-vr',
      industry: 'education',
      title: 'Virtual Reality Learning Platforms',
      description: 'Immersive educational experiences with VR and AR technology',
      technologies: ['vr-ar', 'ai-ml', 'cloud'],
      benefits: [
        'Enhanced student engagement',
        'Interactive learning experiences',
        'Remote learning capabilities',
        'Progress tracking'
      ],
      icon: GraduationCap,
      color: 'from-orange-500 to-red-600',
      caseStudy: 'University improved retention by 45%',
      href: '/solutions/education-vr'
    },
    {
      id: 'government-cyber',
      industry: 'government',
      title: 'Government Cybersecurity Suite',
      description: 'Comprehensive security solutions for government agencies and critical infrastructure',
      technologies: ['cybersecurity', 'ai-ml', 'blockchain'],
      benefits: [
        'Zero-day threat protection',
        'Compliance with government standards',
        'Real-time threat intelligence',
        'Secure data sharing'
      ],
      icon: Shield,
      color: 'from-indigo-500 to-purple-600',
      caseStudy: 'Agency prevented 99.9% of attacks',
      href: '/solutions/government-cyber'
    }
  ];

  const technologyFoundation = [
    {
      id: 'ai-platform',
      name: 'Zion AI Platform',
      description: 'Enterprise-grade AI infrastructure with pre-trained models and custom training capabilities',
      features: [
        'Pre-trained models for common use cases',
        'Custom model training and deployment',
        'Real-time inference optimization',
        'Model versioning and management'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Zion Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud computing platform',
      features: [
        'Multi-cloud deployment options',
        'Auto-scaling and load balancing',
        'Built-in security and compliance',
        'Cost optimization tools'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'security-framework',
      name: 'Zion Security Framework',
      description: 'Comprehensive cybersecurity solution with threat detection and response',
      features: [
        'Advanced threat detection',
        'Automated incident response',
        'Compliance monitoring',
        'Security analytics dashboard'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'data-platform',
      name: 'Zion Data Platform',
      description: 'Unified data management and analytics platform',
      features: [
        'Data integration and ETL',
        'Real-time analytics',
        'Data governance and quality',
        'Advanced visualization tools'
      ],
      icon: Database,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const successMetrics = [
    {
      metric: 'Client Satisfaction',
      value: '98%',
      description: 'Average client satisfaction score',
      icon: Star,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      metric: 'Project Success Rate',
      value: '96%',
      description: 'Projects delivered on time and budget',
      icon: CheckCircle,
      color: 'from-green-400 to-emerald-500'
    },
    {
      metric: 'Cost Reduction',
      value: '40%',
      description: 'Average cost savings for clients',
      icon: TrendingUp,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      metric: 'Efficiency Gain',
      value: '35%',
      description: 'Average productivity improvement',
      icon: Zap,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const solutionProcess = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your current state, identify challenges, and define success criteria',
      icon: Eye,
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'Our experts design a customized solution architecture tailored to your needs',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'We deploy the solution with minimal disruption to your operations',
      icon: Rocket,
      color: 'from-green-500 to-green-600'
    },
    {
      step: 4,
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to ensure peak performance',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const filteredSolutions = industrySolutions.filter(solution => {
    const matchesIndustry = selectedIndustry === 'all' || solution.industry === selectedIndustry;
    const matchesTechnology = selectedTechnology === 'all' || 
      solution.technologies.some(tech => tech === selectedTechnology);
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesTechnology && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO
        title="Industry Solutions - Zion Tech Group"
        description="Discover customized technology solutions for your industry. AI, cloud, cybersecurity, and more tailored to healthcare, finance, manufacturing, and other sectors."
        keywords="industry solutions, healthcare AI, financial technology, smart manufacturing, retail analytics, government cybersecurity, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Customized technology solutions designed to solve industry-specific challenges and drive transformation
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    {industries.map((industry) => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedTechnology}
                    onChange={(e) => setSelectedTechnology(e.target.value)}
                    className="px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200"
                  >
                    {technologies.map((technology) => (
                      <option key={technology.id} value={technology.id}>
                        {technology.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed for your specific industry challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${solution.color} text-white rounded-xl`}>
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                        {industries.find(ind => ind.id === solution.industry)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                        >
                          {technologies.find(t => t.id === tech)?.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Case Study:</strong> {solution.caseStudy}
                    </p>
                  </div>
                  
                  <Link
                    to={solution.href}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredSolutions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No solutions found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Technology Foundation */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Foundation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our core technology platforms that power all industry solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologyFoundation.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${platform.color} text-white rounded-2xl mb-6`}>
                  <platform.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {platform.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {platform.description}
                </p>
                
                <ul className="space-y-3">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our solutions deliver measurable impact across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${metric.color} text-white rounded-2xl mb-4`}>
                  <metric.icon className="h-10 w-10" />
                </div>
                
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.metric}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Process */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Solution Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology for delivering successful technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-2xl mb-4`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  {index < solutionProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform translate-x-2"></div>
                  )}
                </div>
                
                <div className="text-2xl font-bold text-gray-400 mb-2">
                  {step.step}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our solutions can address your specific challenges and drive innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              
              <Link
                to="/solutions/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Request Demo
                <Eye className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
