import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Rocket, 
  Brain, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Target,
  Shield,
  Code,
  Globe,
  Heart,
  Atom,
  Cpu
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function MicroSAAS() {
  const microSAASServices = [
    {
      title: "AI Business Intelligence",
      description: "Machine learning and data science solutions",
      href: "/services/ai-business-intelligence",
      icon: Brain,
      color: "from-purple-500 to-cyan-500",
      price: "$99/month"
    },
    {
      title: "AI Healthcare Platform",
      description: "Medical AI and diagnostics solutions",
      href: "/services/ai-healthcare-platform",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      price: "$149/month"
    },
    {
      title: "AI Content Creation",
      description: "Content generation and optimization",
      href: "/services/ai-content-creation",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      price: "$79/month"
    },
    {
      title: "AI Cybersecurity",
      description: "AI-powered security solutions",
      href: "/services/ai-cybersecurity",
      icon: Shield,
      color: "from-green-500 to-blue-500",
      price: "$129/month"
    },
    {
      title: "Quantum Computing",
      description: "Quantum AI and optimization",
      href: "/services/quantum-computing",
      icon: Atom,
      color: "from-purple-500 to-pink-500",
      price: "$199/month"
    },
    {
      title: "IoT Edge Computing",
      description: "IoT and real-time processing",
      href: "/services/iot-edge-computing",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      price: "$119/month"
    }
  ];

  const features = [
    "Transparent pricing starting at $99/month",
    "AI-powered automation and optimization",
    "Scalable solutions for growing businesses",
    "24/7 support and maintenance",
    "Regular updates and new features",
    "Easy integration with existing systems"
  ];

  const benefits = [
    "Cost-effective AI solutions for small businesses",
    "No hidden fees or complex pricing structures",
    "Immediate access to cutting-edge AI technology",
    "Flexible subscription options",
    "Professional support and training",
    "Proven ROI and business impact"
  ];

  const useCases = [
    {
      title: "Small Businesses",
      description: "Affordable AI solutions for growth",
      icon: Target
    },
    {
      title: "Startups",
      description: "Scalable AI platforms for innovation",
      icon: Rocket
    },
    {
      title: "Medium Enterprises",
      description: "Comprehensive AI toolkits",
      icon: Building
    },
    {
      title: "Remote Teams",
      description: "Cloud-based AI collaboration tools",
      icon: Users
    }
  ];

  return (
    <>
      <SEO 
        title="Micro SAAS Products | Zion Tech Group"
        description="AI automations with transparent pricing starting at $99/month. Discover our affordable micro SAAS solutions for businesses of all sizes."
        keywords="micro saas, ai automation, affordable ai, business automation, saas pricing, zion tech group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Micro SAAS Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automations with
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Transparent Pricing</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Starting at $99/month. Discover our affordable micro SAAS products that bring cutting-edge AI technology 
                to businesses of all sizes without breaking the bank.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-200"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Banner */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-red-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-orange-100 mb-6">
                No hidden fees. No complex pricing structures. Just clear, affordable AI solutions.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-bold text-2xl rounded-lg">
                Starting at $99/month
              </div>
            </motion.div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Affordable AI solutions designed for modern businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-orange-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-medium rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the advantages of our affordable AI solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {features.slice(3).map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your business with affordable AI technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center hover:border-orange-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Businesses that need AI solutions without enterprise pricing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 text-center hover:border-orange-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using our affordable AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}