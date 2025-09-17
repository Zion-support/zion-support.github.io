const RevolutionaryTechSolutions2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-consciousness');
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const currentSolution = revolutionarySolutions[activeTab as keyof typeof revolutionarySolutions];
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-8"
          >
            <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Revolutionary Solutions 2026</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future of{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Experience the most revolutionary technology solutions that are reshaping reality itself. 
            From AI consciousness to space colonization, discover the cutting-edge innovations that will 
            define the next decade of human progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800/50 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </motion.div>
      {/* Solutions Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive suite of cutting-edge technologies designed to transform 
            your business and accelerate innovation.
          </p>
        </motion.div>
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {tab.title}
              </button>
            );
          })}
        </div>
