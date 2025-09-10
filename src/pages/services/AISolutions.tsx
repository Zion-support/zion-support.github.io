import React from 'react';

const AISolutions: React.FC = () => {
  const solutions = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your specific business needs and data patterns.",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making"]
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.",
      features: ["Chatbots & Virtual Assistants", "Document Processing", "Language Translation"]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for various industries and use cases.",
      features: ["Object Detection", "Image Classification", "Facial Recognition"]
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline your business processes.",
      features: ["Process Automation", "Workflow Optimization", "Intelligent Routing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">
            Contact our AI experts to discuss how we can help transform your business with artificial intelligence.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export { AISolutions };
export default AISolutions;