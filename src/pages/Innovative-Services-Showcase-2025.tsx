import React from 'react';
import { motion } from 'framer-motion';
import {

  Rocket, 
  Brain, 
  Shield, 
  Heart, 
  Link, 
  Network, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Zap,
  Globe,
  Users,
  DollarSign,
  Clock
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function InnovativeServicesShowcase2025() {

  const featuredServices = [
    {

      id: "ai-legal-document-generator",
      title: "AI-Powered Legal Document Generator",
      description: "Revolutionary AI-powered legal document generation with real-time compliance monitoring and multi-jurisdiction support. Save 80% on legal document creation time.",
      category: "AI & Legal Tech",
      price: "$2,999",
      period: "/month",
      features: ["AI-powered contract generation", "Real-time compliance monitoring", "Multi-jurisdiction support", "Automated legal advice"],
      benefits: ["80% faster document creation", "99.9% compliance accuracy", "Save $50K+ annually", "24/7 legal assistance"],
      marketPrice: "$2,500-6,000",
      roi: "500% within 6 months",
      link: "https://ziontechgroup.com/ai-legal-document-generator",
      icon: FileText,
      color: "from-blue-500 to-purple-600"
    },
    {

      id: "ai-supply-chain-optimization",
      title: "AI-Powered Supply Chain Optimization",
      description: "Transform your supply chain with AI-powered predictive analytics, real-time visibility, and automated optimization. Reduce costs by 25-40%.",
      category: "AI & Operations",
      price: "$4,999",
      period: "/month",
      features: ["AI-powered demand forecasting", "Real-time supply chain visibility", "Automated inventory optimization", "Predictive maintenance"],
      benefits: ["25-40% cost reduction", "35% efficiency improvement", "98% on-time delivery", "Real-time risk assessment"],
      marketPrice: "$4,000-10,000",
      roi: "450% within 7 months",
      link: "https://ziontechgroup.com/ai-supply-chain-optimization",
      icon: Network,
      color: "from-green-500 to-blue-600"
    },
    {

      id: "ai-healthcare-diagnostics",
      title: "AI-Powered Healthcare Diagnostics Platform",
      description: "Revolutionary healthcare diagnostics with 98% accuracy, real-time analysis, and clinical decision support. Transform patient care delivery.",
      category: "AI & Healthcare",
      price: "$7,999",
      period: "/month",
      features: ["98% diagnostic accuracy", "Real-time medical image analysis", "Clinical decision support", "HIPAA compliance"],
      benefits: ["60% error reduction", "80% faster diagnostics", "30-40% cost savings", "Early disease detection"],
      marketPrice: "$6,000-20,000",
      roi: "600% within 8 months",
      link: "https://ziontechgroup.com/ai-healthcare-diagnostics",
      icon: Heart,
      color: "from-red-500 to-pink-600"
    },
    {

      id: "blockchain-supply-chain-transparency",
      title: "Blockchain Supply Chain Transparency Platform",
      description: "End-to-end supply chain traceability with blockchain technology, smart contracts, and automated compliance. Build trust and transparency.",
      category: "Blockchain & Web3",
      price: "$3,999",
      period: "/month",
      features: ["End-to-end traceability", "Smart contract automation", "Immutable audit trail", "Real-time monitoring"],
      benefits: ["100% transparency increase", "40-60% compliance cost reduction", "99.9% data integrity", "Automated compliance"],
      marketPrice: "$3,000-8,000",
      roi: "500% within 7 months",
      link: "https://ziontechgroup.com/blockchain-supply-chain-transparency",
      icon: Link,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const industryStats = [
    { metric: "500+", label: "Enterprise Clients", icon: Users },
    { metric: "$2.5B+", label: "Revenue Generated", icon: DollarSign },
    { metric: "98%", label: "Client Satisfaction", icon: Star },
    { metric: "24/7", label: "Global Support", icon: Globe }
  ];

  const competitiveAdvantages = [
    "Industry-leading AI accuracy and performance",
    "Comprehensive integration capabilities",
    "Proven ROI with measurable results",
    "Dedicated expert support teams",
    "Cutting-edge technology stack",
    "Global deployment and scalability"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover Zion Tech Group's revolutionary AI-powered and blockchain-based micro SAAS services. Transform your business with cutting-edge technology solutions that deliver exceptional ROI and competitive advantages."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                <Rocket className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's revolutionary AI-powered and blockchain-based micro SAAS services. 
              Transform your business with cutting-edge technology solutions that deliver exceptional ROI and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Leadership & Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zion Tech Group has established itself as a leader in innovative technology solutions, 
              serving hundreds of enterprise clients worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700"
              >
                <stat.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.metric}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge services combine AI, blockchain, and advanced analytics to deliver 
              unprecedented value and competitive advantages for your business.
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Service Information */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-lg">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300">
                              <TrendingUp className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-white mb-2">
                        {service.price}
                        <span className="text-gray-400 text-lg">{service.period}</span>
                      </div>
                      <p className="text-gray-300">Market Price: {service.marketPrice}</p>
                      <p className="text-green-400 font-semibold">ROI: {service.roi}</p>
                    </div>

                    <div className="space-y-4">
                      <a
                        href={service.link}
                        className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                      >
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                      
                      <a
                        href="tel:+13024640950"
                        className="w-full inline-flex justify-center items-center px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Schedule Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our unique combination of cutting-edge technology, industry expertise, and proven results 
              sets us apart from the competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-fit mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{advantage}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who have already revolutionized their operations with our 
              innovative technology solutions. Get started today and experience unprecedented ROI.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Explore All Services
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}