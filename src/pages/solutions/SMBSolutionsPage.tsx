import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SMBSolutionsPage: React.FC = () => {
  const smbSolutions = [
    {
      title: "Business Process Automation",
      description: "Streamline your business operations with cost-effective automation solutions designed for small and medium businesses.",
      icon: "⚙️",
      features: ["Workflow Automation", "Document Processing", "Task Management", "Process Optimization"],
    },
    {
      title: "Cloud Solutions",
      description: "Affordable cloud solutions that provide enterprise-grade capabilities without the enterprise price tag.",
      icon: "☁️",
      features: ["Cloud Migration", "Data Backup", "Remote Access", "Scalable Infrastructure"],
    },
    {
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with user-friendly analytics and reporting tools.",
      icon: "📊",
      features: ["Data Visualization", "Custom Reports", "Performance Dashboards", "Trend Analysis"],
    },
    {
      title: "Customer Management",
      description: "Enhance customer relationships with integrated CRM and customer service solutions.",
      icon: "👥",
      features: ["CRM Integration", "Customer Analytics", "Service Automation", "Communication Tools"],
    },
    {
      title: "Security Solutions",
      description: "Protect your business with comprehensive security solutions tailored for SMB needs and budgets.",
      icon: "🔒",
      features: ["Threat Protection", "Data Security", "Access Control", "Compliance Support"],
    },
    {
      title: "IT Support",
      description: "Reliable IT support and maintenance services to keep your systems running smoothly and efficiently.",
      icon: "🛠️",
      features: ["Remote Support", "System Maintenance", "Troubleshooting", "Performance Optimization"],
    }
  ];

  return (
    <>
      <Helmet>
        <title>SMB Solutions - Zion Tech Group</title>
        <meta name="description" content="Cost-effective technology solutions designed for small and medium businesses including automation, cloud solutions, and business intelligence." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SMB Solutions</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Cost-effective technology solutions designed for small and medium businesses to drive growth and efficiency.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {smbSolutions.map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
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

        {/* SMB Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our SMB Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Solutions designed specifically for small and medium business needs and budgets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost-Effective</h3>
                <p className="text-gray-600">
                  Affordable solutions that provide maximum value without breaking your budget.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Implementation</h3>
                <p className="text-gray-600">
                  Fast deployment and implementation to get you up and running quickly.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalable Growth</h3>
                <p className="text-gray-600">
                  Solutions that grow with your business and adapt to changing needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SMB Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SMB-Focused Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Features designed specifically for small and medium business requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Setup & Management</h3>
                <p className="text-gray-600 mb-4">
                  Simple configuration and intuitive management interfaces designed for non-technical users.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    User-friendly dashboards
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Automated setup wizards
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Comprehensive documentation
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600 mb-4">
                  Round-the-clock support to ensure your business operations run smoothly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Phone and email support
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Remote assistance
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Priority response times
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Pricing</h3>
                <p className="text-gray-600 mb-4">
                  Transparent pricing models that scale with your business growth and budget.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Pay-as-you-grow options
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    No hidden fees
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Volume discounts
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Integration Ready</h3>
                <p className="text-gray-600 mb-4">
                  Seamless integration with your existing business tools and workflows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    API connectivity
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Third-party integrations
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Custom connectors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SMB Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real results from small and medium businesses using our solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">40% Cost Reduction</h3>
                <p className="text-gray-600 text-sm">
                  Local retail chain reduced operational costs by 40% through process automation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3x Faster Processing</h3>
                <p className="text-gray-600 text-sm">
                  Manufacturing SMB increased order processing speed by 300% with our solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">95% Uptime</h3>
                <p className="text-gray-600 text-sm">
                  Service company achieved 95% system uptime with our managed IT support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Grow Your SMB?</h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Let's discuss how our SMB solutions can help you compete with larger businesses and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SMBSolutionsPage;