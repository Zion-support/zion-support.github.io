// app/services/[id]/page.tsx — Dynamic Service Detail Page
import { notFound } from 'next/navigation';
import { allServices, categoryMeta } from '@/data/servicesData';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({ id: service.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const service = allServices.find((s) => s.id === id);
  if (!service) return { title: 'Service Not Found' };

  const catLabel = categoryMeta[service.category]?.label ?? '';
  return {
    title: `${service.title} — ${catLabel}`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Zion Tech Group`,
      description: service.description,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = allServices.find((s) => s.id === id);

  if (!service) notFound();

  const catMeta = categoryMeta[service.category];
  const relatedServices = allServices
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-purple-400 transition">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{service.title}</span>
        </nav>

        {/* Hero */}
        <div className="glass-card mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 uppercase tracking-wider">
              {catMeta?.label}
            </span>
            <span className="text-xs text-slate-500">{service.subcategory}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{service.title}</h1>
          <p className="text-lg text-slate-300 mb-2">{service.subtitle}</p>
          <p className="text-slate-400 leading-relaxed max-w-3xl">{service.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Features */}
          <div className="lg:col-span-2 glass-card">
            <h2 className="text-2xl font-semibold text-white mb-6">Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-purple-400 mt-1 shrink-0">✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing + CTA */}
          <div className="space-y-6">
            <div className="glass-card">
              <h2 className="text-xl font-semibold text-white mb-4">Pricing</h2>
              <div className="space-y-3">
                {Object.entries(service.pricing).map(([tier, price]) => (
                  <div key={tier} className="flex justify-between items-center py-2 border-b border-slate-700/50 last:border-0">
                    <span className="text-slate-300">{tier}</span>
                    <span className="text-purple-300 font-semibold">{price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-3">Get Started</h3>
              <p className="text-slate-400 text-sm mb-4">
                Ready to get started? Contact us for a custom quote.
              </p>
              <div className="space-y-3">
                <a href="tel:+13024640950" className="btn-primary w-full text-center block">
                  ☎ +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary w-full text-center block">
                  ✉️ Email Us
                </a>
                <Link href="/configurator" className="btn-secondary w-full text-center block">
                  Get Custom Proposal →
                </Link>
              </div>
              <p className="text-slate-500 text-xs mt-4 text-center">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="glass-card mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <span className="text-green-400 text-lg shrink-0">✓</span>
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Related Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="glass-card hover:border-purple-500/50 transition group"
                >
                  <span className="text-xs text-slate-500">{s.subcategory}</span>
                  <h3 className="text-white font-semibold mt-1 group-hover:text-purple-400 transition">{s.title}</h3>
                  <p className="text-slate-400 text-sm mt-2 line-clamp-2">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how {service.title} can transform your business.
            Get a free consultation and custom proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg">
              ☎ +1 302 464 0950
            </a>
            <Link href="/configurator" className="btn-secondary text-lg">
              Get Custom Proposal →
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            📍 364 E Main St STE 1008, Middletown, DE 19709
          </p>
        </section>
      </div>
    </main>
  );
}
