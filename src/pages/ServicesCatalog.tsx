import React from 'react';
import EnhancedSEOHead from '../components/EnhancedSEOHead';

const rows = [
  { group: 'AI', name: 'RAG Chatbot for Documents', price: 'Setup $2k–$8k + $99–$499/mo', link: '/services/ai-virtual-assistant' }
  { group: 'AI', name: 'Predictive Analytics', price: 'Project $3k–$12k', link: '/services/ai-data-analytics' }
  { group: 'AI', name: 'Intelligent Document Processing (IDP)', price: 'Project $4k–$15k', link: '/services/ai-intelligent-document-processing' }
  { group: 'Automation', name: 'Workflow Automation', price: 'Project $1.5k–$8k', link: '/services/ai-workflow-automation' }
  { group: 'Automation', name: 'Appointment Scheduler (Healthcare)', price: '$99–$499/mo', link: '/services/smart-appointment-scheduler' }
  { group: 'IT', name: 'Cloud Cost Optimization', price: 'Project $1.5k–$8k', link: '/services/cloud' }
  { group: 'IT', name: 'Landing Zone + IaC', price: 'Project $5k–$20k', link: '/services/cloud' }
  { group: 'Security', name: 'Security Assessment', price: 'Project $2k–$10k', link: '/services/security' }
  { group: 'Security', name: 'SOC-lite (24/5)', price: '$999–$3,999/mo', link: '/services/security' }
];

const ServicesCatalog: React.FC = () => {
  return (
    <>
      <EnhancedSEOHead 
        title="Services Catalog - Zion Tech Group"
        description="Catalog of AI, automation, micro SaaS, and IT services with transparent pricing."
        keywords="services pricing, AI pricing, IT rates, micro SaaS pricing" 
        canonical="https://ziontechgroup.com/services/catalog"
      />
      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Services Catalog</h1>
            <p className="text-gray-700 mb-6">Average market prices shown; final quotes depend on scope and SLAs.</p>
            <div className="overflow-x-auto bg-white border rounded-lg shadow-sm">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 text-left text-sm text-gray-600">
                    <th className="px-4 py-3 font-medium">Group</th>
                    <th className="px-4 py-3 font-medium">Service</th>
                    <th className="px-4 py-3 font-medium">Typical Price</th>
                    <th className="px-4 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.group + r.name} className="border-t">
                      <td className="px-4 py-3 text-sm text-gray-700">{r.group}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{r.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{r.price}</td>
                      <td className="px-4 py-3 text-sm">
                        <a href={r.link} className="text-blue-600 hover:underline mr-4">Learn more</a>
                        <a href="/contact" className="text-blue-600 hover:underline">Get a quote</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-blue-900">Need custom pricing or a bundled offer?</p>
                <p className="text-blue-800">Call +1 302 464 0950 or email kleber@ziontechgroup.com</p>
              </div>
              <div className="flex gap-3">
                <a href="/contact" className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Contact Sales</a>
                <a href="/demo" className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50">Book a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesCatalog;