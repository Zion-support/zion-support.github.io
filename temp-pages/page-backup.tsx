<<<<<<< HEAD:temp-pages/page-backup.tsx
'use client'
import React from 'react'
'use client'
const features = [
=======
"use client";
import React from "react";

const Itassetmanagement = () => {
  const features = [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a086:app/it-asset-management/page.tsx
    {
      icon: "🚀",
      title: "Professional",
      description: "Professional it asset management solutions"
    },
    {
      icon: "⚡",
      title: "Fast & Reliable",
      description: "Quick and efficient service delivery"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Comprehensive analytics and insights"
    },
    {
<<<<<<< HEAD:temp-pages/page-backup.tsx
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    },
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success',
  ];
export default function Page() {
  return (
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"}>{Transform your business with our advanced page backup solutions.}</p>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" >Our page backup solutions deliver unmatched performance, security, and scalability.</p>
                <h3 className="text-xl font-semibold text-white mb-3" >{feature.title}</h3>
                <p className="text-gray-300" >{feature.description}</p>
              </div>
            ))};
};
          </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-4xl mx-auto text-center" >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" >Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-8" >Contact our experts to discuss your page backup needs and get a customized solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" >
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"  aria-label="Action button">
                <Phone className="mr-2 h-5 w-5"  />
                Call Now
  </
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"  aria-label="Action button">
                <Mail className="mr-2 h-5 w-5"  />
                Email Us
  </
            </div>
        </div>
      </section>
  )
}
export default PageBackupPage
=======
      icon: "🔧",
      title: "Customizable",
      description: "Tailored solutions for your business needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            It Asset Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional it asset management solutions tailored to your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need for success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let us help you implement this solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a086:app/it-asset-management/page.tsx

export default Itassetmanagement;