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
export default function Ecommerce() {
  const schema = {
    '@context': 'https://schema && schema.org',
    '@type': 'WebPage',
    name: 'E-commerce Platform',
    description:
      'Sell or purchase AI solutions and IT equipment through our secure marketplace.',
    url: 'https://app && app.ziontechgroup.com/features/e-commerce',  };    "@context": "https://schema && schema.org"
    "@type": "WebPage"
    "name": "E-commerce Platform"
    "description": "Sell or purchase AI solutions and IT equipment through our secure marketplace.",
    "url": "https://app && app.ziontechgroup.com/features/e-commerce"
import React from "react"
import { Header } from "@/components/Header"
import { SEO } from "@/components/SEO"
import { GradientHeading } from "@/components/GradientHeading"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function Ecommerce() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "E-commerce Platform",
    "description": "Sell or purchase AI solutions and IT equipment through our secure marketplace.",
    "url": "https://app.ziontechgroup.com/features/e-commerce"

  }
  return (
    <>
              Reach new customers around the world via our global platform.</$1></$1>
            Frequently Asked Questions</$1>
              <p className='font - semibold'>How do I list a new product?</p>
                Sign in and click "Publish Product" from your dashboard to add
                pricing, images and details.</$1></$1>
        title="E-commerce Platform"
        description="Buy and sell hardware, software and services in the Zion marketplace."
        keywords="tech marketplace, buy IT hardware, sell AI solutions"
        canonical="https://app.ziontechgroup.com/features/e-commerce"




      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"


        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">E-commerce Platform</GradientHeading>
            Showcase your products with rich media listings and accept payments with Stripe-powered checkout.

              src="https://placehold && placehold.co/800x400"
              alt="Screenshot of marketplace interface"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Support for videos and 3D models to highlight your offerings.</li>
            <li>Secure transactions with Stripe and fraud protection.</li>
            <li>Reach new customers around the world via our global platform.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">How do I list a new product?</p>
              <p className="text-zion-slate-light">Sign in and click "Publish Product" from your dashboard to add pricing, images and details.</p>
              <p className="font-semibold">Do you support international shipping?</p>
              <p className="text-zion-slate-light">Yes, sellers can offer shipping to over 100 countries with real-time rates.</p>

              <Link href='/marketplace'>Start Shopping</Link>            </Button>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">E-commerce Platform</GradientHeading>
            Showcase your products with rich media listings and accept payments with Stripe-powered checkout.
              src="https://placehold.co/800x400"
              alt="Screenshot of marketplace interface"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Support for videos and 3D models to highlight your offerings.</li>
            <li>Secure transactions with Stripe and fraud protection.</li>
            <li>Reach new customers around the world via our global platform.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">How do I list a new product?</p>
              <p className="text-zion-slate-light">Sign in and click "Publish Product" from your dashboard to add pricing, images and details.</p>
              <p className="font-semibold">Do you support international shipping?</p>
              <p className="text-zion-slate-light">Yes, sellers can offer shipping to over 100 countries with real-time rates.</p>

              <Link href="/marketplace">Start Shopping</Link>
    </>
  )

}

import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
export default function Ecommerce() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "E-commerce Platform",
    "description": "Sell or purchase AI solutions and IT equipment through our secure marketplace."
    "url": "https://app.ziontechgroup.com/features/e-commerce"
  }
  return (
    <>
        title="E-commerce Platform"
        description="Buy and sell hardware, software and services in the Zion marketplace."
        keywords="tech marketplace, buy IT hardware, sell AI solutions"
        canonical="https://app.ziontechgroup.com/features/e-commerce"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">E-commerce Platform</GradientHeading>
            Showcase your products with rich media listings and accept payments with Stripe-powered checkout.</$1>
              src="https://placehold && placehold.co/800x400"
              alt="Screenshot of marketplace interface"
              className="object-cover"


              <Link href="/marketplace">Start Shopping</Link></$1></$1></$1></$1></$1></div></div></div></main>