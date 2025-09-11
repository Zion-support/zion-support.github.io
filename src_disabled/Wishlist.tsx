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
    if (!user) {
      navigate(`/login?next=${encodeURIComponent(location.pathname)}`);
      return;
    }
    dispatch(loadWishlistFromDB(user.id!));
  }, [user, dispatch, navigate, location]);

  const handleRemove = (id: string) => {
    dispatch(removeFromWishlist({ id }));
    fetch(`${getApiUrl()}/wishlist/${id}`, { method: 'DELETE' }).catch(() => {});
  };

  const pathForItem = (item: { id: string; type: string }) => {
    switch (item.type) {
      case 'product':
        return `/marketplace/listing/${item.id}`;
      case 'service':
        return `/services/${item.id}`;
      case 'talent':
        return `/talent/${item.id}`;
      default:
        return '#';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Wishlist</h1>
      {items.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={`${item.type}-${item.id}`} className="border border-zion-blue-light p-4 rounded-lg flex justify-between items-center">
              <div>{item.data?.title || item.data?.full_name || item.id}</div>
              <div className="flex gap-2">
                <Link to={pathForItem(item)} className="text-zion-cyan underline">
                  Go to item
                </Link>
                <Button size="sm" variant="outline" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
