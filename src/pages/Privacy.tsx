import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  Globe,
  CheckCircle,
  AlertTriangle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Settings,
  Trash2,
  Download,
  Clock
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy: React.FC = (): JSX.Element => {
  const lastUpdated = 'December 15, 2024';

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement enterprise-grade security measures to protect your personal information.'
    },
    {
      icon: Lock,
      title: 'Secure Processing',
      description: 'All data processing follows strict security protocols and industry best practices.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and protect your information.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and can request changes or deletion.'
    }
  ];

  const dataCategories = [
    {
      title: 'Personal Information',
      items: [
        'Name and contact information (email, phone, address)',
        'Company and job title information',
        'Professional credentials and certifications',
        'Communication preferences and history'
      ]
    },
    {
      title: 'Technical Information',
      items: [
        'IP address and device information',
        'Browser type and version',
        'Operating system and platform',
        'Usage data and analytics'
      ]
    },
    {
      title: 'Business Information',
      items: [
        'Project requirements and specifications',
        'Service usage and performance data',
        'Payment and billing information',
        'Support and communication records'
      ]
    }
  ];

  const dataUses = [
    {
      icon: Settings,
      title: 'Service Delivery',
      description: 'To provide and improve our technology services and solutions.'
    },
    {
      icon: Users,
      title: 'Communication',
      description: 'To communicate with you about our services, updates, and support.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'To ensure the security and integrity of our systems and services.'
    },
    {
      icon: Database,
      title: 'Analytics',
      description: 'To analyze usage patterns and improve our services and user experience.'
    }
  ];

  const dataRights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'Request a copy of your personal data that we hold.'
    },
    {
      icon: FileText,
      title: 'Right to Rectification',
      description: 'Request correction of inaccurate or incomplete personal data.'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data in certain circumstances.'
    },
    {
      icon: Download,
      title: 'Right to Portability',
      description: 'Request transfer of your data to another service provider.'
    }
  ];

  const securityMeasures = [
    {
      icon: Shield,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.'
    },
    {
      icon: Lock,
      title: 'Access Controls',
      description: 'Strict access controls and authentication mechanisms protect your data.'
    },
    {
      icon: Database,
      title: 'Secure Storage',
      description: 'Data is stored in secure, certified data centers with redundant security measures.'
    },
    {
      icon: Users,
      title: 'Staff Training',
      description: 'Our team receives regular security training and follows strict data handling procedures.'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'privacy@ziontechgroup.com',
      description: 'Send us a detailed message',
      action: 'mailto:privacy@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 302 464 0950',
      description: 'Speak directly with our team',
      action: 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Our headquarters location',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 30 days',
      description: 'We respond to all privacy requests within 30 days',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group"
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information. Read our comprehensive privacy policy and understand your data rights."
        keywords="privacy policy, data protection, GDPR, data rights, personal information, Zion Tech Group, privacy"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Your privacy is important to us. This policy explains how we collect, use,
                and protect your personal information.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring transparency
                in how we handle your personal information.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Information We Collect
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We collect only the information necessary to provide our services
                and improve your experience.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {dataCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-slate-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Your Data */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How We Use Your Information
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use your information only for legitimate business purposes
                and with your consent where required.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {dataUses.map((use, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <use.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{use.title}</h3>
                      <p className="text-slate-300">{use.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                You have important rights regarding your personal data.
                We are committed to honoring these rights.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dataRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <right.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{right.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <span>Last Updated</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  We implement comprehensive security measures to protect your personal information
                  from unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">We Never Sell Your Data</h3>
                      <p className="text-slate-300">Your personal information is never sold, rented, or shared with third parties for marketing purposes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Enterprise-Grade Security</h3>
                      <p className="text-slate-300">We implement ISO 27001 certified security measures including encryption, access controls, and regular security audits.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Limited Third-Party Access</h3>
                      <p className="text-slate-300">We only share data with trusted service providers who help us deliver our services and maintain security standards.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <Eye className="w-6 h-6 text-cyan-400" />
                  <span>Information We Collect</span>
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Personal Information</h3>
                      <p>Name, email address, phone number, company information, and other contact details you provide.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Usage Data</h3>
                      <p>Information about how you use our services, including access times, pages viewed, and features used.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Technical Data</h3>
                      <p>IP address, browser type, device information, and other technical details.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                How We Use Your Information
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                We use your information responsibly and only for purposes that benefit you and our services. 
                Here's how we use the data we collect.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
              {dataUses.map((use, index)  => (
                <motion.div
                  key={use.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-zion-purple/20 border border-zion-purple/30">
                          <use.icon className="w-6 h-6 text-zion-purple" />
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {use.title}
                          </h3>
                          
                          <p className="text-zion-cyan-light text-sm leading-relaxed">
                            {use.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Your Data Rights
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                You have important rights regarding your personal data. We're committed to helping you 
                exercise these rights and maintain control over your information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
              {dataRights.map((right, index)  => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-cyan/50 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 mb-4">
                        <right.icon className="w-8 h-8 text-zion-cyan" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {right.title}
                      </h3>
                      
                      <p className="text-zion-cyan-light text-sm leading-relaxed">
                        {right.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                How We Protect Your Data
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                We implement comprehensive security measures to protect your personal information 
                from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
              {securityMeasures.map((measure, index)  => (
                <motion.div
                  key={measure.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-zion-blue/20 border border-zion-blue/30">
                          <measure.icon className="w-6 h-6 text-zion-blue" />
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {measure.title}
                          </h3>
                          
                          <p className="text-zion-cyan-light text-sm leading-relaxed">
                            {measure.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Contact Our Privacy Team
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Have questions about your privacy or want to exercise your data rights? 
                Our dedicated privacy team is here to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index)  => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${info.color} mb-4`}>
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {info.title}
                      </h3>
                      
                      <p className="text-zion-cyan font-medium mb-2">
                        {info.value}
                      </p>
                      
                      <p className="text-zion-cyan-light text-sm mb-4">
                        {info.description}
                      </p>
                      
                      {info.action && (
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white"
                        >
                          <a href={info.action}>
                            {info.title}
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're committed to transparency and protecting your privacy. If you have any questions 
                or concerns, don't hesitate to reach out to our privacy team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Privacy Team
                </Button>
                
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Policy
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;
