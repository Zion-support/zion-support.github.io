import { useRouter } from "next/router";, // Changed from useParams,
import { useEffect, useState } from "react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { NEW_PRODUCTS } from "@/data/newProductsData";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { logErrorToProduction } from '@/utils/productionLogger';
export default function ProductPage() {return (
    <>
      <SEO
title = {product.title}
        description = {product.description}
        ogImage = {product.images?.[0]}
      />
      <div className="min-h-screen bg-zion-blue p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        {product.images?.length ? (
          <div className="mb-4 relative w-full h-64">
            <Image
src = {product.images[0] |'/placeholder.svg'}
              alt = {product.title}
              className="object-cover rounded-md"
            />
          </div>
        ) : null}
        <p className="mb-6">{product.description}</p>
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
  id: product.id name: product.title  price: product.price ?? 0 quantity: 1 ;
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
import React from 'react';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">ProductPage</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}