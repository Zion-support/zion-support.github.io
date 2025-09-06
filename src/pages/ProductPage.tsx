<<<<<<< HEAD
<<<<<<< HEAD
if (!id) return;
      try {;
        const res = await fetch(`/api/products/${id}`);




        }
      } catch (err) {
=======
import { useRouter } from 'next/router', // Changed from useParams
import { useEffect, useState  } from 'react';
import { useRouter } from 'next/router', // Changed from useParams
import { useEffect, useState  } from 'react';
import { useEffect, useState } from 'react';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
ursor/fix-website-loading-errors-and-merge-6662


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        // Fail silently and fall back to local data
<<<<<<< HEAD
        logErrorToProduction('Error fetching product', { data: err });
      }
<<<<<<< HEAD


    };



=======
    }
    };

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Only fetch if id is available (from router)
    if (id) {
      fetchProduct();
<<<<<<< HEAD




=======
    }
<<<<<<< HEAD
  }, [id]), // id is now from router.query
  if (!product && !id) { // If no id from router yet, it might still be loading
    return <div className="p-6 text-white">Loading product details...</div>
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
    setTimeout(() => setAdding(false), 500)
  }


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }, [id]), // id is now from router && router.query;


    return <div className="p-6 text-white">Product not found</div>
  }, [id]), // id is now from router.query;

<<<<<<< HEAD
<<<<<<< HEAD
=======
    return <div className="p-6 text-white">Product not found</div>
  }, [id]), // id is now from router.query;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
    setTimeout(() => setAdding(false), 500);
  };
    setTimeout(() => setAdding(false), 500)
  }

  return (
    <>;
      <SEO



<<<<<<< HEAD
      />
      <div className="min-h-screen bg-zion-blue p-6 text-white">
=======
  return (;
    <>;
      <SEO;
        title={product.title}
        description={product.description}
        ogImage={product.images?.[0]}
=======
    }
  }, [id]), // id is now from router.query
  if (!product && !id) { // If no id from router yet, it might still be loading
    return <div className="p-6 text-white">Loading product details...</div>
  }
  if (!product) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        {product.images?.length ? (
          <div className="mb-4 relative w-full h-64">
            <Image
<<<<<<< HEAD
<<<<<<< HEAD

              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
=======
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
              src={product.images[0] || '/placeholder.svg'}
              alt={product.title}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


              src={product.images[0] || '/placeholder.svg'}
              alt={product.title}

              className="object-cover rounded-md"
<<<<<<< HEAD
              fill
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              className="object-cover rounded-md"
              fill
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            />
          </div>
        ) : null}
        <p className="mb-6">{product.description}</p>
<<<<<<< HEAD
<<<<<<< HEAD

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

          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
=======
        <Button onClick={handleAdd} disabled={adding |inCart}>
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
        <Button onClick={handleAdd} disabled={adding |inCart}>
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
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
        <Button onClick={handleAdd} disabled={adding || inCart}>
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        </Button>;
      </div>;
    </>;
  );

<<<<<<< HEAD
<<<<<<< HEAD
}
//Only fetch if id is available (from router) ;

}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import Image from 'next / image';
import {Button} from '@/components / ui / button';
import {NEW_PRODUCTS} from '@/data / newProductsData';
import {use_cart} from '@/context / CartContext';
import {toast} from '@/hooks / use - toast';
import {SEO} from '@/components / SEO';
import {logErrorToProduction} from '@/utils / production_logger';
export default /**
 * ProductPage - Function description
 */
function ProductPage() {
  const router = use_router ();
  const { id: raw_id } = router.query;
  const id = typeof raw_id === 'string' ? raw_id : undefined;
  const [product, set_product] = useState (
    NEW_PRODUCTS.find ((p) => p.id === id) || null);
  const { items, dispatch } = use_cart ();
  const [adding, set_adding] = useState (false);
  useEffect (() => {
    // Update product if id changes and is available from router.query;
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
<<<<<<< HEAD
      const found_product = NEW_PRODUCTS.find ((p) => p.id === id);
      set_product (found_product || null);
    }
  }, [id]);
;
=======
;
  useEffect (() => {
    const fetch_product = async () => {
      // Check condition
if (return) {
  $2
}
      try {
        const res = await fetch (`/api / products/${id}`);
        // Check condition
if ( {) {
  $2
}
          const data = await res.json ();
          set_product (data);
        }
      } catch (err) {
        // Fail silently and fall back to local data;
        logErrorToProduction ('Error fetching product', { data: err });
      }
    }
;
    // Only fetch if id is available (from router);
    // Check condition
if ( {) {
  $2
}
      fetch_product ();
    }
  }, [id]), // id is now from router.query;
  // Check condition
if ( { // If no id from router yet, it might still be loading) {
  $2
}
    return <div className="p - 6 text - white">Loading product details...</div>;
  }
  // Check condition
if ( {) {
  $2
}
    return <div className="p - 6 text - white">Product not found</div>;
  }
  const in_cart = items.some (index => i.id === product.id);
;
  const handle_add = () =>: any {
    // Check condition
if (return) {
  $2
}
    set_adding (true);
    dispatch ({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.title, price: product.price ?? 0, quantity: 1 }
    });
    toast.success (`1× ${product.title} added`);
    set_timeout (() => set_adding (false), 500);
  }
  return (
    <>;
      <SEO;
        title = {product.title, }
        description = {product.description, }
        og_image = {product.images?.[0], }
      />;
      <div className="min - h-screen bg - zion - blue p - 6 text - white">;
        <h1 className="text - 2xl font - bold mb - 4">{product.title}</h1>;
        {product.images?.length ? (
          <div className="mb - 4 relative w - full h - 64">;
            <Image;
              src = {product.images[0] || '/placeholder.svg', }
              alt = {product.title, }
              className="object - cover rounded - md";
            />;
          </div>) : null}
        <p className="mb - 6">{product.description}</p>;
        <Button on_click={handle_add} disabled={adding || in_cart}>;
          {in_cart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        </Button>;
      </div>;
    </>;
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
        </Button>;
      </div>;
    </>;
  );
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
