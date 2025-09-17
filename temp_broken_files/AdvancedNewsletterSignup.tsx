"use client";
import React{ useState } from 'react';

export default function AdvancedNewsletterSignup() {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail(', ');
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to the AI Revolution!</h3>
        <p className="text-green-100 mb-4">
          'You', 're now subscribed to our exclusive AI breakthrough updates. Check your email for confirmation.
        </p>
        <div className="text-sm text-green-200">
          Get ready for insights that will transform your business!
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the AI Revolution
          </h2>
          <p className="text-xl text-blue-100 mb-2">
            Get exclusive access to breakthrough AI insightscase studiesand implementation guides
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <span className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Weekly AI breakthrough updates
            </span>
            <span className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Exclusive case studies
            </span>
            <span className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Implementation guides
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-900 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </>
              ) : (
                'Subscribe Now'
              )}
            </button>
          </div>
          
          <div className="text-center text-blue-200 text-sm">
            <p>Join 50,000+ business leaders already transforming with AI</p>
            <p className="mt-1">No spamunsubscribe anytime</p>
          </div>
        </form>

        {/* Social Proof */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="text-center text-blue-200 text-sm mb-4">
            Trusted by leading organizations worldwide
          </div>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-white font-bold text-lg">Fortune 500</div>
            <div className="text-white font-bold text-lg">Startups</div>
            <div className="text-white font-bold text-lg">Enterprises</div>
            <div className="text-white font-bold text-lg">Governments</div>
          </div>
        </div>
      </div>
    </div>
  );
}