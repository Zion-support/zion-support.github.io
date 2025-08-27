import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Zion Tech Group
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          We are a forward-thinking technology company dedicated to transforming businesses through innovative AI, cloud, and cybersecurity solutions.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-8">
            To democratize cutting-edge technology and make AI, cloud, and cybersecurity solutions accessible to businesses of all sizes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="text-gray-300 space-y-2">
                <p>📞 +1 (302) 464-0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Website</h3>
              <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 text-lg">
                https://ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
