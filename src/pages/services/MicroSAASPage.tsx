import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: "Custom SaaS Development",
      description: "Build scalable software-as-a-service applications tailored to your specific business requirements.",
      icon: "⚡",
      features: ["Custom SaaS Apps", "Multi-tenant Architecture", "API Development", "Scalable Infrastructure"]
    },
    {
      title: "SaaS Migration",
      description: "Migrate your existing applications to a modern SaaS architecture for better scalability and performance.",
      icon: "🔄",
      features: ["Legacy System Migration", "Cloud Migration", "Data Migration", "Performance Optimization"]
    },
    {
      title: "SaaS Integration",
      description: "Seamlessly integrate your SaaS applications with existing systems and third-party services.",
      icon: "🔗",
      features: ["API Integration", "Third-party Integrations", "System Integration", "Data Synchronization"]
    },
    {
      title: "SaaS Analytics",
      description: "Implement comprehensive analytics and reporting capabilities to track usage and performance.",
      icon: "📊",
      features: ["Usage Analytics", "Performance Monitoring", "Custom Dashboards", "Business Intelligence"]
    },
    {
      title: "SaaS Security",
      description: "Ensure your SaaS applications are secure with enterprise-grade security measures and compliance.",
      icon: "🔒",
      features: ["Security Audits", "Compliance Management", "Data Encryption", "Access Control"]
    },
    {
      title: "SaaS Support",
      description: "Ongoing support and maintenance to ensure your SaaS applications run smoothly and efficiently.",
      icon: "🛠️",
      features: ["24/7 Support", "Performance Monitoring", "Bug Fixes", "Feature Updates"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS development, migration, and integration services from Zion Tech Group. Scalable software solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Micro SaaS Services</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Build, migrate, and scale powerful software-as-a-service applications that deliver immediate value and grow with your business.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-green-600 font-semibold hover:text-green-800 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Services?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver SaaS solutions that provide immediate value and scale with your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapid Development</h3>
                <p className="text-gray-600">
                  Our agile development process ensures faster time-to-market with high-quality SaaS applications.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Architecture</h3>
                <p className="text-gray-600">
                  Built with scalability in mind, our SaaS solutions handle growth from startup to enterprise scale.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost-Effective</h3>
                <p className="text-gray-600">
                  Reduce operational costs with our efficient SaaS solutions and cloud-native architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We use modern technologies to build robust and scalable SaaS applications
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Frontend</h3>
                <p className="text-gray-600">React, Vue.js, Angular</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Backend</h3>
                <p className="text-gray-600">Node.js, Python, .NET</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud</h3>
                <p className="text-gray-600">AWS, Azure, GCP</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Database</h3>
                <p className="text-gray-600">PostgreSQL, MongoDB, Redis</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your SaaS Solution?</h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Let's discuss your SaaS requirements and how we can help you build a scalable solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link 
                to="/solutions" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;