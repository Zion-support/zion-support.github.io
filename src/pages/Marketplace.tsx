import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Grid3X3, ListFilter, Loader2 } from "lucide-react";
import { ProductListing } from "../types/listings";
import { toast } from "../hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { SearchSuggestion } from "../types/search";
// import styles from './Marketplace.module.css';
// import { useViewMode, ViewMode } from '../context/ViewModeContext';
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from '../components/ui/pagination';

interface ProductContainerProps {
  listings: ProductListing[];
  onRequestQuote: (id: string) => void;
}

function ProductGrid({ listings, onRequestQuote }: ProductContainerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map(listing => (
        <div key={listing.id} className="bg-slate-800 rounded-lg p-4">
          <h3 className="text-white font-semibold">{listing.title}</h3>
          <p className="text-gray-400 text-sm">{listing.description}</p>
          <Button onClick={() => onRequestQuote(listing.id)} className="mt-2">
            Request Quote
          </Button>
        </div>
      ))}
    </div>
  );
}

function ProductList({ listings, onRequestQuote }: ProductContainerProps) {
  return (
    <div className="space-y-4">
      {listings.map(listing => (
        <div key={listing.id} className="bg-slate-800 rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 className="text-white font-semibold">{listing.title}</h3>
            <p className="text-gray-400 text-sm">{listing.description}</p>
          </div>
          <Button onClick={() => onRequestQuote(listing.id)}>
            Request Quote
          </Button>
        </div>
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-slate-800 rounded-lg p-4 animate-pulse">
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-3 bg-slate-700 rounded mb-4"></div>
      <div className="h-8 bg-slate-700 rounded"></div>
    </div>
  );
}

function ErrorState({ error }: { error: Error }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-white mb-2">Error Loading Products</h2>
      <p className="text-gray-400">{error.message}</p>
    </div>
  );
}

export default function Marketplace() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [products, setProducts] = useState<ProductListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [minAiScore, setMinAiScore] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [filterLocation, setFilterLocation] = useState('');
  const [filterAvailability, setFilterAvailability] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockProducts: ProductListing[] = Array.from({ length: 24 }, (_, i) => ({
          id: `product-${i + 1}`,
          title: `Product ${i + 1}`,
          description: `Description for product ${i + 1}`,
          price: Math.floor(Math.random() * 5000) + 100,
          category: ['AI', 'Cloud', 'Security', 'Analytics'][Math.floor(Math.random() * 4)],
          rating: Math.floor(Math.random() * 5) + 1,
          aiScore: Math.floor(Math.random() * 100),
          location: ['US', 'EU', 'Asia'][Math.floor(Math.random() * 3)],
          availability: ['Available', 'Limited', 'Coming Soon'][Math.floor(Math.random() * 3)],
          imageUrl: `https://picsum.photos/300/200?random=${i + 1}`,
          tags: ['AI', 'Cloud', 'Security'].slice(0, Math.floor(Math.random() * 3) + 1),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }));
        
        setProducts(mockProducts);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let items = products;

    if (searchTerm) {
      items = items.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      items = items.filter(p => p.category === selectedCategory);
    }

    items = items.filter((p) => {
      const price = p.price || 0;
      const ai = p.aiScore || 0;
      const rating = p.rating || 0;
      const location = (p.location || '').toLowerCase();
      const availability = (p.availability || '').toLowerCase();
      return (
        price >= priceRange[0] &&
        price <= priceRange[1] &&
        ai >= minAiScore &&
        rating >= minRating &&
        (!filterLocation || location.includes(filterLocation.toLowerCase())) &&
        (!filterAvailability || availability === filterAvailability.toLowerCase())
      );
    });

    return items;
  }, [products, searchTerm, selectedCategory, priceRange, minAiScore, minRating, filterLocation, filterAvailability]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleRequestQuote = (productId: string) => {
    toast({
      title: "Quote Requested",
      description: `Quote requested for product ${productId}`,
    });
    navigate('/contact');
  };

  const refresh = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">{t('marketplace.title')}</h1>
          <p className="text-zion-slate-light">
            {t('marketplace.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </main>
    );
  }

  if (error && products.length === 0) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <ErrorState error={error} />
          <Button onClick={refresh}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">{t('marketplace.title')}</h1>
        <p className="text-zion-slate-light">
          {t('marketplace.description')}
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>
        
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'grid' ? "default" : "outline"}
            onClick={() => setViewMode('grid')}
            size="sm"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? "default" : "outline"}
            onClick={() => setViewMode('list')}
            size="sm"
          >
            <ListFilter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
        >
          <option value="all">All Categories</option>
          <option value="AI">AI</option>
          <option value="Cloud">Cloud</option>
          <option value="Security">Security</option>
          <option value="Analytics">Analytics</option>
        </select>
      </div>

      {viewMode === 'grid' ? (
        <ProductGrid listings={paginatedProducts} onRequestQuote={handleRequestQuote} />
      ) : (
        <ProductList listings={paginatedProducts} onRequestQuote={handleRequestQuote} />
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
              >
                {page}
              </Button>
            ))}
            
            <Button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}