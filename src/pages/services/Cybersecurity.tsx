import React from 'react';

const Cybersecurity: React.FC = () => {
  const securityServices = [
    {
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and response systems to protect your infrastructure.',
      features: ['Real-time Monitoring', 'Automated Response', 'Threat Intelligence', 'Incident Analysis'],
      icon: '🛡️'
    },
    {
      title: 'Security Audits & Assessments',
      description: 'Comprehensive security assessments and compliance audits.',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Review', 'Risk Analysis'],
      icon: '🔍'
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents.',
      features: ['24/7 Monitoring', 'Emergency Response', 'Forensic Analysis', 'Recovery Planning'],
      icon: '🚨'
    },
    {
      title: 'Identity & Access Management',
      description: 'Secure identity management and access control solutions.',
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Role-Based Access', 'Identity Governance'],
      icon: '🔐'
    },
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection and privacy solutions.',
      features: ['Data Encryption', 'Backup & Recovery', 'Privacy Compliance', 'Data Classification'],
      icon: '🔒'
    },
    {
      title: 'Security Training',
      description: 'Employee training and awareness programs.',
      features: ['Security Awareness', 'Phishing Simulation', 'Compliance Training', 'Best Practices'],
      icon: '🎓'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your business with comprehensive security solutions designed to 
            safeguard your data, systems, and operations from evolving cyber threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {securityServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Security Stats */}
        <div className="bg-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Security Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">< 1hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Secure Your Business Today</h2>
          <p className="text-lg mb-6">
            Don't wait for a security breach. Let our experts assess your current 
            security posture and implement comprehensive protection.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Security Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;