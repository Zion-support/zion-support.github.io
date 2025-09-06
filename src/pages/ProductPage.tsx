<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useRouter } from 'next/router', // Changed from useParams
import { useEffect, useState  } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useRouter } from 'next/router', // Changed from useParams
import { useEffect, useState  } from 'react';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Image from 'next/image';
import { Button  } from '@/components/ui/button';
import { NEW_PRODUCTS  } from '@/data/newProductsData';
import { useCart  } from '@/context/CartContext';
import { toast  } from '@/hooks/use-toast';
import { SEO  } from '@/components/SEO';
import {logErrorToProduction} from '@/utils/productionLogger';
export default function ProductPage() {;
;
  const router = useRouter();
  const { id: rawId } = router.query;
  const id = typeof rawId === 'string' ? rawId : undefined;
  const [product, setProduct] = useState(
    NEW_PRODUCTS.find((p) => p.id === id) |null
  );
  const { items, dispatch } = useCart();
  const [adding, setAdding] = useState(false);
  useEffect(() => {
    // Update product if id changes and is available from router.query
    if (id) {
      const foundProduct = NEW_PRODUCTS.find((p) => p.id === id);
      setProduct(foundProduct |null);
    }
  }, [id]);
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const res = await fetch(`/api/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useRouter } from 'next/router', // Changed from useParams;
import { useEffect, useState } from 'react',;
import Image from 'next/image',;
import { Button } from '@/components/ui/button',;
import { NEW_PRODUCTS } from '@/data/newProductsData',;
import { useCart } from '@/context/CartContext',;
import { toast } from '@/hooks/use-toast',;
import { SEO } from '@/components/SEO',;
import {logErrorToProduction} from '@/utils/productionLogger',;
export default function ProductPage() {;
  const router = useRouter(),;
  const { id: rawId } = router.query,;
  const id = typeof rawId === 'string' ? rawId : undefined,;
  const [product, setProduct] = useState(;
    NEW_PRODUCTS.find((p) => p.id === id) || null;
  ),;
  const { items, dispatch } = useCart(),;
  const [adding, setAdding] = useState(false),;
  useEffect(() => {;
    // Update product if id changes and is available from router.query;
    if (id) {;
      const foundProduct = NEW_PRODUCTS.find((p) => p.id === id),;
      setProduct(foundProduct || null);
    }
  }, [id]),;
  useEffect(() => {;
    const fetchProduct = async () => {;
      if (!id) return,;
      try {;
        const res = await fetch(`/api/products/${id}`),;
        if (res.ok) {;
          const data = await res.json(),;
          setProduct(data);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
>>>>>>>       } catch (err) {
        // Fail silently and fall back to local data
        logErrorToProduction('Error fetching product', { data: err })
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    // Only fetch if id is available (from router)
    if (id) {
      fetchProduct()

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    }
    };

    // Only fetch if id is available (from router)
    if (id) {
      fetchProduct()
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    },;
    // Only fetch if id is available (from router);
    if (id) {;
      fetchProduct();
<<<<<<< HEAD

    }
=======
>>>>>>>     }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },;
    // Only fetch if id is available (from router);
    if (id) {;
      fetchProduct();
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }, [id]), // id is now from router.query
  if (!product && !id) { // If no id from router yet, it might still be loading
    return <div className="p-6 text-white">Loading product details...</div>
  }
  if (!product) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    setTimeout(() => setAdding(false), 500)
  }

  return (
    <>
      <SEO
        title = {product.title,}
        description = {product.description,}
        ogImage = {product.images?.[0],}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>       />
ursor/fix-website-loading-errors-and-merge-6662
    }

  }, [id]), // id is now from router.query
  if (!product && !id) { // If no id from router yet, it might still be loading

    return <div className="p-6 text-white">Loading product details...</div>;
  }
  if (!product) {

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

    return <div className="p-6 text-white">Product not found</div>
  }, [id]), // id is now from router.query;

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    return <div className="p-6 text-white">Product not found</div>
  }, [id]), // id is now from router.query;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (!product && !id) { // If no id from router yet, it might still be loading;
    return <div className="p-6 text-white">Loading product details...</div>;
  }
;
  if (!product) {;
    return <div className="p-6 text-white">Product not found</div>;
  }
;
  const inCart = items.some(i => i.id === product.id),;
  const handleAdd = () => {;
    if (inCart) return,;
    setAdding(true),;
    dispatch({;
      type: 'ADD_ITEM',;
      payload: { id: product.id, name: product.title, price: product.price ?? 0, quantity: 1 }
    }),;
    toast.success(`1× ${product.title} added`);
    setTimeout(() => setAdding(false), 500);
  };
<<<<<<< HEAD
    setTimeout(() => setAdding(false), 500)
  }
>>>>>>> 
  return (
    <>;
      <SEO



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  return (;
    <>;
      <SEO;
        title={product.title}
        description={product.description}
        ogImage={product.images?.[0]}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      />
>>>>>>>       <div className="min-h-screen bg-zion-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        {product.images?.length ? (
          <div className="mb-4 relative w-full h-64">
            <Image
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              className="object-cover rounded-md"
=======
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>               className="object-cover rounded-md"
              fill
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
              src={product.images[0] || '/placeholder.svg'}
              alt={product.title}
              className="object-cover rounded-md"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            />
          </div>
        ) : null}
        <p className="mb-6">{product.description}</p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        <Button onClick={handleAdd} disabled={adding |inCart}>
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        <Button onClick={handleAdd} disabled={adding |inCart}>
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Button>
      </div>
    </>
  );
}
//Only fetch if id is available (from router) ;
}const inCart = items.some (i => i.id === product.id);
const handleAdd = () => {if (inCart) return;
setAdding (true);
dispatch ({;
  type: 'ADD ITEM';
payload: {;
  id: product.id, name: product.title,  price: product.price ?? 0, quantity: 1 ;
});
toast.success (`1× $ {product.title ;
}added`);
setTimeout ( () => setAdding (false), 500) ;
}
product.title ;
}description= {product.description ;
}ogImage= {product.images?.[0] ;
}/> </Button> </div> </>) ;
}';
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button onClick={handleAdd} disabled={adding || inCart}>
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </Button>;
      </div>;
    </>;
  );
<<<<<<< HEAD

}
//Only fetch if id is available (from router) ;

}
;
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
