import React from 'react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and predictive analytics",
      features: [
        "Custom AI model development",
        "Machine learning pipeline automation",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics and forecasting"
      ]
    },
    {
      title: "Quantum Computing",
      description: "Harness the power of quantum mechanics for complex problem solving",
      features: [
        "Quantum algorithm development",
        "Quantum machine learning",
        "Cryptographic security solutions",
        "Optimization problems solving",
        "Quantum simulation services"
      ]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with advanced security frameworks",
      features: [
        "Threat detection and prevention",
        "Zero-trust architecture",
        "Penetration testing",
        "Security audits and compliance",
        "Incident response planning"
      ]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      features: [
        "Multi-cloud architecture design",
        "Container orchestration",
        "Serverless computing",
        "DevOps automation",
        "Disaster recovery planning"
      ]
    },
    {
      title: "Data Analytics & BI",
      description: "Turn your data into actionable insights and competitive advantage",
      features: [
        "Real-time data processing",
        "Business intelligence dashboards",
        "Data warehousing solutions",
        "Advanced analytics and reporting",
        "Data visualization and storytelling"
      ]
    },
    {
      title: "Blockchain & Web3",
      description: "Build decentralized applications and blockchain solutions",
      features: [
        "Smart contract development",
        "DeFi protocol design",
        "NFT marketplace creation",
        "Blockchain integration",
        "Cryptocurrency solutions"
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Connect and manage devices with intelligent edge solutions",
      features: [
        "IoT device management",
        "Edge computing architecture",
        "Real-time data processing",
        "Sensor network optimization",
        "Industrial automation"
      ]
    },
    {
      title: "Mobile Development",
      description: "Create engaging mobile experiences across all platforms",
      features: [
        "Native iOS and Android apps",
        "Cross-platform development",
        "Progressive web applications",
        "Mobile UI/UX design",
        "App store optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your requirements and understand your business goals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive strategy tailored to your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">We execute the solution with precision and attention to detail</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">We provide ongoing support and optimization for long-term success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <button className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;