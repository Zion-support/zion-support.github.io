if (!id) return;
      try {;
        const res = await fetch(`/api/products/${id}`);




        }
      } catch (err) {
        // Fail silently and fall back to local data
        logErrorToProduction('Error fetching product', { data: err })
      }


    };



    // Only fetch if id is available (from router)
    if (id) {
      fetchProduct();




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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
    }
  }, [id]), // id is now from router && router.query;


  return (
    <>
      <SEO
        title = {product.title,}
        description = {product.description,}
        ogImage = {product.images?.[0],}
    return <div className="p-6 text-white">Product not found</div>
  }, [id]), // id is now from router.query;

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



      />
      <div className="min-h-screen bg-zion-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        {product.images?.length ? (
          <div className="mb-4 relative w-full h-64">
            <Image
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}


              src={product.images[0] || '/placeholder.svg'}
              alt={product.title}

              className="object-cover rounded-md"
            />
          </div>
        ) : null}
        <p className="mb-6">{product.description}</p>
        <Button onClick={handleAdd} disabled={adding |inCart}>
          {inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
        </Button>;
      </div>;
    </>;
  );

}
//Only fetch if id is available (from router) ;

}

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
      const found_product = NEW_PRODUCTS.find ((p) => p.id === id);
      set_product (found_product || null);
    }
  }, [id]);
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
        </Button>;
      </div>;
    </>;
  );
}
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
}