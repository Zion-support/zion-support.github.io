import React from 'react';

const NextGenTechShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12 leading-tight">
          🌟 Next-Gen Tech Showcase 2026
        </h1>

        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Explore the groundbreaking technologies that will define the future of innovation in 2026 and beyond.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Quantum Computing Advancements */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-blue-200">
            <div className="text-5xl mb-6 text-blue-600">⚡</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quantum Computing Advancements</h2>
            <p className="text-gray-700 mb-6">
              Witness the dawn of practical quantum applications, solving problems intractable for classical computers.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>1000+ Qubit Processors</li>
              <li>Quantum Machine Learning</li>
              <li>Drug Discovery & Material Science</li>
            </ul>
          </div>

          {/* Neural Interface Technologies */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-purple-200">
            <div className="text-5xl mb-6 text-purple-600">🧬</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Neural Interface Technologies</h2>
            <p className="text-gray-700 mb-6">
              Direct brain-computer interfaces moving from research to real-world assistive and enhancement applications.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Non-Invasive BCI Devices</li>
              <li>Thought-Controlled Prosthetics</li>
              <li>Cognitive Augmentation</li>
            </ul>
          </div>

          {/* Synthetic Intelligence & AGI */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-indigo-200">
            <div className="text-5xl mb-6 text-indigo-600">🤖</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Synthetic Intelligence & AGI</h2>
            <p className="text-gray-700 mb-6">
              Advanced AI systems demonstrating human-like reasoning, learning, and creative capabilities.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Self-Evolving AI Architectures</li>
              <li>Multi-Modal Reasoning</li>
              <li>Autonomous Problem Solving</li>
            </ul>
          </div>

          {/* Advanced Robotics & Automation */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-green-200">
            <div className="text-5xl mb-6 text-green-600">⚙️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Robotics & Automation</h2>
            <p className="text-gray-700 mb-6">
              Robots with enhanced dexterity, AI-driven perception, and collaborative capabilities transforming industries.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Human-Robot Collaboration</li>
              <li>Autonomous Logistics</li>
              <li>Precision Manufacturing</li>
            </ul>
          </div>

          {/* Sustainable Tech & Green AI */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-teal-200">
            <div className="text-5xl mb-6 text-teal-600">♻️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Tech & Green AI</h2>
            <p className="text-gray-700 mb-6">
              Innovations focused on reducing environmental impact through AI-optimized energy and resource management.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>AI for Renewable Energy</li>
              <li>Carbon Footprint Optimization</li>
              <li>Eco-Friendly Hardware</li>
            </ul>
          </div>

          {/* Space Technology & Exploration */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-orange-200">
            <div className="text-5xl mb-6 text-orange-600">🚀</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Space Technology & Exploration</h2>
            <p className="text-gray-700 mb-6">
              Breakthroughs in space travel, satellite technology, and extraterrestrial resource utilization.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Advanced Propulsion Systems</li>
              <li>AI-Driven Space Robotics</li>
              <li>Lunar & Martian Colonization Tech</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Dive into the Future?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Connect with our experts to understand how these next-gen technologies can be integrated into your vision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Our Innovation Team →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2026;