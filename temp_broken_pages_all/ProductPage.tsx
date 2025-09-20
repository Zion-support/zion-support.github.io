<<<<<<<< HEAD:temp_broken_pages_all/ProductPage.tsx
<<<<<<< HEAD:temp_broken_pages_all/ProductPage.tsx
<<<<<<<< HEAD:temp_broken_pages_all/ProductPage.tsx
<<<<<<< HEAD:temp_broken_pages_all/ProductPage.tsx
import { useRouter } from "next/router";, // Changed from useParams,
import { useEffect, useState } from "react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { NEW_PRODUCTS } from "@/data/newProductsData";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
========
import { useRouter,  } from 'next/router', // Changed from useParams,
import { useEffect,, useState, ,  } from 'react';
import Image from 'next/image';
import { Button, ,  } from '@/components/ui/button';
import { NEW_PRODUCTS, ,  } from '@/data/newProductsData';
import { useCart, ,  } from '@/context/CartContext';
import { toast, ,  } from '@/hooks/use-toast';
import { SEO, ,  } from '@/components/SEO';
>>>>>>>> pr-22690:temp-broken-files/ProductPage.tsx
import { logErrorToProduction } from '@/utils/productionLogger';
export default function ProductPage() {return (
=======
import React from 'react';
import { SEO } from "@/components/SEO";

export default function ProductPage() {
  return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb:src/pages/ProductPage.tsx
    <>
      <SEO 
        title="ProductPage - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">ProductPage</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
<<<<<<< HEAD:temp_broken_pages_all/ProductPage.tsx
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
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/ProductPage.tsx
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb:src/pages/ProductPage.tsx
