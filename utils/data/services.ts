export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    from: number;
    to?: number;
    currency: string;
    type: "hourly" | "fixed" | "monthly" | "yearly";
    details?: string;
  };
  benefits: string[];
  technologies: string[];
  useCases: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  estimatedDelivery: string;
  support: string;
}

export const serviceCategories = [
  { id: "ai-services", name: "AI & Machine Learning Services" },
  { id: "cloud-services", name: "Cloud & Infrastructure Services" },
  { id: "web-development", name: "Web Development Services" },
  { id: "mobile-development", name: "Mobile Development Services" },
  { id: "data-services", name: "Data & Analytics Services" },
  { id: "security-services", name: "Cybersecurity Services" },
  { id: "automation-services", name: "Automation & Integration Services" },
  { id: "consulting-services", name: "IT Consulting Services" },
  { id: "saas-solutions", name: "SaaS Solutions" },
  { id: "blockchain-services", name: "Blockchain & Web3 Services" },
];

export const services: Service[] = [
  // AI & Machine Learning Services
  {
    id: "ai-chatbot-development",
    title: "AI Chatbot Development",
    description: "Custom AI-powered chatbots for customer service, sales, and support automation with natural language processing capabilities.",
    category: "ai-services",
    features: [
      "Natural Language Processing (NLP)",
      "Multi-language Support",
      "Integration with CRM Systems",
      "Analytics Dashboard",
      "24/7 Availability",
      "Custom Branding",
      "API Integration",
      "Voice Recognition"
    ],
    pricing: {
      from: 5000,
      to: 25000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $5,000 for basic chatbot, $25,000 for enterprise solution"
    },
    benefits: [
      "Reduce customer service costs by 30-50%",
      "24/7 customer support availability",
      "Instant response to customer queries",
      "Scalable customer service solution",
      "Data collection and analytics"
    ],
    technologies: ["Python", "TensorFlow", "OpenAI GPT", "Dialogflow", "React", "Node.js"],
    useCases: ["Customer Support", "Sales Qualification", "FAQ Automation", "Appointment Booking"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "4-8 weeks",
    support: "6 months post-launch support included"
  },
  {
    id: "machine-learning-models",
    title: "Custom Machine Learning Models",
    description: "Development of custom ML models for predictive analytics, image recognition, recommendation systems, and business intelligence.",
    category: "ai-services",
    features: [
      "Custom Model Development",
      "Data Preprocessing",
      "Model Training & Validation",
      "API Development",
      "Performance Monitoring",
      "Model Optimization",
      "Documentation",
      "Deployment Support"
    ],
    pricing: {
      from: 15000,
      to: 75000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $15,000 for simple models, $75,000 for complex enterprise solutions"
    },
    benefits: [
      "Predictive insights for business decisions",
      "Automated data analysis",
      "Improved accuracy over time",
      "Competitive advantage through AI",
      "Cost reduction through automation"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "AWS SageMaker", "Google Cloud AI"],
    useCases: ["Predictive Analytics", "Image Recognition", "Recommendation Systems", "Fraud Detection"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "8-16 weeks",
    support: "12 months support with model updates"
  },
  {
    id: "ai-data-analytics",
    title: "AI-Powered Data Analytics",
    description: "Advanced analytics solutions using AI to extract insights from large datasets, create visualizations, and generate actionable reports.",
    category: "ai-services",
    features: [
      "Big Data Processing",
      "Real-time Analytics",
      "Predictive Modeling",
      "Interactive Dashboards",
      "Automated Reporting",
      "Data Visualization",
      "Anomaly Detection",
      "Trend Analysis"
    ],
    pricing: {
      from: 8000,
      to: 40000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $8,000 for basic analytics, $40,000 for enterprise BI solution"
    },
    benefits: [
      "Data-driven decision making",
      "Real-time business insights",
      "Automated reporting processes",
      "Improved operational efficiency",
      "Competitive market analysis"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "Kafka"],
    useCases: ["Business Intelligence", "Market Analysis", "Performance Tracking", "Risk Assessment"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "6-12 weeks",
    support: "Ongoing analytics support and maintenance"
  },

  // Cloud & Infrastructure Services
  {
    id: "cloud-migration",
    title: "Cloud Migration Services",
    description: "Complete cloud migration solutions including assessment, planning, execution, and optimization for AWS, Azure, and Google Cloud.",
    category: "cloud-services",
    features: [
      "Cloud Readiness Assessment",
      "Migration Strategy Planning",
      "Data Migration",
      "Application Modernization",
      "Performance Optimization",
      "Security Implementation",
      "Cost Optimization",
      "Training & Documentation"
    ],
    pricing: {
      from: 25000,
      to: 150000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $25,000 for small migration, $150,000+ for enterprise migration"
    },
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability and performance",
      "Enhanced security and compliance",
      "Disaster recovery capabilities",
      "Global accessibility"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    useCases: ["Legacy System Migration", "Data Center Consolidation", "Application Modernization", "Disaster Recovery"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "12-24 weeks",
    support: "6 months post-migration support"
  },
  {
    id: "devops-automation",
    title: "DevOps & CI/CD Automation",
    description: "Complete DevOps implementation with automated CI/CD pipelines, infrastructure as code, and monitoring solutions.",
    category: "cloud-services",
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Automated Testing",
      "Monitoring & Alerting",
      "Security Scanning",
      "Performance Optimization",
      "Disaster Recovery",
      "Team Training"
    ],
    pricing: {
      from: 12000,
      to: 60000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $12,000 for basic setup, $60,000 for enterprise DevOps transformation"
    },
    benefits: [
      "Faster deployment cycles",
      "Reduced manual errors",
      "Improved code quality",
      "Better team collaboration",
      "Cost savings through automation"
    ],
    technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "Ansible"],
    useCases: ["Software Development", "Application Deployment", "Infrastructure Management", "Quality Assurance"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "6-12 weeks",
    support: "Ongoing DevOps support and optimization"
  },

  // Web Development Services
  {
    id: "web-app-development",
    title: "Custom Web Application Development",
    description: "Full-stack web application development with modern frameworks, responsive design, and scalable architecture.",
    category: "web-development",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "Database Design",
      "API Development",
      "Security Implementation",
      "Performance Optimization",
      "SEO Optimization",
      "Analytics Integration"
    ],
    pricing: {
      from: 15000,
      to: 100000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $15,000 for simple web app, $100,000+ for complex enterprise applications"
    },
    benefits: [
      "Custom solution for your business needs",
      "Scalable and maintainable code",
      "Modern user experience",
      "Mobile-responsive design",
      "SEO-optimized for better visibility"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"],
    useCases: ["E-commerce Platforms", "Business Management Systems", "Customer Portals", "Content Management Systems"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "8-20 weeks",
    support: "12 months post-launch support"
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Platform Development",
    description: "Custom e-commerce solutions with advanced features, payment integration, inventory management, and analytics.",
    category: "web-development",
    features: [
      "Custom E-commerce Design",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Management",
      "Analytics Dashboard",
      "Mobile App Integration",
      "Multi-store Support"
    ],
    pricing: {
      from: 25000,
      to: 120000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $25,000 for basic store, $120,000+ for enterprise e-commerce platform"
    },
    benefits: [
      "Increased online sales",
      "Better customer experience",
      "Automated order processing",
      "Real-time inventory tracking",
      "Multi-channel selling capabilities"
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "React", "Node.js", "Stripe", "PayPal"],
    useCases: ["Online Retail", "B2B Commerce", "Marketplace Platforms", "Subscription Services"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "12-24 weeks",
    support: "Ongoing e-commerce support and maintenance"
  },

  // Mobile Development Services
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile application development for iOS and Android with modern UI/UX design.",
    category: "mobile-development",
    features: [
      "Native iOS & Android Development",
      "Cross-platform Development",
      "Custom UI/UX Design",
      "Push Notifications",
      "Offline Functionality",
      "App Store Optimization",
      "Analytics Integration",
      "Backend API Development"
    ],
    pricing: {
      from: 20000,
      to: 150000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $20,000 for simple app, $150,000+ for complex enterprise mobile solutions"
    },
    benefits: [
      "Enhanced customer engagement",
      "Mobile-first user experience",
      "Offline functionality",
      "Push notification capabilities",
      "App store presence"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Mobile"],
    useCases: ["Customer Apps", "Business Tools", "E-commerce Apps", "Social Platforms"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "12-24 weeks",
    support: "12 months post-launch support with updates"
  },

  // Data & Analytics Services
  {
    id: "data-warehouse-solutions",
    title: "Data Warehouse & BI Solutions",
    description: "Enterprise data warehouse design, ETL pipeline development, and business intelligence dashboard creation.",
    category: "data-services",
    features: [
      "Data Warehouse Design",
      "ETL Pipeline Development",
      "Data Modeling",
      "BI Dashboard Creation",
      "Data Quality Management",
      "Performance Optimization",
      "Security Implementation",
      "Training & Documentation"
    ],
    pricing: {
      from: 30000,
      to: 200000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $30,000 for basic warehouse, $200,000+ for enterprise data platform"
    },
    benefits: [
      "Centralized data management",
      "Real-time business insights",
      "Improved decision making",
      "Data-driven culture",
      "Compliance and governance"
    ],
    technologies: ["Snowflake", "Amazon Redshift", "Google BigQuery", "Tableau", "Power BI", "Apache Airflow"],
    useCases: ["Business Intelligence", "Financial Reporting", "Customer Analytics", "Operational Analytics"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "16-32 weeks",
    support: "Ongoing data platform support and optimization"
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-audit",
    title: "Cybersecurity Audit & Assessment",
    description: "Comprehensive security audits, vulnerability assessments, penetration testing, and security framework implementation.",
    category: "security-services",
    features: [
      "Security Assessment",
      "Vulnerability Scanning",
      "Penetration Testing",
      "Security Framework Implementation",
      "Compliance Auditing",
      "Security Training",
      "Incident Response Planning",
      "Security Monitoring Setup"
    ],
    pricing: {
      from: 8000,
      to: 50000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $8,000 for basic audit, $50,000+ for comprehensive security program"
    },
    benefits: [
      "Protection against cyber threats",
      "Compliance with regulations",
      "Reduced security risks",
      "Customer trust and confidence",
      "Insurance premium reductions"
    ],
    technologies: ["Nessus", "Metasploit", "Wireshark", "SIEM Tools", "Firewall Solutions"],
    useCases: ["Security Compliance", "Risk Assessment", "Incident Response", "Security Training"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "4-12 weeks",
    support: "Ongoing security monitoring and support"
  },

  // Automation & Integration Services
  {
    id: "business-process-automation",
    title: "Business Process Automation",
    description: "RPA (Robotic Process Automation) solutions to automate repetitive tasks, improve efficiency, and reduce operational costs.",
    category: "automation-services",
    features: [
      "Process Analysis & Mapping",
      "RPA Bot Development",
      "Workflow Automation",
      "Integration Development",
      "Monitoring & Analytics",
      "Exception Handling",
      "Scalability Planning",
      "Training & Support"
    ],
    pricing: {
      from: 15000,
      to: 80000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $15,000 for simple automation, $80,000+ for enterprise RPA program"
    },
    benefits: [
      "Reduced manual errors",
      "Increased productivity",
      "Cost savings",
      "24/7 operation capability",
      "Improved compliance"
    ],
    technologies: ["UiPath", "Automation Anywhere", "Blue Prism", "Python", "Power Automate"],
    useCases: ["Data Entry Automation", "Invoice Processing", "Customer Service", "Report Generation"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "8-16 weeks",
    support: "Ongoing automation support and optimization"
  },

  // SaaS Solutions
  {
    id: "custom-saas-platforms",
    title: "Custom SaaS Platform Development",
    description: "End-to-end SaaS platform development with multi-tenancy, subscription management, and scalable architecture.",
    category: "saas-solutions",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "User Management",
      "API Development",
      "Payment Integration",
      "Analytics Dashboard",
      "White-label Solutions",
      "Scalable Infrastructure"
    ],
    pricing: {
      from: 50000,
      to: 300000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $50,000 for basic SaaS, $300,000+ for enterprise SaaS platform"
    },
    benefits: [
      "Recurring revenue model",
      "Scalable business growth",
      "Global market reach",
      "Automated customer management",
      "Data-driven insights"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Auth0"],
    useCases: ["B2B Software", "Industry-specific Solutions", "Platform-as-a-Service", "Software Marketplaces"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "20-40 weeks",
    support: "Ongoing SaaS platform support and feature development"
  },

  // Blockchain Services
  {
    id: "blockchain-development",
    title: "Blockchain & Web3 Development",
    description: "Custom blockchain solutions, smart contract development, DeFi applications, and Web3 integration services.",
    category: "blockchain-services",
    features: [
      "Smart Contract Development",
      "DeFi Application Development",
      "NFT Marketplace Creation",
      "Blockchain Integration",
      "Wallet Development",
      "DApp Development",
      "Token Economics Design",
      "Security Auditing"
    ],
    pricing: {
      from: 25000,
      to: 150000,
      currency: "USD",
      type: "fixed",
      details: "Starting from $25,000 for simple DApp, $150,000+ for complex DeFi platform"
    },
    benefits: [
      "Decentralized solutions",
      "Transparent transactions",
      "Reduced intermediaries",
      "Innovative business models",
      "Future-proof technology"
    ],
    technologies: ["Ethereum", "Solidity", "React", "Node.js", "IPFS", "Web3.js"],
    useCases: ["DeFi Platforms", "NFT Marketplaces", "Supply Chain Tracking", "Decentralized Applications"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "12-32 weeks",
    support: "Ongoing blockchain support and smart contract maintenance"
  },

  // IT Consulting Services
  {
    id: "it-strategy-consulting",
    title: "IT Strategy & Digital Transformation",
    description: "Strategic IT consulting services to help organizations plan, implement, and optimize their digital transformation initiatives.",
    category: "consulting-services",
    features: [
      "Technology Assessment",
      "Digital Strategy Planning",
      "Architecture Design",
      "Technology Selection",
      "Implementation Roadmap",
      "Change Management",
      "Performance Monitoring",
      "Continuous Optimization"
    ],
    pricing: {
      from: 150,
      to: 300,
      currency: "USD",
      type: "hourly",
      details: "$150-300 per hour for consulting services"
    },
    benefits: [
      "Strategic technology direction",
      "Cost optimization",
      "Risk mitigation",
      "Competitive advantage",
      "Future-ready organization"
    ],
    technologies: ["Enterprise Architecture", "Cloud Strategy", "Digital Platforms", "Emerging Technologies"],
    useCases: ["Digital Transformation", "Technology Modernization", "Strategic Planning", "Technology Assessment"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    estimatedDelivery: "Ongoing consulting engagement",
    support: "Continuous strategic support and guidance"
  }
];

export const getServicesByCategory = (categoryId: string): Service[] => {
  return services.filter(service => service.category === categoryId);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getFeaturedServices = (): Service[] => {
  return services.slice(0, 6); // Return first 6 services as featured
};
