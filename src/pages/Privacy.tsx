import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
<<<<<<< HEAD
  EyeOff, 
  Database, 
  UserCheck, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  Building,
  Clock,
  Calendar,
  ArrowRight,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Copy,
  Link as LinkIcon,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Key,
  EyeOn,
  Camera,
  CameraOff,
  Microphone,
  MicrophoneOff,
  Volume2,
  VolumeX,
  Volume1,
  Volume,
  Mute,
  Unmute,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlaySquare,
  PauseSquare,
  StopSquare,
  PlayButton,
  PauseButton,
  StopButton,
  PlayIcon,
  PauseIcon,
  StopIcon,
  PlayIcon2,
  PauseIcon2,
  StopIcon2,
  PlayIcon3,
  PauseIcon3,
  StopIcon3,
  PlayIcon4,
  PauseIcon4,
  StopIcon4,
  PlayIcon5,
  PauseIcon5,
  StopIcon5,
  PlayIcon6,
  PauseIcon6,
  StopIcon6,
  PlayIcon7,
  PauseIcon7,
  StopIcon7,
  PlayIcon8,
  PauseIcon8,
  StopIcon8,
  PlayIcon9,
  PauseIcon9,
  StopIcon9,
  PlayIcon10,
  PauseIcon10,
  StopIcon10
} from 'lucide-react';
export default function Privacy() {
<<<<<<< HEAD
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
      transition: { duration: 0.6 }
    }
  };
