import React from "react"
import { motion } from "framer-motion"
import {
  Brain
  Shield,
  Cloud,
  Rocket,
  Users,
  BarChart3,
  Building,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Sparkles
  Heart
  Truck
  FileText
  Activity
  TrendingUp
  Target
  Zap
  Globe
} from "lucide-react"
const InnovativeServicesOverview2025 = () () => {
  const serviceCategories = [
  {
  id: 'ai-customer-success',tit,
  l: e: 'AI Customer Success Platform',ic,
  o: n: Users,col,
  o: r: 'from-blue-500 to-purple-600',descripti,
  o: n: 'Transform customer success with AI-powered insights and automation',pri,
  c: e: 'From $1,200/month'
      featur,
  e: s: ['AI-powered insightsPredictive analytics', 'Automated workflows']
      pa,
  t: h: '/services/ai-customer-success-platform',benefi,
  t: s: [['Reduce churn by 40%Increase CLV by 35%', 'Automate 70% of tasks'],
  ],
  },
  {
  id: 'ai-supply-chain',tit,
  l: e: 'AI Supply Chain Optimization',ic,
  o: n: Truck,col,
  o: r: 'from-green-500 to-blue-600',descripti,
  o: n: 'Revolutionize supply chain operations with AI intelligence',pri,
  c: e: 'From $1,800/month'
      featur,
  e: s: ['Demand forecastingRoute optimization', 'Risk management']
      pa,
  t: h: '/services/ai-supply-chain-optimization',benefi,
  t: s: [['Reduce costs by 35%Improve delivery by 40%', 'Minimize disruptions'],
  ],
  },
  {
  id: 'ai-financial-compliance',tit,
  l: e: 'AI Financial Compliance Platform',ic,
  o: n: Shield,col,
  o: r: 'from-purple-500 to-indigo-600',descripti,
  o: n: 'Automate financial compliance with AI-powered risk assessment',pri,
  c: e: 'From $2,200/month'
      featur,
  e: s: ['AI risk assessmentAutomated monitoring', 'Real-time alerts']
      pa,
  t: h: '/services/ai-financial-compliance-platform',benefi,
  t: s: [['Reduce costs by 60%Improve accuracy by 95%', '24/7 monitoring'],
  ],
  },
  {
  id: 'ai-healthcare-analytics',tit,
  l: e: 'AI Healthcare Analytics Platform',ic,
  o: n: Heart,col,
  o: r: 'from-pink-500 to-red-600',descripti,
  o: n: 'Transform healthcare with AI-powered patient analytics',pri,
  c: e: 'From $2,800/month'
      featur,
  e: s: ['Patient analyticsClinical decision support', 'HIPAA compliance']
      pa,
  t: h: '/services/ai-healthcare-analytics-platform',benefi,
  t: s: [['Improve outcomes by 35%Reduce readmissions by 40%', 'Lower costs by 30%'],
  ],
  },
  ]

  const additionalServices = [
  {
  na,
  m: e: 'AI-Powered SEO Platform',descripti,
  o: n: 'Advanced SEO optimization with machine learning',pri,
  c: e: '$1,500/month'
      pa,
  t: h: '/services/ai-powered-seo'
},
  {
  na,
  m: e: 'AI Interview Assessment',descripti,
  o: n: 'Intelligent candidate evaluation and screening',pri,
  c: e: '$800/month',pa,
  t: h: '/services/interview-assessment-ai'
},
  {
  na,
  m: e: 'Zero Trust Network Access',descripti,
  o: n: 'Enterprise-grade security with zero trust principles',pri,
  c: e: '$2,000/month'
      pa,
  t: h: '/services/zero-trust-network-access'
},
  {
  na,
  m: e: 'AI Workflow Orchestrator',descripti,
  o: n: 'Intelligent business process automation',pri,
  c: e: '$1,800/month'
      pa,
  t: h: '/services/ai-workflow-orchestrator'
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovative Services 2025
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Cutting-Edge AI Solutions for
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Modern Businesses
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered micro SAAS services designed to 
              transform your business operations and drive sustainable growth.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <motion.button
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-600,
  hove: r:to-purple-700 transition-all duration-200";"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Services
              </motion.button>
              <motion.button
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="inline-flex items-center px-8 py-4 border-2 border-zion-slate-light text-zion-slate-light font-semibold rounded-lg,
  hove: r: bg-zion-slate-light hove,
  r:text-zion-slate-dark transition-all duration-200";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our most innovative and impactful AI-powered solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
  <motion.div
                key={service.id},
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
                className="className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-xl p-8 border border-zion-slate-light/20,
  hove: r:border-zion-slate-light/40 transition-all duration-300";"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                  <div className="text-zion-slate-light">Starting price</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key,
  Feature: s:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Business,
  Impac: t:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
  <li key={benefitIndex} className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-zion-slate-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={service.path},
  }
                  className="className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-600 hove,
  r:to-purple-700 transition-all duration-200";"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Additional AI Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our complete portfolio of AI-powered solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
                whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-lg p-6 border border-zion-slate-light/20,
  hove: r:border-zion-slate-light/40 transition-all duration-300";"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                <div className="text-xl font-bold text-white mb-4">{service.price}</div>
                <a
                  href={service.path},
  }
                  className="className="inline-flex items-center w-full justify-center px-4 py-2 bg-zion-slate-light/20 text-zion-slate-light font-medium rounded-lg,
  hove: r:bg-zion-slate-light/30 transition-all duration-200";"
                >
                  View Details
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our AI services can drive your business forward
            </p>
            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="text-zion-slate-light">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <a
                href="htt,
  p: s://ziontechgroup.com/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-600,
  hove: r:to-purple-700 transition-all duration-200";"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="htt,
  p: s://ziontechgroup.com"
                className="className="inline-flex items-center px-8 py-4 border-2 border-zion-slate-light text-zion-slate-light font-semibold rounded-lg,
  hove: r:bg-zion-slate-light hove,
  r:text-zion-slate-dark transition-all duration-200";"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default InnovativeServicesOverview2025