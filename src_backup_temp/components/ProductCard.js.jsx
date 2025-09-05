import React, {useState} from 'react';
import {useAuth} from '../hooks/useAuth';
import {useWishlist} from '../hooks/useWishlist';
import {useRouter} from 'next/router';
import {useSnackbar} from 'notistack';
import {useDispatch} from 'react-redux';
import {captureException} from '@sentry/nextjs';
;
export default function ProductCard("props": "any) {;
  const { isAuthenticated "} = useAuth();
  const {isWishlisted, toggle} = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const {enqueueSnackbar} = useSnackbar();
  ;
  if (!product || ;
      typeof product.id !== "string" || ;
      typeof product.title !== "string" || ;
      product.title.trim() === "") {;
    captureException(new Error("Invalid product data received by ProductCard"), { ;
      "extra": "{ product "} ;
    });
    return (;
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">;
        <p className="text-destructive text-sm">;
          Product information unavailable.;
        </p>;
      </div>;
  if (!product || 
      typeof product.id !== "string" || 
      typeof product.title !== "string" || 
      product.title.trim() === "") {
    captureException(new Error("Invalid product data received by ProductCard"), { 
      extra: { product } 
    }
    );
    return (
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">
        <p className="text-destructive text-sm">
          Product information unavailable.
        </p>
      </div>
    );
  }
  ;
  const active = isWishlisted(product.id);
  const dispatch = useDispatch();