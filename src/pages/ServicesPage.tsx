import React from 'react'';
import { Link } from 'react-router-dom'';
import { Helmet } from 'react-helmet-async';
;
const ServicesPage: React.FC: ()  => {,,,
  const services: [,,
    {
      title: "AI & Machine Learning",";,"
      description: "Advanced artificial intelligence solutions including machine learning models, natural language processing, and predictive analytics.",";,"
      icon: "🤖",";,"
      features: ["Custom ML Models", "NLP Solutions", "Predictive Analytics", "Computer Vision"]";,"
    },
    {
      title: "Micro SaaS Development",";,"
      description: "Scalable software-as-a-service solutions that deliver immediate value and grow with your business needs.",";,"
      icon: "⚡",";,"
      features: ["Custom SaaS Apps", "API Development", "Cloud Integration", "Scalable Architecture"]";,"
    },
    {
      title: "IT Infrastructure",";,"
      description: "Complete IT infrastructure management, cloud solutions, and enterprise-grade security services.",";,"
      icon: "🛠️",";,"
      features: ["Cloud Migration", "DevOps Services", "Security Solutions", "Infrastructure Management"]";,"
    },
    {
      title: "Data Analytics",";,"
      description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",";,"
      icon: "📊",";,"
      features: ["Business Intelligence", "Data Visualization", "Real-time Analytics", "Data Warehousing"]";,"
    },
    {
      title: "Automation Solutions",";,"
      description: "Streamline your operations with intelligent automation solutions that reduce costs and improve efficiency.",";,"
      icon: "🔄",";,"
      features: ["Process Automation", "Workflow Optimization", "RPA Solutions", "Smart Integrations"]";,"
    },
    {
      title: "Consulting Services",";,"
      description: "Expert technology consulting to help you make informed decisions and achieve your digital transformation goals.",";,"
      icon: "💡",";,"
      features: ["Technology Strategy", "Digital Transformation", "Architecture Planning", "Best Practices"]";,"
    }
  ];

  return (
    <>
      <Helmet >
        <title >Services - Zion Tech Group</title>
        <meta name: "description" content ="Comprehensive AI and technology services from Zion Tech Group. AI services, micro SaaS development, IT infrastructure, and consulting solutions." />";,"
      </Helmet>
      
      <div className: "min-h-screen bg-gray-50">";,"
        {/* Header */}
        <section className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">";,"
          <div className: "container mx-auto px-6 text-center">";,"
            <h1 className: "text-4xl md:text-5xl font-bold mb-4">Our Services</h1>";,"
            <p className: "text-xl text-blue-100 max-w-3xl mx-auto">,";,"
  Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className: "py-20">";,"
          <div className: "container mx-auto px-6">";,"
            <div className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";,"
              {services.map((service, index) => (
                <div key: {index} className: "bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">";,"
                  <div className: "text-4xl mb-4">{service.icon}</div>";"
                  <h3 className: "text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>";"
                  <p className: "text-gray-600 mb-6">{service.description}</p>";"
                  <ul className: "space-y-2 mb-6">";,"
                    {service.features.map((feature, featureIndex) => (
                      <li key: {featureIndex} className: "flex items-center text-sm text-gray-700">";,"
                        <span className: "w-2 h-2 bg-blue-500 rounded-full mr-3"></span>";,"
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to: "/contact" ,";,"
  className: "text-blue-600 font-semibold hover:text-blue-800 transition-colors","
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className: "py-20 bg-blue-600 text-white">";,"
          <div className: "container mx-auto px-6 text-center">";,"
            <h2 className: "text-4xl font-bold mb-4">Ready to Get Started?</h2>";,"
            <p className: "text-xl mb-8 text-blue-100 max-w-2xl mx-auto">,";,"
  Let's discuss your specific needs and how our services can help you achieve your goals.';';
            </p>
            <div className: "flex flex-col sm:flex-row gap-4 justify-center">";,"
              <Link to: "/contact" ,";,"
  className: "bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors","
              >
                Contact Us
              </Link>
              <Link to: "/solutions" ,";,"
  className: "border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors","
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

export default ServicesPage;