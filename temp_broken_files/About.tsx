import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300">
            Pioneering the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Zion Tech Group, we are dedicated to revolutionizing the technology landscape through 
              cutting-edge innovations in artificial intelligence, quantum computing, and next-generation 
              interfaces. Our mission is to bridge the gap between today's possibilities and tomorrow's realities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe in creating technology that not only solves today's problems but anticipates 
              and shapes the challenges of the future.
            </p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Focus Areas</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Artificial Intelligence & Machine Learning
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Quantum Computing & Cryptography
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Neural Interface Technologies
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Advanced Robotics & Automation
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Vision</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            To be the leading force in technological innovation, creating solutions that enhance human 
            capabilities and open new frontiers in science and technology. We envision a world where 
            technology seamlessly integrates with human potential to solve the greatest challenges of our time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;