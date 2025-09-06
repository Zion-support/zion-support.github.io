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
<<<<<<< HEAD:src && src.pages.disabled/PricingGuide && PricingGuide.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/PricingGuide && PricingGuide.jsx import React from \'react\'; export default function PricingGuide () { const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const filteredServices = selectedCategory === \"all\" ? EXPANDED_SERVICES : EXPANDED_SERVICES && EXPANDED_SERVICES.filter (service => service && service.category.toLowerCase () .replace (/\s+/g,\"-\") === selectedCategory) ; const getCategoryIcon = (category) => { const icons = { \"AI Development\": <Brain className=\"w - 6 h - 6\"/>,\"Cloud Services\": <Cloud className=\"w - 6 h - 6\"/>,\"DevOps\": <Zap className=\"w - 6 h - 6\"/>,\"Cybersecurity\": <Shield className=\"w - 6 h - 6\"/>,\"Data & Analytics\": <Database className=\"w - 6 h - 6\"/>,\"Digital Transformation\": <TrendingUp className=\"w - 6 h - 6\"/>,\"Emerging Tech\": <Globe className=\"w - 6 h - 6\"/>,\";\" import React from \'react\'; export default function PricingGuide () { const [selectedCategory,setSelectedCategory] = useState (\"all\") ; const filteredServices = selectedCategory === \"all\" ? EXPANDED_SERVICES : EXPANDED_SERVICES && EXPANDED_SERVICES.filter (service => service && service.category.toLowerCase () .replace (/\s+/g,\"-\") === selectedCategory) ; const getCategoryIcon = (category) => { const icons = { \"AI Development\": <Brain className=\"w - 6 h - 6\"/>,\"Cloud Services\": <Cloud className=\"w - 6 h - 6\"/>,\"DevOps\": <Zap className=\"w - 6 h - 6\"/>,\"Cybersecurity\": <Shield className=\"w - 6 h - 6\"/>,\"Data & Analytics\": <Database className=\"w - 6 h - 6\"/>,\"Digital Transformation\": <TrendingUp className=\"w - 6 h - 6\"/>,\"Emerging Tech\": <Globe className=\"w - 6 h - 6\"/>,\";\"";
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/PricingGuide && PricingGuide.jsx import _React from 'react'; export default function PricingGuide () { const [selectedCategory,setSelectedCategory] = useState ("all") ; const filteredServices = selectedCategory === "all" ? EXPANDED_SERVICES : EXPANDED_SERVICES && EXPANDED_SERVICES.filter (service => service && service.category.toLowerCase () .replace (/\s+/g,"-") === selectedCategory) ; const getCategoryIcon = (category) => { const icons = { "AI Development": <Brain className="w - 6 h - 6"/>,"Cloud Services": <Cloud className="w - 6 h - 6"/>,"DevOps": <Zap className="w - 6 h - 6"/>,"Cybersecurity": <Shield className="w - 6 h - 6"/>,"Data & Analytics": <Database className="w - 6 h - 6"/>,"Digital Transformation": <TrendingUp className="w - 6 h - 6"/>,"Emerging Tech": <Globe className="w - 6 h - 6"/>,";" import _React from 'react'; export default function PricingGuide () { const [selectedCategory,setSelectedCategory] = useState ("all") ; const filteredServices = selectedCategory === "all" ? EXPANDED_SERVICES : EXPANDED_SERVICES && EXPANDED_SERVICES.filter (service => service && service.category.toLowerCase () .replace (/\s+/g,"-") === selectedCategory) ; const getCategoryIcon = (category) => { const icons = { "AI Development": <Brain className="w - 6 h - 6"/>,"Cloud Services": <Cloud className="w - 6 h - 6"/>,"DevOps": <Zap className="w - 6 h - 6"/>,"Cybersecurity": <Shield className="w - 6 h - 6"/>,"Data & Analytics": <Database className="w - 6 h - 6"/>,"Digital Transformation": <TrendingUp className="w - 6 h - 6"/>,"Emerging Tech": <Globe className="w - 6 h - 6"/>,";"";
=======
<<<<<<< "HEAD": src && src.pages.disabled/PricingGuide && PricingGuide.jsx import _React from 'react'; export default function PricingGuide () { const [selectedCategory,setSelectedCategory] = useState ("all") ; const filteredServices = selectedCategory === "all" ? EXPANDED_SERVICES : EXPANDED_SERVICES && EXPANDED_SERVICES.filter (service => service && service.category.toLowerCase () .replace (/\s+/g,"-") === selectedCategory) ; const getCategoryIcon = (category) => { const icons = { "AI Development": <Brain className="w - 6 h - 6"/>,"Cloud Services": <Cloud className="w - 6 h - 6"/>,"DevOps": <Zap className="w - 6 h - 6"/>,"Cybersecurity": <Shield className="w - 6 h - 6"/>,"Data & Analytics": <Database className="w - 6 h - 6"/>,"Digital Transformation": <TrendingUp className="w - 6 h - 6"/>,"Emerging Tech": <Globe className="w - 6 h - 6"/>,";" import _React from 'react'; export default function PricingGuide () { const [selectedCategory,setSelectedCategory] = useState ("all") ; const filteredServices = selectedCategory === "all" ? EXPANDED_SERVICES : EXPANDED_SERVICES && EXPANDED_SERVICES.filter (service => service && service.category.toLowerCase () .replace (/\s+/g,"-") === selectedCategory) ; const getCategoryIcon = (category) => { const icons = { "AI Development": <Brain className="w - 6 h - 6"/>,"Cloud Services": <Cloud className="w - 6 h - 6"/>,"DevOps": <Zap className="w - 6 h - 6"/>,"Cybersecurity": <Shield className="w - 6 h - 6"/>,"Data & Analytics": <Database className="w - 6 h - 6"/>,"Digital Transformation": <TrendingUp className="w - 6 h - 6"/>,"Emerging Tech": <Globe className="w - 6 h - 6"/>,";"";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
