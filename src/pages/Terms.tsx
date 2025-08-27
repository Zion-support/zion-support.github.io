<<<<<<< HEAD
import React, { useState } from 'react';
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
  StopIcon10,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Terms: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const termsSections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-6 h-6" />,
      content: `By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: <Info className="w-6 h-6" />,
      content: `Zion Tech Group provides technology solutions including AI services, cybersecurity, cloud computing, and digital transformation consulting. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`
    },
    {
      id: 'user-accounts',
      title: 'User Accounts',
      icon: <UserCheck className="w-6 h-6" />,
      content: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.`
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use Policy',
      icon: <Shield className="w-6 h-6" />,
      content: `You agree not to use our services for any unlawful purpose or to violate any applicable laws or regulations. This includes but is not limited to: transmitting harmful code, attempting unauthorized access, or engaging in fraudulent activities.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <FileText className="w-6 h-6" />,
      content: `All content, features, and functionality of our services are owned by Zion Tech Group and are protected by international copyright, trademark, and other intellectual property laws.`
    },
    {
      id: 'privacy',
      title: 'Privacy and Data',
      icon: <Lock className="w-6 h-6" />,
      content: `Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices regarding the collection and use of your information.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="futuristic-heading mb-6">
              Terms of <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using our services, 
              you agree to be bound by these terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' })}
                className="futuristic-button inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="/privacy"
                className="futuristic-button-outline inline-flex items-center"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Understanding Our Terms
            </h2>
            <p className="futuristic-text text-lg max-w-3xl mx-auto">
              These terms of service govern your use of Zion Tech Group's services and outline 
              the rights and responsibilities of both parties in our business relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="futuristic-card text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Clear Agreement</h3>
              <p className="text-zion-slate-light">
                Our terms are written in clear, understandable language to ensure you know exactly what to expect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="futuristic-card text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Protection for All</h3>
              <p className="text-zion-slate-light">
                These terms protect both you and us, ensuring a fair and secure business relationship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="futuristic-card text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-green to-zion-emerald rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Questions Welcome</h3>
              <p className="text-zion-slate-light">
                If you have any questions about these terms, our team is here to help clarify.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Terms of Service Details
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Comprehensive information about the terms and conditions governing your use of our services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between text-left p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-zion-cyan">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="w-6 h-6 text-zion-slate-light" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-zion-slate-light" />
                  )}
                </button>
                
                {expandedSections.includes(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-zion-slate-light/20"
                  >
                    <p className="text-zion-slate-light leading-relaxed mt-4">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="futuristic-card p-8 mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h3>
              <p className="text-zion-slate-light mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-zion-slate-light">
                Our total liability to you for any claims arising from the use of our services 
                shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="futuristic-card p-8 mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Governing Law</h3>
              <p className="text-zion-slate-light mb-4">
                These terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                without regard to its conflict of law provisions.
              </p>
              <p className="text-zion-slate-light">
                Any disputes arising from these terms or your use of our services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="futuristic-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Changes to Terms</h3>
              <p className="text-zion-slate-light mb-4">
                We reserve the right to modify these terms at any time. We will notify you of any changes 
                by posting the new terms on this page and updating the "Last Updated" date.
              </p>
              <p className="text-zion-slate-light">
                Your continued use of our services after any changes constitutes acceptance of the new terms. 
                We encourage you to review these terms periodically for any updates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact-info" className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Questions About Our Terms?
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              If you have any questions about these terms of service or need clarification on any provision, 
              please don't hesitate to contact our legal team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="futuristic-card p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Legal Team Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">+1-302-464-0950</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">364 E Main St STE 1008, Middletown, DE 19709</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Zion Tech Group Inc.</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="futuristic-card p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Response Time</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Legal inquiries: 48-72 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Business days: Monday - Friday</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-zion-green" />
                    <span className="text-zion-slate-light">Available in multiple languages</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-12 border-t border-zion-slate-light/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zion-slate-light">
            Last updated: <span className="text-white font-medium">January 15, 2025</span>
          </p>
          <p className="text-zion-slate-light mt-2">
            These terms of service are effective as of the date listed above and will remain in effect 
            until modified or terminated in accordance with these terms.
          </p>
=======
import { FileText, Scale, Shield, Users, Globe, Calendar, Mail, Phone } from 'lucide-react';
export default function Terms() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By using our services, you agree to these terms.
          </p>
          <div className="mt-8 text-sm text-zion-slate-light">
            Last updated: {currentYear}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-zion-cyan" />
                Agreement to Terms
              </h2>
              <p className="text-zion-slate-light mb-6">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-zion-cyan" />
                Use License
              </h2>
              <p className="text-zion-slate-light mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4 mb-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-zion-cyan" />
                Disclaimer
              </h2>
              <p className="text-zion-slate-light mb-6">
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-zion-cyan" />
                Limitations
              </h2>
              <p className="text-zion-slate-light mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-zion-cyan" />
                Accuracy of Materials
              </h2>
              <p className="text-zion-slate-light mb-6">
                The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current. Zion Tech Group may make changes to the materials contained on its website at any time without notice.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-zion-cyan" />
                Links
              </h2>
              <p className="text-zion-slate-light mb-6">
                Zion Tech Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site. Use of any such linked website is at the user's own risk.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-zion-cyan" />
                Modifications
              </h2>
              <p className="text-zion-slate-light mb-6">
                Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-zion-cyan" />
                Governing Law
              </h2>
              <p className="text-zion-slate-light mb-6">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-zion-cyan" />
                User Responsibilities
              </h2>
              <p className="text-zion-slate-light mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the services in compliance with applicable laws</li>
                <li>Not engage in any harmful or malicious activities</li>
                <li>Respect intellectual property rights</li>
                <li>Report any security vulnerabilities you discover</li>
              </ul>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-zion-cyan" />
                Intellectual Property
              </h2>
              <p className="text-zion-slate-light mb-6">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-zion-cyan" />
                Termination
              </h2>
              <p className="text-zion-slate-light mb-6">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-zion-cyan" />
                Contact Information
              </h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-zion-slate-light rounded-lg p-6 space-y-3">
                <div className="flex items-center text-zion-slate-dark">
                  <Mail className="w-5 h-5 mr-3 text-zion-cyan" />
                  <span>Email: legal@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-zion-slate-dark">
                  <Phone className="w-5 h-5 mr-3 text-zion-cyan" />
                  <span>Phone: +1-555-123-4567</span>
                </div>
                <div className="flex items-center text-zion-slate-dark">
                  <Globe className="w-5 h-5 mr-3 text-zion-cyan" />
                  <span>Website: https://ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our legal team is available to clarify any questions about our terms of service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@ziontechgroup.com"
              className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors"
            >
              Contact Legal Team
            </a>
            <a
              href="/contact"
              className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors"
            >
              General Contact
            </a>
          </div>
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default Terms;
=======
}
>>>>>>> c8f6a8c40c14e0279db0f3d243d3cf3fa516056e
