import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Shield
  Brain,
  Eye,
  Lock,
  AlertTriangle
  CheckCircle
  ArrowRight
  Star
  Zap
  Users
  Database
  Network
  Cpu
  Server
  Globe
  Target
  TrendingUp
  Activity
  Fingerprint
  Key
  Search
} from "lucide-react"
import { SEO } from "@/components/SEO"
export default function AICybersecurity() {
  const features = [
  {
  ic,
  o: n: Brain,tit,
  l: e: "AI-Powered Threat Detection",descripti,
  o: n: "Advanced machine learning algorithms that identify and respond to threats in real-time"
},
  {
  ic,
  o: n: Shield,tit,
  l: e: "Intelligent Security",descripti,
  o: n: "Automated security responses and proactive threat prevention"
},
  {
  ic,
  o: n: Eye,tit,
  l: e: "Continuous Monitoring",descripti,
  o: n: "24/7 surveillance of your digital infrastructure with AI-driven insights"
},
  {
  ic,
  o: n: Lock,tit,
  l: e: "Zero-Trust Security",descripti,
  o: n: "Comprehensive security framework with AI-enhanced authentication and access control"
},
  ]
  const services = [
  {
  tit,
  l: e: "Threat Intelligence",descripti,
  o: n: "AI-powered analysis of global threat landscapes and predictive security insights",ic,
  o: n: Target,featur,
  e: s: [["Real-time threat feeds", "Predictive analytics", "Global threat monitoring"],
  ],
  },
  {
  tit,
  l: e: "Incident Response",descripti,
  o: n: "Automated incident detection and response with AI-driven decision making",ic,
  o: n: AlertTriangle,featur,
  e: s: [["Instant threat detection", "Automated response", "Incident analysis"],
  ],
  },
  {
  tit,
  l: e: "Vulnerability Assessment",descripti,
  o: n: "Continuous scanning and AI-powered vulnerability identification and remediation",ic,
  o: n: Search,featur,
  e: s: [["Automated scanning", "Risk prioritization", "Remediation guidance"],
  ],
  },
  {
  tit,
  l: e: "Security Analytics",descripti,
  o: n: "Advanced analytics and reporting for comprehensive security insights",ic,
  o: n: TrendingUp,featur,
  e: s: [["Security dashboards", "Compliance reporting", "Performance metrics"],
  ],
  },
  ]

  const technologies = [
  "Machine Learning Algorithms"
    "Behavioral Analysis"
    "Threat Intelligence Platforms"
    "Security Information and Event Management (SIEM)"
    "Endpoint Detection and Response (EDR)"
    "Network Traffic Analysis"
    "Cloud Security Posture Management"
    "Identity and Access Management (IAM)"
]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AI Cybersecurity Services - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions for comprehensive threat detection, prevention, and response. Protect your business with intelligent security."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-full text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Security
            </div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
              <span className="block bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Protect your business with cutting-edge AI-powered cybersecurity that adapts, learns, and evolves 
              to counter the latest threats. Our intelligent security systems provide comprehensive protection.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg,
  hove: r:from-red-400,
  hove: r:to-orange-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-red-500/20";"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="className="inline-flex items-center px-8 py-4 border border-red-400/30 text-red-400 font-semibold rounded-lg hove,
  r:bg-red-400/10 transition-all duration-200";"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Cybersecurity Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI-powered cybersecurity platform combines machine learning with advanced security protocols 
              to provide comprehensive protection for your digital assets.
            </p>
          </motion.div>
          
          <div className="grid,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
  <motion.div
                key={feature.title},
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
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-red-400/30 transition-all duration-200 group";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hov,
  e: r:from-red-400/40 group-hove,
  r:to-orange-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */},
  }
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From threat detection to incident response, our AI cybersecurity services cover every aspect 
              of your security needs.
            </p>
          </motion.div>
          
          <div className="grid,
  m: d:grid-cols-2 gap-8">
            {services.map((service, index) => (
  <motion.div
                key={service.title},
  }
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8,
  hove: r:border-red-400/30 transition-all duration-200";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {feature},
  }
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */},
  }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Security Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to provide the most advanced cybersecurity protection available.
            </p>
          </motion.div>
          
          <div className="grid,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
  <motion.div
                key={tech},
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
                className="className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg,
  hove: r:border-red-400/30 transition-all duration-200";"
              >
                <Shield className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Protect your business with AI-powered cybersecurity today.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg,
  hove: r:from-red-400,
  hove: r:to-orange-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-red-500/20";"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="className="inline-flex items-center px-8 py-4 border border-red-400/30 text-red-400 font-semibold rounded-lg hove,
  r:bg-red-400/10 transition-all duration-200";"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}