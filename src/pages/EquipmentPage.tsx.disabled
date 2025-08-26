import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { useEffect, useState } from "react";
import { generateRandomEquipment } from "@/utils/generateRandomEquipment";
import { Button } from "@/components/ui/button";
import { ProductListingCard } from "@/components/ProductListingCard";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AuthGuard } from "@/components/AuthGuard";
import { Skeleton } from "@/components/ui/skeleton";

// Sample datacenter equipment listings
// const EQUIPMENT_LISTINGS: ProductListing[] = [ // Keep for fallback or remove if not needed after API is stable
  {
    id: "2u-rack-mount-server",
    title: "2U Rack Mount Server",
    description:
      "High‑density server optimized for virtualization and private cloud deployments.",
    category: "Servers",
    price: 4200,
    currency: "$",
    tags: ["Xeon", "64GB RAM", "Dual PSU"],
    author: {
      name: "DataCore",
      id: "datacore",
      avatarUrl:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1585079548264-ef0c62f1db1f?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-01T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 23,
  },
  {
    id: "10gbe-switch",
    title: "48‑Port 10GbE Switch",
    description:
      "Enterprise switch delivering ultra‑low latency for mission critical applications.",
    category: "Networking",
    price: 6800,
    currency: "$",
    tags: ["Layer 3", "SFP+", "Managed"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "https://images.unsplash.com/photo-1587202372775-67d85b1cce31?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-05T12:30:00.000Z",
    rating: 4.7,
    reviewCount: 15,
  },
  {
    id: "intelligent-pdu",
    title: "Intelligent Rack PDU",
    description:
      "Remotely monitor power consumption with per‑outlet switching and metering.",
    category: "Power",
    price: 950,
    currency: "$",
    tags: ["Remote", "Metered", "24 Outlets"],
    author: {
      name: "PowerHub",
      id: "powerhub",
    },
    images: [
      "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-18T09:15:00.000Z",
    rating: 4.9,
    reviewCount: 32,
  },
  {
    id: "modular-ups",
    title: "Modular Online UPS",
    description:
      "Scalable uninterrupted power supply with hot‑swappable battery modules.",
    category: "Power",
    price: 8200,
    currency: "$",
    tags: ["Hot Swap", "Scalable", "LCD"],
    author: {
      name: "VoltSecure",
      id: "voltsecure",
      avatarUrl:
        "https://images.unsplash.com/photo-1615938073495-85f5e52db08e?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1615938073495-85f5e52db08e?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-01-22T11:45:00.000Z",
    rating: 4.6,
    reviewCount: 12,
  },
  {
    id: "fiber-patch-panel",
    title: "24‑Port Fiber Patch Panel",
    description:
      "Rack mount patch panel with LC connectors for organized fiber management.",
    category: "Networking",
    price: 480,
    currency: "$",
    tags: ["LC", "1U", "Cable Management"],
    author: {
      name: "FiberLink",
      id: "fiberlink",
    },
    images: [
      "https://images.unsplash.com/photo-1552508744-1696a1be6c54?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-02T14:20:00.000Z",
    rating: 4.5,
    reviewCount: 9,
  },
  {
    id: "precision-cooling",
    title: "Precision Airflow Cooling Unit",
    description:
      "Efficient cooling system designed to maintain optimal rack temperature.",
    category: "Cooling",
    price: 5400,
    currency: "$",
    tags: ["Rack Mount", "Variable Speed", "Energy Efficient"],
    author: {
      name: "CoolWorks",
      id: "coolworks",
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100",
    },
    images: [
      "https://images.unsplash.com/photo-1581093588401-1cfe5f157568?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-10T08:10:00.000Z",
    rating: 4.7,
    reviewCount: 18,
  },
  {
    id: "blade-server-chassis",
    title: "Blade Server Chassis",
    description:
      "High‑density chassis supporting up to 8 hot-swappable blades for scalable compute.",
    category: "Servers",
    price: 9200,
    currency: "$",
    tags: ["8 Blades", "Hot Swap", "Redundant PSU"],
    author: {
      name: "ComputeMax",
      id: "computemax",
    },
    images: [
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-12T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 11,
  },
  {
    id: "40gbe-core-switch",
    title: "40GbE Core Switch",
    description:
      "High-performance core switch for enterprise datacenters with advanced routing features.",
    category: "Networking",
    price: 12800,
    currency: "$",
    tags: ["Layer 3", "QSFP+", "Redundant Fans"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "https://images.unsplash.com/photo-1581091870625-55858aad7cf0?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-07T09:20:00.000Z",
    rating: 4.8,
    reviewCount: 16,
  },
  {
    id: "firewall-appliance",
    title: "Enterprise Firewall Appliance",
    description:
      "Next‑generation firewall providing deep packet inspection and intrusion prevention.",
    category: "Security",
    price: 6200,
    currency: "$",
    tags: ["NGFW", "VPN", "Gigabit"],
    author: {
      name: "SecureSys",
      id: "securesys",
    },
    images: [
      "https://images.unsplash.com/photo-1585861291871-e6c46a28d5c7?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-27T15:30:00.000Z",
    rating: 4.6,
    reviewCount: 14,
  },
  {
    id: "kvm-ip-switch",
    title: "KVM over IP Switch",
    description:
      "Remote management of multiple servers with virtual media support.",
    category: "Management",
    price: 3100,
    currency: "$",
    tags: ["8 Ports", "Virtual Media", "Remote Access"],
    author: {
      name: "ManageIT",
      id: "manageit",
    },
    images: [
      "https://images.unsplash.com/photo-1603791440384-9465026a9b69?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-12T08:55:00.000Z",
    rating: 4.4,
    reviewCount: 10,
  },
  {
    id: "flash-storage-array",
    title: "All‑Flash Storage Array",
    description:
      "Ultra‑fast storage platform delivering millions of IOPS for database workloads.",
    category: "Storage",
    price: 15000,
    currency: "$",
    tags: ["NVMe", "SSD", "Redundant Controller"],
    author: {
      name: "DataCore",
      id: "datacore",
    },
    images: [
      "https://images.unsplash.com/photo-1581091870625-4c31b89f9518?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-04T11:10:00.000Z",
    rating: 4.9,
    reviewCount: 20,
  },
  {
    id: "tape-backup-library",
    title: "Automated Tape Backup Library",
    description: "Scalable tape library for reliable long‑term data archiving.",
    category: "Storage",
    price: 7600,
    currency: "$",
    tags: ["LTO-9", "Redundant Power", "24 Slots"],
    author: {
      name: "ArchiveTech",
      id: "archivetech",
    },
    images: [
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-01-30T16:40:00.000Z",
    rating: 4.5,
    reviewCount: 7,
  },
  {
    id: "server-rack-42u",
    title: "42U Server Rack Cabinet",
    description:
      "Standard rack cabinet with adjustable rails and locking doors.",
    category: "Infrastructure",
    price: 1200,
    currency: "$",
    tags: ["Adjustable Rails", "Lockable", "Ventilated"],
    author: {
      name: "RackMaster",
      id: "rackmaster",
    },
    images: [
      "https://images.unsplash.com/photo-1581091012184-e5857b5b3a4b?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-02-20T13:05:00.000Z",
    rating: 4.8,
    reviewCount: 25,
  },
  {
    id: "dc-monitoring",
    title: "Data Center Monitoring System",
    description:
      "Comprehensive environment and power monitoring with alerting.",
    category: "Management",
    price: 4700,
    currency: "$",
    tags: ["Sensors", "Alerts", "Analytics"],
    author: {
      name: "DCVision",
      id: "dcvision",
    },
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-08T18:00:00.000Z",
    rating: 4.7,
    reviewCount: 13,
  },
  {
    id: "high-capacity-router",
    title: "High‑Capacity Edge Router",
    description:
      "Carrier-grade router providing advanced QoS and BGP routing capabilities.",
    category: "Networking",
    price: 13400,
    currency: "$",
    tags: ["BGP", "10GbE", "Redundant PSU"],
    author: {
      name: "NetWave",
      id: "netwave",
    },
    images: [
      "https://images.unsplash.com/photo-1604079625023-792d09e87a4d?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-09T08:45:00.000Z",
    rating: 4.6,
    reviewCount: 17,
  },
  {
    id: "cable-management-arm",
    title: "Cable Management Arm",
    description:
      "Keeps server rack cabling organized and reduces strain on connections.",
    category: "Infrastructure",
    price: 160,
    currency: "$",
    tags: ["Adjustable", "Tool-Less", "1U"],
    author: {
      name: "RackMaster",
      id: "rackmaster",
    },
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500",
    ],
    createdAt: "2024-03-03T06:25:00.000Z",
    rating: 4.4,
    reviewCount: 5,
  },
];

const EQUIPMENT_FILTERS = [
  { label: "Servers", value: "Servers" },
  { label: "Networking", value: "Networking" },
  { label: "Power", value: "Power" },
  { label: "Cooling", value: "Cooling" },
  { label: "Storage", value: "Storage" },
  { label: "Security", value: "Security" },
  { label: "Management", value: "Management" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "AI", value: "AI" },
  { label: "Robotics", value: "Robotics" },
];

const EQUIPMENT_CACHE_KEY = 'equipmentCache';

export async function fetchEquipment(): Promise<ProductListing[]> {
  // Added a try-catch block for better error handling during API call
  try {
    const { data } = await apiClient.get('/equipment');
    if (typeof window !== 'undefined') {
      safeStorage.setItem(EQUIPMENT_CACHE_KEY, JSON.stringify(data));
    }
    return data;
  } catch (error: any) {
    captureException(error);
    console.error("Raw error object in fetchEquipment:", error);
    if (error.response) {
      console.error("Error response data in fetchEquipment:", error.response.data);
    }
    console.error("Failed to fetch equipment:", error);
    toast({
      title: error.message || 'Failed to fetch equipment',
      variant: 'destructive',
    });
    // Offline fallback from localStorage if available
    if (typeof window !== 'undefined') {
      const cached = safeStorage.getItem(EQUIPMENT_CACHE_KEY);
      if (cached) {
        try {
          return JSON.parse(cached) as ProductListing[];
        } catch (_) {
          // ignore parse errors and fall through to throw
        }
      }
    }
    // Propagate the error so react-query can handle it
    throw error;
  }
}

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState<ProductListing[]>([]); // Initial empty or fallback
  const [recommendations, setRecommendations] = useState<ProductListing[]>([]);
  const [recoOpen, setRecoOpen] = useState(false);
  const [loadingReco, setLoadingReco] = useState(false);
  const { user } = useAuth();

  const {
    data: fetchedEquipment,
    error: equipmentError,
    isLoading: isLoadingEquipment,
    refetch: refetchEquipment
  } = useQuery<ProductListing[], Error>({
    queryKey: ['equipment'],
    queryFn: fetchEquipment,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 10000),
    initialData: () => {
      if (typeof window === 'undefined') return undefined;
      const cached = safeStorage.getItem(EQUIPMENT_CACHE_KEY);
      return cached ? (JSON.parse(cached) as ProductListing[]) : undefined;
    },
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        safeStorage.setItem(EQUIPMENT_CACHE_KEY, JSON.stringify(data));
      }
    },
  });
  const delayedError = useDelayedError(equipmentError);

  useEffect(() => {
    if (fetchedEquipment) {
      setEquipment(fetchedEquipment);
    }
    // Added equipmentError to dependency array for useEffect,
    // so if an error occurs, we can potentially clear existing equipment or handle error state.
  }, [fetchedEquipment, equipmentError]);

  const isFetchingRecommendations = loadingReco;

  // Interval for adding random equipment
  // useEffect(() => {
  //   // Only set interval if equipment is already loaded/exists to prevent adding to undefined
  //   if (equipment && equipment.length > 0) {
  //     const interval = setInterval(() => {
  //       setEquipment((prev = []) => [...prev, generateRandomEquipment()]); // Ensure prev is an array
  //     }, 120000);
  //     return () => clearInterval(interval);
  //   }
  // }, [equipment]); // Added equipment to dependency array
  // Removed the random equipment generation interval to rely on API data.

  const handleRecommendations = async () => {
    if (!user) return;
    setRecoOpen(true);
    setLoadingReco(true);
    try {
      const res = await fetch(`/api/recommendations?userId=${user.id}`);
      if (!res.ok) throw new Error('Failed to fetch recommendations');
      const data = await res.json();
      setRecommendations(data as ProductListing[]);
    } catch (err) {
      console.error(err);
      toast({ title: 'Failed to load recommendations', variant: 'destructive' });
    } finally {
      setLoadingReco(false);
    }
  };

  if (isLoadingEquipment) {
    return (
      <div data-testid="loading-state-equipment" className="container mx-auto p-4 space-y-4" aria-busy="true">
        {/* Skeleton for the top button (e.g., AI Recommendations) */}
        <div className="flex justify-end mb-6">
            <Skeleton className="h-10 w-48" /> {/* Removed specific bg color, base Skeleton handles it */}
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.totalEquipment}</div>
          <div className="text-sm text-muted-foreground">Total Items</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.inStockCount}</div>
          <div className="text-sm text-muted-foreground">In Stock</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Filter controls
const EquipmentFilterControls = ({
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  priceRange,
  setPriceRange,
  filterBrand,
  setFilterBrand,
  brandOptions,
  filterAvailability,
  setFilterAvailability,
  availabilityOptions,
  minRating,
  setMinRating,
  showRecommended,
  setShowRecommended,
  loading
}: any) => (
  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
        <option value="">All Categories</option>
        {categories.map((cat: string) => <option key={cat} value={cat}>{cat}</option>)}
      </select>
    </div>
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">
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
    {brandOptions.length > 0 && (
      <div className="flex items-center gap-2">
        <select
          value={filterBrand}
          onChange={(e) => setFilterBrand(e.target.value)}
          className="bg-background border border-border px-3 py-2 rounded"
        >
          <option value="">All Brands</option>
          {brandOptions.map((b: string) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>
    )}
    {availabilityOptions.length > 0 && (
      <div className="flex items-center gap-2">
        <select
          value={filterAvailability}
          onChange={(e) => setFilterAvailability(e.target.value)}
          className="bg-background border border-border px-3 py-2 rounded"
        >
          <option value="">Any Availability</option>
          {availabilityOptions.map((a: string) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>
    )}
    <div className="flex items-center gap-2">
      <span className="text-sm">Rating ≥</span>
      <select
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
        className="bg-background border border-border px-2 py-1 rounded"
      >
        <option value={0}>Any</option>
        <option value={5}>5</option>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
      </select>
    </div>
    <Button variant={showRecommended ? "default" : "outline"} size="sm" onClick={() => setShowRecommended(!showRecommended)}>
      <Star className="h-4 w-4 mr-1" />
      {showRecommended ? "All Equipment" : "Recommended"}
    </Button>
  </div>
);

// Equipment card
const EquipmentCard = ({ equipment, onViewDetails }: { equipment: ProductListing; onViewDetails: () => void }) => (
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
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{equipment.rating?.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({equipment.reviewCount} reviews)</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{equipment.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{equipment.category}</span>
        <Button size="sm" onClick={onViewDetails}>
          <ShoppingCart className="h-4 w-4 mr-1" />
          View Details
        </Button>
      </div>
    </CardContent>
  </Card>
);

// Loading grid
const EquipmentLoadingGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
);

// Main component
export default function EquipmentPage() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [filterBrand, setFilterBrand] = useState('');
  const [filterAvailability, setFilterAvailability] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [showRecommended, setShowRecommended] = useState(false);
  const [totalGenerated, setTotalGenerated] = useState(0);

  const fetchEquipment = useCallback(async (page: number, limit: number) => {
    await new Promise(resolve => setTimeout(resolve, 400));

    let allEquipment: ProductListing[] = [];
    
    if (page === 1) {
      allEquipment = [...INITIAL_EQUIPMENT];
    }
    
    const startId = INITIAL_EQUIPMENT.length + (page - 1) * limit + totalGenerated;
    const newEquipment = generateDatacenterEquipment(limit, startId);
    setTotalGenerated(prev => prev + newEquipment.length);
    
    allEquipment = [...allEquipment, ...newEquipment];
    
    let filteredEquipment = allEquipment;

    if (filterCategory) {
      filteredEquipment = filteredEquipment.filter(e => e.category === filterCategory);
    }

    if (filterBrand) {
      filteredEquipment = filteredEquipment.filter(e => e.brand === filterBrand);
    }

    if (filterAvailability) {
      filteredEquipment = filteredEquipment.filter(e => e.availability === filterAvailability);
    }

    filteredEquipment = filteredEquipment.filter(e => {
      const price = e.price || 0;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    if (minRating > 0) {
      filteredEquipment = filteredEquipment.filter(e => (e.rating || 0) >= minRating);
    }

    if (showRecommended) {
      filteredEquipment = getRecommendedEquipment(filteredEquipment);
    }
    
    filteredEquipment.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
      }
    });
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filteredEquipment.slice(startIndex, endIndex);
    
    return {
      items,
      hasMore: endIndex < filteredEquipment.length || page < 10,
      total: filteredEquipment.length
    };
  }, [sortBy, filterCategory, filterBrand, filterAvailability, priceRange, minRating, showRecommended, totalGenerated]);

  const {
    items: equipment,
    loading,
    error,
    hasMore,
    total,
    isFetching,
    lastElementRef,
    refresh,
    scrollToTop
  } = useInfiniteScrollPagination(fetchEquipment, 12);

  useEffect(() => {
    refresh();
    setTotalGenerated(0);
  }, [sortBy, filterCategory, filterBrand, filterAvailability, priceRange, minRating, showRecommended]);

  const marketStats = useMemo(() => {
    if (equipment.length === 0) return null;
    return getEquipmentMarketStats(equipment);
  }, [equipment]);

  const categories = useMemo(() => {
    return Array.from(new Set(equipment.map(e => e.category).filter(Boolean)));
  }, [equipment]);

  const brandOptions = useMemo(() => {
    return Array.from(new Set(equipment.map(e => e.brand).filter(Boolean)));
  }, [equipment]);

  const availabilityOptions = useMemo(() => {
    return Array.from(new Set(equipment.map(e => e.availability).filter(Boolean)));
  }, [equipment]);

  useEffect(() => {
    if (equipment.length > 0 && priceRange[0] === 0 && priceRange[1] === 200000) {
      const prices = equipment.map(e => e.price || 0);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPriceRange([min, max]);
    }
  }, [equipment]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex justify-end">
          <AuthGuard onAuthenticated={handleRecommendations} message="Please login to see AI recommendations.">
            <Button disabled={isFetchingRecommendations} className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
              {isFetchingRecommendations ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4 mr-2" />
              )}
              AI Recommendations
            </Button>
          </AuthGuard>
        </div>
      </div>
      <DynamicListingPage
        title="Datacenter Equipment"
        description="Browse professional hardware for modern datacenter and network deployments."
        categorySlug="equipment"
        listings={equipment}
        categoryFilters={EQUIPMENT_FILTERS}
        initialPrice={{ min: 400, max: 50000 }}
        detailBasePath="/equipment"
      />

      <Sheet open={recoOpen} onOpenChange={setRecoOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md bg-zion-blue-dark text-white border-l border-zion-blue-light">
          <SheetHeader>
            <SheetTitle>AI Recommendations</SheetTitle>
          </SheetHeader>
          <div className="p-4 space-y-4 overflow-y-auto max-h-[80vh]">
            {isFetchingRecommendations ? (
              <div className="flex justify-center py-10">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              recommendations.map((rec) => (
                <div key={rec.id}>
                  <ProductListingCard listing={rec} detailBasePath="/equipment" />
                </div>
              ))
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
