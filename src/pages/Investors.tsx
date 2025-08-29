import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Users, 
  Globe, 
  Rocket, 
  Brain, 
  Shield, 
  Cloud, 
  Zap,
  CheckCircle,
  Star,
  Award,
  Calendar,
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Target,
  TrendingUp as Growth,
  PieChart,
  LineChart
} from 'lucide-react';

const Investors: React.FC = () => {
  const financialHighlights = [
    {
      metric: 'Revenue Growth',
      value: '247%',
      change: '+47%',
      period: 'YoY 2024',
      trend: 'up',
      color: 'text-green-400'
    },
    {
      metric: 'Market Cap',
      value: '$2.8B',
      change: '+156%',
      period: 'YoY 2024',
      trend: 'up',
      color: 'text-blue-400'
    },
    {
      metric: 'Customer Base',
      value: '15,000+',
      change: '+89%',
      period: 'YoY 2024',
      trend: 'up',
      color: 'text-purple-400'
    },
    {
      metric: 'Global Presence',
      value: '45+',
      change: '+12',
      period: 'Countries',
      trend: 'up',
      color: 'text-cyan-400'
    }
  ];

  const investmentOpportunities = [
    {
      title: 'Series C Funding Round',
      amount: '$150M',
      use: 'Product Development & Global Expansion',
      timeline: 'Q2 2025',
      status: 'Open',
      minInvestment: '$1M',
      expectedReturn: '3.5x - 5x'
    },
    {
      title: 'Strategic Partnership Fund',
      amount: '$75M',
      use: 'Strategic Acquisitions & Partnerships',
      timeline: 'Q3 2025',
      status: 'Planning',
      minInvestment: '$500K',
      expectedReturn: '2.5x - 4x'
    },
    {
      title: 'AI Innovation Fund',
      amount: '$100M',
      use: 'AI Research & Development',
      timeline: 'Q4 2025',
      status: 'Planning',
      minInvestment: '$2M',
      expectedReturn: '4x - 7x'
    }
  ];

  const marketPositioning = [
    {
      sector: 'AI & Machine Learning',
      marketSize: '$200B+',
      growth: '35% CAGR',
      position: 'Top 5',
      opportunity: 'High'
    },
    {
      sector: 'Cybersecurity',
      marketSize: '$150B+',
      growth: '28% CAGR',
      position: 'Top 10',
      opportunity: 'High'
    },
    {
      sector: 'Cloud Computing',
      marketSize: '$500B+',
      growth: '22% CAGR',
      position: 'Top 15',
      opportunity: 'Medium'
    },
    {
      sector: 'Quantum Computing',
      marketSize: '$50B+',
      growth: '45% CAGR',
      position: 'Top 3',
      opportunity: 'Very High'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Investor Relations - Zion Tech Group"
        description="Invest in the future of technology with Zion Tech Group. Discover investment opportunities, financial performance, and growth potential in AI, cybersecurity, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Investor Relations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Invest in the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400">
                Future of Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join Zion Tech Group's journey as we revolutionize industries through AI, cybersecurity, 
              and emerging technologies. Discover exceptional investment opportunities with proven track record.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Investment Opportunities
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                Download Investor Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Financial Highlights</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center"
                >
                  <h3 className="text-lg font-medium text-gray-300 mb-2">{highlight.metric}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                  <div className={`text-lg font-semibold ${highlight.color} mb-1`}>
                    {highlight.change}
                  </div>
                  <div className="text-sm text-gray-400">{highlight.period}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Investment Opportunities</h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {investmentOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{opportunity.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      opportunity.status === 'Open' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {opportunity.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Amount:</span>
                      <span className="text-2xl font-bold text-green-400">{opportunity.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Timeline:</span>
                      <span className="text-white">{opportunity.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Min Investment:</span>
                      <span className="text-white">{opportunity.minInvestment}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Expected Return:</span>
                      <span className="text-cyan-400 font-semibold">{opportunity.expectedReturn}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6">{opportunity.use}</p>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Positioning Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Market Positioning & Growth</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <BarChart3 className="w-6 h-6 text-cyan-400 mr-2" />
                  Sector Analysis
                </h3>
                
                <div className="space-y-4">
                  {marketPositioning.map((sector, index) => (
                    <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{sector.sector}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${
                          sector.opportunity === 'Very High' ? 'bg-red-500/20 text-red-400' :
                          sector.opportunity === 'High' ? 'bg-green-500/20 text-green-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {sector.opportunity}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-gray-400">Market:</span>
                          <div className="text-white font-medium">{sector.marketSize}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Growth:</span>
                          <div className="text-green-400 font-medium">{sector.growth}</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Position:</span>
                          <div className="text-cyan-400 font-medium">{sector.position}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                  Growth Strategy
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="font-semibold text-white mb-2">Organic Growth</h4>
                    <p className="text-gray-400 text-sm mb-3">Expand existing product lines and customer base</p>
                    <div className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Target: 40% YoY growth
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="font-semibold text-white mb-2">Strategic Acquisitions</h4>
                    <p className="text-gray-400 text-sm mb-3">Acquire complementary technologies and talent</p>
                    <div className="flex items-center text-sm text-blue-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Target: 2-3 acquisitions/year
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                    <h4 className="font-semibold text-white mb-2">Global Expansion</h4>
                    <p className="text-gray-400 text-sm mb-3">Enter new markets and regions</p>
                    <div className="flex items-center text-sm text-purple-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Target: 15 new countries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Invest in Zion Tech Group?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  title: 'AI Leadership',
                  description: 'Pioneering AI solutions across industries',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Shield,
                  title: 'Cybersecurity',
                  description: 'Advanced security solutions for digital transformation',
                  color: 'from-red-500 to-orange-500'
                },
                {
                  icon: Cloud,
                  title: 'Cloud Innovation',
                  description: 'Next-generation cloud infrastructure and services',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Zap,
                  title: 'Emerging Tech',
                  description: 'Quantum computing and IoT edge solutions',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Invest in the Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with our investor relations team to learn more about investment opportunities, 
              schedule a meeting, or access detailed financial information.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-gray-300">investors@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-gray-300">Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20">
                Schedule Meeting
              </button>
              <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                Download Investor Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investors;