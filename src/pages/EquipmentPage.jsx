import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, SortAsc, Star, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const EquipmentPage = () => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const categories = ['Computers', 'Networking', 'Storage', 'Security'];
  const brandOptions = ['Dell', 'HP', 'Cisco', 'NetApp'];
  const availabilityOptions = ['In Stock', 'Out of Stock', 'Pre-order'];

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">Equipment & Hardware</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Browse our selection of high-quality IT equipment and hardware solutions
          </p>
          
          <EquipmentFilterControls />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>No equipment available</div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EquipmentPage;
