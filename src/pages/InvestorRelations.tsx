import React from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import {
  TrendingUp;
  BarChart3,
  FileText,
  Download,
  ExternalLink;
  Calendar;
  DollarSign;
  Users;
  Globe;
  Award;
  CheckCircle;
  ArrowRight;
  Star;
  Zap;
  Brain;
  Shield;
  Cloud;
  Cpu;
  Building;
  ChartLine;
  PieChart;
  Activity;
  Target;
  Rocket;
  Lightbulb;
  Briefcase;
  Handshake;
  Clock;
  Mail;
  Phone;
}
}
 } from "lucide-react";
export default function InvestorRelations() {
  const financialHighlights = [
  {
  metr,
  i: c: 'Revenue Growth',val,
  u: e: '156%',chan,
  g: e: '+23%',peri,
  o: d: 'YoY 2024',ic,
  o: n: TrendingUp,col,
  o: r: 'text-green-400'
},
  {
  metr,
  i: c: 'Market Cap',val,
  u: e: '$2.4B',chan,
  g: e: '+18%',peri,
  o: d: 'Current',ic,
  o: n: DollarSign,col,
  o: r: 'text-blue-400'
},
  {
  metr,
  i: c: 'Global Customers',val,
  u: e: '1,200+'
      chan,
  g: e: '+45%',peri,
  o: d: 'YoY 2024',ic,
  o: n: Users,col,
  o: r: 'text-purple-400'
},
  {
  metr,
  i: c: 'Market Presence',val,
  u: e: '25+',chan,
  g: e: '+5',peri,
  o: d: 'Countries',ic,
  o: n: Globe,col,
  o: r: 'text-cyan-400'
},
  ]
  const quarterlyResults = [
  {
  quart,
  e: r: 'Q4 2024',reven,
  u: e: '$89.2M',grow,
  t: h: '+23%',marg,
  i: n: '34.2%',custome,
  r: s: '1,247'
      stat,
  u: s: 'Projected'
},
  {
  quart,
  e: r: 'Q3 2024',reven,
  u: e: '$72.5M',grow,
  t: h: '+18%',marg,
  i: n: '32.8%',custome,
  r: s: '1,189'
      stat,
  u: s: 'Reported'
},
  {
  quart,
  e: r: 'Q2 2024',reven,
  u: e: '$61.4M',grow,
  t: h: '+15%',marg,
  i: n: '31.5%',custome,
  r: s: '1,134'
      stat,
  u: s: 'Reported'
},
  {
  quart,
  e: r: 'Q1 2024',reven,
  u: e: '$53.4M',grow,
  t: h: '+12%',marg,
  i: n: '30.2%',custome,
  r: s: '1,089'
      stat,
  u: s: 'Reported'
},
  ]
  const strategicInitiatives = [
  {
  tit,
  l: e: 'AI Platform Expansion',descripti,
  o: n: 'Major investment in AI infrastructure and model development',investme,
  n: t: '$45M',timeli,
  n: e: '2024-2026',stat,
  u: s: 'In Progress',impa,
  c: t: 'High'
},
  {
  tit,
  l: e: 'Global Market Entry',descripti,
  o: n: 'Expansion into APAC and European markets',investme,
  n: t: '$28M',timeli,
  n: e: '2024-2025',stat,
  u: s: 'Planning',impa,
  c: t: 'Medium'
},
  {
  tit,
  l: e: 'Quantum Computing R&D',descripti,
  o: n: 'Research and development in quantum technologies',investme,
  n: t: '$32M',timeli,
  n: e: '2024-2027',stat,
  u: s: 'Research',impa,
  c: t: 'Long-term'
},
  {
  tit,
  l: e: 'Cybersecurity Platform',descripti,
  o: n: 'Next-generation security solutions development',investme,
  n: t: '$38M',timeli,
  n: e: '2024-2026',stat,
  u: s: 'Development',impa,
  c: t: 'High'
},
  ]
  const investorResources = [
  {
  tit,
  l: e: 'Annual Report 2024',descripti,
  o: n: 'Comprehensive overview of our financial performance and strategic initiatives',ty,
  p: e: 'PDF',si,
  z: e: '8.2 MB',da,
  t: e: 'March 2024',featur,
  e: d: true;
},
  {
  tit,
  l: e: 'Q3 2024 Earnings Call',descripti,
  o: n: 'Audio recording and transcript of our Q3 2024 earnings call',ty,
  p: e: 'Audio/Transcript',si,
  z: e: '15.4 MB',da,
  t: e: 'November 2024',featur,
  e: d: false;
},
  {
  tit,
  l: e: 'Investor Presentation',descripti,
  o: n: 'Latest investor presentation with company overview and financial highlights',ty,
  p: e: 'PDF',si,
  z: e: '12.8 MB',da,
  t: e: 'December 2024',featur,
  e: d: true;
},
  {
  tit,
  l: e: 'Corporate Governance',descripti,
  o: n: 'Board composition, committee charters, and governance policies'
      ty,
  p: e: 'PDF',si,
  z: e: '3.1 MB',da,
  t: e: 'Updated Monthly',featur,
  e: d: false;
},
  {
  tit,
  l: e: 'ESG Report 2024',descripti,
  o: n: 'Environmental, Social, and Governance performance report'
      ty,
  p: e: 'PDF',si,
  z: e: '6.7 MB',da,
  t: e: 'April 2024',featur,
  e: d: false;
},
  {
  tit,
  l: e: 'Financial Statements',descripti,
  o: n: 'Quarterly and annual financial statements and disclosures',ty,
  p: e: 'PDF',si,
  z: e: 'Various',da,
  t: e: 'Quarterly',featur,
  e: d: false;
},
  ]
  const upcomingEvents = [
  {
  tit,
  l: e: 'Q4 2024 Earnings Call',da,
  t: e: 'February 15, 2025'
      ti,
  m: e: ',
  5:00 PM ET',ty,
  p: e: 'Earnings Call',registrati,
  o: n: 'Required'
},
  {
  tit,
  l: e: 'Annual Shareholder Meeting',da,
  t: e: 'May 20, 2025'
      ti,
  m: e: '1,
  0:00 AM ET',ty,
  p: e: 'Shareholder Meeting',registrati,
  o: n: 'Required'
},
  {
  tit,
  l: e: 'Technology Investor Day',da,
  t: e: 'March 28, 2025'
      ti,
  m: e: ',
  9:00 AM ET',ty,
  p: e: 'Investor Event',registrati,
  o: n: 'Open'
},
  {
  tit,
  l: e: 'Q1 2025 Earnings Call',da,
  t: e: 'May 8, 2025'
      ti,
  m: e: ',
  5:00 PM ET',ty,
  p: e: 'Earnings Call',registrati,
  o: n: 'Required'
},
  ]
  const const contactInfo = {
  = {
    investorRelatio,
  n: s: 'investors@ziontechgroup.com',pho,
  n: e: '+1 (302) 464-0950',addre,
  s: s: '364 E Main St STE 1008 Middletown DE 19709'
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Investor Relations - Zion Tech Group"
        description="Access financial information, quarterly reports, investor presentations, and company performance data for Zion Tech Group. Stay informed about our growth and strategic initiatives."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Investor Relations;
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access comprehensive financial information, quarterly reports, and strategic updates. 
              Learn about our growth trajectory and investment opportunities.
            </p>
            
            {/* Financial Highlights */},
  }
            <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {financialHighlights.map((highlight, index) => (
  <motion.div;
                  key={highlight.metric},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  animate={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  className="className="text-center";"
                >
                  <div className={`text-3xl font-bold ${highlight.color} mb-2`}>{highlight.value}</div>
                  <div className="text-sm text-gray-400 mb-1">{highlight.metric}</div>
                  <div className="text-xs text-green-400">{highlight.change},
  {highlight.period}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quarterly Results */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12";"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Quarterly Performance</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Track our financial performance and growth trajectory across quarters;
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
                        {quarter.status},
  }
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategic Initiatives */},
  }
      <section className="py-16 bg-slate-800/20">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12";"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Strategic Initiatives</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Major investments and strategic projects driving our future growth;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6">
            {strategicInitiatives.map((initiative, index) => (
  <motion.div;
                key={initiative.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6";"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{initiative.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
  initiative.impact === 'High' ? 'bg-red-500/20 text-red-300' :
                    initiative.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
}`}>
                    {initiative.impact},
  }
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

      {/* Investor Resources */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12";"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Investor Resources</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Access our latest financial reports, presentations, and governance documents;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {investorResources.map((resource, index) => (
  <motion.div;
                key={resource.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden,
  hove: r:border-cyan-400/30 transition-all duration-300";"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <FileText className="w-6 h-6 text-cyan-400" />
                    </div>
                    {resource.featured && (
  <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                        Featured;
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
                    Updat,
  e: d: {resource.date},
  }
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r: from-cyan-600,
  hove: r:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg hove,
  r:shadow-cyan-500/25 flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download;
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */},
  }
      <section className="py-16 bg-slate-800/20">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="mb-12";"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">Upcoming Events</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Mark your calendar for important investor events and earnings calls;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
  <motion.div;
                key={event.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6";"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
  event.registration === 'Required' ? 'bg-red-500/20 text-red-300' :
                    'bg-green-500/20 text-green-300'
}`}>
                    {event.registration},
  }
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date},
  }
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {event.time},
  }
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {event.type},
  }
                  </div>
                </div>

                <button className="w-full bg-slate-700/50,
  hove: r:bg-slate-600/50 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                  Register Now;
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center";"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Contact Investor Relations</h2>
            <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-3">Direct investor inquiries</p>
                <a;
                  href={`mailt,
  o:${contactInfo.investorRelations}`}
                  className="className="text-cyan-400,
  hove: r:text-cyan-300 transition-colors font-medium";"
                >
                  {contactInfo.investorRelations},
  }
                </a>
              </div>

              <div className="text-center">
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-3">Speak with our team</p>
                <a;
                  href={`t,
  e: l:${contactInfo.phone}`}
                  className="className="text-blue-400,
  hove: r:text-blue-300 transition-colors font-medium";"
                >
                  {contactInfo.phone},
  }
                </a>
              </div>

              <div className="text-center">
                <div className="p-4 bg-slate-700/30 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Building className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-3">Corporate headquarters</p>
                <span className="text-green-400 font-medium text-sm">
                  {contactInfo.address},
  }
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}