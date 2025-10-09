'use client';
import React, { useState } from 'react';

const SolutionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const _solutionCategories = [
    {
      id: name, icon,
    $4: Brain,
      color: "bg-purple-500/10",
      description: 'Transform your business with cutting-edge artificial intelligence'
    },
    {
      id: name, icon,
    $4: Cloud,
      color: "bg-blue-500/10",
      description: 'Robust and scalable IT infrastructure solutions'
    },
    {
      id: name, icon,
    $4: Shield,
      color: "bg-red-500/10",
      description: 'Comprehensive security solutions for your digital assets'
    },
    {
      id: name, icon,
    $4: Zap,
      color: "bg-yellow-500/10",
      description: 'Streamline operations with intelligent automation'
    }
  ];

  const solutions = {
    ai: [
      {
        title: "Service",
    description: "Transform raw data into actionable insights with advanced AI analytics",
        features: ['Predictive Analytics', 'Real-time Insights', 'Automated Reporting', 'Custom Dashboards'],
        pricing: icon, BarChart,
        color: 'text-blue-400'
      },
      {
        title: "Service",
    description: "Revolutionize your marketing with AI-powered automation and personalization",
        features: ['Campaign Optimization', 'Customer Segmentation', 'Content Generation', 'Performance Tracking'],
        pricing: icon, Target,
        color: 'text-pink-400'
      },
      {
        title: "Service",
    description: "Enhance customer experience with intelligent AI-powered support systems",
        features: ['24/7 Chatbots', 'Sentiment Analysis', 'Automated Responses', 'Human Handoff'],
        pricing: icon, Users,
        color: 'text-green-400'
      },
      {
        title: "Service",
    description: "Automate complex business processes with intelligent decision-making capabilities",
        features: ['Workflow Automation', 'Exception Handling', 'Process Optimization', 'Compliance Monitoring'],
        pricing: icon, Zap,
        color: 'text-yellow-400'
      }
    ],
    it: [
      {
        title: "Service",
    description: "Seamlessly migrate your infrastructure to the cloud with zero downtime",
        features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', '24/7 Support'],
        pricing: icon, Cloud,
        color: 'text-blue-400'
      },
      {
        title: "Service",
    description: "Comprehensive IT infrastructure management and optimization services",
        features: ['Server Management', 'Network Monitoring', 'Performance Optimization', 'Disaster Recovery'],
        pricing: icon, Globe,
        color: 'text-green-400'
      },
      {
        title: "Service",
    description: "Streamline development workflows with automated testing and deployment",
        features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring & Alerting'],
        pricing: icon, Zap,
        color: 'text-purple-400'
      },
      {
        title: "Service",
    description: "Optimize and manage your databases with AI-powered performance tuning",
        features: ['Database Optimization', 'Performance Monitoring', 'Backup & Recovery', 'Security Hardening'],
        pricing: icon, BarChart,
        color: 'text-orange-400'
      }
    ],
    security: [
      {
        title: "Service",
    description: "Comprehensive security solutions with threat detection and response",
        features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],
        pricing: icon, Shield,
        color: 'text-red-400'
      },
      {
        title: "Service",
    description: "Real-time security monitoring with AI-powered threat detection",
        features: ['Real-time Monitoring', 'AI Threat Detection', 'Automated Response', 'Security Analytics'],
        pricing: icon, Brain,
        color: 'text-purple-400'
      },
      {
        title: "Service",
    description: "Ensure regulatory compliance with automated compliance monitoring",
        features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support'],
        pricing: icon, CheckCircle,
        color: 'text-green-400'
      },
      {
        title: "Service",
    description: "Comprehensive security awareness training for your organization",
        features: ['Phishing Simulation', 'Security Awareness', 'Incident Response Training', 'Compliance Training'],
        pricing: icon, Users,
        color: 'text-blue-400'
      }
    ],
    automation: [
      {
        title: "Service",
    description: "Automate complex business processes with intelligent workflow management",
        features: ['Workflow Design', 'Process Optimization', 'Exception Handling', 'Performance Analytics'],
        pricing: icon, Zap,
        color: 'text-yellow-400'
      },
      {
        title: "Service",
    description: "Automate IT operations and reduce manual tasks with intelligent automation",
        features: ['Server Automation', 'Network Automation', 'Backup Automation', 'Monitoring Automation'],
        pricing: icon, Cloud,
        color: 'text-blue-400'
      },
      {
        title: "Service",
    description: "Automate marketing campaigns and customer engagement processes",
        features: ['Email Automation', 'Social Media Automation', 'Lead Nurturing', 'Campaign Management'],
        pricing: icon, Target,
        color: 'text-pink-400'
      },
      {
        title: "Service",
    description: "Automate data processing, analysis, and reporting workflows",
        features: ['Data Collection', 'Data Processing', 'Report Generation', 'Data Quality Management'],
        pricing: icon, BarChart,
        color: 'text-green-400'
      }
    ]
  };

  const benefits = [
    {
      icon: Star,
      title: "Service",
    $4: '300% average ROI and 95% process automation for our clients'
    },
    {
      icon: Shield,
      title: "Service",
    $4: 'Bank-level security and compliance for all our solutions'
    },
    {
      icon: Globe,
      title: "Service",
    $4: '24/7 support and services across multiple time zones'
    },
    {
      icon: Users,
      title: "Service",
    $4: 'Certified professionals with years of industry experience'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business operations 
              and drive innovation across every aspect of your organization.
            </p>
          </div>

          {/* Solution Categories Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {solutionCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === category.id
                      ? `${category.bgColor} ${category.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-300 max-w-2xl mx-auto">
                {solutionCategories.find(cat => cat.id === activeTab)?.description}
              </p>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions[activeTab as keyof typeof solutions].map((solution, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}>
                      <solution.icon className={`w-6 h-6 ${solution.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`text-lg font-bold ${solution.color}`}>
                      {solution.pricing}
                    </div>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get a free consultation and discover how our solutions can revolutionize your operations 
              and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SolutionsPage;
