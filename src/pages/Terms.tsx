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
        </div>
      </section>
    </div>
  );
};

export default Terms;
