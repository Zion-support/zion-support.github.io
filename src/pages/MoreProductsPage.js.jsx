<<<<<<< HEAD
import { useState } from 'react';'''
import { DynamicListingPage } from '@/components/DynamicListingPage';'''
import { MORE_PRODUCTS } from '@/data/moreProductsData';
const CATEGORY_FILTERS = Array.from()
  new Set(MORE_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c }));
export default function MoreProductsPage() {}
  const [listings] = useState([...MORE_PRODUCTS]);
  return()
    <DynamicListingPage;
      title="More Products""""
      description="Browse additional offerings priced for the average market.""""
      categorySlug="more-products"""
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 2000 }}
    />
  );
}'"""
'"'"""
=======
import { useState } from "react";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { MORE_PRODUCTS } from "@/data/moreProductsData";
const CATEGORY_FILTERS = Array.from(new Set(MORE_PRODUCTS.map(p => p.category))).map(c => ({ label: c, value: c }));
export default function MoreProductsPage() {

    const [listings] = useState([...MORE_PRODUCTS]);
    return (<DynamicListingPage title="More Products" description="Browse additional offerings priced for the average market." categorySlug="more-products" listings={listings} categoryFilters={CATEGORY_FILTERS} initialPrice = {

  { min: 0,
  max: 2000 

}}/>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
