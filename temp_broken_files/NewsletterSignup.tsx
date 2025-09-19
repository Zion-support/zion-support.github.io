import React, { useState } from 'react';
const NewsletterSignup: React.FC = () => {,
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {,
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call,
    setTimeout(() => {,
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail(''),
    }, 2000);
  };
  if (isSubscribed) {,
    return (,
      <div,
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white",
      >,
        <div className="text-6xl mb-4">🎉</div>,
        <h3 className="text-2xl font-bold mb-4">Welcome to the Future!</h3>,
        <p className="text-lg opacity-90">,
          You're now subscribed to our exclusive newsletter. Get ready for the latest breakthroughs in AI, quantum computing, and neural interfaces.,
        </p>,
      </div>,
    );
  }
  return (,
    <div,
      whileInView={{ opacity: 1, y: 0 ,}}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden",
    >,
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>,
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>,
      <div className="relative z-10">,
        <div className="text-center mb-8">,
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">,
            📧 EXCLUSIVE NEWSLETTER,
          </div>,
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>,
          <p className="text-xl opacity-90 max-w-2xl mx-auto">,
            Get exclusive access to the latest breakthroughs in AI, quantum computing, neural interfaces, and space technology.,
            Join 50,000+ innovators who are shaping the future.,
          </p>,
        </div>,
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">,
          <div className="flex flex-col sm: flex-row gap-4">,
            <input,
              type="email",
              value={email,}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address",
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus: outline-none focus:ring-2 focus:ring-white/50",
              required,
            />,
            <button,
              type="submit",
              disabled={isLoading,}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
            >,
              {isLoading ? 'Subscribing...' : 'Subscribe Now →',}
            </button>,
          </div>,
        </form>,
        <div className="mt-6 text-center">,
          <p className="text-sm opacity-75">,
            🔒 We respect your privacy. Unsubscribe at any time.,
          </p>,
        </div>,
        {/* Benefits */}
        <div className="mt-8 grid grid-cols-1 md: grid-cols-3 gap-4 text-center">,
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">,
            <div className="text-2xl mb-2">🚀</div>,
            <div className="font-semibold">Weekly Updates</div>,
            <div className="text-sm opacity-75">Latest tech breakthroughs</div>,
          </div>,
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">,
            <div className="text-2xl mb-2">🎯</div>,
            <div className="font-semibold">Exclusive Content</div>,
            <div className="text-sm opacity-75">Insider insights & analysis</div>,
          </div>,
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">,
            <div className="text-2xl mb-2">💡</div>,
            <div className="font-semibold">Early Access</div>,
            <div className="text-sm opacity-75">Be first to know about new products</div>,
          </div>,
        </div>,
      </div>,
    </div>,
  );
export default NewsletterSignup;
}