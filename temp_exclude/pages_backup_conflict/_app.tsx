
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
import React from \'react\'; import type { AppProps } from \'next/app\'; import \'../src/index ; export default function App(): any ({ Component,pageProps }: AppProps) { return <Component {...pageProps} />}
const React from "react"; import type { AppProps } from "next/app"; import "./src/index ; export default function App(): any ({ Component,pageProps }: AppProps) { return <Component {.pageProps} />}''";
import _React from 'react'; import type { AppProps } from 'next/app'; import '../src/index ; export default function App(): any ({ Component,pageProps }: AppProps) { return <Component {...pageProps} />}
