'use client'';
import React, { useState } from 'react';';
import { Link } from 'react-router-dom';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';'
'use client'';
import React, { useState } from 'react';';';
const SolutionsPage: React.FC = () => {;
const [activeTab, setActiveTab] = useState('ai');';
const _solutionCategories = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'ai','
      name: 'AI Solutions','
      icon: Brain,
      color: 'text-purple-400','
      bgColor: 'bg-purple-500/10','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'it','
      name: 'IT Infrastructure','
      icon: Cloud,
      color: 'text-blue-400','
      bgColor: 'bg-blue-500/10','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'security','
      name: 'Cybersecurity','
      icon: Shield,
      color: 'text-red-400','
      bgColor: 'bg-red-500/10','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 'automation','
      name: 'Automation','
      icon: Zap,
      color: 'text-yellow-400','
      bgColor: 'bg-yellow-500/10','
      description:     ,
$4}
  ];
const solutions = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    ai: [
  // TODO: Add items
]
  // TODO: Add items
]
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'AI-Powered Analytics','
        description: 'Transform raw data into actionable insights with advanced AI analytics','
        features: ['Predictive Analytics', 'Real-time Insights', 'Automated Reporting', 'Custom Dashboards'],'
        pricing: 'Starting at $1,500/month','
        icon: BarChart,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'AI Marketing Automation','
        description: 'Revolutionize your marketing with AI-powered automation and personalization','
        features: ['Campaign Optimization', 'Customer Segmentation', 'Content Generation', 'Performance Tracking'],'
        pricing: 'Starting at $199/month','
        icon: Target,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'AI Customer Support','
        description: 'Enhance customer experience with intelligent AI-powered support systems','
        features: ['24/7 Chatbots', 'Sentiment Analysis', 'Automated Responses', 'Human Handoff'],'
        pricing: 'Starting at $299/month','
        icon: Users,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'AI Process Automation','
        description: 'Automate complex business processes with intelligent decision-making capabilities','
        features: ['Workflow Automation', 'Exception Handling', 'Process Optimization', 'Compliance Monitoring'],'
        pricing: 'Starting at $399/month','
        icon: Zap,
        color:       ,
$4}
    ],
    it: [
  // TODO: Add items
]
  // TODO: Add items
]
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'Cloud Migration','
        description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime','
        features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', '24/7 Support'],'
        pricing: 'Starting at $1,299/month','
        icon: Cloud,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'IT Infrastructure Management','
        description: 'Comprehensive IT infrastructure management and optimization services','
        features: ['Server Management', 'Network Monitoring', 'Performance Optimization', 'Disaster Recovery'],'
        pricing: 'Starting at $799/month','
        icon: Globe,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'DevOps & CI/CD','
        description: 'Streamline development workflows with automated testing and deployment','
        features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring & Alerting'],'
        pricing: 'Starting at $599/month','
        icon: Zap,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'Database Management','
        description: 'Optimize and manage your databases with AI-powered performance tuning','
        features: ['Database Optimization', 'Performance Monitoring', 'Backup & Recovery', 'Security Hardening'],'
        pricing: 'Starting at $399/month','
        icon: BarChart,
        color:       ,
$4}
    ],
    security: [
  // TODO: Add items
]
  // TODO: Add items
]
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'Cybersecurity Suite','
        description: 'Comprehensive security solutions with threat detection and response','
        features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],'
        pricing: 'Starting at $799/month','
        icon: Shield,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'AI Security Monitoring','
        description: 'Real-time security monitoring with AI-powered threat detection','
        features: ['Real-time Monitoring', 'AI Threat Detection', 'Automated Response', 'Security Analytics'],'
        pricing: 'Starting at $299/month','
        icon: Brain,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'Compliance Management','
        description: 'Ensure regulatory compliance with automated compliance monitoring','
        features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support'],'
        pricing: 'Starting at $499/month','
        icon: CheckCircle,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'Security Training','
        description: 'Comprehensive security awareness training for your organization','
        features: ['Phishing Simulation', 'Security Awareness', 'Incident Response Training', 'Compliance Training'],'
        pricing: 'Starting at $199/month','
        icon: Users,
        color:       ,
