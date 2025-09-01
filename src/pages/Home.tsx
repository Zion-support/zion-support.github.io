import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain, Shield, Cpu, Rocket, Zap, ArrowRight, CheckCircle, Star, Users, BarChart3, Heart, Eye, Atom, Activity, Code, Database, Server, Network, Lock, Cloud, Target, TrendingUp, Briefcase, Globe, Phone, Mail, MapPin, Search, Filter, DollarSign, Clock, Award, TrendingDown, Sparkles, Lightbulb, Zap as ZapIcon, Shield as ShieldIcon, Cpu as CpuIcon, Rocket as RocketIcon, Brain as BrainIcon, Atom as AtomIcon, Eye as EyeIcon, Code as CodeIcon, BarChart3 as BarChartIcon, Users as UsersIcon, Heart as HeartIcon, Globe as GlobeIcon, TrendingUp as TrendingUpIcon
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900 opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Brain className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary AI & Technology Services
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Transform Your Business with Cutting-Edge Solutions
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of innovative micro SAAS, IT, and AI services 
              designed to drive business growth and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services-showcase"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 transform hover:-translate-y-1"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI-powered solutions to quantum computing platforms, we deliver innovative 
              technology that transforms businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI & Analytics</h3>
              <p className="text-gray-400 mb-4">
                Advanced AI solutions for business intelligence, content generation, and predictive analytics.
              </p>
              <Link to="/services-showcase" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* Quantum Computing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Computing</h3>
              <p className="text-gray-400 mb-4">
                Revolutionary quantum algorithms and machine learning solutions for complex problems.
              </p>
              <Link to="/services-showcase" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            {/* Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
              <p className="text-gray-400 mb-4">
                Military-grade security solutions with advanced threat detection and zero-trust architecture.
              </p>
              <Link to="/services-showcase" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already leveraging our cutting-edge AI and technology services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Inquiry"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

