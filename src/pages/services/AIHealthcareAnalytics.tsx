import React from "react"
import { motion } from "framer-motion"
import {
  Activity
  Shield,
  Zap,
  CheckCircle,
  BarChart3,
  Sparkles,
  ArrowRight,
  Brain
  Cpu
  Database
  Globe
  Rocket
  Target
  TrendingUp
  Layers
  Heart
  Stethoscope
  Pill
  Microscope
  Search
  Clock
  DollarSign
  Phone
  Mail
  MapPin
  Users
  FileText
  AlertTriangle
  Building
} from "lucide-react"
import { SEO } from "@/components/SEO"
export default function AIHealthcareAnalytics() {
  const features = [
  'Real-time patient data analytics and insightsPredictive disease modeling and risk assessment'
    'Automated medical image analysis and diagnosisPopulation health trend analysis and forecasting'
    'Clinical decision support and treatment recommendationsHealthcare quality metrics and performance tracking'
    'Drug interaction and adverse event predictionPersonalized medicine and treatment optimization'
]

  const benefits = [
  'Improve diagnostic accuracy by 35-45%Reduce healthcare costs by 20-30%'
    'Enhance patient outcomes and satisfactionStreamline clinical workflows and efficiency'
    'Enable proactive and preventive healthcareSupport evidence-based medical decisions'
]
  const useCases = [
  {
  indust,
  r: y: 'Hospitals & Health Systems',descripti,
  o: n: 'Comprehensive healthcare analytics for large medical facilities',ic,
  o: n: Building,applicatio,
  n: s: [['Patient monitoringResource optimization', 'Quality improvementCost management'],
  ],
  },
  {
  indust,
  r: y: 'Primary Care Practices',descripti,
  o: n: 'Data-driven insights for family medicine and general practice',ic,
  o: n: Users,applicatio,
  n: s: [['Preventive careChronic disease management', 'Patient engagementPopulation health'],
  ],
  },
  {
  indust,
  r: y: 'Specialty Clinics',descripti,
  o: n: 'Specialized analytics for cardiology, oncology, and other specialties'
      ic,
  o: n: Stethoscope,applicatio,
  n: s: [['Treatment planningOutcome tracking', 'Research supportClinical trials'],
  ],
  },
  {
  indust,
  r: y: 'Pharmaceutical Companies',descripti,
  o: n: 'Drug development and market analysis insights',ic,
  o: n: Pill,applicatio,
  n: s: [['Clinical researchMarket analysis', 'Safety monitoringEfficacy studies'],
  ],
  },
  ]

  const pricing = [
  {
  pl,
  a: n: 'Practice',pri,
  c: e: '$499',peri,
  o: d: '/month',featur,
  e: s: [
  'Up to 1,000 patientsBasic analytics dashboard'
        'Standard reporting toolsEmail support'
        'HIPAA compliance'
]
      recommend,
  e: d: false
},
  {
  pl,
  a: n: 'Health System',pri,
  c: e: '$1,299'
      peri,
  o: d: '/month',featur,
  e: s: [
  'Up to 10,000 patientsAdvanced analytics platform'
        'Custom dashboardsPriority support'
        'API accessIntegration support'
]
      recommend,
  e: d: true
},
  {
  pl,
  a: n: 'Enterprise',pri,
  c: e: '$2,999'
      peri,
  o: d: '/month',featur,
  e: s: [
  'Unlimited patientsCustom AI models'
        'White-label solutions24/7 dedicated support'
        'On-site trainingCustom development'
]
      recommende,
  d: false
},
  ]
  const healthcareTechnologies = [
  { na,
  m: e: 'Epic', u,
  r: l: 'http,
  s://www.epic.com/', catego,
  r: y: 'EHR System' },
  },
  { na,
  m: e: 'Cerner', u,
  r: l: 'http,
  s://www.cerner.com/', catego,
  r: y: 'Health IT' },
  },
  { na,
  m: e: 'Allscripts', u,
  r: l: 'http,
  s://www.allscripts.com/', catego,
  r: y: 'Practice Management' },
  },
  { na,
  m: e: 'Meditech', u,
  r: l: 'http,
  s://www.meditech.com/', catego,
  r: y: 'Hospital Information' },
  },
  { na,
  m: e: 'Athenahealth', u,
  r: l: 'http,
  s://www.athenahealth.com/', catego,
  r: y: 'Cloud Healthcare' },
  },
  ]
  const complianceStandards = [
  'HIPAA (Health Information Privacy)HITECH (Health Information Technology)'
    'SOC 2 Type II (Security & Availability)ISO 27001 (Information Security)'
    'FDA 21 CFR Part 11 (Electronic Records)GxP (Good Practice Guidelines)'
]

  const analyticsCapabilities = [
  {
  catego,
  r: y: 'Clinical Analytics',featur,
  e: s: [['Patient outcomes analysisTreatment effectiveness', 'Clinical pathway optimizationRisk stratification'],
  ],
  },
  {
  catego,
  r: y: 'Operational Analytics',featur,
  e: s: [['Resource utilizationWorkflow efficiency', 'Capacity planningCost analysis'],
  ],
  },
  {
  catego,
  r: y: 'Financial Analytics',featur,
  e: s: [['Revenue cycle managementClaims analysis', 'Reimbursement optimizationBudget forecasting'],
  ],
  },
  {
  catego,
  r: y: 'Population Health',featur,
  e: s: [['Disease prevalence trackingPreventive care metrics', 'Social determinants analysisCommunity health insights'],
  ],
  },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Transform healthcare delivery with AI-powered analytics, predictive modeling, and clinical decision support. Improve outcomes and reduce costs."
      />

      {/* Hero Section */},
  }
      <section className="relative py-20,
  s: m: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />
        <div className="relative container mx-auto px-4 text-center">
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
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-500/20 rounded-2xl">
                <Activity className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl,
  s: m:text-6xl font-bold tracking-tight mb-6">
              AI Healthcare
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Analytics Platform</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Revolutionize healthcare delivery with AI-powered analytics, predictive modeling, and clinical decision support. 
              Improve patient outcomes, reduce costs, and enable data-driven medicine.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a 
                href="t,
  e: l:+13024640950"
                className="className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg,
  hove: r:from-green-400,
  hove: r:to-blue-500 transition-all duration-300 font-semibold";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mail,
  t: o:kleber@ziontechgroup.com"
                className="className="inline-flex items-center px-6 py-3 border border-green-400/30 text-green-400 rounded-lg hove,
  r:bg-green-400/10 transition-all duration-300";"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m: text-4xl font-bold mb-4">
              Advanced Healthcare Analytics Features
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our AI platform delivers comprehensive healthcare analytics capabilities designed 
              to transform clinical decision-making and operational efficiency.
            </p>
          </div>

          <div className="grid gap-8,
  m: d:grid-cols-2 l,
  g:grid-cols-4">
            {features.map((feature, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6,
  hove: r:border-green-500/50 transition-all duration-300";"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m:text-4xl font-bold mb-4">
              Transform Healthcare Delivery
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Experience measurable improvements in patient care, operational efficiency, and financial performance.
            </p>
          </div>

          <div className="grid gap-8,
  m: d: grid-cols-2 l,
  g:grid-cols-3">
            {benefits.map((benefit, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, x: -20 },
  }
                animate={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/30 backdrop-blur border border-slate-700/30 rounded-xl p-6";"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-slate-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m: text-4xl font-bold mb-4">
              Healthcare Industry Solutions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tailored analytics solutions for various healthcare settings and specialties.
            </p>
          </div>

          <div className="grid gap-8 m,
  d:grid-cols-2">
            {useCases.map((useCase, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-8";"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{useCase.industry}</h3>
                    <p className="text-slate-400 text-sm">{useCase.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
  <div key={appIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {app},
  }
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Capabilities Section */},
  }
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m:text-4xl font-bold mb-4">
              Comprehensive Analytics Capabilities
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Multi-dimensional healthcare analytics covering clinical, operational, financial, and population health domains.
            </p>
          </div>

          <div className="grid gap-8,
  m: d:grid-cols-2">
            {analyticsCapabilities.map((capability, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/30 backdrop-blur border border-slate-700/30 rounded-xl p-6";"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">{capability.category}</h3>
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
  <div key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature},
  }
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m: text-4xl font-bold mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose the plan that best fits your healthcare organization's needs and scale as you grow.
            </p>
          </div>

          <div className="grid gap-8 m,
  d:grid-cols-3 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className={`relative bg-slate-800/50 backdrop-blur border rounded-xl p-8 ${
  plan.recommended 
                    ? 'border-green-500/50 bg-green-500/5' 
                    : 'border-slate-700/50'
}`}
              >
                {plan.recommended && (
  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="t,
  e: l: +13024640950"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
  plan.recommended
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white,
  hove: r:from-green-400,
  hove: r:to-blue-500'
                      : 'bg-slate-700 text-white hove,
  r:bg-slate-600'
}`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration Section */},
  }
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m: text-4xl font-bold mb-4">
              Seamless EHR Integration
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Integrate with your existing healthcare information systems and workflow platforms.
            </p>
          </div>

          <div className="grid gap-6,
  m: d:grid-cols-2 l,
  g:grid-cols-3">
            {healthcareTechnologies.map((tech, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, sca,
  l: e: 0.9 },
  }
                animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/30 backdrop-blur border border-slate-700/30 rounded-xl p-6 text-center,
  hove: r:border-green-500/50 transition-all duration-300";"
              >
                <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{tech.category}</p>
                <a
                  href={tech.url},
  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="className="text-green-400,
  hove: r:text-green-300 text-sm inline-flex items-center";"
                >
                  Visit Website
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl,
  s: m: text-4xl font-bold mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Meet the highest standards of healthcare data security and regulatory compliance.
            </p>
          </div>

          <div className="grid gap-4,
  m: d:grid-cols-2 l,
  g:grid-cols-3 max-w-4xl mx-auto">
            {complianceStandards.map((standard, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, x: -20 },
  }
                animate={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/30 backdrop-blur border border-slate-700/30 rounded-lg p-4 text-center";"
              >
                <Shield className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <span className="text-slate-300 text-sm">{standard}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="max-w-4xl mx-auto";"
          >
            <h2 className="text-3xl,
  s: m: text-4xl font-bold mb-6">
              Ready to Transform Healthcare Analytics?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading healthcare organizations that have already revolutionized 
              their analytics capabilities with AI-powered insights.
            </p>
            
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center mb-8">
              <a 
                href="t,
  e: l:+13024640950"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg,
  hove: r:from-green-400,
  hove: r:to-blue-500 transition-all duration-300 font-semibold text-lg";"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mail,
  t: o:kleber@ziontechgroup.com"
                className="className="inline-flex items-center px-8 py-4 border-2 border-green-400/50 text-green-400 rounded-lg,
  hove: r:bg-green-400/10 transition-all duration-300 font-semibold text-lg";"
              >
                <Mail className="w-6 h-6 mr-2" />
                Schedule Demo
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
              <div className="grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2 text-green-400" />
                  <a href="t,
  e: l:+13024640950" className="hov,
  e: r:text-green-300">+1 302 464 0950</a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2 text-green-400" />
                  <a href="mail,
  t: o:kleber@ziontechgroup.com" className="hove,
  r:text-green-300">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-4 w-4 mr-2 text-green-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center justify-center">
                  <Globe className="h-4 w-4 mr-2 text-green-400" />
                  <a href="htt,
  p: s: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hove,
  r:text-green-300">ziontechgroup.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}