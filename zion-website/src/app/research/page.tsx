
import React from 'react';

const researchAreas = [
  {
    title: 'Artificial Intelligence',
    description: 'Advancing the frontiers of AI through cutting-edge research',
    focus: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Natural Language Processing']
  },
  {
    title: 'Quantum Computing',
    description: 'Pioneering quantum algorithms and quantum machine learning',
    focus: ['Quantum Algorithms', 'Quantum Machine Learning', 'Quantum Cryptography', 'Quantum Simulation']
  },
  {
    title: 'Autonomous Systems',
    description: 'Developing self-managing and adaptive systems',
    focus: ['Autonomous Agents', 'Self-Healing Systems', 'Adaptive Learning', 'Distributed Intelligence']
  },
  {
    title: 'Human-AI Collaboration',
    description: 'Enhancing human capabilities through AI partnership',
    focus: ['Augmented Intelligence', 'Human-AI Interfaces', 'Collaborative AI', 'Ethical AI']
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pushing the boundaries of technology through innovative research and development initiatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-6">{area.description}</p>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Focus:</h4>
                <ul className="space-y-2">
                  {area.focus.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="text-blue-600 mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Research Team</h2>
          <p className="text-lg text-gray-600 mb-6">
            We're always looking for talented researchers and engineers to join our mission of advancing technology.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View Open Positions
          </button>

        </div>
      </div>
    </div>
  );

}

