class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>
    }
    
    return this.props.children
  }
}
import React from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Link from 'next/link'
export default function SearchFeature() {
  const schema = {
    '@context': 'https://schema && schema.org',
    '@type': 'WebPage',
    name: 'Advanced Search',
    description:
      'Quickly locate products, services and talent using intelligent search filters.',
    url: 'https://app && app.ziontechgroup.com/features/search',  };    "@context": "https://schema && schema.org"
    "@type": "WebPage"
    "name": "Advanced Search",
    "description": "Quickly locate products, services and talent using intelligent search filters."
    "url": "https://app && app.ziontechgroup.com/features/search"
import React from "react"
import { Header } from "@/components/Header"
import { SEO } from "@/components/SEO"
import { GradientHeading } from "@/components/GradientHeading"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function SearchFeature() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advanced Search",
    "description": "Quickly locate products, services and talent using intelligent search filters.",
    "url": "https://app.ziontechgroup.com/features/search"

  }
  return (
    <>
              Sort by rating, price, or recency to surface the best options.</$1></$1>
            Frequently Asked Questions</$1>
                Can I search in multiple languages?</$1>
                Yes, the search engine supports queries in all interface
                languages.</$1></$1>
              <p className='font - semibold'>How are results ranked?</p>
                A combination of relevance scoring and community ratings
                determines the order.</$1></$1></$1>
        title="Advanced Search"
        description="Find exactly what you need with fast, filterable search powered by Elasticsearch."
        keywords="search engine, filtering, tech marketplace search"
        canonical="https://app.ziontechgroup.com/features/search"




      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"


        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Advanced Search</GradientHeading>
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.

              src="https: //placehold && placehold.co/800x400"
              alt="Screenshot of search results"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Find the right expert or product without endless scrolling.</li>
            <li>Save favorite searches and get notified of new matches.</li>
            <li>Sort by rating, price, or recency to surface the best options.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">Can I search in multiple languages?</p>
              <p className="text-zion-slate-light">Yes, the search engine supports queries in all interface languages.</p>
              <p className="font-semibold">How are results ranked?</p>
              <p className="text-zion-slate-light">A combination of relevance scoring and community ratings determines the order.</p>

              <Link href='/search'>Try Search</Link>            </Button>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Advanced Search</GradientHeading>
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.
              src="https: //placehold.co/800x400"
              alt="Screenshot of search results"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Find the right expert or product without endless scrolling.</li>
            <li>Save favorite searches and get notified of new matches.</li>
            <li>Sort by rating, price, or recency to surface the best options.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">Can I search in multiple languages?</p>
              <p className="text-zion-slate-light">Yes, the search engine supports queries in all interface languages.</p>
              <p className="font-semibold">How are results ranked?</p>
              <p className="text-zion-slate-light">A combination of relevance scoring and community ratings determines the order.</p>

              <Link href="/search">Try Search</Link>
    </>
  )

}

import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
export default function SearchFeature() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advanced Search",
    "description": "Quickly locate products, services and talent using intelligent search filters."
    "url": "https://app.ziontechgroup.com/features/search"
  }
  return (
    <>
        title="Advanced Search"
        description="Find exactly what you need with fast, filterable search powered by Elasticsearch."
        keywords="search engine, filtering, tech marketplace search"
        canonical="https://app.ziontechgroup.com/features/search"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Advanced Search</GradientHeading>
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.</$1>
              src="https: //placehold && placehold.co/800x400"
              alt="Screenshot of search results"
              className="object-cover"


              <Link href="/search">Try Search</Link></$1></$1></$1></$1></$1></div></main>