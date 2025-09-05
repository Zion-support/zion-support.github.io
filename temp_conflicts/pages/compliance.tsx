import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Scale, CheckCircle, Globe, Shield, FileText, Users, Mail, Phone, MapPin } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function Compliance() {
  const complianceFrameworks = [
    {
      id: 'soc2',
      title: 'SOC 2 Type II',
      icon: Shield,
      description: 'Annual audits of security, availability, and confidentiality controls',
      details: [
        'Independent third-party auditing',
        'Security controls assessment',
        'Availability and processing integrity',
        'Confidentiality safeguards',
        'Annual compliance reporting'
      ]
    },
    {
      id: 'iso27001',
      title: 'ISO 27001',
      icon: Scale,
      description: 'International standard for information security management',
      details: [
        'Information security management system (ISMS)',
        'Risk assessment and management',
        'Security policy implementation',
        'Continuous improvement processes',
        'Regular certification audits'
      ]
    },
    {
      id: 'gdpr',
      title: 'GDPR Compliance',
      icon: Globe,
      description: 'European Union data protection regulation compliance',
      details: [
        'Data protection by design and default',
        'Individual rights management',
        'Data processing agreements',
        'Privacy impact assessments',
        'Breach notification procedures'
      ]
    },
    {
      id: 'hipaa',
      title: 'HIPAA Compliance',
      icon: Users,
      description: 'Healthcare information privacy and security standards',
      details: [
        'Protected health information (PHI) safeguards',
        'Business associate agreements',
        'Access controls and audit logs',
        'Workforce training programs',
        'Incident response procedures'
      ]
    }
  ];

  const additionalCompliance = [
    { name: 'PCI DSS', description: 'Payment card industry data security standard' },
    { name: 'CCPA', description: 'California Consumer Privacy Act compliance' },
    { name: 'FERPA', description: 'Family Educational Rights and Privacy Act' },
    { name: 'FISMA', description: 'Federal Information Security Management Act' },
    { name: 'FedRAMP', description: 'Federal Risk and Authorization Management Program' }
  ];

  return (
    <>
      <Head>
        <title>Compliance | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Learn about Zion Tech Group's regulatory compliance, certifications, and commitment to meeting industry standards and data protection requirements.&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        <EnhancedNavigation />

        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 px-6&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;flex items-center justify-center mb-6&quot;
            >
              <Scale className=&quot;w-16 h-16 text-cyan-400&quot; />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className=&quot;text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6&quot;
            >
              Regulatory Compliance
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;
            >
              We maintain the highest standards of regulatory compliance to protect your data and ensure business continuity across global markets.
            </motion.p>
          </div>
        </section>

        {/* Compliance Overview */}
        <section className=&quot;py-20 px-6&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Comprehensive Compliance Program</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Our commitment to compliance ensures that we meet or exceed industry standards and regulatory requirements.
              </p>
            </motion.div>

            {/* Main Compliance Frameworks */}
            <div className=&quot;grid md:grid-cols-2 gap-8 mb-16&quot;>
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300&quot;
                >
                  <div className=&quot;flex items-center mb-6&quot;>
                    <framework.icon className=&quot;w-8 h-8 text-cyan-400 mr-4&quot; />
                    <div>
                      <h3 className=&quot;text-2xl font-bold text-white&quot;>{framework.title}</h3>
                      <p className=&quot;text-gray-400 mt-1&quot;>{framework.description}</p>
                    </div>
                  </div>
                  
                  <ul className=&quot;space-y-3&quot;>
                    {framework.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300 leading-relaxed&quot;>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Additional Compliance Standards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className=&quot;bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16&quot;
            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6 text-center&quot;>Additional Compliance Standards</h3>
              
              <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
                {additionalCompliance.map((standard, index) => (
                  <motion.div
                    key={standard.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=&quot;text-center p-4 bg-slate-800/50 rounded-xl border border-white/10&quot;
                  >
                    <CheckCircle className=&quot;w-8 h-8 text-green-400 mx-auto mb-3&quot; />
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>{standard.name}</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Compliance Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className=&quot;mb-16&quot;
            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6&quot;>Our Compliance Process</h3>
              <div className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10&quot;>
                <div className=&quot;grid md:grid-cols-4 gap-6&quot;>
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <FileText className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Assessment</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Regular compliance assessments and gap analysis</p>
                  </div>
                  
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <Shield className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Implementation</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Control implementation and policy enforcement</p>
                  </div>
                  
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <Scale className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Audit</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Independent third-party audits and validation</p>
                  </div>
                  
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <CheckCircle className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Monitoring</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Continuous monitoring and improvement</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Protection Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className=&quot;mb-16&quot;
            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6&quot;>Your Data Protection Rights</h3>
              <div className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10&quot;>
                <p className=&quot;text-gray-300 leading-relaxed mb-6&quot;>
                  Under various data protection regulations, you have specific rights regarding your personal data:
                </p>
                
                <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
                  <div>
                    <h4 className=&quot;text-white font-semibold mb-4 flex items-center&quot;>
                      <Users className=&quot;w-5 h-5 text-cyan-400 mr-2&quot; />
                      Individual Rights
                    </h4>
                    <ul className=&quot;space-y-2 text-gray-300&quot;>
                      <li>• Right to access your personal data</li>
                      <li>• Right to rectification (correction)</li>
                      <li>• Right to erasure (&quot;right to be forgotten&quot;)</li>
                      <li>• Right to restrict processing</li>
                      <li>• Right to data portability</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className=&quot;text-white font-semibold mb-4 flex items-center&quot;>
                      <Shield className=&quot;w-5 h-5 text-cyan-400 mr-2&quot; />
                      Exercise Your Rights
                    </h4>
                    <ul className=&quot;space-y-2 text-gray-300&quot;>
                      <li>• Submit requests through our privacy portal</li>
                      <li>• Contact our Data Protection Officer</li>
                      <li>• Receive responses within regulatory timeframes</li>
                      <li>• Appeal decisions through supervisory authorities</li>
                      <li>• Free of charge for legitimate requests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* International Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className=&quot;mb-16&quot;
            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6&quot;>Global Compliance Coverage</h3>
              <div className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10&quot;>
                <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
                  <div className=&quot;text-center&quot;>
                    <Globe className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>European Union</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>GDPR, Data Protection Act, Digital Services Act</p>
                  </div>
                  
                  <div className=&quot;text-center&quot;>
                    <Globe className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>United States</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>CCPA, HIPAA, SOX, FISMA, FedRAMP</p>
                  </div>
                  
                  <div className=&quot;text-center&quot;>
                    <Globe className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Asia-Pacific</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>PIPEDA, Privacy Act, PDPA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Compliance Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className=&quot;bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/20&quot;
            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6 flex items-center&quot;>
                <Scale className=&quot;w-8 h-8 text-purple-400 mr-4&quot; />
                Compliance Questions?
              </h3>
              
              <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                For questions about our compliance programs or to exercise your data protection rights:
              </p>
              
              <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
                <div className=&quot;flex items-center&quot;>
                  <Mail className=&quot;w-5 h-5 text-purple-400 mr-3&quot; />
                  <div>
                    <p className=&quot;text-white font-semibold&quot;>Compliance Email</p>
                    <p className=&quot;text-gray-300&quot;>compliance@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className=&quot;flex items-center&quot;>
                  <Users className=&quot;w-5 h-5 text-purple-400 mr-3&quot; />
                  <div>
                    <p className=&quot;text-white font-semibold&quot;>Data Protection Officer</p>
                    <p className=&quot;text-gray-300&quot;>dpo@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className=&quot;flex items-center&quot;>
                  <Phone className=&quot;w-5 h-5 text-purple-400 mr-3&quot; />
                  <div>
                    <p className=&quot;text-white font-semibold&quot;>Compliance Hotline</p>
                    <p className=&quot;text-gray-300&quot;>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <EnhancedFooter />
      </div>
    </>
  );
}