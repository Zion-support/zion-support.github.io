import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  SortAsc, 
  Star, 
  ShoppingCart, 
  Package, 
  Zap, 
  Shield, 
  Cpu, 
  HardDrive,
  Monitor,
  Server,
  Brain,
  Cloud
} from 'lucide-react';

const EquipmentPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cloud & Infrastructure',
    'Cybersecurity',
    'Networking',
    'Storage & Backup',
    'Workstations & Laptops',
    'Mobile Devices'
  ];

  const equipmentItems = [
    {
      id: 1,
      title: "NVIDIA DGX A100 AI Workstation",
      category: "AI & Machine Learning",
      description: "High-performance AI workstation with 8x A100 GPUs for deep learning and machine learning workloads",
      price: 199999,
      brand: "NVIDIA",
      availability: "In Stock",
      rating: 4.9,
      reviewCount: 127,
      image: "/images/equipment/dgx-a100.jpg",
      features: ["8x A100 GPUs", "2TB RAM", "NVMe Storage", "AI-Optimized"]
    },
    {
      id: 2,
      title: "Dell PowerEdge R750 Server",
      category: "Cloud & Infrastructure",
      description: "Enterprise-grade server with Intel Xeon processors for cloud infrastructure and virtualization",
      price: 15999,
      brand: "Dell",
      availability: "In Stock",
      rating: 4.7,
      reviewCount: 89,
      image: "/images/equipment/poweredge-r750.jpg",
      features: ["Dual Xeon", "256GB RAM", "RAID Storage", "Redundant PSU"]
    },
    {
      id: 3,
      title: "Cisco Catalyst 9300 Switch",
      category: "Networking",
      description: "Advanced network switch with SD-Access capabilities for enterprise networking",
      price: 8999,
      brand: "Cisco",
      availability: "Limited Stock",
      rating: 4.8,
      reviewCount: 156,
      image: "/images/equipment/catalyst-9300.jpg",
      features: ["48-Port PoE", "SD-Access", "Stackable", "Advanced Security"]
    },
    {
      id: 4,
      title: "HP Z8 G4 Workstation",
      category: "Workstations & Laptops",
      description: "Professional workstation with Intel Xeon processors for content creation and engineering",
      price: 12999,
      brand: "HP",
      availability: "In Stock",
      rating: 4.6,
      reviewCount: 73,
      image: "/images/equipment/z8-g4.jpg",
      features: ["Xeon W-3275", "128GB RAM", "Quadro RTX", "Thunderbolt 3"]
    },
    {
      id: 5,
      title: "Synology DiskStation DS1821+",
      category: "Storage & Backup",
      description: "8-bay NAS storage solution for enterprise backup and data management",
      price: 999,
      brand: "Synology",
      availability: "In Stock",
      rating: 4.9,
      reviewCount: 234,
      image: "/images/equipment/ds1821.jpg",
      features: ["8-Bay NAS", "10GbE", "BTRFS", "Active Backup"]
    },
    {
      id: 6,
      title: "Apple MacBook Pro 16\" M2 Max",
      category: "Mobile Devices",
      description: "Professional laptop with M2 Max chip for developers and creative professionals",
      price: 3499,
      brand: "Apple",
      availability: "In Stock",
      rating: 4.8,
      reviewCount: 189,
      image: "/images/equipment/macbook-pro-16.jpg",
      features: ["M2 Max", "32GB RAM", "1TB SSD", "Liquid Retina XDR"]
    }
  ];

  const filteredEquipment = equipmentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
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

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Brain className="h-6 w-6 text-blue-400" />;
      case 'Cloud & Infrastructure':
        return <Cloud className="h-6 w-6 text-green-400" />;
      case 'Cybersecurity':
        return <Shield className="h-6 w-6 text-red-400" />;
      case 'Networking':
        return <Zap className="h-6 w-6 text-yellow-400" />;
      case 'Storage & Backup':
        return <HardDrive className="h-6 w-6 text-purple-400" />;
      case 'Workstations & Laptops':
        return <Monitor className="h-6 w-6 text-cyan-400" />;
      case 'Mobile Devices':
        return <Package className="h-6 w-6 text-orange-400" />;
      default:
        return <Server className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <Package className="h-12 w-12 text-blue-400"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise Equipment & Hardware
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High-performance AI workstations, servers, networking equipment, and enterprise hardware 
              to power your technology infrastructure.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-gray-400"
                />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEquipment.map((item) => (
              <Card key={item.id} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all hover:transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        {getCategoryIcon(item.category)}
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-white line-clamp-2">
                        {item.title}
                      </CardTitle>
                      <p className="text-sm text-gray-400 mt-1">{item.brand}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">
                        ${item.price.toLocaleString()}
                      </div>
                      <Badge 
                        variant={item.availability === "In Stock" ? "default" : "secondary"} 
                        className="text-xs mt-1"
                      >
                        {item.availability}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current"/>
                      <span className="text-sm font-medium text-white">{item.rating.toFixed(1)}</span>
                      <span className="text-xs text-gray-400">({item.reviewCount} reviews)</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-medium text-white">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{item.category}</span>
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link to={`/equipment/${item.id}`}>
                        <ShoppingCart className="h-4 w-4 mr-1"/>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedEquipment.length === 0 && (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-white mb-2">No equipment found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800/50 rounded-2xl p-12 border border-slate-700 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Need Custom Equipment Solutions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team can help you design and configure custom hardware solutions tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/contact">
                    Contact Our Team
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-700">
                  <Link to="/request-quote">
                    Request Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentPage;
