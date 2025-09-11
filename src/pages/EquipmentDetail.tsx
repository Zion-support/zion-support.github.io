<<<<<<< HEAD
<<<<<<< HEAD

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from '@/components/NextSeo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  ShoppingCart
  Star
  Truck
  Shield
  RotateCcw
  Clock
  AlertTriangle
  ArrowLeft
} from 'lucide-react'
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { getStripe } from '@/utils/getStripe'; import { useRouter } from 'next/router'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
import { useAuth } from "@/hooks/useAuth",
import { getStripe } from "@/utils/getStripe";
import { useCart  } from '@/context/CartContext';
import { ImageWithRetry  } from '@/components/ui/ImageWithRetry';
import { equipmentListings  } from '@/data/equipmentData';
import { ProductListing  } from '@/types/listings';
import { motion  } from 'framer-motion';
import { useCurrency  } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';
interface EquipmentSpecification {

  name: string
value: string
}interface EquipmentDetails {
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
  id: item.id, name: item.title, description: item.description, brand: item.brand |'Unknown', category: item.category, subcategory: item.subcategory, images: item.images |['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'], price: item.price |0, currency: item.currency |'$', rating: item.rating, reviewCount: item.reviewCount, inStock: item.availability === 'In Stock' |!item.availability, expectedShipping: item.availability |'In Stock',  specifications: (item.specifications |[]) .map ( (spec) => ({'
  name: spec, value: ''
}) )
features: item.tags |[];'
  id: item.id, name: item.title, description: item.description, brand: item.brand || 'Unknown', category: item.category, subcategory: item.subcategory, images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'], price: item.price || 0, currency: item.currency || '$', rating: item.rating, reviewCount: item.reviewCount, inStock: item.availability === 'In Stock' || !item.availability, expectedShipping: item.availability || 'In Stock',  specifications: (item.specifications || []) .map ( (spec) => ({'
  name: spec, value: '' ;
}) );
features: item.tags || [];'
warranty: '1 Year Manufacturer Warranty';'
returnPolicy: '30-day return policy'

