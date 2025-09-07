/* eslint-disable */
 const stockStatus = product.stock === undefined ? 'In stock' : product.stock <= 0 ? 'Out of stock' : product.stock <= 5 ? 'Low stock' : 'In stock';';''
const stockVariant = product.stock === undefined ? 'success' : product.stock <= 0 ? 'destructive' : product.stock <= 5 ? 'warning' : 'success';
//Reset redirecting state if component unmounts (e.g., navigation cancelled by user) </div>) ;
}const addToCart = () => {;
  if (!isAuthenticated) {;
  toast ({;
}'
};''
> <Heart className= {';''
  active ? 'text-red-500 fill-red-500' : 'text-gray-500' ;
}/> </button> src= {;
  imageUrl ;
}alt= {;
  imageAltText ;'
}style= {;''
  {';''
  objectFit: 'cover' ;
}
}onError= {;
  (e) => handleImageError (e) ;
}priority= {;
  false ;
}/>) : (<div className='w-full h-full bg-gray-200 flex items-center justify-center' > <span className='text-gray-500' >No Image</span> </div>) ;
}src= {;
  imageUrl ;
}alt= {;
  imageAltText ;'
}style= {;''
  {';''
  objectFit: 'cover' ;
}
}onError= {;
  (e) => handleImageError (e) ;'
}priority= {;''
  false ';''
}/>) : (<div className='w-full h-full bg-gray-200 flex items-center justify-center' > <span className='text-gray-500' >No Image</span> </div>) ;
}{;
  product.currency ;
}{;
  product.price ;
}</p>) ;
}Add to Cart </Button> {;
  onBuy && (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button onClick={;
  (e) => {;
  e.stopPropagation ();
if (onBuy) {;''
  setIsRedirecting (true);''''
onBuy () > {'';''''
  isRedirecting ? (<> <span className='animate-spin inline-block mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full' role='status' aria-hidden='true' ></span> Processing... </>) : ('Buy Now') ;
}</Button> </TooltipTrigger> {;
  !isAuthenticated && !isRedirecting && (<TooltipContent>Login required</TooltipContent>) ;
}</Tooltip> </TooltipProvider>) ;''
}</div> </div>) ;''''
}''''''