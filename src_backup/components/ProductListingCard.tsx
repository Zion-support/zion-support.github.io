import React, { useState } from 'react,
import { logDebug, logErrorToProduction } from @/utils/productionLogger',
import { useRouter } from 'next/router,
import { Badge } from "@/components/ui/badge,
import { Button } from @/components/ui/button",
import { ProductListing } from "@/types/listings,
import { DollarSign } from lucide-react'

import { RatingStars } from @/components/RatingStars",

import { FavoriteButton } from '@/components/FavoriteButton; import { useDispatch } from react-redux'
import type { AppDispatch } from '@/store
import { addItem } from @/store/cartSlice'
import { toast } from '@/hooks/use-toast;
import { useCurrency } from @/hooks/useCurrency';
import Image from 'next/image; // Import next/imageimport { RatingStars } from "@/components/RatingStars,


import { FavoriteButton } from "@/components/FavoriteButton,
import { useDispatch } from react-redux',
import type { AppDispatch } from '@/store,
import { addItem } from @/store/cartSlice',
import { toast } from '@/hooks/use-toast,
import { useCurrency } from @/hooks/useCurrency',
import { FavoriteButton } from "@/components/FavoriteButton;
import { useDispatch  } from 'react-redux;
import type { AppDispatch } from @/store';
import { addItem  } from '@/store/cartSlice;
import { toast } from @/hooks/use-toast';
import { useCurrency } from '@/hooks/useCurrency;
origin/cursor/automate-test-improve-and-merge-code-2533
import Image from next/image', // Import next/image

