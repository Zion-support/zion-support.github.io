import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const AIDevelopment: NextPage = () => {
  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your specific business needs and data patterns.",
      features: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Recommendation Systems"],
      icon: "🧠",
      pricing: "Starting at $15,000"
    },
    {
      title: "Natural Language Processing",
      description: "AI-powered text analysis, sentiment analysis, and language understanding solutions.",
      features: ["Chatbots & Virtual Assistants", "Text Classification", "Sentiment Analysis", "Language Translation"],
      icon: "💬",
      pricing: "Starting at $12,000"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions for automation and quality control.",
      features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Inspection"],
      icon: "👁️",
      pricing: "Starting at $18,000"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights and forecasting to optimize business decisions.",
      features: ["Demand Forecasting", "Risk Assessment", "Customer Lifetime Value", "Churn Prediction"],
      icon: "📊",
      pricing: "Starting at $10,000"
    },
    {
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into your existing systems.",
      features: ["API Development", "System Integration", "Data Pipeline Setup", "Performance Optimization"],
      icon: "🔗",
      pricing: "Starting at $8,000"
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance on AI implementation and digital transformation.",
      features: ["AI Strategy Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"],
      icon: "🎯",
      pricing: "Starting at $5,000"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Personalization",
      client: "TechRetail Inc.",
      result: "300% increase in conversion rate",
      description: "AI-powered product recommendations and personalized shopping experiences.",
      link: "/case-studies/ai-ecommerce-platform"
    },
    {
      title: "Fraud Detection System",
      client: "SecureBank",
      result: "95% fraud detection accuracy",
      description: "Real-time ML models for detecting fraudulent transactions and preventing losses.",
      link: "#"
    },
    {
      title: "Predictive Maintenance",
      client: "ManufacturingCorp",
      result: "40% reduction in downtime",
      description: "IoT sensors combined with AI to predict equipment failures before they occur.",
      link: "#"
    }
  ];

  return (
    <Layout 
      title="AI Development Services - Zion Tech Solutions"
      description="Transform your business with cutting-edge AI development services. From machine learning models to natural language processing, we deliver AI solutions that drive real results."
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center text-white mb-20">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Development Services
            </h1>
            <p className="text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning models to natural language processing, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Start Your AI Project
              </Link>
              <Link href="/case-studies/ai-ecommerce-platform" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
              <div className="text-sm text-gray-200">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-gray-200">Model Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$50M+</div>
              <div className="text-sm text-gray-200">Client Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-sm text-gray-200">AI Model Monitoring</div>
            </div>
          </div>

          {/* AI Services Grid */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Our AI Development Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all transform hover:scale-105">
                  <div className="text-5xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-200 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400 mb-2">{service.pricing}</div>
                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Development Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Our AI Development Process</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="text-xl font-bold mb-4 text-white">Discovery & Analysis</h3>
                  <p className="text-gray-200 text-sm">
                    We analyze your business needs, data sources, and objectives to design the perfect AI solution.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="text-xl font-bold mb-4 text-white">Data Preparation</h3>
                  <p className="text-gray-200 text-sm">
                    We clean, process, and prepare your data for optimal AI model training and performance.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="text-xl font-bold mb-4 text-white">Model Development</h3>
                  <p className="text-gray-200 text-sm">
                    Our experts develop, train, and optimize AI models using cutting-edge algorithms and techniques.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                  <h3 className="text-xl font-bold mb-4 text-white">Deployment & Monitoring</h3>
                  <p className="text-gray-200 text-sm">
                    We deploy your AI solution and provide ongoing monitoring, optimization, and support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">AI Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-white">{study.title}</h3>
                  <p className="text-gray-200 mb-4">{study.description}</p>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-green-400 mb-2">{study.result}</div>
                    <div className="text-sm text-gray-400">Client: {study.client}</div>
                  </div>
                  <Link 
                    href={study.link}
                    className="text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    Read Case Study →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">AI Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Machine Learning Frameworks</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🐍</div>
                    <div className="text-white font-semibold">TensorFlow</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔥</div>
                    <div className="text-white font-semibold">PyTorch</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="text-white font-semibold">Scikit-learn</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤗</div>
                    <div className="text-white font-semibold">Hugging Face</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Cloud & Infrastructure</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">☁️</div>
                    <div className="text-white font-semibold">AWS SageMaker</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔵</div>
                    <div className="text-white font-semibold">Azure ML</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🐳</div>
                    <div className="text-white font-semibold">Docker</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">⚙️</div>
                    <div className="text-white font-semibold">Kubernetes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Harness the Power of AI?</h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Let's discuss how AI can transform your business. Get a free consultation and discover 
              the AI opportunities that can drive growth and innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Get Free AI Consultation
              </Link>
              <Link href="/blog/ai-revolution-2024-chat" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Learn About AI Trends
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default AIDevelopment;