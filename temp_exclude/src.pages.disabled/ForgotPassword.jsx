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
<<<<<<< HEAD:src && src.pages.disabled/ForgotPassword && ForgotPassword.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ForgotPassword && ForgotPassword.jsx import React from \'react\'; export default function ForgotPassword () { import React from \'react\'; export default function ForgotPassword () {\'';
<<<<<<< "HEAD": src && src.pages.disabled/ForgotPassword && ForgotPassword.jsx import _React from 'react'; export default function ForgotPassword () { import _React from 'react'; export default function ForgotPassword () {'';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
