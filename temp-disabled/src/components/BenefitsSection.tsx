import React from 'react';


const BenefitsSection = () => {
  const benefits = [
    {
      icon: '🚀',
      title: 'Faster Implementation',
      description: 'Get your solutions up and running quickly with our streamlined processes.',
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Reduce operational costs while improving efficiency and productivity.',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all services.',
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with your needs.',
    },
    {
      icon: '🎯',
      title: 'Customized Approach',
      description: 'Tailored solutions designed specifically for your business requirements.',
    },
    {
      icon: '🛠️',
      title: 'Expert Support',
      description: '24/7 technical support from our team of experienced professionals.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

