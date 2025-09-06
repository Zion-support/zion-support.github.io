
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
<<<<<<< HEAD:src && src.pages.disabled/SavedTalentsPage && SavedTalentsPage.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/SavedTalentsPage && SavedTalentsPage.jsx import React from \'react\'; export default function SavedTalentsPage () { const { user } = useAuth () ; const [savedTalents,setSavedTalents] = useState ([]) ; const [isLoading,setIsLoading] = useState (true) ; const navigate = useNavigate () ; useEffect ( () => { const fetchSavedTalents = async () => { setIsLoading (true) ; try { if (!user) { import React from \'react\'; export default function SavedTalentsPage () { const { user } = useAuth () ; const [savedTalents,setSavedTalents] = useState ([]) ; const [isLoading,setIsLoading] = useState (true) ; const navigate = useNavigate () ; useEffect ( () => { const fetchSavedTalents = async () => { setIsLoading (true) ; try { if (!user) {\'';
<<<<<<< "HEAD": src && src.pages.disabled/SavedTalentsPage && SavedTalentsPage.jsx import _React from 'react'; export default function SavedTalentsPage () { const { user } = useAuth () ; const [savedTalents,setSavedTalents] = useState ([]) ; const [isLoading,setIsLoading] = useState (true) ; const navigate = useNavigate () ; useEffect ( () => { const fetchSavedTalents = async () => { setIsLoading (true) ; try { if (!user) { import _React from 'react'; export default function SavedTalentsPage () { const { user } = useAuth () ; const [savedTalents,setSavedTalents] = useState ([]) ; const [isLoading,setIsLoading] = useState (true) ; const navigate = useNavigate () ; useEffect ( () => { const fetchSavedTalents = async () => { setIsLoading (true) ; try { if (!user) {'';