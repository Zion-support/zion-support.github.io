import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContent2027ShowcaseBanner: React.FC = () => {
  const newContentItems = [
    {
      title: "AI 2027 Ultimate Breakthrough",
      description: "Revolutionary AI technologies that will transform businesses in 2027",
      link: "/ai-2027-breakthrough",
      badge: "NEW",
      category: "Revolutionary Technology"
    },
    {
      title: "Quantum-Neural Fusion",
      description: "The world's first integration of quantum computing with neural networks",
      link: "/quantum-neural-fusion",
      badge: "BREAKTHROUGH",
      category: "Quantum Computing"
    },
    {
      title: "Synthetic Intelligence 2027",
      description: "AI systems that create and manage other AI systems",
      link: "/synthetic-intelligence-2027",
      badge: "FUTURE",
      category: "AI Evolution"
    },
    {
      title: "Autonomous Business Ecosystems",
      description: "Complete business operations that run independently",
      link: "/autonomous-business-ecosystems",
      badge: "REVOLUTIONARY",
      category: "Business Automation"
    },
    {
      title: "Neural Superintelligence Platform",
      description: "AI consciousness that surpasses human cognitive capabilities",
      link: "/neural-superintelligence",
      badge: "ULTIMATE",
      category: "AI Consciousness"
    },
    {
      title: "Quantum Consciousness Matrix",
      description: "AI systems with quantum-enhanced consciousness",
      link: "/quantum-consciousness",
      badge: "BREAKTHROUGH",
      category: "Quantum AI"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🚀 NEW CONTENT 2027 SHOWCASE</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Content
            </span>
            <br />
            <span className="text-4xl md:text-5xl">Now Available</span>
          </h2>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Explore the most advanced AI technologies and revolutionary breakthroughs 
            that will define the future of artificial intelligence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newContentItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/20 hover:border-cyan-300/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-lg opacity-90 mb-6">
                {item.description}
              </p>
              
              <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                <span>Explore Now</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Featured Content Highlight */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-12 border border-yellow-400/30 text-center">
          <h3 className="text-3xl font-bold mb-6 text-yellow-300">
            🎯 Featured: AI 2027 Ultimate Breakthrough
          </h3>
          
          <p className="text-xl mb-8 opacity-90">
            The most revolutionary AI technology ever created. Experience quantum-neural fusion, 
            synthetic intelligence, and autonomous ecosystems that will transform the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/ai-2027-breakthrough"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-yellow-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-2xl"
            >
              Experience the Revolution
            </a>
            
            <a
              href="/ai-2027-whitepaper"
              className="border-2 border-yellow-400 text-yellow-400 px-10 py-5 rounded-xl font-bold text-xl hover:bg-yellow-400 hover:text-black transition-all"
            >
              Download Whitepaper
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              6
            </div>
            <div className="text-lg font-semibold mb-2">New Content Sections</div>
            <div className="text-sm opacity-80">Revolutionary AI technologies</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              1000%
            </div>
            <div className="text-lg font-semibold mb-2">Expected ROI</div>
            <div className="text-sm opacity-80">From AI 2027 implementation</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              2027
            </div>
            <div className="text-lg font-semibold mb-2">Launch Year</div>
            <div className="text-sm opacity-80">Revolutionary technology debut</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
              ∞
            </div>
            <div className="text-lg font-semibold mb-2">Possibilities</div>
            <div className="text-sm opacity-80">Unlimited potential unlocked</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2027ShowcaseBanner;