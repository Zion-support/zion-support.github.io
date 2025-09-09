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

async function fetchProducts() {
  // Network errors are caught and logged here.
  // The error is re-thrown to be handled by react-query.
  try {
    const res = await fetch('/api/marketplace?type=all');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.downloads - a.downloads;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

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
}
