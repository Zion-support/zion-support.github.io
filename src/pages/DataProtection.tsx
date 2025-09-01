import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Users, FileText, CheckCircle, Eye, Globe, Server, Key, AlertTriangle } from 'lucide-react';

export default function DataProtection() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Data Protection & Privacy
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Learn how Zion Tech Group protects your personal data and ensures compliance with global privacy regulations.
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
        >
          {/* Our Commitment */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Our Commitment to Data Protection</h2>
            </div>
            <p className="text-zion-slate-light mb-4 leading-relaxed">
              At Zion Tech Group, we are committed to protecting your personal data and ensuring 
              the highest standards of privacy and security. We believe that data protection is not 
              just a legal requirement, but a fundamental right that every individual deserves.
            </p>
            <p className="text-zion-slate-light leading-relaxed">
              Our comprehensive data protection framework ensures that your information is handled 
              with the utmost care, transparency, and security, in compliance with global privacy 
              regulations including GDPR, CCPA, and other applicable laws.
            </p>
          </section>

          {/* Data Protection Principles */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-purple-100 rounded-lg mr-4">
                <Lock className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Protection Principles</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Lawfulness & Fairness</h3>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  We process personal data only when we have a legal basis to do so, 
                  and we ensure that all processing is fair and transparent.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Eye className="h-5 w-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Transparency</h3>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  We are transparent about how we collect, use, and protect your data, 
                  providing clear information about our data practices.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Database className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Data Minimization</h3>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  We collect only the data that is necessary for the specified purposes 
                  and do not retain it longer than required.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Key className="h-5 w-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Security & Confidentiality</h3>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  We implement robust security measures to protect your data against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 rounded-lg mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Your Data Protection Rights</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Under data protection laws, you have several rights regarding your personal data:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">Right to Access</h4>
                      <p className="text-zion-slate-light text-xs">
                        Request a copy of your personal data and information about how we process it
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">Right to Rectification</h4>
                      <p className="text-zion-slate-light text-xs">
                        Request correction of inaccurate or incomplete personal data
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">Right to Erasure</h4>
                      <p className="text-zion-slate-light text-xs">
                        Request deletion of your personal data in certain circumstances
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">Right to Restriction</h4>
                      <p className="text-zion-slate-light text-xs">
                        Request limitation of processing in certain circumstances
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">Right to Portability</h4>
                      <p className="text-zion-slate-light text-xs">
                        Receive your data in a structured, machine-readable format
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">Right to Object</h4>
                      <p className="text-zion-slate-light text-xs">
                        Object to processing based on legitimate interests or direct marketing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security Measures */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-red-100 rounded-lg mr-4">
                <Server className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Security Measures</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                We implement comprehensive security measures to protect your personal data:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Encryption</h4>
                    <p className="text-zion-slate-light text-sm">
                      All data is encrypted both in transit and at rest using industry-standard 
                      encryption protocols (AES-256, TLS 1.3).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Access Controls</h4>
                    <p className="text-zion-slate-light text-sm">
                      Strict access controls ensure that only authorized personnel can access 
                      personal data, with role-based permissions and multi-factor authentication.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Regular Security Audits</h4>
                    <p className="text-zion-slate-light text-sm">
                      We conduct regular security assessments, penetration testing, and 
                      vulnerability scans to identify and address potential security risks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Incident Response</h4>
                    <p className="text-zion-slate-light text-sm">
                      Comprehensive incident response procedures ensure rapid detection, 
                      containment, and resolution of any security incidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">International Data Transfers</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                As a global technology company, Zion Tech Group may transfer personal data 
                across international borders. We ensure that all such transfers comply with 
                applicable data protection laws:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    <strong>Standard Contractual Clauses (SCCs):</strong> We use EU-approved 
                    SCCs for transfers to countries without adequate data protection levels.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    <strong>Adequacy Decisions:</strong> We rely on adequacy decisions for 
                    transfers to countries with recognized data protection standards.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    <strong>Binding Corporate Rules:</strong> Our internal policies ensure 
                    consistent data protection standards across all our operations.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Data Breach Notification */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Breach Notification</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                In the unlikely event of a data breach that affects your personal data, 
                we have established procedures to:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Detect and assess the breach within 72 hours
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Notify relevant supervisory authorities as required by law
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Inform affected individuals when the breach poses a high risk to their rights
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-zion-slate-light text-sm">
                    Take immediate action to contain and remediate the breach
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 rounded-lg mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Our Data Protection Team</h2>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                If you have any questions about data protection, want to exercise your rights, 
                or need to report a concern, please contact our dedicated Data Protection Officer:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📧</span>
                  </div>
                  <span className="text-zion-slate-light">
                    Email: <a href="mailto:dpo@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">dpo@ziontechgroup.com</a>
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <span className="text-zion-slate-light">
                    Phone: <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300">+1 (555) 123-4567</a>
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <span className="text-zion-slate-light">
                    Address: 123 Tech Street, Innovation City, IC 12345
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-300 text-sm">
                  <strong>Response Time:</strong> We aim to respond to all data protection 
                  inquiries within 30 days, as required by law.
                </p>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-zion-slate-light text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', {

              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </div>
    </div>
  );
}