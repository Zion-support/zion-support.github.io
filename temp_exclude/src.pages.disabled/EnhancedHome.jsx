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
<<<<<<< HEAD:src && src.pages.disabled/EnhancedHome && EnhancedHome.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/EnhancedHome && EnhancedHome.jsx import React from \'react\'; export default EnhancedHome; const EnhancedHome = () => {}; return (); <div className=\"min-h-screen flex items-center justify-center text-white\">; Enhanced Home is temporarily unavailable. Please use the Home page.; </div>; );\" };\";\" export default EnhancedHome;\";\" \"'\";\" import React from \'react\'; export default EnhancedHome; const EnhancedHome = () => {}; return () ; <div className=\"min - h-screen flex items - center justify - center text - white\">; Enhanced Home is temporarily unavailable. Please use the Home page.; </div>;) ;\" };\";\" export default EnhancedHome;\";\" \"'\";\"'\''\";
<<<<<<< HEAD
<<<<<<< "HEAD": src && src.pages.disabled/EnhancedHome && EnhancedHome.jsx import _React from 'react'; export default EnhancedHome; const EnhancedHome = () => {}; return (); <div className="min-h-screen flex items-center justify-center text-white">; Enhanced Home is temporarily unavailable. Please use the Home page.; </div>; );" };";" export default EnhancedHome;";" "'";" import _React from 'react'; export default EnhancedHome; const EnhancedHome = () => {}; return () ; <div className="min - h-screen flex items - center justify - center text - white">; Enhanced Home is temporarily unavailable. Please use the Home page.; </div>;) ;" };";" export default EnhancedHome;";" "'";"'''";
=======
<<<<<<< "HEAD": src && src.pages.disabled/EnhancedHome && EnhancedHome.jsx import _React from 'react'; export default EnhancedHome; const EnhancedHome = () => {}; return (); <div className="min-h-screen flex items-center justify-center text-white">; Enhanced Home is temporarily unavailable. Please use the Home page.; </div>; );" };";" export default EnhancedHome;";" "'";" import _React from 'react'; export default EnhancedHome; const EnhancedHome = () => {}; return () ; <div className="min - h-screen flex items - center justify - center text - white">; Enhanced Home is temporarily unavailable. Please use the Home page.; </div>;) ;" };";" export default EnhancedHome;";" "'";"'''";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
