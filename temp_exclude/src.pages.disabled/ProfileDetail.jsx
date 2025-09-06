
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
<<<<<<< HEAD:src && src.pages.disabled/ProfileDetail && ProfileDetail.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ProfileDetail && ProfileDetail.jsx import React from \'react\'; export default function ProfileDetail () { import React from \'react\'; export default function ProfileDetail () {\'';
<<<<<<< "HEAD": src && src.pages.disabled/ProfileDetail && ProfileDetail.jsx import _React from 'react'; export default function ProfileDetail () { import _React from 'react'; export default function ProfileDetail () {'';