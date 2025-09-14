"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "inline";
  className?: string;
}

export function NewsletterSignup({ variant = "default"className = "" }: NewsletterSignupProps) {
  const [emailsetEmail] = useState("");
  const [isSubmittingsetIsSubmitting] = useState(false);
  const [isSubscribedsetIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center gap-2 text-green-400 font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Successfully subscribed!
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`bg-white/5 rounded-lg p-4 border border-white/10 ${className}`}>
        <h3 className="text-sm font-semibold text-white mb-2">Stay Updated</h3>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "..." : "Subscribe"}
          </button>
        </form>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <span className="text-white/70 text-sm">Get updates:</span>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "..." : "Subscribe"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-white/70 mb-6 max-w-md mx-auto">
          Get the latest insights on AIWeb3and digital economies delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        <p className="text-xs text-white/50 mt-3">
          No spamunsubscribe at any time.
        </p>
      </div>
    </div>
  );
}