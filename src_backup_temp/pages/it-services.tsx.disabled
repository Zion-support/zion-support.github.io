import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ;
  Server,
  Cloud,
  Shield,
  Database,
  Network,
  Code,
  Settings,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin;
} from 'lucide-react';
const ITServices: React.FC = () => {;
  const itServiceCategories = [;
    {;
      name: "Cloud Infrastructure & Migration",
      description: "Comprehensive cloud solutions and seamless migration services",
      icon: Cloud,
      count: 15,
      color: "from-blue-400 to-cyan-500",
      services: [ "AWS, Azure, GCP Management",
        "Cloud Migration Strategy",
        "Infrastructure as Code",
        "Container Orchestration" ];
},
    {;
      name: "Cybersecurity & Compliance",
      description: "Advanced security solutions to protect your digital assets",
      icon: Shield,
      count: 20,
      color: "from-red-400 to-orange-500",
      services: [ "Security Audits & Assessments",
        "Penetration Testing",
        "Compliance Management",
        "Threat Detection & Response" ];
},
    {;
      name: "Network & Infrastructure",
      description: "Robust network solutions and infrastructure management",
      icon: Network,
      count: 18,
      color: "from-green-400 to-emerald-500",
      services: [ "Network Design & Implementation",
        "Wireless Solutions",
        "VPN & Remote Access",
        "Network Monitoring" ];
},
    {;
      name: "Software Development",
      description: "Custom software solutions built with modern technologies",
      icon: Code,
      count: 25,
      color: "from-purple-400 to-pink-500",
      services: [ "Web Application Development",
        "Mobile App Development",
        "API Development",
        "Legacy System Modernization" ];
}
  ];
  const featuredITServices = [;
    {;
      title: "Quantum Cloud Infrastructure",
      description: "Next-generation quantum-enhanced cloud infrastructure with AI optimization, zero-trust security, and 99.99% uptime guarantee.",
      price: "From $5,999/month",
      features: ["Quantum-Enhanced Computing", "Hybrid Cloud Architecture", "AI-Optimized Resource Allocation", "Zero-Trust Security Framework", "Edge Computing Integration", "Automated Scaling"],
      href: "/services/quantum-cloud-infrastructure",
      color: "from-purple-400 to-indigo-500",
      popular: true,
      benefits: ["Reduce infrastructure costs by 60%", "Improve performance by 300%", "Achieve 99.99% uptime SLA", "Scale instantly to meet demand"];
},
    {;
      title: "Cloud Migration & Modernization",
      description: "End-to-end cloud migration services with modern architecture and optimization for AWS, Azure, and Google Cloud platforms.",
      price: "From $15,000",
      features: ["Cloud Strategy", "Migration Planning", "Architecture Design", "Data Migration", "Performance Optimization", "Cost Management"],
      href: "/services/cloud-migration",
      color: "from-blue-400 to-cyan-500",
      benefits: ["Reduce infrastructure costs by 40%", "Improve scalability and performance", "Enhance security and compliance", "Enable remote work capabilities"];
},
    {;
      title: "Advanced Cybersecurity Suite",
      description: "Complete security solution protecting your organization from modern threats",
      price: "From $2,999/month",
      features: [ "24/7 Threat Monitoring",
        "Automated Incident Response",
        "Compliance Management",
        "Security Training" ],
      href: "/services/cybersecurity",
      color: "from-red-400 to-orange-500",
      popular: true,
      icon: Shield;
}
  ];
  return (;
    <>;
      <Helmet>;
        <title>IT Services & Solutions - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network solutions, software development, and managed IT services." />;
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network solutions, managed IT services, software development" />;
      </Helmet>;
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">;
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">;
          <div className="absolute inset-0 bg-black opacity-50"></div>;
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center">;
              <div className="flex justify-center mb-6">;
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">;
                  <Server className="h-10 w-10 text-white" />;
                </div>;
              </div>;
              <h1 className="text-5xl md:text-6xl font-bold mb-6">;
                IT Services & Solutions;
              </h1>;
              <p className="text-xl md:text-2xl mb-8 text-gray-200">;
                Comprehensive IT services to keep your business running smoothly and securely;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link ;
                  to="/contact" ;
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                  Get IT Consultation;
                  <ArrowRight className="ml-2 h-5 w-5" />;
                </Link>;
                <Link ;
                  to="/services" ;
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">;
                  View All Services;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* IT Service Categories */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl font-bold text-gray-900 mb-4">;
                IT Service Categories;
              </h2>;
              <p className="text-xl text-gray-600">;
                Comprehensive IT solutions across all major technology domains;
              </p>;
            </div>;
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {itServiceCategories.map((category, index) => (;
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">;
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>;
                    <category.icon className="h-8 w-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">;
                    {category.name}
                  </h3>;
                  <p className="text-gray-600 mb-6">;
                    {category.description}
                  </p>;
                  <div className="mb-6">;
                    <p className="text-sm text-gray-500 mb-3">;
                      {category.count} Services Available;
                    </p>;
                    <ul className="space-y-2">;
                      {category.services.map((service, serviceIndex) => (;
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />;
                          {service}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <Link ;
                    to={`/it-services/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold">;
                    Learn More;
                    <ArrowRight className="ml-1 h-4 w-4" />;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Featured IT Services */}
        <section className="py-20 bg-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl font-bold text-gray-900 mb-4">;
                Featured IT Services;
              </h2>;
              <p className="text-xl text-gray-600">;
                Our most popular and comprehensive IT solutions;
              </p>;
            </div>;
            <div className="grid lg:grid-cols-2 gap-8">;
              {featuredITServices.map((service, index) => (;
                <div key={index} className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>;
                  {service.popular && (;
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                        Most Popular;
                      </span>;
                    </div>;
                  )}

                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>;
                    <service.icon className="h-8 w-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">;
                    {service.title}
                  </h3>;
                  <p className="text-gray-600 mb-6">;
                    {service.description}
                  </p>;
                  <div className="mb-6">;
                    <p className="text-3xl font-bold text-gray-900 mb-2">;
                      {service.price}
                    </p>;
                    <ul className="space-y-2">;
                      {service.features.map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <Link ;
                    to={service.href}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                    Get Started;
                    <ArrowRight className="ml-2 h-4 w-4" />;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl font-bold mb-4">;
                Ready to Optimize Your IT Infrastructure?;
              </h2>;
              <p className="text-xl text-gray-200">;
                Get in touch with our IT experts for a free consultation;
              </p>;
            </div>;
            <div className="grid md:grid-cols-3 gap-8 mb-12">;
              <div className="text-center">;
                <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />;
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>;
                <p className="text-gray-200">+1 302 464 0950</p>;
              </div>;
              <div className="text-center">;
                <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />;
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>;
                <p className="text-gray-200">kleber@ziontechgroup.com</p>;
              </div>;
              <div className="text-center">;
                <MapPin className="h-12 w-12 text-cyan-400 mx-auto mb-4" />;
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>;
                <p className="text-gray-200">364 E Main St STE 1008<br />Middletown DE 19709</p>;
              </div>;
            </div>;
            <div className="text-center">;
              <Link ;
                to="/contact" ;
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">;
                Schedule IT Consultation;
                <ArrowRight className="ml-2 h-5 w-5" />;
              </Link>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};
export default ITServices;