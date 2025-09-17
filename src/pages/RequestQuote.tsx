import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function RequestQuote() {
  return (
    <>
      <SEO 
        title="Request Quote - Zion Tech Group" 
        description="Get a personalized quote for our technology solutions and services." 
        keywords="quote, pricing, services, Zion Tech Group"
        url="https://ziontechgroup.com/request-quote"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Request Quote</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get a personalized quote for our technology solutions and services
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                      placeholder="First name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white rounded-lg focus:outline-none focus:border-zion-cyan">
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                    placeholder="Describe your project requirements"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-zion-cyan text-zion-blue-dark py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}