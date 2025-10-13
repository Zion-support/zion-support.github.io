}
// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =
  equipment_listings.reduce (
  // TODO: Add parameters
)
    (acc, item) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      acc[item.id] = convertProductListingToEquipmentDetails (item)
      return acc
    },

    {} as { [key: string]: EquipmentDetails }
  );
export default /**;
 * EquipmentDetail - Function description
 */
function EquipmentDetail() {;
const router = use_router ();
const { id } = router.query as { id?: string }
  const { isAuthenticated, user } = useAuth();
const { items, dispatch } = useCart();
const { formatPrice } = useCurrency();
const [selectedImageIndex, setSelectedImageIndex] = useState(0);
const [quantity, setQuantity] = useState(1);
const [isAdding, setIsAdding] = useState(false);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [equipment, setEquipment] = useState<EquipmentDetails | undefined>()
  useEffect((,) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    async function loadEquipment() {
  // TODO: Add properties
}
  // TODO: Add properties
}
      if (!id) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setLoading(false)
        setError('No equipment ID provided')'
        return
      }
      try {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setLoading(true)
        setError(null)
        // Try to find in static data first;
const equipmentFromSample = SAMPLE_EQUIPMENT[id]
        if (equipmentFromSample) {
  // TODO: Add properties
}
  // TODO: Add properties
}
          setEquipment(equipmentFromSample)
          setLoading(false)
          return
        }

        // Try to get from session_storage (for dynamically generated equipment)
        // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}

          try {;
const stored = sessionStorage.getItem(`equipment:${id}`)
            if (stored) {;
const storedData = JSON.parse(stored)
              // Check if it's already in EquipmentDetails format or needs conversion;';
let equipmentData: EquipmentDetails
              if (storedData.name) {
  // TODO: Add properties
}
  // TODO: Add properties
}
                // Already in EquipmentDetails format
                equipmentData = storedData
              } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
import { useState, useEffect } from 'react';';
import { useRouter } from 'next/router';';
import { NextSeo } from '@/components/NextSeo';';
import { Badge } from '@/components/ui/badge';';
import { Button } from '@/components/ui/button';';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';';
import { AspectRatio } from '@/components/ui/aspect-ratio';';
import {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ShoppingCart,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Clock,
  AlertTriangle,
  ArrowLeft,
} from 'lucide-react'';
import { toast } from '@/hooks/use-toast';';
import { useAuth } from '@/hooks/useAuth';';
import { getStripe } from '@/utils/getStripe';
import { useRouter } from 'next/router';';
import { NextSeo } from '@/components/NextSeo';';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react';';
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { getStripe } from "@/utils/getStripe";
import { useCart } from '@/context/CartContext';';
import { ImageWithRetry } from '@/components/ui/ImageWithRetry';';
import { equipmentListings } from '@/data/equipmentData';';
import { ProductListing } from '@/types/listings';';
import { motion } from 'framer-motion';';
import { useCurrency } from '@/hooks/useCurrency';';
import { logErrorToProduction } from '@/utils/productionLogger';'
interface EquipmentSpecification {
  // TODO: Add properties
}
  // TODO: Add properties
}
  name: string
