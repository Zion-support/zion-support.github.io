import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Laptop, 
  Monitor, 
  Network, 
  Shield, 
  Cloud, 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  Clock, 
  MapPin, 
  DollarSign, 
  Zap, 
  Brain, 
  Database, 
  Lock, 
  Eye,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  Wifi,
  HardDrive,
  Cpu,
  Memory
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Equipment() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const equipmentCategories = [
    {
      id: 'servers',
      name: 'Servers & Infrastructure',
      icon: Server,
      color: 'from-blue-600 to-cyan-600',
      count: 156,
      description: 'Enterprise servers, storage systems, and networking equipment'
    },
    {
      id: 'workstations',
      name: 'Workstations & Desktops',
      icon: Laptop,
      color: 'from-green-600 to-emerald-600',
      count: 89,
      description: 'High-performance workstations for development and design'
    },
    {
      id: 'networking',
      name: 'Networking Equipment',
      icon: Network,
      color: 'from-purple-600 to-pink-600',
      count: 234,
      description: 'Switches, routers, firewalls, and wireless equipment'
    },
    {
      id: 'security',
      name: 'Security & Surveillance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      count: 67,
      description: 'Security cameras, access control, and monitoring systems'
    },
    {
      id: 'storage',
      name: 'Storage Solutions',
      icon: HardDrive,
      color: 'from-indigo-600 to-purple-600',
      count: 123,
      description: 'NAS, SAN, and enterprise storage arrays'
    },
    {
      id: 'peripherals',
      name: 'Peripherals & Accessories',
      icon: Monitor,
      color: 'from-yellow-600 to-orange-600',
      count: 445,
      description: 'Monitors, keyboards, mice, and other accessories'
    }
  ];

  const featuredEquipment = [
    {
      id: 1,
      name: 'Dell PowerEdge R750 Server',
      category: 'servers',
      type: 'Rack Server',
      specs: {
        cpu: 'Intel Xeon Gold 6338',
        ram: '128GB DDR4',
        storage: '2TB NVMe SSD',
        network: '10GbE'
      },
      condition: 'Excellent',
      availability: 'In Stock',
      location: 'Delaware',
      price: '$4,299',
      originalPrice: '$5,199',
      rating: 4.8,
      reviews: 23,
      image: '/equipment/dell-poweredge-r750.jpg',
      description: 'High-performance rack server ideal for virtualization and enterprise applications.'
    },
    {
      id: 2,
      name: 'Cisco Catalyst 9300 Switch',
      category: 'networking',
      type: 'Network Switch',
      specs: {
        ports: '48-Port PoE+',
        speed: '10/100/1000 Mbps',
        power: 'PoE+ 370W',
        stack: 'StackWise-480'
      },
      condition: 'Like New',
      availability: 'In Stock',
      location: 'Delaware',
      price: '$2,899',
      originalPrice: '$3,599',
      rating: 4.9,
      reviews: 18,
      image: '/equipment/cisco-catalyst-9300.jpg',
      description: 'Enterprise-grade PoE switch with advanced security and management features.'
    },
    {
      id: 3,
      name: 'HP Z8 G4 Workstation',
      category: 'workstations',
      type: 'Desktop Workstation',
      specs: {
        cpu: 'Intel Xeon W-3275',
        ram: '64GB DDR4',
        storage: '1TB NVMe SSD',
        gpu: 'NVIDIA RTX A5000'
      },
      condition: 'Excellent',
      availability: 'In Stock',
      location: 'Delaware',
      price: '$3,599',
      originalPrice: '$4,299',
      rating: 4.7,
      reviews: 31,
      image: '/equipment/hp-z8-g4.jpg',
      description: 'Professional workstation for CAD, 3D rendering, and video editing.'
    },
    {
      id: 4,
      name: 'Synology DS1821+ NAS',
      category: 'storage',
      type: 'Network Storage',
      specs: {
        bays: '8-Bay',
        cpu: 'AMD Ryzen V1500B',
        ram: '4GB DDR4',
        network: '2.5GbE'
      },
      condition: 'Like New',
      availability: 'In Stock',
      location: 'Delaware',
      price: '$899',
      originalPrice: '$1,099',
      rating: 4.8,
      reviews: 42,
      image: '/equipment/synology-ds1821.jpg',
      description: 'High-capacity NAS for business file sharing and backup solutions.'
    }
  ];

  const availabilityOptions = [
    { id: 'all', name: 'All Availability', count: 0 },
    { id: 'in-stock', name: 'In Stock', count: 1123 },
    { id: 'available-soon', name: 'Available Soon', count: 89 },
    { id: 'custom-order', name: 'Custom Order', count: 156 },
    { id: 'rental', name: 'Rental Available', count: 234 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Equipment - Zion Tech Group"
        description="Browse and request enterprise-grade IT equipment. Servers, workstations, networking gear, and more."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Server className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise IT Equipment
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              High-quality, certified IT equipment for your business needs. 
              From servers to workstations, we have the technology you require.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for equipment, brands, or specifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="all">All Categories</option>
            {equipmentCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
          
          <select
            value={selectedAvailability}
            onChange={(e) => setSelectedAvailability(e.target.value)}
            className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {availabilityOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name} {option.count > 0 && `(${option.count})`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Equipment Categories */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Equipment Categories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-slate-400 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-medium">{category.count} items</span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Equipment */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Featured Equipment
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredEquipment.map((equipment, index) => (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{equipment.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{equipment.type}</p>
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>{equipment.condition}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{equipment.location}</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{equipment.rating}</span>
                  </div>
                  <span className="text-sm text-slate-400">{equipment.reviews} reviews</span>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4">{equipment.description}</p>
              
              {/* Specifications */}
              <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-slate-300 mb-2">Specifications</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(equipment.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-slate-400 capitalize">{key}:</span>
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-cyan-400 font-medium text-lg">{equipment.price}</span>
                  {equipment.originalPrice && (
                    <span className="text-slate-400 text-sm line-through ml-2">{equipment.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    equipment.availability === 'In Stock' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {equipment.availability}
                  </span>
                  <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Additional Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Installation & Setup</h3>
            <p className="text-slate-400 mb-4">Professional installation and configuration of all equipment</p>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
              Learn More
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Warranty & Support</h3>
            <p className="text-slate-400 mb-4">Extended warranties and technical support for all equipment</p>
            <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
              Learn More
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Rental Options</h3>
            <p className="text-slate-400 mb-4">Flexible rental solutions for temporary equipment needs</p>
            <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Custom Equipment Solutions?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            We can help you find the perfect equipment for your specific requirements. 
            Our team will work with you to understand your needs and recommend the right solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors font-medium">
              Request Custom Quote
            </button>
            <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}