import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { safeStorage } from '@/utils/safeStorage';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutForm {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const form = useForm<CheckoutForm>({ defaultValues: { name: '', email: '', address: '', city: '', country: '' } });

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

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const onSubmit = async (data: CheckoutForm) => {
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: subtotal }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed');

      console.error('Payment failed', err);
    }
  };

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid gap-6">

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField name="name" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="address" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="city" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="country" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold mb-4">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded" type="submit">
                Pay with Stripe (test)
              </button>
            </div>
          </form>

        </Form> */}
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input {...form.register('name')} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" {...form.register('email')} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <Input {...form.register('address')} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <Input {...form.register('city')} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <Input {...form.register('country')} />
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold mb-4">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded" type="submit">
              Pay with Stripe (test)
            </button>
          </div>
        </form>


      </div>
    </div>
  );
}
