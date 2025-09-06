import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, Filter, Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Equipment {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  brand: string;
  inStock: boolean;
  features: string[];
}

const EquipmentPage: React.FC = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    // Mock data - in real app, this would come from API
    const mockEquipment: Equipment[] = [
      {
        id: '1',
        name: 'Dell PowerEdge R750 Server',
        description: 'High-performance rack server for enterprise workloads',
        price: 2500,
        rating: 4.8,
        reviewCount: 24,
        image: '/api/placeholder/300/200',
        category: 'servers',
        brand: 'Dell',
        inStock: true,
        features: ['Intel Xeon', '32GB RAM', '1TB SSD', 'Redundant PSU']
      },
      {
        id: '2',
        name: 'Cisco Catalyst 9300 Switch',
        description: 'Enterprise-grade network switch with advanced features',
        price: 1800,
        rating: 4.6,
        reviewCount: 18,
        image: '/api/placeholder/300/200',
        category: 'networking',
        brand: 'Cisco',
        inStock: true,
        features: ['48 Ports', 'PoE+', 'Stackable', 'Management']
      },
      {
        id: '3',
        name: 'HP ProLiant DL380 Gen10',
        description: 'Reliable server for small to medium businesses',
        price: 3200,
        rating: 4.7,
        reviewCount: 31,
        image: '/api/placeholder/300/200',
        category: 'servers',
        brand: 'HP',
        inStock: false,
        features: ['Intel Xeon', '64GB RAM', '2TB HDD', 'iLO']
      }
    ];

    setEquipment(mockEquipment);
    setLoading(false);
  }, []);

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
      default:
        return a.name.localeCompare(b.name);
    }
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>IT Equipment | Zion Tech Group</title>
        <meta name="description" content="Browse our selection of high-quality IT equipment including servers, networking gear, and enterprise hardware." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Equipment</h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional-grade IT equipment for your business needs
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Filters */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search equipment..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="servers">Servers</SelectItem>
                    <SelectItem value="networking">Networking</SelectItem>
                    <SelectItem value="storage">Storage</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-gray-600">
              {sortedEquipment.length} items found
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEquipment.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                      <CardDescription className="mb-3">
                        {item.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        ${item.price.toLocaleString()}
                      </div>
                      {!item.inStock && (
                        <Badge variant="destructive" className="mt-1">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(item.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {item.rating} ({item.reviewCount} reviews)
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="font-medium">{item.brand}</span>
                    <span className="mx-2">•</span>
                    <span className="capitalize">{item.category}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {item.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1" 
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedEquipment.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No equipment found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all categories.
              </p>
              <Button asChild>
                <Link href="/equipment">Browse All Equipment</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EquipmentPage;