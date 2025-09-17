import React from 'react';
import { Helmet } from 'react-helmet-async';
const Home: React.FC = () => {
  const { addNotification } = useNotifications();
  useEffect(() => {
    // Welcome notification
    addNotification({
      type: 'info',
      title: 'Welcome to Zion Tech Group 2026!',
      message: 'Explore our revolutionary AI, quantum computing, and cybersecurity solutions.',
      duration: 5000
    });
  }, [addNotification]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Home_backup | Zion Tech Group</title>
        <meta name="description" content="Home_backup - Revolutionary technology solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 REVOLUTIONARY TECHNOLOGY • 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Leading the revolution in AI, quantum computing, neural interfaces, and advanced biotechnology. 
                Discover the future of technology today.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Explore Solutions →
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300 mb-4">
              Advanced artificial intelligence solutions for modern businesses. 
              From machine learning to autonomous systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Solutions</h3>
              <p className="text-blue-100 mb-6 text-center">
                Advanced artificial intelligence solutions for enterprise and innovation
              </p>
              <div className="text-center">
                <a href="/pages/AdvancedAITransformation2026" className="text-blue-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Revolutionary quantum computing solutions for complex problem solving
              </p>
              <div className="text-center">
                <a href="/pages/QuantumComputingRevolution2026" className="text-cyan-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Direct brain-computer interface technology for seamless interaction
              </p>
              <div className="text-center">
                <a href="/pages/NeuralInterfaceRevolution2026" className="text-emerald-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
              <p className="text-purple-100 mb-6 text-center">
                Advanced biotechnology solutions for healthcare and human enhancement
              </p>
              <div className="text-center">
                <a href="/pages/AdvancedBiotechAI2026" className="text-purple-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
              <p className="text-orange-100 mb-6 text-center">
                Next-generation space technology for exploration and innovation
              </p>
              <div className="text-center">
                <a href="/pages/NextGenSpaceTech2026" className="text-orange-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Tech Insights</h3>
              <p className="text-indigo-100 mb-6 text-center">
                Stay updated with the latest technology trends and insights
              </p>
              <div className="text-center">
                <a href="/pages/RevolutionaryTechBlog2026" className="text-indigo-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive cybersecurity solutions to protect your business 
              from evolving threats in the digital landscape.
            </p>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Technology Showcase 2026
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of technology with our comprehensive collection of 
              cutting-edge innovations, AI breakthroughs, and quantum computing advancements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">AI Innovation Hub</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Discover the latest AI technologies and their real-world applications.
                </p>
                <Link 
                  to="/pages/AIInnovationHub2026" 
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Explore Hub
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Tech Trends 2026</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Stay ahead with the most important technology trends of 2026.
                </p>
                <Link 
                  to="/pages/TechTrends2026" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  View Trends
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Tech Insights</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Deep dive into comprehensive technology insights and analysis.
                </p>
                <Link 
                  to="/pages/ComprehensiveTechInsights2026" 
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Get Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Home;
