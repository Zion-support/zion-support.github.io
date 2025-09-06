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
<<<<<<< HEAD:src && src.pages.disabled/CommunityProfilePage && CommunityProfilePage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/CommunityProfilePage && CommunityProfilePage.jsx import React from \'react\'; export default function CommunityProfilePage () { import React from \'react\'; export default function CommunityProfilePage () {\'';
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/CommunityProfilePage && CommunityProfilePage.jsx import _React from 'react'; export default function CommunityProfilePage () { import _React from 'react'; export default function CommunityProfilePage () {'';
=======
<<<<<<< "HEAD": src && src.pages.disabled/CommunityProfilePage && CommunityProfilePage.jsx import _React from 'react'; export default function CommunityProfilePage () { import _React from 'react'; export default function CommunityProfilePage () {'';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
