 interface ProductListingCardProps {
  listing: ProductListing;
view?: 'grid' | 'list';
onRequestQuote?: (id: string) => void 
}export function ProductListingCard ({
  listing;
view = 'grid';
onRequestQuote 
}: ProductListingCardProps) {
  const isGrid = view === 'grid';
const navigate = useNavigate ();
//Format price display 
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Handle image loading errors 
}
};
return (<div className= {
  `bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden flex $ {
  isGrid ? 'flex-col' : 'flex-row' 
}cursor-pointer` 
}onClick= {
  handleViewListing 
}> {
  /* Image */ 
}<div className= {
  isGrid ? 'block w-full' : 'block w-1/3' 
}onClick= {
  handleViewListing 
}> <div className= {
  `relative $ {
  isGrid ? 'h-48' : 'h-full' 
}` 
}> <img Featured </Badge>) 
}</div> </div> {
  /* Content */ 
}<div className= {
  `flex flex-col justify-between $ {
  isGrid ? 'p-4 flex-1' : 'p-4 flex-1' 
}` 
}> <div>) 
}</div>) 
}</div> <span key= {
  idx 
}className="text-xs text-zion-slate bg-zion-blue-light/20 px-2 py-1 rounded-full" > {
  tag 
}</span>) ) 
}</div>) 
}</div> </span>) 
}</div> <div className="flex gap-2" > <Button 
}
}className="bg-zion-purple hover:bg-zion-purple-dark text-white" > Buy Now </Button> {
  onRequestQuote && (<Button size="sm" variant="outline" onClick= {
  handleRequestQuote 
}className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" > Request Quote </Button>) 
}</div> </div> </div> </div>) 
}