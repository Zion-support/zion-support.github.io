
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

import type { AppProps } from \'next/app\' import \'../styles/globals && globals.css\' export default function App(): any ({ Component,pageProps }: AppProps) { return <Component {...pageProps} /> }
const type { AppProps } from "next/app" import "./styles/globals ;
import React from 'react';
interface _appProps {;
  // Add props here as needed;

export default function _app(): any ({ }: _appProps) {;
  return (
    <div>;
      <h1>_app</h1>;
      <p>This component is currently under development.</p>;
    </div>;
  );
