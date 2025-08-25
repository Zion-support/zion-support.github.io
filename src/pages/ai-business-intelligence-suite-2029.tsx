import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const AIBusinessIntelligenceSuite2029: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Suite 2029 - Zion Tech Group</title>
        <meta name="description" content="Future-ready AI business intelligence suite for 2029 providing comprehensive analytics, predictive insights, and strategic decision-making for enterprises." />
        <meta name="keywords" content="AI business intelligence suite, 2029 BI, comprehensive analytics, predictive insights, strategic decision making, enterprise BI suite" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
              AI Business Intelligence Suite 2029
            </h1>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Future-Ready Intelligence Suite
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the future of business intelligence with our AI Business Intelligence Suite 2029. 
                This comprehensive platform provides advanced analytics, predictive insights, and strategic 
                decision-making capabilities designed to keep your enterprise ahead of the curve in 2029 and beyond.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Suite Capabilities</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      Comprehensive analytics platform
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      Advanced predictive modeling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      Real-time data processing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      Strategic planning tools
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Enterprise Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Future-ready insights
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Competitive advantage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Operational excellence
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Strategic growth
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Experience Future Intelligence
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Lead your enterprise into 2029 with AI-powered insights
              </p>
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Suite Access
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AIBusinessIntelligenceSuite2029;