import React from 'react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          Help Center
        </h1>
        
        <div className="max-w-6xl mx-auto">
          {/* Search Section */}
          <div className="bg-zion-slate-dark/50 p-8 rounded-lg border border-zion-cyan/20 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">How can we help you?</h2>
              <p className="text-zion-slate-light mb-6">
                Search our knowledge base or browse categories to find the answers you need
              </p>
              <div className="max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="w-full px-6 py-4 bg-white/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
          
          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Getting Started</h3>
              <p className="text-zion-slate-light mb-4">
                New to Zion Tech Group? Learn the basics and get up and running quickly.
              </p>
              <Link to="/getting-started" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold text-white mb-3">Billing & Payments</h3>
              <p className="text-zion-slate-light mb-4">
                Questions about pricing, billing, or payment methods? Find answers here.
              </p>
              <Link to="/billing" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical Support</h3>
              <p className="text-zion-slate-light mb-4">
                Need help with our services or experiencing technical issues?
              </p>
              <Link to="/technical-support" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
              <p className="text-zion-slate-light mb-4">
                Comprehensive guides and documentation for all our services.
              </p>
              <Link to="/documentation" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Account Management</h3>
              <p className="text-zion-slate-light mb-4">
                Manage your account, profile, and preferences.
              </p>
              <Link to="/account" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-white mb-3">Contact Support</h3>
              <p className="text-zion-slate-light mb-4">
                Can't find what you're looking for? Contact our support team directly.
              </p>
              <Link to="/contact" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                Contact Us →
              </Link>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="bg-zion-slate-dark/50 p-8 rounded-lg border border-zion-cyan/20 mb-12">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-zion-cyan/20 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">How do I get started with Zion Tech Group services?</h3>
                <p className="text-zion-slate-light">
                  Getting started is easy! Simply contact us through our contact form or call us at +1 302 464 0950. 
                  Our team will schedule a consultation to understand your needs and provide a customized solution.
                </p>
              </div>
              
              <div className="border-b border-zion-cyan/20 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">What are your pricing models?</h3>
                <p className="text-zion-slate-light">
                  We offer flexible pricing models including project-based, subscription, and custom enterprise solutions. 
                  Pricing varies based on the scope and complexity of your requirements.
                </p>
              </div>
              
              <div className="border-b border-zion-cyan/20 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Do you provide ongoing support?</h3>
                <p className="text-zion-slate-light">
                  Yes, we provide comprehensive ongoing support including 24/7 monitoring, maintenance, updates, 
                  and technical assistance for all our solutions.
                </p>
              </div>
              
              <div className="border-b border-zion-cyan/20 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">What industries do you serve?</h3>
                <p className="text-zion-slate-light">
                  We serve a wide range of industries including healthcare, finance, manufacturing, retail, 
                  education, government, and more. Our solutions are adaptable to any sector.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Support */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-zion-slate-light mb-6">
              Our support team is here to help you succeed with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Contact Support
              </Link>
              <Link 
                to="/faq" 
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
