import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const AIComplianceAutomation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Compliance Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI compliance automation platform providing intelligent regulatory compliance, risk management, and automated compliance monitoring for enterprises." />
        <meta name="keywords" content="AI compliance automation, regulatory compliance, risk management, compliance monitoring, enterprise compliance" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
              AI Compliance Automation
            </h1>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Intelligent Compliance Revolution
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your compliance operations with our AI Compliance Automation platform. 
                Leverage advanced artificial intelligence to automate regulatory compliance, 
                manage risks, and ensure continuous compliance monitoring across all business 
                operations with unprecedented accuracy and efficiency.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Automation Capabilities</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Regulatory compliance automation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Intelligent risk management
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Continuous monitoring
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Compliance reporting
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Compliance Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      99.9% compliance accuracy
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Reduced compliance costs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Automated risk detection
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Regulatory peace of mind
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Automate Your Compliance
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Experience the future of intelligent compliance
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Automating
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AIComplianceAutomation;