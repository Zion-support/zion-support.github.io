
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
    (acc, item) => {
  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({

      })
      return;
    }
    setIsAdding(true)

    try {
      dispatch({
        type: 'ADD_ITEM'
        payload: {

      })
      toast({
        title: 'Added to Cart'
        description: `${equipment.name} has been added to your cart.`
      })
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
        <NextSeo
          title="Equipment Not Found"
          description="The equipment you're looking for doesn't exist or has been removed."
        />
        <div className="min-h-screen bg-zion-blue py-12 px-4">
          <div className="container mx-auto">
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}

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

                  Browse Equipment
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    )

=======
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


>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
        }}
      />
      <div className="min-h-screen bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}

              Equipment
            </button>
            <span className="mx-2 text-zion-slate-light">/</span>
            <span className="text-zion-slate-light">{equipment.name}</span>
          </motion.nav>

              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Header */}

                    {equipment.category}
                  </Badge>
                  <Badge variant="outline" className="border-zion-slate-light text-zion-slate-light">
                    {equipment.brand}
                  </Badge>
                </div>

