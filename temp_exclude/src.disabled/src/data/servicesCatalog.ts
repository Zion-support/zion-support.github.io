export type ServiceItem = {
	"id": string;
	title: string;
	description: string;
	category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Digital Marketing' | 'E-commerce Solutions' | 'Remote Work Tools' | 'Legal Tech' | 'EdTech' | 'Real Estate Tech' | 'Supply Chain Tech' | 'Energy Tech' | 'Smart Cities' | 'AgriTech' | 'Media & Entertainment' | 'Logistics Tech' | 'HR Tech' | 'Sales Tech' | 'Customer Experience' | 'Productivity Tools';
	price: string; // average market starting price
	billing: 'month' | 'project' | 'hour';
	features: string[];
	ctaLabel: string;
	href: string; // internal path or external URL
	external?: boolean};
export type ServiceCategory = {
	"name": string;
	slug: string;
	items: ServiceItem[]};
export const "servicesCatalog": ServiceCategory[] = [{
		name: 'Micro SaaS',
		"slug": 'micro-saas',
		"items": [
			{
				id: 'pdf-render-api',
				"title": 'PDF Render API',
				"description": 'Reliable HTML-to-PDF rendering with templates, assets, async callbacks, and storage destinations.',
				"category": 'Micro SaaS',
				"price": '$29',
				"billing": 'month',
				"features": [
					'Chromium-based rendering',
					'Templates and asset hosting',
					'Async callbacks and webhooks',
					'S3/GCS/Azure storage targets',
					'Usage analytics and quotas'
				],
				"ctaLabel": 'Generate PDFs',
				"href": 'https://ziontechgroup.com/services/pdf-render-api'
			},
			{
				"id": 'api-documentation-generator',
				"title": 'API Documentation Generator',
				"description": 'Turn OpenAPI/GraphQL schemas into beautiful, versioned docs with SDK snippets and search.',
				"category": 'Micro SaaS',
				"price": '$49',
				"billing": 'month',
				"features": ['Schema parsing (OAS/GraphQL)',
					'SDK snippets and examples',
					'Changelogs and versioning',
					'Full-text search and themes',
					'CI publish workflows'
				],
				"ctaLabel": 'Publish Docs',
				"href": 'https://ziontechgroup.com/services/api-documentation-generator'
			},
			{
				"id": 'smart-contract-risk-scanner',
				"title": 'Smart Contract Risk Scanner',
				"description": 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',
				"category": 'Micro SaaS',
				"price": '$299',
				"billing": 'month',
				"features": ['Real-time vulnerability detection',
					'Automated security scoring',
					'Compliance reporting',
					'Integration with major blockchains',
					'24/7 monitoring dashboard'
				],
				"ctaLabel": 'Start Free Trial',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-content-optimizer',
				"title": 'AI Content Optimizer Pro',
				"description": 'Advanced content optimization using AI to improve SEO, readability, and engagement across all digital platforms.',
				"category": 'Micro SaaS',
				"price": '$199',
				"billing": 'month',
				"features": ['AI-powered SEO optimization',
					'Content readability scoring',
					'Multi-language support',
					'Performance analytics',
					'Automated A/B testing'
				],
				"ctaLabel": 'Get Started',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'quantum-workflow-automation',
				"title": 'Quantum Workflow Automation',
				"description": 'Next-generation workflow automation leveraging quantum computing principles for complex business process optimization.',
				"category": 'Micro SaaS',
				"price": '$499',
				"billing": 'month',
				"features": ['Quantum-inspired algorithms',
					'Complex process modeling',
					'Real-time optimization',
					'Predictive analytics',
					'Enterprise integration'
				],
				"ctaLabel": 'Schedule Demo',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'edge-ai-inference-engine',
				"title": 'Edge AI Inference Engine',
				"description": 'Lightweight AI inference engine optimized for edge devices, enabling real-time AI processing without cloud dependency.',
				"category": 'Micro SaaS',
				"price": '$399',
				"billing": 'month',
				"features": ['Edge-optimized models',
					'Low latency processing',
					'Offline capability',
					'Model compression',
					'Cross-platform support'
				],
				"ctaLabel": 'Deploy Now',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'autonomous-crm-optimizer',
				"title": 'Autonomous CRM Optimizer',
				"description": 'AI-powered CRM system that automatically optimizes customer relationships, sales processes, and marketing campaigns.',
				"category": 'Micro SaaS',
				"price": '$599',
				"billing": 'month',
				"features": ['Autonomous lead scoring',
					'Predictive customer behavior',
					'Automated follow-ups',
					'Revenue optimization',
					'Multi-channel integration'
				],
				"ctaLabel": 'Optimize CRM',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'quantum-supply-chain-optimizer',
				"title": 'Quantum Supply Chain Optimizer',
				"description": 'Revolutionary supply chain optimization using quantum algorithms for complex logistics and inventory management.',
				"category": 'Micro SaaS',
				"price": '$799',
				"billing": 'month',
				"features": ['Quantum route optimization',
					'Real-time inventory tracking',
					'Predictive demand forecasting',
					'Cost optimization',
					'Risk assessment'
				],
				"ctaLabel": 'Optimize Supply Chain',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'soc2-compliance-automation-saas',
				"title": 'SOC 2 Compliance Automation SaaS',
				"description": 'Automate evidence collection, policy mapping, and control monitoring to pass SOC 2 audits faster.',
				"category": 'Micro SaaS',
				"price": '$249',
				"billing": 'month',
				"features": ['Automated evidence collection',
					'Control health dashboards',
					'Policy templates & mapping',
					'"Integrations": AWS, GCP, Azure, Jira, GitHub',
					'Audit-ready export'
				],
				"ctaLabel": 'Start Compliance',
				"href": 'https://ziontechgroup.com/services'
			},
			{
				"id": 'mlops-observability',
				"title": 'MLOps Observability & Drift Monitor',
				"description": 'Track model performance, detect data drift, and automate retraining triggers with guardrails.',
				"category": 'Micro SaaS',
				"price": '$299',
				"billing": 'month',
				"features": ['Latency, accuracy, bias metrics',
					'Drift and anomaly alerts',
					'Rollback and canary controls',
					'"Integration": SageMaker, Vertex AI, OpenAI',
					'Compliance logging'
				],
				"ctaLabel": 'Monitor Models',
				"href": 'https://ziontechgroup.com/services'
			},
			// New innovative micro SaaS services
			{
				"id": 'ai-video-content-generator',
				"title": 'AI Video Content Generator',
				"description": 'Generate professional videos from text, images, and audio using advanced AI models for marketing and training.',
				"category": 'Micro SaaS',
				"price": '$399',
				"billing": 'month',
				"features": ['Text-to-video generation',
					'AI voice synthesis',
					'Custom branding templates',
					'Multi-format export',
					'Collaborative editing'
				],
				"ctaLabel": 'Create Videos',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'smart-invoice-processor',
				"title": 'Smart Invoice Processor',
				"description": 'AI-powered invoice processing that automatically extracts data, validates information, and integrates with accounting systems.',
				"category": 'Micro SaaS',
				"price": '$149',
				"billing": 'month',
				"features": ['OCR data extraction',
					'Automated validation',
					'ERP integration',
					'Approval workflows',
					'Fraud detection'
				],
				"ctaLabel": 'Process Invoices',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-customer-support-automation',
				"title": 'AI Customer Support Automation',
				"description": 'Intelligent customer support system that handles inquiries, escalates complex issues, and provides 24/7 assistance.',
				"category": 'Micro SaaS',
				"price": '$299',
				"billing": 'month',
				"features": ['Natural language processing',
					'Multi-language support',
					'Knowledge base integration',
					'Escalation workflows',
					'Performance analytics'
				],
				"ctaLabel": 'Automate Support',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'predictive-inventory-manager',
				"title": 'Predictive Inventory Manager',
				"description": 'AI-driven inventory management that predicts demand, optimizes stock levels, and reduces carrying costs.',
				"category": 'Micro SaaS',
				"price": '$199',
				"billing": 'month',
				"features": ['Demand forecasting',
					'Stock optimization',
					'Reorder automation',
					'Supplier integration',
					'Cost analysis'
				],
				"ctaLabel": 'Optimize Inventory',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-powered-email-marketing',
				"title": 'AI-Powered Email Marketing Suite',
				"description": 'Intelligent email marketing platform that personalizes content, optimizes send times, and maximizes engagement rates.',
				"category": 'Micro SaaS',
				"price": '$249',
				"billing": 'month',
				"features": ['AI content personalization',
					'Optimal timing algorithms',
					'A/B testing automation',
					'Behavioral segmentation',
					'ROI tracking'
				],
				"ctaLabel": 'Boost Engagement',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'meeting-notes-copilot',
				"title": 'AI Meeting Notes & Summaries',
				"description": 'Auto-capture meetings, generate action items, and sync to CRM and project tools.',
				"category": 'Micro SaaS',
				"price": '$29',
				"billing": 'month',
				"features": ['Transcription and speaker diarization',
					'Auto summaries and follow-ups',
					'CRM/Jira/Asana sync',
					'Multi-language support',
					'Admin analytics'
				],
				"ctaLabel": 'Try Meeting Copilot',
				"href": 'https://ziontechgroup.com/services/ai-meeting-notes'
			},
			{
				"id": 'smart-forms-intake',
				"title": 'Smart Forms & Intake',
				"description": 'Conditional logic, AI validation, and workflow routing to accelerate onboarding and lead capture.',
				"category": 'Micro SaaS',
				"price": '$99',
				"billing": 'month',
				"features": ['AI-powered form validation',
					'Conditional logic and branching',
					'Workflow automation',
					'CRM integration',
					'Analytics and insights'
				],
				"ctaLabel": 'Build Smart Forms',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-customer-success-platform',
				"title": 'AI Customer Success Platform',
				"description": 'Intelligent customer success platform that predicts churn, automates onboarding, and optimizes customer engagement.',
				"category": 'Micro SaaS',
				"price": '$1,499',
				"billing": 'month',
				"features": ['AI-powered churn prediction',
					'Automated onboarding workflows',
					'Customer health scoring',
					'Personalized engagement campaigns',
					'ROI tracking and analytics'
				],
				"ctaLabel": 'Optimize Customer Success',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-workflow-orchestrator',
				"title": 'AI Workflow Orchestrator',
				"description": 'Intelligent workflow automation platform that uses AI to optimize business processes and increase operational efficiency.',
				"category": 'Micro SaaS',
				"price": '$899',
				"billing": 'month',
				"features": ['AI-powered process optimization',
					'Visual workflow builder',
					'Intelligent task routing',
					'Process mining and analytics',
					'Integration with 100+ tools'
				],
				"ctaLabel": 'Automate Workflows',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-data-governance-platform',
				"title": 'AI Data Governance Platform',
				"description": 'Comprehensive data governance solution that uses AI to ensure data quality, compliance, and security.',
				"category": 'Micro SaaS',
				"price": '$2,499',
				"billing": 'month',
				"features": ['AI-powered data quality assessment',
					'Automated compliance monitoring',
					'Data lineage tracking',
					'Privacy impact assessments',
					'Custom governance policies'
				],
				"ctaLabel": 'Govern Your Data',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-cybersecurity-suite',
				"title": 'AI Cybersecurity Suite',
				"description": 'Advanced cybersecurity platform that uses AI to detect, prevent, and respond to cyber threats in real-time.',
				"category": 'Micro SaaS',
				"price": '$3,999',
				"billing": 'month',
				"features": ['AI-powered threat detection',
					'Behavioral analytics',
					'Automated incident response',
					'Real-time monitoring',
					'24/7 security operations'
				],
				"ctaLabel": 'Secure Your Business',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'quantum-ai-platform',
				"title": 'Quantum AI Platform',
				"description": 'Revolutionary platform that combines quantum computing with AI to solve complex optimization problems.',
				"category": 'Micro SaaS',
				"price": '$5,999',
				"billing": 'month',
				"features": ['Quantum algorithm optimization',
					'AI model acceleration',
					'Hybrid quantum-classical computing',
					'Real-time optimization',
					'Quantum machine learning'
				],
				"ctaLabel": 'Explore Quantum AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-healthcare-analytics',
				"title": 'AI Healthcare Analytics Platform',
				"description": 'Advanced healthcare analytics platform that uses AI to improve patient outcomes and optimize operations.',
				"category": 'Micro SaaS',
				"price": '$3,499',
				"billing": 'month',
				"features": ['AI-powered patient analytics',
					'Predictive health modeling',
					'Clinical decision support',
					'Population health management',
					'HIPAA compliance'
				],
				"ctaLabel": 'Transform Healthcare',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'edge-computing-platform',
				"title": 'Edge Computing Platform',
				"description": 'Next-generation edge computing platform that brings AI and computing power closer to data sources.',
				"category": 'Micro SaaS',
				"price": '$1,999',
				"billing": 'month',
				"features": ['Distributed edge computing',
					'AI model deployment',
					'Real-time data processing',
					'Edge device management',
					'Multi-cloud integration'
				],
				"ctaLabel": 'Deploy Edge AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-financial-trading-platform',
				"title": 'AI Financial Trading Platform',
				"description": 'Advanced financial trading platform that uses AI to analyze markets and execute trades automatically.',
				"category": 'Micro SaaS',
				"price": '$4,999',
				"billing": 'month',
				"features": ['AI-powered market analysis',
					'Predictive trading algorithms',
					'Real-time market data',
					'Automated trade execution',
					'Risk management'
				],
				"ctaLabel": 'Trade with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-supply-chain-optimization',
				"title": 'AI Supply Chain Optimization Platform',
				"description": 'Intelligent supply chain platform that uses AI to optimize logistics and reduce costs.',
				"category": 'Micro SaaS',
				"price": '$2,999',
				"billing": 'month',
				"features": ['AI-powered demand forecasting',
					'Route optimization',
					'Inventory management',
					'Supplier risk assessment',
					'Real-time tracking'
				],
				"ctaLabel": 'Optimize Supply Chain',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-hr-platform',
				"title": 'AI HR Platform',
				"description": 'Comprehensive HR platform that uses AI to automate recruitment and optimize workforce management.',
				"category": 'Micro SaaS',
				"price": '$1,999',
				"billing": 'month',
				"features": ['AI-powered recruitment',
					'Employee engagement analytics',
					'Performance management',
					'Learning and development',
					'Workforce planning'
				],
				"ctaLabel": 'Transform HR',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-marketing-automation',
				"title": 'AI Marketing Automation Platform',
				"description": 'Intelligent marketing automation platform that uses AI to personalize campaigns and maximize ROI.',
				"category": 'Micro SaaS',
				"price": '$2,499',
				"billing": 'month',
				"features": ['AI-powered campaign optimization',
					'Personalized content delivery',
					'Multi-channel automation',
					'Lead scoring and nurturing',
					'ROI tracking and analytics'
				],
				"ctaLabel": 'Automate Marketing',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-legal-research-platform',
				"title": 'AI Legal Research Platform',
				"description": 'Advanced legal research platform that uses AI to analyze case law and automate legal research.',
				"category": 'Micro SaaS',
				"price": '$3,999',
				"billing": 'month',
				"features": ['AI-powered case analysis',
					'Legal document review',
					'Precedent identification',
					'Legal research automation',
					'Compliance monitoring'
				],
				"ctaLabel": 'Research with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-education-platform',
				"title": 'AI Education Platform',
				"description": 'Intelligent education platform that uses AI to personalize learning experiences and optimize outcomes.',
				"category": 'Micro SaaS',
				"price": '$1,799',
				"billing": 'month',
				"features": ['AI-powered personalized learning',
					'Adaptive learning paths',
					'Student performance analytics',
					'Content recommendation',
					'Automated assessment'
				],
				"ctaLabel": 'Transform Education',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-project-management-platform',
				"title": 'AI Project Management Platform',
				"description": 'Intelligent project management platform that uses AI to optimize planning and resource allocation.',
				"category": 'Micro SaaS',
				"price": '$1,599',
				"billing": 'month',
				"features": ['AI-powered project planning',
					'Resource optimization',
					'Risk assessment',
					'Team collaboration tools',
					'Time tracking'
				],
				"ctaLabel": 'Manage Projects with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-content-orchestrator',
				"title": 'AI Content Orchestrator Pro',
				"description": 'Enterprise-grade content management platform that uses AI to create, optimize, and distribute content.',
				"category": 'Micro SaaS',
				"price": '$4,999',
				"billing": 'month',
				"features": ['AI-powered content creation',
					'Multi-channel distribution',
					'Workflow automation',
					'Content optimization',
					'Analytics and insights'
				],
				"ctaLabel": 'Orchestrate Content',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-sales-automation-suite',
				"title": 'AI Sales Automation Suite',
				"description": 'Comprehensive sales automation platform that uses AI to optimize every stage of the sales funnel.',
				"category": 'Micro SaaS',
				"price": '$1,999',
				"billing": 'month',
				"features": ['AI-powered lead scoring',
					'Automated email sequences',
					'Sales call scheduling',
					'CRM integration',
					'Performance analytics'
				],
				"ctaLabel": 'Automate Sales',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-customer-support-platform',
				"title": 'AI Customer Support Platform',
				"description": 'Intelligent customer support platform that uses AI to provide instant responses and improve satisfaction.',
				"category": 'Micro SaaS',
				"price": '$1,499',
				"billing": 'month',
				"features": ['AI-powered chatbot',
					'Ticket routing automation',
					'Knowledge base management',
					'Customer sentiment analysis',
					'Multi-language support'
				],
				"ctaLabel": 'Support with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-financial-analytics-platform',
				"title": 'AI Financial Analytics Platform',
				"description": 'Advanced financial analytics platform that uses AI to provide real-time insights and risk assessment.',
				"category": 'Micro SaaS',
				"price": '$2,499',
				"billing": 'month',
				"features": ['Real-time financial monitoring',
					'AI-powered risk assessment',
					'Predictive financial modeling',
					'Custom dashboard creation',
					'Compliance reporting'
				],
				"ctaLabel": 'Analyze Finances',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-learning-management-system',
				"title": 'AI Learning Management System',
				"description": 'Intelligent learning platform that uses AI to personalize learning experiences and track progress.',
				"category": 'Micro SaaS',
				"price": '$1,299',
				"billing": 'month',
				"features": ['AI-powered content recommendations',
					'Personalized learning paths',
					'Progress tracking',
					'Assessment automation',
					'Multi-format content support'
				],
				"ctaLabel": 'Learn with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-legal-document-automation',
				"title": 'AI Legal Document Automation Platform',
				"description": 'Intelligent legal platform that uses AI to automate document creation and contract analysis.',
				"category": 'Micro SaaS',
				"price": '$2,199',
				"billing": 'month',
				"features": ['AI-powered document generation',
					'Contract analysis',
					'Legal research automation',
					'Compliance checking',
					'Document templates'
				],
				"ctaLabel": 'Automate Legal Docs',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'AI Solutions',
		"slug": 'ai-solutions',
		"items": [{
				id: 'ai-business-intelligence',
				"title": 'AI Business Intelligence Platform',
				"description": 'Next-generation BI platform that uses AI to automatically analyze data and generate actionable insights.',
				"category": 'AI Solutions',
				"price": '$2,999',
				"billing": 'month',
				"features": [
					'AI-powered data analysis',
					'Automated insight generation',
					'Natural language queries',
					'Predictive analytics',
					'Custom dashboard creation'
				],
				"ctaLabel": 'Get AI Insights',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-sales-copilot',
				"title": 'AI Sales Copilot',
				"description": 'Intelligent sales assistant that automates lead scoring, follow-ups, and sales process optimization.',
				"category": 'AI Solutions',
				"price": '$1,299',
				"billing": 'month',
				"features": ['AI-powered lead scoring',
					'Automated follow-up sequences',
					'Sales performance analytics',
					'CRM integration',
					'Predictive sales forecasting'
				],
				"ctaLabel": 'Boost Sales with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-compliance-assistant',
				"title": 'AI Compliance Assistant',
				"description": 'Automated compliance monitoring and reporting using AI to ensure regulatory adherence.',
				"category": 'AI Solutions',
				"price": '$1,999',
				"billing": 'month',
				"features": ['Automated compliance monitoring',
					'Regulatory change tracking',
					'Risk assessment',
					'Compliance reporting',
					'Audit trail management'
				],
				"ctaLabel": 'Ensure Compliance',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-auto-email-responder',
				"title": 'AI Auto Email Responder',
				"description": 'Intelligent email automation that responds to customer inquiries and manages communication workflows.',
				"category": 'AI Solutions',
				"price": '$799',
				"billing": 'month',
				"features": ['AI-powered email responses',
					'Natural language processing',
					'Workflow automation',
					'CRM integration',
					'Performance analytics'
				],
				"ctaLabel": 'Automate Email',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-content-studio',
				"title": 'LLM Content Studio',
				"description": 'AI-powered content creation platform that generates high-quality, on-brand content for all channels.',
				"category": 'AI Solutions',
				"price": '$1,499',
				"billing": 'month',
				"features": ['AI content generation',
					'Brand voice consistency',
					'Multi-format support',
					'SEO optimization',
					'Content analytics'
				],
				"ctaLabel": 'Create with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-finops-advisor',
				"title": 'FinOps Advisor',
				"description": 'AI-powered financial operations optimization for cloud cost management and resource allocation.',
				"category": 'AI Solutions',
				"price": '$1,799',
				"billing": 'month',
				"features": ['Cloud cost optimization',
					'Resource allocation analysis',
					'Cost forecasting',
					'Budget management',
					'ROI optimization'
				],
				"ctaLabel": 'Optimize FinOps',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-lead-scoring',
				"title": 'AI Lead Scoring Platform',
				"description": 'Intelligent lead scoring using machine learning to prioritize sales opportunities and improve conversion rates.',
				"category": 'AI Solutions',
				"price": '$899',
				"billing": 'month',
				"features": ['ML-powered lead scoring',
					'Behavioral analysis',
					'Conversion prediction',
					'CRM integration',
					'Performance tracking'
				],
				"ctaLabel": 'Score Leads with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-chatbot',
				"title": 'Website AI Chatbot',
				"description": 'Intelligent chatbot that provides 24/7 customer support and improves user engagement on your website.',
				"category": 'AI Solutions',
				"price": '$599',
				"billing": 'month',
				"features": ['Natural language processing',
					'24/7 availability',
					'Multi-language support',
					'CRM integration',
					'Conversation analytics'
				],
				"ctaLabel": 'Add AI Chatbot',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-rag-search',
				"title": 'RAG Search Platform',
				"description": 'AI-powered search with retrieval-augmented generation for accurate, contextual answers with citations.',
				"category": 'AI Solutions',
				"price": '$1,299',
				"billing": 'month',
				"features": ['Retrieval-augmented generation',
					'Contextual search',
					'Citation tracking',
					'Knowledge base integration',
					'Search analytics'
				],
				"ctaLabel": 'Implement RAG Search',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-mlops',
				"title": 'MLOps Pipeline Platform',
				"description": 'End-to-end machine learning operations platform for model development, deployment, and monitoring.',
				"category": 'AI Solutions',
				"price": '$2,499',
				"billing": 'month',
				"features": ['Model development pipeline',
					'Automated deployment',
					'Performance monitoring',
					'Model versioning',
					'Drift detection'
				],
				"ctaLabel": 'Deploy MLOps',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-ecommerce-personalization',
				"title": 'AI E-commerce Personalization',
				"description": 'Intelligent product recommendations and personalized shopping experiences to boost conversion rates.',
				"category": 'AI Solutions',
				"price": '$1,199',
				"billing": 'month',
				"features": ['Product recommendations',
					'Personalized search',
					'Dynamic pricing',
					'Customer segmentation',
					'Conversion optimization'
				],
				"ctaLabel": 'Personalize Shopping',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-returns-management',
				"title": 'AI Returns Management SaaS',
				"description": 'Intelligent returns processing and fraud detection to streamline operations and reduce costs.',
				"category": 'AI Solutions',
				"price": '$899',
				"billing": 'month',
				"features": ['Automated returns processing',
					'Fraud detection',
					'Return analytics',
					'Customer self-service',
					'Integration with e-commerce platforms'
				],
				"ctaLabel": 'Manage Returns with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-vendor-risk',
				"title": 'AI Vendor Risk Management',
				"description": 'Intelligent vendor risk assessment and monitoring using AI to ensure supply chain security.',
				"category": 'AI Solutions',
				"price": '$1,599',
				"billing": 'month',
				"features": ['AI-powered risk assessment',
					'Continuous monitoring',
					'Compliance tracking',
					'Risk scoring',
					'Automated alerts'
				],
				"ctaLabel": 'Manage Vendor Risk',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-seo-optimizer',
				"title": 'AI SEO Optimizer',
				"description": 'AI-powered SEO optimization that improves search rankings and drives organic traffic growth.',
				"category": 'AI Solutions',
				"price": '$799',
				"billing": 'month',
				"features": ['Keyword optimization',
					'Content analysis',
					'Technical SEO audit',
					'Competitor analysis',
					'Performance tracking'
				],
				"ctaLabel": 'Optimize SEO with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-churn-predictor',
				"title": 'AI Churn Predictor',
				"description": 'Predict customer churn using machine learning and implement proactive retention strategies.',
				"category": 'AI Solutions',
				"price": '$1,099',
				"billing": 'month',
				"features": ['Churn prediction models',
					'Risk scoring',
					'Retention strategies',
					'Customer segmentation',
					'Intervention recommendations'
				],
				"ctaLabel": 'Predict Churn',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-incident-postmortems',
				"title": 'AI Incident Postmortems',
				"description": 'Automated incident analysis and postmortem generation for improved incident response and learning.',
				"category": 'AI Solutions',
				"price": '$699',
				"billing": 'month',
				"features": ['Automated incident analysis',
					'Root cause identification',
					'Postmortem generation',
					'Knowledge base updates',
					'Team learning insights'
				],
				"ctaLabel": 'Analyze Incidents',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-api-monitoring',
				"title": 'AI API Monitoring SaaS',
				"description": 'Intelligent API monitoring and performance optimization using AI for proactive issue detection.',
				"category": 'AI Solutions',
				"price": '$599',
				"billing": 'month',
				"features": ['Real-time API monitoring',
					'Performance anomaly detection',
					'Automated alerting',
					'Performance optimization',
					'Uptime tracking'
				],
				"ctaLabel": 'Monitor APIs with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-gdpr-compliance',
				"title": 'AI GDPR Cookie Compliance',
				"description": 'Automated GDPR compliance management with intelligent cookie consent and data protection.',
				"category": 'AI Solutions',
				"price": '$399',
				"billing": 'month',
				"features": ['Cookie consent management',
					'Data protection compliance',
					'Privacy policy automation',
					'Consent analytics',
					'Regulatory updates'
				],
				"ctaLabel": 'Ensure GDPR Compliance',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-proofreading',
				"title": 'AI Proofreading Studio',
				"description": 'Advanced proofreading and editing using AI to improve content quality and readability.',
				"category": 'AI Solutions',
				"price": '$299',
				"billing": 'month',
				"features": ['AI-powered proofreading',
					'Grammar and style checking',
					'Content optimization',
					'Multi-language support',
					'Quality scoring'
				],
				"ctaLabel": 'Proofread with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-customer-feedback',
				"title": 'AI Customer Feedback Surveys',
				"description": 'Intelligent feedback collection and analysis using AI to improve customer satisfaction and product development.',
				"category": 'AI Solutions',
				"price": '$499',
				"billing": 'month',
				"features": ['AI-powered survey design',
					'Sentiment analysis',
					'Feedback categorization',
					'Actionable insights',
					'Integration with CRM systems'
				],
				"ctaLabel": 'Collect Feedback with AI',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-meeting-notes',
				"title": 'AI Meeting Notes & Summaries',
				"description": 'Automated meeting transcription, summarization, and action item extraction using AI.',
				"category": 'AI Solutions',
				"price": '$299',
				"billing": 'month',
				"features": ['Automated transcription',
					'AI summarization',
					'Action item extraction',
					'CRM integration',
					'Meeting analytics'
				],
				"ctaLabel": 'Automate Meeting Notes',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-smart-forms',
				"title": 'AI Smart Forms & Intake',
				"description": 'Intelligent form processing with AI validation, conditional logic, and workflow automation.',
				"category": 'AI Solutions',
				"price": '$199',
				"billing": 'month',
				"features": ['AI-powered validation',
					'Conditional logic',
					'Workflow automation',
					'Data extraction',
					'Analytics and insights'
				],
				"ctaLabel": 'Build Smart Forms',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-customer-success',
				"title": 'AI Customer Success Platform',
				"description": 'Comprehensive customer success platform using AI to predict churn and optimize customer engagement.',
				"category": 'AI Solutions',
				"price": '$1,499',
				"billing": 'month',
				"features": ['Churn prediction',
					'Customer health scoring',
					'Engagement optimization',
					'Success milestone tracking',
					'ROI analytics'
				],
				"ctaLabel": 'Optimize Customer Success',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-workflow-orchestrator',
				"title": 'AI Workflow Orchestrator',
				"description": 'Intelligent workflow automation platform that uses AI to optimize business processes and increase efficiency.',
				"category": 'AI Solutions',
				"price": '$899',
				"billing": 'month',
				"features": ['AI-powered process optimization',
					'Visual workflow builder',
					'Intelligent task routing',
					'Process mining',
					'Performance analytics'
				],
				"ctaLabel": 'Automate Workflows',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-data-governance',
				"title": 'AI Data Governance Platform',
				"description": 'Comprehensive data governance solution using AI to ensure data quality, compliance, and security.',
				"category": 'AI Solutions',
				"price": '$2,499',
				"billing": 'month',
				"features": ['AI-powered data quality',
					'Compliance monitoring',
					'Data lineage tracking',
					'Privacy impact assessment',
					'Governance policies'
				],
				"ctaLabel": 'Govern Your Data',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'IT Services',
		"slug": 'it-services',
		"items": [{
				id: 'cloud-migration-consulting',
				"title": 'Cloud Migration Consulting',
				"description": 'Expert guidance for migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',
				"category": 'IT Services',
				"price": '$150',
				"billing": 'hour',
				"features": [
					'Cloud readiness assessment',
					'Migration strategy planning',
					'Cost optimization analysis',
					'Security and compliance review',
					'Post-migration support'
				],
				"ctaLabel": 'Start Migration',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'cybersecurity-audit',
				"title": 'Cybersecurity Audit & Assessment',
				"description": 'Comprehensive security assessment to identify vulnerabilities and strengthen your cybersecurity posture.',
				"category": 'IT Services',
				"price": '$5,000',
				"billing": 'project',
				"features": ['Vulnerability assessment',
					'Penetration testing',
					'Security policy review',
					'Compliance gap analysis',
					'Remediation roadmap'
				],
				"ctaLabel": 'Secure Your Business',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'network-infrastructure-design',
				"title": 'Network Infrastructure Design',
				"description": 'Custom network architecture design for optimal performance, security, and scalability.',
				"category": 'IT Services',
				"price": '$8,000',
				"billing": 'project',
				"features": ['Network topology design',
					'Security architecture',
					'Performance optimization',
					'Scalability planning',
					'Implementation support'
				],
				"ctaLabel": 'Design Network',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'data-backup-recovery',
				"title": 'Data Backup & Disaster Recovery',
				"description": 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
				"category": 'IT Services',
				"price": '$2,500',
				"billing": 'month',
				"features": ['Automated backup systems',
					'Disaster recovery planning',
					'Regular testing and validation',
					'24/7 monitoring',
					'Quick recovery solutions'
				],
				"ctaLabel": 'Protect Your Data',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'it-project-management',
				"title": 'IT Project Management',
				"description": 'Professional project management services for complex IT implementations and digital transformations.',
				"category": 'IT Services',
				"price": '$125',
				"billing": 'hour',
				"features": ['Project planning and scheduling',
					'Risk management',
					'Stakeholder communication',
					'Progress tracking',
					'Quality assurance'
				],
				"ctaLabel": 'Manage IT Projects',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'system-integration',
				"title": 'System Integration Services',
				"description": 'Seamless integration of disparate systems to improve data flow and operational efficiency.',
				"category": 'IT Services',
				"price": '$175',
				"billing": 'hour',
				"features": ['API development and integration',
					'Data mapping and transformation',
					'Workflow automation',
					'Testing and validation',
					'Ongoing support'
				],
				"ctaLabel": 'Integrate Systems',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'it-consulting',
				"title": 'Strategic IT Consulting',
				"description": 'Strategic guidance to align your technology investments with business objectives and growth plans.',
				"category": 'IT Services',
				"price": '$200',
				"billing": 'hour',
				"features": ['Technology strategy development',
					'Digital transformation planning',
					'Technology roadmap creation',
					'Vendor selection assistance',
					'ROI analysis'
				],
				"ctaLabel": 'Get IT Strategy',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'managed-it-services',
				"title": 'Managed IT Services',
				"description": 'Comprehensive IT management including monitoring, maintenance, and support for your technology infrastructure.',
				"category": 'IT Services',
				"price": '$3,500',
				"billing": 'month',
				"features": ['24/7 monitoring and support',
					'Proactive maintenance',
					'Security management',
					'Backup and recovery',
					'Help desk support'
				],
				"ctaLabel": 'Manage IT Infrastructure',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'software-development',
				"title": 'Custom Software Development',
				"description": 'Tailored software solutions designed to meet your specific business requirements and workflows.',
				"category": 'IT Services',
				"price": '$100',
				"billing": 'hour',
				"features": ['Requirements analysis',
					'Custom development',
					'Testing and quality assurance',
					'Deployment and training',
					'Maintenance and support'
				],
				"ctaLabel": 'Develop Custom Software',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'data-analytics-implementation',
				"title": 'Data Analytics Implementation',
				"description": 'Implementation of data analytics solutions to transform raw data into actionable business insights.',
				"category": 'IT Services',
				"price": '$15,000',
				"billing": 'project',
				"features": ['Data warehouse design',
					'ETL pipeline development',
					'Dashboard creation',
					'User training',
					'Ongoing optimization'
				],
				"ctaLabel": 'Implement Analytics',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'devops-implementation',
				"title": 'DevOps Implementation',
				"description": 'Implementation of DevOps practices to accelerate software delivery and improve operational efficiency.',
				"category": 'IT Services',
				"price": '$12,000',
				"billing": 'project',
				"features": ['CI/CD pipeline setup',
					'Infrastructure as code',
					'Monitoring and logging',
					'Team training',
					'Process optimization'
				],
				"ctaLabel": 'Implement DevOps',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'cloud-optimization',
				"title": 'Cloud Cost Optimization',
				"description": 'Optimize your cloud infrastructure to reduce costs while maintaining performance and reliability.',
				"category": 'IT Services',
				"price": '$3,000',
				"billing": 'project',
				"features": ['Cost analysis and audit',
					'Resource optimization',
					'Reserved instance planning',
					'Performance tuning',
					'Cost monitoring setup'
				],
				"ctaLabel": 'Optimize Cloud Costs',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'security-compliance',
				"title": 'Security Compliance Services',
				"description": 'Achieve and maintain compliance with industry standards like SOC 2, ISO 27001, and GDPR.',
				"category": 'IT Services',
				"price": '$7,500',
				"billing": 'project',
				"features": ['Compliance gap analysis',
					'Policy and procedure development',
					'Security control implementation',
					'Audit preparation',
					'Ongoing compliance monitoring'
				],
				"ctaLabel": 'Achieve Compliance',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'business-continuity',
				"title": 'Business Continuity Planning',
				"description": 'Comprehensive business continuity and disaster recovery planning to ensure operational resilience.',
				"category": 'IT Services',
				"price": '$10,000',
				"billing": 'project',
				"features": ['Business impact analysis',
					'Recovery strategy development',
					'Plan documentation',
					'Testing and validation',
					'Staff training'
				],
				"ctaLabel": 'Plan Continuity',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'it-training',
				"title": 'IT Training & Certification',
				"description": 'Comprehensive training programs to enhance your team\'s technical skills and knowledge.',
				"category": 'IT Services',
				"price": '$2,000',
				"billing": 'day',
				"features": ['Customized training programs',
					'Hands-on workshops',
					'Certification preparation',
					'Ongoing support',
					'Progress tracking'
				],
				"ctaLabel": 'Train Your Team',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'vendor-management',
				"title": 'IT Vendor Management',
				"description": 'Strategic vendor management to optimize costs, improve service quality, and reduce risks.',
				"category": 'IT Services',
				"price": '$150',
				"billing": 'hour',
				"features": ['Vendor assessment and selection',
					'Contract negotiation',
					'Performance monitoring',
					'Relationship management',
					'Cost optimization'
				],
				"ctaLabel": 'Manage Vendors',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'digital-transformation',
				"title": 'Digital Transformation Consulting',
				"description": 'End-to-end digital transformation services to modernize your business operations and technology stack.',
				"category": 'IT Services',
				"price": '$25,000',
				"billing": 'project',
				"features": ['Digital maturity assessment',
					'Transformation roadmap',
					'Technology modernization',
					'Change management',
					'Success measurement'
				],
				"ctaLabel": 'Transform Digitally',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'it-audit',
				"title": 'IT Audit & Assessment',
				"description": 'Comprehensive IT audit to evaluate your technology infrastructure, processes, and controls.',
				"category": 'IT Services',
				"price": '$8,000',
				"billing": 'project',
				"features": ['Infrastructure assessment',
					'Process evaluation',
					'Control testing',
					'Risk identification',
					'Recommendation report'
				],
				"ctaLabel": 'Audit IT Infrastructure',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'performance-tuning',
				"title": 'Performance Tuning & Optimization',
				"description": 'Optimize your systems and applications for maximum performance and efficiency.',
				"category": 'IT Services',
				"price": '$125',
				"billing": 'hour',
				"features": ['Performance analysis',
					'Bottleneck identification',
					'Optimization implementation',
					'Testing and validation',
					'Performance monitoring'
				],
				"ctaLabel": 'Optimize Performance',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'data-migration',
				"title": 'Data Migration Services',
				"description": 'Secure and efficient data migration between systems with minimal downtime and data loss.',
				"category": 'IT Services',
				"price": '$5,000',
				"billing": 'project',
				"features": ['Data mapping and analysis',
					'Migration planning',
					'Data validation',
					'Rollback procedures',
					'Post-migration verification'
				],
				"ctaLabel": 'Migrate Data',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Cybersecurity',
		"slug": 'cybersecurity',
		"items": [{
				id: 'm365-security-hardening-kit',
				"title": 'M365 Security Hardening Kit',
				"description": 'Baseline hardening, drift detection, and auto-remediation for Microsoft 365 tenants with executive reporting.',
				"category": 'Cybersecurity',
				"price": '$199',
				"billing": 'month',
				"features": [
					'Secure baseline as code',
					'Misconfiguration detection',
					'Auto-remediation playbooks',
					'Graph API integrations',
					'Compliance-ready reports'
				],
				"ctaLabel": 'Harden M365',
				"href": 'https://ziontechgroup.com/services/m365-security-hardening'
			},
			{
				"id": 'ai-threat-intelligence',
				"title": 'AI Threat Intelligence Suite',
				"description": 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',
				"category": 'Cybersecurity',
				"price": '$3,999',
				"billing": 'month',
				"features": ['AI threat detection',
					'Behavioral analysis',
					'Automated response',
					'Threat hunting',
					'Incident management'
				],
				"ctaLabel": 'Security Demo',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'quantum-cryptography',
				"title": 'Quantum Cryptography Solutions',
				"description": 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.',
				"category": 'Cybersecurity',
				"price": '$12,000',
				"billing": 'project',
				"features": ['Quantum key distribution',
					'Post-quantum crypto',
					'Secure communication',
					'Key management',
					'Compliance ready'
				],
				"ctaLabel": 'Quantum Security',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'managed-detection-response',
				"title": 'Managed Detection & Response (MDR)',
				"description": '24/7 monitoring, threat hunting, and incident response with SIEM/SOAR integration.',
				"category": 'Cybersecurity',
				"price": '$3,499',
				"billing": 'month',
				"features": ['SIEM setup and tuning',
					'Playbooks and automation',
					'Phishing and EDR integration',
					'Compliance-ready reporting',
					'Incident response retainers'
				],
				"ctaLabel": 'Activate MDR',
				"href": 'https://ziontechgroup.com/services'
			},
			{
				"id": 'sase-rollout',
				"title": 'Secure Access Service Edge (SASE) Rollout',
				"description": 'Consolidate network and security with ZTNA, SWG, CASB, and SD-WAN.',
				"category": 'Cybersecurity',
				"price": '$20,000',
				"billing": 'project',
				"features": ['Architecture and vendor selection',
					'Pilot and phased migration',
					'Policy baselines',
					'User experience optimization',
					'Runbooks and training'
				],
				"ctaLabel": 'Deploy SASE',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		"name": 'Data & Analytics',
		"slug": 'data-analytics',
		"items": [{
				id: 'synthetic-data-generator',
				"title": 'Synthetic Data Generator',
				"description": 'Privacy-safe synthetic tabular/time-series/text data with utility/drift reports and DP options.',
				"category": 'Data & Analytics',
				"price": '$119',
				"billing": 'month',
				"features": [
					'Differential privacy & masking',
					'Tabular/time-series/text modes',
					'Utility and drift reports',
					'APIs and SDKs',
					'S3/Snowflake/BigQuery connectors'
				],
				"ctaLabel": 'Generate Data',
				"href": 'https://ziontechgroup.com/services/synthetic-data-generator'
			},
			{
				"id": 'quantum-data-analytics',
				"title": 'Quantum Data Analytics Platform',
				"description": 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',
				"category": 'Data & Analytics',
				"price": '$6,999',
				"billing": 'month',
				"features": ['Quantum pattern recognition',
					'Complex data modeling',
					'Real-time insights',
					'Predictive analytics',
					'Visualization tools'
				],
				"ctaLabel": 'Analytics Demo',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-business-intelligence',
				"title": 'AI Business Intelligence Suite',
				"description": 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.',
				"category": 'Data & Analytics',
				"price": '$2,499',
				"billing": 'month',
				"features": ['Automated insights',
					'Natural language queries',
					'Predictive modeling',
					'Custom dashboards',
					'Data integration'
				],
				"ctaLabel": 'BI Assessment',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'data-quality-observability',
				"title": 'Data Quality & Observability',
				"description": 'Monitor freshness, completeness, and lineage to trust your analytics and AI.',
				"category": 'Data & Analytics',
				"price": '$1,499',
				"billing": 'month',
				"features": ['Column-level lineage',
					'Great Expectations policies',
					'Alerting and incident Mgmt',
					'"Connectors": Snowflake, BigQuery, Databricks',
					'Root-cause analysis'
				],
				"ctaLabel": 'Improve Data Trust',
				"href": 'https://ziontechgroup.com/services'
			},
			{
				"id": 'modern-etl-migration',
				"title": 'Modern ETL/ELT Migration',
				"description": 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.',
				"category": 'Data & Analytics',
				"price": '$18,000',
				"billing": 'project',
				"features": ['dbt modeling and tests',
					'Incremental loads',
					'CI for analytics',
					'Cost-efficient storage',
					'Knowledge transfer'
				],
				"ctaLabel": 'Migrate Workloads',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		"name": 'Cloud & DevOps',
		"slug": 'cloud-devops',
		"items": [{
				id: 'uptime-slo-monitor',
				"title": 'Uptime & SLO Monitor',
				"description": 'Multi-region synthetic checks with SLO dashboards, error budgets, and burn rate alerts.',
				"category": 'Cloud & DevOps',
				"price": '$49',
				"billing": 'month',
				"features": [
					'Multi-region probes',
					'SLO calculation and burn rates',
					'Error budget policy',
					'Alerts and dashboards',
					'CI/CD release gates'
				],
				"ctaLabel": 'Monitor Reliability',
				"href": 'https://ziontechgroup.com/services/uptime-slo-monitor'
			},
			{
				"id": 'kubernetes-cost-analyzer',
				"title": 'Kubernetes Cost Analyzer',
				"description": 'Allocation, rightsizing, and bin‑packing insights by team/namespace with chargeback reports.',
				"category": 'Cloud & DevOps',
				"price": '$99',
				"billing": 'month',
				"features": ['Cost allocation by namespace/team',
					'Requests/limits advisor',
					'Bin‑packing recommendations',
					'Chargeback/showback reports',
					'Slack/Grafana integrations'
				],
				"ctaLabel": 'Cut K8s Spend',
				"href": 'https://ziontechgroup.com/services/kubernetes-cost-analyzer'
			},
			{
				"id": 'autonomous-devops-platform',
				"title": 'Autonomous DevOps Platform',
				"description": 'Self-managing DevOps platform that automatically optimizes deployments, scaling, and infrastructure management.',
				"category": 'Cloud & DevOps',
				"price": '$4,999',
				"billing": 'month',
				"features": ['Automated deployments',
					'Self-healing infrastructure',
					'Performance optimization',
					'Cost management',
					'Continuous monitoring'
				],
				"ctaLabel": 'DevOps Demo',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'quantum-cloud-infrastructure',
				"title": 'Quantum Cloud Infrastructure',
				"description": 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.',
				"category": 'Cloud & DevOps',
				"price": '$18,000',
				"billing": 'project',
				"features": ['Quantum cloud services',
					'Hybrid infrastructure',
					'Quantum optimization',
					'Scalable architecture',
					'Enterprise support'
				],
				"ctaLabel": 'Cloud Migration',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'serverless-application-factory',
				"title": 'Serverless Application Factory',
				"description": 'Blueprints and accelerators to build secure, low-cost serverless backends fast.',
				"category": 'Cloud & DevOps',
				"price": '$16,000',
				"billing": 'project',
				"features": ['Patterns: EventBridge, Step Functions',
					'IaC with CDK/Terraform',
					'Observability baked-in',
					'SECaaS and guardrails',
					'Cost-efficiency targets'
				],
				"ctaLabel": 'Build Serverless',
				"href": 'https://ziontechgroup.com/services'
			},
			{
				"id": 'disaster-recovery-blueprints',
				"title": 'Disaster Recovery Blueprints (RTO/RPO)',
				"description": 'Design and test DR strategies with automated failover and periodic game days.',
				"category": 'Cloud & DevOps',
				"price": '$20,000',
				"billing": 'project',
				"features": ['Multi-region architectures',
					'Automated chaos tests',
					'Backup and restore pipelines',
					'Compliance documentation',
					'Executive tabletop exercises'
				],
				"ctaLabel": 'Harden Resilience',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		"name": 'Quantum Computing',
		"slug": 'quantum-computing',
		"items": [{
				id: 'quantum-financial-trading',
				"title": 'Quantum Financial Trading Platform',
				"description": 'Revolutionary trading platform using quantum algorithms for portfolio optimization and risk assessment.',
				"category": 'Quantum Computing',
				"price": '$25,000',
				"billing": 'month',
				"features": [
					'Quantum portfolio optimization',
					'Risk modeling',
					'Real-time trading',
					'Compliance tools',
					'Performance analytics'
				],
				"ctaLabel": 'Trading Demo',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'quantum-drug-discovery',
				"title": 'Quantum Drug Discovery Platform',
				"description": 'Advanced drug discovery platform leveraging quantum computing for molecular modeling and drug design.',
				"category": 'Quantum Computing',
				"price": '$45,000',
				"billing": 'month',
				"features": ['Quantum molecular modeling',
					'Drug design algorithms',
					'Clinical trial optimization',
					'Research collaboration',
					'Regulatory support'
				],
				"ctaLabel": 'Research Access',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Blockchain & Web3',
		"slug": 'blockchain-web3',
		"items": [{
				id: 'decentralized-ai-marketplace',
				"title": 'Decentralized AI Marketplace',
				"description": 'Web3-powered marketplace for AI models, data, and computational resources with blockchain-based governance.',
				"category": 'Blockchain & Web3',
				"price": '$1,999',
				"billing": 'month',
				"features": [
					'AI model marketplace',
					'Decentralized governance',
					'Smart contracts',
					'Token economics',
					'Community-driven'
				],
				"ctaLabel": 'Marketplace Access',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'quantum-blockchain-platform',
				"title": 'Quantum Blockchain Platform',
				"description": 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.',
				"category": 'Blockchain & Web3',
				"price": '$8,999',
				"billing": 'month',
				"features": ['Quantum-resistant crypto',
					'Enhanced consensus',
					'Scalable architecture',
					'Interoperability',
					'Enterprise features'
				],
				"ctaLabel": 'Blockchain Demo',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'IoT & Edge',
		"slug": 'iot-edge',
		"items": [{
				id: 'quantum-iot-platform',
				"title": 'Quantum IoT Platform',
				"description": 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',
				"category": 'IoT & Edge',
				"price": '$3,999',
				"billing": 'month',
				"features": [
					'Quantum edge processing',
					'Device optimization',
					'Intelligent routing',
					'Energy efficiency',
					'Scalable deployment'
				],
				"ctaLabel": 'IoT Demo',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'autonomous-edge-ai',
				"title": 'Autonomous Edge AI Platform',
				"description": 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.',
				"category": 'IoT & Edge',
				"price": '$2,999',
				"billing": 'month',
				"features": ['Autonomous optimization',
					'Edge AI processing',
					'Network intelligence',
					'Resource management',
					'Performance monitoring'
				],
				"ctaLabel": 'Edge AI Demo',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'predictive-maintenance-iot',
				"title": 'Predictive Maintenance for IoT Fleets',
				"description": 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',
				"category": 'IoT & Edge',
				"price": '$2,499',
				"billing": 'month',
				"features": ['Edge telemetry ingestion',
					'ML failure prediction',
					'Work order integration (EAM/CMMS)',
					'Kitting and rollout playbooks',
					'Dashboards and alerts'
				],
				"ctaLabel": 'Reduce Downtime',
				"href": 'https://ziontechgroup.com/services'
			},
			{
				"id": 'digital-twin-starter',
				"title": 'Digital Twin Starter Kit',
				"description": 'Model physical systems with twins to simulate scenarios and optimize operations.',
				"category": 'IoT & Edge',
				"price": '$14,000',
				"billing": 'project',
				"features": ['3D/graph models',
					'Stream processing',
					'Integration with PLC/SCADA',
					'KPI definition and alerts',
					'Pilot-to-production plan'
				],
				"ctaLabel": 'Build a Twin',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		"name": 'Green Tech',
		"slug": 'green-tech',
		"items": [{
				id: 'quantum-energy-optimization',
				"title": 'Quantum Energy Optimization',
				"description": 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',
				"category": 'Green Tech',
				"price": '$12,000',
				"billing": 'month',
				"features": [
					'Quantum energy modeling',
					'Renewable optimization',
					'Grid management',
					'Carbon tracking',
					'Sustainability reporting'
				],
				"ctaLabel": 'Energy Assessment',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-climate-prediction',
				"title": 'AI Climate Prediction Platform',
				"description": 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.',
				"category": 'Green Tech',
				"price": '$7,999',
				"billing": 'month',
				"features": ['AI climate modeling',
					'Quantum simulations',
					'Real-time predictions',
					'Risk assessment',
					'Policy recommendations'
				],
				"ctaLabel": 'Climate Demo',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'carbon-accounting-saas',
				"title": 'Carbon Accounting & ESG Reporting',
				"description": 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',
				"category": 'Green Tech',
				"price": '$999',
				"billing": 'month',
				"features": ['GHG Protocol-aligned factors',
					'Automated data pipelines',
					'Supplier questionnaires',
					'Assurance-ready exports',
					'Target tracking (SBTi)'
				],
				"ctaLabel": 'Start ESG Tracking',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		"name": 'Space Tech',
		"slug": 'space-tech',
		"items": [{
				id: 'satellite-ai-orchestrator',
				"title": 'Satellite AI Orchestrator',
				"description": 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',
				"category": 'Space Tech',
				"price": '$15,000',
				"billing": 'month',
				"features": [
					'Autonomous orbital optimization',
					'AI-powered data analysis',
					'Real-time monitoring',
					'Collision avoidance',
					'Global coverage'
				],
				"ctaLabel": 'Launch Satellites',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'quantum-space-communications',
				"title": 'Quantum Space Communications',
				"description": 'Next-generation quantum communication system for secure, ultra-fast data transmission between Earth and space.',
				"category": 'Space Tech',
				"price": '$25,000',
				"billing": 'month',
				"features": ['Quantum entanglement',
					'Unhackable encryption',
					'Light-speed transmission',
					'Deep space coverage',
					'Interplanetary network'
				],
				"ctaLabel": 'Connect Space',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'satellite-imagery-analytics',
				"title": 'Satellite Imagery Analytics',
				"description": 'Computer vision on multi-spectral imagery for agriculture, insurance, and defense insights.',
				"category": 'Space Tech',
				"price": '$5,999',
				"billing": 'month',
				"features": ['Change detection',
					'Crop yield estimation',
					'Object and damage detection',
					'APIs and dashboards',
					'Tasking provider integrations'
				],
				"ctaLabel": 'Analyze Imagery',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		"name": 'BioTech & Health',
		"slug": 'biotech-health',
		"items": [{
				id: 'ai-drug-discovery-platform',
				"title": 'AI Drug Discovery Platform',
				"description": 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',
				"category": 'BioTech & Health',
				"price": '$35,000',
				"billing": 'month',
				"features": [
					'AI molecular modeling',
					'Quantum simulations',
					'Clinical trial optimization',
					'Drug repurposing',
					'Regulatory compliance'
				],
				"ctaLabel": 'Discover Drugs',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'quantum-genome-analyzer',
				"title": 'Quantum Genome Analyzer',
				"description": 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.',
				"category": 'BioTech & Health',
				"price": '$18,000',
				"billing": 'month',
				"features": ['Quantum DNA sequencing',
					'Personalized medicine',
					'Disease prediction',
					'Genetic counseling',
					'Research collaboration'
				],
				"ctaLabel": 'Analyze Genome',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'telemedicine-ai-triage',
				"title": 'Telemedicine AI Triage',
				"description": 'AI symptom checker with escalation workflows to clinicians and EHR integration.',
				"category": 'BioTech & Health',
				"price": '$1,999',
				"billing": 'month',
				"features": ['Clinical safety guardrails',
					'HL7/FHIR integration',
					'Language and accessibility',
					'Analytics and outcomes tracking',
					'Privacy and consent management'
				],
				"ctaLabel": 'Enable Triage',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		"name": 'FinTech & DeFi',
		"slug": 'fintech-defi',
		"items": [{
				id: 'quantum-trading-algorithm',
				"title": 'Quantum Trading Algorithm',
				"description": 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',
				"category": 'FinTech & DeFi',
				"price": '$45,000',
				"billing": 'month',
				"features": [
					'Quantum market analysis',
					'Microsecond trading',
					'Risk management',
					'Portfolio optimization',
					'Regulatory compliance'
				],
				"ctaLabel": 'Start Trading',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'autonomous-defi-protocol',
				"title": 'Autonomous DeFi Protocol',
				"description": 'Self-managing DeFi protocol that automatically optimizes yields, manages risks, and executes strategies.',
				"category": 'FinTech & DeFi',
				"price": '$12,000',
				"billing": 'month',
				"features": ['Autonomous yield farming',
					'Risk management',
					'Strategy optimization',
					'Cross-chain integration',
					'Smart contract security'
				],
				"ctaLabel": 'Deploy Protocol',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'kyc-aml-transaction-monitoring',
				"title": 'KYC/AML Transaction Monitoring',
				"description": 'Detect suspicious activity using rules + ML with investigator case management.',
				"category": 'FinTech & DeFi',
				"price": '$2,499',
				"billing": 'month',
				"features": ['Entity resolution',
					'Sanctions and watchlists',
					'Graph analytics',
					'Case workflow and SAR exports',
					'Audit and model governance'
				],
				"ctaLabel": 'Strengthen Compliance',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		"name": 'Metaverse & AR/VR',
		"slug": 'metaverse-ar-vr',
		"items": [{
				id: 'quantum-metaverse-engine',
				"title": 'Quantum Metaverse Engine',
				"description": 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',
				"category": 'Metaverse & AR/VR',
				"price": '$28,000',
				"billing": 'month',
				"features": [
					'Quantum rendering',
					'Infinite scalability',
					'Realistic physics',
					'Cross-platform support',
					'AI-powered NPCs'
				],
				"ctaLabel": 'Enter Metaverse',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'autonomous-ar-navigation',
				"title": 'Autonomous AR Navigation',
				"description": 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.',
				"category": 'Metaverse & AR/VR',
				"price": '$8,500',
				"billing": 'month',
				"features": ['Real-time AR overlays',
					'Autonomous navigation',
					'Smart city integration',
					'Traffic optimization',
					'Safety monitoring'
				],
				"ctaLabel": 'Navigate AR',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'vr-training-simulators',
				"title": 'VR Training Simulators',
				"description": 'Enterprise-grade immersive learning for safety, field ops, and medical procedures.',
				"category": 'Metaverse & AR/VR',
				"price": '$30,000',
				"billing": 'project',
				"features": ['Curriculum design',
					'Multi-user scenarios',
					'LMS integration and analytics',
					'Hardware procurement guidance',
					'Operations and support'
				],
				"ctaLabel": 'Build Simulator',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	{
		"name": 'Autonomous Systems',
		"slug": 'autonomous-systems',
		"items": [{
				id: 'quantum-ai-controller',
				"title": 'Quantum AI Controller',
				"description": 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',
				"category": 'Autonomous Systems',
				"price": '$32,000',
				"billing": 'month',
				"features": [
					'Quantum decision making',
					'Autonomous learning',
					'System optimization',
					'Predictive maintenance',
					'Multi-system coordination'
				],
				"ctaLabel": 'Control Systems',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'autonomous-robotics-platform',
				"title": 'Autonomous Robotics Platform',
				"description": 'Complete robotics platform for autonomous manufacturing, logistics, and service operations.',
				"category": 'Autonomous Systems',
				"price": '$22,000',
				"billing": 'month',
				"features": ['Autonomous navigation',
					'Task learning',
					'Safety protocols',
					'Multi-robot coordination',
					'Performance analytics'
				],
				"ctaLabel": 'Deploy Robots',
				"href": 'https://ziontechgroup.com/contact'
			}
			,
			{
				"id": 'warehouse-robotics-orchestration',
				"title": 'Warehouse Robotics Orchestration',
				"description": 'Coordinate AMRs, conveyors, and pick stations to maximize throughput and safety.',
				"category": 'Autonomous Systems',
				"price": '$9,999',
				"billing": 'month',
				"features": ['Task allocation and routing',
					'3D digital twin monitoring',
					'Workforce and robot collaboration',
					'Safety zones and policies',
					'KPIs and optimization'
				],
				"ctaLabel": 'Orchestrate Robots',
				"href": 'https://ziontechgroup.com/services'
			}
		]
	},
	// New innovative service categories
	{
		"name": 'Digital Marketing',
		"slug": 'digital-marketing',
		"items": [{
				id: 'ai-social-media-manager',
				"title": 'AI Social Media Manager',
				"description": 'Intelligent social media management platform that creates content, schedules posts, and optimizes engagement across all platforms.',
				"category": 'Digital Marketing',
				"price": '$199',
				"billing": 'month',
				"features": [
					'AI content generation',
					'Multi-platform scheduling',
					'Engagement optimization',
					'Analytics dashboard',
					'Brand voice consistency'
				],
				"ctaLabel": 'Manage Social Media',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'predictive-marketing-analytics',
				"title": 'Predictive Marketing Analytics',
				"description": 'AI-powered marketing analytics that predicts customer behavior, optimizes campaigns, and maximizes ROI.',
				"category": 'Digital Marketing',
				"price": '$299',
				"billing": 'month',
				"features": ['Customer behavior prediction',
					'Campaign optimization',
					'ROI forecasting',
					'Attribution modeling',
					'Real-time insights'
				],
				"ctaLabel": 'Analyze Marketing',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-seo-optimizer',
				"title": 'AI SEO Optimizer Pro',
				"description": 'Advanced SEO optimization platform that analyzes competitors, suggests improvements, and tracks rankings automatically.',
				"category": 'Digital Marketing',
				"price": '$249',
				"billing": 'month',
				"features": ['Competitor analysis',
					'Keyword optimization',
					'Content suggestions',
					'Ranking tracking',
					'Technical SEO audit'
				],
				"ctaLabel": 'Optimize SEO',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'E-commerce Solutions',
		"slug": 'ecommerce-solutions',
		"items": [{
				id: 'ai-product-recommendation-engine',
				"title": 'AI Product Recommendation Engine',
				"description": 'Intelligent product recommendation system that increases conversion rates and average order value.',
				"category": 'E-commerce Solutions',
				"price": '$399',
				"billing": 'month',
				"features": [
					'Personalized recommendations',
					'Behavioral analysis',
					'A/B testing',
					'Real-time optimization',
					'Analytics dashboard'
				],
				"ctaLabel": 'Boost Sales',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'smart-inventory-optimizer',
				"title": 'Smart Inventory Optimizer',
				"description": 'AI-driven inventory optimization for e-commerce that reduces stockouts and overstock situations.',
				"category": 'E-commerce Solutions',
				"price": '$299',
				"billing": 'month',
				"features": ['Demand forecasting',
					'Stock level optimization',
					'Reorder automation',
					'Seasonal adjustments',
					'Cost optimization'
				],
				"ctaLabel": 'Optimize Inventory',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-customer-chatbot',
				"title": 'AI Customer Chatbot',
				"description": 'Intelligent chatbot that handles customer inquiries, provides product information, and processes orders.',
				"category": 'E-commerce Solutions',
				"price": '$199',
				"billing": 'month',
				"features": ['Natural language processing',
					'Product search assistance',
					'Order processing',
					'24/7 availability',
					'Human handoff'
				],
				"ctaLabel": 'Deploy Chatbot',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Remote Work Tools',
		"slug": 'remote-work-tools',
		"items": [{
				id: 'ai-meeting-assistant',
				"title": 'AI Meeting Assistant',
				"description": 'Intelligent meeting assistant that transcribes, summarizes, and extracts action items from virtual meetings.',
				"category": 'Remote Work Tools',
				"price": '$149',
				"billing": 'month',
				"features": [
					'Real-time transcription',
					'Meeting summarization',
					'Action item extraction',
					'Integration with calendar',
					'Searchable archives'
				],
				"ctaLabel": 'Assist Meetings',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'collaborative-project-manager',
				"title": 'Collaborative Project Manager',
				"description": 'AI-powered project management platform that optimizes team collaboration and project delivery.',
				"category": 'Remote Work Tools',
				"price": '$199',
				"billing": 'month',
				"features": ['Task automation',
					'Team collaboration',
					'Progress tracking',
					'Resource optimization',
					'Risk management'
				],
				"ctaLabel": 'Manage Projects',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'virtual-office-platform',
				"title": 'Virtual Office Platform',
				"description": 'Immersive virtual office environment for remote teams with AI-powered collaboration tools.',
				"category": 'Remote Work Tools',
				"price": '$299',
				"billing": 'month',
				"features": ['3D virtual spaces',
					'Real-time collaboration',
					'AI meeting rooms',
					'Team building activities',
					'Productivity analytics'
				],
				"ctaLabel": 'Create Virtual Office',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Legal Tech',
		"slug": 'legal-tech',
		"items": [{
				id: 'ai-contract-reviewer',
				"title": 'AI Contract Reviewer',
				"description": 'Advanced contract review system that identifies risks, suggests improvements, and ensures compliance.',
				"category": 'Legal Tech',
				"price": '$399',
				"billing": 'month',
				"features": [
					'Risk identification',
					'Compliance checking',
					'Clause analysis',
					'Version comparison',
					'Legal research integration'
				],
				"ctaLabel": 'Review Contracts',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'legal-research-assistant',
				"title": 'Legal Research Assistant',
				"description": 'AI-powered legal research platform that finds relevant cases, statutes, and legal precedents.',
				"category": 'Legal Tech',
				"price": '$299',
				"billing": 'month',
				"features": ['Case law search',
					'Statute analysis',
					'Precedent identification',
					'Citation management',
					'Research summaries'
				],
				"ctaLabel": 'Research Legal',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'compliance-monitoring-system',
				"title": 'Compliance Monitoring System',
				"description": 'Automated compliance monitoring that tracks regulatory changes and ensures adherence to legal requirements.',
				"category": 'Legal Tech',
				"price": '$499',
				"billing": 'month',
				"features": ['Regulatory tracking',
					'Compliance assessment',
					'Risk alerts',
					'Audit preparation',
					'Reporting automation'
				],
				"ctaLabel": 'Monitor Compliance',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'EdTech',
		"slug": 'edtech',
		"items": [{
				id: 'adaptive-learning-platform',
				"title": 'Adaptive Learning Platform',
				"description": 'AI-powered learning platform that adapts content and pace to individual student needs and learning styles.',
				"category": 'EdTech',
				"price": '$199',
				"billing": 'month',
				"features": [
					'Personalized learning paths',
					'Adaptive assessments',
					'Progress tracking',
					'Content recommendations',
					'Analytics dashboard'
				],
				"ctaLabel": 'Adapt Learning',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'virtual-reality-classroom',
				"title": 'Virtual Reality Classroom',
				"description": 'Immersive VR learning environment that creates engaging educational experiences for students.',
				"category": 'EdTech',
				"price": '$399',
				"billing": 'month',
				"features": ['3D learning environments',
					'Interactive simulations',
					'Multi-user collaboration',
					'Content creation tools',
					'Progress tracking'
				],
				"ctaLabel": 'Create VR Classroom',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'ai-tutor-assistant',
				"title": 'AI Tutor Assistant',
				"description": 'Intelligent tutoring system that provides personalized guidance and support to students.',
				"category": 'EdTech',
				"price": '$149',
				"billing": 'month',
				"features": ['Personalized tutoring',
					'Homework assistance',
					'Progress monitoring',
					'Parent communication',
					'Learning analytics'
				],
				"ctaLabel": 'Get AI Tutor',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Real Estate Tech',
		"slug": 'real-estate-tech',
		"items": [{
				id: 'ai-property-valuator',
				"title": 'AI Property Valuator',
				"description": 'Advanced property valuation system using AI to analyze market data and provide accurate property assessments.',
				"category": 'Real Estate Tech',
				"price": '$299',
				"billing": 'month',
				"features": [
					'Market analysis',
					'Property comparison',
					'Valuation algorithms',
					'Market trends',
					'Investment insights'
				],
				"ctaLabel": 'Value Property',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'virtual-property-tour',
				"title": 'Virtual Property Tour Platform',
				"description": 'Immersive virtual tour platform that allows potential buyers to explore properties remotely.',
				"category": 'Real Estate Tech',
				"price": '$199',
				"billing": 'month',
				"features": ['360-degree tours',
					'Interactive floor plans',
					'Virtual staging',
					'Lead generation',
					'Analytics dashboard'
				],
				"ctaLabel": 'Create Virtual Tours',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'smart-property-manager',
				"title": 'Smart Property Manager',
				"description": 'AI-powered property management system that optimizes operations and tenant satisfaction.',
				"category": 'Real Estate Tech',
				"price": '$399',
				"billing": 'month',
				"features": ['Maintenance scheduling',
					'Tenant communication',
					'Financial tracking',
					'Performance analytics',
					'Predictive maintenance'
				],
				"ctaLabel": 'Manage Properties',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Supply Chain Tech',
		"slug": 'supply-chain-tech',
		"items": [{
				id: 'ai-supply-chain-optimizer',
				"title": 'AI Supply Chain Optimizer',
				"description": 'Intelligent supply chain optimization platform that reduces costs and improves efficiency.',
				"category": 'Supply Chain Tech',
				"price": '$599',
				"billing": 'month',
				"features": [
					'Route optimization',
					'Inventory management',
					'Demand forecasting',
					'Cost analysis',
					'Risk assessment'
				],
				"ctaLabel": 'Optimize Supply Chain',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'blockchain-tracking-system',
				"title": 'Blockchain Tracking System',
				"description": 'Transparent supply chain tracking using blockchain technology for end-to-end visibility.',
				"category": 'Supply Chain Tech',
				"price": '$399',
				"billing": 'month',
				"features": ['End-to-end tracking',
					'Transparency',
					'Quality assurance',
					'Compliance reporting',
					'Stakeholder access'
				],
				"ctaLabel": 'Track Supply Chain',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'predictive-logistics',
				"title": 'Predictive Logistics Platform',
				"description": 'AI-powered logistics platform that predicts delays and optimizes delivery routes.',
				"category": 'Supply Chain Tech',
				"price": '$299',
				"billing": 'month',
				"features": ['Delay prediction',
					'Route optimization',
					'Real-time tracking',
					'Performance analytics',
					'Cost optimization'
				],
				"ctaLabel": 'Optimize Logistics',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Energy Tech',
		"slug": 'energy-tech',
		"items": [{
				id: 'smart-grid-optimizer',
				"title": 'Smart Grid Optimizer',
				"description": 'AI-powered smart grid optimization platform that improves energy distribution and reduces waste.',
				"category": 'Energy Tech',
				"price": '$799',
				"billing": 'month',
				"features": [
					'Grid optimization',
					'Demand response',
					'Energy storage',
					'Renewable integration',
					'Cost reduction'
				],
				"ctaLabel": 'Optimize Grid',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'renewable-energy-manager',
				"title": 'Renewable Energy Manager',
				"description": 'Comprehensive renewable energy management system for solar, wind, and hydroelectric power.',
				"category": 'Energy Tech',
				"price": '$499',
				"billing": 'month',
				"features": ['Energy production monitoring',
					'Storage optimization',
					'Grid integration',
					'Performance analytics',
					'Maintenance scheduling'
				],
				"ctaLabel": 'Manage Renewables',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'energy-efficiency-analyzer',
				"title": 'Energy Efficiency Analyzer',
				"description": 'AI-powered energy efficiency analysis that identifies optimization opportunities and tracks improvements.',
				"category": 'Energy Tech',
				"price": '$299',
				"billing": 'month',
				"features": ['Efficiency analysis',
					'Optimization recommendations',
					'Cost tracking',
					'Performance monitoring',
					'Sustainability reporting'
				],
				"ctaLabel": 'Analyze Efficiency',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Smart Cities',
		"slug": 'smart-cities',
		"items": [{
				id: 'traffic-optimization-system',
				"title": 'Traffic Optimization System',
				"description": 'AI-powered traffic management system that reduces congestion and improves urban mobility.',
				"category": 'Smart Cities',
				"price": '$999',
				"billing": 'month',
				"features": [
					'Real-time traffic monitoring',
					'Signal optimization',
					'Congestion prediction',
					'Public transport integration',
					'Environmental impact'
				],
				"ctaLabel": 'Optimize Traffic',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'smart-parking-platform',
				"title": 'Smart Parking Platform',
				"description": 'Intelligent parking management system that reduces search time and optimizes space utilization.',
				"category": 'Smart Cities',
				"price": '$399',
				"billing": 'month',
				"features": ['Space detection',
					'Mobile app integration',
					'Payment processing',
					'Analytics dashboard',
					'City integration'
				],
				"ctaLabel": 'Smart Parking',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'environmental-monitoring',
				"title": 'Environmental Monitoring System',
				"description": 'Comprehensive environmental monitoring platform for air quality, noise, and pollution tracking.',
				"category": 'Smart Cities',
				"price": '$599',
				"billing": 'month',
				"features": ['Air quality monitoring',
					'Noise pollution tracking',
					'Data visualization',
					'Alert system',
					'Regulatory compliance'
				],
				"ctaLabel": 'Monitor Environment',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'AgriTech',
		"slug": 'agritech',
		"items": [{
				id: 'precision-agriculture-platform',
				"title": 'Precision Agriculture Platform',
				"description": 'AI-powered precision agriculture system that optimizes crop yields and reduces resource waste.',
				"category": 'AgriTech',
				"price": '$499',
				"billing": 'month',
				"features": [
					'Soil analysis',
					'Crop monitoring',
					'Irrigation optimization',
					'Yield prediction',
					'Resource management'
				],
				"ctaLabel": 'Optimize Agriculture',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'drone-farming-system',
				"title": 'Drone Farming System',
				"description": 'Autonomous drone system for crop monitoring, spraying, and data collection in agriculture.',
				"category": 'AgriTech',
				"price": '$799',
				"billing": 'month',
				"features": ['Autonomous flight',
					'Crop monitoring',
					'Precision spraying',
					'Data collection',
					'Analytics platform'
				],
				"ctaLabel": 'Deploy Drones',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'livestock-monitoring',
				"title": 'Livestock Monitoring System',
				"description": 'AI-powered livestock monitoring system for health tracking and productivity optimization.',
				"category": 'AgriTech',
				"price": '$299',
				"billing": 'month',
				"features": ['Health monitoring',
					'Behavior analysis',
					'Productivity tracking',
					'Disease detection',
					'Breeding optimization'
				],
				"ctaLabel": 'Monitor Livestock',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Media & Entertainment',
		"slug": 'media-entertainment',
		"items": [{
				id: 'ai-content-creator',
				"title": 'AI Content Creator',
				"description": 'Advanced AI platform that generates creative content for media and entertainment industries.',
				"category": 'Media & Entertainment',
				"price": '$399',
				"billing": 'month',
				"features": [
					'Content generation',
					'Style customization',
					'Multi-format output',
					'Collaboration tools',
					'Quality assurance'
				],
				"ctaLabel": 'Create Content',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'personalized-streaming',
				"title": 'Personalized Streaming Platform',
				"description": 'AI-powered streaming platform that personalizes content recommendations and user experience.',
				"category": 'Media & Entertainment',
				"price": '$299',
				"billing": 'month',
				"features": ['Content personalization',
					'Recommendation engine',
					'User behavior analysis',
					'Content discovery',
					'Engagement optimization'
				],
				"ctaLabel": 'Personalize Streaming',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'virtual-production-studio',
				"title": 'Virtual Production Studio',
				"description": 'Immersive virtual production environment for film, TV, and digital content creation.',
				"category": 'Media & Entertainment',
				"price": '$1,999',
				"billing": 'month',
				"features": ['Virtual sets',
					'Real-time rendering',
					'Motion capture',
					'Collaborative editing',
					'Asset management'
				],
				"ctaLabel": 'Create Virtually',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Logistics Tech',
		"slug": 'logistics-tech',
		"items": [{
				id: 'autonomous-delivery-system',
				"title": 'Autonomous Delivery System',
				"description": 'AI-powered autonomous delivery system for last-mile logistics and package delivery.',
				"category": 'Logistics Tech',
				"price": '$899',
				"billing": 'month',
				"features": [
					'Route optimization',
					'Autonomous navigation',
					'Package tracking',
					'Delivery scheduling',
					'Customer notification'
				],
				"ctaLabel": 'Automate Delivery',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'warehouse-automation',
				"title": 'Warehouse Automation Platform',
				"description": 'Comprehensive warehouse automation system that optimizes operations and reduces costs.',
				"category": 'Logistics Tech',
				"price": '$699',
				"billing": 'month',
				"features": ['Robotic automation',
					'Inventory management',
					'Order fulfillment',
					'Performance analytics',
					'Maintenance scheduling'
				],
				"ctaLabel": 'Automate Warehouse',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'supply-chain-visibility',
				"title": 'Supply Chain Visibility Platform',
				"description": 'End-to-end supply chain visibility platform with real-time tracking and analytics.',
				"category": 'Logistics Tech',
				"price": '$399',
				"billing": 'month',
				"features": ['Real-time tracking',
					'Risk assessment',
					'Performance analytics',
					'Stakeholder collaboration',
					'Compliance reporting'
				],
				"ctaLabel": 'Track Supply Chain',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'HR Tech',
		"slug": 'hr-tech',
		"items": [{
				id: 'ai-recruitment-platform',
				"title": 'AI Recruitment Platform',
				"description": 'Intelligent recruitment platform that automates candidate screening and improves hiring efficiency.',
				"category": 'HR Tech',
				"price": '$299',
				"billing": 'month',
				"features": [
					'Resume screening',
					'Skill assessment',
					'Interview scheduling',
					'Candidate matching',
					'Analytics dashboard'
				],
				"ctaLabel": 'Recruit Smarter',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'employee-engagement-monitor',
				"title": 'Employee Engagement Monitor',
				"description": 'AI-powered employee engagement platform that tracks satisfaction and improves workplace culture.',
				"category": 'HR Tech',
				"price": '$199',
				"billing": 'month',
				"features": ['Engagement surveys',
					'Sentiment analysis',
					'Performance tracking',
					'Feedback management',
					'Action planning'
				],
				"ctaLabel": 'Monitor Engagement',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'learning-management-system',
				"title": 'AI Learning Management System',
				"description": 'Intelligent learning management system that personalizes training and tracks employee development.',
				"category": 'HR Tech',
				"price": '$249',
				"billing": 'month',
				"features": ['Personalized learning',
					'Skill assessment',
					'Progress tracking',
					'Content management',
					'Analytics reporting'
				],
				"ctaLabel": 'Manage Learning',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Sales Tech',
		"slug": 'sales-tech',
		"items": [{
				id: 'ai-sales-predictor',
				"title": 'AI Sales Predictor',
				"description": 'Advanced sales prediction platform that forecasts revenue and identifies growth opportunities.',
				"category": 'Sales Tech',
				"price": '$399',
				"billing": 'month',
				"features": [
					'Revenue forecasting',
					'Lead scoring',
					'Opportunity identification',
					'Performance analytics',
					'Growth insights'
				],
				"ctaLabel": 'Predict Sales',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'sales-automation-platform',
				"title": 'Sales Automation Platform',
				"description": 'Comprehensive sales automation platform that streamlines processes and increases productivity.',
				"category": 'Sales Tech',
				"price": '$299',
				"billing": 'month',
				"features": ['Lead management',
					'Email automation',
					'Meeting scheduling',
					'Pipeline tracking',
					'Performance analytics'
				],
				"ctaLabel": 'Automate Sales',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'customer-success-platform',
				"title": 'Customer Success Platform',
				"description": 'AI-powered customer success platform that improves retention and drives growth.',
				"category": 'Sales Tech',
				"price": '$249',
				"billing": 'month',
				"features": ['Customer health monitoring',
					'Success planning',
					'Retention analytics',
					'Upsell opportunities',
					'Churn prediction'
				],
				"ctaLabel": 'Succeed with Customers',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Customer Experience',
		"slug": 'customer-experience',
		"items": [{
				id: 'omnichannel-experience-platform',
				"title": 'Omnichannel Experience Platform',
				"description": 'Unified customer experience platform that provides seamless interactions across all channels.',
				"category": 'Customer Experience',
				"price": '$499',
				"billing": 'month',
				"features": [
					'Channel integration',
					'Customer journey mapping',
					'Personalization engine',
					'Analytics dashboard',
					'Performance optimization'
				],
				"ctaLabel": 'Unify Experience',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'sentiment-analysis-engine',
				"title": 'Sentiment Analysis Engine',
				"description": 'Advanced sentiment analysis platform that monitors customer feedback and improves satisfaction.',
				"category": 'Customer Experience',
				"price": '$199',
				"billing": 'month',
				"features": ['Real-time monitoring',
					'Multi-language support',
					'Trend analysis',
					'Alert system',
					'Action recommendations'
				],
				"ctaLabel": 'Analyze Sentiment',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'customer-feedback-automation',
				"title": 'Customer Feedback Automation',
				"description": 'Automated customer feedback collection and analysis system for continuous improvement.',
				"category": 'Customer Experience',
				"price": '$149',
				"billing": 'month',
				"features": ['Automated surveys',
					'Feedback analysis',
					'Response management',
					'Improvement tracking',
					'ROI measurement'
				],
				"ctaLabel": 'Automate Feedback',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	},
	{
		"name": 'Productivity Tools',
		"slug": 'productivity-tools',
		"items": [{
				id: 'ai-task-manager',
				"title": 'AI Task Manager',
				"description": 'Intelligent task management platform that prioritizes work and optimizes productivity.',
				"category": 'Productivity Tools',
				"price": '$99',
				"billing": 'month',
				"features": [
					'Smart prioritization',
					'Time tracking',
					'Progress monitoring',
					'Team collaboration',
					'Performance analytics'
				],
				"ctaLabel": 'Manage Tasks',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'workflow-automation-engine',
				"title": 'Workflow Automation Engine',
				"description": 'Powerful workflow automation platform that streamlines business processes and reduces manual work.',
				"category": 'Productivity Tools',
				"price": '$199',
				"billing": 'month',
				"features": ['Process automation',
					'Integration capabilities',
					'Workflow designer',
					'Performance monitoring',
					'Analytics dashboard'
				],
				"ctaLabel": 'Automate Workflows',
				"href": 'https://ziontechgroup.com/contact'
			},
			{
				"id": 'collaborative-workspace',
				"title": 'Collaborative Workspace Platform',
				"description": 'Advanced collaborative workspace that enhances team productivity and communication.',
				"category": 'Productivity Tools',
				"price": '$149',
				"billing": 'month',
				"features": ['Real-time collaboration',
					'Document sharing',
					'Communication tools',
					'Project management',
					'Analytics insights'
				],
				"ctaLabel": 'Collaborate Better',
				"href": 'https://ziontechgroup.com/contact'
			}
		]
	}
];
export type ServiceItem = { id: string; title: string; description: string; category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Digital Marketing' | 'E-commerce Solutions' | 'Remote Work Tools' | 'Legal Tech' | 'EdTech' | 'Real Estate Tech' | 'Supply Chain Tech' | 'Energy Tech' | 'Smart Cities' | 'AgriTech' | 'Media & Entertainment' | 'Logistics Tech' | 'HR Tech' | 'Sales Tech' | 'Customer Experience' | 'Productivity Tools'; price: string; billing: 'month' | 'project' | 'hour'; features: string[]; ctaLabel: string; href: string; external?: boolean}; export type ServiceCategory = { name: 'string; slug: string; items: ServiceItem[];' }; export const servicesCatalog: ServiceCategory[] = [ { name: 'Micro SaaS',slug: 'micro-saas',items: [ { id: 'pdf-render-api',title: 'PDF Render API',description: 'Reliable HTML-to-PDF rendering with templates,assets,async callbacks,and storage destinations.',category: 'Micro SaaS',price: '$29',billing: 'month',features: [ 'Chromium-based rendering','Templates and asset hosting','Async callbacks and webhooks','S3/GCS/Azure storage targets','Usage analytics and quotas' ],ctaLabel: 'Generate PDFs',href: 'https: },{ id: 'api-documentation-generator',title: 'API Documentation Generator',description: 'Turn OpenAPI/GraphQL schemas into beautiful,versioned docs with SDK snippets and search.',category: 'Micro SaaS',price: '$49',billing: 'month',features: [ 'Schema parsing (OAS/GraphQL)','SDK snippets and examples','Changelogs and versioning','Full-text search and themes','CI publish workflows' ],ctaLabel: 'Publish Docs',href: 'https: },{ id: 'smart-contract-risk-scanner',title: 'Smart Contract Risk Scanner',description: 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Real-time vulnerability detection','Automated security scoring','Compliance reporting','Integration with major blockchains','24/7 monitoring dashboard' ],ctaLabel: 'Start Free Trial',href: 'https: },{ id: 'ai-content-optimizer',title: 'AI Content Optimizer Pro',description: 'Advanced content optimization using AI to improve SEO,readability,and engagement across all digital platforms.',category: 'Micro SaaS',price: '$199',billing: 'month',features: [ 'AI-powered SEO optimization','Content readability scoring','Multi-language support','Performance analytics','Automated A/B testing' ],ctaLabel: 'Get Started',href: 'https: },{ id: 'quantum-workflow-automation',title: 'Quantum Workflow Automation',description: 'Next-generation workflow automation leveraging quantum computing principles for complex business process optimization.',category: 'Micro SaaS',price: '$499',billing: 'month',features: [ 'Quantum-inspired algorithms','Complex process modeling','Real-time optimization','Predictive analytics','Enterprise integration' ],ctaLabel: 'Schedule Demo',href: 'https: },{ id: 'edge-ai-inference-engine',title: 'Edge AI Inference Engine',description: 'Lightweight AI inference engine optimized for edge devices,enabling real-time AI processing without cloud dependency.',category: 'Micro SaaS',price: '$399',billing: 'month',features: [ 'Edge-optimized models','Low latency processing','Offline capability','Model compression','Cross-platform support' ],ctaLabel: 'Deploy Now',href: 'https: },{ id: 'autonomous-crm-optimizer',title: 'Autonomous CRM Optimizer',description: 'AI-powered CRM system that automatically optimizes customer relationships,sales processes,and marketing campaigns.',category: 'Micro SaaS',price: '$599',billing: 'month',features: [ 'Autonomous lead scoring','Predictive customer behavior','Automated follow-ups','Revenue optimization','Multi-channel integration' ],ctaLabel: 'Optimize CRM',href: 'https: },{ id: 'quantum-supply-chain-optimizer',title: 'Quantum Supply Chain Optimizer',description: 'Revolutionary supply chain optimization using quantum algorithms for complex logistics and inventory management.',category: 'Micro SaaS',price: '$799',billing: 'month',features: [ 'Quantum route optimization','Real-time inventory tracking','Predictive demand forecasting','Cost optimization','Risk assessment' ],ctaLabel: 'Optimize Supply Chain',href: 'https: },{ id: 'soc2-compliance-automation-saas',title: 'SOC 2 Compliance Automation SaaS',description: 'Automate evidence collection,policy mapping,and control monitoring to pass SOC 2 audits faster.',category: 'Micro SaaS',price: '$249',billing: 'month',features: [ 'Automated evidence collection','Control health dashboards','Policy templates & mapping','Integrations: 'AWS',GCP,Azure,Jira,GitHub','Audit-ready export' ],ctaLabel: 'Start Compliance',href: 'https: },{ id: 'mlops-observability',title: 'MLOps Observability & Drift Monitor',description: 'Track model performance,detect data drift,and automate retraining triggers with guardrails.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Latency,accuracy,bias metrics','Drift and anomaly alerts','Rollback and canary controls','Integration: 'SageMaker',Vertex AI,OpenAI','Compliance logging' ],ctaLabel: 'Monitor Models',href: 'https: },{ id: 'ai-video-content-generator',title: 'AI Video Content Generator',description: 'Generate professional videos from text,images,and audio using advanced AI models for marketing and training.',category: 'Micro SaaS',price: '$399',billing: 'month',features: [ 'Text-to-video generation','AI voice synthesis','Custom branding templates','Multi-format export','Collaborative editing' ],ctaLabel: 'Create Videos',href: 'https: },{ id: 'smart-invoice-processor',title: 'Smart Invoice Processor',description: 'AI-powered invoice processing that automatically extracts data,validates information,and integrates with accounting systems.',category: 'Micro SaaS',price: '$149',billing: 'month',features: [ 'OCR data extraction','Automated validation','ERP integration','Approval workflows','Fraud detection' ],ctaLabel: 'Process Invoices',href: 'https: },{ id: 'ai-customer-support-automation',title: 'AI Customer Support Automation',description: 'Intelligent customer support system that handles inquiries,escalates complex issues,and provides 24/7 assistance.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Natural language processing','Multi-language support','Knowledge base integration','Escalation workflows','Performance analytics' ],ctaLabel: 'Automate Support',href: 'https: },{ id: 'predictive-inventory-manager',title: 'Predictive Inventory Manager',description: 'AI-driven inventory management that predicts demand,optimizes stock levels,and reduces carrying costs.',category: 'Micro SaaS',price: '$199',billing: 'month',features: [ 'Demand forecasting','Stock optimization','Reorder automation','Supplier integration','Cost analysis' ],ctaLabel: 'Optimize Inventory',href: 'https: },{ id: 'ai-powered-email-marketing',title: 'AI-Powered Email Marketing Suite',description: 'Intelligent email marketing platform that personalizes content,optimizes send times,and maximizes engagement rates.',category: 'Micro SaaS',price: '$249',billing: 'month',features: [ 'AI content personalization','Optimal timing algorithms','A/B testing automation','Behavioral segmentation','ROI tracking' ],ctaLabel: 'Boost Engagement',href: 'https: } ,{ id: 'meeting-notes-copilot',title: 'AI Meeting Notes & Summaries',description: 'Auto-capture meetings,generate action items,and sync to CRM and project tools.',category: 'Micro SaaS',price: '$29',billing: 'month',features: [ 'Transcription and speaker diarization','Auto summaries and follow-ups','CRM/Jira/Asana sync','Multi-language support','Admin analytics' ],ctaLabel: 'Try Meeting Copilot',href: 'https: },{ id: 'smart-forms-intake',title: 'Smart Forms & Intake',description: 'Conditional logic,AI validation,and workflow routing to accelerate onboarding and lead capture.',category: 'Micro SaaS',price: '$99',billing: 'month',features: [ 'AI-powered form validation','Conditional logic and branching','Workflow automation','CRM integration','Analytics and insights' ],ctaLabel: 'Build Smart Forms',href: 'https: },{ id: 'ai-customer-success-platform',title: 'AI Customer Success Platform',description: 'Intelligent customer success platform that predicts churn,automates onboarding,and optimizes customer engagement.',category: 'Micro SaaS',price: '$1,499',billing: 'month',features: [ 'AI-powered churn prediction','Automated onboarding workflows','Customer health scoring','Personalized engagement campaigns','ROI tracking and analytics' ],ctaLabel: 'Optimize Customer Success',href: 'https: },{ id: 'ai-workflow-orchestrator',title: 'AI Workflow Orchestrator',description: 'Intelligent workflow automation platform that uses AI to optimize business processes and increase operational efficiency.',category: 'Micro SaaS',price: '$899',billing: 'month',features: [ 'AI-powered process optimization','Visual workflow builder','Intelligent task routing','Process mining and analytics','Integration with 100+ tools' ],ctaLabel: 'Automate Workflows',href: 'https: },{ id: 'ai-data-governance-platform',title: 'AI Data Governance Platform',description: 'Comprehensive data governance solution that uses AI to ensure data quality,compliance,and security.',category: 'Micro SaaS',price: '$2,499',billing: 'month',features: [ 'AI-powered data quality assessment','Automated compliance monitoring','Data lineage tracking','Privacy impact assessments','Custom governance policies' ],ctaLabel: 'Govern Your Data',href: 'https: },{ id: 'ai-cybersecurity-suite',title: 'AI Cybersecurity Suite',description: 'Advanced cybersecurity platform that uses AI to detect,prevent,and respond to cyber threats in real-time.',category: 'Micro SaaS',price: '$3,999',billing: 'month',features: [ 'AI-powered threat detection','Behavioral analytics','Automated incident response','Real-time monitoring','24/7 security operations' ],ctaLabel: 'Secure Your Business',href: 'https: },{ id: 'quantum-ai-platform',title: 'Quantum AI Platform',description: 'Revolutionary platform that combines quantum computing with AI to solve complex optimization problems.',category: 'Micro SaaS',price: '$5,999',billing: 'month',features: [ 'Quantum algorithm optimization','AI model acceleration','Hybrid quantum-classical computing','Real-time optimization','Quantum machine learning' ],ctaLabel: 'Explore Quantum AI',href: 'https: },{ id: 'ai-healthcare-analytics',title: 'AI Healthcare Analytics Platform',description: 'Advanced healthcare analytics platform that uses AI to improve patient outcomes and optimize operations.',category: 'Micro SaaS',price: '$3,499',billing: 'month',features: [ 'AI-powered patient analytics','Predictive health modeling','Clinical decision support','Population health management','HIPAA compliance' ],ctaLabel: 'Transform Healthcare',href: 'https: },{ id: 'edge-computing-platform',title: 'Edge Computing Platform',description: 'Next-generation edge computing platform that brings AI and computing power closer to data sources.',category: 'Micro SaaS',price: '$1,999',billing: 'month',features: [ 'Distributed edge computing','AI model deployment','Real-time data processing','Edge device management','Multi-cloud integration' ],ctaLabel: 'Deploy Edge AI',href: 'https: },{ id: 'ai-financial-trading-platform',title: 'AI Financial Trading Platform',description: 'Advanced financial trading platform that uses AI to analyze markets and execute trades automatically.',category: 'Micro SaaS',price: '$4,999',billing: 'month',features: [ 'AI-powered market analysis','Predictive trading algorithms','Real-time market data','Automated trade execution','Risk management' ],ctaLabel: 'Trade with AI',href: 'https: },{ id: 'ai-supply-chain-optimization',title: 'AI Supply Chain Optimization Platform',description: 'Intelligent supply chain platform that uses AI to optimize logistics and reduce costs.',category: 'Micro SaaS',price: '$2,999',billing: 'month',features: [ 'AI-powered demand forecasting','Route optimization','Inventory management','Supplier risk assessment','Real-time tracking' ],ctaLabel: 'Optimize Supply Chain',href: 'https: },{ id: 'ai-hr-platform',title: 'AI HR Platform',description: 'Comprehensive HR platform that uses AI to automate recruitment and optimize workforce management.',category: 'Micro SaaS',price: '$1,999',billing: 'month',features: [ 'AI-powered recruitment','Employee engagement analytics','Performance management','Learning and development','Workforce planning' ],ctaLabel: 'Transform HR',href: 'https: },{ id: 'ai-marketing-automation',title: 'AI Marketing Automation Platform',description: 'Intelligent marketing automation platform that uses AI to personalize campaigns and maximize ROI.',category: 'Micro SaaS',price: '$2,499',billing: 'month',features: [ 'AI-powered campaign optimization','Personalized content delivery','Multi-channel automation','Lead scoring and nurturing','ROI tracking and analytics' ],ctaLabel: 'Automate Marketing',href: 'https: },{ id: 'ai-legal-research-platform',title: 'AI Legal Research Platform',description: 'Advanced legal research platform that uses AI to analyze case law and automate legal research.',category: 'Micro SaaS',price: '$3,999',billing: 'month',features: [ 'AI-powered case analysis','Legal document review','Precedent identification','Legal research automation','Compliance monitoring' ],ctaLabel: 'Research with AI',href: 'https: },{ id: 'ai-education-platform',title: 'AI Education Platform',description: 'Intelligent education platform that uses AI to personalize learning experiences and optimize outcomes.',category: 'Micro SaaS',price: '$1,799',billing: 'month',features: [ 'AI-powered personalized learning','Adaptive learning paths','Student performance analytics','Content recommendation','Automated assessment' ],ctaLabel: 'Transform Education',href: 'https: },{ id: 'ai-project-management-platform',title: 'AI Project Management Platform',description: 'Intelligent project management platform that uses AI to optimize planning and resource allocation.',category: 'Micro SaaS',price: '$1,599',billing: 'month',features: [ 'AI-powered project planning','Resource optimization','Risk assessment','Team collaboration tools','Time tracking' ],ctaLabel: 'Manage Projects with AI',href: 'https: },{ id: 'ai-content-orchestrator',title: 'AI Content Orchestrator Pro',description: 'Enterprise-grade content management platform that uses AI to create,optimize,and distribute content.',category: 'Micro SaaS',price: '$4,999',billing: 'month',features: [ 'AI-powered content creation','Multi-channel distribution','Workflow automation','Content optimization','Analytics and insights' ],ctaLabel: 'Orchestrate Content',href: 'https: },{ id: 'ai-sales-automation-suite',title: 'AI Sales Automation Suite',description: 'Comprehensive sales automation platform that uses AI to optimize every stage of the sales funnel.',category: 'Micro SaaS',price: '$1,999',billing: 'month',features: [ 'AI-powered lead scoring','Automated email sequences','Sales call scheduling','CRM integration','Performance analytics' ],ctaLabel: 'Automate Sales',href: 'https: },{ id: 'ai-customer-support-platform',title: 'AI Customer Support Platform',description: 'Intelligent customer support platform that uses AI to provide instant responses and improve satisfaction.',category: 'Micro SaaS',price: '$1,499',billing: 'month',features: [ 'AI-powered chatbot','Ticket routing automation','Knowledge base management','Customer sentiment analysis','Multi-language support' ],ctaLabel: 'Support with AI',href: 'https: },{ id: 'ai-financial-analytics-platform',title: 'AI Financial Analytics Platform',description: 'Advanced financial analytics platform that uses AI to provide real-time insights and risk assessment.',category: 'Micro SaaS',price: '$2,499',billing: 'month',features: [ 'Real-time financial monitoring','AI-powered risk assessment','Predictive financial modeling','Custom dashboard creation','Compliance reporting' ],ctaLabel: 'Analyze Finances',href: 'https: },{ id: 'ai-learning-management-system',title: 'AI Learning Management System',description: 'Intelligent learning platform that uses AI to personalize learning experiences and track progress.',category: 'Micro SaaS',price: '$1,299',billing: 'month',features: [ 'AI-powered content recommendations','Personalized learning paths','Progress tracking','Assessment automation','Multi-format content support' ],ctaLabel: 'Learn with AI',href: 'https: },{ id: 'ai-legal-document-automation',title: 'AI Legal Document Automation Platform',description: 'Intelligent legal platform that uses AI to automate document creation and contract analysis.',category: 'Micro SaaS',price: '$2,199',billing: 'month',features: [ 'AI-powered document generation','Contract analysis','Legal research automation','Compliance checking','Document templates' ],ctaLabel: 'Automate Legal Docs',href: 'https: } ] },{ name: 'AI Solutions',slug: 'ai-solutions',items: [ { id: 'ai-business-intelligence',title: 'AI Business Intelligence Platform',description: 'Next-generation BI platform that uses AI to automatically analyze data and generate actionable insights.',category: 'AI Solutions',price: '$2,999',billing: 'month',features: [ 'AI-powered data analysis','Automated insight generation','Natural language queries','Predictive analytics','Custom dashboard creation' ],ctaLabel: 'Get AI Insights',href: 'https: },{ id: 'ai-sales-copilot',title: 'AI Sales Copilot',description: 'Intelligent sales assistant that automates lead scoring,follow-ups,and sales process optimization.',category: 'AI Solutions',price: '$1,299',billing: 'month',features: [ 'AI-powered lead scoring','Automated follow-up sequences','Sales performance analytics','CRM integration','Predictive sales forecasting' ],ctaLabel: 'Boost Sales with AI',href: 'https: },{ id: 'ai-compliance-assistant',title: 'AI Compliance Assistant',description: 'Automated compliance monitoring and reporting using AI to ensure regulatory adherence.',category: 'AI Solutions',price: '$1,999',billing: 'month',features: [ 'Automated compliance monitoring','Regulatory change tracking','Risk assessment','Compliance reporting','Audit trail management' ],ctaLabel: 'Ensure Compliance',href: 'https: },{ id: 'ai-auto-email-responder',title: 'AI Auto Email Responder',description: 'Intelligent email automation that responds to customer inquiries and manages communication workflows.',category: 'AI Solutions',price: '$799',billing: 'month',features: [ 'AI-powered email responses','Natural language processing','Workflow automation','CRM integration','Performance analytics' ],ctaLabel: 'Automate Email',href: 'https: },{ id: 'ai-content-studio',title: 'LLM Content Studio',description: 'AI-powered content creation platform that generates high-quality,on-brand content for all channels.',category: 'AI Solutions',price: '$1,499',billing: 'month',features: [ 'AI content generation','Brand voice consistency','Multi-format support','SEO optimization','Content analytics' ],ctaLabel: 'Create with AI',href: 'https: },{ id: 'ai-finops-advisor',title: 'FinOps Advisor',description: 'AI-powered financial operations optimization for cloud cost management and resource allocation.',category: 'AI Solutions',price: '$1,799',billing: 'month',features: [ 'Cloud cost optimization','Resource allocation analysis','Cost forecasting','Budget management','ROI optimization' ],ctaLabel: 'Optimize FinOps',href: 'https: },{ id: 'ai-lead-scoring',title: 'AI Lead Scoring Platform',description: 'Intelligent lead scoring using machine learning to prioritize sales opportunities and improve conversion rates.',category: 'AI Solutions',price: '$899',billing: 'month',features: [ 'ML-powered lead scoring','Behavioral analysis','Conversion prediction','CRM integration','Performance tracking' ],ctaLabel: 'Score Leads with AI',href: 'https: },{ id: 'ai-chatbot',title: 'Website AI Chatbot',description: 'Intelligent chatbot that provides 24/7 customer support and improves user engagement on your website.',category: 'AI Solutions',price: '$599',billing: 'month',features: [ 'Natural language processing','24/7 availability','Multi-language support','CRM integration','Conversation analytics' ],ctaLabel: 'Add AI Chatbot',href: 'https: },{ id: 'ai-rag-search',title: 'RAG Search Platform',description: 'AI-powered search with retrieval-augmented generation for accurate,contextual answers with citations.',category: 'AI Solutions',price: '$1,299',billing: 'month',features: [ 'Retrieval-augmented generation','Contextual search','Citation tracking','Knowledge base integration','Search analytics' ],ctaLabel: 'Implement RAG Search',href: 'https: },{ id: 'ai-mlops',title: 'MLOps Pipeline Platform',description: 'End-to-end machine learning operations platform for model development,deployment,and monitoring.',category: 'AI Solutions',price: '$2,499',billing: 'month',features: [ 'Model development pipeline','Automated deployment','Performance monitoring','Model versioning','Drift detection' ],ctaLabel: 'Deploy MLOps',href: 'https: },{ id: 'ai-ecommerce-personalization',title: 'AI E-commerce Personalization',description: 'Intelligent product recommendations and personalized shopping experiences to boost conversion rates.',category: 'AI Solutions',price: '$1,199',billing: 'month',features: [ 'Product recommendations','Personalized search','Dynamic pricing','Customer segmentation','Conversion optimization' ],ctaLabel: 'Personalize Shopping',href: 'https: },{ id: 'ai-returns-management',title: 'AI Returns Management SaaS',description: 'Intelligent returns processing and fraud detection to streamline operations and reduce costs.',category: 'AI Solutions',price: '$899',billing: 'month',features: [ 'Automated returns processing','Fraud detection','Return analytics','Customer self-service','Integration with e-commerce platforms' ],ctaLabel: 'Manage Returns with AI',href: 'https: },{ id: 'ai-vendor-risk',title: 'AI Vendor Risk Management',description: 'Intelligent vendor risk assessment and monitoring using AI to ensure supply chain security.',category: 'AI Solutions',price: '$1,599',billing: 'month',features: [ 'AI-powered risk assessment','Continuous monitoring','Compliance tracking','Risk scoring','Automated alerts' ],ctaLabel: 'Manage Vendor Risk',href: 'https: },{ id: 'ai-seo-optimizer',title: 'AI SEO Optimizer',description: 'AI-powered SEO optimization that improves search rankings and drives organic traffic growth.',category: 'AI Solutions',price: '$799',billing: 'month',features: [ 'Keyword optimization','Content analysis','Technical SEO audit','Competitor analysis','Performance tracking' ],ctaLabel: 'Optimize SEO with AI',href: 'https: },{ id: 'ai-churn-predictor',title: 'AI Churn Predictor',description: 'Predict customer churn using machine learning and implement proactive retention strategies.',category: 'AI Solutions',price: '$1,099',billing: 'month',features: [ 'Churn prediction models','Risk scoring','Retention strategies','Customer segmentation','Intervention recommendations' ],ctaLabel: 'Predict Churn',href: 'https: },{ id: 'ai-incident-postmortems',title: 'AI Incident Postmortems',description: 'Automated incident analysis and postmortem generation for improved incident response and learning.',category: 'AI Solutions',price: '$699',billing: 'month',features: [ 'Automated incident analysis','Root cause identification','Postmortem generation','Knowledge base updates','Team learning insights' ],ctaLabel: 'Analyze Incidents',href: 'https: },{ id: 'ai-api-monitoring',title: 'AI API Monitoring SaaS',description: 'Intelligent API monitoring and performance optimization using AI for proactive issue detection.',category: 'AI Solutions',price: '$599',billing: 'month',features: [ 'Real-time API monitoring','Performance anomaly detection','Automated alerting','Performance optimization','Uptime tracking' ],ctaLabel: 'Monitor APIs with AI',href: 'https: },{ id: 'ai-gdpr-compliance',title: 'AI GDPR Cookie Compliance',description: 'Automated GDPR compliance management with intelligent cookie consent and data protection.',category: 'AI Solutions',price: '$399',billing: 'month',features: [ 'Cookie consent management','Data protection compliance','Privacy policy automation','Consent analytics','Regulatory updates' ],ctaLabel: 'Ensure GDPR Compliance',href: 'https: },{ id: 'ai-proofreading',title: 'AI Proofreading Studio',description: 'Advanced proofreading and editing using AI to improve content quality and readability.',category: 'AI Solutions',price: '$299',billing: 'month',features: [ 'AI-powered proofreading','Grammar and style checking','Content optimization','Multi-language support','Quality scoring' ],ctaLabel: 'Proofread with AI',href: 'https: },{ id: 'ai-customer-feedback',title: 'AI Customer Feedback Surveys',description: 'Intelligent feedback collection and analysis using AI to improve customer satisfaction and product development.',category: 'AI Solutions',price: '$499',billing: 'month',features: [ 'AI-powered survey design','Sentiment analysis','Feedback categorization','Actionable insights','Integration with CRM systems' ],ctaLabel: 'Collect Feedback with AI',href: 'https: },{ id: 'ai-meeting-notes',title: 'AI Meeting Notes & Summaries',description: 'Automated meeting transcription,summarization,and action item extraction using AI.',category: 'AI Solutions',price: '$299',billing: 'month',features: [ 'Automated transcription','AI summarization','Action item extraction','CRM integration','Meeting analytics' ],ctaLabel: 'Automate Meeting Notes',href: 'https: },{ id: 'ai-smart-forms',title: 'AI Smart Forms & Intake',description: 'Intelligent form processing with AI validation,conditional logic,and workflow automation.',category: 'AI Solutions',price: '$199',billing: 'month',features: [ 'AI-powered validation','Conditional logic','Workflow automation','Data extraction','Analytics and insights' ],ctaLabel: 'Build Smart Forms',href: 'https: },{ id: 'ai-customer-success',title: 'AI Customer Success Platform',description: 'Comprehensive customer success platform using AI to predict churn and optimize customer engagement.',category: 'AI Solutions',price: '$1,499',billing: 'month',features: [ 'Churn prediction','Customer health scoring','Engagement optimization','Success milestone tracking','ROI analytics' ],ctaLabel: 'Optimize Customer Success',href: 'https: },{ id: 'ai-workflow-orchestrator',title: 'AI Workflow Orchestrator',description: 'Intelligent workflow automation platform that uses AI to optimize business processes and increase efficiency.',category: 'AI Solutions',price: '$899',billing: 'month',features: [ 'AI-powered process optimization','Visual workflow builder','Intelligent task routing','Process mining','Performance analytics' ],ctaLabel: 'Automate Workflows',href: 'https: },{ id: 'ai-data-governance',title: 'AI Data Governance Platform',description: 'Comprehensive data governance solution using AI to ensure data quality,compliance,and security.',category: 'AI Solutions',price: '$2,499',billing: 'month',features: [ 'AI-powered data quality','Compliance monitoring','Data lineage tracking','Privacy impact assessment','Governance policies' ],ctaLabel: 'Govern Your Data',href: 'https: } ] },{ name: 'IT Services',slug: 'it-services',items: [ { id: 'cloud-migration-consulting',title: 'Cloud Migration Consulting',description: 'Expert guidance for migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',category: 'IT Services',price: '$150',billing: 'hour',features: [ 'Cloud readiness assessment','Migration strategy planning','Cost optimization analysis','Security and compliance review','Post-migration support' ],ctaLabel: 'Start Migration',href: 'https: },{ id: 'cybersecurity-audit',title: 'Cybersecurity Audit & Assessment',description: 'Comprehensive security assessment to identify vulnerabilities and strengthen your cybersecurity posture.',category: 'IT Services',price: '$5,000',billing: 'project',features: [ 'Vulnerability assessment','Penetration testing','Security policy review','Compliance gap analysis','Remediation roadmap' ],ctaLabel: 'Secure Your Business',href: 'https: },{ id: 'network-infrastructure-design',title: 'Network Infrastructure Design',description: 'Custom network architecture design for optimal performance,security,and scalability.',category: 'IT Services',price: '$8,000',billing: 'project',features: [ 'Network topology design','Security architecture','Performance optimization','Scalability planning','Implementation support' ],ctaLabel: 'Design Network',href: 'https: },{ id: 'data-backup-recovery',title: 'Data Backup & Disaster Recovery',description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',category: 'IT Services',price: '$2,500',billing: 'month',features: [ 'Automated backup systems','Disaster recovery planning','Regular testing and validation','24/7 monitoring','Quick recovery solutions' ],ctaLabel: 'Protect Your Data',href: 'https: },{ id: 'it-project-management',title: 'IT Project Management',description: 'Professional project management services for complex IT implementations and digital transformations.',category: 'IT Services',price: '$125',billing: 'hour',features: [ 'Project planning and scheduling','Risk management','Stakeholder communication','Progress tracking','Quality assurance' ],ctaLabel: 'Manage IT Projects',href: 'https: },{ id: 'system-integration',title: 'System Integration Services',description: 'Seamless integration of disparate systems to improve data flow and operational efficiency.',category: 'IT Services',price: '$175',billing: 'hour',features: [ 'API development and integration','Data mapping and transformation','Workflow automation','Testing and validation','Ongoing support' ],ctaLabel: 'Integrate Systems',href: 'https: },{ id: 'it-consulting',title: 'Strategic IT Consulting',description: 'Strategic guidance to align your technology investments with business objectives and growth plans.',category: 'IT Services',price: '$200',billing: 'hour',features: [ 'Technology strategy development','Digital transformation planning','Technology roadmap creation','Vendor selection assistance','ROI analysis' ],ctaLabel: 'Get IT Strategy',href: 'https: },{ id: 'managed-it-services',title: 'Managed IT Services',description: 'Comprehensive IT management including monitoring,maintenance,and support for your technology infrastructure.',category: 'IT Services',price: '$3,500',billing: 'month',features: [ '24/7 monitoring and support','Proactive maintenance','Security management','Backup and recovery','Help desk support' ],ctaLabel: 'Manage IT Infrastructure',href: 'https: },{ id: 'software-development',title: 'Custom Software Development',description: 'Tailored software solutions designed to meet your specific business requirements and workflows.',category: 'IT Services',price: '$100',billing: 'hour',features: [ 'Requirements analysis','Custom development','Testing and quality assurance','Deployment and training','Maintenance and support' ],ctaLabel: 'Develop Custom Software',href: 'https: },{ id: 'data-analytics-implementation',title: 'Data Analytics Implementation',description: 'Implementation of data analytics solutions to transform raw data into actionable business insights.',category: 'IT Services',price: '$15,000',billing: 'project',features: [ 'Data warehouse design','ETL pipeline development','Dashboard creation','User training','Ongoing optimization' ],ctaLabel: 'Implement Analytics',href: 'https: },{ id: 'devops-implementation',title: 'DevOps Implementation',description: 'Implementation of DevOps practices to accelerate software delivery and improve operational efficiency.',category: 'IT Services',price: '$12,000',billing: 'project',features: [ 'CI/CD pipeline setup','Infrastructure as code','Monitoring and logging','Team training','Process optimization' ],ctaLabel: 'Implement DevOps',href: 'https: },{ id: 'cloud-optimization',title: 'Cloud Cost Optimization',description: 'Optimize your cloud infrastructure to reduce costs while maintaining performance and reliability.',category: 'IT Services',price: '$3,000',billing: 'project',features: [ 'Cost analysis and audit','Resource optimization','Reserved instance planning','Performance tuning','Cost monitoring setup' ],ctaLabel: 'Optimize Cloud Costs',href: 'https: },{ id: 'security-compliance',title: 'Security Compliance Services',description: 'Achieve and maintain compliance with industry standards like SOC 2,ISO 27001,and GDPR.',category: 'IT Services',price: '$7,500',billing: 'project',features: [ 'Compliance gap analysis','Policy and procedure development','Security control implementation','Audit preparation','Ongoing compliance monitoring' ],ctaLabel: 'Achieve Compliance',href: 'https: },{ id: 'business-continuity',title: 'Business Continuity Planning',description: 'Comprehensive business continuity and disaster recovery planning to ensure operational resilience.',category: 'IT Services',price: '$10,000',billing: 'project',features: [ 'Business impact analysis','Recovery strategy development','Plan documentation','Testing and validation','Staff training' ],ctaLabel: 'Plan Continuity',href: 'https: },{ id: 'it-training',title: 'IT Training & Certification',description: 'Comprehensive training programs to enhance your team\'s technical skills and knowledge.',category: 'IT Services',price: '$2,000',billing: 'day',features: [ 'Customized training programs','Hands-on workshops','Certification preparation','Ongoing support','Progress tracking' ],ctaLabel: 'Train Your Team',href: 'https: },{ id: 'vendor-management',title: 'IT Vendor Management',description: 'Strategic vendor management to optimize costs,improve service quality,and reduce risks.',category: 'IT Services',price: '$150',billing: 'hour',features: [ 'Vendor assessment and selection','Contract negotiation','Performance monitoring','Relationship management','Cost optimization' ],ctaLabel: 'Manage Vendors',href: 'https: },{ id: 'digital-transformation',title: 'Digital Transformation Consulting',description: 'End-to-end digital transformation services to modernize your business operations and technology stack.',category: 'IT Services',price: '$25,000',billing: 'project',features: [ 'Digital maturity assessment','Transformation roadmap','Technology modernization','Change management','Success measurement' ],ctaLabel: 'Transform Digitally',href: 'https: },{ id: 'it-audit',title: 'IT Audit & Assessment',description: 'Comprehensive IT audit to evaluate your technology infrastructure,processes,and controls.',category: 'IT Services',price: '$8,000',billing: 'project',features: [ 'Infrastructure assessment','Process evaluation','Control testing','Risk identification','Recommendation report' ],ctaLabel: 'Audit IT Infrastructure',href: 'https: },{ id: 'performance-tuning',title: 'Performance Tuning & Optimization',description: 'Optimize your systems and applications for maximum performance and efficiency.',category: 'IT Services',price: '$125',billing: 'hour',features: [ 'Performance analysis','Bottleneck identification','Optimization implementation','Testing and validation','Performance monitoring' ],ctaLabel: 'Optimize Performance',href: 'https: },{ id: 'data-migration',title: 'Data Migration Services',description: 'Secure and efficient data migration between systems with minimal downtime and data loss.',category: 'IT Services',price: '$5,000',billing: 'project',features: [ 'Data mapping and analysis','Migration planning','Data validation','Rollback procedures','Post-migration verification' ],ctaLabel: 'Migrate Data',href: 'https: } ] },{ name: 'Cybersecurity',slug: 'cybersecurity',items: [ { id: 'm365-security-hardening-kit',title: 'M365 Security Hardening Kit',description: 'Baseline hardening,drift detection,and auto-remediation for Microsoft 365 tenants with executive reporting.',category: 'Cybersecurity',price: '$199',billing: 'month',features: [ 'Secure baseline as code','Misconfiguration detection','Auto-remediation playbooks','Graph API integrations','Compliance-ready reports' ],ctaLabel: 'Harden M365',href: 'https: },{ id: 'ai-threat-intelligence',title: 'AI Threat Intelligence Suite',description: 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',category: 'Cybersecurity',price: '$3,999',billing: 'month',features: [ 'AI threat detection','Behavioral analysis','Automated response','Threat hunting','Incident management' ],ctaLabel: 'Security Demo',href: 'https: },{ id: 'quantum-cryptography',title: 'Quantum Cryptography Solutions',description: 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.',category: 'Cybersecurity',price: '$12,000',billing: 'project',features: [ 'Quantum key distribution','Post-quantum crypto','Secure communication','Key management','Compliance ready' ],ctaLabel: 'Quantum Security',href: 'https: } ,{ id: 'managed-detection-response',title: 'Managed Detection & Response (MDR)',description: '24/7 monitoring,threat hunting,and incident response with SIEM/SOAR integration.',category: 'Cybersecurity',price: '$3,499',billing: 'month',features: [ 'SIEM setup and tuning','Playbooks and automation','Phishing and EDR integration','Compliance-ready reporting','Incident response retainers' ],ctaLabel: 'Activate MDR',href: 'https: },{ id: 'sase-rollout',title: 'Secure Access Service Edge (SASE) Rollout',description: 'Consolidate network and security with ZTNA,SWG,CASB,and SD-WAN.',category: 'Cybersecurity',price: '$20,000',billing: 'project',features: [ 'Architecture and vendor selection','Pilot and phased migration','Policy baselines','User experience optimization','Runbooks and training' ],ctaLabel: 'Deploy SASE',href: 'https: } ] },{ name: 'Data & Analytics',slug: 'data-analytics',items: [ { id: 'synthetic-data-generator',title: 'Synthetic Data Generator',description: 'Privacy-safe synthetic tabular/time-series/text data with utility/drift reports and DP options.',category: 'Data & Analytics',price: '$119',billing: 'month',features: [ 'Differential privacy & masking','Tabular/time-series/text modes','Utility and drift reports','APIs and SDKs','S3/Snowflake/BigQuery connectors' ],ctaLabel: 'Generate Data',href: 'https: },{ id: 'quantum-data-analytics',title: 'Quantum Data Analytics Platform',description: 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',category: 'Data & Analytics',price: '$6,999',billing: 'month',features: [ 'Quantum pattern recognition','Complex data modeling','Real-time insights','Predictive analytics','Visualization tools' ],ctaLabel: 'Analytics Demo',href: 'https: },{ id: 'ai-business-intelligence',title: 'AI Business Intelligence Suite',description: 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.',category: 'Data & Analytics',price: '$2,499',billing: 'month',features: [ 'Automated insights','Natural language queries','Predictive modeling','Custom dashboards','Data integration' ],ctaLabel: 'BI Assessment',href: 'https: } ,{ id: 'data-quality-observability',title: 'Data Quality & Observability',description: 'Monitor freshness,completeness,and lineage to trust your analytics and AI.',category: 'Data & Analytics',price: '$1,499',billing: 'month',features: [ 'Column-level lineage','Great Expectations policies','Alerting and incident Mgmt','Connectors: 'Snowflake',BigQuery,Databricks','Root-cause analysis' ],ctaLabel: 'Improve Data Trust',href: 'https: },{ id: 'modern-etl-migration',title: 'Modern ETL/ELT Migration',description: 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.',category: 'Data & Analytics',price: '$18,000',billing: 'project',features: [ 'dbt modeling and tests','Incremental loads','CI for analytics','Cost-efficient storage','Knowledge transfer' ],ctaLabel: 'Migrate Workloads',href: 'https: } ] },{ name: 'Cloud & DevOps',slug: 'cloud-devops',items: [ { id: 'uptime-slo-monitor',title: 'Uptime & SLO Monitor',description: 'Multi-region synthetic checks with SLO dashboards,error budgets,and burn rate alerts.',category: 'Cloud & DevOps',price: '$49',billing: 'month',features: [ 'Multi-region probes','SLO calculation and burn rates','Error budget policy','Alerts and dashboards','CI/CD release gates' ],ctaLabel: 'Monitor Reliability',href: 'https: },{ id: 'kubernetes-cost-analyzer',title: 'Kubernetes Cost Analyzer',description: 'Allocation,rightsizing,and bin‑packing insights by team/namespace with chargeback reports.',category: 'Cloud & DevOps',price: '$99',billing: 'month',features: [ 'Cost allocation by namespace/team','Requests/limits advisor','Bin‑packing recommendations','Chargeback/showback reports','Slack/Grafana integrations' ],ctaLabel: 'Cut K8s Spend',href: 'https: },{ id: 'autonomous-devops-platform',title: 'Autonomous DevOps Platform',description: 'Self-managing DevOps platform that automatically optimizes deployments,scaling,and infrastructure management.',category: 'Cloud & DevOps',price: '$4,999',billing: 'month',features: [ 'Automated deployments','Self-healing infrastructure','Performance optimization','Cost management','Continuous monitoring' ],ctaLabel: 'DevOps Demo',href: 'https: },{ id: 'quantum-cloud-infrastructure',title: 'Quantum Cloud Infrastructure',description: 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.',category: 'Cloud & DevOps',price: '$18,000',billing: 'project',features: [ 'Quantum cloud services','Hybrid infrastructure','Quantum optimization','Scalable architecture','Enterprise support' ],ctaLabel: 'Cloud Migration',href: 'https: } ,{ id: 'serverless-application-factory',title: 'Serverless Application Factory',description: 'Blueprints and accelerators to build secure,low-cost serverless backends fast.',category: 'Cloud & DevOps',price: '$16,000',billing: 'project',features: [ 'Patterns: EventBridge,Step Functions','IaC with CDK/Terraform','Observability baked-in','SECaaS and guardrails','Cost-efficiency targets' ],ctaLabel: 'Build Serverless',href: 'https: },{ id: 'disaster-recovery-blueprints',title: 'Disaster Recovery Blueprints (RTO/RPO)',description: 'Design and test DR strategies with automated failover and periodic game days.',category: 'Cloud & DevOps',price: '$20,000',billing: 'project',features: [ 'Multi-region architectures','Automated chaos tests','Backup and restore pipelines','Compliance documentation','Executive tabletop exercises' ],ctaLabel: 'Harden Resilience',href: 'https: } ] },{ name: 'Quantum Computing',slug: 'quantum-computing',items: [ { id: 'quantum-financial-trading',title: 'Quantum Financial Trading Platform',description: 'Revolutionary trading platform using quantum algorithms for portfolio optimization and risk assessment.',category: 'Quantum Computing',price: '$25,000',billing: 'month',features: [ 'Quantum portfolio optimization','Risk modeling','Real-time trading','Compliance tools','Performance analytics' ],ctaLabel: 'Trading Demo',href: 'https: },{ id: 'quantum-drug-discovery',title: 'Quantum Drug Discovery Platform',description: 'Advanced drug discovery platform leveraging quantum computing for molecular modeling and drug design.',category: 'Quantum Computing',price: '$45,000',billing: 'month',features: [ 'Quantum molecular modeling','Drug design algorithms','Clinical trial optimization','Research collaboration','Regulatory support' ],ctaLabel: 'Research Access',href: 'https: } ] },{ name: 'Blockchain & Web3',slug: 'blockchain-web3',items: [ { id: 'decentralized-ai-marketplace',title: 'Decentralized AI Marketplace',description: 'Web3-powered marketplace for AI models,data,and computational resources with blockchain-based governance.',category: 'Blockchain & Web3',price: '$1,999',billing: 'month',features: [ 'AI model marketplace','Decentralized governance','Smart contracts','Token economics','Community-driven' ],ctaLabel: 'Marketplace Access',href: 'https: },{ id: 'quantum-blockchain-platform',title: 'Quantum Blockchain Platform',description: 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.',category: 'Blockchain & Web3',price: '$8,999',billing: 'month',features: [ 'Quantum-resistant crypto','Enhanced consensus','Scalable architecture','Interoperability','Enterprise features' ],ctaLabel: 'Blockchain Demo',href: 'https: } ] },{ name: 'IoT & Edge',slug: 'iot-edge',items: [ { id: 'quantum-iot-platform',title: 'Quantum IoT Platform',description: 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',category: 'IoT & Edge',price: '$3,999',billing: 'month',features: [ 'Quantum edge processing','Device optimization','Intelligent routing','Energy efficiency','Scalable deployment' ],ctaLabel: 'IoT Demo',href: 'https: },{ id: 'autonomous-edge-ai',title: 'Autonomous Edge AI Platform',description: 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.',category: 'IoT & Edge',price: '$2,999',billing: 'month',features: [ 'Autonomous optimization','Edge AI processing','Network intelligence','Resource management','Performance monitoring' ],ctaLabel: 'Edge AI Demo',href: 'https: } ,{ id: 'predictive-maintenance-iot',title: 'Predictive Maintenance for IoT Fleets',description: 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',category: 'IoT & Edge',price: '$2,499',billing: 'month',features: [ 'Edge telemetry ingestion','ML failure prediction','Work order integration (EAM/CMMS)','Kitting and rollout playbooks','Dashboards and alerts' ],ctaLabel: 'Reduce Downtime',href: 'https: },{ id: 'digital-twin-starter',title: 'Digital Twin Starter Kit',description: 'Model physical systems with twins to simulate scenarios and optimize operations.',category: 'IoT & Edge',price: '$14,000',billing: 'project',features: [ '3D/graph models','Stream processing','Integration with PLC/SCADA','KPI definition and alerts','Pilot-to-production plan' ],ctaLabel: 'Build a Twin',href: 'https: } ] },{ name: 'Green Tech',slug: 'green-tech',items: [ { id: 'quantum-energy-optimization',title: 'Quantum Energy Optimization',description: 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',category: 'Green Tech',price: '$12,000',billing: 'month',features: [ 'Quantum energy modeling','Renewable optimization','Grid management','Carbon tracking','Sustainability reporting' ],ctaLabel: 'Energy Assessment',href: 'https: },{ id: 'ai-climate-prediction',title: 'AI Climate Prediction Platform',description: 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.',category: 'Green Tech',price: '$7,999',billing: 'month',features: [ 'AI climate modeling','Quantum simulations','Real-time predictions','Risk assessment','Policy recommendations' ],ctaLabel: 'Climate Demo',href: 'https: } ,{ id: 'carbon-accounting-saas',title: 'Carbon Accounting & ESG Reporting',description: 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',category: 'Green Tech',price: '$999',billing: 'month',features: [ 'GHG Protocol-aligned factors','Automated data pipelines','Supplier questionnaires','Assurance-ready exports','Target tracking (SBTi)' ],ctaLabel: 'Start ESG Tracking',href: 'https: } ] },{ name: 'Space Tech',slug: 'space-tech',items: [ { id: 'satellite-ai-orchestrator',title: 'Satellite AI Orchestrator',description: 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',category: 'Space Tech',price: '$15,000',billing: 'month',features: [ 'Autonomous orbital optimization','AI-powered data analysis','Real-time monitoring','Collision avoidance','Global coverage' ],ctaLabel: 'Launch Satellites',href: 'https: },{ id: 'quantum-space-communications',title: 'Quantum Space Communications',description: 'Next-generation quantum communication system for secure,ultra-fast data transmission between Earth and space.',category: 'Space Tech',price: '$25,000',billing: 'month',features: [ 'Quantum entanglement','Unhackable encryption','Light-speed transmission','Deep space coverage','Interplanetary network' ],ctaLabel: 'Connect Space',href: 'https: } ,{ id: 'satellite-imagery-analytics',title: 'Satellite Imagery Analytics',description: 'Computer vision on multi-spectral imagery for agriculture,insurance,and defense insights.',category: 'Space Tech',price: '$5,999',billing: 'month',features: [ 'Change detection','Crop yield estimation','Object and damage detection','APIs and dashboards','Tasking provider integrations' ],ctaLabel: 'Analyze Imagery',href: 'https: } ] },{ name: 'BioTech & Health',slug: 'biotech-health',items: [ { id: 'ai-drug-discovery-platform',title: 'AI Drug Discovery Platform',description: 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',category: 'BioTech & Health',price: '$35,000',billing: 'month',features: [ 'AI molecular modeling','Quantum simulations','Clinical trial optimization','Drug repurposing','Regulatory compliance' ],ctaLabel: 'Discover Drugs',href: 'https: },{ id: 'quantum-genome-analyzer',title: 'Quantum Genome Analyzer',description: 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.',category: 'BioTech & Health',price: '$18,000',billing: 'month',features: [ 'Quantum DNA sequencing','Personalized medicine','Disease prediction','Genetic counseling','Research collaboration' ],ctaLabel: 'Analyze Genome',href: 'https: } ,{ id: 'telemedicine-ai-triage',title: 'Telemedicine AI Triage',description: 'AI symptom checker with escalation workflows to clinicians and EHR integration.',category: 'BioTech & Health',price: '$1,999',billing: 'month',features: [ 'Clinical safety guardrails','HL7/FHIR integration','Language and accessibility','Analytics and outcomes tracking','Privacy and consent management' ],ctaLabel: 'Enable Triage',href: 'https: } ] },{ name: 'FinTech & DeFi',slug: 'fintech-defi',items: [ { id: 'quantum-trading-algorithm',title: 'Quantum Trading Algorithm',description: 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',category: 'FinTech & DeFi',price: '$45,000',billing: 'month',features: [ 'Quantum market analysis','Microsecond trading','Risk management','Portfolio optimization','Regulatory compliance' ],ctaLabel: 'Start Trading',href: 'https: },{ id: 'autonomous-defi-protocol',title: 'Autonomous DeFi Protocol',description: 'Self-managing DeFi protocol that automatically optimizes yields,manages risks,and executes strategies.',category: 'FinTech & DeFi',price: '$12,000',billing: 'month',features: [ 'Autonomous yield farming','Risk management','Strategy optimization','Cross-chain integration','Smart contract security' ],ctaLabel: 'Deploy Protocol',href: 'https: } ,{ id: 'kyc-aml-transaction-monitoring',title: 'KYC/AML Transaction Monitoring',description: 'Detect suspicious activity using rules + ML with investigator case management.',category: 'FinTech & DeFi',price: '$2,499',billing: 'month',features: [ 'Entity resolution','Sanctions and watchlists','Graph analytics','Case workflow and SAR exports','Audit and model governance' ],ctaLabel: 'Strengthen Compliance',href: 'https: } ] },{ name: 'Metaverse & AR/VR',slug: 'metaverse-ar-vr',items: [ { id: 'quantum-metaverse-engine',title: 'Quantum Metaverse Engine',description: 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',category: 'Metaverse & AR/VR',price: '$28,000',billing: 'month',features: [ 'Quantum rendering','Infinite scalability','Realistic physics','Cross-platform support','AI-powered NPCs' ],ctaLabel: 'Enter Metaverse',href: 'https: },{ id: 'autonomous-ar-navigation',title: 'Autonomous AR Navigation',description: 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.',category: 'Metaverse & AR/VR',price: '$8,500',billing: 'month',features: [ 'Real-time AR overlays','Autonomous navigation','Smart city integration','Traffic optimization','Safety monitoring' ],ctaLabel: 'Navigate AR',href: 'https: } ,{ id: 'vr-training-simulators',title: 'VR Training Simulators',description: 'Enterprise-grade immersive learning for safety,field ops,and medical procedures.',category: 'Metaverse & AR/VR',price: '$30,000',billing: 'project',features: [ 'Curriculum design','Multi-user scenarios','LMS integration and analytics','Hardware procurement guidance','Operations and support' ],ctaLabel: 'Build Simulator',href: 'https: } ] },{ name: 'Autonomous Systems',slug: 'autonomous-systems',items: [ { id: 'quantum-ai-controller',title: 'Quantum AI Controller',description: 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',category: 'Autonomous Systems',price: '$32,000',billing: 'month',features: [ 'Quantum decision making','Autonomous learning','System optimization','Predictive maintenance','Multi-system coordination' ],ctaLabel: 'Control Systems',href: 'https: },{ id: 'autonomous-robotics-platform',title: 'Autonomous Robotics Platform',description: 'Complete robotics platform for autonomous manufacturing,logistics,and service operations.',category: 'Autonomous Systems',price: '$22,000',billing: 'month',features: [ 'Autonomous navigation','Task learning','Safety protocols','Multi-robot coordination','Performance analytics' ],ctaLabel: 'Deploy Robots',href: 'https: } ,{ id: 'warehouse-robotics-orchestration',title: 'Warehouse Robotics Orchestration',description: 'Coordinate AMRs,conveyors,and pick stations to maximize throughput and safety.',category: 'Autonomous Systems',price: '$9,999',billing: 'month',features: [ 'Task allocation and routing','3D digital twin monitoring','Workforce and robot collaboration','Safety zones and policies','KPIs and optimization' ],ctaLabel: 'Orchestrate Robots',href: 'https: } ] },{ name: 'Digital Marketing',slug: 'digital-marketing',items: [ { id: 'ai-social-media-manager',title: 'AI Social Media Manager',description: 'Intelligent social media management platform that creates content,schedules posts,and optimizes engagement across all platforms.',category: 'Digital Marketing',price: '$199',billing: 'month',features: [ 'AI content generation','Multi-platform scheduling','Engagement optimization','Analytics dashboard','Brand voice consistency' ],ctaLabel: 'Manage Social Media',href: 'https: },{ id: 'predictive-marketing-analytics',title: 'Predictive Marketing Analytics',description: 'AI-powered marketing analytics that predicts customer behavior,optimizes campaigns,and maximizes ROI.',category: 'Digital Marketing',price: '$299',billing: 'month',features: [ 'Customer behavior prediction','Campaign optimization','ROI forecasting','Attribution modeling','Real-time insights' ],ctaLabel: 'Analyze Marketing',href: 'https: },{ id: 'ai-seo-optimizer',title: 'AI SEO Optimizer Pro',description: 'Advanced SEO optimization platform that analyzes competitors,suggests improvements,and tracks rankings automatically.',category: 'Digital Marketing',price: '$249',billing: 'month',features: [ 'Competitor analysis','Keyword optimization','Content suggestions','Ranking tracking','Technical SEO audit' ],ctaLabel: 'Optimize SEO',href: 'https: } ] },{ name: 'E-commerce Solutions',slug: 'ecommerce-solutions',items: [ { id: 'ai-product-recommendation-engine',title: 'AI Product Recommendation Engine',description: 'Intelligent product recommendation system that increases conversion rates and average order value.',category: 'E-commerce Solutions',price: '$399',billing: 'month',features: [ 'Personalized recommendations','Behavioral analysis','A/B testing','Real-time optimization','Analytics dashboard' ],ctaLabel: 'Boost Sales',href: 'https: },{ id: 'smart-inventory-optimizer',title: 'Smart Inventory Optimizer',description: 'AI-driven inventory optimization for e-commerce that reduces stockouts and overstock situations.',category: 'E-commerce Solutions',price: '$299',billing: 'month',features: [ 'Demand forecasting','Stock level optimization','Reorder automation','Seasonal adjustments','Cost optimization' ],ctaLabel: 'Optimize Inventory',href: 'https: },{ id: 'ai-customer-chatbot',title: 'AI Customer Chatbot',description: 'Intelligent chatbot that handles customer inquiries,provides product information,and processes orders.',category: 'E-commerce Solutions',price: '$199',billing: 'month',features: [ 'Natural language processing','Product search assistance','Order processing','24/7 availability','Human handoff' ],ctaLabel: 'Deploy Chatbot',href: 'https: } ] },{ name: 'Remote Work Tools',slug: 'remote-work-tools',items: [ { id: 'ai-meeting-assistant',title: 'AI Meeting Assistant',description: 'Intelligent meeting assistant that transcribes,summarizes,and extracts action items from virtual meetings.',category: 'Remote Work Tools',price: '$149',billing: 'month',features: [ 'Real-time transcription','Meeting summarization','Action item extraction','Integration with calendar','Searchable archives' ],ctaLabel: 'Assist Meetings',href: 'https: },{ id: 'collaborative-project-manager',title: 'Collaborative Project Manager',description: 'AI-powered project management platform that optimizes team collaboration and project delivery.',category: 'Remote Work Tools',price: '$199',billing: 'month',features: [ 'Task automation','Team collaboration','Progress tracking','Resource optimization','Risk management' ],ctaLabel: 'Manage Projects',href: 'https: },{ id: 'virtual-office-platform',title: 'Virtual Office Platform',description: 'Immersive virtual office environment for remote teams with AI-powered collaboration tools.',category: 'Remote Work Tools',price: '$299',billing: 'month',features: [ '3D virtual spaces','Real-time collaboration','AI meeting rooms','Team building activities','Productivity analytics' ],ctaLabel: 'Create Virtual Office',href: 'https: } ] },{ name: 'Legal Tech',slug: 'legal-tech',items: [ { id: 'ai-contract-reviewer',title: 'AI Contract Reviewer',description: 'Advanced contract review system that identifies risks,suggests improvements,and ensures compliance.',category: 'Legal Tech',price: '$399',billing: 'month',features: [ 'Risk identification','Compliance checking','Clause analysis','Version comparison','Legal research integration' ],ctaLabel: 'Review Contracts',href: 'https: },{ id: 'legal-research-assistant',title: 'Legal Research Assistant',description: 'AI-powered legal research platform that finds relevant cases,statutes,and legal precedents.',category: 'Legal Tech',price: '$299',billing: 'month',features: [ 'Case law search','Statute analysis','Precedent identification','Citation management','Research summaries' ],ctaLabel: 'Research Legal',href: 'https: },{ id: 'compliance-monitoring-system',title: 'Compliance Monitoring System',description: 'Automated compliance monitoring that tracks regulatory changes and ensures adherence to legal requirements.',category: 'Legal Tech',price: '$499',billing: 'month',features: [ 'Regulatory tracking','Compliance assessment','Risk alerts','Audit preparation','Reporting automation' ],ctaLabel: 'Monitor Compliance',href: 'https: } ] },{ name: 'EdTech',slug: 'edtech',items: [ { id: 'adaptive-learning-platform',title: 'Adaptive Learning Platform',description: 'AI-powered learning platform that adapts content and pace to individual student needs and learning styles.',category: 'EdTech',price: '$199',billing: 'month',features: [ 'Personalized learning paths','Adaptive assessments','Progress tracking','Content recommendations','Analytics dashboard' ],ctaLabel: 'Adapt Learning',href: 'https: },{ id: 'virtual-reality-classroom',title: 'Virtual Reality Classroom',description: 'Immersive VR learning environment that creates engaging educational experiences for students.',category: 'EdTech',price: '$399',billing: 'month',features: [ '3D learning environments','Interactive simulations','Multi-user collaboration','Content creation tools','Progress tracking' ],ctaLabel: 'Create VR Classroom',href: 'https: },{ id: 'ai-tutor-assistant',title: 'AI Tutor Assistant',description: 'Intelligent tutoring system that provides personalized guidance and support to students.',category: 'EdTech',price: '$149',billing: 'month',features: [ 'Personalized tutoring','Homework assistance','Progress monitoring','Parent communication','Learning analytics' ],ctaLabel: 'Get AI Tutor',href: 'https: } ] },{ name: 'Real Estate Tech',slug: 'real-estate-tech',items: [ { id: 'ai-property-valuator',title: 'AI Property Valuator',description: 'Advanced property valuation system using AI to analyze market data and provide accurate property assessments.',category: 'Real Estate Tech',price: '$299',billing: 'month',features: [ 'Market analysis','Property comparison','Valuation algorithms','Market trends','Investment insights' ],ctaLabel: 'Value Property',href: 'https: },{ id: 'virtual-property-tour',title: 'Virtual Property Tour Platform',description: 'Immersive virtual tour platform that allows potential buyers to explore properties remotely.',category: 'Real Estate Tech',price: '$199',billing: 'month',features: [ '360-degree tours','Interactive floor plans','Virtual staging','Lead generation','Analytics dashboard' ],ctaLabel: 'Create Virtual Tours',href: 'https: },{ id: 'smart-property-manager',title: 'Smart Property Manager',description: 'AI-powered property management system that optimizes operations and tenant satisfaction.',category: 'Real Estate Tech',price: '$399',billing: 'month',features: [ 'Maintenance scheduling','Tenant communication','Financial tracking','Performance analytics','Predictive maintenance' ],ctaLabel: 'Manage Properties',href: 'https: } ] },{ name: 'Supply Chain Tech',slug: 'supply-chain-tech',items: [ { id: 'ai-supply-chain-optimizer',title: 'AI Supply Chain Optimizer',description: 'Intelligent supply chain optimization platform that reduces costs and improves efficiency.',category: 'Supply Chain Tech',price: '$599',billing: 'month',features: [ 'Route optimization','Inventory management','Demand forecasting','Cost analysis','Risk assessment' ],ctaLabel: 'Optimize Supply Chain',href: 'https: },{ id: 'blockchain-tracking-system',title: 'Blockchain Tracking System',description: 'Transparent supply chain tracking using blockchain technology for end-to-end visibility.',category: 'Supply Chain Tech',price: '$399',billing: 'month',features: [ 'End-to-end tracking','Transparency','Quality assurance','Compliance reporting','Stakeholder access' ],ctaLabel: 'Track Supply Chain',href: 'https: },{ id: 'predictive-logistics',title: 'Predictive Logistics Platform',description: 'AI-powered logistics platform that predicts delays and optimizes delivery routes.',category: 'Supply Chain Tech',price: '$299',billing: 'month',features: [ 'Delay prediction','Route optimization','Real-time tracking','Performance analytics','Cost optimization' ],ctaLabel: 'Optimize Logistics',href: 'https: } ] },{ name: 'Energy Tech',slug: 'energy-tech',items: [ { id: 'smart-grid-optimizer',title: 'Smart Grid Optimizer',description: 'AI-powered smart grid optimization platform that improves energy distribution and reduces waste.',category: 'Energy Tech',price: '$799',billing: 'month',features: [ 'Grid optimization','Demand response','Energy storage','Renewable integration','Cost reduction' ],ctaLabel: 'Optimize Grid',href: 'https: },{ id: 'renewable-energy-manager',title: 'Renewable Energy Manager',description: 'Comprehensive renewable energy management system for solar,wind,and hydroelectric power.',category: 'Energy Tech',price: '$499',billing: 'month',features: [ 'Energy production monitoring','Storage optimization','Grid integration','Performance analytics','Maintenance scheduling' ],ctaLabel: 'Manage Renewables',href: 'https: },{ id: 'energy-efficiency-analyzer',title: 'Energy Efficiency Analyzer',description: 'AI-powered energy efficiency analysis that identifies optimization opportunities and tracks improvements.',category: 'Energy Tech',price: '$299',billing: 'month',features: [ 'Efficiency analysis','Optimization recommendations','Cost tracking','Performance monitoring','Sustainability reporting' ],ctaLabel: 'Analyze Efficiency',href: 'https: } ] },{ name: 'Smart Cities',slug: 'smart-cities',items: [ { id: 'traffic-optimization-system',title: 'Traffic Optimization System',description: 'AI-powered traffic management system that reduces congestion and improves urban mobility.',category: 'Smart Cities',price: '$999',billing: 'month',features: [ 'Real-time traffic monitoring','Signal optimization','Congestion prediction','Public transport integration','Environmental impact' ],ctaLabel: 'Optimize Traffic',href: 'https: },{ id: 'smart-parking-platform',title: 'Smart Parking Platform',description: 'Intelligent parking management system that reduces search time and optimizes space utilization.',category: 'Smart Cities',price: '$399',billing: 'month',features: [ 'Space detection','Mobile app integration','Payment processing','Analytics dashboard','City integration' ],ctaLabel: 'Smart Parking',href: 'https: },{ id: 'environmental-monitoring',title: 'Environmental Monitoring System',description: 'Comprehensive environmental monitoring platform for air quality,noise,and pollution tracking.',category: 'Smart Cities',price: '$599',billing: 'month',features: [ 'Air quality monitoring','Noise pollution tracking','Data visualization','Alert system','Regulatory compliance' ],ctaLabel: 'Monitor Environment',href: 'https: } ] },{ name: 'AgriTech',slug: 'agritech',items: [ { id: 'precision-agriculture-platform',title: 'Precision Agriculture Platform',description: 'AI-powered precision agriculture system that optimizes crop yields and reduces resource waste.',category: 'AgriTech',price: '$499',billing: 'month',features: [ 'Soil analysis','Crop monitoring','Irrigation optimization','Yield prediction','Resource management' ],ctaLabel: 'Optimize Agriculture',href: 'https: },{ id: 'drone-farming-system',title: 'Drone Farming System',description: 'Autonomous drone system for crop monitoring,spraying,and data collection in agriculture.',category: 'AgriTech',price: '$799',billing: 'month',features: [ 'Autonomous flight','Crop monitoring','Precision spraying','Data collection','Analytics platform' ],ctaLabel: 'Deploy Drones',href: 'https: },{ id: 'livestock-monitoring',title: 'Livestock Monitoring System',description: 'AI-powered livestock monitoring system for health tracking and productivity optimization.',category: 'AgriTech',price: '$299',billing: 'month',features: [ 'Health monitoring','Behavior analysis','Productivity tracking','Disease detection','Breeding optimization' ],ctaLabel: 'Monitor Livestock',href: 'https: } ] },{ name: 'Media & Entertainment',slug: 'media-entertainment',items: [ { id: 'ai-content-creator',title: 'AI Content Creator',description: 'Advanced AI platform that generates creative content for media and entertainment industries.',category: 'Media & Entertainment',price: '$399',billing: 'month',features: [ 'Content generation','Style customization','Multi-format output','Collaboration tools','Quality assurance' ],ctaLabel: 'Create Content',href: 'https: },{ id: 'personalized-streaming',title: 'Personalized Streaming Platform',description: 'AI-powered streaming platform that personalizes content recommendations and user experience.',category: 'Media & Entertainment',price: '$299',billing: 'month',features: [ 'Content personalization','Recommendation engine','User behavior analysis','Content discovery','Engagement optimization' ],ctaLabel: 'Personalize Streaming',href: 'https: },{ id: 'virtual-production-studio',title: 'Virtual Production Studio',description: 'Immersive virtual production environment for film,TV,and digital content creation.',category: 'Media & Entertainment',price: '$1,999',billing: 'month',features: [ 'Virtual sets','Real-time rendering','Motion capture','Collaborative editing','Asset management' ],ctaLabel: 'Create Virtually',href: 'https: } ] },{ name: 'Logistics Tech',slug: 'logistics-tech',items: [ { id: 'autonomous-delivery-system',title: 'Autonomous Delivery System',description: 'AI-powered autonomous delivery system for last-mile logistics and package delivery.',category: 'Logistics Tech',price: '$899',billing: 'month',features: [ 'Route optimization','Autonomous navigation','Package tracking','Delivery scheduling','Customer notification' ],ctaLabel: 'Automate Delivery',href: 'https: },{ id: 'warehouse-automation',title: 'Warehouse Automation Platform',description: 'Comprehensive warehouse automation system that optimizes operations and reduces costs.',category: 'Logistics Tech',price: '$699',billing: 'month',features: [ 'Robotic automation','Inventory management','Order fulfillment','Performance analytics','Maintenance scheduling' ],ctaLabel: 'Automate Warehouse',href: 'https: },{ id: 'supply-chain-visibility',title: 'Supply Chain Visibility Platform',description: 'End-to-end supply chain visibility platform with real-time tracking and analytics.',category: 'Logistics Tech',price: '$399',billing: 'month',features: [ 'Real-time tracking','Risk assessment','Performance analytics','Stakeholder collaboration','Compliance reporting' ],ctaLabel: 'Track Supply Chain',href: 'https: } ] },{ name: 'HR Tech',slug: 'hr-tech',items: [ { id: 'ai-recruitment-platform',title: 'AI Recruitment Platform',description: 'Intelligent recruitment platform that automates candidate screening and improves hiring efficiency.',category: 'HR Tech',price: '$299',billing: 'month',features: [ 'Resume screening','Skill assessment','Interview scheduling','Candidate matching','Analytics dashboard' ],ctaLabel: 'Recruit Smarter',href: 'https: },{ id: 'employee-engagement-monitor',title: 'Employee Engagement Monitor',description: 'AI-powered employee engagement platform that tracks satisfaction and improves workplace culture.',category: 'HR Tech',price: '$199',billing: 'month',features: [ 'Engagement surveys','Sentiment analysis','Performance tracking','Feedback management','Action planning' ],ctaLabel: 'Monitor Engagement',href: 'https: },{ id: 'learning-management-system',title: 'AI Learning Management System',description: 'Intelligent learning management system that personalizes training and tracks employee development.',category: 'HR Tech',price: '$249',billing: 'month',features: [ 'Personalized learning','Skill assessment','Progress tracking','Content management','Analytics reporting' ],ctaLabel: 'Manage Learning',href: 'https: } ] },{ name: 'Sales Tech',slug: 'sales-tech',items: [ { id: 'ai-sales-predictor',title: 'AI Sales Predictor',description: 'Advanced sales prediction platform that forecasts revenue and identifies growth opportunities.',category: 'Sales Tech',price: '$399',billing: 'month',features: [ 'Revenue forecasting','Lead scoring','Opportunity identification','Performance analytics','Growth insights' ],ctaLabel: 'Predict Sales',href: 'https: },{ id: 'sales-automation-platform',title: 'Sales Automation Platform',description: 'Comprehensive sales automation platform that streamlines processes and increases productivity.',category: 'Sales Tech',price: '$299',billing: 'month',features: [ 'Lead management','Email automation','Meeting scheduling','Pipeline tracking','Performance analytics' ],ctaLabel: 'Automate Sales',href: 'https: },{ id: 'customer-success-platform',title: 'Customer Success Platform',description: 'AI-powered customer success platform that improves retention and drives growth.',category: 'Sales Tech',price: '$249',billing: 'month',features: [ 'Customer health monitoring','Success planning','Retention analytics','Upsell opportunities','Churn prediction' ],ctaLabel: 'Succeed with Customers',href: 'https: } ] },{ name: 'Customer Experience',slug: 'customer-experience',items: [ { id: 'omnichannel-experience-platform',title: 'Omnichannel Experience Platform',description: 'Unified customer experience platform that provides seamless interactions across all channels.',category: 'Customer Experience',price: '$499',billing: 'month',features: [ 'Channel integration','Customer journey mapping','Personalization engine','Analytics dashboard','Performance optimization' ],ctaLabel: 'Unify Experience',href: 'https: },{ id: 'sentiment-analysis-engine',title: 'Sentiment Analysis Engine',description: 'Advanced sentiment analysis platform that monitors customer feedback and improves satisfaction.',category: 'Customer Experience',price: '$199',billing: 'month',features: [ 'Real-time monitoring','Multi-language support','Trend analysis','Alert system','Action recommendations' ],ctaLabel: 'Analyze Sentiment',href: 'https: },{ id: 'customer-feedback-automation',title: 'Customer Feedback Automation',description: 'Automated customer feedback collection and analysis system for continuous improvement.',category: 'Customer Experience',price: '$149',billing: 'month',features: [ 'Automated surveys','Feedback analysis','Response management','Improvement tracking','ROI measurement' ],ctaLabel: 'Automate Feedback',href: 'https: } ] },{ name: 'Productivity Tools',slug: 'productivity-tools',items: [ { id: 'ai-task-manager',title: 'AI Task Manager',description: 'Intelligent task management platform that prioritizes work and optimizes productivity.',category: 'Productivity Tools',price: '$99',billing: 'month',features: [ 'Smart prioritization','Time tracking','Progress monitoring','Team collaboration','Performance analytics' ],ctaLabel: 'Manage Tasks',href: 'https: },{ id: 'workflow-automation-engine',title: 'Workflow Automation Engine',description: 'Powerful workflow automation platform that streamlines business processes and reduces manual work.',category: 'Productivity Tools',price: '$199',billing: 'month',features: [ 'Process automation','Integration capabilities','Workflow designer','Performance monitoring','Analytics dashboard' ],ctaLabel: 'Automate Workflows',href: 'https: },{ id: 'collaborative-workspace',title: 'Collaborative Workspace Platform',description: 'Advanced collaborative workspace that enhances team productivity and communication.',category: 'Productivity Tools',price: '$149',billing: 'month',features: [ 'Real-time collaboration','Document sharing','Communication tools','Project management','Analytics insights' ],ctaLabel: 'Collaborate Better',href: 'https: } ] } ];
export type ServiceItem = { id: string; title: string; description: string; category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Digital Marketing' | 'E-commerce Solutions' | 'Remote Work Tools' | 'Legal Tech' | 'EdTech' | 'Real Estate Tech' | 'Supply Chain Tech' | 'Energy Tech' | 'Smart Cities' | 'AgriTech' | 'Media & Entertainment' | 'Logistics Tech' | 'HR Tech' | 'Sales Tech' | 'Customer Experience' | 'Productivity Tools'; price: string; billing: 'month' | 'project' | 'hour'; features: string[]; ctaLabel: string; href: string; external?: boolean}; export type ServiceCategory = { name: string; slug: string; items: ServiceItem[]}; export const servicesCatalog: ServiceCategory[] = [ { name: 'Micro SaaS',slug: 'micro-saas',items: [ { id: 'pdf-render-api',title: 'PDF Render API',description: 'Reliable HTML-to-PDF rendering with templates,assets,async callbacks,and storage destinations.',category: 'Micro SaaS',price: '$29',billing: 'month',features: [ 'Chromium-based rendering','Templates and asset hosting','Async callbacks and webhooks','S3/GCS/Azure storage targets','Usage analytics and quotas' ],ctaLabel: 'Generate PDFs',href: 'https: },{ id: 'api-documentation-generator',title: 'API Documentation Generator',description: 'Turn OpenAPI/GraphQL schemas into beautiful,versioned docs with SDK snippets and search.',category: 'Micro SaaS',price: '$49',billing: 'month',features: [ 'Schema parsing (OAS/GraphQL)','SDK snippets and examples','Changelogs and versioning','Full-text search and themes','CI publish workflows' ],ctaLabel: 'Publish Docs',href: 'https: },{ id: 'smart-contract-risk-scanner',title: 'Smart Contract Risk Scanner',description: 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Real-time vulnerability detection','Automated security scoring','Compliance reporting','Integration with major blockchains','24/7 monitoring dashboard' ],ctaLabel: 'Start Free Trial',href: 'https: },{ id: 'ai-content-optimizer',title: 'AI Content Optimizer Pro',description: 'Advanced content optimization using AI to improve SEO,readability,and engagement across all digital platforms.',category: 'Micro SaaS',price: '$199',billing: 'month',features: [ 'AI-powered SEO optimization','Content readability scoring','Multi-language support','Performance analytics','Automated A/B testing' ],ctaLabel: 'Get Started',href: 'https: },{ id: 'quantum-workflow-automation',title: 'Quantum Workflow Automation',description: 'Next-generation workflow automation leveraging quantum computing principles for complex business process optimization.',category: 'Micro SaaS',price: '$499',billing: 'month',features: [ 'Quantum-inspired algorithms','Complex process modeling','Real-time optimization','Predictive analytics','Enterprise integration' ],ctaLabel: 'Schedule Demo',href: 'https: },{ id: 'edge-ai-inference-engine',title: 'Edge AI Inference Engine',description: 'Lightweight AI inference engine optimized for edge devices,enabling real-time AI processing without cloud dependency.',category: 'Micro SaaS',price: '$399',billing: 'month',features: [ 'Edge-optimized models','Low latency processing','Offline capability','Model compression','Cross-platform support' ],ctaLabel: 'Deploy Now',href: 'https: },{ id: 'autonomous-crm-optimizer',title: 'Autonomous CRM Optimizer',description: 'AI-powered CRM system that automatically optimizes customer relationships,sales processes,and marketing campaigns.',category: 'Micro SaaS',price: '$599',billing: 'month',features: [ 'Autonomous lead scoring','Predictive customer behavior','Automated follow-ups','Revenue optimization','Multi-channel integration' ],ctaLabel: 'Optimize CRM',href: 'https: },{ id: 'quantum-supply-chain-optimizer',title: 'Quantum Supply Chain Optimizer',description: 'Revolutionary supply chain optimization using quantum algorithms for complex logistics and inventory management.',category: 'Micro SaaS',price: '$799',billing: 'month',features: [ 'Quantum route optimization','Real-time inventory tracking','Predictive demand forecasting','Cost optimization','Risk assessment' ],ctaLabel: 'Optimize Supply Chain',href: 'https: },{ id: 'soc2-compliance-automation-saas',title: 'SOC 2 Compliance Automation SaaS',description: 'Automate evidence collection,policy mapping,and control monitoring to pass SOC 2 audits faster.',category: 'Micro SaaS',price: '$249',billing: 'month',features: [ 'Automated evidence collection','Control health dashboards','Policy templates & mapping','Integrations: AWS,GCP,Azure,Jira,GitHub','Audit-ready export' ],ctaLabel: 'Start Compliance',href: 'https: },{ id: 'mlops-observability',title: 'MLOps Observability & Drift Monitor',description: 'Track model performance,detect data drift,and automate retraining triggers with guardrails.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Latency,accuracy,bias metrics','Drift and anomaly alerts','Rollback and canary controls','Integration: SageMaker,Vertex AI,OpenAI','Compliance logging' ],ctaLabel: 'Monitor Models',href: 'https: },{ id: 'ai-video-content-generator',title: 'AI Video Content Generator',description: 'Generate professional videos from text,images,and audio using advanced AI models for marketing and training.',category: 'Micro SaaS',price: '$399',billing: 'month',features: [ 'Text-to-video generation','AI voice synthesis','Custom branding templates','Multi-format export','Collaborative editing' ],ctaLabel: 'Create Videos',href: 'https: },{ id: 'smart-invoice-processor',title: 'Smart Invoice Processor',description: 'AI-powered invoice processing that automatically extracts data,validates information,and integrates with accounting systems.',category: 'Micro SaaS',price: '$149',billing: 'month',features: [ 'OCR data extraction','Automated validation','ERP integration','Approval workflows','Fraud detection' ],ctaLabel: 'Process Invoices',href: 'https: },{ id: 'ai-customer-support-automation',title: 'AI Customer Support Automation',description: 'Intelligent customer support system that handles inquiries,escalates complex issues,and provides 24/7 assistance.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Natural language processing','Multi-language support','Knowledge base integration','Escalation workflows','Performance analytics' ],ctaLabel: 'Automate Support',href: 'https: },{ id: 'predictive-inventory-manager',title: 'Predictive Inventory Manager',description: 'AI-driven inventory management that predicts demand,optimizes stock levels,and reduces carrying costs.',category: 'Micro SaaS',price: '$199',billing: 'month',features: [ 'Demand forecasting','Stock optimization','Reorder automation','Supplier integration','Cost analysis' ],ctaLabel: 'Optimize Inventory',href: 'https: },{ id: 'ai-powered-email-marketing',title: 'AI-Powered Email Marketing Suite',description: 'Intelligent email marketing platform that personalizes content,optimizes send times,and maximizes engagement rates.',category: 'Micro SaaS',price: '$249',billing: 'month',features: [ 'AI content personalization','Optimal timing algorithms','A/B testing automation','Behavioral segmentation','ROI tracking' ],ctaLabel: 'Boost Engagement',href: 'https: } ,{ id: 'meeting-notes-copilot',title: 'AI Meeting Notes & Summaries',description: 'Auto-capture meetings,generate action items,and sync to CRM and project tools.',category: 'Micro SaaS',price: '$29',billing: 'month',features: [ 'Transcription and speaker diarization','Auto summaries and follow-ups','CRM/Jira/Asana sync','Multi-language support','Admin analytics' ],ctaLabel: 'Try Meeting Copilot',href: 'https: },{ id: 'smart-forms-intake',title: 'Smart Forms & Intake',description: 'Conditional logic,AI validation,and workflow routing to accelerate onboarding and lead capture.',category: 'Micro SaaS',price: '$99',billing: 'month',features: [ 'AI-powered form validation','Conditional logic and branching','Workflow automation','CRM integration','Analytics and insights' ],ctaLabel: 'Build Smart Forms',href: 'https: },{ id: 'ai-customer-success-platform',title: 'AI Customer Success Platform',description: 'Intelligent customer success platform that predicts churn,automates onboarding,and optimizes customer engagement.',category: 'Micro SaaS',price: '$1,499',billing: 'month',features: [ 'AI-powered churn prediction','Automated onboarding workflows','Customer health scoring','Personalized engagement campaigns','ROI tracking and analytics' ],ctaLabel: 'Optimize Customer Success',href: 'https: },{ id: 'ai-workflow-orchestrator',title: 'AI Workflow Orchestrator',description: 'Intelligent workflow automation platform that uses AI to optimize business processes and increase operational efficiency.',category: 'Micro SaaS',price: '$899',billing: 'month',features: [ 'AI-powered process optimization','Visual workflow builder','Intelligent task routing','Process mining and analytics','Integration with 100+ tools' ],ctaLabel: 'Automate Workflows',href: 'https: },{ id: 'ai-data-governance-platform',title: 'AI Data Governance Platform',description: 'Comprehensive data governance solution that uses AI to ensure data quality,compliance,and security.',category: 'Micro SaaS',price: '$2,499',billing: 'month',features: [ 'AI-powered data quality assessment','Automated compliance monitoring','Data lineage tracking','Privacy impact assessments','Custom governance policies' ],ctaLabel: 'Govern Your Data',href: 'https: },{ id: 'ai-cybersecurity-suite',title: 'AI Cybersecurity Suite',description: 'Advanced cybersecurity platform that uses AI to detect,prevent,and respond to cyber threats in real-time.',category: 'Micro SaaS',price: '$3,999',billing: 'month',features: [ 'AI-powered threat detection','Behavioral analytics','Automated incident response','Real-time monitoring','24/7 security operations' ],ctaLabel: 'Secure Your Business',href: 'https: },{ id: 'quantum-ai-platform',title: 'Quantum AI Platform',description: 'Revolutionary platform that combines quantum computing with AI to solve complex optimization problems.',category: 'Micro SaaS',price: '$5,999',billing: 'month',features: [ 'Quantum algorithm optimization','AI model acceleration','Hybrid quantum-classical computing','Real-time optimization','Quantum machine learning' ],ctaLabel: 'Explore Quantum AI',href: 'https: },{ id: 'ai-healthcare-analytics',title: 'AI Healthcare Analytics Platform',description: 'Advanced healthcare analytics platform that uses AI to improve patient outcomes and optimize operations.',category: 'Micro SaaS',price: '$3,499',billing: 'month',features: [ 'AI-powered patient analytics','Predictive health modeling','Clinical decision support','Population health management','HIPAA compliance' ],ctaLabel: 'Transform Healthcare',href: 'https: },{ id: 'edge-computing-platform',title: 'Edge Computing Platform',description: 'Next-generation edge computing platform that brings AI and computing power closer to data sources.',category: 'Micro SaaS',price: '$1,999',billing: 'month',features: [ 'Distributed edge computing','AI model deployment','Real-time data processing','Edge device management','Multi-cloud integration' ],ctaLabel: 'Deploy Edge AI',href: 'https: },{ id: 'ai-financial-trading-platform',title: 'AI Financial Trading Platform',description: 'Advanced financial trading platform that uses AI to analyze markets and execute trades automatically.',category: 'Micro SaaS',price: '$4,999',billing: 'month',features: [ 'AI-powered market analysis','Predictive trading algorithms','Real-time market data','Automated trade execution','Risk management' ],ctaLabel: 'Trade with AI',href: 'https: },{ id: 'ai-supply-chain-optimization',title: 'AI Supply Chain Optimization Platform',description: 'Intelligent supply chain platform that uses AI to optimize logistics and reduce costs.',category: 'Micro SaaS',price: '$2,999',billing: 'month',features: [ 'AI-powered demand forecasting','Route optimization','Inventory management','Supplier risk assessment','Real-time tracking' ],ctaLabel: 'Optimize Supply Chain',href: 'https: },{ id: 'ai-hr-platform',title: 'AI HR Platform',description: 'Comprehensive HR platform that uses AI to automate recruitment and optimize workforce management.',category: 'Micro SaaS',price: '$1,999',billing: 'month',features: [ 'AI-powered recruitment','Employee engagement analytics','Performance management','Learning and development','Workforce planning' ],ctaLabel: 'Transform HR',href: 'https: },{ id: 'ai-marketing-automation',title: 'AI Marketing Automation Platform',description: 'Intelligent marketing automation platform that uses AI to personalize campaigns and maximize ROI.',category: 'Micro SaaS',price: '$2,499',billing: 'month',features: [ 'AI-powered campaign optimization','Personalized content delivery','Multi-channel automation','Lead scoring and nurturing','ROI tracking and analytics' ],ctaLabel: 'Automate Marketing',href: 'https: },{ id: 'ai-legal-research-platform',title: 'AI Legal Research Platform',description: 'Advanced legal research platform that uses AI to analyze case law and automate legal research.',category: 'Micro SaaS',price: '$3,999',billing: 'month',features: [ 'AI-powered case analysis','Legal document review','Precedent identification','Legal research automation','Compliance monitoring' ],ctaLabel: 'Research with AI',href: 'https: },{ id: 'ai-education-platform',title: 'AI Education Platform',description: 'Intelligent education platform that uses AI to personalize learning experiences and optimize outcomes.',category: 'Micro SaaS',price: '$1,799',billing: 'month',features: [ 'AI-powered personalized learning','Adaptive learning paths','Student performance analytics','Content recommendation','Automated assessment' ],ctaLabel: 'Transform Education',href: 'https: },{ id: 'ai-project-management-platform',title: 'AI Project Management Platform',description: 'Intelligent project management platform that uses AI to optimize planning and resource allocation.',category: 'Micro SaaS',price: '$1,599',billing: 'month',features: [ 'AI-powered project planning','Resource optimization','Risk assessment','Team collaboration tools','Time tracking' ],ctaLabel: 'Manage Projects with AI',href: 'https: },{ id: 'ai-content-orchestrator',title: 'AI Content Orchestrator Pro',description: 'Enterprise-grade content management platform that uses AI to create,optimize,and distribute content.',category: 'Micro SaaS',price: '$4,999',billing: 'month',features: [ 'AI-powered content creation','Multi-channel distribution','Workflow automation','Content optimization','Analytics and insights' ],ctaLabel: 'Orchestrate Content',href: 'https: },{ id: 'ai-sales-automation-suite',title: 'AI Sales Automation Suite',description: 'Comprehensive sales automation platform that uses AI to optimize every stage of the sales funnel.',category: 'Micro SaaS',price: '$1,999',billing: 'month',features: [ 'AI-powered lead scoring','Automated email sequences','Sales call scheduling','CRM integration','Performance analytics' ],ctaLabel: 'Automate Sales',href: 'https: },{ id: 'ai-customer-support-platform',title: 'AI Customer Support Platform',description: 'Intelligent customer support platform that uses AI to provide instant responses and improve satisfaction.',category: 'Micro SaaS',price: '$1,499',billing: 'month',features: [ 'AI-powered chatbot','Ticket routing automation','Knowledge base management','Customer sentiment analysis','Multi-language support' ],ctaLabel: 'Support with AI',href: 'https: },{ id: 'ai-financial-analytics-platform',title: 'AI Financial Analytics Platform',description: 'Advanced financial analytics platform that uses AI to provide real-time insights and risk assessment.',category: 'Micro SaaS',price: '$2,499',billing: 'month',features: [ 'Real-time financial monitoring','AI-powered risk assessment','Predictive financial modeling','Custom dashboard creation','Compliance reporting' ],ctaLabel: 'Analyze Finances',href: 'https: },{ id: 'ai-learning-management-system',title: 'AI Learning Management System',description: 'Intelligent learning platform that uses AI to personalize learning experiences and track progress.',category: 'Micro SaaS',price: '$1,299',billing: 'month',features: [ 'AI-powered content recommendations','Personalized learning paths','Progress tracking','Assessment automation','Multi-format content support' ],ctaLabel: 'Learn with AI',href: 'https: },{ id: 'ai-legal-document-automation',title: 'AI Legal Document Automation Platform',description: 'Intelligent legal platform that uses AI to automate document creation and contract analysis.',category: 'Micro SaaS',price: '$2,199',billing: 'month',features: [ 'AI-powered document generation','Contract analysis','Legal research automation','Compliance checking','Document templates' ],ctaLabel: 'Automate Legal Docs',href: 'https: } ] },{ name: 'AI Solutions',slug: 'ai-solutions',items: [ { id: 'ai-business-intelligence',title: 'AI Business Intelligence Platform',description: 'Next-generation BI platform that uses AI to automatically analyze data and generate actionable insights.',category: 'AI Solutions',price: '$2,999',billing: 'month',features: [ 'AI-powered data analysis','Automated insight generation','Natural language queries','Predictive analytics','Custom dashboard creation' ],ctaLabel: 'Get AI Insights',href: 'https: },{ id: 'ai-sales-copilot',title: 'AI Sales Copilot',description: 'Intelligent sales assistant that automates lead scoring,follow-ups,and sales process optimization.',category: 'AI Solutions',price: '$1,299',billing: 'month',features: [ 'AI-powered lead scoring','Automated follow-up sequences','Sales performance analytics','CRM integration','Predictive sales forecasting' ],ctaLabel: 'Boost Sales with AI',href: 'https: },{ id: 'ai-compliance-assistant',title: 'AI Compliance Assistant',description: 'Automated compliance monitoring and reporting using AI to ensure regulatory adherence.',category: 'AI Solutions',price: '$1,999',billing: 'month',features: [ 'Automated compliance monitoring','Regulatory change tracking','Risk assessment','Compliance reporting','Audit trail management' ],ctaLabel: 'Ensure Compliance',href: 'https: },{ id: 'ai-auto-email-responder',title: 'AI Auto Email Responder',description: 'Intelligent email automation that responds to customer inquiries and manages communication workflows.',category: 'AI Solutions',price: '$799',billing: 'month',features: [ 'AI-powered email responses','Natural language processing','Workflow automation','CRM integration','Performance analytics' ],ctaLabel: 'Automate Email',href: 'https: },{ id: 'ai-content-studio',title: 'LLM Content Studio',description: 'AI-powered content creation platform that generates high-quality,on-brand content for all channels.',category: 'AI Solutions',price: '$1,499',billing: 'month',features: [ 'AI content generation','Brand voice consistency','Multi-format support','SEO optimization','Content analytics' ],ctaLabel: 'Create with AI',href: 'https: },{ id: 'ai-finops-advisor',title: 'FinOps Advisor',description: 'AI-powered financial operations optimization for cloud cost management and resource allocation.',category: 'AI Solutions',price: '$1,799',billing: 'month',features: [ 'Cloud cost optimization','Resource allocation analysis','Cost forecasting','Budget management','ROI optimization' ],ctaLabel: 'Optimize FinOps',href: 'https: },{ id: 'ai-lead-scoring',title: 'AI Lead Scoring Platform',description: 'Intelligent lead scoring using machine learning to prioritize sales opportunities and improve conversion rates.',category: 'AI Solutions',price: '$899',billing: 'month',features: [ 'ML-powered lead scoring','Behavioral analysis','Conversion prediction','CRM integration','Performance tracking' ],ctaLabel: 'Score Leads with AI',href: 'https: },{ id: 'ai-chatbot',title: 'Website AI Chatbot',description: 'Intelligent chatbot that provides 24/7 customer support and improves user engagement on your website.',category: 'AI Solutions',price: '$599',billing: 'month',features: [ 'Natural language processing','24/7 availability','Multi-language support','CRM integration','Conversation analytics' ],ctaLabel: 'Add AI Chatbot',href: 'https: },{ id: 'ai-rag-search',title: 'RAG Search Platform',description: 'AI-powered search with retrieval-augmented generation for accurate,contextual answers with citations.',category: 'AI Solutions',price: '$1,299',billing: 'month',features: [ 'Retrieval-augmented generation','Contextual search','Citation tracking','Knowledge base integration','Search analytics' ],ctaLabel: 'Implement RAG Search',href: 'https: },{ id: 'ai-mlops',title: 'MLOps Pipeline Platform',description: 'End-to-end machine learning operations platform for model development,deployment,and monitoring.',category: 'AI Solutions',price: '$2,499',billing: 'month',features: [ 'Model development pipeline','Automated deployment','Performance monitoring','Model versioning','Drift detection' ],ctaLabel: 'Deploy MLOps',href: 'https: },{ id: 'ai-ecommerce-personalization',title: 'AI E-commerce Personalization',description: 'Intelligent product recommendations and personalized shopping experiences to boost conversion rates.',category: 'AI Solutions',price: '$1,199',billing: 'month',features: [ 'Product recommendations','Personalized search','Dynamic pricing','Customer segmentation','Conversion optimization' ],ctaLabel: 'Personalize Shopping',href: 'https: },{ id: 'ai-returns-management',title: 'AI Returns Management SaaS',description: 'Intelligent returns processing and fraud detection to streamline operations and reduce costs.',category: 'AI Solutions',price: '$899',billing: 'month',features: [ 'Automated returns processing','Fraud detection','Return analytics','Customer self-service','Integration with e-commerce platforms' ],ctaLabel: 'Manage Returns with AI',href: 'https: },{ id: 'ai-vendor-risk',title: 'AI Vendor Risk Management',description: 'Intelligent vendor risk assessment and monitoring using AI to ensure supply chain security.',category: 'AI Solutions',price: '$1,599',billing: 'month',features: [ 'AI-powered risk assessment','Continuous monitoring','Compliance tracking','Risk scoring','Automated alerts' ],ctaLabel: 'Manage Vendor Risk',href: 'https: },{ id: 'ai-seo-optimizer',title: 'AI SEO Optimizer',description: 'AI-powered SEO optimization that improves search rankings and drives organic traffic growth.',category: 'AI Solutions',price: '$799',billing: 'month',features: [ 'Keyword optimization','Content analysis','Technical SEO audit','Competitor analysis','Performance tracking' ],ctaLabel: 'Optimize SEO with AI',href: 'https: },{ id: 'ai-churn-predictor',title: 'AI Churn Predictor',description: 'Predict customer churn using machine learning and implement proactive retention strategies.',category: 'AI Solutions',price: '$1,099',billing: 'month',features: [ 'Churn prediction models','Risk scoring','Retention strategies','Customer segmentation','Intervention recommendations' ],ctaLabel: 'Predict Churn',href: 'https: },{ id: 'ai-incident-postmortems',title: 'AI Incident Postmortems',description: 'Automated incident analysis and postmortem generation for improved incident response and learning.',category: 'AI Solutions',price: '$699',billing: 'month',features: [ 'Automated incident analysis','Root cause identification','Postmortem generation','Knowledge base updates','Team learning insights' ],ctaLabel: 'Analyze Incidents',href: 'https: },{ id: 'ai-api-monitoring',title: 'AI API Monitoring SaaS',description: 'Intelligent API monitoring and performance optimization using AI for proactive issue detection.',category: 'AI Solutions',price: '$599',billing: 'month',features: [ 'Real-time API monitoring','Performance anomaly detection','Automated alerting','Performance optimization','Uptime tracking' ],ctaLabel: 'Monitor APIs with AI',href: 'https: },{ id: 'ai-gdpr-compliance',title: 'AI GDPR Cookie Compliance',description: 'Automated GDPR compliance management with intelligent cookie consent and data protection.',category: 'AI Solutions',price: '$399',billing: 'month',features: [ 'Cookie consent management','Data protection compliance','Privacy policy automation','Consent analytics','Regulatory updates' ],ctaLabel: 'Ensure GDPR Compliance',href: 'https: },{ id: 'ai-proofreading',title: 'AI Proofreading Studio',description: 'Advanced proofreading and editing using AI to improve content quality and readability.',category: 'AI Solutions',price: '$299',billing: 'month',features: [ 'AI-powered proofreading','Grammar and style checking','Content optimization','Multi-language support','Quality scoring' ],ctaLabel: 'Proofread with AI',href: 'https: },{ id: 'ai-customer-feedback',title: 'AI Customer Feedback Surveys',description: 'Intelligent feedback collection and analysis using AI to improve customer satisfaction and product development.',category: 'AI Solutions',price: '$499',billing: 'month',features: [ 'AI-powered survey design','Sentiment analysis','Feedback categorization','Actionable insights','Integration with CRM systems' ],ctaLabel: 'Collect Feedback with AI',href: 'https: },{ id: 'ai-meeting-notes',title: 'AI Meeting Notes & Summaries',description: 'Automated meeting transcription,summarization,and action item extraction using AI.',category: 'AI Solutions',price: '$299',billing: 'month',features: [ 'Automated transcription','AI summarization','Action item extraction','CRM integration','Meeting analytics' ],ctaLabel: 'Automate Meeting Notes',href: 'https: },{ id: 'ai-smart-forms',title: 'AI Smart Forms & Intake',description: 'Intelligent form processing with AI validation,conditional logic,and workflow automation.',category: 'AI Solutions',price: '$199',billing: 'month',features: [ 'AI-powered validation','Conditional logic','Workflow automation','Data extraction','Analytics and insights' ],ctaLabel: 'Build Smart Forms',href: 'https: },{ id: 'ai-customer-success',title: 'AI Customer Success Platform',description: 'Comprehensive customer success platform using AI to predict churn and optimize customer engagement.',category: 'AI Solutions',price: '$1,499',billing: 'month',features: [ 'Churn prediction','Customer health scoring','Engagement optimization','Success milestone tracking','ROI analytics' ],ctaLabel: 'Optimize Customer Success',href: 'https: },{ id: 'ai-workflow-orchestrator',title: 'AI Workflow Orchestrator',description: 'Intelligent workflow automation platform that uses AI to optimize business processes and increase efficiency.',category: 'AI Solutions',price: '$899',billing: 'month',features: [ 'AI-powered process optimization','Visual workflow builder','Intelligent task routing','Process mining','Performance analytics' ],ctaLabel: 'Automate Workflows',href: 'https: },{ id: 'ai-data-governance',title: 'AI Data Governance Platform',description: 'Comprehensive data governance solution using AI to ensure data quality,compliance,and security.',category: 'AI Solutions',price: '$2,499',billing: 'month',features: [ 'AI-powered data quality','Compliance monitoring','Data lineage tracking','Privacy impact assessment','Governance policies' ],ctaLabel: 'Govern Your Data',href: 'https: } ] },{ name: 'IT Services',slug: 'it-services',items: [ { id: 'cloud-migration-consulting',title: 'Cloud Migration Consulting',description: 'Expert guidance for migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',category: 'IT Services',price: '$150',billing: 'hour',features: [ 'Cloud readiness assessment','Migration strategy planning','Cost optimization analysis','Security and compliance review','Post-migration support' ],ctaLabel: 'Start Migration',href: 'https: },{ id: 'cybersecurity-audit',title: 'Cybersecurity Audit & Assessment',description: 'Comprehensive security assessment to identify vulnerabilities and strengthen your cybersecurity posture.',category: 'IT Services',price: '$5,000',billing: 'project',features: [ 'Vulnerability assessment','Penetration testing','Security policy review','Compliance gap analysis','Remediation roadmap' ],ctaLabel: 'Secure Your Business',href: 'https: },{ id: 'network-infrastructure-design',title: 'Network Infrastructure Design',description: 'Custom network architecture design for optimal performance,security,and scalability.',category: 'IT Services',price: '$8,000',billing: 'project',features: [ 'Network topology design','Security architecture','Performance optimization','Scalability planning','Implementation support' ],ctaLabel: 'Design Network',href: 'https: },{ id: 'data-backup-recovery',title: 'Data Backup & Disaster Recovery',description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',category: 'IT Services',price: '$2,500',billing: 'month',features: [ 'Automated backup systems','Disaster recovery planning','Regular testing and validation','24/7 monitoring','Quick recovery solutions' ],ctaLabel: 'Protect Your Data',href: 'https: },{ id: 'it-project-management',title: 'IT Project Management',description: 'Professional project management services for complex IT implementations and digital transformations.',category: 'IT Services',price: '$125',billing: 'hour',features: [ 'Project planning and scheduling','Risk management','Stakeholder communication','Progress tracking','Quality assurance' ],ctaLabel: 'Manage IT Projects',href: 'https: },{ id: 'system-integration',title: 'System Integration Services',description: 'Seamless integration of disparate systems to improve data flow and operational efficiency.',category: 'IT Services',price: '$175',billing: 'hour',features: [ 'API development and integration','Data mapping and transformation','Workflow automation','Testing and validation','Ongoing support' ],ctaLabel: 'Integrate Systems',href: 'https: },{ id: 'it-consulting',title: 'Strategic IT Consulting',description: 'Strategic guidance to align your technology investments with business objectives and growth plans.',category: 'IT Services',price: '$200',billing: 'hour',features: [ 'Technology strategy development','Digital transformation planning','Technology roadmap creation','Vendor selection assistance','ROI analysis' ],ctaLabel: 'Get IT Strategy',href: 'https: },{ id: 'managed-it-services',title: 'Managed IT Services',description: 'Comprehensive IT management including monitoring,maintenance,and support for your technology infrastructure.',category: 'IT Services',price: '$3,500',billing: 'month',features: [ '24/7 monitoring and support','Proactive maintenance','Security management','Backup and recovery','Help desk support' ],ctaLabel: 'Manage IT Infrastructure',href: 'https: },{ id: 'software-development',title: 'Custom Software Development',description: 'Tailored software solutions designed to meet your specific business requirements and workflows.',category: 'IT Services',price: '$100',billing: 'hour',features: [ 'Requirements analysis','Custom development','Testing and quality assurance','Deployment and training','Maintenance and support' ],ctaLabel: 'Develop Custom Software',href: 'https: },{ id: 'data-analytics-implementation',title: 'Data Analytics Implementation',description: 'Implementation of data analytics solutions to transform raw data into actionable business insights.',category: 'IT Services',price: '$15,000',billing: 'project',features: [ 'Data warehouse design','ETL pipeline development','Dashboard creation','User training','Ongoing optimization' ],ctaLabel: 'Implement Analytics',href: 'https: },{ id: 'devops-implementation',title: 'DevOps Implementation',description: 'Implementation of DevOps practices to accelerate software delivery and improve operational efficiency.',category: 'IT Services',price: '$12,000',billing: 'project',features: [ 'CI/CD pipeline setup','Infrastructure as code','Monitoring and logging','Team training','Process optimization' ],ctaLabel: 'Implement DevOps',href: 'https: },{ id: 'cloud-optimization',title: 'Cloud Cost Optimization',description: 'Optimize your cloud infrastructure to reduce costs while maintaining performance and reliability.',category: 'IT Services',price: '$3,000',billing: 'project',features: [ 'Cost analysis and audit','Resource optimization','Reserved instance planning','Performance tuning','Cost monitoring setup' ],ctaLabel: 'Optimize Cloud Costs',href: 'https: },{ id: 'security-compliance',title: 'Security Compliance Services',description: 'Achieve and maintain compliance with industry standards like SOC 2,ISO 27001,and GDPR.',category: 'IT Services',price: '$7,500',billing: 'project',features: [ 'Compliance gap analysis','Policy and procedure development','Security control implementation','Audit preparation','Ongoing compliance monitoring' ],ctaLabel: 'Achieve Compliance',href: 'https: },{ id: 'business-continuity',title: 'Business Continuity Planning',description: 'Comprehensive business continuity and disaster recovery planning to ensure operational resilience.',category: 'IT Services',price: '$10,000',billing: 'project',features: [ 'Business impact analysis','Recovery strategy development','Plan documentation','Testing and validation','Staff training' ],ctaLabel: 'Plan Continuity',href: 'https: },{ id: 'it-training',title: 'IT Training & Certification',description: 'Comprehensive training programs to enhance your team\'s technical skills and knowledge.',category: 'IT Services',price: '$2,000',billing: 'day',features: [ 'Customized training programs','Hands-on workshops','Certification preparation','Ongoing support','Progress tracking' ],ctaLabel: 'Train Your Team',href: 'https: },{ id: 'vendor-management',title: 'IT Vendor Management',description: 'Strategic vendor management to optimize costs,improve service quality,and reduce risks.',category: 'IT Services',price: '$150',billing: 'hour',features: [ 'Vendor assessment and selection','Contract negotiation','Performance monitoring','Relationship management','Cost optimization' ],ctaLabel: 'Manage Vendors',href: 'https: },{ id: 'digital-transformation',title: 'Digital Transformation Consulting',description: 'End-to-end digital transformation services to modernize your business operations and technology stack.',category: 'IT Services',price: '$25,000',billing: 'project',features: [ 'Digital maturity assessment','Transformation roadmap','Technology modernization','Change management','Success measurement' ],ctaLabel: 'Transform Digitally',href: 'https: },{ id: 'it-audit',title: 'IT Audit & Assessment',description: 'Comprehensive IT audit to evaluate your technology infrastructure,processes,and controls.',category: 'IT Services',price: '$8,000',billing: 'project',features: [ 'Infrastructure assessment','Process evaluation','Control testing','Risk identification','Recommendation report' ],ctaLabel: 'Audit IT Infrastructure',href: 'https: },{ id: 'performance-tuning',title: 'Performance Tuning & Optimization',description: 'Optimize your systems and applications for maximum performance and efficiency.',category: 'IT Services',price: '$125',billing: 'hour',features: [ 'Performance analysis','Bottleneck identification','Optimization implementation','Testing and validation','Performance monitoring' ],ctaLabel: 'Optimize Performance',href: 'https: },{ id: 'data-migration',title: 'Data Migration Services',description: 'Secure and efficient data migration between systems with minimal downtime and data loss.',category: 'IT Services',price: '$5,000',billing: 'project',features: [ 'Data mapping and analysis','Migration planning','Data validation','Rollback procedures','Post-migration verification' ],ctaLabel: 'Migrate Data',href: 'https: } ] },{ name: 'Cybersecurity',slug: 'cybersecurity',items: [ { id: 'm365-security-hardening-kit',title: 'M365 Security Hardening Kit',description: 'Baseline hardening,drift detection,and auto-remediation for Microsoft 365 tenants with executive reporting.',category: 'Cybersecurity',price: '$199',billing: 'month',features: [ 'Secure baseline as code','Misconfiguration detection','Auto-remediation playbooks','Graph API integrations','Compliance-ready reports' ],ctaLabel: 'Harden M365',href: 'https: },{ id: 'ai-threat-intelligence',title: 'AI Threat Intelligence Suite',description: 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',category: 'Cybersecurity',price: '$3,999',billing: 'month',features: [ 'AI threat detection','Behavioral analysis','Automated response','Threat hunting','Incident management' ],ctaLabel: 'Security Demo',href: 'https: },{ id: 'quantum-cryptography',title: 'Quantum Cryptography Solutions',description: 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.',category: 'Cybersecurity',price: '$12,000',billing: 'project',features: [ 'Quantum key distribution','Post-quantum crypto','Secure communication','Key management','Compliance ready' ],ctaLabel: 'Quantum Security',href: 'https: } ,{ id: 'managed-detection-response',title: 'Managed Detection & Response (MDR)',description: '24/7 monitoring,threat hunting,and incident response with SIEM/SOAR integration.',category: 'Cybersecurity',price: '$3,499',billing: 'month',features: [ 'SIEM setup and tuning','Playbooks and automation','Phishing and EDR integration','Compliance-ready reporting','Incident response retainers' ],ctaLabel: 'Activate MDR',href: 'https: },{ id: 'sase-rollout',title: 'Secure Access Service Edge (SASE) Rollout',description: 'Consolidate network and security with ZTNA,SWG,CASB,and SD-WAN.',category: 'Cybersecurity',price: '$20,000',billing: 'project',features: [ 'Architecture and vendor selection','Pilot and phased migration','Policy baselines','User experience optimization','Runbooks and training' ],ctaLabel: 'Deploy SASE',href: 'https: } ] },{ name: 'Data & Analytics',slug: 'data-analytics',items: [ { id: 'synthetic-data-generator',title: 'Synthetic Data Generator',description: 'Privacy-safe synthetic tabular/time-series/text data with utility/drift reports and DP options.',category: 'Data & Analytics',price: '$119',billing: 'month',features: [ 'Differential privacy & masking','Tabular/time-series/text modes','Utility and drift reports','APIs and SDKs','S3/Snowflake/BigQuery connectors' ],ctaLabel: 'Generate Data',href: 'https: },{ id: 'quantum-data-analytics',title: 'Quantum Data Analytics Platform',description: 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',category: 'Data & Analytics',price: '$6,999',billing: 'month',features: [ 'Quantum pattern recognition','Complex data modeling','Real-time insights','Predictive analytics','Visualization tools' ],ctaLabel: 'Analytics Demo',href: 'https: },{ id: 'ai-business-intelligence',title: 'AI Business Intelligence Suite',description: 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.',category: 'Data & Analytics',price: '$2,499',billing: 'month',features: [ 'Automated insights','Natural language queries','Predictive modeling','Custom dashboards','Data integration' ],ctaLabel: 'BI Assessment',href: 'https: } ,{ id: 'data-quality-observability',title: 'Data Quality & Observability',description: 'Monitor freshness,completeness,and lineage to trust your analytics and AI.',category: 'Data & Analytics',price: '$1,499',billing: 'month',features: [ 'Column-level lineage','Great Expectations policies','Alerting and incident Mgmt','Connectors: Snowflake,BigQuery,Databricks','Root-cause analysis' ],ctaLabel: 'Improve Data Trust',href: 'https: },{ id: 'modern-etl-migration',title: 'Modern ETL/ELT Migration',description: 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.',category: 'Data & Analytics',price: '$18,000',billing: 'project',features: [ 'dbt modeling and tests','Incremental loads','CI for analytics','Cost-efficient storage','Knowledge transfer' ],ctaLabel: 'Migrate Workloads',href: 'https: } ] },{ name: 'Cloud & DevOps',slug: 'cloud-devops',items: [ { id: 'uptime-slo-monitor',title: 'Uptime & SLO Monitor',description: 'Multi-region synthetic checks with SLO dashboards,error budgets,and burn rate alerts.',category: 'Cloud & DevOps',price: '$49',billing: 'month',features: [ 'Multi-region probes','SLO calculation and burn rates','Error budget policy','Alerts and dashboards','CI/CD release gates' ],ctaLabel: 'Monitor Reliability',href: 'https: },{ id: 'kubernetes-cost-analyzer',title: 'Kubernetes Cost Analyzer',description: 'Allocation,rightsizing,and bin‑packing insights by team/namespace with chargeback reports.',category: 'Cloud & DevOps',price: '$99',billing: 'month',features: [ 'Cost allocation by namespace/team','Requests/limits advisor','Bin‑packing recommendations','Chargeback/showback reports','Slack/Grafana integrations' ],ctaLabel: 'Cut K8s Spend',href: 'https: },{ id: 'autonomous-devops-platform',title: 'Autonomous DevOps Platform',description: 'Self-managing DevOps platform that automatically optimizes deployments,scaling,and infrastructure management.',category: 'Cloud & DevOps',price: '$4,999',billing: 'month',features: [ 'Automated deployments','Self-healing infrastructure','Performance optimization','Cost management','Continuous monitoring' ],ctaLabel: 'DevOps Demo',href: 'https: },{ id: 'quantum-cloud-infrastructure',title: 'Quantum Cloud Infrastructure',description: 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.',category: 'Cloud & DevOps',price: '$18,000',billing: 'project',features: [ 'Quantum cloud services','Hybrid infrastructure','Quantum optimization','Scalable architecture','Enterprise support' ],ctaLabel: 'Cloud Migration',href: 'https: } ,{ id: 'serverless-application-factory',title: 'Serverless Application Factory',description: 'Blueprints and accelerators to build secure,low-cost serverless backends fast.',category: 'Cloud & DevOps',price: '$16,000',billing: 'project',features: [ 'Patterns: EventBridge,Step Functions','IaC with CDK/Terraform','Observability baked-in','SECaaS and guardrails','Cost-efficiency targets' ],ctaLabel: 'Build Serverless',href: 'https: },{ id: 'disaster-recovery-blueprints',title: 'Disaster Recovery Blueprints (RTO/RPO)',description: 'Design and test DR strategies with automated failover and periodic game days.',category: 'Cloud & DevOps',price: '$20,000',billing: 'project',features: [ 'Multi-region architectures','Automated chaos tests','Backup and restore pipelines','Compliance documentation','Executive tabletop exercises' ],ctaLabel: 'Harden Resilience',href: 'https: } ] },{ name: 'Quantum Computing',slug: 'quantum-computing',items: [ { id: 'quantum-financial-trading',title: 'Quantum Financial Trading Platform',description: 'Revolutionary trading platform using quantum algorithms for portfolio optimization and risk assessment.',category: 'Quantum Computing',price: '$25,000',billing: 'month',features: [ 'Quantum portfolio optimization','Risk modeling','Real-time trading','Compliance tools','Performance analytics' ],ctaLabel: 'Trading Demo',href: 'https: },{ id: 'quantum-drug-discovery',title: 'Quantum Drug Discovery Platform',description: 'Advanced drug discovery platform leveraging quantum computing for molecular modeling and drug design.',category: 'Quantum Computing',price: '$45,000',billing: 'month',features: [ 'Quantum molecular modeling','Drug design algorithms','Clinical trial optimization','Research collaboration','Regulatory support' ],ctaLabel: 'Research Access',href: 'https: } ] },{ name: 'Blockchain & Web3',slug: 'blockchain-web3',items: [ { id: 'decentralized-ai-marketplace',title: 'Decentralized AI Marketplace',description: 'Web3-powered marketplace for AI models,data,and computational resources with blockchain-based governance.',category: 'Blockchain & Web3',price: '$1,999',billing: 'month',features: [ 'AI model marketplace','Decentralized governance','Smart contracts','Token economics','Community-driven' ],ctaLabel: 'Marketplace Access',href: 'https: },{ id: 'quantum-blockchain-platform',title: 'Quantum Blockchain Platform',description: 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.',category: 'Blockchain & Web3',price: '$8,999',billing: 'month',features: [ 'Quantum-resistant crypto','Enhanced consensus','Scalable architecture','Interoperability','Enterprise features' ],ctaLabel: 'Blockchain Demo',href: 'https: } ] },{ name: 'IoT & Edge',slug: 'iot-edge',items: [ { id: 'quantum-iot-platform',title: 'Quantum IoT Platform',description: 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',category: 'IoT & Edge',price: '$3,999',billing: 'month',features: [ 'Quantum edge processing','Device optimization','Intelligent routing','Energy efficiency','Scalable deployment' ],ctaLabel: 'IoT Demo',href: 'https: },{ id: 'autonomous-edge-ai',title: 'Autonomous Edge AI Platform',description: 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.',category: 'IoT & Edge',price: '$2,999',billing: 'month',features: [ 'Autonomous optimization','Edge AI processing','Network intelligence','Resource management','Performance monitoring' ],ctaLabel: 'Edge AI Demo',href: 'https: } ,{ id: 'predictive-maintenance-iot',title: 'Predictive Maintenance for IoT Fleets',description: 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',category: 'IoT & Edge',price: '$2,499',billing: 'month',features: [ 'Edge telemetry ingestion','ML failure prediction','Work order integration (EAM/CMMS)','Kitting and rollout playbooks','Dashboards and alerts' ],ctaLabel: 'Reduce Downtime',href: 'https: },{ id: 'digital-twin-starter',title: 'Digital Twin Starter Kit',description: 'Model physical systems with twins to simulate scenarios and optimize operations.',category: 'IoT & Edge',price: '$14,000',billing: 'project',features: [ '3D/graph models','Stream processing','Integration with PLC/SCADA','KPI definition and alerts','Pilot-to-production plan' ],ctaLabel: 'Build a Twin',href: 'https: } ] },{ name: 'Green Tech',slug: 'green-tech',items: [ { id: 'quantum-energy-optimization',title: 'Quantum Energy Optimization',description: 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',category: 'Green Tech',price: '$12,000',billing: 'month',features: [ 'Quantum energy modeling','Renewable optimization','Grid management','Carbon tracking','Sustainability reporting' ],ctaLabel: 'Energy Assessment',href: 'https: },{ id: 'ai-climate-prediction',title: 'AI Climate Prediction Platform',description: 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.',category: 'Green Tech',price: '$7,999',billing: 'month',features: [ 'AI climate modeling','Quantum simulations','Real-time predictions','Risk assessment','Policy recommendations' ],ctaLabel: 'Climate Demo',href: 'https: } ,{ id: 'carbon-accounting-saas',title: 'Carbon Accounting & ESG Reporting',description: 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',category: 'Green Tech',price: '$999',billing: 'month',features: [ 'GHG Protocol-aligned factors','Automated data pipelines','Supplier questionnaires','Assurance-ready exports','Target tracking (SBTi)' ],ctaLabel: 'Start ESG Tracking',href: 'https: } ] },{ name: 'Space Tech',slug: 'space-tech',items: [ { id: 'satellite-ai-orchestrator',title: 'Satellite AI Orchestrator',description: 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',category: 'Space Tech',price: '$15,000',billing: 'month',features: [ 'Autonomous orbital optimization','AI-powered data analysis','Real-time monitoring','Collision avoidance','Global coverage' ],ctaLabel: 'Launch Satellites',href: 'https: },{ id: 'quantum-space-communications',title: 'Quantum Space Communications',description: 'Next-generation quantum communication system for secure,ultra-fast data transmission between Earth and space.',category: 'Space Tech',price: '$25,000',billing: 'month',features: [ 'Quantum entanglement','Unhackable encryption','Light-speed transmission','Deep space coverage','Interplanetary network' ],ctaLabel: 'Connect Space',href: 'https: } ,{ id: 'satellite-imagery-analytics',title: 'Satellite Imagery Analytics',description: 'Computer vision on multi-spectral imagery for agriculture,insurance,and defense insights.',category: 'Space Tech',price: '$5,999',billing: 'month',features: [ 'Change detection','Crop yield estimation','Object and damage detection','APIs and dashboards','Tasking provider integrations' ],ctaLabel: 'Analyze Imagery',href: 'https: } ] },{ name: 'BioTech & Health',slug: 'biotech-health',items: [ { id: 'ai-drug-discovery-platform',title: 'AI Drug Discovery Platform',description: 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',category: 'BioTech & Health',price: '$35,000',billing: 'month',features: [ 'AI molecular modeling','Quantum simulations','Clinical trial optimization','Drug repurposing','Regulatory compliance' ],ctaLabel: 'Discover Drugs',href: 'https: },{ id: 'quantum-genome-analyzer',title: 'Quantum Genome Analyzer',description: 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.',category: 'BioTech & Health',price: '$18,000',billing: 'month',features: [ 'Quantum DNA sequencing','Personalized medicine','Disease prediction','Genetic counseling','Research collaboration' ],ctaLabel: 'Analyze Genome',href: 'https: } ,{ id: 'telemedicine-ai-triage',title: 'Telemedicine AI Triage',description: 'AI symptom checker with escalation workflows to clinicians and EHR integration.',category: 'BioTech & Health',price: '$1,999',billing: 'month',features: [ 'Clinical safety guardrails','HL7/FHIR integration','Language and accessibility','Analytics and outcomes tracking','Privacy and consent management' ],ctaLabel: 'Enable Triage',href: 'https: } ] },{ name: 'FinTech & DeFi',slug: 'fintech-defi',items: [ { id: 'quantum-trading-algorithm',title: 'Quantum Trading Algorithm',description: 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',category: 'FinTech & DeFi',price: '$45,000',billing: 'month',features: [ 'Quantum market analysis','Microsecond trading','Risk management','Portfolio optimization','Regulatory compliance' ],ctaLabel: 'Start Trading',href: 'https: },{ id: 'autonomous-defi-protocol',title: 'Autonomous DeFi Protocol',description: 'Self-managing DeFi protocol that automatically optimizes yields,manages risks,and executes strategies.',category: 'FinTech & DeFi',price: '$12,000',billing: 'month',features: [ 'Autonomous yield farming','Risk management','Strategy optimization','Cross-chain integration','Smart contract security' ],ctaLabel: 'Deploy Protocol',href: 'https: } ,{ id: 'kyc-aml-transaction-monitoring',title: 'KYC/AML Transaction Monitoring',description: 'Detect suspicious activity using rules + ML with investigator case management.',category: 'FinTech & DeFi',price: '$2,499',billing: 'month',features: [ 'Entity resolution','Sanctions and watchlists','Graph analytics','Case workflow and SAR exports','Audit and model governance' ],ctaLabel: 'Strengthen Compliance',href: 'https: } ] },{ name: 'Metaverse & AR/VR',slug: 'metaverse-ar-vr',items: [ { id: 'quantum-metaverse-engine',title: 'Quantum Metaverse Engine',description: 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',category: 'Metaverse & AR/VR',price: '$28,000',billing: 'month',features: [ 'Quantum rendering','Infinite scalability','Realistic physics','Cross-platform support','AI-powered NPCs' ],ctaLabel: 'Enter Metaverse',href: 'https: },{ id: 'autonomous-ar-navigation',title: 'Autonomous AR Navigation',description: 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.',category: 'Metaverse & AR/VR',price: '$8,500',billing: 'month',features: [ 'Real-time AR overlays','Autonomous navigation','Smart city integration','Traffic optimization','Safety monitoring' ],ctaLabel: 'Navigate AR',href: 'https: } ,{ id: 'vr-training-simulators',title: 'VR Training Simulators',description: 'Enterprise-grade immersive learning for safety,field ops,and medical procedures.',category: 'Metaverse & AR/VR',price: '$30,000',billing: 'project',features: [ 'Curriculum design','Multi-user scenarios','LMS integration and analytics','Hardware procurement guidance','Operations and support' ],ctaLabel: 'Build Simulator',href: 'https: } ] },{ name: 'Autonomous Systems',slug: 'autonomous-systems',items: [ { id: 'quantum-ai-controller',title: 'Quantum AI Controller',description: 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',category: 'Autonomous Systems',price: '$32,000',billing: 'month',features: [ 'Quantum decision making','Autonomous learning','System optimization','Predictive maintenance','Multi-system coordination' ],ctaLabel: 'Control Systems',href: 'https: },{ id: 'autonomous-robotics-platform',title: 'Autonomous Robotics Platform',description: 'Complete robotics platform for autonomous manufacturing,logistics,and service operations.',category: 'Autonomous Systems',price: '$22,000',billing: 'month',features: [ 'Autonomous navigation','Task learning','Safety protocols','Multi-robot coordination','Performance analytics' ],ctaLabel: 'Deploy Robots',href: 'https: } ,{ id: 'warehouse-robotics-orchestration',title: 'Warehouse Robotics Orchestration',description: 'Coordinate AMRs,conveyors,and pick stations to maximize throughput and safety.',category: 'Autonomous Systems',price: '$9,999',billing: 'month',features: [ 'Task allocation and routing','3D digital twin monitoring','Workforce and robot collaboration','Safety zones and policies','KPIs and optimization' ],ctaLabel: 'Orchestrate Robots',href: 'https: } ] },{ name: 'Digital Marketing',slug: 'digital-marketing',items: [ { id: 'ai-social-media-manager',title: 'AI Social Media Manager',description: 'Intelligent social media management platform that creates content,schedules posts,and optimizes engagement across all platforms.',category: 'Digital Marketing',price: '$199',billing: 'month',features: [ 'AI content generation','Multi-platform scheduling','Engagement optimization','Analytics dashboard','Brand voice consistency' ],ctaLabel: 'Manage Social Media',href: 'https: },{ id: 'predictive-marketing-analytics',title: 'Predictive Marketing Analytics',description: 'AI-powered marketing analytics that predicts customer behavior,optimizes campaigns,and maximizes ROI.',category: 'Digital Marketing',price: '$299',billing: 'month',features: [ 'Customer behavior prediction','Campaign optimization','ROI forecasting','Attribution modeling','Real-time insights' ],ctaLabel: 'Analyze Marketing',href: 'https: },{ id: 'ai-seo-optimizer',title: 'AI SEO Optimizer Pro',description: 'Advanced SEO optimization platform that analyzes competitors,suggests improvements,and tracks rankings automatically.',category: 'Digital Marketing',price: '$249',billing: 'month',features: [ 'Competitor analysis','Keyword optimization','Content suggestions','Ranking tracking','Technical SEO audit' ],ctaLabel: 'Optimize SEO',href: 'https: } ] },{ name: 'E-commerce Solutions',slug: 'ecommerce-solutions',items: [ { id: 'ai-product-recommendation-engine',title: 'AI Product Recommendation Engine',description: 'Intelligent product recommendation system that increases conversion rates and average order value.',category: 'E-commerce Solutions',price: '$399',billing: 'month',features: [ 'Personalized recommendations','Behavioral analysis','A/B testing','Real-time optimization','Analytics dashboard' ],ctaLabel: 'Boost Sales',href: 'https: },{ id: 'smart-inventory-optimizer',title: 'Smart Inventory Optimizer',description: 'AI-driven inventory optimization for e-commerce that reduces stockouts and overstock situations.',category: 'E-commerce Solutions',price: '$299',billing: 'month',features: [ 'Demand forecasting','Stock level optimization','Reorder automation','Seasonal adjustments','Cost optimization' ],ctaLabel: 'Optimize Inventory',href: 'https: },{ id: 'ai-customer-chatbot',title: 'AI Customer Chatbot',description: 'Intelligent chatbot that handles customer inquiries,provides product information,and processes orders.',category: 'E-commerce Solutions',price: '$199',billing: 'month',features: [ 'Natural language processing','Product search assistance','Order processing','24/7 availability','Human handoff' ],ctaLabel: 'Deploy Chatbot',href: 'https: } ] },{ name: 'Remote Work Tools',slug: 'remote-work-tools',items: [ { id: 'ai-meeting-assistant',title: 'AI Meeting Assistant',description: 'Intelligent meeting assistant that transcribes,summarizes,and extracts action items from virtual meetings.',category: 'Remote Work Tools',price: '$149',billing: 'month',features: [ 'Real-time transcription','Meeting summarization','Action item extraction','Integration with calendar','Searchable archives' ],ctaLabel: 'Assist Meetings',href: 'https: },{ id: 'collaborative-project-manager',title: 'Collaborative Project Manager',description: 'AI-powered project management platform that optimizes team collaboration and project delivery.',category: 'Remote Work Tools',price: '$199',billing: 'month',features: [ 'Task automation','Team collaboration','Progress tracking','Resource optimization','Risk management' ],ctaLabel: 'Manage Projects',href: 'https: },{ id: 'virtual-office-platform',title: 'Virtual Office Platform',description: 'Immersive virtual office environment for remote teams with AI-powered collaboration tools.',category: 'Remote Work Tools',price: '$299',billing: 'month',features: [ '3D virtual spaces','Real-time collaboration','AI meeting rooms','Team building activities','Productivity analytics' ],ctaLabel: 'Create Virtual Office',href: 'https: } ] },{ name: 'Legal Tech',slug: 'legal-tech',items: [ { id: 'ai-contract-reviewer',title: 'AI Contract Reviewer',description: 'Advanced contract review system that identifies risks,suggests improvements,and ensures compliance.',category: 'Legal Tech',price: '$399',billing: 'month',features: [ 'Risk identification','Compliance checking','Clause analysis','Version comparison','Legal research integration' ],ctaLabel: 'Review Contracts',href: 'https: },{ id: 'legal-research-assistant',title: 'Legal Research Assistant',description: 'AI-powered legal research platform that finds relevant cases,statutes,and legal precedents.',category: 'Legal Tech',price: '$299',billing: 'month',features: [ 'Case law search','Statute analysis','Precedent identification','Citation management','Research summaries' ],ctaLabel: 'Research Legal',href: 'https: },{ id: 'compliance-monitoring-system',title: 'Compliance Monitoring System',description: 'Automated compliance monitoring that tracks regulatory changes and ensures adherence to legal requirements.',category: 'Legal Tech',price: '$499',billing: 'month',features: [ 'Regulatory tracking','Compliance assessment','Risk alerts','Audit preparation','Reporting automation' ],ctaLabel: 'Monitor Compliance',href: 'https: } ] },{ name: 'EdTech',slug: 'edtech',items: [ { id: 'adaptive-learning-platform',title: 'Adaptive Learning Platform',description: 'AI-powered learning platform that adapts content and pace to individual student needs and learning styles.',category: 'EdTech',price: '$199',billing: 'month',features: [ 'Personalized learning paths','Adaptive assessments','Progress tracking','Content recommendations','Analytics dashboard' ],ctaLabel: 'Adapt Learning',href: 'https: },{ id: 'virtual-reality-classroom',title: 'Virtual Reality Classroom',description: 'Immersive VR learning environment that creates engaging educational experiences for students.',category: 'EdTech',price: '$399',billing: 'month',features: [ '3D learning environments','Interactive simulations','Multi-user collaboration','Content creation tools','Progress tracking' ],ctaLabel: 'Create VR Classroom',href: 'https: },{ id: 'ai-tutor-assistant',title: 'AI Tutor Assistant',description: 'Intelligent tutoring system that provides personalized guidance and support to students.',category: 'EdTech',price: '$149',billing: 'month',features: [ 'Personalized tutoring','Homework assistance','Progress monitoring','Parent communication','Learning analytics' ],ctaLabel: 'Get AI Tutor',href: 'https: } ] },{ name: 'Real Estate Tech',slug: 'real-estate-tech',items: [ { id: 'ai-property-valuator',title: 'AI Property Valuator',description: 'Advanced property valuation system using AI to analyze market data and provide accurate property assessments.',category: 'Real Estate Tech',price: '$299',billing: 'month',features: [ 'Market analysis','Property comparison','Valuation algorithms','Market trends','Investment insights' ],ctaLabel: 'Value Property',href: 'https: },{ id: 'virtual-property-tour',title: 'Virtual Property Tour Platform',description: 'Immersive virtual tour platform that allows potential buyers to explore properties remotely.',category: 'Real Estate Tech',price: '$199',billing: 'month',features: [ '360-degree tours','Interactive floor plans','Virtual staging','Lead generation','Analytics dashboard' ],ctaLabel: 'Create Virtual Tours',href: 'https: },{ id: 'smart-property-manager',title: 'Smart Property Manager',description: 'AI-powered property management system that optimizes operations and tenant satisfaction.',category: 'Real Estate Tech',price: '$399',billing: 'month',features: [ 'Maintenance scheduling','Tenant communication','Financial tracking','Performance analytics','Predictive maintenance' ],ctaLabel: 'Manage Properties',href: 'https: } ] },{ name: 'Supply Chain Tech',slug: 'supply-chain-tech',items: [ { id: 'ai-supply-chain-optimizer',title: 'AI Supply Chain Optimizer',description: 'Intelligent supply chain optimization platform that reduces costs and improves efficiency.',category: 'Supply Chain Tech',price: '$599',billing: 'month',features: [ 'Route optimization','Inventory management','Demand forecasting','Cost analysis','Risk assessment' ],ctaLabel: 'Optimize Supply Chain',href: 'https: },{ id: 'blockchain-tracking-system',title: 'Blockchain Tracking System',description: 'Transparent supply chain tracking using blockchain technology for end-to-end visibility.',category: 'Supply Chain Tech',price: '$399',billing: 'month',features: [ 'End-to-end tracking','Transparency','Quality assurance','Compliance reporting','Stakeholder access' ],ctaLabel: 'Track Supply Chain',href: 'https: },{ id: 'predictive-logistics',title: 'Predictive Logistics Platform',description: 'AI-powered logistics platform that predicts delays and optimizes delivery routes.',category: 'Supply Chain Tech',price: '$299',billing: 'month',features: [ 'Delay prediction','Route optimization','Real-time tracking','Performance analytics','Cost optimization' ],ctaLabel: 'Optimize Logistics',href: 'https: } ] },{ name: 'Energy Tech',slug: 'energy-tech',items: [ { id: 'smart-grid-optimizer',title: 'Smart Grid Optimizer',description: 'AI-powered smart grid optimization platform that improves energy distribution and reduces waste.',category: 'Energy Tech',price: '$799',billing: 'month',features: [ 'Grid optimization','Demand response','Energy storage','Renewable integration','Cost reduction' ],ctaLabel: 'Optimize Grid',href: 'https: },{ id: 'renewable-energy-manager',title: 'Renewable Energy Manager',description: 'Comprehensive renewable energy management system for solar,wind,and hydroelectric power.',category: 'Energy Tech',price: '$499',billing: 'month',features: [ 'Energy production monitoring','Storage optimization','Grid integration','Performance analytics','Maintenance scheduling' ],ctaLabel: 'Manage Renewables',href: 'https: },{ id: 'energy-efficiency-analyzer',title: 'Energy Efficiency Analyzer',description: 'AI-powered energy efficiency analysis that identifies optimization opportunities and tracks improvements.',category: 'Energy Tech',price: '$299',billing: 'month',features: [ 'Efficiency analysis','Optimization recommendations','Cost tracking','Performance monitoring','Sustainability reporting' ],ctaLabel: 'Analyze Efficiency',href: 'https: } ] },{ name: 'Smart Cities',slug: 'smart-cities',items: [ { id: 'traffic-optimization-system',title: 'Traffic Optimization System',description: 'AI-powered traffic management system that reduces congestion and improves urban mobility.',category: 'Smart Cities',price: '$999',billing: 'month',features: [ 'Real-time traffic monitoring','Signal optimization','Congestion prediction','Public transport integration','Environmental impact' ],ctaLabel: 'Optimize Traffic',href: 'https: },{ id: 'smart-parking-platform',title: 'Smart Parking Platform',description: 'Intelligent parking management system that reduces search time and optimizes space utilization.',category: 'Smart Cities',price: '$399',billing: 'month',features: [ 'Space detection','Mobile app integration','Payment processing','Analytics dashboard','City integration' ],ctaLabel: 'Smart Parking',href: 'https: },{ id: 'environmental-monitoring',title: 'Environmental Monitoring System',description: 'Comprehensive environmental monitoring platform for air quality,noise,and pollution tracking.',category: 'Smart Cities',price: '$599',billing: 'month',features: [ 'Air quality monitoring','Noise pollution tracking','Data visualization','Alert system','Regulatory compliance' ],ctaLabel: 'Monitor Environment',href: 'https: } ] },{ name: 'AgriTech',slug: 'agritech',items: [ { id: 'precision-agriculture-platform',title: 'Precision Agriculture Platform',description: 'AI-powered precision agriculture system that optimizes crop yields and reduces resource waste.',category: 'AgriTech',price: '$499',billing: 'month',features: [ 'Soil analysis','Crop monitoring','Irrigation optimization','Yield prediction','Resource management' ],ctaLabel: 'Optimize Agriculture',href: 'https: },{ id: 'drone-farming-system',title: 'Drone Farming System',description: 'Autonomous drone system for crop monitoring,spraying,and data collection in agriculture.',category: 'AgriTech',price: '$799',billing: 'month',features: [ 'Autonomous flight','Crop monitoring','Precision spraying','Data collection','Analytics platform' ],ctaLabel: 'Deploy Drones',href: 'https: },{ id: 'livestock-monitoring',title: 'Livestock Monitoring System',description: 'AI-powered livestock monitoring system for health tracking and productivity optimization.',category: 'AgriTech',price: '$299',billing: 'month',features: [ 'Health monitoring','Behavior analysis','Productivity tracking','Disease detection','Breeding optimization' ],ctaLabel: 'Monitor Livestock',href: 'https: } ] },{ name: 'Media & Entertainment',slug: 'media-entertainment',items: [ { id: 'ai-content-creator',title: 'AI Content Creator',description: 'Advanced AI platform that generates creative content for media and entertainment industries.',category: 'Media & Entertainment',price: '$399',billing: 'month',features: [ 'Content generation','Style customization','Multi-format output','Collaboration tools','Quality assurance' ],ctaLabel: 'Create Content',href: 'https: },{ id: 'personalized-streaming',title: 'Personalized Streaming Platform',description: 'AI-powered streaming platform that personalizes content recommendations and user experience.',category: 'Media & Entertainment',price: '$299',billing: 'month',features: [ 'Content personalization','Recommendation engine','User behavior analysis','Content discovery','Engagement optimization' ],ctaLabel: 'Personalize Streaming',href: 'https: },{ id: 'virtual-production-studio',title: 'Virtual Production Studio',description: 'Immersive virtual production environment for film,TV,and digital content creation.',category: 'Media & Entertainment',price: '$1,999',billing: 'month',features: [ 'Virtual sets','Real-time rendering','Motion capture','Collaborative editing','Asset management' ],ctaLabel: 'Create Virtually',href: 'https: } ] },{ name: 'Logistics Tech',slug: 'logistics-tech',items: [ { id: 'autonomous-delivery-system',title: 'Autonomous Delivery System',description: 'AI-powered autonomous delivery system for last-mile logistics and package delivery.',category: 'Logistics Tech',price: '$899',billing: 'month',features: [ 'Route optimization','Autonomous navigation','Package tracking','Delivery scheduling','Customer notification' ],ctaLabel: 'Automate Delivery',href: 'https: },{ id: 'warehouse-automation',title: 'Warehouse Automation Platform',description: 'Comprehensive warehouse automation system that optimizes operations and reduces costs.',category: 'Logistics Tech',price: '$699',billing: 'month',features: [ 'Robotic automation','Inventory management','Order fulfillment','Performance analytics','Maintenance scheduling' ],ctaLabel: 'Automate Warehouse',href: 'https: },{ id: 'supply-chain-visibility',title: 'Supply Chain Visibility Platform',description: 'End-to-end supply chain visibility platform with real-time tracking and analytics.',category: 'Logistics Tech',price: '$399',billing: 'month',features: [ 'Real-time tracking','Risk assessment','Performance analytics','Stakeholder collaboration','Compliance reporting' ],ctaLabel: 'Track Supply Chain',href: 'https: } ] },{ name: 'HR Tech',slug: 'hr-tech',items: [ { id: 'ai-recruitment-platform',title: 'AI Recruitment Platform',description: 'Intelligent recruitment platform that automates candidate screening and improves hiring efficiency.',category: 'HR Tech',price: '$299',billing: 'month',features: [ 'Resume screening','Skill assessment','Interview scheduling','Candidate matching','Analytics dashboard' ],ctaLabel: 'Recruit Smarter',href: 'https: },{ id: 'employee-engagement-monitor',title: 'Employee Engagement Monitor',description: 'AI-powered employee engagement platform that tracks satisfaction and improves workplace culture.',category: 'HR Tech',price: '$199',billing: 'month',features: [ 'Engagement surveys','Sentiment analysis','Performance tracking','Feedback management','Action planning' ],ctaLabel: 'Monitor Engagement',href: 'https: },{ id: 'learning-management-system',title: 'AI Learning Management System',description: 'Intelligent learning management system that personalizes training and tracks employee development.',category: 'HR Tech',price: '$249',billing: 'month',features: [ 'Personalized learning','Skill assessment','Progress tracking','Content management','Analytics reporting' ],ctaLabel: 'Manage Learning',href: 'https: } ] },{ name: 'Sales Tech',slug: 'sales-tech',items: [ { id: 'ai-sales-predictor',title: 'AI Sales Predictor',description: 'Advanced sales prediction platform that forecasts revenue and identifies growth opportunities.',category: 'Sales Tech',price: '$399',billing: 'month',features: [ 'Revenue forecasting','Lead scoring','Opportunity identification','Performance analytics','Growth insights' ],ctaLabel: 'Predict Sales',href: 'https: },{ id: 'sales-automation-platform',title: 'Sales Automation Platform',description: 'Comprehensive sales automation platform that streamlines processes and increases productivity.',category: 'Sales Tech',price: '$299',billing: 'month',features: [ 'Lead management','Email automation','Meeting scheduling','Pipeline tracking','Performance analytics' ],ctaLabel: 'Automate Sales',href: 'https: },{ id: 'customer-success-platform',title: 'Customer Success Platform',description: 'AI-powered customer success platform that improves retention and drives growth.',category: 'Sales Tech',price: '$249',billing: 'month',features: [ 'Customer health monitoring','Success planning','Retention analytics','Upsell opportunities','Churn prediction' ],ctaLabel: 'Succeed with Customers',href: 'https: } ] },{ name: 'Customer Experience',slug: 'customer-experience',items: [ { id: 'omnichannel-experience-platform',title: 'Omnichannel Experience Platform',description: 'Unified customer experience platform that provides seamless interactions across all channels.',category: 'Customer Experience',price: '$499',billing: 'month',features: [ 'Channel integration','Customer journey mapping','Personalization engine','Analytics dashboard','Performance optimization' ],ctaLabel: 'Unify Experience',href: 'https: },{ id: 'sentiment-analysis-engine',title: 'Sentiment Analysis Engine',description: 'Advanced sentiment analysis platform that monitors customer feedback and improves satisfaction.',category: 'Customer Experience',price: '$199',billing: 'month',features: [ 'Real-time monitoring','Multi-language support','Trend analysis','Alert system','Action recommendations' ],ctaLabel: 'Analyze Sentiment',href: 'https: },{ id: 'customer-feedback-automation',title: 'Customer Feedback Automation',description: 'Automated customer feedback collection and analysis system for continuous improvement.',category: 'Customer Experience',price: '$149',billing: 'month',features: [ 'Automated surveys','Feedback analysis','Response management','Improvement tracking','ROI measurement' ],ctaLabel: 'Automate Feedback',href: 'https: } ] },{ name: 'Productivity Tools',slug: 'productivity-tools',items: [ { id: 'ai-task-manager',title: 'AI Task Manager',description: 'Intelligent task management platform that prioritizes work and optimizes productivity.',category: 'Productivity Tools',price: '$99',billing: 'month',features: [ 'Smart prioritization','Time tracking','Progress monitoring','Team collaboration','Performance analytics' ],ctaLabel: 'Manage Tasks',href: 'https: },{ id: 'workflow-automation-engine',title: 'Workflow Automation Engine',description: 'Powerful workflow automation platform that streamlines business processes and reduces manual work.',category: 'Productivity Tools',price: '$199',billing: 'month',features: [ 'Process automation','Integration capabilities','Workflow designer','Performance monitoring','Analytics dashboard' ],ctaLabel: 'Automate Workflows',href: 'https: },{ id: 'collaborative-workspace',title: 'Collaborative Workspace Platform',description: 'Advanced collaborative workspace that enhances team productivity and communication.',category: 'Productivity Tools',price: '$149',billing: 'month',features: [ 'Real-time collaboration','Document sharing','Communication tools','Project management','Analytics insights' ],ctaLabel: 'Collaborate Better',href: 'https: } ] } ];
export type ServiceItem = { id: string; title: string; description: string; category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Digital Marketing' | 'E-commerce Solutions' | 'Remote Work Tools' | 'Legal Tech' | 'EdTech' | 'Real Estate Tech' | 'Supply Chain Tech' | 'Energy Tech' | 'Smart Cities' | 'AgriTech' | 'Media & Entertainment' | 'Logistics Tech' | 'HR Tech' | 'Sales Tech' | 'Customer Experience' | 'Productivity Tools'; price: string; billing: 'month' | 'project' | 'hour'; features: string[]; ctaLabel: string; href: string; external?: boolean}; export type ServiceCategory = { name: string; slug: string; items: ServiceItem[]}; export const servicesCatalog: ServiceCategory[] = [ { name: 'Micro SaaS',slug: 'micro-saas',items: [ { id: 'pdf-render-api',title: 'PDF Render API',description: 'Reliable HTML-to-PDF rendering with templates,assets,async callbacks,and storage destinations.',category: 'Micro SaaS',price: '$29',billing: 'month',features: [ 'Chromium-based rendering','Templates and asset hosting','Async callbacks and webhooks','S3/GCS/Azure storage targets','Usage analytics and quotas' ],ctaLabel: 'Generate PDFs',href: 'https: },{ id: 'api-documentation-generator',title: 'API Documentation Generator',description: 'Turn OpenAPI/GraphQL schemas into beautiful,versioned docs with SDK snippets and search.',category: 'Micro SaaS',price: '$49',billing: 'month',features: [ 'Schema parsing (OAS/GraphQL)','SDK snippets and examples','Changelogs and versioning','Full-text search and themes','CI publish workflows' ],ctaLabel: 'Publish Docs',href: 'https: },{ id: 'smart-contract-risk-scanner',title: 'Smart Contract Risk Scanner',description: 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Real-time vulnerability detection','Automated security scoring','Compliance reporting','Integration with major blockchains','24/7 monitoring dashboard' ],ctaLabel: 'Start Free Trial',href: 'https: },{ id: 'ai-content-optimizer',title: 'AI Content Optimizer Pro',description: 'Advanced content optimization using AI to improve SEO,readability,and engagement across all digital platforms.',category: 'Micro SaaS',price: '$199',billing: 'month',features: [ 'AI-powered SEO optimization','Content readability scoring','Multi-language support','Performance analytics','Automated A/B testing' ],ctaLabel: 'Get Started',href: 'https: },{ id: 'quantum-workflow-automation',title: 'Quantum Workflow Automation',description: 'Next-generation workflow automation leveraging quantum computing principles for complex business process optimization.',category: 'Micro SaaS',price: '$499',billing: 'month',features: [ 'Quantum-inspired algorithms','Complex process modeling','Real-time optimization','Predictive analytics','Enterprise integration' ],ctaLabel: 'Schedule Demo',href: 'https: },{ id: 'edge-ai-inference-engine',title: 'Edge AI Inference Engine',description: 'Lightweight AI inference engine optimized for edge devices,enabling real-time AI processing without cloud dependency.',category: 'Micro SaaS',price: '$399',billing: 'month',features: [ 'Edge-optimized models','Low latency processing','Offline capability','Model compression','Cross-platform support' ],ctaLabel: 'Deploy Now',href: 'https: },{ id: 'autonomous-crm-optimizer',title: 'Autonomous CRM Optimizer',description: 'AI-powered CRM system that automatically optimizes customer relationships,sales processes,and marketing campaigns.',category: 'Micro SaaS',price: '$599',billing: 'month',features: [ 'Autonomous lead scoring','Predictive customer behavior','Automated follow-ups','Revenue optimization','Multi-channel integration' ],ctaLabel: 'Optimize CRM',href: 'https: },{ id: 'quantum-supply-chain-optimizer',title: 'Quantum Supply Chain Optimizer',description: 'Revolutionary supply chain optimization using quantum algorithms for complex logistics and inventory management.',category: 'Micro SaaS',price: '$799',billing: 'month',features: [ 'Quantum route optimization','Real-time inventory tracking','Predictive demand forecasting','Cost optimization','Risk assessment' ],ctaLabel: 'Optimize Supply Chain',href: 'https: },{ id: 'soc2-compliance-automation-saas',title: 'SOC 2 Compliance Automation SaaS',description: 'Automate evidence collection,policy mapping,and control monitoring to pass SOC 2 audits faster.',category: 'Micro SaaS',price: '$249',billing: 'month',features: [ 'Automated evidence collection','Control health dashboards','Policy templates & mapping','Integrations: AWS,GCP,Azure,Jira,GitHub','Audit-ready export' ],ctaLabel: 'Start Compliance',href: 'https: },{ id: 'mlops-observability',title: 'MLOps Observability & Drift Monitor',description: 'Track model performance,detect data drift,and automate retraining triggers with guardrails.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Latency,accuracy,bias metrics','Drift and anomaly alerts','Rollback and canary controls','Integration: SageMaker,Vertex AI,OpenAI','Compliance logging' ],ctaLabel: 'Monitor Models',href: 'https: },{ id: 'ai-video-content-generator',title: 'AI Video Content Generator',description: 'Generate professional videos from text,images,and audio using advanced AI models for marketing and training.',category: 'Micro SaaS',price: '$399',billing: 'month',features: [ 'Text-to-video generation','AI voice synthesis','Custom branding templates','Multi-format export','Collaborative editing' ],ctaLabel: 'Create Videos',href: 'https: },{ id: 'smart-invoice-processor',title: 'Smart Invoice Processor',description: 'AI-powered invoice processing that automatically extracts data,validates information,and integrates with accounting systems.',category: 'Micro SaaS',price: '$149',billing: 'month',features: [ 'OCR data extraction','Automated validation','ERP integration','Approval workflows','Fraud detection' ],ctaLabel: 'Process Invoices',href: 'https: },{ id: 'ai-customer-support-automation',title: 'AI Customer Support Automation',description: 'Intelligent customer support system that handles inquiries,escalates complex issues,and provides 24/7 assistance.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Natural language processing','Multi-language support','Knowledge base integration','Escalation workflows','Performance analytics' ],ctaLabel: 'Automate Support',href: 'https: },{ id: 'predictive-inventory-manager',title: 'Predictive Inventory Manager',description: 'AI-driven inventory management that predicts demand,optimizes stock levels,and reduces carrying costs.',category: 'Micro SaaS',price: '$199',billing: 'month',features: [ 'Demand forecasting','Stock optimization','Reorder automation','Supplier integration','Cost analysis' ],ctaLabel: 'Optimize Inventory',href: 'https: },{ id: 'ai-powered-email-marketing',title: 'AI-Powered Email Marketing Suite',description: 'Intelligent email marketing platform that personalizes content,optimizes send times,and maximizes engagement rates.',category: 'Micro SaaS',price: '$249',billing: 'month',features: [ 'AI content personalization','Optimal timing algorithms','A/B testing automation','Behavioral segmentation','ROI tracking' ],ctaLabel: 'Boost Engagement',href: 'https: } ,{ id: 'meeting-notes-copilot',title: 'AI Meeting Notes & Summaries',description: 'Auto-capture meetings,generate action items,and sync to CRM and project tools.',category: 'Micro SaaS',price: '$29',billing: 'month',features: [ 'Transcription and speaker diarization','Auto summaries and follow-ups','CRM/Jira/Asana sync','Multi-language support','Admin analytics' ],ctaLabel: 'Try Meeting Copilot',href: 'https: },{ id: 'smart-forms-intake',title: 'Smart Forms & Intake',description: 'Conditional logic,AI validation,and workflow routing to accelerate onboarding and lead capture.',category: 'Micro SaaS',price: '$99',billing: 'month',features: [ 'AI-powered form validation','Conditional logic and branching','Workflow automation','CRM integration','Analytics and insights' ],ctaLabel: 'Build Smart Forms',href: 'https: },{ id: 'ai-customer-success-platform',title: 'AI Customer Success Platform',description: 'Intelligent customer success platform that predicts churn,automates onboarding,and optimizes customer engagement.',category: 'Micro SaaS',price: '$1,499',billing: 'month',features: [ 'AI-powered churn prediction','Automated onboarding workflows','Customer health scoring','Personalized engagement campaigns','ROI tracking and analytics' ],ctaLabel: 'Optimize Customer Success',href: 'https: },{ id: 'ai-workflow-orchestrator',title: 'AI Workflow Orchestrator',description: 'Intelligent workflow automation platform that uses AI to optimize business processes and increase operational efficiency.',category: 'Micro SaaS',price: '$899',billing: 'month',features: [ 'AI-powered process optimization','Visual workflow builder','Intelligent task routing','Process mining and analytics','Integration with 100+ tools' ],ctaLabel: 'Automate Workflows',href: 'https: },{ id: 'ai-data-governance-platform',title: 'AI Data Governance Platform',description: 'Comprehensive data governance solution that uses AI to ensure data quality,compliance,and security.',category: 'Micro SaaS',price: '$2,499',billing: 'month',features: [ 'AI-powered data quality assessment','Automated compliance monitoring','Data lineage tracking','Privacy impact assessments','Custom governance policies' ],ctaLabel: 'Govern Your Data',href: 'https: },{ id: 'ai-cybersecurity-suite',title: 'AI Cybersecurity Suite',description: 'Advanced cybersecurity platform that uses AI to detect,prevent,and respond to cyber threats in real-time.',category: 'Micro SaaS',price: '$3,999',billing: 'month',features: [ 'AI-powered threat detection','Behavioral analytics','Automated incident response','Real-time monitoring','24/7 security operations' ],ctaLabel: 'Secure Your Business',href: 'https: },{ id: 'quantum-ai-platform',title: 'Quantum AI Platform',description: 'Revolutionary platform that combines quantum computing with AI to solve complex optimization problems.',category: 'Micro SaaS',price: '$5,999',billing: 'month',features: [ 'Quantum algorithm optimization','AI model acceleration','Hybrid quantum-classical computing','Real-time optimization','Quantum machine learning' ],ctaLabel: 'Explore Quantum AI',href: 'https: },{ id: 'ai-healthcare-analytics',title: 'AI Healthcare Analytics Platform',description: 'Advanced healthcare analytics platform that uses AI to improve patient outcomes and optimize operations.',category: 'Micro SaaS',price: '$3,499',billing: 'month',features: [ 'AI-powered patient analytics','Predictive health modeling','Clinical decision support','Population health management','HIPAA compliance' ],ctaLabel: 'Transform Healthcare',href: 'https: },{ id: 'edge-computing-platform',title: 'Edge Computing Platform',description: 'Next-generation edge computing platform that brings AI and computing power closer to data sources.',category: 'Micro SaaS',price: '$1,999',billing: 'month',features: [ 'Distributed edge computing','AI model deployment','Real-time data processing','Edge device management','Multi-cloud integration' ],ctaLabel: 'Deploy Edge AI',href: 'https: },{ id: 'ai-financial-trading-platform',title: 'AI Financial Trading Platform',description: 'Advanced financial trading platform that uses AI to analyze markets and execute trades automatically.',category: 'Micro SaaS',price: '$4,999',billing: 'month',features: [ 'AI-powered market analysis','Predictive trading algorithms','Real-time market data','Automated trade execution','Risk management' ],ctaLabel: 'Trade with AI',href: 'https: },{ id: 'ai-supply-chain-optimization',title: 'AI Supply Chain Optimization Platform',description: 'Intelligent supply chain platform that uses AI to optimize logistics and reduce costs.',category: 'Micro SaaS',price: '$2,999',billing: 'month',features: [ 'AI-powered demand forecasting','Route optimization','Inventory management','Supplier risk assessment','Real-time tracking' ],ctaLabel: 'Optimize Supply Chain',href: 'https: },{ id: 'ai-hr-platform',title: 'AI HR Platform',description: 'Comprehensive HR platform that uses AI to automate recruitment and optimize workforce management.',category: 'Micro SaaS',price: '$1,999',billing: 'month',features: [ 'AI-powered recruitment','Employee engagement analytics','Performance management','Learning and development','Workforce planning' ],ctaLabel: 'Transform HR',href: 'https: },{ id: 'ai-marketing-automation',title: 'AI Marketing Automation Platform',description: 'Intelligent marketing automation platform that uses AI to personalize campaigns and maximize ROI.',category: 'Micro SaaS',price: '$2,499',billing: 'month',features: [ 'AI-powered campaign optimization','Personalized content delivery','Multi-channel automation','Lead scoring and nurturing','ROI tracking and analytics' ],ctaLabel: 'Automate Marketing',href: 'https: },{ id: 'ai-legal-research-platform',title: 'AI Legal Research Platform',description: 'Advanced legal research platform that uses AI to analyze case law and automate legal research.',category: 'Micro SaaS',price: '$3,999',billing: 'month',features: [ 'AI-powered case analysis','Legal document review','Precedent identification','Legal research automation','Compliance monitoring' ],ctaLabel: 'Research with AI',href: 'https: },{ id: 'ai-education-platform',title: 'AI Education Platform',description: 'Intelligent education platform that uses AI to personalize learning experiences and optimize outcomes.',category: 'Micro SaaS',price: '$1,799',billing: 'month',features: [ 'AI-powered personalized learning','Adaptive learning paths','Student performance analytics','Content recommendation','Automated assessment' ],ctaLabel: 'Transform Education',href: 'https: },{ id: 'ai-project-management-platform',title: 'AI Project Management Platform',description: 'Intelligent project management platform that uses AI to optimize planning and resource allocation.',category: 'Micro SaaS',price: '$1,599',billing: 'month',features: [ 'AI-powered project planning','Resource optimization','Risk assessment','Team collaboration tools','Time tracking' ],ctaLabel: 'Manage Projects with AI',href: 'https: },{ id: 'ai-content-orchestrator',title: 'AI Content Orchestrator Pro',description: 'Enterprise-grade content management platform that uses AI to create,optimize,and distribute content.',category: 'Micro SaaS',price: '$4,999',billing: 'month',features: [ 'AI-powered content creation','Multi-channel distribution','Workflow automation','Content optimization','Analytics and insights' ],ctaLabel: 'Orchestrate Content',href: 'https: },{ id: 'ai-sales-automation-suite',title: 'AI Sales Automation Suite',description: 'Comprehensive sales automation platform that uses AI to optimize every stage of the sales funnel.',category: 'Micro SaaS',price: '$1,999',billing: 'month',features: [ 'AI-powered lead scoring','Automated email sequences','Sales call scheduling','CRM integration','Performance analytics' ],ctaLabel: 'Automate Sales',href: 'https: },{ id: 'ai-customer-support-platform',title: 'AI Customer Support Platform',description: 'Intelligent customer support platform that uses AI to provide instant responses and improve satisfaction.',category: 'Micro SaaS',price: '$1,499',billing: 'month',features: [ 'AI-powered chatbot','Ticket routing automation','Knowledge base management','Customer sentiment analysis','Multi-language support' ],ctaLabel: 'Support with AI',href: 'https: },{ id: 'ai-financial-analytics-platform',title: 'AI Financial Analytics Platform',description: 'Advanced financial analytics platform that uses AI to provide real-time insights and risk assessment.',category: 'Micro SaaS',price: '$2,499',billing: 'month',features: [ 'Real-time financial monitoring','AI-powered risk assessment','Predictive financial modeling','Custom dashboard creation','Compliance reporting' ],ctaLabel: 'Analyze Finances',href: 'https: },{ id: 'ai-learning-management-system',title: 'AI Learning Management System',description: 'Intelligent learning platform that uses AI to personalize learning experiences and track progress.',category: 'Micro SaaS',price: '$1,299',billing: 'month',features: [ 'AI-powered content recommendations','Personalized learning paths','Progress tracking','Assessment automation','Multi-format content support' ],ctaLabel: 'Learn with AI',href: 'https: },{ id: 'ai-legal-document-automation',title: 'AI Legal Document Automation Platform',description: 'Intelligent legal platform that uses AI to automate document creation and contract analysis.',category: 'Micro SaaS',price: '$2,199',billing: 'month',features: [ 'AI-powered document generation','Contract analysis','Legal research automation','Compliance checking','Document templates' ],ctaLabel: 'Automate Legal Docs',href: 'https: } ] },{ name: 'AI Solutions',slug: 'ai-solutions',items: [ { id: 'ai-business-intelligence',title: 'AI Business Intelligence Platform',description: 'Next-generation BI platform that uses AI to automatically analyze data and generate actionable insights.',category: 'AI Solutions',price: '$2,999',billing: 'month',features: [ 'AI-powered data analysis','Automated insight generation','Natural language queries','Predictive analytics','Custom dashboard creation' ],ctaLabel: 'Get AI Insights',href: 'https: },{ id: 'ai-sales-copilot',title: 'AI Sales Copilot',description: 'Intelligent sales assistant that automates lead scoring,follow-ups,and sales process optimization.',category: 'AI Solutions',price: '$1,299',billing: 'month',features: [ 'AI-powered lead scoring','Automated follow-up sequences','Sales performance analytics','CRM integration','Predictive sales forecasting' ],ctaLabel: 'Boost Sales with AI',href: 'https: },{ id: 'ai-compliance-assistant',title: 'AI Compliance Assistant',description: 'Automated compliance monitoring and reporting using AI to ensure regulatory adherence.',category: 'AI Solutions',price: '$1,999',billing: 'month',features: [ 'Automated compliance monitoring','Regulatory change tracking','Risk assessment','Compliance reporting','Audit trail management' ],ctaLabel: 'Ensure Compliance',href: 'https: },{ id: 'ai-auto-email-responder',title: 'AI Auto Email Responder',description: 'Intelligent email automation that responds to customer inquiries and manages communication workflows.',category: 'AI Solutions',price: '$799',billing: 'month',features: [ 'AI-powered email responses','Natural language processing','Workflow automation','CRM integration','Performance analytics' ],ctaLabel: 'Automate Email',href: 'https: },{ id: 'ai-content-studio',title: 'LLM Content Studio',description: 'AI-powered content creation platform that generates high-quality,on-brand content for all channels.',category: 'AI Solutions',price: '$1,499',billing: 'month',features: [ 'AI content generation','Brand voice consistency','Multi-format support','SEO optimization','Content analytics' ],ctaLabel: 'Create with AI',href: 'https: },{ id: 'ai-finops-advisor',title: 'FinOps Advisor',description: 'AI-powered financial operations optimization for cloud cost management and resource allocation.',category: 'AI Solutions',price: '$1,799',billing: 'month',features: [ 'Cloud cost optimization','Resource allocation analysis','Cost forecasting','Budget management','ROI optimization' ],ctaLabel: 'Optimize FinOps',href: 'https: },{ id: 'ai-lead-scoring',title: 'AI Lead Scoring Platform',description: 'Intelligent lead scoring using machine learning to prioritize sales opportunities and improve conversion rates.',category: 'AI Solutions',price: '$899',billing: 'month',features: [ 'ML-powered lead scoring','Behavioral analysis','Conversion prediction','CRM integration','Performance tracking' ],ctaLabel: 'Score Leads with AI',href: 'https: },{ id: 'ai-chatbot',title: 'Website AI Chatbot',description: 'Intelligent chatbot that provides 24/7 customer support and improves user engagement on your website.',category: 'AI Solutions',price: '$599',billing: 'month',features: [ 'Natural language processing','24/7 availability','Multi-language support','CRM integration','Conversation analytics' ],ctaLabel: 'Add AI Chatbot',href: 'https: },{ id: 'ai-rag-search',title: 'RAG Search Platform',description: 'AI-powered search with retrieval-augmented generation for accurate,contextual answers with citations.',category: 'AI Solutions',price: '$1,299',billing: 'month',features: [ 'Retrieval-augmented generation','Contextual search','Citation tracking','Knowledge base integration','Search analytics' ],ctaLabel: 'Implement RAG Search',href: 'https: },{ id: 'ai-mlops',title: 'MLOps Pipeline Platform',description: 'End-to-end machine learning operations platform for model development,deployment,and monitoring.',category: 'AI Solutions',price: '$2,499',billing: 'month',features: [ 'Model development pipeline','Automated deployment','Performance monitoring','Model versioning','Drift detection' ],ctaLabel: 'Deploy MLOps',href: 'https: },{ id: 'ai-ecommerce-personalization',title: 'AI E-commerce Personalization',description: 'Intelligent product recommendations and personalized shopping experiences to boost conversion rates.',category: 'AI Solutions',price: '$1,199',billing: 'month',features: [ 'Product recommendations','Personalized search','Dynamic pricing','Customer segmentation','Conversion optimization' ],ctaLabel: 'Personalize Shopping',href: 'https: },{ id: 'ai-returns-management',title: 'AI Returns Management SaaS',description: 'Intelligent returns processing and fraud detection to streamline operations and reduce costs.',category: 'AI Solutions',price: '$899',billing: 'month',features: [ 'Automated returns processing','Fraud detection','Return analytics','Customer self-service','Integration with e-commerce platforms' ],ctaLabel: 'Manage Returns with AI',href: 'https: },{ id: 'ai-vendor-risk',title: 'AI Vendor Risk Management',description: 'Intelligent vendor risk assessment and monitoring using AI to ensure supply chain security.',category: 'AI Solutions',price: '$1,599',billing: 'month',features: [ 'AI-powered risk assessment','Continuous monitoring','Compliance tracking','Risk scoring','Automated alerts' ],ctaLabel: 'Manage Vendor Risk',href: 'https: },{ id: 'ai-seo-optimizer',title: 'AI SEO Optimizer',description: 'AI-powered SEO optimization that improves search rankings and drives organic traffic growth.',category: 'AI Solutions',price: '$799',billing: 'month',features: [ 'Keyword optimization','Content analysis','Technical SEO audit','Competitor analysis','Performance tracking' ],ctaLabel: 'Optimize SEO with AI',href: 'https: },{ id: 'ai-churn-predictor',title: 'AI Churn Predictor',description: 'Predict customer churn using machine learning and implement proactive retention strategies.',category: 'AI Solutions',price: '$1,099',billing: 'month',features: [ 'Churn prediction models','Risk scoring','Retention strategies','Customer segmentation','Intervention recommendations' ],ctaLabel: 'Predict Churn',href: 'https: },{ id: 'ai-incident-postmortems',title: 'AI Incident Postmortems',description: 'Automated incident analysis and postmortem generation for improved incident response and learning.',category: 'AI Solutions',price: '$699',billing: 'month',features: [ 'Automated incident analysis','Root cause identification','Postmortem generation','Knowledge base updates','Team learning insights' ],ctaLabel: 'Analyze Incidents',href: 'https: },{ id: 'ai-api-monitoring',title: 'AI API Monitoring SaaS',description: 'Intelligent API monitoring and performance optimization using AI for proactive issue detection.',category: 'AI Solutions',price: '$599',billing: 'month',features: [ 'Real-time API monitoring','Performance anomaly detection','Automated alerting','Performance optimization','Uptime tracking' ],ctaLabel: 'Monitor APIs with AI',href: 'https: },{ id: 'ai-gdpr-compliance',title: 'AI GDPR Cookie Compliance',description: 'Automated GDPR compliance management with intelligent cookie consent and data protection.',category: 'AI Solutions',price: '$399',billing: 'month',features: [ 'Cookie consent management','Data protection compliance','Privacy policy automation','Consent analytics','Regulatory updates' ],ctaLabel: 'Ensure GDPR Compliance',href: 'https: },{ id: 'ai-proofreading',title: 'AI Proofreading Studio',description: 'Advanced proofreading and editing using AI to improve content quality and readability.',category: 'AI Solutions',price: '$299',billing: 'month',features: [ 'AI-powered proofreading','Grammar and style checking','Content optimization','Multi-language support','Quality scoring' ],ctaLabel: 'Proofread with AI',href: 'https: },{ id: 'ai-customer-feedback',title: 'AI Customer Feedback Surveys',description: 'Intelligent feedback collection and analysis using AI to improve customer satisfaction and product development.',category: 'AI Solutions',price: '$499',billing: 'month',features: [ 'AI-powered survey design','Sentiment analysis','Feedback categorization','Actionable insights','Integration with CRM systems' ],ctaLabel: 'Collect Feedback with AI',href: 'https: },{ id: 'ai-meeting-notes',title: 'AI Meeting Notes & Summaries',description: 'Automated meeting transcription,summarization,and action item extraction using AI.',category: 'AI Solutions',price: '$299',billing: 'month',features: [ 'Automated transcription','AI summarization','Action item extraction','CRM integration','Meeting analytics' ],ctaLabel: 'Automate Meeting Notes',href: 'https: },{ id: 'ai-smart-forms',title: 'AI Smart Forms & Intake',description: 'Intelligent form processing with AI validation,conditional logic,and workflow automation.',category: 'AI Solutions',price: '$199',billing: 'month',features: [ 'AI-powered validation','Conditional logic','Workflow automation','Data extraction','Analytics and insights' ],ctaLabel: 'Build Smart Forms',href: 'https: },{ id: 'ai-customer-success',title: 'AI Customer Success Platform',description: 'Comprehensive customer success platform using AI to predict churn and optimize customer engagement.',category: 'AI Solutions',price: '$1,499',billing: 'month',features: [ 'Churn prediction','Customer health scoring','Engagement optimization','Success milestone tracking','ROI analytics' ],ctaLabel: 'Optimize Customer Success',href: 'https: },{ id: 'ai-workflow-orchestrator',title: 'AI Workflow Orchestrator',description: 'Intelligent workflow automation platform that uses AI to optimize business processes and increase efficiency.',category: 'AI Solutions',price: '$899',billing: 'month',features: [ 'AI-powered process optimization','Visual workflow builder','Intelligent task routing','Process mining','Performance analytics' ],ctaLabel: 'Automate Workflows',href: 'https: },{ id: 'ai-data-governance',title: 'AI Data Governance Platform',description: 'Comprehensive data governance solution using AI to ensure data quality,compliance,and security.',category: 'AI Solutions',price: '$2,499',billing: 'month',features: [ 'AI-powered data quality','Compliance monitoring','Data lineage tracking','Privacy impact assessment','Governance policies' ],ctaLabel: 'Govern Your Data',href: 'https: } ] },{ name: 'IT Services',slug: 'it-services',items: [ { id: 'cloud-migration-consulting',title: 'Cloud Migration Consulting',description: 'Expert guidance for migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',category: 'IT Services',price: '$150',billing: 'hour',features: [ 'Cloud readiness assessment','Migration strategy planning','Cost optimization analysis','Security and compliance review','Post-migration support' ],ctaLabel: 'Start Migration',href: 'https: },{ id: 'cybersecurity-audit',title: 'Cybersecurity Audit & Assessment',description: 'Comprehensive security assessment to identify vulnerabilities and strengthen your cybersecurity posture.',category: 'IT Services',price: '$5,000',billing: 'project',features: [ 'Vulnerability assessment','Penetration testing','Security policy review','Compliance gap analysis','Remediation roadmap' ],ctaLabel: 'Secure Your Business',href: 'https: },{ id: 'network-infrastructure-design',title: 'Network Infrastructure Design',description: 'Custom network architecture design for optimal performance,security,and scalability.',category: 'IT Services',price: '$8,000',billing: 'project',features: [ 'Network topology design','Security architecture','Performance optimization','Scalability planning','Implementation support' ],ctaLabel: 'Design Network',href: 'https: },{ id: 'data-backup-recovery',title: 'Data Backup & Disaster Recovery',description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',category: 'IT Services',price: '$2,500',billing: 'month',features: [ 'Automated backup systems','Disaster recovery planning','Regular testing and validation','24/7 monitoring','Quick recovery solutions' ],ctaLabel: 'Protect Your Data',href: 'https: },{ id: 'it-project-management',title: 'IT Project Management',description: 'Professional project management services for complex IT implementations and digital transformations.',category: 'IT Services',price: '$125',billing: 'hour',features: [ 'Project planning and scheduling','Risk management','Stakeholder communication','Progress tracking','Quality assurance' ],ctaLabel: 'Manage IT Projects',href: 'https: },{ id: 'system-integration',title: 'System Integration Services',description: 'Seamless integration of disparate systems to improve data flow and operational efficiency.',category: 'IT Services',price: '$175',billing: 'hour',features: [ 'API development and integration','Data mapping and transformation','Workflow automation','Testing and validation','Ongoing support' ],ctaLabel: 'Integrate Systems',href: 'https: },{ id: 'it-consulting',title: 'Strategic IT Consulting',description: 'Strategic guidance to align your technology investments with business objectives and growth plans.',category: 'IT Services',price: '$200',billing: 'hour',features: [ 'Technology strategy development','Digital transformation planning','Technology roadmap creation','Vendor selection assistance','ROI analysis' ],ctaLabel: 'Get IT Strategy',href: 'https: },{ id: 'managed-it-services',title: 'Managed IT Services',description: 'Comprehensive IT management including monitoring,maintenance,and support for your technology infrastructure.',category: 'IT Services',price: '$3,500',billing: 'month',features: [ '24/7 monitoring and support','Proactive maintenance','Security management','Backup and recovery','Help desk support' ],ctaLabel: 'Manage IT Infrastructure',href: 'https: },{ id: 'software-development',title: 'Custom Software Development',description: 'Tailored software solutions designed to meet your specific business requirements and workflows.',category: 'IT Services',price: '$100',billing: 'hour',features: [ 'Requirements analysis','Custom development','Testing and quality assurance','Deployment and training','Maintenance and support' ],ctaLabel: 'Develop Custom Software',href: 'https: },{ id: 'data-analytics-implementation',title: 'Data Analytics Implementation',description: 'Implementation of data analytics solutions to transform raw data into actionable business insights.',category: 'IT Services',price: '$15,000',billing: 'project',features: [ 'Data warehouse design','ETL pipeline development','Dashboard creation','User training','Ongoing optimization' ],ctaLabel: 'Implement Analytics',href: 'https: },{ id: 'devops-implementation',title: 'DevOps Implementation',description: 'Implementation of DevOps practices to accelerate software delivery and improve operational efficiency.',category: 'IT Services',price: '$12,000',billing: 'project',features: [ 'CI/CD pipeline setup','Infrastructure as code','Monitoring and logging','Team training','Process optimization' ],ctaLabel: 'Implement DevOps',href: 'https: },{ id: 'cloud-optimization',title: 'Cloud Cost Optimization',description: 'Optimize your cloud infrastructure to reduce costs while maintaining performance and reliability.',category: 'IT Services',price: '$3,000',billing: 'project',features: [ 'Cost analysis and audit','Resource optimization','Reserved instance planning','Performance tuning','Cost monitoring setup' ],ctaLabel: 'Optimize Cloud Costs',href: 'https: },{ id: 'security-compliance',title: 'Security Compliance Services',description: 'Achieve and maintain compliance with industry standards like SOC 2,ISO 27001,and GDPR.',category: 'IT Services',price: '$7,500',billing: 'project',features: [ 'Compliance gap analysis','Policy and procedure development','Security control implementation','Audit preparation','Ongoing compliance monitoring' ],ctaLabel: 'Achieve Compliance',href: 'https: },{ id: 'business-continuity',title: 'Business Continuity Planning',description: 'Comprehensive business continuity and disaster recovery planning to ensure operational resilience.',category: 'IT Services',price: '$10,000',billing: 'project',features: [ 'Business impact analysis','Recovery strategy development','Plan documentation','Testing and validation','Staff training' ],ctaLabel: 'Plan Continuity',href: 'https: },{ id: 'it-training',title: 'IT Training & Certification',description: 'Comprehensive training programs to enhance your team\'s technical skills and knowledge.',category: 'IT Services',price: '$2,000',billing: 'day',features: [ 'Customized training programs','Hands-on workshops','Certification preparation','Ongoing support','Progress tracking' ],ctaLabel: 'Train Your Team',href: 'https: },{ id: 'vendor-management',title: 'IT Vendor Management',description: 'Strategic vendor management to optimize costs,improve service quality,and reduce risks.',category: 'IT Services',price: '$150',billing: 'hour',features: [ 'Vendor assessment and selection','Contract negotiation','Performance monitoring','Relationship management','Cost optimization' ],ctaLabel: 'Manage Vendors',href: 'https: },{ id: 'digital-transformation',title: 'Digital Transformation Consulting',description: 'End-to-end digital transformation services to modernize your business operations and technology stack.',category: 'IT Services',price: '$25,000',billing: 'project',features: [ 'Digital maturity assessment','Transformation roadmap','Technology modernization','Change management','Success measurement' ],ctaLabel: 'Transform Digitally',href: 'https: },{ id: 'it-audit',title: 'IT Audit & Assessment',description: 'Comprehensive IT audit to evaluate your technology infrastructure,processes,and controls.',category: 'IT Services',price: '$8,000',billing: 'project',features: [ 'Infrastructure assessment','Process evaluation','Control testing','Risk identification','Recommendation report' ],ctaLabel: 'Audit IT Infrastructure',href: 'https: },{ id: 'performance-tuning',title: 'Performance Tuning & Optimization',description: 'Optimize your systems and applications for maximum performance and efficiency.',category: 'IT Services',price: '$125',billing: 'hour',features: [ 'Performance analysis','Bottleneck identification','Optimization implementation','Testing and validation','Performance monitoring' ],ctaLabel: 'Optimize Performance',href: 'https: },{ id: 'data-migration',title: 'Data Migration Services',description: 'Secure and efficient data migration between systems with minimal downtime and data loss.',category: 'IT Services',price: '$5,000',billing: 'project',features: [ 'Data mapping and analysis','Migration planning','Data validation','Rollback procedures','Post-migration verification' ],ctaLabel: 'Migrate Data',href: 'https: } ] },{ name: 'Cybersecurity',slug: 'cybersecurity',items: [ { id: 'm365-security-hardening-kit',title: 'M365 Security Hardening Kit',description: 'Baseline hardening,drift detection,and auto-remediation for Microsoft 365 tenants with executive reporting.',category: 'Cybersecurity',price: '$199',billing: 'month',features: [ 'Secure baseline as code','Misconfiguration detection','Auto-remediation playbooks','Graph API integrations','Compliance-ready reports' ],ctaLabel: 'Harden M365',href: 'https: },{ id: 'ai-threat-intelligence',title: 'AI Threat Intelligence Suite',description: 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',category: 'Cybersecurity',price: '$3,999',billing: 'month',features: [ 'AI threat detection','Behavioral analysis','Automated response','Threat hunting','Incident management' ],ctaLabel: 'Security Demo',href: 'https: },{ id: 'quantum-cryptography',title: 'Quantum Cryptography Solutions',description: 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.',category: 'Cybersecurity',price: '$12,000',billing: 'project',features: [ 'Quantum key distribution','Post-quantum crypto','Secure communication','Key management','Compliance ready' ],ctaLabel: 'Quantum Security',href: 'https: } ,{ id: 'managed-detection-response',title: 'Managed Detection & Response (MDR)',description: '24/7 monitoring,threat hunting,and incident response with SIEM/SOAR integration.',category: 'Cybersecurity',price: '$3,499',billing: 'month',features: [ 'SIEM setup and tuning','Playbooks and automation','Phishing and EDR integration','Compliance-ready reporting','Incident response retainers' ],ctaLabel: 'Activate MDR',href: 'https: },{ id: 'sase-rollout',title: 'Secure Access Service Edge (SASE) Rollout',description: 'Consolidate network and security with ZTNA,SWG,CASB,and SD-WAN.',category: 'Cybersecurity',price: '$20,000',billing: 'project',features: [ 'Architecture and vendor selection','Pilot and phased migration','Policy baselines','User experience optimization','Runbooks and training' ],ctaLabel: 'Deploy SASE',href: 'https: } ] },{ name: 'Data & Analytics',slug: 'data-analytics',items: [ { id: 'synthetic-data-generator',title: 'Synthetic Data Generator',description: 'Privacy-safe synthetic tabular/time-series/text data with utility/drift reports and DP options.',category: 'Data & Analytics',price: '$119',billing: 'month',features: [ 'Differential privacy & masking','Tabular/time-series/text modes','Utility and drift reports','APIs and SDKs','S3/Snowflake/BigQuery connectors' ],ctaLabel: 'Generate Data',href: 'https: },{ id: 'quantum-data-analytics',title: 'Quantum Data Analytics Platform',description: 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',category: 'Data & Analytics',price: '$6,999',billing: 'month',features: [ 'Quantum pattern recognition','Complex data modeling','Real-time insights','Predictive analytics','Visualization tools' ],ctaLabel: 'Analytics Demo',href: 'https: },{ id: 'ai-business-intelligence',title: 'AI Business Intelligence Suite',description: 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.',category: 'Data & Analytics',price: '$2,499',billing: 'month',features: [ 'Automated insights','Natural language queries','Predictive modeling','Custom dashboards','Data integration' ],ctaLabel: 'BI Assessment',href: 'https: } ,{ id: 'data-quality-observability',title: 'Data Quality & Observability',description: 'Monitor freshness,completeness,and lineage to trust your analytics and AI.',category: 'Data & Analytics',price: '$1,499',billing: 'month',features: [ 'Column-level lineage','Great Expectations policies','Alerting and incident Mgmt','Connectors: Snowflake,BigQuery,Databricks','Root-cause analysis' ],ctaLabel: 'Improve Data Trust',href: 'https: },{ id: 'modern-etl-migration',title: 'Modern ETL/ELT Migration',description: 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.',category: 'Data & Analytics',price: '$18,000',billing: 'project',features: [ 'dbt modeling and tests','Incremental loads','CI for analytics','Cost-efficient storage','Knowledge transfer' ],ctaLabel: 'Migrate Workloads',href: 'https: } ] },{ name: 'Cloud & DevOps',slug: 'cloud-devops',items: [ { id: 'uptime-slo-monitor',title: 'Uptime & SLO Monitor',description: 'Multi-region synthetic checks with SLO dashboards,error budgets,and burn rate alerts.',category: 'Cloud & DevOps',price: '$49',billing: 'month',features: [ 'Multi-region probes','SLO calculation and burn rates','Error budget policy','Alerts and dashboards','CI/CD release gates' ],ctaLabel: 'Monitor Reliability',href: 'https: },{ id: 'kubernetes-cost-analyzer',title: 'Kubernetes Cost Analyzer',description: 'Allocation,rightsizing,and bin‑packing insights by team/namespace with chargeback reports.',category: 'Cloud & DevOps',price: '$99',billing: 'month',features: [ 'Cost allocation by namespace/team','Requests/limits advisor','Bin‑packing recommendations','Chargeback/showback reports','Slack/Grafana integrations' ],ctaLabel: 'Cut K8s Spend',href: 'https: },{ id: 'autonomous-devops-platform',title: 'Autonomous DevOps Platform',description: 'Self-managing DevOps platform that automatically optimizes deployments,scaling,and infrastructure management.',category: 'Cloud & DevOps',price: '$4,999',billing: 'month',features: [ 'Automated deployments','Self-healing infrastructure','Performance optimization','Cost management','Continuous monitoring' ],ctaLabel: 'DevOps Demo',href: 'https: },{ id: 'quantum-cloud-infrastructure',title: 'Quantum Cloud Infrastructure',description: 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.',category: 'Cloud & DevOps',price: '$18,000',billing: 'project',features: [ 'Quantum cloud services','Hybrid infrastructure','Quantum optimization','Scalable architecture','Enterprise support' ],ctaLabel: 'Cloud Migration',href: 'https: } ,{ id: 'serverless-application-factory',title: 'Serverless Application Factory',description: 'Blueprints and accelerators to build secure,low-cost serverless backends fast.',category: 'Cloud & DevOps',price: '$16,000',billing: 'project',features: [ 'Patterns: EventBridge,Step Functions','IaC with CDK/Terraform','Observability baked-in','SECaaS and guardrails','Cost-efficiency targets' ],ctaLabel: 'Build Serverless',href: 'https: },{ id: 'disaster-recovery-blueprints',title: 'Disaster Recovery Blueprints (RTO/RPO)',description: 'Design and test DR strategies with automated failover and periodic game days.',category: 'Cloud & DevOps',price: '$20,000',billing: 'project',features: [ 'Multi-region architectures','Automated chaos tests','Backup and restore pipelines','Compliance documentation','Executive tabletop exercises' ],ctaLabel: 'Harden Resilience',href: 'https: } ] },{ name: 'Quantum Computing',slug: 'quantum-computing',items: [ { id: 'quantum-financial-trading',title: 'Quantum Financial Trading Platform',description: 'Revolutionary trading platform using quantum algorithms for portfolio optimization and risk assessment.',category: 'Quantum Computing',price: '$25,000',billing: 'month',features: [ 'Quantum portfolio optimization','Risk modeling','Real-time trading','Compliance tools','Performance analytics' ],ctaLabel: 'Trading Demo',href: 'https: },{ id: 'quantum-drug-discovery',title: 'Quantum Drug Discovery Platform',description: 'Advanced drug discovery platform leveraging quantum computing for molecular modeling and drug design.',category: 'Quantum Computing',price: '$45,000',billing: 'month',features: [ 'Quantum molecular modeling','Drug design algorithms','Clinical trial optimization','Research collaboration','Regulatory support' ],ctaLabel: 'Research Access',href: 'https: } ] },{ name: 'Blockchain & Web3',slug: 'blockchain-web3',items: [ { id: 'decentralized-ai-marketplace',title: 'Decentralized AI Marketplace',description: 'Web3-powered marketplace for AI models,data,and computational resources with blockchain-based governance.',category: 'Blockchain & Web3',price: '$1,999',billing: 'month',features: [ 'AI model marketplace','Decentralized governance','Smart contracts','Token economics','Community-driven' ],ctaLabel: 'Marketplace Access',href: 'https: },{ id: 'quantum-blockchain-platform',title: 'Quantum Blockchain Platform',description: 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.',category: 'Blockchain & Web3',price: '$8,999',billing: 'month',features: [ 'Quantum-resistant crypto','Enhanced consensus','Scalable architecture','Interoperability','Enterprise features' ],ctaLabel: 'Blockchain Demo',href: 'https: } ] },{ name: 'IoT & Edge',slug: 'iot-edge',items: [ { id: 'quantum-iot-platform',title: 'Quantum IoT Platform',description: 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',category: 'IoT & Edge',price: '$3,999',billing: 'month',features: [ 'Quantum edge processing','Device optimization','Intelligent routing','Energy efficiency','Scalable deployment' ],ctaLabel: 'IoT Demo',href: 'https: },{ id: 'autonomous-edge-ai',title: 'Autonomous Edge AI Platform',description: 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.',category: 'IoT & Edge',price: '$2,999',billing: 'month',features: [ 'Autonomous optimization','Edge AI processing','Network intelligence','Resource management','Performance monitoring' ],ctaLabel: 'Edge AI Demo',href: 'https: } ,{ id: 'predictive-maintenance-iot',title: 'Predictive Maintenance for IoT Fleets',description: 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',category: 'IoT & Edge',price: '$2,499',billing: 'month',features: [ 'Edge telemetry ingestion','ML failure prediction','Work order integration (EAM/CMMS)','Kitting and rollout playbooks','Dashboards and alerts' ],ctaLabel: 'Reduce Downtime',href: 'https: },{ id: 'digital-twin-starter',title: 'Digital Twin Starter Kit',description: 'Model physical systems with twins to simulate scenarios and optimize operations.',category: 'IoT & Edge',price: '$14,000',billing: 'project',features: [ '3D/graph models','Stream processing','Integration with PLC/SCADA','KPI definition and alerts','Pilot-to-production plan' ],ctaLabel: 'Build a Twin',href: 'https: } ] },{ name: 'Green Tech',slug: 'green-tech',items: [ { id: 'quantum-energy-optimization',title: 'Quantum Energy Optimization',description: 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',category: 'Green Tech',price: '$12,000',billing: 'month',features: [ 'Quantum energy modeling','Renewable optimization','Grid management','Carbon tracking','Sustainability reporting' ],ctaLabel: 'Energy Assessment',href: 'https: },{ id: 'ai-climate-prediction',title: 'AI Climate Prediction Platform',description: 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.',category: 'Green Tech',price: '$7,999',billing: 'month',features: [ 'AI climate modeling','Quantum simulations','Real-time predictions','Risk assessment','Policy recommendations' ],ctaLabel: 'Climate Demo',href: 'https: } ,{ id: 'carbon-accounting-saas',title: 'Carbon Accounting & ESG Reporting',description: 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',category: 'Green Tech',price: '$999',billing: 'month',features: [ 'GHG Protocol-aligned factors','Automated data pipelines','Supplier questionnaires','Assurance-ready exports','Target tracking (SBTi)' ],ctaLabel: 'Start ESG Tracking',href: 'https: } ] },{ name: 'Space Tech',slug: 'space-tech',items: [ { id: 'satellite-ai-orchestrator',title: 'Satellite AI Orchestrator',description: 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',category: 'Space Tech',price: '$15,000',billing: 'month',features: [ 'Autonomous orbital optimization','AI-powered data analysis','Real-time monitoring','Collision avoidance','Global coverage' ],ctaLabel: 'Launch Satellites',href: 'https: },{ id: 'quantum-space-communications',title: 'Quantum Space Communications',description: 'Next-generation quantum communication system for secure,ultra-fast data transmission between Earth and space.',category: 'Space Tech',price: '$25,000',billing: 'month',features: [ 'Quantum entanglement','Unhackable encryption','Light-speed transmission','Deep space coverage','Interplanetary network' ],ctaLabel: 'Connect Space',href: 'https: } ,{ id: 'satellite-imagery-analytics',title: 'Satellite Imagery Analytics',description: 'Computer vision on multi-spectral imagery for agriculture,insurance,and defense insights.',category: 'Space Tech',price: '$5,999',billing: 'month',features: [ 'Change detection','Crop yield estimation','Object and damage detection','APIs and dashboards','Tasking provider integrations' ],ctaLabel: 'Analyze Imagery',href: 'https: } ] },{ name: 'BioTech & Health',slug: 'biotech-health',items: [ { id: 'ai-drug-discovery-platform',title: 'AI Drug Discovery Platform',description: 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',category: 'BioTech & Health',price: '$35,000',billing: 'month',features: [ 'AI molecular modeling','Quantum simulations','Clinical trial optimization','Drug repurposing','Regulatory compliance' ],ctaLabel: 'Discover Drugs',href: 'https: },{ id: 'quantum-genome-analyzer',title: 'Quantum Genome Analyzer',description: 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.',category: 'BioTech & Health',price: '$18,000',billing: 'month',features: [ 'Quantum DNA sequencing','Personalized medicine','Disease prediction','Genetic counseling','Research collaboration' ],ctaLabel: 'Analyze Genome',href: 'https: } ,{ id: 'telemedicine-ai-triage',title: 'Telemedicine AI Triage',description: 'AI symptom checker with escalation workflows to clinicians and EHR integration.',category: 'BioTech & Health',price: '$1,999',billing: 'month',features: [ 'Clinical safety guardrails','HL7/FHIR integration','Language and accessibility','Analytics and outcomes tracking','Privacy and consent management' ],ctaLabel: 'Enable Triage',href: 'https: } ] },{ name: 'FinTech & DeFi',slug: 'fintech-defi',items: [ { id: 'quantum-trading-algorithm',title: 'Quantum Trading Algorithm',description: 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',category: 'FinTech & DeFi',price: '$45,000',billing: 'month',features: [ 'Quantum market analysis','Microsecond trading','Risk management','Portfolio optimization','Regulatory compliance' ],ctaLabel: 'Start Trading',href: 'https: },{ id: 'autonomous-defi-protocol',title: 'Autonomous DeFi Protocol',description: 'Self-managing DeFi protocol that automatically optimizes yields,manages risks,and executes strategies.',category: 'FinTech & DeFi',price: '$12,000',billing: 'month',features: [ 'Autonomous yield farming','Risk management','Strategy optimization','Cross-chain integration','Smart contract security' ],ctaLabel: 'Deploy Protocol',href: 'https: } ,{ id: 'kyc-aml-transaction-monitoring',title: 'KYC/AML Transaction Monitoring',description: 'Detect suspicious activity using rules + ML with investigator case management.',category: 'FinTech & DeFi',price: '$2,499',billing: 'month',features: [ 'Entity resolution','Sanctions and watchlists','Graph analytics','Case workflow and SAR exports','Audit and model governance' ],ctaLabel: 'Strengthen Compliance',href: 'https: } ] },{ name: 'Metaverse & AR/VR',slug: 'metaverse-ar-vr',items: [ { id: 'quantum-metaverse-engine',title: 'Quantum Metaverse Engine',description: 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',category: 'Metaverse & AR/VR',price: '$28,000',billing: 'month',features: [ 'Quantum rendering','Infinite scalability','Realistic physics','Cross-platform support','AI-powered NPCs' ],ctaLabel: 'Enter Metaverse',href: 'https: },{ id: 'autonomous-ar-navigation',title: 'Autonomous AR Navigation',description: 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.',category: 'Metaverse & AR/VR',price: '$8,500',billing: 'month',features: [ 'Real-time AR overlays','Autonomous navigation','Smart city integration','Traffic optimization','Safety monitoring' ],ctaLabel: 'Navigate AR',href: 'https: } ,{ id: 'vr-training-simulators',title: 'VR Training Simulators',description: 'Enterprise-grade immersive learning for safety,field ops,and medical procedures.',category: 'Metaverse & AR/VR',price: '$30,000',billing: 'project',features: [ 'Curriculum design','Multi-user scenarios','LMS integration and analytics','Hardware procurement guidance','Operations and support' ],ctaLabel: 'Build Simulator',href: 'https: } ] },{ name: 'Autonomous Systems',slug: 'autonomous-systems',items: [ { id: 'quantum-ai-controller',title: 'Quantum AI Controller',description: 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',category: 'Autonomous Systems',price: '$32,000',billing: 'month',features: [ 'Quantum decision making','Autonomous learning','System optimization','Predictive maintenance','Multi-system coordination' ],ctaLabel: 'Control Systems',href: 'https: },{ id: 'autonomous-robotics-platform',title: 'Autonomous Robotics Platform',description: 'Complete robotics platform for autonomous manufacturing,logistics,and service operations.',category: 'Autonomous Systems',price: '$22,000',billing: 'month',features: [ 'Autonomous navigation','Task learning','Safety protocols','Multi-robot coordination','Performance analytics' ],ctaLabel: 'Deploy Robots',href: 'https: } ,{ id: 'warehouse-robotics-orchestration',title: 'Warehouse Robotics Orchestration',description: 'Coordinate AMRs,conveyors,and pick stations to maximize throughput and safety.',category: 'Autonomous Systems',price: '$9,999',billing: 'month',features: [ 'Task allocation and routing','3D digital twin monitoring','Workforce and robot collaboration','Safety zones and policies','KPIs and optimization' ],ctaLabel: 'Orchestrate Robots',href: 'https: } ] },{ name: 'Digital Marketing',slug: 'digital-marketing',items: [ { id: 'ai-social-media-manager',title: 'AI Social Media Manager',description: 'Intelligent social media management platform that creates content,schedules posts,and optimizes engagement across all platforms.',category: 'Digital Marketing',price: '$199',billing: 'month',features: [ 'AI content generation','Multi-platform scheduling','Engagement optimization','Analytics dashboard','Brand voice consistency' ],ctaLabel: 'Manage Social Media',href: 'https: },{ id: 'predictive-marketing-analytics',title: 'Predictive Marketing Analytics',description: 'AI-powered marketing analytics that predicts customer behavior,optimizes campaigns,and maximizes ROI.',category: 'Digital Marketing',price: '$299',billing: 'month',features: [ 'Customer behavior prediction','Campaign optimization','ROI forecasting','Attribution modeling','Real-time insights' ],ctaLabel: 'Analyze Marketing',href: 'https: },{ id: 'ai-seo-optimizer',title: 'AI SEO Optimizer Pro',description: 'Advanced SEO optimization platform that analyzes competitors,suggests improvements,and tracks rankings automatically.',category: 'Digital Marketing',price: '$249',billing: 'month',features: [ 'Competitor analysis','Keyword optimization','Content suggestions','Ranking tracking','Technical SEO audit' ],ctaLabel: 'Optimize SEO',href: 'https: } ] },{ name: 'E-commerce Solutions',slug: 'ecommerce-solutions',items: [ { id: 'ai-product-recommendation-engine',title: 'AI Product Recommendation Engine',description: 'Intelligent product recommendation system that increases conversion rates and average order value.',category: 'E-commerce Solutions',price: '$399',billing: 'month',features: [ 'Personalized recommendations','Behavioral analysis','A/B testing','Real-time optimization','Analytics dashboard' ],ctaLabel: 'Boost Sales',href: 'https: },{ id: 'smart-inventory-optimizer',title: 'Smart Inventory Optimizer',description: 'AI-driven inventory optimization for e-commerce that reduces stockouts and overstock situations.',category: 'E-commerce Solutions',price: '$299',billing: 'month',features: [ 'Demand forecasting','Stock level optimization','Reorder automation','Seasonal adjustments','Cost optimization' ],ctaLabel: 'Optimize Inventory',href: 'https: },{ id: 'ai-customer-chatbot',title: 'AI Customer Chatbot',description: 'Intelligent chatbot that handles customer inquiries,provides product information,and processes orders.',category: 'E-commerce Solutions',price: '$199',billing: 'month',features: [ 'Natural language processing','Product search assistance','Order processing','24/7 availability','Human handoff' ],ctaLabel: 'Deploy Chatbot',href: 'https: } ] },{ name: 'Remote Work Tools',slug: 'remote-work-tools',items: [ { id: 'ai-meeting-assistant',title: 'AI Meeting Assistant',description: 'Intelligent meeting assistant that transcribes,summarizes,and extracts action items from virtual meetings.',category: 'Remote Work Tools',price: '$149',billing: 'month',features: [ 'Real-time transcription','Meeting summarization','Action item extraction','Integration with calendar','Searchable archives' ],ctaLabel: 'Assist Meetings',href: 'https: },{ id: 'collaborative-project-manager',title: 'Collaborative Project Manager',description: 'AI-powered project management platform that optimizes team collaboration and project delivery.',category: 'Remote Work Tools',price: '$199',billing: 'month',features: [ 'Task automation','Team collaboration','Progress tracking','Resource optimization','Risk management' ],ctaLabel: 'Manage Projects',href: 'https: },{ id: 'virtual-office-platform',title: 'Virtual Office Platform',description: 'Immersive virtual office environment for remote teams with AI-powered collaboration tools.',category: 'Remote Work Tools',price: '$299',billing: 'month',features: [ '3D virtual spaces','Real-time collaboration','AI meeting rooms','Team building activities','Productivity analytics' ],ctaLabel: 'Create Virtual Office',href: 'https: } ] },{ name: 'Legal Tech',slug: 'legal-tech',items: [ { id: 'ai-contract-reviewer',title: 'AI Contract Reviewer',description: 'Advanced contract review system that identifies risks,suggests improvements,and ensures compliance.',category: 'Legal Tech',price: '$399',billing: 'month',features: [ 'Risk identification','Compliance checking','Clause analysis','Version comparison','Legal research integration' ],ctaLabel: 'Review Contracts',href: 'https: },{ id: 'legal-research-assistant',title: 'Legal Research Assistant',description: 'AI-powered legal research platform that finds relevant cases,statutes,and legal precedents.',category: 'Legal Tech',price: '$299',billing: 'month',features: [ 'Case law search','Statute analysis','Precedent identification','Citation management','Research summaries' ],ctaLabel: 'Research Legal',href: 'https: },{ id: 'compliance-monitoring-system',title: 'Compliance Monitoring System',description: 'Automated compliance monitoring that tracks regulatory changes and ensures adherence to legal requirements.',category: 'Legal Tech',price: '$499',billing: 'month',features: [ 'Regulatory tracking','Compliance assessment','Risk alerts','Audit preparation','Reporting automation' ],ctaLabel: 'Monitor Compliance',href: 'https: } ] },{ name: 'EdTech',slug: 'edtech',items: [ { id: 'adaptive-learning-platform',title: 'Adaptive Learning Platform',description: 'AI-powered learning platform that adapts content and pace to individual student needs and learning styles.',category: 'EdTech',price: '$199',billing: 'month',features: [ 'Personalized learning paths','Adaptive assessments','Progress tracking','Content recommendations','Analytics dashboard' ],ctaLabel: 'Adapt Learning',href: 'https: },{ id: 'virtual-reality-classroom',title: 'Virtual Reality Classroom',description: 'Immersive VR learning environment that creates engaging educational experiences for students.',category: 'EdTech',price: '$399',billing: 'month',features: [ '3D learning environments','Interactive simulations','Multi-user collaboration','Content creation tools','Progress tracking' ],ctaLabel: 'Create VR Classroom',href: 'https: },{ id: 'ai-tutor-assistant',title: 'AI Tutor Assistant',description: 'Intelligent tutoring system that provides personalized guidance and support to students.',category: 'EdTech',price: '$149',billing: 'month',features: [ 'Personalized tutoring','Homework assistance','Progress monitoring','Parent communication','Learning analytics' ],ctaLabel: 'Get AI Tutor',href: 'https: } ] },{ name: 'Real Estate Tech',slug: 'real-estate-tech',items: [ { id: 'ai-property-valuator',title: 'AI Property Valuator',description: 'Advanced property valuation system using AI to analyze market data and provide accurate property assessments.',category: 'Real Estate Tech',price: '$299',billing: 'month',features: [ 'Market analysis','Property comparison','Valuation algorithms','Market trends','Investment insights' ],ctaLabel: 'Value Property',href: 'https: },{ id: 'virtual-property-tour',title: 'Virtual Property Tour Platform',description: 'Immersive virtual tour platform that allows potential buyers to explore properties remotely.',category: 'Real Estate Tech',price: '$199',billing: 'month',features: [ '360-degree tours','Interactive floor plans','Virtual staging','Lead generation','Analytics dashboard' ],ctaLabel: 'Create Virtual Tours',href: 'https: },{ id: 'smart-property-manager',title: 'Smart Property Manager',description: 'AI-powered property management system that optimizes operations and tenant satisfaction.',category: 'Real Estate Tech',price: '$399',billing: 'month',features: [ 'Maintenance scheduling','Tenant communication','Financial tracking','Performance analytics','Predictive maintenance' ],ctaLabel: 'Manage Properties',href: 'https: } ] },{ name: 'Supply Chain Tech',slug: 'supply-chain-tech',items: [ { id: 'ai-supply-chain-optimizer',title: 'AI Supply Chain Optimizer',description: 'Intelligent supply chain optimization platform that reduces costs and improves efficiency.',category: 'Supply Chain Tech',price: '$599',billing: 'month',features: [ 'Route optimization','Inventory management','Demand forecasting','Cost analysis','Risk assessment' ],ctaLabel: 'Optimize Supply Chain',href: 'https: },{ id: 'blockchain-tracking-system',title: 'Blockchain Tracking System',description: 'Transparent supply chain tracking using blockchain technology for end-to-end visibility.',category: 'Supply Chain Tech',price: '$399',billing: 'month',features: [ 'End-to-end tracking','Transparency','Quality assurance','Compliance reporting','Stakeholder access' ],ctaLabel: 'Track Supply Chain',href: 'https: },{ id: 'predictive-logistics',title: 'Predictive Logistics Platform',description: 'AI-powered logistics platform that predicts delays and optimizes delivery routes.',category: 'Supply Chain Tech',price: '$299',billing: 'month',features: [ 'Delay prediction','Route optimization','Real-time tracking','Performance analytics','Cost optimization' ],ctaLabel: 'Optimize Logistics',href: 'https: } ] },{ name: 'Energy Tech',slug: 'energy-tech',items: [ { id: 'smart-grid-optimizer',title: 'Smart Grid Optimizer',description: 'AI-powered smart grid optimization platform that improves energy distribution and reduces waste.',category: 'Energy Tech',price: '$799',billing: 'month',features: [ 'Grid optimization','Demand response','Energy storage','Renewable integration','Cost reduction' ],ctaLabel: 'Optimize Grid',href: 'https: },{ id: 'renewable-energy-manager',title: 'Renewable Energy Manager',description: 'Comprehensive renewable energy management system for solar,wind,and hydroelectric power.',category: 'Energy Tech',price: '$499',billing: 'month',features: [ 'Energy production monitoring','Storage optimization','Grid integration','Performance analytics','Maintenance scheduling' ],ctaLabel: 'Manage Renewables',href: 'https: },{ id: 'energy-efficiency-analyzer',title: 'Energy Efficiency Analyzer',description: 'AI-powered energy efficiency analysis that identifies optimization opportunities and tracks improvements.',category: 'Energy Tech',price: '$299',billing: 'month',features: [ 'Efficiency analysis','Optimization recommendations','Cost tracking','Performance monitoring','Sustainability reporting' ],ctaLabel: 'Analyze Efficiency',href: 'https: } ] },{ name: 'Smart Cities',slug: 'smart-cities',items: [ { id: 'traffic-optimization-system',title: 'Traffic Optimization System',description: 'AI-powered traffic management system that reduces congestion and improves urban mobility.',category: 'Smart Cities',price: '$999',billing: 'month',features: [ 'Real-time traffic monitoring','Signal optimization','Congestion prediction','Public transport integration','Environmental impact' ],ctaLabel: 'Optimize Traffic',href: 'https: },{ id: 'smart-parking-platform',title: 'Smart Parking Platform',description: 'Intelligent parking management system that reduces search time and optimizes space utilization.',category: 'Smart Cities',price: '$399',billing: 'month',features: [ 'Space detection','Mobile app integration','Payment processing','Analytics dashboard','City integration' ],ctaLabel: 'Smart Parking',href: 'https: },{ id: 'environmental-monitoring',title: 'Environmental Monitoring System',description: 'Comprehensive environmental monitoring platform for air quality,noise,and pollution tracking.',category: 'Smart Cities',price: '$599',billing: 'month',features: [ 'Air quality monitoring','Noise pollution tracking','Data visualization','Alert system','Regulatory compliance' ],ctaLabel: 'Monitor Environment',href: 'https: } ] },{ name: 'AgriTech',slug: 'agritech',items: [ { id: 'precision-agriculture-platform',title: 'Precision Agriculture Platform',description: 'AI-powered precision agriculture system that optimizes crop yields and reduces resource waste.',category: 'AgriTech',price: '$499',billing: 'month',features: [ 'Soil analysis','Crop monitoring','Irrigation optimization','Yield prediction','Resource management' ],ctaLabel: 'Optimize Agriculture',href: 'https: },{ id: 'drone-farming-system',title: 'Drone Farming System',description: 'Autonomous drone system for crop monitoring,spraying,and data collection in agriculture.',category: 'AgriTech',price: '$799',billing: 'month',features: [ 'Autonomous flight','Crop monitoring','Precision spraying','Data collection','Analytics platform' ],ctaLabel: 'Deploy Drones',href: 'https: },{ id: 'livestock-monitoring',title: 'Livestock Monitoring System',description: 'AI-powered livestock monitoring system for health tracking and productivity optimization.',category: 'AgriTech',price: '$299',billing: 'month',features: [ 'Health monitoring','Behavior analysis','Productivity tracking','Disease detection','Breeding optimization' ],ctaLabel: 'Monitor Livestock',href: 'https: } ] },{ name: 'Media & Entertainment',slug: 'media-entertainment',items: [ { id: 'ai-content-creator',title: 'AI Content Creator',description: 'Advanced AI platform that generates creative content for media and entertainment industries.',category: 'Media & Entertainment',price: '$399',billing: 'month',features: [ 'Content generation','Style customization','Multi-format output','Collaboration tools','Quality assurance' ],ctaLabel: 'Create Content',href: 'https: },{ id: 'personalized-streaming',title: 'Personalized Streaming Platform',description: 'AI-powered streaming platform that personalizes content recommendations and user experience.',category: 'Media & Entertainment',price: '$299',billing: 'month',features: [ 'Content personalization','Recommendation engine','User behavior analysis','Content discovery','Engagement optimization' ],ctaLabel: 'Personalize Streaming',href: 'https: },{ id: 'virtual-production-studio',title: 'Virtual Production Studio',description: 'Immersive virtual production environment for film,TV,and digital content creation.',category: 'Media & Entertainment',price: '$1,999',billing: 'month',features: [ 'Virtual sets','Real-time rendering','Motion capture','Collaborative editing','Asset management' ],ctaLabel: 'Create Virtually',href: 'https: } ] },{ name: 'Logistics Tech',slug: 'logistics-tech',items: [ { id: 'autonomous-delivery-system',title: 'Autonomous Delivery System',description: 'AI-powered autonomous delivery system for last-mile logistics and package delivery.',category: 'Logistics Tech',price: '$899',billing: 'month',features: [ 'Route optimization','Autonomous navigation','Package tracking','Delivery scheduling','Customer notification' ],ctaLabel: 'Automate Delivery',href: 'https: },{ id: 'warehouse-automation',title: 'Warehouse Automation Platform',description: 'Comprehensive warehouse automation system that optimizes operations and reduces costs.',category: 'Logistics Tech',price: '$699',billing: 'month',features: [ 'Robotic automation','Inventory management','Order fulfillment','Performance analytics','Maintenance scheduling' ],ctaLabel: 'Automate Warehouse',href: 'https: },{ id: 'supply-chain-visibility',title: 'Supply Chain Visibility Platform',description: 'End-to-end supply chain visibility platform with real-time tracking and analytics.',category: 'Logistics Tech',price: '$399',billing: 'month',features: [ 'Real-time tracking','Risk assessment','Performance analytics','Stakeholder collaboration','Compliance reporting' ],ctaLabel: 'Track Supply Chain',href: 'https: } ] },{ name: 'HR Tech',slug: 'hr-tech',items: [ { id: 'ai-recruitment-platform',title: 'AI Recruitment Platform',description: 'Intelligent recruitment platform that automates candidate screening and improves hiring efficiency.',category: 'HR Tech',price: '$299',billing: 'month',features: [ 'Resume screening','Skill assessment','Interview scheduling','Candidate matching','Analytics dashboard' ],ctaLabel: 'Recruit Smarter',href: 'https: },{ id: 'employee-engagement-monitor',title: 'Employee Engagement Monitor',description: 'AI-powered employee engagement platform that tracks satisfaction and improves workplace culture.',category: 'HR Tech',price: '$199',billing: 'month',features: [ 'Engagement surveys','Sentiment analysis','Performance tracking','Feedback management','Action planning' ],ctaLabel: 'Monitor Engagement',href: 'https: },{ id: 'learning-management-system',title: 'AI Learning Management System',description: 'Intelligent learning management system that personalizes training and tracks employee development.',category: 'HR Tech',price: '$249',billing: 'month',features: [ 'Personalized learning','Skill assessment','Progress tracking','Content management','Analytics reporting' ],ctaLabel: 'Manage Learning',href: 'https: } ] },{ name: 'Sales Tech',slug: 'sales-tech',items: [ { id: 'ai-sales-predictor',title: 'AI Sales Predictor',description: 'Advanced sales prediction platform that forecasts revenue and identifies growth opportunities.',category: 'Sales Tech',price: '$399',billing: 'month',features: [ 'Revenue forecasting','Lead scoring','Opportunity identification','Performance analytics','Growth insights' ],ctaLabel: 'Predict Sales',href: 'https: },{ id: 'sales-automation-platform',title: 'Sales Automation Platform',description: 'Comprehensive sales automation platform that streamlines processes and increases productivity.',category: 'Sales Tech',price: '$299',billing: 'month',features: [ 'Lead management','Email automation','Meeting scheduling','Pipeline tracking','Performance analytics' ],ctaLabel: 'Automate Sales',href: 'https: },{ id: 'customer-success-platform',title: 'Customer Success Platform',description: 'AI-powered customer success platform that improves retention and drives growth.',category: 'Sales Tech',price: '$249',billing: 'month',features: [ 'Customer health monitoring','Success planning','Retention analytics','Upsell opportunities','Churn prediction' ],ctaLabel: 'Succeed with Customers',href: 'https: } ] },{ name: 'Customer Experience',slug: 'customer-experience',items: [ { id: 'omnichannel-experience-platform',title: 'Omnichannel Experience Platform',description: 'Unified customer experience platform that provides seamless interactions across all channels.',category: 'Customer Experience',price: '$499',billing: 'month',features: [ 'Channel integration','Customer journey mapping','Personalization engine','Analytics dashboard','Performance optimization' ],ctaLabel: 'Unify Experience',href: 'https: },{ id: 'sentiment-analysis-engine',title: 'Sentiment Analysis Engine',description: 'Advanced sentiment analysis platform that monitors customer feedback and improves satisfaction.',category: 'Customer Experience',price: '$199',billing: 'month',features: [ 'Real-time monitoring','Multi-language support','Trend analysis','Alert system','Action recommendations' ],ctaLabel: 'Analyze Sentiment',href: 'https: },{ id: 'customer-feedback-automation',title: 'Customer Feedback Automation',description: 'Automated customer feedback collection and analysis system for continuous improvement.',category: 'Customer Experience',price: '$149',billing: 'month',features: [ 'Automated surveys','Feedback analysis','Response management','Improvement tracking','ROI measurement' ],ctaLabel: 'Automate Feedback',href: 'https: } ] },{ name: 'Productivity Tools',slug: 'productivity-tools',items: [ { id: 'ai-task-manager',title: 'AI Task Manager',description: 'Intelligent task management platform that prioritizes work and optimizes productivity.',category: 'Productivity Tools',price: '$99',billing: 'month',features: [ 'Smart prioritization','Time tracking','Progress monitoring','Team collaboration','Performance analytics' ],ctaLabel: 'Manage Tasks',href: 'https: },{ id: 'workflow-automation-engine',title: 'Workflow Automation Engine',description: 'Powerful workflow automation platform that streamlines business processes and reduces manual work.',category: 'Productivity Tools',price: '$199',billing: 'month',features: [ 'Process automation','Integration capabilities','Workflow designer','Performance monitoring','Analytics dashboard' ],ctaLabel: 'Automate Workflows',href: 'https: },{ id: 'collaborative-workspace',title: 'Collaborative Workspace Platform',description: 'Advanced collaborative workspace that enhances team productivity and communication.',category: 'Productivity Tools',price: '$149',billing: 'month',features: [ 'Real-time collaboration','Document sharing','Communication tools','Project management','Analytics insights' ],ctaLabel: 'Collaborate Better',href: 'https: } ] } ];
