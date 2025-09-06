<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter  } from 'next/router';
import { useApiErrorHandling  } from '@/hooks/useApiErrorHandling';
=======
import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import ProductCard from '@/components/ProductCard';
<<<<<<< HEAD
import { useState, useEffect, useCallback, useMemo, useRef  } from 'react';
import { useTranslation  } from 'react-i18next';
import { motion, AnimatePresence  } from 'framer-motion';
import { AuthModal  } from '@/components/auth/AuthModal';
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star } from 'lucide-react'
import { SkeletonCard  } from '@/components/ui/skeleton';
import { ErrorState  } from '@/components/jobs/applications/ErrorState';
import { ProductsEmptyState  } from '@/components/marketplace/EmptyState';
import { Button  } from '@/components/ui/button';
import { Badge  } from '@/components/ui/badge';
import { Card, CardContent  } from '@/components/ui/card';
=======
<<<<<<< HEAD
import { useRouter  } from 'next/router';
import { useApiErrorHandling  } from '@/hooks/useApiErrorHandling';
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import { useRouter } from 'next/router';
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import ProductCard from '@/components/ProductCard';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthModal } from '@/components/auth/AuthModal';
import {
<<<<<<< HEAD
  ArrowUp
  Filter
  SortAsc
  Sparkles
  TrendingUp
  Star
=======
  ArrowUp,
  Filter,
  SortAsc,
  Sparkles,
  TrendingUp,;
  Star;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from 'lucide-react';
import { SkeletonCard } from '@/components/ui/skeleton';
import { ErrorState } from '@/components/jobs/applications/ErrorState';
import { ProductsEmptyState } from '@/components/marketplace/EmptyState';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import Spinner from '@/components/ui/spinner';
import { ProductListing  } from '@/types/listings';
import { useInfiniteScrollPagination  } from '@/hooks/useInfiniteScroll';
import { useToast  } from '@/hooks/use-toast';
import { useAuth  } from '@/context/auth/AuthProvider';
import { MARKETPLACE_LISTINGS  } from '@/data/listingData';
import { MAX_PRICE, MIN_PRICE  } from '@/data/marketplaceData';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
/**
 * Marketplace component props
 */
export interface MarketplaceProps {
  // All props removed - component now fetches data independently
// Market insights component
const MarketInsights: React.FC<{ stats: any }> = ({ stats }) => (

  <Card className='bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6'>
    <CardContent className='p-6'>
      <div className='flex items-center gap-2 mb-4'>
        <TrendingUp className='h-5 w-5 text-blue-400' />
        <h3 className='text-lg font-semibold'>Market Insights</h3>      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='text-center'>
          <div className='text-2xl font-bold text-blue-400'>
            ${Math.round(stats.averagePrice)}
          </div>
          <div className='text-sm text-muted-foreground'>Avg Price</div>
=======
import { useRouter } from 'next/router',;
import { useApiErrorHandling } from '@/hooks/useApiErrorHandling',;
import ProductCard from '@/components/ProductCard',;
import { useState, useEffect, useCallback, useMemo, useRef } from 'react',;
import { useTranslation } from 'react-i18next',;
import { motion, AnimatePresence } from 'framer-motion',;
import { AuthModal } from '@/components/auth/AuthModal',;
import { ArrowUp, Filter, SortAsc, Sparkles, TrendingUp, Star } from 'lucide-react';
import { SkeletonCard } from '@/components/ui/skeleton',;
import { ErrorState } from '@/components/jobs/applications/ErrorState',;
import { ProductsEmptyState } from '@/components/marketplace/EmptyState',;
import { Button } from '@/components/ui/button',;
import { Badge } from '@/components/ui/badge',;
import { Card, CardContent } from '@/components/ui/card',;
import Spinner from '@/components/ui/spinner',;
import { ProductListing } from '@/types/listings',;
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll',;
import { useToast } from '@/hooks/use-toast',;
import { useAuth } from '@/context/auth/AuthProvider',;
import { MARKETPLACE_LISTINGS } from '@/data/listingData',;
import { MAX_PRICE, MIN_PRICE } from '@/data/marketplaceData',;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
/**;
 * Marketplace component props;
 */;
export interface MarketplaceProps {;
  // All props removed - component now fetches data independently;
}

// Market insights component
const MarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Market Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${Math.round(stats.averagePrice)}</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalProducts}</div>
          <div className="text-sm text-muted-foreground">Products</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.categoriesCount}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
      </div>
<<<<<<< HEAD
    </CardContent>
  </Card>
<<<<<<< HEAD
);
=======
<<<<<<< HEAD
    </CardContent>;
  </Card>;
);

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Filter and sort controls
const FilterControls: React.FC<{
  sortBy: string;
  setSortBy: (sort: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  categories: string[];
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minAiScore: number;
  setMinAiScore: (score: number) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  filterAvailability: string;
  setFilterAvailability: (value: string) => void;
  availabilityOptions: string[];
  filterLocation: string;
  setFilterLocation: (value: string) => void;
  locations: string[];
  showRecommended: boolean;
  setShowRecommended: (show: boolean) => void;
  loading: boolean;}> = ({
<<<<<<< HEAD
  sortBy
  setSortBy
  filterCategory
  setFilterCategory
  categories
  priceRange
  setPriceRange
  minAiScore
  setMinAiScore
  minRating
  setMinRating
  filterAvailability
  setFilterAvailability
  availabilityOptions
  filterLocation
  setFilterLocation
  locations
  showRecommended
  setShowRecommended
  loading
}) => (
  <div className='flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative'>
    {loading && (
      <Spinner className='absolute right-4 top-4 h-4 w-4 text-primary' />
    )}
    <div className='flex items-center gap-2'>
      <Filter className='h-4 w-4 text-muted-foreground' />
      <select
        value={filterCategory}
        onChange={e => setFilterCategory(e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >
        <option value=''>All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    <div className='flex items-center gap-2'>
      <SortAsc className='h-4 w-4 text-muted-foreground' />
      <select
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >
        <option value='newest'>Newest First</option>
        <option value='price-low'>Price: Low to High</option>
        <option value='price-high'>Price: High to Low</option>
        <option value='rating'>Highest Rated</option>
        <option value='popular'>Most Popular</option>
        <option value='ai-score'>AI Score</option>
      </select>
    </div>
    <div className='flex items-center gap-2'>
      <span className='text-sm'>$</span>
      <input
        type='number'
        value={priceRange[0]}
        min={MIN_PRICE}
        max={priceRange[1]}
        onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
        className='w-20 bg-background border border-border px-2 py-1 rounded'
      />
      <span>-</span>
      <input
        type='number'
        value={priceRange[1]}
        min={priceRange[0]}
        max={MAX_PRICE}
        onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
        className='w-20 bg-background border border-border px-2 py-1 rounded'      />
    </div>
    <div className='flex items-center gap-2'>
      <span className='text-sm'>AI ≥</span>
      <input
        type='number'
        value={minAiScore}
        min={0}
        max={100}
        onChange={e => setMinAiScore(Number(e.target.value))}
        className='w-16 bg-background border border-border px-2 py-1 rounded'      />
    </div>
    <div className='flex items-center gap-2'>
      <span className='text-sm'>Rating ≥</span>
      <select
        value={minRating}
        onChange={e => setMinRating(Number(e.target.value))}
        className='bg-background border border-border px-2 py-1 rounded'      >
        <option value={0}>Any</option>
        <option value={5}>5</option>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
      </select>
    </div>
    <div className='flex items-center gap-2'>
      <select
        value={filterAvailability}
        onChange={e => setFilterAvailability(e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >
        <option value=''>Any Availability</option>
=======
=======
=======
    </CardContent>
  </Card>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
),

// Filter and sort controls
const FilterControls: React.FC<{
  sortBy: string,
  setSortBy: (sort: string) => void,
  filterCategory: string,
  setFilterCategory: (category: string) => void,
  categories: string[],
  priceRange: [number, number],
  setPriceRange: (range: [number, number]) => void,
  minAiScore: number,
  setMinAiScore: (score: number) => void,
  minRating: number,
  setMinRating: (rating: number) => void,
  filterAvailability: string,
  setFilterAvailability: (value: string) => void,
  availabilityOptions: string[],
  filterLocation: string,
  setFilterLocation: (value: string) => void,
  locations: string[],
  showRecommended: boolean,
  setShowRecommended: (show: boolean) => void,
  loading: boolean
}> = ({
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  priceRange,
  setPriceRange,
  minAiScore,
  setMinAiScore,
  minRating,
  setMinRating,
  filterAvailability,
  setFilterAvailability,
  availabilityOptions,
  filterLocation,
  setFilterLocation,
  locations,
  showRecommended,
  setShowRecommended,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  loading,
}) => (
  <div className='flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative'>
    {loading && (
      <Spinner className='absolute right-4 top-4 h-4 w-4 text-primary' />
    )}
    <div className='flex items-center gap-2'>
      <Filter className='h-4 w-4 text-muted-foreground' />
      <select
        value={filterCategory}
        onChange={e => setFilterCategory(e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >
        <option value=''>All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    <div className='flex items-center gap-2'>
      <SortAsc className='h-4 w-4 text-muted-foreground' />
      <select
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >
        <option value='newest'>Newest First</option>
        <option value='price-low'>Price: Low to High</option>
        <option value='price-high'>Price: High to Low</option>
        <option value='rating'>Highest Rated</option>
        <option value='popular'>Most Popular</option>
        <option value='ai-score'>AI Score</option>
      </select>
    </div>
    <div className='flex items-center gap-2'>
      <span className='text-sm'>$</span>
      <input
        type='number'
        value={priceRange[0]}
        min={MIN_PRICE}
        max={priceRange[1]}
        onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
        className='w-20 bg-background border border-border px-2 py-1 rounded'
      />
      <span>-</span>
      <input
        type='number'
        value={priceRange[1]}
        min={priceRange[0]}
        max={MAX_PRICE}
        onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
        className='w-20 bg-background border border-border px-2 py-1 rounded'      />
    </div>
    <div className='flex items-center gap-2'>
      <span className='text-sm'>AI ≥</span>
      <input
        type='number'
        value={minAiScore}
        min={0}
        max={100}
        onChange={e => setMinAiScore(Number(e.target.value))}
        className='w-16 bg-background border border-border px-2 py-1 rounded'      />
    </div>
    <div className='flex items-center gap-2'>
      <span className='text-sm'>Rating ≥</span>
      <select
        value={minRating}
        onChange={e => setMinRating(Number(e.target.value))}
        className='bg-background border border-border px-2 py-1 rounded'      >
        <option value={0}>Any</option>
        <option value={5}>5</option>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
      </select>
    </div>
    <div className='flex items-center gap-2'>
      <select
        value={filterAvailability}
        onChange={e => setFilterAvailability(e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >
        <option value=''>Any Availability</option>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  loading
}) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>;
    </div>;
    <div className="flex items-center gap-2">;
      <SortAsc className="h-4 w-4 text-muted-foreground" />;
      <select;
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="popular">Most Popular</option>
        <option value="ai-score">AI Score</option>
      </select>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">$</span>
      <input
        type="number"
        value={priceRange[0]}
        min={MIN_PRICE}
        max={priceRange[1]}
        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
      <span>-</span>
      <input
        type="number"
        value={priceRange[1]}
        min={priceRange[0]}
        max={MAX_PRICE}
        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        className="w-20 bg-background border border-border px-2 py-1 rounded"
      />
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">AI ≥</span>
      <input
        type="number"
        value={minAiScore}
        min={0}
        max={100}
        onChange={(e) => setMinAiScore(Number(e.target.value))}
        className="w-16 bg-background border border-border px-2 py-1 rounded";
      />;
    </div>;
    <div className="flex items-center gap-2">;
      <span className="text-sm">Rating ≥</span>;
      <select;
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
        className="bg-background border border-border px-2 py-1 rounded";
      >;
        <option value={0}>Any</option>;
        <option value={5}>5</option>;
        <option value={4}>4</option>;
        <option value={3}>3</option>;
        <option value={2}>2</option>;
        <option value={1}>1</option>;
      </select>;
    </div>;
    <div className="flex items-center gap-2">;
      <select;
        value={filterAvailability}
        onChange={(e) => setFilterAvailability(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">Any Availability</option>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {availabilityOptions.map(opt => (
          <option key={opt} value={opt as string}>{opt}</option>
        ))}
      </select>
    </div>
<<<<<<< HEAD
    <div className='flex items-center gap-2'>
      <select
        value={filterLocation}
        onChange={e => setFilterLocation(e.target.value)}
        className='bg-background border border-border px-3 py-2 rounded'      >
        <option value=''>All Locations</option>
=======

    <div className="flex items-center gap-2">
      <select
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Locations</option>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {locations.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
    <Button
<<<<<<< HEAD
      variant={showRecommended ? 'default' : 'outline'}
      size='sm'
      onClick={() => setShowRecommended(!showRecommended)}
      className='flex items-center gap-2'    >
      <Sparkles className='h-4 w-4' />
      {showRecommended ? 'All Products' : 'Recommended'}
<<<<<<< HEAD
    </Button>
  </div>
);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      variant={showRecommended ? "default" : "outline"}
      size="sm"
      onClick={() => setShowRecommended(!showRecommended)}
      className="flex items-center gap-2"
    >
      <Sparkles className="h-4 w-4" />
      {showRecommended ? "All Products" : "Recommended"}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </Button>
  </div>
),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Enhanced Marketplace component with infinite scroll and AI product generation
 * Uses the auto-feed algorithm to continuously generate IT and AI products
 * Includes intelligent filtering, sorting, and recommendation features
 */
<<<<<<< HEAD
}

=======
<<<<<<< HEAD
export default function Marketplace() {;
  const router = useRouter();
  const { t } = useTranslation();
  const { toast } = useToast();
  const { isAuthenticated, user } = useAuth();
  const firstRenderRef = useRef(true);
  const isRefreshingAfterFilterChange = useRef(false); // New ref to track refresh state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function Marketplace() {
<<<<<<< HEAD
  const router = useRouter();
  const { t } = useTranslation();
  const { toast } = useToast();
  const { isAuthenticated, user } = useAuth();
  const firstRenderRef = useRef(true);
  const isRefreshingAfterFilterChange = useRef(false); // New ref to track refresh state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    MIN_PRICE
    MAX_PRICE
  ]);
  const [minAiScore, setMinAiScore] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [filterAvailability, setFilterAvailability] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const { handleApiError, retryQuery } = useApiErrorHandling();
=======
  const router = useRouter(),
  const { t } = useTranslation(),
  const { toast } = useToast(),
  const { isAuthenticated, user } = useAuth(),
  const firstRenderRef = useRef(true),
  const isRefreshingAfterFilterChange = useRef(false), // New ref to track refresh state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  const [sortBy, setSortBy] = useState('newest'),
  const [filterCategory, setFilterCategory] = useState(''),
  const [showRecommended, setShowRecommended] = useState(false),
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]),
  const [minAiScore, setMinAiScore] = useState(0),
  const [minRating, setMinRating] = useState(0),
  const [filterAvailability, setFilterAvailability] = useState(''),
  const [filterLocation, setFilterLocation] = useState(''),
  const { handleApiError, retryQuery } = useApiErrorHandling(),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Handle Add Product button with authentication check
  const handleAddProduct = useCallback(() => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true), // Use the new auth modal
      return
    }
    // Check if user has permission to add products (simplified to admin check)
    if (user && user.userType !== 'admin') {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: 'Admin Access Required'
=======
        title: 'Admin Access Required',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        description:
          'Only administrators can add products to the marketplace. Please contact an administrator.'
        variant: 'destructive'
      });
      return;
    }
    // Navigate to admin products page
    router.push('/admin/products');
  }, [isAuthenticated, user, router, toast]);
  // Fetch function for infinite scroll with AI product generation
  const fetchProducts = useCallback(
    async (page: number, limit: number) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      try {
        // Use static marketplace listings data for now (compatible with ProductListing type)
        const params = {
          page
          limit
          ...(filterCategory && { category: filterCategory })
          sort: sortBy
        }
        logInfo(
          'Marketplace.tsx: Fetching products using static data with params:'
          { data: params }
        );
        // Use static data that's already of type ProductListing[]
        let items: ProductListing[] = [...MARKETPLACE_LISTINGS];
        // Apply category filter from params
        if (filterCategory) {
          items = items.filter(
            p => p.category.toLowerCase() === filterCategory.toLowerCase()
          );        }
        logInfo(
          'Marketplace.tsx: Raw items from static data before filtering/sorting:'
          { data: JSON.stringify(items.slice(0, 5), null, 2) }
        );
        if (showRecommended) {
          items = items.filter(p => p.rating != null && p.rating >= 4.3);
        }
        items = items.filter(p => {
          const price = p.price |0;
          const ai = p.aiScore |0;
          const rating = p.rating |0;
          const location = (p.location |'').toLowerCase();
          const availability = (p.availability |'').toLowerCase();
          return (
            price >= priceRange[0] &&
            price <= priceRange[1] &&
            ai >= minAiScore &&
            rating >= minRating &&
            (!filterLocation |
              location.includes(filterLocation.toLowerCase())) &&
            (!filterAvailability |
              availability === filterAvailability.toLowerCase())
          );
        });
        items.sort((a, b) => {
          switch (sortBy) {
            case 'price-low':
              return (a.price |0) - (b.price |0);
            case 'price-high':
              return (b.price |0) - (a.price |0);
            case 'rating':
              return (b.rating |0) - (a.rating |0);
            case 'popular':
              return (b.reviewCount |0) - (a.reviewCount |0);
            case 'ai-score':
              return (b.aiScore |0) - (a.aiScore |0);
            case 'newest':
            default:
              // Ensure createdAt exists and is a valid date string before parsing
              const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
              const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
              // Handle NaN cases that might arise from invalid date strings
              if (isNaN(timeB) && isNaN(timeA)) return 0; // Both invalid, treat as equal
              if (isNaN(timeB)) return -1; // b is invalid, a comes first (appears newer)
              if (isNaN(timeA)) return 1; // a is invalid, b comes first
              return timeB - timeA; // Both valid, sort by time
          }
        });
        // Apply pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedItems = items.slice(startIndex, endIndex);
        return {
          items: paginatedItems
          hasMore: endIndex < items.length
          total: items.length
        }
      } catch (err: any) {
        // Log the error and allow useInfiniteScrollPagination to handle it
        logErrorToProduction('Error in Marketplace fetchProducts:', {
          data: err
        });
        // Show more specific error messages based on the error type
        if (err.response?.status === 403) {
          logErrorToProduction('403 Forbidden error - authentication issue');
          // Don't show toast here, let the AuthModal handle it or rely on ProductCard's tooltip
        } else if (err.response?.status === 500) {
          logErrorToProduction('500 Server error');
          toast({
            title: 'Server Error'
            description:
              'The marketplace is temporarily unavailable. Please try again later.'
            variant: 'destructive'
          });
        } else {
          handleApiError(err); // This might show a toast or log to Sentry
        }
        throw err; // Re-throw to let useInfiniteScrollPagination know about the failure
      }
    }
    [
      filterCategory
      sortBy
      showRecommended
      priceRange
      minAiScore
      minRating
      filterAvailability
      filterLocation
      handleApiError
      toast
    ]
  );
  // useInfiniteScrollPagination hook
  const {
    items: products, // These are the products to render
    loading, // True when initially loading or when fetchProducts is running
    error, // Contains the error object if fetchProducts throws
    hasMore, // True if the API indicates more items are available
    isFetching, // True if fetching more items (for infinite scroll)
    lastElementRef, // Ref for the last element to trigger loading more
    refresh, // Function to reload data from page 1
    scrollToTop, // Function to scroll to the top of the page
  } = useInfiniteScrollPagination(fetchProducts, 16); // 16 items per page
  // Effect to refresh data when filters change
  useEffect((,) => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      // On initial mount, useInfiniteScrollPagination handles the first load.
      // We don't want to call refresh() here immediately if it's the very first render
      // unless specifically needed. The new effect below handles re-mounts.
      return;
    }
    logInfo('Filters changed, initiating refresh. Filters:', {
      filterCategory
      sortBy
      showRecommended
      priceRange
      minAiScore
      minRating
      filterAvailability
      filterLocation
    });
    isRefreshingAfterFilterChange.current = true; // Set flag before refresh
    refresh();
    // scrollToTop(); // Removed from here
  }, [
    filterCategory
    sortBy
    showRecommended
    priceRange
    minAiScore
    minRating
    filterAvailability
    filterLocation
    refresh
    toast
  ]); // Added all filter dependencies
  // Effect to explicitly refresh data when the component mounts or re-mounts
  useEffect(() => {
    logInfo(
      'Marketplace.tsx: Component mounted/re-mounted, calling refresh to ensure fresh data.'
    );    // We call refresh directly to ensure data is re-fetched.
    // The useInfiniteScrollPagination hook's internal logic will manage its state.
    refresh();
    // Reset firstRenderRef for the new instance of the component, so filter changes behave as expected.
    firstRenderRef.current = true;
  }, [refresh]); // `refresh` is a dependency. Ensure it's stable.
  // New effect to scroll to top AFTER products have been updated and refresh flag is set
  useEffect(() => {
    if (isRefreshingAfterFilterChange.current && !loading) {
      // Check flag and ensure loading is false
      logInfo('Refresh complete and products updated, scrolling to top.');
      scrollToTop();
      isRefreshingAfterFilterChange.current = false; // Reset flag      // Optionally, provide user feedback about the filter change
      // toast({ title: 'Filters updated', description: 'Displaying products based on new criteria.' });
    }
  }, [products, loading, scrollToTop, toast]); // Depends on products and loading state
  // Calculate market stats
  const marketStats = useMemo(() => {
    if (products.length === 0) return null;
    return {
      averagePrice:
        products.reduce((sum, p) => sum + (p.price |0), 0) / products.length
      averageRating:
        products.reduce((sum, p) => sum + (p.rating |0), 0) / products.length,      totalProducts: products.length
      categoriesCount: Array.from(new Set(products.map(p => p.category)))
        .length
    }
  }, [products]);
  // Get unique categories and other filter values
  const categories = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map(p => p.category)));
  }, []);
  const locations = useMemo(() => {
    return Array.from(
      new Set(MARKETPLACE_LISTINGS.map(p => p.location).filter(Boolean))
    );
  }, []).filter(Boolean) as string[];
  const availabilityOptions = useMemo(() => {
    return Array.from(
      new Set(MARKETPLACE_LISTINGS.map(p => p.availability).filter(Boolean))
    );
  }, []).filter(Boolean) as string[];
  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
