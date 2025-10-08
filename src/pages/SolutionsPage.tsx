import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: '🤖',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Strategy Consulting'
      ],
      pricing: 'Starting at $1,500/month',
      color: 'blue'
    },
    {
      id: 'ai-marketing',
      title: 'AI Marketing',
      icon: '📢',
      description: 'Revolutionary AI-powered marketing automation, ad optimization, and content generation.',
      features: [
        'Marketing Automation',
        'Ad Optimization',
        'Content Generation',
        'Customer Segmentation',
        'ROI Optimization'
      ],
      pricing: 'Starting at $199/month',
      color: 'pink'
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      icon: '⚙️',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Exception Handling',
        'Decision Intelligence',
        'Integration Services'
      ],
      pricing: 'Starting at $399/month',
      color: 'blue'
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare',
      icon: '🏥',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      features: [
        'Medical Imaging Analysis',
        'Drug Discovery',
        'Personalized Medicine',
        'Clinical Decision Support',
        'Health Data Analytics'
      ],
      pricing: 'Starting at $1,999/month',
      color: 'green'
    },
    {
      id: 'ai-fintech',
      title: 'AI Fintech',
      icon: '💰',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      features: [
        'Algorithmic Trading',
        'Fraud Detection',
        'Risk Management',
        'Credit Scoring',
        'Regulatory Compliance'
      ],
      pricing: 'Starting at $1,499/month',
      color: 'indigo'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Next-generation quantum computing capabilities for complex problem solving and optimization.',
      features: [
        'Quantum Algorithms',
        'Optimization Problems',
        'Cryptography',
        'Simulation Services',
        'Research & Development'
      ],
      pricing: 'Custom Pricing',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      pink: 'text-pink-600 bg-pink-50 border-pink-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our comprehensive AI solutions including machine learning, automation, healthcare AI, fintech, and quantum computing. Transform your business today."
        />
        <meta
          name="keywords"
          content="AI solutions, machine learning, AI automation, healthcare AI, fintech AI, quantum computing, digital transformation"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Solutions</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our AI Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive AI solutions designed to address every aspect of your business needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution) => (
                  <div
                    key={solution.id}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="text-5xl mb-6 text-center">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className={`text-2xl font-bold mb-4 ${getColorClasses(solution.color).split(' ')[0]}`}>
                        {solution.pricing}
                      </div>
                      <a
                        href={`/contact?service=${solution.id}`}
                        className={`inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 ${getColorClasses(solution.color)}`}
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Process
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We follow a proven methodology to ensure successful AI implementation
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery</h3>
                  <p className="text-gray-600">
                    We analyze your business needs and identify opportunities for AI implementation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h3>
                  <p className="text-gray-600">
                    We develop a comprehensive AI strategy tailored to your specific requirements.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
                  <p className="text-gray-600">
                    We build and deploy AI solutions with continuous monitoring and optimization.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization</h3>
                  <p className="text-gray-600">
                    We continuously improve and scale your AI solutions for maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how AI can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13026009898"
                  className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  Call (302) 600-9898
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SolutionsPage;