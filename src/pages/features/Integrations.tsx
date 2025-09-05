<<<<<<< HEAD
import React, { useEffect } from "react",;
import { Header } from "@/components/Header",;
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus",;
;
export default function IntegrationsFeature() {;
  const schema = {;
    "@context":"https://schema.org",;
    "@type":"WebPage",;
    "name":"API & Integrations",;
    "description":"Connect Zion with Slack, your website and other tools via our API and widgets.",;
    "url":"https://app.ziontechgroup.com/features/integrations";
  },;
;
  const { markSlackConnected } = useAdvancedOnboardingStatus(),;
;
  useEffect(() => {;
    markSlackConnected(),;
  }, [markSlackConnected]),;
;
  return (;
    <>;
      <SEO;
        title="API & Integrations";
        description="Extend Zion by embedding widgets or using our REST API for custom workflows.";
        keywords="Zion API, Slack integration, embed widget";
        canonical="https://app.ziontechgroup.com/features/integrations";
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{ __html:JSON.stringify(schema) }}
      ></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md:px-6">;
          <GradientHeading className="mb-4 text-center">API & Integrations</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Automate your workflows by connecting Zion with the tools you already use.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
            <img;
              src="https://placehold.co/800x400";
              alt="Screenshot showing integrations";
              className="object-cover";
            />;
          </div>;
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>;
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">;
            <li>Trigger Slack notifications for new orders or messages.</li>;
            <li>Embed talent search or job listings directly on your site.</li>;
            <li>Build custom analytics by pulling data from our REST endpoints.</li>;
          </ul>;
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>;
          <div className="space-y-4 mb-12">;
            <div>;
              <p className="font-semibold">Where can I find the API docs?</p>;
              <p className="text-zion-slate-light">Visit our Developer Portal for authentication guides and endpoint references.</p>;
            </div>;
            <div>;
              <p className="font-semibold">Is there a rate limit?</p>;
              <p className="text-zion-slate-light">Yes, free tier requests are limited per hour. Contact sales for higher limits.</p>;
            </div>;
          </div>;
          <div className="text-center">;
            <Button size="lg" className="bg-zion-purple text-white" asChild>;
              <Link href="/developers">Learn More</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;
    </>;
  ),;
=======
import React, { useEffect } from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus",
export default function IntegrationsFeature() {
  const schema = {
    "@context": "https: //schema.org",
    "@type": "WebPage",
    "name": "API & Integrations",
    "description": "Connect Zion with Slack, your website and other tools via our API and widgets.",
    "url": "https://app.ziontechgroup.com/features/integrations"
  },
  const { markSlackConnected } = useAdvancedOnboardingStatus(),

  useEffect(() => {
    markSlackConnected()
  }, [markSlackConnected]),
import React, {useEffect} from "react";
import Link from 'next/link';

export default function IntegrationsFeature() {const schema = {
    "@context": "https://schema.org", _"@type": "WebPage", _"name": "API & Integrations", _"description": "Connect Zion with Slack, your website and other tools via our API and widgets.", _"url": "https://app.ziontechgroup.com/features/integrations"};

  const {markSlackConnected} = useAdvancedOnboardingStatus();

  useEffect_(() => {markSlackConnected()}, [markSlackConnected]);

  return (
    <>
      <SEO,
title=&quot;API & Integrations&quot;
        description=&quot;Extend Zion by embedding widgets or using our REST API for custom workflows.&quot;
        keywords=&quot;Zion API, Slack integration, embed widget&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/integrations&quot;
      />
      {_/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script,
type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ _html: JSON.stringify(schema) }}      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md: px-6">
          <GradientHeading className="mb-4 text-center">API & Integrations</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">            Automate your workflows by connecting Zion with the tools you already use.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden&quot;>
            <img,
src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot showing integrations&quot;
              className=&quot;object-cover&quot;
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">            <li>Trigger Slack notifications for new orders or messages.</li>
            <li>Embed talent search or job listings directly on your site.</li>
            <li>Build custom analytics by pulling data from our REST endpoints.</li>
          </ul>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Frequently Asked Questions</h2>
          <div className=&quot;space-y-4 mb-12&quot;>
            <div>
              <p className=&quot;font-semibold&quot;>Where can I find the API docs?</p>
              <p className=&quot;text-zion-slate-light&quot;>Visit our Developer Portal for authentication guides and endpoint references.</p>
            </div>
            <div>
              <p className=&quot;font-semibold&quot;>Is there a rate limit?</p>
              <p className=&quot;text-zion-slate-light&quot;>Yes, free tier requests are limited per hour. Contact sales for higher limits.</p>
            </div>
          </div>
          <div className=&quot;text-center&quot;>
            <Button size=&quot;lg&quot; className=&quot;bg-zion-purple text-white&quot; asChild>
              <Link href=&quot;/developers&quot;>Learn More</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
