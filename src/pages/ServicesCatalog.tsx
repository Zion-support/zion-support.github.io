import React from 'react';
import { SEO   } from '@/components/SEO';

type Service = {
  name: string;
  path: string;
  summary: string;
  price: string;
  category: 'Micro SaaS' | 'IT Services' | 'AI Solutions';
};

const services: Service[] = [
  { name: 'Website AI Chatbot', path: '/services/website-ai-chatbot', summary: '24/7 on-site AI that answers, qualifies, and books meetings.', price: '$299–$899/mo', category: 'Micro SaaS' },
  { name: 'RAG Search', path: '/services/rag-search', summary: 'Private semantic search over your docs, wiki, and tickets.', price: '$199–$999/mo', category: 'AI Solutions' },
  { name: 'MLOps Pipeline', path: '/services/mlops-pipeline', summary: 'CI/CD for ML with monitoring, drift, and rollback.', price: '$1.5k–$8k/mo', category: 'AI Solutions' },
  { name: 'Ecommerce Personalization', path: '/services/ecommerce-personalization', summary: 'Recommendations, bundles, and search tuning.', price: '$499–$2k/mo', category: 'AI Solutions' },
  { name: 'API Monitoring & Status', path: '/services/api-monitoring', summary: 'SLA-grade uptime, SLOs, and public status pages.', price: '$79–$249/mo', category: 'Micro SaaS' },
  { name: 'GDPR & Cookie Compliance', path: '/services/gdpr-cookie-compliance', summary: 'Consent banners, scanners, and audit logs.', price: '$49–$149/mo', category: 'Micro SaaS' },
  { name: 'AI Proofreading Studio', path: '/services/ai-proofreading-studio', summary: 'Tone, brand, and compliance checks for content.', price: '$29–$149/mo/seat', category: 'Micro SaaS' },
  { name: 'AI Meeting Notes & Summaries', path: '/services/ai-meeting-notes', summary: 'Auto-capture meetings, summaries, action items, and CRM sync.', price: '$19–$79/user/mo', category: 'Micro SaaS' },
  { name: 'Smart Forms & Intake', path: '/services/smart-forms-intake', summary: 'Conditional logic, AI validation, and workflow routing.', price: '$49–$299/mo', category: 'Micro SaaS' },
  { name: 'Social Proof & Reviews Widget', path: '/services/reviews-widget', summary: 'Aggregate reviews, schema rich-snippets, and trust badges.', price: '$19–$99/mo', category: 'Micro SaaS' },
  { name: 'IT Infrastructure', path: '/services/it-infrastructure', summary: 'Networks, servers, and endpoint management.', price: 'Custom/SOW', category: 'IT Services' },
  { name: 'Cloud & DevOps', path: '/services/cloud-devops', summary: 'Kubernetes, IaC, CI/CD and observability.', price: '$8k+ projects', category: 'IT Services' },
  // New Micro SaaS offerings
  { name: 'AI Meeting Notes & Summaries', path: '/services/ai-meeting-notes', summary: 'Auto-capture meetings, summaries, action items, and CRM sync.', price: '$19–$79/user/mo', category: 'Micro SaaS' },
  { name: 'Smart Forms & Intake', path: '/services/smart-forms-intake', summary: 'Conditional logic, AI validation, and workflow routing.', price: '$49–$299/mo', category: 'Micro SaaS' },
  { name: 'Invoice AI & Reconciliation', path: '/services/invoice-ai', summary: 'OCR, line-item extraction, coding rules, and approvals.', price: '$149–$699/mo', category: 'Micro SaaS' },
  { name: 'AI Sales Email Warmer', path: '/services/ai-email-warmer', summary: 'Inbox warming, domain health, and deliverability coaching.', price: '$39–$129/mo', category: 'Micro SaaS' },
  { name: 'Social Proof & Reviews Widget', path: '/services/reviews-widget', summary: 'Aggregate reviews, schema rich-snippets, and trust badges.', price: '$19–$99/mo', category: 'Micro SaaS' },
  // New AI Solutions
  { name: 'Customer Support Copilot', path: '/services/support-copilot', summary: 'LLM agent for ticket triage, suggested replies, and macros.', price: '$299–$1.5k/mo', category: 'AI Solutions' },
  { name: 'Document Intelligence/RAG Hub', path: '/services/document-intelligence', summary: 'Pipelines for ingestion, chunking, embeddings, and evals.', price: '$499–$2.5k/mo', category: 'AI Solutions' },
  { name: 'Voice IVR with LLM', path: '/services/voice-ivr-llm', summary: 'Natural language phone IVR integrated to CRM and support.', price: '$399–$1.2k/mo + usage', category: 'AI Solutions' },
  { name: 'AI Forecasting & Demand Planning', path: '/services/ai-forecasting', summary: 'Time-series and causal models for revenue and inventory.', price: '$1k–$6k/mo', category: 'AI Solutions' },
  { name: 'Security AI: Threat Triage', path: '/services/security-ai-triage', summary: 'LLM-assisted SOC triage, enrichment, and runbooks.', price: '$799–$3k/mo', category: 'AI Solutions' },
  // New IT Services
  { name: 'Zero Trust Assessment', path: '/services/zero-trust-assessment', summary: 'Maturity model, identity, network, and device posture.', price: '$6k–$25k fixed', category: 'IT Services' },
  { name: 'Kubernetes Platform Ready', path: '/services/k8s-platform-ready', summary: 'Cluster design, GitOps, observability and cost guardrails.', price: '$12k–$60k project', category: 'IT Services' },
  { name: 'Data Warehouse Modernization', path: '/services/dwh-modernization', summary: 'Snowflake/BigQuery migration, ELT, lineage and governance.', price: '$15k–$120k project', category: 'IT Services' },
  { name: 'SOC2/ISO 27001 Readiness', path: '/services/soc2-iso-readiness', summary: 'Policies, controls, evidence automation, and gap closure.', price: '$8k–$45k project', category: 'IT Services' },
  { name: 'FinOps Advisory Sprint', path: '/services/finops-advisory-sprint', summary: '90-day cost optimization with KPIs and automation.', price: '$9k–$35k fixed', category: 'IT Services' }
];

const groupByCategory = (items: anyService[])   => items.reduce<Record<string, any>>((acc, s) => {
  (acc[s.category] = acc[s.category] || []).push(s);
  return acc;
}, {});

const ServicesCatalog: React.FC = (): JSX.Element => {
  const grouped = groupByCategory(services);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Services Catalog - Zion Tech Group"
        description="Comprehensive catalog of AI services, IT solutions, and micro SaaS products. Explore our innovative solutions with transparent pricing and clear outcomes."
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Complete Service Catalog</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services Catalog
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Explore our comprehensive catalog of AI-powered services, enterprise IT solutions, and innovative micro SaaS products. Each solution is designed to deliver measurable results and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Get Custom Quote
            </a>
            <a 
              href="tel:+13024640950" 
              className="border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-16 space-y-10">
        {Object.entries(grouped).map(([category, list]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid md: anygrid-cols-3 gap-6">
              {list.map(item   => (
                <a key={item.name} href={`https://ziontechgroup.com${item.path}`} className="block p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-600 transition">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-slate-300 text-sm mb-3">{item.summary}</p>
                  <p className="text-cyan-400 text-sm">Typical pricing: {item.price}</p>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you choose the right solutions and implement them for maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a 
              href="tel:+13024640950" 
              className="border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