// Convert ProductListing to EquipmentDetails format
function convertProductListingToEquipmentDetails(
  item: ProductListing
): EquipmentDetails {
  return {

    id: item.id
    name: item.title
    description: item.description
    brand: item.brand |'Unknown'
    category: item.category
    subcategory: item.subcategory
    images: item.images |[
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'
    ]
    price: item.price |0
    currency: item.currency |'$'
    rating: item.rating
    reviewCount: item.reviewCount
    inStock: item.availability === 'In Stock' |!item.availability
    expectedShipping: item.availability |'In Stock'
    specifications: (item.specifications |[]).map(spec => ({
      name: spec
      value: '',    }))
    features: item.tags |[]
    warranty: '1 Year Manufacturer Warranty'
    returnPolicy: '30-day return policy'
  }
// Build sample data from the shared equipment listings
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =
  equipmentListings.reduce(
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =;
  equipment_listings.reduce (
    (acc, item) => {
<<<<<<< HEAD
<<<<<<< HEAD
      acc[item.id] = convertProductListingToEquipmentDetails(item)
      return acc
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      acc[item.id] = convertProductListingToEquipmentDetails (item);
      return acc;
    },

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {} as { [key: string]: EquipmentDetails }
  )
export default function EquipmentDetail() {
  const router = useRouter()
  const { id } = router.query as { id?: string }
  const { isAuthenticated, user } = useAuth()
  const { items, dispatch } = useCart()
  const { formatPrice } = useCurrency()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [equipment, setEquipment] = useState<EquipmentDetails | undefined>()
  useEffect((,) => {
    async function loadEquipment() {
      if (!id) {
        setLoading(false)
        setError('No equipment ID provided')
        return;
      }
      try {
        setLoading(true)
        setError(null)
        // Try to find in static data first
        const equipmentFromSample = SAMPLE_EQUIPMENT[id]
        if (equipmentFromSample) {
          setEquipment(equipmentFromSample)
          setLoading(false)
          return;
        }
<<<<<<< HEAD
<<<<<<< HEAD
        // Try to get from sessionStorage (for dynamically generated equipment)
        if (typeof window !== 'undefined') {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        // Try to get from session_storage (for dynamically generated equipment);
        // Check condition
if ( {) {
  $2
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          try {
            const stored = sessionStorage.getItem(`equipment:${id}`)
            if (stored) {
              const storedData = JSON.parse(stored)
              // Check if it's already in EquipmentDetails format or needs conversion
              let equipmentData: EquipmentDetails
              if (storedData.name) {
                // Already in EquipmentDetails format
                equipmentData = storedData
              } else {
<<<<<<< HEAD
<<<<<<< HEAD
                // It's a ProductListing, convert it
                equipmentData = convertProductListingToEquipmentDetails(
                  storedData as ProductListing
                )
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from '@/components/NextSeo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {;
  ShoppingCart,;
  Star,;
  Truck,;
  Shield,;
  RotateCcw,;
  Clock,;
  AlertTriangle,;
  ArrowLeft,;
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { getStripe } from '@/utils/getStripe';import { useRouter } from 'next/router';
import { NextSeo } from '@/components/NextSeo';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { getStripe } from "@/utils/getStripe";
import { useCart } from '@/context/CartContext';
import { ImageWithRetry } from '@/components/ui/ImageWithRetry';
import { equipmentListings } from '@/data/equipmentData';
import { ProductListing } from '@/types/listings';
import { motion } from 'framer-motion';
import { useCurrency } from '@/hooks/useCurrency';
import { logErrorToProduction } from '@/utils/productionLogger';
interface EquipmentSpecification {;
  name: string;
value: string ;
}interface EquipmentDetails {;
  id: string;
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
returnPolicy?: string ;
}return {;
  id: item && item.id, name: item && item.title, description: item && item.description, brand: item && item.brand || 'Unknown', category: item && item.category, subcategory: item && item.subcategory, images: item && item.images || ['https://images && images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'], price: item && item.price || 0, currency: item && item.currency || '$', rating: item && item.rating, reviewCount: item && item.reviewCount, inStock: item && item.availability === 'In Stock' || !item && item.availability, expectedShipping: item && item.availability || 'In Stock',  specifications: (item && item.specifications || []) .map ( (spec) => ({';
  name: spec, value: '' ;
}) );
features: item && item.tags || [];';
warranty: '1 Year Manufacturer Warranty';';
returnPolicy: '30-day return policy' ;

// Convert ProductListing to EquipmentDetails format;
function convertProductListingToEquipmentDetails(): any (;
  item: ProductListing;
): EquipmentDetails {;
  return {;
    id: item && item.id,;
    name: item && item.title,;
    description: item && item.description,;
    brand: item && item.brand || 'Unknown',;
    category: item && item.category,;
    subcategory: item && item.subcategory,;
    images: item && item.images || [;
      'https://images && images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500',;
    ],;
    price: item && item.price || 0,;
    currency: item && item.currency || '$',;
    rating: item && item.rating,;
    reviewCount: item && item.reviewCount,;
    inStock: item && item.availability === 'In Stock' || !item && item.availability,;
    expectedShipping: item && item.availability || 'In Stock',;
    specifications: (item && item.specifications || []).map(spec => ({;
      name: spec,;
      value: '',    })),;
    features: item && item.tags || [],;
    warranty: '1 Year Manufacturer Warranty',;
    returnPolicy: '30-day return policy',;
  };

// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =;
  equipmentListings && equipmentListings.reduce(;
    (acc, item) => {;
      acc[item && item.id] = convertProductListingToEquipmentDetails(item);
      return acc;
    },;
    {} as { [key: string]: EquipmentDetails }
  );
export default function EquipmentDetail() {;
  const router = useRouter();
  const { id } = router && router.query as { id?: string };
  const { isAuthenticated, user } = useAuth();
  const { items, dispatch } = useCart();
  const { formatPrice } = useCurrency();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [equipment, setEquipment] = useState<EquipmentDetails | undefined>();

  useEffect((,) => {;
    async function loadEquipment() {;
      if (!id) {;
        setLoading(false);
        setError('No equipment ID provided');
        return;
      }

      try {;
        setLoading(true);
        setError(null);

        // Try to find in static data first;
        const equipmentFromSample = SAMPLE_EQUIPMENT[id];
        if (equipmentFromSample) {;
          setEquipment(equipmentFromSample);
          setLoading(false);
          return;
        }

        // Try to get from sessionStorage (for dynamically generated equipment);
        if (typeof window !== 'undefined') {;
          try {;
            const stored = sessionStorage && sessionStorage.getItem(`equipment:${id}`);
            if (stored) {;
              const storedData = JSON && JSON.parse(stored);

              // Check if it's already in EquipmentDetails format or needs conversion;
              let equipmentData: EquipmentDetails;
              if (storedData && storedData.name) {;
                // Already in EquipmentDetails format;
                equipmentData = storedData;
              } else {;
                // It's a ProductListing, convert it;
                equipmentData = convertProductListingToEquipmentDetails(;
                  storedData as ProductListing;
                );
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }
              setEquipment(equipmentData)
              setLoading(false)
              return;
            }
<<<<<<< HEAD
<<<<<<< HEAD
          } catch (storageError) {
            logErrorToProduction('Error reading from sessionStorage:', {
              data: storageError
            })
          }
        }
        // If not found anywhere, set error
        setError('Equipment not found')
        setLoading(false)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                // It's a ProductListing, convert it;
                equipment_data = convertProductListingToEquipmentDetails (
                  stored_data as ProductListing);
              }
              set_equipment (equipment_data);
              set_loading (false);
              return;
            }
          } catch (storage_error) {
            logErrorToProduction ('Error reading from session_storage:', {
              data: storage_error,
            });
          }
        }
        // If not found anywhere, set error;
        set_error ('Equipment not found');
        set_loading (false);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      } catch (error) {
        logErrorToProduction('Error loading equipment:', { data: error })
        setError('Failed to load equipment details')
        setLoading(false)
      }
    }
<<<<<<< HEAD
    loadEquipment()
<<<<<<< HEAD
  }, [id])
    loadEquipment()
  }, [id])
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
interface EquipmentSpecification {
  name: string,
  value: string
import { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { NextSeo } from '@/components/NextSeo',;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { AspectRatio } from "@/components/ui/aspect-ratio",;
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Clock, AlertTriangle, ArrowLeft } from 'lucide-react';
import { toast } from "@/hooks/use-toast",;
import { useAuth } from "@/hooks/useAuth",;
import { getStripe } from "@/utils/getStripe",;
import { useCart } from '@/context/CartContext',;
import { ImageWithRetry } from '@/components/ui/ImageWithRetry',;
import { equipmentListings } from '@/data/equipmentData',;
import { ProductListing } from '@/types/listings',;
import { motion } from 'framer-motion',;
import { useCurrency } from '@/hooks/useCurrency',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface EquipmentSpecification {;
  name: string,;
  value: string;
}
;
interface EquipmentDetails {;
  id: string,;
  name: string,;
  description: string,;
  brand: string,;
  category: string,;
  subcategory?: string,;
  images: string[],;
  price: number,;
  currency: string,;
  rating?: number,;
  reviewCount?: number,;
  inStock: boolean,;
  expectedShipping?: string,;
  specifications: EquipmentSpecification[],;
  features: string[],;
  warranty?: string,;
  returnPolicy?: string;
}
;
// Convert ProductListing to EquipmentDetails format;
function convertProductListingToEquipmentDetails(item: ProductListing): EquipmentDetails {;
  return {;
    id: item.id,;
    name: item.title,;
    description: item.description,;
    brand: item.brand || 'Unknown',;
    category: item.category,;
    subcategory: item.subcategory,;
    images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'],;
    price: item.price || 0,;
    currency: item.currency || '$',;
    rating: item.rating,;
    reviewCount: item.reviewCount,;
    inStock: item.availability === 'In Stock' || !item.availability,;
    expectedShipping: item.availability || 'In Stock',;
    specifications: (item.specifications || []).map((spec) => ({;
      name: spec,;
      value: '';
    })),;
    features: item.tags || [],;
    warranty: '1 Year Manufacturer Warranty',;
    returnPolicy: '30-day return policy';
  }
}
;
// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =;
  equipmentListings.reduce((acc, item) => {;
    acc[item.id] = convertProductListingToEquipmentDetails(item),;
    return acc;
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
  const [equipment, setEquipment] = useState<EquipmentDetails | undefined>(),;
  useEffect(() => {;
    async function loadEquipment() {;
      if (!id) {;
        setLoading(false),;
        setError('No equipment ID provided'),;
        return;
      }
;
      try {;
        setLoading(true),;
        setError(null),;
        // Try to find in static data first;
        const equipmentFromSample = SAMPLE_EQUIPMENT[id],;
        if (equipmentFromSample) {;
          setEquipment(equipmentFromSample),;
          setLoading(false),;
          return;
        }
;
        // Try to get from sessionStorage (for dynamically generated equipment);
        if (typeof window !== 'undefined') {;
          try {;
            const stored = sessionStorage.getItem(`equipment:${id}`),;
            if (stored) {;
              const storedData = JSON.parse(stored),;
              // Check if it's already in EquipmentDetails format or needs conversion;
              let equipmentData: EquipmentDetails,;
              if (storedData.name) {;
                // Already in EquipmentDetails format;
                equipmentData = storedData;
              } else {;
                // It's a ProductListing, convert it;
                equipmentData = convertProductListingToEquipmentDetails(storedData as ProductListing);
              }
;
              setEquipment(equipmentData),;
              setLoading(false),;
              return;
            }
          } catch (storageError) {;
            logErrorToProduction('Error reading from sessionStorage:', { data: storageError });
          }
        }
;
        // If not found anywhere, set error;
        setError('Equipment not found'),;
        setLoading(false);
      } catch (error) {;
        logErrorToProduction('Error loading equipment:', { data: error }),;
        setError('Failed to load equipment details'),;
        setLoading(false);
      }
    }

    loadEquipment()
  }, [id]),
<<<<<<< HEAD
    if (!equipment |!isAuthenticated) {
      toast({
        title: 'Authentication Required'
        description: 'Please log in to add items to cart'
        variant: 'destructive'
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({
<<<<<<< HEAD
        title: 'Authentication Required'
        description: 'Please log in to add items to cart'
        variant: 'destructive'
        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',
      })
      return;
    }
    setIsAdding(true)
        title: "Authentication Required",
        description: "Please log in to add items to cart",
        variant: "destructive"}),
=======
  }, [id]),




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({

        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',

      })
    }


    setIsAdding(true),
<<<<<<< HEAD
        title: "Authentication Required",
        description: "Please log in to add items to cart",
        variant: "destructive"}),
      return
    }

    setIsAdding(true),
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',

      })
      return;
    }


    setIsAdding(true),



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      dispatch({
        type: 'ADD_ITEM'
        payload: {
<<<<<<< HEAD
<<<<<<< HEAD
      dispatch({
        type: 'ADD_ITEM'
        payload: {
          id: equipment.id
          name: equipment.name
          price: equipment.price
          quantity
        }
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
          quantity,
        },
      })
      toast({
        title: 'Added to Cart'
        description: `${equipment.name} has been added to your cart.`
      })
    try {
      dispatch({
        type: 'ADD_ITEM'
        payload: {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    load_equipment ();
  }, [id]);
  const handleAddToCart = async () => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',
      });
      return;
<<<<<<< HEAD
<<<<<<< HEAD
    } catch (error) {
      toast({
        title: 'Error'
        description: 'Failed to add item to cart. Please try again.'
        variant: 'destructive'
      })
    } finally {
      setIsAdding(false)
    }
  }
  const inCart = items.some(item => item.id === equipment?.id)
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
          quantity}}),
    } finally {
      setIsAdding (false);
    }

      toast({
        title: "Added to Cart",
        description: `${equipment.name} has been added to your cart.`})
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"})
    } finally {
      setIsAdding(false)
    }
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
=======
    }
  }
  const inCart = items.some(item => item.id === equipment?.id)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          quantity}}),

      toast({
        title: "Added to Cart",
        description: `${equipment.name} has been added to your cart.`})
    } catch (error) {
<<<<<<< HEAD
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"})
    } finally {
      setIsAdding(false)
    }
  },

  const inCart = items.some(item => item.id === equipment?.id),
=======
=======
    }
    setIsAdding (true);
    try {
      dispatch ({
        type: 'ADD_ITEM',
        payload: {
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
          quantity,
        },
      });
      toast ({
        title: 'Added to Cart',
        description: `${equipment.name} has been added to your cart.`,
      });
    } catch (error) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast ({
        title: 'Error',
        description: 'Failed to add item to cart. Please try again.',
        variant: 'destructive',
      });

    } finally {
      setIsAdding(false)
    }

          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
=======
          quantity}}),

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Loading state
  if (loading) {
    return (
      <>
        <NextSeo title="Loading Equipment..." />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div>
              <p className="text-zion-slate-light">Loading equipment details...</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  const in_cart = items.some (item => item.id === equipment?.id);
  // Loading state;
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <NextSeo title='Loading Equipment...' />;
        <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
          <div className='container mx - auto'>;
            <div className='text - center py - 20'>;
              <div className='animate - spin rounded - full h - 12 w - 12 border - b-2 border - zion - cyan mx - auto mb - 4'></div>;
              <p className='text - zion - slate - light'>;
                Loading equipment details...;
              </p>;
            </div>;
          </div>;
        </div>;
      </>);
  }

          } catch (storageError) {;
            logErrorToProduction('Error reading from sessionStorage:', {;
              data: storageError,;
            });
          }
        }

        // If not found anywhere, set error;
        setError('Equipment not found');
        setLoading(false);
      } catch (error) {;
        logErrorToProduction('Error loading equipment:', { data: error });
        setError('Failed to load equipment details');
        setLoading(false);
      }
    }

    loadEquipment();
  }, [id]);

  const handleAddToCart = async () => {;
    if (!equipment || !isAuthenticated) {;
      toast({;
        title: 'Authentication Required',;
        description: 'Please log in to add items to cart',;
        variant: 'destructive',;
      });
      return;
    }

    setIsAdding(true);
    try {;
      dispatch({;
        type: 'ADD_ITEM',;
        payload: {;
          id: equipment && equipment.id,;
          name: equipment && equipment.name,;
          price: equipment && equipment.price,;
          quantity,;
        },;
      });

      toast({;
        title: 'Added to Cart',;
        description: `${equipment && equipment.name} has been added to your cart.`,;
      });
    } catch (error) {;
      toast({;
        title: 'Error',;
        description: 'Failed to add item to cart. Please try again.',;
        variant: 'destructive',;
      });
    } finally {;
      setIsAdding(false);
    }
  };

  const inCart = items && items.some(item => item && item.id === equipment?.id);

  // Loading state;
  if (loading) {;
    return (
      <>;
        <NextSeo title='Loading Equipment...' />;
        <div className='min-h-screen bg-zion-blue py-12 px-4'>;
          <div className='container mx-auto'>;
            <div className='text-center py-20'>;
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4'></div>;
              <p className='text-zion-slate-light'>;
                Loading equipment details...;
              </p>;
            </div>;
          </div>;
        </div>;
      </>;
    );
  }

  // Error state;
  if (error || !equipment) {;

    return (
      <>;
<<<<<<< HEAD
<<<<<<< HEAD
  }
  // Error state
  if (error |!equipment) {
    return (
      <>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <NextSeo
          title="Equipment Not Found"
          description="The equipment you're looking for doesn't exist or has been removed."
        />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </h1>;
              <p className='text-zion-slate-light mb-8 max-w-md mx-auto'>;
                {error === 'Equipment not found';
                  ? "The equipment you're looking for doesn't exist or has been removed.";
                  : error ||;

                    "We couldn't load the equipment details. Please try again."}
              </p>;
              <div className='space-x-4'>;
                <Button
                  onClick={() => router && router.back()}
                  variant='outline';
                  className='border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue'                >;
                  <ArrowLeft className='h-4 w-4 mr-2' />;
                  Go Back;
                </Button>;
                <Button

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}
              </h1>
<<<<<<< HEAD
<<<<<<< HEAD
              <p className='text-zion-slate-light mb-8 max-w-md mx-auto'>
                {error === 'Equipment not found'
                  ? "The equipment you're looking for doesn't exist or has been removed."
                  : error |
                    "We couldn't load the equipment details. Please try again."}
              </p>
              <div className='space-x-4'>
                <Button
                  onClick={() => router.back()}
                  variant='outline'
                  className='border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue'                >
                  <ArrowLeft className='h-4 w-4 mr-2' />
                  Go Back
                </Button>
                <Button
                  onClick={() => router.push('/equipment')}
                  className='bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue'                >
              <p className="text-zion-slate-light mb-8 max-w-md mx-auto">
                {error === 'Equipment not found' 
                  ? "The equipment you're looking for doesn't exist or has been removed." 
                  : error || "We couldn't load the equipment details. Please try again."
                }
              </p>
              <div className="space-x-4">
                <Button 
                  onClick={() => router.back()} 
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
                <Button 
                  onClick={() => router.push('/equipment')}
                  className="bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue"
                >
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Browse Equipment
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    )
<<<<<<< HEAD
<<<<<<< HEAD
              : undefined

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  onClick={() => router && router.push('/equipment')}
                  className='bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue'                >;
                  Browse Equipment;
                </Button>;
              </div>;
            </motion && motion.div>;
          </div>;
        </div>;
      </>;
    );

  }
  return (
    <>;
      <NextSeo
        title={`${equipment && equipment.name} - Zion Marketplace`}
        description = {equipment && equipment.description,}
=======
  }
  return (
    <>
      <NextSeo
        title={`${equipment.name} - Zion Marketplace`}
        description = {equipment.description,}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        openGraph={{

          title: `${equipment && equipment.name} - Zion Marketplace`,
          description: equipment && equipment.description,
          images:
            equipment && equipment.images.length> 0 && equipment && equipment.images[0];
              ? [{ url: equipment && equipment.images[0] }];
              : undefined,;
<<<<<<< HEAD


              : undefined,

;
    loadEquipment();
  }, [id]),;
  const handleAddToCart = async () => {;
    if (!equipment || !isAuthenticated) {;
      toast({;
        title: "Authentication Required",;
        description: "Please log in to add items to cart",;
        variant: "destructive"}),;
      return;
    }
;
    setIsAdding(true),;
    try {;
      dispatch({;
        type: 'ADD_ITEM',;
        payload: {;
          id: equipment.id,;
          name: equipment.name,;
          price: equipment.price,;
          quantity}}),;
      toast({;
        title: "Added to Cart",;
        description: `${equipment.name} has been added to your cart.`});
    } catch (error) {;
      toast({;
        title: "Error",;
        description: "Failed to add item to cart. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsAdding(false);
    }
  },;
  const inCart = items.some(item => item.id === equipment?.id),;
  // Loading state;
  if (loading) {;
    return (;
      <>;
        <NextSeo title="Loading Equipment..." />;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <div className="text-center py-20">;
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div>;
              <p className="text-zion-slate-light">Loading equipment details...</p>;
            </div>;
          </div>;
        </div>;
      </>;
    );
  }
;
  // Error state;
  if (error || !equipment) {;
    return (;
      <>;
        <NextSeo;
          title="Equipment Not Found";
          description="The equipment you're looking for doesn't exist or has been removed.";
        />;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <motion.div;
              className="text-center py-20";
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >;
              <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6" />;
              <h1 className="text-3xl font-bold text-white mb-4">;
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}
              </h1>;
              <p className="text-zion-slate-light mb-8 max-w-md mx-auto">;
                {error === 'Equipment not found';
                  ? "The equipment you're looking for doesn't exist or has been removed.";
                  : error || "We couldn't load the equipment details. Please try again.";
                }
              </p>;
              <div className="space-x-4">;
                <Button;
                  onClick={() => router.back()} ;
                  variant="outline";
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue";
                >;
                  <ArrowLeft className="h-4 w-4 mr-2" />;
                  Go Back;
                </Button>;
                <Button;
                  onClick={() => router.push('/equipment')}
                  className="bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue";
                >;
                  Browse Equipment;
                </Button>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </>;
    );
  }
;
  return (;
    <>;
      <NextSeo;
        title={`${equipment.name} - Zion Marketplace`}
        description={equipment.description}
        openGraph={{;
          title: `${equipment.name} - Zion Marketplace`;
          description: equipment.description;
          images: equipment.images.length > 0 && equipment.images[0] ? [{ url: equipment.images[0] }] : undefined;
<<<<<<< HEAD
  }
  return (
    <>
      <NextSeo
        title={`${equipment.name} - Zion Marketplace`}
        description = {equipment.description,}
        openGraph={{
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          title: `${equipment.name} - Zion Marketplace`
          description: equipment.description
          images:
            equipment.images.length > 0 && equipment.images[0]
              ? [{ url: equipment.images[0] }]
<<<<<<< HEAD
              : undefined


        }}
          <motion.nav
            className='flex mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >
              : undefined,
;
    loadEquipment();
  }, [id]),;
  const handleAddToCart = async () => {;
    if (!equipment || !isAuthenticated) {;
      toast({;
        title: "Authentication Required",;
        description: "Please log in to add items to cart",;
        variant: "destructive"}),;
      return;
    }
;
    setIsAdding(true),;
    try {;
      dispatch({;
        type: 'ADD_ITEM',;
        payload: {;
          id: equipment.id,;
          name: equipment.name,;
          price: equipment.price,;
          quantity}}),;
      toast({;
        title: "Added to Cart",;
        description: `${equipment.name} has been added to your cart.`});
    } catch (error) {;
      toast({;
        title: "Error",;
        description: "Failed to add item to cart. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsAdding(false);
    }
  },;
  const inCart = items.some(item => item.id === equipment?.id),;
  // Loading state;
  if (loading) {;
    return (;
      <>;
        <NextSeo title="Loading Equipment..." />;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <div className="text-center py-20">;
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div>;
              <p className="text-zion-slate-light">Loading equipment details...</p>;
            </div>;
          </div>;
        </div>;
      </>;
    );
  }
;
  // Error state;
  if (error || !equipment) {;
    return (;
      <>;
        <NextSeo;
          title="Equipment Not Found";
          description="The equipment you're looking for doesn't exist or has been removed.";
        />;
        <div className="min-h-screen bg-zion-blue py-12 px-4">;
          <div className="container mx-auto">;
            <motion.div;
              className="text-center py-20";
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >;
              <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6" />;
              <h1 className="text-3xl font-bold text-white mb-4">;
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}
              </h1>;
              <p className="text-zion-slate-light mb-8 max-w-md mx-auto">;
                {error === 'Equipment not found';
                  ? "The equipment you're looking for doesn't exist or has been removed.";
                  : error || "We couldn't load the equipment details. Please try again.";
                }
              </p>;
              <div className="space-x-4">;
                <Button;
                  onClick={() => router.back()} ;
                  variant="outline";
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue";
                >;
                  <ArrowLeft className="h-4 w-4 mr-2" />;
                  Go Back;
                </Button>;
                <Button;
                  onClick={() => router.push('/equipment')}
                  className="bg-zion-cyan hover: bg-zion-cyan/90 text-zion-blue";
                >;
                  Browse Equipment;
                </Button>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </>;
    );
  }
;
  return (;
    <>;
      <NextSeo;
        title={`${equipment.name} - Zion Marketplace`}
        description={equipment.description}
        openGraph={{;
          title: `${equipment.name} - Zion Marketplace`;
          description: equipment.description;
          images: equipment.images.length > 0 && equipment.images[0] ? [{ url: equipment.images[0] }] : undefined;
        }}
=======


        }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


        }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />
      <div className="min-h-screen bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
<<<<<<< HEAD
<<<<<<< HEAD
              Equipment
            <span className='mx-2 text-zion-slate-light'>/</span>
            <span className='text-zion-slate-light'>{equipment.name}</span>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion.nav
            className='flex mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <motion.nav 
            className="flex mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >;
            <button;
              onClick={() => router.push('/equipment')}
              className="text-zion-cyan hover:text-white transition-colors"
            >
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Equipment
            </button>
            <span className="mx-2 text-zion-slate-light">/</span>
            <span className="text-zion-slate-light">{equipment.name}</span>
          </motion.nav>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='grid lg:grid-cols-2 gap-12'>
          </motion.nav>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              onClick={() => router && router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >;
              Equipment;
            </button>;
            <span className='mx-2 text-zion-slate-light'>/</span>;
            <span className='text-zion-slate-light'>{equipment && equipment.name}</span>;
          </motion && motion.nav>;

          <div className='grid lg:grid-cols-2 gap-12'>;



          <div className="grid lg:grid-cols-2 gap-12">

<<<<<<< HEAD
<<<<<<< HEAD
            {/* Images */}
            <motion&& motion.div
              className='space-y-4'

          <div className="grid lg:grid-cols-2 gap-12">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Images */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AspectRatio ratio={1} className="bg-zion-blue-light rounded-lg overflow-hidden">
                <ImageWithRetry
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  src={
                    equipment.images[selectedImageIndex] |
                    equipment.images[0] |
                    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'
                  }
<<<<<<< HEAD
                  alt={equipment.name}
                  className='object-cover'                />
              </AspectRatio>
              {equipment.images.length > 1 && (
                <div className='grid grid-cols-4 gap-2'>
                  {equipment.images.map((image, index) => (                    <button
                      key = {index,}
                      onClick = {(,) => setSelectedImageIndex(index),}

=======

                    equipment && equipment.images[selectedImageIndex] ||
                    equipment && equipment.images[0] ||
                    'https://images && images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'
                  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  alt={equipment && equipment.name}
                  className='object-cover'                />;
              </AspectRatio>;

              {equipment && equipment.images.length > 1 && (;
                <div className='grid grid-cols-4 gap-2'>;
                  {equipment && equipment.images.map((image, index) => (                    <button

                      key = {index,}
                      onClick = {(,) => setSelectedImageIndex(index),}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  src={equipment.images[selectedImageIndex] || equipment.images[0] || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'}
                  alt={equipment.name}
                  className="object-cover"
                />
              </AspectRatio>
              
              {equipment.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {equipment.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${;
                        selectedImageIndex === index;
                          ? 'border-zion-cyan';
                          : 'border-transparent hover:border-zion-slate-light';
                      }`}
                    >;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <ImageWithRetry;
                        src={image}
                        alt={`${equipment.name} view ${index + 1}`}
                        className="object-cover"
<<<<<<< HEAD
<<<<<<< HEAD
=======


                      />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


                      />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </button>
                  ))}
                </div>;
              )}

            </motion && motion.div>;


            {/* Product Details */}
            <motion.div
              className='space-y-6'
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.div 
              className="space-y-6"


<<<<<<< HEAD
<<<<<<< HEAD
              initial={{ opacity: 0, x: 20 }}
              transition={{ delay: 0 && 0.4 }}>;
              {/* Header */}
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
            {/* Product Details */}
            <motion.div
              className='space-y-6'
            <motion.div 
              className="space-y-6"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Header */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='space-y-2'>
                <div className='flex items-center gap-2 mb-2'>
                  <Badge
                    variant='secondary'
                    className='bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20'
                  >
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20">
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className='border-zion-slate-light text-zion-slate-light'>;
                    {equipment && equipment.brand}
                  </Badge>;
                </div>;

                <h1 className='text-3xl font-bold text-white'>;
                  {equipment && equipment.name}
                </h1>;

                {equipment && equipment.rating && (;
                  <div className='flex items-center gap-2'>;
                    <div className='flex items-center'>;

                      {[...Array(5)].map((_, i) => (                        <Star
                          key = {i,}
                          className={`h-4 w-4 ${
<<<<<<< HEAD
                            i < Math && Math.floor(equipment && equipment.rating!)
=======
                            i < Math.floor(equipment.rating!)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20">

                    {equipment.category}
                  </Badge>
                  <Badge variant="outline" className="border-zion-slate-light text-zion-slate-light">
                    {equipment.brand}
                  </Badge>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h1 className='text-3xl font-bold text-white'>
                  {equipment.name}
                </h1>
                {equipment.rating && (
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (                        <Star
                          key = {i,}
                          className={`h-4 w-4 ${
                            i < Math.floor(equipment.rating!)
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                
                <h1 className="text-3xl font-bold text-white">{equipment.name}</h1>
                
                {equipment.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${;
                            i < Math.floor(equipment.rating!);
                              ? 'text-yellow-400 fill-current';
                              : 'text-zion-slate-light';

                          }`}
<<<<<<< HEAD
<<<<<<< HEAD
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zion-slate-light">
                      {equipment.rating?.toFixed(1)} ({equipment.reviewCount} reviews)
                    </span>
                  </div>
                )}
              </div>
              {/* Price */}
              <div className='bg-zion-blue-light rounded-lg p-4'>
                <div className='text-3xl font-bold text-zion-cyan mb-2'>
                  {formatPrice(equipment.price)}
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <Clock className='h-4 w-4 text-zion-cyan' />
                  <span
                    className={
                      equipment.inStock ? 'text-green-400' : 'text-yellow-400'
                    }
                  >
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-white'>
                  Description
                </h3>
                <p className='text-zion-slate-light leading-relaxed'>
                  {equipment.description}
                </p>
              {/* Specifications */}
              {equipment.specifications.length > 0 && (
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white'>
                    Specifications
                  </h3>
                  <div className='grid gap-2'>
                    {equipment.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className='flex justify-between py-2 border-b border-zion-blue-light'
                      >
                        <span className='text-zion-slate-light'>
                          {spec.name}
                        </span>
                        <span className='text-white'>
                          {spec.value |'Enterprise Grade'}
                        </span>                      </div>
                  </div>
                </div>
              )}
              {/* Add to Cart */}
              <div className='space-y-4 pt-6 border-t border-zion-blue-light'>
                <div className='flex items-center gap-4'>
                  <label className='text-white font-medium'>Quantity:</label>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className='h-8 w-8 p-0'                    >
                    </Button>
                    <span className="text-white w-8 text-center">{quantity}</span>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setQuantity(quantity + 1)}
                      className='h-8 w-8 p-0'                    >
                    </Button>
                  </div>
                </div>
                  disabled={isAdding |!equipment.inStock}
ursor/fix-website-loading-errors-and-merge-6662
=======
                        />;
                      ))}
                    </div>;
                    <span className='text-sm text-zion-slate-light'>;
                      {equipment && equipment.rating?.toFixed(1)} ({equipment && equipment.reviewCount}{' '}
                      reviews);
                    </span>;
                  </div>;
                )}

              </div>;


              {/* Price */}
              <div className='bg-zion-blue-light rounded-lg p-4'>;
                <div className='text-3xl font-bold text-zion-cyan mb-2'>;
                  {formatPrice(equipment && equipment.price)}
                </div>;
                <div className='flex items-center gap-2 text-sm'>;
                  <Clock className='h-4 w-4 text-zion-cyan' />;
                  <span
                    className={

              </div>
              {/* Price */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="bg-zion-blue-light rounded-lg p-4">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {formatPrice(equipment.price)}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-zion-cyan" />
                  <span className={equipment.inStock ? 'text-green-400' : 'text-yellow-400'}>


                    {equipment.expectedShipping}
                  </span>
                </div>
              </div>
  // Error state;
  // Check condition
if ( {) {
  $2
}
    return (
      <>;
        <NextSeo;
          title='Equipment Not Found';
          description="The equipment you're looking for doesn't exist or has been removed.";
        />;
        <div className='min - h-screen bg - zion - blue py - 12 px - 4'>;
          <div className='container mx - auto'>;
            <motion.div;
              className='text - center py - 20';
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
            >;
              <AlertTriangle className='mx - auto h - 16 w - 16 text - red - 500 mb - 6' />;
              <h1 className='text - 3xl font - bold text - white mb - 4'>;
                {error === 'Equipment not found';
                  ? 'Equipment Not Found';
                  : 'Something went wrong'}
              </h1>;
              <p className='text - zion - slate - light mb - 8 max - w-md mx - auto'>;
                {error === 'Equipment not found';
                  ? "The equipment you're looking for doesn't exist or has been removed.";
                  : error ||;
                    "We couldn't load the equipment details. Please try again."}
              </p>;
              <div className='space - x-4'>;
                <Button;
                  on_click={() => router.back ()}
                  variant='outline';
                  className='border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - zion - blue'                >;
                  <ArrowLeft className='h - 4 w - 4 mr - 2' />;
                  Go Back;
                </Button>;
                <Button;
                  on_click={() => router.push ('/equipment')}
                  className='bg - zion - cyan hover:bg - zion - cyan / 90 text - zion - blue'                >;
                  Browse Equipment;
                </Button>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </>);
  }
  return (
    <>;
      <NextSeo;
        title={`${equipment.name} - Zion Marketplace`}
        description = {equipment.description, }
        open_graph={{
          title: `${equipment.name} - Zion Marketplace`,
          description: equipment.description,
          images:;
            equipment.images.length > 0 && equipment.images[0];
              ? [{ url: equipment.images[0] }];
              : undefined,
        }}
      />;
      <div className='min - h-screen bg - zion - blue py - 8 px - 4'>;
        <div className='container mx - auto'>;
          {/* Breadcrumb */}
          <motion.nav;
            className='flex mb - 8';
            initial={{ opacity: 0, coordinate_y: -20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
          >;
            <button;
              on_click={() => router.push ('/equipment')}
              className='text - zion - cyan hover:text - white transition - colors'            >;
              Equipment;
            </button>;
            <span className='mx - 2 text - zion - slate - light'>/</span>;
            <span className='text - zion - slate - light'>{equipment.name}</span>;
          </motion.nav>;
          <div className='grid lg:grid - cols - 2 gap - 12'>;
            {/* Images */}
            <motion.div;
              className='space - y-4';
              initial={{ opacity: 0, coordinate_x: -20 }}
              animate={{ opacity: 1, coordinate_x: 0 }}
              transition={{ delay: 0.2 }}
            >;
              <AspectRatio;
                ratio={1}
                className='bg - zion - blue - light rounded - lg overflow - hidden';
              >;
                <ImageWithRetry;
                  src={
                    equipment.images[selectedImageIndex] ||;
                    equipment.images[0] ||;
                    'https://images.unsplash.com / photo - 1558494949 - ef010cbdcc31?auto = format & fit = crop & w=800 & h=500';
                  }
                  alt={equipment.name}
                  className='object - cover'                />;
              </AspectRatio>;
              {equipment.images.length > 1 && (
                <div className='grid grid - cols - 4 gap - 2'>;
                  {equipment.images.map ((image, index) => (                    <button;
                      key = {index, }
                      on_click = {(, ) => setSelectedImageIndex (index), }
                      className={`aspect - square rounded - md overflow - hidden border - 2 transition - all ${
                        selectedImageIndex === index;
                          ? 'border - zion - cyan';
                          : 'border - transparent hover:border - zion - slate - light';
                      }`}
                    >;
                      <ImageWithRetry;
                        src = {image, }
                        alt={`${equipment.name} view ${index + 1}`}
                        className='object - cover';
                      />;
                    </button>))}
                </div>)}
            </motion.div>;
            {/* Product Details */}
            <motion.div;
              className='space - y-6';
              initial={{ opacity: 0, coordinate_x: 20 }}
              animate={{ opacity: 1, coordinate_x: 0 }}
              transition={{ delay: 0.4 }}
            >;
              {/* Header */}
              <div className='space - y-2'>;
                <div className='flex items - center gap - 2 mb - 2'>;
                  <Badge;
                    variant='secondary';
                    className='bg - zion - cyan / 10 text - zion - cyan border - zion - cyan / 20';
                  >;
                    {equipment.category}
                  </Badge>;
                  <Badge;
                    variant='outline';
                    className='border - zion - slate - light text - zion - slate - light';
                  >;
                    {equipment.brand}
                  </Badge>;
                </div>;
                <h1 className='text - 3xl font - bold text - white'>;
                  {equipment.name}
                </h1>;
                {equipment.rating && (
                  <div className='flex items - center gap - 2'>;
                    <div className='flex items - center'>;
                      {[...Array (5)].map ((_, i) => (                        <Star;
                          key = {i, }
                          className={`h - 4 w - 4 ${
                            i < Math.floor (equipment.rating!);
                              ? 'text - yellow - 400 fill - current';
                              : 'text - zion - slate - light';
                          }`}
                        />))}
                    </div>;
                    <span className='text - sm text - zion - slate - light'>;
                      {equipment.rating?.to_fixed (1)} ({equipment.review_count}{' '}
                      reviews);
                    </span>;
                  </div>)}
              </div>;
              {/* Price */}
              <div className='bg - zion - blue - light rounded - lg p - 4'>;
                <div className='text - 3xl font - bold text - zion - cyan mb - 2'>;
                  {format_price (equipment.price)}
                </div>;
                <div className='flex items - center gap - 2 text - sm'>;
                  <Clock className='h - 4 w - 4 text - zion - cyan' />;
                  <span;
                    className={
                      equipment.in_stock ? 'text - green - 400' : 'text - yellow - 400';
                    }
                  >;
                    {equipment.expected_shipping}
                  </span>;
                </div>;
              </div>;
              {/* Description */}


              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Description</h3>
                <p className="text-zion-slate-light leading-relaxed">{equipment.description}</p>


              </div>
                      equipment && equipment.inStock ? 'text-green-400' : 'text-yellow-400'
                    }>;
                    {equipment && equipment.expectedShipping}
                  </span>;
                </div>;
              </div>;

              {/* Description */}
              <div className='space-y-4'>;
                <h3 className='text-lg font-semibold text-white'>;
                  Description;
                </h3>;
                <p className='text-zion-slate-light leading-relaxed'>;
                  {equipment && equipment.description}
                </p>;
              </div>;

              {/* Specifications */}

                        className='flex justify-between py-2 border-b border-zion-blue-light'>;
                        <span className='text-zion-slate-light'>;
                          {spec && spec.name}
                        </span>;
                        <span className='text-white'>;
                          {spec && spec.value || 'Enterprise Grade'}
                        </span>                      </div>;

              {equipment.specifications.length > 0 && (

<<<<<<< HEAD
              {/* Description */}
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-white'>
                  Description
                </h3>
                <p className='text-zion-slate-light leading-relaxed'>
                  {equipment.description}
                </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Description</h3>
                <p className="text-zion-slate-light leading-relaxed">{equipment.description}</p>
              </div>
              {/* Specifications */}
              {equipment.specifications.length > 0 && (
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white'>
                    Specifications
                  </h3>
                  <div className='grid gap-2'>
                    {equipment.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className='flex justify-between py-2 border-b border-zion-blue-light'
                      >
                        <span className='text-zion-slate-light'>
                          {spec.name}
                        </span>
                        <span className='text-white'>
                          {spec.value |'Enterprise Grade'}
                        </span>                      </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Specifications</h3>
                  <div className="grid gap-2">
                    {equipment.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-zion-blue-light">
                        <span className="text-zion-slate-light">{spec.name}</span>
                        <span className="text-white">{spec.value || 'Enterprise Grade'}</span>
                      </div>
<<<<<<< HEAD
                    ))}
                  </div>
                </div>
              )}
              {/* Add to Cart */}
              <div className='space-y-4 pt-6 border-t border-zion-blue-light'>
                <div className='flex items-center gap-4'>
                  <label className='text-white font-medium'>Quantity:</label>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className='h-8 w-8 p-0'                    >
=======

                    ))}
                  </div>;
                </div>;
              )}
              {/* Add to Cart */}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="space-y-4 pt-6 border-t border-zion-blue-light">
                <div className="flex items-center gap-4">
                  <label className="text-white font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8 p-0"
                    >
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      -
                    </Button>
                    <span className="text-white w-8 text-center">{quantity}</span>
                    <Button
<<<<<<< HEAD
                      variant='outline'
                      size='sm'
                      onClick={() => setQuantity(quantity + 1)}
                      className='h-8 w-8 p-0'                    >
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      +
                    </Button>
                  </div>
                </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      className='h-8 w-8 p-0'                    >;
                </p>;
              </div>;
              {/* Specifications */}
              {equipment.specifications.length > 0 && (
                <div className='space - y-4'>;
                  <h3 className='text - lg font - semibold text - white'>;
                    Specifications;
                  </h3>;
                  <div className='grid gap - 2'>;
                    {equipment.specifications.map ((spec, index) => (
                      <div;
                        key={index}
                        className='flex justify - between py - 2 border - b border - zion - blue - light';
                      >;
                        <span className='text - zion - slate - light'>;
                          {spec.name}
                        </span>;
                        <span className='text - white'>;
                          {spec.value || 'Enterprise Grade'}
                        </span>                      </div>))}
                  </div>;
                </div>)}
              {/* Add to Cart */}
              <div className='space - y-4 pt - 6 border - t border - zion - blue - light'>;
                <div className='flex items - center gap - 4'>;
                  <label className='text - white font - medium'>Quantity:</label>;
                  <div className='flex items - center gap - 2'>;
                    <Button;
                      variant='outline';
                      size='sm';
                      on_click={() => set_quantity (Math.max (1, quantity - 1))}
                      className='h - 8 w - 8 p - 0'                    >;
                      -;
                    </Button>;
                    <span className='text - white w - 8 text - center'>;
                      {quantity}
                    </span>;
                    <Button;
                      variant='outline';
                      size='sm';
                      on_click={() => set_quantity (quantity + 1)}
                      className='h - 8 w - 8 p - 0'                    >;

                      +;
                    </Button>;
                  </div>;
                </div>;


                  disabled={isAdding || !equipment.inStock}


<<<<<<< HEAD
                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding |!equipment.inStock}
                  disabled={isAdding || !equipment.inStock}
                  size='lg'
                  variant='outline'
                  className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'
                  data-testid='add-to-cart-button'                >
                  <ShoppingCart className='h-4 w-4 mr-2' />
                  {isAdding ? 'Adding...' : inCart ? 'In Cart' : 'Add to Cart'}
                
                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding || !equipment.inStock}
                  size="lg"
                  variant="outline"
                  className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  data-testid="add-to-cart-button"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isAdding ? 'Adding...' : inCart ? 'In Cart' : 'Add to Cart'}
=======
                  size='lg'
                  variant='outline'
                  className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'
                  data-testid='add-to-cart-button'>;
                  <ShoppingCart className='h-4 w-4 mr-2' />;
                  {isAdding ? 'Adding...' : inCart ? 'In Cart' : 'Add to Cart'}

                </Button>;
              </div>;


              {/* Additional Info */}
              <div className='space-y-4 border-t border-zion-blue-light pt-4'>;
                {/* Shipping */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='flex gap-3 text-zion-slate-light'>;
                  <Truck className='h-5 w-5 text-zion-cyan flex-shrink-0' />;
                  <div>;
                    <p className='text-white text-sm font-medium'>;
                      Free Shipping;
                    </p>;
                    <p className='text-xs'>;
                <Button;
                  on_click={handleAddToCart}
                  disabled={is_adding || !equipment.in_stock}
                  size='lg';
                  variant='outline';
                  className='w - full border - zion - purple text - zion - cyan hover:bg - zion - purple / 10';
                  data - testid='add - to - cart - button'                >;
                  <ShoppingCart className='h - 4 w - 4 mr - 2' />;
                  {is_adding ? 'Adding...' : in_cart ? 'In Cart' : 'Add to Cart'}
                </Button>;
              </div>;
              {/* Additional Info */}
<<<<<<< HEAD
              <div className="space-y-4 border-t border-zion-blue-light pt-4">
                <div className="flex gap-3 text-zion-slate-light">
                  <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Free Shipping</p>
                    <p className="text-xs">For orders over $100 within the US</p>
                  </div>
                </div>
                {equipment.warranty && (
                  <div className="flex gap-3 text-zion-slate-light">
                    <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Warranty</p>
                      <p className="text-xs">{equipment.warranty}</p>
                    </div>
                  </div>
                )}
;
                {equipment.returnPolicy && (
                  <div className="flex gap-3 text-zion-slate-light">
                    <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Returns</p>
                      <p className="text-xs">{equipment.returnPolicy}</p>
                    </div>
                  </div>
                )}
  equipment.returnPolicy
}</p> </div> </div>)
}</div> </motion.div> </div> </div> </div> </>)
}'"}
ursor/fix-website-loading-errors-and-merge-6662

                </Button>
              </div>
              {/* Additional Info */}
              <div className='space-y-4 border-t border-zion-blue-light pt-4'>
                
                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding || !equipment.inStock}
                  size="lg"
                  variant="outline"
                  className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  data-testid="add-to-cart-button"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isAdding ? 'Adding...' : inCart ? 'In Cart' : 'Add to Cart'}
                </Button>;
              </div>;
              {/* Additional Info */}
              <div className="space-y-4 border-t border-zion-blue-light pt-4">
                {/* Shipping */}
                <div className="flex gap-3 text-zion-slate-light">
                  <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Free Shipping</p>
                    <p className="text-xs">For orders over $100 within the US</p>
                  </div>
                </div>
                
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Warranty */}
                {equipment.warranty && (
                  <div className="flex gap-3 text-zion-slate-light">
                    <Shield className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Warranty</p>
                      <p className="text-xs">{equipment.warranty}</p>
                    </div>
                  </div>
                )}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;


                {/* Warranty */}
                {equipment && equipment.warranty && (;
                  <div className='flex gap-3 text-zion-slate-light'>;
                    <Shield className='h-5 w-5 text-zion-cyan flex-shrink-0' />;
                    <div>;
                      <p className='text-white text-sm font-medium'>Warranty</p>;
                      <p className='text-xs'>{equipment && equipment.warranty}</p>;
                    </div>;
                  </div>;
                )}
<<<<<<< HEAD
=======
                        />;
                      ))}
                    </div>;
                    <span className='text-sm text-zion-slate-light'>;
                      {equipment && equipment.rating?.toFixed(1)} ({equipment && equipment.reviewCount}{' '}
                      reviews);
                    </span>;
                  </div>;
                )}

              </div>;


              {/* Price */}
;

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Return Policy */}
                {equipment.returnPolicy && (
                  <div className="flex gap-3 text-zion-slate-light">
                    <RotateCcw className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">Returns</p>
                      <p className="text-xs">{equipment.returnPolicy}</p>
                    </div>
                  </div>
                )}
<<<<<<< HEAD
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}finally {
  setIsAdding (false)
}
const inCart = items.some (item => item.id === equipment?.id)
return (<> <NextSeo title="Loading Equipment..." /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <div className="text-center py-20" > <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4" ></div> <p className="text-zion-slate-light" >Loading equipment details...</p> </div> </div> </div> </> //Error state if (error |!equipment) {'"
  return (<> <NextSeo title="Equipment Not Found" description="The equipment you're looking for doesn't exist or has been removed." /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <motion.div </p> <div className="space-x-4" > <Button > <ArrowLeft className="h-4 w-4 mr-2" /> Go Back </Button> <Button
}return (<> <NextSeo title= {
  `$ {
  equipment.name
}- Zion Marketplace`
}description= {
  equipment.description
}openGraph= {
  {
  title: `$ {
  equipment.name
}- Zion Marketplace`, description: equipment.description, images: equipment.images.length > 0 && equipment.images[0] ? [ {
  url: equipment.images[0]
}] : undefined
}/> key= {
  index
}onClick={
  () => setSelectedImageIndex (index)
}className= {
  `aspect-square rounded-md overflow-hidden border-2 transition-all $ {'
  selectedImageIndex === index ? 'border-zion-cyan' : 'border-transparent hover:border-zion-slate-light'
}`
}> <ImageWithRetry /> </button>) )
}</div>)
}</motion.div> {
  /* Product Details */
}<motion.div <Star key= {
  i
}className= {
  `h-4 w-4 $ {'
  i < Math.floor (equipment.rating!) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
}`
}/>) )
}</div> </span> </div>)
}</div> </span> </div> </div> </div>) )
}</div> </div>) "
}> + </Button> </div> </div> <Button <div> <p className="text-white text-sm font-medium" >Free Shipping</p> <p className="text-xs" >For orders over $100 within the US</p> </div> </div> <div> <p className="text-white text-sm font-medium" >Warranty</p> <p className="text-xs" > {
  equipment.warranty
}</p> </div> </div>) "
}<div> <p className="text-white text-sm font-medium" >Returns</p> <p className="text-xs" > {
  equipment.returnPolicy
}</p> </div> </div>)
}</div> </motion.div> </div> </div> </div> </>)
}'"}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                {/* Return Policy */}
                {equipment && equipment.returnPolicy && (;
                  <div className='flex gap-3 text-zion-slate-light'>;
                    <RotateCcw className='h-5 w-5 text-zion-cyan flex-shrink-0' />;
                    <div>;
                      <p className='text-white text-sm font-medium'>Returns</p>;
                      <p className='text-xs'>{equipment && equipment.returnPolicy}</p>;
                    </div>;
                  </div>;
                )}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  equipment.returnPolicy 
}</p> </div> </div>) 
}</div> </motion.div> </div> </div> </div> </>) 
}'"};
;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>;
            </motion && motion.div>;
          </div>;
        </div>;
      </div>;
    </>;
  );



                {/* Warranty */}
                {equipment.warranty && (
                  <div className='flex gap - 3 text - zion - slate - light'>;
                    <Shield className='h - 5 w - 5 text - zion - cyan flex - shrink - 0' />;
                    <div>;
                      <p className='text - white text - sm font - medium'>Warranty</p>;
                      <p className='text - xs'>{equipment.warranty}</p>;
                    </div>;
                  </div>)}
                {/* Return Policy */}
                {equipment.return_policy && (
                  <div className='flex gap - 3 text - zion - slate - light'>;
                    <RotateCcw className='h - 5 w - 5 text - zion - cyan flex - shrink - 0' />;
                    <div>;
                      <p className='text - white text - sm font - medium'>Returns</p>;
                      <p className='text - xs'>{equipment.return_policy}</p>;
                    </div>;
                  </div>)}
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
;
}
;
=======
}
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
