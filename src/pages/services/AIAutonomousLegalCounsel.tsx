import React from "react"
import { motion } from "framer-motion"
import { 
  Scale
  Brain, 
  Target, 
  BarChart3, 
  CheckCircle
  ArrowRight
  Star
  Globe
  Cpu
  Database
  ChartBar
  PieChart
  Activity
  Eye
  Clock
  Award
  Users
  Share2
  TrendingUp
  Zap
  Shield
  BookOpen
} from "lucide-react"
const,
  AIAutonomousLegalCounse: l: React.FC = () () => {
  const features = [
    {
      ico,
  n: Brain,tit,
  l: e: 'AI-Powered Legal Counsel',descripti,
  o: n: 'Advanced machine learning for autonomous legal advice and consultation'
    }, {
      ic,
  o: n: Scale,tit,
  l: e: 'Legal Analysis',descripti,
  o: n: 'Intelligent legal document analysis and case evaluation with AI-driven insights'
    }, {
      ic,
  o: n: Target,tit,
  l: e: 'Contract Review',descripti,
  o: n: 'AI-powered contract review and risk assessment'
    }, {
      ic,
  o: n: BarChart3,tit,
  l: e: 'Legal Analytics',descripti,
  o: n: 'Real-time analytics and insights into legal performance and trends'
    }, {
      ic,
  o: n: BookOpen,tit,
  l: e: 'Legal Research',descripti,
  o: n: 'AI-driven legal research and precedent analysis'
    }, {
      ic,
  o: n: TrendingUp,tit,
  l: e: 'Compliance Monitoring',descripti,
  o: n: 'Continuous monitoring and optimization of legal compliance'
    }
  ]
  const benefits = [
    'Improve legal efficiency by 70%Reduce legal costs by 60%'
    'Enhance legal accuracy by 85%Automate legal processes'
    '24/7 autonomous operationReal-time legal insights'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
              <Scale className="w-4 h-4 mr-2" />
              AI-Powered Autonomous Legal Counsel
            </div>
            
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Transform Your Legal Operations with
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your legal operations with our AI-powered autonomous platform. 
              Get instant legal advice, review contracts, and ensure compliance with intelligent automation.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold,
  hove: r:from-amber-600,
  hove: r:to-orange-600 transition-all duration-300,
  transform: hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-amber-500/30 text-amber-400 rounded-lg font-semibold hove,
  r:bg-amber-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Advanced Legal Counsel Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive legal capabilities for modern businesses
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6,
  hove: r:border-amber-500/30 transition-all duration-300";"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Why Choose AI Autonomous Legal Counsel?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in legal efficiency and compliance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            <motion.div
              initial={ opacit,
  y: 0, x: -20 }
              whileInView={ opaci,
  t: y: 1, x: 0 }
              transition={ durati,
  o: n: 0.8 }
              viewport={ on,
  c: e: true }
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={ opaci,
  t: y: 0, x: 20 }
              whileInView={ opaci,
  t: y: 1, x: 0 }
              transition={ durati,
  o: n: 0.8 }
              viewport={ on,
  c: e: true }
              className="className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-8";"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Transform Legal Operations?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of businesses already using AI to enhance their legal operations.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold,
  hove: r: from-amber-600 hove,
  r:to-orange-600 transition-all duration-300">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Legal Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey to AI-powered legal counsel with our comprehensive platform.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold,
  hove: r:from-amber-600,
  hove: r:to-orange-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-amber-500/30 text-amber-400 rounded-lg font-semibold hove,
  r:bg-amber-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default AIAutonomousLegalCounsel