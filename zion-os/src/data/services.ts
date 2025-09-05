<<<<<<< HEAD
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
    custom?: string
  },
  technologyStack: string[],
  benefits: string[],
  useCases: string[],
  status: 'active' | 'beta' | 'coming-soon',
  priority: number,
  demoUrl?: string,
  documentationUrl?: string,
  contactInfo: {
    email: string,
    phone: string,
    address: string
  }
=======
export interface Service {_id: string;
  name: string;
  category: 'AI Services' | 'IT Services' | 'Micro SAAS' | 'Blockchain' | 'IoT & Edge' | 'Cybersecurity' | 'Cloud & DevOps' | 'Data & Analytics';
  description: string;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom?: string;};
  technologyStack: string[];
  benefits: string[];
  useCases: string[];
  status: 'active' | 'beta' | 'coming-soon';
  priority: number;
  demoUrl?: string;
  documentationUrl?: string;
  contactInfo: {_email: string;
    phone: string;
    address: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export const services: Service[] = [
  // AI Services
<<<<<<< HEAD
  {
    id: 'ai-code-assistant',
    name: 'ZionAI Code Assistant',
    category: 'AI Services',
    description: 'Advanced AI-powered code generation, review, and optimization platform with context-aware suggestions and multi-language support.',
    features: [
      'Real-time code completion and suggestionsAutomated code review and optimizationMulti-language support (Python, JavaScript, Go, Rust)Security vulnerability detectionCode documentation generationIntegration with popular IDEsCustom model fine-tuning for enterprise codebases'
    ],
    pricing: {
      starter: '$29/month',
      professional: '$99/month',
      enterprise: '$299/month',
      custom: 'Contact for enterprise pricing'
    },
    technologyStack: ['OpenAI GPT-4Claude 3PythonReactNode.jsPostgreSQL'],
=======
  {_id: 'ai-code-assistant', _name: 'ZionAI Code Assistant', _category: 'AI Services', _description: 'Advanced AI-powered code generation, _review, _and optimization platform with context-aware suggestions and multi-language support.', _features: [
      'Real-time code completion and suggestions', _'Automated code review and optimization', _'Multi-language support (Python, _JavaScript, _Go, _Rust)', _'Security vulnerability detection', _'Code documentation generation', _'Integration with popular IDEs', _'Custom model fine-tuning for enterprise codebases'
    ], _pricing: {
      starter: '$29/month', _professional: '$99/month', _enterprise: '$299/month', _custom: 'Contact for enterprise pricing'},
    technologyStack: ['OpenAI GPT-4', 'Claude 3', 'Python', 'React', 'Node.js', 'PostgreSQL'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Reduce development time by 40-60%Improve code quality and securityLower maintenance costsAccelerate team onboarding24/7 AI assistance'
    ],
    useCases: [
      'Software development teamsStartups and scale-upsEnterprise developmentFreelance developersEducational institutions'
    ],
    status: 'active',
    priority: 1,
    demoUrl: 'https://ziontechgroup.com/demo/ai-code-assistant',
    documentationUrl: 'https://ziontechgroup.com/docs/ai-code-assistant',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },
<<<<<<< HEAD
  {
    id: 'ai-content-generator',
    name: 'ContentForge AI',
    category: 'AI Services',
    description: 'Enterprise-grade AI content generation platform for marketing, documentation, and creative writing with brand voice consistency.',
    features: [
      'Multi-format content generation (blogs, emails, social media)Brand voice training and consistencySEO optimization and keyword researchMulti-language content creationPlagiarism detection and originality scoringContent performance analyticsTeam collaboration and approval workflows'
    ],
    pricing: {
      starter: '$49/month',
      professional: '$149/month',
      enterprise: '$399/month'
    },
    technologyStack: ['GPT-4Claude 3BERTReactFastAPIMongoDB'],
=======
  {_id: 'ai-content-generator', _name: 'ContentForge AI', _category: 'AI Services', _description: 'Enterprise-grade AI content generation platform for marketing, _documentation, _and creative writing with brand voice consistency.', _features: [
      'Multi-format content generation (blogs, _emails, _social media)', _'Brand voice training and consistency', _'SEO optimization and keyword research', _'Multi-language content creation', _'Plagiarism detection and originality scoring', _'Content performance analytics', _'Team collaboration and approval workflows'
    ], _pricing: {
      starter: '$49/month', _professional: '$149/month', _enterprise: '$399/month'},
    technologyStack: ['GPT-4', 'Claude 3', 'BERT', 'React', 'FastAPI', 'MongoDB'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      '10x faster content creationConsistent brand messagingImproved SEO performanceCost-effective content marketingScalable content operations'
    ],
    useCases: [
      'Marketing agenciesE-commerce businessesContent creatorsEnterprise marketing teamsEducational institutions'
    ],
    status: 'active',
    priority: 2,
    demoUrl: 'https://ziontechgroup.com/demo/content-forge',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },
<<<<<<< HEAD
  {
    id: 'ai-data-analytics',
    name: 'InsightAI Analytics',
    category: 'AI Services',
    description: 'Intelligent data analytics platform with predictive modeling, automated insights, and interactive visualizations powered by machine learning.',
    features: [
      'Automated data preprocessing and cleaningPredictive modeling and forecastingNatural language query interfaceReal-time data streaming analyticsCustom dashboard builderAnomaly detection and alertingIntegration with 100+ data sources'
    ],
    pricing: {
      starter: '$79/month',
      professional: '$199/month',
      enterprise: '$599/month'
    },
    technologyStack: ['PythonTensorFlowPyTorchReactFastAPIApache Kafka'],
=======
  {_id: 'ai-data-analytics', _name: 'InsightAI Analytics', _category: 'AI Services', _description: 'Intelligent data analytics platform with predictive modeling, _automated insights, _and interactive visualizations powered by machine learning.', _features: [
      'Automated data preprocessing and cleaning', _'Predictive modeling and forecasting', _'Natural language query interface', _'Real-time data streaming analytics', _'Custom dashboard builder', _'Anomaly detection and alerting', _'Integration with 100+ data sources'
    ], _pricing: {
      starter: '$79/month', _professional: '$199/month', _enterprise: '$599/month'},
    technologyStack: ['Python', 'TensorFlow', 'PyTorch', 'React', 'FastAPI', 'Apache Kafka'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Uncover hidden patterns in dataMake data-driven decisions fasterReduce manual analysis time by 80%Predict future trends accuratelyReal-time business intelligence'
    ],
    useCases: [
      'Financial servicesHealthcare analyticsE-commerce optimizationSupply chain managementMarketing analytics'
    ],
    status: 'active',
    priority: 3,
    demoUrl: 'https://ziontechgroup.com/demo/insight-ai',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // IT Services
<<<<<<< HEAD
  {
    id: 'managed-it-services',
    name: 'ZionTech Managed IT',
    category: 'IT Services',
    description: 'Comprehensive managed IT services including 24/7 monitoring, cybersecurity, cloud management, and strategic technology consulting.',
    features: [
      '24/7 network monitoring and supportCybersecurity threat detection and responseCloud infrastructure management (AWS, Azure, GCP)Backup and disaster recoveryHelp desk and user supportTechnology roadmap planningCompliance and audit support'
    ],
    pricing: {
      starter: '$99/month per user',
      professional: '$149/month per user',
      enterprise: '$199/month per user'
    },
    technologyStack: ['Microsoft 365AWSAzureCiscoFortinetVeeam'],
=======
  {_id: 'managed-it-services', _name: 'ZionTech Managed IT', _category: 'IT Services', _description: 'Comprehensive managed IT services including 24/7 monitoring, _cybersecurity, _cloud management, _and strategic technology consulting.', _features: [
      '24/7 network monitoring and support', _'Cybersecurity threat detection and response', _'Cloud infrastructure management (AWS, _Azure, _GCP)', _'Backup and disaster recovery', _'Help desk and user support', _'Technology roadmap planning', _'Compliance and audit support'
    ], _pricing: {
      starter: '$99/month per user', _professional: '$149/month per user', _enterprise: '$199/month per user'},
    technologyStack: ['Microsoft 365', 'AWS', 'Azure', 'Cisco', 'Fortinet', 'Veeam'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Reduce IT costs by 25-40%Improve system uptime to 99.9%Enhanced security posturePredictable monthly costsAccess to enterprise-grade tools'
    ],
    useCases: [
      'Small to medium businessesHealthcare organizationsFinancial servicesManufacturing companiesProfessional services firms'
    ],
    status: 'active',
    priority: 4,
    demoUrl: 'https://ziontechgroup.com/demo/managed-it',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },
<<<<<<< HEAD
  {
    id: 'cybersecurity-audit',
    name: 'SecureShield Audit',
    category: 'IT Services',
    description: 'Comprehensive cybersecurity assessment and penetration testing services to identify vulnerabilities and strengthen your security posture.',
    features: [
      'Vulnerability assessment and scanningPenetration testing (web, mobile, network)Social engineering testingSecurity policy review and developmentCompliance gap analysis (SOC2, ISO27001, HIPAA)Incident response planningSecurity awareness training'
    ],
    pricing: {
      starter: '$2,999/assessment',
      professional: '$5,999/comprehensive',
      enterprise: '$12,999/enterprise'
    },
    technologyStack: ['NessusMetasploitBurp SuiteWiresharkCustom tools'],
=======
  {_id: 'cybersecurity-audit', _name: 'SecureShield Audit', _category: 'IT Services', _description: 'Comprehensive cybersecurity assessment and penetration testing services to identify vulnerabilities and strengthen your security posture.', _features: [
      'Vulnerability assessment and scanning', _'Penetration testing (web, _mobile, _network)', _'Social engineering testing', _'Security policy review and development', _'Compliance gap analysis (SOC2, _ISO27001, _HIPAA)', _'Incident response planning', _'Security awareness training'
    ], _pricing: {
      starter: '$2, _999/assessment', _professional: '$5, _999/comprehensive', _enterprise: '$12, _999/enterprise'},
    technologyStack: ['Nessus', 'Metasploit', 'Burp Suite', 'Wireshark', 'Custom tools'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Identify security gaps before attackersMeet compliance requirementsReduce cyber risk exposureImprove incident response capabilitiesProtect brand reputation'
    ],
    useCases: [
      'Financial institutionsHealthcare organizationsE-commerce businessesGovernment agenciesEducational institutions'
    ],
    status: 'active',
    priority: 5,
    demoUrl: 'https://ziontechgroup.com/demo/secure-shield',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // Micro SAAS
<<<<<<< HEAD
  {
    id: 'invoice-automation',
    name: 'InvoiceFlow Pro',
    category: 'Micro SAAS',
    description: 'Automated invoice processing and accounts payable solution with AI-powered data extraction and approval workflows.',
    features: [
      'AI-powered invoice data extractionAutomated approval workflowsMulti-currency supportIntegration with accounting softwareReal-time payment trackingCustom approval rulesMobile app for approvals'
    ],
    pricing: {
      starter: '$19/month',
      professional: '$49/month',
      enterprise: '$99/month'
    },
    technologyStack: ['ReactNode.jsPostgreSQLOpenAI APIStripe'],
=======
  {_id: 'invoice-automation', _name: 'InvoiceFlow Pro', _category: 'Micro SAAS', _description: 'Automated invoice processing and accounts payable solution with AI-powered data extraction and approval workflows.', _features: [
      'AI-powered invoice data extraction', _'Automated approval workflows', _'Multi-currency support', _'Integration with accounting software', _'Real-time payment tracking', _'Custom approval rules', _'Mobile app for approvals'
    ], _pricing: {
      starter: '$19/month', _professional: '$49/month', _enterprise: '$99/month'},
    technologyStack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Stripe'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Reduce invoice processing time by 90%Eliminate manual data entry errorsImprove cash flow managementEnhance audit trail complianceMobile-first approval process'
    ],
    useCases: [
      'Small businessesAccounting firmsProperty managementConstruction companiesHealthcare practices'
    ],
    status: 'active',
    priority: 6,
    demoUrl: 'https://ziontechgroup.com/demo/invoice-flow',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },
<<<<<<< HEAD
  {
    id: 'project-management',
    name: 'TaskMaster Pro',
    category: 'Micro SAAS',
    description: 'Intelligent project management platform with AI-powered task prioritization, resource allocation, and progress tracking.',
    features: [
      'AI-powered task prioritizationResource allocation optimizationReal-time collaboration toolsTime tracking and reportingIntegration with popular toolsMobile and desktop appsCustom workflow automation'
    ],
    pricing: {
      starter: '$15/month per user',
      professional: '$25/month per user',
      enterprise: '$35/month per user'
    },
    technologyStack: ['ReactNode.jsPostgreSQLRedisSocket.io'],
=======
  {_id: 'project-management', _name: 'TaskMaster Pro', _category: 'Micro SAAS', _description: 'Intelligent project management platform with AI-powered task prioritization, _resource allocation, _and progress tracking.', _features: [
      'AI-powered task prioritization', _'Resource allocation optimization', _'Real-time collaboration tools', _'Time tracking and reporting', _'Integration with popular tools', _'Mobile and desktop apps', _'Custom workflow automation'
    ], _pricing: {
      starter: '$15/month per user', _professional: '$25/month per user', _enterprise: '$35/month per user'},
    technologyStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Increase team productivity by 30%Better resource utilizationImproved project delivery timesEnhanced team collaborationData-driven decision making'
    ],
    useCases: [
      'Software development teamsMarketing agenciesConstruction projectsEvent planningConsulting firms'
    ],
    status: 'active',
    priority: 7,
    demoUrl: 'https://ziontechgroup.com/demo/task-master',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // Blockchain Services
<<<<<<< HEAD
  {
    id: 'smart-contract-audit',
    name: 'BlockAudit Pro',
    category: 'Blockchain',
    description: 'Professional smart contract security auditing and optimization services for DeFi, NFT, and enterprise blockchain projects.',
    features: [
      'Comprehensive security analysisGas optimization recommendationsFormal verification methodsVulnerability assessmentCompliance checkingPost-deployment monitoringEmergency response support'
    ],
    pricing: {
      starter: '$5,000/audit',
      professional: '$15,000/audit',
      enterprise: '$50,000/audit'
    },
    technologyStack: ['SolidityVyperFoundrySlitherMythril'],
=======
  {_id: 'smart-contract-audit', _name: 'BlockAudit Pro', _category: 'Blockchain', _description: 'Professional smart contract security auditing and optimization services for DeFi, _NFT, _and enterprise blockchain projects.', _features: [
      'Comprehensive security analysis', _'Gas optimization recommendations', _'Formal verification methods', _'Vulnerability assessment', _'Compliance checking', _'Post-deployment monitoring', _'Emergency response support'
    ], _pricing: {
      starter: '$5, _000/audit', _professional: '$15, _000/audit', _enterprise: '$50, _000/audit'},
    technologyStack: ['Solidity', 'Vyper', 'Foundry', 'Slither', 'Mythril'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Prevent costly security breachesOptimize gas costs by 20-40%Build investor confidenceMeet regulatory requirementsProtect user funds'
    ],
    useCases: [
      'DeFi protocolsNFT marketplacesDAO governanceEnterprise blockchainToken launches'
    ],
    status: 'active',
    priority: 8,
    demoUrl: 'https://ziontechgroup.com/demo/block-audit',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // IoT & Edge Computing
<<<<<<< HEAD
  {
    id: 'iot-monitoring',
    name: 'IoT Sentinel',
    category: 'IoT & Edge',
    description: 'Comprehensive IoT monitoring and management platform with edge computing capabilities for industrial and commercial applications.',
    features: [
      'Real-time device monitoringEdge computing processingPredictive maintenance alertsData visualization dashboardsIntegration with industrial protocolsScalable device managementCustom alert rules'
    ],
    pricing: {
      starter: '$10/device/month',
      professional: '$25/device/month',
      enterprise: '$50/device/month'
    },
    technologyStack: ['PythonMQTTKubernetesInfluxDBGrafana'],
=======
  {_id: 'iot-monitoring', _name: 'IoT Sentinel', _category: 'IoT & Edge', _description: 'Comprehensive IoT monitoring and management platform with edge computing capabilities for industrial and commercial applications.', _features: [
      'Real-time device monitoring', _'Edge computing processing', _'Predictive maintenance alerts', _'Data visualization dashboards', _'Integration with industrial protocols', _'Scalable device management', _'Custom alert rules'
    ], _pricing: {
      starter: '$10/device/month', _professional: '$25/device/month', _enterprise: '$50/device/month'},
    technologyStack: ['Python', 'MQTT', 'Kubernetes', 'InfluxDB', 'Grafana'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Reduce equipment downtime by 60%Lower maintenance costsImprove operational efficiencyReal-time operational insightsScalable IoT infrastructure'
    ],
    useCases: [
      'Manufacturing facilitiesSmart buildingsAgriculture monitoringEnergy managementTransportation logistics'
    ],
    status: 'active',
    priority: 9,
    demoUrl: 'https://ziontechgroup.com/demo/iot-sentinel',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // Cloud & DevOps
<<<<<<< HEAD
  {
    id: 'devops-automation',
    name: 'DevOps Flow',
    category: 'Cloud & DevOps',
    description: 'End-to-end DevOps automation platform with CI/CD pipelines, infrastructure as code, and cloud-native deployment tools.',
    features: [
      'Automated CI/CD pipelinesInfrastructure as Code (Terraform)Multi-cloud deploymentContainer orchestrationMonitoring and alertingSecurity scanningCost optimization'
    ],
    pricing: {
      starter: '$99/month',
      professional: '$299/month',
      enterprise: '$799/month'
    },
    technologyStack: ['DockerKubernetesTerraformJenkinsPrometheus'],
=======
  {_id: 'devops-automation', _name: 'DevOps Flow', _category: 'Cloud & DevOps', _description: 'End-to-end DevOps automation platform with CI/CD pipelines, _infrastructure as code, _and cloud-native deployment tools.', _features: [
      'Automated CI/CD pipelines', _'Infrastructure as Code (Terraform)', _'Multi-cloud deployment', _'Container orchestration', _'Monitoring and alerting', _'Security scanning', _'Cost optimization'
    ], _pricing: {
      starter: '$99/month', _professional: '$299/month', _enterprise: '$799/month'},
    technologyStack: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Deploy 10x fasterReduce deployment errors by 90%Lower infrastructure costsImprove team productivityEnhanced security posture'
    ],
    useCases: [
      'Software development teamsStartups and scale-upsEnterprise ITDevOps consultingCloud migration projects'
    ],
    status: 'active',
    priority: 10,
    demoUrl: 'https://ziontechgroup.com/demo/devops-flow',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // Data & Analytics
<<<<<<< HEAD
  {
    id: 'data-warehouse',
    name: 'DataVault Enterprise',
    category: 'Data & Analytics',
    description: 'Modern cloud data warehouse solution with real-time analytics, data governance, and AI-powered insights.',
    features: [
      'Real-time data ingestionAdvanced analytics and MLData governance and securitySelf-service BI toolsData lineage trackingPerformance optimizationMulti-cloud support'
    ],
    pricing: {
      starter: '$199/month',
      professional: '$499/month',
      enterprise: '$1,299/month'
    },
    technologyStack: ['SnowflakeApache AirflowdbtTableauPython'],
=======
  {_id: 'data-warehouse', _name: 'DataVault Enterprise', _category: 'Data & Analytics', _description: 'Modern cloud data warehouse solution with real-time analytics, _data governance, _and AI-powered insights.', _features: [
      'Real-time data ingestion', _'Advanced analytics and ML', _'Data governance and security', _'Self-service BI tools', _'Data lineage tracking', _'Performance optimization', _'Multi-cloud support'
    ], _pricing: {
      starter: '$199/month', _professional: '$499/month', _enterprise: '$1, _299/month'},
    technologyStack: ['Snowflake', 'Apache Airflow', 'dbt', 'Tableau', 'Python'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    benefits: [
      'Unified data platformReal-time analyticsScalable architectureCost-effective storageEnhanced data security'
    ],
    useCases: [
      'Business intelligenceCustomer analyticsFinancial reportingSupply chain analyticsMarketing attribution'
    ],
    status: 'active',
    priority: 11,
    demoUrl: 'https://ziontechgroup.com/demo/data-vault',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  }
],

<<<<<<< HEAD
export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category)
},

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id)
},

export const getCategories = () => {
  return Array.from(new Set(services.map(service => service.category)))
},
=======
export const _getServicesByCategory = (_category: Service['category']) => {_return services.filter(service => service.category === category);};

export const _getServiceById = (_id: string) => {_return services.find(service => service.id === id);};

export const _getCategories = () => {_return Array.from(new Set(services.map(service => service.category)));};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
