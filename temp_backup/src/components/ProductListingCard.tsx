/* eslint-disable */
 import Image from 'next/image';';''
<<<<<<< HEAD
//Import next/image const stockVariant = listing.stock === undefined ? 'success' : listing.stock <= 0 ? 'destructive' : listing.stock <= 5 ? 'warning' : 'success';'
=======
//Import next/image >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const stockStatus = listing.stock === undefined ? 'In stock' : listing.stock <= 0 ? 'Out of stock' : listing.stock <= 5 ? 'Low stock' : 'In stock';';''
const stockVariant = listing.stock === undefined ? 'success' : listing.stock <= 0 ? 'destructive' : listing.stock <= 5 ? 'warning' : 'success';'
>>>>>>> origin/resolved-merge-conflicts
const handleImageError = () => {;''
  if (!imageError) {';''
  //Prevent infinite loops if placeholder also fails setImageSrc ('/placeholder.svg');
setImageError (true) ;'
}''
};';''
//Debug logging for development if (process.env.NODE ENV === 'development') {;
  return;
}
}> {
  /* Image */
}<div
}> <div className= {
  `relative $ {
  imageContainerClasses
}`
}> {
  /* Ensure this container has dimensions */
}<Image Featured </Badge>)
}{
  stockStatus && (<Badge variant= {
  stockVariant as any
}className="absolute top-2 left-2" > {
  stockStatus
}</Badge>)
}<FavoriteButton itemId= {
  listing.id
}/> </div> </div> {
  /* Content */
}<div className= {
  `flex flex-col justify-between $ {'
  isGrid ? 'p-4 flex-1' : 'p-4 flex-1'
}`
}> <div> </Badge> {
  listing.rating && (<RatingStars value= {
  listing.rating
}count= {
  listing.reviewCount
}/>)
}</div> <span key= {
  idx "
}className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full" > {
  tag
}</span>) )
}</div>)
}</div> </span>) "
}</div> <div className="flex gap-2" > <Button onClick={
  (e) => {
  e.stopPropagation (), //Prevent card click event addToCart ()
}disabled= {
  loading "
}loading ? (<> <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" > <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path> </svg> Loading... </>) : ("Add to Cart")
}</Button> <Button onClick={
  (e) => {
  e.stopPropagation (), //Prevent card click event //Add to cart first, then redirect to checkout dispatch (addItem ({
  id: listing.id,  title: listing.title, price: listing.price ?? 0
}) );'
router.push ('/checkout')
}disabled= {
  loading
}> Buy Now </Button> {"
  onRequestQuote && (<Button size="sm" variant="outline" onClick={
  handleRequestQuote "
}className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" > Request Quote </Button>)
}</div> </div> </div> </div>)
}
};
}
}> {;
  /* Image */ ;
}<div ;
}
}> <div className= {;
  `relative $ {;
  imageContainerClasses ;`
}` ;
}> {;
  /* Ensure this container has dimensions */ ;
}<Image Featured </Badge>) ;
}{;
  stockStatus && (<Badge variant= {;
  stockVariant as any ;
}className="absolute top-2 left-2" > {;
  stockStatus ;
}</Badge>) ;
}<FavoriteButton itemId= {;
  listing.id ;
}/> </div> </div> {;
  /* Content */ ;'
}<div className= {;''`
  `flex flex-col justify-between $ {';''
  isGrid ? 'p-4 flex-1' : 'p-4 flex-1' ;`
}` ;
}> <div> </Badge> {;
  listing.rating && (<RatingStars value= {;
  listing.rating ;
}count= {;
  listing.reviewCount ;
}/>) ;"
}</div> <span key= {;""
  idx ";""
}className="text-xs text-foreground/70 bg-background/50 px-2 py-1 rounded-full" > {;
  tag ;
}</span>) ) ;"
}</div>) ;""
}</div> </span>) ";""
}</div> <div className="flex gap-2" > <Button onClick={;
  (e) => {;
  e.stopPropagation (), //Prevent card click event addToCart () ;
}"
}disabled= {;""
  loading ";""
}loading ? (<> <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" > <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle> <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path> </svg> Loading... </>) : ("Add to Cart") ;
}</Button> <Button onClick={;
  (e) => {;
  e.stopPropagation (), //Prevent card click event //Add to cart first, then redirect to checkout dispatch (addItem ({;'
  id: listing.id,  title: listing.title, price: listing.price ?? 0 ;''
}) );';''
router.push ('/checkout') ;
}
}disabled= {;"
  loading ;""
}> Buy Now </Button> {";""
  onRequestQuote && (<Button size="sm" variant="outline" onClick={;""
  handleRequestQuote ";""
}className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground" > Request Quote </Button>) ;
}</div> </div> </div> </div>) ;'"
};'"'"
'"'"'"`