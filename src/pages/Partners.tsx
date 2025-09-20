import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import {
  Handshake
  Users,
  Star,
  ArrowRight
  Building
  Globe
  Award
  TrendingUp
  CheckCircle
  Zap
  Brain
  Cloud
  Shield
  Database
  Network
  Rocket
  Heart
  Scale
  Leaf
  Lock
  Cpu
  Server
  Code
  Target
  BarChart3
  Eye
  Leaf as LeafIcon
  Building2
  Users2
  Award as AwardIcon
  TrendingUp as TrendingUpIcon
} from "lucide-react"
import { Link } from "react-router-dom"
export default function Partners() {
  const partnershipTypes = [
  {
  tit,
  l: e: 'Technology Partners',descripti,
  o: n: 'Integrate with leading technology platforms and tools',ic,
  o: n: Cpu,col,
  o: r: 'from-blue-500 to-cyan-500',benefi,
  t: s: [
  'Access to cutting-edge technologiesJoint go-to-market strategies'
        'Technical integration supportCo-marketing opportunities'
]
      example,
  s: [['Microsoft AzureAWS', 'Google CloudSalesforce'],
  ],
  },
  {
  tit,
  l: e: 'Solution Partners',descripti,
  o: n: 'Collaborate on comprehensive business solutions',ic,
  o: n: Target,col,
  o: r: 'from-green-500 to-emerald-500',benefi,
  t: s: [
  'Joint solution developmentShared revenue opportunities'
        'Market expansion supportTraining and certification'
]
      example,
  s: [['System IntegratorsConsulting Firms', 'VARsMSPs'],
  ],
  },
  {
  tit,
  l: e: 'Channel Partners',descripti,
  o: n: 'Resell and distribute our solutions',ic,
  o: n: Building,col,
  o: r: 'from-purple-500 to-pink-500',benefi,
  t: s: [
  'Competitive pricing and marginsSales and technical training'
        'Marketing materials and supportDedicated partner success manager'
]
      example,
  s: [['ResellersDistributors', 'AgentsBrokers'],
  ],
  },
  {
  tit,
  l: e: 'Strategic Partners',descripti,
  o: n: 'Long-term strategic alliances and joint ventures',ic,
  o: n: Star,col,
  o: r: 'from-orange-500 to-red-500',benefi,
  t: s: [
  'Exclusive partnership agreementsJoint investment opportunities'
        'Shared intellectual propertyBoard-level collaboration'
]
      example,
  s: [['Research InstitutionsUniversities', 'GovernmentIndustry Leaders'],
  ],
  },
  ]

  const currentPartners = [
  {
  na,
  m: e: 'Microsoft',lo,
  g: o: '/partners/microsoft.svg',ty,
  p: e: 'Technology Partner',descripti,
  o: n: 'Strategic partnership for Azure cloud solutions and enterprise software integration',ye,
  a: r: '2020',achievemen,
  t: s: [['Azure Gold PartnerMicrosoft 365 Expert', 'Dynamics 365 Partner'],
  ],
  },
  {
  na,
  m: e: 'AWS',lo,
  g: o: '/partners/aws.svg',ty,
  p: e: 'Technology Partner',descripti,
  o: n: 'Advanced consulting partner specializing in cloud migration and optimization',ye,
  a: r: '2019',achievemen,
  t: s: [['AWS Advanced Consulting PartnerMigration Competency', 'Well-Architected Partner'],
  ],
  },
  {
  na,
  m: e: 'Google Cloud',lo,
  g: o: '/partners/google-cloud.svg',ty,
  p: e: 'Technology Partner',descripti,
  o: n: 'Partner for AI/ML solutions and data analytics on Google Cloud Platform',ye,
  a: r: '2021',achievemen,
  t: s: [['Google Cloud PartnerAI/ML Specialization', 'Data Analytics Partner'],
  ],
  },
  {
  na,
  m: e: 'Salesforce',lo,
  g: o: '/partners/salesforce.svg',ty,
  p: e: 'Solution Partner',descripti,
  o: n: 'Consulting partner for CRM implementation and custom development',ye,
  a: r: '2018',achievemen,
  t: s: [['Salesforce Consulting PartnerPlatform Developer', 'Sales Cloud Expert'],
  ],
  },
  {
  na,
  m: e: 'Oracle',lo,
  g: o: '/partners/oracle.svg',ty,
  p: e: 'Technology Partner',descripti,
  o: n: 'Partner for database solutions and enterprise applications',ye,
  a: r: '2020',achievemen,
  t: s: [['Oracle Gold PartnerDatabase Specialization', 'Cloud Infrastructure Partner'],
  ],
  },
  {
  na,
  m: e: 'IBM',lo,
  g: o: '/partners/ibm.svg',ty,
  p: e: 'Strategic Partner',descripti,
  o: n: 'Strategic alliance for AI solutions and enterprise consulting',ye,
  a: r: '2019',achievemen,
  t: s: [['IBM Business PartnerAI Solutions Partner', 'Watson Platform Expert'],
  ],
  },
  ]

  const partnerBenefits = [
  {
  tit,
  l: e: 'Revenue Growth',descripti,
  o: n: 'Access new markets and revenue streams through our partnership network',ic,
  o: n: TrendingUp,col,
  o: r: 'from-green-500 to-emerald-500',metr,
  i: c: '40%'
},
  {
  tit,
  l: e: 'Market Expansion',descripti,
  o: n: 'Enter new geographic regions and industries',ic,
  o: n: Globe,col,
  o: r: 'from-purple-500 to-pink-500',metr,
  i: c: '15+'
},
  {
  tit,
  l: e: 'Technology Access',descripti,
  o: n: 'Leverage cutting-edge AI and cloud solutions',ic,
  o: n: Brain,col,
  o: r: 'from-blue-500 to-cyan-500',metr,
  i: c: '100+'
},
  {
  tit,
  l: e: 'Support & Training',descripti,
  o: n: 'Comprehensive partner enablement programs',ic,
  o: n: Users,col,
  o: r: 'from-orange-500 to-red-500',metr,
  i: c: '24/7'
},
  ]
  const successStories = [
  {
  partn,
  e: r: 'TechCorp Solutions',ty,
  p: e: 'Solution Partner',indust,
  r: y: 'Healthcare',resul,
  t: s: [
  '200% revenue growth in first year15 new enterprise clients'
        '$2M+ in joint revenueMarket leader in healthcare AI'
]
      log,
  o: '🏥',col,
  o: r: 'from-red-500 to-pink-500'
},
  {
  partn,
  e: r: 'CloudFirst Systems',ty,
  p: e: 'Technology Partner',indust,
  r: y: 'Financial Services',resul,
  t: s: [
  '300% increase in cloud adoption50+ successful migrations'
        '99.99% uptime achievedIndustry benchmark for security'
]
      log,
  o: '☁️',col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  partn,
  e: r: 'InnovateLab Research',ty,
  p: e: 'Strategic Partner',indust,
  r: y: 'Research & Development',resul,
  t: s: [
  '5 breakthrough AI algorithms10+ research publications'
        '$5M in research fundingPatent portfolio expansion'
]
      log,
  o: '🔬',col,
  o: r: 'from-purple-500 to-violet-500'
},
  ]
  const partnerPrograms = [
  {
  lev,
  e: l: 'Bronze',requiremen,
  t: s: 'Basic partnership agreement',benefi,
  t: s: [
  'Marketing materials accessBasic training resources'
        'Email supportPartner portal access'
]
      revenu,
  e: '$0 - $50K',col,
  o: r: 'from-amber-500 to-orange-500'
},
  {
  lev,
  e: l: 'Silver',requiremen,
  t: s: '$50K+ annual revenue',benefi,
  t: s: [
  'Everything in BronzeAdvanced training programs'
        'Dedicated partner managerCo-marketing campaigns'
        'Technical support'
]
      revenu,
  e: '$50K - $200K',col,
  o: r: 'from-gray-400 to-gray-500'
},
  {
  lev,
  e: l: 'Gold',requiremen,
  t: s: '$200K+ annual revenue',benefi,
  t: s: [
  'Everything in SilverExclusive territory rights'
        'Custom marketing materialsPriority technical support'
        'Revenue sharing programs'
]
      revenu,
  e: '$200K - $1M',col,
  o: r: 'from-yellow-400 to-amber-500'
},
  {
  lev,
  e: l: 'Platinum',requiremen,
  t: s: '$1M+ annual revenue',benefi,
  t: s: [
  'Everything in GoldStrategic planning sessions'
        'Custom solution developmentExecutive sponsorship'
        'Exclusive market access'
]
      revenu,
  e: '$1M+',col,
  o: r: 'from-cyan-400 to-blue-500'
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our partner ecosystem and grow your business with Zion Tech Group's innovative technology solutions and strategic partnerships."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full">
                <Handshake className="w-16 h-16 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Partner With
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing ecosystem of technology partners, solution providers, and strategic allies. 
              Together, we can deliver innovative solutions that transform businesses and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600,
  hove: r: from-indigo-600,
  hove: r:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-indigo-500/25";"
              >
                Become a Partner
              </Link>
              <Link
                to="/contact"
                className="className="px-8 py-4 border border-indigo-400 text-indigo-400,
  hove: r:bg-indigo-400 hove,
  r:text-white font-semibold rounded-lg transition-all duration-300";"
              >
                Partner Inquiry
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */},
  }
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Partnership Types */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and expertise. 
              We offer multiple partnership types to support different business models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
  <motion.div
                key={type.title},
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
                className="className="p-8 rounded-2xl border border-slate-700/50 bg-slate-800/30,
  hove: r: border-slate-600/50 transition-all duration-300 hove,
  r:scale-105";"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${type.color}`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
  <li key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Examples</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, exampleIndex) => (
  <span
                        key={exampleIndex},
  }
                        className="className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-cyan-400/20";"
                      >
                        {example},
  }
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our partners enjoy significant advantages that help them grow their business 
              and deliver exceptional value to their customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
  <motion.div
                key={benefit.title},
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
                className="className="text-center";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Partner Program Tiers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our tiered partner program rewards success and provides increasing benefits 
              as your partnership grows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {partnerPrograms.map((program, index) => (
  <motion.div
                key={program.level},
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
                className={`p-6 rounded-xl border transition-all duration-300,
  hove: r: scale-105 ${
  program.level === 'Gold' || program.level === 'Platinum'
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hove,
  r:border-slate-600/50'
}`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <AwardIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{program.level}</h3>
                  <p className="text-cyan-400 font-semibold">{program.revenue}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Requirements</h4>
                  <p className="text-gray-300 text-sm mb-4">{program.requirements}</p>
                  
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
  <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our partners have achieved remarkable success and growth 
              through our partnership programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
  <motion.div
                key={story.partner},
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
                className="className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30,
  hove: r: border-slate-600/50 transition-all duration-300 hove,
  r:scale-105";"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${story.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl`}>
                    {story.logo},
  }
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{story.partner}</h3>
                  <p className="text-cyan-400 font-medium mb-1">{story.type}</p>
                  <p className="text-gray-400 text-sm">{story.industry}</p>
                </div>
                
                <div className="space-y-3">
                  {story.results.map((result, resultIndex) => (
  <div key={resultIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */},
  }
      <section id="become-partner" className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12 border border-slate-700/50">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center max-w-4xl mx-auto";"
            >
              <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-6">
                Ready to Join Our Partner Ecosystem?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your partnership journey today and unlock new growth opportunities 
                with our AI-powered technology solutions.
              </p>
              
              <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Simple Process</h3>
                  <p className="text-gray-400 text-sm">Quick application and onboarding</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</h3>
                  <p className="text-gray-400 text-sm">Personal partner success manager</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Growth Focused</h3>
                  <p className="text-gray-400 text-sm">Proven strategies for success</p>
                </div>
              </div>
              
              <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-cyan-500/25";"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400,
  hove: r:bg-cyan-400 hove,
  r:text-white font-semibold rounded-lg transition-all duration-300";"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
