import { CheckCircle, FileText, Shield, Phone, Mail } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden"></section>"
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>"
        <div className="container mx-auto px-4 relative z-10"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>"
              Terms of Service
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"></p>"
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>"
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>"
                <Scale className="w-5 h-5 text-cyan-400" />"
                <span className="text-white font-medium">Legal Agreement</span>"
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>"
                <Shield className="w-5 h-5 text-purple-400" />"
                <span className="text-white font-medium">Protection</span>"
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>"
                <CheckCircle className="w-5 h-5 text-green-400" />"
                <span className="text-white font-medium">Transparent</span>"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto"></div>"
            <div className="bg-slate-800/50 rounded-lg p-6 text-center"></div>"
              <p className="text-gray-300"></p>"
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
              <p className="text-sm text-gray-400 mt-2"></p>"
                These terms may be updated from time to time. Continued use of our services constitutes acceptance of any changes.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">"
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on our website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

      {/* Key Terms */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-6xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Terms</h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>"
                  <div className="flex items-center space-x-3 mb-4"></div>"
                    <section.icon className="w-8 h-8 text-cyan-400" />"
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>"
                  </div>
                  <p className="text-gray-300 text-sm">{section.content}</p>"
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Uses */}
      <section className="py-20 bg-slate-800/50"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Prohibited Uses</h2>"
            <p className="text-gray-300 mb-8 text-center"></p>"
              You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>"
              {prohibitedUses.map((use, index) => (
                <div key={index} className="flex items-start space-x-3"></div>"
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />"
                  <span className="text-gray-300">{use}</span>"
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Level Agreements */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-6xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Level Agreements</h2>"
            <div className="overflow-x-auto"></div>"
              <table className="w-full bg-slate-800/50 rounded-lg overflow-hidden"></table>"
                <thead></thead>
                  <tr className="bg-slate-700/50"></tr>"
                    <th className="px-6 py-4 text-left text-white font-semibold">Service</th>"
                    <th className="px-6 py-4 text-left text-white font-semibold">Uptime</th>"
                    <th className="px-6 py-4 text-left text-white font-semibold">Support</th>"
                    <th className="px-6 py-4 text-left text-white font-semibold">Response Time</th>"
                  </tr>
                </thead>
                <tbody></tbody>
                  {serviceLevels.map((level, index) => (
                    <tr key={index} className="border-t border-gray-700"></tr>"
                      <td className="px-6 py-4 text-white font-medium">{level.service}</td>"
                      <td className="px-6 py-4 text-cyan-400">{level.uptime}</td>"
                      <td className="px-6 py-4 text-purple-400">{level.support}</td>"
                      <td className="px-6 py-4 text-green-400">{level.response}</td>"
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-slate-800/50"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Payment Terms</h2>"
            <div className="space-y-6"></div>"
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Billing</h3>"
                <p className="text-gray-300"></p>"
                  Services are billed monthly or annually as agreed upon in your service contract. 
                  Payment is due within 30 days of invoice date.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Refunds</h3>"
                <p className="text-gray-300"></p>"
                  Refunds are provided at our discretion and are subject to the terms of your specific service agreement. 
                  No refunds for services already delivered.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Late Payments</h3>"
                <p className="text-gray-300"></p>"
                  Late payments may result in service suspension. A late fee of 1.5% per month may be applied to overdue accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Termination */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Termination</h2>"
            <div className="space-y-6"></div>"
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Termination by You</h3>"
                <p className="text-gray-300"></p>"
                  You may terminate your account at any time by providing 30 days written notice. 
                  Data will be provided in a standard format upon request.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Termination by Us</h3>"
                <p className="text-gray-300"></p>"
                  We may terminate your account immediately if you violate these terms or engage in prohibited activities. 
                  We will provide reasonable notice when possible.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Effect of Termination</h3>"
                <p className="text-gray-300"></p>"
                  Upon termination, your right to use our services ceases immediately. 
                  We will retain your data for 90 days after termination for recovery purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20 bg-slate-800/50"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>"
            <p className="text-xl text-gray-300 mb-8"></p>"
              These terms are governed by the laws of the State of Delaware, United States. 
              Any disputes will be resolved in the courts of Delaware.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>"
              <div className="flex items-center justify-center space-x-3"></div>"
                <Globe className="w-5 h-5 text-cyan-400" />"
                <span className="text-white">Delaware, USA</span>"
              </div>
              <div className="flex items-center justify-center space-x-3"></div>"
                <Scale className="w-5 h-5 text-cyan-400" />"
                <span className="text-white">US Law</span>"
              </div>
              <div className="flex items-center justify-center space-x-3"></div>"
                <FileText className="w-5 h-5 text-cyan-400" />"
                <span className="text-white">English Language</span>"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h2 className="text-3xl font-bold text-white mb-6">Questions About These Terms?</h2>"
            <p className="text-xl text-gray-300 mb-8"></p>"
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>"
              <div className="flex items-center justify-center space-x-3"></div>"
                <Mail className="w-5 h-5 text-cyan-400" />"
                <span className="text-white">kleber@ziontechgroup.com</span>"
              </div>
              <div className="flex items-center justify-center space-x-3"></div>"
                <Phone className="w-5 h-5 text-cyan-400" />"
                <span className="text-white">+1 (302) 464-0950</span>"
              </div>
              <div className="flex items-center justify-center space-x-3"></div>"
                <Globe className="w-5 h-5 text-cyan-400" />"
                <span className="text-white">Middletown, DE</span>"
              </div>
            </div>
            <a,
href="/contact""
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-colors inline-flex items-center""
            ></a>
              <Mail className="w-5 h-5 mr-2" />"
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
