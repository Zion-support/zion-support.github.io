
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <Shield className=&quot;w-16 h-16 text-blue-400&quot; />&quot;

              <p className="text-xl text-gray-300 mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.

                <Shield className="w-16 h-16 text-blue-400" />




              </div>
            </motion.div>
          </div>
        </section>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50">"
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>"


                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.""

                </p>""
                <ul className="text-gray-300 space-y-2">

                  <li>• Contact information (name, email, phone number)</li>

                  <li>• Account credentials and preferences</li>
                  <li>• Payment and billing information</li>
                  <li>• Communications with our support team</li>
                </ul>

""
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">""
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>""
                <p className="text-gray-300 mb-4">

                </p>""
                <ul className="text-gray-300 space-y-2">

                  <li>• Provide and maintain our services</li>

                  <li>• Process transactions and send related information</li>
                  <li>• Send technical notices and support messages</li>
                  <li>• Respond to your comments and questions</li>
                </ul>

""
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">""
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>""
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information 

                </p>""
                <ul className="text-gray-300 space-y-2">

                  <li>• Encryption of data in transit and at rest</li>

                  <li>• Regular security audits and assessments</li>
                  <li>• Access controls and authentication</li>
                  <li>• Employee training on data protection</li>
                </ul>

""
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">""
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>""
                <p className="text-gray-300 mb-4">



                <ul className="text-gray-300 space-y-2">

                  <li>• Access to your personal information</li>

                  <li>• Correction of inaccurate information</li>
                  <li>• Deletion of your personal information</li>
                  <li>• Objection to processing of your information</li>
                </ul>

""
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-600/50 mt-8">""
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>""
                <p className="text-gray-300 mb-4">



                <div className="text-gray-300">

                  <p>Email: privacy@ziontechgroup.com</p>


                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Data Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Data Categories and Retention
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {dataCategories.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.category}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Examples:</h4>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                          {category.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Purpose:</h4>
                        <p className="text-slate-600">{category.purpose}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Retention Period:</h4>
                        <p className="text-slate-600">{category.retention}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Measures Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Data Security Measures
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityMeasures.map((measure, index) => (
                  <motion.div
                    key={measure.measure}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-green-200"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <measure.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{measure.measure}</h3>
                    <p className="text-slate-600 text-center">{measure.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Our privacy team is here to help. Contact us with  questions about your data or our privacy practices.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Mail className="w-5 h-5" />
                  <span>privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <FileText className="w-5 h-5" />
                  <span>Data Protection Officer</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                  Contact Privacy Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>

  )}






