import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
            <p className="text-4xl font-bold text-blue-400 mb-6">$99/month</p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Basic features
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Email support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                5GB storage
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-blue-500">
            <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
            <p className="text-4xl font-bold text-blue-400 mb-6">$199/month</p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                All basic features
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Priority support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                50GB storage
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <p className="text-4xl font-bold text-blue-400 mb-6">$499/month</p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                All pro features
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                24/7 support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Unlimited storage
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for a personalized quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;