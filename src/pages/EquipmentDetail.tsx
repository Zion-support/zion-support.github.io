              }
              setEquipment(equipmentData)
              setLoading(false)
              return;
            }
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




  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({
        title: 'Authentication Required',
        description: 'Please log in to add items to cart',
        variant: 'destructive',


  const handleAddToCart = async () => {
    if (!equipment |!isAuthenticated) {
      toast({
      })
      return;
    }
    setIsAdding(true)
        title: "Authentication Required",
        description: "Please log in to add items to cart",
        variant: "destructive"}),
      return
    }


    setIsAdding(true),



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
    } catch (error) {
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
                  Browse Equipment
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    )

          title: `${equipment && equipment.name} - Zion Marketplace`,
          description: equipment && equipment.description,
          images:
            equipment && equipment.images.length> 0 && equipment && equipment.images[0];
              ? [{ url: equipment && equipment.images[0] }];
              : undefined,;
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


              Equipment
            </button>
            <span className="mx-2 text-zion-slate-light">/</span>
            <span className="text-zion-slate-light">{equipment.name}</span>
          </motion.nav>

              onClick={() => router && router.push('/equipment')}
              className='text-zion-cyan hover:text-white transition-colors'            >;
              Equipment;
            </button>;
            <span className='mx-2 text-zion-slate-light'>/</span>;
            <span className='text-zion-slate-light'>{equipment && equipment.name}</span>;
          </motion && motion.nav>;

          <div className='grid lg:grid-cols-2 gap-12'>;


            {/* Images */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AspectRatio ratio={1} className="bg-zion-blue-light rounded-lg overflow-hidden">
                <ImageWithRetry
                      className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${;
                        selectedImageIndex === index;
                          ? 'border-zion-cyan';
                          : 'border-transparent hover:border-zion-slate-light';
                      }`}
                    >;
                      />
                    </button>
                  ))}
                </div>
              )}


              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 && 0.4 }}>;
              {/* Header */}

                    {equipment.category}
                  </Badge>
                  <Badge variant="outline" className="border-zion-slate-light text-zion-slate-light">
                    {equipment.brand}
                  </Badge>
                </div>
                
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
  equipment.returnPolicy 
}</p> </div> </div>) 
}</div> </motion.div> </div> </div> </div> </>) 
}'"};
;


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
