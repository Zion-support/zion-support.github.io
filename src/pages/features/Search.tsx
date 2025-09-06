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
export default function SearchFeature() {;
  const schema = {;
    '@context': 'https://schema && schema.org',;
    '@type': 'WebPage',;
    name: 'Advanced Search',;
    description:;
      'Quickly locate products, services and talent using intelligent search filters.',;
    url: 'https://app && app.ziontechgroup.com/features/search',  };    "@context": "https://schema && schema.org";
    "@type": "WebPage";
    "name": "Advanced Search",;
    "description": "Quickly locate products, services and talent using intelligent search filters.";
    "url": "https://app && app.ziontechgroup.com/features/search";

import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
export default function SearchFeature() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advanced Search",
    "description": "Quickly locate products, services and talent using intelligent search filters.",
    "url": "https://app.ziontechgroup.com/features/search"

  };

