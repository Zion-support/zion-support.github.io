
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

        }
      } catch (err) {
        // Fail silently and fall back to local data
        logErrorToProduction('Error fetching product', { data: err })
      }

    // Only fetch if id is available (from router)
    if (id) {
      fetchProduct()

    }
  }, [id]), // id is now from router.query
  if (!product && !id) { // If no id from router yet, it might still be loading
    return <div className="p-6 text-white">Loading product details...</div>
  }
  if (!product) {

      />
      <div className="min-h-screen bg-zion-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        {product.images?.length ? (
          <div className="mb-4 relative w-full h-64">
            <Image

=======
              src = {product.images[0] |'/placeholder.svg',}
              alt = {product.title,}


              src={product.images[0] || '/placeholder.svg'}
              alt={product.title}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              className="object-cover rounded-md"
            />
          </div>
        ) : null}
        <p className="mb-6">{product.description}</p>

        </Button>
      </div>
    </>
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

        </Button>;
      </div>;
    </>;
  );
}
;
<<<<<<< HEAD
