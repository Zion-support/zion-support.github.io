import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { SEO              } from '../components/SEO';
import { Link              } from 'react-router-dom.ts';
import { Server, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase,
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
             } from 'lucide-react.ts';

export default function Equipment(...args: any[]): any {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [expandedEquipment, setExpandedEquipment] = useState<any>(null);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  const equipmentItems = [
    {
      id: 1,
      name: 'High-Performance Server',
      category: 'Servers',
      location: 'Data Center A',
      status: 'Available',
      rating: 4.8,
      price: '$2,500/month',
      description: 'Enterprise-grade server with latest Intel processors'
    },
    {
      id: 2,
      name: 'Network Switch',
      category: 'Networking',
      location: 'Data Center B',
      status: 'In Use',
      rating: 4.6,
      price: '$800/month',
      description: '48-port gigabit network switch with PoE support'
    },
    {
      id: 3,
      name: 'Storage Array',
      category: 'Storage',
      location: 'Data Center A',
      status: 'Available',
      rating: 4.9,
      price: '$1,200/month',
      description: 'High-capacity storage array with RAID protection'
    }
  ];

  const toggleEquipmentExpansion = (equipmentId: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
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

  const getCategoryColor = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
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

  const getConditionColor = (condition: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (condition) {
      case 'new': return 'bg-green-500/20 text-green-400';
      case 'refurbished': return 'bg-blue-500/20 text-blue-400';
      case 'used': return 'bg-yellow-500/20 text-yellow-400';
      case 'good': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const renderStars = (rating: anyanyanyanyanyanyanyanyanyanyanyanyanynumber)              => {
    return Array.from({ length: anyanyanyanyanyanyanyanyanyanyanyanyany5 }, (_, i)              => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Equipment & Hardware</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access to enterprise-grade hardware, servers, networking equipment, and specialized devices for your technology needs.
          </p>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                >
                  {categories.map((category)              => (
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
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                >
                  {conditions.map((condition)              => (
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

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {equipmentInventory.filter(e              => e.featured).map((equipment, index) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-3 rounded-lg transition-colors ${
                  view === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

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
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((equipment, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        {item.category === 'Servers' && <Server className="w-6 h-6 text-blue-400" />}
                        {item.category === 'Networking' && <Network className="w-6 h-6 text-green-400" />}
                        {item.category === 'Storage' && <HardDrive className="w-6 h-6 text-purple-400" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-sm text-gray-400">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{item.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{item.status}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span>{item.price}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Request Access
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">No Equipment Found</h3>
              <p className="text-gray-400 mb-6">
                No equipment matches your search criteria. Try adjusting your search terms.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Equipment;