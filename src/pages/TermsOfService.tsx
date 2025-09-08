
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Please read these terms carefully before using our services. By using our services, you agree to these terms.
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <Scale className=&quot;w-16 h-16 text-blue-400&quot; />&quot;

              <p className="text-xl text-gray-300 mb-8">
                Please read these terms carefully before using our services. 
                By using our services, you agree to be bound by these terms.""
              </p>""
              <div className="flex items-center justify-center">""
                <Scale className="w-16 h-16 text-blue-400" /"" >



              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}""
        <section className="py-16">""
          <div className="container mx-auto px-4 max-w-4xl">


              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              className="prose prose-lg prose-invert max-w-none"
            >"
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50">"
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>"
                <p className="text-gray-300 mb-4">"
                  By accessing and using Zion Tech Group&apos;s services, you accept and agree to be bound '
                  by the terms and provision of this agreement.'
                </p>""
                <p className="text-gray-300">
                  If you do not agree to abide by the above, please do not use this service.

                </p>
              </div>"


                <p className="text-gray-300">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>""

""
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">""
                <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>""
                <p className="text-gray-300 mb-4">

                  Zion Tech Group&apos;s website for personal, non-commercial transitory viewing only.'
                </p>'
                <p className="text-gray-300">



                <ul className="text-gray-300 space-y-2 mt-4">

                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for  commercial purpose</li>
                  <li>• Attempt to reverse engineer  software</li>
                  <li>• Remove  copyright or proprietary notations</li>

                </ul>

""
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">""
                <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>""
                <p className="text-gray-300 mb-4">
                  We strive to maintain high service availability, but we do not guarantee 

                </p>""
                <p className="text-gray-300">
                  We reserve the right to modify, suspend, or discontinue  part of our 
                  services at  time without notice.
                </p>

""
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">""
                <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>""
                <p className="text-gray-300 mb-4">



                <ul className="text-gray-300 space-y-2">

                  <li>• Provide accurate and complete information</li>

                  <li>• Maintain the security of your account credentials</li>
                  <li>• Use our services in compliance with applicable laws</li>
                  <li>• Not engage in  harmful or illegal activities</li>
                </ul>

""
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">""
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>""
                <p className="text-gray-300 mb-4">
                  In no event shall Zion Tech Group or its suppliers be liable for  damages 

                </p>""
                <p className="text-gray-300">
                  This limitation applies to all claims, whether based on contract, tort, 
                  or  other legal theory.
                </p>

""
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">""
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>""
                <p className="text-gray-300 mb-4">



                <div className="text-gray-300">

                  <p>Email: legal@ziontechgroup.com</p>


                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Dispute Resolution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Dispute Resolution Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {disputeResolution.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-indigo-200 text-center"
                  >
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-indigo-600">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Our legal team is here to help clarify  questions about our Terms of Service.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Mail className="w-5 h-5" />
                  <span>legal@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                  Contact Legal Team
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                  Request Clarification
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>

  )}






