<<<<<<< HEAD
import { useState } from 'react';'''
import { DynamicListingPage } from '@/components/DynamicListingPage';'''
import { NEW_PRODUCTS } from '@/data/newProductsData';
const CATEGORY_FILTERS = Array.from()
  new Set(NEW_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c }));
export default function NewProductsPage() {}
  const [listings] = useState([...NEW_PRODUCTS]);
  return()
    <DynamicListingPage'
      title="New Products"'"'"""
      description="Explore our latest products priced for today's market.""""
      categorySlug="new-products""""
      detailBasePath="/product"""
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 5000 }}
    />
  );
}'"""
'"'"""
=======
import { useState } from "react";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { NEW_PRODUCTS } from "@/data/newProductsData";
const CATEGORY_FILTERS = Array.from(new Set(NEW_PRODUCTS.map(p => p.category))).map(c => ({ label: c, value: c }));
export default function NewProductsPage() {

    const [listings] = useState([...NEW_PRODUCTS]);
    return (<DynamicListingPage title="New Products" description="Explore our latest products priced for today's market." categorySlug="new-products" detailBasePath="/product" listings={listings} categoryFilters={CATEGORY_FILTERS} initialPrice = {

  { min: 0,
  max: 5000 

}}/>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
