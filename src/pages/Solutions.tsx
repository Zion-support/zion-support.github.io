import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Globe,
  Users,
  Database,
  Lock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const Solutions: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'finance', name: 'Financial Services', icon: Lock },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building },
    { id: 'retail', name: 'Retail & E-commerce', icon: Users },
    { id: 'technology', name: 'Technology', icon: Brain }
  ];

  const solutionCategories = [
    { id: 'ai', title: 'Artificial Intelligence' },
    { id: 'cloud', title: 'Cloud Solutions' },
    { id: 'security', title: 'Cybersecurity' },
    { id: 'data', title: 'Data Analytics' },
    { id: 'iot', title: 'IoT & Automation' }
  ];

  const industrySolutions = [
    {
      id: 1,
      title: 'Healthcare',
      icon: Shield,
      description: 'AI-powered diagnostic tools, patient management systems, and healthcare analytics platforms.',
      solutions: ['Predictive Analytics', 'Medical Imaging AI', 'Patient Care Management', 'Drug Discovery'],
      caseStudies: 15,
      clients: 25
    },
    {
      id: 2,
      title: 'Financial Services',
      icon: Lock,
      description: 'Secure banking solutions, fraud detection systems, and regulatory compliance platforms.',
      solutions: ['Fraud Detection', 'Compliance Automation', 'Risk Management', 'Digital Banking'],
      caseStudies: 12,
      clients: 18
    },
    {
      id: 3,
      title: 'Manufacturing',
      icon: Building,
      description: 'Smart factory solutions, predictive maintenance, and quality control automation.',
      solutions: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Energy Management'],
      caseStudies: 20,
      clients: 30
    },
    {
      id: 4,
      title: 'Retail & E-commerce',
      icon: Users,
      description: 'Customer experience platforms, inventory management, and personalized marketing solutions.',
      solutions: ['Personalization Engine', 'Inventory Management', 'Customer Analytics', 'Omnichannel Solutions'],
      caseStudies: 18,
      clients: 22
    },
    {
      id: 5,
      title: 'Technology',
      icon: Brain,
      description: 'AI development platforms, cloud infrastructure, and software development tools.',
      solutions: ['AI Development', 'Cloud Infrastructure', 'DevOps Tools', 'API Management'],
      caseStudies: 25,
      clients: 35
    }
  ];

  const featuredSolutions = [
    {
      id: 1,
      title: 'AI Business Intelligence Platform',
      category: 'Artificial Intelligence',
      industry: 'All Industries',
      description: 'Comprehensive AI-powered business intelligence solution that transforms raw data into actionable insights.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Real-time Dashboards', 'Custom Reports'],
      benefits: ['Data-driven Decisions', 'Improved Efficiency', 'Competitive Advantage', 'Cost Reduction'],
      pricing: '$2,500',
      demo: true,
      trial: true
    },
    {
      id: 2,
      title: 'Cloud Security Suite',
      category: 'Cybersecurity',
      industry: 'All Industries',
      description: 'Enterprise-grade security solution for cloud environments with zero-trust architecture.',
      features: ['Threat Detection', 'Access Control', 'Compliance Monitoring', 'Incident Response'],
      benefits: ['Enhanced Security', 'Regulatory Compliance', 'Risk Reduction', '24/7 Protection'],
      pricing: '$3,200',
      demo: true,
      trial: false
    },
    {
      id: 3,
      title: 'IoT Manufacturing Platform',
      category: 'IoT & Automation',
      industry: 'Manufacturing',
      description: 'End-to-end IoT solution for smart manufacturing with predictive maintenance and quality control.',
      features: ['Sensor Integration', 'Predictive Maintenance', 'Quality Control', 'Energy Monitoring'],
      benefits: ['Reduced Downtime', 'Improved Quality', 'Cost Savings', 'Increased Productivity'],
      pricing: '$4,500',
      demo: true,
      trial: true
    },
    {
      id: 4,
      title: 'Data Analytics Engine',
      category: 'Data Analytics',
      industry: 'All Industries',
      description: 'Advanced analytics platform for big data processing and business intelligence.',
      features: ['Real-time Processing', 'Machine Learning', 'Data Visualization', 'Custom Dashboards'],
      benefits: ['Faster Insights', 'Better Decisions', 'Operational Efficiency', 'Revenue Growth'],
      pricing: '$2,800',
      demo: true,
      trial: true
    }
  ];

  const filteredSolutions = featuredSolutions.filter(solution => 
    (selectedIndustry === 'all' || solution.industry === selectedIndustry) &&
    (selectedCategory === 'all' || solution.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for healthcare, finance, manufacturing, retail, and technology industries. AI, cloud, cybersecurity, and data analytics solutions."
        keywords="technology solutions, AI solutions, cloud solutions, cybersecurity, data analytics, industry solutions, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tailored technology solutions that address the unique challenges of your industry 
              and drive measurable results through AI, cloud, and cybersecurity innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-cyan-500 text-slate-900'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600 hover:border-cyan-500/50'
                }`}
              >
                <industry.icon className="w-5 h-5" />
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed specifically for the unique challenges 
              and opportunities of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Solutions</h4>
                  <ul className="space-y-2">
                    {industry.solutions.slice(0, 4).map((solution, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-600/50">
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">{industry.caseStudies}</div>
                    <div className="text-xs text-gray-400">Case Studies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{industry.clients}</div>
                    <div className="text-xs text-gray-400">Clients</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship technology solutions that deliver exceptional value and transformative results 
              for organizations worldwide.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
            >
              <option value="all">All Categories</option>
              {solutionCategories.map((category) => (
                <option key={category.id} value={category.title}>{category.title}</option>
              ))}
            </select>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500/50"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-2">
                      {solution.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-400">{solution.pricing}</div>
                    <div className="text-xs text-gray-400">Starting Price</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-600/50">
                  <div className="flex space-x-2">
                    {solution.demo && (
                      <button className="px-4 py-2 bg-cyan-500 text-white text-sm font-medium rounded-lg hover:bg-cyan-600 transition-colors duration-300">
                        <Play className="w-4 h-4 mr-1 inline" />
                        Demo
                      </button>
                    )}
                    {solution.trial && (
                      <button className="px-4 py-2 border border-cyan-500 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-colors duration-300">
                        Start Trial
                      </button>
                    )}
                  </div>
                  <Link
                    to={`/solutions/${solution.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our technology solutions drive your digital transformation and unlock new possibilities 
              for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
