import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../../components/SEO"
import {
  MessageCircle
  Brain,
  Target,
  Zap,
  BarChart3,
  Clock,
  Award,
  Star
  Globe
  Cpu
  Database
  CheckCircle
  Eye
  Users
  FileText
  Shield
  TrendingUp
  Phone
  Mail
  Calendar
  Search
} from "lucide-react"
export default function HelpdeskPlatform() {
  const features = [
  {
  ic,
  o: n: Brain,tit,
  l: e: "AI-Powered Support",descripti,
  o: n: "Intelligent chatbots and virtual assistants for instant customer support."
},
  {
  ic,
  o: n: MessageCircle,tit,
  l: e: "Multi-Channel Support",descripti,
  o: n: "Unified support across email, chat, phone, and social media platforms."
},
  {
  ic,
  o: n: Target,tit,
  l: e: "Smart Ticket Routing",descripti,
  o: n: "AI-driven ticket classification and automatic assignment to best agents."
},
  {
  ic,
  o: n: Zap,tit,
  l: e: "Automated Workflows",descripti,
  o: n: "Intelligent automation for common support scenarios and escalations."
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: "Performance Analytics",descripti,
  o: n: "Comprehensive insights into support metrics and customer satisfaction."
},
  {
  ic,
  o: n: Shield,tit,
  l: e: "Knowledge Management",descripti,
  o: n: "Centralized knowledge base with AI-powered search and suggestions."
},
  ]
  const benefits = [
  "Reduce support response time by 60-80% with AI automation"
    "Improve customer satisfaction scores by 40-60%"
    "Reduce support costs by 30-50% through automation"
    "Increase agent productivity by 50-70%"
    "Provide 24/7 customer support availability"
    "Enhance first-call resolution rates by 35-55%"
]

  const supportChannels = [
  {
  chann,
  e: l: "Live Chat",descripti,
  o: n: "Real-time chat support with AI-powered instant responses",ic,
  o: n: MessageCircle
},
  {
  chann,
  e: l: "Email Support",descripti,
  o: n: "Intelligent email routing and automated responses",ic,
  o: n: Mail
},
  {
  chann,
  e: l: "Phone Support",descripti,
  o: n: "Call center integration with smart call routing",ic,
  o: n: Phone
},
  {
  chann,
  e: l: "Social Media",descripti,
  o: n: "Multi-platform social media support integration",ic,
  o: n: Users
},
  {
  chann,
  e: l: "Self-Service",descripti,
  o: n: "Knowledge base and FAQ automation",ic,
  o: n: Search
},
  {
  chann,
  e: l: "Mobile Support",descripti,
  o: n: "Mobile-optimized support experience",ic,
  o: n: Globe
},
  ]
  const useCases = [
  {
  indust,
  r: y: "E-commerce",descripti,
  o: n: "Order support, product inquiries, and customer service automation"
},
  {
  indust,
  r: y: "SaaS & Technology",descripti,
  o: n: "Technical support, user onboarding, and feature assistance"
},
  {
  indust,
  r: y: "Healthcare",descripti,
  o: n: "Patient support, appointment scheduling, and medical inquiries"
},
  {
  indust,
  r: y: "Financial Services",descripti,
  o: n: "Account support, transaction assistance, and security help"
},
  {
  indust,
  r: y: "Education",descripti,
  o: n: "Student support, course assistance, and technical help"
},
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Helpdesk Platform - Zion Tech Group"
        description="Transform your customer support with AI-powered helpdesk automation, multi-channel support, and intelligent ticket management solutions."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20,
  l: g: py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
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
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-400/30 mb-6">
              <MessageCircle className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-medium">Helpdesk Platform</span>
            </div>
            
            <h1 className="text-4xl,
  l: g:text-6xl font-bold text-white mb-6">
              Revolutionize Customer Support with
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                {" "}AI-Powered Helpdesk
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support operations with intelligent automation, multi-channel 
              support, and AI-powered insights that deliver exceptional customer experiences.
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
                className="className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg,
  hove: r: from-orange-600,
  hove: r:to-red-600 transition-all duration-300 shadow-lg,
  hove: r:shadow-orange-500/25";"
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
                className="className="px-8 py-4 border border-orange-400/30 text-orange-300 font-semibold rounded-lg,
  hove: r:bg-orange-400/10 transition-all duration-300";"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Advanced Helpdesk Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered helpdesk platform combines cutting-edge artificial intelligence 
              with proven support methodologies to deliver exceptional customer service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
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
                className="className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/30,
  hove: r: border-orange-400/30 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-400" />
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
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Measurable Support Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real results with our AI-powered helpdesk solutions that deliver quantifiable 
              improvements across all aspects of your customer support operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
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
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                    className="className="flex items-start space-x-3";"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-xl border border-orange-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Industry-leading AI support algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enterprise-grade security & compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Global support expertise and localization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 platform support and training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Proven customer success track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels Section */},
  }
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Multi-Channel Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our helpdesk platform provides unified support across all customer touchpoints
              ensuring consistent and efficient service delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {supportChannels.map((channel, index) => (
  <motion.div
                key={channel.channel},
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
                className="className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20,
  hove: r:border-orange-400/30 transition-all duration-300";"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg flex items-center justify-center">
                    <channel.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{channel.channel}</h3>
                </div>
                <p className="text-gray-300 text-sm">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */},
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
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered helpdesk solutions are designed to work across industries, providing 
              tailored support strategies for your specific customer service needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
  <motion.div
                key={useCase.industry},
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
                className="className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20,
  hove: r:border-orange-400/30 transition-all duration-300";"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
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
  o: n: 0.8 },
  }
            className="className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 p-12 rounded-2xl border border-orange-400/20 text-center";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-6">
              Ready to Transform Your Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their customer support 
              with our AI-powered helpdesk solutions.
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
                className="className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg,
  hove: r: from-orange-600,
  hove: r:to-red-600 transition-all duration-300 shadow-lg,
  hove: r:shadow-orange-500/25";"
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
                className="className="px-8 py-4 border border-orange-400/30 text-orange-300 font-semibold rounded-lg,
  hove: r: bg-orange-400/10 transition-all duration-300";"
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