import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';

export default function Ecommerce() {
  const schema = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;WebPage&quot;,
    &quot;name&quot;: &quot;E-commerce Platform&quot;,
    &quot;description&quot;: &quot;Sell or purchase AI solutions and IT equipment through our secure marketplace.&quot;,
    &quot;url&quot;: &quot;https://app.ziontechgroup.com/features/e-commerce&quot;
  };

  return (
    <>
      <SEO
        title=&quot;E-commerce Platform&quot;
        description=&quot;Buy and sell hardware, software and services in the Zion marketplace.&quot;
        keywords=&quot;tech marketplace, buy IT hardware, sell AI solutions&quot;
        canonical=&quot;https://app.ziontechgroup.com/features/e-commerce&quot;
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className=&quot;bg-background text-white py-12&quot;>
        <div className=&quot;container mx-auto px-4 md:px-6&quot;>
          <GradientHeading className=&quot;mb-4 text-center&quot;>E-commerce Platform</GradientHeading>
          <p className=&quot;text-center text-zion-slate-light max-w-3xl mx-auto mb-8&quot;>
            Showcase your products with rich media listings and accept payments with Stripe-powered checkout.
          </p>
          <div className=&quot;relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden&quot;>
            <img
              src=&quot;https://placehold.co/800x400&quot;
              alt=&quot;Screenshot of marketplace interface&quot;
              className=&quot;object-cover&quot;
            />
          </div>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Benefits &amp; Use Cases</h2>
          <ul className=&quot;list-disc list-inside space-y-2 mb-8 text-zion-slate-light&quot;>
            <li>Support for videos and 3D models to highlight your offerings.</li>
            <li>Secure transactions with Stripe and fraud protection.</li>
            <li>Reach new customers around the world via our global platform.</li>
          </ul>
          <h2 className=&quot;text-2xl font-bold mb-4&quot;>Frequently Asked Questions</h2>
          <div className=&quot;space-y-4 mb-12&quot;>
            <div>
              <p className=&quot;font-semibold&quot;>How do I list a new product?</p>
              <p className=&quot;text-zion-slate-light&quot;>Sign in and click &quot;Publish Product&quot; from your dashboard to add pricing, images and details.</p>
            </div>
            <div>
              <p className=&quot;font-semibold&quot;>Do you support international shipping?</p>
              <p className=&quot;text-zion-slate-light&quot;>Yes, sellers can offer shipping to over 100 countries with real-time rates.</p>
            </div>
          </div>
          <div className=&quot;text-center&quot;>
            <Button size=&quot;lg&quot; className=&quot;bg-zion-purple text-white&quot; asChild>
              <Link href=&quot;/marketplace&quot;>Start Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
