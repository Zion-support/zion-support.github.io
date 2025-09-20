import React from "react"
import { motion } from "framer-motion"
import {
  Brain
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  Star,
  Users,
  Globe
  Lock
  Cpu
  Database
  Network
  BarChart3
  ArrowRight
  Sparkles
  Atom
  Workflow
  Eye
  Target
  Rocket
} from "lucide-react"
import { SEO } from "../../components/SEO"
export default function AIBlockchainIntegration() {
  const features = [
  {
  ic,
  o: n: Brain,tit,
  l: e: "AI-Powered Smart Contracts",descripti,
  o: n: "Intelligent contracts that automatically execute based on AI analysis and market conditions"
},
  {
  ic,
  o: n: Shield,tit,
  l: e: "Enhanced Security",descripti,
  o: n: "Multi-layered security with AI threat detection and blockchain immutability"
},
  {
  ic,
  o: n: Zap,tit,
  l: e: "Real-time Processing",descripti,
  o: n: "Lightning-fast transaction processing with AI optimization"
},
  {
  ic,
  o: n: TrendingUp,tit,
  l: e: "Predictive Analytics",descripti,
  o: n: "AI-driven insights for blockchain performance and market trends"
},
  ]
  const benefits = [
  "Reduce transaction costs by up to 60%"
    "Improve security with AI threat detection"
    "Automate complex blockchain operations"
    "Real-time fraud prevention and detection"
    "Scalable infrastructure for enterprise needs"
    "Compliance automation for regulatory requirements"
]

  const pricing = [
  {
  na,
  m: e: "Starter",pri,
  c: e: "$2,500"
      peri,
  o: d: "/month",featur,
  e: s: [
  "AI Smart Contract Templates"
        "Basic Security Monitoring"
        "Standard Support"
        "Up to 10,000 transactions/month"
],
  },
  {
  na,
  m: e: "Professional",pri,
  c: e: "$5,000"
      peri,
  o: d: "/month",featur,
  e: s: [
  "Custom AI Smart Contracts"
        "Advanced Security Suite"
        "Priority Support"
        "Up to 100,000 transactions/month"
        "Custom Integrations"
],
  },
  {
  na,
  m: e: "Enterprise",pri,
  c: e: "$12,000"
      peri,
  o: d: "/month",featur,
  e: s: [
  "Full AI Blockchain Platform"
        "Enterprise Security"
        "24/7 Dedicated Support"
        "Unlimited transactions"
        "Custom Development"
        "On-premise Deployment"
],
  },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Blockchain Integration - Zion Tech Group"
        description="Revolutionary AI-powered blockchain integration platform for secure, intelligent, and automated blockchain operations."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
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
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl,
  m: d: text-6xl font-bold text-white">
                AI Blockchain Integration
              </h1>
            </div>
            <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your blockchain operations with AI-powered intelligence
              automated smart contracts, and enhanced security protocols.
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
                className="className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r: shadow-lg,
  hove: r:shadow-cyan-500/25 transition-all duration-300";"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r:bg-cyan-400/10 transition-all duration-300";"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
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
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Blockchain Integration platform combines cutting-edge artificial intelligence 
              with blockchain technology to deliver unprecedented capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50,
  hove: r: border-cyan-400/50 transition-all duration-300 group";"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hove,
  r:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
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
              Why Choose AI Blockchain Integration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your blockchain operations with intelligent automation and enhanced security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, x: -20 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="flex items-start space-x-3";"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */},
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
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border ${
  index === 1 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/25' 
                    : 'border-slate-600/50'
} relative`}
              >
                {index === 1 && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={ sca,
  l: e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
  index === 1
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white,
  hove: r: shadow-lg,
  hove: r:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hove,
  r:bg-cyan-400/10'
}`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
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
              Ready to Transform Your Blockchain Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of intelligent blockchain technology with AI-powered automation and security.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <motion.button
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r: shadow-lg,
  hove: r:shadow-cyan-500/25 transition-all duration-300";"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg,
  hove: r: bg-cyan-400/10 transition-all duration-300";"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}