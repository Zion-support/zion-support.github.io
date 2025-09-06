
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
=======
import React from \'react\'; const Blockchain = () => { return ( <div> <h1>Blockchain</h1> <p>Component placeholder</p> </div> )}; export default Blockchain;
const React from "react"; const Blockchain = () => { return ( <div> <h1>Blockchain</h1> <p>Component placeholder</p> </div> )}; export default Blockchain;''"
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
import _React from 'react'; const Blockchain = () => { return ( <div> <h1>Blockchain</h1> <p>Component placeholder</p> </div> )}; export default Blockchain;
=======
import _React from 'react'; const Blockchain = () => { return ( <div> <h1>Blockchain</h1> <p>Component placeholder</p> </div> )}; export default Blockchain;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
