import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const Page: React.FC = () => {
  return (<>
      <SEOOptimizer
        title="SetupTests"
        description="Professional setuptests services and solutions for your business needs."
        keywords={["setuptests","AI solutions","business automation","technology services"]}
        canonicalUrl="https://ziontechgroup.com/setuptests"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 neon-text">
              SetupTests
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional setuptests services and solutions for your business needs.
            </p>
            <div className="cyber-card p-8 max-w-4xl mx-auto"></div>
              <p className="text-gray-300">
                This page is under development. Please check back soon for more information about our setuptests services.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>)
  );
};

export default Page;
