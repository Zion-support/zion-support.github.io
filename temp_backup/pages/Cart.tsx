import React, { useEffect, useState } from 'react';
import { safeStorage } from '@/utils/safeStorage';
<<<<<<< HEAD
<<<<<<< HEAD
// import { Button } from '@/components/ui/button';
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
=======
// import { Button } from '@/components/ui/button';
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
// import { Button } from '@/components/ui/button';
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = safeStorage.getItem('cart');
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        setItems([]);
      }
    }
  }, []);

  const updateQuantity = (id: string, qty: number) => {
    setItems(prev => {
      const updated = prev.map(i => i.id === id ? { ...i, quantity: qty } : i);
      safeStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => {
      const updated = prev.filter(i => i.id !== id);
      safeStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container py-10 text-center">
        <p>Your cart is empty.</p>
      </div>
    );
  }

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
<<<<<<< HEAD
<<<<<<< HEAD
              {/* <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
              <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
=======
              {/* <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
              {/* <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                Remove
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
              </Button> */}
              <button className="border border-gray-300 px-3 py-1 rounded text-sm" onClick={() => removeItem(item.id)}>
                Remove
              </button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-6 font-semibold">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <Button className="mt-4 w-full" onClick={() => navigate('/checkout')}>
        Checkout
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
      <Button className="mt-4 w-full" onClick={() => navigate('/checkout')}>
        Checkout
      </Button>
=======
      {/* <Button className="mt-4 w-full" onClick={() => navigate('/checkout')}>
        Checkout
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
      {/* <Button className="mt-4 w-full" onClick={() => navigate('/checkout')}>
        Checkout
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
      </Button> */}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded" onClick={() => navigate('/checkout')}>
        Checkout
      </button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
>>>>>>> origin/main
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    </div>
  );
}
