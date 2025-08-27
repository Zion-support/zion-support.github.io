import React from 'react';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h1>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">What services does Zion Tech Group offer?</h3>
            <p className="text-zion-slate-light">
              We offer comprehensive technology solutions including AI services, cybersecurity, cloud infrastructure, 
              digital transformation, quantum computing, blockchain solutions, and more.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">How can I get started with your services?</h3>
            <p className="text-zion-slate-light">
              Contact us through our contact form or call us at +1 302 464 0950. Our team will schedule a 
              consultation to understand your needs and provide a customized solution.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">What are your pricing models?</h3>
            <p className="text-zion-slate-light">
              We offer flexible pricing models including project-based, subscription, and custom enterprise solutions. 
              Pricing varies based on the scope and complexity of your requirements.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">Do you provide ongoing support?</h3>
            <p className="text-zion-slate-light">
              Yes, we provide comprehensive ongoing support including 24/7 monitoring, maintenance, updates, 
              and technical assistance for all our solutions.
            </p>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-3">What industries do you serve?</h3>
            <p className="text-zion-slate-light">
              We serve a wide range of industries including healthcare, finance, manufacturing, retail, 
              education, government, and more. Our solutions are adaptable to any sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}