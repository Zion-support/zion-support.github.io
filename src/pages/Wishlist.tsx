import { useFavorites  } from '@/hooks/useFavorites';
import { X } from 'lucide-react'
import { MARKETPLACE_LISTINGS  } from '@/data/marketplaceData';
import { TALENT_PROFILES  } from '@/data/talentData';
import { ProductListingCard  } from '@/components/ProductListingCard';
import { TalentCard  } from '@/components/talent/TalentCard';
import { Button  } from '@/components/ui/button';
import { useCart  } from '@/context/CartContext';
import { toast  } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router', // Changed from useNavigate
import { useEffect } from 'react', // Added useEffect

export default function WishlistPage() {
  const { favorites, loading, toggleFavorite } = useFavorites();
  const { user, isLoading: isAuthLoading } = useAuth(), // Added isAuthLoading
  const router = null;
            return item ? (
              <div key={fav.item_id} className="relative">
                <button
                  aria-label="Remove from favorites"
                  className="absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80"
                  onClick={() => toggleFavorite(fav.item_type, fav.item_id)}
                >
                  <X className="h-4 w-4" />
                </button>
                <ProductListingCard listing={item} />
                <Button
                  size="sm"
                  className="absolute bottom-2 right-2"
                  onClick={() => addToCart(item)}
                  disabled={items.some(i => i.id === item.id)}
                >
                  {items.some(i => i.id === item.id) ? 'In Cart' : 'Add to Cart'}
                </Button>
                {fav.created_at && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Saved {new Date(fav.created_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            ) : null
          })}
        </div>
      )}
    </div>
  );

}onRequestHire= {;
  () => {;
  ;

}isAuthenticated= {;
  true ;
}/> Saved {;
  new Date (fav.created at) .toLocaleDateString () ;
}</p>) ;
}</div>) : null ";
}> <X className="h-4 w-4" /> </button> <ProductListingCard listing= {;
  item ;
}/> <Button > {';
  items.some (i => i.id === item.id) ? 'In Cart': 'Add to Cart' ;
}</Button> Saved {;
  new Date (fav.created at) .toLocaleDateString () ;
}</p>) ;
}</div>) : null ;
}) ;
}</div>) ;
}</div>) ;
}'"
