import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Lock,
  Globe
} from 'lucide-react';
export default function Terms() {
  const termsSections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      description: "By using our services, you agree to be bound by these terms and conditions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Service Description",
      description: "We provide technology consulting, AI solutions, and digital transformation services",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Intellectual Property",
      description: "All content and technology remain the property of Zion Tech Group",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Limitation of Liability",
      description: "We provide services as-is with reasonable limitations on liability",
      color: "from-orange-500 to-red-500"
    }
  ];
  const keyTerms = [
    {
      term: "Services",
      definition: "Technology consulting, AI solutions, cloud services, cybersecurity, and digital transformation services provided by Zion Tech Group"
    },
    {
      term: "Client",
      definition: "Any individual or organization that uses our services or enters into a service agreement with us"
    },
    {
      term: "Confidential Information",
      definition: "Any non-public information shared between parties during the course of business, including trade secrets and proprietary data"
    },
    {
      term: "Intellectual Property",
      definition: "All patents, copyrights, trademarks, trade secrets, and other intellectual property rights owned by Zion Tech Group"
    }
  ];
  const userObligations = [
    "Provide accurate and complete information",
    "Use services only for lawful purposes",
    "Maintain the security of your account",
    "Respect intellectual property rights",
    "Comply with applicable laws and regulations",
    "Pay for services as agreed"
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These Terms of Service govern your use of Zion Tech Group's services and website. 
              By using our services, you agree to be bound by these terms.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Terms Overview Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key aspects of our terms and conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 rounded-full mb-6 bg-gradient-to-r ${section.color}`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Key Terms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Terms & Definitions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Important terms you should understand
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {keyTerms.map((term, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">{term.term}</h3>
                  <p className="text-gray-300 text-sm">{term.definition}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* User Obligations Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What we expect from you when using our services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userObligations.map((obligation, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{obligation}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Important Disclaimers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Important Disclaimers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Please note these important limitations and disclaimers
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Service Availability</h3>
                    <p className="text-gray-300 text-sm">
                      We strive to provide reliable services but cannot guarantee 100% uptime. 
                      Services are provided "as-is" without warranties of any kind.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Limitation of Liability</h3>
                    <p className="text-gray-300 text-sm">
                      Zion Tech Group's liability is limited to the amount paid for services. 
                      We are not liable for indirect, incidental, or consequential damages.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Changes to Terms</h3>
                    <p className="text-gray-300 text-sm">
                      We may update these terms from time to time. Continued use of services 
                      after changes constitutes acceptance of the updated terms.
                    </p>
                  </div>
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            If you have any questions about these terms or need clarification, 
            please don't hesitate to contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              to="/privacy"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
