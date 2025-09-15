import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "AI Solutions",
      description: "Custom AI applications, machine learning models, and intelligent automation systems.",
      icon: "🤖",
      href: "/services/ai-services"
    },
    {
      title: "Micro SaaS Development",
      description: "End-to-end SaaS product development with modern tech stacks and scalable architecture.",
      icon: "🚀",
      href: "/services/micro-saas"
    },
    {
      title: "IT Services",
      description: "Cloud migration, DevOps, infrastructure management, and technical support.",
      icon: "⚙️",
      href: "/services/it-services"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat assessment and compliance.",
      icon: "🔒",
      href: "/services/cybersecurity"
    },
    {
      title: "Cloud Infrastructure",
      description: "AWS, Azure, and GCP cloud solutions with optimization and cost management.",
      icon: "☁️",
      href: "/services/cloud-infrastructure"
    },
    {
      title: "Data Analytics",
      description: "Business intelligence, data visualization, and advanced analytics solutions.",
      icon: "📊",
      href: "/services/data-analytics"
    }
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      {/* Additional Services Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Specialized Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
            <p className="text-gray-600 mb-4">
              Large-scale digital transformation projects for enterprise clients with complex requirements.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Legacy system modernization</li>
              <li>• Enterprise architecture design</li>
              <li>• Integration and API development</li>
              <li>• Change management and training</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Startup Solutions</h3>
            <p className="text-gray-600 mb-4">
              Rapid prototyping and MVP development for startups and growing businesses.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• MVP development and validation</li>
              <li>• Scalable architecture planning</li>
              <li>• Technical co-founder services</li>
              <li>• Growth and scaling support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
function ServiceCard({ title, description, icon, href }: { 
  title: string; 
  description: string; 
  icon: string; 
  href: string; 
}) {
  return (
    <Link 
      to={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}