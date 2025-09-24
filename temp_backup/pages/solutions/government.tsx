import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Building, Shield, Brain, Zap, Cpu, Globe, 
  Lock, CheckCircle, ArrowRight, BarChart3, Users
} from 'lucide-react';

export default function GovernmentSolutions() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-40o0 via-blue-50o0 to-cyan-60o0 bg-clip-text text-transparent mb-6">
                Government Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI and cybersecurity solutions that transform government 
                operations, enhance citizen services, and secure critical infrastructure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Government Solutions</h2>
              <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">
                Cutting-edge technology solutions designed specifically for federal, 
                state, and local government agencies and departments.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cybersecurity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-red-90o0/20 to-pink-90o0/20 border border-red-50o0/20 rounded-2xl p-8 hover:border-red-40o0/40 transition-all duration-30o0"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-50o0/20 rounded-xl">
                    <Shield className="w-8 h-8 text-red-40o0"  />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cybersecurity Platform</h3>
                </div>
                <p className="text-gray-30o0 mb-6">
                  Advanced cybersecurity platform with threat detection, 
                  incident response, and compliance management.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-red-40o0"  />
                    Threat detection
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-red-40o0"  />
                    Incident response
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-red-40o0"  />
                    Compliance management
                  </li>
                </ul>
                <a href="/contact?service=Government-Cybersecurity" className="inline-flex items-center gap-2 text-red-40o0 hover:text-red-30o0 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4"  />
                </a>
              </motion.div>

              {/* Digital Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-90o0/20 to-cyan-90o0/20 border border-blue-50o0/20 rounded-2xl p-8 hover:border-blue-40o0/40 transition-all duration-30o0"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50o0/20 rounded-xl">
                    <Globe className="w-8 h-8 text-blue-40o0"  />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Digital Citizen Services</h3>
                </div>
                <p className="text-gray-30o0 mb-6">
                  Modern digital services platform for citizen engagement, 
                  online applications, and government service delivery.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-blue-40o0"  />
                    Citizen engagement
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-blue-40o0"  />
                    Online applications
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-blue-40o0"  />
                    Service delivery
                  </li>
                </ul>
                <a href="/contact?service=Digital-Citizen-Services" className="inline-flex items-center gap-2 text-blue-40o0 hover:text-blue-30o0 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4"  />
                </a>
              </motion.div>

              {/* Data Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-br from-green-90o0/20 to-emerald-90o0/20 border border-green-50o0/20 rounded-2xl p-8 hover:border-green-40o0/40 transition-all duration-30o0"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-50o0/20 rounded-xl">
                    <BarChart3 className="w-8 h-8 text-green-40o0"  />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Data Analytics Platform</h3>
                </div>
                <p className="text-gray-30o0 mb-6">
                  Comprehensive data analytics platform for government insights, 
                  performance monitoring, and decision support.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    Performance monitoring
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    Decision support
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-green-40o0"  />
                    Government insights
                  </li>
                </ul>
                <a href="/contact?service=Government-Data-Analytics" className="inline-flex items-center gap-2 text-green-40o0 hover:text-green-30o0 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4"  />
                </a>
              </motion.div>

              {/* AI Operations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-purple-90o0/20 to-pink-90o0/20 border border-purple-50o0/20 rounded-2xl p-8 hover:border-purple-40o0/40 transition-all duration-30o0"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-50o0/20 rounded-xl">
                    <Brain className="w-8 h-8 text-purple-40o0"  />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI Operations Center</h3>
                </div>
                <p className="text-gray-30o0 mb-6">
                  AI-powered operations center for government efficiency, 
                  automation, and intelligent decision-making.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-purple-40o0"  />
                    Government efficiency
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-purple-40o0"  />
                    Process automation
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-purple-40o0"  />
                    Intelligent decisions
                  </li>
                </ul>
                <a href="/contact?service=AI-Operations-Center" className="inline-flex items-center gap-2 text-purple-40o0 hover:text-purple-30o0 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4"  />
                </a>
              </motion.div>

              {/* Infrastructure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-gradient-to-br from-yellow-90o0/20 to-orange-90o0/20 border border-yellow-50o0/20 rounded-2xl p-8 hover:border-yellow-40o0/40 transition-all duration-30o0"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-50o0/20 rounded-xl">
                    <Building className="w-8 h-8 text-yellow-40o0"  />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Critical Infrastructure</h3>
                </div>
                <p className="text-gray-30o0 mb-6">
                  Secure infrastructure solutions for government systems, 
                  networks, and critical operations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-yellow-40o0"  />
                    Secure systems
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-yellow-40o0"  />
                    Network security
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-yellow-40o0"  />
                    Critical operations
                  </li>
                </ul>
                <a href="/contact?service=Critical-Infrastructure" className="inline-flex items-center gap-2 text-yellow-40o0 hover:text-yellow-30o0 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4"  />
                </a>
              </motion.div>

              {/* Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-teal-90o0/20 to-cyan-90o0/20 border border-teal-50o0/20 rounded-2xl p-8 hover:border-teal-40o0/40 transition-all duration-30o0"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-teal-50o0/20 rounded-xl">
                    <Lock className="w-8 h-8 text-teal-40o0"  />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Compliance Management</h3>
                </div>
                <p className="text-gray-30o0 mb-6">
                  Automated compliance management system for government regulations, 
                  audits, and policy enforcement.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-teal-40o0"  />
                    Regulation compliance
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-teal-40o0"  />
                    Automated audits
                  </li>
                  <li className="flex items-center gap-2 text-gray-30o0">
                    <CheckCircle className="w-5 h-5 text-teal-40o0"  />
                    Policy enforcement
                  </li>
                </ul>
                <a href="/contact?service=Compliance-Management" className="inline-flex items-center gap-2 text-teal-40o0 hover:text-teal-30o0 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4"  />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-90o0/20 to-blue-90o0/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Government?
              </h2>
              <p className="text-xl text-gray-30o0 mb-8">
                Join the government technology revolution with our cutting-edge AI and cybersecurity solutions. 
                Let's build the future of government together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?service=Government-Solutions"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover:from-indigo-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5"
                >
                  Get Started Today
                </a>
                <a 
                  href="/services?category=government"
                  className="px-8 py-4 border border-indigo-50o0 text-indigo-40o0 font-semibold rounded-xl hover:bg-indigo-50o0/10 transition-all duration-30o0"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
