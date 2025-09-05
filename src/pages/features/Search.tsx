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
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot of search results&quot;
              className=&quot;object-cover&quot;
            />
          </div>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Benefits &amp; Use Cases</h2>
          <ul className=&quot;list-disc list-inside space-y-2 mb-8 text-zion-slate-light&quot;>
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
  );
}
