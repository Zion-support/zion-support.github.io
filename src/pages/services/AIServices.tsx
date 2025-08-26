import React from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Check, Brain, Zap, Shield, Database, Users, TrendingUp, Globe } from 'lucide-react';

export default function AIServices() {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Strategic guidance on implementing AI solutions that align with your business objectives.',
      features: [
        'AI readiness assessment',
        'ROI analysis and business case development',
        'Technology stack recommendations',
        'Implementation roadmap planning'
      ]
    },
    {
      icon: Zap,
      title: 'Machine Learning Development',
      description: 'Custom ML models and algorithms tailored to your specific business needs.',
      features: [
        'Predictive analytics models',
        'Natural language processing',
        'Computer vision solutions',
        'Recommendation systems'
      ]
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'End-to-end data solutions to power your AI initiatives.',
      features: [
        'Data pipeline development',
        'ETL/ELT processes',
        'Data warehousing',
        'Real-time analytics'
      ]
    },
    {
      icon: Shield,
      title: 'AI Security & Ethics',
      description: 'Ensuring your AI systems are secure, compliant, and ethically sound.',
      features: [
        'AI model security testing',
        'Bias detection and mitigation',
        'Privacy-preserving AI',
        'Compliance frameworks'
      ]
    },
    {
      icon: Users,
      title: 'AI-Powered Applications',
      description: 'Custom applications that leverage AI to automate and enhance business processes.',
      features: [
        'Chatbots and virtual assistants',
        'Process automation',
        'Intelligent document processing',
        'Predictive maintenance systems'
      ]
    },
    {
      icon: TrendingUp,
      title: 'AI Model Management',
      description: 'Comprehensive lifecycle management for your AI models and deployments.',
      features: [
        'Model versioning and tracking',
        'Performance monitoring',
        'Automated retraining',
        'Deployment orchestration'
      ]
    }
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Manufacturing & Logistics',
    'Retail & E-commerce',
    'Energy & Utilities',
    'Government & Public Sector'
  ];

  const technologies = [
    'TensorFlow & PyTorch',
    'OpenAI & GPT Models',
    'Azure AI & AWS SageMaker',
    'Google Cloud AI',
    'Hugging Face Transformers',
    'Scikit-learn & Pandas',
    'Kubernetes & Docker',
    'Apache Spark & Kafka'
  ];

  const benefits = [
    'Increased operational efficiency and automation',
    'Enhanced decision-making with predictive insights',
    'Improved customer experience and personalization',
    'Cost reduction through process optimization',
    'Competitive advantage through innovation',
    'Scalable solutions that grow with your business'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Services - Zion Tech Group Artificial Intelligence & Machine Learning Solutions" 
        description="Cutting-edge AI services including machine learning, data analytics, and intelligent automation to transform your business operations."
        keywords="AI services, machine learning, artificial intelligence, data analytics, automation, predictive analytics"
        canonical="https://ziontechgroup.com/services/ai-services"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
            From strategy to implementation, we make AI accessible and impactful.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions that help businesses leverage the power of artificial intelligence 
              to drive innovation, efficiency, and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={service.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our AI expertise combined with deep industry knowledge enables us to deliver 
                solutions that drive real business value and competitive advantage.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free AI Assessment</h3>
              <p className="text-gray-600 mb-6">
                Discover how AI can transform your business with our comprehensive 
                AI readiness assessment and strategy session.
              </p>
              <Link
                to="/contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and opportunities 
              across diverse industry sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={industry} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-purple-50 transition-colors">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge AI and ML technologies to build robust, scalable, 
              and innovative solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={tech} className="bg-white rounded-lg p-4 text-center hover:bg-purple-50 transition-colors border border-gray-200">
                <span className="text-gray-700 font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful AI solutions that drive business value.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  Understand your business needs and AI opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Prep</h3>
                <p className="text-gray-600 text-sm">
                  Collect, clean, and prepare data for AI modeling
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600 text-sm">
                  Build and train AI models using best practices
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Testing</h3>
                <p className="text-gray-600 text-sm">
                  Validate models and ensure quality standards
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deploy</h3>
                <p className="text-gray-600 text-sm">
                  Launch and monitor AI solutions in production
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our AI experts help you unlock new possibilities and transform your business 
            with intelligent automation and predictive insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your AI Journey
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}