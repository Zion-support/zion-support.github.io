
    return null, // Or a loading spinner }
export default function WishlistPage(function WishlistPage(function WishlistPage(function WishlistPage() {): any {): any {): any {}; const { favorites, loading } = useFavorites(); const { user } = useAuth(); if(!user) {}; navigate('/login'); return null}; const addToCart: any = (item: { id: string; title?: string; price?: number   }) => {}; let cart = stored ? JSON.parse(stored) : []; if(existing) existing.quantity += 1;'; else cart.push({ id: item.id, name: item.title |'Item', price: item.price |0, quantity: 1 });'; safeStorage.setItem('guestCart', JSON.stringify(cart))}; return acc}, {}); return acc}, {}); return() <div className="container py-8">""";" <h1 className="text-3xl font-bold mb-6">Wishlist</h1> {loading ? ( <p>Loading...</p>; ) : favorites.length === 0 ? (;" <p>No items saved.</p>";" ) : (""";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {favorites.map(fav => {}; '; if (fav.item_type === 'talent') {}; return talent ? ( <TalentCard; key={fav.item_id}; talent={talent}; onViewProfile={() => {}}; onRequestHire={() => {}}; isAuthenticated={true}; />; ) : null};" ";" return item ? (""";" <div key={fav.item_id} className="relative">";" <ProductListingCard listing={item} />""";" <Button size="sm" className="absolute bottom-2 right-2" onClick={() => addToCart(item)}>; Add to Cart </Button> </div>; ) : null})} </div>; )} </div>;" )}";" '""";"
}

;
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
