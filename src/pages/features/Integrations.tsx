<<<<<<< HEAD
import React, { useEffect } from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus",
export default function IntegrationsFeature() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "API & Integrations",
    "description": "Connect Zion with Slack, your website and other tools via our API and widgets.",
    "url": "https://app.ziontechgroup.com/features/integrations"
  },
=======
import React, { useEffect } from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';
import { useAdvancedOnboardingStatus } from &quot;@/hooks/useAdvancedOnboardingStatus&quot;;

export default function IntegrationsFeature() {
  const schema = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot;: &quot;API & Integrations&quot;,
    &quot;description&quot;: &quot;Connect Zion with Slack, your website and other tools via our API and widgets.&quot;,
    &quot;url&quot;: &quot;https://app.ziontechgroup.com/features/integrations&quot;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const { markSlackConnected } = useAdvancedOnboardingStatus(),

  useEffect(() => {
    markSlackConnected()
  }, [markSlackConnected]),

  return (
    <>
      <SEO
        title=&quot;API & Integrations&quot;
        description=&quot;Extend Zion by embedding widgets or using our REST API for custom workflows.&quot;
        keywords=&quot;Zion API, Slack integration, embed widget&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/integrations&quot;
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
          <GradientHeading className="mb-4 text-center">API & Integrations</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
=======
      <main className=&quot;bg-background text-white py-12&quot;>
        <div className=&quot;container mx-auto px-4 md:px-6&quot;>
          <GradientHeading className=&quot;mb-4 text-center&quot;>API & Integrations</GradientHeading>
          <p className=&quot;text-center text-zion-slate-light max-w-3xl mx-auto mb-8&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Automate your workflows by connecting Zion with the tools you already use.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden&quot;>
            <img
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot showing integrations&quot;
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
            <li>Trigger Slack notifications for new orders or messages.</li>
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
}
