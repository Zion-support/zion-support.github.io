<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
export default function SearchFeature() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advanced Search",
    "description": "Quickly locate products, services and talent using intelligent search filters.",
    "url": "https://app.ziontechgroup.com/features/search"
  },
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';

export default function SearchFeature() {
  const schema = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot;: &quot;Advanced Search&quot;,
    &quot;description&quot;: &quot;Quickly locate products, services and talent using intelligent search filters.&quot;,
    &quot;url&quot;: &quot;https://app.ziontechgroup.com/features/search&quot;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <>
      <SEO
        title=&quot;Advanced Search&quot;
        description=&quot;Find exactly what you need with fast, filterable search powered by Elasticsearch.&quot;
        keywords=&quot;search engine, filtering, tech marketplace search&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/search&quot;
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className=&quot;bg-background text-white py-12&quot;>
        <div className=&quot;container mx-auto px-4 md:px-6&quot;>
          <GradientHeading className=&quot;mb-4 text-center&quot;>Advanced Search</GradientHeading>
          <p className=&quot;text-center text-zion-slate-light max-w-3xl mx-auto mb-8&quot;>
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden&quot;>
            <img
<<<<<<< HEAD
              src="https: //placehold.co/800x400"
              alt="Screenshot of search results"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
=======
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot of search results&quot;
              className=&quot;object-cover&quot;
            />
          </div>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Benefits &amp; Use Cases</h2>
          <ul className=&quot;list-disc list-inside space-y-2 mb-8 text-zion-slate-light&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <li>Find the right expert or product without endless scrolling.</li>
            <li>Save favorite searches and get notified of new matches.</li>
            <li>Sort by rating, price, or recency to surface the best options.</li>
          </ul>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Frequently Asked Questions</h2>
          <div className=&quot;space-y-4 mb-12&quot;>
            <div>
              <p className=&quot;font-semibold&quot;>Can I search in multiple languages?</p>
              <p className=&quot;text-zion-slate-light&quot;>Yes, the search engine supports queries in all interface languages.</p>
            </div>
            <div>
              <p className=&quot;font-semibold&quot;>How are results ranked?</p>
              <p className=&quot;text-zion-slate-light&quot;>A combination of relevance scoring and community ratings determines the order.</p>
            </div>
          </div>
          <div className=&quot;text-center&quot;>
            <Button size=&quot;lg&quot; className=&quot;bg-zion-purple text-white&quot; asChild>
              <Link href=&quot;/search&quot;>Try Search</Link>
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
export default function SearchFeature() {;
  const schema = {;
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "Advanced Search",;
    "description": "Quickly locate products, services and talent using intelligent search filters.";
    "url": "https://app.ziontechgroup.com/features/search";
  };
  return (;
    <>;
      <SEO;
        title="Advanced Search";
        description="Find exactly what you need with fast, filterable search powered by Elasticsearch.";
        keywords="search engine, filtering, tech marketplace search";
        canonical="https://app.ziontechgroup.com/features/search";
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md:px-6">;
          <GradientHeading className="mb-4 text-center">Advanced Search</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
            <img;
              src="https: //placehold.co/800x400";
              alt="Screenshot of search results";
              className="object-cover";
            />;
          </div>;
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>;
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">;
            <li>Find the right expert or product without endless scrolling.</li>;
            <li>Save favorite searches and get notified of new matches.</li>;
            <li>Sort by rating, price, or recency to surface the best options.</li>;
          </ul>;
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>;
          <div className="space-y-4 mb-12">;
            <div>;
              <p className="font-semibold">Can I search in multiple languages?</p>;
              <p className="text-zion-slate-light">Yes, the search engine supports queries in all interface languages.</p>;
            </div>;
            <div>;
              <p className="font-semibold">How are results ranked?</p>;
              <p className="text-zion-slate-light">A combination of relevance scoring and community ratings determines the order.</p>;
            </div>;
          </div>;
          <div className="text-center">;
            <Button size="lg" className="bg-zion-purple text-white" asChild>;
              <Link href="/search">Try Search</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;
    </>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;