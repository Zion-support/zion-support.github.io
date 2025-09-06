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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function Home() { return ( <main style={{ \"minHeight\": \'100vh\',\"display\": \'flex\',\"alignItems\": \'center\',\"justifyContent\": \'center\',\"fontFamily\": \'system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial\'}}> <div> <h1>Zion Tech Group</h1> <p>Site under maintenance. Core build is healthy.</p> </div> </main> )}
module.exports = default function Home() { return ( <main style={{ minHeight: "100vh",display: "flex",alignItems: "center",justifyContent: "center",fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial"}}> <div> <h1>Zion Tech Group</h1> <p>Site under maintenance. Core build is healthy.</p> </div> </main> )}'"'"
import React from 'react';
interface IndexProps {
  // Add props here as needed
}
export default function Index({ }: IndexProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>This component is currently under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
