import React from "react"
import { motion     } from "framer-motion";
import { CheckCircle, BarChart3, TrendingUp, Target, Zap, Shield, Brain, Database, Globe, Smartphone, Users, PieChart     } from "lucide-react";
import { SEO     } from "@/components/SEO";
export default function AIDataAnalytics() {
  const features = [
  {
  tit,
  l: e: "Predictive Analytics Engine",descripti,
  o: n: "AI algorithms forecast future trends, customer behavior, and business outcomes with high accuracy"
      ic,
  o: n: Brain,col,
  o: r: "from-blue-500 to-cyan-500"
},
  {
  tit,
  l: e: "Real-time Data Processing",descripti,
  o: n: "Process millions of data points in real-time to provide instant insights and recommendations",ic,
  o: n: Zap,col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  tit,
  l: e: "Natural Language Queries",descripti,
  o: n: "Ask complex data questions in plain English and get instant, visual answers"
      ic,
  o: n: Globe,col,
  o: r: "from-orange-500 to-red-500"
},
  {
  tit,
  l: e: "Automated Insights Discovery",descripti,
  o: n: "AI automatically identifies patterns, anomalies, and opportunities in your data"
      ic,
  o: n: Target,col,
  o: r: "from-green-500 to-emerald-500"
},
  {
  tit,
  l: e: "Multi-Source Data Integration",descripti,
  o: n: "Connect and analyze data from databases, APIs, cloud services, and third-party tools"
      ic,
  o: n: Database,col,
  o: r: "from-indigo-500 to-blue-500"
},
  {
  tit,
  l: e: "Interactive Visualizations",descripti,
  o: n: "Create stunning, interactive dashboards that make complex data easy to understand"
      ic,
  o: n: PieChart,col,
  o: r: "from-teal-500 to-cyan-500"
},
  ]
  const pricingPlans = [
  {
  na,
  m: e: "Starter",pri,
  c: e: "$49",peri,
  o: d: "/month",descripti,
  o: n: "Perfect for small businesses",featur,
  e: s: [
  "Up to 100,000 data points/month"
        "Basic predictive analytics"
        "5 custom dashboards"
        "Email support"
        "Mobile app access"
]
      c,
  t: a: "Start Free Trial",popul,
  a: r: false;
},
  {
  na,
  m: e: "Professional",pri,
  c: e: "$129",peri,
  o: d: "/month",descripti,
  o: n: "Ideal for growing businesses",featur,
  e: s: [
  "Up to 1,000,000 data points/month"
        "Advanced AI analytics"
        "Unlimited dashboards"
        "Priority support"
        "API access"
        "Custom data models"
]
      c,
  t: a: "Start Free Trial",popul,
  a: r: true;
},
  {
  na,
  m: e: "Enterprise",pri,
  c: e: "$399",peri,
  o: d: "/month",descripti,
  o: n: "For large organizations",featur,
  e: s: [
  "Unlimited data points"
        "Custom AI models"
        "White-label solution"
        "Dedicated support"
        "Advanced security"
        "Custom integrations"
]
      ct,
  a: "Contact Sales",popul,
  a: r: false;
},
  ]
  const benefits = [
  {
  tit,
  l: e: "300% Faster Insights",descripti,
  o: n: "AI automation delivers insights in minutes instead of days",ic,
  o: n: Zap,metr,
  i: c: "300%"
},
  {
  tit,
  l: e: "40% Better Decision Making",descripti,
  o: n: "Data-driven insights lead to more informed business decisions",ic,
  o: n: Target,metr,
  i: c: "40%"
},
  {
  tit,
  l: e: "90% Cost Reduction",descripti,
  o: n: "Automated analytics reduce manual data analysis overhead",ic,
  o: n: TrendingUp,metr,
  i: c: "90%"
},
  ]
  const useCases = [
  {
  tit,
  l: e: "Customer Analytics",descripti,
  o: n: "Understand customer behavior, preferences, and lifetime value"
      ic,
  o: n: Users,col,
  o: r: "from-blue-500 to-cyan-500"
},
  {
  tit,
  l: e: "Financial Forecasting",descripti,
  o: n: "Predict revenue, expenses, and cash flow with AI accuracy"
      ic,
  o: n: BarChart3,col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  tit,
  l: e: "Operational Intelligence",descripti,
  o: n: "Monitor and optimize business operations in real-time",ic,
  o: n: TrendingUp,col,
  o: r: "from-orange-500 to-red-500"
},
  {
  tit,
  l: e: "Market Analysis",descripti,
  o: n: "Track competitors, market trends, and business opportunities"
      ic,
  o: n: Globe,col,
  o: r: "from-green-500 to-emerald-500"
},
  ]
  const integrations = [
  {
  na,
  m: e: "Salesforce",descripti,
  o: n: "Integrate CRM data for comprehensive customer insights",ic,
  o: n: Users,col,
  o: r: "from-blue-500 to-cyan-500"
},
  {
  na,
  m: e: "Google Analytics",descripti,
  o: n: "Combine web analytics with business data for complete picture",ic,
  o: n: BarChart3,col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  na,
  m: e: "Shopify",descripti,
  o: n: "Analyze e-commerce performance and customer behavior",ic,
  o: n: Globe,col,
  o: r: "from-green-500 to-emerald-500"
},
  {
  na,
  m: e: "QuickBooks",descripti,
  o: n: "Connect financial data for comprehensive business analytics",ic,
  o: n: PieChart,col,
  o: r: "from-orange-500 to-red-500"
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="AI Data Analytics - Intelligent Business Intelligence Platform | Zion Tech Group"
        description="Transform your business with AI-powered data analytics, predictive insights, and automated reporting. Start free trial today."
        keywords="AI data analytics, business intelligence, predictive analytics, data insights, AI analytics platform"
      />

      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 relative z-10">
          <motion.div;
            className="className="text-center";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h1 className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6">
              AI Data Analytics;
            </h1>
            <p className="text-xl m,
  d:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Transform raw data into actionable insights with AI-powered analytics that predict trends, automate reporting, and drive business growth.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-emerald-700,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105">
                Start Free Trial;
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/10 transition-all duration-300">
                Watch Demo;
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            viewport={ on,
  c: e: true },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Powered by Advanced AI;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI engine processes massive amounts of data to uncover hidden patterns and predict future outcomes;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
  <motion.div;
                key={index},
  }
                className="className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10,
  hove: r: border-white/20 transition-all duration-300";"
                initial={ opacit,
  y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                whileHover={ y: -5, sca,
  l: e: 1.02 },
  }
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

      {/* Use Cases Section */},
  }
      <section className="py-20 bg-gradient-to-r from-white/5 to-white/10 relative">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            viewport={ on,
  c: e: true },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Analytics for Every Business Need;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From customer insights to financial forecasting, our AI analytics cover every aspect of your business;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
  <motion.div;
                key={index},
  }
                className="className="text-center";"
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${useCase.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            viewport={ on,
  c: e: true },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Proven Results;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join thousands of businesses who have transformed their decision-making with AI analytics;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
  <motion.div;
                key={index},
  }
                className="className="text-center";"
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.2 },
  }
              >
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Integrations Section */},
  }
      <section className="py-20 bg-gradient-to-r from-white/5 to-white/10 relative">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            viewport={ on,
  c: e: true },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Seamless Integrations;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Connect with your existing tools and data sources without disruption;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
  <motion.div;
                key={index},
  }
                className="className="text-center";"
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${integration.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <integration.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{integration.name}</h3>
                <p className="text-zion-slate-light">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */},
  }
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            className="className="text-center mb-16";"
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            viewport={ on,
  c: e: true },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing;
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your data analytics needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
  <motion.div;
                key={index},
  }
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
  plan.popular ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/10'
}`}
                initial={ opaci,
  t: y: 0, y: 30 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                whileHover={ y: -5, sca,
  l: e: 1.02 },
  }
              >
                {plan.popular && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular;
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
  plan.popular;
                    ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white,
  hove: r: from-emerald-700,
  hove: r:to-blue-700'
                    : 'bg-white/10 text-white border border-white/20 hove,
  r:bg-white/20'
}`}>
                  {plan.cta},
  }
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 relative">
        <div className="max-w-4xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            viewport={ on,
  c: e: true },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data Analytics?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses who have already revolutionized their decision-making with AI;
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-emerald-700,
  hove: r:to-blue-700 transition-all duration-300,
  transform: hover:scale-105">
                Start Free Trial;
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hove,
  r:bg-white/10 transition-all duration-300">
                Schedule Demo;
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}