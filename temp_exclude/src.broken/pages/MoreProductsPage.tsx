const CATEGORY FILTERS = Array.from (new Set (MORE PRODUCTS.map (p => p.category) ) ) .map (c => ({
  label: c, value: c 
}) );
}
}

export default function MoreProductsPage () {
  const [listings] = useState<ProductListing[]> ([...MORE PRODUCTS]);
More Products"description=" Browse additional offerings priced for the average market."categorySlug=" more-products" listings= {
  listings 
}categoryFilters= {
  CATEGORY FILTERS 
}initialPrice= {
  {
  min: 0, max: 2000 
}
}/>) 
}
