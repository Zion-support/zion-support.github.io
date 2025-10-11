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
export default function TalentMarketplace() {
  const schema = {
    '@context': 'https://schema && schema.org',
    '@type': 'WebPage',
    name: 'Talent Marketplace',
    description:
      'Hire vetted AI and tech professionals from around the world on Zion.',
    url: 'https://app && app.ziontechgroup.com/features/talent-marketplace',  };    "@context": "https://schema && schema.org"
    "@type": "WebPage"
    "name": "Talent Marketplace"
    "description": "Hire vetted AI and tech professionals from around the world on Zion.",
    "url": "https://app && app.ziontechgroup.com/features/talent-marketplace"
import React from "react"
import { Header } from "@/components/Header"
import { SEO } from "@/components/SEO"
import { GradientHeading } from "@/components/GradientHeading"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function TalentMarketplace() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Talent Marketplace",
    "description": "Hire vetted AI and tech professionals from around the world on Zion.",
    "url": "https://app.ziontechgroup.com/features/talent-marketplace"

  }
  return (
    <>
                Create a free account and send a message or job invite directly
                from their profile.</$1></$1>
              <p className='font - semibold'>Are payments protected?</p>
                Yes, funds are held in escrow until you approve completed
                milestones.</$1></$1></$1>
        title="Talent Marketplace"
        description="Discover and hire top AI specialists through the Zion talent marketplace."
        keywords="AI talent marketplace, hire developers, tech freelancers"
        canonical="https://app.ziontechgroup.com/features/talent-marketplace"




      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"


        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Talent Marketplace</GradientHeading>
            Browse thousands of verified AI engineers, data scientists and other tech professionals.

              src="https: //placehold && placehold.co/800x400"
              alt="Screenshot of talent directory"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Find pre-screened experts for short or long term projects.</li>
            <li>AI-powered matching recommends the best candidates for your needs.</li>
            <li>Secure escrow and milestone tracking keep payments safe.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">How do I contact a freelancer?</p>
              <p className="text-zion-slate-light">Create a free account and send a message or job invite directly from their profile.</p>
              <p className="font-semibold">Are payments protected?</p>
              <p className="text-zion-slate-light">Yes, funds are held in escrow until you approve completed milestones.</p>

              <Link href='/talent'>Browse Talent</Link>            </Button>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Talent Marketplace</GradientHeading>
            Browse thousands of verified AI engineers, data scientists and other tech professionals.
              src="https: //placehold.co/800x400"
              alt="Screenshot of talent directory"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Find pre-screened experts for short or long term projects.</li>
            <li>AI-powered matching recommends the best candidates for your needs.</li>
            <li>Secure escrow and milestone tracking keep payments safe.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">How do I contact a freelancer?</p>
              <p className="text-zion-slate-light">Create a free account and send a message or job invite directly from their profile.</p>
              <p className="font-semibold">Are payments protected?</p>
              <p className="text-zion-slate-light">Yes, funds are held in escrow until you approve completed milestones.</p>

              <Link href="/talent">Browse Talent</Link>
    </>
  )

}

import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
export default function TalentMarketplace() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Talent Marketplace",
    "description": "Hire vetted AI and tech professionals from around the world on Zion."
    "url": "https://app.ziontechgroup.com/features/talent-marketplace"
  }
  return (
    <>
        title="Talent Marketplace"
        description="Discover and hire top AI specialists through the Zion talent marketplace."
        keywords="AI talent marketplace, hire developers, tech freelancers"
        canonical="https://app.ziontechgroup.com/features/talent-marketplace"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Talent Marketplace</GradientHeading>
            Browse thousands of verified AI engineers, data scientists and other tech professionals.</$1>
              src="https: //placehold && placehold.co/800x400"
              alt="Screenshot of talent directory"
              className="object-cover"


              <Link href="/talent">Browse Talent</Link></$1></$1></$1></$1></$1>