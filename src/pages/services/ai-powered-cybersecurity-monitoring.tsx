import React from 'react';
import { SEO } from '../../components/SEO';
import { Shield, Eye, AlertTriangle, Lock, Zap, Target, BarChart3, CheckCircle, Star, Award, Brain, Clock, Users, Network } from 'lucide-react';

const AIPoweredCybersecurityMonitoring = () => {
  return (
    <>
      <SEO 
        title="AI-Powered Cybersecurity Monitoring - Zion Tech Group"
        description="24/7 AI-powered cybersecurity monitoring with 99.9% threat detection accuracy. Protect your organization from advanced persistent threats and zero-day attacks."
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 py-20 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Security Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Cybersecurity Monitoring
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
              24/7 AI-powered cybersecurity monitoring with 99.9% threat detection accuracy. 
              Protect your organization from advanced persistent threats, zero-day attacks, and insider threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Get Protected - $3,999/month
              </a>
              <a 
                href="#features" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Features
              </a>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Threat Protection</h2>
              <p className="text-gray-600 text-lg">AI-driven security monitoring that adapts to evolving threats</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Detection Accuracy</h3>
                <p className="text-gray-600">Advanced AI algorithms detect threats with industry-leading accuracy and minimal false positives.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Response</h3>
                <p className="text-gray-600">Instant threat detection and automated response to neutralize attacks within seconds.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero-day Protection</h3>
                <p className="text-gray-600">Behavioral analysis and machine learning detect unknown threats before they can cause damage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Security Features</h2>
              <p className="text-gray-600 text-lg">Multi-layered AI-powered security monitoring and response</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Network Traffic Analysis</h3>
                    <p className="text-gray-600">Deep packet inspection and behavioral analysis to detect malicious network activity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Endpoint Protection</h3>
                    <p className="text-gray-600">AI-powered endpoint detection and response (EDR) for all devices and servers.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Threat Intelligence</h3>
                    <p className="text-gray-600">Real-time threat intelligence feeds and IOCs from global security research.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">User Behavior Analytics</h3>
                    <p className="text-gray-600">Detect insider threats and compromised accounts through behavioral analysis.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Automated Response</h3>
                    <p className="text-gray-600">Automated incident response with playbooks and remediation actions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Cloud Security</h3>
                    <p className="text-gray-600">Comprehensive cloud security monitoring for AWS, Azure, and GCP environments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Compliance Monitoring</h3>
                    <p className="text-gray-600">Continuous compliance monitoring for SOC 2, ISO 27001, and other standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Security Dashboard</h3>
                    <p className="text-gray-600">Real-time security dashboard with threat visualization and incident tracking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Threats We Protect Against</h2>
              <p className="text-gray-600 text-lg">Comprehensive protection against all types of cyber threats</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Persistent Threats</h3>
                <p className="text-gray-600">Detect and prevent sophisticated, long-term cyber attacks targeting your organization.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ransomware & Malware</h3>
                <p className="text-gray-600">Advanced detection and prevention of ransomware, trojans, and other malicious software.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Insider Threats</h3>
                <p className="text-gray-600">Monitor and detect malicious or negligent insider activities that could harm your organization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Monitoring Plans</h2>
              <p className="text-gray-600 text-lg">Choose the protection level that fits your organization</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Essential</h3>
                <div className="text-3xl font-bold text-red-600 mb-4">$3,999/month</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 100 endpoints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Basic threat detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">24/7 monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Email alerts</span>
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block">
                  Get Protected
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-500 relative">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Professional</h3>
                <div className="text-3xl font-bold text-red-600 mb-4">$7,999/month</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 500 endpoints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Advanced AI detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Automated response</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Cloud security</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center block">
                  Get Protected
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-red-600 mb-4">$15,999/month</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Unlimited endpoints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom AI models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Dedicated SOC team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Compliance monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">24/7 phone support</span>
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Organization?</h2>
              <p className="text-gray-300 text-lg">Contact our cybersecurity experts for a security assessment</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-300">📞</span>
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-white ml-3">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-300">✉️</span>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white ml-3">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-300">🌐</span>
                    <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white ml-3">https://ziontechgroup.com</a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-300">📍</span>
                    <span className="text-gray-300 ml-3">364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Security Assessment</h3>
                <p className="text-gray-600 mb-4">Get a comprehensive security assessment of your current infrastructure</p>
                <a href="https://ziontechgroup.com/contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block">
                  Schedule Assessment
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredCybersecurityMonitoring;