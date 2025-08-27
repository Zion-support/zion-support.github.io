import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, SortAsc, Star, ShoppingCart } from 'lucide-react';
import { Footer } from '@/components/Footer';

const EquipmentPage = () => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [filterBrand, setFilterBrand] = useState('');
  const [filterAvailability, setFilterAvailability] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [showRecommended, setShowRecommended] = useState(false);

  const categories = ['Servers', 'Networking', 'Storage', 'Workstations', 'Security'];
  const brandOptions = ['Dell', 'HP', 'Cisco', 'IBM', 'Lenovo'];
  const availabilityOptions = ['In Stock', 'Low Stock', 'Out of Stock'];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const EquipmentFilterControls = () => (
    <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground"/>
        <select 
          value={filterCategory} 
          onChange={(e) => setFilterCategory(e.target.value)} 
          className="bg-background border border-border px-3 py-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      <div className="flex items-center gap-2">
        <SortAsc className="h-4 w-4 text-muted-foreground"/>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)} 
          className="bg-background border border-border px-3 py-2 rounded"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">$</span>
        <input 
          type="number" 
          value={priceRange[0]} 
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} 
          className="w-20 bg-background border border-border px-2 py-1 rounded"
        />
        <span>-</span>
        <input 
          type="number" 
          value={priceRange[1]} 
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} 
          className="w-20 bg-background border border-border px-2 py-1 rounded"
        />
      </div>

      <Button 
        variant={showRecommended ? "default" : "outline"} 
        size="sm" 
        onClick={() => setShowRecommended(!showRecommended)}
      >
        <Star className="h-4 w-4 mr-1"/>
        {showRecommended ? "All Equipment" : "Recommended"}
      </Button>
    </div>
  );

  const EquipmentCard = ({ equipment }) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">{equipment.title}</h3>
            <p className="text-sm text-muted-foreground">{equipment.category}</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">{equipment.brand}</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-600">${equipment.price?.toLocaleString()}</div>
            <Badge variant={equipment.availability === "In Stock" ? "default" : "outline"} className="text-xs">
              {equipment.availability}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current"/>
            <span className="text-sm font-medium">{equipment.rating?.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({equipment.reviewCount} reviews)</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{equipment.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{equipment.category}</span>
          <Button size="sm">
            <ShoppingCart className="h-4 w-4 mr-1"/>
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Equipment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of enterprise-grade IT equipment, servers, networking solutions, and more.
          </p>
        </div>

        <EquipmentFilterControls />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="h-full animate-pulse">
                <CardHeader className="pb-3">
                  <div className="h-6 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                </CardContent>
              </Card>
            ))
          ) : (
            // Sample equipment data
            [
              {
                title: "Dell PowerEdge R750 Server",
                category: "Servers",
                brand: "Dell",
                price: 2499,
                availability: "In Stock",
                rating: 4.8,
                reviewCount: 127,
                description: "High-performance 2U rack server with Intel Xeon processors, perfect for enterprise workloads."
              },
              {
                title: "Cisco Catalyst 9300 Switch",
                category: "Networking",
                brand: "Cisco",
                price: 1899,
                availability: "In Stock",
                rating: 4.9,
                reviewCount: 89,
                description: "Enterprise-grade network switch with advanced security features and high throughput."
              },
              {
                title: "HP ProLiant DL380 Gen10",
                category: "Servers",
                brand: "HP",
                price: 2199,
                availability: "Low Stock",
                rating: 4.7,
                reviewCount: 156,
                description: "Reliable 2U server with excellent performance and enterprise support."
              }
            ].map((equipment, index) => (
              <EquipmentCard key={index} equipment={equipment} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EquipmentPage;