$4}
    ],
    automation: [
  // TODO: Add items
]
  // TODO: Add items
]
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'Business Process Automation','
        description: 'Automate complex business processes with intelligent workflow management','
        features: ['Workflow Design', 'Process Optimization', 'Exception Handling', 'Performance Analytics'],'
        pricing: 'Starting at $399/month','
        icon: Zap,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'IT Automation','
        description: 'Automate IT operations and reduce manual tasks with intelligent automation','
        features: ['Server Automation', 'Network Automation', 'Backup Automation', 'Monitoring Automation'],'
        pricing: 'Starting at $299/month','
        icon: Cloud,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'Marketing Automation','
        description: 'Automate marketing campaigns and customer engagement processes','
        features: ['Email Automation', 'Social Media Automation', 'Lead Nurturing', 'Campaign Management'],'
        pricing: 'Starting at $199/month','
        icon: Target,
        color:       ,
$4},
      {
  // TODO: Add properties
}
  // TODO: Add properties
}
        title: 'Data Automation','
        description: 'Automate data processing, analysis, and reporting workflows','
        features: ['Data Collection', 'Data Processing', 'Report Generation', 'Data Quality Management'],'
        pricing: 'Starting at $249/month','
        icon: BarChart,
        color:       ,
$4}
    ]
  }
  const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Star,
      title: 'Proven Results','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Shield,
      title: 'Enterprise Security','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Globe,
      title: 'Global Support','
      description:     ,
$4},
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: Users,
      title: 'Expert Team','
      description:     ,
$4}
  ]
  return (
  // TODO: Add parameters
)
    <React.Fragment>
<Navigation />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"container mx-auto px-4 py-16 pt-24"
          {/* Header */}
          <div className="
<h1 className="text-4 xl md: text-5 xl font-bold text-white mb-6 neon-text"text-xl text-gray-300 max-w-3 xl mx-auto mb-8"
              Comprehensive technology solutions designed to transform your business operations
              and drive innovation across every aspect of your organization.
          {/* Solution Categories Tabs */}
          <div className="
<div className="flex flex-wrap justify-center gap-4 mb-8"w-5 h-5 mr-2"
<span className="
              ))}
            <div className="text-center"text-gray-300 max-w-2 xl mx-auto"
<div>Coming Soon</div>
  )
}
  const [activeTab, setActiveTab] = useState('ai');';
const _solutionCategories = [
  // TODO: Add items
]
  // TODO: Add items
]
  // TOD,
  O: Add items
],
    {/* TODO: Fix JSX expression */}
  O: Add content,}
  i,
  d: 'ai','
      nam,
  e: 'AI Solutions','
      ico,
  n: Brain,
      colo,
  r: 'text-purple-400','
      bgColo,
  r: 'bg-purple-500/10','
      descriptio,
  n: 'Transform your business with cutting-edge artificial intelligence''
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
  i,
  d: 'it','
      nam,
  e: 'IT Infrastructure','
      ico,
  n: Cloud,
      colo,
  r: 'text-blue-400','
      bgColo,
  r: 'bg-blue-500/10','
      descriptio,
  n: 'Robust and scalable IT infrastructure solutions''
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
  i,
  d: 'security','
      nam,
  e: 'Cybersecurity','
      ico,
  n: Shield,
      colo,
  r: 'text-red-400','
      bgColo,
  r: 'bg-red-500/10','
      descriptio,
  n: 'Comprehensive security solutions for your digital assets''
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
  i,
  d: 'automation','
      nam,
  e: 'Automation','
      ico,
  n: Zap,
      colo,
  r: 'text-yellow-400','
      bgColo,
  r: 'bg-yellow-500/10','
      descriptio,
  n: 'Streamline operations with intelligent automation''
    }
  ];
