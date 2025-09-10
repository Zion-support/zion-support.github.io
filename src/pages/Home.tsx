import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { PerformanceOptimizer } from '../components/PerformanceOptimizer';
import { AccessibilityEnhancer } from '../components/AccessibilityEnhancer';
import { 
  Zap, 
  Brain, 
  Shield, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Calendar
} from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Zion Tech Group - AI-Powered Technology Solutions"
        description="Leading provider of AI-powered technology solutions, micro SaaS services, and innovative business automation tools for modern enterprises."
      />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div 
              className="text-center"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants} className="mb-6">
                <motion.div
                  className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">AI-Powered Solutions</span>
                </motion.div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Welcome to{' '}
                <motion.span 
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  Zion Tech Group
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Empowering businesses with cutting-edge AI technology, micro SaaS solutions, 
                and revolutionary automation tools for the digital future.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={itemVariants}
              >
                <motion.button 
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-4 h-4" />
                  <span>Get Started</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-slate-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-slate-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-slate-300">Support Available</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                We deliver innovative technology solutions that drive business growth and digital transformation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-6 h-6 text-white" />,
                  title: "AI-Powered Solutions",
                  description: "Leverage cutting-edge artificial intelligence to automate processes and drive innovation.",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: <Cpu className="w-6 h-6 text-white" />,
                  title: "Micro SaaS Services",
                  description: "Scalable, focused software solutions that grow with your business needs.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Shield className="w-6 h-6 text-white" />,
                  title: "Enterprise Ready",
                  description: "Robust, secure, and scalable solutions designed for enterprise environments.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Rocket className="w-6 h-6 text-white" />,
                  title: "Rapid Deployment",
                  description: "Get your solutions up and running quickly with our streamlined deployment process.",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Users className="w-6 h-6 text-white" />,
                  title: "Expert Team",
                  description: "Work with experienced professionals who understand your business needs.",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Award className="w-6 h-6 text-white" />,
                  title: "Proven Results",
                  description: "Track record of delivering successful projects and exceeding client expectations.",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of businesses already using our AI-powered solutions to drive growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button 
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 mx-auto sm:mx-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-5 h-5" />
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 mx-auto sm:mx-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Free Consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Enterprise Security</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Proven ROI</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}