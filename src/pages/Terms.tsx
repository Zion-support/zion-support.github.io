import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Shield, Users, Globe, CheckCircle, AlertTriangle, Scale, Lock, Mail, Phone, MapPin, Calendar, Eye, Database, Zap, Rocket, Brain, Cpu, FileText } from 'lucide-react';
;
const Terms: React.FC = () => {;
  const lastUpdated = 'December 15, 2024';
;
  const termsSections = [;
    {;
      title: 'Acceptance of Terms',;
      content: "By accessing and using Zion Tech Group's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",;
      icon: CheckCircle;
    },;
    {;
      title: 'Service Description',;
      content: 'Zion Tech Group provides AI-powered technology solutions, cloud services, cybersecurity, digital transformation, and IT consulting services. We reserve the right to modify or discontinue services at any time.',;
      icon: Shield;
    },;
    {;
      title: 'User Responsibilities',;
      content: 'Users are responsible for providing accurate information, maintaining the security of their accounts, and complying with all applicable laws and regulations when using our services.',;
      icon: Users;
    },;
    {;
      title: 'Intellectual Property',;
      content: 'All content, software, and materials provided by Zion Tech Group are protected by intellectual property rights. Users may not copy, modify, or distribute our proprietary materials without permission.',;
      icon: Lock;
    },;
    {;
      title: 'Privacy and Data Protection',;
      content: 'Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service.',;
      icon: Shield;
    },;
    {;
      title: 'Limitation of Liability',;
      content: 'Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to data loss or business interruption.',;
      icon: AlertTriangle;
    };
  ];
;
  const prohibitedActivities = [;
    'Attempting to gain unauthorized access to our systems',;
    'Using our services for illegal or harmful purposes',;
    'Interfering with the operation of our services',;
    'Attempting to reverse engineer our software',;
    'Sharing account credentials with unauthorized users',;
    'Violating any applicable laws or regulations';
  ];
;
  const terminationConditions = [;
    'Violation of these Terms of Service',;
    'Non-payment of service fees',;
    'Engagement in prohibited activities',;
    'Breach of security or privacy policies',;
    'Failure to comply with legal requirements',;
    'Mutual agreement to terminate services';
  ];
;
  const userObligations = [;
    {;
      obligation: 'Compliance',;
      description: 'Comply with all applicable laws and regulations when using our services.';
    },;
    {;
      obligation: 'Acceptable Use',;
      description: 'Use our services only for lawful purposes and in accordance with these terms.';
    },;
    {;
      obligation: 'Security',;
      description: 'Maintain the security of your account and notify us of any unauthorized access.';
    },;
    {;
      obligation: 'Payment',;
      description: 'Pay all applicable fees for services rendered in a timely manner.';
    };
  ];
;
  return (;"
    <>;""
      <SEO";""
        title="Terms of Service - Zion Tech Group";""
        description="Read Zion Tech Group's Terms of Service. Learn about our service terms, user responsibilities, and policies.";""
        keywords="terms of service, service terms, user agreement, Zion Tech Group, legal terms";""
      />";""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">;""
        {/* Header */}";""
        <section className="pt-32 pb-16 px-4">";""
          <div className="max-w-7xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};"
              transition={{ duration: 0.6 }};""
            >";""
              <div className="flex items-center justify-center space-x-3 mb-6">";""
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">";""
                  <Scale className="w-8 h-8 text-white" />;"
                </div>;""
              </div>";""
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">;"
                Terms of Service;""
              </h1>";""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;"
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.;""
              </p>";""
              <p className="text-sm text-gray-400">;
                Last updated: {lastUpdated};
              </p>;
            </motion.div>;
          </div>;"
        </section>;""
        {/* Terms Sections */}";""
        <section className="py-16 px-4">";""
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};"
              viewport={{ once: true }};""
              transition={{ duration: 0.6 }}";""
              className="text-center mb-16";""
            >";""
              <h2 className="text-3xl font-bold text-white mb-8">;"
                Service Terms;""
              </h2>";""
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
                {termsSections.map((section, index) => (;
                  <motion.div;
                    key={section.title};
                    initial={{ opacity: 0, y: 20 }};
                    whileInView={{ opacity: 1, y: 0 }};"
                    viewport={{ once: true }};""
                    transition={{ duration: 0.6, delay: index * 0.1 }}";""
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50";""
                  >";""
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">";""
                      <section.icon className="w-8 h-8 text-white" />;""
                    </div>";""
                    <h3 className="text-xl font-semibold text-white mb-3">;"
                      {section.title};""
                    </h3>";""
                    <p className="text-gray-300 text-sm">;
                      {section.content};
                    </p>;
                  </motion.div>;
                ))};
              </div>;
            </motion.div>;
          </div>;"
        </section>;""
        {/* Prohibited Activities */}";""
        <section className="py-16 px-4 bg-slate-800/30">";""
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};"
              viewport={{ once: true }};""
              transition={{ duration: 0.6 }}";""
              className="text-center mb-16";""
            >";""
              <h2 className="text-3xl font-bold text-white mb-8">;"
                Prohibited Activities;""
              </h2>";""
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                {prohibitedActivities.map((activity, index) => (;
                  <motion.div;
                    key={index};
                    initial={{ opacity: 0, x: -20 }};
                    whileInView={{ opacity: 1, x: 0 }};"
                    viewport={{ once: true }};""
                    transition={{ duration: 0.6, delay: index * 0.1 }}";""
                    className="flex items-center space-x-3 text-left";""
                  >";""
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />";""
                    <span className="text-gray-300">{activity}</span>;
                  </motion.div>;
                ))};
              </div>;
            </motion.div>;
          </div>;"
        </section>;""
        {/* User Obligations */}";""
        <section className="py-16 px-4">";""
          <div className="max-w-7xl mx-auto">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};"
              viewport={{ once: true }};""
              transition={{ duration: 0.6 }}";""
              className="text-center mb-16";""
            >";""
              <h2 className="text-3xl font-bold text-white mb-8">;"
                User Obligations;""
              </h2>";""
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
                {userObligations.map((obligation, index) => (;
                  <motion.div;
                    key={obligation.obligation};
                    initial={{ opacity: 0, y: 20 }};
                    whileInView={{ opacity: 1, y: 0 }};"
                    viewport={{ once: true }};""
                    transition={{ duration: 0.6, delay: index * 0.1 }}";""
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50";""
                  >";""
                    <h3 className="text-xl font-semibold text-white mb-3">;"
                      {obligation.obligation};""
                    </h3>";""
                    <p className="text-gray-300">;
                      {obligation.description};
                    </p>;
                  </motion.div>;
                ))};
              </div>;
            </motion.div>;
          </div>;"
        </section>;""
        {/* Contact Section */}";""
        <section className="py-16 px-4 bg-slate-800/30">";""
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              viewport={{ once: true }};"
              transition={{ duration: 0.6 }};""
            >";""
              <h2 className="text-3xl font-bold text-white mb-6">;"
                Questions About Terms?;""
              </h2>";""
              <p className="text-xl text-gray-300 mb-8">;"
                If you have any questions about these Terms of Service, please contact our legal team.;""
              </p>";""
              <div className="flex items-center justify-center space-x-6 text-gray-300">";""
                <div className="flex items-center space-x-2">";""
                  <Mail className="w-5 h-5 text-blue-400" />;"
                  <span>legal@ziontechgroup.com</span>;""
                </div>";""
                <div className="flex items-center space-x-2">";""
                  <Phone className="w-5 h-5 text-blue-400" />;
                  <span>+1 302 464 0950</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};
;
export default Terms;"
;";""