const solutions = {/* TODO: Fix JSX expression */}
  O: Add content,}
  a,
  i: [
  // TODO: Add items
]
  // TODO: Add items
]
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'AI-Powered Analytics','
        descriptio,
  n: 'Transform raw data into actionable insights with advanced AI analytics','
        feature,
  s: ['Predictive Analytics', 'Real-time Insights', 'Automated Reporting', 'Custom Dashboards'],'
        pricin,
  g: 'Starting at $1,500/month','
        ico,
  n: BarChart,
        colo,
  r: 'text-blue-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'AI Marketing Automation','
        descriptio,
  n: 'Revolutionize your marketing with AI-powered automation and personalization','
        feature,
  s: ['Campaign Optimization', 'Customer Segmentation', 'Content Generation', 'Performance Tracking'],'
        pricin,
  g: 'Starting at $199/month','
        ico,
  n: Target,
        colo,
  r: 'text-pink-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'AI Customer Support','
        descriptio,
  n: 'Enhance customer experience with intelligent AI-powered support systems','
        feature,
  s: ['24/7 Chatbots', 'Sentiment Analysis', 'Automated Responses', 'Human Handoff'],'
        pricin,
  g: 'Starting at $299/month','
        ico,
  n: Users,
        colo,
  r: 'text-green-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'AI Process Automation','
        descriptio,
  n: 'Automate complex business processes with intelligent decision-making capabilities','
        feature,
  s: ['Workflow Automation', 'Exception Handling', 'Process Optimization', 'Compliance Monitoring'],'
        pricin,
  g: 'Starting at $399/month','
        ico,
  n: Zap,
        colo,
  r: 'text-yellow-400''
      }
//     ],
    i,
  t: [
  // TODO: Add items
]
  // TODO: Add items
]
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'Cloud Migration','
        descriptio,
  n: 'Seamlessly migrate your infrastructure to the cloud with zero downtime','
        feature,
  s: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', '24/7 Support'],'
        pricin,
  g: 'Starting at $1,299/month','
        ico,
  n: Cloud,
        colo,
  r: 'text-blue-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'IT Infrastructure Management','
        descriptio,
  n: 'Comprehensive IT infrastructure management and optimization services','
        feature,
  s: ['Server Management', 'Network Monitoring', 'Performance Optimization', 'Disaster Recovery'],'
        pricin,
  g: 'Starting at $799/month','
        ico,
  n: Globe,
        colo,
  r: 'text-green-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'DevOps & CI/CD','
        descriptio,
  n: 'Streamline development workflows with automated testing and deployment','
        feature,
  s: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring & Alerting'],'
        pricin,
  g: 'Starting at $599/month','
        ico,
  n: Zap,
        colo,
  r: 'text-purple-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'Database Management','
        descriptio,
  n: 'Optimize and manage your databases with AI-powered performance tuning','
        feature,
  s: ['Database Optimization', 'Performance Monitoring', 'Backup & Recovery', 'Security Hardening'],'
        pricin,
  g: 'Starting at $399/month','
        ico,
  n: BarChart,
        colo,
  r: 'text-orange-400''
      }
