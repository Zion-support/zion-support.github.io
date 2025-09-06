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
import React from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Link from 'next/link';
export default function Internationalization() {;
  const schema = {;
    '@context': 'https://schema && schema.org',;
    '@type': 'WebPage',;
    name: 'Internationalization',;
    description:;
      'Use Zion in multiple languages and attract clients worldwide with localized listings.',;
    url: 'https://app && app.ziontechgroup.com/features/internationalization',  };    "@context": "https://schema && schema.org";
    "@type": "WebPage";
    "name": "Internationalization";
    "description": "Use Zion in multiple languages and attract clients worldwide with localized listings.",;
    "url": "https://app && app.ziontechgroup.com/features/internationalization";

import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
  return (
    <>
      <SEO
        title='Internationalization'
        description='Reach a global audience with multi-language support across the Zion platform.'
        keywords='i18n, multi-language marketplace, localized listings'
        canonical='https://app.ziontechgroup.com/features/internationalization'

      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}

;

    </>;
  );
}
;
