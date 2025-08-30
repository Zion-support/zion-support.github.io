import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Zap,
  Globe,
  Target,
  BarChart3,
  Settings,
  Palette,
  Cpu,
  HardDrive,
  Network,
  Lightbulb,
  BookOpen,
  Video,
  Headphones,
  Percent,
  X,
  Plus,
  Minus,
  RefreshCw,
  RotateCcw,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Power,
  PowerOff,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryEmpty,
  Wifi,
  WifiOff,
  Signal,
  SignalOff,
  Bluetooth,
  BluetoothOff,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Camera,
  Image,
  File,
  Folder,
  Archive,
  Trash2,
  Edit,
  Copy,
  Share,
  Link as LinkIcon,
  Bookmark,
  BookmarkPlus,
  BookmarkMinus,
  Flag,
  Report,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Heart,
  HeartOff,
  HeartHandshake,
  Gift,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  Radar,
  Gauge,
  Thermometer,
  Droplets,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Wind,
  Umbrella,
  Snowflake,
  Fire,
  Leaf,
  Tree,
  Flower,
  Seedling,
  Sprout,
  Plant,
  TreePine,
  Mountain,
  MountainSnow,
  Volcano,
  Island,
  Beach,
  Desert,
  Forest,
  Jungle,
  Ocean,
  River,
  Lake,
  Water,
  Fish,
  Bird,
  Cat,
  Dog,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Chicken,
  Duck,
  Turkey,
  Eagle,
  Hawk,
  Owl,
  Crow,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Goldfinch,
  Hummingbird,
  Woodpecker,
  Seagull,
  Pelican,
  Flamingo,
  Penguin,
  Ostrich,
  Emu,
  Kiwi,
  Toucan,
  Parrot,
  Macaw,
  Cockatoo,
  Canary,
  Finch,
  Factory,
  Building2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Truck,
  Motorcycle,
  Bicycle,
  Rocket,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Atom,
  Dna,
  Virus,
  Bacteria,
  Cell,
  Organ,
  Brain,
  Heart as HeartIcon,
  Lungs,
  Liver,
  Kidney,
  Stomach,
  Intestines,
  Bone,
  Muscle,
  Skin,
  Hair,
  Nail,
  Tooth,
  Eye as EyeIcon,
  Ear,
  Nose,
  Mouth,
  Tongue,
  Throat,
  Neck,
  Shoulder,
  Arm,
  Hand,
  Finger,
  Leg,
  Foot,
  Toe,
  Joint,
  Tendon,
  Ligament,
  Cartilage,
  Blood,
  Plasma,
  Platelet,
  WhiteBloodCell,
  RedBloodCell,
  Hemoglobin,
  Oxygen,
  CarbonDioxide,
  Glucose,
  Insulin,
  Hormone,
  Enzyme,
  Protein,
  Carbohydrate,
  Fat,
  Vitamin,
  Mineral,
  Water as WaterIcon,
  Salt,
  Sugar,
  Starch,
  Fiber,
  Cholesterol,
  Triglyceride,
  UricAcid,
  Creatinine,
  Bilirubin,
  Albumin,
  Globulin,
  Fibrinogen,
  Prothrombin,
  Thrombin,
  Fibrin,
  Clot,
  Wound,
  Scar,
  Bruise,
  Rash,
  Pimple,
  Mole,
  Freckle,
  Birthmark,
  Tattoo,
  Piercing,
  Jewelry,
  Watch,
  Ring,
  Necklace,
  Bracelet,
  Earring,
  Glasses,
  Sunglasses,
  Hat,
  Cap,
  Helmet,
  Mask,
  Glove,
  Sock,
  Shoe,
  Boot,
  Sandal,
  Sneaker,
  HighHeel,
  Flat,
  Wedge,
  Platform,
  Stiletto,
  Pump,
  Loafer,
  Oxford,
  Derby,
  Brogue,
  Monk,
  Chelsea,
  Ankle,
  Knee,
  Thigh,
  Calf,
  Ankle,
  Heel,
  Sole,
  Insole,
  Outsole,
  Midsole,
  Upper,
  Lining,
  Tongue,
  Lace,
  Buckle,
  Velcro,
  Zipper,
  Button,
  Snap,
  Hook,
  Loop,
  Eyelet,
  Grommet,
  Rivet,
  Stitch,
  Seam,
  Hem,
  Pleat,
  Dart,
  Tuck,
  Gather,
  Ruffle,
  Frill,
  Trim,
  Border,
  Fringe,
  Tassel,
  PomPom,
  Bow,
  Flower,
  Leaf as LeafIcon,
  Branch,
  Twig,
  Bark,
  Root,
  Seed,
  Nut,
  Berry,
  Fruit,
  Vegetable,
  Grain,
  Herb,
  Spice,
  Tea,
  Coffee,
  Juice,
  Soda,
  Beer,
  Wine,
  Liquor,
  Cocktail,
  Smoothie,
  Milkshake,
  IceCream,
  Cake,
  Cookie,
  Pie,
  Bread,
  Pasta,
  Rice,
  Potato,
  Corn,
  Wheat,
  Oat,
  Barley,
  Rye,
  Quinoa,
  Buckwheat,
  Amaranth,
  Millet,
  Sorghum,
  Triticale,
  Spelt,
  Kamut,
  Einkorn,
  Emmer,
  Farro,
  Freekeh,
  Bulgur,
  Couscous,
  Polenta,
  Grits,
  Hominy,
  Popcorn,
  Tortilla,
  Naan,
  Pita,
  Bagel,
  Croissant,
  Donut,
  Muffin,
  Scone,
  Biscuit,
  Cracker,
  Chip,
  Pretzel,
  Granola,
  Cereal,
  Oatmeal,
  Grits,
  Porridge,
  Congee,
  Risotto,
  Paella,
  Jambalaya,
  Gumbo,
  Etouffee,
  RedBeans,
  BlackEyedPeas,
  LimaBeans,
  PintoBeans,
  KidneyBeans,
  NavyBeans,
  Cannellini,
  Garbanzo,
  Lentil,
  SplitPea,
  BlackBean,
  WhiteBean,
  GreenBean,
  WaxBean,
  StringBean,
  SnapBean,
  ShellBean,
  FavaBean,
  MungBean,
  AdzukiBean,
  AnasaziBean,
  AppaloosaBean,
  AzukiBean,
  BlackTurtleBean,
  BolitaBean,
  BorlottiBean,
  CalypsoBean,
  CannelliniBean,
  CranberryBean,
  FlageoletBean,
  GreatNorthernBean,
  JacobCattleBean,
  MayocobaBean,
  MolassesBean,
  OrcaBean,
  PeruanoBean,
  PinkBean,
  PintoBean,
  RattlesnakeBean,
  RedBean,
  RedKidneyBean,
  SmallRedBean,
  SoldierBean,
  TonguesOfFireBean,
  WhiteBean,
  WhiteKidneyBean,
  YellowBean,
  YellowEyeBean,
  YellowIndianBean,
  YellowWaxBean,
  YellowEyeBean,
  YellowIndianBean,
  YellowWaxBean
} from 'lucide-react';

