<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { NextSeo } from '@/components/NextSeo',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { AspectRatio } from "@/components/ui/aspect-ratio",
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
import { getStripe } from "@/utils/getStripe",
import { useCart } from '@/context/CartContext',
import { ImageWithRetry } from '@/components/ui/ImageWithRetry',
import { equipmentListings } from '@/data/equipmentData',
import { ProductListing } from '@/types/listings',
import { motion } from 'framer-motion',
import { useCurrency } from '@/hooks/useCurrency',
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import { useState, useEffect } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { NextSeo } from '@/components/NextSeo';
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { AspectRatio } from &quot;@/components/ui/aspect-ratio&quot;;
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react'
import { toast } from &quot;@/hooks/use-toast&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { getStripe } from &quot;@/utils/getStripe&quot;;
import { useCart } from '@/context/CartContext';
import { ImageWithRetry } from '@/components/ui/ImageWithRetry';
import { equipmentListings } from '@/data/equipmentData';
import { ProductListing } from '@/types/listings';
import { motion } from 'framer-motion';
import { useCurrency } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface EquipmentSpecification {
  name: string,
  value: string
}

interface EquipmentDetails {
  id: string,
  name: string,
  description: string,
  brand: string,
  category: string,
  subcategory?: string,
  images: string[],
  price: number,
  currency: string,
  rating?: number,
  reviewCount?: number,
  inStock: boolean,
  expectedShipping?: string,
  specifications: EquipmentSpecification[],
  features: string[],
  warranty?: string,
  returnPolicy?: string
}
=======


interface EquipmentSpecification {_name: string;
  value: string;}

interface EquipmentDetails {_id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  subcategory?: string;
  images: string[];
  price: number;
  currency: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  expectedShipping?: string;
  specifications: EquipmentSpecification[];
  features: string[];
  warranty?: string;
  returnPolicy?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Convert ProductListing to EquipmentDetails format
function convertProductListingToEquipmentDetails(_item: ProductListing): EquipmentDetails {_return {
    id: item.id, _name: item.title, _description: item.description, _brand: item.brand || 'Unknown', _category: item.category, _subcategory: item.subcategory, _images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'], _price: item.price || 0, _currency: item.currency || '$', _rating: item.rating, _reviewCount: item.reviewCount, _inStock: item.availability === 'In Stock' || !item.availability, _expectedShipping: item.availability || 'In Stock', _specifications: (item.specifications || []).map(_(spec) => ({ 
      name: spec, _value: ''})),
    features: item.tags || [],
    warranty: '1 Year Manufacturer Warranty',
    returnPolicy: '30-day return policy'
  }
}

// Build sample data from the shared equipment listings
<<<<<<< HEAD
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =
  equipmentListings.reduce((acc, item) => {
    acc[item.id] = convertProductListingToEquipmentDetails(item),
    return acc
  }, {} as { [key: string]: EquipmentDetails }),

