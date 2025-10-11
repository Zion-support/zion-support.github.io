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
export default function Internationalization() {
  const schema = {
    '@context': 'https://schema && schema.org',
    '@type': 'WebPage',
    name: 'Internationalization',
    description:
      'Use Zion in multiple languages and attract clients worldwide with localized listings.',
    url: 'https://app && app.ziontechgroup.com/features/internationalization',  };    "@context": "https://schema && schema.org"
    "@type": "WebPage"
    "name": "Internationalization"
    "description": "Use Zion in multiple languages and attract clients worldwide with localized listings.",
    "url": "https://app && app.ziontechgroup.com/features/internationalization"
import React from "react"
import { Header } from "@/components/Header"
import { SEO } from "@/components/SEO"
import { GradientHeading } from "@/components/GradientHeading"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function Internationalization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Internationalization",
    "description": "Use Zion in multiple languages and attract clients worldwide with localized listings.",
    "url": "https://app.ziontechgroup.com/features/internationalization"

  }
  return (
    <>
              Automatic language detection ensures a localized experience.</$1></$1>
            Frequently Asked Questions</$1>
              <p className='font - semibold'>Which languages are supported?</p>
                The platform currently supports English, Spanish, Portuguese and
                more.</$1></$1>
              <p className='font - semibold'>Can I suggest new translations?</p>
                Yes, community contributions help us continually add new
                languages.</$1></$1></$1>
        title="Internationalization"
        description="Reach a global audience with multi-language support across the Zion platform."
        keywords="i18n, multi-language marketplace, localized listings"
        canonical="https://app.ziontechgroup.com/features/internationalization"




      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"


        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Internationalization</GradientHeading>
            Our interface and search support multiple languages so you can collaborate without barriers.

              src="https://placehold && placehold.co/800x400"
              alt="Screenshot of language options"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Publish product and service pages in your native language.</li>
            <li>Attract international clients and expand your reach.</li>
            <li>Automatic language detection ensures a localized experience.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">Which languages are supported?</p>
              <p className="text-zion-slate-light">The platform currently supports English, Spanish, Portuguese and more.</p>
              <p className="font-semibold">Can I suggest new translations?</p>
              <p className="text-zion-slate-light">Yes, community contributions help us continually add new languages.</p>

              <Link href='/'>Explore Zion</Link>            </Button>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Internationalization</GradientHeading>
            Our interface and search support multiple languages so you can collaborate without barriers.
              src="https://placehold.co/800x400"
              alt="Screenshot of language options"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Publish product and service pages in your native language.</li>
            <li>Attract international clients and expand your reach.</li>
            <li>Automatic language detection ensures a localized experience.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">Which languages are supported?</p>
              <p className="text-zion-slate-light">The platform currently supports English, Spanish, Portuguese and more.</p>
              <p className="font-semibold">Can I suggest new translations?</p>
              <p className="text-zion-slate-light">Yes, community contributions help us continually add new languages.</p>

              <Link href="/">Explore Zion</Link>
    </>
  )

}

import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
export default function Internationalization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Internationalization",
    "description": "Use Zion in multiple languages and attract clients worldwide with localized listings."
    "url": "https://app.ziontechgroup.com/features/internationalization"
  }
  return (
    <>
        title="Internationalization"
        description="Reach a global audience with multi-language support across the Zion platform."
        keywords="i18n, multi-language marketplace, localized listings"
        canonical="https://app.ziontechgroup.com/features/internationalization"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Internationalization</GradientHeading>
            Our interface and search support multiple languages so you can collaborate without barriers.</$1>
              src="https://placehold && placehold.co/800x400"
              alt="Screenshot of language options"
              className="object-cover"


              <Link href="/">Explore Zion</Link></$1></$1></$1></$1></$1></div></main>