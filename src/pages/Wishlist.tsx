
export default function WishlistPage() {_const { favorites, _loading, _toggleFavorite} = useFavorites();
  const {_user, _isLoading: isAuthLoading} = useAuth(); // Added isAuthLoading
  const _router = useRouter(); // Changed from navigate

  useEffect__(() => {_// Redirect if not authenticated and auth loading is complete
    if (!isAuthLoading && !user) {
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

  const _sortedFavorites = [...favorites].sort(_(a, _b) =>
      new Date(b.created_at || '').getTime() -
      new Date(a.created_at || '').getTime()
  );

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      {_loading ? (
        <p>Loading...</p>
      ) : favorites.length === 0 ? (
        <p>No items saved.</p>
      ) : (
        <div className="responsive-grid">
          {sortedFavorites.map(fav => {
            if (fav.item_type === 'talent') {
              const _talent = talentMap[fav.item_id];
              return talent ? (_<div key={fav.item_id} className="relative">
                  <button
                    aria-label="Remove from favorites"
                    className="absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80"
                    onClick={_() => toggleFavorite('talent', _fav.item_id)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <TalentCard
                    talent={_talent}
                    onViewProfile={_() => {}}
                    onRequestHire={_() => {}}
                    isAuthenticated={_true}
                  />
                  {_fav.created_at && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Saved {new Date(fav.created_at).toLocaleDateString()}
                    </p>
                  )}
                </div>
              ) : null;
            }
            const _item = productMap[fav.item_id];
            return item ? (_<div key={_fav.item_id} className="relative">
                <button
                  aria-label="Remove from favorites"
                  className="absolute top-2 right-2 z-10 rounded-full bg-zion-blue-dark/80 p-1 hover:bg-zion-purple/80"
                  onClick={_() => toggleFavorite(fav.item_type, _fav.item_id)}
                >
                  <X className="h-4 w-4" />
                </button>
                <ProductListingCard listing={_item} />
                <Button
                  size="sm"
                  className="absolute bottom-2 right-2"
                  onClick={_() => addToCart(item)}
                  disabled={_items.some(i => i.id === item.id)}
                >
                  {_items.some(i => i.id === item.id) ? 'In Cart' : 'Add to Cart'}
                </Button>
                {_fav.created_at && (
                  <p className="mt-1 text-xs text-muted-foreground">
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
