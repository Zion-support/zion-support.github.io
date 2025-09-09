import React from 'react';
import { SEO } from '../components/SEO';
import { FileText, Scale, Users, Shield, AlertTriangle, Clock, Mail, Phone, Globe } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group"
        description="Terms of Service for Zion Tech Group. Learn about our service terms, user responsibilities, and legal agreements."
        keywords="terms of service, legal, agreement, Zion Tech Group, service terms"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>
            <div className="text-sm text-zion-slate-light">
              Last updated: January 26, 2025
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-zion-cyan mr-3" />
                Introduction
              </h2>
              <p className="text-zion-slate-light leading-relaxed">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services 
                (collectively, the "Service") operated by Zion Tech Group ("us," "we," or "our"). By accessing 
                or using our Service, you agree to be bound by these Terms.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 text-zion-cyan mr-3" />
                Acceptance of Terms
              </h2>
              <p className="text-zion-slate-light leading-relaxed">
                By accessing and using this Service, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this Service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Description</h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                Zion Tech Group provides technology solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>AI and machine learning services</li>
                <li>Cybersecurity solutions</li>
                <li>Cloud infrastructure and migration services</li>
                <li>Digital transformation consulting</li>
                <li>IT support and maintenance</li>
                <li>Software development and customization</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                User Responsibilities
              </h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                As a user of our Service, you agree to:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the Service in compliance with applicable laws and regulations</li>
                <li>Not use the Service for any unlawful or prohibited purpose</li>
                <li>Not interfere with or disrupt the Service or servers</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                Payment terms for our services include:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>Payment is due according to the terms specified in your service agreement</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are subject to change with 30 days notice</li>
                <li>Refunds are subject to our refund policy</li>
                <li>You are responsible for all applicable taxes</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-zion-slate-light leading-relaxed">
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of Zion Tech Group and its licensors. The Service is protected by copyright, 
                trademark, and other laws. Our trademarks and trade dress may not be used in connection with 
                any product or service without our prior written consent.
              </p>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
              <p className="text-zion-slate-light leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                use of the Service, to understand our practices.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-zion-cyan mr-3" />
                Limitation of Liability
              </h2>
              <p className="text-zion-slate-light leading-relaxed">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of the Service.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-zion-slate-light leading-relaxed">
                We may terminate or suspend your account and bar access to the Service immediately, without 
                prior notice or liability, under our sole discretion, for any reason whatsoever and without 
                limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Clock className="w-6 h-6 text-zion-cyan mr-3" />
                Changes to Terms
              </h2>
              <p className="text-zion-slate-light leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms 
                taking effect. Your continued use of the Service after any such changes constitutes your 
                acceptance of the new Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-zion-slate-light leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
                without regard to its conflict of law provisions. Our failure to enforce any right or provision 
                of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Mail className="w-6 h-6 text-zion-cyan mr-3" />
                Contact Information
              </h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-zion-slate-dark/30 border border-zion-cyan/20 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                    <span className="text-white">Email: </span>
                    <a href="mailto:legal@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan/80 ml-2">
                      legal@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                    <span className="text-white">Phone: </span>
                    <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan/80 ml-2">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-zion-cyan mr-3 mt-1" />
                    <div>
                      <span className="text-white">Address: </span>
                      <div className="text-zion-slate-light ml-2">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;