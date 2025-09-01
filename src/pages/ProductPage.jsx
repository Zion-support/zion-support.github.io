import { useParams  } from 'react-router-dom';

export default function Page() {
,
    }) ;
    toast({ title: 'Added to cart', variant: 'success' }) ;
    setTimeout(() => setAdding(false) , 500) ;
  };
  return (<div className="min - h-screen bg-zion - blue p - 6 text-white">
      <h1 className="text-2xl font - bold mb-4">{product.title}</h1>
      <p className="mb-6">{product.description}</p>
      <Button onClick={handleAdd} disabled={adding}>
        {adding ? 'Adding...' : 'Add to Cart'}
      </Button>
    </div>) ;
}
