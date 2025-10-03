// import React from 'react';

const ComprehensiveITServices: React.FC = () => {
  const itServices = [
    {
      title: "Cloud Migration & Optimization",
      description: "Complete cloud migration services with cost optimization, security hardening, and performance tuning for AWS, Azure, and GCP.",
      icon: "☁️",
      features: ["Multi-cloud Strategy", "Cost Optimization", "Security Hardening", "Performance Tuning", "Disaster Recovery"],
      pricing: "Starting at $5,000/month",
      benefits: ["40% cost reduction", "99.9% uptime guarantee", "Enhanced security posture", "Scalable infrastructure"],
      technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes"]
    },
    {
      title: "DevOps & CI/CD Automation",
      description: "Modern DevOps practices with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions.",
      icon: "🔄",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Automated Testing", "Deployment Automation"],
      pricing: "Starting at $3,500/month",
      benefits: ["80% faster deployments", "50% reduction in errors", "Automated scaling", "Improved collaboration"],
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Ansible"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive cybersecurity services including threat detection, vulnerability assessment, and compliance management.",
      icon: "🛡️",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Incident Response", "Security Training"],
      pricing: "Starting at $4,200/month",
      benefits: ["24/7 threat monitoring", "SOC 2 compliance", "Reduced security risks", "Automated compliance reporting"],
      technologies: ["SIEM", "EDR", "WAF", "VPN", "Identity Management"]
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Advanced data analytics platforms with real-time dashboards, predictive analytics, and business intelligence solutions.",
      icon: "📊",
      features: ["Real-time Dashboards", "Predictive Analytics", "Data Warehousing", "ETL Processes", "Machine Learning"],
      pricing: "Starting at $2,800/month",
      benefits: ["Data-driven decisions", "Real-time insights", "Improved efficiency", "Competitive advantage"],
      technologies: ["Tableau", "Power BI", "Apache Spark", "Hadoop", "Python/R"]
    },
    {
      title: "Network Infrastructure & Security",
      description: "Complete network design, implementation, and security solutions for enterprise-grade connectivity and performance.",
      icon: "🌐",
      features: ["Network Design", "Performance Monitoring", "Security Implementation", "Load Balancing", "VPN Solutions"],
      pricing: "Starting at $2,500/month",
      benefits: ["Enhanced connectivity", "Improved performance", "Secure communications", "Reduced downtime"],
      technologies: ["Cisco", "Fortinet", "Palo Alto", "F5", "SD-WAN"]
    },
    {
      title: "Database Management & Optimization",
      description: "Expert database administration, optimization, and migration services for improved performance and reliability.",
      icon: "🗄️",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Migration Services", "High Availability"],
      pricing: "Starting at $2,200/month",
      benefits: ["Improved performance", "Data integrity", "Automated backups", "Reduced downtime"],
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle"]
    },
    {
      title: "IT Support & Managed Services",
      description: "24/7 IT support and managed services with proactive monitoring, maintenance, and help desk solutions.",
      icon: "🛠️",
      features: ["24/7 Support", "Proactive Monitoring", "System Maintenance", "Help Desk", "Remote Management"],
      pricing: "Starting at $1,800/month",
      benefits: ["Reduced IT overhead", "Improved uptime", "Expert support", "Predictable costs"],
      technologies: ["ServiceNow", "Zendesk", "Nagios", "Puppet", "Chef"]
    },
    {
      title: "Digital Transformation Consulting",
      description: "Strategic digital transformation services to modernize legacy systems and implement new technologies.",
      icon: "🚀",
      features: ["Technology Assessment", "Legacy Modernization", "Digital Strategy", "Change Management", "Training Programs"],
      pricing: "Starting at $6,000/month",
      benefits: ["Modernized systems", "Improved efficiency", "Competitive advantage", "Future-ready infrastructure"],
      technologies: ["Microservices", "API Gateway", "Event Streaming", "Cloud Native", "AI/ML"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comprehensive IT Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT services including cloud migration, DevOps, cybersecurity, data analytics, and digital transformation from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Header */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Comprehensive IT Services</h3>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              End-to-end IT solutions that modernize your infrastructure, enhance security, and drive digital transformation for sustainable growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {itServices.map((service, index) => (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.icon}</h3>
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.title}</h3>
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.description}</h3>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"></h3>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <h4 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Pricing: </h3>
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.pricing}</h3>
                  </div>

                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <h4 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Key Benefits: </h3>
                    <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"></h3>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <h4 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Technologies: </h3>
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Service Level Agreements</h3>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                We guarantee exceptional service with our comprehensive SLAs and 24/7 support
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">⏱️</h3>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Response Time</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">15 minutes for critical issues, 1 hour for standard requests</h3>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">📈</h3>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Uptime Guarantee</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">99.9% uptime SLA with financial penalties for non-compliance</h3>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">🛡️</h3>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Security</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">SOC 2 Type II compliant with regular security audits</h3>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">📞</h3>
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Support</h3>
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">24/7 support with dedicated account managers</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Industry Expertise</h3>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                We serve clients across various industries with specialized IT solutions
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {[
                { name="Healthcare", logo: "🏥", description: "HIPAA compliant solutions" },
                { name="Finance", logo: "🏦", description: "PCI DSS compliance" },
                { name="E-commerce", logo: "🛒", description: "Scalable platforms" },
                { name="Manufacturing", logo: "🏭", description: "IoT integration" },
                { name="Education", logo: "🎓", description: "Learning management" },
                { name="Government", logo: "🏛️", description: "Security clearance" }
              ].map((industry, index) => (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.logo}</h3>
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.name}</h3>
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{industry.description}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Ready to Modernize Your IT Infrastructure?</h3>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Let's discuss how our comprehensive IT services can transform your technology stack and drive business growth.';
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