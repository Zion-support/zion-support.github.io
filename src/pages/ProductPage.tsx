 useEffect ( () => {
  //Update product if id changes and is available from router.query if (id) {
  
}
};
//Only fetch if id is available (from router) 
}const inCart = items.some (i => i.id === product.id);
const handleAdd = () => {
  if (inCart) return;
setAdding (true);
dispatch ({
  type: 'ADD ITEM';
payload: {
  id: product.id, name: product.title, price: product.price ?? 0, quantity: 1 
}
});
toast.success (`1× $ {
  product.title 
}added`);
setTimeout ( () => setAdding (false), 500) 
};
product.title 
}description= {
  product.description 
}ogImage= {
  product.images?.[0] 
}/> </Button> </div> </>) 
}