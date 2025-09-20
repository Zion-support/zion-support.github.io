<<<<<<< HEAD:temp_broken_pages/Cart.tsx
<<<<<<< HEAD:temp_broken_pages/Cart.tsx
=======
import React from 'react';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Cart.tsx
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ShoppingCart, Package, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
<<<<<<< HEAD:temp_broken_pages/Cart.tsx
  return (
  return (
  return (
  const { t } = useTranslation();
  const items = null;
  // Empty cart state,
if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div className="text-center py-20"
            initial={{ opacity: 0 y: 20 }}
            animate={{ opacity: 1 y: 0 }}
          >
            <div className="mb-8">
              <ShoppingCart className="mx-auto h-24 w-24 text-zion-slate-light mb-4" />
              <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
              <p className="text-zion-slate-light text-lg">
                Ready to start shopping? Browse our equipment and add items to your cart.
              </p>
=======
  // For now, we'll show an empty cart state
  // In a real implementation, this would use Redux store and other hooks
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <ShoppingCart className="w-24 h-24 text-gray-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Your Cart is Empty</h1>
            <p className="text-gray-300 mb-8">
              Looks like you haven't added any items to your cart yet. Start exploring our AI services and products!
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Package className="w-5 h-5 mr-2" />
                Browse Services
              </Button>
            </Link>
            
            <div className="text-gray-400 text-sm">
              or
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Cart.tsx
            </div>
            
            <Link href="/marketplace">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                <ArrowRight className="w-5 h-5 mr-2" />
                Visit Marketplace
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
<<<<<<< HEAD:temp_broken_pages/Cart.tsx
    )
  }

}
export default function CartPage(function CartPage(function CartPage() {): any {): any {}; const { items, dispatch } = useCart(); const { user } = useAuth(); const [hydrated, setHydrated] = useState(false); useEffect(() => {}; setHydrated(true)}, []); if(!hydrated) return null; dispatch({ type: 'SET_ITEMS', payload: updated })}}; if(items.length === 0) {}; return() <div className="container py-10 text-center">""";" <img src="/placeholder.svg" alt="Empty cart" className="mx-auto mb-4" / / />";" <p>Your cart is empty</p>""";" <Button asChild className="mt-4">""";" <Link to="/marketplace">Browse Marketplace</Link> </Button> </div> )};" ";" return(""";" <div className="container max-w-2xl py-10">""";" <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>""";" <ul className="space-y-4"> {items.map(item => ( <CartItemComponent key={item.id}; item={item}; onRemove={removeItem}; onUpdateQuantity={updateQuantity}; />;" ))}";" </ul>""";" <div className="flex justify-between mt-6 font-semibold"> <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span> </div> <TooltipProvider> <Tooltip>;" <TooltipTrigger asChild>";" <Button""";" className="mt-4 w-full"'; onClick={() => isAuthenticated && navigate('/checkout')}; disabled={!isAuthenticated}; >; Checkout </Button> </TooltipTrigger> {!isAuthenticated && <TooltipContent>Login to checkout</TooltipContent>} </Tooltip> </TooltipProvider> </div>" )}";" '""";"
import React from 'react';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      </div>
    </div>
  );
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/Cart.tsx
=======
    </div>
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-b211:src/pages/Cart.tsx
}