=======
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
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Privacy{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect 
              your personal information while providing exceptional technology solutions.
=======
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
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Policy
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Last Updated */}
      <section className="py-8 bg-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.p 
            className="text-zion-slate-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </motion.p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Introduction */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                1. Introduction
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website, use our services, or interact with us.
                </p>
                <p className="text-zion-slate-light leading-relaxed">
                  By using our services, you agree to the collection and use of information in 
                  accordance with this policy. If you do not agree with our policies and practices, 
                  please do not use our services.
                </p>
              </div>
            </motion.section>

            {/* Information Collection */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                2. Information We Collect
              </h2>
              <div className="space-y-6">
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">
                    2.1 Personal Information
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Professional information (resume, skills, work history)</li>
                    <li>Account credentials and profile information</li>
                    <li>Communication preferences and marketing opt-ins</li>
                    <li>Payment and billing information</li>
                    <li>Project requirements and specifications</li>
                  </ul>
                </div>

                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">
                    2.2 Automatically Collected Information
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    We automatically collect certain information when you use our services:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, features used)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Log files and analytics data</li>
                    <li>Performance and error data</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                3. How We Use Your Information
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                  <li>Providing and maintaining our services</li>
                  <li>Processing transactions and managing accounts</li>
                  <li>Communicating with you about our services</li>
                  <li>Improving our platform and user experience</li>
                  <li>Ensuring security and preventing fraud</li>
                  <li>Complying with legal obligations</li>
                  <li>Marketing and promotional activities (with your consent)</li>
                </ul>
              </div>
            </motion.section>

            {/* Information Sharing */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                4. Information Sharing and Disclosure
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third 
                  parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                  <li>Service providers who assist in operating our platform</li>
                  <li>Legal requirements and law enforcement requests</li>
                  <li>Business transfers or mergers (with appropriate safeguards)</li>
                  <li>Protection of rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                5. Data Security
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, 
                  or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure data centers and infrastructure</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                6. Your Rights and Choices
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Update or correct inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Control cookie preferences</li>
                  <li>Data portability</li>
                </ul>
                <p className="text-zion-slate-light mt-4 leading-relaxed">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </motion.section>

            {/* Cookies */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                7. Cookies and Tracking Technologies
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience, 
                  analyze usage patterns, and provide personalized content. You can control 
                  cookie settings through your browser preferences.
                </p>
                <p className="text-zion-slate-light leading-relaxed">
                  Types of cookies we use include essential cookies for functionality, 
                  analytics cookies for performance monitoring, and marketing cookies 
                  for personalized advertising (with your consent).
                </p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                8. Contact Us
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="space-y-2 text-zion-slate-light">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                  <p><strong>Address:</strong> Zion Tech Group, Privacy Team</p>
                </div>
                <p className="text-zion-slate-light mt-4 leading-relaxed">
                  We will respond to your inquiry within 30 days of receipt.
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our privacy team is here to help. Contact us if you have any questions 
              about how we handle your data or if you need to exercise your privacy rights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Privacy Team
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Download Full Policy
              </button>
=======
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
                <h3 className="text-2xl font-bold text-white mb-4">{share.category}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {share.description}
                </p>
                <ul className="space-y-2">
                  {share.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      {example}
                    </li>
                  ))}
                </ul>
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
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
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
<<<<<<< HEAD
=======
	return (
<>
			<SEO
				title="Privacy Policy"
				description="Learn how Zion Tech Group handles your data and protects your privacy."
				canonical="https://ziontechgroup.com/privacy"
			/>
			<Header />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<GradientHeading>Privacy Policy</GradientHeading>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Your privacy is important to us. This page explains how we collect, use, and safeguard your information.
						</p>
						<p className="mt-2 text-zion-slate-light text-sm">
							Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>
					</div>
					
					<div className="max-w-4xl mx-auto space-y-8">
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
							<p className="text-zion-slate-light mb-4">
								Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
							</p>
							<p className="text-zion-slate-light">
								By using our services, you agree to the collection and use of information in accordance with this policy.
							</p>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
							<h3 className="text-xl font-semibold text-zion-cyan mb-3">2.1 Personal Information</h3>
							<p className="text-zion-slate-light mb-4">
								We may collect personal information that you provide directly to us, including:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Name and contact information (email, phone number, address)</li>
								<li>Professional information (resume, skills, work history)</li>
								<li>Account credentials and profile information</li>
								<li>Communication preferences and marketing opt-ins</li>
								<li>Payment and billing information</li>
							</ul>
							<h3 className="text-xl font-semibold text-zion-cyan mb-3">2.2 Automatically Collected Information</h3>
							<p className="text-zion-slate-light mb-4">
								We automatically collect certain information when you use our services:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Device information (IP address, browser type, operating system)</li>
								<li>Usage data (pages visited, time spent, features used)</li>
								<li>Cookies and similar tracking technologies</li>
								<li>Log files and analytics data</li>
							</ul>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
							<p className="text-zion-slate-light mb-4">
								We use the information we collect for various purposes, including:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Providing and maintaining our services</li>
								<li>Processing transactions and payments</li>
								<li>Connecting talent with opportunities</li>
								<li>Improving our platform and user experience</li>
								<li>Communicating with you about our services</li>
								<li>Ensuring security and preventing fraud</li>
								<li>Complying with legal obligations</li>
							</ul>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
							<p className="text-zion-slate-light mb-4">
								We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>With your explicit consent</li>
								<li>To service providers who assist in operating our platform</li>
								<li>To comply with legal requirements or protect our rights</li>
								<li>In connection with a business transfer or merger</li>
								<li>To prevent fraud or security threats</li>
							</ul>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
							<p className="text-zion-slate-light mb-4">
								We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
							</p>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
							<p className="text-zion-slate-light mb-4">
								You have certain rights regarding your personal information:
							</p>
							<ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
								<li>Access and review your personal information</li>
								<li>Update or correct inaccurate information</li>
								<li>Request deletion of your personal information</li>
								<li>Opt-out of marketing communications</li>
								<li>Control cookie preferences</li>
								<li>Data portability</li>
							</ul>
						</section>
						<section>
							<h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
							<p className="text-zion-slate-light mb-4">
								If you have questions about our privacy practices or would like to exercise your rights, please contact us at:
							</p>
							<div className="bg-zion-slate-dark p-4 rounded-lg">
								<p className="text-zion-slate-light">
									<strong>Email:</strong>{' '}
									<a href="mailto:privacy@ziontechgroup.com" className="text-zion-cyan hover:underline">
										privacy@ziontechgroup.com
									</a>
								</p>
								<p className="text-zion-slate-light mt-2">
									<strong>Address:</strong> Zion Tech Group, Privacy Team
								</p>
							</div>
						</section>
					</div>
				</div>
			</main>
			<Footer />
</>
	);
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
=======
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
}
