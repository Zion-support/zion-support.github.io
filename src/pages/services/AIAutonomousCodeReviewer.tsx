import React from "react"
import { motion } from "framer-motion"
import {
  Code
  CheckCircle,
  Shield,
  Zap,
  ArrowRight
  Play
  Settings
  Target
  Cpu
  Activity
  Sparkles
  Search
  GitBranch
  Terminal
  Workflow
  Rocket
  RefreshCw
  Lock
  Eye
  AlertTriangle
  Clock
  Users
  BarChart3
  TrendingUp
  Globe
  Building
  DollarSign
  Network
  Key
  Fingerprint
  Monitor
  Server
  Database
  Smartphone
  Box
  Layers
  GitBranch
  Github
  Gitlab
  Bitbucket
} from "lucide-react"
const AIAutonomousCodeReviewer = () () => {
  const features = [
  {
  ic,
  o: n: Code,tit,
  l: e: 'AI-Powered Code Analysis',descripti,
  o: n: 'Advanced machine learning algorithms that understand code patterns, detect bugs, and suggest improvements'
},
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Security Vulnerability Detection',descripti,
  o: n: 'Automated scanning for security flaws, SQL injection, XSS, and other critical vulnerabilities'
},
  {
  ic,
  o: n: Zap,tit,
  l: e: 'Performance Optimization',descripti,
  o: n: 'Identify performance bottlenecks, memory leaks, and inefficient algorithms in your codebase'
},
  {
  ic,
  o: n: GitBranch,tit,
  l: e: 'Git Integration',descripti,
  o: n: 'Seamless integration with GitHub, GitLab, Bitbucket, and other version control systems'
},
  {
  ic,
  o: n: Monitor,tit,
  l: e: 'Real-time Monitoring',descripti,
  o: n: 'Continuous code quality monitoring with instant notifications and detailed reports'
},
  {
  ic,
  o: n: Users,tit,
  l: e: 'Team Collaboration',descripti,
  o: n: 'Built-in code review workflows, comments, and approval systems for development teams'
},
  ]

  const benefits = [
  'Reduce code review time by 70%Catch 90% of bugs before production'
    'Improve code quality by 40%Accelerate development cycles'
    'Reduce technical debtEnsure consistent coding standards'
]

  const services = [
  {
  ic,
  o: n: Server,tit,
  l: e: 'Static Code Analysis',descripti,
  o: n: 'Comprehensive static analysis for multiple programming languages including Python, JavaScript, Java, C++, Go, and Rust'
},
  {
  ic,
  o: n: Workflow,tit,
  l: e: 'Automated Review Workflows',descripti,
  o: n: 'Customizable review processes, automated approvals, and integration with CI/CD pipelines'
},
  {
  ic,
  o: n: Box,tit,
  l: e: 'Container Security Scanning',descripti,
  o: n: 'Docker and container security analysis, vulnerability scanning, and compliance checking'
},
  {
  ic,
  o: n: Database,tit,
  l: e: 'Database Code Review',descripti,
  o: n: 'SQL query optimization, database schema analysis, and performance tuning recommendations'
},
  ]

  const useCases = [
  {
  indust,
  r: y: 'Software Development',descripti,
  o: n: 'Automated code reviews for development teams, ensuring quality and consistency across projects'
},
  {
  indust,
  r: y: 'DevOps & CI/CD',descripti,
  o: n: 'Integration with automated pipelines for continuous code quality monitoring and deployment gates'
},
  {
  indust,
  r: y: 'Security Teams',descripti,
  o: n: 'Proactive security scanning and vulnerability detection in application code'
},
  {
  indust,
  r: y: 'Code Quality Management',descripti,
  o: n: 'Maintaining high coding standards and reducing technical debt in large codebases'
},
  ]
  const pricing = [
  {
  na,
  m: e: 'Starter',pri,
  c: e: '$299',peri,
  o: d: '/month',descripti,
  o: n: 'Perfect for small development teams',featur,
  e: s: [
  'Up to 5 developersBasic code analysis'
        'Security vulnerability scanningGitHub integration'
        'Email supportBasic reporting'
]
      ct,
  a: 'Start Free Trial',popul,
  a: r: false
},
  {
  na,
  m: e: 'Professional',pri,
  c: e: '$799',peri,
  o: d: '/month',descripti,
  o: n: 'Ideal for growing development teams',featur,
  e: s: [
  'Up to 25 developersAdvanced AI analysis'
        'Multi-language supportCI/CD integration'
        'Priority supportAdvanced analytics'
        'Custom rules engineTeam collaboration tools'
]
      ct,
  a: 'Start Free Trial',popul,
  a: r: true
},
  {
  na,
  m: e: 'Enterprise',pri,
  c: e: '$1,999'
      peri,
  o: d: '/month',descripti,
  o: n: 'For large organizations and enterprises',featur,
  e: s: [
  'Unlimited developersCustom AI models'
        'On-premise deploymentDedicated support'
        'Custom integrationsAdvanced security features'
        'Compliance reportingSLA guarantees'
]
      ct,
  a: 'Contact Sales',popul,
  a: r: false
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
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
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              AI-Powered Code Review
            </div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Code Reviewer</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your code review process with AI-powered analysis that catches bugs
              improves security, and maintains code quality automatically.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg,
  hove: r:from-blue-600,
  hove: r:to-cyan-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hove,
  r:bg-blue-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Code Review Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive code analysis, security scanning,
  and quality improvement recommendations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
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
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r:border-blue-500/30 transition-all duration-200";"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Code Review Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From static analysis to security scanning, we provide end-to-end code review 
              solutions for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {services.map((service, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r:border-blue-500/30 transition-all duration-200";"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in code quality, security, and development efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
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
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                  className="className="flex items-start space-x-3";"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
  <motion.div
                  key={index + 3},
  }
                  initial={ opaci,
  t: y: 0, x: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                  className="className="flex items-start space-x-3";"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your team size and development needs. 
              All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
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
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
  plan.popular 
                    ? 'border-blue-500/50 bg-blue-500/5' 
                    : 'border-slate-700/50'
}`}
              >
                {plan.popular && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white,
  hove: r: from-blue-600,
  hove: r:to-cyan-600'
                    : 'bg-slate-700 text-white hove,
  r:bg-slate-600'
}`}>
                  {plan.cta},
  }
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */},
  }
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI code review solutions adapt to various industries, providing tailored 
              analysis and recommendations for your specific development needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
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
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center,
  hove: r:border-blue-500/30 transition-all duration-200";"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information Section */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Insights & ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Understand the market landscape and potential return on investment for AI-powered code review solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-6">
            <motion.div
              initial={ opacit,
  y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.5, del,
  a: y: 0.1 },
  }
              className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center";"
            >
              <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">$2.8B</h3>
              <p className="text-gray-300">Global Market Size 2024</p>
            </motion.div>
            
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.5, del,
  a: y: 0.2 },
  }
              className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center";"
            >
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">24.3%</h3>
              <p className="text-gray-300">Annual Growth Rate</p>
            </motion.div>
            
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.5, del,
  a: y: 0.3 },
  }
              className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center";"
            >
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">300%</h3>
              <p className="text-gray-300">Average ROI</p>
            </motion.div>
            
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.5, del,
  a: y: 0.4 },
  }
              className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center";"
            >
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">70%</h3>
              <p className="text-gray-300">Time Savings</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Your AI Code Review Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of development teams worldwide that use our AI-powered 
              code review platform to improve code quality and accelerate development.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg,
  hove: r:from-blue-600,
  hove: r:to-cyan-600 transition-all duration-200 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg,
  hove: r:bg-blue-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Ready to get started? Contact,
  our: team:</p>
              <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center text-sm text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>✉️</span>
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>🌐</span>
                  <span>http,
  s://ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default AIAutonomousCodeReviewer