import React from "react"
import { SEO } from "@/components/SEO"
import { Link } from "react-router-dom"
import {
  FileText
  Brain,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  BarChart3
  Lock
  Globe
  Target
  TrendingUp
  Award
  Phone
  Mail
  MapPin
  Star
  Eye
  Search
  AlertTriangle
  FileCheck
  Scale
  Gavel
  Building
  Heart
  BookOpen
  Calendar
  AlertCircle
  CheckSquare
  FileX
  Download
  Upload
  Share2
  Settings
  Database
  Cloud
  Server
  Wifi
  ShieldCheck
  UserCheck
  Globe2
  Zap as ZapIcon
} from "lucide-react"
export default function AIPoweredContractAnalysis() {
  const features = [
  {
  ic,
  o: n: <Brain className="w-6 h-6" />,tit,
  l: e: "AI-Powered Analysis",descripti,
  o: n: "Advanced NLP models analyze contracts with 98% accuracy, identifying risks, obligations, and opportunities."
      benefi,
  t: s: [["98% accuracy rate", "Multi-language support", "Context-aware analysis"],
  ],
  },
  {
  ic,
  o: n: <Shield className="w-6 h-6" />,tit,
  l: e: "Risk Assessment",descripti,
  o: n: "Automated risk scoring and compliance checking against industry standards and regulatory requirements.",benefi,
  t: s: [["Real-time risk scoring", "Regulatory compliance", "Industry benchmarks"],
  ],
  },
  {
  ic,
  o: n: <Zap className="w-6 h-6" />,tit,
  l: e: "Real-time Processing",descripti,
  o: n: "Process contracts in seconds, not hours. Instant insights and recommendations for legal teams."
      benefi,
  t: s: [["< 30 second processing", "Batch processing", "Instant notifications"],
  ],
  },
  {
  ic,
  o: n: <FileCheck className="w-6 h-6" />,tit,
  l: e: "Compliance Monitoring",descripti,
  o: n: "Track regulatory changes and automatically flag non-compliant clauses and terms.",benefi,
  t: s: [["Auto-updating regulations", "Compliance alerts", "Audit trails"],
  ],
  },
  {
  ic,
  o: n: <Search className="w-6 h-6" />,tit,
  l: e: "Smart Search",descripti,
  o: n: "Semantic search across contract databases with natural language queries and advanced filtering.",benefi,
  t: s: [["Natural language queries", "Advanced filters", "Search history"],
  ],
  },
  {
  ic,
  o: n: <BarChart3 className="w-6 h-6" />,tit,
  l: e: "Analytics Dashboard",descripti,
  o: n: "Comprehensive reporting on contract performance, risks, and opportunities across your portfolio."
      benefi,
  t: s: [["Custom reports", "Real-time metrics", "Export capabilities"],
  ],
  },
  {
  ic,
  o: n: <Lock className="w-6 h-6" />,tit,
  l: e: "Enterprise Security",descripti,
  o: n: "Bank-level security with end-to-end encryption, role-based access control, and audit logging."
      benefi,
  t: s: [["SOC 2 Type II", "GDPR compliant", "HIPAA ready"],
  ],
  },
  {
  ic,
  o: n: <Globe className="w-6 h-6" />,tit,
  l: e: "Global Compliance",descripti,
  o: n: "Support for international legal frameworks and multi-jurisdictional compliance requirements.",benefi,
  t: s: [["150+ countries", "Local regulations", "Translation support"],
  ],
  },
  ]

  const pricingPlans = [
  {
  na,
  m: e: "Starter",pri,
  c: e: "$299",peri,
  o: d: "/month",descripti,
  o: n: "Perfect for small legal teams and startups",featur,
  e: s: [
  "Up to 100 contracts/month"
        "Basic risk assessment"
        "Standard compliance checks"
        "Email support"
        "Basic analytics dashboard"
        "Standard security features"
        "5 user licenses"
        "Basic API access"
]
      popula,
  r: false,savin,
  g: s: "Save $200/month with annual billing"
},
  {
  na,
  m: e: "Professional",pri,
  c: e: "$799",peri,
  o: d: "/month",descripti,
  o: n: "Ideal for growing law firms and mid-size companies",featur,
  e: s: [
  "Up to 1,000 contracts/month"
        "Advanced AI analysis"
        "Custom compliance rules"
        "Priority support"
        "Advanced analytics & reporting"
        "Full API access"
        "Team collaboration tools"
        "Custom integrations"
        "25 user licenses"
        "Advanced security features"
        "Compliance reporting"
        "Training & onboarding"
]
      popul,
  a: r: true,savin,
  g: s: "Save $800/month with annual billing"
},
  {
  na,
  m: e: "Enterprise",pri,
  c: e: "$1,999"
      peri,
  o: d: "/month",descripti,
  o: n: "For large organizations with complex contract portfolios",featur,
  e: s: [
  "Unlimited contracts"
        "Custom AI models"
        "Advanced compliance"
        "24/7 dedicated support"
        "Custom analytics"
        "Full API access"
        "Enterprise integrations"
        "Unlimited users"
        "Advanced security"
        "Custom training"
        "SLA guarantees"
        "Dedicated account manager"
]
      popula,
  r: false,savin,
  g: s: "Save $2,000/month with annual billing"
},
  ]

  const benefits = [
  {
  ic,
  o: n: <Clock className="w-8 h-8" />,tit,
  l: e: "Save 80% Time",descripti,
  o: n: "Reduce contract review time from hours to minutes with AI-powered analysis"
},
  {
  ic,
  o: n: <ShieldCheck className="w-8 h-8" />,tit,
  l: e: "Reduce Risk by 90%",descripti,
  o: n: "Identify potential issues before they become problems with advanced risk assessment"
},
  {
  ic,
  o: n: <DollarSign className="w-8 h-8" />,tit,
  l: e: "Cut Costs by 60%",descripti,
  o: n: "Lower legal expenses and improve contract negotiation outcomes"
},
  {
  ic,
  o: n: <TrendingUp className="w-8 h-8" />,tit,
  l: e: "Improve Compliance",descripti,
  o: n: "Stay ahead of regulatory changes with automated compliance monitoring"
},
  ]
  const useCases = [
  {
  tit,
  l: e: "Legal Departments",descripti,
  o: n: "Streamline contract review processes and improve risk management",ic,
  o: n: <Building className="w-6 h-6" />
    },
  {
  tit,
  l: e: "Financial Services",descripti,
  o: n: "Ensure regulatory compliance and manage complex financial agreements",ic,
  o: n: <Scale className="w-6 h-6" />
    },
  {
  tit,
  l: e: "Healthcare Organizations",descripti,
  o: n: "Maintain HIPAA compliance and manage vendor contracts effectively",ic,
  o: n: <Heart className="w-6 h-6" />
    },
  {
  tit,
  l: e: "Technology Companies",descripti,
  o: n: "Manage licensing agreements and partnership contracts efficiently",ic,
  o: n: <ZapIcon className="w-6 h-6" />
    },
  {
  tit,
  l: e: "Real Estate Firms",descripti,
  o: n: "Streamline lease agreements and property management contracts",ic,
  o: n: <Building className="w-6 h-6" />
    },
  {
  tit,
  l: e: "Manufacturing Companies",descripti,
  o: n: "Manage supplier contracts and ensure quality compliance",ic,
  o: n: <Settings className="w-6 h-6" />
    },
  ]
  const marketComparison = [
  {
  featu,
  r: e: "AI Accuracy",zi,
  o: n: "98%",competito,
  r: 1: "92%",competito,
  r: 2: "89%",competito,
  r: 3: "85%"
},
  {
  featu,
  r: e: "Processing Speed",zi,
  o: n: "< 30s",competito,
  r: 1: "2-5 min",competito,
  r: 2: "5-10 min",competito,
  r: 3: "10-15 min"
},
  {
  featu,
  r: e: "Languages Supported",zi,
  o: n: "50+",competito,
  r: 1: "25",competito,
  r: 2: "15",competito,
  r: 3: "10"
},
  {
  featu,
  r: e: "Compliance Frameworks",zi,
  o: n: "150+",competito,
  r: 1: "75",competito,
  r: 2: "50",competito,
  r: 3: "25"
},
  {
  featu,
  r: e: "API Response Time",zi,
  o: n: "< 100ms",competito,
  r: 1: "500ms",competito,
  r: 2: "1s",competito,
  r: 3: "2s"
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Contract Analysis Platform - Zion Tech Group"
        description="Transform your contract review process with AI-powered analysis, risk assessment, and compliance monitoring. 98% accuracy, real-time processing, and enterprise-grade security."
        keywords="AI contract analysis, legal tech, contract review, risk assessment, compliance monitoring, legal automation, contract management"
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl,
  m: d:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              AI-Powered Contract Analysis
            </h1>
            <p className="text-xl m,
  d:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your contract review process with AI-powered analysis, risk assessment, and compliance monitoring. 
              Achieve 98% accuracy with real-time processing and enterprise-grade security.
            </p>
          </div>
          
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
            <Link 
              to="/request-quote"
              className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r:from-blue-700,
  hove: r:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-xl";"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact"
              className="className="inline-flex items-center px-8 py-4 border border-gray-600,
  hove: r:border-gray-500 text-gray-300 hove,
  r:text-white font-semibold rounded-lg transition-all duration-200";"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </div>

          {/* Key Metrics */},
  }
          <div className="grid grid-cols-2,
  m: d: grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl,
  m: d:text-4xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl m,
  d:text-4xl font-bold text-purple-400 mb-2">&lt,30s</div>
              <div className="text-gray-400">Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl,
  m: d: text-4xl font-bold text-pink-400 mb-2">80%</div>
              <div className="text-gray-400">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl m,
  d:text-4xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-gray-400">Countries Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with industry expertise to deliver unmatched contract analysis capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
  <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700,
  hove: r: border-slate-600 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg mr-4">
                    {feature.icon},
  }
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits?.map((benefit, idx) => (
  <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit},
  }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6 l,
  g:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs. All plans include our core AI analysis capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
  <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border-2 ${
  plan.popular 
                  ? 'border-blue-500 bg-gradient-to-b from-slate-800/50 to-blue-900/20' 
                  : 'border-slate-700'
}`}>
                {plan.popular && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                  {plan.savings && (
  <p className="text-sm text-green-400 mt-2">{plan.savings}</p>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
  <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/request-quote"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
  plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r: from-blue-700,
  hove: r:to-purple-700 text-white'
                      : 'bg-slate-700,
  hove: r:bg-slate-600 text-gray-300 hove,
  r:text-white'
}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI-powered contract analysis platform delivers measurable results that transform your legal operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
  <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                  {benefit.icon},
  }
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect For Every Industry</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform adapts to your specific industry requirements and compliance needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
  <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700,
  hove: r:border-slate-600 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-600/20 rounded-lg mr-4">
                    {useCase.icon},
  }
                  </div>
                  <h3 className="text-xl font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6 l,
  g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Compare</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our AI-powered platform outperforms the competition across key metrics.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl overflow-hidden">
              <thead className="bg-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-400">Zion Tech Group</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">Competitor A</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">Competitor B</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">Competitor C</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {marketComparison.map((row, index) => (
  <tr key={index} className="hov,
  e: r:bg-slate-700/50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-300">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-center text-blue-400 font-semibold">{row.zion}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-400">{row.competitor1}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-400">{row.competitor2}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-400">{row.competitor3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Contract Management?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of organizations that trust Zion Tech Group for their AI-powered contract analysis needs.
          </p>
          
          <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center items-center">
            <Link 
              to="/request-quote"
              className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600,
  hove: r:from-blue-700,
  hove: r:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-xl";"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact"
              className="className="inline-flex items-center px-8 py-4 border border-gray-600,
  hove: r:border-gray-500 text-gray-300 hove,
  r:text-white font-semibold rounded-lg transition-all duration-200";"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Contact Information Footer */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1,
  m: d:grid-cols-2,
  l: g:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-300">
                <Link to="/services" className="block,
  hove: r:text-white transition-colors">All Services</Link>
                <Link to="/about" className="block,
  hove: r:text-white transition-colors">About Us</Link>
                <Link to="/case-studies" className="block,
  hove: r:text-white transition-colors">Case Studies</Link>
                <Link to="/contact" className="block,
  hove: r:text-white transition-colors">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-gray-300">
                <Link to="/blog" className="block,
  hove: r:text-white transition-colors">Blog</Link>
                <Link to="/white-papers" className="block,
  hove: r:text-white transition-colors">White Papers</Link>
                <Link to="/webinars" className="block,
  hove: r:text-white transition-colors">Webinars</Link>
                <Link to="/documentation" className="block,
  hove: r:text-white transition-colors">Documentation</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="space-y-2 text-gray-300">
                <a href="htt,
  p: s://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="block,
  hove: r:text-white transition-colors">
                  Website
                </a>
                <a href="htt,
  p: s://linkedin.com/company/zion-tech-group" target="_blank" rel="noopener noreferrer" className="block,
  hove: r:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="htt,
  p: s://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="block hove,
  r:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy, 2024 Zion Tech Group. All rights reserved. | <Link to="/privacy" className="hov,
  e: r: text-white">Privacy Policy</Link> | <Link to="/terms" className="hove,
  r:text-white">Terms of Service</Link></p>
          </div>
        </div>
      </section>
    </div>
  )
}