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
<<<<<<< HEAD:src && src.pages.disabled/NewServices && NewServices.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/NewServices && NewServices.jsx import React from \'react\'; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export function NewServices () { const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [searchTerm,setSearchTerm] = useState (\") ; const [selectedService,setSelectedService] = useState (null) ; import React from \'react\'; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export function NewServices () { const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [searchTerm,setSearchTerm] = useState (\") ; const [selectedService,setSelectedService] = useState (null) ;\"";
<<<<<<< "HEAD": src && src.pages.disabled/NewServices && NewServices.jsx import _React from 'react'; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export function NewServices () { const [selectedCategory,setSelectedCategory] = useState ("all") ; const [searchTerm,setSearchTerm] = useState (") ; const [selectedService,setSelectedService] = useState (null) ; import _React from 'react'; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export default NewServices; export function NewServices () { const [selectedCategory,setSelectedCategory] = useState ("all") ; const [searchTerm,setSearchTerm] = useState (") ; const [selectedService,setSelectedService] = useState (null) ;"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
