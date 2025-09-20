import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Rocket
  Zap
  Shield
  Users
  TrendingUp
  Globe
  CheckCircle
  Star
  ArrowRight
  Cpu
  Database
  Cloud
  Target
  Award
  Lightbulb
  Crown
  Sparkles
  ChevronRight
  Clock
  Check
  BarChart3
  Lock
  Eye
  Heart
} from "lucide-react"
const DigitalTransformation = () () => {
  const [selectedPhase, setSelectedPhase] = useState(0)

  const transformationServices = [
  {
  tit,
  l: e: "Strategy & Planning",descripti,
  o: n: "Comprehensive digital transformation roadmap aligned with business objectives and market opportunities.",ic,
  o: n: Rocket,featur,
  e: s: ["Digital Maturity Assessment", "Technology Roadmap", "Change Management Strategy", "ROI Analysis"]
      col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  tit,
  l: e: "Process Automation",descripti,
  o: n: "Intelligent automation solutions that streamline operations and eliminate manual workflows.",ic,
  o: n: Zap,featur,
  e: s: ["Workflow Automation", "RPA Implementation", "Process Optimization", "Performance Monitoring"]
      col,
  o: r: "from-blue-500 to-cyan-500"
},
  {
  tit,
  l: e: "Technology Modernization",descripti,
  o: n: "Legacy system modernization and cloud-native architecture implementation.",ic,
  o: n: Cpu,featur,
  e: s: ["Legacy Migration", "Cloud Architecture", "API Development", "Microservices"]
      col,
  o: r: "from-green-500 to-emerald-500"
},
  {
  tit,
  l: e: "Data & Analytics",descripti,
  o: n: "Data-driven insights and business intelligence solutions for informed decision-making.",ic,
  o: n: Database,featur,
  e: s: ["Data Strategy", "Business Intelligence", "Predictive Analytics", "Data Governance"]
      col,
  o: r: "from-orange-500 to-red-500"
},
  {
  tit,
  l: e: "Customer Experience",descripti,
  o: n: "Omnichannel customer experience optimization and digital touchpoint enhancement.",ic,
  o: n: Users,featur,
  e: s: ["CX Strategy", "Digital Channels", "Personalization", "Customer Journey Mapping"]
      col,
  o: r: "from-indigo-500 to-purple-500"
},
  {
  tit,
  l: e: "Security & Compliance",descripti,
  o: n: "Enterprise-grade security and regulatory compliance for digital transformation initiatives.",ic,
  o: n: Shield,featur,
  e: s: ["Security Architecture", "Compliance Frameworks", "Risk Management", "Security Audits"]
      col,
  o: r: "from-yellow-500 to-orange-500"
},
  ]
  const transformationPhases = [
  {
  pha,
  s: e: "01",tit,
  l: e: "Discovery & Assessment",descripti,
  o: n: "Evaluate current state, identify opportunities, and assess digital maturity"
      durati,
  o: n: "2-4 weeks",activiti,
  e: s: [
  "Current state analysis"
        "Digital maturity assessment"
        "Stakeholder interviews"
        "Technology audit"
        "Gap analysis"
],
  },
  {
  pha,
  s: e: "02",tit,
  l: e: "Strategy Development",descripti,
  o: n: "Create comprehensive digital transformation roadmap and business case",durati,
  o: n: "4-6 weeks",activiti,
  e: s: [
  "Digital strategy formulation"
        "Technology roadmap creation"
        "Change management planning"
        "ROI analysis and business case"
        "Risk assessment"
],
  },
  {
  pha,
  s: e: "03",tit,
  l: e: "Pilot & Validation",descripti,
  o: n: "Implement proof-of-concept and validate approach with stakeholders",durati,
  o: n: "6-8 weeks",activiti,
  e: s: [
  "Proof-of-concept development"
        "Pilot implementation"
        "Stakeholder validation"
        "Performance measurement"
        "Feedback collection"
],
  },
  {
  pha,
  s: e: "04",tit,
  l: e: "Full Implementation",descripti,
  o: n: "Execute transformation plan with phased rollout and continuous optimization",durati,
  o: n: "6-18 months",activiti,
  e: s: [
  "Phased rollout execution"
        "Change management implementation"
        "Performance monitoring"
        "Continuous optimization"
        "Training and support"
],
  },
  ]

  const testimonials = [
  {
  conte,
  n: t: "Zion's digital transformation approach was game-changing. They didn't just implement technology - they transformed our entire business model.",na,
  m: e: "Carlos Rodriguez",ro,
  l: e: "CEO, InnovateCorp"
      rati,
  n: g: 5
},
  {
  conte,
  n: t: "The process automation they implemented saved us 40 hours per week and improved our customer satisfaction scores significantly.",na,
  m: e: "Lisa Chang",ro,
  l: e: "COO, TechFlow Solutions"
      rati,
  n: g: 5
},
  {
  conte,
  n: t: "Working with Zion transformed our company culture. We're now more agile, data-driven, and customer-focused than ever before."
      na,
  m: e: "Marcus Johnson",ro,
  l: e: "CTO, DigitalFirst Inc"
      rati,
  n: g: 5
},
  ]
  const stats = [
  { numb,
  e: r: "85%", lab,
  e: l: "Average efficiency improvement" },
  },
  { numb,
  e: r: "3.2x", lab,
  e: l: "Faster time to market" },
  },
  { numb,
  e: r: "40%", lab,
  e: l: "Cost reduction achieved" },
  },
  { numb,
  e: r: "92%", lab,
  e: l: "Customer satisfaction increase" },
  },
  ]
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */},
  }
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Rocket className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-6xl,
  m: d:text-7xl font-bold text-white mb-8 leading-tight">
            Digital{' '},
  }
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>
          <p className="text-xl,
  m: d:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business for the digital age with our comprehensive digital transformation services.
            We help organizations modernize, automate, and innovate to stay ahead of the competition.
          </p>

          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg,
  hove: r:scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-cyan/25">
              Start Transformation
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */},
  }
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2,
  m: d:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
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
                className="className="text-center";"
              >
                <div className="text-4xl,
  m: d:text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                <div className="text-zion-slate-light text-sm,
  m: d:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */},
  }
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to modernize your business operations
              enhance customer experiences, and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {transformationServices.map((service, index) => (
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
                className="className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
  <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */},
  }
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Our Transformation Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation
              with measurable outcomes and sustainable change.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-6">
              {transformationPhases.map((phase, index) => (
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
                  className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300 cursor-pointer ${
  selectedPhase === index ? 'border-zion-cyan' : 'border-zion-cyan/20'
}`}
                  onClick={onClick={() => setSelectedPhase(index)},
  },
  }
                >
                  {/* Phase Number */},
  }
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {phase.phase},
  }
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{phase.description}</p>

                    <div className="flex items-center gap-2 text-zion-cyan text-sm mb-4">
                      <Clock className="w-4 h-4" />
                      {phase.duration},
  }
                    </div>

                    {/* Activities */},
  },
  {selectedPhase === index && (
  <motion.div
                        initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                        animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                        transition={ durati,
  o: n: 0.3 },
  }
                        className="className="space-y-2";"
                      >
                        <div className="text-sm font-medium text-zion-slate-light mb-2">Key,
  Activitie: s:</div>
                        {phase.activities.map((activity, activityIndex) => (
  <div key={activityIndex} className="flex items-center gap-2 text-zion-slate-light text-xs">
                            <Check className="w-3 h-3 text-zion-cyan" />
                            {activity},
  }
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */},
  }
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Hear from organizations that have transformed their business with our digital transformation services.
            </p>
          </div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
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
                className="className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6,
  hove: r:border-zion-cyan/40 transition-all duration-300";"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
  <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                  ))}
                </div>

                <p className="text-zion-slate-light mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how digital transformation can revolutionize your operations
            enhance customer experiences, and drive sustainable growth.
          </p>

          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg,
  hove: r:scale-105 transition-all duration-300 shadow-2xl,
  hove: r:shadow-zion-cyan/25">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
export default DigitalTransformation