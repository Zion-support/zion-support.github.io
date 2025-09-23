import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';

export default function AiEmotionalIntelligenceTrainingPage() {
  return (
    <>
      <Head>
        <title>Ai Emotional Intelligence Training - Zion Tech Group</title>
        <meta name="description" content="ai emotional intelligence training page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Ai Emotional Intelligence Training</h1>
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

export default function AIEmotionalIntelligenceTraining() {
	return (
		<ServiceLanding
			title="AI Emotional Intelligence Training"
			slug="ai-emotional-intelligence-training"
			description="Dynamic coaching that improves communication, empathy, and leadership. AI evaluates tone, clarity, and sentiment to deliver tailored practice scenarios and feedback."
			subtitle="Upgrade team EQ with measurable gains in manager effectiveness and CSAT."
			pricePerMonthUSD={799}
			implementationWeeks="Implementation: 1–2 weeks"
			roiNote="Average ROI 2–5x within 60–90 days"
			features={[
				"Role-play simulators for negotiation, feedback, and escalation",
				"Real-time tone and sentiment coaching",
				"Personalized learning paths and certifications",
				"Team dashboards and skill gap analysis",
				"Integrations: LMS, Slack/Teams, Gmail/Outlook",
				"Privacy-first voice and text processing"
			]}
			industries={["Customer Support", "Sales", "HR & L&D", "Leadership"]}
			canonical="https://ziontechgroup.com/ai-emotional-intelligence-training"
		/>
	);
>>>>>>> origin/auto/autonomy-17186719616
}