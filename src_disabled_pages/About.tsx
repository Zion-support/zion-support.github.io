import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        About Zion Tech Group
      </h2>
      <div className="space-y-6 text-blue-200">
        <p className="text-lg">
          Zion Tech Group is a leading provider of innovative IT solutions and AI services, 
          dedicated to helping businesses transform and thrive in the digital age.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-white">Our Mission</h3>
            <p>
              To empower businesses with cutting-edge technology solutions that drive 
              growth, efficiency, and innovation.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-white">Our Vision</h3>
            <p>
              To be the premier technology partner for businesses seeking to leverage 
              AI and modern IT infrastructure for competitive advantage.
            </p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h3 className="text-xl font-semibold mb-3 text-white">Why Choose Us?</h3>
          <ul className="space-y-2">
            <li>• Expert team with years of industry experience</li>
            <li>• Cutting-edge AI and machine learning solutions</li>
            <li>• Comprehensive IT support and cybersecurity</li>
            <li>• Scalable micro SAAS platforms</li>
            <li>• 24/7 customer support and monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;