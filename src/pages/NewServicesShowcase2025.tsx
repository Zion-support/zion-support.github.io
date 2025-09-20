import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Brain
  Cpu,
  Shield,
  Cloud,
  Database,
  Network,
  Zap,
  Globe,
  Rocket,
  Target
  CheckCircle
  Star
  Phone
  Mail
  ExternalLink
  ArrowRight
} from "lucide-react"
import SEO from "@/components/SEO"
export default function NewServicesShowcase2025() {
  const serviceCategories = [
  {
  tit,
  l: e: "AI-Powered Micro SAAS Services",ic,
  o: n: Brain,col,
  o: r: "from-purple-600 to-blue-600",servic,
  e: s: [
  {
  nam,
  e: "AI Autonomous Code Reviewer",descripti,
  o: n: "Advanced AI-powered code review system with security analysis and optimization",pri,
  c: e: "$2,999"
          featur,
  e: s: ["Multi-language Support", "Security Analysis", "Code Quality", "Automation"]
          aiSco,
  r: e: 98,r,
  o: i: "400% within 4 months"
},
  {
  na,
  m: e: "AI-Powered SEO Optimization",descripti,
  o: n: "Intelligent SEO platform with machine learning and content strategy",pri,
  c: e: "$1,999"
          featur,
  e: s: ["Content Optimization", "Ranking Tracking", "Keyword Research", "Analytics"]
          aiSco,
  r: e: 95,r,
  o: i: "350% within 6 months"
},
  {
  na,
  m: e: "AI Customer Support Automation",descripti,
  o: n: "Intelligent support automation with chatbots and sentiment analysis",pri,
  c: e: "$2,499"
          featur,
  e: s: ["AI Chatbot", "Ticket Management", "Sentiment Analysis", "24/7 Support"]
          aiSco,
  r: e: 94,r,
  o: i: "300% within 5 months"
},
  ],
  },
  {
  tit,
  l: e: "Emerging Technology Services 2030",ic,
  o: n: Rocket,col,
  o: r: "from-orange-500 to-red-600",servic,
  e: s: [
  {
  nam,
  e: "Quantum-AI Hybrid Computing",descripti,
  o: n: "Revolutionary platform combining quantum computing with AI",pri,
  c: e: "$15,999"
          featur,
  e: s: ["Quantum Computing", "AI Integration", "Optimization", "Simulation"]
          aiSco,
  r: e: 99,r,
  o: i: "800% within 18 months"
},
  {
  na,
  m: e: "Neuromorphic Computing Platform",descripti,
  o: n: "Brain-inspired AI platform with ultra-efficient processing",pri,
  c: e: "$12,999"
          featur,
  e: s: ["Brain-Inspired AI", "Neural Networks", "Real-time Learning", "Low Power"]
          aiSco,
  r: e: 98,r,
  o: i: "600% within 15 months"
},
  {
  na,
  m: e: "Edge AI Computing Platform",descripti,
  o: n: "Distributed intelligence platform for IoT and edge networks",pri,
  c: e: "$8,999"
          featur,
  e: s: ["Edge Computing", "Distributed AI", "Real-time Processing", "Privacy"]
          aiSco,
  r: e: 96,r,
  o: i: "500% within 12 months"
},
  ],
  },
  {
  tit,
  l: e: "IT Infrastructure Services",ic,
  o: n: Cpu,col,
  o: r: "from-green-600 to-teal-600",servic,
  e: s: [
  {
  nam,
  e: "Cloud Migration Automation",descripti,
  o: n: "Comprehensive cloud migration with zero-downtime deployment",pri,
  c: e: "$15,999"
          featur,
  e: s: ["AWS/Azure/GCP", "Zero Downtime", "Cost Optimization", "Monitoring"]
          aiSco,
  r: e: 94,r,
  o: i: "300% within 12 months"
},
  {
  na,
  m: e: "DevOps Automation Platform",descripti,
  o: n: "Advanced CI/CD platform with intelligent pipeline management",pri,
  c: e: "$8,999"
          featur,
  e: s: ["CI/CD", "Automation", "Testing", "Deployment"]
          aiSco,
  r: e: 93,r,
  o: i: "400% within 8 months"
},
  {
  na,
  m: e: "Cybersecurity Intelligence",descripti,
  o: n: "Advanced threat detection and incident response platform",pri,
  c: e: "$12,999"
          featur,
  e: s: ["Threat Detection", "Incident Response", "Security Monitoring", "AI Security"]
          aiSco,
  r: e: 96,r,
  o: i: "450% within 10 months"
},
  ],
  },
  ]
  const const contactInfo = {
  = {
    pho,
  n: e: "+1 302 464 0950",ema,
  i: l: "kleber@ziontechgroup.com",websi,
  t: e: "http,
  s://ziontechgroup.com",addre,
  s: s: "364 E Main St STE 1008 Middletown DE 19709"
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
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
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Rocket className="w-4 h-4 mr-2" /> 2025 Innovation Showcase
            </div>
            <h1 className="text-5xl,
  m: d:text-7xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI & Tech Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our cutting-edge portfolio of AI-powered micro SAAS services, emerging technology solutions, and enterprise IT infrastructure platforms designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`t,
  e: l:${contactInfo.phone}`}
                className="className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg,
  hove: r:bg-blue-700 transition-colors";"
              >
                <Phone className="w-4 h-4 mr-2" />
                {contactInfo.phone},
  }
              </a>
              <a
                href={`mail,
  t: o:${contactInfo.email}`}
                className="className="inline-flex items-center px-6 py-3 border border-white/20 text-white rounded-lg,
  hove: r:bg-white/10 transition-colors";"
              >
                <Mail className="w-4 h-4 mr-2" />
                {contactInfo.email},
  }
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */},
  }
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
  <motion.div
              key={category.title},
  }
              initial={ opaci,
  t: y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: categoryIndex * 0.2 },
  }
              viewport={ on,
  c: e: true },
  }
            >
              <div className="text-center mb-16">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Revolutionary solutions that leverage cutting-edge technology to solve complex business challenges
                </p>
              </div>

              <div className="grid,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
  <motion.div
                    key={service.name},
  }
                    initial={ opaci,
  t: y: 0, sca,
  l: e: 0.9 },
  }
                    whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
                    transition={ durati,
  o: n: 0.6, del,
  a: y: serviceIndex * 0.1 },
  }
                    viewport={ on,
  c: e: true },
  }
                    className="className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6,
  hove: r: bg-white/10 transition-all duration-300 group";"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">AI Scor,
  e: {service.aiScore}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-400">4.8+</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hov,
  e: r:text-blue-400 transition-colors">
                      {service.name},
  }
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      {service.description},
  }
                    </p>

                    <div className="mb-4">
                      <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key,
  Feature: s:</div>
                      <div className="space-y-1">
                        {service.features.map((feature, index) => (
  <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature},
  }
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-1">Expected,
  RO: I:</div>
                      <div className="text-lg font-semibold text-green-400">{service.roi}</div>
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={`t,
  e: l:${contactInfo.phone}`}
                        className="className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg,
  hove: r:bg-blue-700 transition-colors text-sm";"
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Contact
                      </a>
                      <a
                        href={contactInfo.website},
  }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="className="inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white rounded-lg,
  hove: r:bg-white/10 transition-colors";"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Market Analysis Section */},
  }
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
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
            <h2 className="text-4xl font-bold text-white mb-4">Market Analysis & ROI</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our services deliver exceptional value with proven ROI and competitive market positioning
            </p>
          </motion.div>

          <div className="grid,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-8">
            {[
  { labe,
  l: "Average ROI", val,
  u: e: "425%", descripti,
  o: n: "Within 6-18 months" },
  },
  { lab,
  e: l: "Market Size", val,
  u: e: "$2.1T", descripti,
  o: n: "By 2027" },
  },
  { lab,
  e: l: "Growth Rate", val,
  u: e: "23.4%", descripti,
  o: n: "CAGR" },
  },
  { lab,
  e: l: "AI Capability", val,
  u: e: "95+", descripti,
  o: n: "Average AI Score" },
  },
  ].map((stat, index) => (
  <motion.div
                key={stat.label},
  }
                initial={ opaci,
  t: y: 0, sca,
  l: e: 0.9 },
  }
                whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 },
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
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-blue-400 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */},
  }
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
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
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get in touch with our team of experts to discuss how our innovative services can drive your business forward
            </p>

            <div className="grid,
  m: d:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">Call Us</div>
                <div className="text-gray-400">{contactInfo.phone}</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">Email Us</div>
                <div className="text-gray-400">{contactInfo.email}</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">Visit Us</div>
                <div className="text-gray-400">{contactInfo.website}</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`t,
  e: l:${contactInfo.phone}`}
                className="className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg,
  hove: r: bg-blue-700 transition-colors text-lg font-semibold";"
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href={`mailt,
  o:${contactInfo.email}`}
                className="className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-lg,
  hove: r: bg-white/10 transition-colors text-lg font-semibold";"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Demo
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>Addres,
  s: {contactInfo.address}</p>
              <p className="mt-2">Available 24/7 for global support and consultation</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}