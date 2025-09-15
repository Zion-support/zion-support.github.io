
const NextGenTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const techCategories = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      technologies: [
        { name: 'Machine Learning', description: 'Advanced algorithms that learn from data', status: 'Active' },
        { name: 'Natural Language Processing', description: 'AI that understands and generates human language', status: 'Active' },
        { name: 'Computer Vision', description: 'AI that can see and interpret visual information', status: 'Active' },
        { name: 'Robotics', description: 'Intelligent machines that can perform tasks', status: 'In Development' }
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      technologies: [
        { name: 'Quantum Algorithms', description: 'Algorithms that leverage quantum mechanics', status: 'Research' },
        { name: 'Quantum Cryptography', description: 'Unbreakable encryption using quantum principles', status: 'Active' },
        { name: 'Quantum Simulation', description: 'Simulating complex quantum systems', status: 'In Development' },
        { name: 'Quantum Machine Learning', description: 'ML algorithms running on quantum computers', status: 'Research' }
      ]
    },
    blockchain: {
      title: 'Blockchain & Web3',
      icon: '⛓️',
      color: 'from-yellow-600 to-orange-600',
      technologies: [
        { name: 'DeFi Protocols', description: 'Decentralized financial applications', status: 'Active' },
        { name: 'NFT Marketplaces', description: 'Digital asset trading platforms', status: 'Active' },
        { name: 'Smart Contracts', description: 'Self-executing contracts on blockchain', status: 'Active' },
        { name: 'DAO Governance', description: 'Decentralized autonomous organizations', status: 'In Development' }
      ]
    },
    biotech: {
      title: 'Biotechnology',
      icon: '🧬',
      color: 'from-green-600 to-emerald-600',
      technologies: [
        { name: 'Gene Editing', description: 'Precise modification of genetic material', status: 'Active' },
        { name: 'Synthetic Biology', description: 'Engineering biological systems', status: 'In Development' },
        { name: 'Personalized Medicine', description: 'Tailored treatments based on genetics', status: 'Active' },
        { name: 'Bioinformatics', description: 'Computational analysis of biological data', status: 'Active' }
      ]
    }
  };

  return (
        </div>

        {/* Technology Categories */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Technology Categories</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Explore the cutting-edge technologies that are transforming industries 
                and creating new possibilities for the future
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(techCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${category.color} text-white`
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>

            {/* Active Category Content */}
            <div className="max-w-6xl mx-auto">
              <div className={`bg-gradient-to-br ${techCategories[activeTab as keyof typeof techCategories].color} rounded-2xl p-8 text-white`}>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{techCategories[activeTab as keyof typeof techCategories].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{techCategories[activeTab as keyof typeof techCategories].title}</h3>
                  <p className="text-xl opacity-90">
                    Explore the latest developments in {techCategories[activeTab as keyof typeof techCategories].title.toLowerCase()}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {techCategories[activeTab as keyof typeof techCategories].technologies.map((tech, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold">{tech.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          tech.status === 'Active' ? 'bg-green-500' :
                          tech.status === 'In Development' ? 'bg-yellow-500' :
                          'bg-blue-500'
                        }`}>
                          {tech.status}
                        </span>
                      </div>
                      <p className="text-white/90">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
  );
};

export default NextGenTechShowcase2026;