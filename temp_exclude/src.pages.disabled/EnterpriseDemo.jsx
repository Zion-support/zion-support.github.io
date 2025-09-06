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
<<<<<<< HEAD:src && src.pages.disabled/EnterpriseDemo && EnterpriseDemo.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/EnterpriseDemo && EnterpriseDemo.jsx import React from \'react\'; \"export default function EnterpriseDemo () {\" return (<> <SEOtitle=\"Enterprise Demo - Zion Tech Group\" description=\"Schedule a personalized demo of Zion&aposs enterprise solutions for AI hiring,talent management,and marketplace services.\" keywords=\"enterprise demo,AI hiring demo,talent management demo,Zion enterprise\" canonical=\""https\": import React from \'react\' \"export default function EnterpriseDemo () {\" return (<> <SEOtitle=\"Enterprise Demo - Zion Tech Group\" description=\"Schedule a personalized demo of Zion & aposs enterprise solutions for AI hiring,talent management,and marketplace services.\" keywords=\"enterprise demo,AI hiring demo,talent management demo,Zion enterprise\" canonical=\""https\": \""
<<<<<<< "HEAD": src && src.pages.disabled/EnterpriseDemo && EnterpriseDemo.jsx import _React from 'react' "export default function EnterpriseDemo () {" return (<> <SEOtitle="Enterprise Demo - Zion Tech Group" description="Schedule a personalized demo of Zion&aposs enterprise solutions for AI hiring,talent management,and marketplace services." keywords="enterprise demo,AI hiring demo,talent management demo,Zion enterprise" canonical=""https": import _React from 'react' "export default function EnterpriseDemo () {" return (<> <SEO title="Enterprise Demo - Zion Tech Group" description="Schedule a personalized demo of Zion & apos;s enterprise solutions for AI hiring,talent management,and marketplace services." keywords="enterprise demo,AI hiring demo,talent management demo,Zion enterprise" canonical=""https": "";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