value: string
}interface EquipmentDetails {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
name: string
description: string
brand: string
category: string
subcategory?: string
images: string[]
price: number
currency: string
rating?: number
reviewCount?: number
inStock: boolean
expectedShipping?: string
specifications: EquipmentSpecification[]
features: string[]
warranty?: string
returnPolicy?: string
}return {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: item && item.id, name: item && item.title, description: item && item.description, brand: item && item.brand || 'Unknown', category: item && item.category, subcategory: item && item.subcategory, images: item && item.images || ['https://images && images.unsplash.com/photo-1558494949-ef010 cbdcc31?auto=format&fit=crop&w=800&h=500'], price: item && item.price || 0, currency: item && item.currency || '$', rating: item && item.rating, reviewCount: item && item.reviewCount, inStock: item && item.availability === 'In Stock' || !item && item.availability, expectedShipping: item && item.availability || 'In Stock',  specifications: (item && item.specifications || []) .map ( (spec) => ({''
  name: spec, value: ' ''
}) )
features: item && item.tags || [];''
warranty: '1 Year Manufacturer Warranty';''
returnPolicy: '30-day return policy' '
// Convert ProductListing to EquipmentDetails format
function convertProductListingToEquipmentDetails(): any (
  // TODO: Add parameters
)
  item: ProductListing
): EquipmentDetails {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: item && item.id,
    name: item && item.title,
    description: item && item.description,
    brand: item && item.brand || 'Unknown','
    category: item && item.category,
    subcategory: item && item.subcategory,
    images: item && item.images || [
  // TODO: Add items
]
  // TODO: Add items
]
      'https://images && images.unsplash.com/photo-1558494949-ef010 cbdcc31?auto=format&fit=crop&w=800&h=500','
    ],
    price: item && item.price || 0,
    currency: item && item.currency || '$','
    rating: item && item.rating,
    reviewCount: item && item.reviewCount,
    inStock: item && item.availability === 'In Stock' || !item && item.availability,'
    expectedShipping: item && item.availability || 'In Stock','
    specifications: (item && item.specifications || []).map(spec => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: spec,
      value: '',    })),'
    features: item && item.tags || [],
    warranty: '1 Year Manufacturer Warranty','
    returnPolicy: '30-day return policy','
  }
// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =
  equipmentListings && equipmentListings.reduce(
  // TODO: Add parameters
)
    (acc, item) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
      acc[item && item.id] = convertProductListingToEquipmentDetails(item)
      return acc
    },
    {} as { [key: string]: EquipmentDetails }
  );
export default function EquipmentDetail() {;
const router = useRouter();
const { id } = router && router.query as { id?: string }
  const { isAuthenticated, user } = useAuth();
const { items, dispatch } = useCart();
const { formatPrice } = useCurrency();
const [selectedImageIndex, setSelectedImageIndex] = useState(0);
const [quantity, setQuantity] = useState(1);
const [isAdding, setIsAdding] = useState(false);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [equipment, setEquipment] = useState<EquipmentDetails | undefined>()
  useEffect((,) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    async function loadEquipment() {
  // TODO: Add properties
}
  // TODO: Add properties
}
      if (!id) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setLoading(false)
        setError('No equipment ID provided')'
        return
      }

      try {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setLoading(true)
        setError(null)
        // Try to find in static data first;
const equipmentFromSample = SAMPLE_EQUIPMENT[id]
        if (equipmentFromSample) {
  // TODO: Add properties
}
  // TODO: Add properties
}
          setEquipment(equipmentFromSample)
          setLoading(false)
          return
        }

        // Try to get from sessionStorage (for dynamically generated equipment)
        if (typeof window !== 'undefined') {'
          try {;
const stored = sessionStorage && sessionStorage.getItem(`equipment:${id}`)
            if (stored) {;
const storedData = JSON && JSON.parse(stored)
              // Check if it's already in EquipmentDetails format or needs conversion;';
let equipmentData: EquipmentDetails
              if (storedData && storedData.name) {
  // TODO: Add properties
}
  // TODO: Add properties
}
                // Already in EquipmentDetails format
                equipmentData = storedData
              } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
                // It's a ProductListing, convert it'
                equipmentData = convertProductListingToEquipmentDetails(
  // TODO: Add parameters
)
                  storedData as ProductListing
                )
              }
              setEquipment(equipmentData)
              setLoading(false)
              return
            }

                // It's a ProductListing, convert it'
                equipment_data = convertProductListingToEquipmentDetails (
  // TODO: Add parameters
)
                  stored_data as ProductListing)
              }
              set_equipment (equipment_data)
              set_loading (false)
              return
            }
          } catch (storage_error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
            logErrorToProduction ('Error reading from session_storage:', {'
              data: storage_error,
            })
          }
        // If not found anywhere, set error
        set_error ('Equipment not found')'
        set_loading (false)
      } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        logErrorToProduction('Error loading equipment:', { data: error })'
        setError('Failed to load equipment details')'
        setLoading(false)
      }
