<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useEffect } from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAdvancedOnboardingStatus } from '@/hooks/useAdvancedOnboardingStatus'
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus"
export default function IntegrationsFeature() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'API & Integrations',
    description:
      'Connect Zion with Slack, your website and other tools via our API and widgets.',
    url: 'https://app.ziontechgroup.com/features/integrations',
  }
  const { markSlackConnected } = useAdvancedOnboardingStatus()
  useEffect(() => {
    markSlackConnected()
  }, [markSlackConnected])
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useEffect } from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Link from 'next/link';
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus";
export default function IntegrationsFeature() {

  const schema = {
    '@context': 'https://schema.org'
    '@type': 'WebPage'
    name: 'API & Integrations'
    description:
      'Connect Zion with Slack, your website and other tools via our API and widgets.'
    url: 'https://app.ziontechgroup.com/features/integrations'
  }
  const { markSlackConnected } = useAdvancedOnboardingStatus()
  useEffect(() => {
    markSlackConnected()
  }, [markSlackConnected])
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <>
=======
return (
    <>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <SEO
        title='API & Integrations'
        description='Extend Zion by embedding widgets or using our REST API for custom workflows.'
        keywords='Zion API, Slack integration, embed widget'
        canonical='https://app && app.ziontechgroup.com/features/integrations'
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON && JSON.stringify(schema) }}></script>;
      <Header />;
      <main className='bg-background text-white py-12'>;
        <div className='container mx-auto px-4 md:px-6'>;
          <GradientHeading className='mb-4 text-center'>;
            API & Integrations;
          </GradientHeading>;
          <p className='text-center text-zion-slate-light max-w-3xl mx-auto mb-8'>;
            Automate your workflows by connecting Zion with the tools you;
            already use.;
          </p>;
          <div className='relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden'>;
            <img
<<<<<<< HEAD

=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

  const { markSlackConnected } = useAdvancedOnboardingStatus(),

  useEffect(() => {
    markSlackConnected()
  }, [markSlackConnected]),

  return (
    <>
      <SEO
        title="API & Integrations"
        description="Extend Zion by embedding widgets or using our REST API for custom workflows."
        keywords="Zion API, Slack integration, embed widget"
        canonical="https://app.ziontechgroup.com/features/integrations"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md: px-6">
          <GradientHeading className="mb-4 text-center">API & Integrations</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Automate your workflows by connecting Zion with the tools you already use.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              src='https://placehold.co/800x400'
              alt='Screenshot showing integrations';
              className='object-cover';
            />;
          </div>;
          <h2 className='text-2xl font-bold mb-4'>Benefits &amp; Use Cases</h2>
          <ul className='list-disc list-inside space-y-2 mb-8 text-zion-slate-light'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              src="https://placehold.co/800x400"
              alt="Screenshot showing integrations"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <li>Trigger Slack notifications for new orders or messages.</li>
            <li>Embed talent search or job listings directly on your site.</li>
            <li>Build custom analytics by pulling data from our REST endpoints.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">Where can I find the API docs?</p>
              <p className="text-zion-slate-light">Visit our Developer Portal for authentication guides and endpoint references.</p>
            </div>
            <div>
              <p className="font-semibold">Is there a rate limit?</p>
              <p className="text-zion-slate-light">Yes, free tier requests are limited per hour. Contact sales for higher limits.</p>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
              <Link href='/developers'>Learn More</Link>            </Button>          <div className="text-center">
          <div className="text-center">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button size="lg" className="bg-zion-purple text-white" asChild>
=======
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
              <Link href='/developers'>Learn More</Link>            </Button>          <div className="text-center">
>>>>>>>             <Button size="lg" className="bg-zion-purple text-white" asChild>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <Link href="/developers">Learn More</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import React, { useEffect } from "react",;
import { Header } from "@/components/Header",;
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus",;
export default function IntegrationsFeature() {;
  const schema = {;
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "API & Integrations",;
    "description": "Connect Zion with Slack, your website and other tools via our API and widgets.",;
    "url": "https://app.ziontechgroup.com/features/integrations";
  },;
  const { markSlackConnected } = useAdvancedOnboardingStatus();
  useEffect(() => {;
    markSlackConnected();
<<<<<<< HEAD
  }, [markSlackConnected]);
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md: px-6">;
          <GradientHeading className="mb-4 text-center">API & Integrations</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Automate your workflows by connecting Zion with the tools you already use.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
            <img;
              src="https://placehold.co/800x400";
              alt="Screenshot showing integrations";
              className="object-cover";
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            />;
          </div>;
          <h2 className='text-2xl font-bold mb-4'>Benefits &amp; Use Cases</h2>;
          <ul className='list-disc list-inside space-y-2 mb-8 text-zion-slate-light'>;
            <li>Trigger Slack notifications for new orders or messages.</li>;
            <li>Embed talent search or job listings directly on your site.</li>;

import React, { useEffect } from 'react';
import { Header } from '@/components / Header';
import { SEO } from '@/components / SEO';
import { GradientHeading } from '@/components / GradientHeading';
import { Button } from '@/components / ui / button';
import Link from 'next / link';
import { useAdvancedOnboardingStatus } from '@/hooks / useAdvancedOnboardingStatus';
import { useAdvancedOnboardingStatus  } from '@/hooks / useAdvancedOnboardingStatus';
export default /**
 * IntegrationsFeature - Function description
 */
function IntegrationsFeature() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'API & Integrations',
    description:;
      'Connect Zion with Slack, your website and other tools via our API and widgets.',
    url: 'https://app.ziontechgroup.com / features / integrations',
  }
  const { markSlackConnected } = useAdvancedOnboardingStatus ();
  useEffect (() => {
    markSlackConnected ();
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }, [markSlackConnected]);
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md: px-6">;
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
<<<<<<< HEAD
          <h2 className='text - 2xl font - bold mb - 4'>Benefits &amp; Use Cases</h2>;
          <ul className='list - disc list - inside space - y-2 mb - 8 text - zion - slate - light'>;
            <li > Trigger Slack notifications for new orders or messages.</li>;
            <li > Embed talent search or job listings directly on your site.</li>;

<<<<<<< HEAD
>>>>>>>             <li>;
=======
            <li>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              Build custom analytics by pulling data from our REST endpoints.;
            </li>;
          </ul>;


                Visit our Developer Portal for authentication guides and;
                endpoint references.;
              </p>;
            </div>;
            <div>;


                Yes, free tier requests are limited per hour. Contact sales for;
                higher limits.;
              </p>;
            </div>;
          </div>;


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Link href="/developers">Learn More</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;
    </>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
