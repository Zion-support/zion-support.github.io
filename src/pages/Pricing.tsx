<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic website setup",
        "5 pages included",
        "Mobile responsive design",
        "Basic SEO optimization",
        "3 months support",
        "SSL certificate",
        "Contact form",
        "Basic analytics"
      ],
      color: "from-gray-500 to-gray-600",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "one-time",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Up to 15 pages",
        "Advanced SEO optimization",
        "Content management system",
        "E-commerce integration",
        "6 months support",
        "Performance optimization",
        "Analytics setup",
        "Social media integration",
        "Email marketing setup"
      ],
      color: "from-blue-500 to-purple-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Unlimited pages",
        "Custom development",
        "Advanced integrations",
        "24/7 priority support",
        "Dedicated project manager",
        "Training and documentation",
        "Ongoing maintenance",
        "Custom API development",
        "Advanced security features"
      ],
      color: "from-purple-500 to-pink-600",
      popular: false
=======
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
  ];

  const servicePricing = [
    {
      service: "Micro SaaS Development",
      starting: "$5,000",
      monthly: "$2,500",
      description: "End-to-end product development with billing, auth, and analytics"
    },
    {
      service: "AI Services",
      starting: "$3,500",
      monthly: "$1,500",
      description: "LLM applications, RAG systems, and MLOps pipelines"
    },
    {
      service: "IT Services",
      starting: "$2,500",
      monthly: "$1,200",
      description: "Cloud migration, DevOps, and security solutions"
    },
    {
      service: "Blockchain Development",
      starting: "$4,000",
      monthly: "$2,000",
      description: "Smart contracts, DeFi protocols, and Web3 applications"
    },
    {
      service: "Data Analytics",
      starting: "$2,000",
      monthly: "$800",
      description: "Business intelligence, predictive modeling, and real-time analytics"
    },
    {
      service: "Cybersecurity",
      starting: "$3,000",
      monthly: "$1,500",
      description: "Security audits, threat monitoring, and compliance management"
    },
    {
      service: "Cloud Migration",
      starting: "$4,500",
      monthly: "$2,200",
      description: "Seamless migration to AWS, Azure, or Google Cloud"
    },
    {
      service: "DevOps & SRE",
      starting: "$3,500",
      monthly: "$1,800",
      description: "CI/CD pipelines, infrastructure automation, and monitoring"
    },
    {
      service: "Mobile Development",
      starting: "$3,000",
      monthly: "$1,500",
      description: "Native and cross-platform mobile applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Pricing Plans</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transparent pricing for all your technology needs. Choose the plan that fits your business.
          </p>
        </div>
      </div>

<<<<<<< HEAD
      {/* Pricing Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${plan.color} rounded-t-2xl`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                  >
                    Get Started
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Service Packages */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Monthly Service Packages</h2>
            <p className="text-xl text-gray-600">Ongoing support and maintenance for your technology needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Support</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$999<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Perfect for small businesses</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 hours of support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic maintenance</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Monthly reports</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center ring-2 ring-purple-200">
              <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Most Popular</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Support</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">$2,499<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 15 hours of support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Phone & email support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Performance monitoring</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Security updates</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Support</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">$4,999<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">For large organizations</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 40 hours of support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 priority support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated account manager</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Training & documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Pricing */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Pricing</h2>
            <p className="text-xl text-gray-600">Custom pricing for specialized services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePricing.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.service}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-700">Starting Price:</span>
                    <span className="text-xl font-bold text-blue-600">{service.starting}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-700">Monthly:</span>
                    <span className="text-xl font-bold text-green-600">{service.monthly}</span>
                  </div>
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Get Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our pricing and services</p>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-600">Yes, we offer custom pricing for enterprise clients and complex projects. Contact us for a personalized quote.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's included in support?</h3>
              <p className="text-gray-600">Support includes bug fixes, minor updates, and technical assistance. Major feature additions may require additional charges.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">Absolutely! You can upgrade your plan at any time. We'll prorate the difference and adjust your billing accordingly.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee for all our services. If you're not satisfied, we'll refund your payment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today for a free consultation and custom quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

=======
  );
}
  );
};
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default Pricing;