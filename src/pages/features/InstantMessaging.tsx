<<<<<<< HEAD
<<<<<<< HEAD
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
    "description": "Chat in real time with clients and freelancers using Socket.IO based messaging.",
    "url": "https://app.ziontechgroup.com/features/instant-messaging"
  },
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';

export default function InstantMessaging() {
  const schema = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot;: &quot;Instant Messaging&quot;,
    &quot;description&quot;: &quot;Chat in real time with clients and freelancers using Socket.IO based messaging.&quot;,
    &quot;url&quot;: &quot;https://app.ziontechgroup.com/features/instant-messaging&quot;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <>
      <SEO
        title=&quot;Instant Messaging&quot;
        description=&quot;Negotiate deals and collaborate instantly with real-time chat.&quot;
        keywords=&quot;real-time messaging, Socket.IO chat, project communication&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/instant-messaging&quot;
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
<<<<<<< HEAD
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md: px-6">
          <GradientHeading className="mb-4 text-center">Instant Messaging</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
=======
      <main className=&quot;bg-background text-white py-12&quot;>
        <div className=&quot;container mx-auto px-4 md:px-6&quot;>
          <GradientHeading className=&quot;mb-4 text-center&quot;>Instant Messaging</GradientHeading>
          <p className=&quot;text-center text-zion-slate-light max-w-3xl mx-auto mb-8&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Communicate with partners and support staff instantly from any device.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden&quot;>
            <img
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot of chat interface&quot;
              className=&quot;object-cover&quot;
            />
          </div>
<<<<<<< HEAD
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
=======
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Benefits &amp; Use Cases</h2>
          <ul className=&quot;list-disc list-inside space-y-2 mb-8 text-zion-slate-light&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <li>Real-time notifications keep everyone updated.</li>
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
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md: px-6">;
          <GradientHeading className="mb-4 text-center">Instant Messaging</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Communicate with partners and support staff instantly from any device.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
            <img;
              src="https://placehold.co/800x400";
              alt="Screenshot of chat interface";
              className="object-cover";
            />;
          </div>;
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>;
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">;
            <li>Real-time notifications keep everyone updated.</li>;
            <li>Chat rooms scoped to each order or project for focused discussions.</li>;
            <li>Share files and links directly within the conversation.</li>;
          </ul>;
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>;
          <div className="space-y-4 mb-12">;
            <div>;
              <p className="font-semibold">Is chat history saved?</p>;
              <p className="text-zion-slate-light">Yes, messages are stored securely so you can review past discussions.</p>;
            </div>;
            <div>;
              <p className="font-semibold">Can I disable notifications?</p>;
              <p className="text-zion-slate-light">You can mute rooms or disable notifications in your account settings.</p>;
            </div>;
          </div>;
          <div className="text-center">;
            <Button size="lg" className="bg-zion-purple text-white" asChild>;
              <Link href="/open-app">Start Chatting</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;
    </>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;