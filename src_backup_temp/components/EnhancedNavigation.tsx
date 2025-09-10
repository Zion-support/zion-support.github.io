import { Link, useLocation  } from 'react-router-dom';export default function Page(props: any) {
,
  {
    label: 'AI & Machine Learning',
    href: '/ai - services',
    icon: <Brain className="w-4 h-4"  />,
    children: [
      { label: 'AI Workflow Orchestrator', href: '/services / ai - workflow-orchestrator' },
      { label: 'AI Data Governance Platform', href: '/services / ai - data - governance - platform' },
      { label: 'AI Customer Experience Analytics', href: '/services / ai - customer - experience - analytics' },
      { label: 'AI Financial Risk Management', href: '/services / ai - financial - risk - management' },
      { label: 'AI Code Review Security Scanner', href: '/services / ai - code - review-security - scanner' },
      { label: 'AI Quantum Hybrid Platform', href: '/services / ai - quantum - hybrid - platform' },
      { label: 'AI Autonomous Supply Chain', href: '/services / ai - autonomous - supply - chain' },
      { label: 'AI Cybersecurity Threat Intelligence', href: '/services / ai - cybersecurity - threat - intelligence' },
      { label: 'AI Business Intelligence Analytics', href: '/services / ai - business - intelligence - analytics' },
      { label: 'AI Compliance Assistant', href: '/services / ai - compliance - assistant' },
      { label: 'AI Sales Copilot', href: '/services / ai - sales - copilot' },
      { label: 'AI - Powered SEO', href: '/services / ai - powered - seo' },
      { label: 'Interview Assessment AI', href: '/services / interview-assessment - ai' },
      { label: 'AI Content Marketing Suite', href: '/services / ai - content - marketing - suite' },
      { label: 'AI Customer Support Automation', href: '/services / ai - customer - support - automation' },
      { label: 'AI Project Management', href: '/services / ai - project - management' },
      { label: 'AI Financial Analytics', href: '/services / ai - financial - analytics' },
      { label: 'AI Marketing Automation', href: '/services / ai - marketing - automation' },
      { label: 'AI Legal Document Automation', href: '/services / ai - legal - document - automation' },
      { label: 'AI Healthcare Analytics', href: '/services / ai - healthcare - analytics' },
      { label: 'AI Financial Trading', href: '/services / ai - financial - trading' },
      { label: 'AI Content Creation Suite', href: '/services / ai - content - creation - suite' }
    ]
  },
  {
    label: 'Cloud & Infrastructure',
    href: '/it - services',
    icon: <Cloud className="w-4 h-4"  />,
    children: [{ label: 'Cloud DevOps', href: '/services / cloud - devops' },
      { label: 'IT Infrastructure', href: '/services / it - infrastructure' },
      { label: 'FinOps Advisor', href: '/services / finops - advisor' },
      { label: 'Cloud FinOps Optimizer', href: '/services / cloud - finops - optimizer' },
      { label: 'IT Consulting', href: '/it - consulting' },
      { label: 'Enterprise Solutions', href: '/solutions / enterprise' },
      { label: 'Healthcare Solutions', href: '/solutions / healthcare' },
      { label: 'Digital Twin', href: '/services / digital - twin' },
      { label: 'Data Analytics', href: '/services / data - analytics' },
      { label: 'Digital Transformation', href: '/services / digital - transformation' }
    ]
  },
  {
    label: 'Cybersecurity & Privacy',
    href: '/services / cybersecurity',
    icon: <Shield className="w-4 h-4"  />,
    children: [{ label: 'AI Cybersecurity Platform', href: '/services / ai - cybersecurity - platform' },
      { label: 'Security Headers & CSP', href: '/services / security - headers - csp' },
      { label: 'DSR Privacy Portal', href: '/services / dsr - portal' },
      { label: 'Zero Trust Network Access', href: '/services / zero - trust - network - access' },
      { label: 'AI Compliance Assistant', href: '/services / ai - compliance - assistant' }
    ]
  },
  {
    label: 'Emerging Technologies',
    href: '/emerging - tech',
    icon: <Atom className="w-4 h-4"  />,
    children: [{ label: 'Quantum Computing', href: '/services / quantum - computing' },
      { label: 'IoT Edge Computing', href: '/services / iot - edge - computing' },
      { label: 'AI Quantum Hybrid Platform', href: '/services / ai - quantum - hybrid - platform' },
      { label: 'Space Technology', href: '/space - tech' },
      { label: 'Quantum Machine Learning', href: '/services / quantum - machine - learning' },
      { label: 'AI Predictive Maintenance', href: '/services / ai - predictive - maintenance' },
      { label: 'Sustainable Technology', href: '/services / sustainable - technology' }
    ]
  },
  {
    label: 'Micro SaaS Solutions',
    href: '/micro - saas',
    icon: <ShoppingCart className="w-4 h-4"  />,
    children: [{ label: 'Micro CRM', href: '/services / micro - crm' },
      { label: 'Helpdesk Platform', href: '/services / helpdesk - platform' },
      { label: 'Website Analytics', href: '/services / website - analytics' },
      { label: 'IT Helpdesk', href: '/services / it - helpdesk' },
      { label: 'Affiliate Tracking', href: '/services / affiliate - tracking' },
      { label: 'Mobile Survey', href: '/services / mobile - survey' },
      { label: 'Podcast Transcription', href: '/services / podcast - transcription' },
      { label: 'Email Sequencer', href: '/services / email - sequencer' },
      { label: 'Returns Management', href: '/services / returns - management' },
      { label: 'LLM Content Studio', href: '/services / llm - content - studio' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Building className="w-4 h-4"  />,
    children: [{ label: 'Enterprise Solutions', href: '/solutions / enterprise' },
      { label: 'Healthcare Solutions', href: '/solutions / healthcare' },
      { label: 'Manufacturing Solutions', href: '/manufacturing - solutions' },
      { label: 'Financial Solutions', href: '/financial - solutions' },
      { label: '5G Enterprise Solutions', href: '/5g - enterprise - solutions' },
      { label: 'Industry Solutions', href: '/industry - solutions' }
    ]
  },
  {
    label: 'Comp',
    href: '/about',
    icon: <Users className="w-4 h-4"  />,
    children: [
    label: 'AI & Machine Learning',
    href: '/ai-services',
    icon: <Brain className="w-4 h-4"   />,
    children: ['
      { label: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
      { label: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform' },
      { label: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics' },
      { label: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management' },
      { label: 'AI Code Review Security Scanner', href: '/services/ai-code-review-security-scanner' },
      { label: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform' },
      { label: 'AI Autonomous Supply Chain', href: '/services/ai-autonomous-supply-chain' },
      { label: 'AI Cybersecurity Threat Intelligence', href: '/services/ai-cybersecurity-threat-intelligence' },
      { label: 'AI Business Intelligence Analytics', href: '/services/ai-business-intelligence-analytics' },
      { label: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
      { label: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
      { label: 'AI-Powered SEO', href: '/services/ai-powered-seo' },
      { label: 'Interview Assessment AI', href: '/services/interview-assessment-ai' },
      { label: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite' },
      { label: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation' },
      { label: 'AI Project Management', href: '/services/ai-project-management' },
      { label: 'AI Financial Analytics', href: '/services/ai-financial-analytics' },
      { label: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
      { label: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation' },
      { label: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
      { label: 'AI Financial Trading', href: '/services/ai-financial-trading' },
      { label: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite' }
    ]
  },
  {
    label: 'Cloud & Infrastructure',
    href: '/it-services',"
    icon: <Cloud className="w-4 h-4"   />,
    children: ['
      { label: 'Cloud DevOps', href: '/services/cloud-devops' },
      { label: 'IT Infrastructure', href: '/services/it-infrastructure' },
      { label: 'FinOps Advisor', href: '/services/finops-advisor' },
      { label: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
      { label: 'IT Consulting', href: '/it-consulting' },
      { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
      { label: 'Healthcare Solutions', href: '/solutions/healthcare' },
      { label: 'Digital Twin', href: '/services/digital-twin' },
      { label: 'Data Analytics', href: '/services/data-analytics' },
      { label: 'Digital Transformation', href: '/services/digital-transformation' }
    ]
  },
  {
    label: 'Cybersecurity & Privacy',
    href: '/services/cybersecurity',"
    icon: <Shield className="w-4 h-4"   />,
    children: ['
      { label: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
      { label: 'Security Headers & CSP', href: '/services/security-headers-csp' },
      { label: 'DSR Privacy Portal', href: '/services/dsr-portal' },
      { label: 'Zero Trust Network Access', href: '/services/zero-trust-network-access' },
      { label: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' }
    ]
  },
  {
    label: 'Emerging Technologies',
    href: '/emerging-tech',"
    icon: <Atom className="w-4 h-4"   />,
    children: ['
      { label: 'Quantum Computing', href: '/services/quantum-computing' },
      { label: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
      { label: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform' },
      { label: 'Space Technology', href: '/space-tech' },
      { label: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' },
      { label: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance' },
      { label: 'Sustainable Technology', href: '/services/sustainable-technology' }
    ]
  },
  {
    label: 'Micro SaaS Solutions',
    href: '/micro-saas',"
    icon: <ShoppingCart className="w-4 h-4"   />,
    children: ['
      { label: 'Micro CRM', href: '/services/micro-crm' },
      { label: 'Helpdesk Platform', href: '/services/helpdesk-platform' },
      { label: 'Website Analytics', href: '/services/website-analytics' },
      { label: 'IT Helpdesk', href: '/services/it-helpdesk' },
      { label: 'Affiliate Tracking', href: '/services/affiliate-tracking' },
      { label: 'Mobile Survey', href: '/services/mobile-survey' },
      { label: 'Podcast Transcription', href: '/services/podcast-transcription' },
      { label: 'Email Sequencer', href: '/services/email-sequencer' },
      { label: 'Returns Management', href: '/services/returns-management' },
      { label: 'LLM Content Studio', href: '/services/llm-content-studio' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',"
    icon: <Building className="w-4 h-4"   />,
    children: ['
      { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
      { label: 'Healthcare Solutions', href: '/solutions/healthcare' },
      { label: 'Manufacturing Solutions', href: '/manufacturing-solutions' },
      { label: 'Financial Solutions', href: '/financial-solutions' },
      { label: '5G Enterprise Solutions', href: '/5g-enterprise-solutions' },
      { label: 'Industry Solutions', href: '/industry-solutions' }
    ]
  },
  {
    label: 'Comp',
    href: '/about',"
    icon: <Users className="w-4 h-4"   />,
    children: ['
      { label: 'About Us', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partners' },
      { label: 'News', href: '/news' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' }    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    icon: <BarChart3 className="w-4 h-4"  />,
    children: [
    label: 'Resources',
    href: '/resources',"
    icon: <BarChart3 className="w-4 h-4"  />,
    children: ['
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Help Center', href: '/help' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'API Documentation', href: '/api-docs' },
      { label: 'Developer Portal', href: '/developer' },
      { label: 'Training', href: '/training' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'White Papers', href: '/white-papers' },
      { label: 'Sitemap', href: '/sitemap' }
    ]
  },
  { label: 'Contact', href: '/contact' }
];
export const EnhancedNavigation: Reac t.FC<EnhancedNavigationProps> = ({';
';';
className: '',;
export default function Page(props: any) {;
,;
  {;
    label: 'AI & Machine Learning',;
    href: '/ai - services',;
    icon: <Brain className="w-4 h-4"  />,;
    children: [;
      { label: 'AI Workflow Orchestrator', href: '/services / ai - workflow-orchestrator' },;
      { label: 'AI Data Governance Platform', href: '/services / ai - data - governance - platform' },;
      { label: 'AI Customer Experience Analytics', href: '/services / ai - customer - experience - analytics' },;
      { label: 'AI Financial Risk Management', href: '/services / ai - financial - risk - management' },;
      { label: 'AI Code Review Security Scanner', href: '/services / ai - code - review-security - scanner' },;
      { label: 'AI Quantum Hybrid Platform', href: '/services / ai - quantum - hybrid - platform' },;
      { label: 'AI Autonomous Supply Chain', href: '/services / ai - autonomous - supply - chain' },;
      { label: 'AI Cybersecurity Threat Intelligence', href: '/services / ai - cybersecurity - threat - intelligence' },;
      { label: 'AI Business Intelligence Analytics', href: '/services / ai - business - intelligence - analytics' },;
      { label: 'AI Compliance Assistant', href: '/services / ai - compliance - assistant' },;
      { label: 'AI Sales Copilot', href: '/services / ai - sales - copilot' },;
      { label: 'AI - Powered SEO', href: '/services / ai - powered - seo' },;
      { label: 'Interview Assessment AI', href: '/services / interview-assessment - ai' },;
      { label: 'AI Content Marketing Suite', href: '/services / ai - content - marketing - suite' },;
      { label: 'AI Customer Support Automation', href: '/services / ai - customer - support - automation' },;
      { label: 'AI Project Management', href: '/services / ai - project - management' },;
      { label: 'AI Financial Analytics', href: '/services / ai - financial - analytics' },;
      { label: 'AI Marketing Automation', href: '/services / ai - marketing - automation' },;
      { label: 'AI Legal Document Automation', href: '/services / ai - legal - document - automation' },;
      { label: 'AI Healthcare Analytics', href: '/services / ai - healthcare - analytics' },;
      { label: 'AI Financial Trading', href: '/services / ai - financial - trading' },;
      { label: 'AI Content Creation Suite', href: '/services / ai - content - creation - suite' }
    ];
  },;
  {;
    label: 'Cloud & Infrastructure',;
    href: '/it - services',;
    icon: <Cloud className="w-4 h-4"  />,;
    children: [{ label: 'Cloud DevOps', href: '/services / cloud - devops' },;
      { label: 'IT Infrastructure', href: '/services / it - infrastructure' },;
      { label: 'FinOps Advisor', href: '/services / finops - advisor' },;
      { label: 'Cloud FinOps Optimizer', href: '/services / cloud - finops - optimizer' },;
      { label: 'IT Consulting', href: '/it - consulting' },;
      { label: 'Enterprise Solutions', href: '/solutions / enterprise' },;
      { label: 'Healthcare Solutions', href: '/solutions / healthcare' },;
      { label: 'Digital Twin', href: '/services / digital - twin' },;
      { label: 'Data Analytics', href: '/services / data - analytics' },;
      { label: 'Digital Transformation', href: '/services / digital - transformation' }
    ];
  },;
  {;
    label: 'Cybersecurity & Privacy',;
    href: '/services / cybersecurity',;
    icon: <Shield className="w-4 h-4"  />,;
    children: [{ label: 'AI Cybersecurity Platform', href: '/services / ai - cybersecurity - platform' },;
      { label: 'Security Headers & CSP', href: '/services / security - headers - csp' },;
      { label: 'DSR Privacy Portal', href: '/services / dsr - portal' },;
      { label: 'Zero Trust Network Access', href: '/services / zero - trust - network - access' },;
      { label: 'AI Compliance Assistant', href: '/services / ai - compliance - assistant' }
    ];
  },;
  {;
    label: 'Emerging Technologies',;
    href: '/emerging - tech',;
    icon: <Atom className="w-4 h-4"  />,;
    children: [{ label: 'Quantum Computing', href: '/services / quantum - computing' },;
      { label: 'IoT Edge Computing', href: '/services / iot - edge - computing' },;
      { label: 'AI Quantum Hybrid Platform', href: '/services / ai - quantum - hybrid - platform' },;
      { label: 'Space Technology', href: '/space - tech' },;
      { label: 'Quantum Machine Learning', href: '/services / quantum - machine - learning' },;
      { label: 'AI Predictive Maintenance', href: '/services / ai - predictive - maintenance' },;
      { label: 'Sustainable Technology', href: '/services / sustainable - technology' }
    ];
  },;
  {;
    label: 'Micro SaaS Solutions',;
    href: '/micro - saas',;
    icon: <ShoppingCart className="w-4 h-4"  />,;
    children: [{ label: 'Micro CRM', href: '/services / micro - crm' },;
      { label: 'Helpdesk Platform', href: '/services / helpdesk - platform' },;
      { label: 'Website Analytics', href: '/services / website - analytics' },;
      { label: 'IT Helpdesk', href: '/services / it - helpdesk' },;
      { label: 'Affiliate Tracking', href: '/services / affiliate - tracking' },;
      { label: 'Mobile Survey', href: '/services / mobile - survey' },;
      { label: 'Podcast Transcription', href: '/services / podcast - transcription' },;
      { label: 'Email Sequencer', href: '/services / email - sequencer' },;
      { label: 'Returns Management', href: '/services / returns - management' },;
      { label: 'LLM Content Studio', href: '/services / llm - content - studio' }
    ];
  },;
  {;
    label: 'Solutions',;
    href: '/solutions',;
    icon: <Building className="w-4 h-4"  />,;
    children: [{ label: 'Enterprise Solutions', href: '/solutions / enterprise' },;
      { label: 'Healthcare Solutions', href: '/solutions / healthcare' },;
      { label: 'Manufacturing Solutions', href: '/manufacturing - solutions' },;
      { label: 'Financial Solutions', href: '/financial - solutions' },;
      { label: '5G Enterprise Solutions', href: '/5g - enterprise - solutions' },;
      { label: 'Industry Solutions', href: '/industry - solutions' }
    ];
  },;
  {;
    label: 'Comp',;
    href: '/about',;
    icon: <Users className="w-4 h-4"  />,;
    children: [;
    label: 'AI & Machine Learning',;
    href: '/ai-services',;
    icon: <Brain className="w-4 h-4"   />,;
    children: [';
      { label: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },;
      { label: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform' },;
      { label: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics' },;
      { label: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management' },;
      { label: 'AI Code Review Security Scanner', href: '/services/ai-code-review-security-scanner' },;
      { label: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform' },;
      { label: 'AI Autonomous Supply Chain', href: '/services/ai-autonomous-supply-chain' },;
      { label: 'AI Cybersecurity Threat Intelligence', href: '/services/ai-cybersecurity-threat-intelligence' },;
      { label: 'AI Business Intelligence Analytics', href: '/services/ai-business-intelligence-analytics' },;
      { label: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },;
      { label: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },;
      { label: 'AI-Powered SEO', href: '/services/ai-powered-seo' },;
      { label: 'Interview Assessment AI', href: '/services/interview-assessment-ai' },;
      { label: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite' },;
      { label: 'AI Customer Support Automation', href: '/services/ai-customer-support-automation' },;
      { label: 'AI Project Management', href: '/services/ai-project-management' },;
      { label: 'AI Financial Analytics', href: '/services/ai-financial-analytics' },;
      { label: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },;
      { label: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation' },;
      { label: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },;
      { label: 'AI Financial Trading', href: '/services/ai-financial-trading' },;
      { label: 'AI Content Creation Suite', href: '/services/ai-content-creation-suite' }
    ];
  },;
  {;
    label: 'Cloud & Infrastructure',;
    href: '/it-services',";
    icon: <Cloud className="w-4 h-4"   />,;
    children: [';
      { label: 'Cloud DevOps', href: '/services/cloud-devops' },;
      { label: 'IT Infrastructure', href: '/services/it-infrastructure' },;
      { label: 'FinOps Advisor', href: '/services/finops-advisor' },;
      { label: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },;
      { label: 'IT Consulting', href: '/it-consulting' },;
      { label: 'Enterprise Solutions', href: '/solutions/enterprise' },;
      { label: 'Healthcare Solutions', href: '/solutions/healthcare' },;
      { label: 'Digital Twin', href: '/services/digital-twin' },;
      { label: 'Data Analytics', href: '/services/data-analytics' },;
      { label: 'Digital Transformation', href: '/services/digital-transformation' }
    ];
  },;
  {;
    label: 'Cybersecurity & Privacy',;
    href: '/services/cybersecurity',";
    icon: <Shield className="w-4 h-4"   />,;
    children: [';
      { label: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },;
      { label: 'Security Headers & CSP', href: '/services/security-headers-csp' },;
      { label: 'DSR Privacy Portal', href: '/services/dsr-portal' },;
      { label: 'Zero Trust Network Access', href: '/services/zero-trust-network-access' },;
      { label: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' }
    ];
  },;
  {;
    label: 'Emerging Technologies',;
    href: '/emerging-tech',";
    icon: <Atom className="w-4 h-4"   />,;
    children: [';
      { label: 'Quantum Computing', href: '/services/quantum-computing' },;
      { label: 'IoT Edge Computing', href: '/services/iot-edge-computing' },;
      { label: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform' },;
      { label: 'Space Technology', href: '/space-tech' },;
      { label: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' },;
      { label: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance' },;
      { label: 'Sustainable Technology', href: '/services/sustainable-technology' }
    ];
  },;
  {;
    label: 'Micro SaaS Solutions',;
    href: '/micro-saas',";
    icon: <ShoppingCart className="w-4 h-4"   />,;
    children: [';
      { label: 'Micro CRM', href: '/services/micro-crm' },;
      { label: 'Helpdesk Platform', href: '/services/helpdesk-platform' },;
      { label: 'Website Analytics', href: '/services/website-analytics' },;
      { label: 'IT Helpdesk', href: '/services/it-helpdesk' },;
      { label: 'Affiliate Tracking', href: '/services/affiliate-tracking' },;
      { label: 'Mobile Survey', href: '/services/mobile-survey' },;
      { label: 'Podcast Transcription', href: '/services/podcast-transcription' },;
      { label: 'Email Sequencer', href: '/services/email-sequencer' },;
      { label: 'Returns Management', href: '/services/returns-management' },;
      { label: 'LLM Content Studio', href: '/services/llm-content-studio' }
    ];
  },;
  {;
    label: 'Solutions',;
    href: '/solutions',";
    icon: <Building className="w-4 h-4"   />,;
    children: [';
      { label: 'Enterprise Solutions', href: '/solutions/enterprise' },;
      { label: 'Healthcare Solutions', href: '/solutions/healthcare' },;
      { label: 'Manufacturing Solutions', href: '/manufacturing-solutions' },;
      { label: 'Financial Solutions', href: '/financial-solutions' },;
      { label: '5G Enterprise Solutions', href: '/5g-enterprise-solutions' },;
      { label: 'Industry Solutions', href: '/industry-solutions' }
    ];
  },;
  {;
    label: 'Comp',;
    href: '/about',";
    icon: <Users className="w-4 h-4"   />,;
    children: [';
      { label: 'About Us', href: '/about' },;
      { label: 'Team', href: '/team' },;
      { label: 'Leadership', href: '/leadership' },;
      { label: 'Careers', href: '/careers' },;
      { label: 'Partners', href: '/partners' },;
      { label: 'News', href: '/news' },;
      { label: 'Case Studies', href: '/case-studies' },;
      { label: 'Blog', href: '/blog' }    ];
  },;
  {;
    label: 'Resources',;
    href: '/resources',;
    icon: <BarChart3 className="w-4 h-4"  />,;
    children: [;
    label: 'Resources',;
    href: '/resources',";
    icon: <BarChart3 className="w-4 h-4"  />,;
    children: [';
      { label: 'Pricing', href: '/pricing' },;
      { label: 'FAQ', href: '/faq' },;
      { label: 'Help Center', href: '/help' },;
      { label: 'Documentation', href: '/documentation' },;
      { label: 'API Documentation', href: '/api-docs' },;
      { label: 'Developer Portal', href: '/developer' },;
      { label: 'Training', href: '/training' },;
      { label: 'Webinars', href: '/webinars' },;
      { label: 'White Papers', href: '/white-papers' },;
      { label: 'Sitemap', href: '/sitemap' }
    ];
  },;
  { label: 'Contact', href: '/contact' }
];
;
export const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({;
className:  '',;
  useEffect(() => {
// TODO: Add dependencies if needed
  return () => {
    // Cleanup function
  };
}, []);, []);';
root.classList.add(newTheme)}';';
    '';';
}, []);, []);
root.classList.add(newTheme)}
    ';}, []);, []);
root.classList.add(newTheme)}
    '
    localStorage.setItem('zion-theme', newTheme)}, [onThemeChange])}};
;
  return ()    <nav className = {`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${  const contactInfo = {;
    "phone": "+1 302 464 0950",;
    "email": "kleber@ziontechgroup.com",;
    "website": ""https": "//ziontechgroup.com"",;
    "address": "364 E Main St STE 1008 Middletown DE 19709";
  };
';
  return (<nav className = {`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${isScrolled';';
        ? 'bg-white / 95 dark: b g-slate - 900 / 95 backdrop - blur - md shadow-lg'';';
        : 'bg-transparent'
    } ${className}`}>
      <div  className="max - w-7xl mx - auto px-4 sm: p x-6 lg: p x-8">
        <div  className="flex justify - between items - center h-16">;
  return (<nav className = {`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${isScrolled;
        ? 'bg-white / 95 "dark": "b g-slate - 900 / 95 backdrop - blur - md shadow-lg';
        : 'bg-transparent';
    "} ${className}`}>;
      <div  className="max - w-7xl mx - auto px-4 "sm": "p x-6 "lg": p x-8">;
        <div  className="flex justify - between items - center h-16">;
          {/* Logo */}                {item.children && (<AnimatePresence>
                    {activeDropdown === item.label && (<motion.div
                        initial = {
  { opacity: 0,
  y: -10
}}
                        animate = {
  { opacity: 1,
  y: 0
}}
                        exit = {
  { opacity: 0,
  y: -10
}}
                        transition={{ duration: 0.2 }}"
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl py-2 z-50"
                      >"
                        <div className="px-4 py-2 border-b border-slate-700/50">"
                          <h3 className="text-sm font-semibold text-cyan-400 flex items-center space-x-2">
                            {item.icon}
                            <span>{item.label}</span>
                        </div>"
                        <div className="max-h-96 overflow-y-auto">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}";
                              className="flex items-center space-x-3 px-4 py-3 text-slate-300 "hover": "tex t-white "hover": b g-slate-700/50 transition-colors duration-200 group";
                            >";
                              <div className="w-2 h-2 bg-slate-500 rounded-full group-"hover": b g-cyan-400 transition-colors duration-200"></div>";
                              <span className="text-sm font-medium">{child.label"}</span>;
                            </Link>;          <div  className="hidden lg: flex items - center space - x-4">;
            {/* Theme Toggle */}
            <div  className="flex items - center space - x-2 bg-gray - 100 dark: b g-slate - 800 rounded-lg p -1">;
              <button     onClick={ () => handleThemeChange('light') }
          <div  className="hidden "lg": "flex items - center space - x-4">;
            {/* Theme Toggle */"}
            <div  className="flex items - center space - x-2 bg-gray - 100 "dark": "b g-slate - 800 rounded-lg p -1">;
              <button     onClick={ () => handleThemeChange('light') "}
                className={`p - 2 rounded-md transition - colors ${theme === 'light';
                    ? 'bg-white "dark": "b g-slate - 700 text-blue - 600 shadow-sm';
                    : 'text-gray - 500 "dark": tex t-gray - 400 "hover": tex t-gray - 700 "dark": hove "r":text-gray - 300';
                "}`}
              >;
                <Sun className="w-4 h-4"  />;
              </button>;
              <button     onClick={ () => handleThemeChange('dark') }
                className={`p - 2 rounded-md transition - colors ${theme === 'dark';
                    ? 'bg-white "dark": "b g-slate - 700 text-blue - 600 shadow-sm';
                    : 'text-gray - 500 "dark": tex t-gray - 400 "hover": tex t-gray - 700 "dark": hove "r":text-gray - 300';
                "}`}
              >;
                <Moon className="w-4 h-4"  />;
              </button>;
              <button     onClick={ () => handleThemeChange('system') }
                className={`p - 2 rounded-md transition - colors ${theme === 'system';
                    ? 'bg-white dark: b g-slate - 700 text-blue - 600 shadow-sm';
                    : 'text-gray - 500 dark: tex t-gray - 400 hover: tex t-gray - 700 dark: hove r:text-gray - 300'                }`}              <AnimatePresence>;
                {isOpen && (;
                  <motion.div;
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}";
                    className="lg: hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50";
              <AnimatePresence>;
                {isOpen && (;
                  <motion.div;
                    initial={{ "opacity": "0", "height": "0 "}}
                    animate={{ "opacity": "1", "height": 'auto' }}
                    exit={{ "opacity": "0", "height": "0 "}}
                    transition={{ "duration": "0.3 "}}";
                    className=""lg": "hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50";
                  >";
                    <div className="px-4 py-6 space-y-4">;
                      {navigationItems.map((item) => (;
                        <div key={item.label"}>;
                          {item.children ? (;
                            <div>;
                              <button;
                                onClick={() => toggleDropdown(item.label)}";
                                className="flex items-center justify-between w-full text-left text-slate-300 "hover": "tex t-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 "focus": outlin e-none "focus": rin g-2 "focus": rin g-cyan-400 "focus": rin g-offset-2 "focus": rin g-offset-slate-900";
                                aria-expanded={activeDropdown === item.label"}";
                                aria-haspopup="true";
                              >";
                                <div className="flex items-center space-x-2">;
                                  {item.icon}
                                  <span>{item.label}</span>';
                                </div>';';
                                <ChevronDown className={`w-5 h-5 transition - transform duration - 200 ${activeDropdown === item.label ? 'rotate - 180' : ''
                                }`}  />
                              </button>
                              {activeDropdown === item.label && (<motion.div                                  <span>{item.label}</span>;
                                </div>;
                                <ChevronDown className={`w-5 h-5 transition - transform duration - 200 ${activeDropdown === item.label ? 'rotate - 180' : '';
                                }`}  />;
                              </button>;
                              {activeDropdown === item.label && (<motion.div;
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}";          </motion.div>) "}
      </AnimatePresence>;
    </nav>;
  )};'"`;
;,"});})";
;
</motion>;
</ChevronDown>;
</motion>;
</motion>;
</nav>;
</any>;
</any>;
</any>;
</any>;
</EnhancedNavigationProps>;
