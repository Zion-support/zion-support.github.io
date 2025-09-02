import React from 'react';
import { useFavorites } from '@/hooks/useFavorites';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { TalentCard } from '@/components/TalentCard';
import { ProductListingCard } from '@/components/ProductListingCard';
import { Button } from '@/components/ui/button';
import { safeStorage } from '@/utils/safeStorage';

export default function WishlistPage() {
  const { favorites, loading } = useFavorites();
  const { user } = useAuth();
  const navigate = useNavigate();

    navigate('/login');
    return null;
  }

  const addToCart = (item: { id: string; title?: string; price?: number }) => {
    const stored = safeStorage.getItem('guestCart');
    let cart = stored ? JSON.parse(stored) : [];
    
    const existing = cart.find((cartItem: any) => cartItem.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.title || 'Item',
        price: item.price || 0,
        quantity: 1
      });
    }
    
    safeStorage.setItem('guestCart', JSON.stringify(cart));
  };

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
              return (
                <TalentCard
                  key={fav.item_id}
                  talent={fav}
                  onViewProfile={() => {}}
                  onRequestHire={() => {}}
                  isAuthenticated={true}
                />
              );
            }
            
            return (
              <div key={fav.item_id} className="relative">
                <ProductListingCard listing={fav} />
                <Button
                  size="sm"
                  className="absolute bottom-2 right-2"
                  onClick={() => addToCart(fav)}
                >
                  Add to Cart
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}