<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter } from 'next/router', // Changed from useParams
import { useEffect, useState  } from 'react';
import { useRouter } from 'next/router', // Changed from useParams
import { useEffect, useState  } from 'react';
import { useEffect, useState } from 'react';
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
if (!id) return;
      try {;
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
ursor/fix-website-loading-errors-and-merge-6662


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
if (!id) return;
      try {;
        const res = await fetch(`/api/products/${id}`);




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }
        // Fail silently and fall back to local data
        logErrorToProduction('Error fetching product', { data: err })
      }
<<<<<<< HEAD
    }
    };

    // Only fetch if id is available (from router)
    if (id) {
      fetchProduct()
    },;
    // Only fetch if id is available (from router);
    if (id) {;
      fetchProduct();
    }
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
=======
=======
        }
      } catch (err) {
        // Fail silently and fall back to local data
        logErrorToProduction('Error fetching product', { data: err })
      }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    };



    // Only fetch if id is available (from router)
    if (id) {
      fetchProduct();


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }, [id]), // id is now from router && router.query;


<<<<<<< HEAD
    return <div className="p-6 text-white">Product not found</div>
  }, [id]), // id is now from router.query;

<<<<<<< HEAD
    return <div className="p-6 text-white">Product not found</div>
  }, [id]), // id is now from router.query;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
    <>
      <SEO
        title = {product.title,}
        description = {product.description,}
        ogImage = {product.images?.[0],}
    return <div className="p-6 text-white">Product not found</div>
  }, [id]), // id is now from router.query;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  return (;
    <>;
      <SEO;
        title={product.title}
        description={product.description}
        ogImage={product.images?.[0]}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />
=======
      />
      <div className="min-h-screen bg-zion-blue p-6 text-white">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        {product.images?.length ? (
          <div className="mb-4 relative w-full h-64">
            <Image
<<<<<<< HEAD
<<<<<<< HEAD
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
              src={product.images[0] || '/placeholder.svg'}
              alt={product.title}
=======

              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


              src={product.images[0] || '/placeholder.svg'}
              alt={product.title}

              className="object-cover rounded-md"
            />
          </div>
        ) : null}
        <p className="mb-6">{product.description}</p>
<<<<<<< HEAD
<<<<<<< HEAD
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

          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        <Button onClick={handleAdd} disabled={adding |inCart}>
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </Button>;
      </div>;
    </>;
  );

<<<<<<< HEAD
=======
}
//Only fetch if id is available (from router) ;

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
=======
      const found_product = NEW_PRODUCTS.find ((p) => p.id === id);
      set_product (found_product || null);
    }
  }, [id]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
      const found_product = NEW_PRODUCTS.find ((p) => p.id === id);
      set_product (found_product || null);
    }
  }, [id]);
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </Button>;
      </div>;
    </>);
=======
        </Button>;
      </div>;
    </>;
  );
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
}
//Only fetch if id is available (from router) ;
}const in_cart = items.some (index => i.id === product.id);
const handle_add = () =>: any {
  // Check condition
if (return) {
  $2
}
set_adding (true);
dispatch ({
  type: 'ADD ITEM';
payload: {
  id: product.id, name: product.title,  price: product.price ?? 0, quantity: 1 ;
;
});
toast.success (`1× $ {
  product.title ;
}added`);
set_timeout ( () => set_adding (false), 500) ;
}
product.title ;
}description= {
  product.description ;
}og_image= {
  product.images?.[0] ;
}/> </Button> </div> </>) ;
}';
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
