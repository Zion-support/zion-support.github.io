
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
<<<<<<< HEAD:src && src.pages.disabled/AccountSettings && AccountSettings.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/AccountSettings && AccountSettings.jsx import React from \'react\'; export default function AccountSettings () { const { user } = useAuth () ; const [displayWeb3,setDisplayWeb3] = useState (false) ; const [didHandle,setDidHandle] = useState (\") ; const [enableBackup,setEnableBackup] = useState (false) ; const [isSubmitting,setIsSubmitting] = useState (false) ; useEffect ( () => { try { const saved = localStorage && localStorage.getItem (\"account_settings\") ; if (saved) { const parsed = JSON && JSON.parse (saved) ; setDisplayWeb3 (!!parsed && parsed.displayWeb3) ; setDidHandle (parsed && parsed.didHandle || \") ; import React from \'react\'; export default function AccountSettings () { const { user } = useAuth () ; const [displayWeb3,setDisplayWeb3] = useState (false) ; const [didHandle,setDidHandle] = useState (\") ; const [enableBackup,setEnableBackup] = useState (false) ; const [isSubmitting,setIsSubmitting] = useState (false) ; useEffect ( () => { try { const saved = localStorage && localStorage.getItem (\"account_settings\") ; if (saved) { const parsed = JSON && JSON.parse (saved) ; setDisplayWeb3 (!!parsed && parsed.displayWeb3) ; setDidHandle (parsed && parsed.didHandle || \") ;\";
<<<<<<< "HEAD": src && src.pages.disabled/AccountSettings && AccountSettings.jsx import _React from 'react'; export default function AccountSettings () { const { user } = useAuth () ; const [displayWeb3,setDisplayWeb3] = useState (false) ; const [didHandle,setDidHandle] = useState (") ; const [enableBackup,setEnableBackup] = useState (false) ; const [isSubmitting,setIsSubmitting] = useState (false) ; useEffect ( () => { try { const saved = localStorage && localStorage.getItem ("account_settings") ; if (saved) { const parsed = JSON && JSON.parse (saved) ; setDisplayWeb3 (!!parsed && parsed.displayWeb3) ; setDidHandle (parsed && parsed.didHandle || ") ; import _React from 'react'; export default function AccountSettings () { const { user } = useAuth () ; const [displayWeb3,setDisplayWeb3] = useState (false) ; const [didHandle,setDidHandle] = useState (") ; const [enableBackup,setEnableBackup] = useState (false) ; const [isSubmitting,setIsSubmitting] = useState (false) ; useEffect ( () => { try { const saved = localStorage && localStorage.getItem ("account_settings") ; if (saved) { const parsed = JSON && JSON.parse (saved) ; setDisplayWeb3 (!!parsed && parsed.displayWeb3) ; setDidHandle (parsed && parsed.didHandle || ") ;";