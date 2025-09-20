import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Users, TrendingUp, Shield, Zap, BarChart3, Target, Globe, Smartphone } from "lucide-react"
import { SEO } from "@/components/SEO"
export default function AIProjectManager() {
  const features = [
    {
      tit,
  l: e: "AI-Powered Task Prioritization",descripti,
  o: n: "Intelligent algorithms automatically prioritize tasks based on deadlines, dependencies, and team capacity"
      ic,
  o: n: Target,col,
  o: r: "from-blue-500 to-cyan-500"
    }, {
      tit,
  l: e: "Real-time Resource Optimization",descripti,
  o: n: "Dynamic resource allocation using machine learning to maximize team productivity and efficiency",ic,
  o: n: Users,col,
  o: r: "from-purple-500 to-pink-500"
    }, {
      tit,
  l: e: "Predictive Risk Assessment",descripti,
  o: n: "AI analyzes project patterns to identify potential risks before they become issues",ic,
  o: n: Shield,col,
  o: r: "from-orange-500 to-red-500"
    }, {
      tit,
  l: e: "Automated Progress Tracking",descripti,
  o: n: "Smart dashboards that automatically track progress and generate insights without manual input",ic,
  o: n: BarChart3,col,
  o: r: "from-green-500 to-emerald-500"
    }, {
      tit,
  l: e: "Intelligent Communication",descripti,
  o: n: "AI-powered notifications and updates ensure stakeholders are always informed at the right time",ic,
  o: n: Zap,col,
  o: r: "from-indigo-500 to-blue-500"
    }, {
      tit,
  l: e: "Cross-Platform Integration",descripti,
  o: n: "Seamlessly integrates with existing tools like Jira, Asana, Slack, and Microsoft Teams"
      ic,
  o: n: Globe,col,
  o: r: "from-teal-500 to-cyan-500"
    }
  ]
  const pricingPlans = [
    {
      na,
  m: e: "Starter",pri,
  c: e: "$29",peri,
  o: d: "/month",descripti,
  o: n: "Perfect for small teams and startups",featur,
  e: s: [
        "Up to 5 team members"
        "Basic AI task prioritization"
        "Project templates"
        "Email support"
        "Mobile app access"
      ]
      ct,
  a: "Start Free Trial",popul,
  a: r: false
    }, {
      na,
  m: e: "Professional",pri,
  c: e: "$79",peri,
  o: d: "/month",descripti,
  o: n: "Ideal for growing businesses",featur,
  e: s: [
        "Up to 25 team members"
        "Advanced AI analytics"
        "Custom workflows"
        "Priority support"
        "API access"
        "Advanced reporting"
      ]
      ct,
  a: "Start Free Trial",popul,
  a: r: true
    }, {
      na,
  m: e: "Enterprise",pri,
  c: e: "$199",peri,
  o: d: "/month",descripti,
  o: n: "For large organizations",featur,
  e: s: [
        "Unlimited team members"
        "Custom AI models"
        "White-label solution"
        "Dedicated support"
        "Advanced security"
        "Custom integrations"
      ]
      ct,
  a: "Contact Sales",popul,
  a: r: false
    }
  ]
  const benefits = [
    {
      tit,
  l: e: "30% Faster Project Delivery",descripti,
  o: n: "AI optimization reduces project timelines and improves efficiency",ic,
  o: n: Clock,metr,
  i: c: "30%"
    }, {
      tit,
  l: e: "50% Better Resource Utilization",descripti,
  o: n: "Smart resource allocation maximizes team productivity",ic,
  o: n: TrendingUp,metr,
  i: c: "50%"
    }, {
      tit,
  l: e: "90% Risk Reduction",descripti,
  o: n: "Predictive analytics prevent issues before they occur",ic,
  o: n: Shield,metr,
  i: c: "90%"
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Project Manager - Intelligent Project Management Solution | Zion Tech Group"
        description="Transform your project management with AI-powered task prioritization, resource optimization, and predictive analytics. Start free trial today."
        keywords="AI project management, project management software, AI task prioritization, resource optimization, project analytics"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 relative z-10">
          <motion.div 
            className="className="text-center";"
            initial={ opacit,
  y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h1 className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6">
              AI Project Manager
            </h1>
            <p className="text-xl m,
  d:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              The future of project management is here. AI-powered insights, automated workflows, and intelligent resource optimization.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-700,
  hove: r:to-purple-700 transition-all duration-300,
  transform: hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div 
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            viewport={ on,
  c: e: true }
            transition={ durati,
  o: n: 0.8 }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI engine learns from your team's patterns and continuously optimizes your project workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10,
  hove: r: border-white/20 transition-all duration-300";"
                initial={ opacit,
  y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                viewport={ on,
  c: e: true }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                whileHover={ y: -5, sca,
  l: e: 1.02 }
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-white/5 to-white/10 relative">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div 
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            viewport={ on,
  c: e: true }
            transition={ durati,
  o: n: 0.8 }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join thousands of teams who have transformed their project management with AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="className="text-center";"
                initial={ opaci,
  t: y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                viewport={ on,
  c: e: true }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.2 }
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div 
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            viewport={ on,
  c: e: true }
            transition={ durati,
  o: n: 0.8 }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your team size and needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-purple-500/50 bg-purple-500/10' : 'border-white/10'
                }`}
                initial={ opaci,
  t: y: 0, y: 30 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                viewport={ on,
  c: e: true }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                whileHover={ y: -5, sca,
  l: e: 1.02 }
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white,
  hove: r: from-purple-700,
  hove: r:to-pink-700'
                    : 'bg-white/10 text-white border border-white/20 hove,
  r:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 relative">
        <div className="max-w-4xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            viewport={ on,
  c: e: true }
            transition={ durati,
  o: n: 0.8 }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of teams who have already revolutionized their workflow with AI
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-700,
  hove: r:to-purple-700 transition-all duration-300,
  transform: hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}