<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
// Build sample data from the shared equipment listings;
export const SAMPLE_EQUIPMENT: { [key: string]: EquipmentDetails } =;
  equipment_listings.reduce (
    (acc, item) => {
<<<<<<< HEAD

      acc[item.id] = convertProductListingToEquipmentDetails (item);
      return acc;
    },

=======
      acc[item.id] = convertProductListingToEquipmentDetails(item)
      return acc
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    {} as { [key: string]: EquipmentDetails }
  );
export default /**
 * EquipmentDetail - Function description
 */
function EquipmentDetail() {
  const router = use_router ();
  const { id } = router.query as { id?: string }
  const { is_authenticated, user } = use_auth ();
  const { items, dispatch } = use_cart ();
  const { format_price } = use_currency ();
  const [selectedImageIndex, setSelectedImageIndex] = useState (0);
  const [quantity, set_quantity] = useState (1);
  const [is_adding, setIsAdding] = useState (false);
  const [loading, set_loading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
  const [equipment, set_equipment] = useState < EquipmentDetails | undefined>();
  useEffect ((, ) => {
    async /**
 * load_equipment - Function description
 */
function load_equipment() {
      // Check condition
if ( {) {
  $2
}
        set_loading (false);
        set_error ('No equipment ID provided');
        return;
      }
      try {
        set_loading (true);
        set_error (null);
        // Try to find in static data first;
        const equipmentFromSample = SAMPLE_EQUIPMENT[id];
        // Check condition
if ( {) {
  $2
}
          set_equipment (equipmentFromSample);
          set_loading (false);
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          try {
            const stored = session_storage.get_item (`equipment:${id}`);
            // Check condition
if ( {) {
  $2
}
              const stored_data = JSON.parse (stored);
              // Check if it's already in EquipmentDetails format or needs conversion;
              let equipment_data: EquipmentDetails;
              // Check condition
if ( {) {
  $2
}
                // Already in EquipmentDetails format;
                equipment_data = stored_data;
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
=======
                // It's a ProductListing, convert it
                equipmentData = convertProductListingToEquipmentDetails(
                  storedData as ProductListing
                )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              }
              setEquipment(equipmentData)
              setLoading(false)
              return
            }
<<<<<<< HEAD
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      } catch (error) {
        logErrorToProduction ('Error loading equipment:', { data: error });
        set_error ('Failed to load equipment details');
        set_loading (false);
      }
    }



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
      } catch (error) {
        logErrorToProduction('Error loading equipment:', { data: error })
        setError('Failed to load equipment details')
        setLoading(false)
      }
    }
    loadEquipment()
  }, [id])
    loadEquipment()
  }, [id])
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
    if (!equipment |!isAuthenticated) {
      toast({
        title: 'Authentication Required'
        description: 'Please log in to add items to cart'
        variant: 'destructive'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
=======
        title: 'Authentication Required'
        description: 'Please log in to add items to cart'
        variant: 'destructive'
        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',
=======
        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',


  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      })
      return;
    }
    setIsAdding(true)
        title: "Authentication Required",
        description: "Please log in to add items to cart",
        variant: "destructive"}),
<<<<<<< HEAD
  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',

      })
    }


    setIsAdding(true),
<<<<<<< HEAD



=======
        title: "Authentication Required",
        description: "Please log in to add items to cart",
        variant: "destructive"}),
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return
    }


    setIsAdding(true),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    try {
      dispatch({
        type: 'ADD_ITEM'
        payload: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
    }
  }
  const inCart = items.some(item => item.id === equipment?.id)
=======
=======
      })
      toast({
        title: 'Added to Cart'
        description: `${equipment.name} has been added to your cart.`
      })
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } catch (error) {
      toast({
        title: 'Error'
        description: 'Failed to add item to cart. Please try again.'
        variant: 'destructive'
      })
    } finally {
      setIsAdding(false)
    }
