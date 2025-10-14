<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";

const SolutionsPagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>SolutionsPage - Zion Tech Group</title>
        <meta name="description" content="Professional SolutionsPage services by Zion Tech Group." />
        <meta name="keywords" content="SolutionsPage, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            SolutionsPage
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional SolutionsPage services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPagePage;
=======
import React from "react":;
import { Helmet } from "react-helmet-async":;
const SolutionsPage: React.FC = () =>{;
return (
    <div><Helmet><title>Solutions - Zion Tech Group</title><meta name="description" content="Comprehensive AI and IT solutions by Zion Tech Group." /></Helmet><div className="min-h-screen bg-gray-900 text-white py-16"><div className="container mx-auto px-4"><div className="max-w-6xl mx-auto"><h1 className="text-4xl font-bold text-center mb-8">Our Solutions</h1><p className="text-xl text-gray-300 text-center mb-12">Comprehensive AI and IT solutions tailored to your business needs.
            </p><section className="mb-16"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"><div className="bg-gray-800 p-6 rounded-lg"><div className="h-12 w-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center"><span className="text-white font-bold">AI</span></div><h3 className="text-xl font-semibold mb-4">AI Solutions</h3><p className="text-gray-300 mb-4">Advanced artificial intelligence solutions for automation and optimization.
                  </p><ul className="text-sm text-gray-400 space-y-1"><li>• Machine Learning</li><li>• Natural Language Processing</li><li>• Computer Vision</li></ul></div><div className="bg-gray-800 p-6 rounded-lg"><div className="h-12 w-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center"><span className="text-white font-bold">IT</span></div><h3 className="text-xl font-semibold mb-4">IT Infrastructure</h3><p className="text-gray-300 mb-4">Robust and scalable IT infrastructure solutions for modern businesses.
                  </p><ul className="text-sm text-gray-400 space-y-1"><li>• Cloud Migration</li><li>• Network Security</li><li>• Data Management</li></ul></div><div className="bg-gray-800 p-6 rounded-lg"><div className="h-12 w-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center"><span className="text-white font-bold">Q</span></div><h3 className="text-xl font-semibold mb-4">Quantum Computing</h3><p className="text-gray-300 mb-4">Next-generation quantum computing solutions for complex problem solving.
                  </p><ul className="text-sm text-gray-400 space-y-1"><li>• Quantum Algorithms</li><li>• Optimization</li><li>• Simulation</li></ul></div><div className="bg-gray-800 p-6 rounded-lg"><div className="h-12 w-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center"><span className="text-white font-bold">C</span></div><h3 className="text-xl font-semibold mb-4">Cybersecurity</h3><p className="text-gray-300 mb-4">Comprehensive security solutions to protect your digital assets.
                  </p><ul className="text-sm text-gray-400 space-y-1"><li>• Threat Detection</li><li>• Data Encryption</li><li>• Compliance Management</li></ul></div></div></section><section><h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2><p className="text-gray-300 mb-8">Contact us today to discuss your specific requirements.
              </p><div className="flex justify-center space-x-4"><a:;
href="/contact":;
className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Contact Us
                </a><a:;
href="/demo":;
className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Request Demo
                </a></div></section></div></div></div></div>)
}
;
export default SolutionsPage

  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
