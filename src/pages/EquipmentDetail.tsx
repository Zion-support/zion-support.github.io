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

// Convert ProductListing to EquipmentDetails format
function convertProductListingToEquipmentDetails(item: ProductListing): EquipmentDetails {
  return {
    id: item.id,
    name: item.title,
    description: item.description,
    brand: item.brand || 'Unknown',
    category: item.category,
    subcategory: item.subcategory,
    images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'],
    price: item.price || 0,
    currency: item.currency || '$',
    rating: item.rating,
    reviewCount: item.reviewCount,
    inStock: item.availability === 'In Stock' || !item.availability,
    expectedShipping: item.availability || 'In Stock',
    specifications: (item.specifications || []).map((spec) => ({ 
      name: spec, 
      value: '' 
    })),
    features: item.tags || [],
    warranty: '1 Year Manufacturer Warranty',
    returnPolicy: '30-day return policy'
  }
}

// Build sample data from the shared equipment listings
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

  const [equipment, setEquipment] = useState<EquipmentDetails | undefined>(),

  useEffect(() => {
    async function loadEquipment() {
      if (!id) {
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
              
              // Check if it's already in EquipmentDetails format or needs conversion
              let equipmentData: EquipmentDetails,
              if (storedData.name) {
                // Already in EquipmentDetails format
                equipmentData = storedData
              } else {
                // It's a ProductListing, convert it
                equipmentData = convertProductListingToEquipmentDetails(storedData as ProductListing)
              }
              
              setEquipment(equipmentData),
              setLoading(false),
              return
            }
          } catch (storageError) {
            logErrorToProduction('Error reading from sessionStorage:', { data: storageError })
          }
        }

        // If not found anywhere, set error
        setError('Equipment not found'),
        setLoading(false)
      } catch (error) {
        logErrorToProduction('Error loading equipment:', { data: error }),
        setError('Failed to load equipment details'),
        setLoading(false)
      }
    }

    loadEquipment()
  }, [id]),

  const handleAddToCart = async () => {
    if (!equipment || !isAuthenticated) {
      toast({
<<<<<<< HEAD
        title: "Authentication Required",
        description: "Please log in to add items to cart",
        variant: "destructive"}),
      return
=======
        title: &quot;Authentication Required&quot;,
        description: &quot;Please log in to add items to cart&quot;,
        variant: &quot;destructive&quot;});
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

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

  // Loading state
  if (loading) {
    return (
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
    )
  }

  // Error state
  if (error || !equipment) {
    return (
      <>
        <NextSeo
          title=&quot;Equipment Not Found&quot;
          description=&quot;The equipment you're looking for doesn't exist or has been removed.&quot;
        />
        <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
          <div className=&quot;container mx-auto&quot;>
            <motion.div 
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
              </p>
              <div className=&quot;space-x-4&quot;>
                <Button 
                  onClick={() => router.back()} 
                  variant=&quot;outline&quot;
                  className=&quot;border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue&quot;
                >
                  <ArrowLeft className=&quot;h-4 w-4 mr-2&quot; />
                  Go Back
                </Button>
                <Button 
                  onClick={() => router.push('/equipment')}
<<<<<<< HEAD
                  className="bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue"
=======
                  className=&quot;bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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

  return (
    <>
      <NextSeo
        title={`${equipment.name} - Zion Marketplace`}
        description={equipment.description}
        openGraph={{
          title: `${equipment.name} - Zion Marketplace`,
          description: equipment.description,
          images: equipment.images.length > 0 && equipment.images[0] ? [{ url: equipment.images[0] }] : undefined
        }}
      />
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
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? 'border-zion-cyan'
                          : 'border-transparent hover:border-zion-slate-light'
                      }`}
                    >
                      <ImageWithRetry
                        src={image}
                        alt={`${equipment.name} view ${index + 1}`}
                        className=&quot;object-cover&quot;
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div 
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
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(equipment.rating!) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-zion-slate-light'
                          }`}
                        />
                      ))}
                    </div>
                    <span className=&quot;text-sm text-zion-slate-light&quot;>
                      {equipment.rating?.toFixed(1)} ({equipment.reviewCount} reviews)
                    </span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className=&quot;bg-zion-blue-light rounded-lg p-4&quot;>
                <div className=&quot;text-3xl font-bold text-zion-cyan mb-2&quot;>
                  {formatPrice(equipment.price)}
                </div>
                <div className=&quot;flex items-center gap-2 text-sm&quot;>
                  <Clock className=&quot;h-4 w-4 text-zion-cyan&quot; />
                  <span className={equipment.inStock ? 'text-green-400' : 'text-yellow-400'}>
                    {equipment.expectedShipping}
                  </span>
                </div>
              </div>

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
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <Button
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
                  <div>
                    <p className=&quot;text-white text-sm font-medium&quot;>Free Shipping</p>
                    <p className=&quot;text-xs&quot;>For orders over $100 within the US</p>
                  </div>
                </div>
                
                {/* Warranty */}
                {equipment.warranty && (
                  <div className=&quot;flex gap-3 text-zion-slate-light&quot;>
                    <Shield className=&quot;h-5 w-5 text-zion-cyan flex-shrink-0&quot; />
                    <div>
                      <p className=&quot;text-white text-sm font-medium&quot;>Warranty</p>
                      <p className=&quot;text-xs&quot;>{equipment.warranty}</p>
                    </div>
                  </div>
                )}
                
                {/* Return Policy */}
                {equipment.returnPolicy && (
                  <div className=&quot;flex gap-3 text-zion-slate-light&quot;>
                    <RotateCcw className=&quot;h-5 w-5 text-zion-cyan flex-shrink-0&quot; />
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

