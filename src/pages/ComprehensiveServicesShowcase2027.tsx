import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  BarChart3, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  FileText, 
  Heart, 
  Settings, 
  HelpCircle, 
  BookOpen, 
  Briefcase, 
  Award, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Server, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Bluetooth, 
  Satellite, 
  Atom, 
  Dna, 
  Microscope, 
  Flask, 
  TestTube, 
  Syringe, 
  Stethoscope, 
  HeartPulse, 
  BrainCircuit, 
  Eye, 
  Ear, 
  Hand, 
  Foot, 
  Bone, 
  Tooth, 
  Pill, 
  Bandage, 
  Thermometer, 
  Scale, 
  Calculator, 
  ChartBar, 
  PieChart, 
  LineChart, 
  Activity, 
  TrendingDown, 
  Minus, 
  Plus, 
  Equal, 
  Divide, 
  Percent, 
  DollarSign, 
  Euro, 
  Pound, 
  Yen, 
  Bitcoin, 
  Ethereum, 
  CreditCard, 
  Wallet, 
  Banknote, 
  Coins, 
  PiggyBank, 
  Safe, 
  Vault, 
  LockKeyhole, 
  Key, 
  Fingerprint, 
  QrCode, 
  Barcode, 
  Scan, 
  Camera, 
  VideoOff, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  ChevronRight,
  Star,
  Clock,
  DollarSign as DollarIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Lock as LockIcon,
  Code as CodeIcon,
  Rocket as RocketIcon,
  BarChart3 as BarChartIcon,
  TrendingUp as TrendingUpIcon,
  MessageCircle as MessageIcon,
  Video as VideoIcon,
  FileText as FileTextIcon,
  Heart as HeartIcon,
  Settings as SettingsIcon,
  HelpCircle as HelpIcon,
  BookOpen as BookIcon,
  Briefcase as BriefcaseIcon,
  Award as AwardIcon,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  ShieldCheck as ShieldCheckIcon,
  Server as ServerIcon,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon,
  Satellite as SatelliteIcon,
  Atom as AtomIcon,
  Dna as DnaIcon,
  Microscope as MicroscopeIcon,
  Flask as FlaskIcon,
  TestTube as TestTubeIcon,
  Syringe as SyringeIcon,
  Stethoscope as StethoscopeIcon,
  HeartPulse as HeartPulseIcon,
  BrainCircuit as BrainCircuitIcon,
  Eye as EyeIcon,
  Ear as EarIcon,
  Hand as HandIcon,
  Foot as FootIcon,
  Bone as BoneIcon,
  Tooth as ToothIcon,
  Pill as PillIcon,
  Bandage as BandageIcon,
  Thermometer as ThermometerIcon,
  Scale as ScaleIcon,
  Calculator as CalculatorIcon,
  ChartBar as ChartBarIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  TrendingDown as TrendingDownIcon,
  Minus as MinusIcon,
  Plus as PlusIcon,
  Equal as EqualIcon,
  Divide as DivideIcon,
  Percent as PercentIcon,
  DollarSign as DollarSignIcon,
  Euro as EuroIcon,
  Pound as PoundIcon,
  Yen as YenIcon,
  Bitcoin as BitcoinIcon,
  Ethereum as EthereumIcon,
  CreditCard as CreditCardIcon,
  Wallet as WalletIcon,
  Banknote as BanknoteIcon,
  Coins as CoinsIcon,
  PiggyBank as PiggyBankIcon,
  Safe as SafeIcon,
  Vault as VaultIcon,
  LockKeyhole as LockKeyholeIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  QrCode as QrCodeIcon,
  Barcode as BarcodeIcon,
  Scan as ScanIcon,
  Camera as CameraIcon,
  VideoOff as VideoOffIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon
} from 'lucide-react';
import { ALL_INNOVATIVE_SERVICES_2027 } from '../data/innovativeMicroSAASServices2027';
import { ALL_IT_SERVICES_2027 } from '../data/comprehensiveITServices2027';

