import React from 'react';

export default function AboutPage() {
  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their success is our success and building long-term relationships.'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service and project delivery.'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Security is at the core of all our solutions, ensuring your data and systems are protected with industry-leading practices.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business strategy.',
      image: '👨‍💼'
    },
    {
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team specializing in AI, ML, and data science solutions.',
      image: '🤖'
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity Experts',
      description: 'Certified security professionals ensuring your systems are bulletproof.',
      image: '🔒'
    },
    {
      name: 'DevOps Team',
      role: 'Infrastructure Specialists',
      description: 'Cloud and infrastructure experts delivering scalable, reliable solutions.',
      image: '☁️'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology solutions.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a comprehensive digital transformation project.'
    },
    {
      year: '2022',
      title: 'AI Solutions Launch',
      description: 'Launched our AI and machine learning services, becoming a leader in intelligent automation.'
    },
    {
      year: '2023',
      title: 'Cybersecurity Expansion',
      description: 'Expanded our cybersecurity services and achieved SOC 2 compliance certification.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations globally and established partnerships with leading technology companies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering businesses with innovative technology solutions since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Zion Tech Group was founded with a simple yet powerful mission: to help businesses 
                harness the power of technology to achieve their goals. We believe that every 
                organization, regardless of size, deserves access to world-class technology solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and transformation. We are committed to delivering exceptional value 
                  through cutting-edge AI, cybersecurity, cloud infrastructure, and digital 
                  transformation services.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in technology solutions, setting the standard for 
                  innovation, excellence, and customer success. We envision a future where 
                  technology seamlessly integrates with business operations to create 
                  unprecedented opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind our success - a diverse team of passionate professionals 
              dedicated to delivering exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company's growth and evolution.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors font-semibold inline-block"
            >
              Get in Touch
            </a>
            <a 
              href="/services"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg transition-colors font-semibold inline-block"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}