import { useState } from "react";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { NEW_PRODUCTS } from "@/data/newProductsData";

const CATEGORY_FILTERS = Array.from(new Set(NEW_PRODUCTS.map(p => p.category))).map(c => ({ label: c, value: c }));

export default function NewProductsPage() {
  return (
    <DynamicListingPage
      title="New Products"
      description="Discover our latest innovative products and solutions"
      items={NEW_PRODUCTS}
      categoryFilters={CATEGORY_FILTERS}
    />
  );
}

export { CATEGORY_FILTERS, NewProductsPage };