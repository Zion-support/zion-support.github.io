import React from 'react';

const AIInnovationGuide2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🤖 INNOVATION GUIDE • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Innovation Guide 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Master the art of AI innovation with our comprehensive guide covering the latest trends, 
            technologies, and strategies for implementing artificial intelligence in your organization.
          </p>
        </div>

        {/* Innovation Pillars */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Generative AI</h3>
            <p className="text-purple-100 text-sm text-center">
              Create content, code, and creative works with advanced generative AI models
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-center">Autonomous Agents</h3>
            <p className="text-cyan-100 text-sm text-center">
              Deploy intelligent agents that work independently to achieve complex goals
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Edge AI</h3>
            <p className="text-emerald-100 text-sm text-center">
              Run AI models locally on devices for real-time processing and privacy
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🔄</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Automation</h3>
            <p className="text-orange-100 text-sm text-center">
              Automate complex workflows and business processes with intelligent systems
            </p>
          </div>
        </div>

        {/* Implementation Framework */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">AI Implementation Framework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold mb-3">Assess & Plan</h3>
              <p className="text-sm opacity-90">Evaluate your current state and create a comprehensive AI strategy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold mb-3">Data Preparation</h3>
              <p className="text-sm opacity-90">Clean, organize, and prepare your data for AI model training</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold mb-3">Model Development</h3>
              <p className="text-sm opacity-90">Build, train, and optimize AI models for your specific use cases</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold mb-3">Deploy & Scale</h3>
              <p className="text-sm opacity-90">Deploy models to production and scale across your organization</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">AI Technology Stack 2025</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Machine Learning</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                  <span>TensorFlow 2.0 & PyTorch</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                  <span>Scikit-learn & XGBoost</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                  <span>AutoML Platforms</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-4"></span>
                  <span>MLOps Tools</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Deep Learning</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></span>
                  <span>Transformer Models</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></span>
                  <span>Large Language Models</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></span>
                  <span>Computer Vision</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></span>
                  <span>Reinforcement Learning</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Infrastructure</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></span>
                  <span>Cloud Computing</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></span>
                  <span>GPU/TPU Clusters</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></span>
                  <span>Edge Computing</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full mr-4"></span>
                  <span>Container Orchestration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">AI Innovation Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3">Healthcare</h3>
              <p className="text-sm opacity-90 mb-4">Medical diagnosis, drug discovery, personalized treatment plans</p>
              <ul className="text-xs space-y-1">
                <li>• Medical image analysis</li>
                <li>• Predictive diagnostics</li>
                <li>• Drug development</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-sm opacity-90 mb-4">Predictive maintenance, quality control, supply chain optimization</p>
              <ul className="text-xs space-y-1">
                <li>• Predictive maintenance</li>
                <li>• Quality assurance</li>
                <li>• Supply chain optimization</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Finance</h3>
              <p className="text-sm opacity-90 mb-4">Fraud detection, algorithmic trading, risk assessment</p>
              <ul className="text-xs space-y-1">
                <li>• Fraud detection</li>
                <li>• Algorithmic trading</li>
                <li>• Credit scoring</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-3">Retail</h3>
              <p className="text-sm opacity-90 mb-4">Personalized recommendations, inventory management, customer service</p>
              <ul className="text-xs space-y-1">
                <li>• Recommendation engines</li>
                <li>• Inventory optimization</li>
                <li>• Chatbots & virtual assistants</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3">Transportation</h3>
              <p className="text-sm opacity-90 mb-4">Autonomous vehicles, route optimization, traffic management</p>
              <ul className="text-xs space-y-1">
                <li>• Autonomous vehicles</li>
                <li>• Route optimization</li>
                <li>• Traffic prediction</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-sm opacity-90 mb-4">Personalized learning, intelligent tutoring, content generation</p>
              <ul className="text-xs space-y-1">
                <li>• Personalized learning</li>
                <li>• Intelligent tutoring</li>
                <li>• Content generation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your AI Innovation Journey</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Transform your organization with cutting-edge AI technologies and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get AI Consultation →
            </a>
            <a href="/pages/AdvancedAITransformation2025" className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Explore AI Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationGuide2025;