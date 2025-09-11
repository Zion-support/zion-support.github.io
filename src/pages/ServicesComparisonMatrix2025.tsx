import React from 'react';
import { SEO } from '../components/SEO';

const ServicesComparisonMatrix2025: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services Comparison Matrix 2025 - Zion Tech Group"
        description="Compare our technology services side-by-side. Find the perfect solution for your business needs with our comprehensive comparison matrix."
        keywords="services comparison, technology comparison, service matrix, business solutions comparison, tech services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Services Comparison Matrix 2025
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare our technology services side-by-side to find the perfect solution for your business
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800 rounded-lg border border-slate-700">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-white font-semibold">Service</th>
                  <th className="text-center p-4 text-white font-semibold">AI Services</th>
                  <th className="text-center p-4 text-white font-semibold">Cloud Computing</th>
                  <th className="text-center p-4 text-white font-semibold">Cybersecurity</th>
                  <th className="text-center p-4 text-white font-semibold">IoT Solutions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="p-4 text-gray-300 font-medium">Starting Price</td>
                  <td className="p-4 text-center text-green-400">$5,000</td>
                  <td className="p-4 text-center text-green-400">$2,000</td>
                  <td className="p-4 text-center text-green-400">$3,000</td>
                  <td className="p-4 text-center text-green-400">$4,000</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-4 text-gray-300 font-medium">Implementation Time</td>
                  <td className="p-4 text-center text-blue-400">4-8 weeks</td>
                  <td className="p-4 text-center text-blue-400">2-4 weeks</td>
                  <td className="p-4 text-center text-blue-400">3-6 weeks</td>
                  <td className="p-4 text-center text-blue-400">6-12 weeks</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-4 text-gray-300 font-medium">Scalability</td>
                  <td className="p-4 text-center text-purple-400">High</td>
                  <td className="p-4 text-center text-purple-400">Very High</td>
                  <td className="p-4 text-center text-purple-400">High</td>
                  <td className="p-4 text-center text-purple-400">Medium</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-4 text-gray-300 font-medium">Support Level</td>
                  <td className="p-4 text-center text-cyan-400">24/7</td>
                  <td className="p-4 text-center text-cyan-400">24/7</td>
                  <td className="p-4 text-center text-cyan-400">24/7</td>
                  <td className="p-4 text-center text-cyan-400">Business Hours</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-4 text-gray-300 font-medium">Customization</td>
                  <td className="p-4 text-center text-yellow-400">Full</td>
                  <td className="p-4 text-center text-yellow-400">High</td>
                  <td className="p-4 text-center text-yellow-400">Full</td>
                  <td className="p-4 text-center text-yellow-400">Full</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300 font-medium">Best For</td>
                  <td className="p-4 text-center text-gray-300 text-sm">
                    Data analysis, automation, predictive modeling
                  </td>
                  <td className="p-4 text-center text-gray-300 text-sm">
                    Scalable applications, data storage, remote work
                  </td>
                  <td className="p-4 text-center text-gray-300 text-sm">
                    Data protection, compliance, threat detection
                  </td>
                  <td className="p-4 text-center text-gray-300 text-sm">
                    Smart devices, real-time monitoring, automation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">AI Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Cloud Computing</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Cloud Migration</li>
                <li>• Multi-Cloud Strategies</li>
                <li>• Cloud Security</li>
                <li>• Cost Optimization</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Security Assessments</li>
                <li>• Threat Monitoring</li>
                <li>• Incident Response</li>
                <li>• Compliance Management</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">IoT Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• IoT Device Management</li>
                <li>• Real-time Data Processing</li>
                <li>• Smart City Solutions</li>
                <li>• Industrial IoT</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Need Help Choosing?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Our experts can help you select the right combination of services for your specific business needs.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Expert Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesComparisonMatrix2025;