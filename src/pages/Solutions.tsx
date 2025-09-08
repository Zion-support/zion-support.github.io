import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building, Users, Shield, Globe, Rocket, Brain, Cloud, Database,
  ArrowRight, ExternalLink, Download, Play, FileText, Search,
  CheckCircle, AlertCircle, Info, Clock, Eye, Copy,
  Terminal, Key, Lock, Server, Wifi, Activity, BookOpen,
  MessageCircle, Mail, Github, Bookmark, Share2, TrendingUp,
  Cpu, Network, BarChart3, Zap, Target, Heart, Star,
  Palette, TestTube, Bug, Lightbulb, Crown, Code, Award
} from 'lucide-react';

export default function Solutions() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industryCategories = [
    { id: 'all', name: 'All Industries', icon: Building, count: 8 },
    { id: 'finance', name: 'Financial Services', icon: Shield, count: 3 },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: 2 },
    { id: 'retail', name: 'Retail & E-commerce', icon: Users, count: 2 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Cpu, count: 1 }
  ];

  const solutions = [
    {
      id: 1,
      name: 'AI-Powered Risk Management',
      industry: 'finance',
      description: 'Advanced risk assessment and management solutions for financial institutions',
      features: [
        'Real-time risk monitoring',
        'Predictive analytics',
        'Regulatory compliance',
        'Fraud detection',
        'Portfolio optimization'
      ],
      benefits: [
        'Reduce risk exposure by 40%',
        'Improve compliance efficiency',
        'Faster decision making',
        'Enhanced fraud prevention'
      ],
      icon: Shield,
      featured: true,
      caseStudy: 'Global Bank Risk Reduction'
    },
    {
      id: 2,
      name: 'Intelligent Customer Analytics',
      industry: 'retail',
      description: 'Comprehensive customer insights and behavior analysis for retail businesses',
      features: [
        'Customer segmentation',
        'Purchase prediction',
        'Personalized recommendations',
        'Loyalty optimization',
        'Market basket analysis'
      ],
      benefits: [
        'Increase customer lifetime value by 35%',
        'Improve conversion rates by 25%',
        'Reduce customer churn by 30%',
        'Optimize marketing spend'
      ],
      icon: Users,
      featured: true,
      caseStudy: 'E-commerce Growth Strategy'
    },
    {
      id: 3,
      name: 'Predictive Maintenance Platform',
      industry: 'manufacturing',
      description: 'AI-driven predictive maintenance to optimize manufacturing operations',
      features: [
        'Equipment health monitoring',
        'Failure prediction',
        'Maintenance scheduling',
        'Performance optimization',
        'Cost analysis'
      ],
      benefits: [
        'Reduce unplanned downtime by 60%',
        'Lower maintenance costs by 30%',
        'Extend equipment lifespan',
        'Improve production efficiency'
      ],
      icon: Cpu,
      featured: true,
      caseStudy: 'Manufacturing Efficiency Boost'
    },
    {
      id: 4,
      name: 'Healthcare Data Analytics',
      industry: 'healthcare',
      description: 'Secure healthcare analytics platform for improved patient outcomes',
      features: [
        'Patient data analysis',
        'Treatment optimization',
        'Clinical decision support',
        'Population health insights',
        'HIPAA compliance'
      ],
      benefits: [
        'Improve patient outcomes by 25%',
        'Reduce healthcare costs by 20%',
        'Enhance clinical efficiency',
        'Better resource allocation'
      ],
      icon: Heart,
      featured: false,
      caseStudy: 'Hospital Performance Improvement'
    },
    {
      id: 5,
      name: 'Digital Banking Transformation',
      industry: 'finance',
      description: 'Modern digital banking solutions for enhanced customer experience',
      features: [
        'Mobile banking apps',
        'Digital onboarding',
        'AI-powered support',
        'Secure transactions',
        'Multi-channel integration'
      ],
      benefits: [
        'Increase customer satisfaction by 40%',
        'Reduce operational costs by 25%',
        'Faster service delivery',
        'Enhanced security'
      ],
      icon: Building,
      featured: false,
      caseStudy: 'Digital Banking Success'
    },
    {
      id: 6,
      name: 'Supply Chain Optimization',
      industry: 'retail',
      description: 'Intelligent supply chain management for retail and e-commerce',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier management',
        'Real-time tracking'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve delivery times by 40%',
        'Better supplier relationships',
        'Enhanced customer satisfaction'
      ],
      icon: Globe,
      featured: false,
      caseStudy: 'Retail Supply Chain Optimization'
    },
    {
      id: 7,
      name: 'Regulatory Compliance Platform',
      industry: 'finance',
      description: 'Automated compliance monitoring and reporting for financial institutions',
      features: [
        'Regulatory monitoring',
        'Automated reporting',
        'Compliance dashboards',
        'Audit trails',
        'Risk assessment'
      ],
      benefits: [
        'Ensure 100% compliance',
        'Reduce audit time by 50%',
        'Lower compliance costs',
        'Enhanced risk visibility'
      ],
      icon: Shield,
      featured: false,
      caseStudy: 'Compliance Automation Success'
    },
    {
      id: 8,
      name: 'Patient Care Optimization',
      industry: 'healthcare',
      description: 'AI-powered patient care and treatment optimization platform',
      features: [
        'Patient monitoring',
        'Treatment planning',
        'Resource optimization',
        'Quality metrics',
        'Outcome tracking'
      ],
      benefits: [
        'Improve care quality by 30%',
        'Reduce wait times by 40%',
        'Better resource utilization',
        'Enhanced patient experience'
      ],
      icon: Heart,
      featured: false,
      caseStudy: 'Patient Care Enhancement'
    }
  ];

  const useCases = [
    {
      industry: 'finance',
      title: 'Fraud Detection & Prevention',
      description: 'AI-powered fraud detection systems that identify and prevent fraudulent activities in real-time',
      icon: Shield,
      examples: [
        'Credit card fraud detection',
        'Insurance claim fraud',
        'Banking transaction monitoring',
        'Identity theft prevention'
      ]
    },
    {
      industry: 'healthcare',
      title: 'Diagnostic Support',
      description: 'AI-assisted diagnostic tools that help healthcare professionals make more accurate diagnoses',
      icon: Heart,
      examples: [
        'Medical imaging analysis',
        'Symptom assessment',
        'Treatment recommendations',
        'Patient risk assessment'
      ]
    },
    {
      industry: 'retail',
      title: 'Personalized Marketing',
      description: 'AI-driven marketing solutions that deliver personalized experiences to customers',
      icon: Users,
      examples: [
        'Product recommendations',
        'Targeted advertising',
        'Email personalization',
        'Dynamic pricing'
      ]
    },
    {
      industry: 'manufacturing',
      title: 'Quality Control',
      description: 'Computer vision and AI systems for automated quality control in manufacturing',
      icon: Cpu,
      examples: [
        'Defect detection',
        'Product inspection',
        'Quality metrics tracking',
        'Process optimization'
      ]
    }
  ];

  const successStories = [
    {
      company: 'Global Financial Corp',
      industry: 'finance',
      challenge: 'Complex risk management across multiple markets and products',
      solution: 'AI-powered risk assessment platform with real-time monitoring',
      results: [
        '40% reduction in risk exposure',
        '60% faster risk assessment',
        '100% regulatory compliance',
        '$50M annual cost savings'
      ],
      icon: Building
    },
    {
      company: 'HealthTech Solutions',
      industry: 'healthcare',
      challenge: 'Inefficient patient care processes and resource allocation',
      solution: 'AI-driven patient care optimization platform',
      results: [
        '30% improvement in patient outcomes',
        '40% reduction in wait times',
        '25% increase in staff efficiency',
        'Enhanced patient satisfaction'
      ],
      icon: Heart
    },
    {
      company: 'RetailMax',
      industry: 'retail',
      challenge: 'Poor inventory management and customer experience',
      solution: 'Intelligent supply chain and customer analytics platform',
      results: [
        '35% increase in customer lifetime value',
        '30% reduction in inventory costs',
        '25% improvement in conversion rates',
        'Enhanced customer loyalty'
      ],
      icon: Users
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          solution.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || solution.industry === selectedIndustry;
    
    return matchesSearch && matchesIndustry;
  });

  const featuredSolutions = filteredSolutions.filter(solution => solution.featured);
  const regularSolutions = filteredSolutions.filter(solution => !solution.featured);

  const getIndustryColor = (industry: string) => {
    const colors = {
      finance: 'bg-blue-100 text-blue-800',
      healthcare: 'bg-green-100 text-green-800',
      retail: 'bg-purple-100 text-purple-800',
      manufacturing: 'bg-orange-100 text-orange-800'
    };
    return colors[industry as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Tailored technology solutions designed to address the unique challenges and opportunities of your industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#solutions"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industryCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-center justify-center text-gray-400">
                {filteredSolutions.length} solution{filteredSolutions.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      {featuredSolutions.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Solutions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredSolutions.map((solution) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getIndustryColor(solution.industry)}`}>
                          {industryCategories.find(c => c.id === solution.industry)?.name}
                        </span>
                        <div className="text-sm text-gray-400 mt-1">{solution.caseStudy}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">{solution.name}</h3>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Key Features</h4>
                      <div className="space-y-2">
                        {solution.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Solutions */}
      <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularSolutions.map((solution) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIndustryColor(solution.industry)}`}>
                        {industryCategories.find(c => c.id === solution.industry)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{solution.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-medium text-sm">{solution.caseStudy}</span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases by Industry</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Discover how our solutions address specific challenges and create value across different industries
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Examples</h4>
                    <div className="space-y-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Real results from real companies across different industries
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <story.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{story.company}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getIndustryColor(story.industry)}`}>
                      {industryCategories.find(c => c.id === story.industry)?.name}
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{story.solution}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Results</h4>
                    <div className="space-y-2">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Industry?</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Let our industry experts help you identify the right solutions and create a customized implementation plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Industry Consultation
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Request Industry Demo
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Award className="w-5 h-5 mr-2" />
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
