const services = [
  {
    category: 'Micro SaaS',
    items: [
      {
        title: 'AI Website Copy Optimizer',
        description: 'On-page SEO, A/B copy variants, tone optimization, and SERP monitoring.',
        price: '$49–$299/mo',
        cta: { label: 'Try Demo', href: '/request-quote' }
      },
      {
        title: 'Lead Scoring & Enrichment',
        description: 'Auto-enrich leads via public data, score intent, and route to sales.',
        price: '$99–$499/mo',
        cta: { label: 'Get Started', href: '/contact' }
      },
      {
        title: 'Invoice OCR + Reconciliation',
        description: 'Parse invoices, detect anomalies, sync with QuickBooks/Xero automatically.',
        price: '$149–$799/mo',
        cta: { label: 'Request Access', href: '/request-quote' }
      }
    ]
  },
  {
    category: 'AI Solutions',
    items: [
      {
        title: 'RAG Knowledge Assistants',
        description: 'Enterprise chat over docs with secure vector search and audit trails.',
        price: '$8k–$60k project + $500–$2k/mo',
        cta: { label: 'See Use Cases', href: '/services' }
      },
      {
        title: 'Autonomous Workflow Agents',
        description: 'Multi-agent systems for ticket triage, QA automation, and ops runbooks.',
        price: '$15k–$120k project',
        cta: { label: 'Talk to Engineering', href: '/contact' }
      },
      {
        title: 'Computer Vision Pipelines',
        description: 'Defect detection, price tags reading, shelf analytics, and safety monitoring.',
        price: '$20k–$150k project',
        cta: { label: 'Book Assessment', href: '/request-quote' }
      }
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      {
        title: 'Kubernetes Platform Engineering',
        description: 'GitOps, IaC, multi-cluster, golden paths, and internal developer platforms.',
        price: '$25k–$200k project',
        cta: { label: 'Platform Audit', href: '/services/cloud-devops' }
      },
      {
        title: 'Serverless Data Platforms',
        description: 'Event-driven pipelines, data contracts, and cost-optimized analytics.',
        price: '$18k–$120k project',
        cta: { label: 'Design Workshop', href: '/services/cloud-devops' }
      },
      {
        title: 'Site Reliability Engineering',
        description: 'SLOs, chaos testing, observability, incident response, and reliability reviews.',
        price: '$8k–$40k engagement',
        cta: { label: 'SRE Readiness', href: '/contact' }
      }
    ]
  },
  {
    category: 'Cybersecurity',
    items: [
      {
        title: 'Zero-Trust Architecture',
        description: 'Identity-first networks, microsegmentation, and continuous verification.',
        price: '$20k–$150k project',
        cta: { label: 'Architecture Review', href: '/services' }
      },
      {
        title: 'SOC 2 & ISO 27001 Readiness',
        description: 'Gap analysis, policy automation, evidence collection, and auditor handoff.',
        price: '$12k–$60k engagement',
        cta: { label: 'Compliance Sprint', href: '/contact' }
      },
      {
        title: 'Threat Detection & Response',
        description: 'SIEM tuning, EDR rollout, playbooks, red/blue teaming, and MDR setup.',
        price: '$10k–$90k + $1k–$5k/mo',
        cta: { label: 'Schedule Briefing', href: '/request-quote' }
      }
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-futuristic">
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services that Deliver Outcomes
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            We build real, production-grade solutions across AI, micro SaaS, cloud, and cybersecurity. Transparent pricing, clear timelines, measurable ROI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="tel:+13024640950" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20">Call +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20">Email kleber@ziontechgroup.com</a>
            <a href="/request-quote" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:from-cyan-300 hover:to-blue-400">Request a Quote</a>
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Cutting-edge technology solutions designed to transform your business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">AI Development</h3>
            <p className="text-gray-300 mb-6">Custom AI models and machine learning solutions.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$5,000 - $50,000</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
            <p className="text-gray-300 mb-6">Seamless cloud migration and scalable architecture.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$10,000 - $100,000</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-6">Comprehensive security solutions and assessments.</p>
            <p className="text-2xl font-bold text-blue-400 mb-4">$3,000 - $25,000</p>
          </div>
        </div>
        {/* New: Micro-SaaS Solutions */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4">Micro-SaaS Solutions</h2>
          <p className="text-gray-300 mb-10 max-w-4xl">Fast-to-deploy, subscription-based tools that solve specific business problems with clear ROI.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">AI Sales Email Optimizer</h3>
              <p className="text-gray-300 mb-4">Auto-drafts and A/B tests emails based on CRM context to raise reply rates.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>CRM integration (HubSpot, Salesforce)</li>
                <li>Sequence testing and analytics</li>
                <li>Compliance guardrails</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$299 - $799/month</p>
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Get a demo →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Support Ticket Triage Copilot</h3>
              <p className="text-gray-300 mb-4">Classifies, deduplicates, and suggests resolutions; integrates with Zendesk/Jira.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Auto-priority and routing</li>
                <li>Knowledge base suggestions</li>
                <li>First-response macros</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$249 - $999/month</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">See solution →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Invoice OCR + Reconciliation</h3>
              <p className="text-gray-300 mb-4">Extracts line-items and auto-matches to POs; exports to QuickBooks/Xero.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Vendor anomaly detection</li>
                <li>Tax and currency support</li>
                <li>Audit trails</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$199 - $799/month</p>
              <a href="https://ziontechgroup.com/services" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">SEO Content Planner</h3>
              <p className="text-gray-300 mb-4">Keyword clustering, brief generation, and on-page optimization recommendations.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Competitor gap analysis</li>
                <li>Automatic internal linking</li>
                <li>Publish to CMS</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$99 - $399/month</p>
              <a href="https://ziontechgroup.com/pricing" className="text-cyan-300 hover:text-cyan-200 font-semibold">Pricing →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">HR Screening Assistant</h3>
              <p className="text-gray-300 mb-4">Summarizes resumes, auto-screens candidates, and schedules interviews.</p>
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>ATS integration</li>
                <li>Bias-mitigation controls</li>
                <li>Compliance exports</li>
              </ul>
              <p className="text-2xl font-bold text-blue-400 mb-4">$149 - $599/month</p>
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Talk to sales →</a>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((group) => (
            <section key={group.category}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{group.category}</h2>
              <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.title} className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition-colors">
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4 min-h-[64px]">{item.description}</p>
                    <p className="text-cyan-300 text-lg font-semibold mb-4">{item.price}</p>
                    <a href={item.cta.href} className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20">
                      {item.cta.label}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm">
            For full capabilities, visit our site at <a className="underline decoration-dotted hover:text-cyan-300" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
