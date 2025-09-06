
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
<<<<<<< HEAD:src && src.pages.disabled/IndustrySolutions && IndustrySolutions.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/IndustrySolutions && IndustrySolutions.jsx import React from \'react\'; export default IndustrySolutions; import { Search,Zap,CreditCard,Truck,Phone,Mail,MapPin,Building,Factory,Store,Home,GraduationCap,Stethoscope const IndustrySolutions = () => { const [searchTerm,setSearchTerm] = useState (\") ; const [selectedIndustry,setSelectedIndustry] = useState (\"all\") ; const [selectedSolutionType,setSelectedSolutionType] = useState (\"all\") ; import React from \'react\'; export default IndustrySolutions; import { Search,Zap,CreditCard,Truck,Phone,Mail,MapPin,Building,Factory,Store,Home,GraduationCap,Stethoscope const IndustrySolutions = () => { const [searchTerm,setSearchTerm] = useState (\") ; const [selectedIndustry,setSelectedIndustry] = useState (\"all\") ; const [selectedSolutionType,setSelectedSolutionType] = useState (\"all\") ;\"";
<<<<<<< "HEAD": src && src.pages.disabled/IndustrySolutions && IndustrySolutions.jsx import _React from 'react'; export default IndustrySolutions; import { Search,Zap,CreditCard,Truck,Phone,Mail,MapPin,Building,Factory,Store,Home,GraduationCap,Stethoscope const IndustrySolutions = () => { const [searchTerm,setSearchTerm] = useState (") ; const [selectedIndustry,setSelectedIndustry] = useState ("all") ; const [selectedSolutionType,setSelectedSolutionType] = useState ("all") ; import _React from 'react'; export default IndustrySolutions; import { Search,Zap,CreditCard,Truck,Phone,Mail,MapPin,Building,Factory,Store,Home,GraduationCap,Stethoscope const IndustrySolutions = () => { const [searchTerm,setSearchTerm] = useState (") ; const [selectedIndustry,setSelectedIndustry] = useState ("all") ; const [selectedSolutionType,setSelectedSolutionType] = useState ("all") ;"";