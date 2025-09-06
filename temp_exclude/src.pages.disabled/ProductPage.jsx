<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src && src.pages.disabled/ProductPage && ProductPage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ProductPage && ProductPage.jsx import React from \'react\'; export default function ProductPage () { const { id } = useParams () ; const product = NEW_PRODUCTS && NEW_PRODUCTS.find (p => p && p.id === id) ; const { dispatch } = useCart () ; const [adding,setAdding] = useState (false) ; if (!product) { return < div className=\"p - 6 text - white\">Product not found</div>} const handleAdd = () => { setAdding (true) ; dispatch ({ \"type\": \"ADD_ITEM\",\"payload\": { id: product && product.id,\"name\": \'product && product.title\',\"price\": \'product && product.price ?? 0\',\"quantity\": \'1\'}}) ; toast ({ \"title\": \"Added to cart\",\"variant\": \"success\" }) ; setTimeout ( () => setAdding (false) ,500) }; return (<div className=\"min - h-screen bg - zion - blue p - 6 text - white\"> <h1 className=\"text - 2xl font - bold mb - 4\">{product && product.title}</h1> <p className=\"mb - 6\">{product && product.description}</p> <Button onClick={handleAdd} disabled={adding}> {adding ? \"Adding...\" : \"Add to Cart\"} </Button> </div>) } \";\" import React from \'react\'; export default function ProductPage () { const { id } = useParams () ; const product = NEW_PRODUCTS && NEW_PRODUCTS.find (p => p && p.id === id) ; const { dispatch } = useCart () ; const [adding,setAdding] = useState (false) ; if (!product) { return < div className=\"p - 6 text - white\">Product not found</div>} const handleAdd = () => { setAdding (true) ; dispatch ({ \"type\": \"ADD_ITEM\",\"payload\": { id: product && product.id,\"name\": \'product && product.title\',\"price\": \'product && product.price ?? 0\',\"quantity\": \'1\'}}) ; toast ({ \"title\": \"Added to cart\",\"variant\": \"success\" }) ; setTimeout ( () => setAdding (false) ,500) }; return (<div className=\"min - h-screen bg - zion - blue p - 6 text - white\"> <h1 className=\"text - 2xl font - bold mb - 4\">{product && product.title}</h1> <p className=\"mb - 6\">{product && product.description}</p> <Button onClick={handleAdd} disabled={adding}> {adding ? \"Adding...\" : \"Add to Cart\"} </Button> </div>) } \";\"";
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/ProductPage && ProductPage.jsx import _React from 'react'; export default function ProductPage () { const { id } = useParams () ; const product = NEW_PRODUCTS && NEW_PRODUCTS.find (p => p && p.id === id) ; const { dispatch } = useCart () ; const [adding,setAdding] = useState (false) ; if (!product) { return < div className="p - 6 text - white">Product not found</div>} const handleAdd = () => { setAdding (true) ; dispatch ({ "type": "ADD_ITEM","payload": { id: product && product.id,"name": 'product && product.title',"price": 'product && product.price ?? 0',"quantity": '1'}}) ; toast ({ "title": "Added to cart","variant": "success" }) ; setTimeout ( () => setAdding (false) ,500) }; return (<div className="min - h-screen bg - zion - blue p - 6 text - white"> <h1 className="text - 2xl font - bold mb - 4">{product && product.title}</h1> <p className="mb - 6">{product && product.description}</p> <Button onClick={handleAdd} disabled={adding}> {adding ? "Adding..." : "Add to Cart"} </Button> </div>) } ";" import _React from 'react'; export default function ProductPage () { const { id } = useParams () ; const product = NEW_PRODUCTS && NEW_PRODUCTS.find (p => p && p.id === id) ; const { dispatch } = useCart () ; const [adding,setAdding] = useState (false) ; if (!product) { return < div className="p - 6 text - white">Product not found</div>} const handleAdd = () => { setAdding (true) ; dispatch ({ "type": "ADD_ITEM","payload": { id: product && product.id,"name": 'product && product.title',"price": 'product && product.price ?? 0',"quantity": '1'}}) ; toast ({ "title": "Added to cart","variant": "success" }) ; setTimeout ( () => setAdding (false) ,500) }; return (<div className="min - h-screen bg - zion - blue p - 6 text - white"> <h1 className="text - 2xl font - bold mb - 4">{product && product.title}</h1> <p className="mb - 6">{product && product.description}</p> <Button onClick={handleAdd} disabled={adding}> {adding ? "Adding..." : "Add to Cart"} </Button> </div>) } ";"";
=======
<<<<<<< "HEAD": src && src.pages.disabled/ProductPage && ProductPage.jsx import _React from 'react'; export default function ProductPage () { const { id } = useParams () ; const product = NEW_PRODUCTS && NEW_PRODUCTS.find (p => p && p.id === id) ; const { dispatch } = useCart () ; const [adding,setAdding] = useState (false) ; if (!product) { return < div className="p - 6 text - white">Product not found</div>} const handleAdd = () => { setAdding (true) ; dispatch ({ "type": "ADD_ITEM","payload": { id: product && product.id,"name": 'product && product.title',"price": 'product && product.price ?? 0',"quantity": '1'}}) ; toast ({ "title": "Added to cart","variant": "success" }) ; setTimeout ( () => setAdding (false) ,500) }; return (<div className="min - h-screen bg - zion - blue p - 6 text - white"> <h1 className="text - 2xl font - bold mb - 4">{product && product.title}</h1> <p className="mb - 6">{product && product.description}</p> <Button onClick={handleAdd} disabled={adding}> {adding ? "Adding..." : "Add to Cart"} </Button> </div>) } ";" import _React from 'react'; export default function ProductPage () { const { id } = useParams () ; const product = NEW_PRODUCTS && NEW_PRODUCTS.find (p => p && p.id === id) ; const { dispatch } = useCart () ; const [adding,setAdding] = useState (false) ; if (!product) { return < div className="p - 6 text - white">Product not found</div>} const handleAdd = () => { setAdding (true) ; dispatch ({ "type": "ADD_ITEM","payload": { id: product && product.id,"name": 'product && product.title',"price": 'product && product.price ?? 0',"quantity": '1'}}) ; toast ({ "title": "Added to cart","variant": "success" }) ; setTimeout ( () => setAdding (false) ,500) }; return (<div className="min - h-screen bg - zion - blue p - 6 text - white"> <h1 className="text - 2xl font - bold mb - 4">{product && product.title}</h1> <p className="mb - 6">{product && product.description}</p> <Button onClick={handleAdd} disabled={adding}> {adding ? "Adding..." : "Add to Cart"} </Button> </div>) } ";"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
