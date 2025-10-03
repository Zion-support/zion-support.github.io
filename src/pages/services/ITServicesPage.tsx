import React from 'react'';
import { Link } from 'react-router-dom'';
import { Helmet } from 'react-helmet-async'';

const ITServicesPage: React.FC  = () => {
  const itServices = [
    {
      title: "Cloud Infrastructure","
      description: "Complete cloud infrastructure setup, migration, and management services for optimal performance and scalability.","
      icon: "☁️","
      features: ["Cloud Migration", "Infrastructure Setup", "Performance Optimization", "Cost Management"]"
    },
    {
      title: "DevOps & Automation","
      description: "Streamline your development and deployment processes with modern DevOps practices and automation tools.","
      icon: "🔄","
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Automated Testing"]"
    },
    {
      title: "Security Solutions","
      description: "Comprehensive security services to protect your infrastructure, applications, and data from threats.","
      icon: "🔒","
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"]"
    },
    {
      title: "Network Management","
      description: "Design, implement, and manage robust network infrastructure for optimal connectivity and performance.","
      icon: "🌐","
      features: ["Network Design", "Performance Monitoring", "Troubleshooting", "Security Implementation"]"
    },
    {
      title: "Database Management","
      description: "Expert database design, optimization, and management services for improved performance and reliability.","
      icon: "🗄️","
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Migration Services"]"
    },
    {
      title: "IT Support & Maintenance","
      description: "24/7 IT support and proactive maintenance to ensure your systems run smoothly and efficiently.","
      icon: "🛠️","
      features: ["24/7 Support", "Proactive Monitoring", "System Updates", "Performance Optimization"]"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, DevOps, security, and network management from Zion Tech Group." />"
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">"
        {/* Header */}
        <section className="bg-gradient-to-r from-purple-600 to-violet-600 text-white py-16">"
          <div className="container mx-auto px-6 text-center">"
            <h1 className="text-4xl md: text-5xl font-bold mb-4">IT Services</h1>"
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">"
              Complete IT infrastructure management, cloud solutions, and enterprise-grade security services to keep your business running smoothly.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">"
          <div className="container mx-auto px-6">"
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">"
              {itServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover: shadow-lg transition-shadow">"
                  <div className="text-4xl mb-4">{service.icon}</div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6">{service.description}</p>"
                  <ul className="space-y-2 mb-6">"
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">"
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>"
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-purple-600 font-semibold hover: text-purple-800 transition-colors
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                We provide reliable, scalable, and secure IT solutions that support your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">"
              <div className="text-center">"
                <div className="text-4xl mb-4">🛡️</div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>"
                <p className="text-gray-600">"
                  Comprehensive security measures to protect your infrastructure and data from evolving threats.
                </p>
              </div>
              
              <div className="text-center">"
                <div className="text-4xl mb-4">⚡</div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">High Performance</h3>"
                <p className="text-gray-600">"
                  Optimized infrastructure and processes ensure maximum performance and minimal downtime.
                </p>
              </div>
              
              <div className="text-center">"
                <div className="text-4xl mb-4">📈</div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>"
                <p className="text-gray-600">"
                  IT solutions that grow with your business, handling increased loads and requirements seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Partners</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                We work with leading technology providers to deliver best-in-class solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8">"
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud Providers</h3>"
                <p className="text-gray-600">AWS, Azure, Google Cloud</p>"
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">Security</h3>"
                <p className="text-gray-600">Cisco, Palo Alto, Fortinet</p>"
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">Monitoring</h3>"
                <p className="text-gray-600">Datadog, New Relic, Splunk</p>"
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">DevOps</h3>"
                <p className="text-gray-600">Docker, Kubernetes, Terraform</p>"
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">"
          <div className="container mx-auto px-6 text-center">"
            <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your IT Infrastructure?</h2>"
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">"
              Let's discuss how our IT services can improve your infrastructure performance and security.';
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors
              >
                Get Started
              </Link>
              <Link 
                to="/support" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors
              >
                Get Support
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;