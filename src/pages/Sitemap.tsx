import React from 'react';
import { SEO } from "@/components/SEO";

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Navigate our website easily with our comprehensive sitemap of all pages and services."
        keywords="sitemap, navigation, website structure, pages"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Sitemap</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Navigate our website easily with our comprehensive sitemap.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Website Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Main Pages</h3>
                <ul className="space-y-2 text-zion-blue-light">
                  <li><a href="/" className="hover:text-white">Home</a></li>
                  <li><a href="/about" className="hover:text-white">About</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                  <li><a href="/services" className="hover:text-white">Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2 text-zion-blue-light">
                  <li><a href="/services/ai-autonomous-systems" className="hover:text-white">AI Autonomous Systems</a></li>
                  <li><a href="/services/cybersecurity" className="hover:text-white">Cybersecurity</a></li>
                  <li><a href="/services/it-infrastructure" className="hover:text-white">IT Infrastructure</a></li>
                  <li><a href="/services/micro-saas" className="hover:text-white">Micro SAAS</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;