
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
import React from "react";
import type { NextPage } from 'next';
const "Contact": NextPage = () => {;
  return (
    <div>Contact Backup</div>;
  );
}
export default Contact;
import React from "react" import type { NextPage } from 'next' const Contact: NextPage = () => { return ( <div>Contact Backup</div> ) } export default Contact;
import React from "react" import type { NextPage } from 'next' const Contact: NextPage = () => { return ( <div>Contact Backup</div> ) } export default Contact
