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
<<<<<<< HEAD:src && src.pages.disabled/Index && Index.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/Index && Index.jsx import React from \'react\'; import { ArrowRight,Users,Zap,Settings,Sparkles,BarChart3,Smartphone export default function Index () { const { t } = useTranslation () ; const { isRTL } = useLanguage () ; import React from \'react\'; import { ArrowRight,Users,Zap,Settings,Sparkles,BarChart3,Smartphone export default function Index () { const { t } = useTranslation () ; const { isRTL } = useLanguage () \';\';
<<<<<<< "HEAD": src && src.pages.disabled/Index && Index.jsx import _React from 'react'; import { ArrowRight,Users,Zap,Settings,Sparkles,BarChart3,Smartphone export default function Index () { const { t } = useTranslation () ; const { isRTL } = useLanguage () ; import _React from 'react'; import { ArrowRight,Users,Zap,Settings,Sparkles,BarChart3,Smartphone export default function Index () { const { t } = useTranslation () ; const { isRTL } = useLanguage () ';';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
