import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Skeleton from '@/components/ui/skeleton';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';
import { CartItem as CartItemComponent } from '@/components/cart/CartItem';
import { useAuth } from '@/hooks/useAuth';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function CartPage() {
  const navigate = useNavigate();
  const { items, dispatch } = useCart();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (reduxItems.length > 0) {
      setItems(reduxItems);
      setCartLoading(false);
    } else {
      const stored = safeStorage.getItem('zion_cart');
      if (stored) {
        try {
          dispatch(setItemsAction(JSON.parse(stored) as CartItemType[]));
        } catch {
          dispatch(setItemsAction([]));
        }
      } else {
        dispatch(setItemsAction([]));
      }
    };
    load();
  }, [user, dispatch]);

  const updateQuantity = async (id: string, qty: number) => {
    dispatch(updateQuantityAction({ id, quantity: qty }));
    if (user) {
      try {
        await fetch('/api/cart', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, quantity: qty }),
        });
      } catch (err) {
        console.error('Failed to update cart', err);
      }
    }
    setCartLoading(false);
  }, [reduxItems]);

  useEffect(() => {
    if (!cartLoading && items.length === 0) {
      setShowEmpty(true);
    }
  }, [cartLoading, items]);

  const updateQuantity = (id: string, qty: number) => {
    dispatch(updateQuantityAction({ id, quantity: qty }));
  };

  const removeItem = (id: string) => {
    dispatch(removeItemAction(id));
  };

  const handleCheckout = () => {
    router.push('/checkout');
  };

  const applyCode = async () => {
    try {
      const res = await apiClient.post('/coupons/validate', {
        code,
        amount: subtotal,
      });
      setDiscount(res.data.discount || 0);
    } catch (e) {
      setDiscount(0);
    }
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax estimate
  
  // Only add shipping for physical items
  const hasPhysicalItems = items.some(item => 
    !item.type || item.type === 'physical' // Default to physical if type not specified
  );
  const shipping = hasPhysicalItems && subtotal <= 100 ? 15 : 0;
  const total = subtotal + tax + shipping;
  const { items: saved } = useWishlist();
  const savedMap = MARKETPLACE_LISTINGS.reduce<Record<string, any>>((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});

  if (cartLoading) {
    return (
      <div className="container py-10 space-y-4">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (showEmpty) {
    return (
      <div className="container py-10 text-center">
        <img loading="lazy"
          src="/images/empty-cart.svg"
          alt="Empty cart"
          className="mx-auto mb-4 w-48 h-36"
        />

        {saved.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Saved for Later</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {saved.map(id => {
                const p = savedMap[id];
                return p ? (
                  <ProductCard
                    key={id}
                    product={{ ...p, price: p.price || 0, description: p.description || '' }}
                    onBuy={() => router.push('/checkout')}
                  />
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={e => updateQuantity(item.id, parseInt(e.target.value || '1', 10))}
                className="w-16 bg-transparent border border-input rounded p-1 text-center"
              />
              <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-2">
        <input
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
          placeholder="Apply Coupon / Gift Card"
          className="flex-1 bg-transparent border border-input rounded p-2"
        />
        <Button variant="outline" onClick={applyCode}>
          Apply
        </Button>
      </div>
      <div className="flex justify-between mt-6 font-semibold">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="mt-4 w-full"
              onClick={() => isAuthenticated && navigate('/checkout')}
              disabled={!isAuthenticated}
            >
              Checkout
            </Button>
          </TooltipTrigger>
          {!isAuthenticated && <TooltipContent>Login to checkout</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