<<<<<<< HEAD
  }
  const inCart = items.some(item => item.id === equipment?.id)
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          quantity}}),
    } finally {
      setIsAdding (false);
    }

      toast({
        title: "Added to Cart",
        description: `${equipment.name} has been added to your cart.`})
    } catch (error) {
<<<<<<< HEAD
      toast ({
        title: 'Error',
        description: 'Failed to add item to cart. Please try again.',
        variant: 'destructive',
      });

=======
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"})
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } finally {
      setIsAdding (false);
    }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          id: equipment.id,
          name: equipment.name,
          price: equipment.price,

<<<<<<< HEAD
=======
      toast({
        title: "Added to Cart",
        description: `${equipment.name} has been added to your cart.`})
    } catch (error) {
=======
    } catch (error) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"})
    } finally {
      setIsAdding(false)
    }
  },

          id: equipment.id,
          name: equipment.name,
          price: equipment.price,
          quantity}}),

  const inCart = items.some(item => item.id === equipment?.id),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
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
=======
  }
  // Error state
  if (error |!equipment) {
    return (
      <>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <NextSeo
          title='Equipment Not Found'
          description="The equipment you're looking for doesn't exist or has been removed."
        />;
        <div className='min-h-screen bg-zion-blue py-12 px-4'>;
          <div className='container mx-auto'>;
            <motion&& motion.div
              className='text-center py-20'
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">
                {error === 'Equipment not found' ? 'Equipment Not Found' : 'Something went wrong'}
              </h1>
<<<<<<< HEAD



=======
              <p className='text-zion-slate-light mb-8 max-w-md mx-auto'>
                {error === 'Equipment not found'
                  ? "The equipment you're looking for doesn't exist or has been removed."
                  : error |
                    "We couldn't load the equipment details. Please try again."}
              </p>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
              : undefined

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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


        }}
      />;
      <div className='min-h-screen bg-zion-blue py-8 px-4'>;
        <div className='container mx-auto'>;
          {/* Breadcrumb */}


