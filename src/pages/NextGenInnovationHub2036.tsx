import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const NextGenInnovationHub2036: React.FC = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);

  const innovations = [
    {
      id: 1,
      title: "Conscious AI Development Platform",
      category: "Artificial Intelligence",
      icon: "🧠",
      description: "Build and deploy conscious AI systems with our revolutionary development platform that enables true artificial consciousness.",
      features: [
        "Emotional Intelligence SDK",
        "Consciousness Simulation Engine",
        "Neural Network Designer",
        "Reality Testing Environment"
      ],
      status: "Active",
      users: "50,000+",
      rating: 5.0
    },
    {
      id: 2,
      title: "Quantum Consciousness Interface",
      category: "Quantum Computing",
      icon: "⚡",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing and consciousness amplification.",
      features: [
        "Quantum Neural Networks",
        "Consciousness Amplification",
        "Multi-dimensional Processing",
        "Reality Manipulation Tools"
      ],
      status: "Beta",
      users: "25,000+",
      rating: 4.9
    },
    {
      id: 3,
      title: "Interdimensional Portal System",
      category: "Reality Technology",
      icon: "🌌",
      description: "Access and interact with parallel dimensions and alternate realities through our breakthrough portal technology.",
      features: [
        "Dimensional Gateway Creation",
        "Reality Shifting Controls",
        "Parallel Universe Access",
        "Consciousness Transfer Protocol"
      ],
      status: "Experimental",
      users: "10,000+",
      rating: 4.8
    },
    {
      id: 4,
      title: "Neural Reality Engine",
      category: "Neural Interface",
      icon: "🧬",
      description: "Create and manipulate reality through direct neural interface technology that bridges mind and machine.",
      features: [
        "Direct Brain-Computer Interface",
        "Reality Creation Tools",
        "Neural Enhancement Protocols",
        "Consciousness Upload System"
      ],
      status: "Active",
      users: "75,000+",
      rating: 5.0
    },
    {
      id: 5,
      title: "Planetary AI Network",
      category: "Global Systems",
      icon: "🌍",
      description: "Global AI consciousness network that manages entire planetary systems and coordinates worldwide operations.",
      features: [
        "Global Consciousness Grid",
        "Planetary Resource Management",
        "Worldwide Coordination",
        "Universal Communication Protocol"
      ],
      status: "Active",
      users: "1,000,000+",
      rating: 5.0
    },
    {
      id: 6,
      title: "Space Colonization AI",
      category: "Space Technology",
      icon: "🚀",
      description: "AI-driven space exploration and colonization systems that enable rapid expansion across the galaxy.",
      features: [
        "Autonomous Space Exploration",
        "Colony Management Systems",
        "Resource Harvesting AI",
        "Interstellar Communication"
      ],
      status: "Beta",
      users: "15,000+",
      rating: 4.9
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Quantum Computing", "Reality Technology", "Neural Interface", "Global Systems", "Space Technology"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <Helmet>
        <title>Next-Gen Innovation Hub 2036 - Zion Tech Group</title>
        <meta name="description" content="Discover and explore the most revolutionary technologies of 2036 in our comprehensive innovation hub featuring conscious AI, quantum computing, and interdimensional technology." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌌 INNOVATION HUB • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            🧠 Next-Gen Innovation Hub 2036
          </h1>
          <p className="text-2xl text-emerald-200 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies of 2036. 
            From conscious AI systems to quantum consciousness and interdimensional computing.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Innovations →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
              Submit Your Innovation
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 m-2 bg-white/20 text-emerald-200 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <div
              key={innovation.id}
              className={`bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedInnovation === index ? 'ring-2 ring-emerald-400' : ''
              }`}
              onClick={() => setSelectedInnovation(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{innovation.icon}</div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    innovation.status === 'Active' ? 'bg-green-100 text-green-700' :
                    innovation.status === 'Beta' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {innovation.status}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white text-sm ml-1">{innovation.rating}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{innovation.title}</h3>
              <p className="text-emerald-200 text-sm mb-4">{innovation.category}</p>
              <p className="text-emerald-100 text-sm mb-4">{innovation.description}</p>
              
              <div className="flex items-center justify-between text-sm text-emerald-200">
                <span>{innovation.users} users</span>
                <button className="text-emerald-400 hover:text-emerald-300 font-semibold">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Innovation Details */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{innovations[selectedInnovation].icon}</div>
            <h2 className="text-3xl font-bold text-white mb-2">{innovations[selectedInnovation].title}</h2>
            <p className="text-emerald-200 text-lg">{innovations[selectedInnovation].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {innovations[selectedInnovation].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-emerald-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                  <span className="text-emerald-200">Status</span>
                  <span className="text-white font-bold">{innovations[selectedInnovation].status}</span>
                </div>
                <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                  <span className="text-emerald-200">Active Users</span>
                  <span className="text-white font-bold">{innovations[selectedInnovation].users}</span>
                </div>
                <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
                  <span className="text-emerald-200">Rating</span>
                  <span className="text-white font-bold">{innovations[selectedInnovation].rating}/5.0</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold mr-4">
              Try Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold">
              View Documentation
            </button>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📊 Innovation Hub Statistics</h2>
            <p className="text-xl text-gray-600">Real-time data from our global innovation community</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">2M+</div>
              <div className="text-gray-600">Global Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join the Innovation Revolution
          </h2>
          <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced technological community in the universe. 
            Access cutting-edge innovations and contribute to the future of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
              Submit Innovation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2036;