"use client";
import React{ useState } from 'react';
MailSendCheckCircleStarZapGiftArrowRight

const benefits = [
  "Exclusive access to new content",
  "Early bird pricing on services",
  "Weekly tech insights & trends",
  "Free consultation calls",
  "Priority support & updates"
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTOTechCorp",
    content: "The weekly insights have been invaluable for our AI strategy. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "CEOInnovateLabs",
    content: "Early access to new features has given us a competitive edge. Amazing value!",
    rating: 5
  }
];

export default function NewsletterSignupForm() {
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
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Future!</h3>
        <p className="text-green-100 mb-6">
          'You', 've successfully subscribed to our newsletter. Check your email for a confirmation link.
        </p>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-green-100 text-sm">
            🎉 'You', 'll receive your first update within 24 hours with exclusive content and early access to new features!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              Exclusive Newsletter
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Ahead of the
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to the latest AI innovationsquantum computing breakthroughsand automation solutions delivered directly to your inbox.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefitindex) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonialindex) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-2">"{testimonial.content}"</p>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Join 10,000+ Subscribers</h3>
              <p className="text-gray-300">Get instant access to exclusive content and updates</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                />
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold">Welcome Bonus</span>
                </div>
                <p className="text-purple-100 text-sm">
                  Get our exclusive "AI Implementation Guide 2026" PDF worth $299 - completely free!
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Subscribe Now
                  </>
                )}
              </button>

              <p className="text-gray-400 text-xs text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            {/* Social Proof */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  <span>10,000+ subscribers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}