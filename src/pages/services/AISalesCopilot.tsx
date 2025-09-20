import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../../components/SEO"
import {
  Users
  TrendingUp,
  Target,
  Zap,
  MessageCircle,
  BarChart3,
  Clock,
  Award,
  Star
  Globe
  Cpu
  Database
  Search
  Filter
  Download
  Share2
  Phone
  Mail
  Calendar
  CheckCircle
  Shield
  FileText
} from "lucide-react"
const AISalesCopilot = () () => {
  const features = [
  {
  ic,
  o: n: Users,tit,
  l: e: "Lead Scoring & Qualification",descripti,
  o: n: "AI-powered lead analysis and prioritization to focus on high-value prospects."
},
  {
  ic,
  o: n: MessageCircle,tit,
  l: e: "Intelligent Conversation AI",descripti,
  o: n: "Natural language processing for personalized customer interactions and support."
},
  {
  ic,
  o: n: TrendingUp,tit,
  l: e: "Sales Forecasting",descripti,
  o: n: "Predictive analytics for accurate revenue forecasting and pipeline management."
},
  {
  ic,
  o: n: Target,tit,
  l: e: "Opportunity Management",descripti,
  o: n: "Smart tracking and optimization of sales opportunities throughout the funnel."
},
  {
  ic,
  o: n: Zap,tit,
  l: e: "Automated Follow-ups",descripti,
  o: n: "Intelligent scheduling and automated follow-up sequences for better conversion."
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: "Performance Analytics",descripti,
  o: n: "Comprehensive insights into sales performance, trends, and optimization opportunities."
},
  ]

  const benefits = [
  "Increase sales revenue by 25-40% with AI-powered insights"
    "Reduce sales cycle time by 30-50% through automation"
    "Improve lead conversion rates by 35-60%"
    "Enhance customer engagement and satisfaction by 45%"
    "Reduce manual sales tasks by 70%"
    "Optimize pricing strategies with AI-driven recommendations"
]

  const salesProcess = [
  {
  sta,
  g: e: "Lead Generation",descripti,
  o: n: "AI-powered prospecting and lead identification",ic,
  o: n: Search
},
  {
  sta,
  g: e: "Qualification",descripti,
  o: n: "Intelligent lead scoring and prioritization",ic,
  o: n: Target
},
  {
  sta,
  g: e: "Engagement",descripti,
  o: n: "Personalized communication and relationship building",ic,
  o: n: MessageCircle
},
  {
  sta,
  g: e: "Proposal",descripti,
  o: n: "AI-generated proposals and pricing optimization",ic,
  o: n: FileText
},
  {
  sta,
  g: e: "Closing",descripti,
  o: n: "Smart negotiation support and deal acceleration",ic,
  o: n: CheckCircle
},
  {
  sta,
  g: e: "Retention",descripti,
  o: n: "Customer success and expansion opportunities",ic,
  o: n: Users
},
  ]
  const useCases = [
  {
  indust,
  r: y: "B2B Software",descripti,
  o: n: "Enterprise sales automation, lead qualification, and customer success management"
},
  {
  indust,
  r: y: "Financial Services",descripti,
  o: n: "Investment advisory, loan processing, and financial product sales optimization"
},
  {
  indust,
  r: y: "Healthcare",descripti,
  o: n: "Medical device sales, pharmaceutical marketing, and healthcare service optimization"
},
  {
  indust,
  r: y: "Manufacturing",descripti,
  o: n: "Industrial equipment sales, supply chain optimization, and B2B relationship management"
},
  {
  indust,
  r: y: "Real Estate",descripti,
  o: n: "Property sales automation, lead management, and client relationship optimization"
},
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Sales Copilot - Zion Tech Group"
        description="Transform your sales process with AI-powered automation, lead optimization, and intelligent sales insights. Boost revenue and efficiency."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20,
  l: g: py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-400/30 mb-6">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI Sales Copilot</span>
            </div>
            
            <h1 className="text-4xl,
  l: g:text-6xl font-bold text-white mb-6">
              Supercharge Your Sales with
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {" "}AI-Powered Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your sales process with intelligent automation, predictive analytics, and 
              AI-driven insights that help your team close more deals and grow revenue faster.
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
                className="className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg,
  hove: r: from-blue-600,
  hove: r:to-indigo-600 transition-all duration-300 shadow-lg,
  hove: r:shadow-blue-500/25";"
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
                className="className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg,
  hove: r:bg-blue-400/10 transition-all duration-300";"
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
              Intelligent Sales Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Sales Copilot combines cutting-edge artificial intelligence with proven sales 
              methodologies to deliver unprecedented results and efficiency.
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
  hove: r: border-blue-400/30 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
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
              Measurable Sales Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real results with our AI Sales Copilot that delivers quantifiable improvements 
              across all aspects of your sales operations.
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
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-8 rounded-xl border border-blue-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Industry-leading AI sales algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enterprise-grade security & privacy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Global sales methodology support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 sales support & training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Proven sales transformation track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Process Section */},
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
  l: g:text-4xl font-bold text-white mb-4">
              End-to-End Sales Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Sales Copilot optimizes every stage of your sales funnel, from initial 
              lead generation to customer retention and expansion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
            {salesProcess.map((stage, index) => (
  <motion.div
                key={stage.stage},
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
  hove: r:border-blue-400/30 transition-all duration-300";"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
                    <stage.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{stage.stage}</h3>
                </div>
                <p className="text-gray-300 text-sm">{stage.description}</p>
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
              Our AI Sales Copilot is designed to work across industries, providing tailored 
              sales optimization solutions for your specific business needs.
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
  hove: r:border-blue-400/30 transition-all duration-300";"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-400" />
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
            className="className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 p-12 rounded-2xl border border-blue-400/20 text-center";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-6">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of sales teams that have already revolutionized their operations 
              with our AI-powered sales copilot.
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
                className="className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg,
  hove: r: from-blue-600,
  hove: r:to-indigo-600 transition-all duration-300 shadow-lg,
  hove: r:shadow-blue-500/25";"
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
                className="className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg,
  hove: r: bg-blue-400/10 transition-all duration-300";"
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
export default AISalesCopilot