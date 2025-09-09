import React, { useEffect, useState } from 'react';
import { useFavorites } from '@/hooks/useFavorites';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import { TALENT_PROFILES } from '@/data/talentData';
import { ProductListingCard } from '@/components/ProductListingCard';
import { TalentCard } from '@/components/talent/TalentCard';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/hooks/useAuth';
import { getCartKey } from '@/utils/cartUtils';
import { useNavigate } from 'react-router-dom';
import { safeStorage } from '@/utils/safeStorage';
import { SEO } from '@/components/SEO';

const WishlistPage = () => {
  const { user, isAuthLoading } = useAuth();
  const { dispatch } = useCart();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthLoading && user) {
      // Simulate loading favorites from localStorage
      const storedFavorites = localStorage.getItem('wishlist') || '[]';
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error('Error parsing favorites:', error);
        setFavorites([]);
      }
    }
    setLoading(false);
  }, [user, isAuthLoading, navigate]);

  if (isAuthLoading || !user) {
    // Show loading or null while auth check or redirect happens
    return null; // Or a loading spinner
  }

  const addToCart = (item) => {
    const stored = safeStorage.getItem(getCartKey(user?.id));
    const cart = stored ? JSON.parse(stored) : [];
    cart.push({
      id: item.id,
      name: item.title || 'Item',
      price: item.price || 0,
      quantity: 1
    });
    safeStorage.setItem(getCartKey(user?.id), JSON.stringify(cart));
    dispatch({ type: 'SET_ITEMS', payload: cart });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto mb-4"></div>
              <p className="text-slate-600 dark:text-slate-400">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const allItems = [...MARKETPLACE_LISTINGS, ...TALENT_PROFILES];
  const favoriteItems = allItems.filter(item => 
    favorites.some(fav => fav.id === item.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-24">
      <SEO 
        title="My Wishlist - Zion Tech Group" 
        description="View and manage your saved items and favorite services on Zion Tech Group's marketplace." 
        keywords="wishlist, favorites, saved items, marketplace" 
        canonical="https://ziontechgroup.com/wishlist"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            My Wishlist
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            {favoriteItems.length} saved {favoriteItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        {favoriteItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Start exploring our marketplace and save items you love
            </p>
            <Button 
              onClick={() => navigate('/marketplace')}
              className="bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              Browse Marketplace
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteItems.map((item) => (
              <div key={item.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                {item.type === 'talent' ? (
                  <TalentCard 
                    talent={item} 
                    onAddToCart={() => addToCart(item)}
                    showAddToCart={true}
                  />
                ) : (
                  <ProductListingCard 
                    listing={item} 
                    onAddToCart={() => addToCart(item)}
                    showAddToCart={true}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;