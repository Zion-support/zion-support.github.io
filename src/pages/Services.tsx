import React, { useState } from 'react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Cloud & DevOps', 'Cybersecurity', 'Data Analytics', 'Digital Transformation', 'IT Services'];

  const services = [
    {
      id: 1,
      title: "AI Solutions",
      category: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions that transform your business operations and drive innovation.",
      icon: "🤖",
      features: [
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
        "Custom AI Applications"
      ],
      benefits: [
        "Automated decision-making processes",
        "Enhanced customer experience",
        "Improved operational efficiency",
        "Data-driven insights"
      ],
      pricing: "Starting at $5,000/month",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Cloud Solutions",
      category: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and migration services to modernize your IT environment.",
      icon: "☁️",
      features: [
        "AWS/Azure/GCP Migration",
        "Cloud Architecture Design",
        "DevOps Implementation",
        "Containerization (Docker/Kubernetes)",
        "Auto-scaling Solutions",
        "Cloud Security & Compliance"
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability and flexibility",
        "Enhanced security and compliance",
        "Faster deployment times"
      ],
      pricing: "Starting at $3,000/month",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Cybersecurity",
      category: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from evolving cyber threats.",
      icon: "🔒",
      features: [
        "Security Assessment & Auditing",
        "Penetration Testing",
        "Threat Detection & Response",
        "Compliance Management",
        "Security Training & Awareness",
        "Incident Response Planning"
      ],
      benefits: [
        "Protection against cyber threats",
        "Compliance with regulations",
        "Reduced security risks",
        "Peace of mind for stakeholders"
      ],
      pricing: "Starting at $2,500/month",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Data Analytics",
      category: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence.",
      icon: "📊",
      features: [
        "Data Visualization Dashboards",
        "Business Intelligence Solutions",
        "Real-time Analytics",
        "Predictive Modeling",
        "Data Warehousing",
        "Custom Reporting Tools"
      ],
      benefits: [
        "Data-driven decision making",
        "Improved business performance",
        "Better customer insights",
        "Competitive advantages"
      ],
      pricing: "Starting at $4,000/month",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Digital Transformation",
      category: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and operations.",
      icon: "🚀",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Digital Strategy Development",
        "Change Management",
        "Technology Integration",
        "Digital Training & Support"
      ],
      benefits: [
        "Streamlined operations",
        "Improved efficiency",
        "Enhanced customer experience",
        "Future-ready business model"
      ],
      pricing: "Starting at $6,000/month",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "IT Services",
      category: "IT Services",
      description: "Comprehensive IT services and infrastructure management to keep your systems running smoothly.",
      icon: "💻",
      features: [
        "System Administration",
        "Network Management",
        "24/7 Technical Support",
        "Hardware & Software Management",
        "Backup & Disaster Recovery",
        "IT Consulting & Strategy"
      ],
      benefits: [
        "Reliable system performance",
        "Reduced downtime",
        "Cost-effective IT management",
        "Expert technical support"
      ],
      pricing: "Starting at $2,000/month",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{service.icon}</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Starting at</p>
                        <p className="text-lg font-bold text-blue-600">{service.pricing}</p>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we deliver exceptional results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your business needs, challenges, and goals to understand your requirements."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a customized strategy and roadmap tailored to your specific objectives."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our expert team implements the solution with regular updates and quality assurance."
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support, monitoring, and optimization to ensure continued success."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;