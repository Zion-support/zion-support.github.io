import React from 'react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
<<<<<<< HEAD:app/services/page.tsx
}
=======
}
<<<<<<< HEAD:temp-broken/services/page.tsx
=======
'use client';
import React, { Helmet } from 'react-helmet-async';
import React, { Brain, Cloud, Shield, Zap, CheckCircle } from 'lucide-react';
const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      features: ['Machine Learning Models', 'NLP Applications', 'Computer Vision', 'Predictive Analytics'],'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, management, and optimization services for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure Management', 'Scalability Solutions', 'Cost Optimization'],'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving cyber threats.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response'],'
    },
    {
      icon: Zap,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your operations.',
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Vendor Management'],'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including artificial intelligence solutions, cloud services, cybersecurity, and IT consulting." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"
        <div className="max-w-7xl mx-auto text-center">"
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services;
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations ;
            and drive sustainable growth in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">"
        <div className="max-w-7xl mx-auto">"
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">"
                <div className="flex items-center mb-6">"
                  <service.icon className="h-12 w-12 text-blue-600 mr-4" />"
                  <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>"
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">"
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />"
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">"
        <div className="max-w-7xl mx-auto">"
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Process;
          </h2>
          <div className="grid md:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>"
              <p className="text-gray-600">We analyze your business needs and challenges to understand your requirements.</p>
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>"
              <p className="text-gray-600">We develop a comprehensive strategy tailored to your specific goals.</p>
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>"
              <p className="text-gray-600">We execute the solution with precision and attention to detail.</p>
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>"
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>"
              <p className="text-gray-600">We provide ongoing support and optimization to ensure success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">"
        <div className="max-w-4xl mx-auto text-center">"
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">"
            Let's discuss how our services can help transform your business.'
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today;
          </button>
        </div>
      </section>
    </div>
  );
  );
  );
};

export default ServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
>>>>>>> cursor/fix-errors-and-merge-to-main-9706:temp-broken/services/page.tsx
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc:app/services/page.tsx
