'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getServiceById } from '../data/services';

const AIChatbotBuilderPage: React.FC = () => {
  const service = getServiceById('ai-chatbot-builder');

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 holographic-text futuristic-glow">
              {service.name}
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium neon-glow">
              {service.shortDescription}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center quantum-entanglement">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$49<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>1,000 conversations/month</li>
                <li>5 chatbots</li>
                <li>Basic analytics</li>
                <li>Email support</li>
                <li>Standard templates</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>
            <div className="cyber-card hologram-card p-8 text-center quantum-entanglement futuristic-glow">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-4">$149<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>10,000 conversations/month</li>
                <li>Unlimited chatbots</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
                <li>Custom branding</li>
                <li>API integration</li>
                <li>Multi-language support</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>
            <div className="cyber-card hologram-card p-8 text-center quantum-entanglement">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-orange-400 mb-4">$399<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Unlimited conversations</li>
                <li>White-label solution</li>
                <li>Custom integrations</li>
                <li>Dedicated support</li>
                <li>Advanced AI training</li>
                <li>Custom development</li>
                <li>SLA guarantee</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 quantum-entanglement">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our AI Chatbot Builder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 quantum-entanglement">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.useCases.map((useCase, index) => (
              <div key={index} className="cyber-card hologram-card p-6 quantum-entanglement">
                <div className="text-2xl mb-3">💼</div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Market Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Market Comparison</h2>
          <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Market Average</h3>
                <div className="text-3xl font-bold text-gray-400 mb-2">${service.marketPrice.average}</div>
                <p className="text-gray-300">per month</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Our Price</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">${service.pricing.starting}</div>
                <p className="text-gray-300">per month</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">You Save</h3>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  ${service.marketPrice.average - service.pricing.starting}
                </div>
                <p className="text-gray-300">per month</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8 text-center quantum-entanglement">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">Ready to Build Your AI Chatbot?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using our AI Chatbot Builder to automate customer support and boost sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
            <div className="mt-6 text-gray-300">
              <p>📧 kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIChatbotBuilderPage;