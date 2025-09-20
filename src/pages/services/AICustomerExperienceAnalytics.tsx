import React from "react"
import { motion     } from "framer-motion";
import {
  Brain;
  Users,
  BarChart3,
  Heart,
  MessageCircle,
  TrendingUp,
  Eye,
  Target,
  Zap;
  CheckCircle;
  Star;
  ArrowRight;
  Play;
  Settings;
  Brain;
  Globe;
  Lock;
  Shield;
  Activity;
  PieChart;
  LineChart;
}
}
}
}
 } from "lucide-react";
const,
  AICustomerExperienceAnalytic: s: React.FC = () () => {
  const features = [
  {
  ico,
  n: Brain,tit,
  l: e: 'AI-Powered Sentiment Analysis',descripti,
  o: n: 'Advanced natural language processing to understand customer emotions and feedback in real-time.',pri,
  c: e: '$299/month'
},
  {
  ic,
  o: n: Eye,tit,
  l: e: 'Customer Journey Mapping',descripti,
  o: n: 'Visualize and track customer interactions across all touchpoints with predictive analytics.',pri,
  c: e: '$199/month'
},
  {
  ic,
  o: n: Target,tit,
  l: e: 'Churn Prediction & Prevention',descripti,
  o: n: 'Machine learning algorithms to identify at-risk customers and recommend retention strategies.',pri,
  c: e: '$249/month'
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: 'ROI Optimization Insights',descripti,
  o: n: 'Data-driven recommendations to maximize customer lifetime value and marketing effectiveness.',pri,
  c: e: '$179/month'
},
  ]
  const pricingPlans = [
  {
  na,
  m: e: 'Starter',pri,
  c: e: '$99',peri,
  o: d: '/month',descripti,
  o: n: 'Perfect for small businesses starting their customer analytics journey',featur,
  e: s: [
  'Up to 10,000 customer interactionsBasic sentiment analysis'
        'Standard reportingEmail support'
        'Basic journey mapping'
]
      c,
  t: a: 'Get Started',popul,
  a: r: false;
},
  {
  na,
  m: e: 'Professional',pri,
  c: e: '$299',peri,
  o: d: '/month',descripti,
  o: n: 'Ideal for growing companies with comprehensive customer experience needs',featur,
  e: s: [
  'Up to 100,000 customer interactionsAdvanced AI analytics'
        'Full journey mappingPriority support'
        'Churn predictionCustom dashboards'
]
      c,
  t: a: 'Start Free Trial',popul,
  a: r: true;
},
  {
  na,
  m: e: 'Enterprise',pri,
  c: e: '$799',peri,
  o: d: '/month',descripti,
  o: n: 'For large organizations requiring enterprise-grade customer analytics',featur,
  e: s: [
  'Unlimited customer interactionsCustom AI models'
        'White-label solution24/7 dedicated support'
        'Advanced security featuresSLA guarantees'
]
      ct,
  a: 'Contact Sales',popul,
  a: r: false;
},
  ]
  const benefits = [
  'Increase customer satisfaction by 40%Reduce churn rate by 35%'
    'Improve customer lifetime value by 50%Boost conversion rates by 25%'
    'Reduce support costs by 30%'
]

  const analyticsCapabilities = [
  'Real-time customer sentiment trackingMulti-channel interaction analysis'
    'Predictive customer behavior modelingAutomated customer feedback processing'
    'Advanced segmentation and targetingCompetitive benchmarking insights'
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white">
      {/* Animated Background */},
  }
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.1)_25%,rgba(16,185,129,0.1)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.1)_75%)] bg-[leng,
  t: h:20px_20px] animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Header Section */},
  }
        <motion.header;
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
            <motion.div;
              className="className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 mb-6";"
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
              <Users className="w-4 h-4" />
              AI-Powered Customer Analytics;
            </motion.div>
            
            <h1 className="text-5xl,
  m: d: text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              AI Customer Experience Analytics;
            </h1>
            
            <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform customer insights into actionable intelligence with AI-powered analytics that predict behavior, optimize experiences, and drive growth.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center items-center">
              <motion.button;
                className="className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl,
  hove: r:from-emerald-700,
  hove: r:to-teal-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-emerald-500/25 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                <Play className="w-5 h-5" />
                Start Free Trial;
              </motion.button>
              <motion.button;
                className="className="px-8 py-4 border border-emerald-500/30 text-emerald-300 font-semibold rounded-xl,
  hove: r: bg-emerald-500/10 transition-all duration-300 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                <Settings className="w-5 h-5" />
                Schedule Demo;
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Features Grid */},
  }
        <motion.section;
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
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Advanced Analytics Features;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive customer experience analytics designed to drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
              {features.map((feature, index) => (
  <motion.div;
                  key={feature.title},
  }
                  className="className="group relative p-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm,
  hove: r: border-emerald-500/40 transition-all duration-300";"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-teal-500/5 to-emerald-500/0 opacity-0 group-hov,
  e: r: opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hove,
  r:text-emerald-300 transition-colors">
                      {feature.title},
  }
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {feature.description},
  }
                    </p>
                    
                    <div className="text-2xl font-bold text-emerald-400">
                      {feature.price},
  }
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Analytics Capabilities */},
  }
        <motion.section;
          className="className="py-20 px-6 bg-gradient-to-br from-emerald-900/20 via-slate-900/50 to-teal-900/20";"
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
  m: d:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Comprehensive Analytics Capabilities;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From real-time sentiment analysis to predictive modeling, our platform provides everything you need to understand your customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
              {analyticsCapabilities.map((capability, index) => (
  <motion.div;
                  key={capability},
  }
                  className="className="flex items-start gap-4 p-4 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10";"
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
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Section */},
  }
        <motion.section;
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
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Transparent Pricing Plans;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your customer analytics needs. All plans include our core AI capabilities and expert support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
  <motion.div;
                  key={plan.name},
  }
                  className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
  plan.popular;
                      ? 'border-emerald-500 bg-gradient-to-br from-emerald-500/20 to-teal-500/20' 
                      : 'border-emerald-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50'
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
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular;
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-4">
                      <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
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
                  
                  <motion.button;
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
  plan.popular;
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white,
  hove: r: from-emerald-700,
  hove: r:to-teal-700'
                        : 'border border-emerald-500/30 text-emerald-300 hove,
  r:bg-emerald-500/10'
}`}
                    whileHover={ sca,
  l: e: 1.02 },
  }
                    whileTap={ sca,
  l: e: 0.98 },
  }
                  >
                    Get Started;
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */},
  }
        <motion.section;
          className="className="py-20 px-6 bg-gradient-to-br from-emerald-900/20 via-slate-900/50 to-teal-900/20";"
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
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Why Choose AI Customer Experience Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join leading companies that use our platform to understand their customers better and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
  <motion.div;
                  key={benefit},
  }
                  className="className="flex items-start gap-4 p-6 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10";"
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
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
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
        <motion.section;
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
  m: d: text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Ready to Transform Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and discover the power of AI-driven customer analytics.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center items-center">
              <motion.button;
                className="className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl,
  hove: r:from-emerald-700,
  hove: r:to-teal-700 transition-all duration-300 shadow-lg,
  hove: r:shadow-emerald-500/25 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                Start Free Trial;
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button;
                className="className="px-8 py-4 border border-emerald-500/30 text-emerald-300 font-semibold rounded-xl,
  hove: r: bg-emerald-500/10 transition-all duration-300 flex items-center gap-2";"
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
              >
                <Users className="w-5 h-5" />
                Contact Sales;
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default AICustomerExperienceAnalytics;