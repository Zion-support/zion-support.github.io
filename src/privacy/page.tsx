import { CheckCircle, Shield, Phone, Mail } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden"></section>"
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>"
        <div className="container mx-auto px-4 relative z-10"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>"
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"></p>"
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>"
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>"
                <Shield className="w-5 h-5 text-cyan-400" />"
                <span className="text-white font-medium">GDPR Compliant</span>"
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>"
                <Lock className="w-5 h-5 text-purple-400" />"
                <span className="text-white font-medium">Secure Data</span>"
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
                This privacy policy may be updated from time to time. We will notify you of any changes.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">"
                <li>Deliver and maintain our AI services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Improve our services and develop new features</li>
              </ul>
            </section>

      {/* Introduction */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>"
            <div className="prose prose-lg prose-invert max-w-none"></div>"
              <p className="text-gray-300 mb-6"></p>"
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. "
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit,
our website or use our services.
              </p>
              <p className="text-gray-300 mb-6"></p>"
                By using our website or services, you agree to the collection and use of information in accordance with,
this policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>
            </section>

      {/* Information We Collect */}
      <section className="py-20 bg-slate-800/50"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-6xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Information We Collect</h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>"
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>"
                  <div className="flex items-center space-x-3 mb-4"></div>"
                    <type.icon className="w-8 h-8 text-cyan-400" />"
                    <h3 className="text-xl font-bold text-white">{type.category}</h3>"
                  </div>
                  <p className="text-gray-300 mb-4">{type.description}</p>"
                  <div className="space-y-2"></div>"
                    <h4 className="text-sm font-semibold text-cyan-400">Examples:</h4>"
                    <ul className="space-y-1"></ul>"
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-gray-400 flex items-center"></li>"
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />"
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-8">How We Use Your Information</h2>"
            <div className="space-y-6"></div>"
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Service Delivery</h3>"
                <p className="text-gray-300"></p>"
                  To provide, maintain, and improve our services, including AI solutions, IT services, and customer support.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Communication</h3>"
                <p className="text-gray-300"></p>"
                  To respond to your inquiries, send important updates, and provide customer support.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Marketing</h3>"
                <p className="text-gray-300"></p>"
                  To send you newsletters, promotional materials, and information about our services (with your consent).
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Analytics</h3>"
                <p className="text-gray-300"></p>"
                  To analyze website usage, improve user experience, and understand how our services are used.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>"
                <h3 className="text-xl font-bold text-white mb-3">Legal Compliance</h3>"
                <p className="text-gray-300"></p>"
                  To comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Data Security */}
      <section className="py-20 bg-slate-800/50"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Security</h2>"
            <p className="text-gray-300 mb-8 text-center"></p>"
              We implement appropriate technical and organizational measures to protect your personal information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
              {securityMeasures.map((measure, index) => (
                <div key={index} className="flex items-center space-x-3"></div>"
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />"
                  <span className="text-gray-300">{measure}</span>"
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-6xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Rights</h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
              {rights.map((right, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center"></div>"
                  <right.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                  <h3 className="text-xl font-bold text-white mb-3">{right.title}</h3>"
                  <p className="text-gray-300 text-sm">{right.description}</p>"
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></section>"
        <div className="container mx-auto px-4"></div>"
          <div className="max-w-4xl mx-auto text-center"></div>"
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Your Privacy?</h2>"
            <p className="text-xl text-gray-300 mb-8"></p>"
              If you have any questions about this Privacy Policy or our data practices, please contact us.
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

export default PrivacyPage;
