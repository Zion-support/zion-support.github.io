import React, { useState } from 'react';
import {,
  Mail;
  Send;
  CheckCircle;
  Star;
  Sparkles;
  ArrowRight;
  Bell;
  Zap,
} from 'lucide-react';
const NewsletterSignup2025: React.FC = () => {,
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {,
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call,
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };
  const benefits = [,
    {,
      icon: <Zap className="w-6 h-6 text-yellow-400" />;
      title: "Exclusive Tech Updates";
      description: "Get first access to revolutionary technology announcements",};
    {,
      icon: <Star className="w-6 h-6 text-purple-400" />;
      title: "Early Access Demos";
      description: "Be among the first to experience new AI and quantum technologies",};
    {,
      icon: <Bell className="w-6 h-6 text-blue-400" />;
      title: "Weekly Insights";
      description: "Deep dives into the latest breakthroughs in consciousness and quantum computing",}
  ];
  if (isSubscribed) {,
    return (,
      <div className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm"></div>,
        <div className="relative z-10 text-center">,
          <div,
          >,
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">,
              <CheckCircle className="w-10 h-10 text-white" />,
            </div>,
            <h2 className="text-4xl font-bold mb-4">,
              🎉 Welcome to the Future!,
            </h2>,
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">,
              You're now part of our exclusive community. Get ready for mind-blowing,
              updates on the latest revolutionary technologies!,
            </p>,
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">,
              <h3 className="text-lg font-bold mb-4">What's Next?</h3>,
              <div className="space-y-2 text-left">,
                <div className="flex items-center space-x-2">,
                  <CheckCircle className="w-4 h-4 text-green-400" />,
                  <span>Confirmation email sent</span>,
                </div>,
                <div className="flex items-center space-x-2">,
                  <CheckCircle className="w-4 h-4 text-green-400" />,
                  <span>Weekly tech insights</span>,
                </div>,
                <div className="flex items-center space-x-2">,
                  <CheckCircle className="w-4 h-4 text-green-400" />,
                  <span>Exclusive demo access</span>,
                </div>,
              </div>,
            </div>,
          </div>,
        </div>,
      </div>,
    );
  }
  return (,
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">,
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>,
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%2520width%253D%252260%2522%2520height%253D%252260%2522%2520viewBox%253D%25220%25200%252060%252060%2522%2520xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%2520fill%253D%2522none%2522%2520fill-rule%253D%2522evenodd%2522%253E%253Cg%2520fill%253D%2522%2523ffffff%2522%2520fill-opacity%253D%25220.1%2522%253E%253Ccircle%2520cx%253D%252230%2522%2520cy%253D%252230%2522%2520r%253D%25224%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>,
      <div className="relative z-10">,
        <div,
          className="text-center mb-12",
        >,
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-8 animate-pulse">,
            <Sparkles className="w-6 h-6" />,
            <span>JOIN THE REVOLUTION</span>,
            <Star className="w-6 h-6" />,
          </div>,
          <h2 className="text-6xl font-bold mb-6">,
            🚀 Stay Ahead of the Future,
          </h2>,
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">,
            Get exclusive access to the latest revolutionary technologies;
            early demos, and insider insights from the cutting edge of AI consciousness,
            and quantum computing.,
          </p>,
        </div>,
        <div className="grid lg: grid-cols-2 gap-12 items-center">,
          {/* Benefits */,}
          <div,
          >,
            <h3 className="text-3xl font-bold mb-8">Why Join Our Community?</h3>,
            <div className="space-y-6">,
              {benefits.map((benefit, index) => (,
                <div,
                  key={index}
                  className="flex items-start space-x-4",
                >,
                  <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl">,
                    {benefit.icon}
                  </div>,
                  <div>,
                    <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>,
                    <p className="text-gray-300">{benefit.description}</p>,
                  </div>,
                </div>,
              ))}
            </div>,
          </div>,
          {/* Signup Form */}
          <div,
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20",
          >,
            <h3 className="text-2xl font-bold text-white mb-6 text-center">,
              Get Started Today,
            </h3>,
            <form onSubmit={handleSubmit} className="space-y-6">,
              <div>,
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">,
                  Email Address,
                </label>,
                <div className="relative">,
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />,
                  <input,
                    type="email",
                    id="email",
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address",
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
                    required,
                  />,
                </div>,
              </div>,
              <button,
                type="submit",
                disabled={isLoading,}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover: shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",
              >,
                {isLoading ? (,
                  <>,
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>,
                    <span>Joining...</span>,
                  </>,
                ) : (,
                  <>,
                    <Send className="w-5 h-5" />,
                    <span>Join the Revolution</span>,
                    <ArrowRight className="w-5 h-5" />,
                  </>,
                ),}
              </button>,
            </form>,
            <p className="text-sm text-gray-400 mt-4 text-center">,
              By subscribing, you agree to receive updates about our revolutionary technologies.,
              Unsubscribe at any time.,
            </p>,
          </div>,
        </div>,
        <div,
          className="text-center mt-12",
        >,
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-6 inline-block">,
            🌟 10,000+ Innovators Already Joined,
          </div>,
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <a,
              href="/pages/UltimateTechRevolution2025",
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105",
            >,
              🚀 Explore Ultimate Revolution →,
            </a>,
            <a,
              href="/pages/AdvancedAIConsciousness2025",
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105",
            >,
              🧠 Meet Conscious AI →,
            </a>,
          </div>,
        </div>,
      </div>,
    </div>,
  );
export default NewsletterSignup2025;
}