=======
        title: "Admin Access Required",
        description: "Only administrators can add products to the marketplace. Please contact an administrator.",
        variant: "destructive"}),
      return
        className="bg-background border border-border px-3 py-2 rounded";
      >;
        <option value="">Any Availability</option>;
        {availabilityOptions.map(opt => (;
          <option key={opt} value={opt as string}>{opt}</option>;
        ))}
      </select>;
    </div>;
    <div className="flex items-center gap-2">;
      <select;
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded";
      >;
        <option value="">All Locations</option>;
        {locations.map(loc => (;
          <option key={loc} value={loc}>{loc}</option>;
        ))}
      </select>;
    </div>;
    <Button;
      variant={showRecommended ? "default" : "outline"}
      size="sm";
      onClick={() => setShowRecommended(!showRecommended)}
      className="flex items-center gap-2";
    >;
      <Sparkles className="h-4 w-4" />;
      {showRecommended ? "All Products" : "Recommended"}
    </Button>;
  </div>;
),;
/**;
 * Enhanced Marketplace component with infinite scroll and AI product generation;
 * Uses the auto-feed algorithm to continuously generate IT and AI products;
 * Includes intelligent filtering, sorting, and recommendation features;
 */;
export default function Marketplace() {;
  const router = useRouter(),;
  const { t } = useTranslation(),;
  const { toast } = useToast(),;
  const { isAuthenticated, user } = useAuth(),;
  const firstRenderRef = useRef(true),;
  const isRefreshingAfterFilterChange = useRef(false), // New ref to track refresh state;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false),;
  const [sortBy, setSortBy] = useState('newest'),;
  const [filterCategory, setFilterCategory] = useState(''),;
  const [showRecommended, setShowRecommended] = useState(false),;
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]),;
  const [minAiScore, setMinAiScore] = useState(0),;
  const [minRating, setMinRating] = useState(0),;
  const [filterAvailability, setFilterAvailability] = useState(''),;
  const [filterLocation, setFilterLocation] = useState(''),;
  const { handleApiError, retryQuery } = useApiErrorHandling(),;
  // Handle Add Product button with authentication check;
  const handleAddProduct = useCallback(() => {;
    if (!isAuthenticated) {;
      setIsAuthModalOpen(true), // Use the new auth modal;
      return;
    }
;
    // Check if user has permission to add products (simplified to admin check);
    if (user && user.userType !== 'admin') {;
      toast({;
        title: "Admin Access Required",;
        description: "Only administrators can add products to the marketplace. Please contact an administrator.",;
        variant: "destructive"}),;
      return;
    }
;
    // Navigate to admin products page;
    router.push('/admin/products');
  }, [isAuthenticated, user, router, toast]),;
  // Fetch function for infinite scroll with AI product generation;
  const fetchProducts = useCallback(async (page: number, limit: number) => {;
    await new Promise((resolve) => setTimeout(resolve, 200)),;
    try {;
      // Use static marketplace listings data for now (compatible with ProductListing type);
      const params = {;
        page,;
        limit,;
        ...(filterCategory && { category: filterCategory }),;
        sort: sortBy;
      },;
      logInfo('Marketplace.tsx: Fetching products using static data with params:', { data: params }),;
      // Use static data that's already of type ProductListing[];
      let items: ProductListing[] = [...MARKETPLACE_LISTINGS],;
      // Apply category filter from params;
      if (filterCategory) {;
        items = items.filter((p) => p.category.toLowerCase() === filterCategory.toLowerCase());
      }
;
      logInfo('Marketplace.tsx: Raw items from static data before filtering/sorting:', { data: JSON.stringify(items.slice(0, 5), null, 2) }),;
      if (showRecommended) {;
        items = items.filter((p) => p.rating != null && p.rating >= 4.3);
      }
;
      items = items.filter((p) => {;
        const price = p.price || 0,;
        const ai = p.aiScore || 0,;
        const rating = p.rating || 0,;
        const location = (p.location || '').toLowerCase(),;
        const availability = (p.availability || '').toLowerCase(),;
        return (;
          price >= priceRange[0] &&;
          price <= priceRange[1] &&;
          ai >= minAiScore &&;
          rating >= minRating &&;
          (!filterLocation || location.includes(filterLocation.toLowerCase())) &&;
          (!filterAvailability || availability === filterAvailability.toLowerCase());
        );
      }),;
      items.sort((a, b) => {;
        switch (sortBy) {;
          case 'price-low':;
            return (a.price || 0) - (b.price || 0),;
          case 'price-high':;
            return (b.price || 0) - (a.price || 0),;
          case 'rating':;
            return (b.rating || 0) - (a.rating || 0),;
          case 'popular':;
            return (b.reviewCount || 0) - (a.reviewCount || 0),;
          case 'ai-score':;
            return (b.aiScore || 0) - (a.aiScore || 0),;
          case 'newest':;
          default: // Ensure createdAt exists and is a valid date string before parsing;
            const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0,;
            const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0,;
            // Handle NaN cases that might arise from invalid date strings;
            if (isNaN(timeB) && isNaN(timeA)) return 0, // Both invalid, treat as equal;
            if (isNaN(timeB)) return -1, // b is invalid, a comes first (appears newer);
            if (isNaN(timeA)) return 1,  // a is invalid, b comes first;
            return timeB - timeA, // Both valid, sort by time;
        }
      }),;
      // Apply pagination;
      const startIndex = (page - 1) * limit,;
      const endIndex = startIndex + limit,;
      const paginatedItems = items.slice(startIndex, endIndex),;
      return {;
        items: paginatedItems,;
        hasMore: endIndex < items.length,;
        total: items.length;
      }
    } catch (err: any) {
      // Log the error and allow useInfiniteScrollPagination to handle it
      logErrorToProduction('Error in Marketplace fetchProducts:', { data: err }),
      
      // Show more specific error messages based on the error type
      if (err.response?.status === 403) {
        logErrorToProduction("403 Forbidden error - authentication issue"),
        // Don't show toast here, let the AuthModal handle it or rely on ProductCard's tooltip
      } else if (err.response?.status === 500) {
        logErrorToProduction("500 Server error"),
        toast({
          title: "Server Error", 
          description: "The marketplace is temporarily unavailable. Please try again later.",
          variant: "destructive"})
      } else {
        handleApiError(err), // This might show a toast or log to Sentry
    } catch (err: any) {;
      // Log the error and allow useInfiniteScrollPagination to handle it;
      logErrorToProduction('Error in Marketplace fetchProducts:', { data: err }),;
      // Show more specific error messages based on the error type;
      if (err.response?.status === 403) {;
        logErrorToProduction("403 Forbidden error - authentication issue"),;
        // Don't show toast here, let the AuthModal handle it or rely on ProductCard's tooltip;
      } else if (err.response?.status === 500) {;
        logErrorToProduction("500 Server error"),;
        toast({;
          title: "Server Error",;
          description: "The marketplace is temporarily unavailable. Please try again later.",;
          variant: "destructive"});
      } else {;
        handleApiError(err), // This might show a toast or log to Sentry;
      }
;
      throw err, // Re-throw to let useInfiniteScrollPagination know about the failure;
    }
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]),;
  // useInfiniteScrollPagination hook;
  const {;
    items: products, // These are the products to render;
    loading,          // True when initially loading or when fetchProducts is running;
    error,            // Contains the error object if fetchProducts throws;
    hasMore,          // True if the API indicates more items are available;
    isFetching,       // True if fetching more items (for infinite scroll);
    lastElementRef,   // Ref for the last element to trigger loading more;
    refresh,          // Function to reload data from page 1;
    scrollToTop       // Function to scroll to the top of the page;
  } = useInfiniteScrollPagination(fetchProducts, 16), // 16 items per page;
  // Effect to refresh data when filters change;
  useEffect(() => {;
    if (firstRenderRef.current) {;
      firstRenderRef.current = false,;
      // On initial mount, useInfiniteScrollPagination handles the first load.;
      // We don't want to call refresh() here immediately if it's the very first render;
      // unless specifically needed. The new effect below handles re-mounts.;
      return;
    }
    logInfo('Filters changed, initiating refresh. Filters:', { filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation }),;
    isRefreshingAfterFilterChange.current = true, // Set flag before refresh;
    refresh(),;
    // scrollToTop(), // Removed from here;
  }, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, refresh, toast]), // Added all filter dependencies;
  // Effect to explicitly refresh data when the component mounts or re-mounts;
  useEffect(() => {;
    logInfo('Marketplace.tsx: Component mounted/re-mounted, calling refresh to ensure fresh data.'),;
    // We call refresh directly to ensure data is re-fetched.;
    // The useInfiniteScrollPagination hook's internal logic will manage its state.;
    refresh(),;
    // Reset firstRenderRef for the new instance of the component, so filter changes behave as expected.;
    firstRenderRef.current = true;
  }, [refresh]), // `refresh` is a dependency. Ensure it's stable.;
  // New effect to scroll to top AFTER products have been updated and refresh flag is set;
  useEffect(() => {;
    if (isRefreshingAfterFilterChange.current && !loading) { // Check flag and ensure loading is false;
      logInfo('Refresh complete and products updated, scrolling to top.'),;
      scrollToTop(),;
      isRefreshingAfterFilterChange.current = false, // Reset flag;
      // Optionally, provide user feedback about the filter change;
      // toast({ title: 'Filters updated', description: 'Displaying products based on new criteria.' });
    }
  }, [products, loading, scrollToTop, toast]), // Depends on products and loading state;
  // Calculate market stats;
  const marketStats = useMemo(() => {;
    if (products.length === 0) return null,;
    return {;
      averagePrice: products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length,;
      averageRating: products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length,;
      totalProducts: products.length,;
      categoriesCount: Array.from(new Set(products.map(p => p.category))).length;
    }
  }, [products]),

  // Get unique categories and other filter values
  const categories = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map((p) => p.category)))
  }, []),
  const locations = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map((p) => p.location).filter(Boolean)))
  }, []).filter(Boolean) as string[],
  const availabilityOptions = useMemo(() => {
    return Array.from(new Set(MARKETPLACE_LISTINGS.map((p) => p.availability).filter(Boolean)))
  }, []).filter(Boolean) as string[],

  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Loading state with skeleton
  if (loading && products.length === 0) {
    return (
      <div className="container py-8" data-testid="marketplace-loading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          className='text-center mb-8'
        >
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            {t('marketplace.hero_title')}
          </h1>
          <p className='text-muted-foreground text-lg'>
            {t('marketplace.hero_subtitle')}
          </p>
        </motion.div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {Array.from({ length: 12 }).map((_, i) => (            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }
  // Error state with retry
  if (error && products.length === 0) {
    return (
      <div className='container py-8'>
        <div className='text-center space-y-4'>
          <ErrorState error={error} />
          <Button onClick={refresh}>Try Again</Button>
        </div>
      </div>
    );
  }
  // Empty state (only show when not loading and no products)
  if (!loading && products.length === 0 && !error) {
    return (
      <div className='container py-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-8'
        >
          <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            {t('marketplace.hero_title')}
          </h1>
          <p className='text-muted-foreground text-lg'>
            {t('marketplace.hero_subtitle')}
          </p>
        </motion.div>
        <ProductsEmptyState />
      </div>
    );
  }
  // Main marketplace render
  return (
    <div className='container py-8'>
      <AuthModal
        isOpen = {isAuthModalOpen,}
        onClose = {(,) => setIsAuthModalOpen(false),}
        returnUrl={router.asPath} // Pass current path for better UX on return;
      />
      {/* Header */}
      <motion.div
        className='text-center mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          {t('marketplace.hero_title')}
        </h1>
        <p className='text-muted-foreground text-lg'>
=======
          className="text-center mb-8";
        >;
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
            {t('marketplace.hero_title')}
          </h1>;
          <p className="text-muted-foreground text-lg">;
            {t('marketplace.hero_subtitle')}
          </p>;
        </motion.div>;
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">;
          {Array.from({ length: 12 }).map((_, i) => (;
            <SkeletonCard key={i} />;
          ))}
        </div>;
      </div>;
    );
  }
;
  // Error state with retry;
  if (error && products.length === 0) {;
    return (;
      <div className="container py-8">;
        <div className="text-center space-y-4">;
          <ErrorState error={error} />;
          <Button onClick={refresh}>;
            Try Again;
          </Button>;
        </div>;
      </div>;
    );
  }
;
  // Empty state (only show when not loading and no products);
  if (!loading && products.length === 0 && !error) {;
    return (;
      <div className="container py-8">;
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8";
        >;
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
            {t('marketplace.hero_title')}
          </h1>;
          <p className="text-muted-foreground text-lg">;
            {t('marketplace.hero_subtitle')}
          </p>;
        </motion.div>;
        <ProductsEmptyState />;
      </div>;
    );
  }
;
  // Main marketplace render;
  return (;
    <div className="container py-8">;
      <AuthModal;
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        returnUrl={router.asPath} // Pass current path for better UX on return;
      />;
      {/* Header */}
      <motion.div;
        className="text-center mb-8";
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >;
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
          {t('marketplace.hero_title')}
        </h1>;
        <p className="text-muted-foreground text-lg">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {t('marketplace.hero_subtitle')}
        </p>
      </motion.div>
      {/* Market Insights */}
      {marketStats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <MarketInsights stats={marketStats} />
        </motion.div>
      )}
      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
<<<<<<< HEAD
      >
        <FilterControls
          sortBy = {sortBy,}
          setSortBy = {setSortBy,}
          filterCategory = {filterCategory,}
          setFilterCategory = {setFilterCategory,}
          categories = {categories,}
          priceRange = {priceRange,}
          setPriceRange = {setPriceRange,}
          minAiScore = {minAiScore,}
          setMinAiScore = {setMinAiScore,}
          minRating = {minRating,}
          setMinRating = {setMinRating,}
          filterAvailability = {filterAvailability,}
          setFilterAvailability = {setFilterAvailability,}
          availabilityOptions = {availabilityOptions.filter(Boolean) as string[],}
          filterLocation = {filterLocation,}
          setFilterLocation = {setFilterLocation,}
          locations = {locations,}
          showRecommended = {showRecommended,}
          setShowRecommended = {setShowRecommended,}
          loading = {isFetching,}
        />
      </motion.div>
=======
      >;
        <FilterControls;
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minAiScore={minAiScore}
          setMinAiScore={setMinAiScore}
          minRating={minRating}
          setMinRating={setMinRating}
          filterAvailability={filterAvailability}
          setFilterAvailability={setFilterAvailability}
          availabilityOptions={availabilityOptions.filter(Boolean) as string[]}
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
          locations={locations}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />;
      </motion.div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
<<<<<<< HEAD
        <AnimatePresence mode='popLayout'>
          {products.map((product, index) => (            <motion.div
              key = {product.id,}
              ref = {index === products.length - 1 ? lastElementRef : null,}
=======
        <AnimatePresence mode="popLayout">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              ref={index === products.length - 1 ? lastElementRef : null}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}
<<<<<<< HEAD
              className='relative group'
=======
              className="relative group"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            >
              <ProductCard
                product={{
                  id: product.id
                  name: product.title
                  title: product.title
                  description: product.description |''
                  price: product.price |0
                  currency: product.currency
                  category: product.category
                  tags: product.tags
                  images: product.images
                  rating: product.rating |0
                  reviewCount: product.reviewCount |0
                  created_at: product.createdAt
                  updated_at: product.createdAt, // Use createdAt for both
<<<<<<< HEAD
<<<<<<< HEAD
                  stock: product.stock
                  in_stock: (product.stock |0) > 0
=======
                  stock: product.stock,
<<<<<<< HEAD
                  in_stock: (product.stock || 0) > 0,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                }}
                onBuy = {async () => {
                  if (!isAuthenticated) {
                    setIsAuthModalOpen(true);
                    return; // Stop further execution
                  }                  try {
                    await router.push(`/checkout/${product.id}`);
<<<<<<< HEAD
                  } catch (error) {
                    logErrorToProduction('Failed to navigate to checkout:', {
                      data: error
                    });
                    toast({
                      title: 'Navigation Error'
                      description:
                        'Could not navigate to checkout. Please try again.'
                      variant: 'destructive'
                    });
                    // Re-throw to allow ProductCard's catch to also run if needed

                    // though ProductCard will reset its state in .finally() regardless.
                    throw error;
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth
              />
              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (
                <Badge className='absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black'>
                  <Sparkles className='h-3 w-3 mr-1' />
=======
                  stock: product.stock,
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  in_stock: (product.stock || 0) > 0
                }}
                onBuy={async () => {;
                  if (!isAuthenticated) {;
                    setIsAuthModalOpen(true),;
                    return, // Stop further execution;
                  }
                  try {
                    await router.push(`/checkout/${product.id}`)
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  } catch (error) {
                    logErrorToProduction('Failed to navigate to checkout:', { data: error }),
                    toast({
                      title: "Navigation Error",
                      description: "Could not navigate to checkout. Please try again.",
                      variant: "destructive"}),
                    // Re-throw to allow ProductCard's catch to also run if needed,
                    // though ProductCard will reset its state in .finally() regardless.
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    throw error;
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth
              />

              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (
                <Badge className='absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black'>
                  <Sparkles className='h-3 w-3 mr-1' />
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    throw error
                  try {;
                    await router.push(`/checkout/${product.id}`);
                  } catch (error) {;
                    logErrorToProduction('Failed to navigate to checkout:', { data: error }),;
                    toast({;
                      title: "Navigation Error",;
                      description: "Could not navigate to checkout. Please try again.",;
                      variant: "destructive"});
                    // Re-throw to allow ProductCard's catch to also run if needed;
                    // though ProductCard will reset its state in .finally() regardless.;
                    throw error;
                  }
                }}
                buyDisabled={false} // Still false, ProductCard handles its own disabled state based on auth;
              />;
              {/* AI Score Badge */}
              {product.aiScore && product.aiScore > 90 && (;
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black">;
                  <Sparkles className="h-3 w-3 mr-1" />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  AI {product.aiScore}
                </Badge>
              )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              {/* Featured Badge */}
              {product.featured && (
                <Badge className='absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10'>
                  <Star className='h-3 w-3 mr-1' />
                  Featured
                </Badge>
=======
;
              {/* Featured Badge */}
              {product.featured && (;
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10">;
                  <Star className="h-3 w-3 mr-1" />;
                  Featured;
                </Badge>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {/* Loading More Indicator */}
<<<<<<< HEAD
<<<<<<< HEAD
      {(isFetching |loading) && (
=======
      {(isFetching || loading) && (
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <motion.div
          className='mt-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }).map((_, i) => (              <SkeletonCard key={`loading-${i}`} />
=======
      {(isFetching || loading) && (;
        <motion.div;
          className="mt-8";
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">;
            {Array.from({ length: 4 }).map((_, i) => (;
              <SkeletonCard key={`loading-${i}`} />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ))}
          </div>
        </motion.div>
      )}
      {/* End of Results */}
<<<<<<< HEAD
      {!hasMore && products.length > 0 && (
        <motion.div
          className='text-center mt-12 py-8 border-t'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='text-muted-foreground text-lg mb-2'>
            🎉 You've explored all available products!
          </div>
          <div className='text-sm text-muted-foreground'>
            Showing {products.length} AI-powered solutions
          </div>
        </motion.div>
=======
      {!hasMore && products.length > 0 && (;
        <motion.div;
          className="text-center mt-12 py-8 border-t";
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >;
          <div className="text-muted-foreground text-lg mb-2">;
            🎉 You've explored all available products!;
          </div>;
          <div className="text-sm text-muted-foreground">;
            Showing {products.length} AI-powered solutions;
          </div>;
        </motion.div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      )}
      {/* Scroll to Top Button */}
<<<<<<< HEAD
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50'            initial={{ opacity: 0, scale: 0 }}
=======
      <AnimatePresence>;
        {showScrollTop && (;
          <motion.button;
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50";
            initial={{ opacity: 0, scale: 0 }}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
<<<<<<< HEAD
          >
            <ArrowUp className='h-5 w-5 text-primary-foreground' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}//Navigate to admin products page router.push ('/admin/products') ;
}, [isAuthenticated, user, router, toast]);
//Fetch function for infinite scroll with AI product generation try {//Use static marketplace listings data for now (compatible with ProductListing type) const params = {;
  page,  limit, ... (filterCategory && {;
  category: filterCategory ;
});
sort: sortBy ;
};';
//Use static data that's already of type ProductListing[] let items: ProductListing[] = [...MARKETPLACE LISTINGS];
//Apply category filter from params return (price >= priceRange[0] && price <= priceRange[1] && ai >= minAiScore && rating >= minRating && (!filterLocation |location.includes (filterLocation.toLowerCase () ) ) && (!filterAvailability |availability === filterAvailability.toLowerCase () ) items.sort ( (a, b) => {switch (sortBy) {';
  case 'price-low': return (a.price |0) - (b.price |0);';
case 'price-high': return (b.price |0) - (a.price |0);';
case 'rating': return (b.rating |0) - (a.rating |0);';
case 'popular': return (b.reviewCount |0) - (a.reviewCount |0);';
case 'ai-score': return (b.aiScore |0) - (a.aiScore |0);';
case 'newest': ;
<<<<<<< HEAD
}else {handleApiError (err), //This might show a toast or log to Sentry ;
=======
}else {;
  handleApiError (err), //This might show a toast or log to Sentry ;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}, [filterCategory, sortBy, showRecommended, priceRange, minAiScore, minRating, filterAvailability, filterLocation, handleApiError, toast]);
//useInfiniteScrollPagination hook ;
}, [products, loading, scrollToTop, toast]), //Depends on products and loading state //Calculate market stats <motion.div initial= {{;
  opacity: 0, y: 20 ;
}animate= {{;
  opacity: 1, y: 0 ;
}";
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
  t ('marketplace.hero subtitle') ";
}</p> </motion.div> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {Array.from ({;
  length: 12 ;
}) .map ( (, i) => (<SkeletonCard key= {i ;
}/>) ) ;
}</div> </div>) ;
}//Error state with retry if (error && products.length === 0) {";
  return (<div className="container py-8"> <div className="text-center space-y-4"> <ErrorState error= {error ;
}/> <Button onClick={refresh ;
}> Try Again </Button> </div> </div>) ;
}//Empty state (only show when not loading and no products) if (!loading && products.length === 0 && !error) {";
  return (<div className="container py-8"> <motion.div initial= {{;
  opacity: 0, y: 20 ;
}animate= {{;
  opacity: 1, y: 0 ;
}";
}className="text-center mb-8"> <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
  t ('marketplace.hero subtitle') ;
}</p> </motion.div> <ProductsEmptyState /> </div>) ";
}//Main marketplace render return (<div className="container py-8"> <AuthModal isOpen= {isAuthModalOpen ;
}onClose= {() => setIsAuthModalOpen (false) ;
}returnUrl= {router.asPath ;
}//Pass current path for better UX on return /> {/* Header */ ";
}<motion.div className="text-center mb-8"initial= {{;
  opacity: 0, y: -20 ;
}animate= {{;
  opacity: 1, y: 0 ;
}";
}> <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {';
  t ('marketplace.hero title') ";
}</h1> <p className="text-muted-foreground text-lg"> {';
  t ('marketplace.hero subtitle') ;
}</p> </motion.div> {/* Market Insights */ ;
}{marketStats && (<motion.div initial= {;
  {;
  opacity: 0, y: 20 ;
}animate= {{;
  opacity: 1, y: 0 ;
}transition= {{;
  delay: 0.2 ;
}> <MarketInsights stats= {marketStats ;
}/> </motion.div>) ;
}{/* Filter Controls */ ;
}<motion.div initial= {{;
  opacity: 0, y: 20 ;
}animate= {{;
  opacity: 1, y: 0 ;
}transition= {{;
  delay: 0.3 ;
}> <FilterControls sortBy= {sortBy ;
}setSortBy= {setSortBy ;
}filterCategory= {filterCategory ;
}setFilterCategory= {setFilterCategory ;
}categories= {categories ;
}priceRange= {priceRange ;
}setPriceRange= {setPriceRange ;
}minAiScore= {minAiScore ;
}setMinAiScore= {setMinAiScore ;
}minRating= {minRating ;
}setMinRating= {setMinRating ;
}filterAvailability= {filterAvailability ;
}setFilterAvailability= {setFilterAvailability ;
}availabilityOptions= {availabilityOptions.filter (Boolean) as string[] ;
}filterLocation= {filterLocation ;
}setFilterLocation= {setFilterLocation ;
}locations= {locations ;
}showRecommended= {showRecommended ;
}setShowRecommended= {setShowRecommended ;
}loading= {isFetching ;
}/> </motion.div> {/* Product Grid */ ;
}<motion.div > <ProductCard product= {{';
  id: product.id, name: product.title, title: product.title, description: product.description |'', price: product.price |0, currency: product.currency, category: product.category, tags: product.tags, images: product.images, rating: product.rating |0, reviewCount: product.reviewCount |0, created at: product.createdAt, updated at: product.createdAt,  //Use createdAt for both stock: product.stock, in stock: (product.stock |0) > 0 ;
}onBuy= {async () => {;
  if (!isAuthenticated) {;
  //though ProductCard will reset its state in .finally () regardless. throw error ;
<<<<<<< HEAD
}buyDisabled= {false ;
}//Still false, ProductCard handles its own disabled state based on auth /> {/* AI Score Badge */ ;
=======

}buyDisabled= {;
  false ;
}//Still false, ProductCard handles its own disabled state based on auth /> {;
  /* AI Score Badge */ ;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}{";
  product.aiScore && product.aiScore > 90 && (<Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10 text-black"> <Sparkles className="h-3 w-3 mr-1"/> AI {product.aiScore ;
}</Badge>) ;
}{/* Featured Badge */ ;
}{";
  product.featured && (<Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-purple-500 z-10"> <Star className="h-3 w-3 mr-1"/> Featured </Badge>) ;
}</motion.div>) ) ;
}</AnimatePresence> </motion.div> {/* Loading More Indicator */ ;
}{";
  (isFetching |loading) && (<motion.div className="mt-8"initial= {{;
  opacity: 0 ;
}animate= {{;
  opacity: 1 ;
}";
}> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {Array.from ({;
  length: 4 ;
}) .map ( (, i) => (<SkeletonCard key= {`loading-$ {;
  i ;
}` ;
}/>) ) ;
}</div> </motion.div>) ;
}{/* End of Results */ ;
}{";
  !hasMore && products.length > 0 && (<motion.div className="text-center mt-12 py-8 border-t"initial= {{;
  opacity: 0 ;
}animate= {{;
  opacity: 1 ;
}'";
}> <div className="text-muted-foreground text-lg mb-2"> 🎉 You've explored all available products! </div> <div className="text-sm text-muted-foreground"> Showing {products.length ;
}AI-powered solutions </div> </motion.div>) ;
}{/* Scroll to Top Button */ ;
}<AnimatePresence> {showScrollTop && (<motion.button onClick={;
  scrollToTop ";
}className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"initial= {{;
  opacity: 0, scale: 0 ;
}animate= {{;
  opacity: 1, scale: 1 ;
}exit= {{;
  opacity: 0, scale: 0 ;
}whileHover= {{;
  scale: 1.1 ;
}whileTap= {{;
  scale: 0.9 ;
}";
}> <ArrowUp className="h-5 w-5 text-primary-foreground" /> </motion.button>) ;
}</AnimatePresence> </div>) ;
}'"
<<<<<<< HEAD
  )
import React from "react";
import Head from "next/head";
import Link from "next/link";
const Marketplace = () => {return (;
    <>;
      <Head>;
        <title>Marketplace - Zion Tech Group</title>;
        <meta name="description" content="Professional Marketplace services"  />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold text-gray-900 mb-8">;
              Marketplace;
            </h1>;
            <p className="text-xl text-gray-600 mb-12">;
              Professional Marketplace services and solutions;
            </p>;
            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;
    </>;
  );
}
<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          >;
            <ArrowUp className="h-5 w-5 text-primary-foreground" />;
          </motion.button>;
        )}
      </AnimatePresence>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
