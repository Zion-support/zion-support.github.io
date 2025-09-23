import React from 'react';
import { SEO } from '../components/SEO';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const InnovativeTechSolutions2025: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Quantum Computing",
      description: "Revolutionary quantum computing solutions powered by advanced AI algorithms for unprecedented computational capabilities.",
      features: ["Quantum AI Processing", "Real-time Optimization", "Secure Quantum Networks", "Scalable Infrastructure"],
      icon: "⚛️",
      category: "Quantum Technology"
    },
    {
      title: "Neural Network Automation",
      description: "Self-evolving neural networks that adapt and optimize themselves for maximum efficiency and performance.",
      features: ["Self-Learning Systems", "Adaptive Algorithms", "Performance Optimization", "Real-time Adaptation"],
      icon: "🧠",
      category: "AI & Machine Learning"
    },
    {
      title: "Blockchain 3.0 Solutions",
      description: "Next-generation blockchain technology with enhanced security, scalability, and interoperability features.",
      features: ["Enhanced Security", "Cross-Chain Interoperability", "Smart Contracts 2.0", "Decentralized Governance"],
      icon: "🔗",
      category: "Blockchain"
    },
    {
      title: "Metaverse Development Platform",
      description: "Comprehensive platform for building immersive metaverse experiences with advanced VR/AR capabilities.",
      features: ["3D World Building", "Avatar Systems", "Virtual Economy", "Social Integration"],
      icon: "🌐",
      category: "Metaverse"
    },
    {
      title: "Autonomous IoT Networks",
      description: "Self-managing IoT networks that optimize themselves for maximum efficiency and minimal human intervention.",
      features: ["Self-Healing Networks", "Predictive Maintenance", "Energy Optimization", "Smart Device Management"],
      icon: "🌐",
      category: "IoT & Automation"
    },
    {
      title: "Edge Computing AI",
      description: "AI processing at the edge for ultra-low latency applications and real-time decision making.",
      features: ["Ultra-Low Latency", "Real-time Processing", "Edge Intelligence", "Distributed Computing"],
      icon: "⚡",
      category: "Edge Computing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Tech Solutions 2025 - Zion Tech Group"
        description="Discover cutting-edge technology solutions for 2025 including AI-powered quantum computing, neural network automation, and next-generation blockchain solutions."
        keywords="innovative technology, AI solutions, quantum computing, blockchain 3.0, metaverse development, IoT automation, edge computing"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Innovative Tech Solutions 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pioneering the future of technology with groundbreaking solutions that redefine what's possible in the digital age.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Explore Solutions
            </Button>
            <Button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {solution.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already leveraging our innovative technology solutions to stay ahead of the competition.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Button>
            <Button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeTechSolutions2025;