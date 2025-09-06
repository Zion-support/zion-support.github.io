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

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      features: ['Basic AI Solutions', 'Email Support', 'Standard Cloud Services'],
    },
    {
      name: 'Professional',
      price: '$299',
      features: ['Advanced AI Solutions', 'Priority Support', 'Premium Cloud Services', 'Consulting'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Custom AI Solutions', '24/7 Support', 'Dedicated Cloud Infrastructure', 'Full Consulting'],
    },
  ];

  );
}
  );
};
;
export default Pricing;