//     ],
    securit,
  y: [
  // TODO: Add items
]
  // TODO: Add items
]
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'Cybersecurity Suite','
        descriptio,
  n: 'Comprehensive security solutions with threat detection and response','
        feature,
  s: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management'],'
        pricin,
  g: 'Starting at $799/month','
        ico,
  n: Shield,
        colo,
  r: 'text-red-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'AI Security Monitoring','
        descriptio,
  n: 'Real-time security monitoring with AI-powered threat detection','
        feature,
  s: ['Real-time Monitoring', 'AI Threat Detection', 'Automated Response', 'Security Analytics'],'
        pricin,
  g: 'Starting at $299/month','
        ico,
  n: Brain,
        colo,
  r: 'text-purple-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'Compliance Management','
        descriptio,
  n: 'Ensure regulatory compliance with automated compliance monitoring','
        feature,
  s: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Audit Support'],'
        pricin,
  g: 'Starting at $499/month','
        ico,
  n: CheckCircle,
        colo,
  r: 'text-green-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'Security Training','
        descriptio,
  n: 'Comprehensive security awareness training for your organization','
        feature,
  s: ['Phishing Simulation', 'Security Awareness', 'Incident Response Training', 'Compliance Training'],'
        pricin,
  g: 'Starting at $199/month','
        ico,
  n: Users,
        colo,
  r: 'text-blue-400''
      }
//     ],
    automatio,
  n: [
  // TODO: Add items
]
  // TODO: Add items
]
  // TOD,
  O: Add items]
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'Business Process Automation','
        descriptio,
  n: 'Automate complex business processes with intelligent workflow management','
        feature,
  s: ['Workflow Design', 'Process Optimization', 'Exception Handling', 'Performance Analytics'],'
        pricin,
  g: 'Starting at $399/month','
        ico,
  n: Zap,
        colo,
  r: 'text-yellow-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'IT Automation','
        descriptio,
  n: 'Automate IT operations and reduce manual tasks with intelligent automation','
        feature,
  s: ['Server Automation', 'Network Automation', 'Backup Automation', 'Monitoring Automation'],'
        pricin,
  g: 'Starting at $299/month','
        ico,
  n: Cloud,
        colo,
  r: 'text-blue-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'Marketing Automation','
        descriptio,
  n: 'Automate marketing campaigns and customer engagement processes','
        feature,
  s: ['Email Automation', 'Social Media Automation', 'Lead Nurturing', 'Campaign Management'],'
        pricin,
  g: 'Starting at $199/month','
        ico,
  n: Target,
        colo,
  r: 'text-pink-400''
      },
      {/* TODO: Fix JSX expression */}
  O: Add content,}
  titl,
  e: 'Data Automation','
        descriptio,
  n: 'Automate data processing, analysis, and reporting workflows','
        feature,
  s: ['Data Collection', 'Data Processing', 'Report Generation', 'Data Quality Management'],'
        pricin,
  g: 'Starting at $249/month','
        ico,
  n: BarChart,
        colo,
  r: 'text-green-400''
      }
//     ]
  }
  const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
  // TOD,
  O: Add items
],
    {/* TODO: Fix JSX expression */}
  O: Add content,}
  ico,
  n: Star,
      titl,
  e: 'Proven Results','
      descriptio,
  n: '300% average ROI and 95% process automation for our clients''
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
  ico,
  n: Shield,
      titl,
  e: 'Enterprise Security','
      descriptio,
  n: 'Bank-level security and compliance for all our solutions''
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
  ico,
  n: Globe,
      titl,
  e: 'Global Support','
      descriptio,
  n: '24/7 support and services across multiple time zones''
    },
    {/* TODO: Fix JSX expression */}
  O: Add content,}
  ico,
  n: Users,
      titl,
  e: 'Expert Team','
      descriptio,
  n: 'Certified professionals with years of industry experience''
    }
  ]
  return (<div>Coming Soon</div>)
  )
          <React.Fragment>
<Navigation />
<div className=""
        <div className="
          {/* Header */}""text-center mb-16""text-4 xl,"
  md: text-5 xl font-bold text-white mb-6 neon-text"
</h1>
// Our Solutions
          </h1>""text-xl text-gray-300 max-w-3 xl mx-auto mb-8"
// Comprehensive technology solutions designed to transform your business operations,
//               and drive innovation across every aspect of your organization.
          {/* Solution Categories Tabs */}"
          <div className="mb-12"
            <div className="flex flex-wrap justify-center gap-4 mb-8""
          <category.icon className=""
                  <span className="
              ))}
            </div>""text-center""text-gray-300 max-w-2 xl mx-auto"
                {solutionCategories.find(cat => cat.id === activeTab)?.description}
          {/* Solutions Grid */}
          <div className="
