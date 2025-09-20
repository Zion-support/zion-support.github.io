import React from "react"
import { Link } from "react-router-dom"
import { Building2, Users, Shield, BarChart3, Cloud, Zap, ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react"
export default function EnterpriseSolutions() {
  const solutions = [
  {
  ic,
  o: n: Building2,tit,
  l: e: "Enterprise Architecture",descripti,
  o: n: "Scalable, secure, and future-ready enterprise infrastructure design"
            featur,
  e: s: [["Microservices Architecture", "Cloud-Native Design", "API-First Approach", "Scalability Planning"],
  ],
  },
  {
  ic,
  o: n: Users,tit,
  l: e: "Digital Transformation",descripti,
  o: n: "End-to-end digital transformation strategies for enterprise growth",featur,
  e: s: [["Process Automation", "Legacy System Modernization", "Change Management", "ROI Optimization"],
  ],
  },
  {
  ic,
  o: n: Shield,tit,
  l: e: "Enterprise Security",descripti,
  o: n: "Comprehensive security solutions for enterprise environments",featur,
  e: s: [["Zero-Trust Architecture", "Compliance Management", "Threat Detection", "Incident Response"],
  ],
  },
  {
  ic,
  o: n: BarChart3,tit,
  l: e: "Business Intelligence",descripti,
  o: n: "Advanced analytics and insights for data-driven decision making",featur,
  e: s: [["Real-time Dashboards", "Predictive Analytics", "Data Warehousing", "KPI Tracking"],
  ],
  },
  {
  ic,
  o: n: Cloud,tit,
  l: e: "Cloud Strategy",descripti,
  o: n: "Multi-cloud and hybrid cloud solutions for enterprise needs",featur,
  e: s: [["Cloud Migration", "Cost Optimization", "Performance Monitoring", "Disaster Recovery"],
  ],
  },
  {
  ic,
  o: n: Zap,tit,
  l: e: "AI Integration",descripti,
  o: n: "Seamless AI integration into existing enterprise workflows",featur,
  e: s: [["Custom AI Models", "Workflow Automation", "Intelligent Analytics", "Process Optimization"],
  ],
  },
  ]
    const benefits = [
  "Increased operational efficiency by 40-60%"
        "Reduced IT costs through automation and optimization"
        "Enhanced security and compliance posture"
        "Improved customer experience and satisfaction"
        "Faster time-to-market for new products/services"
        "Better data insights and decision-making capabilities"
]
    const caseStudies = [
  {
  compa,
  n: y: "Fortune 500 Manufacturing",indust,
  r: y: "Manufacturing",challen,
  g: e: "Legacy system modernization and digital transformation",soluti,
  o: n: "Implemented cloud-native architecture with AI-powered analytics",resul,
  t: s: "35% cost reduction, 50% faster time-to-market"
},
  {
  compa,
  n: y: "Global Financial Services",indust,
  r: y: "Financial Services",challen,
  g: e: "Compliance automation and risk management",soluti,
  o: n: "AI-driven compliance monitoring and automated reporting",resul,
  t: s: "90% reduction in compliance violations, 60% faster reporting"
},
  ]
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl,
  m: d:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your enterprise with cutting-edge technology solutions designed for scale, security, and innovation
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-400 transition-all duration-300,
  transform: hover:scale-105">
                Get Enterprise Quote
              </Link>
              <Link to="/services/ai-autonomous-systems" className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/20 transition-all duration-300">
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */},
  }
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Solutions Grid */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-4">
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From infrastructure to innovation, we provide end-to-end solutions that drive enterprise success
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {solutions.map((solution, index) () => {
  const Icon = solution.icon
            return (<div key={index} className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8,
  hove: r: border-cyan-500/50 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0"/>
                        {feature},
  }
                      </li>))}
                  </ul>
                </div>)
        })}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results and measurable impact for enterprise organizations
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white"/>
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Case Studies */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real enterprise clients
            </p>
          </div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (<div key={index} className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-2"/>
                  <span className="text-sm text-gray-400">{study.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{study.company}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Challen,
  g: e:</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Soluti,
  o: n:</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Resul,
  t: s:</h4>
                    <p className="text-gray-300">{study.results}</p>
                  </div>
                </div>
                <Link to="/case-studies" className="inline-flex items-center text-cyan-400,
  hove: r:text-cyan-300 transition-colors duration-300">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
              </div>))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl m,
  d:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our enterprise solutions can drive innovation, efficiency, and growth for your organization
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-400 transition-all duration-300,
  transform: hover:scale-105">
              Schedule Consultation
            </Link>
            <Link to="/services-overview" className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/20 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>)
}
