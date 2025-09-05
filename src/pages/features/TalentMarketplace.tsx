<<<<<<< HEAD
<<<<<<< HEAD
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
    "description": "Hire vetted AI and tech professionals from around the world on Zion.",
    "url": "https://app.ziontechgroup.com/features/talent-marketplace"
  },
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';

export default function TalentMarketplace() {
  const schema = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot;: &quot;Talent Marketplace&quot;,
    &quot;description&quot;: &quot;Hire vetted AI and tech professionals from around the world on Zion.&quot;,
    &quot;url&quot;: &quot;https://app.ziontechgroup.com/features/talent-marketplace&quot;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <>
      <SEO
        title=&quot;Talent Marketplace&quot;
        description=&quot;Discover and hire top AI specialists through the Zion talent marketplace.&quot;
        keywords=&quot;AI talent marketplace, hire developers, tech freelancers&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/talent-marketplace&quot;
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className=&quot;bg-background text-white py-12&quot;>
        <div className=&quot;container mx-auto px-4 md:px-6&quot;>
          <GradientHeading className=&quot;mb-4 text-center&quot;>Talent Marketplace</GradientHeading>
          <p className=&quot;text-center text-zion-slate-light max-w-3xl mx-auto mb-8&quot;>
            Browse thousands of verified AI engineers, data scientists and other tech professionals.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden&quot;>
            <img
<<<<<<< HEAD
              src="https: //placehold.co/800x400"
              alt="Screenshot of talent directory"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
=======
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot of talent directory&quot;
              className=&quot;object-cover&quot;
            />
          </div>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Benefits &amp; Use Cases</h2>
          <ul className=&quot;list-disc list-inside space-y-2 mb-8 text-zion-slate-light&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <li>Find pre-screened experts for short or long term projects.</li>
            <li>AI-powered matching recommends the best candidates for your needs.</li>
            <li>Secure escrow and milestone tracking keep payments safe.</li>
          </ul>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Frequently Asked Questions</h2>
          <div className=&quot;space-y-4 mb-12&quot;>
            <div>
              <p className=&quot;font-semibold&quot;>How do I contact a freelancer?</p>
              <p className=&quot;text-zion-slate-light&quot;>Create a free account and send a message or job invite directly from their profile.</p>
            </div>
            <div>
              <p className=&quot;font-semibold&quot;>Are payments protected?</p>
              <p className=&quot;text-zion-slate-light&quot;>Yes, funds are held in escrow until you approve completed milestones.</p>
            </div>
          </div>
          <div className=&quot;text-center&quot;>
            <Button size=&quot;lg&quot; className=&quot;bg-zion-purple text-white&quot; asChild>
              <Link href=&quot;/talent&quot;>Browse Talent</Link>
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
export default function TalentMarketplace() {;
  const schema = {;
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "Talent Marketplace",;
    "description": "Hire vetted AI and tech professionals from around the world on Zion.";
    "url": "https://app.ziontechgroup.com/features/talent-marketplace";
  };
  return (;
    <>;
      <SEO;
        title="Talent Marketplace";
        description="Discover and hire top AI specialists through the Zion talent marketplace.";
        keywords="AI talent marketplace, hire developers, tech freelancers";
        canonical="https://app.ziontechgroup.com/features/talent-marketplace";
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md:px-6">;
          <GradientHeading className="mb-4 text-center">Talent Marketplace</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Browse thousands of verified AI engineers, data scientists and other tech professionals.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
            <img;
              src="https: //placehold.co/800x400";
              alt="Screenshot of talent directory";
              className="object-cover";
            />;
          </div>;
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>;
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">;
            <li>Find pre-screened experts for short or long term projects.</li>;
            <li>AI-powered matching recommends the best candidates for your needs.</li>;
            <li>Secure escrow and milestone tracking keep payments safe.</li>;
          </ul>;
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>;
          <div className="space-y-4 mb-12">;
            <div>;
              <p className="font-semibold">How do I contact a freelancer?</p>;
              <p className="text-zion-slate-light">Create a free account and send a message or job invite directly from their profile.</p>;
            </div>;
            <div>;
              <p className="font-semibold">Are payments protected?</p>;
              <p className="text-zion-slate-light">Yes, funds are held in escrow until you approve completed milestones.</p>;
            </div>;
          </div>;
          <div className="text-center">;
            <Button size="lg" className="bg-zion-purple text-white" asChild>;
              <Link href="/talent">Browse Talent</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;
    </>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;