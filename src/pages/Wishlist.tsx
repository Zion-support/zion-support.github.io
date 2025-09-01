import { useFavorites } from '@/hooks/useFavorites';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { TALENT_PROFILES } from '@/data/talentData';
import { ProductListingCard } from '@/components/ProductListingCard';
import { TalentCard } from '@/components/talent/TalentCard';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function WishlistPage() {
  const { favorites, loading, toggleFavorite } = useFavorites();
  const { user, isLoading: isAuthLoading } = useAuth(); // Added isAuthLoading
  const router = useRouter(); // Changed from navigate
  const { items, dispatch } = useCart(); // Moved useCart hook up

  if (!user) {
    navigate('/login');
    return null;
  }

  // const { items, dispatch } = useCart(); // Original position

  const addToCart = (item: { id: string; title?: string; price?: number }) => {
    if (items.some(i => i.id === item.id)) return;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        title: item.title || 'Item', // Changed name to title
        price: item.price || 0
        // quantity: 1 // Removed quantity
      }
    });
    const items = await res.json();
    dispatch({ type: 'SET_ITEMS', payload: items });
  };

  const productMap = MARKETPLACE_LISTINGS.reduce<Record<string, any>>((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});
  const talentMap = TALENT_PROFILES.reduce<Record<string, any>>((acc, t) => {
    acc[t.id] = t;
    return acc;
  }, {});

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      {loading ? (
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(fav => {
            if (fav.item_type === 'talent') {
              const talent = talentMap[fav.item_id];
              return talent ? (
                <TalentCard
                  key={fav.item_id}
                  talent={talent}
                  onViewProfile={() => {}}
                  onRequestHire={() => {}}
                  isAuthenticated={true}
                />
              ) : null;
            }
            const item = productMap[fav.item_id];
            return item ? (
              <div key={fav.item_id} className="relative">
                <ProductListingCard listing={item} />
                <Button size="sm" className="absolute bottom-2 right-2" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}
