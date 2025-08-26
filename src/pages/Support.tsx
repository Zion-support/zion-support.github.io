import React from 'react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  const supportChannels = [
    {
      title: "Technical Support",
      description: "Get help with technical issues and system problems",
      contact: "support@ziontechgroup.com",
      response: "Within 4 hours"
    },
    {
      title: "Sales & Billing",
      description: "Questions about our services, pricing, and billing",
      contact: "sales@ziontechgroup.com",
      response: "Within 2 hours"
    },
    {
      title: "General Inquiries",
      description: "General questions about Zion Tech Group",
      contact: "info@ziontechgroup.com",
      response: "Within 24 hours"
    },
    {
      title: "Emergency Support",
      description: "Critical system issues requiring immediate attention",
      contact: "+1 (302) 464-0950",
      response: "Immediate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Support
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert technical support to help you resolve issues quickly 
              and get back to business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Contact:</span>
                    <span className="text-blue-400 font-mono">{channel.contact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-green-400">{channel.response}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-gray-300 mb-6">
                For urgent technical issues, call our emergency support line 
                or submit a support ticket for priority assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                  Emergency Support
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Submit Ticket
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;