export default function ComprehensiveServicesLanding2030(...args[]):  {

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [priceRange, setPriceRange] = useState<any>([0, 50000]);
  const [aiScoreRange, setAiScoreRange] = useState<any>([80, 100]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Filter services based on category, search, price, and AI score
  
    
                         service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) ||;
                         service.tags.some (tag => tag.toLowerCase () .includes (searchTerm.toLowerCase () ) ) ;
    
    return matchesCategory && matchesSearch && matchesPrice && matchesAiScore}) ;

  // Sort services
  
<<<<<<< HEAD
    switch (sortBy) {;
      case 'rating':;
        return b.rating - a.rating;
=======
    switch (sortBy) {;'      case 'rating':;
        return b.rating - a.rating;'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      case 'price':;
        return a.price - b.price;
      case 'aiScore':;
        return b.aiScore - a.aiScore;
      default:;
        return 0}
  }) ;

  const getCategoryIcon = (category: string)  => {

    const icons: { [key: string]: React.ReactNode } = {
'"
      'AI & Business Intelligence': <Brain className="w-6 h-6"  />,"
      'AI & Healthcare': <Heart className="w-6 h-6"  />,"
      'AI & FinTech': <TrendingUp className="w-6 h-6"  />,"
      'IT Infrastructure': <Database className="w-6 h-6"  />,"
      'Emerging Technology': <Rocket className="w-6 h-6"  />,"
      'AI & Research': <Search className="w-6 h-6"  />,"
      'AI & Metaverse': <Globe className="w-6 h-6"  />,"
      'AI & Space Tech': <Rocket className="w-6 h-6"  />,"
      'AI & Development': <Zap className="w-6 h-6"  />,"
      'AI & Education': <Users className="w-6 h-6"  />,"
      'AI & Entertainment': <Star className="w-6 h-6"  />,"
      'Cybersecurity': <Shield className="w-6 h-6"  />,"
      'Cloud & DevOps': <Cloud className="w-6 h-6"  />,;'"
      'Quantum Computing': <Zap className="w-6 h-6"  />,;'"
      'IoT & Edge Computing': <Database className="w-6 h-6"  />,;'"
      'Blockchain & Web3': <Lock className="w-6 h-6"  />,;'"
      'Digital Twin': <Globe className="w-6 h-6"  />,;'"
      'Space Technology': <Rocket className="w-6 h-6"  />,;'"
      'Sustainable Technology': <Heart className="w-6 h-6"  />};"
    return icons[category] || <Rocket className="w-6 h-6"  />};

  
      'Quantum Computing': 'from-indigo-500 to-purple-500',;
      'IoT & Edge Computing': 'from-teal-500 to-cyan-500',;
      'Blockchain & Web3': 'from-yellow-500 to-orange-500',;
      'Digital Twin': 'from-blue-500 to-indigo-500',;
      'Space Technology': 'from-purple-500 to-pink-500',;
      'Sustainable Technology': 'from-green-500 to-teal-500'};
    return colors[category] || 'from-gray-500 to-slate-500'};

<<<<<<< HEAD
  
    setActiveCategory('all');
    setSearchTerm('');
    setSortBy('rating');
=======
  const resetFilters = () => {;'
    setActiveCategory('all');'
    setSearchTerm('');'    setSortBy('rating');
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    setPriceRange([0, 50000]);
    setAiScoreRange([80, 100])};

            </motion.div>;
          </motion.div>;) };
      </div>;
    </>
  )}
'"