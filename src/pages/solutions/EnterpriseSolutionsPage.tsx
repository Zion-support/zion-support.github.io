import React from 'react'';
import { Link } from 'react-router-dom'';
import { Helmet } from 'react-helmet-async'';

const EnterpriseSolutionsPage: React.FC  = () => {
  const enterpriseSolutions = [
    {
      title: "Enterprise AI Platform","
      description: "Comprehensive AI platform designed for large-scale enterprise deployment with advanced analytics and automation capabilities.","
      icon: "🏢","
      features: ["Scalable AI Infrastructure", "Enterprise Security", "Multi-tenant Architecture", "Advanced Analytics"]"
    },
    {
      title: "Digital Transformation","
      description: "Complete digital transformation solutions that modernize legacy systems and enable new digital capabilities.","
      icon: "🔄","
      features: ["Legacy Modernization", "Cloud Migration", "Process Automation", "Change Management"]"
    },
    {
      title: "Enterprise Security","
      description: "Comprehensive security solutions including threat detection, compliance management, and data protection.","
      icon: "🛡️","
      features: ["Threat Detection", "Compliance Management", "Data Protection", "Security Monitoring"]"
    },
    {
      title: "Enterprise Analytics","
      description: "Advanced analytics and business intelligence solutions for data-driven decision making across the organization.","
      icon: "📊","
      features: ["Business Intelligence", "Predictive Analytics", "Real-time Dashboards", "Data Governance"]"
    },
    {
      title: "Enterprise Integration","
      description: "Seamless integration solutions that connect disparate systems and enable data flow across the enterprise.","
      icon: "🔗","
      features: ["System Integration", "API Management", "Data Synchronization", "Workflow Automation"]"
    },
    {
      title: "Enterprise Support","
      description: "24/7 enterprise-grade support and maintenance services to ensure optimal system performance.","
      icon: "🛠️","
      features: ["24/7 Support", "Proactive Monitoring", "Performance Optimization", "Disaster Recovery"]"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions including AI platforms, digital transformation, security, and analytics for large organizations." />"
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">"
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">"
          <div className="container mx-auto px-6 text-center">"
            <h1 className="text-4xl md: text-5xl font-bold mb-4">Enterprise Solutions</h1>"
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">"
              Comprehensive technology solutions designed for large organizations with complex infrastructure needs and enterprise-scale requirements.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">"
          <div className="container mx-auto px-6">"
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">"
              {enterpriseSolutions.map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover: shadow-lg transition-shadow">"
                  <div className="text-4xl mb-4">{solution.icon}</div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>"
                  <p className="text-gray-600 mb-6">{solution.description}</p>"
                  <ul className="space-y-2 mb-6">"
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">"
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>"
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-blue-600 font-semibold hover: text-blue-800 transition-colors",
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Enterprise Solutions?</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                Enterprise-grade solutions designed for scale, security, and performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">"
              <div className="text-center">"
                <div className="text-4xl mb-4">📈</div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Architecture</h3>"
                <p className="text-gray-600">"
                  Solutions designed to handle enterprise-scale workloads and grow with your organization.
                </p>
              </div>
              
              <div className="text-center">"
                <div className="text-4xl mb-4">🔒</div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>"
                <p className="text-gray-600">"
                  Comprehensive security measures and compliance support for enterprise requirements.
                </p>
              </div>
              
              <div className="text-center">"
                <div className="text-4xl mb-4">⚡</div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">High Performance</h3>"
                <p className="text-gray-600">"
                  Optimized for performance with enterprise-grade infrastructure and monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Features</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                Advanced features designed specifically for enterprise environments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8">"
              <div className="bg-white p-8 rounded-xl shadow-sm">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-tenant Architecture</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• Isolated data and processes</li>
                  <li>• Customizable user interfaces</li>
                  <li>• Flexible permission models</li>
                  <li>• Resource allocation management</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• Real-time dashboards</li>
                  <li>• Predictive analytics</li>
                  <li>• Custom reporting</li>
                  <li>• Data visualization tools</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Integration Capabilities</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• RESTful APIs</li>
                  <li>• Enterprise connectors</li>
                  <li>• Data synchronization</li>
                  <li>• Legacy system support</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Governance</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• Audit trails</li>
                  <li>• Compliance reporting</li>
                  <li>• Data governance</li>
                  <li>• Security controls</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Technology Stack</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                Proven technologies for enterprise-grade solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8">"
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud Platforms</h3>"
                <p className="text-gray-600">AWS, Azure, Google Cloud</p>"
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">Databases</h3>"
                <p className="text-gray-600">PostgreSQL, MongoDB, Redis</p>"
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-green-50 p-6 rounded-xl text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI/ML</h3>"
                <p className="text-gray-600">TensorFlow, PyTorch, Scikit-learn</p>"
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-6 rounded-xl text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">DevOps</h3>"
                <p className="text-gray-600">Docker, Kubernetes, Terraform</p>"
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">"
          <div className="container mx-auto px-6 text-center">"
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>"
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">"
              Let's discuss how our enterprise solutions can drive your digital transformation and business growth.';
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-colors",
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white hover:text-blue-600 transition-colors",
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

export default EnterpriseSolutionsPage;