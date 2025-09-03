<<<<<<< HEAD
import React from 'react'; import SEO from '../../components/SEO'; import { motion  } from 'framer-motion'; import { Brain, Zap, Target, CheckCircle, Clock, TrendingUp, Database, Shield, Globe, Users, Cpu, Network, BarChart3, Activity, Atom, Rocket const QuantumMachineLearning: React.FC = (): JSX.Element => {; const features = [; {; icon: Brain,; title: 'Quantum Neural Networks',; description: 'Advanced quantum computing for neural network optimization'; },; {; icon: Zap,; title: 'Quantum Speedup',; description: 'Exponential acceleration for machine learning algorithms'; },; {; icon: Database,; title: 'Quantum Data Processing',; description: 'Process massive datasets with quantum efficiency'; },; {; icon: Target,; title: 'Quantum Optimization',; description: 'Solve complex optimization problems instantly'; }; ]; ; const applications = [; {; title: 'Drug Discovery',; description: 'Accelerate pharmaceutical research with quantum ML',; icon: '💊'; },; {; title: 'Financial Modeling',; description: 'Advanced risk assessment and portfolio optimization',; icon: '💰'; },; {; title: 'Climate Research',; description: 'Complex climate modeling and prediction',; icon: '🌍'; },; {; title: 'AI Training',; description: 'Train large language models faster',; icon: '🤖'; }; ]; ; const benefits = [; 'Exponential speedup for ML algorithms',; 'Process massive datasets in seconds',; 'Solve previously intractable problems',; 'Unlock new AI capabilities',; 'Competitive advantage in innovation',; 'Future-proof your ML infrastructure'; ]; ; return(; <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="Quantum Machine Learning Services - Zion Tech Group";"";" description="Revolutionize your AI with quantum machine learning.Achieve exponential speedup and solve previously intractable problems with quantum computing.";";" />;"";" {}";"";" <section className="pt-20 pb-16 px-4">";"";" <div className="max-w-7xl mx-auto">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; animate = {;" { opacity: 1,;";" y: 0;";" }};"";" transition={{ duration: 0.6   }}";"";" className="text-center";";"";" <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full border border-purple-400/30 mb-6">";"";" <Brain className="w-5 h-5 text-purple-400 mr-2" />";"";" <span className="text-purple-300 font-medium">Quantum Machine Learning</span>;";" </div>;";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;"";" Quantum";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-400">;" Machine Learning;";" </span>;";" </h1>;";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;" Revolutionize your AI with quantum machine learning.Achieve exponential speedup and solve;";" previously intractable problems with the power of quantum computing.;";" </p>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-indigo-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20">;";" Get Started;"";" </button>";"";" <button className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200">; Learn More; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 px-4">";"";" <div className="max-w-7xl mx-auto">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {;" { opacity: 1,;";" y: 0;";" }};"";" transition={{ duration: 0.6   }}";"";" className="text-center mb-16";";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Quantum ML Features;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Powerful quantum computing capabilities for machine learning;";" </p>;";" </motion.div>;";"";" <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">; {features.map((feature, index) => (; <motion.div; key={feature.title}; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,; y: 0; }};" transition = {;";" { duration: 0.6,;";" delay: index * 0.1;"";" }}";"";" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-200 hover:scale-105";";"";" <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">";"";" <feature.icon className="w-6 h-6 text-purple-400" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>";"";" <p className="text-gray-300">{feature.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 px-4 bg-slate-800/30">";"";" <div className="max-w-7xl mx-auto">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {;" { opacity: 1,;";" y: 0;";" }};"";" transition={{ duration: 0.6   }}";"";" className="text-center mb-16";";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Industry Applications;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Transform industries with quantum machine learning;";" </p>;";" </motion.div>;";"";" <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">; {applications.map((application, index) => (; <motion.div; key={application.title}; initial = {; { opacity: 0,; x: index % 2 === 0 ? -20 : 20; }}; whileInView = {; { opacity: 1,; x: 0; }};" transition = {;";" { duration: 0.6,;";" delay: index * 0.1;"";" }}";"";" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-200";";"";" <div className="flex items-start space-x-4">";"";" <div className="text-4xl">{application.icon}</div>;"";" <div>";"";" <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>";"";" <p className="text-gray-300">{application.description}</p>; </div>; </div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 px-4">";"";" <div className="max-w-7xl mx-auto">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {;" { opacity: 1,;";" y: 0;";" }};"";" transition={{ duration: 0.6   }}";"";" className="text-center mb-16";";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Why Choose Quantum ML?;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Unlock unprecedented AI capabilities with quantum computing;";" </p>;";" </motion.div>;";"";" <div className="grid md:grid-cols-2 gap-8">; <motion.div; initial = {; { opacity: 0,; x: -20; }}; whileInView = {;" { opacity: 1,;";" x: 0;";" }};"";" transition={{ duration: 0.6   }}";"";" className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8";";"";" <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>";"";" <ul className="space-y-4">;"";" {benefits.map((benefit, index) => (";"";" <li key={index} className="flex items-center space-x-3">";"";" <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />";"";" <span className="text-gray-300">{benefit}</span>; </li>; ))}; </ul>; </motion.div>; <motion.div; initial = {; { opacity: 0,; x: 20; }}; whileInView = {;" { opacity: 1,;";" x: 0;";" }};"";" transition={{ duration: 0.6   }}";"";" className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/30 rounded-xl p-8";";"";" <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>";"";" <p className="text-gray-300 mb-6">;";" Ready to revolutionize your AI with quantum computing? Our quantum ML experts can help you;";" implement solutions that provide exponential speedup and solve previously impossible problems.;"";" </p>";"";" <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-indigo-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20">; Contact Quantum Experts; </button>; </motion.div>;" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-16 px-4">";"";" <div className="max-w-4xl mx-auto text-center">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; whileInView = {; { opacity: 1,;" y: 0;";" }};";" transition={{ duration: 0.6   }};";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Ready for Quantum ML?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8">;";" Transform your AI with quantum computing capabilities;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-indigo-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20">;";" Start Quantum ML Journey;"";" </button>";"";" <button className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200">; Schedule Demo; </button>; </div>; </motion.div>; </div>; </section>; </div>;" );";" };";" ;"";" export default QuantumMachineLearning;}}}";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function QuantumMachineLearning() {
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
            AI-Powered Quantum Machine Learning Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Quantum Machine Learning Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your quantum machine learning operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Quantum Machine Learning Features</h2>
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
                <p className="text-gray-600">Comprehensive quantum machine learning solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Quantum Machine Learning?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered quantum machine learning platform today.
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
