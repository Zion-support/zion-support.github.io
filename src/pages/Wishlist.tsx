import { useFavorites } from '@/hooks/useFavorites';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { TALENT_PROFILES } from '@/data/talentData';
import { ProductListingCard } from '@/components/ProductListingCard';
import { TalentCard } from '@/components/talent/TalentCard';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.wishlist.items);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  useEffect(() => {
    if (!user) {
      navigate(`/login?next=${encodeURIComponent(location.pathname)}`);
      return;
    }
    dispatch(loadWishlistFromDB(user.id!));
  }, [user, dispatch, navigate, location]);

  const addToCart = async (item: { id: string; title?: string; price?: number }) => {
    const res = await fetch('/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: item.id,
        name: item.title || 'Item',
        price: item.price || 0,
        quantity: 1,
      }),
    });
    const items = await res.json();
    dispatch({ type: 'SET_ITEMS', payload: items });
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
