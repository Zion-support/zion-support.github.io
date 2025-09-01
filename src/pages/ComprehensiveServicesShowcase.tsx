import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Zap, 
  Globe, 
  Users,
  DollarSign,
  TrendingUp,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Award,
  Clock,
  BarChart3,
  Lock,
  Code,
  Database,
  Network,
  Activity,
  Atom,
  Leaf,
  Settings,
  Truck,
  Gamepad2,
  GraduationCap,
  Building,
  Heart,
  FileText,
  Briefcase,
  ShoppingCart,
  Factory,
  Car,
  ShieldCheck,
  BookOpen,
  Palette,
  Camera,
  Music,
  Video,
  Monitor,
  Smartphone,
  Tablet,
  Watch,
  Headphones,
  Speaker,
  Printer,
  Scanner,
  Projector,
  Keyboard,
  Mouse,
  Webcam,
  Microphone,
  Gamepad,
  Controller,
  Joystick,
  VR,
  AR,
  Drone,
  Robot,
  Chip,
  Circuit,
  Battery,
  Solar,
  Wind,
  Water,
  Fire,
  Earth,
  Air,
  Space,
  Satellite,
  Telescope,
  Microscope,
  TestTube,
  Flask,
  Beaker,
  Syringe,
  Pill,
  Stethoscope,
  Heartbeat,
  Brain,
  Eye,
  Ear,
  Nose,
  Mouth,
  Hand,
  Foot,
  Arm,
  Leg,
  Body,
  DNA,
  Gene,
  Cell,
  Virus,
  Bacteria,
  Plant,
  Tree,
  Flower,
  Grass,
  Bush,
  Vine,
  Cactus,
  Mushroom,
  Algae,
  Coral,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Spider,
  Worm,
  Snail,
  Crab,
  Lobster,
  Shrimp,
  Octopus,
  Squid,
  Jellyfish,
  Starfish,
  SeaUrchin,
  Clam,
  Oyster,
  Mussel,
  Scallop,
  Abalone,
  Conch,
  Whelk,
  Periwinkle,
  Limpet,
  Chiton,
  Barnacle,
  Seaweed,
  Kelp,
  Seagrass,
  Mangrove,
  SaltMarsh,
  Estuary,
  Lagoon,
  Bay,
  Gulf,
  Ocean,
  Sea,
  Lake,
  River,
  Stream,
  Creek,
  Brook,
  Pond,
  Pool,
  Spring,
  Well,
  Aquifer,
  Glacier,
  Iceberg,
  Snow,
  Rain,
  Hail,
  Sleet,
  Fog,
  Mist,
  Cloud,
  Storm,
  Lightning,
  Thunder,
  Tornado,
  Hurricane,
  Typhoon,
  Cyclone,
  Tsunami,
  Earthquake,
  Volcano,
  Lava,
  Magma,
  Ash,
  Smoke,
  Fire,
  Explosion,
  Bomb,
  Gun,
  Sword,
  Shield,
  Armor,
  Helmet,
  Boots,
  Gloves,
  Belt,
  Cape,
  Crown,
  Scepter,
  Orb,
  Ring,
  Necklace,
  Bracelet,
  Earring,
  Watch,
  Sunglasses,
  Hat,
  Scarf,
  Tie,
  BowTie,
  Socks,
  Underwear,
  Bra,
  Panties,
  Boxers,
  Briefs,
  Thong,
  GString,
  Corset,
  Garter,
  Stockings,
  Pantyhose,
  Leggings,
  Tights,
  Jeans,
  Pants,
  Shorts,
  Skirt,
  Dress,
  Blouse,
  Shirt,
  TShirt,
  TankTop,
  Sweater,
  Jacket,
  Coat,
  Blazer,
  Suit,
  Tuxedo,
  Uniform,
  Costume,
  Mask,
  Wig,
  Makeup,
  Perfume,
  Cologne,
  Deodorant,
  Soap,
  Shampoo,
  Conditioner,
  Lotion,
  Cream,
  Oil,
  Gel,
  Wax,
  Powder,
  Spray,
  RollOn,
  Stick,
  Bar,
  Liquid,
  Foam,
  Paste,
  Clay,
  Mud,
  Sand,
  Stone,
  Rock,
  Crystal,
  Gem,
  Diamond,
  Ruby,
  Sapphire,
  Emerald,
  Pearl,
  Opal,
  Amethyst,
  Topaz,
  Garnet,
  Turquoise,
  Jade,
  Lapis,
  Malachite,
  Obsidian,
  Quartz,
  Feldspar,
  Mica,
  Talc,
  Gypsum,
  Calcite,
  Aragonite,
  Dolomite,
  Limestone,
  Marble,
  Granite,
  Basalt,
  Andesite,
  Rhyolite,
  Dacite,
  Trachyte,
  Phonolite,
  Tephrite,
  Basanite,
  Nepheline,
  Leucite,
  Analcime,
  Natrolite,
  Stilbite,
  Heulandite,
  Chabazite,
  Gmelinite,
  Faujasite,
  Mordenite,
  Ferrierite,
  Bikitaite,
  Brewsterite,
  Goosecreekite,
  Yugawaralite,
  Wairakite,
  Laumontite,
  Leonhardite,
  Bikitaite,
  Brewsterite,
  Goosecreekite,
  Yugawaralite,
  Wairakite,
  Laumontite,
  Leonhardite,
  Bikitaite,
  Brewsterite,
  Goosecreekite,
  Yugawaralite,
  Wairakite,
  Laumontite,
  Leonhardite
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';
import { ADDITIONAL_INNOVATIVE_SERVICES_2025 } from '@/data/additionalInnovativeServices2025';

