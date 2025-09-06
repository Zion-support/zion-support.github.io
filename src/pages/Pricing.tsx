<<<<<<< HEAD
<<<<<<< HEAD:src/pages/Pricing.tsx
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-600">Choose the perfect plan for your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Basic</h3>
            <p className="text-4xl font-bold mb-6 text-blue-600">$99<span className="text-lg text-gray-500">/month</span></p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Basic features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Email support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                5GB storage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Basic analytics
              </li>
            </ul>
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Pro</h3>
            <p className="text-4xl font-bold mb-6 text-blue-600">$199<span className="text-lg text-gray-500">/month</span></p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                All basic features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Priority support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                50GB storage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Advanced analytics
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                API access
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Enterprise</h3>
            <p className="text-4xl font-bold mb-6 text-blue-600">$499<span className="text-lg text-gray-500">/month</span></p>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                All pro features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                24/7 support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited storage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Custom integrations
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dedicated account manager
              </li>
            </ul>
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
const Pricing: React.FC = () => {;
  return (
    <div className="min-h-screen bg-gray-50">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Pricing</h1>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
          <div className="bg-white p-6 rounded-lg shadow">;
            <h3 className="text-xl font-semibold mb-4">Basic</h3>;
            <p className="text-3xl font-bold mb-4">$99/month</p>;
            <ul className="space-y-2 text-gray-600">;
              <li>Basic features</li>;
              <li>Email support</li>;
              <li>5GB storage</li>;
            </ul>;
          </div>;
          <div className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">;
            <h3 className="text-xl font-semibold mb-4">Pro</h3>;
            <p className="text-3xl font-bold mb-4">$199/month</p>;
            <ul className="space-y-2 text-gray-600">;
              <li>All basic features</li>;
              <li>Priority support</li>;
              <li>50GB storage</li>;
            </ul>;
          </div>;
          <div className="bg-white p-6 rounded-lg shadow">;
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>;
            <p className="text-3xl font-bold mb-4">$499/month</p>;
            <ul className="space-y-2 text-gray-600">;
              <li>All pro features</li>;
              <li>24/7 support</li>;
              <li>Unlimited storage</li>;
            </ul>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
  );
};
;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/pages/Pricing.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
export default Pricing;