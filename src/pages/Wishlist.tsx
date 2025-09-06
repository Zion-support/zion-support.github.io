<<<<<<< HEAD
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
  )
}
;
=======
    return null, // Or a loading spinner }
export default function WishlistPage(function WishlistPage(function WishlistPage(function WishlistPage() {): any {): any {): any {}; const { favorites, loading } = useFavorites(); const { user } = useAuth(); if(!user) {}; navigate('/login'); return null}; const addToCart: any = (item: { id: string; title?: string; price?: number   }) => {}; let cart = stored ? JSON.parse(stored) : []; if(existing) existing.quantity += 1;'; else cart.push({ id: item.id, name: item.title |'Item', price: item.price |0, quantity: 1 });'; safeStorage.setItem('guestCart', JSON.stringify(cart))}; return acc}, {}); return acc}, {}); return() <div className="container py-8">""";" <h1 className="text-3xl font-bold mb-6">Wishlist</h1> {loading ? ( <p>Loading...</p>; ) : favorites.length === 0 ? (;" <p>No items saved.</p>";" ) : (""";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {favorites.map(fav => {}; '; if (fav.item_type === 'talent') {}; return talent ? ( <TalentCard; key={fav.item_id}; talent={talent}; onViewProfile={() => {}}; onRequestHire={() => {}}; isAuthenticated={true}; />; ) : null};" ";" return item ? (""";" <div key={fav.item_id} className="relative">";" <ProductListingCard listing={item} />""";" <Button size="sm" className="absolute bottom-2 right-2" onClick={() => addToCart(item)}>; Add to Cart </Button> </div>; ) : null})} </div>; )} </div>;" )}";" '""";"
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
