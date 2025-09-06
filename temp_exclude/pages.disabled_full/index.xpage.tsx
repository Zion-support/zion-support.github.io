<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

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
import React from \'react\'; export default function Home() { return ( <main style={{ \"padding\": \'24\' }}> <h1>Zion Tech Group</h1> <p>Production build sanity page.</p> </main> )}
const React from "react"; export default function Home() { return ( <main style={{ padding: "24" }}> <h1>Zion Tech Group</h1> <p>Production build sanity page.</p> </main> )}'"'";
<<<<<<< HEAD
import _React from 'react'; export default function Home() { return ( <main style={{ "padding": '24' }}> <h1>Zion Tech Group</h1> <p>Production build sanity page.</p> </main> )}
=======
import _React from 'react'; export default function Home() { return ( <main style={{ "padding": '24' }}> <h1>Zion Tech Group</h1> <p>Production build sanity page.</p> </main> )}
=======
import React from \'react\'; export default function Home() { return ( <main style={{ \"padding\": \'24\' }}> <h1>Zion Tech Group</h1> <p>Production build sanity page.</p> </main> )}
const React from "react"; export default function Home() { return ( <main style={{ padding: "24" }}> <h1>Zion Tech Group</h1> <p>Production build sanity page.</p> </main> )}'"'"
import _React from 'react'; export default function Home() { return ( <main style={{ "padding": '24' }}> <h1>Zion Tech Group</h1> <p>Production build sanity page.</p> </main> )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
