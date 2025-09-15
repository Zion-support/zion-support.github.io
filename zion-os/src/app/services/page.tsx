// @ts-nocheck
import React from 'react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Zion Tech Group Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions for modern businesses. From AI-powered automation to enterprise IT infrastructure.
          </p>
          <div className="mt-8">
            <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mr-4">Call Now: +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">Get Quote</a>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <span className="mr-8">📱 +1 302 464 0950</span>
          <span className="mr-8">✉️ kleber@ziontechgroup.com</span>
          <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🤖 AI Services & Solutions</h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">Cutting-edge artificial intelligence solutions to transform your business operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3">ZionGPT Core</h3>
              <p className="text-zinc-300 mb-4">Enterprise-grade AI assistant with custom knowledge base integration and workflow automation.</p>
              <a href="/services/ai" className="block mt-4 text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-3">AI Content Generation</h3>
              <p className="text-zinc-300 mb-4">Automated content creation for blogs, social media, marketing materials, and technical documentation.</p>
              <a href="/services/ai" className="block mt-4 text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Analytics</h3>
              <p className="text-zinc-300 mb-4">Predictive analytics, trend forecasting, and intelligent business insights powered by machine learning.</p>
              <a href="/services/ai" className="block mt-4 text-blue-400 hover:text-blue-300 text-sm">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Let's discuss how our AI, IT, blockchain, and SAAS solutions can drive your digital transformation and business growth.</p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">📞 Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">✉️ Schedule Consultation</a>
            </div>
            <p className="text-blue-100 text-sm">📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https://ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
