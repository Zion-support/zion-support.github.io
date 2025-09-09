import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  AlertTriangle, 
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Info,
  Lock,
  Scale,
  Gavel
} from 'lucide-react';

const Terms = () => {
  const lastUpdated = 'January 15, 2024';
  const effectiveDate = 'January 15, 2024';

  const termsSections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        {
          subtitle: 'Agreement to Terms',
          description: 'By accessing and using the services provided by Zion Tech Group ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.',
          items: [
            'You must read, agree with, and accept all of the terms and conditions contained in this agreement',
            'If you do not agree to abide by the above, please do not use this service',
            'These terms apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content'
          ]
        },
        {
          subtitle: 'Modifications to Terms',
          description: 'We reserve the right to modify these terms at any time. We do so by posting modified terms on this website. Your continued use of the services means you accept any changes.',
          items: [
            'We will notify users of any material changes to these terms',
            'Changes will be effective immediately upon posting',
            'Your continued use constitutes acceptance of modified terms'
          ]
        }
      ]
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: Globe,
      content: [
        {
          subtitle: 'Service Overview',
          description: 'Zion Tech Group provides technology consulting, software development, AI solutions, cybersecurity services, and related professional services.',
          items: [
            'Technology consulting and advisory services',
            'Custom software development and implementation',
            'AI and machine learning solutions',
            'Cybersecurity assessments and implementation',
            'Cloud infrastructure and DevOps services',
            'Digital transformation consulting'
          ]
        },
        {
          subtitle: 'Service Availability',
          description: 'We strive to provide reliable services but cannot guarantee uninterrupted availability.',
          items: [
            'Services are provided on an "as is" and "as available" basis',
            'We may temporarily suspend services for maintenance',
            'We are not liable for service interruptions beyond our control'
          ]
        }
      ]
    },
    {
      id: 'user-obligations',
      title: 'User Obligations and Conduct',
      icon: Users,
      content: [
        {
          subtitle: 'Acceptable Use',
          description: 'You agree to use our services only for lawful purposes and in accordance with these terms.',
          items: [
            'Use services only for their intended purpose',
            'Comply with all applicable laws and regulations',
            'Respect intellectual property rights',
            'Maintain the security of your account credentials',
            'Provide accurate and complete information'
          ]
        },
        {
          subtitle: 'Prohibited Activities',
          description: 'You agree not to engage in any of the following activities:',
          items: [
            'Violating any applicable laws or regulations',
            'Infringing on intellectual property rights',
            'Attempting to gain unauthorized access to our systems',
            'Interfering with service functionality',
            'Engaging in fraudulent or deceptive practices',
            'Harassing or harming other users'
          ]
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Lock,
      content: [
        {
          subtitle: 'Our Intellectual Property',
          description: 'All content, features, and functionality of our services are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.',
          items: [
            'Our trademarks, service marks, and logos',
            'Software, code, and technical solutions',
            'Documentation and training materials',
            'Website design and content',
            'Proprietary methodologies and processes'
          ]
        },
        {
          subtitle: 'Your Intellectual Property',
          description: 'You retain ownership of your intellectual property that you provide to us.',
          items: [
            'We do not claim ownership of your content',
            'You grant us license to use your content for service delivery',
            'You represent that you have rights to content you provide',
            'We respect your intellectual property rights'
          ]
        }
      ]
    },
    {
      id: 'privacy-data',
      title: 'Privacy and Data Protection',
      icon: Shield,
      content: [
        {
          subtitle: 'Data Collection and Use',
          description: 'We collect and process personal data in accordance with our Privacy Policy.',
          items: [
            'We collect data necessary for service delivery',
            'We use data to improve our services',
            'We implement appropriate security measures',
            'We comply with applicable data protection laws'
          ]
        },
        {
          subtitle: 'Data Security',
          description: 'We implement reasonable security measures to protect your data.',
          items: [
            'Encryption of sensitive data',
            'Regular security assessments',
            'Access controls and authentication',
            'Employee training on data protection',
            'Incident response procedures'
          ]
        }
      ]
    },
    {
      id: 'limitations',
      title: 'Limitations of Liability',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Disclaimer of Warranties',
          description: 'Our services are provided "as is" without warranties of any kind.',
          items: [
            'We disclaim all warranties, express or implied',
            'We do not guarantee service availability',
            'We do not warrant that services will be error-free',
            'We do not guarantee specific results from our services'
          ]
        },
        {
          subtitle: 'Limitation of Liability',
          description: 'In no event shall Zion Tech Group be liable for indirect, incidental, special, consequential, or punitive damages.',
          items: [
            'Our total liability shall not exceed fees paid for services',
            'We are not liable for third-party actions',
            'We are not liable for data loss or corruption',
            'We are not liable for business interruption'
          ]
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination and Suspension',
      icon: Gavel,
      content: [
        {
          subtitle: 'Termination by You',
          description: 'You may terminate your use of our services at any time.',
          items: [
            'Provide written notice of termination',
            'Pay any outstanding fees or charges',
            'Return any company property or materials',
            'Comply with post-termination obligations'
          ]
        },
        {
          subtitle: 'Termination by Us',
          description: 'We may terminate or suspend services for various reasons.',
          items: [
            'Violation of these terms',
            'Non-payment of fees',
            'Fraudulent or illegal activity',
            'Business reasons with appropriate notice'
          ]
        }
      ]
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Disputes',
      icon: Scale,
      content: [
        {
          subtitle: 'Governing Law',
          description: 'These terms are governed by the laws of the State of California.',
          items: [
            'California law applies to interpretation and enforcement',
            'Federal law applies where preempted',
            'International users agree to California jurisdiction'
          ]
        },
        {
          subtitle: 'Dispute Resolution',
          description: 'We prefer to resolve disputes through good faith negotiation.',
          items: [
            'Attempt informal resolution first',
            'Mediation if informal resolution fails',
            'Arbitration for unresolved disputes',
            'Legal action as last resort'
          ]
        }
      ]
    }
  ];

  const contactInfo = {
    email: 'legal@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    address: '123 Technology Drive, Suite 100, San Francisco, CA 94105',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            These terms and conditions govern your use of Zion Tech Group's services. 
            Please read them carefully before using our services.
          </motion.p>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate-darker p-8 rounded-2xl border border-zion-slate-light/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Effective Date</h3>
                <p className="text-zion-slate-light">{effectiveDate}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Last Updated</h3>
                <p className="text-zion-slate-light">{lastUpdated}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Legal Status</h3>
                <p className="text-zion-slate-light">Legally Binding</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="space-y-16">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 p-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-8">
                  {section.content.map((content, contentIndex) => (
                    <div key={contentIndex} className="space-y-4">
                      <h3 className="text-xl font-semibold text-zion-cyan">{content.subtitle}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{content.description}</p>
                      <ul className="space-y-2">
                        {content.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-zion-slate-light">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Additional Terms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Force Majeure</h3>
                <p className="text-zion-slate-light mb-4">
                  We shall not be liable for any failure to perform due to circumstances beyond our reasonable control, 
                  including but not limited to acts of God, war, terrorism, riots, fire, natural disasters, 
                  government actions, or other similar events.
                </p>
                <p className="text-zion-slate-light">
                  In such events, we will use reasonable efforts to resume service as soon as practicable.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Severability</h3>
                <p className="text-zion-slate-light mb-4">
                  If any provision of these terms is found to be unenforceable or invalid, 
                  that provision will be limited or eliminated to the minimum extent necessary 
                  so that these terms will otherwise remain in full force and effect.
                </p>
                <p className="text-zion-slate-light">
                  The remaining provisions will continue to be valid and enforceable.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Entire Agreement</h3>
              <p className="text-zion-slate-light">
                These terms constitute the entire agreement between you and Zion Tech Group regarding the use of our services. 
                Any prior agreements, representations, or understandings are superseded by these terms. 
                No modification of these terms will be binding unless in writing and signed by both parties.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate-darker p-8 rounded-2xl border border-zion-slate-light/20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Legal Contact</h2>
            <p className="text-zion-slate-light text-center mb-8 max-w-3xl mx-auto">
              For questions about these terms or legal matters, please contact our legal team 
              using the information below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Legal Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light text-sm">{contactInfo.address}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Website</h3>
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-8 rounded-2xl border border-yellow-500/30"
          >
            <div className="flex items-start gap-4">
              <Info className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Important Legal Notice</h3>
                <p className="text-zion-slate-light mb-4">
                  These terms constitute a legally binding agreement between you and Zion Tech Group. 
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
                <p className="text-zion-slate-light">
                  If you do not agree to these terms, you must not use our services. We recommend that you 
                  consult with legal counsel if you have any questions about these terms or their legal implications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              If you have any questions about these terms of service or need clarification on any provision, 
              our legal team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Legal Team
              </Link>
              <Link
                to="/privacy"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
