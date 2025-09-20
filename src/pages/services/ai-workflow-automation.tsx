import React from "react"
import { SEO } from "../../components/SEO"
import { motion } from "framer-motion"
import { Workflow, Zap, Brain, Target, TrendingUp, Shield, Users, Clock, BarChart3, CheckCircle } from "lucide-react"
export default function AIWorkflowAutomation() {
  const features = [
    {
      ic,
  o: n: Workflow,tit,
  l: e: 'Intelligent Process Automation',descripti,
  o: n: 'AI-powered workflow automation that learns and optimizes your business processes automatically.'
    }, {
      ic,
  o: n: Brain,tit,
  l: e: 'Machine Learning Integration',descripti,
  o: n: 'Seamless integration with ML models for predictive workflow optimization and decision-making.'
    }, {
      ic,
  o: n: Target,tit,
  l: e: 'Goal-Oriented Automation',descripti,
  o: n: 'Workflows that adapt and optimize based on your business objectives and KPIs.'
    }, {
      ic,
  o: n: TrendingUp,tit,
  l: e: 'Performance Analytics',descripti,
  o: n: 'Real-time insights into workflow efficiency and optimization opportunities.'
    }, {
      ic,
  o: n: Shield,tit,
  l: e: 'Secure & Compliant',descripti,
  o: n: 'Enterprise-grade security with built-in compliance monitoring and audit trails.'
    }, {
      ic,
  o: n: Users,tit,
  l: e: 'Team Collaboration',descripti,
  o: n: 'Enhanced team productivity with intelligent task routing and workload balancing.'
    }
  ]
  const benefits = [
    'Reduce manual tasks by up to 80%Improve process efficiency by 60%'
    'Cut operational costs by 40%Enhance customer satisfaction'
    'Ensure regulatory complianceScale operations seamlessly'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group"
        description="Transform your business with intelligent AI-powered workflow automation. Reduce manual tasks, improve efficiency, and scale operations seamlessly."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
              <Workflow className="w-4 h-4 mr-2" />
              AI-Powered Automation
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transform your business operations with intelligent, AI-powered workflow automation. 
              Reduce manual tasks, improve efficiency, and scale your operations seamlessly.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/20">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Automation Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI workflow automation platform combines cutting-edge technology with intuitive design 
              to deliver powerful automation capabilities.
            </p>
          </motion.div>

          <div className="grid,
  m: d: grid-cols-2 l,
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
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-cyan-400/30 transition-all duration-200 hove,
  r:scale-105";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid,
  l: g: grid-cols-2 gap-12 items-center">
            <motion.div
              initial={ opacit,
  y: 0, x: -20 }
              whileInView={ opaci,
  t: y: 1, x: 0 }
              transition={ durati,
  o: n: 0.6 }
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Business Operations
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our AI workflow automation delivers measurable results that directly impact your bottom line. 
                From cost reduction to improved customer satisfaction, the benefits are clear and quantifiable.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
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
  o: n: 0.6 }
              className="className="relative";"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate?</h3>
                  <p className="text-slate-300 mb-6">
                    Start your AI workflow automation journey today and see the transformation in action.
                  </p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r: from-cyan-400 hove,
  r:to-blue-500 transition-all duration-200">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            className="className="max-w-3xl mx-auto";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of businesses that have already transformed their operations with AI workflow automation.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-400,
  hove: r:to-blue-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-cyan-500/20">
                Get Started Now
              </button>
              <button className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hove,
  r:bg-cyan-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}