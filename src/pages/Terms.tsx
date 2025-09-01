import React from 'react';'
export default Terms;''
import { motion  } from 'framer-motion';
export default function Page() {
,
    {
'
''
      title: 'Intellectual Property','
      content:''
        'All content, software, and materials provided by Zion Tech Group are protected by intellectual property rights.Users may not copy, modify, or distribute our proprietary materials without permission.',
      icon: Lock},
    {
'
''
      title: 'Privacy and Data Protection','
      content:''
        'Your privacy is important to us.Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service.',
      icon: Shield},
    {
'
''
      title: 'Limitation of Liability','
      content:''
        'Zion Tech Group shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to data loss or business interruption.',
      icon: AlertTriangle},
  ];'
''
  const prohibitedActivities = ['Attempting to gain unauthorized access to our systems',''
    'Using our services for illegal or harmful purposes',''
    'Interfering with the operation of our services',''
    'Attempting to reverse engineer our software',''
    'Sharing account credentials with unauthorized users',''
    'Violating any applicable laws or regulations',
  ];

const Terms: React.FC = () => {
  return()'
    <>''
      <SEO"'"'"'"
        title="Terms of Service - Zion Tech Group"'"'"'"'"
        description="Read Zion Tech Group's Terms of Service to understand the rules and guidelines for using our AI-powered technology solutions and services.""""
        keywords="terms of service, Zion Tech Group, legal terms, service agreement, user responsibilities""""
      />"      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">"""
        {/* Header */}""""
        <section className="pt-32 pb-16 px-4">""""
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              animate={{ opacity: 1, y: 0 }}""
              transition={{ duration: 0.6 }}"""
            >""""
              <div className="flex items-center justify-center space-x-3 mb-6">""""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">""""
                  <FileText className="w-8 h-8 text-white"  />                </div>"""
              </div>""""
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">""
                Terms of Service"""
              </h1>""""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">"
                These terms govern your use of our services. Please read them""
                carefully before using our technology solutions."""
              </p>""""
              <div className="text-sm text-gray-400">
                Last updated: {lastUpdated}
              </div>
            </motion.div>
          </div>"
        </section>""
"""
        {/* Terms Content */}""""
        <section className="py-16 px-4">""""
          <div className="max-w-4xl mx-auto">""""
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}"
                  whileInView={{ opacity: 1, y: 0 }}""
                  viewport={{ once: true }}"""
                  transition={{ duration: 0.6, delay: index * 0.1 }}""""
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50""""
                >""""
                  <div className="flex items-center gap-3 mb-4">""""
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">""""
                      <section.icon className="w-5 h-5 text-white" />"""
                    </div>""""
                    <h3 className="text-lg font-semibold text-white">"
                      {section.title}""
                    </h3>"""
                  </div>""""
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>) ) }
            </div>

            {/* User Obligations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              whileInView={{ opacity: 1, y: 0 }}""
              viewport={{ once: true }}"""
              transition={{ duration: 0.6 }}""""
              className="mb-16""""
            >""""
              <h2 className="text-3xl font-bold text-white mb-8 text-center">""
                User Obligations"""
              </h2>""""
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
                {userObligations.map((obligation, index) => (""
                  <div"""
                    key={obligation.obligation}""""
                    className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30""""
                  >""""
                    <h4 className="text-white font-semibold mb-2">""
                      {obligation.obligation}"""
                    </h4>""""
                    <p className="text-gray-300 text-sm">
                      {obligation.description}
                    </p>
                  </div>) ) }
              </div>
            </motion.div>

            {/* Prohibited Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              whileInView={{ opacity: 1, y: 0 }}""
              viewport={{ once: true }}"""
              transition={{ duration: 0.6 }}""""
              className="mb-16""""
            >""""
              <h2 className="text-3xl font-bold text-white mb-8 text-center">""
                Prohibited Activities"""
              </h2>""""
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">""""
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"""
                  {prohibitedActivities.map((activity, index) => (""""
                    <div key={index} className="flex items-start gap-3">""""
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"  />"                      <span className="text-gray-300 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Termination Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              whileInView={{ opacity: 1, y: 0 }}""
              viewport={{ once: true }}"""
              transition={{ duration: 0.6 }}""""
              className="mb-16""""
            >""""
              <h2 className="text-3xl font-bold text-white mb-8 text-center">""
                Termination Conditions"""
              </h2>""""
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">""""
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"""
                  {terminationConditions.map((condition, index) => (""""
                    <div key={index} className="flex items-start gap-3">""""
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"  />"                      <span className="text-gray-300 text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              whileInView={{ opacity: 1, y: 0 }}""
              viewport={{ once: true }}"""
              transition={{ duration: 0.6 }}""""
              className="text-center""""
            >""""
              <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>""""
              <p className="text-gray-300 mb-8">"
                If you have any questions about these Terms of Service, please""
                contact us:"""
              </p>""""
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((contact, index) => ("
                  <a""
                    key={contact.label}"""
                    href={contact.href}""""
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 transition-colors""""
                  >""""
                    <div className="flex items-center gap-3">""""
                      <contact.icon className="w-6 h-6 text-blue-400" />""""
                      <div className="text-left">""""
                        <div className="text-white font-semibold">""
                          {contact.label}"""
                        </div>""""
                        <div className="text-gray-300 text-sm">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </a>) ) }
              </div>
            </motion.div>
          </div>
        </section>
      </div>'"
    </>) };'"'"
export default Terms;'"'"'"
'"'"'"
'"'"