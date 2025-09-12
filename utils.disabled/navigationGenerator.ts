import { NavigationItem, NavigationCategory, NavigationConfig } from '../types/navigation';

export class NavigationGenerator {
  private services: NavigationItem[] = [];
  private categories: NavigationCategory[] = [];
  private pages: NavigationItem[] = [];

  constructor() {
    this.initializeNavigation();
  }

  private async initializeNavigation() {
    await this.discoverServices();
    await this.discoverPages();
    await this.generateCategories();
  }

  // Auto-discover services from data and generate navigation
  async discoverServices(): Promise<NavigationItem[]> {
<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
    // This would typically scan a services directory or API
    // For now, using the services from the website analysis
    this.services = [
      {
        id: 'ai-analytics',
        label: 'AI-Powered Data Analytics Platform',
        href: '/demo/analytics/',
=======
    // Comprehensive services list based on website analysis
    this.services = [
      // AI & Machine Learning Services
      {
        id: 'ai-analytics',
        label: 'AI-Powered Data Analytics Platform',
        href: '/services/ai-analytics',
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Advanced analytics platform with machine learning capabilities',
        technologyStack: ['Python', 'TensorFlow', 'React', 'Node.js'],
        pricing: '$99/month',
        performance: {
          uptime: '99.9%',
          response: '<200ms',
          users: '10,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 1
      },
      {
<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
        id: 'support-bot',
        label: 'Intelligent Customer Support Bot',
        href: '/demo/support-bot/',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'AI-powered chatbot with natural language processing',
        technologyStack: ['Python', 'NLP', 'React', 'FastAPI'],
        pricing: '$0.10/conversation',
        performance: {
          uptime: '99.8%',
          response: '<100ms',
          users: '50,000+'
        },
        lastUpdated: '2025-01-14',
        priority: 2
      },
      {
        id: 'predictive-maintenance',
        label: 'Predictive Maintenance System',
        href: '/demo/predictive-maintenance/',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'AI-driven predictive maintenance system',
        technologyStack: ['Python', 'Scikit-learn', 'React', 'PostgreSQL'],
        pricing: '$50/equipment/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '15,000+'
        },
        lastUpdated: '2025-01-08',
        priority: 3
      },
      {
        id: 'video-analytics',
        label: 'Real-time Video Analytics',
        href: '/demo/video-analytics/',
        category: 'AI & Machine Learning',
        status: 'beta',
        description: 'Advanced video analytics with real-time object detection',
        technologyStack: ['Python', 'OpenCV', 'TensorFlow', 'WebRTC'],
        pricing: '$25/stream/month',
        performance: {
          uptime: '99.7%',
          response: '<500ms',
          users: '8,000+'
        },
        lastUpdated: '2025-01-07',
        priority: 4
      },
      {
        id: 'iot-pipeline',
        label: 'Real-time IoT Data Pipeline',
        href: '/demo/iot-pipeline/',
        category: 'IoT & Edge',
        status: 'beta',
        description: 'High-performance data pipeline for IoT sensor data',
        technologyStack: ['Apache Kafka', 'Python', 'Node.js', 'MongoDB'],
        pricing: '$5/device/month',
        performance: {
          uptime: '99.7%',
          response: '<50ms',
          users: '5,000+'
        },
        lastUpdated: '2025-01-13',
        priority: 5
      },
      {
        id: 'edge-orchestrator',
        label: 'Edge Computing Orchestrator',
        href: '/demo/edge-orchestrator/',
        category: 'IoT & Edge',
        status: 'development',
        description: 'Intelligent edge computing platform',
        technologyStack: ['Kubernetes', 'Docker', 'Python', 'Go'],
        pricing: '$20/node/month',
        performance: {
          uptime: '99.8%',
          response: '<200ms',
          users: '3,000+'
        },
        lastUpdated: '2025-01-09',
        priority: 6
      },
      {
        id: 'blockchain',
        label: 'Blockchain Smart Contract Platform',
        href: '/demo/blockchain/',
        category: 'Blockchain',
        status: 'development',
        description: 'Enterprise-grade blockchain platform',
        technologyStack: ['Ethereum', 'Solidity', 'Web3.js', 'React'],
        pricing: '$0.01/transaction',
        performance: {
          uptime: '99.5%',
          response: '<500ms',
          users: '2,000+'
        },
        lastUpdated: '2025-01-12',
        priority: 7
      },
      {
        id: 'quantum',
        label: 'Quantum Computing Simulator',
        href: '/demo/quantum/',
        category: 'Quantum Computing',
        status: 'beta',
        description: 'Advanced quantum computing simulator',
        technologyStack: ['Python', 'Qiskit', 'React', 'WebAssembly'],
        pricing: '$0.50/minute',
        performance: {
          uptime: '99.6%',
          response: '<1s',
          users: '1,000+'
        },
        lastUpdated: '2025-01-11',
        priority: 8
      },
      {
        id: 'api-gateway',
        label: 'Microservice API Gateway',
        href: '/demo/api-gateway/',
        category: 'Microservices',
        status: 'active',
        description: 'High-performance API gateway for microservices',
        technologyStack: ['Node.js', 'Express', 'Redis', 'Docker'],
        pricing: '$0.001/request',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '25,000+'
        },
        lastUpdated: '2025-01-10',
        priority: 9
=======
        id: 'ai-autonomous-business-manager',
        label: 'AI Autonomous Business Manager',
        href: '/services/ai-autonomous-business-manager',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Fully autonomous business management system',
        technologyStack: ['Python', 'AI/ML', 'React', 'Node.js'],
        pricing: '$299/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '5,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 2
      },
      {
        id: 'ai-consciousness-evolution',
        label: 'AI Consciousness Evolution Platform',
        href: '/services/ai-consciousness-evolution',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Advanced AI consciousness research and development platform',
        technologyStack: ['Python', 'Neural Networks', 'Quantum Computing', 'React'],
        pricing: '$499/month',
        performance: {
          uptime: '99.8%',
          response: '<500ms',
          users: '2,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 3
      },
      {
        id: 'ai-autonomous-research-assistant',
        label: 'AI Autonomous Research Assistant',
        href: '/services/ai-autonomous-research-assistant',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Intelligent research automation and analysis',
        technologyStack: ['Python', 'NLP', 'React', 'FastAPI'],
        pricing: '$199/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '8,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 4
      },
      {
        id: 'ai-business-intelligence',
        label: 'AI Business Intelligence Suite',
        href: '/services/ai-business-intelligence',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Comprehensive business intelligence with AI insights',
        technologyStack: ['Python', 'Machine Learning', 'React', 'PostgreSQL'],
        pricing: '$149/month',
        performance: {
          uptime: '99.9%',
          response: '<200ms',
          users: '12,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 5
      },
      {
        id: 'ai-content-generator',
        label: 'AI Content Generation Platform',
        href: '/services/ai-content-generator',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Automated content creation and management',
        technologyStack: ['Python', 'GPT Models', 'React', 'Node.js'],
        pricing: '$79/month',
        performance: {
          uptime: '99.8%',
          response: '<150ms',
          users: '25,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 6
      },
      {
        id: 'ai-code-review',
        label: 'AI Code Review & Analysis',
        href: '/services/ai-code-review',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Automated code review and quality analysis',
        technologyStack: ['Python', 'Static Analysis', 'React', 'GitHub API'],
        pricing: '$59/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '15,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 7
      },
      {
        id: 'ai-autonomous-decision-engine',
        label: 'AI Autonomous Decision Engine',
        href: '/services/ai-autonomous-decision-engine',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Intelligent decision-making automation system',
        technologyStack: ['Python', 'Decision Trees', 'React', 'Redis'],
        pricing: '$399/month',
        performance: {
          uptime: '99.9%',
          response: '<50ms',
          users: '3,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 8
      },
      {
        id: 'ai-autonomous-ecosystem',
        label: 'AI Autonomous Ecosystem Manager',
        href: '/services/ai-autonomous-ecosystem',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'Complete ecosystem management and optimization',
        technologyStack: ['Python', 'AI Orchestration', 'React', 'Kubernetes'],
        pricing: '$599/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '1,500+'
        },
        lastUpdated: '2025-01-15',
        priority: 9
      },
      {
        id: 'ai-autonomous-business-operations',
        label: 'AI Autonomous Business Operations',
        href: '/services/ai-autonomous-business-operations',
        category: 'AI & Machine Learning',
        status: 'active',
        description: 'End-to-end business process automation',
        technologyStack: ['Python', 'RPA', 'React', 'Workflow Engine'],
        pricing: '$449/month',
        performance: {
          uptime: '99.9%',
          response: '<200ms',
          users: '4,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 10
      },

      // Cybersecurity Services
      {
        id: 'advanced-cybersecurity-suite',
        label: 'Advanced Cybersecurity Suite',
        href: '/services/advanced-cybersecurity-suite',
        category: 'Cybersecurity',
        status: 'active',
        description: 'Comprehensive cybersecurity protection and monitoring',
        technologyStack: ['Python', 'Security Tools', 'React', 'SIEM'],
        pricing: '$299/month',
        performance: {
          uptime: '99.99%',
          response: '<100ms',
          users: '8,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 11
      },
      {
        id: 'ai-powered-enterprise-security',
        label: 'AI-Powered Enterprise Security',
        href: '/services/ai-powered-enterprise-security',
        category: 'Cybersecurity',
        status: 'active',
        description: 'Intelligent threat detection and response',
        technologyStack: ['Python', 'AI Security', 'React', 'Threat Intel'],
        pricing: '$399/month',
        performance: {
          uptime: '99.99%',
          response: '<50ms',
          users: '5,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 12
      },
      {
        id: 'soc2-compliance-automation',
        label: 'SOC2 Compliance Automation',
        href: '/services/soc2-compliance-automation',
        category: 'Cybersecurity',
        status: 'active',
        description: 'Automated SOC2 compliance and reporting',
        technologyStack: ['Python', 'Compliance Tools', 'React', 'Audit API'],
        pricing: '$199/month',
        performance: {
          uptime: '99.9%',
          response: '<200ms',
          users: '3,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 13
      },

      // Infrastructure Services
      {
        id: 'advanced-it-infrastructure-services',
        label: 'Advanced IT Infrastructure Services',
        href: '/services/advanced-it-infrastructure-services',
        category: 'Infrastructure',
        status: 'active',
        description: 'Enterprise-grade infrastructure management',
        technologyStack: ['Kubernetes', 'Docker', 'Terraform', 'Monitoring'],
        pricing: '$199/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '10,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 14
      },
      {
        id: 'autonomous-devops-platform',
        label: 'Autonomous DevOps Platform',
        href: '/services/autonomous-devops-platform',
        category: 'Infrastructure',
        status: 'active',
        description: 'Self-managing DevOps and CI/CD platform',
        technologyStack: ['Jenkins', 'GitLab', 'Kubernetes', 'Monitoring'],
        pricing: '$149/month',
        performance: {
          uptime: '99.9%',
          response: '<150ms',
          users: '6,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 15
      },
      {
        id: 'quantum-cloud-infrastructure',
        label: 'Quantum Cloud Infrastructure',
        href: '/services/quantum-cloud-infrastructure',
        category: 'Infrastructure',
        status: 'beta',
        description: 'Next-generation quantum computing infrastructure',
        technologyStack: ['Quantum Computing', 'Cloud Native', 'React', 'Quantum SDK'],
        pricing: '$999/month',
        performance: {
          uptime: '99.8%',
          response: '<1000ms',
          users: '500+'
        },
        lastUpdated: '2025-01-15',
        priority: 16
      },

      // Blockchain Services
      {
        id: 'ai-blockchain-analytics',
        label: 'AI Blockchain Analytics',
        href: '/services/ai-blockchain-analytics',
        category: 'Blockchain',
        status: 'active',
        description: 'Intelligent blockchain data analysis',
        technologyStack: ['Python', 'Blockchain APIs', 'React', 'Analytics'],
        pricing: '$129/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '4,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 17
      },

      // Content & Marketing Services
      {
        id: 'ai-content-creation',
        label: 'AI Content Creation Platform',
        href: '/services/ai-content-creation',
        category: 'Content & Marketing',
        status: 'active',
        description: 'Automated content creation and optimization',
        technologyStack: ['Python', 'NLP', 'React', 'CMS'],
        pricing: '$89/month',
        performance: {
          uptime: '99.8%',
          response: '<200ms',
          users: '20,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 18
      },
      {
        id: 'ai-content-marketing-automation',
        label: 'AI Content Marketing Automation',
        href: '/services/ai-content-marketing-automation',
        category: 'Content & Marketing',
        status: 'active',
        description: 'Intelligent marketing content automation',
        technologyStack: ['Python', 'Marketing APIs', 'React', 'Analytics'],
        pricing: '$159/month',
        performance: {
          uptime: '99.9%',
          response: '<150ms',
          users: '12,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 19
      },
      {
        id: 'ai-content-personalization-engine',
        label: 'AI Content Personalization Engine',
        href: '/services/ai-content-personalization-engine',
        category: 'Content & Marketing',
        status: 'active',
        description: 'Dynamic content personalization system',
        technologyStack: ['Python', 'ML Models', 'React', 'Personalization'],
        pricing: '$119/month',
        performance: {
          uptime: '99.9%',
          response: '<100ms',
          users: '15,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 20
      },

      // Research & Development Services
      {
        id: 'advanced-research-automation',
        label: 'Advanced Research Automation',
        href: '/services/advanced-research-automation',
        category: 'Research & Development',
        status: 'active',
        description: 'Automated research and data analysis',
        technologyStack: ['Python', 'Research Tools', 'React', 'Data APIs'],
        pricing: '$179/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '6,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 21
      },
      {
        id: 'ai-autonomous-research',
        label: 'AI Autonomous Research Platform',
        href: '/services/ai-autonomous-research',
        category: 'Research & Development',
        status: 'active',
        description: 'Self-directed research and discovery',
        technologyStack: ['Python', 'AI Research', 'React', 'Knowledge Graph'],
        pricing: '$299/month',
        performance: {
          uptime: '99.8%',
          response: '<500ms',
          users: '3,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 22
      },

      // Specialized AI Services
      {
        id: 'ai-autonomous-creative-director',
        label: 'AI Autonomous Creative Director',
        href: '/services/ai-autonomous-creative-director',
        category: 'Creative AI',
        status: 'beta',
        description: 'AI-powered creative direction and management',
        technologyStack: ['Python', 'Creative AI', 'React', 'Design Tools'],
        pricing: '$399/month',
        performance: {
          uptime: '99.8%',
          response: '<200ms',
          users: '2,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 23
      },
      {
        id: 'ai-autonomous-legal-counsel',
        label: 'AI Autonomous Legal Counsel',
        href: '/services/ai-autonomous-legal-counsel',
        category: 'Legal AI',
        status: 'beta',
        description: 'Intelligent legal analysis and counsel',
        technologyStack: ['Python', 'Legal AI', 'React', 'Legal APIs'],
        pricing: '$499/month',
        performance: {
          uptime: '99.9%',
          response: '<300ms',
          users: '1,500+'
        },
        lastUpdated: '2025-01-15',
        priority: 24
      },
      {
        id: 'ai-autonomous-healthcare-physician',
        label: 'AI Autonomous Healthcare Physician',
        href: '/services/ai-autonomous-healthcare-physician',
        category: 'Healthcare AI',
        status: 'beta',
        description: 'AI-powered healthcare diagnostics and analysis',
        technologyStack: ['Python', 'Medical AI', 'React', 'Health APIs'],
        pricing: '$799/month',
        performance: {
          uptime: '99.99%',
          response: '<100ms',
          users: '1,000+'
        },
        lastUpdated: '2025-01-15',
        priority: 25
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
      }
    ];

    return this.services;
  }

<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
  // Auto-discover pages from the pages directory
=======
  // Discover and generate pages
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
  async discoverPages(): Promise<NavigationItem[]> {
    this.pages = [
      {
        id: 'home',
        label: 'Home',
        href: '/',
        priority: 1
      },
      {
<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
        id: 'explore',
        label: 'Explore',
        href: '/explore',
=======
        id: 'about',
        label: 'About Us',
        href: '/about',
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
        priority: 2
      },
      {
        id: 'services',
        label: 'Services',
        href: '/services',
        priority: 3
      },
      {
<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
        id: 'automation',
        label: 'Automations',
        href: '/automation',
        priority: 4
      },
      {
        id: 'reports',
        label: 'Reports',
        href: '/reports',
        priority: 5
      },
      {
        id: 'newsroom',
        label: 'Updates',
        href: '/newsroom',
        priority: 6
      },
      {
        id: 'search',
        label: 'Search',
        href: '/search',
        priority: 7
      },
      {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/dashboard',
        priority: 8
      },
      {
        id: 'system-status',
        label: 'System Status',
        href: '/system-status',
        priority: 9
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        priority: 10
=======
        id: 'solutions',
        label: 'Solutions',
        href: '/solutions',
        priority: 4
      },
      {
        id: 'pricing',
        label: 'Pricing',
        href: '/pricing',
        priority: 5
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
        priority: 6
      },
      {
        id: 'team',
        label: 'Team',
        href: '/team',
        priority: 7
      },
      {
        id: 'case-studies',
        label: 'Case Studies',
        href: '/case-studies',
        priority: 8
      },
      {
        id: 'news',
        label: 'News',
        href: '/news',
        priority: 9
      },
      {
        id: 'events',
        label: 'Events',
        href: '/events',
        priority: 10
      },
      {
        id: 'webinars',
        label: 'Webinars',
        href: '/webinars',
        priority: 11
      },
      {
        id: 'white-papers',
        label: 'White Papers',
        href: '/white-papers',
        priority: 12
      },
      {
        id: 'research-development',
        label: 'Research & Development',
        href: '/research-development',
        priority: 13
      },
      {
        id: 'enterprise-it',
        label: 'Enterprise IT',
        href: '/enterprise-it',
        priority: 14
      },
      {
        id: 'space-tech',
        label: 'Space Technology',
        href: '/space-tech',
        priority: 15
      },
      {
        id: 'quantum-services',
        label: 'Quantum Services',
        href: '/quantum-services',
        priority: 16
      },
      {
        id: 'micro-saas',
        label: 'Micro SaaS Solutions',
        href: '/micro-saas',
        priority: 17
      },
      {
        id: 'startup-tools',
        label: 'Startup Tools',
        href: '/startup-tools',
        priority: 18
      },
      {
        id: 'docs',
        label: 'Documentation',
        href: '/docs',
        priority: 19
      },
      {
        id: 'privacy',
        label: 'Privacy Policy',
        href: '/privacy',
        priority: 20
      },
      {
        id: 'cookies',
        label: 'Cookie Policy',
        href: '/cookies',
        priority: 21
      },
      {
        id: 'accessibility',
        label: 'Accessibility',
        href: '/accessibility',
        priority: 22
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
      }
    ];

    return this.pages;
  }

<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
  // Auto-generate category-based navigation
=======
  // Generate categories from services
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
  async generateCategories(): Promise<NavigationCategory[]> {
    const categoryMap = new Map<string, NavigationItem[]>();
    
    // Group services by category
    this.services.forEach(service => {
      if (service.category) {
        if (!categoryMap.has(service.category)) {
          categoryMap.set(service.category, []);
        }
        categoryMap.get(service.category)!.push(service);
      }
    });

<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
    // Generate category objects
=======
    // Create category objects
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
    this.categories = Array.from(categoryMap.entries()).map(([name, services]) => ({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
      description: `${name} solutions and services`,
      serviceCount: services.length,
      icon: this.getCategoryIcon(name),
      color: this.getCategoryColor(name)
    }));

    return this.categories;
  }

  private getCategoryIcon(category: string): string {
    const iconMap: Record<string, string> = {
      'AI & Machine Learning': '🤖',
      'IoT & Edge': '🌐',
      'Blockchain': '⛓️',
      'Quantum Computing': '⚛️',
      'Microservices': '🔧'
    };
    return iconMap[category] || '📱';
  }

  private getCategoryColor(category: string): string {
    const colorMap: Record<string, string> = {
      'AI & Machine Learning': 'from-blue-500 to-purple-600',
      'IoT & Edge': 'from-green-500 to-teal-600',
      'Blockchain': 'from-yellow-500 to-orange-600',
      'Quantum Computing': 'from-purple-500 to-pink-600',
      'Microservices': 'from-indigo-500 to-blue-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
=======
      icon: this.getCategoryIcon(name),
      serviceCount: services.length,
      services: services.map(s => s.id),
      priority: this.getCategoryPriority(name)
    }));

    // Add additional categories for pages
    this.categories.push(
      {
        id: 'company',
        name: 'Company',
        slug: 'company',
        icon: '🏢',
        serviceCount: 0,
        services: [],
        priority: 1
      },
      {
        id: 'resources',
        name: 'Resources',
        slug: 'resources',
        icon: '📚',
        serviceCount: 0,
        services: [],
        priority: 2
      },
      {
        id: 'legal',
        name: 'Legal',
        slug: 'legal',
        serviceCount: 0,
        services: [],
        priority: 3
      }
    );

    return this.categories;
  }

  // Get category icon
  private getCategoryIcon(categoryName: string): string {
    const iconMap: { [key: string]: string } = {
      'AI & Machine Learning': '🤖',
      'Cybersecurity': '🔒',
      'Infrastructure': '🏗️',
      'Blockchain': '⛓️',
      'Content & Marketing': '📝',
      'Research & Development': '🔬',
      'Creative AI': '🎨',
      'Legal AI': '⚖️',
      'Healthcare AI': '🏥'
    };
    return iconMap[categoryName] || '🚀';
  }

  // Get category priority
  private getCategoryPriority(categoryName: string): number {
    const priorityMap: { [key: string]: number } = {
      'AI & Machine Learning': 1,
      'Cybersecurity': 2,
      'Infrastructure': 3,
      'Blockchain': 4,
      'Content & Marketing': 5,
      'Research & Development': 6,
      'Creative AI': 7,
      'Legal AI': 8,
      'Healthcare AI': 9
    };
    return priorityMap[categoryName] || 10;
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
  }

  // Generate header navigation
  generateHeaderNavigation(): NavigationItem[] {
    return [
      {
        id: 'home',
        label: '🏠 Home',
        href: '/',
        priority: 1
      },
      {
        id: 'explore',
        label: '🔍 Explore',
        href: '/explore',
        priority: 2
      },
      {
        id: 'services',
        label: '🚀 Services',
        href: '/services',
        priority: 3
      },
      {
        id: 'automation',
        label: '⚡ Automations',
        href: '/automation',
        priority: 4
      },
      {
        id: 'reports',
        label: '📊 Reports',
        href: '/reports',
        priority: 5
      },
      {
        id: 'newsroom',
        label: '📰 Updates',
        href: '/newsroom',
        priority: 6
      },
      {
        id: 'search',
        label: '🔎 Search',
        href: '/search',
        priority: 7
      }
    ];
  }

  // Generate footer navigation
  generateFooterNavigation(): NavigationItem[] {
    return [
      {
        id: 'explore',
        label: 'Explore',
        href: '/explore',
        priority: 1
      },
      {
        id: 'automation',
        label: 'Automations',
        href: '/automation',
        priority: 2
      },
      {
        id: 'reports',
        label: 'Reports',
        href: '/reports',
        priority: 3
      },
      {
        id: 'newsroom',
        label: 'Updates',
        href: '/newsroom',
        priority: 4
      },
      {
        id: 'site-health',
        label: 'Site Health',
        href: '/site-health',
        priority: 5
      },
      {
        id: 'search',
        label: 'Search',
        href: '/search',
        priority: 6
      },
      {
        id: 'sitemap',
        label: 'Sitemap',
        href: '/sitemap.xml',
        priority: 7
      }
    ];
  }

  // Generate sidebar navigation based on context
  generateSidebarNavigation(context: any): NavigationItem[] {
    switch (context.pageType) {
      case 'service':
        return this.generateServiceSidebar(context.currentService);
      case 'category':
        return this.generateCategorySidebar(context.currentCategory);
      case 'dashboard':
        return this.generateDashboardSidebar();
      default:
        return this.generateDefaultSidebar();
    }
  }

  private generateServiceSidebar(serviceId?: string): NavigationItem[] {
    if (!serviceId) return this.generateDefaultSidebar();
    
    const service = this.services.find(s => s.id === serviceId);
    if (!service) return this.generateDefaultSidebar();

    return [
      {
        id: 'service-overview',
        label: 'Overview',
        href: service.href,
        priority: 1
      },
      {
        id: 'service-demo',
        label: 'Demo',
<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
        href: service.href.replace('/demo/', '/demo/'),
=======
        href: service.href.replace('/services/', '/demo/'),
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
        priority: 2
      },
      {
        id: 'service-docs',
        label: 'Documentation',
<<<<<<< HEAD:utils.disabled/navigationGenerator.ts
        href: service.href.replace('/demo/', '/docs/'),
=======
        href: service.href.replace('/services/', '/docs/'),
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/navigationGenerator.ts
        priority: 3
      },
      {
        id: 'service-code',
        label: 'Source Code',
        href: `https://github.com/ai-factory/${service.id}`,
        priority: 4,
        isExternal: true
      }
    ];
  }

  private generateCategorySidebar(categoryId?: string): NavigationItem[] {
    if (!categoryId) return this.generateDefaultSidebar();
    
    const category = this.categories.find(c => c.id === categoryId);
    if (!category) return this.generateDefaultSidebar();

    const categoryServices = this.services.filter(s => s.category === category.name);
    
    return [
      {
        id: 'category-overview',
        label: `${category.name} Overview`,
        href: `/category/${category.slug}`,
        priority: 1
      },
      ...categoryServices.map(service => ({
        id: `service-${service.id}`,
        label: service.label,
        href: service.href,
        status: service.status,
        priority: service.priority || 10
      }))
    ];
  }

  private generateDashboardSidebar(): NavigationItem[] {
    return [
      {
        id: 'dashboard-overview',
        label: 'Dashboard Overview',
        href: '/dashboard',
        priority: 1
      },
      {
        id: 'my-services',
        label: 'My Services',
        href: '/dashboard/services',
        priority: 2
      },
      {
        id: 'analytics',
        label: 'Analytics',
        href: '/dashboard/analytics',
        priority: 3
      },
      {
        id: 'settings',
        label: 'Settings',
        href: '/dashboard/settings',
        priority: 4
      }
    ];
  }

  private generateDefaultSidebar(): NavigationItem[] {
    return [
      {
        id: 'quick-start',
        label: 'Quick Start',
        href: '/#services',
        priority: 1
      },
      {
        id: 'popular-services',
        label: 'Popular Services',
        href: '/services',
        priority: 2
      },
      {
        id: 'categories',
        label: 'Browse Categories',
        href: '/explore',
        priority: 3
      }
    ];
  }

  // Auto-update navigation when new services are added
  async updateNavigation(): Promise<void> {
    await this.discoverServices();
    await this.generateCategories();
  }

  // Get complete navigation configuration
  async getNavigationConfig(): Promise<NavigationConfig> {
    return {
      header: this.generateHeaderNavigation(),
      footer: this.generateFooterNavigation(),
      sidebar: this.generateSidebarNavigation({ pageType: 'home' }),
      services: this.services,
      categories: this.categories,
      pages: this.pages,
      importantLinks: [
        {
          id: 'github',
          label: 'GitHub',
          href: 'https://github.com/Zion-Holdings/zion.app',
          isExternal: true,
          priority: 1
        },
        {
          id: 'website',
          label: 'Website',
          href: 'https://ziontechgroup.com',
          isExternal: true,
          priority: 2
        }
      ]
    };
  }
}