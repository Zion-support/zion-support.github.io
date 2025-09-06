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
<<<<<<< HEAD:src && src.pages.disabled/NextGenInnovativeServices && NextGenInnovativeServices.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/NextGenInnovativeServices && NextGenInnovativeServices.jsx import React from \'react\'; export default function NextGenInnovativeServices () { const [searchTerm,setSearchTerm] = useState (\") ; const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [selectedService,setSelectedService] = useState (null) ; const [viewMode,setViewMode] = useState (\"grid\") ; import React from \'react\'; export default function NextGenInnovativeServices () { const [searchTerm,setSearchTerm] = useState (\") ; const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const [selectedService,setSelectedService] = useState (null) ; const [viewMode,setViewMode] = useState (\"grid\") ;\"";
<<<<<<< "HEAD": src && src.pages.disabled/NextGenInnovativeServices && NextGenInnovativeServices.jsx import _React from 'react'; export default function NextGenInnovativeServices () { const [searchTerm,setSearchTerm] = useState (") ; const [selectedCategory,setSelectedCategory] = useState ("all") ; const [selectedService,setSelectedService] = useState (null) ; const [viewMode,setViewMode] = useState ("grid") ; import _React from 'react'; export default function NextGenInnovativeServices () { const [searchTerm,setSearchTerm] = useState (") ; const [selectedCategory,setSelectedCategory] = useState ("all") ; const [selectedService,setSelectedService] = useState (null) ; const [viewMode,setViewMode] = useState ("grid") ;"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
