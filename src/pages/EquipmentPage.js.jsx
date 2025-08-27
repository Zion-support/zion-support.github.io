import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ShoppingCart, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function EquipmentPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['all', 'AI Hardware', 'Networking', 'Security', 'Storage', 'Workstations', 'Servers'];
  
  const equipment = [
    {
      id: 1,
      name: 'AI-Powered Workstation Pro',
      description: 'High-performance workstation optimized for AI development and machine learning',
      category: 'AI Hardware',
      price: 2499,
      rating: 4.8,
      reviewCount: 127,
      availability: 'In Stock',
      brand: 'ZionTech',
      image: '/images/equipment/ai-workstation.jpg'
    },
    {
      id: 2,
      name: 'Enterprise Network Switch',
      description: '24-port managed switch with advanced security features and VLAN support',
      category: 'Networking',
      price: 899,
      rating: 4.6,
      reviewCount: 89,
      availability: 'In Stock',
      brand: 'ZionTech',
      image: '/images/equipment/network-switch.jpg'
    },
    {
      id: 3,
      name: 'Cybersecurity Firewall',
      description: 'Next-generation firewall with AI-powered threat detection and prevention',
      category: 'Security',
      price: 1599,
      rating: 4.9,
      reviewCount: 156,
      availability: 'Limited Stock',
      brand: 'ZionTech',
      image: '/images/equipment/firewall.jpg'
    },
    {
      id: 4,
      name: 'High-Performance Storage Array',
      description: 'Enterprise-grade storage solution with RAID protection and hot-swappable drives',
      category: 'Storage',
      price: 3499,
      rating: 4.7,
      reviewCount: 94,
      availability: 'In Stock',
      brand: 'ZionTech',
      image: '/images/equipment/storage-array.jpg'
    }
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedEquipment = [...filteredEquipment].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
      <SEO 
        title="Equipment & Hardware - Zion Tech Group" 
        description="High-quality IT equipment, AI hardware, networking devices, and enterprise solutions. Professional-grade technology for your business needs." 
        keywords="IT equipment, AI hardware, networking, cybersecurity, enterprise hardware, Zion Tech Group" 
        canonical="https://ziontechgroup.com/equipment"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Equipment
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              High-quality IT equipment, AI hardware, and enterprise solutions. 
              Professional-grade technology to power your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                <Phone className="w-5 h-5 mr-2"/>
                Call +1 302 464 0950
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <Mail className="w-5 h-5 mr-2"/>
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-blue-200"/>
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-blue-200"/>
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-blue-200"/>
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                <Input 
                  placeholder="Search equipment..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-blue-400"
                />
              </div>
            </div>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)} 
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-blue-400 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)} 
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-blue-400 focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Equipment Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {sortedEquipment.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No equipment found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search criteria or browse all categories</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }} 
                className="bg-blue-600 hover:bg-blue-700"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-300">
                  Showing <span className="text-blue-400 font-medium">{sortedEquipment.length}</span> of{' '}
                  <span className="text-blue-400 font-medium">{equipment.length}</span> items
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {sortedEquipment.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg text-white truncate">{item.name}</h3>
                            <p className="text-sm text-gray-300">{item.category}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs bg-blue-600/20 text-blue-300 border-blue-600/30">
                                {item.brand}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-blue-400">${item.price?.toLocaleString()}</div>
                            <Badge 
                              variant={item.availability === "In Stock" ? "default" : "outline"} 
                              className={`text-xs ${
                                item.availability === "In Stock" 
                                  ? "bg-green-600 text-white" 
                                  : "border-yellow-400 text-yellow-400"
                              }`}
                            >
                              {item.availability}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current"/>
                            <span className="text-sm font-medium text-white">{item.rating?.toFixed(1)}</span>
                            <span className="text-xs text-gray-400">({item.reviewCount} reviews)</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-3 line-clamp-2">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-blue-300">{item.category}</span>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <ShoppingCart className="h-4 w-4 mr-1"/>
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Custom Equipment Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team can help you find the perfect equipment for your specific needs. 
            Contact us for personalized recommendations and custom configurations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2"/>
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2"/>
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
