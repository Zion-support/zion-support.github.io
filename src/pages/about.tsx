import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions." />
        <meta name="keywords" content="about zion tech group, technology company, AI solutions, cloud services, cybersecurity" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading technology solutions provider dedicated to helping organizations transform their 
              digital infrastructure and achieve their business goals through innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation in the digital age.
              </p>
              <p className="text-lg text-gray-600">
                We believe technology should be an enabler, not a barrier, to business success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                To be the leading technology partner for businesses seeking to transform 
                their operations through AI, cloud computing, and digital innovation.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where every business can leverage advanced technology 
                to achieve unprecedented success.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
                <p className="text-gray-600">
                  Advanced AI solutions that automate processes, enhance decision-making, 
                  and drive business intelligence.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-600">
                  Scalable cloud solutions that provide flexibility, security, 
                  and cost-effectiveness for modern businesses.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity</h3>
                <p className="text-gray-600">
                  Comprehensive security solutions that protect your digital assets 
                  and ensure compliance with industry standards.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our expertise can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get In Touch
              </a>
              <a href="/services" className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
