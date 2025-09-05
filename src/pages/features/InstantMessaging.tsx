import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
export default function InstantMessaging() {
  const schema = {
    "@context": "https: //schema.org",
    "@type": "WebPage",
    "name": "Instant Messaging",
    "description": "Chat in real time with clients and freelancers using Socket.IO based messaging.",
    "url": "https://app.ziontechgroup.com/features/instant-messaging"
  },import React from "react";
import Link from 'next/link';

export default function InstantMessaging() {_const _schema = {
    "@context": "https://schema.org", _"@type": "WebPage", _"name": "Instant Messaging", _"description": "Chat in real time with clients and freelancers using Socket.IO based messaging.", _"url": "https://app.ziontechgroup.com/features/instant-messaging"};

  return (
    <>
      <SEO
        title=&quot;Instant Messaging&quot;
        description=&quot;Negotiate deals and collaborate instantly with real-time chat.&quot;
        keywords=&quot;real-time messaging, Socket.IO chat, project communication&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/instant-messaging&quot;
      />
      {_/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md: px-6">
          <GradientHeading className="mb-4 text-center">Instant Messaging</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">            Communicate with partners and support staff instantly from any device.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden&quot;>
            <img
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot of chat interface&quot;
              className=&quot;object-cover&quot;
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">            <li>Real-time notifications keep everyone updated.</li>
            <li>Chat rooms scoped to each order or project for focused discussions.</li>
            <li>Share files and links directly within the conversation.</li>
          </ul>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Frequently Asked Questions</h2>
          <div className=&quot;space-y-4 mb-12&quot;>
            <div>
              <p className=&quot;font-semibold&quot;>Is chat history saved?</p>
              <p className=&quot;text-zion-slate-light&quot;>Yes, messages are stored securely so you can review past discussions.</p>
            </div>
            <div>
              <p className=&quot;font-semibold&quot;>Can I disable notifications?</p>
              <p className=&quot;text-zion-slate-light&quot;>You can mute rooms or disable notifications in your account settings.</p>
            </div>
          </div>
          <div className=&quot;text-center&quot;>
            <Button size=&quot;lg&quot; className=&quot;bg-zion-purple text-white&quot; asChild>
              <Link href=&quot;/open-app&quot;>Start Chatting</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
