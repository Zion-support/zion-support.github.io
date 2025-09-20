import React from "react"
import { motion } from "framer-motion"
import { 
  Database
  Shield, 
  Lock, 
  Eye, 
  Search, 
  BarChart3, 
  Users, 
  FileText
  CheckCircle
  Star
  ArrowRight
  Play
  Settings
  Cloud
  Zap
  Brain
  TrendingUp
  AlertTriangle
  Globe
  Key
} from "lucide-react"
const,
  AIDataGovernancePlatfor: m: React.FC = () () => {
  const features = [
    {
      ico,
  n: Brain,tit,
  l: e: 'AI-Powered Data Discovery',descripti,
  o: n: 'Automatically discover, classify, and catalog data across your entire organization using advanced machine learning.'
      pri,
  c: e: '$399/month'
    }, {
      ic,
  o: n: Shield,tit,
  l: e: 'Intelligent Compliance Management',descripti,
  o: n: 'Automated compliance monitoring for GDPR, CCPA, HIPAA, and other regulatory frameworks with real-time alerts.'
      pri,
  c: e: '$299/month'
    }, {
      ic,
  o: n: Lock,tit,
  l: e: 'Advanced Access Control',descripti,
  o: n: 'Role-based access control with AI-driven permission recommendations and automated privilege management.',pri,
  c: e: '$199/month'
    }, {
      ic,
  o: n: BarChart3,tit,
  l: e: 'Data Quality Analytics',descripti,
  o: n: 'Continuous monitoring of data quality, integrity, and lineage with predictive analytics and automated remediation.'
      pri,
  c: e: '$249/month'
    }
  ]
  const pricingPlans = [
    {
      na,
  m: e: 'Foundation',pri,
  c: e: '$149',peri,
  o: d: '/month',descripti,
  o: n: 'Essential data governance for small to medium organizations',featur,
  e: s: [
        'Up to 10TB data managementBasic AI discovery'
        'GDPR compliance toolsStandard access control'
        'Email supportBasic reporting'
      ]
      popula,
  r: false
    }, {
      na,
  m: e: 'Professional',pri,
  c: e: '$399',peri,
  o: d: '/month',descripti,
  o: n: 'Comprehensive data governance for growing enterprises',featur,
  e: s: [
        'Up to 100TB data managementAdvanced AI discovery'
        'Multi-compliance frameworkAdvanced access control'
        'Priority supportAdvanced analytics'
        'Custom policies'
      ]
      popula,
  r: true
    }, {
      na,
  m: e: 'Enterprise',pri,
  c: e: '$999',peri,
  o: d: '/month',descripti,
  o: n: 'Enterprise-grade data governance with custom solutions',featur,
  e: s: [
        'Unlimited data managementCustom AI models'
        'White-label solution24/7 dedicated support'
        'Custom compliance frameworksAdvanced security features'
        'SLA guarantees'
      ]
      popula,
  r: false
    }
  ]
  const benefits = [
    'Ensure 100% regulatory complianceReduce data breach risk by 90%'
    'Improve data quality by 75%Cut compliance costs by 60%'
    'Automate 80% of governance tasks'
  ]

  const complianceFrameworks = [
    'GDPR (General Data Protection Regulation)CCPA (California Consumer Privacy Act)'
    'HIPAA (Health Insurance Portability and Accountability Act)SOX (Sarbanes-Oxley Act)'
    'ISO 27001 (Information Security Management)SOC 2 Type II (Service Organization Control)'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.1)_75%)] bg-[leng,
  t: h:20px_20px] animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.header 
          className="className="pt-20 pb-16 text-center";"
          initial={ opaci,
  t: y: 0, y: -50 }
          animate={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8 }
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              className="className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-6";"
              initial={ sca,
  l: e: 0.8, opaci,
  t: y: 0 }
              animate={ sca,
  l: e: 1, opaci,
  t: y: 1 }
              transition={ del,
  a: y: 0.2, durati,
  o: n: 0.5 }
            >
              <Database className="w-4 h-4" />
              AI-Powered Data Governance
            </motion.div>
            
            <h1 className="text-5xl,
  m: d: text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              AI Data Governance Platform
            </h1>
            
            <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8 leading-relaxed">
              Protect, govern, and optimize your data with intelligent automation that ensures compliance, security, and quality across your entire data ecosystem.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <motion.button 
                className="className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl,
  hove: r:from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-blue-500/25 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
              >
                <Play className="w-5 h-5" />
                Start Free Trial
              </motion.button>
              <motion.button 
                className="className="px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-xl,
  hove: r: bg-blue-500/10 transition-all duration-300 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
              >
                <Settings className="w-5 h-5" />
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Features Grid */}
        <motion.section 
          className="className="py-20 px-6";"
          initial={ opaci,
  t: y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8 }
          viewport={ on,
  c: e: true }
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive data governance capabilities designed for modern enterprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="className="group relative p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm,
  hove: r: border-blue-500/40 transition-all duration-300";"
                  initial={ opacit,
  y: 0, y: 30 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  transition={ del,
  a: y: index * 0.1, durati,
  o: n: 0.6 }
                  viewport={ on,
  c: e: true }
                  whileHover={ y: -5, sca,
  l: e: 1.02 }
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hov,
  e: r: opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hove,
  r:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="text-2xl font-bold text-blue-400">
                      {feature.price}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Compliance Frameworks */}
        <motion.section 
          className="className="py-20 px-6 bg-gradient-to-br from-blue-900/20 via-slate-900/50 to-cyan-900/20";"
          initial={ opaci,
  t: y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8 }
          viewport={ on,
  c: e: true }
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Comprehensive Compliance Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay compliant with all major regulatory frameworks through intelligent automation and continuous monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework}
                  className="className="flex items-center gap-4 p-4 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10";"
                  initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -30 : 30 }
                  whileInView={ opaci,
  t: y: 1, x: 0 }
                  transition={ del,
  a: y: index * 0.1, durati,
  o: n: 0.6 }
                  viewport={ on,
  c: e: true }
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{framework}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          className="className="py-20 px-6";"
          initial={ opaci,
  t: y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8 }
          viewport={ on,
  c: e: true }
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your organization's data governance needs. All plans include our core AI capabilities and expert support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-blue-500 bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                      : 'border-blue-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50'
                  }`}
                  initial={ opaci,
  t: y: 0, y: 30 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  transition={ del,
  a: y: index * 0.1, durati,
  o: n: 0.6 }
                  viewport={ on,
  c: e: true }
                  whileHover={ y: -5, sca,
  l: e: 1.02 }
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-4">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
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
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white,
  hove: r: from-blue-700,
  hove: r:to-cyan-700'
                        : 'border border-blue-500/30 text-blue-300 hove,
  r:bg-blue-500/10'
                    }`}
                    whileHover={ sca,
  l: e: 1.02 }
                    whileTap={ sca,
  l: e: 0.98 }
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="className="py-20 px-6 bg-gradient-to-br from-blue-900/20 via-slate-900/50 to-cyan-900/20";"
          initial={ opaci,
  t: y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8 }
          viewport={ on,
  c: e: true }
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Why Choose AI Data Governance?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join leading enterprises that trust our platform to protect and govern their most valuable asset - their data.
              </p>
            </div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="className="flex items-start gap-4 p-6 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10";"
                  initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -30 : 30 }
                  whileInView={ opaci,
  t: y: 1, x: 0 }
                  transition={ del,
  a: y: index * 0.1, durati,
  o: n: 0.6 }
                  viewport={ on,
  c: e: true }
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="className="py-20 px-6 text-center";"
          initial={ opaci,
  t: y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8 }
          viewport={ on,
  c: e: true }
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl,
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Secure Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience enterprise-grade data governance powered by AI.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl,
  hove: r:from-blue-700,
  hove: r:to-cyan-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-blue-500/25 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="className="px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-xl,
  hove: r: bg-blue-500/10 transition-all duration-300 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 }
                whileTap={ sca,
  l: e: 0.95 }
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

export default AIDataGovernancePlatform