<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

export default function AiSalesIntelligencePlatformPage() {
  return (
    <>
      <Head>
        <title>Ai Sales Intelligence Platform - Zion Tech Group</title>
        <meta name="description" content="ai sales intelligence platform page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Ai Sales Intelligence Platform</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
=======
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export default function AISalesIntelligencePlatform() {
	return (
		<ServiceLanding
			title="AI Sales Intelligence Platform"
			slug="ai-sales-intelligence-platform"
			description="Auto-prioritize leads, generate personalized outreach, and forecast pipeline with high accuracy. Empower SDRs and AEs with AI copilots embedded in their daily workflows."
			subtitle="Lift conversion rates 15–35% and shorten sales cycles with AI-first workflows."
			pricePerMonthUSD={1499}
			implementationWeeks="Implementation: 1–3 weeks"
			roiNote="Average ROI 3–8x within 60 days"
			features={[
				"AI lead scoring using firmographics, intent, and engagement",
				"One-click hyper-personalized emails and sequences",
				"Meeting prep briefs and objection handling",
				"Forecasting with scenario simulations",
				"CRM automations for notes, tasks, and next steps",
				"Integrations: Salesforce, HubSpot, Gmail/Outlook, Gong, Zoom"
			]}
			industries={["B2B SaaS", "Professional Services", "Manufacturing"]}
			canonical="https://ziontechgroup.com/ai-sales-intelligence-platform"
		/>
	);
>>>>>>> origin/auto/autonomy-17186719616
}