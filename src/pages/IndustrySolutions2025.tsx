import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building,
  Target,
  Brain,
  Atom,
  Eye,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Heart,
  Briefcase,
  ShoppingCart,
  Cpu,
  Database,
  Network,
  Cloud,
  Zap,
  TrendingUp,
  BarChart3,
  Lock,
  Globe,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  DollarSign,
  Clock,
  Award,
  TrendingDown,
  Sparkles,
  Lightbulb,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Cpu as CpuIcon,
  Atom as AtomIcon,
  BarChart3 as BarChartIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  Users as UsersIcon,
  Lock as LockIcon,
  TrendingUp as TrendingUpIcon,
  Building2,
  Stethoscope,
  Factory,
  Store,
  Laptop,
  Landmark
} from 'lucide-react';
import { INDUSTRY_SOLUTIONS_2025 } from '../data/industrySolutions2025';

export function IndustrySolutions2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe, color: 'from-blue-500 to-cyan-600' },
    { id: 'financial-services', name: 'Financial Services', icon: Building2, color: 'from-green-500 to-emerald-600' },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, color: 'from-red-500 to-pink-600' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, color: 'from-orange-500 to-amber-600' },
    { id: 'retail-ecommerce', name: 'Retail & E-commerce', icon: Store, color: 'from-purple-500 to-indigo-600' },
    { id: 'technology-startups', name: 'Technology & Startups', icon: Laptop, color: 'from-cyan-500 to-blue-600' },
    { id: 'government-public-sector', name: 'Government & Public Sector', icon: Landmark, color: 'from-gray-500 to-slate-600' }
  ];

  const filteredSolutions = INDUSTRY_SOLUTIONS_2025.filter(solution => {
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'all' || solution.id === selectedIndustry;
    
    return matchesSearch && matchesIndustry;
  });

  const getIndustryIcon = (industryId: string) => {
    const industryData = industries.find(ind => ind.id === industryId);
    return industryData ? industryData.icon : Globe;
  };

  const getIndustryColor = (industryId: string) => {
    const industryData = industries.find(ind => ind.id === industryId);
    return industryData ? industryData.color : 'from-gray-500 to-slate-600';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                <Building className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Industry Solutions 2025
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your industry with our cutting-edge micro SAAS, IT, and AI solutions. 
              Each solution is tailored to address industry-specific challenges and deliver measurable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Industry Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request Industry Assessment</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search industry solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Industry Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industry Solutions Grid */}
        <div className="space-y-16 mb-16">
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              {/* Solution Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${getIndustryColor(solution.id)} rounded-2xl flex items-center justify-center`}>
                                          {React.createElement(getIndustryIcon(solution.id), { className: "w-10 h-10 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{solution.title}</h2>
                    <p className="text-lg text-gray-400 max-w-3xl">{solution.description}</p>
                  </div>
                </div>
              </div>

              {/* Challenges and Solutions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Challenges */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <Target className="w-6 h-6 text-red-400" />
                    <span>Industry Challenges</span>
                  </h3>
                  <div className="space-y-3">
                    {solution.challenges.map((challenge, challengeIndex) => (
                      <div key={challengeIndex} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                    <span>Our Solutions</span>
                  </h3>
                  <div className="space-y-4">
                    {solution.solutions.map((sol, solIndex) => (
                      <div key={solIndex} className="bg-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">{sol.service}</h4>
                        <p className="text-gray-400 text-sm mb-3">{sol.description}</p>
                        <div className="space-y-2">
                          {sol.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span className="text-gray-400">Implementation: {sol.implementation}</span>
                          <span className="text-green-400 font-medium">{sol.roi}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Use Cases and Success Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Use Cases */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <Lightbulb className="w-6 h-6 text-yellow-400" />
                    <span>Use Cases</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {solution.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Metrics */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    <span>Success Metrics</span>
                  </h3>
                  <div className="space-y-3">
                    {solution.successMetrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Studies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <Award className="w-6 h-6 text-purple-400" />
                  <span>Success Stories</span>
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {solution.caseStudies.map((caseStudy, caseIndex) => (
                    <div key={caseIndex} className="bg-gray-700 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-2">{caseStudy.company}</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-gray-400">Challenge: </span>
                          <span className="text-gray-300">{caseStudy.challenge}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Solution: </span>
                          <span className="text-gray-300">{caseStudy.solution}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Results:</span>
                          <div className="mt-2 space-y-1">
                            {caseStudy.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-center space-x-2 text-gray-300">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                <span>{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Get Industry Solution</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Comparison Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Industry Transformation Overview
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how different industries are leveraging our innovative solutions to achieve digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_SOLUTIONS_2025.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${getIndustryColor(solution.id)} rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(getIndustryIcon(solution.id), { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{solution.industry}</h3>
                <p className="text-gray-400 text-sm mb-4">{solution.description.substring(0, 120)}...</p>
                <div className="space-y-2 mb-4">
                  {solution.successMetrics.slice(0, 2).map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`#${solution.id}`}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 rounded-2xl p-12 border border-gray-700"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Contact our industry experts to discuss how our solutions can address your specific challenges and drive transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <p className="text-gray-400">https://ziontechgroup.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-400 text-sm">364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Contact Industry Experts</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
                >
                  <span>Request Industry Assessment</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Industry Transformation Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join industry leaders who have already transformed their operations with our innovative solutions. 
              Get started with a free industry assessment and discover your transformation potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/innovative-services-2025"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Explore All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default IndustrySolutions2025;