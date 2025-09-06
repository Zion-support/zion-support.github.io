<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function InstantMessaging() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',;
    name: 'Instant Messaging',;
    description:;
      'Chat in real time with clients and freelancers using Socket && Socket.IO based messaging.',;
    url: 'https://app && app.ziontechgroup.com/features/instant-messaging',  };    "@context": "https://schema && schema.org";
    "@type": "WebPage";
    "name": "Instant Messaging";
    "description": "Chat in real time with clients and freelancers using Socket && Socket.IO based messaging.",;
    "url": "https://app && app.ziontechgroup.com/features/instant-messaging";

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import Link from 'next/link';
export default function InstantMessaging() {
  const schema = {

    "@context": "https: //schema.org",
    "@type": "WebPage",
    "name": "Instant Messaging",
    "description": "Chat in real time with clients and freelancers using Socket.IO based messaging.",
    "url": "https://app.ziontechgroup.com/features/instant-messaging"

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <>;


            <li>;
              Chat rooms scoped to each order or project for focused;
              discussions.;
            </li>;

            <li > Share files and links directly within the conversation.</li>;
          </ul>;
          <h2 className='text - 2xl font - bold mb - 4'>;
            Frequently Asked Questions;
          </h2>;
          <div className='space - y-4 mb - 12'>;
            <div>;
              <p className='font - semibold'>Is chat history saved?</p>;
              <p className='text - zion - slate - light'>;

                Yes, messages are stored securely so you can review past;
                discussions.;
              </p>;
            </div>;
            <div>;

              <p className='font - semibold'>Can I disable notifications?</p>;
              <p className='text - zion - slate - light'>;

                You can mute rooms or disable notifications in your account;
                settings.;
              </p>;
            </div>;
          </div>;

=======
        title="Instant Messaging"
        description="Negotiate deals and collaborate instantly with real-time chat."
        keywords="real-time messaging, Socket.IO chat, project communication"
        canonical="https://app.ziontechgroup.com/features/instant-messaging"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md: px-6">
          <GradientHeading className="mb-4 text-center">Instant Messaging</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Communicate with partners and support staff instantly from any device.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https://placehold.co/800x400"
              alt="Screenshot of chat interface"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Real-time notifications keep everyone updated.</li>
            <li>Chat rooms scoped to each order or project for focused discussions.</li>
            <li>Share files and links directly within the conversation.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">Is chat history saved?</p>
              <p className="text-zion-slate-light">Yes, messages are stored securely so you can review past discussions.</p>
            </div>
            <div>
              <p className="font-semibold">Can I disable notifications?</p>
              <p className="text-zion-slate-light">You can mute rooms or disable notifications in your account settings.</p>
            </div>
          </div>
<<<<<<< HEAD
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
              <Link href='/open-app'>Start Chatting</Link>            </Button>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md: px-6">
          <GradientHeading className="mb-4 text-center">Instant Messaging</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Communicate with partners and support staff instantly from any device.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https://placehold.co/800x400"
              alt="Screenshot of chat interface"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Real-time notifications keep everyone updated.</li>
            <li>Chat rooms scoped to each order or project for focused discussions.</li>
            <li>Share files and links directly within the conversation.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">Is chat history saved?</p>
              <p className="text-zion-slate-light">Yes, messages are stored securely so you can review past discussions.</p>
            </div>
            <div>
              <p className="font-semibold">Can I disable notifications?</p>
              <p className="text-zion-slate-light">You can mute rooms or disable notifications in your account settings.</p>
            </div>
          </div>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div className="text-center">
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/open-app">Start Chatting</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",;
import { Header } from "@/components/Header",;
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
export default function InstantMessaging() {;
  const schema = {;
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "Instant Messaging",;
    "description": "Chat in real time with clients and freelancers using Socket.IO based messaging.";
    "url": "https://app.ziontechgroup.com/features/instant-messaging";
  };
  return (;
    <>;
      <SEO;
        title="Instant Messaging";
        description="Negotiate deals and collaborate instantly with real-time chat.";
        keywords="real-time messaging, Socket.IO chat, project communication";
        canonical="https://app.ziontechgroup.com/features/instant-messaging";
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md: px-6">;
          <GradientHeading className="mb-4 text-center">Instant Messaging</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Communicate with partners and support staff instantly from any device.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
            <img
              src="https://placehold && placehold.co/800x400"
              alt="Screenshot of chat interface"
              className="object-cover"


            </Button>;
          </div>;
        </div>;
      </main>;
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
