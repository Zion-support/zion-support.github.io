>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface Service {
  id: string,
  name: string,
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Blockchain' | 'IoT & Edge' | 'Cybersecurity' | 'Cloud & DevOps' | 'Data & Analytics',
  description: string,
  features: string[],
  pricing: {
    starter: string,
    professional: string,
    enterprise: string,
export interface Service {id: string;
  name: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Blockchain' | 'IoT & Edge' | 'Cybersecurity' | 'Cloud & DevOps' | 'Data & Analytics';
  description: string;
  features: string[];
  pricing: {;
    starter: string;
    professional: string;
    enterprise: string;
    custom?: string;
  },
  technology_stack: string[],
  benefits: string[],
  use_cases: string[],
  status: 'active' | 'beta' | 'coming - soon',
  priority: number,
  demo_url?: string,
  documentation_url?: string,
  contact_info: {
    email: string,
    phone: string,

    address: string;
  }
}
;
export const services: Service[] = [;
  // AI Services;

<<<<<<< HEAD
  {id: 'ai-code-assistant';
    name: 'ZionAI Code Assistant';
    category: 'AI Services';
    description: 'Advanced AI-powered code generation, review, and optimization platform with context-aware suggestions and multi-language support.';
    features: [;
      'Real-time code completion and suggestionsAutomated code review and optimizationMulti-language support (Python, JavaScript, Go, Rust)Security vulnerability detectionCode documentation generationIntegration with popular IDEsCustom model fine-tuning for enterprise codebases';
    ];
    pricing: {;
      starter: '$29/month';
      professional: '$99/month';
      enterprise: '$299/month';
      custom: 'Contact for enterprise pricing';
    };
    technologyStack: ['OpenAI GPT-4Claude 3PythonReactNode.jsPostgreSQL'];
    benefits: [;
      'Reduce development time by 40-60%Improve code quality and securityLower maintenance costsAccelerate team onboarding24/7 AI assistance';
    ];
    useCases: [;
      'Software development teamsStartups and scale-upsEnterprise developmentFreelance developersEducational institutions';
    ];
    status: 'active';
    priority: 1;
    demoUrl: 'https://ziontechgroup.com/demo/ai-code-assistant';
    documentationUrl: 'https://ziontechgroup.com/docs/ai-code-assistant';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  {;
    id: 'ai-content-generator';
    name: 'ContentForge AI';
    category: 'AI Services';
    description: 'Enterprise-grade AI content generation platform for marketing, documentation, and creative writing with brand voice consistency.';
    features: [;
      'Multi-format content generation (blogs, emails, social media)Brand voice training and consistencySEO optimization and keyword researchMulti-language content creationPlagiarism detection and originality scoringContent performance analyticsTeam collaboration and approval workflows';
    ];
    pricing: {;
      starter: '$49/month';
      professional: '$149/month';
      enterprise: '$399/month';
    };
    technologyStack: ['GPT-4Claude 3BERTReactFastAPIMongoDB'];
    benefits: [;
      '10x faster content creationConsistent brand messagingImproved SEO performanceCost-effective content marketingScalable content operations';
    ];
    useCases: [;
      'Marketing agenciesE-commerce businessesContent creatorsEnterprise marketing teamsEducational institutions';
    ];
    status: 'active';
    priority: 2;
    demoUrl: 'https://ziontechgroup.com/demo/content-forge';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  {;
    id: 'ai-data-analytics';
    name: 'InsightAI Analytics';
    category: 'AI Services';
    description: 'Intelligent data analytics platform with predictive modeling, automated insights, and interactive visualizations powered by machine learning.';
    features: [;
      'Automated data preprocessing and cleaningPredictive modeling and forecastingNatural language query interfaceReal-time data streaming analyticsCustom dashboard builderAnomaly detection and alertingIntegration with 100+ data sources';
    ];
    pricing: {;
      starter: '$79/month';
      professional: '$199/month';
      enterprise: '$599/month';
    };
    technologyStack: ['PythonTensorFlowPyTorchReactFastAPIApache Kafka'];
    benefits: [;
      'Uncover hidden patterns in dataMake data-driven decisions fasterReduce manual analysis time by 80%Predict future trends accuratelyReal-time business intelligence';
    ];
    useCases: [;
      'Financial servicesHealthcare analyticsE-commerce optimizationSupply chain managementMarketing analytics';
    ];
    status: 'active';
    priority: 3;
    demoUrl: 'https://ziontechgroup.com/demo/insight-ai';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  // IT Services;
  {;
    id: 'managed-it-services';
    name: 'ZionTech Managed IT';
    category: 'IT Services';
    description: 'Comprehensive managed IT services including 24/7 monitoring, cybersecurity, cloud management, and strategic technology consulting.';
    features: [;
      '24/7 network monitoring and supportCybersecurity threat detection and responseCloud infrastructure management (AWS, Azure, GCP)Backup and disaster recoveryHelp desk and user supportTechnology roadmap planningCompliance and audit support';
    ];
    pricing: {;
      starter: '$99/month per user';
      professional: '$149/month per user';
      enterprise: '$199/month per user';
    };
    technologyStack: ['Microsoft 365AWSAzureCiscoFortinetVeeam'];
    benefits: [;
      'Reduce IT costs by 25-40%Improve system uptime to 99.9%Enhanced security posturePredictable monthly costsAccess to enterprise-grade tools';
    ];
    useCases: [;
      'Small to medium businessesHealthcare organizationsFinancial servicesManufacturing companiesProfessional services firms';
    ];
    status: 'active';
    priority: 4;
    demoUrl: 'https://ziontechgroup.com/demo/managed-it';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  {;
    id: 'cybersecurity-audit';
    name: 'SecureShield Audit';
    category: 'IT Services';
    description: 'Comprehensive cybersecurity assessment and penetration testing services to identify vulnerabilities and strengthen your security posture.';
    features: [;
      'Vulnerability assessment and scanningPenetration testing (web, mobile, network)Social engineering testingSecurity policy review and developmentCompliance gap analysis (SOC2, ISO27001, HIPAA)Incident response planningSecurity awareness training';
    ];
    pricing: {;
      starter: '$2,999/assessment';
      professional: '$5,999/comprehensive';
      enterprise: '$12,999/enterprise';
    };
    technologyStack: ['NessusMetasploitBurp SuiteWiresharkCustom tools'];
    benefits: [;
      'Identify security gaps before attackersMeet compliance requirementsReduce cyber risk exposureImprove incident response capabilitiesProtect brand reputation';
    ];
    useCases: [;
      'Financial institutionsHealthcare organizationsE-commerce businessesGovernment agenciesEducational institutions';
    ];
    status: 'active';
    priority: 5;
    demoUrl: 'https://ziontechgroup.com/demo/secure-shield';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  // Micro SAAS;
  {;
    id: 'invoice-automation';
    name: 'InvoiceFlow Pro';
    category: 'Micro SAAS';
    description: 'Automated invoice processing and accounts payable solution with AI-powered data extraction and approval workflows.';
    features: [;
      'AI-powered invoice data extractionAutomated approval workflowsMulti-currency supportIntegration with accounting softwareReal-time payment trackingCustom approval rulesMobile app for approvals';
    ];
    pricing: {;
      starter: '$19/month';
      professional: '$49/month';
      enterprise: '$99/month';
    };
    technologyStack: ['ReactNode.jsPostgreSQLOpenAI APIStripe'];
    benefits: [;
      'Reduce invoice processing time by 90%Eliminate manual data entry errorsImprove cash flow managementEnhance audit trail complianceMobile-first approval process';
    ];
    useCases: [;
      'Small businessesAccounting firmsProperty managementConstruction companiesHealthcare practices';
    ];
    status: 'active';
    priority: 6;
    demoUrl: 'https://ziontechgroup.com/demo/invoice-flow';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  {;
    id: 'project-management';
    name: 'TaskMaster Pro';
    category: 'Micro SAAS';
    description: 'Intelligent project management platform with AI-powered task prioritization, resource allocation, and progress tracking.';
    features: [;
      'AI-powered task prioritizationResource allocation optimizationReal-time collaboration toolsTime tracking and reportingIntegration with popular toolsMobile and desktop appsCustom workflow automation';
    ];
    pricing: {;
      starter: '$15/month per user';
      professional: '$25/month per user';
      enterprise: '$35/month per user';
    };
    technologyStack: ['ReactNode.jsPostgreSQLRedisSocket.io'];
    benefits: [;
      'Increase team productivity by 30%Better resource utilizationImproved project delivery timesEnhanced team collaborationData-driven decision making';
    ];
    useCases: [;
      'Software development teamsMarketing agenciesConstruction projectsEvent planningConsulting firms';
    ];
    status: 'active';
    priority: 7;
    demoUrl: 'https://ziontechgroup.com/demo/task-master';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  // Blockchain Services;
  {;
    id: 'smart-contract-audit';
    name: 'BlockAudit Pro';
    category: 'Blockchain';
    description: 'Professional smart contract security auditing and optimization services for DeFi, NFT, and enterprise blockchain projects.';
    features: [;
      'Comprehensive security analysisGas optimization recommendationsFormal verification methodsVulnerability assessmentCompliance checkingPost-deployment monitoringEmergency response support';
    ];
    pricing: {;
      starter: '$5,000/audit';
      professional: '$15,000/audit';
      enterprise: '$50,000/audit';
    };
    technologyStack: ['SolidityVyperFoundrySlitherMythril'];
    benefits: [;
      'Prevent costly security breachesOptimize gas costs by 20-40%Build investor confidenceMeet regulatory requirementsProtect user funds';
    ];
    useCases: [;
      'DeFi protocolsNFT marketplacesDAO governanceEnterprise blockchainToken launches';
    ];
    status: 'active';
    priority: 8;
    demoUrl: 'https://ziontechgroup.com/demo/block-audit';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  // IoT & Edge Computing;
  {;
    id: 'iot-monitoring';
    name: 'IoT Sentinel';
    category: 'IoT & Edge';
    description: 'Comprehensive IoT monitoring and management platform with edge computing capabilities for industrial and commercial applications.';
    features: [;
      'Real-time device monitoringEdge computing processingPredictive maintenance alertsData visualization dashboardsIntegration with industrial protocolsScalable device managementCustom alert rules';
    ];
    pricing: {;
      starter: '$10/device/month';
      professional: '$25/device/month';
      enterprise: '$50/device/month';
    };
    technologyStack: ['PythonMQTTKubernetesInfluxDBGrafana'];
    benefits: [;
      'Reduce equipment downtime by 60%Lower maintenance costsImprove operational efficiencyReal-time operational insightsScalable IoT infrastructure';
    ];
    useCases: [;
      'Manufacturing facilitiesSmart buildingsAgriculture monitoringEnergy managementTransportation logistics';
    ];
    status: 'active';
    priority: 9;
    demoUrl: 'https://ziontechgroup.com/demo/iot-sentinel';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  // Cloud & DevOps;
  {;
    id: 'devops-automation';
    name: 'DevOps Flow';
    category: 'Cloud & DevOps';
    description: 'End-to-end DevOps automation platform with CI/CD pipelines, infrastructure as code, and cloud-native deployment tools.';
    features: [;
      'Automated CI/CD pipelinesInfrastructure as Code (Terraform)Multi-cloud deploymentContainer orchestrationMonitoring and alertingSecurity scanningCost optimization';
    ];
    pricing: {;
      starter: '$99/month';
      professional: '$299/month';
      enterprise: '$799/month';
    };
    technologyStack: ['DockerKubernetesTerraformJenkinsPrometheus'];
    benefits: [;
      'Deploy 10x fasterReduce deployment errors by 90%Lower infrastructure costsImprove team productivityEnhanced security posture';
    ];
    useCases: [;
      'Software development teamsStartups and scale-upsEnterprise ITDevOps consultingCloud migration projects';
    ];
    status: 'active';
    priority: 10;
    demoUrl: 'https://ziontechgroup.com/demo/devops-flow';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  };
  // Data & Analytics;
  {;
    id: 'data-warehouse';
    name: 'DataVault Enterprise';
    category: 'Data & Analytics';
    description: 'Modern cloud data warehouse solution with real-time analytics, data governance, and AI-powered insights.';
    features: [;
      'Real-time data ingestionAdvanced analytics and MLData governance and securitySelf-service BI toolsData lineage trackingPerformance optimizationMulti-cloud support';
    ];
    pricing: {;
      starter: '$199/month';
      professional: '$499/month';
      enterprise: '$1,299/month';
    };
    technologyStack: ['SnowflakeApache AirflowdbtTableauPython'];
    benefits: [;
      'Unified data platformReal-time analyticsScalable architectureCost-effective storageEnhanced data security';
    ];
    useCases: [;
      'Business intelligenceCustomer analyticsFinancial reportingSupply chain analyticsMarketing attribution';
    ];
    status: 'active';
    priority: 11;
    demoUrl: 'https://ziontechgroup.com/demo/data-vault';
    contactInfo: {;
      email: 'kleber@ziontechgroup.com';
      phone: '+1 302 464 0950';
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  }
];
export const getServicesByCategory = (category: Service['category']) => {return services.filter(service => service.category === category);
}
export const getServiceById = (id: string) => {return services.find(service => service.id === id);
}
export const getCategories = () => {return Array.from(new Set(services.map(service => service.category)));
}
=======
  {
    id: 'ai - code - assistant',
    name: 'ZionAI Code Assistant',
    category: 'AI Services',
    description: 'Advanced AI - powered code generation, review, and optimization platform with context - aware suggestions and multi - language support.',
=======
export interface Service {;
  id: string,;
  name: string,;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Blockchain' | 'IoT & Edge' | 'Cybersecurity' | 'Cloud & DevOps' | 'Data & Analytics',;
  description: string,;
  features: string[],;
  pricing: {;
    starter: string,;
    professional: string,;
    enterprise: string,;
    custom?: string;
  },;
  technologyStack: string[],;
  benefits: string[],;
  useCases: string[],;
  status: 'active' | 'beta' | 'coming-soon',;
  priority: number,;
  demoUrl?: string,;
  documentationUrl?: string,;
  contactInfo: {;
    email: string,;
    phone: string,;
    address: string;
  }
}
;
export const services: Service[] = [;
  // AI Services;
  {;
    id: 'ai-code-assistant',;
    name: 'ZionAI Code Assistant',;
    category: 'AI Services',;
    description: 'Advanced AI-powered code generation, review, and optimization platform with context-aware suggestions and multi-language support.',;

    features: [;
      'Real - time code completion and suggestions_automated code review and optimization_multi - language support (Python, JavaScript, Go, Rust)Security vulnerability detection_code documentation generation_integration with popular IDEsCustom model fine - tuning for enterprise codebases';
    ],
    pricing: {
      starter: '$29 / month',
      professional: '$99 / month',
      enterprise: '$299 / month',
      custom: 'Contact for enterprise pricing';
    },
    technology_stack: ['OpenAI GPT - 4Claude 3PythonReactNode.jsPostgreSQL'],
    benefits: [;
      'Reduce development time by 40 - 60%Improve code quality and security_lower maintenance costs_accelerate team onboarding24 / 7 AI assistance';
    ],
    use_cases: [;
      'Software development teams_startups and scale - ups_enterprise development_freelance developers_educational institutions';
    ],
    status: 'active',
    priority: 1,
    demo_url: 'https://ziontechgroup.com / demo / ai - code - assistant',
    documentation_url: 'https://ziontechgroup.com / docs / ai - code - assistant',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  {
    id: 'ai - content - generator',
    name: 'ContentForge AI',
    category: 'AI Services',
    description: 'Enterprise - grade AI content generation platform for marketing, documentation, and creative writing with brand voice consistency.',
    features: [;
      'Multi - format content generation (blogs, emails, social media)Brand voice training and consistencySEO optimization and keyword research_multi - language content creation_plagiarism detection and originality scoring_content performance analytics_team collaboration and approval workflows';
    ],
    pricing: {
      starter: '$49 / month',
      professional: '$149 / month',
      enterprise: '$399 / month';
    },
    technology_stack: ['GPT - 4Claude 3BERTReactFastAPIMongoDB'],
    benefits: [;
      '10x faster content creation_consistent brand messaging_improved SEO performance_cost - effective content marketing_scalable content operations';
    ],
    use_cases: [;
      'Marketing agencies_e - commerce businesses_content creators_enterprise marketing teams_educational institutions';
    ],
    status: 'active',
    priority: 2,
    demo_url: 'https://ziontechgroup.com / demo / content - forge',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  {
    id: 'ai - data - analytics',
    name: 'InsightAI Analytics',
    category: 'AI Services',
    description: 'Intelligent data analytics platform with predictive modeling, automated insights, and interactive visualizations powered by machine learning.',
    features: [;
      'Automated data preprocessing and cleaning_predictive modeling and forecasting_natural language query interface_real - time data streaming analytics_custom dashboard builder_anomaly detection and alerting_integration with 100+ data sources';
    ],
    pricing: {
      starter: '$79 / month',
      professional: '$199 / month',
      enterprise: '$599 / month';
    },
    technology_stack: ['PythonTensorFlowPyTorchReactFastAPIApache Kafka'],
    benefits: [;
      'Uncover hidden patterns in data_make data - driven decisions faster_reduce manual analysis time by 80%Predict future trends accurately_real - time business intelligence';
    ],
    use_cases: [;
      'Financial services_healthcare analytics_e - commerce optimization_supply chain management_marketing analytics';
    ],
    status: 'active',
    priority: 3,
    demo_url: 'https://ziontechgroup.com / demo / insight - ai',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  // IT Services;
  {
    id: 'managed - it - services',
    name: 'ZionTech Managed IT',
    category: 'IT Services',
    description: 'Comprehensive managed IT services including 24 / 7 monitoring, cybersecurity, cloud management, and strategic technology consulting.',
    features: [;
      '24 / 7 network monitoring and support_cybersecurity threat detection and response_cloud infrastructure management (AWS, Azure, GCP)Backup and disaster recovery_help desk and user support_technology roadmap planning_compliance and audit support';
    ],
    pricing: {
      starter: '$99 / month per user',
      professional: '$149 / month per user',
      enterprise: '$199 / month per user';
    },
    technology_stack: ['Microsoft 365AWSAzureCiscoFortinetVeeam'],
    benefits: [;
      'Reduce IT costs by 25 - 40%Improve system uptime to 99.9%Enhanced security posture_predictable monthly costs_access to enterprise - grade tools';
    ],
    use_cases: [;
      'Small to medium businesses_healthcare organizations_financial services_manufacturing companies_professional services firms';
    ],
    status: 'active',
    priority: 4,
    demo_url: 'https://ziontechgroup.com / demo / managed - it',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  {
    id: 'cybersecurity - audit',
    name: 'SecureShield Audit',
    category: 'IT Services',
    description: 'Comprehensive cybersecurity assessment and penetration testing services to identify vulnerabilities and strengthen your security posture.',
    features: [;
      'Vulnerability assessment and scanning_penetration testing (web, mobile, network)Social engineering testing_security policy review and development_compliance gap analysis (SOC2, ISO27001, HIPAA)Incident response planning_security awareness training';
    ],
    pricing: {
      starter: '$2, 999 / assessment',
      professional: '$5, 999 / comprehensive',
      enterprise: '$12, 999 / enterprise';
    },
    technology_stack: ['NessusMetasploitBurp SuiteWiresharkCustom tools'],
    benefits: [;
      'Identify security gaps before attackers_meet compliance requirements_reduce cyber risk exposure_improve incident response capabilities_protect brand reputation';
    ],
    use_cases: [;
      'Financial institutions_healthcare organizations_e - commerce businesses_government agencies_educational institutions';
    ],
    status: 'active',
    priority: 5,
    demo_url: 'https://ziontechgroup.com / demo / secure - shield',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  // Micro SAAS;
  {
    id: 'invoice - automation',
    name: 'InvoiceFlow Pro',
    category: 'Micro SAAS',
    description: 'Automated invoice processing and accounts payable solution with AI - powered data extraction and approval workflows.',
    features: [;
      'AI - powered invoice data extraction_automated approval workflows_multi - currency support_integration with accounting software_real - time payment tracking_custom approval rules_mobile app for approvals';
    ],
    pricing: {
      starter: '$19 / month',
      professional: '$49 / month',
      enterprise: '$99 / month';
    },
    technology_stack: ['ReactNode.jsPostgreSQLOpenAI APIStripe'],
    benefits: [;
      'Reduce invoice processing time by 90%Eliminate manual data entry errors_improve cash flow management_enhance audit trail compliance_mobile - first approval process';
    ],
    use_cases: [;
      'Small businesses_accounting firms_property management_construction companies_healthcare practices';
    ],
    status: 'active',
    priority: 6,
    demo_url: 'https://ziontechgroup.com / demo / invoice - flow',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  {
    id: 'project - management',
    name: 'TaskMaster Pro',
    category: 'Micro SAAS',
    description: 'Intelligent project management platform with AI - powered task prioritization, resource allocation, and progress tracking.',
    features: [;
      'AI - powered task prioritization_resource allocation optimization_real - time collaboration tools_time tracking and reporting_integration with popular tools_mobile and desktop apps_custom workflow automation';
    ],
    pricing: {
      starter: '$15 / month per user',
      professional: '$25 / month per user',
      enterprise: '$35 / month per user';
    },
    technology_stack: ['ReactNode.jsPostgreSQLRedisSocket.io'],
    benefits: [;
      'Increase team productivity by 30%Better resource utilization_improved project delivery times_enhanced team collaboration_data - driven decision making';
    ],
    use_cases: [;
      'Software development teams_marketing agencies_construction projects_event planning_consulting firms';
    ],
    status: 'active',
    priority: 7,
    demo_url: 'https://ziontechgroup.com / demo / task - master',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  // Blockchain Services;
  {
    id: 'smart - contract - audit',
    name: 'BlockAudit Pro',
    category: 'Blockchain',
    description: 'Professional smart contract security auditing and optimization services for DeFi, NFT, and enterprise blockchain projects.',
    features: [;
      'Comprehensive security analysis_gas optimization recommendations_formal verification methods_vulnerability assessment_compliance checking_post - deployment monitoring_emergency response support';
    ],
    pricing: {
      starter: '$5, 000 / audit',
      professional: '$15, 000 / audit',
      enterprise: '$50, 000 / audit';
    },
    technology_stack: ['SolidityVyperFoundrySlitherMythril'],
    benefits: [;
      'Prevent costly security breaches_optimize gas costs by 20 - 40%Build investor confidence_meet regulatory requirements_protect user funds';
    ],
    use_cases: [;
      'DeFi protocolsNFT marketplacesDAO governance_enterprise blockchain_token launches';
    ],
    status: 'active',
    priority: 8,
    demo_url: 'https://ziontechgroup.com / demo / block - audit',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  // IoT & Edge Computing;
  {
    id: 'iot - monitoring',
    name: 'IoT Sentinel',
    category: 'IoT & Edge',
    description: 'Comprehensive IoT monitoring and management platform with edge computing capabilities for industrial and commercial applications.',
    features: [;
      'Real - time device monitoring_edge computing processing_predictive maintenance alerts_data visualization dashboards_integration with industrial protocols_scalable device management_custom alert rules';
    ],
    pricing: {
      starter: '$10 / device / month',
      professional: '$25 / device / month',
      enterprise: '$50 / device / month';
    },
    technology_stack: ['PythonMQTTKubernetesInfluxDBGrafana'],
    benefits: [;
      'Reduce equipment downtime by 60%Lower maintenance costs_improve operational efficiency_real - time operational insights_scalable IoT infrastructure';
    ],
    use_cases: [;
      'Manufacturing facilities_smart buildings_agriculture monitoring_energy management_transportation logistics';
    ],
    status: 'active',
    priority: 9,
    demo_url: 'https://ziontechgroup.com / demo / iot - sentinel',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  // Cloud & DevOps;
  {
    id: 'devops - automation',
    name: 'DevOps Flow',
    category: 'Cloud & DevOps',
    description: 'End - to - end DevOps automation platform with CI / CD pipelines, infrastructure as code, and cloud - native deployment tools.',
    features: [;
      'Automated CI / CD pipelines_infrastructure as Code (Terraform)Multi - cloud deployment_container orchestration_monitoring and alerting_security scanning_cost optimization';
    ],
    pricing: {
      starter: '$99 / month',
      professional: '$299 / month',
      enterprise: '$799 / month';
    },
    technology_stack: ['DockerKubernetesTerraformJenkinsPrometheus'],
    benefits: [;
      'Deploy 10x faster_reduce deployment errors by 90%Lower infrastructure costs_improve team productivity_enhanced security posture';
    ],
    use_cases: [;
      'Software development teams_startups and scale - ups_enterprise ITDevOps consulting_cloud migration projects';
    ],
    status: 'active',
    priority: 10,
    demo_url: 'https://ziontechgroup.com / demo / devops - flow',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  },
  // Data & Analytics;
  {
    id: 'data - warehouse',
    name: 'DataVault Enterprise',
    category: 'Data & Analytics',
    description: 'Modern cloud data warehouse solution with real - time analytics, data governance, and AI - powered insights.',
    features: [;
      'Real - time data ingestion_advanced analytics and MLData governance and security_self - service BI tools_data lineage tracking_performance optimization_multi - cloud support';
    ],
    pricing: {
      starter: '$199 / month',
      professional: '$499 / month',
      enterprise: '$1, 299 / month';
    },
    technology_stack: ['SnowflakeApache AirflowdbtTableauPython'],
    benefits: [;
      'Unified data platform_real - time analytics_scalable architecture_cost - effective storage_enhanced data security';
    ],
    use_cases: [;
      'Business intelligence_customer analytics_financial reporting_supply chain analytics_marketing attribution';
    ],
    status: 'active',
    priority: 11,
    demo_url: 'https://ziontechgroup.com / demo / data - vault',
    contact_info: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008 Middletown DE 19709';
    }
  }

],;
export const getServicesByCategory = (category: Service['category']) => {;
  return services.filter(service => service.category === category);
};
export const getServiceById = (id: string) => {;
  return services.find(service => service.id === id);
};
export const getCategories = () => {;
  return Array.from(new Set(services.map(service => service.category)));
};
