
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
<<<<<<< HEAD:src && src.pages.disabled/ForumCategoryPage && ForumCategoryPage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ForumCategoryPage && ForumCategoryPage.jsx import React from \'react\'; export default function ForumCategoryPage () { import React from \'react\'; export default function ForumCategoryPage () {\'';
<<<<<<< "HEAD": src && src.pages.disabled/ForumCategoryPage && ForumCategoryPage.jsx import _React from 'react'; export default function ForumCategoryPage () { import _React from 'react'; export default function ForumCategoryPage () {'';