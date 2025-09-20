import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import {
  Check
  Star,
  Zap,
  Brain,
  Cloud,
  Shield,
  Users,
  ArrowRight
  Crown
  Sparkles
  Flame
  Infinity
  Target
  Award
  Code
  Server
  Database
  Network
  Lock
  Globe
  Rocket
  Heart
  Scale
  Leaf
  TrendingUp
  DollarSign
  Calendar
  Clock
  MessageCircle
  Phone
  Mail
  MapPin
  Building
} from "lucide-react"
import { Link } from "react-router-dom"
export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')
  const [selectedPlan, setSelectedPlan] = useState<string>('pro')
  const pricingPlans = [
  {
  na,
  m: e: 'Starter',descripti,
  o: n: 'Perfect for small businesses and startups',pri,
  c: e: { monthl,
  y: 299, annu,
  a: l: 2990 },
  }
      featur,
  e: s: [
  'AI-powered business intelligence dashboardBasic cloud infrastructure setup'
        'Email supportMonthly reports'
        'Up to 5 usersBasic integrations'
]
      ico,
  n: Rocket,col,
  o: r: 'from-blue-500 to-cyan-500',popul,
  a: r: false,c,
  t: a: 'Get Started',li,
  n: k: '/contact'
},
  {
  na,
  m: e: 'Professional',descripti,
  o: n: 'Ideal for growing businesses and teams',pri,
  c: e: { monthl,
  y: 799, annu,
  a: l: 7990 },
  }
      featur,
  e: s: [
  'Everything in StarterAdvanced AI analytics and insights'
        'Custom dashboard developmentPriority support'
        'Up to 25 usersAdvanced integrations'
        'Custom reportingTraining sessions'
]
      ico,
  n: Building,col,
  o: r: 'from-purple-500 to-pink-500',popul,
  a: r: true,c,
  t: a: 'Get Started',li,
  n: k: '/contact'
},
  {
  na,
  m: e: 'Enterprise',descripti,
  o: n: 'For large organizations with complex needs',pri,
  c: e: { monthl,
  y: 1999, annu,
  a: l: 19990 },
  }
      featur,
  e: s: [
  'Everything in ProfessionalCustom AI model development'
        'Dedicated account manager24/7 priority support'
        'Unlimited usersCustom integrations'
        'White-label solutionsOn-site training'
        'SLA guarantees'
]
      ico,
  n: Globe,col,
  o: r: 'from-orange-500 to-red-500',popul,
  a: r: false,c,
  t: a: 'Contact Sales',li,
  n: k: '/contact'
},
  ]
  const servicePackages = [
  {
  tit,
  l: e: 'AI & Machine Learning',descripti,
  o: n: 'Custom AI solutions and ML model development',startingPri,
  c: e: 5000,ic,
  o: n: Cpu,col,
  o: r: 'from-blue-500 to-cyan-500',featur,
  e: s: [
  'Custom AI model developmentData preprocessing and cleaning'
        'Model training and optimizationAPI integration and deployment'
        'Ongoing model maintenance'
],
  },
  {
  tit,
  l: e: 'Cloud Infrastructure',descripti,
  o: n: 'Scalable cloud solutions and migration services',startingPri,
  c: e: 3000,ic,
  o: n: Server,col,
  o: r: 'from-green-500 to-emerald-500',featur,
  e: s: [
  'Cloud architecture designMigration planning and execution'
        'Security and compliance setupPerformance optimization'
        '24/7 monitoring and support'
],
  },
  {
  tit,
  l: e: 'Digital Twin Solutions',descripti,
  o: n: 'Advanced digital twin technology implementation',startingPri,
  c: e: 10000,ic,
  o: n: Target,col,
  o: r: 'from-purple-500 to-pink-500',featur,
  e: s: [
  '3D modeling and visualizationReal-time data integration'
        'Predictive analyticsIoT device connectivity'
        'Custom dashboard development'
],
  },
  {
  tit,
  l: e: 'Data Analytics',descripti,
  o: n: 'Comprehensive data analysis and insights',startingPri,
  c: e: 2500,ic,
  o: n: Database,col,
  o: r: 'from-orange-500 to-red-500',featur,
  e: s: [
  'Data strategy and planningETL pipeline development'
        'Advanced analytics and reportingData visualization'
        'Business intelligence dashboards'
],
  },
  ]

  const pricingFactors = [
  {
  tit,
  l: e: 'Project Complexity',descripti,
  o: n: 'More complex projects require additional resources and time',ic,
  o: n: Target,col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  tit,
  l: e: 'Customization Level',descripti,
  o: n: 'Highly customized solutions require more development effort',ic,
  o: n: Zap,col,
  o: r: 'from-green-500 to-emerald-500'
},
  {
  tit,
  l: e: 'Integration Requirements',descripti,
  o: n: 'Complex integrations with existing systems affect pricing',ic,
  o: n: Server,col,
  o: r: 'from-purple-500 to-pink-500'
},
  {
  tit,
  l: e: 'Support and Maintenance',descripti,
  o: n: 'Ongoing support and maintenance packages vary by level',ic,
  o: n: Shield,col,
  o: r: 'from-orange-500 to-red-500'
},
  ]
  const savings = billingCycle === 'annual' ? 0.17 : 0, // 17% savings for annual
