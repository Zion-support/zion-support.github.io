import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  CheckCircle,
  AlertTriangle,
  Scale,
  Lock,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Terms() {
  const termsSections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      description: 'By accessing and using our services, you agree to be bound by these terms and conditions.'
    },
    {
      icon: Shield,
      title: 'Service Description',
      description: 'We provide technology consulting, development, and digital transformation services.'
    },
    {
      icon: Lock,
      title: 'User Responsibilities',
      description: 'Users must comply with applicable laws and respect intellectual property rights.'
    },
    {
      icon: Globe,
      title: 'Intellectual Property',
      description: 'All content and technology remain the property of Zion Tech Group.'
    }
  ];

  const userObligations = [
    {
      obligation: 'Compliance',
      description: 'Comply with all applicable laws and regulations when using our services.'
    },
    {
      obligation: 'Account Security',
      description: 'Maintain the security of your account credentials and notify us of any unauthorized access.'
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use our services only for lawful purposes and in accordance with these terms.'
    },
    {
      obligation: 'Content Standards',
      description: 'Ensure all content you provide is accurate, lawful, and does not infringe on others\' rights.'
    },
    {
      obligation: 'Payment Terms',
      description: 'Pay all fees and charges in accordance with agreed payment schedules.'
    },
    {
      obligation: 'Confidentiality',
      description: 'Maintain the confidentiality of any proprietary information shared with you.'
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems or other users\' accounts',
    'Transmitting viruses, malware, or other harmful code',
    'Interfering with the proper functioning of our services',
    'Using our services for illegal or fraudulent activities',
    'Reverse engineering or attempting to extract source code',
    'Harassing, threatening, or abusing other users',
    'Violating intellectual property rights',
    'Collecting personal information without consent'
  ];

  const serviceLevels = [
    {
      level: 'Standard Support',
      description: 'Email support during business hours',
      response: '24-48 hours',
      included: true
    },
    {
      level: 'Priority Support',
      description: 'Phone and email support with faster response times',
      response: '4-8 hours',
      included: false
    },
    {
      level: 'Premium Support',
      description: 'Dedicated support team and 24/7 emergency response',
      response: '1-2 hours',
      included: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's terms of service. Understand your rights and responsibilities when using our technology services and solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Legal Terms & Conditions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              These terms govern your use of our services. Please read them carefully 
              before using our technology solutions.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Terms Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding these fundamental terms helps ensure a smooth 
              relationship between you and Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {termsSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <section.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Obligations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As a user of our services, you have certain responsibilities 
              that help ensure a secure and productive environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{obligation.obligation}</h3>
                <p className="text-gray-300">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Prohibited Activities
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To maintain a secure and professional environment, certain activities 
                are strictly prohibited when using our services.
              </p>
              <div className="space-y-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="text-center mb-6">
                  <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">Violation Consequences</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">First Offense</span>
                    <span className="text-yellow-400">Warning</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Second Offense</span>
                    <span className="text-orange-400">Suspension</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Third Offense</span>
                    <span className="text-red-400">Termination</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Service Levels & Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide different levels of support to meet your business needs 
              and ensure optimal service delivery.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceLevels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-slate-800/50 p-6 rounded-xl border ${
                    level.included ? 'border-blue-400/50' : 'border-slate-700/50'
                  } hover:border-blue-400/50 transition-all duration-300 hover:scale-105`}
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{level.level}</h3>
                    {level.included && (
                      <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">
                        Included
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-center mb-4">{level.description}</p>
                  <div className="text-center">
                    <span className="text-sm text-gray-400">Response Time:</span>
                    <div className="text-lg font-semibold text-white">{level.response}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Intellectual Property Rights
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Understanding intellectual property rights is crucial for both 
                protecting our innovations and respecting your contributions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Our IP</h3>
                    <p className="text-gray-300 text-sm">All software, designs, and proprietary technology remain our property</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Your IP</h3>
                    <p className="text-gray-300 text-sm">You retain ownership of content and data you provide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold">Licenses</h3>
                    <p className="text-gray-300 text-sm">We grant limited licenses for authorized use of our services</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
                <div className="text-center mb-6">
                  <Scale className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white">IP Protection</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Copyright</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Trademarks</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Patents</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <span className="text-gray-300">Trade Secrets</span>
                    <span className="text-green-400">✓</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Limitation of Liability
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We strive to provide reliable services, but it's important to understand 
              the scope of our liability and your responsibilities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Cover</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Direct damages up to the amount paid for services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Service availability and performance issues</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Data security and privacy protection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">What We Don't Cover</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Indirect or consequential damages</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Loss of profits or business opportunities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Third-party service failures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Termination & Cancellation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the terms for ending our service relationship 
              helps ensure a smooth transition for all parties.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">You May Terminate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">With 30 days written notice</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">For material breach by us</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">If we become insolvent</span>
                    </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white mb-4">We May Terminate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">For violation of terms</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Non-payment of fees</span>
                    </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Illegal or harmful use</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Terms?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              If you have questions about these terms or need clarification, 
              please contact our legal team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">legal@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              By using our services, you agree to these terms. 
              Contact us if you need any clarification or have questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
