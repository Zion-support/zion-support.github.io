import React from 'react';

const Cybersecurity: React.FC = () => {
  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture and vulnerabilities.",
      features: ["Penetration Testing", "Vulnerability Scanning", "Security Auditing", "Risk Assessment"]
    },
    {
      title: "Threat Detection & Response",
      description: "Advanced monitoring and rapid response to security threats and incidents.",
      features: ["24/7 Monitoring", "Incident Response", "Threat Intelligence", "Forensic Analysis"]
    },
    {
      title: "Security Architecture",
      description: "Design and implement robust security frameworks for your infrastructure.",
      features: ["Zero Trust Architecture", "Identity Management", "Access Controls", "Network Security"]
    },
    {
      title: "Compliance & Governance",
      description: "Ensure your organization meets industry standards and regulatory requirements.",
      features: ["GDPR Compliance", "SOC 2 Certification", "ISO 27001", "HIPAA Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cybersecurity</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your digital assets with comprehensive cybersecurity solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-red-900 bg-opacity-20 border border-red-500 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-red-400">Security Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">43%</div>
              <p className="text-gray-300">of cyber attacks target small businesses</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">$4.45M</div>
              <p className="text-gray-300">average cost of a data breach</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">287 days</div>
              <p className="text-gray-300">average time to identify a breach</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Secure Your Business Today</h2>
          <p className="text-gray-300 mb-6">
            Don't wait for a security incident. Contact our cybersecurity experts to assess 
            and strengthen your security posture.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Security Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export { Cybersecurity };
export default Cybersecurity;