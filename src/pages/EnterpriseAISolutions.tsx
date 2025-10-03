import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnterpriseAISolutions: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions designed for large-scale enterprise transformation and digital innovation." />"
      </Helmet>
      
      <div className="min-h-screen bg-slate-950">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center mb-16">"
            <h1 className="text-5xl font-bold mb-6">Enterprise AI Solutions</h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Transform your enterprise with comprehensive AI solutions designed for scale, security, and innovation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">"
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">"
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Enterprise-Grade AI Transformation</h2>"
              <p className="text-gray-300 mb-6">"
                Our enterprise AI solutions are designed to handle the complexity and scale of large organizations, 
                delivering measurable ROI and competitive advantage through intelligent automation and decision-making.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">"
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Key Features</h3>"
                  <ul className="space-y-2 text-gray-300">"
                    <li>• Scalable AI infrastructure</li>
                    <li>• Enterprise-grade security</li>
                    <li>• Real-time decision engines</li>
                    <li>• Autonomous operations</li>
                    <li>• Predictive analytics</li>
                    <li>• Self-healing systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Benefits</h3>"
                  <ul className="space-y-2 text-gray-300">"
                    <li>• 70% cost reduction</li>
                    <li>• 99.9% uptime</li>
                    <li>• Real-time insights</li>
                    <li>• Automated workflows</li>
                    <li>• Enhanced security</li>
                    <li>• Competitive advantage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseAISolutions;