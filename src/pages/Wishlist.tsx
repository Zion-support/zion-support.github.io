import { useFavorites } from '@/hooks/useFavorites';
import { X } from 'lucide-react'
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { TALENT_PROFILES } from '@/data/talentData';
import { ProductListingCard } from '@/components/ProductListingCard';
import { TalentCard } from '@/components/talent/TalentCard';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router'; // Changed from useNavigate
import { useEffect } from 'react'; // Added useEffect

export default function WishlistPage() {
  const { favorites, loading, toggleFavorite } = useFavorites();
  const { user, isLoading: isAuthLoading } = useAuth(); // Added isAuthLoading
  const router = useRouter(); // Changed from navigate

  useEffect(() => {
    // Redirect if not authenticated and auth loading is complete
    if (!isAuthLoading && !user) {
      router.push('/login');
    }
  }, [user, isAuthLoading, router]);

  if (isAuthLoading || !user) { // Show loading or null while auth check or redirect happens
    return null; // Or a loading spinner
  }

  const { items, dispatch } = useCart();

  const addToCart = (item: { id: string; title?: string; price?: number }) => {
    if (items.some(i => i.id === item.id)) return;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.title || 'Item',
        price: item.price || 0,
        quantity: 1
      }
    });
    toast.success(`1× ${item.title || 'Item'} added`);
  };

  const productMap = MARKETPLACE_LISTINGS.reduce<Record<string, any>>((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});
  const talentMap = TALENT_PROFILES.reduce<Record<string, any>>((acc, t) => {
    acc[t.id] = t;
    return acc;
  }, {});

  const sortedFavorites = [...favorites].sort(
    (a, b) =>
      new Date(b.created_at || '').getTime() -
      new Date(a.created_at || '').getTime()
  );

  return (
    <div className=&quot;container py-8&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6&quot;>Wishlist</h1>
      {loading ? (
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        <div className=&quot;responsive-grid&quot;>
          {sortedFavorites.map(fav => {
            if (fav.item_type === 'talent') {
              const talent = talentMap[fav.item_id];
              return talent ? (
                <div key={fav.item_id} className=&quot;relative&quot;>
                  <button
                    aria-label=&quot;Remove from favorites&quot;
                    className=&quot;absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80&quot;
                    onClick={() => toggleFavorite('talent', fav.item_id)}
                  >
                    <X className=&quot;h-4 w-4&quot; />
                  </button>
                  <TalentCard
                    talent={talent}
                    onViewProfile={() => {}}
                    onRequestHire={() => {}}
                    isAuthenticated={true}
                  />
                  {fav.created_at && (
                    <p className=&quot;mt-1 text-xs text-muted-foreground&quot;>
                      Saved {new Date(fav.created_at).toLocaleDateString()}
                    </p>
                  )}
                </div>
              ) : null;
            }
            const item = productMap[fav.item_id];
            return item ? (
              <div key={fav.item_id} className=&quot;relative&quot;>
                <button
                  aria-label=&quot;Remove from favorites&quot;
                  className=&quot;absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80&quot;
                  onClick={() => toggleFavorite(fav.item_type, fav.item_id)}
                >
                  <X className=&quot;h-4 w-4&quot; />
                </button>
                <ProductListingCard listing={item} />
                <Button
                  size=&quot;sm&quot;
                  className=&quot;absolute bottom-2 right-2&quot;
                  onClick={() => addToCart(item)}
                  disabled={items.some(i => i.id === item.id)}
                >
                  {items.some(i => i.id === item.id) ? 'In Cart' : 'Add to Cart'}
                </Button>
                {fav.created_at && (
                  <p className=&quot;mt-1 text-xs text-muted-foreground&quot;>
                    Saved {new Date(fav.created_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}
