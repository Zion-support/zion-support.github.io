
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
<<<<<<< HEAD:src && src.pages.disabled/CloudDevOpsServices && CloudDevOpsServices.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/CloudDevOpsServices && CloudDevOpsServices.jsx import React from \'react\'; export default CloudDevOpsServices; const CloudDevOpsServices = () => { const [searchTerm,setSearchTerm] = useState (\") ; const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [selectedPricing,setSelectedPricing] = useState (\"all\") ; import React from \'react\'; export default CloudDevOpsServices; const CloudDevOpsServices = () => { const [searchTerm,setSearchTerm] = useState (\") ; const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [selectedPricing,setSelectedPricing] = useState (\"all\") ;\"";
<<<<<<< "HEAD": src && src.pages.disabled/CloudDevOpsServices && CloudDevOpsServices.jsx import _React from 'react'; export default CloudDevOpsServices; const CloudDevOpsServices = () => { const [searchTerm,setSearchTerm] = useState (") ; const [selectedCategory,setSelectedCategory] = useState ("all") ; const [selectedPricing,setSelectedPricing] = useState ("all") ; import _React from 'react'; export default CloudDevOpsServices; const CloudDevOpsServices = () => { const [searchTerm,setSearchTerm] = useState (") ; const [selectedCategory,setSelectedCategory] = useState ("all") ; const [selectedPricing,setSelectedPricing] = useState ("all") ;"";