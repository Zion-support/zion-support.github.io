
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
<<<<<<< HEAD:src && src.pages.disabled/ClientDashboard && ClientDashboard.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ClientDashboard && ClientDashboard.jsx import React from \'react\'; export default function ClientDashboard () { function ClientDashboardContent () { const [activeTab,setActiveTab] = useState (\"all\") ; const { jobs,isLoading } = useJobs () ; const [selectedJobId,setSelectedJobId] = useState (null) ; const [selectedJobTitle,setSelectedJobTitle] = useState (\") ; const isMobile = useIsMobile () ; import React from \'react\'; export default function ClientDashboard () { function ClientDashboardContent () { const [activeTab,setActiveTab] = useState (\"all\") ; const { jobs,isLoading } = useJobs () ; const [selectedJobId,setSelectedJobId] = useState (null) ; const [selectedJobTitle,setSelectedJobTitle] = useState (\") ; const isMobile = useIsMobile () ;\"";
<<<<<<< "HEAD": src && src.pages.disabled/ClientDashboard && ClientDashboard.jsx import _React from 'react'; export default function ClientDashboard () { function ClientDashboardContent () { const [activeTab,setActiveTab] = useState ("all") ; const { jobs,isLoading } = useJobs () ; const [selectedJobId,setSelectedJobId] = useState (null) ; const [selectedJobTitle,setSelectedJobTitle] = useState (") ; const isMobile = useIsMobile () ; import _React from 'react'; export default function ClientDashboard () { function ClientDashboardContent () { const [activeTab,setActiveTab] = useState ("all") ; const { jobs,isLoading } = useJobs () ; const [selectedJobId,setSelectedJobId] = useState (null) ; const [selectedJobTitle,setSelectedJobTitle] = useState (") ; const isMobile = useIsMobile () ;"";