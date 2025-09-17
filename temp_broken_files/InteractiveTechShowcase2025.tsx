import React, { useState } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [activeTab, setActiveTab] = useState('ai');
  const [activeTab, setActiveTab] = useState('ai');
  const [activeTab, setActiveTab] = useState('ai');
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techCategories = [
    {
      title: "AI & Consciousness",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      technologies: [
        {
          name: "AI Consciousness Revolution",
          description: "First AI systems achieving genuine consciousness and self-awareness",
          link: "/pages/RevolutionaryTechBreakthrough2025",
          features: ["Self-awareness", "Creative thinking", "Emotional intelligence"]
        },
        {
          name: "Neural Interface Technology",
          description: "Direct brain-computer communication enabling thought control",
          link: "/pages/RevolutionaryTechBreakthrough2025",
          features: ["Non-invasive BCI", "Thought control", "Memory enhancement"]
        }
      ]
    },
    {
      title: "Space Technology",
      icon: "🚀",
      color: "from-cyan-600 to-blue-600",
      technologies: [
        {
          name: "Interplanetary Travel",
          description: "Advanced propulsion systems enabling rapid travel between planets",
          link: "/pages/NextGenSpaceTech2026",
          features: ["Nuclear propulsion", "Mars transit", "Reusable spacecraft"]
        },
        {
          name: "Space Habitats",
          description: "Self-sustaining space colonies with advanced life support",
          link: "/pages/NextGenSpaceTech2026",
          features: ["Modular design", "Life support", "Artificial gravity"]
        }
      ]
    },
    {
      title: "Biotechnology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      technologies: [
        {
          name: "Gene Therapy Revolution",
          description: "Advanced gene editing curing diseases and enhancing capabilities",
          link: "/pages/AdvancedBiotechRevolution2026",
          features: ["CRISPR 3.0", "Disease cure", "Human enhancement"]
        },
        {
          name: "Regenerative Medicine",
          description: "Stem cell therapies regenerating organs and reversing aging",
          link: "/pages/AdvancedBiotechRevolution2026",
          features: ["Organ regeneration", "Anti-aging", "Tissue engineering"]
        }
      ]
  const [activeTab, setActiveTab] = useState('ai');
        }
      ]
  const [activeTab, setActiveTab] = useState('ai');cursor/fix-netlify-build-and-merge-to-main-a068
          </div>
        </div>

              Schedule Demo
            </button>
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white rounded-2xl p-8 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Interactive Technology Showcase 2025</h2>
        <p className="text-xl opacity-90">Experience our cutting-edge technologies with interactive demonstrations</p>
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">🌟 Interactive Technology Showcase 2025</h2>
        <p className="text-xl text-purple-200">Explore our revolutionary technologies with interactive features</p>cursor/fix-netlify-build-and-merge-to-main-a068
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">🌟 Interactive Technology Showcase 2025</h2>
        <p className="text-xl text-purple-200">Explore our revolutionary technologies with interactive features</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {techCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === index
                ? `bg-gradient-to-r ${category.color} text-white`
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.title}
            <span className="mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].bgGradient} backdrop-blur-sm rounded-2xl p-8 mb-12`}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
            <p className="text-xl mb-6 opacity-90">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            <ul className="space-y-3">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className={`w-64 h-64 bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].gradient} rounded-full flex items-center justify-center text-8xl opacity-80 animate-pulse`}>
              {technologies[activeTab as keyof typeof technologies].icon}
            </div>
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Explore Revolutionary Technologies
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with the most advanced technologies that are reshaping our world
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              {techCategories[activeTab as keyof typeof techCategories].title}
            </h3>
            <p className="text-lg opacity-90">
              Discover the latest breakthroughs in {techCategories[activeTab as keyof typeof techCategories].title.toLowerCase()}
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories[activeTab as keyof typeof techCategories].items.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${techCategories[activeTab as keyof typeof techCategories].color} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onMouseEnter={() => setHoveredItem(`${activeTab}-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="text-4xl mb-4 text-center">
                  {techCategories[activeTab as keyof typeof techCategories].icon}
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-center">{item.name}</h4>
                <p className="text-white/90 mb-4 text-center text-sm">{item.description}</p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-center"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Status */}
                <div className="text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Available Now' 
                      ? 'bg-green-500/30 text-green-200' 
                      : item.status === 'Beta Testing'
                      ? 'bg-yellow-500/30 text-yellow-200'
                      : 'bg-blue-500/30 text-blue-200'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Hover Effect */}
                {hoveredItem === `${activeTab}-${index}` && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      Learn More →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      {/* Interactive Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {interactiveFeatures.map((feature, index) => (
      {/* Technology Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {techCategories[activeTab].technologies.map((tech, index) => (cursor/fix-netlify-build-and-merge-to-main-a068
          <div
            key={index}
            className={`bg-gradient-to-br ${techCategories[activeTab].color}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <div className="text-3xl font-bold mb-2 text-cyan-400">{feature.metric}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>cursor/fix-netlify-build-and-merge-to-main-a068
      {/* Statistics Section */}
      <div className="mt-12 bg-gradient-to-r from-white/10 to-transparent rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white text-center mb-6">Revolutionary Impact</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">300%</div>
            <div className="text-purple-200">Productivity Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">99.9%</div>
            <div className="text-cyan-200">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-300 mb-2">95%</div>
            <div className="text-emerald-200">Disease Cure Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div className="text-yellow-200">Autonomous Operation</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg mb-6 opacity-90">Join thousands of innovators already using our revolutionary technology</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of pioneers who are already using these revolutionary technologies
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg">
              Start Your Journey
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg">
              Schedule Demo
            </button>
      {/* Statistics Section */}
      <div className="mt-12 bg-gradient-to-r from-white/10 to-transparent rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white text-center mb-6">Revolutionary Impact</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">300%</div>
            <div className="text-purple-200">Productivity Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">99.9%</div>
            <div className="text-cyan-200">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-300 mb-2">95%</div>
            <div className="text-emerald-200">Disease Cure Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
            <div className="text-yellow-200">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;