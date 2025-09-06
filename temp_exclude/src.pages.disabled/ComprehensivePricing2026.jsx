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
<<<<<<< HEAD:src && src.pages.disabled/ComprehensivePricing2026 && ComprehensivePricing2026.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ComprehensivePricing2026 && ComprehensivePricing2026.jsx import React from \'react\'; export default ComprehensivePricing2026; import React from \'react\'; export default ComprehensivePricing2026\';\';
<<<<<<< "HEAD": src && src.pages.disabled/ComprehensivePricing2026 && ComprehensivePricing2026.jsx import _React from 'react'; export default ComprehensivePricing2026; import _React from 'react'; export default ComprehensivePricing2026';';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
