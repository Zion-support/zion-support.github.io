
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
    loadEquipment()
  }, [id])
  }
  const inCart = items.some(item => item.id === equipment?.id)
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


              onClick={() => router && router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >;
              Equipment;
            </button>;
            <span className='mx-2 text-zion-slate-light'>/</span>;
            <span className='text-zion-slate-light'>{equipment && equipment.name}</span>;
          </motion && motion.nav>;

          <div className='grid lg:grid-cols-2 gap-12'>;



          <div className="grid lg:grid-cols-2 gap-12">


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
                    </button>


            <motion.div 
              className="space-y-6"



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

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${;
                            i < Math.floor(equipment.rating!);
                              ? 'text-yellow-400 fill-current';
                              : 'text-zion-slate-light';

                <div className='flex items-center gap-2 text-sm'>
                  <Clock className='h-4 w-4 text-zion-cyan' />
                  <span
                    className={
                      equipment.inStock ? 'text-green-400' : 'text-yellow-400'
                    }
                  >
              <div className='space-y-4 border-t border-zion-blue-light pt-4'>;
                {/* Shipping */}

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
              </div>;
}
;
