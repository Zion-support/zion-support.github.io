import React from 'react';
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  HelpCircle,
  Shield,
  Lock,
  UserCheck,
  Database,
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
  Eye,
  EyeOff,
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

export default function Terms() {
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

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
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
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Terms of{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Read the terms and conditions governing your use of Zion Tech Group's 
              marketplace platform and services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Terms
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* Terms Content */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Acceptance of Terms */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                1. Acceptance of Terms
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  By accessing and using Zion Tech Group's marketplace platform ("Service"), 
                  you accept and agree to be bound by the terms and provisions of this agreement. 
                  If you do not agree to abide by these terms, please do not use this service.
                </p>
                <p className="text-zion-slate-light leading-relaxed">
                  These terms constitute a legally binding agreement between you and Zion Tech Group. 
                  We reserve the right to modify these terms at any time, with changes taking effect 
                  immediately upon posting on our website.
                </p>
              </div>
            </motion.section>

            {/* Description of Service */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                2. Description of Service
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  Zion Tech Group provides a comprehensive marketplace platform that connects 
                  AI and technology professionals with opportunities, services, and equipment. 
                  Our platform includes:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                  <li>Talent marketplace for AI and tech professionals</li>
                  <li>Service listings and bookings</li>
                  <li>Equipment and product marketplace</li>
                  <li>Community forums and networking</li>
                  <li>AI matching and recommendation services</li>
                  <li>Project management and collaboration tools</li>
                  <li>Payment processing and escrow services</li>
                </ul>
              </div>
            </motion.section>

            {/* User Accounts */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                3. User Accounts
              </h2>
              <div className="space-y-6">
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">
                    3.1 Account Creation
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    To access certain features of our Service, you must create an account. 
                    You agree to provide accurate, current, and complete information during 
                    registration and to update such information to keep it accurate, current, and complete.
                  </p>
                  <p className="text-zion-slate-light leading-relaxed">
                    You must be at least 18 years old to create an account. By creating an account, 
                    you represent and warrant that you meet this age requirement.
                  </p>
                </div>

                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">
                    3.2 Account Security
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    You are responsible for safeguarding your password and for all activities 
                    that occur under your account. You agree not to disclose your password 
                    to any third party and to take sole responsibility for any activities 
                    or actions under your account.
                  </p>
                  <p className="text-zion-slate-light leading-relaxed">
                    You must notify us immediately of any unauthorized use of your account 
                    or any other breach of security.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* User Conduct */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                4. User Conduct
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Upload or transmit malicious code or content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the Service</li>
                  <li>Engage in fraudulent or deceptive practices</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Spam or send unsolicited communications</li>
                  <li>Impersonate another person or entity</li>
                </ul>
                <p className="text-zion-slate-light mt-4 leading-relaxed">
                  Violation of these terms may result in account suspension or termination.
                </p>
              </div>
            </motion.section>

            {/* Content and Intellectual Property */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                5. Content and Intellectual Property
              </h2>
              <div className="space-y-6">
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">
                    5.1 User Content
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    You retain ownership of content you submit to our platform. By submitting content, 
                    you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, 
                    modify, and distribute your content in connection with the Service.
                  </p>
                  <p className="text-zion-slate-light leading-relaxed">
                    You represent and warrant that you have all necessary rights to grant this license 
                    and that your content does not violate any third-party rights.
                  </p>
                </div>

                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">
                    5.2 Platform Content
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    The Service and its original content, features, and functionality are owned by 
                    Zion Tech Group and are protected by international copyright, trademark, patent, 
                    trade secret, and other intellectual property laws.
                  </p>
                  <p className="text-zion-slate-light leading-relaxed">
                    You may not copy, modify, distribute, sell, or lease any part of our Service 
                    without our prior written consent.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Marketplace Transactions */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                6. Marketplace Transactions
              </h2>
              <div className="space-y-6">
                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">
                    6.1 Service Agreements
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    When you engage with services or talent through our platform, you enter into 
                    agreements with the respective service providers or professionals. Zion Tech Group 
                    acts as a facilitator and is not a party to these agreements.
                  </p>
                  <p className="text-zion-slate-light leading-relaxed">
                    We provide tools and services to facilitate these transactions but are not 
                    responsible for the quality, delivery, or outcome of services provided by third parties.
                  </p>
                </div>

                <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-zion-cyan mb-4">
                    6.2 Payment and Fees
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    All payments are processed through our secure payment system. We may charge 
                    fees for certain services, which will be clearly disclosed before you commit 
                    to a transaction.
                  </p>
                  <p className="text-zion-slate-light leading-relaxed">
                    You are responsible for all applicable taxes and fees associated with your 
                    use of the Service.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Privacy and Data */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                7. Privacy and Data Protection
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  Your privacy is important to us. Our collection and use of personal information 
                  is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-zion-slate-light leading-relaxed">
                  By using our Service, you consent to the collection and use of your information 
                  as described in our Privacy Policy.
                </p>
              </div>
            </motion.section>

            {/* Limitation of Liability */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                8. Limitation of Liability
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, 
                  including but not limited to loss of profits, data, or use.
                </p>
                <p className="text-zion-slate-light leading-relaxed">
                  Our total liability to you for any claims arising from your use of the Service 
                  shall not exceed the amount you paid us in the twelve months preceding the claim.
                </p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                9. Contact Us
              </h2>
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-zion-slate-light">
                  <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                  <p><strong>Address:</strong> Zion Tech Group, Legal Department</p>
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
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our legal team is here to help. Contact us if you have any questions 
              about these terms or need clarification on any specific provisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Legal Team
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Download Full Terms
              </button>
            </div>
          </motion.div>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
=======
=======
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import TermsOfService from '@/legal/TermsOfService';
export default function Terms() {
	return (
<>
			<SEO
				title="Terms of Service"
				description="The terms and conditions for using the Zion platform."
				canonical="https://ziontechgroup.com/terms"
			/>
			<Header />
			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4">
					<TermsOfService />
				</div>
			</main>
			<Footer />
</>
	);
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
}
