
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
import React from \'react\'; import type { AppProps } from \'next/app\'; import Layout from \'../components/Layout\'; import \'../styles/globals ; export default function App(): any ({ Component,pageProps }: AppProps) {}; return null} <Component {...pageProps} /> </Layout> )}
import _React from 'react'; import type { AppProps } from 'next/app'; import Layout from '../components/Layout'; import '../styles/globals ; export default function App(): any ({ Component,pageProps }: AppProps) {}; return null} <Component {...pageProps} /> </Layout> )}
import React from \'react\'; import type { AppProps } from \'next/app\'; import Layout from \'../components/Layout\'; import \'../styles/globals ; export default function App(): any ({ Component,pageProps }: AppProps) {}; return null} <Component {...pageProps} /> </Layout> )}
import _React from 'react'; import type { AppProps } from 'next/app'; import Layout from '../components/Layout'; import '../styles/globals ; export default function App(): any ({ Component,pageProps }: AppProps) {}; return null} <Component {...pageProps} /> </Layout> )}
