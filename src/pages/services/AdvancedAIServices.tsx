// import React from 'react';

const AdvancedAIServices: React.FC = () => {
  const advancedAIServices = [
    {
      title: "AI-Powered Content Generation",
      description: "Advanced AI systems that generate high-quality content for marketing, documentation, and communications with natural language processing capabilities.",
      icon: "📝",
      features: ["Automated Content Creation", "SEO-Optimized Writing", "Multi-language Support", "Brand Voice Consistency"],
      pricing: "Starting at $2,500/month",
      benefits: ["75% reduction in content creation time", "40% increase in engagement rates", "Scalable content production"]
    },
    {
      title: "Intelligent Document Processing",
      description: "AI-powered document analysis and processing that extracts, categorizes, and analyzes information from various document types.",
      icon: "📄",
      features: ["OCR Technology", "Data Extraction", "Document Classification", "Automated Workflows"],
      pricing: "Starting at $1,800/month",
      benefits: ["90% accuracy in data extraction", "60% faster document processing", "Reduced manual errors"]
    },
    {
      title: "Predictive Analytics Platform",
      description: "Advanced machine learning models that predict business trends, customer behavior, and operational outcomes with high accuracy.",
      icon: "🔮",
      features: ["Trend Forecasting", "Customer Analytics", "Risk Assessment", "Performance Optimization"],
      pricing: "Starting at $3,200/month",
      benefits: ["25% improvement in decision accuracy", "30% reduction in operational costs", "Enhanced business insights"]
    },
    {
      title: "AI-Powered Fraud Detection",
      description: "Real-time fraud detection system using machine learning to identify and prevent fraudulent activities across multiple channels.",
      icon: "🛡️",
      features: ["Real-time Monitoring", "Pattern Recognition", "Risk Scoring", "Automated Alerts"],
      pricing: "Starting at $2,800/month",
      benefits: ["95% fraud detection accuracy", "70% reduction in false positives", "24/7 monitoring"]
    },
    {
      title: "Conversational AI Assistant",
      description: "Intelligent chatbots and virtual assistants that provide natural language interactions for customer service and support.",
      icon: "🤖",
      features: ["Natural Language Understanding", "Multi-channel Support", "Context Awareness", "Integration APIs"],
      pricing: "Starting at $1,500/month",
      benefits: ["80% reduction in support tickets", "24/7 customer availability", "Improved customer satisfaction"]
    },
    {
      title: "Computer Vision Solutions",
      description: "Advanced image and video analysis systems for quality control, security monitoring, and automated visual inspections.",
      icon: "👁️",
      features: ["Object Detection", "Quality Control", "Facial Recognition", "Video Analytics"],
      pricing: "Starting at $2,200/month",
      benefits: ["99% accuracy in visual inspections", "50% faster processing", "Automated quality assurance"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced AI Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services including content generation, document processing, predictive analytics, and fraud detection from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-4">Advanced AI Services</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Next-generation artificial intelligence solutions that transform how businesses operate, analyze data, and interact with customers.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedAIServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover: shadow-lg transition-all duration-300 border border-gray-100">
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

                  <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Pricing: </h3>
                    <p className="text-green-700 font-medium">{service.pricing}</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits: </h3>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></h3>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technology Stack</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built with cutting-edge AI frameworks and technologies for maximum performance and reliability
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl text-center border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Machine Learning</h3>
                <p className="text-gray-600">TensorFlow, PyTorch, Scikit-learn</h3>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl text-center border border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">NLP</h3>
                <p className="text-gray-600">BERT, GPT, Transformers</h3>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl text-center border border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Computer Vision</h3>
                <p className="text-gray-600">OpenCV, YOLO, ResNet</h3>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl text-center border border-orange-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud AI</h3>
                <p className="text-gray-600">AWS SageMaker, Azure ML, GCP AI</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact us today to discuss how our advanced AI services can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Component;