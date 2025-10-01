import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Shield, Cloud } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI Data Analytics",
      description: "Transform data into actionable insights with predictive modeling and real-time dashboards",
      price: "$199/month",
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Integration'],
      link: "/services/ai-data-analytics",
      popular: true,
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "AI Workflow Automation",
      description: "Automate business processes with intelligent workflow design and smart triggers",
      price: "$149/month",
      features: ['Process Automation', 'Smart Triggers', 'Performance Monitoring'],
      link: "/services/ai-workflow-automation",
      popular: false,
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "AI Virtual Assistant",
      description: "24/7 intelligent customer support with natural language processing",
      price: "$99/month",
      features: ['24/7 Support', 'Multi-channel', 'Personalized Responses'],
      link: "/services/ai-virtual-assistant",
      popular: false,
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "AI Autonomous Operations",
      description: "Self-improving AI systems that evolve and adapt without human intervention",
      price: "$799/month",
      features: ['95% Efficiency', 'Self-Learning', 'Autonomous Decision Making'],
      link: "/services/ai-autonomous-operations",
      popular: true,
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "AI MLOps Automation",
      description: "Automated machine learning operations with continuous deployment and monitoring",
      price: "$399/month",
      features: ['Auto-deployment', 'Model Monitoring', 'A/B Testing'],
      link: "/services/ai-mlops-automation",
      popular: false,
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Quantum Consciousness AI Consulting",
      description: "Next-generation AI consulting with quantum-enhanced consciousness capabilities",
      price: "$1,299/month",
      features: ['Quantum Computing', 'Consciousness AI', 'Advanced Reasoning'],
      link: "/services/quantum-consciousness-ai-consulting",
      popular: false,
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI & IT Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI solutions, cloud automation, 
              and enterprise IT services that drive growth and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our AI & IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI and IT services designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 ${
                  service.popular ? 'border-blue-500 relative' : 'border-gray-100'
                } hover:scale-105`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 mx-auto">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI and IT solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}