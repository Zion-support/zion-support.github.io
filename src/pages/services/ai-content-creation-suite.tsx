import React from 'react';
import { SEO } from '../../components/SEO';
import { Brain, CheckCircle, Rocket, Zap, Shield } from 'lucide-react';

export default function AIContentCreationSuite() {
  return (
    <>
      <SEO title="AI Content Creation Suite" description="AI-powered content creation for blogs, social media, ads, and SEO with human-in-the-loop quality." />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white mb-4">
              <Brain className="w-7 h-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">AI Content Creation Suite</h1>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">Generate on-brand content for blogs, landing pages, social media, emails, and ads. Includes tone control, SEO optimization, approval workflows, and CMS integrations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[{title:'On-brand Generation',desc:'Style guides, examples, tone and persona adherence',icon:Zap},{title:'SEO Optimization',desc:'Keywords, meta, schema, internal links',icon:Rocket},{title:'Compliance & Review',desc:'Human-in-the-loop, versioning, audit trail',icon:Shield}].map(({title,desc,icon:Icon})=> (
              <div key={title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <Icon className="w-6 h-6 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">What you get</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Article, social, and email generators with templates',
                  'Brand voice memory and prohibited phrase filters',
                  'SEO drafts with headings, schema hints, and FAQs',
                  'Editorial calendar and approvals workflow',
                  'CMS connectors (WordPress, Webflow) and exports',
                  'Analytics for performance and topic suggestions'
                ].map((item)=> (
                  <li key={item} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing</h3>
              <ul className="text-gray-800 space-y-2 mb-4">
                <li><strong>Starter</strong>: $199/month – 50 drafts, 2 seats</li>
                <li><strong>Growth</strong>: $499/month – 250 drafts, 10 seats</li>
                <li><strong>Enterprise</strong>: from $1,999/month – SSO, SOC2, SLA</li>
                <li><strong>Custom</strong>: Contact us for bespoke workflows</li>
              </ul>
              <div className="space-y-2">
                <a href="/contact" className="inline-flex justify-center w-full px-4 py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">Request Demo</a>
                <a href="mailto:kleber@ziontechgroup.com" className="inline-flex justify-center w-full px-4 py-2 rounded-lg border border-indigo-200 text-indigo-700 hover:bg-white">Email: kleber@ziontechgroup.com</a>
                <a href="tel:+13024640950" className="inline-flex justify-center w-full px-4 py-2 rounded-lg border border-indigo-200 text-indigo-700 hover:bg-white">Call: +1 302 464 0950</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

