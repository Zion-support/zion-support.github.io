import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ExternalLink, Sparkles, Cpu, Brain, Shield, Cloud, Database, FileText, BarChart3 } from 'lucide-react';

type Offering = {
  name: string;
  category: 'Micro SaaS' | 'IT Services' | 'AI Services';
  summary: string;
  pricing: string;
  link: string;
  features: string[];
};

const offerings: Offering[] = [
  {
    name: 'AI Sales Email Copilot',
    category: 'Micro SaaS',
    summary: 'Prospect research, draft generation, sequence optimization, and reply intent classification.',
    pricing: 'Typical: $149–$799/month',
    link: 'https://ziontechgroup.com/services/ai-sales-intelligence',
    features: ['Cold outreach drafts', 'Sequence A/B tests', 'CRM auto-logging', 'Intent scoring']
  },
  {
    name: 'Smart NPS & Feedback Hub',
    category: 'Micro SaaS',
    summary: 'Multi-channel surveys, topic clustering, sentiment tracking, and team routing.',
    pricing: 'Typical: $99–$499/month',
    link: 'https://ziontechgroup.com/services/micro-saas',
    features: ['In-app/web/email surveys', 'NLP topic grouping', 'Slack/Jira routing', 'Customer dashboards']
  },
  {
    name: 'LLM Guardrails & Evaluation Suite',
    category: 'AI Services',
    summary: 'Prompt evals, jailbreak tests, toxicity/bias checks, and policy guardrails.',
    pricing: 'Typical: $799–$3,500/month',
    link: 'https://ziontechgroup.com/src/pages/ai-services/ai-solutions',
    features: ['Red-teaming', 'PII detection', 'Safety policies', 'Regression suites']
  },
  {
    name: 'Cloud Cost Guard (FinOps Advisor)',
    category: 'IT Services',
    summary: 'Rightsizing, anomaly detection, savings plans and budget guardrails across AWS/Azure/GCP.',
    pricing: 'Typical: $299–$1,499/month',
    link: 'https://ziontechgroup.com/services/cloud-devops',
    features: ['Anomaly alerts', 'Idle resource cleanup', 'Commitment planning', 'Unit economics']
  },
  {
    name: 'Website Core Web Vitals Optimizer',
    category: 'Micro SaaS',
    summary: 'CWV monitoring, optimization guidance, auto-fixes for images, fonts, and scripts.',
    pricing: 'Typical: $199–$899/month',
    link: 'https://ziontechgroup.com/services/ai-powered-seo',
    features: ['CLS/LCP/INP tracking', 'Lazy-load & preconnect', 'Perf budgets', 'Weekly reports']
  },
  {
    name: 'Predictive Inventory Intelligence',
    category: 'AI Services',
    summary: 'Forecast demand, optimize reorder points, and reduce stockouts and overstock.',
    pricing: 'Typical: $399–$1,999/month',
    link: 'https://ziontechgroup.com/services/ai-supply-chain-optimization',
    features: ['ML forecasts', 'Seasonality handling', 'Lead time modeling', 'What-if scenarios']
  },
  {
    name: 'Data Pipeline & ETL Monitor',
    category: 'IT Services',
    summary: 'End-to-end pipeline health, SLA alerts, lineage, and automatic remediation.',
    pricing: 'Typical: $399–$1,999/month',
    link: 'https://ziontechgroup.com/services/data-analytics',
    features: ['Health dashboards', 'Anomaly detection', 'Retry orchestration', 'Slack/PagerDuty alerts']
  },
  {
    name: 'GenAI Content Workflow Studio',
    category: 'AI Services',
    summary: 'Editorial-quality briefs, drafts, clustering, internal linking and fact checks.',
    pricing: 'Typical: $1,000–$6,000/month',
    link: 'https://ziontechgroup.com/services/ai-content-creation',
    features: ['Brand voice memory', 'Entity grounding', 'Review checklists', 'Programmatic SEO']
  },
  {
    name: 'Smart Contract Auditor (Automated)',
    category: 'Micro SaaS',
    summary: 'Static/dynamic analysis, gas profiling and best-practice checks for solidity projects.',
    pricing: 'Typical: $499–$2,499/month',
    link: 'https://ziontechgroup.com/services/blockchain-enterprise-solutions',
    features: ['Vulnerability rules', 'Gas optimizations', 'CI integration', 'Audit reports']
  },
  {
    name: 'Incident Response Orchestrator',
    category: 'IT Services',
    summary: 'Playbooks, automation, evidence capture, and postmortem generation for security incidents.',
    pricing: 'Typical: $599–$2,999/month',
    link: 'https://ziontechgroup.com/services/incident-response-platform',
    features: ['SOAR integrations', 'Auto containment', 'Forensics notes', 'Postmortem drafts']
  }
];

export default function NewServices2025(props: any) {
  const categories: Offering['category'][] = ['Micro SaaS', 'IT Services', 'AI Services'];
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 py-16 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
            <Sparkles className="w-4 h-4 mr-2" /> New in 2025
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Expanded Services Portfolio</h1>
          <p className="text-indigo-100 text-lg">Real, production-grade offerings across Micro SaaS, IT, and AI.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{cat}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.filter(o => o.category === cat).map((o) => (
                <div key={o.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{o.name}</h3>
                    {o.category === 'Micro SaaS' && <Cpu className="w-5 h-5 text-indigo-600" />}
                    {o.category === 'IT Services' && <Cloud className="w-5 h-5 text-indigo-600" />}
                    {o.category === 'AI Services' && <Brain className="w-5 h-5 text-indigo-600" />}
                  </div>
                  <p className="text-gray-600 mb-3">{o.summary}</p>
                  <div className="text-sm text-indigo-700 font-semibold mb-4">{o.pricing}</div>
                  <ul className="space-y-2 mb-6">
                    {o.features.map(f => (
                      <li key={f} className="flex items-center text-sm text-gray-700"><Check className="w-3 h-3 text-green-500 mr-2" />{f}</li>
                    ))}
                  </ul>
                  <a href={o.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
                    Learn more on ziontechgroup.com <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Talk to an expert <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

