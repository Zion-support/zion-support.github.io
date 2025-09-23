import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';

export default function AiAutonomousResearchAssistantPage() {
  return (
    <>
      <Head>
        <title>Ai Autonomous Research Assistant - Zion Tech Group</title>
        <meta name="description" content="ai autonomous research assistant page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Ai Autonomous Research Assistant</h1>
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
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIAutonomousResearchAssistant() {
	return (
		<ServiceLanding
			title="AI Autonomous Research Assistant"
			slug="ai-autonomous-research-assistant"
			description="An AI agent that continuously tracks competitors, markets, regulations, and technologies. It synthesizes findings, drafts briefs, and recommends actions—so your team stays ahead."
			subtitle="Always-on competitive and market intelligence at analyst-level quality."
			pricePerMonthUSD={1299}
			implementationWeeks="Implementation: 1–2 weeks"
			roiNote="Average ROI 3–6x within 60 days"
			features={[
				"Automated web and document monitoring with source citations",
				"Daily/weekly executive briefs and dashboards",
				"Regulatory watchlists and impact analysis",
				"RFP/RFI opportunity discovery and alerts",
				"Export to Slides/Docs/Notion",
				"Compliance-friendly data handling, audit logs"
			]}
			industries={["Consulting", "Healthcare", "Finance", "Public Sector"]}
			canonical="https://ziontechgroup.com/ai-autonomous-research-assistant"
		/>
	);
>>>>>>> origin/auto/autonomy-17186719616
}