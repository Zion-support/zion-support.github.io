
return (
    <>;
      <SEO
        title='AI Content Generation'
        description='Generate SEO-optimized blog posts, service descriptions and FAQs with ZionGPT.'
        keywords='AI content generation, ZionGPT, SEO tools'
        canonical='https://app && app.ziontechgroup.com/features/ai-content-generation'
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON && JSON.stringify(schema) }}></script>;
      <Header />;
      <main className='bg-background text-white py-12'>;
        <div className='container mx-auto px-4 md:px-6'>;
          <GradientHeading className='mb-4 text-center'>;
            AI Content Generation;
          </GradientHeading>;
          <p className='text-center text-zion-slate-light max-w-3xl mx-auto mb-8'>;
            ZionGPT helps you craft high quality articles, service descriptions;
            and FAQs in minutes.;
          </p>;
          <div className='relative w-full h-auto aspect-video mb-12 mx-auto rounded-lg shadow-xl overflow-hidden'>;
            <img
            <Button size="lg" className="bg-zion-purple text-white" asChild>
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
              <Link href='/open-app'>Try ZionGPT Now</Link>            </Button>          <div className="text-center">

              <Link href="/open-app">Try ZionGPT Now</Link>
            </Button>
          </div>
        </div>
      </main>
    </>

;
}

import React, { useEffect } from "react",;
import { Header } from "@/components/Header",;
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
import { useFeatureUsage } from "@/hooks/useFeatureUsage",;
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus",;
export default function AIPoweredContent() {;
  useFeatureUsage('ZionGPT'),;
  const schema = {;
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "AI Content Generation",;
    "description": "Generate SEO-optimized content using ZionGPT to boost your online visibility.",;
    "url": "https://app.ziontechgroup.com/features/ai-content-generation";
  },;
  const { markAiExplored } = useAdvancedOnboardingStatus();
  useEffect(() => {;
    markAiExplored();
            />;
          </div>;
          <h2 className='text-2xl font-bold mb-4'>Benefits &amp; Use Cases</h2>;
          <ul className='list-disc list-inside space-y-2 mb-8 text-zion-slate-light'>;

import React, { useEffect } from 'react';
import { Header } from '@/components / Header';
import { SEO } from '@/components / SEO';
import { GradientHeading } from '@/components / GradientHeading';
import { Button } from '@/components / ui / button';
import Link from 'next / link';
import { useFeatureUsage } from '@/hooks / useFeatureUsage';
import { useAdvancedOnboardingStatus } from '@/hooks / useAdvancedOnboardingStatus'; import Link from 'next / link';
import { useFeatureUsage  } from '@/hooks / useFeatureUsage';
import { useAdvancedOnboardingStatus  } from '@/hooks / useAdvancedOnboardingStatus';
export default /**
 * AIPoweredContent - Function description
 */
function AIPoweredContent() {
  useFeatureUsage ('ZionGPT'),
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Content Generation",
    "description": "Generate SEO - optimized content using ZionGPT to boost your online visibility.",
    "url": "https://app.ziontechgroup.com / features / ai - content - generation";
  },
export default /**
 * AIPoweredContent - Function description
 */
function AIPoweredContent() {
  useFeatureUsage ('ZionGPT');
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AI Content Generation',
    description:;
      'Generate SEO - optimized content using ZionGPT to boost your online visibility.',
    url: 'https://app.ziontechgroup.com / features / ai - content - generation',
  }
  const { markAiExplored } = useAdvancedOnboardingStatus ();
  useEffect (() => {
    markAiExplored ();
  }, [markAiExplored]);
  return (;
    <>;
      <SEO;
        title="AI Content Generation";
        description="Generate SEO-optimized blog posts, service descriptions and FAQs with ZionGPT.";
        keywords="AI content generation, ZionGPT, SEO tools";
        canonical="https://app.ziontechgroup.com/features/ai-content-generation";
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md:px-6">;
          <GradientHeading className="mb-4 text-center">AI Content Generation</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            ZionGPT helps you craft high quality articles, service descriptions and FAQs in minutes.;
          </p>;
          <div className="relative w-full h-auto aspect-video mb-12 mx-auto rounded-lg shadow-xl overflow-hidden">;
            <img;
              src="https: //placehold.co/800x400";
              alt="Screenshot of ZionGPT content tool";
              className="object-cover";
            />;
          </div>;
            <li>;
              Save time drafting marketing content for your products or;
              services.;
            </li>;

                Yes, you can review and modify all suggestions before;
                publishing.;
              </p>;
            </div>;
          </div>;

            </Button>;
          </div>;
        </div>;
      </main>;

