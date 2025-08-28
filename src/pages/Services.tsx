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

        {/* New: AI Services & Solutions */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4">AI Services & Solutions</h2>
          <p className="text-gray-300 mb-10 max-w-4xl">From strategy to production MLOps, we deliver outcomes, not experiments.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">AI Strategy & Roadmapping</h3>
              <p className="text-gray-300 mb-4">Use-case discovery, ROI modeling, and architecture blueprints.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$8,000 - $35,000</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Explore engagements →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Custom LLM Apps & Integrations</h3>
              <p className="text-gray-300 mb-4">Build copilots, RAG search, and workflow agents integrated with your stack.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$15,000 - $150,000</p>
              <a href="https://ziontechgroup.com/research-development" className="text-cyan-300 hover:text-cyan-200 font-semibold">See R&D →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Computer Vision & OCR</h3>
              <p className="text-gray-300 mb-4">Detection, tracking, and document understanding for real-world operations.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$20,000 - $120,000</p>
              <a href="https://ziontechgroup.com/case-studies" className="text-cyan-300 hover:text-cyan-200 font-semibold">View case studies →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">MLOps & Platform Engineering</h3>
              <p className="text-gray-300 mb-4">Feature stores, CI/CD for models, observability, and governance.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$25,000 - $180,000</p>
              <a href="https://ziontechgroup.com/partners" className="text-cyan-300 hover:text-cyan-200 font-semibold">Our partners →</a>
            </div>
          </div>
        </div>

        {/* New: IT Services & Modernization */}
        <div className="mt-24 text-left">
          <h2 className="text-4xl font-bold mb-4">IT Services & Modernization</h2>
          <p className="text-gray-300 mb-10 max-w-4xl">End-to-end services to secure, scale, and streamline your technology footprint.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Cloud Cost Optimization</h3>
              <p className="text-gray-300 mb-4">FinOps audits, rightsizing, reserved instances, and tagging strategies.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$6,000 - $45,000</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Learn more →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Zero Trust Security</h3>
              <p className="text-gray-300 mb-4">Identity-first controls, microsegmentation, and continuous verification.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$12,000 - $95,000</p>
              <a href="https://ziontechgroup.com/advanced-cybersecurity" className="text-cyan-300 hover:text-cyan-200 font-semibold">Security services →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Data Platform Modernization</h3>
              <p className="text-gray-300 mb-4">Lakehouse design, ETL pipelines, and real-time analytics platforms.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$18,000 - $140,000</p>
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover:text-cyan-200 font-semibold">Get details →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Managed IT & Onsite Support</h3>
              <p className="text-gray-300 mb-4">SLAs, patching, endpoint management, and onsite troubleshooting.</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">$2,000 - $25,000/month</p>
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover:text-cyan-200 font-semibold">Contact us →</a>
            </div>
          </div>
        </div>

        {/* CTA and Contact */}
        <div className="mt-24 text-left">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Ready to start?</h3>
            <p className="text-gray-300 mb-6 max-w-3xl">Talk with our experts to scope a pilot or request a tailored quote. We respond within 24 hours.</p>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <a href="https://ziontechgroup.com/contact" className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 font-semibold">Book a consultation</a>
              <a href="tel:+13024640950" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">kleber@ziontechgroup.com</a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              Address: 364 E Main St STE 1008, Middletown, DE 19709 • Website: ziontechgroup.com
            </div>
          </div>
        </div>
        <div className="mt-16">
          <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            📞 Call +1 (302) 464-0950
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
