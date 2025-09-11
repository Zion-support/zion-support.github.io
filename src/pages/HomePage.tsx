import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group — AI, Micro SaaS, and IT Solutions</title>
        <meta name="description" content="Zion Tech Group delivers AI services, micro SaaS solutions, and enterprise IT services. Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Build Faster with AI, Micro SaaS, and IT Solutions</h1>
            <p className="text-xl text-gray-600 mb-12">We help companies ship faster and grow smarter with AI automation, productized micro SaaS, and secure, scalable infrastructure.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-left space-y-2">
                  <li>• AI-Powered Automation</li>
                  <li>• Micro SaaS Development</li>
                  <li>• Enterprise IT Solutions</li>
                  <li>• Cloud Infrastructure</li>
                  <li>• Digital Transformation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="text-left space-y-2">
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">Let's discuss how we can help accelerate your business growth with cutting-edge technology solutions.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Us
                </a>
                <a href="/services" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;