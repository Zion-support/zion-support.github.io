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
<<<<<<< HEAD:src && src.pages.disabled/ComprehensiveContact && ComprehensiveContact.jsx
<<<<<<< \"HEAD\": src && src.pages.disabled/ComprehensiveContact && ComprehensiveContact.jsx import React from \'react\'; export default function ComprehensiveContact () { const [formData,setFormData] = useState ({ \"name\": \",\"email\": \",\"comp\": \",\"phone\": \",\"service\": \",\"message\": \" }) ; const handleSubmit = (e) => { e && e.preventDefault () ; import React from \'react\'; export default function ComprehensiveContact () { const [formData,setFormData] = useState ({ \"name\": \",\"email\": \",\"comp\": \",\"phone\": \",\"service\": \",\"message\": \" }) ; const handleSubmit = (e) => { e && e.preventDefault () ;\";
<<<<<<< "HEAD": src && src.pages.disabled/ComprehensiveContact && ComprehensiveContact.jsx import _React from 'react'; export default function ComprehensiveContact () { const [formData,setFormData] = useState ({ "name": ","email": ","comp": ","phone": ","service": ","message": " }) ; const handleSubmit = (e) => { e && e.preventDefault () ; import _React from 'react'; export default function ComprehensiveContact () { const [formData,setFormData] = useState ({ "name": ","email": ","comp": ","phone": ","service": ","message": " }) ; const handleSubmit = (e) => { e && e.preventDefault () ;";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
