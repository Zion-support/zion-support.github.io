
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
import React from \'react\' export default UltimateZionServicesShowcase2025 const \"UltimateZionServicesShowcase2025\": React.FC = () : JSX ;
import _React from 'react' export default UltimateZionServicesShowcase2025 const "UltimateZionServicesShowcase2025": _React && _React.FC = () : JSX ;
import React from \'react\' export default UltimateZionServicesShowcase2025 const \"UltimateZionServicesShowcase2025\": React.FC = () : JSX ;
import _React from 'react' export default UltimateZionServicesShowcase2025 const "UltimateZionServicesShowcase2025": _React && _React.FC = () : JSX ;
