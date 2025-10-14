'use client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
'use client'
import React, { useState } from 'react'
const SolutionsPage: React.FC  = () => {
  const [activeTab, setActiveTab] = useState('ai')
  const _solutionCategories = [
    {
      id: 'ai',
      name: 'AI Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description:     ,
$4},
    {
      id: 'it',
      name: 'IT Infrastructure',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description:     ,
$4},
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      description:     ,
$4},
    {
      id: 'automation',
      name: 'Automation',
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      description:     ,
$4}
  ]
  const solutions = {
    ai: [
      {
        title: 'AI-Powered Analytics',
        description: 'Transform raw data into actionable insights with advanced AI analytics',
        features: ['Predictive Analytics', 'Real-time Insights', 'Automated Reporting', 'Custom Dashboards'],
        pricing: 'Starting at $1,500/month',
        icon: BarChart,
        color:       ,
$4},
      {
        title: 'AI Marketing Automation',
        description: 'Revolutionize your marketing with AI-powered automation and personalization',
        features: ['Campaign Optimization', 'Customer Segmentation', 'Content Generation', 'Performance Tracking'],
        pricing: 'Starting at $199/month',
        icon: Target,
        color:       ,
$4},
      {
        title: 'AI Customer Support',
        description: 'Enhance customer experience with intelligent AI-powered support systems',
        features: ['24/7 Chatbots', 'Sentiment Analysis', 'Automated Responses', 'Human Handoff'],
        pricing: 'Starting at $299/month',
        icon: Users,
        color:       ,
$4},
      {
        title: 'AI Process Automation',
        description: 'Automate complex business processes with intelligent decision-making capabilities',
        features: ['Workflow Automation', 'Exception Handling', 'Process Optimization', 'Compliance Monitoring'],
        pricing: 'Starting at $399/month',
        icon: Zap,
        color:       ,
$4}
    ],
    it: [
      {
        title: 'Cloud Migration',
        description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime',
        features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', '24/7 Support'],
        pricing: 'Starting at $1,299/month',
        icon: Cloud,
        color:       ,
$4},
      {
        title: 'IT Infrastructure Management',
        description: 'Comprehensive IT infrastructure management and optimization services',
        features: ['Server Management', 'Network Monitoring', 'Performance Optimization', 'Disaster Recovery'],
        pricing: 'Starting at $799/month',
        icon: Globe,
        color:       ,
$4},
      {
        title: 'DevOps & CI/CD',
        description: 'Streamline development workflows with automated testing and deployment',
        features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring & Alerting'],
        pricing: 'Starting at $599/month',
        icon: Zap,
        color:       ,
$4},
      {
        title: 'Database Management',
        description: 'Optimize and manage your databases with AI-powered performance tuning',
        features: ['Database Optimization', 'Performance Monitoring', 'Backup & Recovery', 'Security Hardening'],
        pricing: 'Starting at $399/month',
        icon: BarChart,
        color:       ,
$4}
    ],
    security: [
      {
        title: 'Cybersecurity Suite',
        description: 'Comprehensive security solutions with threat detection and response',
        features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],
        pricing: 'Starting at $799/month',
        icon: Shield,
        color:       ,
$4},
      {
        title: 'AI Security Monitoring',
        description: 'Real-time security monitoring with AI-powered threat detection',
        features: ['Real-time Monitoring', 'AI Threat Detection', 'Automated Response', 'Security Analytics'],
        pricing: 'Starting at $299/month',
        icon: Brain,
        color:       ,
$4},
      {
        title: 'Compliance Management',
        description: 'Ensure regulatory compliance with automated compliance monitoring',
        features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support'],
        pricing: 'Starting at $499/month',
        icon: CheckCircle,
        color:       ,
$4},
      {
        title: 'Security Training',
        description: 'Comprehensive security awareness training for your organization',
        features: ['Phishing Simulation', 'Security Awareness', 'Incident Response Training', 'Compliance Training'],
        pricing: 'Starting at $199/month',
        icon: Users,
        color:       ,
$4}
    ],
    automation: [
      {
        title: 'Business Process Automation',
        description: 'Automate complex business processes with intelligent workflow management',
        features: ['Workflow Design', 'Process Optimization', 'Exception Handling', 'Performance Analytics'],
        pricing: 'Starting at $399/month',
        icon: Zap,
        color:       ,
$4},
      {
        title: 'IT Automation',
        description: 'Automate IT operations and reduce manual tasks with intelligent automation',
        features: ['Server Automation', 'Network Automation', 'Backup Automation', 'Monitoring Automation'],
        pricing: 'Starting at $299/month',
        icon: Cloud,
        color:       ,
$4},
      {
        title: 'Marketing Automation',
        description: 'Automate marketing campaigns and customer engagement processes',
        features: ['Email Automation', 'Social Media Automation', 'Lead Nurturing', 'Campaign Management'],
        pricing: 'Starting at $199/month',
        icon: Target,
        color:       ,
$4},
      {
        title: 'Data Automation',
        description: 'Automate data processing, analysis, and reporting workflows',
        features: ['Data Collection', 'Data Processing', 'Report Generation', 'Data Quality Management'],
        pricing: 'Starting at $249/month',
        icon: BarChart,
        color:       ,
$4}
    ]
  }
  const benefits = [
    {
      icon: Star,
      title: 'Proven Results',
      description:     ,
$4},
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:     ,
$4},
    {
      icon: Globe,
      title: 'Global Support',
      description:     ,
$4},
    {
      icon: Users,
      title: 'Expert Team',
      description:     ,
$4}
  ]
  return (
    <React.Fragment></React.Fragment>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
                {/* Header */}
                <div className="text-center mb-16"></div>
            <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text"></h1>
              Our Solutions,
  
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Comprehensive technology solutions designed to transform your business operations 
              and drive innovation across every aspect of your organization.
          {/* Solution Categories Tabs */}
                <div className="mb-12"></div>
            <div className="flex flex-wrap justify-center gap-4 mb-8"></div>
                {solutionCategories.map((category) => (
                <$2 />
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === category.id
                      ? `${category.bgColor} ${category.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium"></span>
                {category.name}
              ))}
                <div className="text-center"></div>
              <p className="text-gray-300 max-w-2xl mx-auto"></p>
    <div>Coming Soon</div>
  )
}
  const [activeTab, setActiveTab] = useState('ai')
  const _solutionCategories = [
  // TOD,
  O: Add items
],
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  i,
  d: 'ai',
      nam,
  e: 'AI Solutions',
      ico,
  n: Brain,
      colo,
  r: 'text-purple-400',
      bgColo,
  r: 'bg-purple-500/10',
      descriptio,
  n: 'Transform your business with cutting-edge artificial intelligence'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  i,
  d: 'it',
      nam,
  e: 'IT Infrastructure',
      ico,
  n: Cloud,
      colo,
  r: 'text-blue-400',
      bgColo,
  r: 'bg-blue-500/10',
      descriptio,
  n: 'Robust and scalable IT infrastructure solutions'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  i,
  d: 'security',
      nam,
  e: 'Cybersecurity',
      ico,
  n: Shield,
      colo,
  r: 'text-red-400',
      bgColo,
  r: 'bg-red-500/10',
      descriptio,
  n: 'Comprehensive security solutions for your digital assets'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  i,
  d: 'automation',
      nam,
  e: 'Automation',
      ico,
  n: Zap,
      colo,
  r: 'text-yellow-400',
      bgColo,
  r: 'bg-yellow-500/10',
      descriptio,
  n: 'Streamline operations with intelligent automation'
    }
  ]
  const solutions = {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  a,
  i: [
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'AI-Powered Analytics',
        descriptio,
  n: 'Transform raw data into actionable insights with advanced AI analytics',
        feature,
  s: ['Predictive Analytics', 'Real-time Insights', 'Automated Reporting', 'Custom Dashboards'],
        pricin,
  g: 'Starting at $1,500/month',
        ico,
  n: BarChart,
        colo,
  r: 'text-blue-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'AI Marketing Automation',
        descriptio,
  n: 'Revolutionize your marketing with AI-powered automation and personalization',
        feature,
  s: ['Campaign Optimization', 'Customer Segmentation', 'Content Generation', 'Performance Tracking'],
        pricin,
  g: 'Starting at $199/month',
        ico,
  n: Target,
        colo,
  r: 'text-pink-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'AI Customer Support',
        descriptio,
  n: 'Enhance customer experience with intelligent AI-powered support systems',
        feature,
  s: ['24/7 Chatbots', 'Sentiment Analysis', 'Automated Responses', 'Human Handoff'],
        pricin,
  g: 'Starting at $299/month',
        ico,
  n: Users,
        colo,
  r: 'text-green-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'AI Process Automation',
        descriptio,
  n: 'Automate complex business processes with intelligent decision-making capabilities',
        feature,
  s: ['Workflow Automation', 'Exception Handling', 'Process Optimization', 'Compliance Monitoring'],
        pricin,
  g: 'Starting at $399/month',
        ico,
  n: Zap,
        colo,
  r: 'text-yellow-400'
      }
//     ],
    i,
  t: [
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'Cloud Migration',
        descriptio,
  n: 'Seamlessly migrate your infrastructure to the cloud with zero downtime',
        feature,
  s: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', '24/7 Support'],
        pricin,
  g: 'Starting at $1,299/month',
        ico,
  n: Cloud,
        colo,
  r: 'text-blue-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'IT Infrastructure Management',
        descriptio,
  n: 'Comprehensive IT infrastructure management and optimization services',
        feature,
  s: ['Server Management', 'Network Monitoring', 'Performance Optimization', 'Disaster Recovery'],
        pricin,
  g: 'Starting at $799/month',
        ico,
  n: Globe,
        colo,
  r: 'text-green-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'DevOps & CI/CD',
        descriptio,
  n: 'Streamline development workflows with automated testing and deployment',
        feature,
  s: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring & Alerting'],
        pricin,
  g: 'Starting at $599/month',
        ico,
  n: Zap,
        colo,
  r: 'text-purple-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'Database Management',
        descriptio,
  n: 'Optimize and manage your databases with AI-powered performance tuning',
        feature,
  s: ['Database Optimization', 'Performance Monitoring', 'Backup & Recovery', 'Security Hardening'],
        pricin,
  g: 'Starting at $399/month',
        ico,
  n: BarChart,
        colo,
  r: 'text-orange-400'
      }
//     ],
    securit,
  y: [
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'Cybersecurity Suite',
        descriptio,
  n: 'Comprehensive security solutions with threat detection and response',
        feature,
  s: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],
        pricin,
  g: 'Starting at $799/month',
        ico,
  n: Shield,
        colo,
  r: 'text-red-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'AI Security Monitoring',
        descriptio,
  n: 'Real-time security monitoring with AI-powered threat detection',
        feature,
  s: ['Real-time Monitoring', 'AI Threat Detection', 'Automated Response', 'Security Analytics'],
        pricin,
  g: 'Starting at $299/month',
        ico,
  n: Brain,
        colo,
  r: 'text-purple-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'Compliance Management',
        descriptio,
  n: 'Ensure regulatory compliance with automated compliance monitoring',
        feature,
  s: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support'],
        pricin,
  g: 'Starting at $499/month',
        ico,
  n: CheckCircle,
        colo,
  r: 'text-green-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'Security Training',
        descriptio,
  n: 'Comprehensive security awareness training for your organization',
        feature,
  s: ['Phishing Simulation', 'Security Awareness', 'Incident Response Training', 'Compliance Training'],
        pricin,
  g: 'Starting at $199/month',
        ico,
  n: Users,
        colo,
  r: 'text-blue-400'
      }
//     ],
    automatio,
  n: [
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'Business Process Automation',
        descriptio,
  n: 'Automate complex business processes with intelligent workflow management',
        feature,
  s: ['Workflow Design', 'Process Optimization', 'Exception Handling', 'Performance Analytics'],
        pricin,
  g: 'Starting at $399/month',
        ico,
  n: Zap,
        colo,
  r: 'text-yellow-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'IT Automation',
        descriptio,
  n: 'Automate IT operations and reduce manual tasks with intelligent automation',
        feature,
  s: ['Server Automation', 'Network Automation', 'Backup Automation', 'Monitoring Automation'],
        pricin,
  g: 'Starting at $299/month',
        ico,
  n: Cloud,
        colo,
  r: 'text-blue-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'Marketing Automation',
        descriptio,
  n: 'Automate marketing campaigns and customer engagement processes',
        feature,
  s: ['Email Automation', 'Social Media Automation', 'Lead Nurturing', 'Campaign Management'],
        pricin,
  g: 'Starting at $199/month',
        ico,
  n: Target,
        colo,
  r: 'text-pink-400'
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: 'Data Automation',
        descriptio,
  n: 'Automate data processing, analysis, and reporting workflows',
        feature,
  s: ['Data Collection', 'Data Processing', 'Report Generation', 'Data Quality Management'],
        pricin,
  g: 'Starting at $249/month',
        ico,
  n: BarChart,
        colo,
  r: 'text-green-400'
      }
//     ]
  }
  const benefits = [
  // TOD,
  O: Add items
],
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  ico,
  n: Star,
      titl,
  e: 'Proven Results',
      descriptio,
  n: '300% average ROI and 95% process automation for our clients'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  ico,
  n: Shield,
      titl,
  e: 'Enterprise Security',
      descriptio,
  n: 'Bank-level security and compliance for all our solutions'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  ico,
  n: Globe,
      titl,
  e: 'Global Support',
      descriptio,
  n: '24/7 support and services across multiple time zones'
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  ico,
  n: Users,
      titl,
  e: 'Expert Team',
      descriptio,
  n: 'Certified professionals with years of industry experience'
    }
  ]
  return (<div>Coming Soon</div>)
  )
          <React.Fragment></React.Fragment>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        <div className="container mx-auto px-4 py-16 pt-24"></div>
                {/* Header */}"
          <div className="text-center mb-16"></div>"
            < className="text-4xl,"$2 />
  md: text-5xl font-bold text-white mb-6 neon-text"></h1>
// Our Solutions
          </h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
// Comprehensive technology solutions designed to transform your business operations,
//               and drive innovation across every aspect of your organization.
          {/* Solution Categories Tabs */}"
          <div className="mb-12"></div>"
            <div className="flex flex-wrap justify-center gap-4 mb-8"></div>
                {solutionCategories.map((category) => ()}
                <button></button>
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${}
  // TOD,
  O: Add content,
};
                    activeTab === category.id;`
                      ? `${category.bgColor} ${category.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300,
  hover:bg-slate-700/50 border-2 border-transparent'`
                  }`}
//                 >
          "
          <category.icon className="w-5 h-5 mr-2" /></category>"
                  <span className="font-medium"></span>
                {category.name}
              ))}
                </div>"
            <div className="text-center"></div>"
              <p className="text-gray-300 max-w-2xl mx-auto"></p>
                {solutionCategories.find(cat => cat.id === activeTab)?.description}
          {/* Solutions Grid */}
                <div className="mb-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
                {solutions[activeTab as keyof typeof solutions].map((solution, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <div className="flex items-start mb-4"></div>
                    <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}></div>
                      <solution.icon className={`w-6 h-6 ${solution.color}`} />
                    <div className="flex-1"></div>
                      <h3 className="text-xl font-semibold text-white mb-2"></h3>
                {solution.title}
                <p className="text-gray-300 text-sm mb-4"></p>
                {solution.description}
                <div className="mb-4"></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:
                    <ul className="space-y-1"></ul>
                {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                {/* Solutions Grid */}"
          <div className="mb-16"></div>"
            < className="grid grid-cols-1,"$2 />
  md:grid-cols-2 gap-8">
                {solutions[activeTab as keyof typeof solutions].map((solution, index) => ()}"
          < key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,"$2 />
  hover:border-cyan-400/50 transition-all duration-300"></div>"
                  <div className="flex items-start mb-4"></div>`
                    <div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}></div>`
                      <solution.icon className={`w-6 h-6 ${solution.color}`} />
                    </div>"
                    <div className="flex-1"></div>"
                      <h3 className="text-xl font-semibold text-white mb-2"></h3>
                {solution.title}
                </h3>"
                      <p className="text-gray-300 text-sm mb-4"></p>
                {solution.description}
                </div>"
                  <div className="mb-4"></div>"
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key,
  Features:</h4>"
                    <ul className="space-y-1"></ul>
                {solution.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>"
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                {feature}
                      ))}
                <div className="flex items-center justify-between"></div>
                    <div className={`text-lg font-bold ${solution.color}`}></div>
                {solution.pricing}
                <$2 />
                      href="/contact"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                  </div>"
                  <div className="flex items-center justify-between"></div>`
                    <div className={`text-lg font-bold ${solution.color}`}></div>
                {solution.pricing}
                </div>
                    <$2 />
                      href="/contact" className="inline-flex items-center text-cyan-400 hover: text-cyan-300 font-medium text-sm transition-colors"
// >
//                       Learn More,"
          <ArrowRight className="w-4 h-4 ml-1" /></ArrowRight>
                </a>
                  </div>
                </div>
              ))}
          {/* Benefits Section */}
                <div className="mb-16"></div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>
              Why Choose Our Solutions?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white mb-2"></h3>
                {benefit.title}
          {/* Benefits Section */}"
          <div className="mb-16"></div>"
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text"></h2>
// Why Choose Our Solutions?
          </h2>"
            < className="grid grid-cols-1,$2 />
  md:grid-cols-2,"
  lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => ()}"
          <div key={index} className="text-center"></div>"
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>"
                  <h3 className="text-lg font-semibold text-white mb-2"></h3>
                {benefit.title}
                </h3>"
                  <p className="text-gray-300 text-sm"></p>
                {benefit.description}
              ))}
          {/* CTA Section */}
                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>
            <h2 className="text-2xl font-bold text-white mb-4"></h2>
              Ready to Transform Your Business?
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
              Get a free consultation and discover how our solutions can revolutionize your operations 
              and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
              <$2 />
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
  
              <$2 />
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
  
              <$2 />
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email Us,
  
          {/* CTA Section */}"
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center"></div>"
            <h2 className="text-2xl font-bold text-white mb-4"></h2>
// Ready to Transform Your Business?
          </h2>"
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto"></p>
// Get a free consultation and discover how our solutions can revolutionize your operations
//               and drive unprecedented growth.
          </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
              <$2 />
                href="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
// >
          "
          <Phone className="w-5 h-5 mr-2" />
// Get Free Consultation
              <$2 />
                href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
// >
          "
          <Phone className="w-4 h-4 mr-2" /></Phone>
// (302) 464-0950
          </a>
              <$2 />
                href="mailto:kleber@ziontechgroup.com" className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
// >
          "
          <Mail className="w-4 h-4 mr-2" /></Mail>
// Email Us
          </a>
                </div>
          </div>
                </div>
      </div>
      <Footer />
    </React.Fragment>
                </div>
  ),
}
export default SolutionsPage</a>
                </a>
  </a>
                </a>
</div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </span></span>
                </button></p>
                </p></p>
                </p></p>
                </p></h2>
                </h3></h3>
                </h4></ul>
                </ul></li>