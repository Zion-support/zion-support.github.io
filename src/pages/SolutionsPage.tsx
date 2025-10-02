import React from 'react';
import { Link } from 'react-router-dom';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive technology solutions for large organizations with complex infrastructure needs.",
      icon: "🏢",
      features: ["Scalable Architecture", "Enterprise Security", "24/7 Support", "Custom Development"],
      link: "/solutions/enterprise"
    },
    {
      title: "SMB Solutions",
      description: "Cost-effective solutions designed specifically for small and medium businesses.",
      icon: "🏪",
      features: ["Affordable Pricing", "Quick Deployment", "Easy Management", "Growth Support"],
      link: "/solutions/smb"
    },
    {
      title: "Startup Solutions",
      description: "Agile solutions to help startups scale quickly and efficiently from day one.",
      icon: "🚀",
      features: ["Rapid Development", "Flexible Pricing", "MVP Support", "Scalable Growth"],
      link: "/solutions/startup"
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant solutions for healthcare providers and medical organizations.",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Secure financial technology solutions with regulatory compliance.",
      icon: "💰"
    },
    {
      title: "E-commerce",
      description: "Scalable e-commerce solutions with advanced analytics and automation.",
      icon: "🛒"
    },
    {
      title: "Manufacturing",
      description: "Industrial IoT and automation solutions for modern manufacturing.",
      icon: "🏭"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions for Every Business</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Tailored technology solutions that scale with your organization and drive measurable results.
          </p>
        </div>
      </section>

      {/* Business Size Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions by Business Size</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the solution that best fits your organization's size and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={solution.link} 
                  className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized solutions designed for your industry's unique challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understand your business needs and technical requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Design a comprehensive solution architecture and roadmap</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Build and test your solution with agile methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600">Deploy and provide ongoing support and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Solution?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Let's discuss your specific requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Consultation
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;