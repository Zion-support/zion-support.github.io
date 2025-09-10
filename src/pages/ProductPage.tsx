import { _useParams } from 'react-router-dom';
import { _useState } from 'react';
import { _Button } from '@/components/ui/button';
import { _NEW_PRODUCTS } from '@/data/newProductsData';
import { _useCart } from '@/context/CartContext';
import { _toast } from '@/hooks/use-toast';

import { useParams } from 'react-router-dom';
export default function ProductPage() {
    const { id } = useParams();
    const _product = NEW_PRODUCTS.find(p => p.id === id);
    const { dispatch } = useCart();
    const [adding, setAdding] = useState(false);
    if (!product) {
        return <div className="p-6 text-white">Product not found</div>;
    }
    const _handleAdd = () => {
        setAdding(true);
        dispatch({
            type: 'ADD_ITEM',
            payload: { id: product.id, name: product.title, price: product.price ?? 0, quantity: 1 }
        });
        toast({ title: 'Added to cart', variant: 'success' });
        setTimeout(() => setAdding(false), 500);
    };
    return (<div className="min-h-screen bg-zion-blue p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="mb-6">{product.description}</p>
      <Button onClick={handleAdd} disabled={adding}>
        {adding ? 'Adding...' : 'Add to Cart'}
      </Button>
    </div>);
}
