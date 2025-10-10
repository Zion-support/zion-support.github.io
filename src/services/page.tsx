'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const microSAASServices = [
    {
      name: "AI-Powered Task Manager Pro",
      description: "Intelligent task management with AI-driven prioritization, automated scheduling, and team collaboration features.",
      price: "$29/month",
      originalPrice: "$49/month",
      features: [
        "Smart task prioritization using AI",
        "Automated scheduling and reminders",
        "Team collaboration and sharing",
        "Progress analytics and reporting",
        "Integration with 50+ apps",
        "Mobile and desktop access",
        "Custom workflows and templates",
        "Priority support"
      ],
      link: "/task-manager-pro",
      category: "Productivity",
      rating: 4.9,
      users: "10,000+"
    },
    {
      name: "AI Expense Tracker",
      description: "Automated expense tracking with receipt scanning, smart categorization, and tax preparation assistance.",
      price: "$19/month",
      originalPrice: "$39/month",
      features: [
        "Receipt scanning with OCR",
        "Auto-categorization using AI",
        "Budget alerts and insights",
        "Tax preparation assistance",
        "Multi-currency support",
        "Expense reporting",
        "Integration with accounting software",
        "Mobile receipt capture"
      ],
      link: "/expense-tracker",
      category: "Finance",
      rating: 4.8,
      users: "5,000+"
    },
    {
      name: "AI Analytics Dashboard",
      description: "Real-time business analytics with predictive insights, custom reports, and data visualization.",
      price: "$49/month",
      originalPrice: "$99/month",
      features: [
        "Real-time data analytics",
        "Predictive insights and forecasting",
        "Custom report generation",
        "Interactive data visualization",
        "API integrations",
        "Automated alerts",
        "Team collaboration",
        "Export to multiple formats"
      ],
      link: "/ai-analytics-dashboard",
      category: "Analytics",
      rating: 4.9,
      users: "15,000+"
    },
    {
      name: "AI CRM Assistant",
      description: "Intelligent customer relationship management with automated follow-ups, lead scoring, and sales forecasting.",
      price: "$39/month",
      originalPrice: "$79/month",
      features: [
        "AI-powered lead scoring",
        "Automated follow-up sequences",
        "Sales forecasting and insights",
        "Customer behavior analysis",
        "Email and phone integration",
        "Pipeline management",
        "Custom field creation",
        "Advanced reporting"
      ],
      link: "/ai-crm",
      category: "Sales",
      rating: 4.8,
      users: "8,000+"
    },
    {
      name: "AI Content Generator",
      description: "Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI.",
      price: "$25/month",
      originalPrice: "$49/month",
      features: [
        "Blog post generation",
        "Social media content creation",
        "Email marketing campaigns",
        "Product descriptions",
        "SEO-optimized content",
        "Multiple language support",
        "Content templates",
        "Brand voice customization"
      ],
      link: "/ai-content-generation",
      category: "Marketing",
      rating: 4.7,
      users: "12,000+"
    },
    {
      name: "AI Customer Support Bot",
      description: "24/7 intelligent customer support with natural language processing and seamless human handoff.",
      price: "$59/month",
      originalPrice: "$119/month",
      features: [
        "24/7 automated support",
        "Natural language processing",
        "Multi-language support",
        "Sentiment analysis",
        "Human handoff capability",
        "Knowledge base integration",
        "Performance analytics",
        "Custom training"
      ],
      link: "/ai-customer-support-bot",
      category: "Support",
      rating: 4.9,
      users: "20,000+"
    }
  ];

  const aiServices = [
    {
      name: "AI Data Analytics",
      description: "Transform raw data into actionable insights with AI-powered analytics and machine learning.",
      price: "From $149/month",
      features: [
        "Advanced data processing",
        "Machine learning models",
        "Predictive analytics",
        "Custom dashboards",
        "Real-time monitoring",
        "Data visualization",
        "API integrations",
        "Expert consultation"
      ],
      category: "Analytics"
    },
    {
      name: "AI Cybersecurity Suite",
      description: "Advanced threat detection and prevention using machine learning and behavioral analysis.",
      price: "From $299/month",
      features: [
        "Threat detection and prevention",
        "Vulnerability scanning",
        "Incident response automation",
        "Compliance monitoring",
        "Security analytics",
        "24/7 monitoring",
        "Expert security team",
        "Custom security policies"
      ],
      category: "Security"
    },
    {
      name: "AI Marketing Automation",
      description: "Automate your marketing campaigns with AI-driven personalization and optimization.",
      price: "From $199/month",
      features: [
        "Campaign automation",
        "Personalization engine",
        "A/B testing optimization",
        "Customer segmentation",
        "Email marketing",
        "Social media management",
        "Performance analytics",
        "ROI tracking"
      ],
      category: "Marketing"
    },
    {
      name: "AI Workflow Automation",
      description: "Streamline business processes with intelligent automation and workflow optimization.",
      price: "From $179/month",
      features: [
        "Process automation",
        "Workflow optimization",
        "Integration management",
        "Error handling",
        "Performance monitoring",
        "Custom workflows",
        "Team collaboration",
        "Scalable solutions"
      ],
      category: "Automation"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions for businesses of all sizes with 99.9% uptime guarantee.",
      price: "From $199/month",
      features: [
        "AWS/Azure/GCP setup",
        "Auto-scaling configuration",
        "Backup and disaster recovery",
        "24/7 monitoring",
        "Security implementation",
        "Cost optimization",
        "Migration services",
        "Expert support"
      ],
      category: "Infrastructure"
    },
    {
      name: "Network Security",
      description: "Comprehensive network security solutions and continuous monitoring.",
      price: "From $299/month",
      features: [
        "Firewall management",
        "VPN setup and maintenance",
        "Intrusion detection",
        "Security audits",
        "Threat monitoring",
        "Compliance management",
        "Incident response",
        "Security training"
      ],
      category: "Security"
    },
    {
      name: "Database Management",
      description: "Expert database design, optimization, and maintenance services.",
      price: "From $249/month",
      features: [
        "Database design and architecture",
        "Performance optimization",
        "Backup and recovery strategies",
        "Migration services",
        "Security implementation",
        "Monitoring and maintenance",
        "Scalability planning",
        "Expert consultation"
      ],
      category: "Database"
    },
    {
      name: "DevOps & CI/CD",
      description: "Streamlined development and deployment processes with modern DevOps practices.",
      price: "From $399/month",
      features: [
        "CI/CD pipeline setup",
        "Container orchestration",
        "Infrastructure as code",
        "Monitoring and logging",
        "Security integration",
        "Performance optimization",
        "Team training",
        "Ongoing support"
      ],
      category: "DevOps"
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI services, micro SAAS solutions, and IT services by Zion Tech Group. Transform your business with our cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, cloud computing, cybersecurity, data analytics, business automation" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI services, micro SAAS solutions, and IT services by Zion Tech Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions, micro SAAS services, and enterprise IT services 
              designed to accelerate your digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS solutions designed to streamline your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative">
                {/* Badge */}
                <div className="absolute -top-3 left-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.category}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(service.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {service.rating} ({service.users} users)
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                    <span className="ml-2 text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                      Save {Math.round((1 - parseFloat(service.price.replace('$', '')) / parseFloat(service.originalPrice.replace('$', ''))) * 100)}%
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-2">
                  <Link 
                    to={service.link}
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                  <Link 
                    to="/contact"
                    className="block w-full text-center border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/ai-services"
                  className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services to keep your business running smoothly and securely
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/it-services"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with exceptional service to deliver results that matter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">99.9% Uptime</h3>
              <p className="text-gray-300">Reliable service with enterprise-grade infrastructure</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert team</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-300">Track record of successful implementations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CloudIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-300">Solutions that grow with your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
            >
              Get Free Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ServicesPage;