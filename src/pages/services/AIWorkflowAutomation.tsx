import React from "react"
import { motion } from "framer-motion"
import { 
  Workflow
  Zap, 
  Brain, 
  Clock, 
  TrendingUp, 
  Shield, 
  Globe, 
  Database
  Cloud
  Lock
  Users
  Rocket
  CheckCircle
  ArrowRight
  BarChart3
  LineChart
  Activity
  Target
  Lightbulb
  Eye
  Search
  Filter
  Download
  Share2
  Play
  Pause
  Settings
  Monitor
  AlertCircle
  CheckSquare
  FileText
  Calendar
  Repeat
  GitBranch
  Code
  Terminal
} from "lucide-react"
import { SEO } from "../../components/SEO"
export default function AIWorkflowAutomation() {
  const features = [
    {
      ic,
  o: n: Brain,tit,
  l: e: 'AI-Powered Decision Making',descripti,
  o: n: 'Intelligent workflows that automatically make decisions based on data patterns and business rules.'
    }, {
      ic,
  o: n: Workflow,tit,
  l: e: 'Visual Workflow Designer',descripti,
  o: n: 'Drag-and-drop interface to create complex workflows without coding knowledge.'
    }, {
      ic,
  o: n: Zap,tit,
  l: e: 'Real-time Automation',descripti,
  o: n: 'Instant execution of workflows triggered by events, schedules, or conditions.'
    }, {
      ic,
  o: n: TrendingUp,tit,
  l: e: 'Performance Analytics',descripti,
  o: n: 'Comprehensive insights into workflow efficiency, bottlenecks, and optimization opportunities.'
    }
  ]

  const capabilities = [
    {
      tit,
  l: e: 'Workflow Orchestration',descripti,
  o: n: 'Coordinate complex multi-step processes across different systems and platforms',ic,
  o: n: GitBranch,benefi,
  t: s: [['Multi-system integrationConditional branching', 'Error handling'];]
    }, {
      tit,
  l: e: 'AI Decision Engine',descripti,
  o: n: 'Machine learning models that make intelligent decisions within workflows',ic,
  o: n: Brain,benefi,
  t: s: [['Predictive decisionsPattern recognition', 'Continuous learning'];]
    }, {
      tit,
  l: e: 'Real-time Monitoring',descripti,
  o: n: 'Live visibility into workflow execution and performance metrics',ic,
  o: n: Monitor,benefi,
  t: s: [['Live dashboardsAlert system', 'Performance tracking'];]
    }, {
      tit,
  l: e: 'Integration Hub',descripti,
  o: n: 'Connect to 500+ applications and services via pre-built connectors',ic,
  o: n: Database,benefi,
  t: s: [['API integrationWebhook support', 'Custom connectors'];]
    }
  ]

  const useCases = [
    {
      indust,
  r: y: 'E-commerce',descripti,
  o: n: 'Automated order processing, inventory management, and customer service workflows'
      ic,
  o: n: ShoppingCart,metri,
  c: s: [['Order Processing TimeInventory Accuracy', 'Customer Satisfaction'];]
    }, {
      indust,
  r: y: 'Finance',descripti,
  o: n: 'Automated loan processing, compliance checks, and risk assessment workflows'
      ic,
  o: n: Shield,metri,
  c: s: [['Processing SpeedCompliance Rate', 'Risk Detection'];]
    }, {
      indust,
  r: y: 'Healthcare',descripti,
  o: n: 'Patient intake, appointment scheduling, and medical record management workflows'
      ic,
  o: n: Activity,metri,
  c: s: [['Patient Wait TimeAppointment Efficiency', 'Record Accuracy'];]
    }, {
      indust,
  r: y: 'Manufacturing',descripti,
  o: n: 'Production scheduling, quality control, and maintenance workflows'
      ic,
  o: n: Settings,metri,
  c: s: [['Production EfficiencyQuality Score', 'Downtime Reduction'];]
    }
  ]

  const pricing = [
    {
      na,
  m: e: 'Starter',pri,
  c: e: '$99',peri,
  o: d: '/month',descripti,
  o: n: 'Perfect for small teams getting started with automation',featur,
  e: s: [
        'Up to 10 workflows5 user accounts'
        'Basic integrationsEmail support'
        'Standard templates'
      ]
      ct,
  a: 'Start Free Trial',popul,
  a: r: false
    }, {
      na,
  m: e: 'Professional',pri,
  c: e: '$299',peri,
  o: d: '/month',descripti,
  o: n: 'Ideal for growing businesses with complex automation needs',featur,
  e: s: [
        'Up to 100 workflows25 user accounts'
        'Advanced integrationsPriority support'
        'Custom templatesAdvanced analytics'
        'API access'
      ]
      ct,
  a: 'Start Free Trial',popul,
  a: r: true
    }, {
      na,
  m: e: 'Enterprise',pri,
  c: e: 'Custom',peri,
  o: d: '',descripti,
  o: n: 'For large organizations requiring enterprise-grade automation',featur,
  e: s: [
        'Unlimited workflowsUnlimited users'
        'All integrations24/7 support'
        'Custom developmentAdvanced security'
        'SLA guarantees'
      ]
      ct,
  a: 'Contact Sales',popul,
  a: r: false
    }
  ]
  const benefits = [
    {
      ic,
  o: n: Clock,tit,
  l: e: 'Save 40+ Hours Weekly',descripti,
  o: n: 'Automate repetitive tasks and focus on strategic work that drives growth.'
    }, {
      ic,
  o: n: TrendingUp,tit,
  l: e: 'Increase Efficiency by 300%',descripti,
  o: n: 'Streamline processes and eliminate bottlenecks for faster delivery.'
    }, {
      ic,
  o: n: Shield,tit,
  l: e: 'Reduce Errors by 95%',descripti,
  o: n: 'AI-powered validation ensures accuracy and consistency across all workflows.'
    }, {
      ic,
  o: n: Users,tit,
  l: e: 'Improve Team Productivity',descripti,
  o: n: 'Empower teams with self-service automation tools and real-time insights.'
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group"
        description="Transform your business with AI-powered workflow automation. Streamline processes, reduce errors, and increase efficiency by 300%."
        keywords="AI workflow automation, business process automation, workflow orchestration, AI decision engine, process optimization"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Workflow className="w-4 h-4 mr-2" />
              AI-Powered Automation
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business processes with intelligent automation. Our AI-powered workflows 
              orchestrate complex tasks, make smart decisions, and drive unprecedented efficiency.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <motion.button
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
                className="className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-700,
  hove: r:to-purple-700 transition-all duration-300 flex items-center justify-center";"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
                className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg,
  hove: r:bg-gray-800 transition-all duration-300";"
              >
                Watch Demo
              </motion.button>
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Automation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage intelligent workflows at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 }
                className="className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6,
  hove: r:border-blue-500/50 transition-all duration-300";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leverage cutting-edge AI and automation technologies to transform your business processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 }
                whileInView={ opaci,
  t: y: 1, x: 0 }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 }
                className="className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8,
  hove: r:border-blue-500/50 transition-all duration-300";"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-gray-400 mb-4">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how AI workflow automation transforms different industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 }
                className="className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6,
  hove: r:border-blue-500/50 transition-all duration-300";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your automation needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 }
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-gray-700,
  hove: r:border-blue-500/50'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={ sca,
  l: e: 1.02 }
                  whileTap={ sca,
  l: e: 0.98 }
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white,
  hove: r: from-blue-700,
  hove: r:to-purple-700'
                      : 'bg-gray-700 text-white hove,
  r:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of companies that have revolutionized their operations with AI workflow automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 }
                className="className="text-center";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your 14-day free trial today and see the power of AI workflow automation in action.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <motion.button
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
                className="className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-700,
  hove: r:to-purple-700 transition-all duration-300";"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
                className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg,
  hove: r: bg-gray-800 transition-all duration-300";"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}