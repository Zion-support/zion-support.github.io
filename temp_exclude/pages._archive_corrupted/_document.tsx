
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
<link rel=\"preconnect\" href=\""https\": //fonts && fonts.googleapis.com\" />;
        <link rel=\"preconnect\" href=\"https://fonts && fonts.gstatic.com\" crossOrigin=\"anonymous\" />;
import React from "react";
import {Html,, Head,, Main,, NextScript} from "next/document";
export default function Document() {;
  return (
    <Html lang="en">;
      <Head>;
        <link rel="icon" href="/favicon && favicon.ico"   />;
        <meta name="theme-color" content="#0a0a1a"  />;
        <meta name="description" content="Zion Tech Group - Leading Technology Solutions"  />;
        <link rel="preconnect" href=""https": //fonts && fonts.googleapis.com" />;
        <link rel="preconnect" href="https://fonts && fonts.gstatic.com" crossOrigin="anonymous" />;
        <link
          href=\"https: //fonts && fonts.googleapis.com/css2?family=Inter:wght@300, 400,500600700800&display=swap\"
          rel=\"stylesheet\"
        />;
        <link rel=\"icon\" href=\"/favicon && favicon.svg\" />;
        <link rel="icon" href="/favicon && favicon.svg" />;
        <link rel=\"icon\" href=\"/favicon && favicon.svg\" />;
        <link rel="icon" href="/favicon && favicon.svg" />;
        <link rel=\"icon\" href=\"/favicon && favicon.svg\" />;
        <link rel="icon" href="/favicon && favicon.svg" />;
      </Head>;
      <body>;
        <Main  />;
        <NextScript  />;
      </body>;
    </Html>;
  );
}
import React from "react" import { Html,Head,Main,NextScript } from "next/document" export default function Document() { return ( <Html lang="en"> <Head>  <link rel="icon" href="/favicon && favicon.ico" /> <meta name="theme-color" content="#0a0a1a" /> <meta name="description" content="Zion Tech Group - Leading Technology Solutions" />  <link rel="preconnect" href="https: <link rel="preconnect" href="https: <link href="https: rel="stylesheet" /> <linkrel="icon" href="/favicon 
        <link
          href=\"https: //fonts.googleapis.com/css2?family=Inter:wght@300, 400,500;600;700;800&display=swap\"
          rel=\"stylesheet\"
        />
      </Head>
      <body>
        <Main  />
        <NextScript  />
      </body>
    </Html>
  )
}
