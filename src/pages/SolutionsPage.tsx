import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Globe, 
  Zap,
  Cpu,
  Server,
  Smartphone,
  BarChart3,
  Palette,
  Smartphone as Mobile,
  BarChart3 as Analytics,
  Palette as Design,
  Atom,
  Globe as GlobeIcon,
  ShoppingBag
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building, color: 'from-zion-cyan to-zion-blue' },
    { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-zion-green to-zion-blue' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'retail', name: 'Retail', icon: Smartphone, color: 'from-zion-orange to-zion-red' },
    { id: 'education', name: 'Education', icon: BookOpen, color: 'from-zion-blue to-zion-cyan' },
    { id: 'government', name: 'Government', icon: Building, color: 'from-zion-purple to-zion-blue' },
    { id: 'energy', name: 'Energy', icon: Zap, color: 'from-zion-yellow to-zion-orange' }
  ];

  const technologies = [
    { id: 'all', name: 'All Technologies', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'cloud', name: 'Cloud', icon: Cloud, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot', name: 'IoT', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'quantum', name: 'Quantum', icon: Atom, color: 'from-zion-blue to-zion-cyan' },
    { id: 'space', name: 'Space Tech', icon: Rocket, color: 'from-zion-purple to-zion-pink' }
  ];

  const solutions = [
    {
      id: 'ai-business-intelligence',
      title: 'AI-Powered Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced AI analytics platform.',
      industry: 'finance',
      technology: 'ai',
      features: ['Real-time analytics', 'Predictive modeling', 'Natural language queries', 'Automated reporting'],
      benefits: ['30% faster decision making', '25% cost reduction', 'Improved accuracy'],
      image: '/solutions/ai-bi.jpg',
      price: 'Starting at $5,000/month'
    },
    {
      id: 'cyber-threat-intelligence',
      title: 'Advanced Threat Intelligence',
      description: 'Stay ahead of cyber threats with our AI-driven security monitoring and response system.',
      industry: 'government',
      technology: 'cybersecurity',
      features: ['Real-time threat detection', 'AI-powered analysis', 'Automated response', 'Compliance reporting'],
      benefits: ['99.9% threat detection rate', '60% faster response time', 'SOC2 compliance'],
      image: '/solutions/cyber-threat.jpg',
      price: 'Starting at $8,000/month'
    },
    {
      id: 'blockchain-supply-chain',
      title: 'Blockchain Supply Chain',
      description: 'End-to-end transparency and traceability for complex supply chain operations.',
      industry: 'manufacturing',
      technology: 'blockchain',
      features: ['Smart contracts', 'Real-time tracking', 'Audit trails', 'Supplier verification'],
      benefits: ['100% transparency', '40% cost reduction', 'Regulatory compliance'],
      image: '/solutions/blockchain-supply.jpg',
      price: 'Starting at $6,000/month'
    },
    {
      id: 'iot-healthcare-monitoring',
      title: 'IoT Healthcare Monitoring',
      description: 'Remote patient monitoring and predictive healthcare analytics platform.',
      industry: 'healthcare',
      technology: 'iot',
      features: ['Real-time monitoring', 'Predictive analytics', 'HIPAA compliance', 'Mobile integration'],
      benefits: ['50% reduction in readmissions', 'Improved patient outcomes', 'Cost-effective care'],
      image: '/solutions/iot-healthcare.jpg',
      price: 'Starting at $4,000/month'
    },
    {
      id: 'quantum-financial-modeling',
      title: 'Quantum Financial Modeling',
      description: 'Revolutionary quantum computing solutions for complex financial calculations.',
      industry: 'finance',
      technology: 'quantum',
      features: ['Quantum algorithms', 'Risk assessment', 'Portfolio optimization', 'Real-time pricing'],
      benefits: ['1000x faster calculations', 'Improved accuracy', 'Competitive advantage'],
      image: '/solutions/quantum-finance.jpg',
      price: 'Starting at $15,000/month'
    },
    {
      id: 'space-data-analytics',
      title: 'Space Data Analytics',
      description: 'Satellite data processing and analysis for earth observation and space research.',
      industry: 'government',
      technology: 'space',
      features: ['Satellite data processing', 'AI analysis', 'Real-time monitoring', 'Predictive modeling'],
      benefits: ['Global coverage', 'Real-time insights', 'Research advancement'],
      image: '/solutions/space-data.jpg',
      price: 'Starting at $12,000/month'
    }
  ];

  const caseStudies = [
    {
      id: 'healthcare-ai',
      title: 'AI-Powered Diagnosis Platform',
      client: 'Major Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Reduce diagnosis time and improve accuracy for rare diseases',
      solution: 'Implemented our AI diagnostic platform with deep learning algorithms',
      results: ['40% faster diagnosis', '95% accuracy rate', '$2M annual savings'],
      image: '/case-studies/healthcare-ai.jpg'
    },
    {
      id: 'finance-blockchain',
      title: 'Blockchain Payment System',
      client: 'International Bank',
      industry: 'Finance',
      challenge: 'Streamline cross-border payments and reduce fraud',
      solution: 'Deployed our blockchain-based payment infrastructure',
      results: ['80% faster transactions', 'Zero fraud incidents', '30% cost reduction'],
      image: '/case-studies/finance-blockchain.jpg'
    },
    {
      id: 'manufacturing-iot',
      title: 'Smart Factory Implementation',
      client: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Optimize production efficiency and reduce downtime',
      solution: 'Integrated IoT sensors and AI analytics across production lines',
      results: ['25% efficiency improvement', '60% reduction in downtime', '$5M annual savings'],
      image: '/case-studies/manufacturing-iot.jpg'
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || solution.industry === selectedIndustry;
    const matchesTechnology = selectedTechnology === 'all' || solution.technology === selectedTechnology;
    
    return matchesSearch && matchesIndustry && matchesTechnology;
  });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Technology{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Discover how our cutting-edge technology solutions are transforming industries 
              and driving business success across the globe.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for solutions, industries, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          {/* Industry Filters */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Filter by Industry</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedIndustry === industry.id
                      ? `bg-gradient-to-r ${industry.color} text-white shadow-lg`
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <industry.icon className="w-4 h-4" />
                  {industry.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Technology Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Filter by Technology</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTechnology(tech.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedTechnology === tech.id
                      ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  <tech.icon className="w-4 h-4" />
                  {tech.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredSolutions.length} solutions found matching your criteria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className="bg-slate-700 rounded-xl p-8 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-cyan-400 font-medium capitalize">{solution.industry}</span>
                      <span className="text-sm text-purple-400 font-medium capitalize ml-2">{solution.technology}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{solution.price}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Business Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <TrendingUp className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-600">
                  <Link
                    to={`/solutions/${solution.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No solutions found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search criteria or browse all solutions
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('all');
                  setSelectedTechnology('all');
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View All Solutions
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-700">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our solutions are driving transformation and delivering results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="bg-slate-800 rounded-xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                    <p className="text-cyan-400 text-sm">Case Study</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-cyan-400 font-medium">{study.industry}</span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{study.client}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center w-full justify-center px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 group-hover:border-cyan-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your specific challenges and explore how our technology solutions 
              can drive your success and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;