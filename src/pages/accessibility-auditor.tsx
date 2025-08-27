import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Accessibility, 
  Monitor, 
  Smartphone, 
  Globe,
  ArrowRight,
  Star,
  Heart,
  Users,
  Zap,
  Lock,
  FileText,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

export default function AccessibilityPage() {
  const currentYear = new Date().getFullYear();

  const accessibilityFeatures = [
    {
      category: 'Visual Accessibility',
      icon: Eye,
      features: [
        'High contrast mode support',
        'Adjustable font sizes',
        'Color-blind friendly design',
        'Clear typography and spacing',
        'Alternative text for images',
        'Focus indicators for navigation'
      ]
    },
    {
      category: 'Auditory Accessibility',
      icon: Ear,
      features: [
        'Closed captions for videos',
        'Audio descriptions',
        'Volume controls',
        'Visual alerts and notifications',
        'Transcripts for audio content'
      ]
    },
    {
      category: 'Motor Accessibility',
      icon: Hand,
      features: [
        'Keyboard navigation support',
        'Voice control compatibility',
        'Large click targets',
        'Customizable timing',
        'Alternative input methods'
      ]
    },
    {
      category: 'Cognitive Accessibility',
      icon: Brain,
      features: [
        'Clear and simple language',
        'Consistent navigation structure',
        'Logical content organization',
        'Reduced distractions',
        'Step-by-step instructions'
      ]
    }
  ];

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      status: 'Compliant',
      icon: CheckCircle,
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      color: 'text-green-500'
    },
    {
      standard: 'Section 508',
      status: 'Compliant',
      icon: CheckCircle,
      description: 'Federal accessibility requirements for electronic and information technology',
      color: 'text-green-500'
    },
    {
      standard: 'ADA Title III',
      status: 'Compliant',
      icon: CheckCircle,
      description: 'Americans with Disabilities Act requirements for public accommodations',
      color: 'text-green-500'
    },
    {
      standard: 'EN 301 549',
      status: 'Compliant',
      icon: CheckCircle,
      description: 'European accessibility requirements for ICT products and services',
      color: 'text-green-500'
    }
  ];

  const accessibilityTools = [
    {
      name: 'Screen Reader Support',
      description: 'Full compatibility with popular screen readers including JAWS, NVDA, and VoiceOver',
      icon: Monitor
    },
    {
      name: 'Mobile Accessibility',
      description: 'Optimized for mobile devices with touch-friendly interfaces and responsive design',
      icon: Smartphone
    },
    {
      name: 'Voice Navigation',
      description: 'Voice control support for hands-free navigation and interaction',
      icon: Globe
    },
    {
      name: 'Customizable Interface',
      description: 'Personalizable themes, fonts, and layout options to meet individual needs',
      icon: Zap
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Accessibility - Zion Tech Group"
        description="Our commitment to digital accessibility. Learn about our accessibility features, compliance standards, and inclusive design practices."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Accessibility className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Zion Tech Group, we believe that technology should be accessible to everyone. 
            We are committed to ensuring our digital platforms are inclusive and usable by people of all abilities.
          </p>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-12 h-12 text-red-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are dedicated to creating an inclusive digital experience that meets the needs of all users, 
              including those with disabilities. Our accessibility efforts are ongoing, and we continuously 
              work to improve the user experience for everyone who visits our website.
            </p>
          </div>
        </motion.div>

        {/* Accessibility Features */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Features</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {accessibilityFeatures.map((category, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
                variants={itemVariants}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Compliance Standards</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{standard.standard}</h3>
                  <div className="flex items-center">
                    <standard.icon className={`w-6 h-6 ${standard.color} mr-2`} />
                    <span className={`font-semibold ${standard.color}`}>{standard.status}</span>
                  </div>
                </div>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accessibility Tools */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Accessibility Tools & Support</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {accessibilityTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <tool.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                </div>
                <p className="text-gray-300">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help with Accessibility?</h2>
            <p className="text-lg text-gray-300">
              We're here to help ensure our website is accessible to you. If you encounter any accessibility issues 
              or have suggestions for improvement, please contact us.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-slate-700/50">
              <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Contact Form</h3>
              <p className="text-gray-300">Use our contact form</p>
            </div>
          </div>
        </motion.div>

        {/* Continuous Improvement */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Continuous Improvement</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              We are committed to continuously improving the accessibility of our website. 
              Our team regularly reviews and updates our accessibility features based on user feedback, 
              technological advances, and evolving accessibility standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold"
              >
                Report Accessibility Issues
              </a>
              <a
                href="/sitemap"
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200 font-semibold"
              >
                View Sitemap
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div 
          className="mt-12 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}