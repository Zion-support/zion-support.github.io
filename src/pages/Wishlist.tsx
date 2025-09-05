<<<<<<< HEAD
import { useFavorites } from '@/hooks/useFavorites',
import { X } from 'lucide-react'
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData',
import { TALENT_PROFILES } from '@/data/talentData',
import { ProductListingCard } from '@/components/ProductListingCard',
import { TalentCard } from '@/components/talent/TalentCard',
import { Button } from '@/components/ui/button',
import { useCart } from '@/context/CartContext',
import { toast } from '@/hooks/use-toast',
import { useAuth } from '@/hooks/useAuth',
import { useRouter } from 'next/router', // Changed from useNavigate
import { useEffect } from 'react', // Added useEffect

export default function WishlistPage() {
  const { favorites, loading, toggleFavorite } = useFavorites(),
  const { user, isLoading: isAuthLoading } = useAuth(), // Added isAuthLoading
  const router = useRouter(), // Changed from navigate
=======

export default function WishlistPage() {_const { favorites, _loading, _toggleFavorite} = useFavorites();
  const {_user, _isLoading: isAuthLoading} = useAuth(); // Added isAuthLoading
  const _router = useRouter(); // Changed from navigate
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {_// Redirect if not authenticated and auth loading is complete
    if (!isAuthLoading && !user) {
<<<<<<< HEAD
      router.push('/login')
    }
  }, [user, isAuthLoading, router]),

  if (isAuthLoading || !user) { // Show loading or null while auth check or redirect happens
    return null, // Or a loading spinner
  }

  const { items, dispatch } = useCart(),

  const addToCart = (item: { id: string, title?: string, price?: number }) => {
    if (items.some(i => i.id === item.id)) return,
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.title || 'Item',
        price: item.price || 0,
        quantity: 1
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
=======
      router.push('/login');}
  }, [user, isAuthLoading, router]);

  if (isAuthLoading || !user) {_// Show loading or null while auth check or redirect happens
    return null; // Or a loading spinner}

  const {_items, _dispatch} = useCart();

  const _addToCart = (_item: {_id: string; title?: string; price?: number}) => {_if (items.some(i => i.id === item.id)) return;
    dispatch({
      type: 'ADD_ITEM', _payload: {
        id: item.id, _name: item.title || 'Item', _price: item.price || 0, _quantity: 1}
    });
    toast.success(`1× ${_item.title || 'Item'} added`);
  };

  const _productMap = MARKETPLACE_LISTINGS.reduce<Record<string, any>>(_(acc, _p) => {_acc[p.id] = p;
    return acc;}, {});
  const _talentMap = TALENT_PROFILES.reduce<Record<string, any>>(_(acc, _t) => {_acc[t.id] = t;
    return acc;}, {});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _sortedFavorites = [...favorites].sort(_(a, _b) =>
      new Date(b.created_at || '').getTime() -
      new Date(a.created_at || '').getTime()
  ),

  return (
<<<<<<< HEAD
    <div className=&quot;container py-8&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6&quot;>Wishlist</h1>
      {loading ? (
=======
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      {_loading ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        <div className=&quot;responsive-grid&quot;>
          {sortedFavorites.map(fav => {
            if (fav.item_type === 'talent') {
<<<<<<< HEAD
              const talent = talentMap[fav.item_id],
              return talent ? (
                <div key={fav.item_id} className=&quot;relative&quot;>
                  <button
                    aria-label=&quot;Remove from favorites&quot;
                    className=&quot;absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80&quot;
                    onClick={() => toggleFavorite('talent', fav.item_id)}
=======
              const _talent = talentMap[fav.item_id];
              return talent ? (_<div key={fav.item_id} className="relative">
                  <button
                    aria-label="Remove from favorites"
                    className="absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80"
                    onClick={_() => toggleFavorite('talent', _fav.item_id)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <X className=&quot;h-4 w-4&quot; />
                  </button>
                  <TalentCard
                    talent={_talent}
                    onViewProfile={_() => {}}
                    onRequestHire={_() => {}}
                    isAuthenticated={_true}
                  />
<<<<<<< HEAD
                  {fav.created_at && (
                    <p className=&quot;mt-1 text-xs text-muted-foreground&quot;>
=======
                  {_fav.created_at && (
                    <p className="mt-1 text-xs text-muted-foreground">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Saved {new Date(fav.created_at).toLocaleDateString()}
                    </p>
                  )}
                </div>
              ) : null
            }
<<<<<<< HEAD
            const item = productMap[fav.item_id],
            return item ? (
              <div key={fav.item_id} className=&quot;relative&quot;>
                <button
                  aria-label=&quot;Remove from favorites&quot;
                  className=&quot;absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80&quot;
                  onClick={() => toggleFavorite(fav.item_type, fav.item_id)}
=======
            const _item = productMap[fav.item_id];
            return item ? (_<div key={_fav.item_id} className="relative">
                <button
                  aria-label="Remove from favorites"
                  className="absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80"
                  onClick={_() => toggleFavorite(fav.item_type, _fav.item_id)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <X className=&quot;h-4 w-4&quot; />
                </button>
                <ProductListingCard listing={_item} />
                <Button
<<<<<<< HEAD
                  size=&quot;sm&quot;
                  className=&quot;absolute bottom-2 right-2&quot;
                  onClick={() => addToCart(item)}
                  disabled={items.some(i => i.id === item.id)}
=======
                  size="sm"
                  className="absolute bottom-2 right-2"
                  onClick={_() => addToCart(item)}
                  disabled={_items.some(i => i.id === item.id)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  {_items.some(i => i.id === item.id) ? 'In Cart' : 'Add to Cart'}
                </Button>
<<<<<<< HEAD
                {fav.created_at && (
                  <p className=&quot;mt-1 text-xs text-muted-foreground&quot;>
=======
                {_fav.created_at && (
                  <p className="mt-1 text-xs text-muted-foreground">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
