// Minimal wishlist slice shim to satisfy imports without Redux setup
import { ProductListing } from "@/types/listings";

export function addToWishlist(_payload: { id: string; type: 'product'; data: ProductListing }) {
  return { type: 'wishlist/add', payload: _payload } as const;
}

export function getApiUrl() {
  return '';
}

