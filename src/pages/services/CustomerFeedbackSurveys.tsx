import React from 'react';
import SEO from '@/components/SEO';

export default function CustomerFeedbackSurveys() {
  return (
    <div className="min-h-screen bg-futuristic text-white">
      <SEO
        title="Mobile-First Customer Feedback Surveys | Zion Tech Group"
        description="Create branded, mobile-friendly surveys with AI insights, NPS, CSAT, churn predictors, and real-time dashboards."
      />
      <section className="container-responsive py-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
          Mobile-First Feedback Surveys
        </h1>
        <p className="text-zion-slate-light max-w-3xl">
          Launch engaging surveys across web, SMS, and email with real-time dashboards. 
          AI highlights themes, predicts churn risk, and recommends actions.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mt-10">
          <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold mb-3">Features</h2>
            <ul className="space-y-2 text-sm text-zion-slate-light">
              <li>• NPS, CSAT, CES templates</li>
              <li>• Branching logic, translations, rich media</li>
              <li>• AI topic clustering, sentiment trends</li>
              <li>• Alerts to Slack/Teams; webhook and REST APIs</li>
              <li>• Exports to BigQuery, Snowflake, S3</li>
            </ul>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold mb-3">Pricing</h2>
            <ul className="space-y-2 text-sm text-zion-slate-light">
              <li>• Starter: $149/mo up to 5k responses</li>
              <li>• Growth: $399/mo up to 25k responses</li>
              <li>• Enterprise: SSO, DPA, custom SLAs</li>
            </ul>
            <p className="mt-4 text-xs text-zion-slate-light">
              References: 
              <a className="text-cyan-400 hover:text-cyan-300 ml-2" href="https://www.typeform.com/pricing/" target="_blank" rel="noreferrer">Typeform pricing</a>,
              <a className="text-cyan-400 hover:text-cyan-300 ml-2" href="https://www.surveymonkey.com/pricing/" target="_blank" rel="noreferrer">SurveyMonkey pricing</a>
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-cyan-400/20 bg-slate-900/50 p-6">
          <h3 className="font-semibold mb-2">Integrations</h3>
          <p className="text-sm text-zion-slate-light">HubSpot, Salesforce, Segment, Zapier, Twilio, Mailchimp.</p>
          <p className="text-sm text-zion-slate-light mt-4">Contact: +1 302 464 0950 — <a className="text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
        </div>
      </section>
    </div>
  );
}

