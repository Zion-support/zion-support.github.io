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
}

export const services: Service[] = [
  // AI Services
  {_id: 'ai-code-assistant', _name: 'ZionAI Code Assistant', _category: 'AI Services', _description: 'Advanced AI-powered code generation, _review, _and optimization platform with context-aware suggestions and multi-language support.', _features: [
      'Real-time code completion and suggestions', _'Automated code review and optimization', _'Multi-language support (Python, _JavaScript, _Go, _Rust)', _'Security vulnerability detection', _'Code documentation generation', _'Integration with popular IDEs', _'Custom model fine-tuning for enterprise codebases'
    ], _pricing: {
      starter: '$29/month', _professional: '$99/month', _enterprise: '$299/month', _custom: 'Contact for enterprise pricing'},
    technologyStack: ['OpenAI GPT-4', 'Claude 3', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    benefits: [
      'Reduce development time by 40-60%',
      'Improve code quality and security',
      'Lower maintenance costs',
      'Accelerate team onboarding',
      '24/7 AI assistance'
    ],
    useCases: [
      'Software development teams',
      'Startups and scale-ups',
      'Enterprise development',
      'Freelance developers',
      'Educational institutions'
    ],
    status: 'active',
    priority: 1,
    demoUrl: 'https://ziontechgroup.com/demo/ai-code-assistant',
    documentationUrl: 'https://ziontechgroup.com/docs/ai-code-assistant',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },
  {_id: 'ai-content-generator', _name: 'ContentForge AI', _category: 'AI Services', _description: 'Enterprise-grade AI content generation platform for marketing, _documentation, _and creative writing with brand voice consistency.', _features: [
      'Multi-format content generation (blogs, _emails, _social media)', _'Brand voice training and consistency', _'SEO optimization and keyword research', _'Multi-language content creation', _'Plagiarism detection and originality scoring', _'Content performance analytics', _'Team collaboration and approval workflows'
    ], _pricing: {
      starter: '$49/month', _professional: '$149/month', _enterprise: '$399/month'},
    technologyStack: ['GPT-4', 'Claude 3', 'BERT', 'React', 'FastAPI', 'MongoDB'],
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'Improved SEO performance',
      'Cost-effective content marketing',
      'Scalable content operations'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Enterprise marketing teams',
      'Educational institutions'
    ],
    status: 'active',
    priority: 2,
    demoUrl: 'https://ziontechgroup.com/demo/content-forge',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },
  {_id: 'ai-data-analytics', _name: 'InsightAI Analytics', _category: 'AI Services', _description: 'Intelligent data analytics platform with predictive modeling, _automated insights, _and interactive visualizations powered by machine learning.', _features: [
      'Automated data preprocessing and cleaning', _'Predictive modeling and forecasting', _'Natural language query interface', _'Real-time data streaming analytics', _'Custom dashboard builder', _'Anomaly detection and alerting', _'Integration with 100+ data sources'
    ], _pricing: {
      starter: '$79/month', _professional: '$199/month', _enterprise: '$599/month'},
    technologyStack: ['Python', 'TensorFlow', 'PyTorch', 'React', 'FastAPI', 'Apache Kafka'],
    benefits: [
      'Uncover hidden patterns in data',
      'Make data-driven decisions faster',
      'Reduce manual analysis time by 80%',
      'Predict future trends accurately',
      'Real-time business intelligence'
    ],
    useCases: [
      'Financial services',
      'Healthcare analytics',
      'E-commerce optimization',
      'Supply chain management',
      'Marketing analytics'
    ],
    status: 'active',
    priority: 3,
    demoUrl: 'https://ziontechgroup.com/demo/insight-ai',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // IT Services
  {_id: 'managed-it-services', _name: 'ZionTech Managed IT', _category: 'IT Services', _description: 'Comprehensive managed IT services including 24/7 monitoring, _cybersecurity, _cloud management, _and strategic technology consulting.', _features: [
      '24/7 network monitoring and support', _'Cybersecurity threat detection and response', _'Cloud infrastructure management (AWS, _Azure, _GCP)', _'Backup and disaster recovery', _'Help desk and user support', _'Technology roadmap planning', _'Compliance and audit support'
    ], _pricing: {
      starter: '$99/month per user', _professional: '$149/month per user', _enterprise: '$199/month per user'},
    technologyStack: ['Microsoft 365', 'AWS', 'Azure', 'Cisco', 'Fortinet', 'Veeam'],
    benefits: [
      'Reduce IT costs by 25-40%',
      'Improve system uptime to 99.9%',
      'Enhanced security posture',
      'Predictable monthly costs',
      'Access to enterprise-grade tools'
    ],
    useCases: [
      'Small to medium businesses',
      'Healthcare organizations',
      'Financial services',
      'Manufacturing companies',
      'Professional services firms'
    ],
    status: 'active',
    priority: 4,
    demoUrl: 'https://ziontechgroup.com/demo/managed-it',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },
  {_id: 'cybersecurity-audit', _name: 'SecureShield Audit', _category: 'IT Services', _description: 'Comprehensive cybersecurity assessment and penetration testing services to identify vulnerabilities and strengthen your security posture.', _features: [
      'Vulnerability assessment and scanning', _'Penetration testing (web, _mobile, _network)', _'Social engineering testing', _'Security policy review and development', _'Compliance gap analysis (SOC2, _ISO27001, _HIPAA)', _'Incident response planning', _'Security awareness training'
    ], _pricing: {
      starter: '$2, _999/assessment', _professional: '$5, _999/comprehensive', _enterprise: '$12, _999/enterprise'},
    technologyStack: ['Nessus', 'Metasploit', 'Burp Suite', 'Wireshark', 'Custom tools'],
    benefits: [
      'Identify security gaps before attackers',
      'Meet compliance requirements',
      'Reduce cyber risk exposure',
      'Improve incident response capabilities',
      'Protect brand reputation'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce businesses',
      'Government agencies',
      'Educational institutions'
    ],
    status: 'active',
    priority: 5,
    demoUrl: 'https://ziontechgroup.com/demo/secure-shield',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // Micro SAAS
  {_id: 'invoice-automation', _name: 'InvoiceFlow Pro', _category: 'Micro SAAS', _description: 'Automated invoice processing and accounts payable solution with AI-powered data extraction and approval workflows.', _features: [
      'AI-powered invoice data extraction', _'Automated approval workflows', _'Multi-currency support', _'Integration with accounting software', _'Real-time payment tracking', _'Custom approval rules', _'Mobile app for approvals'
    ], _pricing: {
      starter: '$19/month', _professional: '$49/month', _enterprise: '$99/month'},
    technologyStack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Stripe'],
    benefits: [
      'Reduce invoice processing time by 90%',
      'Eliminate manual data entry errors',
      'Improve cash flow management',
      'Enhance audit trail compliance',
      'Mobile-first approval process'
    ],
    useCases: [
      'Small businesses',
      'Accounting firms',
      'Property management',
      'Construction companies',
      'Healthcare practices'
    ],
    status: 'active',
    priority: 6,
    demoUrl: 'https://ziontechgroup.com/demo/invoice-flow',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },
  {_id: 'project-management', _name: 'TaskMaster Pro', _category: 'Micro SAAS', _description: 'Intelligent project management platform with AI-powered task prioritization, _resource allocation, _and progress tracking.', _features: [
      'AI-powered task prioritization', _'Resource allocation optimization', _'Real-time collaboration tools', _'Time tracking and reporting', _'Integration with popular tools', _'Mobile and desktop apps', _'Custom workflow automation'
    ], _pricing: {
      starter: '$15/month per user', _professional: '$25/month per user', _enterprise: '$35/month per user'},
    technologyStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io'],
    benefits: [
      'Increase team productivity by 30%',
      'Better resource utilization',
      'Improved project delivery times',
      'Enhanced team collaboration',
      'Data-driven decision making'
    ],
    useCases: [
      'Software development teams',
      'Marketing agencies',
      'Construction projects',
      'Event planning',
      'Consulting firms'
    ],
    status: 'active',
    priority: 7,
    demoUrl: 'https://ziontechgroup.com/demo/task-master',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // Blockchain Services
  {_id: 'smart-contract-audit', _name: 'BlockAudit Pro', _category: 'Blockchain', _description: 'Professional smart contract security auditing and optimization services for DeFi, _NFT, _and enterprise blockchain projects.', _features: [
      'Comprehensive security analysis', _'Gas optimization recommendations', _'Formal verification methods', _'Vulnerability assessment', _'Compliance checking', _'Post-deployment monitoring', _'Emergency response support'
    ], _pricing: {
      starter: '$5, _000/audit', _professional: '$15, _000/audit', _enterprise: '$50, _000/audit'},
    technologyStack: ['Solidity', 'Vyper', 'Foundry', 'Slither', 'Mythril'],
    benefits: [
      'Prevent costly security breaches',
      'Optimize gas costs by 20-40%',
      'Build investor confidence',
      'Meet regulatory requirements',
      'Protect user funds'
    ],
    useCases: [
      'DeFi protocols',
      'NFT marketplaces',
      'DAO governance',
      'Enterprise blockchain',
      'Token launches'
    ],
    status: 'active',
    priority: 8,
    demoUrl: 'https://ziontechgroup.com/demo/block-audit',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // IoT & Edge Computing
  {_id: 'iot-monitoring', _name: 'IoT Sentinel', _category: 'IoT & Edge', _description: 'Comprehensive IoT monitoring and management platform with edge computing capabilities for industrial and commercial applications.', _features: [
      'Real-time device monitoring', _'Edge computing processing', _'Predictive maintenance alerts', _'Data visualization dashboards', _'Integration with industrial protocols', _'Scalable device management', _'Custom alert rules'
    ], _pricing: {
      starter: '$10/device/month', _professional: '$25/device/month', _enterprise: '$50/device/month'},
    technologyStack: ['Python', 'MQTT', 'Kubernetes', 'InfluxDB', 'Grafana'],
    benefits: [
      'Reduce equipment downtime by 60%',
      'Lower maintenance costs',
      'Improve operational efficiency',
      'Real-time operational insights',
      'Scalable IoT infrastructure'
    ],
    useCases: [
      'Manufacturing facilities',
      'Smart buildings',
      'Agriculture monitoring',
      'Energy management',
      'Transportation logistics'
    ],
    status: 'active',
    priority: 9,
    demoUrl: 'https://ziontechgroup.com/demo/iot-sentinel',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // Cloud & DevOps
  {_id: 'devops-automation', _name: 'DevOps Flow', _category: 'Cloud & DevOps', _description: 'End-to-end DevOps automation platform with CI/CD pipelines, _infrastructure as code, _and cloud-native deployment tools.', _features: [
      'Automated CI/CD pipelines', _'Infrastructure as Code (Terraform)', _'Multi-cloud deployment', _'Container orchestration', _'Monitoring and alerting', _'Security scanning', _'Cost optimization'
    ], _pricing: {
      starter: '$99/month', _professional: '$299/month', _enterprise: '$799/month'},
    technologyStack: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment errors by 90%',
      'Lower infrastructure costs',
      'Improve team productivity',
      'Enhanced security posture'
    ],
    useCases: [
      'Software development teams',
      'Startups and scale-ups',
      'Enterprise IT',
      'DevOps consulting',
      'Cloud migration projects'
    ],
    status: 'active',
    priority: 10,
    demoUrl: 'https://ziontechgroup.com/demo/devops-flow',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  },

  // Data & Analytics
  {_id: 'data-warehouse', _name: 'DataVault Enterprise', _category: 'Data & Analytics', _description: 'Modern cloud data warehouse solution with real-time analytics, _data governance, _and AI-powered insights.', _features: [
      'Real-time data ingestion', _'Advanced analytics and ML', _'Data governance and security', _'Self-service BI tools', _'Data lineage tracking', _'Performance optimization', _'Multi-cloud support'
    ], _pricing: {
      starter: '$199/month', _professional: '$499/month', _enterprise: '$1, _299/month'},
    technologyStack: ['Snowflake', 'Apache Airflow', 'dbt', 'Tableau', 'Python'],
    benefits: [
      'Unified data platform',
      'Real-time analytics',
      'Scalable architecture',
      'Cost-effective storage',
      'Enhanced data security'
    ],
    useCases: [
      'Business intelligence',
      'Customer analytics',
      'Financial reporting',
      'Supply chain analytics',
      'Marketing attribution'
    ],
    status: 'active',
    priority: 11,
    demoUrl: 'https://ziontechgroup.com/demo/data-vault',
    contactInfo: {_email: 'kleber@ziontechgroup.com', _phone: '+1 302 464 0950', _address: '364 E Main St STE 1008 Middletown DE 19709'}
  }
];

export const _getServicesByCategory = (_category: Service['category']) => {_return services.filter(service => service.category === category);};

export const _getServiceById = (_id: string) => {_return services.find(service => service.id === id);};

export const _getCategories = () => {_return Array.from(new Set(services.map(service => service.category)));};