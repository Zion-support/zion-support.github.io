import React from "react"
import { motion } from "framer-motion"
import {
  Workflow
  Zap,
  Brain,
  BarChart3,
  Shield,
  Users,
  Clock,
  TrendingUp
  CheckCircle
  Star
  ArrowRight
  Play
  Pause
  Settings
  Database
  Cloud
  Lock
} from "lucide-react"
const,
  AIWorkflowOrchestrato: r: React.FC = () () => {
  const features = [
  {
  ico,
  n: Brain,tit,
  l: e: 'Intelligent Process Mapping',descripti,
  o: n: 'AI automatically discovers and maps your business processes using natural language processing and workflow analysis.',pri,
  c: e: '$299/month'
},
  {
  ic,
  o: n: Zap,tit,
  l: e: 'Smart Automation Triggers',descripti,
  o: n: 'Automatically trigger workflows based on events, data changes, or time-based conditions with machine learning optimization.'
      pri,
  c: e: '$199/month'
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: 'Performance Analytics',descripti,
  o: n: 'Real-time insights into workflow efficiency, bottlenecks, and optimization opportunities with predictive analytics.'
      pri,
  c: e: '$149/month'
},
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Compliance & Governance',descripti,
  o: n: 'Built-in compliance frameworks, audit trails, and role-based access control for enterprise security.'
      pri,
  c: e: '$399/month'
},
  ]
  const pricingPlans = [
  {
  na,
  m: e: 'Starter',pri,
  c: e: '$99',peri,
  o: d: '/month',descripti,
  o: n: 'Perfect for small teams getting started with workflow automation',featur,
  e: s: [
  'Up to 10 workflowsBasic AI process mapping'
        'Standard integrationsEmail support'
        'Basic analytics'
]
      popula,
  r: false
},
  {
  na,
  m: e: 'Professional',pri,
  c: e: '$299',peri,
  o: d: '/month',descripti,
  o: n: 'Ideal for growing businesses with complex workflow needs',featur,
  e: s: [
  'Up to 50 workflowsAdvanced AI orchestration'
        'Custom integrationsPriority support'
        'Advanced analyticsCompliance features'
]
      popula,
  r: true
},
  {
  na,
  m: e: 'Enterprise',pri,
  c: e: '$799',peri,
  o: d: '/month',descripti,
  o: n: 'For large organizations requiring enterprise-grade workflow management',featur,
  e: s: [
  'Unlimited workflowsCustom AI models'
        'White-label solution24/7 dedicated support'
        'Custom compliance frameworksAdvanced security features'
]
      popula,
  r: false
},
  ]
  const benefits = [
  'Reduce manual work by up to 80%Improve process efficiency by 60%'
    'Cut operational costs by 40%Ensure 99.9% compliance accuracy'
    'Scale workflows automatically with demand'
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */},
  }
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.1)_25%,rgba(120,119,198,0.1)_50%,transparent_50%,transparent_75%,rgba(120,119,198,0.1)_75%)] bg-[leng,
  t: h:20px_20px] animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Header Section */},
  }
        <motion.header 
          className="className="pt-20 pb-16 text-center";"
          initial={ opaci,
  t: y: 0, y: -50 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          transition={ durati,
  o: n: 0.8 },
  }
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              className="className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-6";"
              initial={ sca,
  l: e: 0.8, opaci,
  t: y: 0 },
  }
              animate={ sca,
  l: e: 1, opaci,
  t: y: 1 },
  }
              transition={ del,
  a: y: 0.2, durati,
  o: n: 0.5 },
  }
            >
              <Workflow className="w-4 h-4" />
              AI-Powered Workflow Management
            </motion.div>
            
            <h1 className="text-5xl,
  m: d: text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Workflow Orchestrator
            </h1>
            
            <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business processes with intelligent automation that learns, adapts, and optimizes workflows in real-time.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <motion.button 
                className="className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl,
  hove: r:from-purple-700,
  hove: r:to-blue-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-purple-500/25 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                <Play className="w-5 h-5" />
                Start Free Trial
              </motion.button>
              <motion.button 
                className="className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl,
  hove: r: bg-purple-500/10 transition-all duration-300 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                <Settings className="w-5 h-5" />
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Features Grid */},
  }
        <motion.section 
          className="className="py-20 px-6";"
          initial={ opaci,
  t: y: 0, y: 50 },
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform provides everything you need to orchestrate complex workflows with intelligence and precision.
              </p>
            </div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
              {features.map((feature, index) => (
  <motion.div
                  key={feature.title},
  }
                  className="className="group relative p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm,
  hove: r: border-purple-500/40 transition-all duration-300";"
                  initial={ opacit,
  y: 0, y: 30 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ del,
  a: y: index * 0.1, durati,
  o: n: 0.6 },
  }
                  viewport={ on,
  c: e: true },
  }
                  whileHover={ y: -5, sca,
  l: e: 1.02 },
  }
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hov,
  e: r: opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hove,
  r:text-purple-300 transition-colors">
                      {feature.title},
  }
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {feature.description},
  }
                    </p>
                    
                    <div className="text-2xl font-bold text-purple-400">
                      {feature.price},
  }
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */},
  }
        <motion.section 
          className="className="py-20 px-6 bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-blue-900/20";"
          initial={ opaci,
  t: y: 0, y: 50 },
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl,
  m: d:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI capabilities and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
  <motion.div
                  key={plan.name},
  }
                  className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
  plan.popular 
                      ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                      : 'border-purple-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50'
}`}
                  initial={ opaci,
  t: y: 0, y: 30 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ del,
  a: y: index * 0.1, durati,
  o: n: 0.6 },
  }
                  viewport={ on,
  c: e: true },
  }
                  whileHover={ y: -5, sca,
  l: e: 1.02 },
  }
                >
                  {plan.popular && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-4">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
  <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
  plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white,
  hove: r: from-purple-700,
  hove: r:to-blue-700'
                        : 'border border-purple-500/30 text-purple-300 hove,
  r:bg-purple-500/10'
}`}
                    whileHover={ sca,
  l: e: 1.02 },
  }
                    whileTap={ sca,
  l: e: 0.98 },
  }
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */},
  }
        <motion.section 
          className="className="py-20 px-6";"
          initial={ opaci,
  t: y: 0, y: 50 },
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose AI Workflow Orchestrator?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their operations with intelligent workflow automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
  <motion.div
                  key={benefit},
  }
                  className="className="flex items-start gap-4 p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10";"
                  initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -30 : 30 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ del,
  a: y: index * 0.1, durati,
  o: n: 0.6 },
  }
                  viewport={ on,
  c: e: true },
  }
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */},
  }
        <motion.section 
          className="className="py-20 px-6 text-center";"
          initial={ opaci,
  t: y: 0, y: 50 },
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven workflow orchestration.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl,
  hove: r:from-purple-700,
  hove: r:to-blue-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-purple-500/25 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl,
  hove: r: bg-purple-500/10 transition-all duration-300 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                <Users className="w-5 h-5" />
                Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default AIWorkflowOrchestrator