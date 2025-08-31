import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  FileText,
  Shield,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  Lock,
  Clock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Eye,
  Database,
  Zap,
  Rocket,
  Brain,
  Cpu,
  Scale,
  BarChart3,
  Code,
  Server,
  Network,
  BarChart,
  PieChart,
  LineChart,
  Settings,
  Tool,
  Briefcase,
  Home,
  Building,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  UserTrendingUp,
  UserTrendingDown,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserCheck3,
  UserClock2,
  UserStar2,
  UserHeart2,
  UserShield2,
  UserZap2,
  UserTrendingUp2,
  UserTrendingDown2
} from 'lucide-react';

const Terms: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = 'December 15, 2024';

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Zion Tech Group\'s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
      icon: CheckCircle
    },
    {
      title: 'Service Description',
      content: 'Zion Tech Group provides AI-powered technology solutions, cloud services, cybersecurity, digital transformation, and IT consulting services. We reserve the right to modify or discontinue services at any time.',
      icon: Shield
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for providing accurate information, maintaining the security of their accounts, and complying with all applicable laws and regulations when using our services.',
      icon: Users
    },
    {
      title: 'Intellectual Property',
      content: 'All content, software, and materials provided by Zion Tech Group are protected by intellectual property rights. Users may not copy, modify, or distribute our proprietary materials without permission.',
      icon: Lock
    },
    {
      title: 'Privacy and Data Protection',
      content: 'Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service.',
      icon: Shield
    },
    {
      title: 'Limitation of Liability',
      content: 'Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to data loss or business interruption.',
      icon: AlertTriangle
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems',
    'Using our services for illegal or harmful purposes',
    'Interfering with the operation of our services',
    'Attempting to reverse engineer our software',
    'Sharing account credentials with unauthorized users',
    'Violating any applicable laws or regulations'
  ];

  const terminationConditions = [
    'Violation of these Terms of Service',
    'Non-payment of service fees',
    'Engagement in prohibited activities',
    'Breach of security or privacy policies',
    'Failure to comply with legal requirements',
    'Mutual agreement to terminate services'
  ];

  const userObligations = [
    {
      obligation: 'Compliance',
      description: 'Comply with all applicable laws and regulations when using our services.'
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use our services only for lawful purposes and in accordance with these terms.'
    },
    {
      obligation: 'Content Standards',
      description: 'Ensure all content submitted through our services meets our content standards.'
    },
    {
      obligation: 'Payment Terms',
      description: 'Pay all fees and charges in accordance with agreed payment schedules.'
    },
    {
      obligation: 'Security',
      description: 'Maintain the security of your account credentials and report any suspicious activity.'
    },
    {
      obligation: 'Confidentiality',
      description: 'Maintain the confidentiality of any proprietary information shared with you.'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'legal@ziontechgroup.com',
      href: 'mailto:legal@ziontechgroup.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 302 464 0950',
      href: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ];

  const legalPrinciples = [
    {
      principle: 'Transparency',
      description: 'Clear and understandable terms that protect both parties',
      icon: Eye
    },
    {
      principle: 'Fairness',
      description: 'Balanced terms that respect user rights and business needs',
      icon: Scale
    },
    {
      principle: 'Compliance',
      description: 'Adherence to all applicable laws and regulations',
      icon: Shield
    },
    {
      principle: 'Security',
      description: 'Protection of user data and system integrity',
      icon: Lock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service to understand the rules and guidelines for using our AI-powered technology solutions and services."
        keywords="terms of service, Zion Tech Group, legal terms, service agreement, user responsibilities"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services. By using our services, 
              you agree to be bound by these terms and conditions.
            </p>
            <div className="mt-6 text-gray-400">
              <p>Last updated: {lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Principles */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Legal Principles</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We believe in transparent, fair, and compliant legal relationships with our users.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalPrinciples.map((principle, index) => (
              <motion.div
                key={principle.principle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{principle.principle}</h3>
                <p className="text-gray-300 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Key Terms and Conditions</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Important terms that govern your use of our services and your relationship with Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">User Obligations</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Your responsibilities when using our services and platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.obligation}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20"
              >
                <h3 className="text-lg font-bold text-white mb-3">{obligation.obligation}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-3xl p-8 border border-red-500/30"
          >
            <div className="text-center mb-8">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Prohibited Activities</h2>
              <p className="text-gray-300">
                The following activities are strictly prohibited and may result in immediate account termination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Termination Conditions */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-3xl p-8 border border-yellow-500/30"
          >
            <div className="text-center mb-8">
              <Clock className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Service Termination</h2>
              <p className="text-gray-300">
                Services may be terminated under the following conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {terminationConditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{condition}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={contact.label} className="flex flex-col items-center gap-3">
                  <contact.icon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-white font-semibold">{contact.label}</h3>
                  <a
                    href={contact.href}
                    className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@ziontechgroup.com?subject=Terms of Service Question"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Legal Team
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                General Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center"
          >
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/20">
              <FileText className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Legal Notice</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms of Service constitute a legally binding agreement between you and Zion Tech Group. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
