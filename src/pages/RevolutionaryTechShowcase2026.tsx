  const [selectedTech, setSelectedTech] = useState('ai');
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECH • 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2026
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Witness the future of technology. Our revolutionary innovations are reshaping reality, 
            transcending limitations, and creating possibilities that were once thought impossible.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Explore Technologies →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
        {/* Technology Selector */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Select Technology</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(tech.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedTech === tech.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </button>
            ))}
          </div>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-semibold text-lg">
              Contact Our Team
