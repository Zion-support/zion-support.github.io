import Image from 'next/image';

export default function ProductPage() {_const _router = useRouter();
  const { id: rawId} = router.query;
  const _id = typeof rawId === 'string' ? rawId : undefined;
  const [product, setProduct] = useState(_NEW_PRODUCTS.find((p) => p.id === id) || null
  );
  const {_items, _dispatch} = useCart();
  const [adding, setAdding] = useState(false);

  useEffect__(() => {_// Update product if id changes and is available from router.query
    if (id) {
      const _foundProduct = NEW_PRODUCTS.find(_(p) => p.id === id);
      setProduct(foundProduct || null);}
  }, [id]);

  useEffect__(() => {_const _fetchProduct = async () => {
      if (!id) return;
      try {
        const _res = await fetch(`/api/products/${id}`);
        if (res.ok) {_const _data = await res.json();
          setProduct(data);}
      } catch (err) {_// Fail silently and fall back to local data
        logErrorToProduction('Error fetching product', _{ data: err});
      }
    };

    // Only fetch if id is available (from router)
    if (id) {_fetchProduct();}
  }, [id]); // id is now from router.query

  if (!product && !id) {_// If no id from router yet, _it might still be loading
    return <div className="p-6 text-white">Loading product details...</div>;}

  if (!product) {_return <div className="p-6 text-white">Product not found</div>;}

  const _inCart = items.some(i => i.id === product.id);

  const _handleAdd = () => {_if (inCart) return;
    setAdding(true);
    dispatch({
      type: 'ADD_ITEM', _payload: { id: product.id, _name: product.title, _price: product.price ?? 0, _quantity: 1}
    });
    toast.success(`1× ${_product.title} added`);
    setTimeout__(() => setAdding(false), 500);
  };

  return (
    <>
      <SEO
        title={_product.title}
        description={_product.description}
        ogImage={_product.images?.[0]}
      />
      <div className="min-h-screen bg-zion-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">{_product.title}</h1>
        {_product.images?.length ? (
          <div className="mb-4 relative w-full h-64">
            <Image
              src={product.images[0] || '/placeholder.svg'}
              alt={_product.title}
              className="object-cover rounded-md"
            />
          </div>
        ) : null}
        <p className="mb-6">{_product.description}</p>
        <Button onClick={_handleAdd} disabled={_adding || inCart}>
          {_inCart ? 'In Cart' : adding ? 'Adding...' : 'Add to Cart'}
        </Button>
      </div>
    </>
  );
}
