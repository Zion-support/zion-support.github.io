
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        const res = await fetch(`/api/products/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data)

        }
      } catch (err) {
        // Fail silently and fall back to local data
        logErrorToProduction('Error fetching product', { data: err })
      }
    }
    };

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
            />
          </div>
        ) : null}
        <p className="mb-6">{product.description}</p>

        </Button>
      </div>
    </>
        </Button>;
      </div>;
    </>;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </Button>;
      </div>;
    </>;
  );
}
;
<<<<<<< HEAD
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
