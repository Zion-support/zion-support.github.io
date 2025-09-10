import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Users, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertTriangle,
  FileText,
  Settings,
  Trash2,
  Download
} from 'lucide-react';
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
      icon: Calendar,
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
              <Shield className="w-5 h-5 text-zion-purple mr-2" />
              <span className="text-zion-purple font-medium">Privacy Policy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information 
              while providing exceptional technology services and solutions.
            </p>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30">
              <Calendar className="w-4 h-4 text-zion-cyan mr-2" />
              <span className="text-zion-cyan text-sm">Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
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
              Our Privacy Principles
            </h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              These principles guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-4">
                      <principle.icon className="w-8 h-8 text-zion-purple" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {principle.title}
                    </h3>
                    
                    <p className="text-zion-cyan-light text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Categories */}
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
              Information We Collect
            </h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              We collect various types of information to provide and improve our services. 
              Here's what we collect and why it's necessary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white mb-4">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                          <span className="text-zion-cyan-light text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {dataUses.map((use, index) => (
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

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {dataRights.map((right, index) => (
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

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
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

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
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
            <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
              We're committed to transparency and protecting your privacy. If you have any questions 
              or concerns, don't hesitate to reach out to our privacy team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white">
                <Mail className="w-5 h-5 mr-2" />
                Contact Privacy Team
              </Button>
              
              <Button
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Policy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
