import React from 'react';
import { Link } from 'react-router-dom'';
import { Helmet } from 'react-helmet-async';

const ComprehensiveITServices: React.FC  = () => {
  const itServices = [
    {
      title: "Cloud Migration & Optimization","
      description: "Complete cloud migration services with cost optimization, security hardening, and performance tuning for AWS, Azure, and GCP.","
      icon: "☁️","
      features: ["Multi-cloud Strategy", "Cost Optimization", "Security Hardening", "Performance Tuning", "Disaster Recovery"],"
      pricing: "Starting at $5,000/month","
      benefits: ["40% cost reduction", "99.9% uptime guarantee", "Enhanced security posture", "Scalable infrastructure"],"
      technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes"]"
    },
    {
      title: "DevOps & CI/CD Automation","
      description: "Modern DevOps practices with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions.","
      icon: "🔄","
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Automated Testing", "Deployment Automation"],"
      pricing: "Starting at $3,500/month","
      benefits: ["80% faster deployments", "50% reduction in errors", "Automated scaling", "Improved collaboration"],"
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Ansible"]"
    },
    {
      title: "Cybersecurity & Compliance","
      description: "Comprehensive cybersecurity services including threat detection, vulnerability assessment, and compliance management.","
      icon: "🛡️","
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Incident Response", "Security Training"],"
      pricing: "Starting at $4,200/month","
      benefits: ["24/7 threat monitoring", "SOC 2 compliance", "Reduced security risks", "Automated compliance reporting"],"
      technologies: ["SIEM", "EDR", "WAF", "VPN", "Identity Management"]"
    },
    {
      title: "Data Analytics & Business Intelligence","
      description: "Advanced data analytics platforms with real-time dashboards, predictive analytics, and business intelligence solutions.","
      icon: "📊","
      features: ["Real-time Dashboards", "Predictive Analytics", "Data Warehousing", "ETL Processes", "Machine Learning"],"
      pricing: "Starting at $2,800/month","
      benefits: ["Data-driven decisions", "Real-time insights", "Improved efficiency", "Competitive advantage"],"
      technologies: ["Tableau", "Power BI", "Apache Spark", "Hadoop", "Python/R"]"
    },
    {
      title: "Network Infrastructure & Security","
      description: "Complete network design, implementation, and security solutions for enterprise-grade connectivity and performance.","
      icon: "🌐","
      features: ["Network Design", "Performance Monitoring", "Security Implementation", "Load Balancing", "VPN Solutions"],"
      pricing: "Starting at $2,500/month","
      benefits: ["Enhanced connectivity", "Improved performance", "Secure communications", "Reduced downtime"],"
      technologies: ["Cisco", "Fortinet", "Palo Alto", "F5", "SD-WAN"]"
    },
    {
      title: "Database Management & Optimization","
      description: "Expert database administration, optimization, and migration services for improved performance and reliability.","
      icon: "🗄️","
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Migration Services", "High Availability"],"
      pricing: "Starting at $2,200/month","
      benefits: ["Improved performance", "Data integrity", "Automated backups", "Reduced downtime"],"
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle"]"
    },
    {
      title: "IT Support & Managed Services","
      description: "24/7 IT support and managed services with proactive monitoring, maintenance, and help desk solutions.","
      icon: "🛠️","
      features: ["24/7 Support", "Proactive Monitoring", "System Maintenance", "Help Desk", "Remote Management"],"
      pricing: "Starting at $1,800/month","
      benefits: ["Reduced IT overhead", "Improved uptime", "Expert support", "Predictable costs"],"
      technologies: ["ServiceNow", "Zendesk", "Nagios", "Puppet", "Chef"]"
    },
    {
      title: "Digital Transformation Consulting","
      description: "Strategic digital transformation services to modernize legacy systems and implement new technologies.","
      icon: "🚀","
      features: ["Technology Assessment", "Legacy Modernization", "Digital Strategy", "Change Management", "Training Programs"],"
      pricing: "Starting at $6,000/month","
      benefits: ["Modernized systems", "Improved efficiency", "Competitive advantage", "Future-ready infrastructure"],"
      technologies: ["Microservices", "API Gateway", "Event Streaming", "Cloud Native", "AI/ML"]"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Comprehensive IT Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT services including cloud migration, DevOps, cybersecurity, data analytics, and digital transformation from Zion Tech Group." />"
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">"
        {/* Header */}
        <section className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white py-16">"
          <div className="container mx-auto px-6 text-center">"
            <h1 className="text-4xl md: text-5xl font-bold mb-4">Comprehensive IT Services</h1>"
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">"
              End-to-end IT solutions that modernize your infrastructure, enhance security, and drive digital transformation for sustainable growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">"
          <div className="container mx-auto px-6">"
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">"
              {itServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover: shadow-lg transition-all duration-300 border border-gray-100">"
                  <div className="text-4xl mb-4">{service.icon}</div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6">{service.description}</p>"
                  <ul className="space-y-2 mb-6">"
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">"
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>"
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">"
                    <h4 className="font-semibold text-purple-800 mb-2">Pricing: </h4>"
                    <p className="text-purple-700 font-medium">{service.pricing}</p>"
                  </div>

                  <div className="mb-6">"
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits: </h4>"
                    <ul className="space-y-1">"
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">"
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>"
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">"
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies: </h4>"
                    <div className="flex flex-wrap gap-2">"
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">"
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="block w-full text-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-md hover:shadow-lg
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Level Agreements */}"
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Level Agreements</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                We guarantee exceptional service with our comprehensive SLAs and 24/7 support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-4 gap-8">"
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl text-center border border-blue-200">"
                <div className="text-4xl mb-4">⏱️</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>"
                <p className="text-gray-600">15 minutes for critical issues, 1 hour for standard requests</p>"
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl text-center border border-green-200">"
                <div className="text-4xl mb-4">📈</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-2">Uptime Guarantee</h3>"
                <p className="text-gray-600">99.9% uptime SLA with financial penalties for non-compliance</p>"
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl text-center border border-purple-200">"
                <div className="text-4xl mb-4">🛡️</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>"
                <p className="text-gray-600">SOC 2 Type II compliant with regular security audits</p>"
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl text-center border border-orange-200">"
                <div className="text-4xl mb-4">📞</div>"
                <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>"
                <p className="text-gray-600">24/7 support with dedicated account managers</p>"
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Expertise</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                We serve clients across various industries with specialized IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md: grid-cols-6 gap-8">"
              {[
                { name: "Healthcare", logo: "🏥", description: "HIPAA compliant solutions" },"
                { name: "Finance", logo: "🏦", description: "PCI DSS compliance" },"
                { name: "E-commerce", logo: "🛒", description: "Scalable platforms" },"
                { name: "Manufacturing", logo: "🏭", description: "IoT integration" },"
                { name: "Education", logo: "🎓", description: "Learning management" },"
                { name: "Government", logo: "🏛️", description: "Security clearance" }"
              ].map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">"
                  <div className="text-3xl mb-2">{industry.logo}</div>"
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{industry.name}</h3>"
                  <p className="text-sm text-gray-600">{industry.description}</p>"
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white">"
          <div className="container mx-auto px-6 text-center">"
            <h2 className="text-4xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>"
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">"
              Let's discuss how our comprehensive IT services can transform your technology stack and drive business growth.';
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg
              >
                Schedule Consultation
              </Link>
              <Link "
                to="/case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
"
export default ComprehensiveITServices;