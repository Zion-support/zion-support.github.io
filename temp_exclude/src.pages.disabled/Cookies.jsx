
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
<<<<<<< HEAD:src && src.pages.disabled/Cookies && Cookies.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/Cookies && Cookies.jsx import React from \'react\'; export default function Cookies () { return (<div className=\"min - h-screen bg - gradient - to - br from - zinc - 900 via - zinc - 800 to - zinc - 700 pt - 20\"> <SEOtitle=\"Cookie Policy | Zion Tech Group\" description=\"Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content.\" keywords=\"cookie policy,privacy,data collection,website cookies\" canonical=\""https\": import React from \'react\' export default function Cookies () { return (<div className=\"min - h-screen bg - gradient - to - br from - zinc - 900 via - zinc - 800 to - zinc - 700 pt - 20\"> <SEOtitle=\"Cookie Policy | Zion Tech Group\" description=\"Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content.\" keywords=\"cookie policy,privacy,data collection,website cookies\" canonical=\""https\": \""
<<<<<<< "HEAD": src && src.pages.disabled/Cookies && Cookies.jsx import _React from 'react' export default function Cookies () { return (<div className="min - h-screen bg - gradient - to - br from - zinc - 900 via - zinc - 800 to - zinc - 700 pt - 20"> <SEOtitle="Cookie Policy | Zion Tech Group" description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content." keywords="cookie policy,privacy,data collection,website cookies" canonical=""https": import _React from 'react' export default function Cookies () { return (<div className="min - h-screen bg - gradient - to - br from - zinc - 900 via - zinc - 800 to - zinc - 700 pt - 20"> <SEO title="Cookie Policy | Zion Tech Group" description="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized content." keywords="cookie policy,privacy,data collection,website cookies" canonical=""https": "";