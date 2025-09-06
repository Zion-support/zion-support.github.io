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
<<<<<<< HEAD:src && src.pages.disabled/EquipmentPage && EquipmentPage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/EquipmentPage && EquipmentPage.jsx import React from \'react\'; export default EquipmentPage; const EquipmentPage = () => { const [equipment,setEquipment] = useState ([]) ; const [loading,setLoading] = useState (true) ; const [filterCategory,setFilterCategory] = useState (\") ; const [sortBy,setSortBy] = useState (\"newest\") ; const [priceRange,setPriceRange] = useState ([0,10000]) ; const [filterBrand,setFilterBrand] = useState (\") ; const [filterAvailability,setFilterAvailability] = useState (\") ; const [minRating,setMinRating] = useState (0) ; const [showRecommended,setShowRecommended] = useState (false) ; const categories = [\"Servers\",\"Networking\",\"Storage\",\"Workstations\",\"Security\"]; const brandOptions = [\"Dell\",\"HP\",\"Cisco\",\"IBM\",\"Lenovo\"]; const availabilityOptions = [\"In Stock\",\"Low Stock\",\"Out of Stock\"]; useEffect ( () => { import React from \'react\'; export default EquipmentPage; const EquipmentPage = () => { const [equipment,setEquipment] = useState ([]) ; const [loading,setLoading] = useState (true) ; const [filterCategory,setFilterCategory] = useState (\") ; const [sortBy,setSortBy] = useState (\"newest\") ; const [priceRange,setPriceRange] = useState ([0,10000]) ; const [filterBrand,setFilterBrand] = useState (\") ; const [filterAvailability,setFilterAvailability] = useState (\") ; const [minRating,setMinRating] = useState (0) ; const [showRecommended,setShowRecommended] = useState (false) ; const categories = [\"Servers\",\"Networking\",\"Storage\",\"Workstations\",\"Security\"]; const brandOptions = [\"Dell\",\"HP\",\"Cisco\",\"IBM\",\"Lenovo\"]; const availabilityOptions = [\"In Stock\",\"Low Stock\",\"Out of Stock\"]; useEffect ( () => {\"";
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/EquipmentPage && EquipmentPage.jsx import _React from 'react'; export default EquipmentPage; const EquipmentPage = () => { const [equipment,setEquipment] = useState ([]) ; const [loading,setLoading] = useState (true) ; const [filterCategory,setFilterCategory] = useState (") ; const [sortBy,setSortBy] = useState ("newest") ; const [priceRange,setPriceRange] = useState ([0,10000]) ; const [filterBrand,setFilterBrand] = useState (") ; const [filterAvailability,setFilterAvailability] = useState (") ; const [minRating,setMinRating] = useState (0) ; const [showRecommended,setShowRecommended] = useState (false) ; const categories = ["Servers","Networking","Storage","Workstations","Security"]; const brandOptions = ["Dell","HP","Cisco","IBM","Lenovo"]; const availabilityOptions = ["In Stock","Low Stock","Out of Stock"]; useEffect ( () => { import _React from 'react'; export default EquipmentPage; const EquipmentPage = () => { const [equipment,setEquipment] = useState ([]) ; const [loading,setLoading] = useState (true) ; const [filterCategory,setFilterCategory] = useState (") ; const [sortBy,setSortBy] = useState ("newest") ; const [priceRange,setPriceRange] = useState ([0,10000]) ; const [filterBrand,setFilterBrand] = useState (") ; const [filterAvailability,setFilterAvailability] = useState (") ; const [minRating,setMinRating] = useState (0) ; const [showRecommended,setShowRecommended] = useState (false) ; const categories = ["Servers","Networking","Storage","Workstations","Security"]; const brandOptions = ["Dell","HP","Cisco","IBM","Lenovo"]; const availabilityOptions = ["In Stock","Low Stock","Out of Stock"]; useEffect ( () => {"";
=======
<<<<<<< "HEAD": src && src.pages.disabled/EquipmentPage && EquipmentPage.jsx import _React from 'react'; export default EquipmentPage; const EquipmentPage = () => { const [equipment,setEquipment] = useState ([]) ; const [loading,setLoading] = useState (true) ; const [filterCategory,setFilterCategory] = useState (") ; const [sortBy,setSortBy] = useState ("newest") ; const [priceRange,setPriceRange] = useState ([0,10000]) ; const [filterBrand,setFilterBrand] = useState (") ; const [filterAvailability,setFilterAvailability] = useState (") ; const [minRating,setMinRating] = useState (0) ; const [showRecommended,setShowRecommended] = useState (false) ; const categories = ["Servers","Networking","Storage","Workstations","Security"]; const brandOptions = ["Dell","HP","Cisco","IBM","Lenovo"]; const availabilityOptions = ["In Stock","Low Stock","Out of Stock"]; useEffect ( () => { import _React from 'react'; export default EquipmentPage; const EquipmentPage = () => { const [equipment,setEquipment] = useState ([]) ; const [loading,setLoading] = useState (true) ; const [filterCategory,setFilterCategory] = useState (") ; const [sortBy,setSortBy] = useState ("newest") ; const [priceRange,setPriceRange] = useState ([0,10000]) ; const [filterBrand,setFilterBrand] = useState (") ; const [filterAvailability,setFilterAvailability] = useState (") ; const [minRating,setMinRating] = useState (0) ; const [showRecommended,setShowRecommended] = useState (false) ; const categories = ["Servers","Networking","Storage","Workstations","Security"]; const brandOptions = ["Dell","HP","Cisco","IBM","Lenovo"]; const availabilityOptions = ["In Stock","Low Stock","Out of Stock"]; useEffect ( () => {"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
