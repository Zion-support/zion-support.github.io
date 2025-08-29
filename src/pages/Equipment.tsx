import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  Heart, 
  Eye,
  ArrowRight,
  Zap,
  Cpu,
  Database,
  Network,
  Shield,
  Cloud,
  Rocket,
  Monitor,
  HardDrive,
  Wifi,
  Router,
  Building2,
  CheckCircle,
  Plus,
  ShoppingCart,
  TrendingUp,
  Award,
  Users,
  Globe,
  Shield,
  Lock,
  Wrench,
  Settings,
  BarChart3
} from 'lucide-react';

const equipmentCategories = [
  {
    id: 'servers',
    title: 'Servers & Computing',
    description: 'High-performance servers, workstations, and computing clusters',
    icon: Server,
    count: '200+',
    color: 'from-blue-600 to-cyan-600',
    equipment: ['Dell PowerEdge', 'HP ProLiant', 'IBM Power', 'Custom Clusters']
  },
  {
    id: 'networking',
    title: 'Networking & Security',
    description: 'Switches, routers, firewalls, and security appliances',
    icon: Network,
    count: '150+',
    color: 'from-green-600 to-emerald-600',
    equipment: ['Cisco Catalyst', 'Juniper Networks', 'Fortinet', 'Palo Alto']
  },
  {
    id: 'storage',
    title: 'Storage Solutions',
    description: 'Enterprise storage arrays, SAN, NAS, and backup systems',
    icon: HardDrive,
    count: '100+',
    color: 'from-purple-600 to-pink-600',
    equipment: ['EMC PowerMax', 'NetApp AFF', 'Pure Storage', 'Dell EMC']
  },
  {
    id: 'ai-hpc',
    title: 'AI & HPC Hardware',
    description: 'GPU clusters, quantum computing, and specialized AI hardware',
    icon: Cpu,
    count: '80+',
    color: 'from-yellow-600 to-orange-600',
    equipment: ['NVIDIA DGX', 'AMD EPYC', 'Intel Xeon', 'Custom AI Rigs']
  },
  {
    id: 'edge-iot',
    title: 'Edge & IoT Devices',
    description: 'Edge computing devices, IoT sensors, and industrial hardware',
    icon: Wifi,
    count: '120+',
    color: 'from-indigo-600 to-purple-600',
    equipment: ['Raspberry Pi', 'Arduino', 'Industrial PCs', 'IoT Gateways']
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Tools',
    description: 'Network monitoring, testing equipment, and diagnostic tools',
    icon: BarChart3,
    count: '90+',
    color: 'from-red-600 to-pink-600',
    equipment: ['Fluke Networks', 'Keysight', 'Tektronix', 'Custom Solutions']
  }
];

const featuredEquipment = [
  {
    id: 1,
    name: 'Dell PowerEdge R750 Server',
    category: 'Servers & Computing',
    description: 'High-performance dual-socket server with latest Intel Xeon processors',
    price: '$8,500',
    originalPrice: '$12,000',
    rating: 4.8,
    reviews: 23,
    views: 156,
    likes: 89,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: ['Intel Xeon Gold 6338', '128GB DDR4', '2TB NVMe SSD', 'Dual 10GbE'],
    condition: 'Refurbished',
    warranty: '1 Year',
    location: 'Austin, TX',
    featured: true
  },
  {
    id: 2,
    name: 'Cisco Catalyst 9300 Switch',
    category: 'Networking & Security',
    description: 'Enterprise-grade access switch with advanced security features',
    price: '$3,200',
    originalPrice: '$5,500',
    rating: 4.9,
    reviews: 18,
    views: 134,
    likes: 67,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: ['48-Port PoE+', '1GbE Access', 'StackWise-480', 'Cisco DNA Ready'],
    condition: 'Used',
    warranty: '90 Days',
    location: 'San Jose, CA',
    featured: true
  },
  {
    id: 3,
    name: 'NVIDIA DGX A100 System',
    category: 'AI & HPC Hardware',
    description: 'AI training and inference system with 8x A100 GPUs',
    price: '$45,000',
    originalPrice: '$199,000',
    rating: 4.7,
    reviews: 12,
    views: 89,
    likes: 45,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: ['8x NVIDIA A100', 'AMD EPYC 7742', '1TB DDR4', '7.68TB NVMe'],
    condition: 'Refurbished',
    warranty: '6 Months',
    location: 'Seattle, WA',
    featured: true
  }
];

const Equipment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEquipment = featuredEquipment.filter(equipment => {
    if (selectedCategory !== 'all' && equipment.category !== equipmentCategories.find(cat => cat.id === selectedCategory)?.title) {
      return false;
    }
    if (searchQuery && !equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !equipment.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise-Grade
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}IT Equipment
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Access premium enterprise hardware, servers, networking equipment, and specialized 
              technology solutions at competitive prices with expert support.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for equipment, brands, or specifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                <span>800+ Equipment Items</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.7+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Warranty Included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Equipment Categories</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Browse our comprehensive selection of enterprise IT equipment across all major 
              categories, from servers and networking to specialized AI hardware.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group cursor-pointer transition-all duration-300 hover:scale-105`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? 'all' : category.id)}
              >
                <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl h-full relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-white/90 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/80 font-semibold">{category.count} Items</span>
                      <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.equipment.slice(0, 3).map((item, itemIndex) => (
                        <span key={itemIndex} className="px-3 py-1 bg-white/20 rounded-full text-white/90 text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Equipment</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover our top-quality enterprise equipment with competitive pricing, 
              comprehensive warranties, and expert technical support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((equipment, index) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  {equipment.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-full font-medium">
                      Featured
                    </span>
                  )}
                  <div className="absolute top-3 right-3">
                    <button className="p-2 bg-slate-800/80 rounded-full text-white hover:bg-slate-700/80 transition-colors duration-200">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{equipment.name}</h3>
                  <p className="text-slate-300 text-sm mb-3">{equipment.description}</p>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{equipment.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{equipment.rating}</span>
                    <span className="text-slate-400">({equipment.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-cyan-400">{equipment.price}</span>
                    <span className="text-slate-400 line-through">{equipment.originalPrice}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-slate-300 mb-3">
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-cyan-400">
                      {equipment.condition}
                    </span>
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-green-400">
                      {equipment.warranty}
                    </span>
                  </div>
                  <h4 className="text-white font-medium mb-2">Key Specifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {equipment.specs.slice(0, 3).map((spec, specIndex) => (
                      <span key={specIndex} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                    <ShoppingCart className="w-4 h-4" />
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/equipment/catalog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 group"
            >
              Browse All Equipment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Beyond equipment sales, we provide comprehensive support services to ensure 
              your technology investments deliver maximum value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: 'Installation & Setup',
                description: 'Professional installation, configuration, and initial setup of all equipment',
                features: ['On-site installation', 'Configuration services', 'Testing & validation', 'Documentation']
              },
              {
                icon: Shield,
                title: 'Warranty & Support',
                description: 'Extended warranties and comprehensive technical support packages',
                features: ['Extended warranties', '24/7 support', 'Remote assistance', 'Parts replacement']
              },
              {
                icon: Users,
                title: 'Training & Consulting',
                description: 'Staff training and expert consulting for optimal equipment utilization',
                features: ['User training', 'Best practices', 'Performance optimization', 'Ongoing consulting']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your IT Infrastructure?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get expert guidance on equipment selection, competitive pricing, and comprehensive 
              support to ensure your technology investments deliver maximum ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <Plus className="w-5 h-5" />
                Get Equipment Quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-slate-700/50 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                <Users className="w-5 h-5" />
                Talk to Our Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Equipment;