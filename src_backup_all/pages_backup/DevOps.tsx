import React from 'react';
import { Link } from 'react-router-dom';
const DevOps: React.FC = () => {,
  const services = [,
    {
title: "CI/CD Pipeline Setup","
      description: "Automated build, test, and deployment pipelines",",
      features: [
        "GitHub Actions / GitLab CI","
        "Docker containerization","
        "Automated testing","
        "Deployment automation","
        "Rollback capabilities""
      ],
      price: "$3,000 - $15,000","
      duration: "2-6 weeks""
    },
    {
      title: "Infrastructure as Code","
      description: "Manage infrastructure with code using Terraform and Ansible",",
      features: [
        "Terraform modules","
        "Ansible playbooks","
        "CloudFormation templates","
        "Infrastructure versioning","
        "Environment management""
      ],
      price: "$4,000 - $20,000","
      duration: "3-8 weeks""
    },
    {
      title: "Monitoring & Alerting","
      description: "Comprehensive monitoring and alerting solutions",",
      features: [
        "Application monitoring","
        "Infrastructure monitoring","
        "Log aggregation","
        "Alert management","
        "Performance dashboards""
      ],
      price: "$2,500 - $12,000","
      duration: "2-4 weeks""
    },
    {
      title: "DevOps Consulting","
      description: "Strategic DevOps transformation and best practices",",
      features: [
        "DevOps assessment","
        "Process optimization","
        "Team training","
        "Tool selection","
        "Culture transformation""
      ],
      price: "$5,000 - $25,000","
      duration: "4-12 weeks""
    }
  ];,
  const tools = [
    "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions","
    "Terraform", "Ansible", "Prometheus", "Grafana", "ELK Stack","
    "AWS CodePipeline", "Azure DevOps", "Google Cloud Build", "Helm", "Istio""
  ];,
  const benefits = [
    {
      title: "Faster Deployments","
      description: "Deploy code changes in minutes, not hours","
      icon: "⚡""
    },
    {
      title: "Reduced Errors","
      description: "Automated testing reduces human errors","
      icon: "🎯""
    },
    {
      title: "Better Collaboration","
      description: "Improved communication between teams","
      icon: "🤝""
    },
    {
      title: "Cost Efficiency","
      description: "Optimize resource usage and reduce costs","
      icon: "💰""
    },
    {
      title: "Scalability","
      description: "Scale applications automatically","
      icon: "📈""
    },
    {
      title: "Reliability","
      description: "Higher uptime and system reliability","
      icon: "🛡️""
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">"
      {/* Hero Section */}
<div className="bg-gradient-to-r from-teal-600 to-green-600 py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
          <h1 className="text-5xl font-bold text-white mb-6">DevOps & SRE Services</h1>"
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">"
            Accelerate your development lifecycle with modern DevOps practices.
            Our team helps you build, deploy, and maintain applications with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-teal-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get DevOps Assessment
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 font-semibold text-lg"" />,
              View Pricing
            </Link>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps Services</h2>"
            <p className="text-xl text-gray-600">Comprehensive DevOps solutions for modern applications</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">"
                <div className="p-8">"
                  <div className="text-4xl mb-4">🔧</div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-2 mb-6">"
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">"
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">"
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />"
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">"
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>"
                      <div className="text-sm text-gray-500">{service.duration}</div>"
                    </div>
                    <Link to="/contact""
                      className="bg-gradient-to-r from-teal-500 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"" />,
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="py-20 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DevOps?</h2>"
            <p className="text-xl text-gray-600">Transform your development process with DevOps</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">"
                <div className="text-4xl mb-4">{benefit.icon}</div>"
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>"
                <p className="text-gray-600">{benefit.description}</p>"
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tools Section */}
      <div className="py-20 bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps Tools & Technologies</h2>"
            <p className="text-xl text-gray-600">We work with industry-leading DevOps tools</p>"
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">"
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:bg-gray-50 transition-colors shadow-sm">"
                <span className="text-gray-700 font-medium">{tool}</span>"
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Process Section */}
      <div className="py-20 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps Implementation Process</h2>"
            <p className="text-xl text-gray-600">Our proven methodology for DevOps transformation</p>"
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-teal-600">1</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>"
              <p className="text-gray-600">Evaluate current processes and identify improvement opportunities</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-green-600">2</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>"
              <p className="text-gray-600">Create comprehensive DevOps strategy and implementation plan</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-emerald-600">3</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>"
              <p className="text-gray-600">Deploy tools, processes, and automation solutions</p>"
            </div>
            <div className="text-center">"
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl font-bold text-lime-600">4</span>"
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>"
              <p className="text-gray-600">Continuous improvement and performance optimization</p>"
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-teal-600 to-green-600">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">"
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your DevOps?</h2>"
          <p className="text-xl text-teal-100 mb-8">"
            Get a free DevOps assessment and discover how we can accelerate your development process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link to="/contact""
              className="bg-white text-teal-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"" />,
              Get Free Assessment
            </Link>
            <Link to="/pricing""
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300 font-semibold text-lg"" />,
              View DevOps Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
