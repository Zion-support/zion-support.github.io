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
<<<<<<< HEAD:src && src.pages.disabled/ProjectDetails && ProjectDetails.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ProjectDetails && ProjectDetails.jsx import React from \'react\'; export default function ProjectDetails () { function ProjectDetailsContent () { const router = useNavigate () ; import React from \'react\'; export default function ProjectDetails () { function ProjectDetailsContent () { const router = useNavigate () \';\';
<<<<<<< "HEAD": src && src.pages.disabled/ProjectDetails && ProjectDetails.jsx import _React from 'react'; export default function ProjectDetails () { function ProjectDetailsContent () { const router = useNavigate () ; import _React from 'react'; export default function ProjectDetails () { function ProjectDetailsContent () { const router = useNavigate () ';';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
