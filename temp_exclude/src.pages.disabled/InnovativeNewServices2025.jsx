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
<<<<<<< HEAD:src && src.pages.disabled/InnovativeNewServices2025 && InnovativeNewServices2025.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/InnovativeNewServices2025 && InnovativeNewServices2025.jsx import React from \'react\'; export default InnovativeNewServices2025; const InnovativeNewServices2025 = () => { const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [selectedPriceRange,setSelectedPriceRange] = useState (\"all\") ; const allServices = [...INNOVATIVE_NEW_SERVICES_2025,...SPECIALIZED_IT_SERVICES_2025]; const categories = [\"all\",...Array && Array.from (new Set (allServices && allServices.map (service => service && service.category) ) ) ]; const priceRanges = [{ \"value\": \"all\",\"label\": \"All Prices\" },{ \"value\": \"0 - 2000\",\"label\": \"Under $2,000 / month\" },{ \"value\": \"2000 - 5000\",\"label\": \"$2,000 - $5,000 / month\" },{ \"value\": \"5000+\",\"label\": \"$5,000+/month\" } ]; const filteredServices = allServices && allServices.filter (service => { const categoryMatch = selectedCategory === \"all\" || service && service.category === selectedCategory; import React from \'react\'; export default InnovativeNewServices2025; const InnovativeNewServices2025 = () => { const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [selectedPriceRange,setSelectedPriceRange] = useState (\"all\") ; const allServices = [...INNOVATIVE_NEW_SERVICES_2025,...SPECIALIZED_IT_SERVICES_2025]; const categories = [\"all\",...Array && Array.from (new Set (allServices && allServices.map (service => service && service.category) ) ) ]; const priceRanges = [{ \"value\": \"all\",\"label\": \"All Prices\" },{ \"value\": \"0 - 2000\",\"label\": \"Under $2,000 / month\" },{ \"value\": \"2000 - 5000\",\"label\": \"$2,000 - $5,000 / month\" },{ \"value\": \"5000+\",\"label\": \"$5,000+/month\" } ]; const filteredServices = allServices && allServices.filter (service => { const categoryMatch = selectedCategory === \"all\" || service && service.category === selectedCategory;\";
<<<<<<< "HEAD": src && src.pages.disabled/InnovativeNewServices2025 && InnovativeNewServices2025.jsx import _React from 'react'; export default InnovativeNewServices2025; const InnovativeNewServices2025 = () => { const [selectedCategory,setSelectedCategory] = useState ("all") ; const [selectedPriceRange,setSelectedPriceRange] = useState ("all") ; const allServices = [...INNOVATIVE_NEW_SERVICES_2025,...SPECIALIZED_IT_SERVICES_2025]; const categories = ["all",...Array && Array.from (new Set (allServices && allServices.map (service => service && service.category) ) ) ]; const priceRanges = [{ "value": "all","label": "All Prices" },{ "value": "0 - 2000","label": "Under $2,000 / month" },{ "value": "2000 - 5000","label": "$2,000 - $5,000 / month" },{ "value": "5000+","label": "$5,000+/month" } ]; const filteredServices = allServices && allServices.filter (service => { const categoryMatch = selectedCategory === "all" || service && service.category === selectedCategory; import _React from 'react'; export default InnovativeNewServices2025; const InnovativeNewServices2025 = () => { const [selectedCategory,setSelectedCategory] = useState ("all") ; const [selectedPriceRange,setSelectedPriceRange] = useState ("all") ; const allServices = [...INNOVATIVE_NEW_SERVICES_2025,...SPECIALIZED_IT_SERVICES_2025]; const categories = ["all",...Array && Array.from (new Set (allServices && allServices.map (service => service && service.category) ) ) ]; const priceRanges = [{ "value": "all","label": "All Prices" },{ "value": "0 - 2000","label": "Under $2,000 / month" },{ "value": "2000 - 5000","label": "$2,000 - $5,000 / month" },{ "value": "5000+","label": "$5,000+/month" } ]; const filteredServices = allServices && allServices.filter (service => { const categoryMatch = selectedCategory === "all" || service && service.category === selectedCategory;";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