<div className="grid grid-cols-1 md:grid-cols-2 gap-8"bg-slate-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
<div className="
<div className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4`}>
<solution.icon className={`w-6 h-6 ${solution.color}`} />
<div className="flex-1"text-xl font-semibold text-white mb-2"
                      <p className="
                  <div className="mb-4"text-sm font-semibold text-cyan-400 mb-2"
                    <ul className="
                      {solution.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300"w-4 h-4 text-green-400 mr-2 flex-shrink-0"
          {/* Solutions Grid */}"
          <div className="mb-16"
            < className="grid grid-cols-1,">"
              {solutions[activeTab as keyof typeof solutions].map((solution, index) => ()}"
          < key={index} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/50,">"
</div>"
                  <div className="flex items-start mb-4""
                    <div className=""
                      <h3 className=""
                      <p className="
                  </div>""mb-4""text-sm font-semibold text-cyan-400 mb-2"
  Features:</h4>"
                    <ul className="space-y-1""
          <li key={featureIndex} className=""
                          <CheckCircle className="
                          {feature}
                      ))}
                  <div className="flex items-center justify-between"/contact""inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                      Learn More
                      <ArrowRight className=""
                  <div className="
                    <div className={`text-lg font-bold ${solution.color}`}>
                      {solution.pricing}
                    </div>
<$2 />
                      href="/contact"inline-flex items-center text-cyan-400 hover: text-cyan-300 font-medium text-sm transition-colors"
// >
//                       Learn More,"
          <ArrowRightclassName="w-4 h-4 ml-1"mb-16"
<h2 className="
              Why Choose Our Solutions?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"text-center"
<div className="
<benefit.icon className="w-8 h-8 text-cyan-400"text-lg font-semibold text-white mb-2"
          {/* Benefits Section */}"
          <div className="mb-16"
            <h2 className="text-3 xl font-bold text-white text-center mb-12 neon-text""
            < className=""
  lg:grid-cols-4 gap-6"
              {benefits.map((benefit, index) => ()}""text-center""w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4""w-8 h-8 text-cyan-400""text-lg font-semibold text-white mb-2""text-gray-300 text-sm"
              ))}
          {/* CTA Section */}
          <div className="
<h2 className="text-2 xl font-bold text-white mb-4"text-gray-300 mb-6 max-w-2 xl mx-auto"
              Get a free consultation and discover how our solutions can revolutionize your operations
              and drive unprecedented growth.
            </p>
<div className="
<$2 />
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"w-5 h-5 mr-2"
                Get Free Consultation

              <$2 />
                href=""
                className="
<Phone className="w-4 h-4 mr-2"mailto:kleber@ziontechgroup.com""border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
<Mail className="
                Email Us,

          {/* CTA Section */}""bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2 xl p-8 text-center""text-2 xl font-bold text-white mb-4"
// Ready to Transform Your Business?
          </h2>"
            <p className="text-gray-300 mb-6 max-w-2 xl mx-auto"flex flex-col sm: flex-row gap-4 justify-center items-center"
<$2 />
                href=" className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105""
          <Phone className="
// Get Free Consultation
              <$2 />
                href="tel:+13024640950"border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
// >
          "
          <PhoneclassName="w-4 h-4 mr-2"mailto:kleber@ziontechgroup.com" className="
// >
          ""w-4 h-4 mr-2"
// Email Us
          </a></div>
</div></div>
</div>
<Footer /></React.Fragment>
</div>
  ),
}
export default SolutionsPage</a></a>;
</a></a>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></span>
</span></button>
</p></p>
</p></p>
</p></p>
</h2></h3>
</h3></h4>
</ul></ul>
</li>