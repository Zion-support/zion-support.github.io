import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
export default function Privacy() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your personal information"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We are clear about what data we collect and how we use it"
    },
    {
      icon: Lock,
      title: "Control",
      description: "You have control over your personal data and can request changes or deletion"
    },
    {
      icon: Users,
      title: "Privacy First",
      description: "Privacy is built into everything we do, not added as an afterthought"
    }
  ];
  const dataCategories = [
    {
      category: "Personal Information",
      examples: ["Name, email address, phone number", "Company information", "Job title and role"],
      purpose: "To provide our services and communicate with you"
    },
    {
      category: "Technical Data",
      examples: ["IP address, browser type", "Device information", "Usage analytics"],
      purpose: "To improve our services and ensure security"
    },
    {
      category: "Communication Data",
      examples: ["Email correspondence", "Support tickets", "Feedback and surveys"],
      purpose: "To provide customer support and improve our services"
    }
  ];
  const yourRights = [
    "Access your personal data",
    "Correct inaccurate information",
    "Request deletion of your data",
    "Object to data processing",
    "Data portability",
    "Withdraw consent"
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect and handle your information.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              This Privacy Policy explains how Zion Tech Group collects, uses, and protects your personal information 
              when you use our services or visit our website.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Privacy Principles Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The fundamental principles that guide how we handle your personal information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Data Collection Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Data We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect only the information necessary to provide our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.category}</h3>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Purpose:</h4>
                  <p className="text-sm text-gray-300">{category.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Your Rights Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have control over your personal information
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {yourRights.map((right, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{right}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Data Security Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How We Protect Your Data
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement comprehensive security measures to keep your information safe
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technical Safeguards</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Encryption in transit and at rest
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Multi-factor authentication
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Regular security audits
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Access controls and monitoring
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Organizational Measures</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Employee privacy training
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Data minimization practices
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Incident response procedures
                    </li>
                    <li className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      Regular policy reviews
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            If you have any questions about our privacy practices or want to exercise your rights, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              to="/terms"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