;
import { useState, useEffect } from "react";";
import { useRouter } from 'next/router',';';
import { NextSeo } from '@/components/NextSeo',';';
import { Badge } from ",";"@/components/ui/button",";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";";
import { AspectRatio } from ",";"@/hooks/use-toast",";
import { useAuth } from "@/hooks/useAuth";";
import { getStripe } from ",";"react",";
import { useRouter } from 'next/router',';';
import { NextSeo } from '@/components/NextSeo',';';
import { Badge } from "@/components/ui/badge";";
import { Button } from ",";"@/components/ui/tabs",";
import { AspectRatio } from "@/components/ui/aspect-ratio";";
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react';';
import { toast } from ",";"@/hooks/useAuth",";
import { getStripe } from "@/utils/getStripe";";
import { useCart } from '@/context/CartContext',';';
import { ImageWithRetry } from '@/components/ui/ImageWithRetry',';';
import { equipmentListings } from '@/data/equipmentData',';';
import { ProductListing } from '@/types/listings',';';
import { motion } from 'framer-motion',';';
import { useCurrency } from '@/hooks/useCurrency',';';
import {logErrorToProduction} from '@/utils/productionLogger',';'
interface EquipmentSpecification {
  // TODO: Add properties
}
  // TODO: Add properties
}
  name: string,
  value: string
}