const benefits = [
  {
  tit,
  l: e: 'Transparent Pricing',descripti,
  o: n: 'No hidden fees or surprise charges',ic,
  o: n: Shield
},
  {
  tit,
  l: e: 'Flexible Plans',descripti,
  o: n: 'Scale up or down as your business grows',ic,
  o: n: TrendingUp
},
  {
  tit,
  l: e: 'Custom Solutions',descripti,
  o: n: 'Tailored packages for unique requirements',ic,
  o: n: Target
},
  {
  tit,
  l: e: '24/7 Support',descripti,
  o: n: 'Round-the-clock assistance when you need it',ic,
  o: n: Users
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI, cloud, and technology solutions. Choose the plan that fits your business needs and budget."
      />
      
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full">
                <DollarSign className="w-16 h-16 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the pricing plan that best fits your business needs. We offer flexible options 
              for businesses of all sizes with transparent pricing and no hidden fees.
            </p>
            
            {/* Billing Toggle */},
  }
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')},
  },
  }
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
  billingCycle === 'annual' ? 'bg-indigo-500' : 'bg-slate-600'
}`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
}`} />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
                Annual
                {billingCycle === 'annual' && (
  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Save 17%
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
        
        {/* Background Elements */},
  }
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Pricing Plans */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the plan that aligns with your business goals and scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1,
  l: g:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
  <motion.div
                key={plan.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className={`relative p-8 rounded-2xl border transition-all duration-300,
  hove: r: scale-105 ${
  plan.popular
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hove,
  r:border-slate-600/50'
}`}
              >
                {plan.popular && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-6`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{plan.name}</h3>
                <p className="text-gray-300 text-center mb-6">{plan.description}</p>
                
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-6xl font-bold text-white">
                      {billingCycle === 'annual' 
                        ? Math.round(plan.price.annual * (1 - savings))
                        : plan.price.monthly
}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'annual' ? 'year' : 'month'},
  }
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
  <p className="text-green-400 text-sm mt-2">
                      Save ${Math.round(plan.price.annual * savings)} annually
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
  <li key={idx} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature},
  }
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.link},
  }
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
  plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600,
  hove: r: from-indigo-600,
  hove: r:to-purple-700 text-white,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-indigo-500/25'
                      : 'bg-slate-700,
  hove: r:bg-slate-600 text-white border border-slate-600 hove,
  r:border-slate-500'
}`}
                >
                  {plan.cta},
  }
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Custom Service Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need a custom solution? We offer tailored packages for specific business requirements
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {servicePackages.map((service, index) => (
  <div
                key={index},
  }
                className="className="p-8 rounded-2xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300 hove,
  r:scale-105 border border-slate-700/50";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">Starting at $</span>
                  <span className="text-4xl font-bold text-indigo-400">{service.startingPrice.toLocaleString()}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
  <li key={idx} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature},
  }
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="className="inline-flex items-center gap-2 text-indigo-400,
  hove: r:text-indigo-300 font-medium transition-colors";"
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Affects Pricing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the factors that influence project costs helps you plan your budget effectively
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {pricingFactors.map((factor, index) => (
  <div
                key={index},
  }
                className="className="text-center p-6 rounded-2xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300 hove,
  r:scale-105 border border-slate-700/50";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${factor.color} flex items-center justify-center mx-auto mb-6`}>
                  <factor.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{factor.title}</h3>
                <p className="text-gray-300 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities for large organizations with complex requirements
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-3 gap-8">
            {[
  {
  titl,
  e: 'Custom AI Models',descripti,
  o: n: 'Tailored machine learning models for your specific use case',ic,
  o: n: Cpu,col,
  o: r: 'from-blue-500 to-cyan-500'
},
  {
  tit,
  l: e: 'Advanced Security',descripti,
  o: n: 'Enterprise-grade security with compliance certifications',ic,
  o: n: Shield,col,
  o: r: 'from-green-500 to-emerald-500'
},
  {
  tit,
  l: e: 'Dedicated Support',descripti,
  o: n: '24/7 dedicated support team with SLA guarantees',ic,
  o: n: Users,col,
  o: r: 'from-purple-500 to-pink-500'
},
  {
  tit,
  l: e: 'White-Label Solutions',descripti,
  o: n: 'Customizable solutions with your branding',ic,
  o: n: Target,col,
  o: r: 'from-orange-500 to-red-500'
},
  {
  tit,
  l: e: 'On-Site Training',descripti,
  o: n: 'Comprehensive training programs at your location',ic,
  o: n: Award,col,
  o: r: 'from-indigo-500 to-purple-500'
},
  {
  tit,
  l: e: 'Custom Integrations',descripti,
  o: n: 'Seamless integration with your existing systems',ic,
  o: n: Server,col,
  o: r: 'from-cyan-500 to-blue-500'
},
  ].map((feature, index) => (
  <div
                key={index},
  }
                className="className="p-6 rounded-2xl bg-slate-800/50,
  hove: r: bg-slate-800 transition-all duration-300 hove,
  r:scale-105 border border-slate-700/50 text-center";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g:text-4xl font-bold text-white mb-4">
              Why Choose Our Pricing?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe in fair, transparent pricing that provides real value to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
  <motion.div
                key={benefit.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="text-center";"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */},
  }
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
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
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
  {
  questio,
  n: 'Can I change my plan at any time?',answ,
  e: r: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
},
  {
  questi,
  o: n: 'Do you offer custom pricing for enterprise clients?',answ,
  e: r: 'Absolutely! We work with enterprise clients to create custom pricing plans that meet their specific needs and requirements.'
},
  {
  questi,
  o: n: 'What payment methods do you accept?',answ,
  e: r: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
},
  {
  questi,
  o: n: 'Is there a setup fee?',answ,
  e: r: 'No setup fees for our standard plans. Custom enterprise solutions may have one-time setup costs depending on complexity.'
},
  ].map((faq, index) => (
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
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30";"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
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
            <h2 className="text-3xl,
  l: g: text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business or contact us for a custom solution. 
              Our team is here to help you make the right choice.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600,
  hove: r:from-cyan-600,
  hove: r:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-cyan-500/25";"
              >
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400,
  hove: r:bg-cyan-400 hove,
  r:text-white font-semibold rounded-lg transition-all duration-300";"
              >
                Talk to Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