=======
  }
  return (
    <>
      <NextSeo
        title={`${equipment.name} - Zion Marketplace`}
        description = {equipment.description,}
        openGraph={{
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          title: `${equipment.name} - Zion Marketplace`
          description: equipment.description
          images:
            equipment.images.length > 0 && equipment.images[0]
              ? [{ url: equipment.images[0] }]


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
      />
      <div className="min-h-screen bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
<<<<<<< HEAD
              Equipment
            <span className='mx-2 text-zion-slate-light'>/</span>
            <span className='text-zion-slate-light'>{equipment.name}</span>
          <motion.nav
            className='flex mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Equipment
            </button>
            <span className='mx-2 text-zion-slate-light'>/</span>
            <span className='text-zion-slate-light'>{equipment.name}</span>
          </motion.nav>
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div className='grid lg:grid-cols-2 gap-12'>
          </motion.nav>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

              onClick={() => router && router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >;
              Equipment;
            </button>;
            <span className='mx-2 text-zion-slate-light'>/</span>;
            <span className='text-zion-slate-light'>{equipment && equipment.name}</span>;
          </motion && motion.nav>;

          <div className='grid lg:grid-cols-2 gap-12'>;


<<<<<<< HEAD

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Images */}
            <motion&& motion.div
              className='space-y-4'
<<<<<<< HEAD
=======

          <div className="grid lg:grid-cols-2 gap-12">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {/* Images */}
            <motion.div 
              className="space-y-4"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 && 0.2 }}>;
              <AspectRatio
                ratio={1}
                className='bg-zion-blue-light rounded-lg overflow-hidden'>;
                <ImageWithRetry
<<<<<<< HEAD
<<<<<<< HEAD

                    equipment && equipment.images[selectedImageIndex] ||
                    equipment && equipment.images[0] ||
                    'https://images && images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'
                  }
                  alt={equipment && equipment.name}
                  className='object-cover'                />;
              </AspectRatio>;

              {equipment && equipment.images.length > 1 && (;
                <div className='grid grid-cols-4 gap-2'>;
                  {equipment && equipment.images.map((image, index) => (                    <button

                      key = {index,}
                      onClick = {(,) => setSelectedImageIndex(index),}

=======
                  src={
                    equipment.images[selectedImageIndex] |
                    equipment.images[0] |
                    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'
                  }
                  alt={equipment.name}
                  className='object-cover'                />
              </AspectRatio>
              {equipment.images.length > 1 && (
                <div className='grid grid-cols-4 gap-2'>
                  {equipment.images.map((image, index) => (                    <button
                      key = {index,}
                      onClick = {(,) => setSelectedImageIndex(index),}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${;
                        selectedImageIndex === index;
                          ? 'border-zion-cyan';
                          : 'border-transparent hover:border-zion-slate-light';
                      }`}
                    >;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      <ImageWithRetry;
                        src={image}
                        alt={`${equipment.name} view ${index + 1}`}
                        className="object-cover"
<<<<<<< HEAD


                      />
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    </button>
                  ))}
                </div>;
              )}

            </motion && motion.div>;


            {/* Product Details */}
<<<<<<< HEAD

=======
            <motion.div
              className='space-y-6'
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            <motion.div 
              className="space-y-6"


<<<<<<< HEAD
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 && 0.4 }}>;
              {/* Header */}

=======
              initial={{ opacity: 0, x: 20 }}
              transition={{ delay: 0 && 0.4 }}>;
              {/* Header */}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      />
                    </button>
                  ))}
                </div>
              )}
<<<<<<< HEAD
            </motion.div>
            {/* Product Details */}
            <motion.div
              className='space-y-6'
            <motion.div 
              className="space-y-6"
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 && 0.4 }}>;
              {/* Header */}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======
                      {[...Array(5)].map((_, i) => (                        <Star
                          key = {i,}
                          className={`h-4 w-4 ${
                            i < Math && Math.floor(equipment && equipment.rating!)
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                    {equipment.category}
                  </Badge>
                  <Badge variant="outline" className="border-zion-slate-light text-zion-slate-light">
                    {equipment.brand}
                  </Badge>
                </div>
<<<<<<< HEAD
                <h1 className='text-3xl font-bold text-white'>
                  {equipment.name}
                </h1>
                {equipment.rating && (
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      {[...Array(5)].map((_, i) => (                        <Star
                          key = {i,}
                          className={`h-4 w-4 ${
                            i < Math && Math.floor(equipment && equipment.rating!)
                              ? 'text-yellow-400 fill-current'
                              : 'text-zion-slate-light'
<<<<<<< HEAD

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-zion-cyan/10 text-zion-cyan border-zion-cyan/20">

                    {equipment.category}
                  </Badge>
                  <Badge variant="outline" className="border-zion-slate-light text-zion-slate-light">
                    {equipment.brand}
                  </Badge>
                </div>

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                
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
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
                    {equipment.expectedShipping}
                  </span>
                </div>
              </div>
              {/* Description */}
              </div>
              {/* Specifications */}
              {equipment.specifications.length > 0 && (
                    ))}
                  </div>
                </div>
              )}
              {/* Add to Cart */}
                      -
                    </Button>
                    <span className="text-white w-8 text-center">{quantity}</span>
                    <Button
                      +
                    </Button>
                  </div>
                </div>
                  size='lg'
                  variant='outline'
                  className='w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10'
                  data-testid='add-to-cart-button'                >
                  <ShoppingCart className='h-4 w-4 mr-2' />
                  {isAdding ? 'Adding...' : inCart ? 'In Cart' : 'Add to Cart'}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD


=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  equipment.returnPolicy 
}</p> </div> </div>) 
}</div> </motion.div> </div> </div> </div> </>) 
}'"};
;
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
    </>);
}finally {
  setIsAdding (false);
}
;
<<<<<<< HEAD
}
;
=======
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
