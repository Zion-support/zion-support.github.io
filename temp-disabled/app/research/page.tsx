import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Development | Zion Tech Group',
  description: 'Explore our cutting-edge research and development initiatives in AI, quantum computing, and emerging technologies.',
  keywords: 'research, development, AI, quantum computing, innovation, technology',
};

const researchMetrics = [
  {
    metric: 'Patents Filed',
    value: '25+',
    description: 'Intellectual property protecting our innovations'
  },
  {
    metric: 'Research Papers',
    value: '50+',
    description: 'Published in top-tier conferences and journals'
  },
  {
    metric: 'R&D Investment',
    value: '$10M+',
    description: 'Annual investment in research and development'
  },
  {
    metric: 'Innovation Labs',
    value: '5',
    description: 'Global research facilities and innovation centers'
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
            At Zion Tech Group, we're at the forefront of technological innovation, 
            pushing the boundaries of what's possible with AI, quantum computing, 
            and emerging technologies.
          </p>
        </div>

        {/* Research Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {researchMetrics.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{item.metric}</div>
              <div className="text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning algorithms, neural networks, and AI systems 
                that can learn, adapt, and make intelligent decisions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Deep Learning & Neural Networks</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Reinforcement Learning</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quantum Computing</h3>
              <p className="text-gray-600 mb-4">
                Exploring the potential of quantum mechanics to revolutionize 
                computation and solve complex problems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Quantum Algorithms</li>
                <li>• Quantum Machine Learning</li>
                <li>• Quantum Cryptography</li>
                <li>• Quantum Simulation</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Edge Computing</h3>
              <p className="text-gray-600 mb-4">
                Bringing computation closer to data sources for faster processing 
                and reduced latency.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• IoT Integration</li>
                <li>• Real-time Processing</li>
                <li>• Distributed Systems</li>
                <li>• Edge AI</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Blockchain Technology</h3>
              <p className="text-gray-600 mb-4">
                Developing secure, decentralized systems for various applications 
                beyond cryptocurrency.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Smart Contracts</li>
                <li>• Decentralized Applications</li>
                <li>• Consensus Mechanisms</li>
                <li>• Privacy & Security</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Protecting digital assets and systems from evolving threats 
                and vulnerabilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Threat Detection</li>
                <li>• Zero Trust Architecture</li>
                <li>• Security Analytics</li>
                <li>• Incident Response</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Technology</h3>
              <p className="text-gray-600 mb-4">
                Developing environmentally conscious solutions that minimize 
                energy consumption and carbon footprint.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Green Computing</li>
                <li>• Energy Efficiency</li>
                <li>• Carbon Neutral Solutions</li>
                <li>• Sustainable AI</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Research Team</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Are you passionate about pushing the boundaries of technology? 
            We're always looking for talented researchers and engineers to join our team.
          </p>
          <a 
            href="/careers" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block font-medium"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );

}