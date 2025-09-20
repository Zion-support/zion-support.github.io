import React from "react"
import { motion } from "framer-motion"
import { 
  DollarSign
  Play, 
  Settings, 
  Target, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react"
export default function FinOpsAdvisor() {
  const features = [
    {
      ic,
  o: n: Target,tit,
  l: e: 'Cost Optimization',descripti,
  o: n: 'Identify and eliminate unnecessary cloud spending'
    }, {
      ic,
  o: n: CheckCircle,tit,
  l: e: 'Resource Management',descripti,
  o: n: 'Optimize resource allocation and utilization'
    }, {
      ic,
  o: n: Settings,tit,
  l: e: 'Automation',descripti,
  o: n: 'Automate cost monitoring and optimization'
    }
  ]
  const benefits = [
    'Reduce cloud costs by 30-50%Improve resource utilization'
    'Implement cost governanceOptimize pricing models'
  ]

  const useCases = [
    { indust,
  r: y: 'E-commerce', descripti,
  o: n: 'Optimize seasonal scaling costs' }, { indust,
  r: y: 'SaaS', descripti,
  o: n: 'Manage multi-tenant infrastructure costs' }, { indust,
  r: y: 'Healthcare', descripti,
  o: n: 'Ensure HIPAA-compliant cost optimization' }, { indust,
  r: y: 'Finance', descripti,
  o: n: 'Implement cost controls for regulatory compliance' }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center";"
          >
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Cloud Financial Operations
            </div>
            
            <h1 className="text-5xl,
  m: d: text-6xl font-bold text-white mb-6">
              FinOps
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> Advisor</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Optimize your cloud spending with our FinOps advisory services that 
              help you achieve cost efficiency while maintaining performance.
            </p>
            
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg,
  hove: r:from-emerald-600,
  hove: r:to-teal-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hove,
  r:bg-emerald-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive FinOps Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform provides all the tools you need to implement effective 
              financial operations for your cloud infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
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
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r:border-emerald-500/30 transition-all duration-200";"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core FinOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From cost analysis to optimization strategies, we provide 
              end-to-end FinOps solutions for your cloud environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 }
                whileInView={ opaci,
  t: y: 1, x: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r:border-emerald-500/30 transition-all duration-200";"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Cloud Economics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in cost efficiency, resource utilization, and financial planning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={ opaci,
  t: y: 0, x: -20 }
                  whileInView={ opaci,
  t: y: 1, x: 0 }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                  className="className="flex items-start space-x-3";"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={ opaci,
  t: y: 0, x: 20 }
                  whileInView={ opaci,
  t: y: 1, x: 0 }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                  className="className="flex items-start space-x-3";"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our FinOps solutions adapt to various industries, providing 
              tailored cost optimization for your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center,
  hove: r:border-emerald-500/30 transition-all duration-200";"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
        <div className="max-w-4xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Optimize Your Cloud Costs Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join organizations worldwide that use our FinOps solutions to 
              achieve cost efficiency and maximize cloud ROI.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg,
  hove: r:from-emerald-600,
  hove: r:to-teal-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hove,
  r:bg-emerald-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default FinOpsAdvisor