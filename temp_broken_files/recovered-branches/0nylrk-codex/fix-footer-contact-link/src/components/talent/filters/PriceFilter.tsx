 export function PriceFilter ({
  priceRange, setPriceRange, expanded, toggleSection, isMobileFilterOpen 
}: PriceFilterProps) {
  const handleChange = (values: number[]) => {
  setPriceRange ([values[0], values[1]]) 
};
mb-6 border-b border-zion-blue-light pb-6"> <button) : (<ChevronDown className=" h-4 w-4 text-zion-slate-light" />) 
}</button> <span>$ {
  priceRange[0] 
}/hr</span> <span>$ {
  priceRange[1] 
}/hr</span> </div> <Slider /> </div>) 
}</div>) 
}