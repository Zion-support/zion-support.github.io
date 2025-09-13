'use client';

import React, { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  title?: string;
  description?: string;
}

const NewsletterSignup = ({
  variant = 'default',
  title = 'Stay Ahead with AI Insights',
  description = 'Get the latest AI trends, case studies, and technical guides delivered to your inbox weekly.'
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would call your newsletter API here
      console.log('Newsletter signup:', email);
      
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`${
        variant === 'compact' ? 'p-4' : variant === 'inline' ? 'p-3' : 'p-8'
      } bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200`}>
        <div className="text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Welcome to our community!</h3>
          <p className="text-green-800 text-sm">
            You'll receive our latest AI insights and updates every week.
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="text-3xl">📧</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 disabled:opacity-50"
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </button>
          </form>
        </div>
        {error && (
          <p className="text-red-600 text-sm mt-2">{error}</p>
        )}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">📬</div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-3 py-1 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700 disabled:opacity-50"
            >
              {isSubmitting ? '...' : 'Join'}
            </button>
          </form>
        </div>
        {error && (
          <p className="text-red-600 text-xs mt-1">{error}</p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-5xl mb-4">🚀</div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-indigo-200 mb-8">{description}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {error && (
            <p className="text-red-200 text-sm mt-2">{error}</p>
          )}
        </form>
        
        <p className="text-sm text-indigo-200 mt-4">
          Join 10,000+ AI professionals. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;