
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
import React from \'react\' export default function Home() { return ( <main style={{ \"padding\": \"'40px\'",\"fontFamily\": \'sans-serif\' }}><h1>Zion Tech Group</h1><p>Site build OK. Visit public pages at ziontechgroup ;
import _React from 'react' export default function Home() { return ( <main style={{ "padding": "'40px'","fontFamily": 'sans-serif' }}><h1>Zion Tech Group</h1><p>Site build OK. Visit public pages at ziontechgroup ;
import React from \'react\' export default function Home() { return ( <main style={{ \"padding\": \"'40px\'",\"fontFamily\": \'sans-serif\' }}><h1>Zion Tech Group</h1><p>Site build OK. Visit public pages at ziontechgroup ;
import _React from 'react' export default function Home() { return ( <main style={{ "padding": "'40px'","fontFamily": 'sans-serif' }}><h1>Zion Tech Group</h1><p>Site build OK. Visit public pages at ziontechgroup && ziontechgroup.com</p></main> ) }"