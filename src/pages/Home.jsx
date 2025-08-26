import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Brain, 
  Cloud, 
  Zap, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
              Transform your business with intelligent automation and next-generation cybersecurity.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-zion-slate-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">500+ Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/comprehensive-services">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/comprehensive-pricing">
                <motion.button 
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Pricing
                  <TrendingUp className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive innovation and growth in your organization
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI & Analytics</h3>
              <p className="text-zion-slate-light mb-4">
                Advanced AI-powered business intelligence and analytics solutions that transform data into actionable insights.
              </p>
              <ul className="text-sm text-zion-slate-light space-y-1">
                <li>• Machine Learning Models</li>
                <li>• Predictive Analytics</li>
                <li>• Natural Language Processing</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
              <p className="text-zion-slate-light mb-4">
                Enterprise-grade security and threat detection systems to protect your digital assets.
              </p>
              <ul className="text-sm text-zion-slate-light space-y-1">
                <li>• Threat Detection & Response</li>
                <li>• Security Auditing</li>
                <li>• Compliance Management</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Solutions</h3>
              <p className="text-zion-slate-light mb-4">
                Scalable cloud infrastructure and DevOps services for modern applications.
              </p>
              <ul className="text-sm text-zion-slate-light space-y-1">
                <li>• Infrastructure as Code</li>
                <li>• CI/CD Pipelines</li>
                <li>• Cloud Migration</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-purple mb-2">1000+</div>
              <div className="text-zion-slate-light">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our cutting-edge technology solutions.
            </p>
            <Link to="/contact">
              <motion.button 
                className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
                <Zap className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
