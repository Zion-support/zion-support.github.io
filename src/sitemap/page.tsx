import React from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

const SitemapPage: React.FC = () => {
  const sitemapXml = generateSitemap();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Sitemap
          </h1>
          
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              XML Sitemap
            </h2>
            <p className="text-gray-300 mb-4">
              This sitemap helps search engines discover and index all pages on our website.
            </p>
            
            <div className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {sitemapXml}
              </pre>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="/sitemap.xml"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                download="sitemap.xml"
              >
                Download XML Sitemap
              </a>
              
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                Main Pages
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-purple-400/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                AI Services
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/ai-services" className="hover:text-purple-400 transition-colors">AI Services</a></li>
                <li><a href="/machine-learning" className="hover:text-purple-400 transition-colors">Machine Learning</a></li>
                <li><a href="/nlp" className="hover:text-purple-400 transition-colors">NLP</a></li>
                <li><a href="/computer-vision" className="hover:text-purple-400 transition-colors">Computer Vision</a></li>
                <li><a href="/quantum-ai" className="hover:text-purple-400 transition-colors">Quantum AI</a></li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-green-400/20">
              <h3 className="text-xl font-semibold text-green-400 mb-3">
                IT Services
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/it-services" className="hover:text-green-400 transition-colors">IT Services</a></li>
                <li><a href="/cloud-services" className="hover:text-green-400 transition-colors">Cloud Services</a></li>
                <li><a href="/cybersecurity" className="hover:text-green-400 transition-colors">Cybersecurity</a></li>
                <li><a href="/devops" className="hover:text-green-400 transition-colors">DevOps</a></li>
                <li><a href="/database-services" className="hover:text-green-400 transition-colors">Database Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;