export default function EquipmentDetail() {
  const router = useRouter(),
  const { id } = router.query as { id?: string },
  const { isAuthenticated, user } = useAuth(),
  const { items, dispatch } = useCart(),
  const { formatPrice } = useCurrency(),
  const [selectedImageIndex, setSelectedImageIndex] = useState(0),
  const [quantity, setQuantity] = useState(1),
  const [isAdding, setIsAdding] = useState(false),
  const [loading, setLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
=======
export const SAMPLE_EQUIPMENT: {_[key: string]: EquipmentDetails} =
  equipmentListings.reduce(_(acc, _item) => {_acc[item.id] = convertProductListingToEquipmentDetails(item);
    return acc;}, {} as {_[key: string]: EquipmentDetails});

export default function EquipmentDetail() {_const _router = useRouter();
  const { id} = router.query as {_id?: string};
  const {_isAuthenticated, _user} = useAuth();
  const {_items, _dispatch} = useCart();
  const {_formatPrice} = useCurrency();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const [equipment, setEquipment] = useState<EquipmentDetails | undefined>(),

  useEffect__(() => {_async function loadEquipment() {
      if (!id) {
<<<<<<< HEAD
        setLoading(false),
        setError('No equipment ID provided'),
        return
      }

      try {
        setLoading(true),
        setError(null),

        // Try to find in static data first
        const equipmentFromSample = SAMPLE_EQUIPMENT[id],
        if (equipmentFromSample) {
          setEquipment(equipmentFromSample),
          setLoading(false),
          return
        }

        // Try to get from sessionStorage (for dynamically generated equipment)
        if (typeof window !== 'undefined') {
          try {
            const stored = sessionStorage.getItem(`equipment:${id}`),
            if (stored) {
              const storedData = JSON.parse(stored),
=======
        setLoading(false);
        setError('No equipment ID provided');
        return;}

      try {_setLoading(true);
        setError(null);

        // Try to find in static data first
        const _equipmentFromSample = SAMPLE_EQUIPMENT[id];
        if (equipmentFromSample) {
          setEquipment(equipmentFromSample);
          setLoading(false);
          return;}

        // Try to get from sessionStorage (for dynamically generated equipment)
        if (typeof window !== 'undefined') {_try {
            const _stored = sessionStorage.getItem(`equipment:${id}`);
            if (stored) {_const _storedData = JSON.parse(stored);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              
              // Check if it's already in EquipmentDetails format or needs conversion
              let equipmentData: EquipmentDetails,
              if (storedData.name) {
                // Already in EquipmentDetails format
<<<<<<< HEAD
                equipmentData = storedData
              } else {
                // It's a ProductListing, convert it
                equipmentData = convertProductListingToEquipmentDetails(storedData as ProductListing)
              }
=======
                equipmentData = storedData;} else {_// It's a ProductListing, _convert it
                equipmentData = convertProductListingToEquipmentDetails(storedData as ProductListing);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              
              setEquipment(equipmentData),
              setLoading(false),
              return
            }
<<<<<<< HEAD
          } catch (storageError) {
            logErrorToProduction('Error reading from sessionStorage:', { data: storageError })
=======
          } catch (storageError) {_logErrorToProduction('Error reading from sessionStorage:', _{ data: storageError});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          }
        }

        // If not found anywhere, set error
<<<<<<< HEAD
        setError('Equipment not found'),
        setLoading(false)
      } catch (error) {
        logErrorToProduction('Error loading equipment:', { data: error }),
        setError('Failed to load equipment details'),
        setLoading(false)
=======
        setError('Equipment not found');
        setLoading(false);
      } catch (error) {_logErrorToProduction('Error loading equipment:', _{ data: error});
        setError('Failed to load equipment details');
        setLoading(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }

    loadEquipment()
  }, [id]),

  const _handleAddToCart = async () => {_if (!equipment || !isAuthenticated) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication Required",
        description: "Please log in to add items to cart",
        variant: "destructive"}),
      return
=======
        title: &quot;Authentication Required&quot;,
        description: &quot;Please log in to add items to cart&quot;,
        variant: &quot;destructive&quot;});
=======
        title: "Authentication Required", _description: "Please log in to add items to cart", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

<<<<<<< HEAD
    setIsAdding(true),
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
          quantity}}),

      toast({
<<<<<<< HEAD
        title: "Added to Cart",
        description: `${equipment.name} has been added to your cart.`})
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Added to Cart&quot;,
        description: `${equipment.name} has been added to your cart.`});
    } catch (error) {
      toast({
        title: &quot;Error&quot;,
        description: &quot;Failed to add item to cart. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsAdding(false)
    }
  },

  const inCart = items.some(item => item.id === equipment?.id),
=======
    setIsAdding(true);
    try {_dispatch({
        type: 'ADD_ITEM', _payload: {
          id: equipment.id, _name: equipment.name, _price: equipment.price, _quantity}});

      toast({_title: "Added to Cart", _description: `${equipment.name} has been added to your cart.`});
    } catch (error) {_toast({
        title: "Error", _description: "Failed to add item to cart. Please try again.", _variant: "destructive"});
    } finally {_setIsAdding(false);}
  };

  const _inCart = items.some(item => item.id === equipment?.id);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Loading state
  if (loading) {_return (
      <>
        <NextSeo title=&quot;Loading Equipment...&quot; />
        <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
          <div className=&quot;container mx-auto&quot;>
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4&quot;></div>
              <p className=&quot;text-zion-slate-light&quot;>Loading equipment details...</p>
            </div>
          </div>
        </div>
      </>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Error state
  if (error || !equipment) {_return (_<>
        <NextSeo
          title=&quot;Equipment Not Found&quot;
          description=&quot;The equipment you're looking for doesn't exist or has been removed.&quot;
        />
        <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
          <div className=&quot;container mx-auto&quot;>
            <motion.div 
<<<<<<< HEAD
              className=&quot;text-center py-20&quot;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertTriangle className=&quot;mx-auto h-16 w-16 text-red-500 mb-6&quot; />
              <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}
              </h1>
              <p className=&quot;text-zion-slate-light mb-8 max-w-md mx-auto&quot;>
                {error === 'Equipment not found' 
                  ? &quot;The equipment you're looking for doesn't exist or has been removed.&quot; 
                  : error || &quot;We couldn't load the equipment details. Please try again.&quot;
                }
=======
              className="text-center py-20"
              initial={{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
            >
              <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">
                {_error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}
              </h1>
              <p className="text-zion-slate-light mb-8 max-w-md mx-auto">
                {_error === 'Equipment not found' 
                  ? "The equipment you're looking for doesn't exist or has been removed." 
                  : error || "We couldn't load the equipment details. Please try again."}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
              <div className=&quot;space-x-4&quot;>
                <Button 
<<<<<<< HEAD
                  onClick={() => router.back()} 
                  variant=&quot;outline&quot;
                  className=&quot;border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue&quot;
=======
                  onClick={_() => router.back()} 
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <ArrowLeft className=&quot;h-4 w-4 mr-2&quot; />
                  Go Back
                </Button>
                <Button 
<<<<<<< HEAD
                  onClick={() => router.push('/equipment')}
<<<<<<< HEAD
                  className="bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue"
=======
                  className=&quot;bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                  onClick={_() => router.push('/equipment')}
                  className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Browse Equipment
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    )
  }

  return (_<>
      <NextSeo
        title={_`${equipment.name} - Zion Marketplace`}
        description={_equipment.description}
        openGraph={_{
          title: `${equipment.name} - Zion Marketplace`, _description: equipment.description, _images: equipment.images.length > 0 && equipment.images[0] ? [{_url: equipment.images[0]}] : undefined
        }}
      />
<<<<<<< HEAD
      <div className=&quot;min-h-screen bg-zion-blue py-8 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          {/* Breadcrumb */}
          <motion.nav 
            className=&quot;flex mb-8&quot;
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => router.push('/equipment')}
              className=&quot;text-zion-cyan hover:text-white transition-colors&quot;
            >
              Equipment
            </button>
            <span className=&quot;mx-2 text-zion-slate-light&quot;>/</span>
            <span className=&quot;text-zion-slate-light&quot;>{equipment.name}</span>
          </motion.nav>

          <div className=&quot;grid lg:grid-cols-2 gap-12&quot;>
            {/* Images */}
            <motion.div 
              className=&quot;space-y-4&quot;
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AspectRatio ratio={1} className=&quot;bg-zion-blue-light rounded-lg overflow-hidden&quot;>
                <ImageWithRetry
                  src={equipment.images[selectedImageIndex] || equipment.images[0] || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'}
                  alt={equipment.name}
                  className=&quot;object-cover&quot;
                />
              </AspectRatio>
              
              {equipment.images.length > 1 && (
                <div className=&quot;grid grid-cols-4 gap-2&quot;>
                  {equipment.images.map((image, index) => (
                    <button
=======
      <div className="min-h-screen bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          {_/* Breadcrumb */}
          <motion.nav 
            className="flex mb-8"
            initial={_{ opacity: 0, _y: -20}}
            animate={_{ opacity: 1, _y: 0}}
          >
            <button
              onClick={_() => router.push('/equipment')}
              className="text-zion-cyan hover:text-white transition-colors"
            >
              Equipment
            </button>
            <span className="mx-2 text-zion-slate-light">/</span>
            <span className="text-zion-slate-light">{_equipment.name}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {_/* Images */}
            <motion.div 
              className="space-y-4"
              initial={_{ opacity: 0, _x: -20}}
              animate={_{ opacity: 1, _x: 0}}
              transition={_{ delay: 0.2}}
            >
              <AspectRatio ratio={_1} className="bg-zion-blue-light rounded-lg overflow-hidden">
                <ImageWithRetry
                  src={_equipment.images[selectedImageIndex] || equipment.images[0] || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'}
                  alt={_equipment.name}
                  className="object-cover"
                />
              </AspectRatio>
              
              {_equipment.images.length > 1 && (_<div className="grid grid-cols-4 gap-2">
                  {equipment.images.map((image, _index) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      key={index}
                      onClick={_() => setSelectedImageIndex(index)}
                      className={_`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? 'border-zion-cyan'
                          : 'border-transparent hover:border-zion-slate-light'}`}
                    >
                      <ImageWithRetry
<<<<<<< HEAD
                        src={image}
                        alt={`${equipment.name} view ${index + 1}`}
                        className=&quot;object-cover&quot;
=======
                        src={_image}
                        alt={_`${equipment.name} view ${_index + 1}`}
                        className="object-cover"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {_/* Product Details */}
            <motion.div 
<<<<<<< HEAD
              className=&quot;space-y-6&quot;
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Header */}
              <div className=&quot;space-y-2&quot;>
                <div className=&quot;flex items-center gap-2 mb-2&quot;>
                  <Badge variant=&quot;secondary&quot; className=&quot;bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20&quot;>
                    {equipment.category}
                  </Badge>
                  <Badge variant=&quot;outline&quot; className=&quot;border-zion-slate-light text-zion-slate-light&quot;>
                    {equipment.brand}
                  </Badge>
                </div>
                
                <h1 className=&quot;text-3xl font-bold text-white&quot;>{equipment.name}</h1>
                
                {equipment.rating && (
                  <div className=&quot;flex items-center gap-2&quot;>
                    <div className=&quot;flex items-center&quot;>
                      {[...Array(5)].map((_, i) => (
=======
              className="space-y-6"
              initial={_{ opacity: 0, _x: 20}}
              animate={_{ opacity: 1, _x: 0}}
              transition={_{ delay: 0.4}}
            >
              {_/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20">
                    {_equipment.category}
                  </Badge>
                  <Badge variant="outline" className="border-zion-slate-light text-zion-slate-light">
                    {_equipment.brand}
                  </Badge>
                </div>
                
                <h1 className="text-3xl font-bold text-white">{_equipment.name}</h1>
                
                {_equipment.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map(_(_, _i) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <Star
                          key={i}
                          className={_`h-4 w-4 ${
                            i < Math.floor(equipment.rating!) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-zion-slate-light'}`}
                        />
                      ))}
                    </div>
<<<<<<< HEAD
                    <span className=&quot;text-sm text-zion-slate-light&quot;>
                      {equipment.rating?.toFixed(1)} ({equipment.reviewCount} reviews)
=======
                    <span className="text-sm text-zion-slate-light">
                      {_equipment.rating?.toFixed(1)} ({_equipment.reviewCount} reviews)
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </div>
                )}
              </div>

<<<<<<< HEAD
              {/* Price */}
              <div className=&quot;bg-zion-blue-light rounded-lg p-4&quot;>
                <div className=&quot;text-3xl font-bold text-zion-cyan mb-2&quot;>
                  {formatPrice(equipment.price)}
                </div>
                <div className=&quot;flex items-center gap-2 text-sm&quot;>
                  <Clock className=&quot;h-4 w-4 text-zion-cyan&quot; />
                  <span className={equipment.inStock ? 'text-green-400' : 'text-yellow-400'}>
                    {equipment.expectedShipping}
=======
              {_/* Price */}
              <div className="bg-zion-blue-light rounded-lg p-4">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {_formatPrice(equipment.price)}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-zion-cyan" />
                  <span className={_equipment.inStock ? 'text-green-400' : 'text-yellow-400'}>
                    {_equipment.expectedShipping}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </span>
                </div>
              </div>

<<<<<<< HEAD
              {/* Description */}
              <div className=&quot;space-y-4&quot;>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Description</h3>
                <p className=&quot;text-zion-slate-light leading-relaxed&quot;>{equipment.description}</p>
              </div>

              {/* Specifications */}
              {equipment.specifications.length > 0 && (
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white&quot;>Specifications</h3>
                  <div className=&quot;grid gap-2&quot;>
                    {equipment.specifications.map((spec, index) => (
                      <div key={index} className=&quot;flex justify-between py-2 border-b border-zion-blue-light&quot;>
                        <span className=&quot;text-zion-slate-light&quot;>{spec.name}</span>
                        <span className=&quot;text-white&quot;>{spec.value || 'Enterprise Grade'}</span>
=======
              {_/* Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Description</h3>
                <p className="text-zion-slate-light leading-relaxed">{_equipment.description}</p>
              </div>

              {_/* Specifications */}
              {_equipment.specifications.length > 0 && (_<div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Specifications</h3>
                  <div className="grid gap-2">
                    {equipment.specifications.map((spec, _index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-zion-blue-light">
                        <span className="text-zion-slate-light">{_spec.name}</span>
                        <span className="text-white">{_spec.value || 'Enterprise Grade'}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    ))}
                  </div>
                </div>
              )}

<<<<<<< HEAD
              {/* Add to Cart */}
              <div className=&quot;space-y-4 pt-6 border-t border-zion-blue-light&quot;>
                <div className=&quot;flex items-center gap-4&quot;>
                  <label className=&quot;text-white font-medium&quot;>Quantity:</label>
                  <div className=&quot;flex items-center gap-2&quot;>
                    <Button
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className=&quot;h-8 w-8 p-0&quot;
                    >
                      -
                    </Button>
                    <span className=&quot;text-white w-8 text-center&quot;>{quantity}</span>
                    <Button
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      onClick={() => setQuantity(quantity + 1)}
                      className=&quot;h-8 w-8 p-0&quot;
=======
              {_/* Add to Cart */}
              <div className="space-y-4 pt-6 border-t border-zion-blue-light">
                <div className="flex items-center gap-4">
                  <label className="text-white font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={_() => setQuantity(Math.max(1, _quantity - 1))}
                      className="h-8 w-8 p-0"
                    >
                      -
                    </Button>
                    <span className="text-white w-8 text-center">{_quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={_() => setQuantity(quantity + 1)}
                      className="h-8 w-8 p-0"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <Button
<<<<<<< HEAD
                  onClick={handleAddToCart}
                  disabled={isAdding || !equipment.inStock}
                  size=&quot;lg&quot;
                  variant=&quot;outline&quot;
                  className=&quot;w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;
                  data-testid=&quot;add-to-cart-button&quot;
                >
                  <ShoppingCart className=&quot;h-4 w-4 mr-2&quot; />
                  {isAdding ? 'Adding...' : inCart ? 'In Cart' : 'Add to Cart'}
                </Button>
              </div>
              
              {/* Additional Info */}
              <div className=&quot;space-y-4 border-t border-zion-blue-light pt-4&quot;>
                {/* Shipping */}
                <div className=&quot;flex gap-3 text-zion-slate-light&quot;>
                  <Truck className=&quot;h-5 w-5 text-zion-cyan flex-shrink-0&quot; />
=======
                  onClick={_handleAddToCart}
                  disabled={_isAdding || !equipment.inStock}
                  size="lg"
                  variant="outline"
                  className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  data-testid="add-to-cart-button"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {_isAdding ? 'Adding...' : inCart ? 'In Cart' : 'Add to Cart'}
                </Button>
              </div>
              
              {_/* Additional Info */}
              <div className="space-y-4 border-t border-zion-blue-light pt-4">
                {_/* Shipping */}
                <div className="flex gap-3 text-zion-slate-light">
                  <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div>
                    <p className=&quot;text-white text-sm font-medium&quot;>Free Shipping</p>
                    <p className=&quot;text-xs&quot;>For orders over $100 within the US</p>
                  </div>
                </div>
                
<<<<<<< HEAD
                {/* Warranty */}
                {equipment.warranty && (
                  <div className=&quot;flex gap-3 text-zion-slate-light&quot;>
                    <Shield className=&quot;h-5 w-5 text-zion-cyan flex-shrink-0&quot; />
=======
                {_/* Warranty */}
                {_equipment.warranty && (
                  <div className="flex gap-3 text-zion-slate-light">
                    <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <div>
                      <p className=&quot;text-white text-sm font-medium&quot;>Warranty</p>
                      <p className=&quot;text-xs&quot;>{equipment.warranty}</p>
                    </div>
                  </div>
                )}
                
<<<<<<< HEAD
                {/* Return Policy */}
                {equipment.returnPolicy && (
                  <div className=&quot;flex gap-3 text-zion-slate-light&quot;>
                    <RotateCcw className=&quot;h-5 w-5 text-zion-cyan flex-shrink-0&quot; />
=======
                {_/* Return Policy */}
                {_equipment.returnPolicy && (
                  <div className="flex gap-3 text-zion-slate-light">
                    <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <div>
                      <p className=&quot;text-white text-sm font-medium&quot;>Returns</p>
                      <p className=&quot;text-xs&quot;>{equipment.returnPolicy}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

