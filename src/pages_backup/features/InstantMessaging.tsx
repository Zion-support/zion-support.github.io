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
export default function InstantMessaging() {
  const schema = {
    '@context': 'https://schema && schema.org',
    '@type': 'WebPage',
    name: 'Instant Messaging',
    description:
      'Chat in real time with clients and freelancers using Socket && Socket.IO based messaging.',
    url: 'https://app && app.ziontechgroup.com/features/instant-messaging',  };    "@context": "https://schema && schema.org"
    "@type": "WebPage"
    "name": "Instant Messaging"
    "description": "Chat in real time with clients and freelancers using Socket && Socket.IO based messaging.",
    "url": "https://app && app.ziontechgroup.com/features/instant-messaging"
import React from "react"
import { Header } from "@/components/Header"
import { SEO } from "@/components/SEO"
import { GradientHeading } from "@/components/GradientHeading"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function InstantMessaging() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Instant Messaging",
    "description": "Chat in real time with clients and freelancers using Socket.IO based messaging.",
    "url": "https://app.ziontechgroup.com/features/instant-messaging"

  }
  return (
    <>
              Chat rooms scoped to each order or project for focused
              discussions.</$1>
            <li > Share files and links directly within the conversation.</li></$1>
            Frequently Asked Questions</$1>
              <p className='font - semibold'>Is chat history saved?</p>
                Yes, messages are stored securely so you can review past
                discussions.</$1></$1>
              <p className='font - semibold'>Can I disable notifications?</p>
                You can mute rooms or disable notifications in your account
                settings.</$1></$1></$1>
        title="Instant Messaging"
        description="Negotiate deals and collaborate instantly with real-time chat."
        keywords="real-time messaging, Socket.IO chat, project communication"
        canonical="https://app.ziontechgroup.com/features/instant-messaging"




      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"


        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Instant Messaging</GradientHeading>
            Communicate with partners and support staff instantly from any device.

              src="https://placehold && placehold.co/800x400"
              alt="Screenshot of chat interface"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Real-time notifications keep everyone updated.</li>
            <li>Chat rooms scoped to each order or project for focused discussions.</li>
            <li>Share files and links directly within the conversation.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">Is chat history saved?</p>
              <p className="text-zion-slate-light">Yes, messages are stored securely so you can review past discussions.</p>
              <p className="font-semibold">Can I disable notifications?</p>
              <p className="text-zion-slate-light">You can mute rooms or disable notifications in your account settings.</p>

              <Link href='/open-app'>Start Chatting</Link>            </Button>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Instant Messaging</GradientHeading>
            Communicate with partners and support staff instantly from any device.
              src="https://placehold.co/800x400"
              alt="Screenshot of chat interface"
              className="object-cover"
            />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
            <li>Real-time notifications keep everyone updated.</li>
            <li>Chat rooms scoped to each order or project for focused discussions.</li>
            <li>Share files and links directly within the conversation.</li>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="font-semibold">Is chat history saved?</p>
              <p className="text-zion-slate-light">Yes, messages are stored securely so you can review past discussions.</p>
              <p className="font-semibold">Can I disable notifications?</p>
              <p className="text-zion-slate-light">You can mute rooms or disable notifications in your account settings.</p>

              <Link href="/open-app">Start Chatting</Link>
    </>
  )

}

import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
export default function InstantMessaging() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Instant Messaging",
    "description": "Chat in real time with clients and freelancers using Socket.IO based messaging."
    "url": "https://app.ziontechgroup.com/features/instant-messaging"
  }
  return (
    <>
        title="Instant Messaging"
        description="Negotiate deals and collaborate instantly with real-time chat."
        keywords="real-time messaging, Socket.IO chat, project communication"
        canonical="https://app.ziontechgroup.com/features/instant-messaging"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
          <GradientHeading className="mb-4 text-center">Instant Messaging</GradientHeading>
            Communicate with partners and support staff instantly from any device.</$1>
              src="https://placehold && placehold.co/800x400"
              alt="Screenshot of chat interface"
              className="object-cover"


            </Button></$1></$1></$1></$1></div></main>