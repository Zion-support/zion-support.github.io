<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

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
<<<<<<< HEAD:src && src.pages.disabled/UpdatePassword && UpdatePassword.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/UpdatePassword && UpdatePassword.jsx import React from \'react\'; export default function UpdatePassword () { import React from \'react\'; export default function UpdatePassword () {\'';
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/UpdatePassword && UpdatePassword.jsx import _React from 'react'; export default function UpdatePassword () { import _React from 'react'; export default function UpdatePassword () {'';
=======
<<<<<<< "HEAD": src && src.pages.disabled/UpdatePassword && UpdatePassword.jsx import _React from 'react'; export default function UpdatePassword () { import _React from 'react'; export default function UpdatePassword () {'';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
