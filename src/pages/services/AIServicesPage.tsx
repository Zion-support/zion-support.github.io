import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs, from predictive analytics to recommendation systems.",
      icon: "🧠",
      features: ["Custom Model Development", "Predictive Analytics", "Recommendation Engines", "Model Optimization"]
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, and automated content generation.",
      icon: "💬",
      features: ["Text Analysis", "Sentiment Analysis", "Content Generation", "Language Translation"]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, facial recognition, and visual content understanding.",
      icon: "👁️",
      features: ["Object Detection", "Facial Recognition", "Image Classification", "Video Analysis"]
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline processes and reduce manual work.",
      icon: "🤖",
      features: ["Process Automation", "Workflow Optimization", "Intelligent Document Processing", "Smart Integrations"]
    },
    {
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and implement AI solutions effectively.",
      icon: "💡",
      features: ["AI Strategy", "Technology Assessment", "Implementation Planning", "ROI Analysis"]
    },
    {
      title: "AI Training & Support",
      description: "Comprehensive training programs and ongoing support to ensure successful AI adoption.",
      icon: "🎓",
      features: ["Team Training", "Best Practices", "Ongoing Support", "Knowledge Transfer"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, NLP, computer vision, and AI automation solutions from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-4">AI Services</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions that drive innovation and efficiency.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover: shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</h3>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></h3>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-blue-600 font-semibold hover: text-blue-800 transition-colors
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver AI solutions that provide measurable business value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📈</h3>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven ROI</h3>
                <p className="text-gray-600">
                  Our AI solutions deliver measurable returns on investment, with clients seeing average cost savings of 40% and efficiency gains of 60%.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</h3>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
                <p className="text-gray-600">
                  Every AI solution is tailored to your specific business needs, ensuring optimal performance and seamless integration.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</h3>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Architecture</h3>
                <p className="text-gray-600">
                  Our AI solutions are built to scale with your business, handling increased data volumes and user loads seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Harness the Power of AI?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss how our AI services can transform your business operations and drive growth.';
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors
              >
                Get Started
              </Link>
              <Link 
                to="/case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Component;