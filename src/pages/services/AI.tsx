import React from 'react';
import { Link } from 'react-router-dom';

const AISolutions: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms tailored to your business needs",
      features: ["Predictive Analytics", "Pattern Recognition", "Data Classification", "Recommendation Systems"]
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text and speech processing capabilities",
      features: ["Chatbots & Virtual Assistants", "Sentiment Analysis", "Text Summarization", "Language Translation"]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for automation and insights",
      features: ["Object Detection", "Facial Recognition", "Quality Control", "Document Processing"]
    },
    {
      title: "AI Consulting & Strategy",
      description: "Strategic guidance for AI implementation and digital transformation",
      features: ["AI Roadmap Development", "Technology Assessment", "Implementation Planning", "ROI Analysis"]
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      applications: ["Medical Imaging Analysis", "Drug Discovery", "Patient Risk Assessment", "Administrative Automation"]
    },
    {
      industry: "Finance",
      applications: ["Fraud Detection", "Credit Scoring", "Algorithmic Trading", "Customer Service Automation"]
    },
    {
      industry: "Manufacturing",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Process Automation"]
    },
    {
      industry: "Retail",
      applications: ["Personalized Recommendations", "Inventory Management", "Customer Behavior Analysis", "Price Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Future of Business is AI</h2>
                <p className="text-gray-300 mb-6">
                  Our AI solutions help businesses automate processes, gain insights from data, and create competitive advantages through intelligent automation and predictive analytics.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Increase operational efficiency by up to 40%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Reduce costs through intelligent automation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Make data-driven decisions with confidence</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🤖</div>
                <p className="text-gray-300 text-lg">Intelligent Solutions for Modern Business</p>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address your specific business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Use Cases */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI is transforming different industries and creating new opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <div className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-gray-300 text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful AI implementation and deployment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-gray-300 text-sm">Understand your business needs and AI opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategy</h3>
                <p className="text-gray-300 text-sm">Develop comprehensive AI roadmap and implementation plan</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-gray-300 text-sm">Build and train custom AI models for your specific use case</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Deployment</h3>
                <p className="text-gray-300 text-sm">Launch and monitor AI solutions with ongoing support</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how AI can transform your business and create new opportunities for growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;