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
<<<<<<< HEAD:src && src.pages.disabled/ExpandedServicesPage && ExpandedServicesPage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ExpandedServicesPage && ExpandedServicesPage.jsx import React from \'react\'; export default function ExpandedServicesPage () { const [searchQuery,setSearchQuery] = useState (\") ; const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [filteredServices,setFilteredServices] = useState (EXPANDED_SERVICES) ; const [sortBy,setSortBy] = useState (\"rating\") ; useEffect ( () => { let filtered = EXPANDED_SERVICES; import React from \'react\'; export default function ExpandedServicesPage () { const [searchQuery,setSearchQuery] = useState (\") ; const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [filteredServices,setFilteredServices] = useState (EXPANDED_SERVICES) ; const [sortBy,setSortBy] = useState (\"rating\") ; useEffect ( () => { let filtered = EXPANDED_SERVICES;\"";
<<<<<<< "HEAD": src && src.pages.disabled/ExpandedServicesPage && ExpandedServicesPage.jsx import _React from 'react'; export default function ExpandedServicesPage () { const [searchQuery,setSearchQuery] = useState (") ; const [selectedCategory,setSelectedCategory] = useState ("all") ; const [filteredServices,setFilteredServices] = useState (EXPANDED_SERVICES) ; const [sortBy,setSortBy] = useState ("rating") ; useEffect ( () => { let filtered = EXPANDED_SERVICES; import _React from 'react'; export default function ExpandedServicesPage () { const [searchQuery,setSearchQuery] = useState (") ; const [selectedCategory,setSelectedCategory] = useState ("all") ; const [filteredServices,setFilteredServices] = useState (EXPANDED_SERVICES) ; const [sortBy,setSortBy] = useState ("rating") ; useEffect ( () => { let filtered = EXPANDED_SERVICES;"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
