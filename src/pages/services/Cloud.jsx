import React from 'react';
import Link from 'next/link';
const CloudServices = () => {
    const cloudServices = [
        {
            title: "Cloud Migration & Strategy",
            description: "Comprehensive cloud migration services with multi-cloud strategy and cost optimization.",
            price: "From $8,500/project",
            features: ["Cloud readiness assessment", "Multi-cloud strategy planning", "Migration roadmap development", "Cost optimization analysis"]
        },
        {
            title: "Cloud-Native Development",
            description: "Build scalable applications using cloud-native technologies and microservices architecture.",
            price: "From $12,000/project",
            features: ["Microservices architecture", "Serverless development", "API-first design", "Cloud-native databases"]
        },
        {
            title: "Cloud Security & Compliance",
            description: "Enterprise-grade security solutions with compliance frameworks and threat protection.",
            price: "From $6,500/month",
            features: ["Identity and access management", "Data encryption", "Compliance monitoring", "Security auditing"]
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud & DevOps Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Accelerate your digital transformation with modern cloud infrastructure.</p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cloud Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end cloud solutions for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (<div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-blue-600 mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
          <p className="text-xl mb-8">Transform your business with cloud-native solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">Get Started</Link>
            <Link to="/services/devops-cloud" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">Learn More</Link>
          </div>
        </div>
      </section>
    </div>);
};
export default CloudServices;
