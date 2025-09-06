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
<<<<<<< HEAD:src && src.pages.disabled/Interviews && Interviews.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/Interviews && Interviews.jsx import React from \'react\'; export default function Interviews () { function InterviewsContent () { const { interviews,isLoading,fetchInterviews } = useInterviews () ; const [activeTab,setActiveTab] = useState (\"upcoming\") ; useEffect ( () => { import React from \'react\'; export default function Interviews () { function InterviewsContent () { const { interviews,isLoading,fetchInterviews } = useInterviews () ; const [activeTab,setActiveTab] = useState (\"upcoming\") ; useEffect ( () => {\";
<<<<<<< "HEAD": src && src.pages.disabled/Interviews && Interviews.jsx import _React from 'react'; export default function Interviews () { function InterviewsContent () { const { interviews,isLoading,fetchInterviews } = useInterviews () ; const [activeTab,setActiveTab] = useState ("upcoming") ; useEffect ( () => { import _React from 'react'; export default function Interviews () { function InterviewsContent () { const { interviews,isLoading,fetchInterviews } = useInterviews () ; const [activeTab,setActiveTab] = useState ("upcoming") ; useEffect ( () => {";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
