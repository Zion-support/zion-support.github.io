<<<<<<< HEAD
import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { ArrowUp, Filter, SortAsc, Zap, TrendingUp, Star, ShoppingCart, MapPin, Package, AlertTriangle, RefreshCw } from 'lucide-react'
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll',
import { generateDatacenterEquipment, getEquipmentMarketStats, getRecommendedEquipment } from '@/utils/equipmentAutoFeedAlgorithm',
import { ProductListing } from '@/types/listings',
import { SkeletonCard } from '@/components/ui/skeleton',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import Spinner from '@/components/ui/spinner',
import { EquipmentErrorBoundary } from '@/components/EquipmentErrorBoundary',
import { useCurrency } from '@/hooks/useCurrency',
import {logErrorToProduction} from '@/utils/productionLogger',
// Enhanced initial equipment with more variety
const INITIAL_EQUIPMENT: ProductListing[] = [
  {
    id: &quot;nvidia-a100-server&quot;,
    title: &quot;NVIDIA A100 GPU Training Server&quot;,
    description: &quot;High-performance AI training server with 8x A100 GPUs, designed for demanding machine learning workloads.&quot;,
    category: &quot;AI Hardware&quot;,
    price: 85000,
    currency: &quot;$&quot;,
    brand: &quot;NVIDIA&quot;,
    specifications: [&quot;8x A100 GPUs&quot;, &quot;2TB HBM2e&quot;, &quot;NVLink&quot;],
    tags: [&quot;AI&quot;, &quot;Machine Learning&quot;, &quot;GPU&quot;],
    author: { name: &quot;NVIDIA&quot;, id: &quot;nvidia&quot; },
    images: [&quot;https://images.unsplash.com/photo-1618599515406-3e5fd8cd9a27?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-15T10:30:00.000Z&quot;,
=======
import Spinner from '@/components/ui/spinner';


// Enhanced initial equipment with more variety
const INITIAL_EQUIPMENT: ProductListing[] = [
  {_id: "nvidia-a100-server", _title: "NVIDIA A100 GPU Training Server", _description: "High-performance AI training server with 8x A100 GPUs, _designed for demanding machine learning workloads.", _category: "AI Hardware", _price: 85000, _currency: "$", _brand: "NVIDIA", _specifications: ["8x A100 GPUs", _"2TB HBM2e", _"NVLink"], _tags: ["AI", _"Machine Learning", _"GPU"], _author: { name: "NVIDIA", _id: "nvidia"},
    images: ["https://images.unsplash.com/photo-1618599515406-3e5fd8cd9a27?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:30:00.000Z",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    rating: 4.9,
    reviewCount: 27,
    location: &quot;Santa Clara, CA&quot;,
    availability: &quot;In Stock&quot;
  },
<<<<<<< HEAD
  {
    id: &quot;dell-poweredge-r750&quot;,
    title: &quot;Dell PowerEdge R750 Server&quot;,
    description: &quot;2U rack server with dual Intel Xeon processors, enterprise-grade performance for virtualization workloads.&quot;,
    category: &quot;Servers & Compute&quot;,
    price: 12500,
    currency: &quot;$&quot;,
    brand: &quot;Dell&quot;,
    specifications: [&quot;2U Rack&quot;, &quot;Dual Xeon&quot;, &quot;128GB RAM&quot;, &quot;2TB SSD&quot;],
    tags: [&quot;Server&quot;, &quot;Enterprise&quot;, &quot;Virtualization&quot;],
    author: { name: &quot;Dell&quot;, id: &quot;dell&quot; },
    images: [&quot;https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-12T14:20:00.000Z&quot;,
=======
  {_id: "dell-poweredge-r750", _title: "Dell PowerEdge R750 Server", _description: "2U rack server with dual Intel Xeon processors, _enterprise-grade performance for virtualization workloads.", _category: "Servers & Compute", _price: 12500, _currency: "$", _brand: "Dell", _specifications: ["2U Rack", _"Dual Xeon", _"128GB RAM", _"2TB SSD"], _tags: ["Server", _"Enterprise", _"Virtualization"], _author: { name: "Dell", _id: "dell"},
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-12T14:20:00.000Z",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    rating: 4.7,
    reviewCount: 34,
    location: &quot;Austin, TX&quot;,
    availability: &quot;In Stock&quot;
  },
<<<<<<< HEAD
  {
    id: &quot;cisco-nexus-9k&quot;,
    title: &quot;Cisco Nexus 9000 Switch&quot;,
    description: &quot;High-performance datacenter switch with 100GbE ports for modern cloud infrastructure.&quot;,
    category: &quot;Networking&quot;,
    price: 18500,
    currency: &quot;$&quot;,
    brand: &quot;Cisco&quot;,
    specifications: [&quot;48x 100GbE&quot;, &quot;QSFP28&quot;, &quot;Line Rate&quot;],
    tags: [&quot;Switch&quot;, &quot;100GbE&quot;, &quot;Datacenter&quot;],
    author: { name: &quot;Cisco&quot;, id: &quot;cisco&quot; },
    images: [&quot;https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-10T09:15:00.000Z&quot;,
=======
  {_id: "cisco-nexus-9k", _title: "Cisco Nexus 9000 Switch", _description: "High-performance datacenter switch with 100GbE ports for modern cloud infrastructure.", _category: "Networking", _price: 18500, _currency: "$", _brand: "Cisco", _specifications: ["48x 100GbE", _"QSFP28", _"Line Rate"], _tags: ["Switch", _"100GbE", _"Datacenter"], _author: { name: "Cisco", _id: "cisco"},
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:15:00.000Z",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    rating: 4.8,
    reviewCount: 19,
    location: &quot;San Jose, CA&quot;,
    availability: &quot;In Stock&quot;
  },
<<<<<<< HEAD
  {
    id: &quot;hpe-proliant-dl380&quot;,
    title: &quot;HPE ProLiant DL380 Gen10&quot;,
    description: &quot;Versatile 2U server optimized for compute-intensive workloads.&quot;,
    category: &quot;Servers & Compute&quot;,
    price: 14500,
    currency: &quot;$&quot;,
    brand: &quot;HPE&quot;,
    specifications: [&quot;2U Rack&quot;, &quot;Dual Xeon&quot;, &quot;256GB RAM&quot;, &quot;4TB SSD&quot;],
    tags: [&quot;Server&quot;, &quot;Enterprise&quot;, &quot;Compute&quot;],
    author: { name: &quot;HPE&quot;, id: &quot;hpe&quot; },
    images: [&quot;https://images.unsplash.com/photo-1555617981-dac388a08846?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-18T11:00:00.000Z&quot;,
=======
  {_id: "hpe-proliant-dl380", _title: "HPE ProLiant DL380 Gen10", _description: "Versatile 2U server optimized for compute-intensive workloads.", _category: "Servers & Compute", _price: 14500, _currency: "$", _brand: "HPE", _specifications: ["2U Rack", _"Dual Xeon", _"256GB RAM", _"4TB SSD"], _tags: ["Server", _"Enterprise", _"Compute"], _author: { name: "HPE", _id: "hpe"},
    images: ["https://images.unsplash.com/photo-1555617981-dac388a08846?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T11:00:00.000Z",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    rating: 4.6,
    reviewCount: 21,
    location: &quot;Houston, TX&quot;,
    availability: &quot;In Stock&quot;
  },
<<<<<<< HEAD
  {
    id: &quot;netapp-aff-a250&quot;,
    title: &quot;NetApp AFF A250 All-Flash Array&quot;,
    description: &quot;Enterprise all-flash storage system for demanding workloads.&quot;,
    category: &quot;Storage Systems&quot;,
    price: 42000,
    currency: &quot;$&quot;,
    brand: &quot;NetApp&quot;,
    specifications: [&quot;24TB Flash&quot;, &quot;NVMe&quot;, &quot;Active-Active&quot;],
    tags: [&quot;Storage&quot;, &quot;Flash&quot;, &quot;NVMe&quot;],
    author: { name: &quot;NetApp&quot;, id: &quot;netapp&quot; },
    images: [&quot;https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-18T09:45:00.000Z&quot;,
=======
  {_id: "netapp-aff-a250", _title: "NetApp AFF A250 All-Flash Array", _description: "Enterprise all-flash storage system for demanding workloads.", _category: "Storage Systems", _price: 42000, _currency: "$", _brand: "NetApp", _specifications: ["24TB Flash", _"NVMe", _"Active-Active"], _tags: ["Storage", _"Flash", _"NVMe"], _author: { name: "NetApp", _id: "netapp"},
    images: ["https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T09:45:00.000Z",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    rating: 4.7,
    reviewCount: 18,
    location: &quot;Chicago, IL&quot;,
    availability: &quot;2-3 Weeks&quot;
  },
<<<<<<< HEAD
  {
    id: &quot;arista-7050x&quot;,
    title: &quot;Arista 7050X Series Switch&quot;,
    description: &quot;High-density 10/40GbE switch for modern datacenter networks.&quot;,
    category: &quot;Networking&quot;,
    price: 23000,
    currency: &quot;$&quot;,
    brand: &quot;Arista&quot;,
    specifications: [&quot;48x10GbE&quot;, &quot;6x40GbE&quot;, &quot;Wire Speed&quot;],
    tags: [&quot;Switch&quot;, &quot;10GbE&quot;, &quot;Datacenter&quot;],
    author: { name: &quot;Arista&quot;, id: &quot;arista&quot; },
    images: [&quot;https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500&quot;],
    createdAt: &quot;2024-01-17T12:10:00.000Z&quot;,
=======
  {_id: "arista-7050x", _title: "Arista 7050X Series Switch", _description: "High-density 10/40GbE switch for modern datacenter networks.", _category: "Networking", _price: 23000, _currency: "$", _brand: "Arista", _specifications: ["48x10GbE", _"6x40GbE", _"Wire Speed"], _tags: ["Switch", _"10GbE", _"Datacenter"], _author: { name: "Arista", _id: "arista"},
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T12:10:00.000Z",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    rating: 4.5,
    reviewCount: 16,
    location: &quot;Sunnyvale, CA&quot;,
    availability: &quot;In Stock&quot;
  }
],

// Market insights component
<<<<<<< HEAD
const EquipmentMarketInsights = ({ stats }: { stats: any }) => (
  <Card className=&quot;bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6&quot;>
    <CardContent className=&quot;p-6&quot;>
      <div className=&quot;flex items-center gap-2 mb-4&quot;>
        <TrendingUp className=&quot;h-5 w-5 text-blue-400&quot; />
        <h3 className=&quot;text-lg font-semibold&quot;>Equipment Market Insights</h3>
      </div>
      <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-blue-400&quot;>${Math.round(stats.averagePrice / 1000)}k</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Price</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-green-400&quot;>{stats.averageRating.toFixed(1)}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Rating</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-purple-400&quot;>{stats.totalEquipment}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Total Items</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-orange-400&quot;>{stats.inStockCount}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>In Stock</div>
=======
const _EquipmentMarketInsights = (_{_stats}: {_stats: unknown}) => (
  <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold">Equipment Market Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${_Math.round(stats.averagePrice / 1000)}k</div>
          <div className="text-sm text-muted-foreground">Avg Price</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{_stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{_stats.totalEquipment}</div>
          <div className="text-sm text-muted-foreground">Total Items</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{_stats.inStockCount}</div>
          <div className="text-sm text-muted-foreground">In Stock</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>
    </CardContent>
  </Card>
),

// Filter controls
<<<<<<< HEAD
const EquipmentFilterControls = ({
  sortBy, setSortBy, filterCategory, setFilterCategory, categories, showRecommended, setShowRecommended, loading
}: any) => (
  <div className=&quot;flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative&quot;>
    {loading && <Spinner className=&quot;absolute right-4 top-4 h-4 w-4 text-primary&quot; />}
    <div className=&quot;flex items-center gap-2&quot;>
      <Filter className=&quot;h-4 w-4 text-muted-foreground&quot; />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className=&quot;bg-background border border-border px-3 py-2 rounded&quot;>
=======
const _EquipmentFilterControls = (_{_sortBy, _setSortBy, _filterCategory, _setFilterCategory, _categories, _showRecommended, _setShowRecommended, _loading}: unknown) => (_<div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {_loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={_filterCategory} onChange={_(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <option value="">All Categories</option>
        {_categories.map(_(cat: string) => <option key={cat} value={_cat}>{_cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
<<<<<<< HEAD
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded&quot;>
        <option value=&quot;newest&quot;>Newest First</option>
        <option value=&quot;price-low&quot;>Price: Low to High</option>
        <option value=&quot;price-high&quot;>Price: High to Low</option>
        <option value=&quot;rating&quot;>Highest Rated</option>
      </select>
    </div>
    <Button variant={showRecommended ? &quot;default&quot; : &quot;outline&quot;} size=&quot;sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1&quot; />
      {showRecommended ? &quot;All Equipment&quot; : &quot;Recommended"}
=======
      <select value={_sortBy} onChange={_(_e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
    <Button variant={_showRecommended ? "default" : "outline"} size="sm" onClick={_() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1" />
      {_showRecommended ? "All Equipment" : "Recommended"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </Button>
  </div>
),

// Equipment card
<<<<<<< HEAD
const EquipmentCard = ({ equipment, onViewDetails }: { equipment: ProductListing, onViewDetails: () => void }) => {
  const { formatPrice } = useCurrency(),
=======
const _EquipmentCard = (_{_equipment, _onViewDetails}: {_equipment: ProductListing; onViewDetails: () => void}) => {_const { formatPrice} = useCurrency();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
<<<<<<< HEAD
            <h3 className="font-semibold text-lg truncate">{equipment.title}</h3>
            <p className="text-sm text-muted-foreground">{equipment.category}</p>
            <div className="flex items-center gap-2 mt-2&quot;>
              <Badge variant=&quot;secondary" className="text-xs">{equipment.brand}</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-600&quot;>{formatPrice(equipment.price ?? 0)}</div>
            <Badge variant={equipment.availability === &quot;In Stock&quot; ? &quot;default&quot; : &quot;outline"} className="text-xs">
              {equipment.availability}
=======
            <h3 className="font-semibold text-lg truncate">{_equipment.title}</h3>
            <p className="text-sm text-muted-foreground">{_equipment.category}</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">{_equipment.brand}</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-blue-600">{_formatPrice(equipment.price ?? 0)}</div>
            <Badge variant={_equipment.availability === "In Stock" ? "default" : "outline"} className="text-xs">
              {_equipment.availability}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{_equipment.rating?.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({_equipment.reviewCount} reviews)</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{_equipment.description}</p>
        <div className="flex items-center justify-between">
<<<<<<< HEAD
          <span className="text-sm font-medium&quot;>{equipment.category}</span>
          <Button size=&quot;sm" onClick={onViewDetails}>
=======
          <span className="text-sm font-medium">{_equipment.category}</span>
          <Button size="sm" onClick={_onViewDetails}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ShoppingCart className="h-4 w-4 mr-1" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
},

// Loading grid
const _EquipmentLoadingGrid = (_{_count = 8}: {_count?: number}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {_Array.from({ length: count}).map(_(_, _i) => <SkeletonCard key={_i} />)}
  </div>
),

// Error fallback component
<<<<<<< HEAD
function EquipmentErrorFallback({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) {
  return (
    <div className="container py-8">
=======
function EquipmentErrorFallback(_{_error, _resetErrorBoundary}: {_error: Error; resetErrorBoundary: () => void}) {_return (_<div className="container py-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-8 text-center">
          <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />
          <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
          <p className="text-red-700 mb-4">
            We're having trouble loading the equipment listings. This might be a temporary issue.
          </p>
          <div className="flex gap-2 justify-center&quot;>
            <Button onClick={resetErrorBoundary} variant=&quot;outline">
              <RefreshCw className="h-4 w-4 mr-2&quot; />
              Try Again
            </Button>
<<<<<<< HEAD
            <Button onClick={() => window.location.reload()} variant=&quot;default&quot;>
=======
            <Button onClick={_() => window.location.reload()} variant="default">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Refresh Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Main component
<<<<<<< HEAD
function EquipmentPageContent() {
  const router = useRouter(),
  const [sortBy, setSortBy] = useState('newest'),
  const [filterCategory, setFilterCategory] = useState(''),
  const [showRecommended, setShowRecommended] = useState(false),

  // Generate a consistent seed based on current filters for deterministic data
  const dataSeed = useMemo(() => {
    return `equipment-${filterCategory}-${showRecommended}`
  }, [filterCategory, showRecommended]),

  const fetchEquipment = useCallback(async (page: number, limit: number) => {
    // Simulate realistic API delay
    await new Promise(resolve => setTimeout(resolve, 300)),

    try {
      // Generate consistent virtual dataset using the seed
      const VIRTUAL_DATASET_SIZE = 150,
      const baseVirtualEquipment = generateDatacenterEquipment(
        VIRTUAL_DATASET_SIZE,
        INITIAL_EQUIPMENT.length,
        dataSeed
      ),
      let fullVirtualDataset: ProductListing[] = [
        ...INITIAL_EQUIPMENT,
        ...baseVirtualEquipment
      ],

      // Deduplicate by ID in case of overlaps
      const dedupMap = new Map<string ProductListing>(),
      for (const item of fullVirtualDataset) {
        if (!dedupMap.has(item.id)) {
          dedupMap.set(item.id, item)
        }
=======
function EquipmentPageContent() {_const _router = useRouter();
  const [sortBy, _setSortBy] = useState('newest');
  const [filterCategory, _setFilterCategory] = useState('');
  const [showRecommended, _setShowRecommended] = useState(false);

  // Generate a consistent seed based on current filters for deterministic data
  const _dataSeed = useMemo__(() => {
    return `equipment-${filterCategory}-${_showRecommended}`;
  }, [filterCategory, showRecommended]);

  const _fetchEquipment = useCallback(_async (page: number, _limit: number) => {_// Simulate realistic API delay
    await new Promise(resolve => setTimeout(resolve, _300));

    try {
      // Generate consistent virtual dataset using the seed
      const _VIRTUAL_DATASET_SIZE = 150;
      const _baseVirtualEquipment = generateDatacenterEquipment(
        VIRTUAL_DATASET_SIZE, _INITIAL_EQUIPMENT.length, _dataSeed
      );
      let fullVirtualDataset: ProductListing[] = [
        ...INITIAL_EQUIPMENT, _...baseVirtualEquipment
      ];

      // Deduplicate by ID in case of overlaps
      const _dedupMap = new Map<string, _ProductListing>();
      for (const item of fullVirtualDataset) {
        if (!dedupMap.has(item.id)) {
          dedupMap.set(item.id, _item);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
      fullVirtualDataset = Array.from(dedupMap.values()),

      // Apply category filtering
<<<<<<< HEAD
      let processedDataset = fullVirtualDataset,
      if (filterCategory) {
        processedDataset = processedDataset.filter(e => e.category === filterCategory)
      }

      // Apply recommended filtering
      if (showRecommended) {
        processedDataset = getRecommendedEquipment(processedDataset)
      }
=======
      let _processedDataset = fullVirtualDataset;
      if (filterCategory) {_processedDataset = processedDataset.filter(e => e.category === filterCategory);}

      // Apply recommended filtering
      if (showRecommended) {_processedDataset = getRecommendedEquipment(processedDataset);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Sort the processed dataset
      processedDataset.sort(_(a, _b) => {_switch (sortBy) {
          case 'price-low':
            return (a.price || 0) - (b.price || 0),
          case 'price-high':
            return (b.price || 0) - (a.price || 0),
          case 'rating':
            return (b.rating || 0) - (a.rating || 0),
          default: // 'newest'
<<<<<<< HEAD
            return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
        }
      }),

      // Slice for pagination
      const startIndex = (page - 1) * limit,
      const endIndex = startIndex + limit,
      const items = processedDataset.slice(startIndex, endIndex),

      return {
        items,
        hasMore: endIndex < processedDataset.length,
        total: processedDataset.length
      }
    } catch (error) {
      logErrorToProduction('Error in fetchEquipment:', { data: error }),
      throw new Error('Failed to load equipment data. Please try again.')
=======
            return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();}
      });

      // Slice for pagination
      const _startIndex = (page - 1) * limit;
      const _endIndex = startIndex + limit;
      const _items = processedDataset.slice(startIndex, endIndex);

      return {_items, _hasMore: endIndex < processedDataset.length, _total: processedDataset.length};
    } catch (error) {_logErrorToProduction('Error in fetchEquipment:', _{ data: error});
      throw new Error('Failed to load equipment data. Please try again.');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [sortBy, filterCategory, showRecommended, dataSeed]),

<<<<<<< HEAD
  const {
    items: equipment,
    loading,
    error,
    hasMore,
    total,
    isFetching,
    lastElementRef,
    refresh,
    scrollToTop,
    loadMore
  } = useInfiniteScrollPagination(fetchEquipment, 12),

  // Refresh when filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refresh()
    }, 100), // Small delay to prevent rapid successive refreshes
=======
  const {_items: equipment, _loading, _error, _hasMore, _total, _isFetching, _lastElementRef, _refresh, _scrollToTop, _loadMore} = useInfiniteScrollPagination(fetchEquipment, 12);

  // Refresh when filters change
  useEffect__(() => {_const _timeoutId = setTimeout__(() => {
      refresh();}, 100); // Small delay to prevent rapid successive refreshes
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return () => clearTimeout(timeoutId)
  }, [sortBy, filterCategory, showRecommended, refresh]),

<<<<<<< HEAD
  const marketStats = useMemo(() => {
    if (equipment.length === 0) return null,
    return getEquipmentMarketStats(equipment)
  }, [equipment]),

  const categories = useMemo(() => {
    // Use all possible categories, not just from current items
<<<<<<< HEAD
    return ["AI Hardware", "Servers & Compute", "Networking", "Storage Systems", "Power & Cooling"]
  }, []),
=======
    return [&quot;AI Hardware&quot;, &quot;Servers & Compute&quot;, &quot;Networking&quot;, &quot;Storage Systems&quot;, &quot;Power & Cooling"];
  }, []);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800),
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),
=======
  const _marketStats = useMemo__(() => {_if (equipment.length === 0) return null;
    return getEquipmentMarketStats(equipment);}, [equipment]);

  const _categories = useMemo__(() => {_// Use all possible categories, _not just from current items
    return ["AI Hardware", _"Servers & Compute", _"Networking", _"Storage Systems", _"Power & Cooling"];}, []);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect__(() => {_const _handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', _handleScroll);
    return () => window.removeEventListener('scroll', _handleScroll);}, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Loading state
  if (loading && equipment.length === 0) {_return (
      <div className="container py-8">
        <motion.div initial={{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Datacenter Equipment
          </h1>
          <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure</p>
        </motion.div>
        <EquipmentLoadingGrid />
      </div>
    )
  }

  // Error state
  if (error && equipment.length === 0) {_return (_<div className="container py-8">
        <div className="text-center space-y-4">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-2xl font-bold">Unable to load equipment</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{error}</p>
<<<<<<< HEAD
          <div className="flex gap-2 justify-center&quot;>
            <Button onClick={refresh} variant=&quot;outline">
=======
          <div className="flex gap-2 justify-center">
            <Button onClick={_refresh} variant="outline">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={_() => window.location.reload()}>
              Refresh Page
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <motion.div className="text-center mb-8" initial={_{ opacity: 0, _y: -20}} animate={_{ opacity: 1, _y: 0}}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Datacenter Equipment
        </h1>
        <p className="text-muted-foreground text-lg">Professional hardware for modern IT infrastructure and AI workloads</p>
      </motion.div>

      {_marketStats && (
        <motion.div initial={{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} transition={_{ delay: 0.2}}>
          <EquipmentMarketInsights stats={_marketStats} />
        </motion.div>
      )}

      <motion.div initial={_{ opacity: 0, _y: 20}} animate={_{ opacity: 1, _y: 0}} transition={_{ delay: 0.3}}>
        <EquipmentFilterControls
          sortBy={_sortBy}
          setSortBy={_setSortBy}
          filterCategory={_filterCategory}
          setFilterCategory={_setFilterCategory}
          categories={_categories}
          showRecommended={_showRecommended}
          setShowRecommended={_setShowRecommended}
          loading={_isFetching}
        />
      </motion.div>

<<<<<<< HEAD
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <AnimatePresence mode=&quot;popLayout">
          {equipment.map((item, index) => (
=======
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" initial={_{ opacity: 0}} animate={_{ opacity: 1}} transition={_{ delay: 0.4}}>
        <AnimatePresence mode="popLayout">
          {_equipment.map(_(item, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              key={item.id} 
              ref={_index === equipment.length - 1 ? lastElementRef : null}
              initial={_{ opacity: 0, _scale: 0.9}} 
              animate={_{ opacity: 1, _scale: 1}} 
              exit={_{ opacity: 0, _scale: 0.9}}
              transition={_{ delay: Math.min(index * 0.03, _0.5)}} 
              whileHover={_{ scale: 1.02}}
            >
              <EquipmentCard
                equipment={_item}
                onViewDetails={_() => {
                  if (typeof window !== 'undefined') {
                    try {
<<<<<<< HEAD
                      sessionStorage.setItem(`equipment:${item.id}`, JSON.stringify(item))
                    } catch {
                      // ignore storage errors
                    }
                  }
                  router.push(`/equipment/${item.id}`)
=======
                      sessionStorage.setItem(`equipment:${item.id}`, JSON.stringify(item));
                    } catch {_// ignore storage errors}
                  }
                  router.push(`/equipment/${_item.id}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {_(isFetching || loading) && equipment.length > 0 && (
        <motion.div className="mt-8" initial={{ opacity: 0}} animate={_{ opacity: 1}}>
          <EquipmentLoadingGrid count={_4} />
        </motion.div>
      )}

      {_hasMore && !loading && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6&quot; />
          ) : (
            <Button onClick={loadMore} variant=&quot;outline&quot; size=&quot;lg">
              Load More Equipment
            </Button>
          )}
          {_total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {equipment.length} of {_total} items
            </p>
          )}
        </div>
      )}

      {_!hasMore && equipment.length > 0 && (
        <motion.div className="text-center mt-12 py-8 border-t" initial={{ opacity: 0}} animate={_{ opacity: 1}}>
          <div className="text-muted-foreground text-lg mb-2">🏭 You've explored all available equipment!</div>
          <div className="text-sm text-muted-foreground">Showing {_equipment.length} datacenter equipment items</div>
        </motion.div>
      )}

      <AnimatePresence>
        {_showScrollTop && (
          <motion.button 
            onClick={scrollToTop} 
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={_{ opacity: 0, _scale: 0}} 
            animate={_{ opacity: 1, _scale: 1}} 
            exit={_{ opacity: 0, _scale: 0}}
            whileHover={_{ scale: 1.1}} 
            whileTap={_{ scale: 0.9}}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

// Main export with error boundary
export default function EquipmentPage() {_return (
    <EquipmentErrorBoundary>
      <EquipmentPageContent />
    </EquipmentErrorBoundary>
<<<<<<< HEAD
  )
}
=======
  );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
