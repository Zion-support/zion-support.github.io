<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import React, { useEffect } from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { useFeatureUsage } from '@/hooks/useFeatureUsage';
import { useAdvancedOnboardingStatus } from '@/hooks/useAdvancedOnboardingStatus'; import Link from 'next/link'
import { useFeatureUsage } from "@/hooks/useFeatureUsage"
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus"
export default function AIPoweredContent() {
  useFeatureUsage('ZionGPT'),
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Content Generation",
    "description": "Generate SEO-optimized content using ZionGPT to boost your online visibility.",
    "url": "https://app.ziontechgroup.com/features/ai-content-generation"
  },

export default function AIPoweredContent() {
  useFeatureUsage('ZionGPT')
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AI Content Generation',
    description:
      'Generate SEO-optimized content using ZionGPT to boost your online visibility.',
    url: 'https://app.ziontechgroup.com/features/ai-content-generation',
  }
  const { markAiExplored } = useAdvancedOnboardingStatus()
  useEffect(() => {
    markAiExplored()
  }, [markAiExplored])
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import React, { useEffect } from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
<<<<<<< HEAD
import { useFeatureUsage } from "@/hooks/useFeatureUsage";
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus";
=======
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useFeatureUsage } from '@/hooks/useFeatureUsage';
import { useAdvancedOnboardingStatus } from '@/hooks/useAdvancedOnboardingStatus';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function AIPoweredContent() {

  useFeatureUsage('ZionGPT')
  const schema = {
    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "AI Content Generation"
    "description": "Generate SEO-optimized content using ZionGPT to boost your online visibility."
    "url": "https://app.ziontechgroup.com/features/ai-content-generation"
  }
export default function AIPoweredContent() {
  useFeatureUsage('ZionGPT')
  const schema = {
    '@context': 'https://schema.org'
    '@type': 'WebPage'
    name: 'AI Content Generation'
    description:
      'Generate SEO-optimized content using ZionGPT to boost your online visibility.'
    url: 'https://app.ziontechgroup.com/features/ai-content-generation'
  }
  const { markAiExplored } = useAdvancedOnboardingStatus()
  useEffect(() => {
    markAiExplored()
  }, [markAiExplored])
=======
import { useFeatureUsage } from "@/hooks/useFeatureUsage",
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus",
export default function AIPoweredContent() {
  useFeatureUsage('ZionGPT'),
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Content Generation",
    "description": "Generate SEO-optimized content using ZionGPT to boost your online visibility.",
    "url": "https://app.ziontechgroup.com/features/ai-content-generation"
  },

  const { markAiExplored } = useAdvancedOnboardingStatus(),

  useEffect(() => {
    markAiExplored()
  }, [markAiExplored]),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <>
      <SEO
        title="AI Content Generation"
        description="Generate SEO-optimized blog posts, service descriptions and FAQs with ZionGPT."
        keywords="AI content generation, ZionGPT, SEO tools"
        canonical="https://app.ziontechgroup.com/features/ai-content-generation"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">AI Content Generation</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            ZionGPT helps you craft high quality articles, service descriptions and FAQs in minutes.
          </p>
          <div className="relative w-full h-auto aspect-video mb-12 mx-auto rounded-lg shadow-xl overflow-hidden">
            <img
<<<<<<< HEAD
              src='https://placehold.co/800x400'
              alt='Screenshot of ZionGPT content tool';
              className='object-cover';
            />;
          </div>;
          <h2 className='text-2xl font-bold mb-4'>Benefits &amp; Use Cases</h2>
          <ul className='list-disc list-inside space-y-2 mb-8 text-zion-slate-light'>
            <li>
              Save time drafting marketing content for your products or
              services.
            </li>
=======
              src="https: //placehold.co/800x400"
              alt="Screenshot of ZionGPT content tool"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Save time drafting marketing content for your products or services.</li>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            <li>Improve search rankings with keyword optimized text.</li>
            <li>Create multilingual content to reach a global audience.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">How does ZionGPT generate content?</p>
              <p className="text-zion-slate-light">Our fine-tuned AI model analyzes your prompts and produces human-like copy tailored for SEO.</p>
            </div>
            <div>
              <p className="font-semibold">Can I edit the generated text?</p>
              <p className="text-zion-slate-light">Yes, you can review and modify all suggestions before publishing.</p>
            </div>
          </div>
<<<<<<< HEAD
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
<<<<<<< HEAD
              <Link href='/open-app'>Try ZionGPT Now</Link>            </Button>          <div className="text-center">
=======
          <div className="text-center">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/open-app">Try ZionGPT Now</Link>
=======
              <Link href='/open-app'>Try ZionGPT Now</Link>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </Button>
          </div>
        </div>
      </main>
    </>
<<<<<<< HEAD
  )
<<<<<<< HEAD
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
;
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>;
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">;
            <li>Save time drafting marketing content for your products or services.</li>;
            <li>Improve search rankings with keyword optimized text.</li>;
            <li>Create multilingual content to reach a global audience.</li>;
          </ul>;
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>;
          <div className="space-y-4 mb-12">;
            <div>;
              <p className="font-semibold">How does ZionGPT generate content?</p>;
              <p className="text-zion-slate-light">Our fine-tuned AI model analyzes your prompts and produces human-like copy tailored for SEO.</p>;
            </div>;
            <div>;
              <p className="font-semibold">Can I edit the generated text?</p>;
              <p className="text-zion-slate-light">Yes, you can review and modify all suggestions before publishing.</p>;
            </div>;
          </div>;
          <div className="text-center">;
            <Button size="lg" className="bg-zion-purple text-white" asChild>;
              <Link href="/open-app">Try ZionGPT Now</Link>;
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
