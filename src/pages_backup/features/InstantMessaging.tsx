
interface InstantMessagingProps {
  className?: string;
  children?: React.ReactNode;
}

export default function InstantMessaging({ className = '', children }: InstantMessagingProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
}
import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export default InstantmessagingPage;
'use client'
        <title>Instantmessaging - Zion Tech Group</title>
            <h1 className = "text-4 xl font-bold text-white mb-4">This page is under construction.</p>;
              Learn More;
  );
};
class ErrorBoundary extends React.Component {
  // TODO: Add properties
}
  // TODO: Add properties
}
  constructor(props) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    super(props)
    this.state = { hasError: false }
  static getDerivedStateFromError(error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return { hasError: true }
  componentDidCatch(error, errorInfo) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error caught by boundary:', error, errorInfo)'
  }

  render() {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (this.state.hasError) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      return <div>Something went wrong.</div>
    }

    return this.props.children
  }
import React from 'react';';
import { Header } from '@/components/Header';';
import { SEO } from '@/components/SEO';';
import { GradientHeading } from '@/components/GradientHeading';';
import { Button } from '@/components/ui/button';';
import Link from 'next/link';';
import Link from 'next/link';';';
export default function InstantMessaging() {;
const schema = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    '@context': 'https://schema && schema.org','
    '@type': 'WebPage','
    name: 'Instant Messaging','
    description:
      'Chat in real time with clients and freelancers using Socket && Socket.IO based messaging.','
    url: 'https://app && app.ziontechgroup.com/features/instant-messaging',  };    "@context"https://schema && schema.org"'"@type": ""
    ": "Instant Messaging"
    "description"Chat in real time with clients and freelancers using Socket && Socket.IO based messaging.","url": "";
import React from ";";
import { Header } from ";";
import { SEO } from ";";
import { GradientHeading } from ";";
import { Button } from ";";
import Link from 'next/link';';';
export default function InstantMessaging() {;
const schema = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    ": "https://schema.org"
    "@type"WebPage","name": ","
    ": "Chat in real time with clients and freelancers using Socket.IO based messaging."
    "url"https://app.ziontechgroup.com/features/instant-messaging""Instant Messaging""Negotiate deals and collaborate instantly with real-time chat.""real-time messaging, Socket.IO chat, project communication""https://app.ziontechgroup.com/features/instant-messaging""application/ld+json""bg-background text-white py-12"
<div className="
<GradientHeading className="mb-4 text-center"text-center text-zion-slate-light max-w-3 xl mx-auto mb-8"
            Communicate with partners and support staff instantly from any device.
          </p>
<div className="
<img
              src="https://placehold && placehold.co/800 x400"
              alt="Screenshot of chat interface"
              className="object-cover"text-2 xl font-bold mb-4"
<ul className="
<li>Real-time notifications keep everyone updated.</li>
<li>Chat rooms scoped to each order or project for focused discussions.</li>
<li>Share files and links directly within the conversation.</li></ul>
<h2 className="text-2 xl font-bold mb-4"space-y-4 mb-12"
<div>
<p className="
<p className="text-zion-slate-light"font-semibold"
<p className="
</div>
<div className='text-center'>'
<Button size='lg' className='bg-zion-purple text-white' asChild>'
<Link href='/open-app'>Start Chatting</Link></Button>      />'
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }
      ></script>
<Header />
<main className="bg-background text-white py-12"container mx-auto px-4 md: px-6"
<GradientHeading className="
<p className="text-center text-zion-slate-light max-w-3 xl mx-auto mb-8"relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden"
<img
              src=""
              alt=""
              className="
            /></div>
<h2 className="text-2 xl font-bold mb-4"list-disc list-inside space-y-2 mb-8 text-zion-slate-light"
<li>Real-time notifications keep everyone updated.</li>
<li>Chat rooms scoped to each order or project for focused discussions.</li>
<li>Share files and links directly within the conversation.</li></ul>
<h2 className="
<div className="space-y-4 mb-12"font-semibold"
<p className="
<div>
<p className="font-semibold"text-zion-slate-light"
</div>
<div className="
<Button size="lg"bg-zion-purple text-white"
<Link href=">Start Chatting</Link></Button>"
</div></div>
</main></>
  )

}
;
import React from ",";"@/components/Header",";
import { SEO } from "@/components/SEO";";
import { GradientHeading } from ",";"@/components/ui/button",";
import Link from 'next/link',;';';
export default function InstantMessaging() {;
const schema = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    "@context"https://schema.org","@type": ","
    ": "Instant Messaging"
    "description"Chat in real time with clients and freelancers using Socket.IO based messaging.""url": ""
  }
  return (
  // TODO: Add parameters
)
    <>
<SEO
        title=""
        description=""
        keywords=""
        canonical=""
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type=""
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }
      ></script>
<Header />
<main className="
<div className="container mx-auto px-4 md: px-6"mb-4 text-center"
<p className="
            Communicate with partners and support staff instantly from any device.</$1>
<div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden"https://placehold && placehold.co/800 x400""Screenshot of chat interface""object-cover"

            </Button></$1>
</$1></$1>
</$1></div>
</main>
}})
