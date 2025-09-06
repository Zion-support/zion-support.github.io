import { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
import { NextSeo  } from '@/components/NextSeo';
origin/cursor/automate-test-improve-and-merge-code-2533
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { AspectRatio } from "@/components/ui/aspect-ratio",
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
import { toast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/useAuth'
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
  name: string;
  value: string
}

interface EquipmentDetails {
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
  returnPolicy?: string
}

// Convert ProductListing to EquipmentDetails format
function convertProductListingToEquipmentDetails(
  item: ProductListing
): EquipmentDetails {
  return {
    id: item.id;
    name: item.title;
    description: item.description;
    brand: item.brand || 'Unknown';
    category: item.category;
    subcategory: item.subcategory;
    images: item.images || ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto;
          images: equipment.images.length > 0 && equipment.images[0] ? [{ url: equipment.images[0] }] : undefined
origin/cursor/automate-test-improve-and-merge-code-2533
        }}
      />;
      <div className='min-h-screen bg-zion-blue py-8 px-4'>;
        <div className='container mx-auto'>;
          {/* Breadcrumb */}


              Equipment
            </button>
            <span className='mx-2 text-zion-slate-light'>/</span>
            <span className='text-zion-slate-light'>{equipment.name}</span>
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );


}finally {;
  setIsAdding (false) ;

};
const inCart = items.some (item => item.id === equipment?.id);
return (<> <NextSeo title="Loading Equipment..." /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <div className="text-center py-20" > <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4" ></div> <p className="text-zion-slate-light" >Loading equipment details...</p> </div> </div> </div> </> //Error state if (error || !equipment) {'";
  return (<> <NextSeo title="Equipment Not Found" description="The equipment you're looking for doesn't exist or has been removed." /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <motion.div </p> <div className="space-x-4" > <Button > <ArrowLeft className="h-4 w-4 mr-2" /> Go Back </Button> <Button ;
}return (<> <NextSeo title= {;
  `$ {;
  equipment.name ;
}- Zion Marketplace` ;
}description= {;
  equipment.description ;
}openGraph= {;
  {;
  title: `$ {;
  equipment.name ;
}- Zion Marketplace`, description: equipment.description, images: equipment.images.length > 0 && equipment.images[0] ? [ {;
  url: equipment.images[0] ;
}] : undefined ;

}/> key= {;
  index ;
}onClick={;
  () => setSelectedImageIndex (index) ;
}className= {;
  `aspect-square rounded-md overflow-hidden border-2 transition-all $ {';
  selectedImageIndex === index ? 'border-zion-cyan' : 'border-transparent hover:border-zion-slate-light' ;
}` ;
}> <ImageWithRetry /> </button>) ) ;
}</div>) ;
}</motion.div> {;
  /* Product Details */ ;
}<motion.div <Star key= {;
  i ;
}className= {;
  `h-4 w-4 $ {';
  i < Math.floor (equipment.rating!) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light' ;
}` ;
}/>) ) ;
}</div> </span> </div>) ;
}</div> </span> </div> </div> </div>) ) ;
}</div> </div>) ";
}> + </Button> </div> </div> <Button <div> <p className="text-white text-sm font-medium" >Free Shipping</p> <p className="text-xs" >For orders over $100 within the US</p> </div> </div> <div> <p className="text-white text-sm font-medium" >Warranty</p> <p className="text-xs" > {;
  equipment.warranty ;
}</p> </div> </div>) ";
}<div> <p className="text-white text-sm font-medium" >Returns</p> <p className="text-xs" > {;
  equipment.returnPolicy ;
}</p> </div> </div>) ;
}</div> </motion.div> </div> </div> </div> </>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
