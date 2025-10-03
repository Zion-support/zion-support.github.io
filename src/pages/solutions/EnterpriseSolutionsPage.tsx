// import React from 'react';
const EnterpriseSolutionsPage: React.FC = () => {
  const enterpriseSolutions = [
    {
      title: "Enterprise AI Platform",
      description: "Comprehensive AI platform designed for large-scale enterprise deployment with advanced analytics and automation capabilities.",
      icon: "🏢",
      features: ["Scalable AI Infrastructure", "Enterprise Security", "Multi-tenant Architecture", "Advanced Analytics"],
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation solutions that modernize legacy systems and enable new digital capabilities.",
      icon: "🔄",
      features: ["Legacy Modernization", "Cloud Migration", "Process Automation", "Change Management"],
    },
    {
      title: "Enterprise Security",
      description: "Comprehensive security solutions including threat detection, compliance management, and data protection.",
      icon: "🛡️",
      features: ["Threat Detection", "Compliance Management", "Data Protection", "Security Monitoring"],
    },
    {
      title: "Enterprise Analytics",
      description: "Advanced analytics and business intelligence solutions for data-driven decision making across the organization.",
      icon: "📊",
      features: ["Business Intelligence", "Predictive Analytics", "Real-time Dashboards", "Data Governance"],
    },
    {
      title: "Enterprise Integration",
      description: "Seamless integration solutions that connect disparate systems and enable data flow across the enterprise.",
      icon: "🔗",
      features: ["System Integration", "API Management", "Data Synchronization", "Workflow Automation"],
    },
    {
      title: "Enterprise Support",
      description: "24/7 enterprise-grade support and maintenance services to ensure optimal system performance.",
      icon: "🛠️",
      features: ["24/7 Support", "Proactive Monitoring", "Performance Optimization", "Technical Consulting"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions designed for large-scale organizations including AI platforms, security, analytics, and integration services." /></Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Header */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Enterprise Solutions</h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Comprehensive technology solutions designed for large-scale enterprise deployment and digital transformation.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {enterpriseSolutions.map((solution, index) => (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{solution.icon}</div>
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{solution.title}</h3>
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{solution.description}</p>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Why Choose Our Enterprise Solutions?</h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Built for scale, security, and performance with enterprise-grade reliability
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">🏢</div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Enterprise Scale</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  Solutions designed to handle enterprise-level workloads and scale seamlessly with your organization.
                </p>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">🔒</div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Security First</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  Built with enterprise-grade security, compliance, and data protection at the core of every solution.
                </p>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">⚡</div>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">24/7 Support</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  Round-the-clock enterprise support with dedicated account management and rapid response times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Ready to Transform Your Enterprise?</h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Let's discuss how our enterprise solutions can drive your digital transformation and business growth.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <Link 
                to="/contact" 
                className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Component;