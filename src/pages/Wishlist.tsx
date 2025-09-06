
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return null, // Or a loading spinner }
export default function WishlistPage(function WishlistPage(function WishlistPage(function WishlistPage() {): any {): any {): any {}; const { favorites, loading } = useFavorites(); const { user } = useAuth(); if(!user) {}; navigate('/login'); return null}; const addToCart: any = (item: { id: string; title?: string; price?: number   }) => {}; let cart = stored ? JSON.parse(stored) : []; if(existing) existing.quantity += 1;'; else cart.push({ id: item.id, name: item.title |'Item', price: item.price |0, quantity: 1 });'; safeStorage.setItem('guestCart', JSON.stringify(cart))}; return acc}, {}); return acc}, {}); return() <div className="container py-8">""";" <h1 className="text-3xl font-bold mb-6">Wishlist</h1> {loading ? ( <p>Loading...</p>; ) : favorites.length === 0 ? (;" <p>No items saved.</p>";" ) : (""";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {favorites.map(fav => {}; '; if (fav.item_type === 'talent') {}; return talent ? ( <TalentCard; key={fav.item_id}; talent={talent}; onViewProfile={() => {}}; onRequestHire={() => {}}; isAuthenticated={true}; />; ) : null};" ";" return item ? (""";" <div key={fav.item_id} className="relative">";" <ProductListingCard listing={item} />""";" <Button size="sm" className="absolute bottom-2 right-2" onClick={() => addToCart(item)}>; Add to Cart </Button> </div>; ) : null})} </div>; )} </div>;" )}";" '""";"
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useFavorites } from '@/hooks/useFavorites',;
import { X } from 'lucide-react';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData',;
import { TALENT_PROFILES } from '@/data/talentData',;
import { ProductListingCard } from '@/components/ProductListingCard',;
import { TalentCard } from '@/components/talent/TalentCard',;
import { Button } from '@/components/ui/button',;
import { useCart } from '@/context/CartContext',;
import { toast } from '@/hooks/use-toast',;
import { useAuth } from '@/hooks/useAuth',;
import { useRouter } from 'next/router', // Changed from useNavigate;
import { useEffect } from 'react', // Added useEffect;
export default function WishlistPage() {;
  const { favorites, loading, toggleFavorite } = useFavorites(),;
  const { user, isLoading: isAuthLoading } = useAuth(), // Added isAuthLoading;
  const router = useRouter(), // Changed from navigate;
  useEffect(() => {;
    // Redirect if not authenticated and auth loading is complete;
    if (!isAuthLoading && !user) {;
      router.push('/login');
    }
  }, [user, isAuthLoading, router]),;
  if (isAuthLoading || !user) { // Show loading or null while auth check or redirect happens;
    return null, // Or a loading spinner;
  }
;
<<<<<<< HEAD

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
export default /**
 * WishlistPage - Function description
 */
function WishlistPage() {): any {): any {): any {} const { favorites, loading } = use_favorites (); const { user } = use_auth (); // Check condition
if ( {}) {
  $2
} navigate ('/login'); return null} const addToCart: any = (item: { id: string; title?: string; price?: number   }) => {} let cart = stored ? JSON.parse (stored) : []; // Check condition
if (existing.quantity += 1) {
  $2
}'; else cart.push ({ id: item.id, name: item.title || 'Item', price: item.price || 0, quantity: 1 });'; safe_storage.set_item ('guest_cart', JSON.stringify (cart))} return acc}, {}); return acc}, {}); return () <div className="container py - 8">""";" <h1 className="text - 3xl font - bold mb - 6">Wishlist</h1> {loading ? ( <p > Loading...</p>) : favorites.length === 0 ? (" <p > No items saved.</p>";" ) : (""";" <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6"> {favorites.map (fav => {} '; // Check condition
if ( {}) {
  $2
} return talent ? ( <TalentCard; key={fav.item_id} talent={talent} onViewProfile={() => {}} onRequestHire={() => {}} is_authenticated={true} />) : null}" ";" return item ? (""";" <div key={fav.item_id} className="relative">";" <ProductListingCard listing={item} />""";" <Button size="sm" className="absolute bottom - 2 right - 2" on_click={() => addToCart (item)}>; Add to Cart </Button> </div>) : null})} </div>)} </div>;" )}";" '""";";
}

;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const { items, dispatch } = useCart(),;
  const addToCart = (item: { id: string, title?: string, price?: number }) => {;
    if (items.some(i => i.id === item.id)) return,;
    dispatch({;
      type: 'ADD_ITEM',;
      payload: {;
        id: item.id,;
        name: item.title || 'Item',;
        price: item.price || 0,;
        quantity: 1;
      }
    }),
    toast.success(`1× ${item.title || 'Item'} added`)
  },

  const productMap = MARKETPLACE_LISTINGS.reduce<Record<string any>>((acc, p) => {
    acc[p.id] = p,
    return acc
  }, {}),
  const talentMap = TALENT_PROFILES.reduce<Record<string any>>((acc, t) => {
    acc[t.id] = t,
    return acc
  }, {}),

  const sortedFavorites = [...favorites].sort(
    (a, b) =>
      new Date(b.created_at || '').getTime() -
      new Date(a.created_at || '').getTime()
  ),

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      {loading ? (
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        <div className="responsive-grid">
          {sortedFavorites.map(fav => {
            if (fav.item_type === 'talent') {
              const talent = talentMap[fav.item_id],
              return talent ? (
                <div key={fav.item_id} className="relative">
                  <button
                    aria-label="Remove from favorites"
                    className="absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80"
                    onClick={() => toggleFavorite('talent', fav.item_id)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <TalentCard
                    talent={talent}
                    onViewProfile={() => {}}
                    onRequestHire={() => {}}
                    isAuthenticated={true}
                  />
                  {fav.created_at && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Saved {new Date(fav.created_at).toLocaleDateString()}
                    </p>;
                  )}
                </div>;
              ) : null;
            }
            const item = productMap[fav.item_id],
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
                >;
                  {items.some(i => i.id === item.id) ? 'In Cart' : 'Add to Cart'}
                </Button>
                {fav.created_at && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Saved {new Date(fav.created_at).toLocaleDateString()}
                  </p>;
                )}
              </div>;
            ) : null;
          })}
        </div>;
      )}
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
