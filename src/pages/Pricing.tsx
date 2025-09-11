import React from 'react';

const Pricing: React.FC = () => {
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
      description: "Custom AI solutions, machine learning models, and automation"
    },
    {
      service: "Cloud Migration",
      starting: "$2,500",
      monthly: "$800",
      description: "Seamless migration to cloud platforms with optimization"
    },
    {
      service: "DevOps & Infrastructure",
      starting: "$2,000",
      monthly: "$1,200",
      description: "CI/CD pipelines, monitoring, and infrastructure automation"
    },
    {
      service: "Mobile Development",
      starting: "$4,000",
      monthly: "$1,800",
      description: "Native and cross-platform mobile applications"
    },
    {
      service: "Cybersecurity",
      starting: "$3,000",
      monthly: "$1,000",
      description: "Security audits, penetration testing, and compliance"
    }
  ];

  const features = [
    "24/7 Support",
    "Free Consultation",
    "30-day Money Back Guarantee",
    "Scalable Solutions",
    "Regular Updates",
    "Performance Monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicePricing.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">{service.service}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-400">{service.starting}</span>
                <span className="text-gray-300 ml-2">starting</span>
              </div>
              <div className="mb-4">
                <span className="text-xl font-semibold text-green-400">{service.monthly}</span>
                <span className="text-gray-300 ml-2">/month</span>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and custom quote.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;