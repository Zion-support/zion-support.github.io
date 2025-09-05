import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';

export default function Internationalization() {
  const schema = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot;: &quot;Internationalization&quot;,
    &quot;description&quot;: &quot;Use Zion in multiple languages and attract clients worldwide with localized listings.&quot;,
    &quot;url&quot;: &quot;https://app.ziontechgroup.com/features/internationalization&quot;
  };

  return (
    <>
      <SEO
        title=&quot;Internationalization&quot;
        description=&quot;Reach a global audience with multi-language support across the Zion platform.&quot;
        keywords=&quot;i18n, multi-language marketplace, localized listings&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/internationalization&quot;
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className=&quot;bg-background text-white py-12&quot;>
        <div className=&quot;container mx-auto px-4 md:px-6&quot;>
          <GradientHeading className=&quot;mb-4 text-center&quot;>Internationalization</GradientHeading>
          <p className=&quot;text-center text-zion-slate-light max-w-3xl mx-auto mb-8&quot;>
            Our interface and search support multiple languages so you can collaborate without barriers.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden&quot;>
            <img
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot of language options&quot;
              className=&quot;object-cover&quot;
            />
          </div>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Benefits &amp; Use Cases</h2>
          <ul className=&quot;list-disc list-inside space-y-2 mb-8 text-zion-slate-light&quot;>
            <li>Publish product and service pages in your native language.</li>
            <li>Attract international clients and expand your reach.</li>
            <li>Automatic language detection ensures a localized experience.</li>
          </ul>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Frequently Asked Questions</h2>
          <div className=&quot;space-y-4 mb-12&quot;>
            <div>
              <p className=&quot;font-semibold&quot;>Which languages are supported?</p>
              <p className=&quot;text-zion-slate-light&quot;>The platform currently supports English, Spanish, Portuguese and more.</p>
            </div>
            <div>
              <p className=&quot;font-semibold&quot;>Can I suggest new translations?</p>
              <p className=&quot;text-zion-slate-light&quot;>Yes, community contributions help us continually add new languages.</p>
            </div>
          </div>
          <div className=&quot;text-center&quot;>
            <Button size=&quot;lg&quot; className=&quot;bg-zion-purple text-white&quot; asChild>
              <Link href=&quot;/&quot;>Explore Zion</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