const ComprehensiveServicesShowcase2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('innovation');

  // Combine all services
  const allServices = [...ALL_INNOVATIVE_SERVICES_2027, ...ALL_IT_SERVICES_2027];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          return b.innovationLevel === 'Revolutionary' ? 1 : -1;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        default:
          return 0;
      }
    });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Get icon for service category
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & DevOps': <Brain className="w-6 h-6" />,
      'Quantum Computing': <Atom className="w-6 h-6" />,
      'Business Automation': <Settings className="w-6 h-6" />,
      'IT Management': <Server className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Compliance': <ShieldCheck className="w-6 h-6" />,
      'Marketing': <TrendingUp className="w-6 h-6" />,
      'Accessibility': <Eye className="w-6 h-6" />,
      'Network Infrastructure': <Network className="w-6 h-6" />,
      'Edge Computing': <Cpu className="w-6 h-6" />,
      'Blockchain': <Database className="w-6 h-6" />,
      'Healthcare Technology': <HeartPulse className="w-6 h-6" />,
      'Legal Technology': <BookOpen className="w-6 h-6" />,
      'Marketing Technology': <BarChart3 className="w-6 h-6" />,
      'Space Technology': <Satellite className="w-6 h-6" />
    };
    return iconMap[category] || <Globe className="w-6 h-6" />;
  };

  // Get innovation level color
  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':
        return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
      case 'Breakthrough':
        return 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10';
      case 'Advanced':
        return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      default:
        return 'text-green-400 border-green-400/30 bg-green-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent mb-6"
          >
            Innovative Services 2027
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 mb-8 max-w-4xl mx-auto"
          >
            Discover cutting-edge AI, IT, and innovative solutions that will transform your business
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="bg-zion-cyan/10 border border-zion-cyan/30 rounded-full px-6 py-3 text-zion-cyan">
              <span className="font-semibold">{allServices.length}+</span> Services
            </div>
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-full px-6 py-3 text-zion-purple">
              <span className="font-semibold">15+</span> Categories
            </div>
            <div className="bg-zion-blue/10 border border-zion-blue/30 rounded-full px-6 py-3 text-zion-blue">
              <span className="font-semibold">300-1000%</span> ROI
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-32 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30"
        />
      </section>

      {/* Filters and Search */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate/80 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan/60 focus:ring-2 focus:ring-zion-cyan/20"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan/50" />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zion-slate/80 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/60 focus:ring-2 focus:ring-zion-cyan/20"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-slate text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zion-slate/80 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/60 focus:ring-2 focus:ring-zion-cyan/20"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
              </select>

              {/* Results Count */}
              <div className="flex items-center justify-center px-4 py-3 bg-zion-cyan/10 border border-zion-cyan/30 rounded-lg text-zion-cyan">
                <span className="font-semibold">{filteredServices.length} Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 hover:bg-zion-slate/70 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-lg text-zion-cyan">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zion-cyan/70">{service.category}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getInnovationColor(service.innovationLevel)}`}>
                    {service.innovationLevel}
                  </div>
                </div>

                {/* Description */}
                <p className="text-zion-cyan/80 mb-4 line-clamp-3">{service.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-md text-xs text-zion-cyan/80"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-2 py-1 bg-zion-purple/10 border border-zion-purple/20 rounded-md text-xs text-zion-purple/80">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan">{service.price.toLocaleString()}</div>
                    <div className="text-xs text-zion-cyan/70">USD/month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-purple">{service.roi}</div>
                    <div className="text-xs text-zion-purple/70">ROI</div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs text-zion-cyan/80">
                        <Star className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                  <div className="flex items-center space-x-4 text-xs text-zion-cyan/70">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center">
                      <UsersIcon className="w-3 h-3 mr-1" />
                      {service.supportLevel}
                    </div>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/40 rounded-lg text-zion-cyan hover:bg-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-200 text-sm font-medium"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-cyan/80">Try adjusting your search criteria or browse all categories</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-cyan/80 mb-8">
              Get in touch with our experts to discuss how these innovative services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/30 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/comprehensive-pricing-guide"
                className="px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-bold rounded-xl hover:bg-zion-cyan/10 transition-all duration-300"
              >
                View Pricing Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2027;