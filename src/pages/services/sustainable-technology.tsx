<<<<<<< HEAD
import React from 'react.ts&apos;; import SEO from '../../components/SEO&apos;; import { motion  } from 'framer-motion.ts&apos;; import { Leaf, Globe, Zap, Shield, Users, Target, CheckCircle, Clock, TrendingUp, Sun, Wind, Battery, Recycle, Tree, Cloud, Database const SustainableTechnology: React.FC = (): JSX.Element => {; const features = [; {; icon: Leaf,; title: ';Green Computing&apos;,; description: 'Energy-efficient computing solutions and practices&apos; },; {; icon: Sun,; title: 'Renewable Energy&apos;,; description: 'Solar, wind, and sustainable power solutions&apos; },; {; icon: Recycle,; title: 'Circular Economy&apos;,; description: 'Waste reduction and resource optimization&apos;; },; {; icon: Globe,; title: 'Carbon Neutral&apos;,; description: 'Carbon footprint reduction and offsetting&apos;; }; ]; ; const solutions = [; {; title: 'Green Data Centers&apos;,; description: 'Energy-efficient data center infrastructure&apos;,; icon: '🏢'; },; {; title: 'Smart Grid Technology&apos;,; description: 'Intelligent energy distribution systems&apos;,; icon: '⚡'; },; {; title: 'IoT Environmental Monitoring&apos;,; description: 'Real-time environmental data collection&apos;,; icon: '🌱'; },; {; title: 'Sustainable Software&apos;,; description: 'Eco-friendly application development&apos;,; icon: '💻'; }; ]; ; const benefits = [; 'Reduce energy consumption and costs&apos;,; 'Minimize environmental impact&apos;,; 'Meet sustainability goals and compliance&apos;,; 'Improve brand reputation and ESG scores&apos;,; 'Future-proof your technology infrastructure&apos;,; 'Attract environmentally conscious customers&apos;; ]; ; return(; <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>;" <SEO ";" title="Sustainable Technology Services - Zion Tech Group&quot;";" description="Transform your business with sustainable technology solutions.Reduce environmental impact while improving efficiency and cost savings."; />;" {}";" <section className="pt-20 pb-16 px-4&quot;>";" <div className="max-w-7xl mx-auto&quot;>; <motion.div; initial = {; { opacity: 0,; y: 20; }}; animate = {; { opacity: 1,; y: 0; }};" transition={{ duration: 0.6   }}";" className="text-center&quot;" ";" <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-6&quot;>";" <Leaf className="w-5 h-5 text-green-400 mr-2&quot; />";" <span className="text-green-300 font-medium&quot;>Sustainable Technology</span>; </div>;" ";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6&quot;>;" Sustainable";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400&quot;>; Technology; </span>; </h1>;" ";" <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8&quot;>; Transform your business with sustainable technology solutions that reduce environmental impact; while improving efficiency, cost savings, and brand reputation.; </p>;" ";" <div className="flex flex-col sm:flex-row gap-4 justify-center&quot;>";" <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20&quot;>; Go Green;" </button>";" <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200&quot;>; Learn More; </button>; </div>; </motion.div>; </div>; </section>;" {}";" <section className="py-16 px-4&quot;>";" <div className="max-w-7xl mx-auto&quot;>; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }};" transition={{ duration: 0.6   }}";" className="text-center mb-16&quot;" ";" <h2 className="text-4xl font-bold text-white mb-4&quot;>; Sustainable Technology Features;" </h2>";" <p className="text-xl text-gray-300 max-w-2xl mx-auto&quot;>; Eco-friendly solutions for a greener future; </p>; </motion.div>;" ";" <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8&quot;>; {features.map((feature, index) => (; <motion.div; key={feature.title}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition = {; { duration: 0.6,; delay: index * 0.1;" }}";" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200 hover:scale-105&quot;" ";" <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4&quot;>";" <feature.icon className="w-6 h-6 text-green-400&quot; />;" </div>";" <h3 className="text-xl font-semibold text-white mb-2&quot;>{feature.title}</h3>";" <p className="text-gray-300&quot;>{feature.description}</p>; </motion.div>; ))}; </div>; </div>; </section>;" {}";" <section className="py-16 px-4 bg-slate-800/30&quot;>";" <div className="max-w-7xl mx-auto&quot;>; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }};" transition={{ duration: 0.6   }}";" className="text-center mb-16&quot;" ";" <h2 className="text-4xl font-bold text-white mb-4&quot;>; Sustainable Solutions;" </h2>";" <p className="text-xl text-gray-300 max-w-2xl mx-auto&quot;>; Comprehensive green technology implementations; </p>; </motion.div>;" ";" <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8&quot;>; {solutions.map((solution, index) => (; <motion.div; key={solution.title}; initial = {; { opacity: 0,; x: index % 2 === 0 ? -20 : 20; }}; whileInView = {; { opacity: 1,; x: 0; }}; transition = {; { duration: 0.6,; delay: index * 0.1;" }}";" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200&quot;" ";" <div className="flex items-start space-x-4&quot;>";" <div className="text-4xl&quot;>{solution.icon}</div>;" <div>";" <h3 className="text-xl font-semibold text-white mb-2&quot;>{solution.title}</h3>";" <p className="text-gray-300&quot;>{solution.description}</p>; </div>; </div>; </motion.div>; ))}; </div>; </div>; </section>;" {}";" <section className="py-16 px-4&quot;>";" <div className="max-w-7xl mx-auto&quot;>; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }};" transition={{ duration: 0.6   }}";" className="text-center mb-16&quot;" ";" <h2 className="text-4xl font-bold text-white mb-4&quot;>; Why Choose Sustainable Technology?;" </h2>";" <p className="text-xl text-gray-300 max-w-2xl mx-auto&quot;>; Benefits for your business and the planet; </p>; </motion.div>;" ";" <div className="grid md:grid-cols-2 gap-8&quot;>; <motion.div; initial = {; { opacity: 0,; x: -20; }}; whileInView = {; { opacity: 1,; x: 0; }};" transition={{ duration: 0.6   }}";" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8&quot;" ";" <h3 className="text-2xl font-semibold text-white mb-6&quot;>Key Benefits</h3>";" <ul className="space-y-4&quot;>;" {benefits.map((benefit, index) => (";" <li key={index} className="flex items-center space-x-3&quot;>";" <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0&quot; />";" <span className="text-gray-300&quot;>{benefit}</span>; </li>; ))}; </ul>; </motion.div>; <motion.div; initial = {; { opacity: 0,; x: 20; }}; whileInView = {; { opacity: 1,; x: 0; }};" transition={{ duration: 0.6   }}";" className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl p-8&quot;" ";" <h3 className="text-2xl font-semibold text-white mb-6&quot;>Go Green Today</h3>";" <p className="text-gray-300 mb-6&quot;>; Ready to make your business more sustainable? Our green technology experts can help you; implement eco-friendly solutions that benefit both your bottom line and the environment.;" </p>";" <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20&quot;>; Start Sustainability Journey; </button>; </motion.div>; </div>; </div>; </section>;" {}";" <section className="py-16 px-4&quot;>";" <div className="max-w-4xl mx-auto text-center&quot;>; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }}; transition={{ duration: 0.6   }};" ";" <h2 className="text-4xl font-bold text-white mb-4&quot;>; Ready to Go Green?;" </h2>";" <p className="text-xl text-gray-300 mb-8&quot;>; Transform your business with sustainable technology solutions;" </p>";" <div className="flex flex-col sm:flex-row gap-4 justify-center&quot;>";" <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20&quot;>; Start Green Transformation;" </button>";" <button className="px-8 py-4 border border-green-400/30 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200&quot;>; Schedule Consultation; </button>; </div>; </motion.div>; </div>; </section>; </div>; ); }; ;" export default SustainableTechnology;}}}";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function SustainableTechnology() {
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
            AI-Powered Sustainable Technology Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Sustainable Technology Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your sustainable technology operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Sustainable Technology Features</h2>
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
                <p className="text-gray-600">Comprehensive sustainable technology solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Sustainable Technology?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered sustainable technology platform today.
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