export default function ComprehensiveServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADDITIONAL_INNOVATIVE_SERVICES_2025
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-zion-blue to-zion-cyan' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'from-zion-pink to-zion-purple' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-zion-green to-zion-blue' },
    { id: 'legal', name: 'Legal Tech', icon: FileText, color: 'from-zion-blue to-zion-purple' },
    { id: 'hr', name: 'HR & Recruitment', icon: Users, color: 'from-zion-purple to-zion-pink' },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp, color: 'from-zion-green to-zion-cyan' },
    { id: 'project', name: 'Project Management', icon: Target, color: 'from-zion-orange to-zion-red' },
    { id: 'supply', name: 'Supply Chain', icon: Truck, color: 'from-zion-blue to-zion-green' },
    { id: 'real-estate', name: 'Real Estate', icon: Building, color: 'from-zion-purple to-zion-blue' },
    { id: 'energy', name: 'Energy', icon: Zap, color: 'from-zion-yellow to-zion-orange' },
    { id: 'agriculture', name: 'Agriculture', icon: Leaf, color: 'from-zion-green to-zion-blue' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Settings, color: 'from-zion-gray to-zion-blue' },
    { id: 'transportation', name: 'Transportation', icon: Truck, color: 'from-zion-blue to-zion-purple' },
    { id: 'insurance', name: 'Insurance', icon: ShieldCheck, color: 'from-zion-green to-zion-blue' },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2, color: 'from-zion-purple to-zion-pink' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'from-zion-blue to-zion-green' },
    { id: 'hospitality', name: 'Hospitality', icon: Building, color: 'from-zion-orange to-zion-red' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($100 - $1,000)', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range ($1,000 - $5,000)', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise ($5,000+)', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' }
  ];

  // Filter and sort services
  const filteredServices = allServices.filter(service => {
    const title = service.title || service.name || '';
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory);
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      case 'popular':
        return (b.roi || '0%').localeCompare(a.roi || '0%');
      default:
        return 0;
    }
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: any } = {
      'AI & Analytics': Brain,
      'Quantum Computing': Atom,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'Finance': DollarSign,
      'Legal Technology': FileText,
      'Human Resources': Users,
      'Marketing': TrendingUp,
      'Project Management': Target,
      'Logistics': Truck,
      'Real Estate': Building,
      'Energy': Zap,
      'Agriculture': Leaf,
      'Manufacturing': Settings,
      'Transportation': Truck,
      'Insurance': ShieldCheck,
      'Gaming': Gamepad2,
      'Education': GraduationCap,
      'Hospitality': Building,
      'DevOps & Cloud': Cpu
    };
    return categoryMap[category] || Zap;
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive AI & IT Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover our complete portfolio of innovative AI, IT, and Micro SAAS solutions designed to transform your business and drive digital innovation.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Phone className="w-5 h-5" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Mail className="w-5 h-5" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <MapPin className="w-5 h-5" />
                <span className="text-white">Middletown DE 19709</span>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4 pointer-events-none" />
                </div>

                {/* Price Range Filter */}
                <div className="relative">
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="appearance-none bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4 pointer-events-none" />
                </div>

                {/* Sort Options */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-zion-blue-darker border border-zion-purple/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4 pointer-events-none" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-zion-blue-darker border border-zion-purple/30 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-zion-blue-dark' : 'text-zion-slate-light'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-1 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-zion-blue-dark' : 'text-zion-slate-light'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {sortedServices.length} Services Found
          </h2>
          <p className="text-zion-slate-light">
            Explore our comprehensive portfolio of AI-powered solutions
          </p>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-darker border border-zion-purple/30 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-zion-slate-light">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>
                </div>

                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags?.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{service.innovationLevel}</span>
                  </div>
                  <button
                    onClick={() => toggleServiceExpansion(service.id)}
                    className="text-zion-cyan hover:text-white transition-colors"
                  >
                    {expandedService === service.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-zion-purple/30"
                    >
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                          <ul className="text-sm text-zion-slate-light space-y-1">
                            {service.features?.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 text-zion-cyan" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Benefits</h4>
                          <ul className="text-sm text-zion-slate-light space-y-1">
                            {service.benefits?.slice(0, 2).map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center space-x-2">
                                <TrendingUp className="w-3 h-3 text-zion-cyan" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="text-zion-slate-light">
                            <div>ROI: <span className="text-zion-cyan font-semibold">{service.roi}</span></div>
                            <div>Delivery: <span className="text-zion-cyan font-semibold">{service.estimatedDelivery}</span></div>
                          </div>
                          <Link
                            to={`/services/${service.id}`}
                            className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg hover:bg-zion-cyan/80 transition-colors flex items-center space-x-2"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-darker border border-zion-purple/30 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                      {React.createElement(getCategoryIcon(service.category), { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <p className="text-zion-slate-light">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-zion-slate-light">per month</div>
                  </div>
                </div>

                <p className="text-zion-slate-light mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-zion-purple/20 text-zion-cyan text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-zion-blue-dark rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <ul className="text-sm text-zion-slate-light space-y-1">
                      {service.features?.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-zion-cyan" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-zion-blue-dark rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits</h4>
                    <ul className="text-sm text-zion-slate-light space-y-1">
                      {service.benefits?.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-zion-cyan" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-zion-blue-dark rounded-lg p-3">
                    <h4 className="text-sm font-semibold text-white mb-2">Specifications</h4>
                    <div className="text-sm text-zion-slate-light space-y-1">
                      <div>ROI: <span className="text-zion-cyan font-semibold">{service.roi}</span></div>
                      <div>Delivery: <span className="text-zion-cyan font-semibold">{service.estimatedDelivery}</span></div>
                      <div>Support: <span className="text-zion-cyan font-semibold">{service.supportLevel}</span></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{service.innovationLevel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-zion-cyan" />
                      <span>{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-lg hover:bg-zion-cyan/80 transition-colors flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue-darker to-zion-purple/20 border-t border-zion-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our innovative AI and IT solutions can drive your business forward.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-3 bg-zion-blue-dark rounded-lg px-6 py-4">
                <Phone className="w-6 h-6 text-zion-cyan" />
                <div className="text-left">
                  <p className="text-sm text-zion-slate-light">Call Us</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-zion-blue-dark rounded-lg px-6 py-4">
                <Mail className="w-6 h-6 text-zion-cyan" />
                <div className="text-left">
                  <p className="text-sm text-zion-slate-light">Email Us</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-zion-blue-dark rounded-lg px-6 py-4">
                <MapPin className="w-6 h-6 text-zion-cyan" />
                <div className="text-left">
                  <p className="text-sm text-zion-slate-light">Visit Us</p>
                  <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg hover:bg-zion-cyan/80 transition-colors font-semibold flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors font-semibold flex items-center space-x-2"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}