import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu, Database, Cloud } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const Solutions: React.FC: ()  => {,
  const solutions: [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Smart Decision Making']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Protect your digital assets with advanced security measures.',
      features: ['Threat Detection', 'Data Protection', 'Compliance Management']
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scale your operations with robust cloud solutions.',
      features: ['Cloud Migration', 'Infrastructure Management', 'Scalability Solutions']
    },
    {
      icon: Cpu,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better decision making.',
      features: ['Data Processing', 'Business Intelligence', 'Predictive Analytics']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize your data storage and management systems.',
      features: ['Database Design', 'Performance Optimization', 'Data Migration']
    },
    {
      icon: Cloud,
      title: 'DevOps Solutions',
      description: 'Accelerate development and deployment processes.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging']
    }
  ];

  return (
    <>
      <Helmet >
        <title >Solutions - Zion Tech Group</title>
        <meta name: "description" content ="Comprehensive technology solutions for modern businesses. AI automation, cybersecurity, cloud infrastructure, and more." />
        <meta name: "keywords" content ="AI solutions, cybersecurity, cloud infrastructure, data analytics, DevOps, technology solutions" />
        <link rel: "canonical" href ="https://ziontechgroup.com/solutions" />
      </Helmet>

      <div className: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className: "relative py-20 px-4 sm:px-6 lg:px-8">
          <div className: "max-w-7xl mx-auto">
            <div className: "text-center">
              <h1 className: "text-4xl md:text-6xl font-bold text-gray-900 mb-6">,
  Technology Solutions
              </h1>
              <p className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto">,
  Comprehensive technology solutions designed to transform your business operations and drive growth.
              </p>
              <div className: "flex flex-col sm:flex-row gap-4 justify-center">
                <Link to: "/contact",
  className: "inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className: "ml-2 h-5 w-5" />
                </Link>
                <Link to: "/services",
  className: "inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className: "py-20 px-4 sm:px-6 lg:px-8">
          <div className: "max-w-7xl mx-auto">
            <div className: "text-center mb-16">
              <h2 className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4">,
  Our Solutions
              </h2>
              <p className: "text-xl text-gray-600 max-w-3xl mx-auto">,
  Tailored technology solutions to meet your specific business needs and objectives.
              </p>
            </div>

            <div className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key: {index} className: "bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className: "flex items-center mb-6">
                    <div className: "p-3 bg-blue-100 rounded-lg">
                      <solution .icon className: "h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className: "text-xl font-semibold text-gray-900 ml-4">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className: "text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  <ul className: "space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key: {featureIndex} className: "flex items-center text-gray-700">
                        <CheckCircle className: "h-5 w-5 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className: "py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className: "max-w-7xl mx-auto text-center">
            <h2 className: "text-3xl md:text-4xl font-bold text-white mb-4">,
  Ready to Transform Your Business?
            </h2>
            <p className: "text-xl text-blue-100 mb-8 max-w-3xl mx-auto">,
  Let our experts help you implement the right technology solutions for your business needs.
            </p>
            <Link to: "/contact",
  className: "inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Contact Us Today
              <ArrowRight className: "ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
        </div>
      </section>
    </div>
  );
};

export default Solutions;