interface EquipmentDetails {
  // TODO: Add properties
}
  // TODO: Add properties
}
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
  // TODO: Add properties
}
  // TODO: Add properties
}
  return {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id: item.id,
    name: item.title,
    description: item.description,
    brand: item.brand || 'Unknown','
    category: item.category,
    subcategory: item.subcategory,
    images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010 cbdcc31?auto=format&fit=crop&w=800&h=500'],'
    price: item.price || 0,
    currency: item.currency || '$','
    rating: item.rating,
    reviewCount: item.reviewCount,
    inStock: item.availability === 'In Stock' || !item.availability,'
    expectedShipping: item.availability || 'In Stock','
    specifications: (item.specifications || []).map((spec) => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: spec,
      value: '''
    })),
    features: item.tags || [],
    warranty: '1 Year Manufacturer Warranty','
    returnPolicy: '30-day return policy''
  }
// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =
  equipmentListings.reduce((acc, item) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    acc[item.id] = convertProductListingToEquipmentDetails(item),
    return acc
  }, {} as { [key: string]: EquipmentDetails }),;
export default function EquipmentDetail() {;
const router = useRouter(),;
const { id } = router.query as { id?: string },;
const { isAuthenticated, user } = useAuth(),;
const { items, dispatch } = useCart(),;
const { formatPrice } = useCurrency(),;
const [selectedImageIndex, setSelectedImageIndex] = useState(0),;
const [quantity, setQuantity] = useState(1),;
const [isAdding, setIsAdding] = useState(false),;
const [loading, setLoading] = useState(true),;
const [error, setError] = useState<string | null>(null),;
const [equipment, setEquipment] = useState<EquipmentDetails | undefined>(),
  useEffect(() => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
    async function loadEquipment() {
  // TODO: Add properties
}
  // TODO: Add properties
}
      if (!id) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setLoading(false),
        setError('No equipment ID provided'),'
        return
      }

      try {
  // TODO: Add properties
}
  // TODO: Add properties
}
        setLoading(true),
        setError(null),
        // Try to find in static data first;
const equipmentFromSample = SAMPLE_EQUIPMENT[id],
        if (equipmentFromSample) {
  // TODO: Add properties
}
  // TODO: Add properties
}
          setEquipment(equipmentFromSample),
          setLoading(false),
          return
        }

        // Try to get from sessionStorage (for dynamically generated equipment)
        if (typeof window !== 'undefined') {'
          try {;
const stored = sessionStorage.getItem(`equipment:${id}`),
            if (stored) {;
const storedData = JSON.parse(stored),
              // Check if it's already in EquipmentDetails format or needs conversion;';
let equipmentData: EquipmentDetails,
              if (storedData.name) {
  // TODO: Add properties
}
  // TODO: Add properties
}
                // Already in EquipmentDetails format
                equipmentData = storedData
              } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
                // It's a ProductListing, convert it'
                equipment_data = convertProductListingToEquipmentDetails (
  // TODO: Add parameters
)
                  stored_data as ProductListing)
              }
              set_equipment (equipment_data)
              set_loading (false)
              return
            }
          } catch (storage_error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
            logErrorToProduction ('Error reading from session_storage:', {'
              data: storage_error,
            })
          }
        // If not found anywhere, set error
        set_error ('Equipment not found')'
        set_loading (false)
      } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        logErrorToProduction ('Error loading equipment:', { data: error })'
        set_error ('Failed to load equipment details')'
        set_loading (false)
      }
    loadEquipment()
  }, [id]),;
const handleAddToCart = async () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
    if (!equipment |!isAuthenticated) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'Authentication Required','
        description: 'Please log in to add items to cart','
        variant: 'destructive','

      })
      return
    }

    setIsAdding(true),

          quantity}}),

      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: ","
        description: `${equipment.name} has been added to your cart.`})
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: ","
        description: ","
        variant: "})"
    } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
      setIsAdding(false)
    }
  },;
const inCart = items.some(item => item.id === equipment?.id),

          quantity}}),

  // Loading state
  if (loading) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return (
  // TODO: Add parameters
)
      <>
<NextSeo title=" />"
<div className="
<div className="container mx-auto"text-center py-20"
<div className="
<p className="text-zion-slate-light"Equipment Not Found""The equipment you're looking for doesn't exist or has been removed."'"min-h-screen bg-zion-blue py-12 px-4"
<div className="
<motion.div
              className="text-center py-20"The equipment you're looking for doesn't exist or has been removed."'"We couldn't load the equipment details. Please try again."}"
              </p>
<div className='space-x-4'>'
<Button
                  onClick={() => router && router.back()}
                  variant='outline''
                  className='border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue'                >'
<ArrowLeft className='h-4 w-4 mr-2' />'
                  Go Back</$1>
<Button

              animate={{ opacity: 1, y: 0 }
            >
<AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6"text-3 xl font-bold text-white mb-4"
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}'
              </h1>
<p className='text-zion-slate-light mb-8 max-w-md mx-auto'>'
                {error === 'Equipment not found''
                  ? "'"
                  : error |
                    "}"'"text-zion-slate-light mb-8 max-w-md mx-auto"
                {error === 'Equipment not found' '
                  ? " "'"We couldn't load the equipment details. Please try again."'"space-x-4"
<Button
                  onClick={() => router.back()}
                  variant=""
                  className="
                >
<ArrowLeft className="h-4 w-4 mr-2"bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue"
                >

                  Browse Equipment
                </Button></div>
</motion.div></div>
</div></>
    )
  }
  return (
  // TODO: Add parameters
)
    <>
<NextSeo
        title={`${equipment && equipment.name} - Zion Marketplace`}
        description = {equipment && equipment.description,}
        openGraph={{
  // TODO: Add properties
}
  // TODO: Add properties
}
    loadEquipment()
  }, [id]),;
const handleAddToCart = async () => {
  // TODO: Implement
}
  // TODO: Add properties
}
  // TODO: Add properties
}
  // TODO: Implement
}
    if (!equipment || !isAuthenticated) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: ","
        description: ","
        variant: "}),"
      return
    }

    setIsAdding(true),
    try {
  // TODO: Add properties
}
  // TODO: Add properties
}
      dispatch({
  // TODO: Add properties
}
  // TODO: Add properties
}
        type: 'ADD_ITEM','
        payload: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
          quantity}}),
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: ","
        description: `${equipment.name} has been added to your cart.`})
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      toast({
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: ","
        description: ","
        variant: "})"
    } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
      setIsAdding(false)
    }
  },;
const inCart = items.some(item => item.id === equipment?.id),
  // Loading state
  if (loading) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return (
  // TODO: Add parameters
)
      <>
<NextSeo title=" />"
<div className="
<div className="container mx-auto"text-center py-20"
<div className="
<p className="text-zion-slate-light"Equipment Not Found""The equipment you're looking for doesn't exist or has been removed."'"min-h-screen bg-zion-blue py-12 px-4"
<div className="
<motion.div
              className="text-center py-20"mx-auto h-16 w-16 text-red-500 mb-6"
<h1 className="
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}'
              </h1>
<p className="text-zion-slate-light mb-8 max-w-md mx-auto"The equipment you're looking for doesn't exist or has been removed."'"We couldn't load the equipment details. Please try again."'"space-x-4"
<Button
                  onClick={() => router.back()}
                  variant=""
                  className="
                >
<ArrowLeft className="h-4 w-4 mr-2"bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue"
                >
                  Browse Equipment</$1></$1>
</$1></$1>
</$1></>
    )
  }

  return (
  // TODO: Add parameters
)
    <>
<NextSeo
        title={`${equipment.name} - Zion Marketplace`}
        description={equipment.description}
        openGraph={{
  // TODO: Add properties
}
  // TODO: Add properties
}
          title: `${equipment.name} - Zion Marketplace`
          description: equipment.description
          images: equipment.images.length > 0 && equipment.images[0] ? [{ url: equipment.images[0] }] : undefined
        }
      />
<div className="
<div className="container mx-auto"flex mb-8"
            initial={{ opacity: 0, y: -20 }
            animate={{ opacity: 1, y: 0 }
          >
<;$2 />
              onClick={() => router.push('/equipment')}'
              className="
            >

              Equipment
            </button>
<span className="mx-2 text-zion-slate-light"text-zion-slate-light"

              onClick={() => router && router.push('/equipment')}'
              className='text-zion-cyan hover:text-white transition-colors'            >'
              Equipment</$1>
<span className='mx-2 text-zion-slate-light'>/</span>'
<span className='text-zion-slate-light'>{equipment && equipment.name}</span></$1>'
<div className='grid lg:grid-cols-2 gap-12'>'
<div className="

                      />
</button>
                  ))}
                </div>
              )}

            </motion && motion.div>
            {/* Product Details */}
            <motion.div
              className='space-y-6''
            <motion.div
              className="space-y-6"space-y-2"
<div className="
<Badge variant="secondary"bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20"

                          }`}
                        />
                      ))}
                    </div>
<span className='text-sm text-zion-slate-light'>'
                      {equipment && equipment.rating?.toFixed(1)} ({equipment && equipment.reviewCount}{' '}'
                      reviews)</$1></$1>
                )}

              </div>
              {/* Price */}

                  <div className="
<Shield className="h-5 w-5 text-zion-cyan flex-shrink-0"text-white text-sm font-medium"
<p className="
</div>
                )}

                {/* Warranty */}
                {equipment && equipment.warranty && (
  // TODO: Add parameters
)
                  <div className='flex gap-3 text-zion-slate-light'>'
<Shield className='h-5 w-5 text-zion-cyan flex-shrink-0' />'
<div>
<p className='text-white text-sm font-medium'>Warranty</p>'
<p className='text-xs'>{equipment && equipment.warranty}</p></$1>'
</$1>
                )}
                {/* Return Policy */}
                {equipment && equipment.returnPolicy && (
  // TODO: Add parameters
)
                  <div className='flex gap-3 text-zion-slate-light'>'
<RotateCcw className='h-5 w-5 text-zion-cyan flex-shrink-0' />'
<div>
<p className='text-white text-sm font-medium'>Returns</p>'
<p className='text-xs'>{equipment && equipment.returnPolicy}</p></$1>'
</$1>
                )}

  equipment.returnPolicy
}</p></div>
</div>)
}</div></motion.div>
</div></div>
</div></>)
}'"}"
</$1></$1>
</$1></$1>
</$1></>
  )
                {/* Warranty */}
                {equipment.warranty && (
  // TODO: Add parameters
)
                  <div className='flex gap - 3 text - zion - slate - light'>'
<Shield className='h - 5 w - 5 text - zion - cyan flex - shrink - 0' />'
<div>
<p className='text - white text - sm font - medium'>Warranty</p>'
<p className='text - xs'>{equipment.warranty}</p></$1>'
</$1>)}
                {/* Return Policy */}
                {equipment.return_policy && (
  // TODO: Add parameters
)
                  <div className='flex gap - 3 text - zion - slate - light'>'
<RotateCcw className='h - 5 w - 5 text - zion - cyan flex - shrink - 0' />'
<div>
<p className='text - white text - sm font - medium'>Returns</p>'
<p className='text - xs'>{equipment.return_policy}</p></$1>'
</$1>)}
              </div></$1>
</$1></$1>
</$1></>
  )
