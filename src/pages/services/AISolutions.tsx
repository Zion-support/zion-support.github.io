import React from 'react';

const AISolutions: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning',
      description: 'Build and deploy intelligent models that learn from your data.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Model Training & Optimization'],
      icon: '🧠'
    },
    {
      title: 'Natural Language Processing',
      description: 'Understand and process human language with advanced NLP solutions.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      icon: '💬'
    },
    {
      title: 'Computer Vision',
      description: 'Extract insights from images and videos with computer vision technology.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
      icon: '👁️'
    },
    {
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Routing', 'Smart Notifications'],
      icon: '⚡'
    },
    {
      title: 'AI Consulting',
      description: 'Strategic guidance on AI implementation and digital transformation.',
      features: ['AI Strategy', 'Technology Assessment', 'Implementation Planning', 'Training & Support'],
      icon: '🎯'
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed specifically for your business needs.',
      features: ['Custom Development', 'Integration Services', 'Performance Optimization', 'Ongoing Support'],
      icon: '🔧'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business. 
            Our comprehensive AI solutions help you automate processes, gain insights, 
            and stay ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg mb-6">
            Let our AI experts help you identify opportunities and implement solutions that drive real results.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;