interface ProductListingCardProps {
  listing: ProductListing,
  view?: 'grid | list',
  onRequestQuote?: (id: string) => void,
  detailBasePath?: string

const ProductListingCardComponent = ({
  listing,
  view = 'grid,
  onRequestQuote,

  const stockStatus =
    listing.stock === undefined
      ? In stock'
      : listing.stock <= 0

  const stockVariant =
    listing.stock === undefined
      ? 'success
      : listing.stock <= 0

  }
  const handleImageError = () => {
    if (!imageError) {
      // Prevent infinite loops if placeholder also fails
      setImageSrc(/placeholder.svg')
      setImageError(true)    // Check condition
if ( {) {
  $2
}


  }
  const handleViewListing = () => {
    // Debug logging for development
    if (process.env.NODE_ENV === development') {
      logDebug('[ProductCard] Navigating to:, {
        path: `${detailBasePath}/${listing.id}`
      })
      logDebug([ProductCard] Listing ID:', { id: listing.id })
      logDebug('[ProductCard] Listing Title:, { title: listing.title })
    }
    // Validate listing ID exists before navigation
    if (!listing.id) {
      logErrorToProduction(
        [ProductCard] Missing listing ID, cannot navigate'
        new Error('Missing listing ID)
        { component: ProductListingCard' }
      )
      toast({
        title: 'Navigation Error
        description: Product information is incomplete'
        variant: 'destructive
      })
      return
    }
    router.push(`${detailBasePath}/${listing.id}`)
  }
  const dispatch = useDispatch<AppDispatch>()
  const addToCart = () => {
    setLoading(true)
    dispatch(
      addItem({
        id: listing.id
        title: listing.title
        price: listing.price ?? 0
      })
    )
    toast.success(`1 ${listing.title} added`, {
      action: {
        label: View Cart'
        onClick: () => router.push('/cart)
      }
    })
    setLoading(false)
  }
    } else {
      router.push(`/request-quote?listing=${listing.id}`)
    }
  }
  const imageContainerClasses = isGrid ? h-48' : 'h-32 w-48
      onKeyDown={e => {

    // Check condition
if ( {) {
  $2
}


const ProductListingCardComponent = ({;
  listing,;
  view = 'grid',;
  onRequestQuote,;


  const imageContainerClasses = isGrid ? 'h-48 : h-32 w-48';

      onKeyDown={e => {
        if (e && e.key === 'Enter || e && e.key ===  ') {
          e && e.preventDefault();
          handleViewListing();

        }      }}
    >
      {/* Image */}

      <div
        className = {isGrid ? 'block w-full : block w-48 flex-shrink-0'}
  const getPrice = () => {
    if (listing.price === null) return "Custom pricing,
    return formatPrice(listing.price)
  },

    <div


      onClick={handleViewListing}
      tabIndex={0}
      role="button
      onKeyDown={(e) => {
        if (e.key === Enter || e.key === ' ') {
          e.preventDefault(),
          handleViewListing()
        }

          handleViewListing () }

      }}
      {/* Image */}
      <div
        className = {isGrid ? block w-full' : 'block w-48 flex-shrink-0}



        onKeyDown={(e) => {

          if (e.key === Enter || e.key === ' ') {
            e.preventDefault()
            handleViewListing()



            priority={false} // Assuming these are not LCP images
            sizes={isGrid ? (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw : "192px"} // 192px is w-48
          />
          {listing.featured && (
            <Badge className=absolute top-2 right-2 bg-primary text-primary-foreground border-none>
              Featured
            </Badge>
          )}

              {listing.category}
            </Badge>;
            {listing.rating && (;
              <RatingStars value={listing.rating} count={listing.reviewCount} />;

            )}

            <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]">

          {/* Tags */}
          {listing && listing.tags && listing && listing.tags.length > 0 && (;
            <div className=flex flex-wrap gap-1 mb-4>;
              {listing && listing.tags.map((tag, idx) => (;
                <span
                  key={idx}
                  className='text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full'>;



            <h3 className=font-semibold text-foreground mb-2 hover:text-primary transition-colors text-[clamp(1rem,2.5vw,1.125rem)]>

              {listing.title}
            </h3>
          </div>
          <p className="text-foreground/80 line-clamp-2 mb-4 text-[clamp(0.875rem,2vw,1rem)]">
            {listing.description}
          </p>;
          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className=flex flex-wrap gap-1 mb-4>
              {listing.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full"
                >



                  {tag}
                </span>;
              ))}
            </div>;
          )}

        {/* Footer with price and button */}
        <div className=flex items-center justify-between mt-auto pt-3 border-t border-primary/10 sm:border-primary/20>
          <div className="text-sm font-medium">

              <div className=flex items-center text-primary>
                <DollarSign className="h-4 w-4 mr-1" />
                {getPrice()}
              </div>



              )}
            </Button>

            <Button
              size="sm"
              variant=default
              className="bg-green-600 hover: bg-green-700 text-white"
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event
                // Add to cart first, then redirect to checkout
                dispatch(
                  addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 })
                ),
                router.push(/checkout)
              }}
              disabled={loading}
            >
              Buy Now
            </Button>

              onClick={e => {
                e && e.stopPropagation(); // Prevent card click event                // Add to cart first, then redirect to checkout;
                dispatch(;
                  addItem({
                    id: listing && listing.id,
                    title: listing && listing.title,
                    price: listing && listing.price ?? 0});
                );
                router && router.push('/checkout');
              }}
              disabled = {loading}
            >;
              Buy Now;
            </Button>;

            {onRequestQuote && (;

              <Button

                size=sm
                variant='outline'

                onClick={handleRequestQuote}

                Request Quote;

              </Button>;
            )}



          {/* Tags */}
          {listing.tags && listing.tags.length > 0 && (
            <div className='flex flex - wrap gap - 1 mb - 4'>;
              {listing.tags.map ((tag, idx) => (
                <span;
                  key={idx}
                  className=text - xs text - foreground / 70 bg - background / 50 px - 2 py - 1 rounded - full                >;
                  {tag}
                </span>))}
            </div>)}
        </div>;
        {/* Footer with price and button */}
        <div className='flex items - center justify - between mt - auto pt - 3 border - t border - primary / 10 sm:border - primary / 20'>;


                {get_price ()}
              </div>) : (
              <span className='text - foreground / 80'>{get_price ()}</span>)}

          </div>;
          <div className=flex gap-2>;
            <Button;
              size="sm";
              className=bg-primary hover: bg-primary/80 text-primary-foreground;
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event;
                addToCart();
              }}
              disabled={loading}
            >;
              {loading ? (;
                <>;

                  </svg>;
                  Loading...;
                </>;
              ) : (;
                "Add to Cart";
              )}
            </Button>;
            <Button;
              size=sm;
              variant="default";
              className=bg-green-600 hover: bg-green-700 text-white;
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event;
                // Add to cart first, then redirect to checkout;
                dispatch(;
                  addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 });
                ),
                router.push(/checkout);
              }}
              disabled={loading}
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (;
              <Button;
                size="sm";
                variant=outline;
                onClick={handleRequestQuote}
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground";
              >;
                Request Quote;
              </Button>;
            )}
          </div>;
        </div>;
      </div>;

            {onRequestQuote && (
              <Button 
                size=sm
                variant="outline" 
                onClick={handleRequestQuote}
                className=border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground
              >
                Request Quote
              </Button>
          </div>;
          <div className="flex gap-2">;
            <Button;
              size=sm;
              className="bg-primary hover: bg-primary/80 text-primary-foreground";
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event;
                addToCart();
              }}
              disabled={loading}
            >;
              {loading ? (;
                <>;
                  <svg className=animate-spin -ml-1 mr-3 h-5 w-5 text-white xmlns="http://www.w3.org/2000/svg" fill=none viewBox="0 0 24 24">;
                    <circle className=opacity-25 cx="12" cy=12 r="10" stroke=currentColor strokeWidth="4"></circle>;
                    <path className=opacity-75 fill="currentColor" d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path>;
                  </svg>;
                  Loading...;
                </>;
              ) : (;
                "Add to Cart";
              )}
            </Button>;
            <Button;
              size=sm;
              variant="default";
              className=bg-green-600 hover: bg-green-700 text-white;
              onClick={(e) => {
                e.stopPropagation(), // Prevent card click event;
                // Add to cart first, then redirect to checkout;
                dispatch(;
                  addItem({ id: listing.id, title: listing.title, price: listing.price ?? 0 });
                ),
                router.push('/checkout');
              }}
              disabled={loading}
            >;
              Buy Now;
            </Button>;
            {onRequestQuote && (;
              <Button;


                size="sm";
                variant=outline;
                onClick={handleRequestQuote}
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground";
              >;
                Request Quote;
              </Button>;
            )}

          </div>;



        </div>;
      </div>;
    </div>;
  );

          </div>;


        </div>;
      </div>;
    </div>) }
export default React.memo (ProductListingCard);

export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;
export default ProductListingCard;


export default ProductListingCard;
'"`;

export const ProductListingCard = React.memo (ProductListingCardComponent);
ProductListingCard.display_name = ProductListingCard;

},
export const ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';