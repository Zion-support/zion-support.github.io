
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
<<<<<<< HEAD:src && src.pages.disabled/ComprehensiveServicesOverview && ComprehensiveServicesOverview.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ComprehensiveServicesOverview && ComprehensiveServicesOverview.jsx import React from \'react\'; export default function ComprehensiveServicesOverview () { import React from \'react\'; export default function ComprehensiveServicesOverview () {\'';
<<<<<<< "HEAD": src && src.pages.disabled/ComprehensiveServicesOverview && ComprehensiveServicesOverview.jsx import _React from 'react'; export default function ComprehensiveServicesOverview () { import _React from 'react'; export default function ComprehensiveServicesOverview () {'';