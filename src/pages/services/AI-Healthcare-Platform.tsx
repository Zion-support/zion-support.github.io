import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Clock,
  Star,
  Stethoscope,
  Microscope,
  Pill
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
      title: "Patient Care Optimization",
      description: "Personalized treatment plans and predictive healthcare analytics"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with full HIPAA compliance and data protection"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerting and automated responses"
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by up to 95%",
    "Reduce patient wait times by 60%",
    "Automate routine healthcare tasks",
    "Enhance patient outcomes and satisfaction",
    "Streamline administrative workflows",
    "Enable remote patient monitoring"
  ];

  const useCases = [
    {
      title: "Medical Imaging",
      description: "AI-powered analysis of X-rays, MRIs, and CT scans for faster diagnosis",
      icon: Microscope
    },
    {
      title: "Patient Management",
      description: "Intelligent patient scheduling, records, and care coordination",
      icon: Users
    },
    {
      title: "Drug Discovery",
      description: "AI-assisted pharmaceutical research and development",
      icon: Pill
    },
    {
      title: "Telemedicine",
      description: "Remote healthcare delivery with AI-powered triage and monitoring",
      icon: Globe
    }
  ];

  const complianceFeatures = [
    "HIPAA Compliance",
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "HITECH Act Compliant",
    "FDA Regulatory Ready",
    "ISO 27001 Certified"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Healthcare Platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform healthcare delivery with our cutting-edge AI platform. Improve diagnostic accuracy, 
              optimize patient care, and streamline operations while maintaining full HIPAA compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Advanced Healthcare Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI healthcare platform combines cutting-edge technology with proven medical practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered healthcare that improves outcomes and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Healthcare Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Diagnostic Accuracy</span>
                  <span className="text-green-400 font-bold">95%+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Patient Wait Time</span>
                  <span className="text-blue-400 font-bold">-60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Care Efficiency</span>
                  <span className="text-cyan-400 font-bold">+40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Patient Satisfaction</span>
                  <span className="text-green-400 font-bold">98%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Healthcare Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique needs of various healthcare specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Healthcare Compliance & Security</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with healthcare-grade security and full regulatory compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-green-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature}</h3>
                  <p className="text-gray-300">Full compliance and certification</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Healthcare?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI healthcare platform and improve patient outcomes today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Healthcare Assessment
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}