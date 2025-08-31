import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  DollarSign, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Globe, 
  Rocket,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Download,
  FileText,
  Calendar,
  Building2,
  Target,
  Lightbulb,
  Shield,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  PieChart,
  Activity,
  Zap,
  Brain,
  Server,
  Cloud,
  Database
} from 'lucide-react';

export function Investors() {
  const financialHighlights = [
    {
      metric: "Revenue Growth",
      value: "450%",
      period: "YoY 2024",
      description: "Sustained high growth across all business segments"
    },
    {
      metric: "ARR",
      value: "$25M+",
      period: "Current",
      description: "Annual Recurring Revenue with 95% retention rate"
    },
    {
      metric: "Customer Growth",
      value: "300%",
      period: "YoY 2024",
      description: "Enterprise client acquisition and expansion"
    },
    {
      metric: "Market Cap",
      value: "$500M+",
      period: "Estimated",
      description: "Based on latest funding round valuation"
    }
  ];

  const fundingRounds = [
    {
      round: "Series B",
      amount: "$50M",
      date: "December 2024",
      lead: "Sequoia Capital",
      participants: ["Andreessen Horowitz", "Tiger Global", "Existing Investors"],
      valuation: "$500M",
      use: "Product development, market expansion, team growth"
    },
    {
      round: "Series A",
      amount: "$15M",
      date: "March 2023",
      lead: "Andreessen Horowitz",
      participants: ["Y Combinator", "Initial Investors"],
      valuation: "$75M",
      use: "Platform development, initial market entry"
    },
    {
      round: "Seed",
      amount: "$2M",
      date: "January 2022",
      lead: "Y Combinator",
      participants: ["Angel Investors", "Friends & Family"],
      valuation: "$8M",
      use: "MVP development, founding team"
    }
  ];

  const marketOpportunity = {
    totalAddressableMarket: "$150B",
    serviceableAddressableMarket: "$25B",
    serviceableObtainableMarket: "$2.5B",
    growthRate: "35% CAGR",
    keyDrivers: [
      "AI adoption accelerating across industries",
      "Digital transformation spending increasing",
      "Cloud migration driving AI platform demand",
      "Regulatory compliance requiring AI solutions"
    ]
  };

  const competitiveAdvantages = [
    {
      title: "Proprietary AI Technology",
      description: "Advanced algorithms and models with 15+ patents filed",
      icon: Brain
    },
    {
      title: "Enterprise-Grade Security",
      description: "SOC 2 Type II certified, HIPAA compliant, GDPR ready",
      icon: Shield
    },
    {
      title: "Scalable Cloud Architecture",
      description: "Multi-cloud platform serving 1000+ enterprise clients",
      icon: Cloud
    },
    {
      title: "Industry Expertise",
      description: "Deep domain knowledge across 15+ verticals",
      icon: Building2
    }
  ];

  const growthMetrics = [
    { label: "Revenue", value: "$25M+", growth: "+450%", period: "2024" },
    { label: "Customers", value: "500+", growth: "+300%", period: "2024" },
    { label: "Employees", value: "150+", growth: "+200%", period: "2024" },
    { label: "Countries", value: "25+", growth: "+150%", period: "2024" },
    { label: "Patents", value: "100+", growth: "+400%", period: "2024" },
    { label: "Research Papers", value: "25+", growth: "+300%", period: "2024" }
  ];

  const investorResources = [
    {
      name: "Investor Presentation",
      description: "Comprehensive overview of business, strategy, and financials",
      icon: FileText,
      size: "8.7 MB",
      url: "/assets/investor/investor-presentation.pdf"
    },
    {
      name: "Financial Model",
      description: "Detailed 5-year financial projections and assumptions",
      icon: BarChart3,
      size: "2.1 MB",
      url: "/assets/investor/financial-model.xlsx"
    },
    {
      name: "Market Analysis",
      description: "Deep dive into market opportunity and competitive landscape",
      icon: TrendingUp,
      size: "5.3 MB",
      url: "/assets/investor/market-analysis.pdf"
    },
    {
      name: "Technical Roadmap",
      description: "Product development timeline and technology milestones",
      icon: Rocket,
      size: "3.8 MB",
      url: "/assets/investor/technical-roadmap.pdf"
    },
    {
      name: "Team Overview",
      description: "Leadership team bios and organizational structure",
      icon: Users,
      size: "1.9 MB",
      url: "/assets/investor/team-overview.pdf"
    },
    {
      name: "Case Studies",
      description: "Customer success stories and ROI examples",
      icon: CheckCircle,
      size: "4.2 MB",
      url: "/assets/investor/case-studies.pdf"
    }
  ];

  const contactInfo = {
    investorEmail: "investors@ziontechgroup.com",
    generalEmail: "info@ziontechgroup.com",
    phone: "+1 (302) 464-0950",
    address: "364 E Main St STE 1008, Middletown, DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900">
      <Helmet>
        <title>Investors - Zion Tech Group | Investment Opportunities & Financial Information</title>
        <meta name="description" content="Access Zion Tech Group's investor information, financial highlights, funding rounds, and investment opportunities in AI technology." />
        <meta name="keywords" content="investors, funding, financials, Zion Tech Group, AI investment, Series B, venture capital" />
        <link rel="canonical" href="https://ziontechgroup.com/investors" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Investor
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Relations</span>
            </h1>
            <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
              Join us in transforming industries through cutting-edge AI technology. 
              Discover investment opportunities in one of the fastest-growing AI companies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="#financials" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Financials
            </a>
            <a 
              href={`mailto:${contactInfo.investorEmail}`} 
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Investors
            </a>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section id="financials" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Financial Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((highlight, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-slate-800 to-zion-slate-700 rounded-xl p-6 border border-zion-purple/20 text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">{highlight.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{highlight.metric}</div>
                <div className="text-zion-cyan text-sm mb-3">{highlight.period}</div>
                <p className="text-zion-slate-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Growth Metrics</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {growthMetrics.map((metric, index) => (
              <div key={index} className="bg-zion-slate-800/50 rounded-lg p-4 border border-zion-purple/20 text-center">
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-zion-slate-400 text-sm mb-2">{metric.label}</div>
                <div className="text-zion-cyan text-sm font-semibold">{metric.growth}</div>
                <div className="text-zion-slate-500 text-xs">{metric.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Rounds */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Funding History</h2>
          
          <div className="space-y-6">
            {fundingRounds.map((round, index) => (
              <div key={index} className="bg-gradient-to-r from-zion-slate-800 to-zion-slate-700 rounded-xl p-8 border border-zion-purple/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl font-bold text-zion-cyan">{round.round}</div>
                      <div className="text-2xl font-bold text-white">{round.amount}</div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-zion-slate-400">Date: </span>
                        <span className="text-white">{round.date}</span>
                      </div>
                      <div>
                        <span className="text-zion-slate-400">Lead Investor: </span>
                        <span className="text-white">{round.lead}</span>
                      </div>
                      <div>
                        <span className="text-zion-slate-400">Valuation: </span>
                        <span className="text-white">{round.valuation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Participants</h4>
                    <div className="space-y-2">
                      {round.participants.map((participant, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-zion-slate-300">{participant}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Use of Funds</h4>
                      <p className="text-zion-slate-300 text-sm">{round.use}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-zion-slate-800 to-zion-slate-700 rounded-2xl p-12 border border-zion-purple/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Market Opportunity</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Market Size</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-zion-slate-800/50 rounded-lg">
                    <span className="text-zion-slate-300">Total Addressable Market</span>
                    <span className="text-2xl font-bold text-zion-cyan">{marketOpportunity.totalAddressableMarket}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-zion-slate-800/50 rounded-lg">
                    <span className="text-zion-slate-300">Serviceable Addressable Market</span>
                    <span className="text-2xl font-bold text-zion-cyan">{marketOpportunity.serviceableAddressableMarket}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-zion-slate-800/50 rounded-lg">
                    <span className="text-zion-slate-300">Serviceable Obtainable Market</span>
                    <span className="text-2xl font-bold text-zion-cyan">{marketOpportunity.serviceableObtainableMarket}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-zion-slate-800/50 rounded-lg">
                    <span className="text-zion-slate-300">Growth Rate</span>
                    <span className="text-2xl font-bold text-zion-cyan">{marketOpportunity.growthRate}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Key Growth Drivers</h3>
                <div className="space-y-3">
                  {marketOpportunity.keyDrivers.map((driver, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-300">{driver}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Competitive Advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="bg-zion-slate-800/50 rounded-xl p-6 border border-zion-purple/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <advantage.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                    <p className="text-zion-slate-300">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Investor Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investorResources.map((resource, index) => (
              <div key={index} className="bg-zion-slate-800/50 rounded-lg p-6 border border-zion-purple/20">
                <div className="flex items-center gap-3 mb-4">
                  <resource.icon className="w-6 h-6 text-zion-cyan" />
                  <h3 className="text-lg font-semibold text-white">{resource.name}</h3>
                </div>
                <p className="text-zion-slate-400 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-slate-400">{resource.size}</span>
                  <a 
                    href={resource.url}
                    className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white text-sm font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-zion-slate-800 to-zion-slate-700 rounded-2xl p-12 border border-zion-purple/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Investor Relations</h2>
            
            <div className="text-center mb-8">
              <p className="text-zion-slate-300 text-lg">
                Ready to learn more about investment opportunities at Zion Tech Group? 
                Our investor relations team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <a href={`mailto:${contactInfo.investorEmail}`} className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      {contactInfo.investorEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <a href={`tel:${contactInfo.phone}`} className="text-zion-slate-300 hover:text-zion-cyan transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-300">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-300">Schedule investor call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-300">Access detailed financials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-300">Meet leadership team</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href={`mailto:${contactInfo.investorEmail}?subject=Investment Inquiry`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Schedule Investor Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Investors;