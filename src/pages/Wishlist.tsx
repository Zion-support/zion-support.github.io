import { _useFavorites } from '@/hooks/useFavorites';
import { _MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { _TALENT_PROFILES } from '@/data/talentData';
import { _ProductListingCard } from '@/components/ProductListingCard';
import { _TalentCard } from '@/components/talent/TalentCard';
import { _Button } from '@/components/ui/button';
import { _useCart } from '@/context/CartContext';
import { _useAuth } from '@/hooks/useAuth';
import { _getCartKey } from '@/utils/cartUtils';
import { _useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';
export default function WishlistPage() {
    const { favorites, loading } = useFavorites();
    const { user } = useAuth();
    const { dispatch } = useCart();
    const _navigate = useNavigate();
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
    const _addToCart = (item) => {
        const _stored = safeStorage.getItem(getCartKey(user?.id));
        const _cart = stored ? JSON.parse(stored) : [];
        cart.push({ id: item.id, name: item.title || 'Item', price: item.price || 0, quantity: 1 });
        safeStorage.setItem(getCartKey(user?.id), JSON.stringify(cart));
        dispatch({ type: 'SET_ITEMS', payload: cart });
    };
    const _productMap = MARKETPLACE_LISTINGS.reduce((acc, p) => {
        acc[p.id] = p;
        return acc;
    }, {});
    const _talentMap = TALENT_PROFILES.reduce((acc, t) => {
        acc[t.id] = t;
        return acc;
    }, {});
    return (<div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      {loading ? (<p>Loading...</p>) : favorites.length === 0 ? (<p>No items saved.</p>) : (<div className="responsive-grid">
          {favorites.map(fav => {
                if (fav.item_type === 'talent') {
                    const _talent = talentMap[fav.item_id];
                    return talent ? (<TalentCard key={fav.item_id} talent={talent} onMessage={() => { }} onBook={() => { }} isAuthenticated={true}/>) : null;
                }
                const _item = productMap[fav.item_id];
                return item ? (<div key={fav.item_id} className="relative">
                <ProductListingCard listing={item}/>
                <Button size="sm" className="absolute bottom-2 right-2" onClick={() => addToCart(item)} disabled={items.some(i => i.id === item.id)}>
                  {items.some(i => i.id === item.id) ? 'In Cart' : 'Add to Cart'}
                </Button>
              </div>) : null;
            })}
        </div>)}
    </div>);
}
