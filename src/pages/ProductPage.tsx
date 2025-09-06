<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { NEW_PRODUCTS } from '@/data/newProductsData';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { SEO } from '@/components/SEO';
import { logErrorToProduction } from '@/utils/productionLogger';
=======
import { useRouter } from 'next/router', // Changed from useParams
import { useEffect, useState  } from 'react';
import Image from 'next/image';
import { Button  } from '@/components/ui/button';
import { NEW_PRODUCTS  } from '@/data/newProductsData';
import { useCart  } from '@/context/CartContext';
import { toast  } from '@/hooks/use-toast';
import { SEO  } from '@/components/SEO';
import {logErrorToProduction} from '@/utils/productionLogger';
<<<<<<< HEAD
export default function ProductPage() {
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
export default function ProductPage() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

export default function ProductPage() {
  const router = useRouter();
<<<<<<< HEAD
  const { id: rawId } = router.query;
  const id = typeof rawId === 'string' ? rawId : undefined;
  const [product, setProduct] = useState(
    NEW_PRODUCTS.find((p) => p.id === id) |null
  );
  const { items, dispatch } = useCart();
  const [adding, setAdding] = useState(false);
<<<<<<< HEAD

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  useEffect(() => {
    // Update product if id changes and is available from router.query
    if (id) {
      const foundProduct = NEW_PRODUCTS.find((p) => p.id === id);
<<<<<<< HEAD
      setProduct(foundProduct || null);
    }
  }, [id]);

=======
      setProduct(foundProduct |null);
    }
  }, [id]);
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  useEffect(() => {
    const fetchProduct = async () => {
=======
  const { id: rawId } = router && router.query,;
  const id = typeof rawId === 'string' ? rawId : undefined;
  const [product, setProduct] = useState(;
    NEW_PRODUCTS && NEW_PRODUCTS.find((p) => p && p.id === id) || null;
  );
  const { items, dispatch } = useCart();
  const [adding, setAdding] = useState(false);
  useEffect((,) => {;
    // Update product if id changes and is available from router && router.query;
    if (id) {;
      const foundProduct = NEW_PRODUCTS && NEW_PRODUCTS.find((p) => p && p.id === id);      setProduct(foundProduct || null);
    }
  }, [id]);

  useEffect((,) => {;
    const fetchProduct = async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (!id) return;
      try {;
        const res = await fetch(`/api/products/${id}`);
<<<<<<< HEAD
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        }
      } catch (err) {
        // Fail silently and fall back to local data
        logErrorToProduction('Error fetching product', { data: err });
      }
    }
    // Only fetch if id is available (from router)
    if (id) {
      fetchProduct();
    }
<<<<<<< HEAD
  }, [id]);

  if (!product && !id) {
    // If no id from router yet, it might still be loading
=======
  }, [id]), // id is now from router.query
  if (!product && !id) { // If no id from router yet, it might still be loading
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    return <div className="p-6 text-white">Loading product details...</div>;
  }
  if (!product) {
    return <div className="p-6 text-white">Product not found</div>;
  }
  const inCart = items.some(i => i.id === product.id);
  const handleAdd = () => {
    if (inCart) return;
    setAdding(true);
    dispatch({
      type: 'ADD_ITEM'
      payload: { id: product.id, name: product.title, price: product.price ?? 0, quantity: 1 }
    });
    toast.success(`1× ${product.title} added`);
<<<<<<< HEAD
=======
        if (res && res.ok) {;
          const data = await res && res.json();
          setProduct(data);
        }
      } catch (err) {;
        // Fail silently and fall back to local data;
        logErrorToProduction('Error fetching product', { data: err });
      }
    };

    // Only fetch if id is available (from router);
    if (id) {;
      fetchProduct();
    }
  }, [id]), // id is now from router && router.query;

  if (!product && !id) { // If no id from router yet, it might still be loading;
    return <div className="p-6 text-white">Loading product details...</div>;
  }

  if (!product) {;
    return <div className="p-6 text-white">Product not found</div>;
  }

  const inCart = items && items.some(i => i && i.id === product && product.id);

  const handleAdd = () => {;
    if (inCart) return;
    setAdding(true);
    dispatch({;
      type: 'ADD_ITEM',;
      payload: { id: product && product.id, name: product && product.title, price: product && product.price ?? 0, quantity: 1 }
    });
    toast && toast.success(`1× ${product && product.title} added`);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    setTimeout(() => setAdding(false), 500);
  };
=======
    setTimeout(() => setAdding(false), 500)
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a

  return (
    <>;
      <SEO
<<<<<<< HEAD
        title={product.title}
        description={product.description}
        ogImage={product.images?.[0]}
      />
      <div className="min-h-screen bg-zion-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        {product.images?.length ? (
          <div className="mb-4 relative w-full h-64">
            <Image
<<<<<<< HEAD
              src={product.images[0] || '/placeholder.svg'}
              alt={product.title}
=======
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
              className="object-cover rounded-md"
              fill
            />
          </div>
        ) : null}
        <p className="mb-6">{product.description}</p>
        <Button onClick={handleAdd} disabled={adding |inCart}>
=======
        title = {product && product.title,}
        description = {product && product.description,}
        ogImage = {product && product.images?.[0],}
      />;
      <div className="min-h-screen bg-zion-blue p-6 text-white">;
        <h1 className="text-2xl font-bold mb-4">{product && product.title}</h1>;
        {product && product.images?.length ? (;
          <div className="mb-4 relative w-full h-64">;
            <Image
              src = {product && product.images[0] || '/placeholder && placeholder.svg',}
              alt = {product && product.title,}
              className="object-cover rounded-md"
            />;
          </div>;
        ) : null}
        <p className="mb-6">{product && product.description}</p>;
        <Button onClick={handleAdd} disabled={adding || inCart}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
        </Button>;
      </div>;
    </>;
  );
<<<<<<< HEAD
=======
}
//Only fetch if id is available (from router) ;
<<<<<<< HEAD
}const inCart = items.some (i => i.id === product.id);
const handleAdd = () => {if (inCart) return;
=======
}const inCart = items && items.some (i => i && i.id === product && product.id);
const handleAdd = () => {;
  if (inCart) return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
setAdding (true);
dispatch ({;
  type: 'ADD ITEM';
payload: {;
<<<<<<< HEAD
  id: product.id, name: product.title,  price: product.price ?? 0, quantity: 1 ;
});
toast.success (`1× $ {product.title ;
}added`);
setTimeout ( () => setAdding (false), 500) ;
}
product.title ;
}description= {product.description ;
}ogImage= {product.images?.[0] ;
=======
  id: product && product.id, name: product && product.title,  price: product && product.price ?? 0, quantity: 1 ;

});
toast && toast.success (`1× $ {;
  product && product.title ;
}added`);
setTimeout ( () => setAdding (false), 500) ;
};
product && product.title ;
}description= {;
  product && product.description ;
}ogImage= {;
  product && product.images?.[0] ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}/> </Button> </div> </>) ;
}';
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}