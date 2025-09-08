import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { realServicesQ42025 } from '@/../data/real-services-q4-2025';

const service = realServicesQ42025.find(s => s.id === 'return-management-saas');

const ReturnManagementSaaS: React.FC = () => {
  if (!service) return null;

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO title={`${service.name} - Zion Tech Group`} description={service.description} />
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{service.name}</h1>
            <p className="mt-3 text-lg text-slate-300">{service.tagline}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="card-futuristic">
                <h2 className="text-2xl font-semibold text-white">Overview</h2>
                <p className="mt-3 text-slate-300">{service.description}</p>
                <div className="mt-4 text-sm text-slate-400">Market position: {service.marketPosition}</div>
              </div>

              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white">Key Features</h3>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
                  {service.features.map((f) => (
                    <li key={f} className="p-2 rounded-lg bg-white/5">{f}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="card-futuristic">
                  <h4 className="font-semibold text-white">Integrations</h4>
                  <div className="mt-2 flex flex-wrap gap-2 text-slate-200">
                    {service.integrations?.map((i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5">{i}</span>
                    ))}
                  </div>
                </div>
                <div className="card-futuristic">
                  <h4 className="font-semibold text-white">Technology</h4>
                  <div className="mt-2 flex flex-wrap gap-2 text-slate-200">
                    {service.technology?.map((i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5">{i}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card-futuristic">
                <h4 className="font-semibold text-white">ROI & Proof</h4>
                <div className="mt-2 text-slate-200">{service.roi}</div>
                <div className="mt-2 text-slate-400 text-sm">Customers: {service.customers} • Rating: {service.rating} ⭐ • Reviews: {service.reviews}</div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="card-futuristic">
                <div className="text-3xl font-bold text-white">{service.price}<span className="text-slate-400 text-base">{service.period}</span></div>
                <a href={service.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex w-full justify-center btn-futuristic">Visit Product Page</a>
                <Link to="/request-quote" className="mt-3 inline-flex w-full justify-center btn-neon">Request a Quote</Link>
                <div className="mt-4 text-sm text-slate-300">
                  Trial: {service.trialDays} days • Setup time: {service.setupTime}
                </div>
              </div>

              <div className="card-futuristic text-slate-300 text-sm">
                <div className="font-semibold text-white">Contact</div>
                <div className="mt-2">Phone: {service.contactInfo.mobile}</div>
                <div>Email: {service.contactInfo.email}</div>
                <div>Address: {service.contactInfo.address}</div>
                <a className="text-cyan-300" href={service.contactInfo.website} target="_blank" rel="noreferrer">{service.contactInfo.website}</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnManagementSaaS;

