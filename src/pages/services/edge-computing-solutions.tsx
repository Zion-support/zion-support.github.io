<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Cpu,; Network,; Zap,; Globe,; Shield,; BarChart3,; CheckCircle,; ArrowRight,; Play,; Download,; Server,; Wifi,; Smartphone,; Monitor,; Cloud,; Database,; Lock,; Activity,; Target,; Users,; Building2,; Factory,; Truck,; Satellite,; Clock,; DollarSign,; TrendingUp,; Sparkles;  } from 'lucide-react'; ; export default function EdgeComputingSolutions() {; const features = [; {; icon: <Cpu className="w-6 h-6" />,";"";" title: "Edge AI Processing",";"";" description: "Deploy AI models directly on edge devices for real-time inference and decision making without cloud dependency.";";" },;";" {;";"";" icon: <Network className="w-6 h-6" />,";"";" title: "5G Edge Networks",";"";" description: "Ultra-low latency edge computing infrastructure optimized for 5G networks and IoT applications.";";" },;";" {;";"";" icon: <Zap className="w-6 h-6" />,";"";" title: "Real-time Analytics",";"";" description: "Process data at the edge for instant insights and immediate response to critical events.";";" },;";" {;";"";" icon: <Shield className="w-6 h-6" />,";"";" title: "Edge Security",";"";" description: "Advanced security protocols and encryption at the edge to protect data and applications.";";" },;";" {;";"";" icon: <BarChart3 className="w-6 h-6" />,";"";" title: "Edge Orchestration",";"";" description: "Intelligent workload distribution and resource management across edge computing nodes.";";" },;";" {;";"";" icon: <Globe className="w-6 h-6" />,";"";" title: "Global Edge Network",";"";" description: "Worldwide edge computing infrastructure with strategic node placement for optimal performance."; }; ];" ;";" const pricingPlans = [;";" {;";"";" name: "Edge Starter",";"";" price: "$199",";"";" period: "/month",";"";" description: "Perfect for small IoT deployments and edge applications",;"";" features: [";"5 edge computing nodes",";"Basic edge AI capabilities",";"Standard security features",";"Email support",";"Basic monitoring",";"100GB edge storage"; ],;" popular: false;";" },;";" {;";"";" name: "Edge Professional",";"";" price: "$599",";"";" period: "/month",";"";" description: "Ideal for medium-scale edge computing deployments",;"";" features: [";"25 edge computing nodes",";"Advanced edge AI processing",";"Enhanced security protocols",";"Priority support",";"Advanced monitoring & analytics",";"500GB edge storage",";"Edge orchestration",";"Custom edge applications"; ],;" popular: true;";" },;";" {;";"";" name: "Edge Enterprise",";"";" price: "$1,499",";"";" period: "/month",";"";" description: "For large-scale enterprise edge computing needs",;"";" features: [";"Unlimited edge computing nodes",";"Custom edge AI models",";"Enterprise-grade security",";"24/7 dedicated support",";"Custom edge infrastructure",";"Unlimited edge storage",";"Edge-to-cloud integration",";"SLA guarantees"; ],; popular: false; }; ];" ;";" const useCases = [;";" {;";"";" title: "Smart Cities",";"";" description: "Real-time traffic management, environmental monitoring, and public safety systems.",";"";" icon: <Building2 className="w-8 h-8" />;";" },;";" {;";"";" title: "Industrial IoT",";"";" description: "Predictive maintenance, quality control, and process optimization in manufacturing.",";"";" icon: <Factory className="w-8 h-8" />;";" },;";" {;";"";" title: "Autonomous Vehicles",";"";" description: "Real-time decision making, sensor processing, and navigation systems.",";"";" icon: <Truck className="w-8 h-8" />;";" },;";" {;";"";" title: "Healthcare",";"";" description: "Patient monitoring, medical device management, and emergency response systems.",";"";" icon: <Users className="w-8 h-8" />; }; ];" ;";" const benefits = [;";" {;";"";" title: "Ultra-Low Latency",";"";" description: "Response times under 10ms for critical applications",";"";" icon: <Zap className="w-6 h-6" />;";" },;";" {;";"";" title: "Reduced Bandwidth",";"";" description: "Process data locally, reducing cloud transmission costs",";"";" icon: <Network className="w-6 h-6" />;";" },;";" {;";"";" title: "Enhanced Privacy",";"";" description: "Keep sensitive data local and secure",";"";" icon: <Shield className="w-6 h-6" />;";" },;";" {;";"";" title: "Scalability",";"";" description: "Easily scale edge computing resources as needed",";"";" icon: <TrendingUp className="w-6 h-6" />;" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;"";" {}";"";" <section className="relative pt-20 pb-16 overflow-hidden">";"";" <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>";"";" <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center max-w-4xl mx-auto";"";" >";"";" <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">";"";" <Sparkles className="w-4 h-4 mr-2" />;";" Next-Generation Edge Computing;"";" </div>";"";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;";" Edge Computing Solutions;"";" </h1>";"";" <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;";" Transform your business with cutting-edge edge computing technology.Process data closer to the source for faster insights, reduced latency, and enhanced performance.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">";"";" <Play className="w-5 h-5 mr-2" />;";" Get Started;"";" </button>";"";" <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300">";"";" <Download className="w-5 h-5 mr-2" />; Download Whitepaper; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Advanced Edge Computing Capabilities;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">;" Comprehensive edge computing solutions designed for the modern digital enterprise;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8, delay: index * 0.1 }}";"";" className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group";"";" >";"";" <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">";"";" <div className="text-blue-400">;";" {feature.icon};";" </div>;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>";"";" <p className="text-gray-400 leading-relaxed">{feature.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-gradient-to-r from-slate-800/30 to-blue-800/30">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Why Choose Edge Computing?;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">;" Discover the advantages of processing data closer to where it's generated;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">; {benefits.map((benefit, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8, delay: index * 0.1 }}";"";" className="text-center group";"";" >";"";" <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">";"";" <div className="text-blue-400">;";" {benefit.icon};";" </div>;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>";"";" <p className="text-gray-400 leading-relaxed">{benefit.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Industry Applications;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">;" Edge computing solutions tailored for specific industry needs and use cases;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">; {useCases.map((useCase, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8, delay: index * 0.1 }}";"";" className="text-center group";"";" >";"";" <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">";"";" <div className="text-purple-400">;";" {useCase.icon};";" </div>;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>";"";" <p className="text-gray-400 leading-relaxed">{useCase.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-gradient-to-r from-slate-800/30 to-blue-800/30">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Edge Computing Plans;"";" </h2>";"";" <p className="text-xl text-gray-400 max-w-3xl mx-auto">;" Flexible pricing options designed to scale with your edge computing needs;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">; {pricingPlans.map((plan, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.8, delay: index * 0.1 }}; className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border rounded-2xl p-8 ${; plan.popular; ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20';" : 'border-gray-700';";" }`};";" >;"";" {plan.popular && (";"";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";"";" <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">; Most Popular;" </span>;";" </div>;";" )};";"";" <div className="text-center mb-8">";"";" <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>";"";" <div className="flex items-baseline justify-center mb-4">";"";" <span className="text-4xl font-bold text-white">{plan.price}</span>";"";" <span className="text-gray-400 ml-1">{plan.period}</span>;"";" </div>";"";" <p className="text-gray-400">{plan.description}</p>;";" </div>;";"";" <ul className="space-y-4 mb-8">;"";" {plan.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center">";"";" <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />";"";" <span className="text-gray-300">{feature}</span>; </li>; ))}; </ul>; <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${; plan.popular; ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'; : 'border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'; }`}>; Get Started; </button>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="max-w-4xl mx-auto";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-6">;";" Ready to Deploy Edge Computing?;"";" </h2>";"";" <p className="text-xl text-gray-400 mb-8">;";" Join leading enterprises who are already leveraging edge computing for competitive advantage;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">;"";" Start Free Trial";"";" <ArrowRight className="w-5 h-5 ml-2" />;"";" </button>";"";" <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300">; Schedule Consultation; </button>; </div>; </motion.div>; </div>;" </section>;";" </div>;";" );"";" }";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function EdgeComputingSolutions() {
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
            AI-Powered Edge Computing Solutions Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Edge Computing Solutions Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your edge computing solutions operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Edge Computing Solutions Features</h2>
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
                <p className="text-gray-600">Comprehensive edge computing solutions solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Edge Computing Solutions?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered edge computing solutions platform today.
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
