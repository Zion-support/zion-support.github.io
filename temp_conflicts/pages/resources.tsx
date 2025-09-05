import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <UltraFuturisticBackground intensity=&quot;high&quot; variant=&quot;quantum&quot;>
      <SEO title=&quot;Resources | Zion Tech Group&quot; description=&quot;Guides, case studies, support, training, and market pricing links.&quot; canonical=&quot;https://ziontechgroup.com/resources/&quot; />
      <div className=&quot;container mx-auto px-4 py-16 text-white&quot;>
        <div className=&quot;text-center max-w-3xl mx-auto&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Resources</h1>
          <p className=&quot;mt-3 text-gray-300&quot;>Docs, guides, and references to help you evaluate and deploy faster. Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
        </div>
        <div className=&quot;mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {[
            { name: 'Support Center', href: '/support', blurb: 'Help, FAQs, and contact options.' },
            { name: 'Training & Certification', href: '/training', blurb: 'Workshops and curated curricula.' },
            { name: 'Market Pricing', href: '/market-pricing', blurb: 'Vendor links and typical budgets.' },
            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' },
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }
          ].map((it) => (
            <Link key={it.href} href={it.href} className=&quot;p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 transition-colors block&quot;>
              <div className=&quot;text-sm text-gray-400&quot;>Resource</div>
              <h3 className=&quot;text-xl font-semibold text-white&quot;>{it.name}</h3>
              <p className=&quot;mt-1 text-gray-300&quot;>{it.blurb}</p>
              <div className=&quot;mt-3 text-cyan-300&quot;>Open →</div>
            </Link>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  );
};

export default ResourcesPage;
