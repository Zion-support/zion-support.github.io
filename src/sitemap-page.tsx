import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const Page: React.FC = () => {
  return (
    <div>

      <SEOOptimizer
        title="Sitemap Page",
        description="Professional sitemap page services and solutions for your business needs.",
        keywords = {
["sitemap page","AI solutions","business automation","technology services"]
};
    </div>
        canonicalUrl="https://ziontechgroup.com/sitemap-page"
      /></SEOOptimizer>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <Navigation /></Navigation>
        <main className="container mx-autopx-4py-16pt-24"></main>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-5xl font-boldtext-whitemb-8neon-text">
            Sitemap Page
            </h1>
            <p className="text-xltext-gray-300mb-8">
            Professional sitemap page services and solutions for your business needs.
            </p>
            <div className="cyber-cardp-8max-w-4xlmx-auto"></div>
              <p className="text-gray-300">
            This page is under development. Please check back soon for more information about our sitemap page services.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
    </div>
  );
};

export default Page;
