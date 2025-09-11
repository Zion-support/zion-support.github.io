import React from 'react';
import Head from 'next/head';
import { Shield, CheckCircle, AlertTriangle, Code, Lock, Zap, Target, BarChart3, Star, Award, Brain, Clock, Users } from 'lucide-react';

const BlockchainSmartContractAuditor = () => {
  return (
    <>
      <Head>
        <title>Blockchain Smart Contract Auditor - Zion Tech Group</title>
        <meta name="description" content="Professional smart contract auditing services with 99.9% security guarantee. Protect your DeFi, NFT, and blockchain projects from vulnerabilities." />
        <link rel="canonical" href="https://ziontechgroup.com/services/blockchain-smart-contract-auditor" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 py-20 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Blockchain Security Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blockchain Smart Contract Auditor
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
              Professional smart contract auditing services with 99.9% security guarantee. 
              Protect your DeFi, NFT, and blockchain projects from vulnerabilities and exploits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get Audit - $5,000+
              </a>
              <a 
                href="#features" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure Your Blockchain Projects</h2>
              <p className="text-gray-600 text-lg">Professional auditing services to protect your smart contracts and users</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Security Guarantee</h3>
                <p className="text-gray-600">Comprehensive security analysis with industry-leading vulnerability detection rates.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Analysis</h3>
                <p className="text-gray-600">Certified blockchain security experts with years of DeFi and smart contract experience.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">Get your audit report within 7-14 days with detailed remediation guidance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Audit Services</h2>
              <p className="text-gray-600 text-lg">Multi-layered security analysis for all blockchain platforms</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Vulnerability Assessment</h3>
                    <p className="text-gray-600">Comprehensive analysis of reentrancy, overflow, access control, and logic vulnerabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Gas Optimization</h3>
                    <p className="text-gray-600">Identify gas inefficiencies and provide optimization recommendations to reduce transaction costs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Code Quality Review</h3>
                    <p className="text-gray-600">Evaluate code structure, best practices, and maintainability for long-term project success.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Economic Security</h3>
                    <p className="text-gray-600">Analyze tokenomics, governance mechanisms, and economic attack vectors.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Automated Testing</h3>
                    <p className="text-gray-600">Advanced static analysis tools and automated vulnerability scanners for comprehensive coverage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Manual Review</h3>
                    <p className="text-gray-600">Expert manual code review to identify complex vulnerabilities missed by automated tools.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Remediation Support</h3>
                    <p className="text-gray-600">Detailed remediation guidance and ongoing support to fix identified issues.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Compliance Check</h3>
                    <p className="text-gray-600">Ensure compliance with industry standards and regulatory requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Audit Types We Cover</h2>
              <p className="text-gray-600 text-lg">Specialized auditing for all blockchain project types</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Protocols</h3>
                <p className="text-gray-600">DEX, lending protocols, yield farming, and liquidity mining smart contracts.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Projects</h3>
                <p className="text-gray-600">NFT marketplaces, minting contracts, and royalty distribution mechanisms.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DAO Governance</h3>
                <p className="text-gray-600">Governance tokens, voting mechanisms, and treasury management contracts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Audit Pricing</h2>
              <p className="text-gray-600 text-lg">Transparent pricing based on contract complexity</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Basic Audit</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">$5,000+</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 500 lines of code</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Automated vulnerability scan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Basic manual review</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">7-day turnaround</span>
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center block">
                  Get Quote
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-indigo-500 relative">
                <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Professional Audit</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">$15,000+</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 2,000 lines of code</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Comprehensive automated scan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Expert manual review</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Gas optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">14-day turnaround</span>
                  </li>
                </ul>
                <a href="#contact" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center block">
                  Get Quote
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Enterprise Audit</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">$50,000+</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Unlimited code lines</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Full security suite</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Team of experts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">Economic security analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">30-day comprehensive audit</span>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Smart Contracts?</h2>
              <p className="text-gray-300 text-lg">Contact our blockchain security experts for a consultation</p>
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Request Audit Quote</h3>
                <p className="text-gray-600 mb-4">Get a personalized quote for your smart contract audit</p>
                <a href="https://ziontechgroup.com/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block">
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainSmartContractAuditor;