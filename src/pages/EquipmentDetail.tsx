<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: item.id, name: item.title, description: item.description, brand: item.brand |'Unknown', category: item.category, subcategory: item.subcategory, images: item.images |['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'], price: item.price |0, currency: item.currency |'$', rating: item.rating, reviewCount: item.reviewCount, inStock: item.availability === 'In Stock' |!item.availability, expectedShipping: item.availability |'In Stock',  specifications: (item.specifications |[]) .map ( (spec) => ({'
  name: spec, value: ''
}) )
features: item.tags |[];'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: item.id, name: item.title, description: item.description, brand: item.brand || 'Unknown', category: item.category, subcategory: item.subcategory, images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'], price: item.price || 0, currency: item.currency || '$', rating: item.rating, reviewCount: item.reviewCount, inStock: item.availability === 'In Stock' || !item.availability, expectedShipping: item.availability || 'In Stock',  specifications: (item.specifications || []) .map ( (spec) => ({'
  name: spec, value: '' ;
}) );
features: item.tags || [];'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
}
// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =;
  equipment_listings.reduce (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    (acc, item) => {
<<<<<<< HEAD

      acc[item.id] = convertProductListingToEquipmentDetails (item);
      return acc;
    },

=======
      acc[item.id] = convertProductListingToEquipmentDetails(item)
      return acc
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

        // Try to get from session_storage (for dynamically generated equipment);
        // Check condition
if ( {) {
  $2
}

=======
        // Try to get from sessionStorage (for dynamically generated equipment)
        if (typeof window !== 'undefined') {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
                // It's a ProductListing, convert it
                equipmentData = convertProductListingToEquipmentDetails(
                  storedData as ProductListing
                )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              }
              setEquipment(equipmentData)
              setLoading(false)
              return;
            }
<<<<<<< HEAD

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

=======
          } catch (storageError) {
            logErrorToProduction('Error reading from sessionStorage:', {
              data: storageError
            })
          }
        }
        // If not found anywhere, set error
        setError('Equipment not found')
        setLoading(false)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      } catch (error) {
        logErrorToProduction('Error loading equipment:', { data: error })
        setError('Failed to load equipment details')
        setLoading(false)
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
    loadEquipment()
  }, [id])
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    loadEquipment()
  }, [id])
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD

  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({

=======
>>>>>>> 
>>>>>>>   const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({
        title: 'Authentication Required'
        description: 'Please log in to add items to cart'
        variant: 'destructive'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({
        title: 'Authentication Required'
        description: 'Please log in to add items to cart'
        variant: 'destructive'
        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      })
      return;
    }
    setIsAdding(true)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        title: "Authentication Required",
        description: "Please log in to add items to cart",
        variant: "destructive"}),
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({

        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',

<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      })
>>>>>>>       return
    }


    setIsAdding(true),
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        title: "Authentication Required",
        description: "Please log in to add items to cart",
        variant: "destructive"}),
      return
    }

    setIsAdding(true),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    try {
      dispatch({
        type: 'ADD_ITEM'
        payload: {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>     try {
      dispatch({
        type: 'ADD_ITEM'
        payload: {
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          id: equipment.id
          name: equipment.name
          price: equipment.price
          quantity
        }
<<<<<<< HEAD
<<<<<<< HEAD
          quantity,
        },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
          quantity,
        },
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      })
      toast({
        title: 'Added to Cart'
        description: `${equipment.name} has been added to your cart.`
      })
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    try {
      dispatch({
        type: 'ADD_ITEM'
        payload: {

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
=======
    } catch (error) {
      toast({
        title: 'Error'
        description: 'Failed to add item to cart. Please try again.'
        variant: 'destructive'
      })
    } finally {
      setIsAdding(false)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }
  const inCart = items.some(item => item.id === equipment?.id)
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
<<<<<<< HEAD
<<<<<<< HEAD
          quantity,
        },
      });
      toast ({
        title: 'Added to Cart',
        description: `${equipment.name} has been added to your cart.`,
      });
>>>>>>>     } catch (error) {
      toast ({
        title: 'Error',
        description: 'Failed to add item to cart. Please try again.',
        variant: 'destructive',
      });

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          quantity}}),
=======
    } finally {
      setIsAdding (false);
    }
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

      toast({
        title: "Added to Cart",
        description: `${equipment.name} has been added to your cart.`})
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"})
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } finally {
      setIsAdding(false)
    }
<<<<<<< HEAD
  }
  const inCart = items.some(item => item.id === equipment?.id)
<<<<<<< HEAD

=======
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          quantity}}),

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },

  const inCart = items.some(item => item.id === equipment?.id),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // Loading state
=======
>>>>>>>   // Loading state
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  // Loading state
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
  }
  // Error state
  if (error |!equipment) {
    return (
      <>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

              animate={{ opacity: 1, y: 0 }}
            >
              <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}
              </h1>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}
              </h1>
              <p className='text-zion-slate-light mb-8 max-w-md mx-auto'>
                {error === 'Equipment not found'
                  ? "The equipment you're looking for doesn't exist or has been removed."
                  : error |
                    "We couldn't load the equipment details. Please try again."}
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <p className="text-zion-slate-light mb-8 max-w-md mx-auto">
                {error === 'Equipment not found' 
                  ? "The equipment you're looking for doesn't exist or has been removed." 
                  : error || "We couldn't load the equipment details. Please try again."
                }
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  Browse Equipment
=======
>>>>>>>                   Browse Equipment
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
              : undefined
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

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
        openGraph={{

          title: `${equipment && equipment.name} - Zion Marketplace`,
          description: equipment && equipment.description,
          images:
            equipment && equipment.images.length> 0 && equipment && equipment.images[0];
              ? [{ url: equipment && equipment.images[0] }];
              : undefined,;


              : undefined,

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  return (
    <>
      <NextSeo
        title={`${equipment.name} - Zion Marketplace`}
        description = {equipment.description,}
        openGraph={{
          title: `${equipment.name} - Zion Marketplace`
          description: equipment.description
          images:
            equipment.images.length > 0 && equipment.images[0]
              ? [{ url: equipment.images[0] }]
              : undefined
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        }}
=======
<<<<<<< HEAD
>>>>>>>         }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      />
      <div className="min-h-screen bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
<<<<<<< HEAD

              Equipment
            </button>
            <span className="mx-2 text-zion-slate-light">/</span>
            <span className="text-zion-slate-light">{equipment.name}</span>
          </motion.nav>

            {/* Images */}
=======
          <motion.nav
            className='flex mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >
>>>>>>>               Equipment
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }}
      />
      <div className="min-h-screen bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
<<<<<<< HEAD
<<<<<<< HEAD


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
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              Equipment
>>>>>>>             </button>
            <span className='mx-2 text-zion-slate-light'>/</span>
            <span className='text-zion-slate-light'>{equipment.name}</span>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <motion.nav
            className='flex mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >
          <motion.nav 
            className="flex mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >;
            <button;
              onClick={() => router.push('/equipment')}
              className="text-zion-cyan hover:text-white transition-colors"
            >
              Equipment
            </button>
            <span className="mx-2 text-zion-slate-light">/</span>
            <span className="text-zion-slate-light">{equipment.name}</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </motion.nav>
          <div className='grid lg:grid-cols-2 gap-12'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             {/* Images */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <motion.div 
              className="space-y-4"
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
          </motion.nav>

              onClick={() => router && router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >;
              Equipment;
            </button>;
            <span className='mx-2 text-zion-slate-light'>/</span>;
            <span className='text-zion-slate-light'>{equipment && equipment.name}</span>;
          </motion && motion.nav>;

          <div className='grid lg:grid-cols-2 gap-12'>;



          <div className="grid lg:grid-cols-2 gap-12">

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {/* Images */}
            <motion&& motion.div
              className='space-y-4'
>>>>>>>               initial={{ opacity: 0, x: -20 }}
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AspectRatio ratio={1} className="bg-zion-blue-light rounded-lg overflow-hidden">
                <ImageWithRetry
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  src={
                    equipment.images[selectedImageIndex] |
                    equipment.images[0] |
                    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'
                  }
<<<<<<< HEAD
                  alt={equipment && equipment.name}
                  className='object-cover'                />;
              </AspectRatio>;

              {equipment && equipment.images.length > 1 && (;
                <div className='grid grid-cols-4 gap-2'>;
                  {equipment && equipment.images.map((image, index) => (                    <button

=======
                  alt={equipment.name}
                  className='object-cover'                />
              </AspectRatio>
              {equipment.images.length > 1 && (
                <div className='grid grid-cols-4 gap-2'>
                  {equipment.images.map((image, index) => (                    <button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      key = {index,}
                      onClick = {(,) => setSelectedImageIndex(index),}
<<<<<<< HEAD
                      className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? 'border-zion-cyan'
                          : 'border-transparent hover:border-zion-slate-light'
                      }`}
                    >
                      <ImageWithRetry
                        src = {image,}
                        alt={`${equipment.name} view ${index + 1}`}
                        className='object-cover'
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                       />
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${;
                        selectedImageIndex === index;
                          ? 'border-zion-cyan';
                          : 'border-transparent hover:border-zion-slate-light';
                      }`}
                    >;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <ImageWithRetry;
                        src={image}
                        alt={`${equipment.name} view ${index + 1}`}
                        className="object-cover"
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                      />
<<<<<<< HEAD
>>>>>>>                     </button>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
                    </button>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  ))}
                </div>;
              )}

            </motion && motion.div>;


            {/* Product Details */}
<<<<<<< HEAD

<<<<<<< HEAD
=======
            <motion.div
              className='space-y-6'
>>>>>>>               initial={{ opacity: 0, x: 20 }}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

            <motion.div 
              className="space-y-6"


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              initial={{ opacity: 0, x: 20 }}
>>>>>>>               animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 && 0.4 }}>;
              {/* Header */}
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Header */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className='space-y-2'>
                <div className='flex items-center gap-2 mb-2'>
                  <Badge
                    variant='secondary'
                    className='bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20'
                  >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     {equipment.category}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    {equipment.category}
>>>>>>>                   </Badge>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20">
=======
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
                            i < Math && Math.floor(equipment && equipment.rating!)
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20">

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    {equipment.category}
                  </Badge>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Badge variant="outline" className="border-zion-slate-light text-zion-slate-light">
                    {equipment.brand}
                  </Badge>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                          }`}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>>                           }`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                        />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                          }`}
                        />;
>>>>>>>                       ))}
                    </div>;
                    <span className='text-sm text-zion-slate-light'>;
                      {equipment && equipment.rating?.toFixed(1)} ({equipment && equipment.reviewCount}{' '}
                      reviews);
                    </span>;
                  </div>;
                )}

              </div>;


              {/* Price */}
<<<<<<< HEAD

                    {equipment.expectedShipping}
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                          }`}
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     {equipment.expectedShipping}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </span>
                </div>
              </div>
              {/* Description */}
<<<<<<< HEAD

              </div>
              {/* Specifications */}
              {equipment.specifications.length > 0 && (

                    ))}
=======
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-white'>
                  Description
                </h3>
                <p className='text-zion-slate-light leading-relaxed'>
                  {equipment.description}
                </p>
>>>>>>>               </div>
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
>>>>>>>                     ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  </div>
                </div>
              )}
              {/* Add to Cart */}
<<<<<<< HEAD
=======
              <div className='space-y-4 pt-6 border-t border-zion-blue-light'>
                <div className='flex items-center gap-4'>
                  <label className='text-white font-medium'>Quantity:</label>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className='h-8 w-8 p-0'                    >
>>>>>>>                       -
                    </Button>
                    <span className="text-white w-8 text-center">{quantity}</span>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setQuantity(quantity + 1)}
                      className='h-8 w-8 p-0'                    >
>>>>>>>                       +
                    </Button>
                  </div>
                </div>
                  disabled={isAdding |!equipment.inStock}
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className="bg-zion-blue-light rounded-lg p-4">
                <div className="text-3xl font-bold text-zion-cyan mb-2">
                  {formatPrice(equipment.price)}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-zion-cyan" />
                  <span className={equipment.inStock ? 'text-green-400' : 'text-yellow-400'}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    {equipment.expectedShipping}
                  </span>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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

=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Specifications</h3>
                  <div className="grid gap-2">
                    {equipment.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-zion-blue-light">
                        <span className="text-zion-slate-light">{spec.name}</span>
                        <span className="text-white">{spec.value || 'Enterprise Grade'}</span>
                      </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    ))}
                  </div>
                </div>
              )}
              {/* Add to Cart */}
<<<<<<< HEAD
<<<<<<< HEAD


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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                      -
                    </Button>
                    <span className="text-white w-8 text-center">{quantity}</span>
                    <Button

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className='space-y-4 pt-6 border-t border-zion-blue-light'>
                <div className='flex items-center gap-4'>
                  <label className='text-white font-medium'>Quantity:</label>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className='h-8 w-8 p-0'                    >
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
                      -
                    </Button>
                    <span className="text-white w-8 text-center">{quantity}</span>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setQuantity(quantity + 1)}
                      className='h-8 w-8 p-0'                    >
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                      +
                    </Button>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
                  size='lg'
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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


>>>>>>>                   size='lg'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding |!equipment.inStock}
                  disabled={isAdding || !equipment.inStock}
                  size='lg'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  variant='outline'
                  className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'
                  data-testid='add-to-cart-button'                >
                  <ShoppingCart className='h-4 w-4 mr-2' />
                  {isAdding ? 'Adding...' : inCart ? 'In Cart' : 'Add to Cart'}
<<<<<<< HEAD

                </Button>;
              </div>;


              {/* Additional Info */}
              <div className='space-y-4 border-t border-zion-blue-light pt-4'>
<<<<<<< HEAD

<<<<<<< HEAD
=======
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                </Button>;
              </div>;
              {/* Additional Info */}
              <div className="space-y-4 border-t border-zion-blue-light pt-4">
<<<<<<< HEAD

                {/* Shipping */}
=======
>>>>>>>                 {/* Shipping */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="flex gap-3 text-zion-slate-light">
                  <Truck className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Free Shipping</p>
                    <p className="text-xs">For orders over $100 within the US</p>
                  </div>
                </div>
<<<<<<< HEAD

                {/* Warranty */}
=======
>>>>>>>                 {/* Warranty */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

;

                {/* Return Policy */}
=======
;
>>>>>>> >>>>>>>                 {/* Return Policy */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

              </div>;
            </motion.div>;
=======
  equipment.returnPolicy
}</p> </div> </div>)
}</div> </motion.div> </div> </div> </div> </>)
}'"}
ursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
                
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
;

<<<<<<< HEAD
;
=======

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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  equipment.returnPolicy 
}</p> </div> </div>) 
}</div> </motion.div> </div> </div> </div> </>) 
}'"};
;
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>>               </div>;
=======
              </div>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            </motion && motion.div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </div>;
        </div>;
      </div>;
    </>;
  );


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
