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
export default Pricing;