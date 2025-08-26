import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Network, 
  Zap, 
  Snowflake, 
  HardDrive, 
  Shield, 
  Settings, 
  Cpu,
  Bot,
  Search,
  Filter,
  Star,
  ShoppingCart,
  ArrowRight
} from 'lucide-react';

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Equipment', icon: Server, color: 'from-zion-cyan to-zion-blue' },
    { id: 'servers', name: 'Servers', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'networking', name: 'Networking', icon: Network, color: 'from-zion-purple to-zion-cyan' },
    { id: 'power', name: 'Power', icon: Zap, color: 'from-zion-cyan to-zion-green' },
    { id: 'cooling', name: 'Cooling', icon: Snowflake, color: 'from-zion-green to-zion-blue' },
    { id: 'storage', name: 'Storage', icon: HardDrive, color: 'from-zion-blue to-zion-purple' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'management', name: 'Management', icon: Settings, color: 'from-zion-red to-zion-cyan' },
    { id: 'ai', name: 'AI & ML', icon: Cpu, color: 'from-zion-cyan to-zion-purple' },
    { id: 'robotics', name: 'Robotics', icon: Robot, color: 'from-zion-purple to-zion-green' }
  ];

  const equipment = [
    {
      id: 1,
      name: 'High-Performance Server Rack',
      category: 'servers',
      description: 'Enterprise-grade server rack with advanced cooling and power management',
      price: 2500,
      rating: 4.8,
      reviews: 127,
      image: '/images/equipment/server-rack.jpg',
      specs: ['42U Height', 'Dual Power Supply', 'Advanced Cooling', 'Modular Design']
    },
    {
      id: 2,
      name: 'Network Switch Pro',
      category: 'networking',
      description: '48-port gigabit network switch with PoE+ support and advanced management',
      price: 1200,
      rating: 4.6,
      reviews: 89,
      image: '/images/equipment/network-switch.jpg',
      specs: ['48 Ports', 'PoE+ Support', 'Layer 3 Management', '10G Uplinks']
    },
    {
      id: 3,
      name: 'UPS Power System',
      category: 'power',
      description: 'Uninterruptible power supply with extended runtime and monitoring',
      price: 800,
      rating: 4.7,
      reviews: 156,
      image: '/images/equipment/ups-system.jpg',
      specs: ['1500VA Capacity', 'LCD Display', 'USB Monitoring', 'Extended Runtime']
    },
    {
      id: 4,
      name: 'Liquid Cooling System',
      category: 'cooling',
      description: 'Advanced liquid cooling solution for high-performance computing',
      price: 1800,
      rating: 4.9,
      reviews: 73,
      image: '/images/equipment/liquid-cooling.jpg',
      specs: ['360mm Radiator', 'RGB Fans', 'Pump Control', 'Temperature Monitoring']
    },
    {
      id: 5,
      name: 'Enterprise Storage Array',
      category: 'storage',
      description: 'High-capacity storage array with RAID protection and hot-swap drives',
      price: 3500,
      rating: 4.5,
      reviews: 94,
      image: '/images/equipment/storage-array.jpg',
      specs: ['100TB Capacity', 'RAID 6 Support', 'Hot-Swap Drives', 'Dual Controllers']
    },
    {
      id: 6,
      name: 'Security Camera System',
      category: 'security',
      description: '4K security camera system with AI-powered motion detection',
      price: 950,
      rating: 4.4,
      reviews: 203,
      image: '/images/equipment/security-camera.jpg',
      specs: ['4K Resolution', 'AI Detection', 'Night Vision', 'Cloud Storage']
    }
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Equipment & Hardware
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover cutting-edge technology equipment, servers, networking gear, and infrastructure solutions 
            from leading manufacturers and suppliers.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors flex items-center justify-center">
              <Filter className="w-5 h-5 mr-2" />
              Advanced Filters
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zinc-800/50 text-zion-slate-light hover:bg-zinc-700/50'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map(item => (
            <div key={item.id} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105">
              {/* Equipment Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                <Server className="w-16 h-16 text-zion-cyan" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-zion-cyan text-sm font-medium uppercase tracking-wide">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-white text-sm">{item.rating}</span>
                    <span className="text-zion-slate-light text-sm ml-1">({item.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-zion-slate-light mb-4 line-clamp-2">{item.description}</p>
                
                {/* Specifications */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.specs.slice(0, 3).map((spec, index) => (
                      <span key={index} className="px-2 py-1 bg-zinc-700/50 text-zion-slate-light text-xs rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">${item.price.toLocaleString()}</div>
                  <Link
                    to={`/equipment/${item.id}`}
                    className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEquipment.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No equipment found</h3>
            <p className="text-zion-slate-light mb-6">
              Try adjusting your search criteria or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Custom Equipment Solutions?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our team can help you design and source custom equipment solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-zion-blue rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Contact Sales Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-zion-blue transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Installation Support</h3>
            <p className="text-zion-slate-light">Professional installation and setup services for all equipment</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Warranty & Support</h3>
            <p className="text-zion-slate-light">Comprehensive warranty coverage and technical support</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
            <p className="text-zion-slate-light">Tailored equipment solutions for specific requirements</p>
          </div>
        </div>
      </div>
    </div>
  );
}
