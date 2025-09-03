<<<<<<< HEAD
{}"";" <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">";" <div className="max-w-7xl mx-auto">; <motion.div; initial={{ opacity: 0, y: 20 }};" animate={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8   }}";" className="text-center";" >"";" <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">";" <Sparkles className="w-4 h-4 mr-2" /> Revolutionary AI-Powered Platform";" </div>";" <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;" AI Micro SaaS Platform";" </h1>";" <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">; Build, deploy, and scale intelligent SaaS applications in minutes.; Our AI-powered platform provides everything you need to create the;" next generation of business software.";" </p>";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";" <Link";" to="/contact";" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105";" >";" Start Building Today";" <ArrowRight className="ml-2 w-5 h-5" /> </Link>";" <Link";" to="/pricing";" className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"; >; View Pricing; </Link>; </div>; </motion.div>; </div>; </section>;" ";" {}";" <section className="py-16 px-4 sm:px-6 lg:px-8">";" <div className="max-w-7xl mx-auto">; <motion.div; initial={{ opacity: 0, y: 20 }};" whileInView={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >"";" <h2 className="text-3xl md:text-4xl font-bold mb-4">;" Everything You Need to Build AI-Powered SaaS";" </h2>";" <p className="text-xl text-gray-400 max-w-2xl mx-auto">; Our platform combines cutting-edge AI technology with; enterprise-grade infrastructure to give you the tools you need to; succeed.; </p>;" </motion.div>";" ";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index; <motion.div; key={feature.title}; initial={{ opacity: 0, y: 20 }};" whileInView={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8, delay: index * 0.1 }}";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300";" >"";" <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">";" <feature.icon className="w-6 h-6 text-white" />";" </div>";" <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>";" <p className="text-gray-400 mb-4">{feature.description}</p>";" <ul className="space-y-2">; {feature.benefits.map((benefit, idx) => (;" <li";" key={idx}";" className="flex items-center text-sm text-gray-300";" >"";" <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" /> {benefit}; </li>; ))}; </ul>; </motion.div>; ))}; </div>; </div>; </section>;" ";" {}";" <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">";" <div className="max-w-7xl mx-auto">; <motion.div; initial={{ opacity: 0, y: 20 }};" whileInView={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >"";" <h2 className="text-3xl md:text-4xl font-bold mb-4">;" Transparent Pricing for Every Business";" </h2>";" <p className="text-xl text-gray-400 max-w-2xl mx-auto">; Choose the plan that fits your needs.All plans include our core; AI capabilities and enterprise-grade security.; </p>;" </motion.div>";" ";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">; {pricingPlans.map(plan: unknown, index: unknown (; <motion.div; key={plan.name}; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.8, delay: index * 0.1 }}; className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${; plan.popular'; ? 'border-cyan-500 shadow-lg shadow-cyan-500/20''; : 'border-gray-700'`; }`};" >";" {plan.popular && (";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";" <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">; Most Popular; </span>; </div>;" )}";" ";" <div className="text-center mb-6">";" <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>";" <div className="flex items-baseline justify-center mb-2">";" <span className="text-4xl font-bold">{plan.price}</span>";" <span className="text-gray-400 ml-1">{plan.period}</span>";" </div>";" <p className="text-gray-400">{plan.description}</p>;" </div>";" ";" <ul className="space-y-3 mb-8">";" {plan.features.map((feature, idx) => (";" <li key={idx} className="flex items-center text-gray-300">";" <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" /> {feature}; </li>; ))}; </ul>; <Link'; to={plan.name === 'Enterprise' ? '/contact' : '/pricing'}`; className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${; plan.popular'; ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700''; : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'`; }`}; >; {plan.cta}; </Link>; </motion.div>; ))}; </div>; </div>; </section>;" ";" {}";" <section className="py-16 px-4 sm:px-6 lg:px-8">";" <div className="max-w-7xl mx-auto">; <motion.div; initial={{ opacity: 0, y: 20 }};" whileInView={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8   }}";" className="text-center mb-16";" >"";" <h2 className="text-3xl md:text-4xl font-bold mb-4">;" Perfect for Any Industry";" </h2>";" <p className="text-xl text-gray-400 max-w-2xl mx-auto">; Our platform is designed to handle any type of SaaS application,; from simple tools to complex enterprise solutions.; </p>;" </motion.div>";" ";" <div className="grid grid-cols-1 md:grid-cols-2 gap-8">; {useCases.map(useCase: unknown, index: unknown; <motion.div; key={useCase.title}; initial={{ opacity: 0, y: 20 }};" whileInView={{ opacity: 1, y: 0 }}";" transition={{ duration: 0.8, delay: index * 0.1 }}";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300";" >"";" <div className="flex items-start space-x-4">";" <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">";" <useCase.icon className="w-6 h-6 text-white" />";" </div>";" <div className="flex-1">";" <h3 className="text-xl font-semibold mb-2">;" {useCase.title}";" </h3>";" <p className="text-gray-400 mb-4">{useCase.description}</p>";" <ul className="space-y-2">; {useCase.benefits.map((benefit, idx) => (;" <li";" key={idx}";" className="flex items-center text-sm text-gray-300";" >"";" <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" /> {benefit}; </li>; ))}; </ul>; </div>; </div>; </motion.div>; ))}; </div>; </div>; </section>;" ";" {}";" <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">";" <div className="max-w-4xl mx-auto text-center">; <motion.div; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" >";" <h2 className="text-3xl md:text-4xl font-bold mb-6">;" Ready to Build the Future?";" </h2>";" <p className="text-xl text-gray-300 mb-8">; Join thousands of businesses already using our AI-powered platform;" to create innovative SaaS solutions.";" </p>";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";" <Link";" to="/contact";" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105";" >";" Start Your Free Trial";" <ArrowRight className="ml-2 w-5 h-5" /> </Link>";" <Link";" to="/pricing";" className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"; >; View Full Pricing; </Link>; </div>; </motion.div>; </div>; </section>;" ";" {}";" <section className="py-16 px-4 sm:px-6 lg:px-8">";" <div className="max-w-4xl mx-auto text-center">; <motion.div; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" >";" <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">";" <div className="flex flex-col items-center">";" <Phone className="w-8 h-8 text-cyan-400 mb-4" />";" <h3 className="font-semibold mb-2">Phone</h3>";" <p className="text-gray-400">+1 302 464 0950</p>";" </div>";" <div className="flex flex-col items-center">";" <Mail className="w-8 h-8 text-cyan-400 mb-4" />";" <h3 className="font-semibold mb-2">Email</h3>";" <p className="text-gray-400">kleber@ziontechgroup.com</p>";" </div>";" <div className="flex flex-col items-center">";" <MapPin className="w-8 h-8 text-cyan-400 mb-4" />";" <h3 className="font-semibold mb-2">Address</h3>";" <p className="text-gray-400">; 364 E Main St STE 1008; <br / / />; Middletown DE 19709; </p> </div>; </div>; </motion.div>; </div>; </section>; </div>;" )}";" '"`";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiMicroSaasPlatform() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Ai Micro Saas Platform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Micro Saas Platform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai micro saas platform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Micro Saas Platform Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive ai micro saas platform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Micro Saas Platform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai micro saas platform platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
