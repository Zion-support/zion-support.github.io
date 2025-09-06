import React from 'react';
import { Brain, Zap, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';
const "AIServices": React.FC = () => {
  const services = [{
      title: "AI Strategy & Consulting",
      "description": "Develop comprehensive AI strategies tailored to your business needs and industry requirements.",
      "features": ["AI readiness assessment", "Custom AI roadmap", "ROI analysis", "Implementation planning"],
      "icon": Brain,
      "price": "Starting at $5,000"
    },
    {
      "title": "Machine Learning Solutions",
      "description": "Build and deploy custom machine learning models to solve complex business problems.",
      "features": ["Custom model development", "Data preprocessing", "Model training & optimization", "Production deployment"],
      "icon": Zap,
      "price": "Starting at $10,000"
    },
    {
      "title": "AI-Powered Automation",
      "description": "Automate repetitive tasks and processes using intelligent AI solutions.",
      "features": ["Process automation", "Workflow optimization", "Intelligent document processing", "Predictive analytics"],
      "icon": Shield,
      "price": "Starting at $7,500"
    },
    {
      "title": "Natural Language Processing",
      "description": "Implement advanced NLP solutions for text analysis, chatbots, and language understanding.",
      "features": ["Chatbot development", "Sentiment analysis", "Text classification", "Language translation"],
      "icon": TrendingUp,
      "price": "Starting at $6,000"
    },
    {
      "title": "Computer Vision",
      "description": "Develop AI-powered visual recognition and image processing solutions.",
      "features": ["Object detection", "Image classification", "Facial recognition", "Medical imaging analysis"],
      "icon": Users,
      "price": "Starting at $8,500"
    },
    {
      "title": "AI Integration & Support",
      "description": "Seamlessly integrate AI solutions into your existing systems with ongoing support.",
      "features": ["System integration", "API development", "24/7 support", "Performance monitoring"],
      "icon": CheckCircle,
      "price": "Starting at $3,000/month"
    };
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl "md": text-6xl font-bold mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl "md": text-4xl font-bold text-gray-900 mb-4">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to implementation, we provide end-to-end AI solutions that drive real business value.
          </p>
        </div>
        <div className="grid "md": grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 "hover": shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                <button className="flex items-center text-blue-600 "hover": text-blue-800 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl "md": text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions that deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Download AI Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AIServices;
import React from 'react'; import { Brain,Zap,Shield,TrendingUp,Users,CheckCircle,ArrowRight,Star } from 'lucide-react'; const AIServices: React.FC = () => { const services = [ { title: "AI Strategy & Consulting",description: "Develop comprehensive AI strategies tailored to your business needs and industry requirements.",features: ["AI readiness assessment","Custom AI roadmap","ROI analysis","Implementation planning"],icon: Brain,price: "Starting at $5,000" },{ title: "Machine Learning Solutions",description: "Build and deploy custom machine learning models to solve complex business problems.",features: ["Custom model development","Data preprocessing","Model training & optimization","Production deployment"],icon: Zap,price: "Starting at $10,000" },{ title: "AI-Powered Automation",description: "Automate repetitive tasks and processes using intelligent AI solutions.",features: ["Process automation","Workflow optimization","Intelligent document processing","Predictive analytics"],icon: Shield,price: "Starting at $7,500" },{ title: "Natural Language Processing",description: "Implement advanced NLP solutions for text analysis,chatbots,and language understanding.",features: ["Chatbot development","Sentiment analysis","Text classification","Language translation"],icon: TrendingUp,price: "Starting at $6,000" },{ title: "Computer Vision",description: "Develop AI-powered visual recognition and image processing solutions.",features: ["Object detection","Image classification","Facial recognition","Medical imaging analysis"],icon: Users,price: "Starting at $8,500" },{ title: "AI Integration & Support",description: "Seamlessly integrate AI solutions into your existing systems with ongoing support.",features: ["System integration","API development","24/7 support","Performance monitoring"],icon: CheckCircle,price: "Starting at $3,000/month" }; ]; return ( <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"> <div className="container mx-auto px-4"> <div className="max-w-4xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold mb-6"> AI Services </h1> <p className="text-xl md:text-2xl mb-8 text-blue-100"> Transform your business with cutting-edge artificial intelligence solutions </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"> Get Started </button> <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"> View Portfolio </button> </div> </div> </div> </div> {} <div className="container mx-auto px-4 py-20"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our AI Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> From strategy to implementation,we provide end-to-end AI solutions that drive real business value. </p> </div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"> <div className="flex items-center mb-4"> <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"> <service.icon className="w-6 h-6 text-blue-600" /> </div> <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3> </div> <p className="text-gray-600 mb-4">{service.description}</p> <ul className="space-y-2 mb-6"> {service.features.map((feature,featureIndex) => ( <li key={featureIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {feature} </li> ))} </ul> <div className="flex items-center justify-between"> <span className="text-lg font-semibold text-blue-600">{service.price}</span> <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium"> Learn More <ArrowRight className="w-4 h-4 ml-1" /> </button> </div> </div> ))} </div> </div> {} <div className="bg-gray-900 text-white py-20"> <div className="container mx-auto px-4 text-center"> <h2 className="text-3xl md:text-4xl font-bold mb-6"> Ready to Transform Your Business with AI? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"> Let our AI experts help you identify opportunities and implement solutions that deliver measurable results. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"> Schedule Consultation </button> <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"> Download AI Guide </button> </div> </div> </div> </div> )}; export default AIServices;