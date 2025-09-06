<<<<<<< HEAD

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
<<<<<<< HEAD:src && src.pages.disabled/Cart && Cart.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/Cart && Cart.jsx import React from \'react\'; export default function CartPage () { const navigate = useNavigate () ; const [items,setItems] = useState ([]) ; const [loading,setLoading] = useState (false) ; const [cartLoading,setCartLoading] = useState (true) ; const [showEmpty,setShowEmpty] = useState (false) ; useEffect ( () => { import React from \'react\'; export default function CartPage () { const navigate = useNavigate () ; const [items,setItems] = useState ([]) ; const [loading,setLoading] = useState (false) ; const [cartLoading,setCartLoading] = useState (true) ; const [showEmpty,setShowEmpty] = useState (false) ; useEffect ( () => {\'';
<<<<<<< "HEAD": src && src.pages.disabled/Cart && Cart.jsx import _React from 'react'; export default function CartPage () { const navigate = useNavigate () ; const [items,setItems] = useState ([]) ; const [loading,setLoading] = useState (false) ; const [cartLoading,setCartLoading] = useState (true) ; const [showEmpty,setShowEmpty] = useState (false) ; useEffect ( () => { import _React from 'react'; export default function CartPage () { const navigate = useNavigate () ; const [items,setItems] = useState ([]) ; const [loading,setLoading] = useState (false) ; const [cartLoading,setCartLoading] = useState (true) ; const [showEmpty,setShowEmpty] = useState (false) ; useEffect ( () => {'';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
