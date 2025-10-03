<<<<<<< HEAD
import React from 'react';
=======
// import React from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Smart Decision Making'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with advanced security measures.',
      features: ['Threat Detection', 'Data Protection', 'Compliance Management'],
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scale your operations with robust cloud solutions.',
      features: ['Cloud Migration', 'Infrastructure Management', 'Scalability Solutions'],
    },
    {
      icon: Cpu,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better decision making.',
      features: ['Data Processing', 'Business Intelligence', 'Predictive Analytics'],
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize your data storage and management systems.',
      features: ['Database Design', 'Performance Optimization', 'Data Migration'],
    },
    {
      icon: Cloud,
      title: 'DevOps Solutions',
      description: 'Accelerate development and deployment processes.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging'],
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for modern businesses. AI automation, cybersecurity, cloud infrastructure, and more." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud infrastructure, data analytics, DevOps, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Technology Solutions
              </h1>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Comprehensive technology solutions designed to transform your business operations and drive growth.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                <Link 
                  to="/contact"
                  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  Get Started
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </Link>
                <Link 
                  to="/services"
                  className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  View Services
                  <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Our Technology Solutions
              </h2>
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                Cutting-edge solutions tailored to meet your specific business needs and drive digital transformation.
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <IconComponent className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      </div>
                      <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        {solution.title}
                      </h3>
                    </div>
                    
                    <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      {solution.description}
                    </p>
                    
                    <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          <CheckCircle className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                          <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Let our experts help you implement the right technology solutions for your organization.
            </p>
            <Link 
              to="/contact"
              className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Get Started Today
              <ArrowRight className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            </Link>
          </div>
        </section>
      </div>
    </>
>>>>>>> 521215710f1b2caf83b9cc94fe97e9aada05ff37
  );
};

export default Solutions;