<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { ; Building2, Brain, Zap, Globe, Users, BarChart3,; Lock, Cpu, Network, Eye, AlertTriangle, CheckCircle,; ArrowRight, Star, Award, Phone, Mail, MapPin, Leaf,; Lightbulb, Wifi, TrafficCone, Droplets, Gauge;  } from 'lucide-react'; ; const AISmartCityInfrastructureManagement: React.FC = () => {; const features = [; {; icon: Brain,; title: "AI-Powered Traffic Management",";"";" description: "Real-time traffic flow optimization using machine learning algorithms";";" },;";" {;"";" icon: Lightbulb,";"";" title: "Smart Energy Grid",";"";" description: "Intelligent power distribution and renewable energy integration";";" },;";" {;"";" icon: Droplets,";"";" title: "Water Management System",";"";" description: "AI-driven water quality monitoring and distribution optimization";";" },;";" {;"";" icon: Wifi,";"";" title: "5G/6G Infrastructure",";"";" description: "Next-generation connectivity for IoT devices and smart sensors";";" },;";" {;"";" icon: Building2,";"";" title: "Building Automation",";"";" description: "Smart building management with energy efficiency optimization";";" },;";" {;"";" icon: Leaf,";"";" title: "Environmental Monitoring",";"";" description: "Real-time air quality, noise, and pollution tracking"; }; ];" ;";" const pricingTiers = [;";" {;";"";" name: "City Starter",";"";" price: "$25,000",";"";" period: "/month",";"";" description: "Perfect for small cities and municipalities",;"";" features: [";"Up to 100,000 citizens",";"Basic traffic management",";"Energy monitoring",";"Water quality tracking",";"24/7 system monitoring",";"Basic analytics dashboard",";"Email support";"";" ],";"";" cta: "Get Started",;" popular: false;";" },;";" {;";"";" name: "Metropolitan",";"";" price: "$75,000",";"";" period: "/month",";"";" description: "Ideal for medium-sized cities and urban areas",;"";" features: [";"Up to 500,000 citizens",";"Advanced AI algorithms",";"Smart grid integration",";"Traffic optimization",";"Environmental monitoring",";"Predictive analytics",";"Priority support",";"Custom integrations";"";" ],";"";" cta: "Start Free Trial",;" popular: true;";" },;";" {;";"";" name: "Mega City",";"";" price: "$200,000",";"";" period: "/month",";"";" description: "For large metropolitan areas and smart city networks",;"";" features: [";"Unlimited citizens",";"Custom AI models",";"Full infrastructure control",";"Advanced analytics",";"White-label solution",";"Dedicated support team",";"Custom development",";"Multi-city coordination";"";" ],";"";" cta: "Contact Sales",; popular: false; }; ];" ;";" const benefits = [;";" {;";"";" title: "Traffic Optimization",";"";" description: "Reduce congestion by up to 40% with AI-powered traffic management",;" icon: TrafficCone;";" },;";" {;";"";" title: "Energy Efficiency",";"";" description: "Save up to 35% on energy costs through smart grid optimization",;" icon: Lightbulb;";" },;";" {;";"";" title: "Environmental Impact",";"";" description: "Monitor and reduce pollution levels in real-time",;" icon: Leaf;";" },;";" {;";"";" title: "Public Safety",";"";" description: "Enhanced emergency response with intelligent monitoring systems",; icon: Shield; }; ];" ;";" const useCases = [;";" {;";"";" title: "Traffic Management",";"";" description: "AI-powered traffic light optimization, real-time route suggestions, and congestion prediction",;"";" icon: TrafficCone,";"";" color: "from-orange-500 to-red-500";";" },;";" {;";"";" title: "Energy Management",";"";" description: "Smart grid optimization, renewable energy integration, and demand response management",;"";" icon: Lightbulb,";"";" color: "from-yellow-500 to-orange-500";";" },;";" {;";"";" title: "Water Systems",";"";" description: "Intelligent water distribution, leak detection, and quality monitoring",;"";" icon: Droplets,";"";" color: "from-blue-500 to-cyan-500";";" },;";" {;";"";" title: "Public Safety",";"";" description: "Emergency response optimization, surveillance analytics, and incident prediction",;"";" icon: Shield,";"";" color: "from-red-500 to-pink-500";";" },;";" {;";"";" title: "Environmental Monitoring",";"";" description: "Air quality tracking, noise pollution monitoring, and climate data analysis",;"";" icon: Leaf,";"";" color: "from-green-500 to-emerald-500";";" },;";" {;";"";" title: "Building Management",";"";" description: "Smart building automation, energy efficiency, and occupant comfort optimization",;"";" icon: Building2,";"";" color: "from-purple-500 to-indigo-500";" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" {}";"";" <section className="relative py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center";"";" >";"";" <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">";"";" <Building2 className="w-4 h-4 mr-2" />;";" Smart City Technology;"";" </div>";"";" <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;"";" AI Smart City";"";" <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">";"";" {"}Infrastructure Management;";" </span>;"";" </h1>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;";" Transform your city into a smart, sustainable, and efficient urban environment.;";" Our AI platform manages all aspects of city infrastructure for optimal performance.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">;";" Start Free Trial;"";" </button>";"";" <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">; Watch Demo; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;";" Comprehensive Smart City Solutions;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">; Our platform integrates all aspects of urban infrastructure management;" into a unified, AI-powered system for maximum efficiency and sustainability.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.6, delay: index * 0.1 }}";"";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300";"";" >";"";" <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">";"";" <feature.icon className="w-6 h-6 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>";"";" <p className="text-gray-300">{feature.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">";"";" <div className="max-w-7xl mx-auto">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;";" Smart City Use Cases;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">; Discover how our AI platform can transform every aspect of your city's infrastructure;" and improve the quality of life for your citizens.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {useCases.map((useCase, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.6, delay: index * 0.1 }}";"";" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300";";" >;"";" <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center mb-4`}>";"";" <useCase.icon className="w-6 h-6 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>";"";" <p className="text-gray-300">{useCase.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-7xl mx-auto">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;";" Why Choose Our Smart City Platform?;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">; Experience the future of urban management with proven results;" and industry-leading smart city technology.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 gap-8">; {benefits.map((benefit, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }};";" whileInView={{ opacity: 1, x: 0 }};"";" transition={{ duration: 0.6, delay: index * 0.1 }}";"";" className="flex items-start space-x-4";"";" >";"";" <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">";"";" <benefit.icon className="w-6 h-6 text-white" />;";" </div>;"";" <div>";"";" <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>";"";" <p className="text-gray-300">{benefit.description}</p>; </div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">";"";" <div className="max-w-7xl mx-auto">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;";" Flexible Pricing Plans;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Choose the perfect plan for your city's size and smart infrastructure requirements.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">; {pricingTiers.map((tier, index) => (; <motion.div; key={index}; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.6, delay: index * 0.1 }}; className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${; tier.popular; ? 'border-green-500 ring-2 ring-green-500/20';" : 'border-gray-700';";" }`};";" >;"";" {tier.popular && (";"";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";"";" <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">; Most Popular;" </span>;";" </div>;";" )};";"";" <div className="text-center mb-6">";"";" <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>";"";" <div className="mb-4">";"";" <span className="text-4xl font-bold text-white">{tier.price}</span>";"";" <span className="text-gray-400">{tier.period}</span>;"";" </div>";"";" <p className="text-gray-300">{tier.description}</p>;";" </div>;";"";" <ul className="space-y-3 mb-8">;"";" {tier.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center text-gray-300">";"";" <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />; {feature}; </li>; ))}; </ul>; <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${; tier.popular; ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'; : 'bg-gray-700 text-white hover:bg-gray-600'; }`}>; {tier.cta}; </button>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-4xl mx-auto text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;";" Ready to Build Your Smart City?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8">;" Contact our team to learn more about implementing smart city infrastructure;";" management for your municipality.;";" </p>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">";"";" <div className="flex items-center justify-center space-x-3 text-gray-300">";"";" <Phone className="w-5 h-5 text-green-400" />;";" <span>+1 302 464 0950</span>;"";" </div>";"";" <div className="flex items-center justify-center space-x-3 text-gray-300">";"";" <Mail className="w-5 h-5 text-green-400" />;";" <span>kleber@ziontechgroup.com</span>;"";" </div>";"";" <div className="flex items-center justify-center space-x-3 text-gray-300">";"";" <MapPin className="w-5 h-5 text-green-400" />;" <span>Middletown, DE 19709</span>;";" </div>;";" </div>;";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300">;";" Schedule Demo;"";" </button>";"";" <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">; Download Brochure; </button>; </div>; </motion.div>; </div>; </section>; </div>;" );";" };";" ;"";" export default AISmartCityInfrastructureManagement;";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiSmartCityInfrastructureManagement() {
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
            AI-Powered Ai Smart City Infrastructure Management Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Smart City Infrastructure Management Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai smart city infrastructure management operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Smart City Infrastructure Management Features</h2>
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
                <p className="text-gray-600">Comprehensive ai smart city infrastructure management solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Smart City Infrastructure Management?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai smart city infrastructure management platform today.
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
