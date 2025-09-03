<<<<<<< HEAD
import { Users, Brain, Target, CheckCircle, Clock, TrendingUp, FileText, Search, Award, Shield, Globe, Zap, Heart, Building, UserCheck, UserPlus const AIHRPlatform: React.FC = () => { const features = [{ icon: Brain, title: 'AI Recruitment', description: 'Intelligent candidate screening and matching' }, { icon: Users, title: 'Talent Management', description: 'Comprehensive employee lifecycle management' }, { icon: Target, title: 'Performance Analytics', description: 'Data-driven insights for better decisions'; },; {; icon: Shield,; title: 'Compliance Automation',; description: 'Automated HR compliance and reporting'; }; ]; const modules = [{ title: 'Recruitment & Onboarding', description: 'Streamlined hiring process with AI assistance', icon: '🎯' }, { title: 'Performance Management', description: '360-degree feedback and goal tracking', icon: '📊' }, { title: 'Learning & Development', description: 'Personalized training and skill development', icon: '🎓'; },; {; title: 'Employee Engagement',; description: 'Monitor and improve workplace satisfaction',; icon: '❤️'; }; ]; const benefits = [; 'Reduce time-to-hire by 50% with AI screening',; 'Improve candidate quality and retention rates',; 'Automate routine HR tasks and workflows',; 'Data-driven insights for better decisions',; 'Enhanced employee experience and engagement',; 'Compliance automation and risk reduction'; ]; return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"> <SEO title="AI HR Platform Services - Zion Tech Group" description="Transform your HR operations with AI-powered recruitment, talent management, and performance analytics.Streamline HR processes and improve employee experience." /> {} <section className="pt-20 pb-16 px-4"> <div className="max-w-7xl mx-auto"> <motion.div initial = { { opacity: 0, y: 20 }} animate = { { opacity: 1, y: 0 }} transition={{ duration: 0.6   }} className="text-center" <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-400/30 mb-6"> <Users className="w-5 h-5 text-blue-400 mr-2" /> <span className="text-blue-300 font-medium">AI HR Platform</span> </div> <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"> AI HR <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400"> Platform </span> </h1> <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"> Revolutionize your HR operations with AI-powered recruitment, talent management, and performance analytics.Streamline processes and create exceptional employee experiences.</p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-indigo-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"> Get Started </button> <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"> Schedule Demo </button> </div> </motion.div> </div> </section>; {} <section className="py-16 px-4">; <div className="max-w-7xl mx-auto"> <motion.div initial = { { opacity: 0, y: 20 }} whileInView = { { opacity: 1, y: 0 }} transition={{ duration: 0.6   }} className="text-center mb-16" <h2 className="text-4xl font-bold text-white mb-4"> AI HR Platform Features </h2> <p className="text-xl text-gray-300 max-w-2xl mx-auto"> Comprehensive HR solutions powered by artificial intelligence </p> </motion.div> <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {features.map((feature, index) => ( <motion.div key={feature.title} initial = { { opacity: 0, y: 20 }} whileInView = { { opacity: 1, y: 0 }} transition = { { duration: 0.6, delay: index * 0.1 }} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-200 hover:scale-105" <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4"> <feature.icon className="w-6 h-6 text-blue-400" /> </div> <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3> <p className="text-gray-300">{feature.description}</p> </motion.div>; ))} </div> </div> </section> {} <section className="py-16 px-4 bg-slate-800/30">; <div className="max-w-7xl mx-auto"> <motion.div initial = { { opacity: 0, y: 20 }} whileInView = { { opacity: 1, y: 0 }} transition={{ duration: 0.6   }} className="text-center mb-16" <h2 className="text-4xl font-bold text-white mb-4"> Platform Modules </h2> <p className="text-xl text-gray-300 max-w-2xl mx-auto"> Comprehensive HR solutions for every aspect of people management </p> </motion.div> <div className="grid md:grid-cols-2 gap-8"> {modules.map((module, index) => ( <motion.div key={module.title} initial = { { opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView = { { opacity: 1, x: 0 }} transition = { { duration: 0.6, delay: index * 0.1 }} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-200" <div className="flex items-start space-x-4"> <div className="text-4xl">{module.icon}</div> <div> <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3> <p className="text-gray-300">{module.description}</p> </div> </div> </motion.div>; ))} </div> </div> </section> {} <section className="py-16 px-4">; <div className="max-w-7xl mx-auto"> <motion.div initial = { { opacity: 0, y: 20 }} whileInView = { { opacity: 1, y: 0 }} transition={{ duration: 0.6   }} className="text-center mb-16" <h2 className="text-4xl font-bold text-white mb-4"> Why Choose AI HR Platform? </h2> <p className="text-xl text-gray-300 max-w-2xl mx-auto"> Transform your HR operations with intelligent automation </p> </motion.div> <div className="grid md:grid-cols-2 gap-8"> <motion.div initial = { { opacity: 0, x: -20 }} whileInView = { { opacity: 1, x: 0 }} transition={{ duration: 0.6   }} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8" <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3> <ul className="space-y-4"> {benefits.map((benefit, index) => ( <li key={index} className="flex items-center space-x-3"> <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> <span className="text-gray-300">{benefit}</span> </li> ))} </ul> </motion.div> <motion.div initial = { { opacity: 0, x: 20 }} whileInView = { { opacity: 1, x: 0 }} transition={{ duration: 0.6   }} className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl p-8" <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3> <p className="text-gray-300 mb-6"> Ready to transform your HR operations? Our AI HR experts can help you implement intelligent solutions that streamline processes and improve employee experience.</p> <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-indigo-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"> Contact HR Experts </button> </motion.div> </div> </div> </section> {} <section className="py-16 px-4">; <div className="max-w-4xl mx-auto text-center"> <motion.div initial = { { opacity: 0, y: 20 }} whileInView = { { opacity: 1, y: 0 }} transition={{ duration: 0.6   }} <h2 className="text-4xl font-bold text-white mb-4"> Ready to Transform Your HR? </h2> <p className="text-xl text-gray-300 mb-8"> Join the AI revolution in human resources management </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-indigo-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"> Start HR Transformation </button> <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"> Request Demo; </button>; </div>; </motion.div>; </div>; </section>; </div>; ); }; export default AIHRPlatform;}}}
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiHrPlatform() {
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
            AI-Powered Ai Hr Platform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Hr Platform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai hr platform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Hr Platform Features</h2>
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
                <p className="text-gray-600">Comprehensive ai hr platform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Hr Platform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai hr platform platform today.
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
