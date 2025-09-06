
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
<<<<<<< HEAD:src && src.pages.disabled/ServicesComparisonPage && ServicesComparisonPage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ServicesComparisonPage && ServicesComparisonPage.jsx import React from \'react\'; export default function ServicesComparisonPage () { import React from \'react\'; export default function ServicesComparisonPage () {\'';
<<<<<<< "HEAD": src && src.pages.disabled/ServicesComparisonPage && ServicesComparisonPage.jsx import _React from 'react'; export default function ServicesComparisonPage () { import _React from 'react'; export default function ServicesComparisonPage () {'';