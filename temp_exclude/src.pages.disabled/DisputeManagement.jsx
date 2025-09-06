
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
<<<<<<< HEAD:src && src.pages.disabled/DisputeManagement && DisputeManagement.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/DisputeManagement && DisputeManagement.jsx import React from \'react\'; export default function DisputeManagement () { const [activeTab,setActiveTab] = useState (\"overview\") ; return (<> <SEOtitle=\"Dispute Management | Zion Tech Group\" description=\"Admin dashboard for managing and resolving marketplace disputes and conflicts\" keywords=\"dispute management,admin dashboard,conflict resolution,marketplace admin,Zion Tech Group\" canonical=\""https\": import React from \'react\' export default function DisputeManagement () { const [activeTab,setActiveTab] = useState (\"overview\")  return (<> <SEOtitle=\"Dispute Management | Zion Tech Group\" description=\"Admin dashboard for managing and resolving marketplace disputes and conflicts\" keywords=\"dispute management,admin dashboard,conflict resolution,marketplace admin,Zion Tech Group\" canonical=\""https\": \""
<<<<<<< "HEAD": src && src.pages.disabled/DisputeManagement && DisputeManagement.jsx import _React from 'react' export default function DisputeManagement () { const [activeTab,setActiveTab] = useState ("overview")  return (<> <SEOtitle="Dispute Management | Zion Tech Group" description="Admin dashboard for managing and resolving marketplace disputes and conflicts" keywords="dispute management,admin dashboard,conflict resolution,marketplace admin,Zion Tech Group" canonical=""https": import _React from 'react' export default function DisputeManagement () { const [activeTab,setActiveTab] = useState ("overview")  return (<> <SEO title="Dispute Management | Zion Tech Group" description="Admin dashboard for managing and resolving marketplace disputes and conflicts" keywords="dispute management,admin dashboard,conflict resolution,marketplace admin,Zion Tech Group" canonical=""https": "";