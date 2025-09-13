import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Monitor,
  Database,
  Cloud,
  Lock,
  Globe,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Network,
  Microscope,
  Pill,
  Stethoscope,
  Hospital,
  Ambulance,
  UserCheck,
  FileText,
  BarChart3,
  Clock,
  Target,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIHealthcarePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms for accurate disease detection and diagnosis"
    },
    {
      icon: Heart,
      title: "Predictive Analytics",
      description: "Early detection of health risks and proactive intervention recommendations"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with full compliance and data protection"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous health monitoring with instant alerts and notifications"
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Comprehensive patient records and care coordination tools"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Data-driven insights for improved healthcare outcomes"
    }
  ];

  const benefits = [
    "Reduce diagnostic errors by up to 85%",
    "Improve patient outcomes by 40%",
    "Cut healthcare costs by 30%",
    "Streamline administrative workflows",
    "Enable remote patient monitoring",
    "Facilitate evidence-based medicine"
  ];

  const useCases = [
    {
      title: "Hospitals & Clinics",
      description: "Comprehensive healthcare management for large medical facilities"
    },
    {
      title: "Telemedicine",
      description: "Remote healthcare delivery with AI-powered diagnostics"
    },
    {
      title: "Research Institutions",
      description: "Advanced analytics for medical research and clinical trials"
    },
    {
      title: "Insurance Companies",
      description: "Risk assessment and fraud detection capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Heart className="w-4 h-4 mr-2" />
                AI Healthcare Platform
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Revolutionizing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Healthcare</span>
                <br />with AI
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform healthcare delivery with our cutting-edge AI platform. 
                From predictive diagnostics to personalized treatment plans, 
                we're making healthcare smarter, more efficient, and more accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform combines cutting-edge technology with healthcare expertise 
              to deliver unprecedented insights and outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Healthcare Operations
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI platform delivers measurable improvements across all aspects 
                of healthcare delivery, from patient care to operational efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                    <div className="text-sm text-gray-400">Error Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                    <div className="text-sm text-gray-400">Outcome Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
                    <div className="text-sm text-gray-400">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Monitoring</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Designed for Every Healthcare Setting
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From small clinics to large hospital networks, our platform scales 
              to meet your unique healthcare delivery needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hospital className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform leverages the latest advancements in AI, machine learning, 
              and cloud computing to deliver exceptional performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, name: "Machine Learning", color: "text-blue-400" },
              { icon: Cloud, name: "Cloud Native", color: "text-purple-400" },
              { icon: Shield, name: "Enterprise Security", color: "text-green-400" },
              { icon: Database, name: "Big Data Analytics", color: "text-cyan-400" },
              { icon: Network, name: "IoT Integration", color: "text-orange-400" },
              { icon: Smartphone, name: "Mobile First", color: "text-pink-400" },
              { icon: Server, name: "Scalable Architecture", color: "text-indigo-400" },
              { icon: Lock, name: "HIPAA Compliant", color: "text-red-400" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-700/50">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <h3 className={`text-sm font-medium ${tech.color}`}>
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the healthcare revolution with AI-powered insights and automation. 
              Get started today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of innovative AI solutions for healthcare and beyond.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Middletown, DE 19709
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>AI Healthcare Platform</div>
                <div>AI Cybersecurity</div>
                <div>Quantum Computing</div>
                <div>Micro SaaS Solutions</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Documentation</div>
                <div>API Reference</div>
                <div>Support Center</div>
                <div>Blog</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}