import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Tag,
  FolderOpen as Category,
  SortAsc,
  SortDesc,
  Download
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
  features: string[];
  vendor: {
    name: string;
    verified: boolean;
    rating: number;
  };
  type: 'AI Tool' | 'API Service' | 'Template' | 'Plugin' | 'Dataset' | 'Course';
  status: 'Active' | 'Beta' | 'New' | 'Popular';
  downloads: number;
  lastUpdated: string;
}

const Marketplace: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Set<string>>(new Set());
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('popular');

  async function fetchProducts() {
    // Network errors are caught and logged here.
    // The error is re-thrown to be handled by react-query.
    try {
      const res = await fetch('/api/marketplace?type=all');
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      return await res.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  const addToCart = (productId: string) => {
    setCart(prev => new Set([...prev, productId]));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-green-500/20 text-green-400';
      case 'Popular':
        return 'bg-orange-500/20 text-orange-400';
      case 'Beta':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          // Filter out products that are null/undefined or lack an 'id' property
          // to prevent rendering errors and ensure data integrity for ProductCard.
          .filter(p => p && p.id)
          .map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onBuy={() => router.push(`/checkout/${p.id}`)} // Changed to router.push
            />
          ))}
      </div>
      {products.length === 0 && (
        <div className="text-center text-gray-500">
          <p>No products available.</p>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
