import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Cloud,
  Code,
  Database,
  Globe,
  Lock,
  MessageSquare,
  Monitor,
  Rocket,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { 
  SERVICE_CATEGORIES_2026, 
  SERVICE_STATISTICS_2026,
  FEATURED_SERVICES_2026,
  HIGH_ROI_SERVICES_2026,
  QUICK_SETUP_SERVICES_2026,
  HIGH_VALUE_IT_SERVICES_2026,
  HIGH_SCORE_AI_SERVICES_2026,
  BUDGET_FRIENDLY_SERVICES_2026,
  ENTERPRISE_SERVICES_2026,
  REVOLUTIONARY_SERVICES_2026,
  CUTTING_EDGE_SERVICES_2026,
  FINANCIAL_SERVICES_2026,
  HEALTHCARE_SERVICES_2026,
  ECOMMERCE_SERVICES_2026
} from '../data/comprehensiveServicesIndex2026';

export default function InnovativeServicesShowcase2026() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const categoryIcons: { [key: string]: JSX.Element } = {
    'AI & Business Intelligence': <Brain className="w-6 h-6" />,
    'AI & Content': <MessageSquare className="w-6 h-6" />,
    'AI & Customer Service': <Users className="w-6 h-6" />,
    'AI & Sales': <TrendingUp className="w-6 h-6" />,
    'AI & Marketing': <Globe className="w-6 h-6" />,
    'AI & Healthcare': <Shield className="w-6 h-6" />,
    'AI & FinTech': <Database className="w-6 h-6" />,
    'AI & Supply Chain': <Rocket className="w-6 h-6" />,
    'AI & HR': <Users className="w-6 h-6" />,
    'AI & Legal Tech': <Lock className="w-6 h-6" />,
    'Cloud & Infrastructure': <Cloud className="w-6 h-6" />,
    'DevOps & Automation': <Code className="w-6 h-6" />,
    'Cybersecurity': <Shield className="w-6 h-6" />,
    'Data & Analytics': <Database className="w-6 h-6" />,
    'Network & Infrastructure': <Monitor className="w-6 h-6" />,
    'Mobile Development': <Globe className="w-6 h-6" />,
    'Web Development': <Code className="w-6 h-6" />,
    'IT Consulting': <Users className="w-6 h-6" />,
    'Cloud Security': <Lock className="w-6 h-6" />,
    'Business Continuity': <Shield className="w-6 h-6" />
  };

  const categoryColors: { [key: string]: string } = {
    'AI & Business Intelligence': 'from-purple-500 to-pink-500',
    'AI & Content': 'from-green-500 to-emerald-500',
    'AI & Customer Service': 'from-blue-500 to-indigo-500',
    'AI & Sales': 'from-orange-500 to-red-500',
    'AI & Marketing': 'from-pink-500 to-purple-500',
    'AI & Healthcare': 'from-red-500 to-pink-500',
    'AI & FinTech': 'from-emerald-500 to-green-500',
    'AI & Supply Chain': 'from-blue-500 to-cyan-500',
    'AI & HR': 'from-indigo-500 to-blue-500',
    'AI & Legal Tech': 'from-yellow-500 to-orange-500',
    'Cloud & Infrastructure': 'from-cyan-500 to-blue-500',
    'DevOps & Automation': 'from-green-500 to-teal-500',
    'Cybersecurity': 'from-red-500 to-orange-500',
    'Data & Analytics': 'from-purple-500 to-indigo-500',
    'Network & Infrastructure': 'from-gray-500 to-slate-500',
    'Mobile Development': 'from-blue-500 to-purple-500',
    'Web Development': 'from-teal-500 to-cyan-500',
    'IT Consulting': 'from-indigo-500 to-purple-500',
    'Cloud Security': 'from-orange-500 to-red-500',
    'Business Continuity': 'from-green-500 to-emerald-500'
  };

  const generateCategories = () => {
    return [
      { id: 'all', name: 'All Services', count: SERVICE_STATISTICS_2026.totalServices, icon: <Rocket className="w-6 h-6" />, color: 'from-cyan-500 to-blue-500' },
      ...SERVICE_CATEGORIES_2026.map(category => ({
        id: category,
        name: category,
        count: getServicesByCategory(category).length,
        icon: categoryIcons[category] || <Code className="w-6 h-6" />,
        color: categoryColors[category] || 'from-gray-500 to-slate-500'
      }))
    ];
  };

  const getServicesByCategory = (category: string) => {
    // This would be implemented based on your data structure
    return [];
  };

  const categories = generateCategories();

  return (
    <>
      <SEO
        title="Innovative Services Showcase 2026 - Zion Tech Group"
        description="Discover cutting-edge micro SAAS, IT infrastructure, and AI services with proven ROI. Transform your business with Zion Tech Group's innovative solutions."
        keywords="AI services, micro SAAS, IT infrastructure, business solutions, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2026"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Innovative Services Showcase 2026
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge micro SAAS, IT infrastructure, and AI services. 
                Proven ROI, rapid implementation, and world-class support from Zion Tech Group.
              </p>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300">ziontechgroup.com</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{SERVICE_STATISTICS_2026.totalServices}</div>
                  <div className="text-gray-400">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{SERVICE_STATISTICS_2026.totalCategories}</div>
                  <div className="text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{SERVICE_STATISTICS_2026.highROIServices}</div>
                  <div className="text-gray-400">High ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{SERVICE_STATISTICS_2026.highScoreAIServices}</div>
                  <div className="text-gray-400">AI Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Explore Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered solutions to enterprise IT infrastructure, discover services designed to drive your business forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${category.color} rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-white">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{category.count} services</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and high-impact solutions that deliver exceptional value to businesses worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards would go here */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">AI Business Intelligence</h3>
                    <p className="text-gray-400 text-sm">Revolutionary</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Next-generation business intelligence platform with 95% accuracy and automated insights.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">$4,999</span>
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">AI Score: 98</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">AI Content Creation</h3>
                    <p className="text-gray-400 text-sm">Cutting-Edge</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Generate high-quality content across multiple formats with brand consistency.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-400">$1,999</span>
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">AI Score: 96</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">AI Customer Service</h3>
                    <p className="text-gray-400 text-sm">Advanced</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Handle 80% of customer inquiries automatically with 94% satisfaction.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-400">$3,499</span>
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">AI Score: 95</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-300">
                  Our services deliver measurable returns, with many clients seeing 300-800% ROI within months.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rapid Implementation</h3>
                <p className="text-gray-300">
                  Get up and running quickly with our streamlined setup processes and expert support.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">
                  SOC 2, ISO 27001, and HIPAA compliance ensure your data is always protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our innovative services can drive your business forward. 
                Contact us today for a personalized consultation.
              </p>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-cyan-400" />
                        <span>+1 302 464 0950</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <span>kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-cyan-400" />
                        <span>ziontechgroup.com</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-white mb-4">Address</h3>
                    <div className="text-gray-300">
                      <p>364 E Main St STE 1008</p>
                      <p>Middletown DE 19709</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
