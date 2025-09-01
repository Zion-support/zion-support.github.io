import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import {

  TrendingUp, 
  BarChart3, 
  FileText, 
  Download, 
  ExternalLink,
  Calendar,
  DollarSign,
  Users,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Building,
  ChartLine,
  PieChart,
  Activity,
  Target,
  Rocket,
  Lightbulb,
  Briefcase,
  Handshake,
  Clock,
  Mail,
  Phone
} from 'lucide-react';

export default function InvestorRelations() {

  const financialHighlights = [
    {

      metric: 'Revenue Growth',
      value: '156%',
      change: '+23%',
      period: 'YoY 2024',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {

      metric: 'Market Cap',
      value: '$2.4B',
      change: '+18%',
      period: 'Current',
      icon: DollarSign,
      color: 'text-blue-400'
    },
    {

      metric: 'Global Customers',
      value: '1,200+',
      change: '+45%',
      period: 'YoY 2024',
      icon: Users,
      color: 'text-purple-400'
    },
    {

      metric: 'Market Presence',
      value: '25+',
      change: '+5',
      period: 'Countries',
      icon: Globe,
      color: 'text-cyan-400'
    }
  ];

  const quarterlyResults = [
    {

      quarter: 'Q4 2024',
      revenue: '$89.2M',
      growth: '+23%',
      margin: '34.2%',
      customers: '1,247',
      status: 'Projected'
    },
    {

      quarter: 'Q3 2024',
      revenue: '$72.5M',
      growth: '+18%',
      margin: '32.8%',
      customers: '1,189',
      status: 'Reported'
    },
    {

      quarter: 'Q2 2024',
      revenue: '$61.4M',
      growth: '+15%',
      margin: '31.5%',
      customers: '1,134',
      status: 'Reported'
    },
    {

      quarter: 'Q1 2024',
      revenue: '$53.4M',
      growth: '+12%',
      margin: '30.2%',
      customers: '1,089',
      status: 'Reported'
    }
  ];

  const strategicInitiatives = [
    {

      title: 'AI Platform Expansion',
      description: 'Major investment in AI infrastructure and model development',
      investment: '$45M',
      timeline: '2024-2026',
      status: 'In Progress',
      impact: 'High'
    },
    {

      title: 'Global Market Entry',
      description: 'Expansion into APAC and European markets',
      investment: '$28M',
      timeline: '2024-2025',
      status: 'Planning',
      impact: 'Medium'
    },
    {

      title: 'Quantum Computing R&D',
      description: 'Research and development in quantum technologies',
      investment: '$32M',
      timeline: '2024-2027',
      status: 'Research',
      impact: 'Long-term'
    },
    {

      title: 'Cybersecurity Platform',
      description: 'Next-generation security solutions development',
      investment: '$38M',
      timeline: '2024-2026',
      status: 'Development',
      impact: 'High'
    }
  ];

  const investorResources = [
    {

      title: 'Annual Report 2024',
      description: 'Comprehensive overview of our financial performance and strategic initiatives',
      type: 'PDF',
      size: '8.2 MB',
      date: 'March 2024',
      featured: true
    },
    {

      title: 'Q3 2024 Earnings Call',
      description: 'Audio recording and transcript of our Q3 2024 earnings call',
      type: 'Audio/Transcript',
      size: '15.4 MB',
      date: 'November 2024',
      featured: false
    },
    {

      title: 'Investor Presentation',
      description: 'Latest investor presentation with company overview and financial highlights',
      type: 'PDF',
      size: '12.8 MB',
      date: 'December 2024',
      featured: true
    },
    {

      title: 'Corporate Governance',
      description: 'Board composition, committee charters, and governance policies',
      type: 'PDF',
      size: '3.1 MB',
      date: 'Updated Monthly',
      featured: false
    },
    {

      title: 'ESG Report 2024',
      description: 'Environmental, Social, and Governance performance report',
      type: 'PDF',
      size: '6.7 MB',
      date: 'April 2024',
      featured: false
    },
    {

      title: 'Financial Statements',
      description: 'Quarterly and annual financial statements and disclosures',
      type: 'PDF',
      size: 'Various',
      date: 'Quarterly',
      featured: false
    }
  ];

  const upcomingEvents = [
    {

      title: 'Q4 2024 Earnings Call',
      date: 'February 15, 2025',
      time: '5:00 PM ET',
      type: 'Earnings Call',
      registration: 'Required'
    },
    {

      title: 'Annual Shareholder Meeting',
      date: 'May 20, 2025',
      time: '10:00 AM ET',
      type: 'Shareholder Meeting',
      registration: 'Required'
    },
    {

      title: 'Technology Investor Day',
      date: 'March 28, 2025',
      time: '9:00 AM ET',
      type: 'Investor Event',
      registration: 'Open'
    },
    {

      title: 'Q1 2025 Earnings Call',
      date: 'May 8, 2025',
      time: '5:00 PM ET',
      type: 'Earnings Call',
      registration: 'Required'
    }
  ];

  const contactInfo = {

    investorRelations: 'investors@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Investor Relations - Zion Tech Group"
        description="Access financial information, quarterly reports, investor presentations, and company performance data for Zion Tech Group. Stay informed about our growth and strategic initiatives."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access comprehensive financial information, quarterly reports, and strategic updates. 
              Learn about our growth trajectory and investment opportunities.
            </p>
            
            {/* Financial Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {financialHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.metric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold ${highlight.color} mb-2`}>{highlight.value}</div>
                  <div className="text-sm text-gray-400 mb-1">{highlight.metric}</div>
                  <div className="text-xs text-green-400">{highlight.change} {highlight.period}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quarterly Results */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Quarterly Performance</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Track our financial performance and growth trajectory across quarters
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-gray-300">Quarter</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-300">Revenue</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-300">Growth</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-300">Margin</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-300">Customers</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {quarterlyResults.map((quarter, index) => (
                  <tr key={quarter.quarter} className="border-t border-slate-700/50">
                    <td className="p-4 text-white font-medium">{quarter.quarter}</td>
                    <td className="p-4 text-white">{quarter.revenue}</td>
                    <td className="p-4 text-green-400">{quarter.growth}</td>
                    <td className="p-4 text-cyan-400">{quarter.margin}</td>
                    <td className="p-4 text-white">{quarter.customers}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${

                        quarter.status === 'Reported' ? 'bg-green-500/20 text-green-300' :
                        quarter.status === 'Projected' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {quarter.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section className="py-16 bg-slate-800/20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Strategic Initiatives</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Major investments and strategic projects driving our future growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{initiative.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${

                    initiative.impact === 'High' ? 'bg-red-500/20 text-red-300' :
                    initiative.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {initiative.impact}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{initiative.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Investment</div>
                    <div className="text-white font-medium">{initiative.investment}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Timeline</div>
                    <div className="text-white font-medium">{initiative.timeline}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Status</div>
                    <div className="text-white font-medium">{initiative.status}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Investor Resources</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Access our latest financial reports, presentations, and governance documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investorResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <FileText className="w-6 h-6 text-cyan-400" />
                    </div>
                    {resource.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>{resource.type}</span>
                    <span>{resource.size}</span>
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    Updated: {resource.date}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-slate-800/20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Upcoming Events</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Mark your calendar for important investor events and earnings calls
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${

                    event.registration === 'Required' ? 'bg-red-500/20 text-red-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {event.registration}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {event.type}
                  </div>
                </div>

                <button className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Contact Investor Relations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-3">Direct investor inquiries</p>
                <a
                  href={`mailto:${contactInfo.investorRelations}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  {contactInfo.investorRelations}
                </a>
              </div>

              <div className="text-center">
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-3">Speak with our team</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="text-center">
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Building className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-3">Corporate headquarters</p>
                <span className="text-green-400 font-medium text-sm">
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}