export default function Equipment() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedEquipment, setExpandedEquipment] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories', count: 38 },
    { id: 'servers', name: 'Servers & Storage', count: 12 },
    { id: 'networking', name: 'Networking', count: 8 },
    { id: 'workstations', name: 'Workstations', count: 6 },
    { id: 'peripherals', name: 'Peripherals', count: 5 },
    { id: 'mobile', name: 'Mobile Devices', count: 4 },
    { id: 'specialized', name: 'Specialized Equipment', count: 3 }
  ];

  const conditions = [
    { id: 'all', name: 'All Conditions', count: 38 },
    { id: 'new', name: 'New', count: 15 },
    { id: 'refurbished', name: 'Refurbished', count: 12 },
    { id: 'used', name: 'Used - Excellent', count: 8 },
    { id: 'good', name: 'Used - Good', count: 3 }
  ];

  const equipmentInventory = [
    // Servers & Storage
    {
      id: 'dell-poweredge-r750',
      name: 'Dell PowerEdge R750 Server',
      category: 'servers',
      condition: 'new',
      icon: Server,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      description: 'High-performance dual-socket server with enterprise-grade reliability and scalability.',
      specs: {
        processor: '2x Intel Xeon Silver 4314 (16 cores, 32 threads)',
        memory: '128GB DDR4 ECC Registered',
        storage: '4x 1.92TB SSD + 2x 4TB HDD',
        networking: '4x 1GbE + 2x 10GbE',
        power: '750W Platinum PSU'
      },
      features: ['Redundant Power Supplies', 'iDRAC9 Management', 'Hot-swappable Drives', 'RAID Support', 'Enterprise Warranty'],
      price: '$8,499',
      originalPrice: '$12,999',
      discount: '35%',
      availability: 'In Stock',
      location: 'Austin, TX',
      warranty: '3 Years',
      rating: 4.8,
      reviews: 42,
      featured: true,
      tags: ['Server', 'Enterprise', 'High Performance', 'Scalable', 'Reliable']
    },
    {
      id: 'hp-proliant-dl380',
      name: 'HP ProLiant DL380 Gen10 Plus',
      category: 'servers',
      condition: 'refurbished',
      icon: Server,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      description: 'Refurbished enterprise server with proven reliability and comprehensive support.',
      specs: {
        processor: '2x Intel Xeon Gold 6338 (32 cores, 64 threads)',
        memory: '256GB DDR4 ECC Registered',
        storage: '8x 900GB SAS HDD + 2x 480GB SSD',
        networking: '4x 1GbE + 2x 25GbE',
        power: '800W Platinum PSU'
      },
      features: ['HP iLO Advanced', 'Smart Array Controller', 'Flexible Storage', 'Energy Efficient', 'Certified Refurbished'],
      price: '$6,299',
      originalPrice: '$15,999',
      discount: '61%',
      availability: 'In Stock',
      location: 'Dallas, TX',
      warranty: '1 Year',
      rating: 4.6,
      reviews: 28,
      featured: false,
      tags: ['Server', 'Refurbished', 'Enterprise', 'High Memory', 'Cost Effective']
    },
    // Networking
    {
      id: 'cisco-catalyst-9300',
      name: 'Cisco Catalyst 9300-48P Switch',
      category: 'networking',
      condition: 'new',
      icon: Network,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      description: 'Next-generation enterprise switch with PoE+ support and advanced security features.',
      specs: {
        ports: '48x PoE+ Gigabit + 4x SFP+',
        poe: '370W PoE+ Budget',
        switching: '176 Gbps',
        forwarding: '130 Mpps',
        power: 'AC Power Supply'
      },
      features: ['PoE+ Support', 'Cisco DNA Ready', 'Advanced Security', 'Stackable', 'Energy Efficient'],
      price: '$4,999',
      originalPrice: '$7,499',
      discount: '33%',
      availability: 'In Stock',
      location: 'San Francisco, CA',
      warranty: 'Lifetime',
      rating: 4.9,
      reviews: 67,
      featured: true,
      tags: ['Switch', 'PoE+', 'Enterprise', 'Cisco', 'High Performance']
    },
    // Workstations
    {
      id: 'dell-precision-5820',
      name: 'Dell Precision 5820 Workstation',
      category: 'workstations',
      condition: 'new',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      description: 'Professional workstation designed for demanding applications and creative workflows.',
      specs: {
        processor: 'Intel Xeon W-3335 (12 cores, 24 threads)',
        memory: '64GB DDR4 ECC',
        graphics: 'NVIDIA RTX A4000 (16GB)',
        storage: '1TB NVMe SSD + 2TB HDD',
        power: '750W 80+ Gold'
      },
      features: ['ISV Certified', 'ECC Memory', 'Professional Graphics', 'Fast Storage', 'Expandable'],
      price: '$3,299',
      originalPrice: '$4,999',
      discount: '34%',
      availability: 'In Stock',
      location: 'Seattle, WA',
      warranty: '3 Years',
      rating: 4.7,
      reviews: 35,
      featured: false,
      tags: ['Workstation', 'Professional', 'Graphics', 'Performance', 'Reliable']
    },
    // Peripherals
    {
      id: 'dell-ultrasharp-u2720q',
      name: 'Dell UltraSharp U2720Q Monitor',
      category: 'peripherals',
      condition: 'refurbished',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      description: '27-inch 4K monitor with exceptional color accuracy and connectivity options.',
      specs: {
        resolution: '3840 x 2160 (4K UHD)',
        panel: 'IPS',
        color: '99% sRGB, 95% DCI-P3',
        ports: 'HDMI, DisplayPort, USB-C',
        response: '5ms'
      },
      features: ['4K Resolution', 'Color Accurate', 'USB-C Hub', 'VESA Mount', 'Height Adjustable'],
      price: '$399',
      originalPrice: '$699',
      discount: '43%',
      availability: 'In Stock',
      location: 'Chicago, IL',
      warranty: '1 Year',
      rating: 4.8,
      reviews: 89,
      featured: false,
      tags: ['Monitor', '4K', 'Color Accurate', 'Professional', 'USB-C']
    },
    // Mobile Devices
    {
      id: 'dell-latitude-5520',
      name: 'Dell Latitude 5520 Laptop',
      category: 'mobile',
      condition: 'refurbished',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      description: 'Business laptop with enterprise security features and long battery life.',
      specs: {
        processor: 'Intel Core i7-1185G7 (4 cores, 8 threads)',
        memory: '16GB DDR4',
        storage: '512GB NVMe SSD',
        display: '15.6" FHD (1920x1080)',
        battery: '68Whr (up to 12 hours)'
      },
      features: ['Enterprise Security', 'Long Battery Life', 'Fast Performance', 'Durable Design', 'Windows 11 Pro'],
      price: '$799',
      originalPrice: '$1,499',
      discount: '47%',
      availability: 'In Stock',
      location: 'New York, NY',
      warranty: '1 Year',
      rating: 4.5,
      reviews: 56,
      featured: false,
      tags: ['Laptop', 'Business', 'Security', 'Long Battery', 'Windows 11']
    }
  ];

  const toggleEquipmentExpansion = (equipmentId: string) => {
    setExpandedEquipment(expandedEquipment === equipmentId ? null : equipmentId);
  };

  const filteredEquipment = equipmentInventory.filter(equipment => {
    if (selectedCategory !== 'all' && equipment.category !== selectedCategory) return false;
    if (selectedCondition !== 'all' && equipment.condition !== selectedCondition) return false;
    if (searchQuery) {
      return equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             equipment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             equipment.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'servers': return 'bg-purple-500/20 text-purple-400';
      case 'networking': return 'bg-blue-500/20 text-blue-400';
      case 'workstations': return 'bg-green-500/20 text-green-400';
      case 'peripherals': return 'bg-orange-500/20 text-orange-400';
      case 'mobile': return 'bg-pink-500/20 text-pink-400';
      case 'specialized': return 'bg-red-500/20 text-red-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'new': return 'bg-green-500/20 text-green-400';
      case 'refurbished': return 'bg-blue-500/20 text-blue-400';
      case 'used': return 'bg-yellow-500/20 text-yellow-400';
      case 'good': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Technology Equipment - Zion Tech Group"
        description="Browse our comprehensive inventory of enterprise-grade technology equipment, servers, networking gear, and professional workstations."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Server className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-600 bg-clip-text text-transparent">Equipment</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade servers, networking equipment, workstations, and peripherals. 
              Quality technology solutions for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search equipment by name, specs, or features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Condition Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                >
                  {conditions.map((condition) => (
                    <option key={condition.id} value={condition.id}>
                      {condition.name} ({condition.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-purple-400/20 text-purple-400' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-purple-400/20 text-purple-400' 
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Equipment</h2>
            <p className="text-xl text-gray-300">Premium technology solutions with exceptional value</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {equipmentInventory.filter(e => e.featured).map((equipment, index) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(equipment.category)}`}>
                        {categories.find(c => c.id === equipment.category)?.name}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(equipment.condition)}`}>
                        {conditions.find(con => con.id === equipment.condition)?.name}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                        Featured
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                        <equipment.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                        {equipment.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {equipment.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Features</div>
                      <div className="flex flex-wrap gap-2">
                        {equipment.features.slice(0, 4).map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-400">Price</div>
                        <div className="text-purple-400 font-medium">{equipment.price}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Rating</div>
                        <div className="flex items-center gap-1">
                          {renderStars(equipment.rating)}
                          <span className="text-gray-300 text-xs">({equipment.reviews})</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400">Warranty</div>
                        <div className="text-green-400 font-medium">{equipment.warranty}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Location</div>
                        <div className="text-blue-400 font-medium text-sm">{equipment.location}</div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleEquipmentExpansion(equipment.id)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                    >
                      {expandedEquipment === equipment.id ? 'Show Less' : 'View Full Specs'}
                    </button>
                    
                    {expandedEquipment === equipment.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Technical Specifications:</h4>
                          <div className="space-y-2 text-sm">
                            {Object.entries(equipment.specs).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-gray-400 capitalize">{key}:</span>
                                <span className="text-gray-300">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">All Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {equipment.features.map((feature, featureIndex) => (
                              <span key={featureIndex} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div>
                            <span className="text-gray-400">Original Price:</span>
                            <span className="text-gray-500 line-through ml-2">{equipment.originalPrice}</span>
                          </div>
                          <div className="text-green-400 font-medium">
                            Save {equipment.discount}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Equipment */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Complete Equipment Inventory</h2>
            <p className="text-xl text-gray-300">
              Browse our full catalog of technology solutions
            </p>
          </motion.div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((equipment, index) => (
                <motion.div
                  key={equipment.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(equipment.category)}`}>
                          {categories.find(c => c.id === equipment.category)?.name}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(equipment.condition)}`}>
                          {conditions.find(con => con.id === equipment.condition)?.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
                          <equipment.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                          {equipment.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                        {equipment.description}
                      </p>
                      
                      <div className="mb-3">
                        <div className="text-xs text-gray-400 mb-1">Features</div>
                        <div className="flex flex-wrap gap-1">
                          {equipment.features.slice(0, 3).map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                        <div>
                          <div className="text-gray-400">Price</div>
                          <div className="text-purple-400 font-medium">{equipment.price}</div>
                        </div>
                        <div>
                          <div className="text-gray-400">Rating</div>
                          <div className="flex items-center gap-1">
                            {renderStars(equipment.rating)}
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEquipment.map((equipment, index) => (
                <motion.div
                  key={equipment.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                          <equipment.icon className="w-10 h-10 text-purple-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(equipment.category)}`}>
                            {categories.find(c => c.id === equipment.category)?.name}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(equipment.condition)}`}>
                            {conditions.find(con => con.id === equipment.condition)?.name}
                          </span>
                          {equipment.featured && (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200 mb-2">
                          {equipment.name}
                        </h3>
                        
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {equipment.description}
                        </p>
                        
                        <div className="mb-3">
                          <div className="text-sm text-gray-400 mb-1">Key Features</div>
                          <div className="flex flex-wrap gap-2">
                            {equipment.features.slice(0, 5).map((feature, featureIndex) => (
                              <span key={featureIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 text-right">
                        <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                          <div>
                            <div className="text-gray-400">Price</div>
                            <div className="text-purple-400 font-medium">{equipment.price}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Rating</div>
                            <div className="flex items-center gap-1">
                              {renderStars(equipment.rating)}
                              <span className="text-gray-300 text-xs">({equipment.reviews})</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400">Warranty</div>
                            <div className="text-green-400 font-medium text-sm">{equipment.warranty}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Location</div>
                            <div className="text-blue-400 font-medium text-sm">{equipment.location}</div>
                          </div>
                        </div>
                        
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Custom Equipment Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can help you find the perfect technology solutions 
              or customize equipment to meet your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Get Quote
              </button>
              <a
                href="mailto:equipment@ziontechgroup.com"
                className="px-8 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
              >
                Contact Equipment Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}