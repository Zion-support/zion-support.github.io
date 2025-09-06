const CATEGORY FILTERS = Array.from (new Set (NEW PRODUCTS.map (p => p.category) ) ) .map (c => ({
  label: c, value: c 
}) );
}

export default function NewProductsPage () {
  const [listings] = useState<ProductListing[]> ([...NEW PRODUCTS]);
New Products"description=" Explore our latest products priced for today's market."categorySlug=" new-products" listings= {
  listings 
}/>) 
}
