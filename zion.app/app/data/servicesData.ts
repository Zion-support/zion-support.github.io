// Comprehensive Service Catalog — 159+ Real-World AI, IT & Micro SAAS Services
// DO NOT DELETE existing entries. Always ADD new ones with current market pricing.
// Organized by: AI Services → IT Services → Micro SAAS Solutions → IT Consulting

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'it' | 'saas' | 'consulting';
  subcategory: string;
  description: string;
  features: string[];
  benefits: string[];
  pricing: Record<string, string>;
  contactUrl: string;
  icon?: string;
}

export type ServiceData = Service;

// ═══════════════════════════════════════════════════════
// SECTION 1: AI SERVICES & SOLUTIONS (AIaaS)
// ═══════════════════════════════════════════════════════

export const aiServices: Service[] = [
  // Existing Services
  {
    id: 'ai-ml-1',
    title: 'Machine Learning Model Training & Deployment',
    subtitle: 'End-to-end ML pipeline — from data prep to production inference',
    category: 'ai',
    subcategory: 'ML Engineering',
    description: 'Custom machine learning model development, training, hyperparameter tuning, and deployment. Supports tabular, text, image, and time-series data. Includes automated retraining and drift monitoring.',
    features: [
      'AutoML for rapid model prototyping',
      'Custom feature engineering pipelines',
      'Hyperparameter optimization (Bayesian, Grid, Random)',
      'Model versioning with MLflow',
      'A/B testing for model comparison',
      'Automated retraining on new data',
      'Drift detection and alerting',
      'ONNX / TensorFlow / PyTorch export'
    ],
    benefits: [
      'Up to 60% faster model development with AutoML',
      'Production-grade inference endpoints',
      'Continuous model improvement via feedback loops',
      'Reduced manual review by 80% with accurate predictions'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-nlp-1',
    title: 'Natural Language Processing & Chatbot Solutions',
    subtitle: 'Enterprise-grade NLP engines and conversational AI',
    category: 'ai',
    subcategory: 'NLP & Conversational AI',
    description: 'Build intelligent chatbots, sentiment analysis engines, text summarization, entity extraction, and language understanding systems. Multi-language support with fine-tuned LLMs.',
    features: [
      'Intent recognition and entity extraction',
      'Multi-language support (50+ languages)',
      'Context-aware conversational flows',
      'Sentiment and emotion analysis',
      'Document summarization and Q&A',
      'Custom fine-tuned LLMs',
      'Real-time translation',
      'Handoff to human agents'
    ],
    benefits: [
      'Handle 90%+ of customer inquiries automatically',
      '24/7 support in multiple languages',
      'Customer satisfaction improvement up to 35%',
      'Reduce support costs up to 60%'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-vision-1',
    title: 'Computer Vision & Image Recognition',
    subtitle: 'Smart image analysis for quality control, security, and automation',
    category: 'ai',
    subcategory: 'Computer Vision',
    description: 'Real-time object detection, facial recognition, defect detection, OCR, and video analytics. Deployable on edge devices or cloud.',
    features: [
      'Real-time object detection (YOLO, Faster R-CNN)',
      'OCR for invoices, receipts, and documents',
      'Quality inspection for manufacturing',
      'Facial recognition with privacy controls',
      'Video analytics and anomaly detection',
      'Edge deployment (Jetson, Raspberry Pi)',
      'Custom training on your datasets',
      'API-first architecture'
    ],
    benefits: [
      'Reduce manual inspection time by 90%',
      'Catch defects with 99.5%+ accuracy',
      'Automate document processing workflows',
      'Real-time security monitoring'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-voice-1',
    title: 'Voice AI & Speech Recognition',
    subtitle: 'Speech-to-text, text-to-speech, and voice-powered interfaces',
    category: 'ai',
    subcategory: 'Voice & Audio AI',
    description: 'Custom speech recognition systems, voice assistants, call transcription, and audio analysis. Supports noisy environments and multiple languages.',
    features: [
      'Real-time speech-to-text transcription',
      'Custom wake word detection',
      'Text-to-speech with natural voices',
      'Call center analytics and scoring',
      'Speaker diarization',
      'Noise-robust recognition',
      'Voice biometrics',
      'API integration-ready'
    ],
    benefits: [
      'Automate 70% of phone-based workflows',
      'Real-time meeting transcription',
      'Accessible interfaces for all users',
      'Voice biometric authentication'
    ],
    pricing: { Starter: '$1,299/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-gen-1',
    title: 'Generative AI Solutions (Text, Image, Code)',
    subtitle: 'Power business automation with generative AI',
    category: 'ai',
    subcategory: 'Generative AI',
    description: 'Harness large language models and diffusion models for content generation, code assistance, design automation, and creative workflows tailored to your business.',
    features: [
      'Custom GPT-style assistants for businesses',
      'AI image generation (product photos, marketing)',
      'Code generation and documentation',
      'Content creation pipelines',
      'Fine-tuned models on proprietary data',
      'Prompt engineering and management',
      'Guardrails and content filtering',
      'Multi-model orchestration'
    ],
    benefits: [
      '10x faster content production',
      'Automated code documentation',
      'Brand-consistent creative output',
      'Reduce creative costs by 60%+'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-forecast-1',
    title: 'AI-Powered Forecasting & Demand Planning',
    subtitle: 'Predict sales, demand, trends, and market shifts with precision',
    category: 'ai',
    subcategory: 'Predictive Analytics',
    description: 'Time-series forecasting for sales, inventory, staffing, and market demand. Integrates with ERP, CRM, and supply chain systems.',
    features: [
      'Multi-horizon forecasting (daily to annual)',
      'External factor integration (weather, events, holidays)',
      'Anomaly and outlier detection',
      'Scenario simulation and what-if analysis',
      'Automated reorder point calculation',
      'Cross-product correlation modeling',
      'Real-time dashboard updates',
      'API integration with ERP/CRM'
    ],
    benefits: [
      'Reduce overstock by 25-40%',
      'Improve forecast accuracy by 30-50%',
      'Optimize workforce scheduling',
      'Data-driven procurement decisions'
    ],
    pricing: { Starter: '$1,599/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-recommend-1',
    title: 'AI Recommendation Engine',
    subtitle: 'Personalized product content and recommendation systems',
    category: 'ai',
    subcategory: 'Recommendation Systems',
    description: 'Build Netflix-style recommendation engines for e-commerce, content platforms, and SaaS products. Supports collaborative filtering, content-based, and hybrid approaches.',
    features: [
      'Collaborative and content-based filtering',
      'Real-time personalization',
      'A/B testing framework',
      'Cold-start problem solutions',
      'Explainable recommendations',
      'Cross-channel deployment (web, app, email)',
      'Performance monitoring dashboard',
      'Continuous learning from user feedback'
    ],
    benefits: [
      'Increase conversion rates by 15-35%',
      'Boost average order value by 20%',
      'Reduce bounce rates by 25%',
      'Personalized user experience at scale'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-ocr-1',
    title: 'Intelligent Document Processing (OCR + AI)',
    subtitle: 'Automated data extraction from invoices, contracts, forms, and documents',
    category: 'ai',
    subcategory: 'Document AI',
    description: 'AI-powered document processing that extracts, classifies, and validates data from unstructured documents. Eliminates manual data entry.',
    features: [
      'Multi-format support (PDF, images, scans)',
      'Automated document classification',
      'Extract tables, signatures, dates',
      'Human-in-the-loop validation',
      'Bulk processing support',
      'Custom field extraction models',
      'Audit trail and version history',
      'Integration with ERP/crm systems'
    ],
    benefits: [
      'Reduce data entry time by 90%',
      '99%+ extraction accuracy',
      'Process 50,000+ pages/day',
      'Eliminate human errors in data entry'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-detection-1',
    title: 'AI Anomaly Detection & Fraud Prevention',
    subtitle: 'Real-time detection of anomalies, fraud, and security breaches',
    category: 'ai',
    subcategory: 'Anomaly Detection',
    description: 'Detect fraudulent transactions, security breaches, system anomalies, and unusual patterns in real-time using advanced machine learning.',
    features: [
      'Real-time streaming analysis',
      'Unsupervised anomaly detection',
      'Fraud scoring system',
      'Customizable alert thresholds',
      'Historical pattern analysis',
      'Multi-signal correlation',
      'Compliance reporting',
      'Adaptive learning engine'
    ],
    benefits: [
      'Detect 99.5% of fraudulent activities',
      'Reduce false positives by 80%',
      'Real-time alerting (< 1 second)',
      'Save millions in annual fraud losses'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$5,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  // ═══ NEW AI SERVICES ADDED ═══

  {
    id: 'ai-multimodal-1',
    title: 'Multimodal AI Integration',
    subtitle: 'Unified text + image + audio + video understanding for complex workflows',
    category: 'ai',
    subcategory: 'Multimodal AI',
    description: 'Combines text, vision, audio, and video AI into unified systems. Build assistants that can see, hear, read, and reason across modalities for complex business automation.',
    features: [
      'Cross-modal reasoning (e.g., analyze a document image and summarize it)',
      'Video content analysis and keyframe extraction',
      'Audio sentiment and tone analysis',
      'Visual search and similarity matching',
      'Unified API for all modalities',
      'Real-time multimodal pipelines',
      'Fine-tuning across modalities',
      'Accessibility features (alt-text, captions, audio descriptions)'
    ],
    benefits: [
      'Process complex multi-format inputs automatically',
      'Build richer AI assistants and agents',
      'Reduce manual review by 85%+',
      'Next-generation customer experiences'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-agent-1',
    title: 'AI Agent & Autonomous Workflow Platform',
    subtitle: 'Deploy autonomous AI agents that execute multi-step tasks end-to-end',
    category: 'ai',
    subcategory: 'AI Agents',
    description: 'Design and deploy AI agents that can browse the web, use tools, read documents, execute code, and make decisions autonomously. Multi-agent orchestration for enterprise workflows.',
    features: [
      'Tool-use agents (web browsing, API calls, code execution)',
      'Multi-agent orchestration and collaboration',
      'Long-horizon task planning (ReAct, Chain-of-Thought)',
      'Human-in-the-loop approval gates',
      'Agent memory and session management',
      'Function calling with external systems',
      'Custom tool development',
      'Agent monitoring and observability dashboard'
    ],
    benefits: [
      'Automate entire workflows, not just single steps',
      'Agents work 24/7 with minimal supervision',
      'Scale operations without proportional staff increases',
      'Complex research, analysis, and reporting in minutes'
    ],
    pricing: { Starter: '$3,499/mo', Professional: '$7,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-rag-1',
    title: 'Retrieval-Augmented Generation (RAG) Systems',
    subtitle: 'Enterprise-grade knowledge systems powered by LLMs with your own data',
    category: 'ai',
    subcategory: 'RAG & Knowledge AI',
    description: 'Build chatbots and search systems that answer questions based on your company\'s documents, databases, and knowledge bases. Reduces hallucinations by grounding AI in real data.',
    features: [
      'Connect to 100+ data sources (SharePoint, Confluence, S3, databases)',
      'Hybrid search: semantic + keyword + structured',
      'Vector database (Pinecone, Weaviate, Qdrant)',
      'Graph-based knowledge retrieval',
      'Cited, verifiable answers with source attribution',
      'Continuous knowledge base updates',
      'Multi-tenant RAG architecture',
      'Access control and data governance'
    ],
    benefits: [
      'Employees find critical information 10x faster',
      'Reduce onboarding time by 50%',
      'Eliminate knowledge silos',
      'AI answers grounded in YOUR data, not hallucinations'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-eval-1',
    title: 'AI Model Evaluation & Benchmarking',
    subtitle: 'Comprehensive testing suite for AI model quality, safety, and reliability',
    category: 'ai',
    subcategory: 'AI Testing',
    description: 'Rigorous evaluation of AI models before deployment. Tests for accuracy, bias, safety, robustness, adversarial attacks, and domain-specific performance metrics.',
    features: [
      'Automated red teaming and adversarial testing',
      'Bias and fairness auditing across demographics',
      'Hallucination detection and scoring',
      'Domain-specific custom benchmarks',
      'A/B model comparison framework',
      'Safety classifiers (toxicity, PII, harmful content)',
      'Performance regression tracking',
      'Compliance reporting (EU AI Act, NIST AI RMF)'
    ],
    benefits: [
      'Deploy AI models you can trust',
      'Meet regulatory requirements (EU AI Act, etc.)',
      'Catch model failures before production',
      'Documented risk assessment for stakeholders'
    ],
    pricing: { Starter: '$1,299/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-synthesis-1',
    title: 'Synthetic Data Generation',
    subtitle: 'Create realistic artificial datasets for training, testing, and privacy compliance',
    category: 'ai',
    subcategory: 'Synthetic Data',
    description: 'Generate high-quality synthetic datasets that mirror real-world data patterns — without exposing sensitive information. Ideal for model training, testing, and privacy compliance.',
    features: [
      'Tabular data synthesis (CTGAN, TVAE, Copulas)',
      'Synthetic text corpus generation',
      'Synthetic medical/financial data pipelines',
      'Differential privacy guarantees',
      'Data quality scoring and validation',
      'Subset generation for edge cases',
      'Auto-labeling for model training',
      'On-premise and cloud deployment'
    ],
    benefits: [
      'Access to unlimited training data without privacy risks',
      'Achieve GDPR/HIPAA compliance more easily',
      'Test models on rare edge-case scenarios',
      'Reduce data acquisition costs by 90%+'
    ],
    pricing: { Starter: '$1,799/mo', Professional: '$4,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-embeddings-1',
    title: 'Enterprise Embedding & Vector Search Infrastructure',
    subtitle: 'Production-grade semantic search and embedding pipelines',
    category: 'ai',
    subcategory: 'Embedding Services',
    description: 'Deploy and manage embedding models, vector databases, and semantic search infrastructure. Powers recommendation, similarity search, clustering, and RAG systems.',
    features: [
      'Managed vector database (open-source and cloud)',
      'Embedding model selection and routing',
      'Hybrid dense + sparse search',
      'Real-time and batch ingestion pipelines',
      'Namespace and tenant isolation',
      'Similarity search at scale (millions of vectors)',
      'Embedding quality evaluation',
      'Cost optimization through model routing'
    ],
    benefits: [
      'Sub-second semantic search across millions of items',
      'Power RAG, recommendations, and clustering',
      'Reduce infrastructure management overhead',
      'Automatic model versioning and upgrades'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-ops-1',
    title: 'MLOps & AI Infrastructure Management',
    subtitle: 'End-to-end ML lifecycle management — training, serving, monitoring, retraining',
    category: 'ai',
    subcategory: 'MLOps',
    description: 'Full MLOps platform setup: experiment tracking, model registry, CI/CD for ML, feature stores, and production monitoring. Runs on your cloud or ours.',
    features: [
      'MLflow / Kubeflow / Vertex AI integration',
      'Model registry and versioning',
      'Automated ML pipelines (training → deploy)',
      'Feature store and feature engineering',
      'Online and offline inference serving',
      'Model monitoring (data drift, concept drift)',
      'Canary and shadow deployments',
      'Cost optimization and autoscaling'
    ],
    benefits: [
      'Go from experiment to production in hours, not months',
      'Reproducible ML pipelines',
      'Continuous model improvement in production',
      'Reduce ML infrastructure costs by 40%+'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-agentic-rag-1',
    title: 'Agentic RAG for Complex Research & Analysis',
    subtitle: 'AI agents that research, reason, and report autonomously using your knowledge base',
    category: 'ai',
    subcategory: 'Agentic AI',
    description: 'Beyond simple Q&A — AI agents that decompose complex questions, perform multi-hop research across documents and APIs, and produce detailed reports and analysis.',
    features: [
      'Multi-step research and reasoning',
      'Web search + internal knowledge integration',
      'Report generation (PDF, docx, presentations)',
      'Scheduled and on-demand research tasks',
      'Citation trails and source verification',
      'Multi-agent debate for complex analysis',
      'Custom agent toolkits',
      'Human oversight and approval workflows'
    ],
    benefits: [
      'Research reports produced in minutes, not days',
      'Always grounded in verified sources and data',
      'Automate competitive intelligence, due diligence',
      'Scale analyst capacity without hiring'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$6,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-finetune-1',
    title: 'LLM Fine-Tuning & Custom Model Training',
    subtitle: 'Transform generic LLMs into domain-specific expert models',
    category: 'ai',
    subcategory: 'Model Fine-Tuning',
    description: 'Fine-tune open-source and proprietary LLMs on your proprietary data. Create models that excel in your specific industry, jargon, and use cases.',
    features: [
      'Full fine-tuning, LoRA, QLoRA, and adapter-based training',
      'Data preparation, cleaning, and augmentation',
      'Training on-premises or in cloud',
      'Safety and alignment tuning',
      'Model evaluation and comparison',
      'Cost optimization through efficient training',
      'Continuous learning with feedback loops',
      'Model licensing and deployment support'
    ],
    benefits: [
      'Models that understand YOUR industry terminology',
      'Improved accuracy on domain-specific tasks by 40-70%',
      'Reduced reliance on expensive API calls',
      'Proprietary models as competitive advantage'
    ],
    pricing: { Starter: '$2,999/project', Professional: '$7,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  // More new AI services
  {
    id: 'ai-compliance-1',
    title: 'AI Compliance & Governance Framework',
    subtitle: 'Ensure your AI deployments meet regulatory and ethical standards',
    category: 'ai',
    subcategory: 'AI Governance',
    description: 'Audit, assess, and ensure your AI systems comply with EU AI Act, NIST AI RMF, SOC 2, HIPAA, and other regulations. Includes bias auditing, explainability, and risk assessment.',
    features: [
      'EU AI Act compliance assessment and gap analysis',
      'NIST AI Risk Management Framework alignment',
      'Algorithmic bias auditing and remediation',
      'AI explainability and transparency reports',
      'Data privacy impact assessments (DPIA)',
      'SOC 2 / HIPAA / GDPR readiness reviews',
      'Automated compliance monitoring dashboards',
      'Policy templates and governance playbooks'
    ],
    benefits: [
      'Avoid regulatory fines and reputational damage',
      'Demonstrate responsible AI use to customers and partners',
      'Build trust through transparent AI decision-making',
      'Stay ahead of evolving AI regulations globally'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-process-automation-1',
    title: 'Intelligent Process Automation (IPA)',
    subtitle: 'Combine RPA with AI to automate end-to-end complex business processes',
    category: 'ai',
    subcategory: 'Process Automation',
    description: 'Go beyond simple RPA — automate document-heavy workflows, decision-making processes, and cognitive tasks combining AI reasoning with robotic execution.',
    features: [
      'Intelligent document processing pipeline',
      'Decision rules engine with AI augmentation',
      'Process mining and bottleneck identification',
      'Human-in-the-loop exception handling',
      'Integration with ERP, CRM, and legacy systems',
      'Process analytics and continuous optimization',
      'Orchestration of multi-step cross-system workflows',
      'No-code/low-code process builder'
    ],
    benefits: [
      'Automate 80%+ of document-heavy workflows',
      'Reduce operational costs by 30-60%',
      'Process turnaround times drop by 90%',
      '24/7 operations with zero errors'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$5,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-search-1',
    title: 'AI-Powered Enterprise Search',
    subtitle: 'Unified search across all company knowledge, documents, and applications',
    category: 'ai',
    subcategory: 'Search & Discovery',
    description: 'Google-like search for your company\'s entire knowledge base — documents, databases, Slack, Confluence, Notion, emails, and more — with natural language understanding.',
    features: [
      'Natural language search across 50+ data sources',
      'Semantic understanding and contextual results',
      'Source attribution and document preview',
      'Personalized results based on role and history',
      'Real-time indexing and updates',
      'Access control and data security',
      'Analytics on search patterns and knowledge gaps',
      'Custom search connectors for internal tools'
    ],
    benefits: [
      'Employees find information in seconds, not hours',
      'Reduce duplicate work and knowledge silos',
      'Onboard new employees 3x faster',
      'Unlock hidden insights in existing documents'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  // ═══ EVEN MORE NEW AI SERVICES ═══
  {
    id: 'ai-code-gen-1',
    title: 'AI Code Generation & Review Platform',
    subtitle: 'Accelerate development with AI-generated, reviewed, and refactored code',
    category: 'ai',
    subcategory: 'AI Coding',
    description: 'Enterprise AI coding assistant that generates boilerplate, writes tests, reviews pull requests, and identifies security vulnerabilities — trained on your existing codebase.',
    features: [
      'Code generation from natural language descriptions',
      'Automated code review and best-practice enforcement',
      'Security vulnerability detection in code',
      'Legacy code refactoring and modernization',
      'Test generation with 90%+ coverage',
      'GitHub/GitLab/Bitbucket integration',
      'Multi-language support (30+ languages)',
      'On-premises deployment for code privacy'
    ],
    benefits: [
      'Developer productivity increase of 30-50%',
      'Catch bugs and security issues before merge',
      'Maintain consistent code quality across teams',
      'Modernize legacy codebases systematically'
    ],
    pricing: { Starter: '$1,299/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-video-1',
    title: 'AI Video Analysis & Content Intelligence',
    subtitle: 'Extract insights from video content, meetings, and surveillance',
    category: 'ai',
    subcategory: 'Video AI',
    description: 'Process, analyze, and extract actionable intelligence from video streams — for marketing, security, training, and operational use cases.',
    features: [
      'Real-time video content analysis',
      'Meeting transcription and action item extraction',
      'Security camera monitoring and alerting',
      'Product placement and brand detection',
      'Customer behavior analysis in retail',
      'Automated highlight reel generation',
      'Object tracking and motion analysis',
      'Integration with video platforms (Vimeo, YouTube, etc.)'
    ],
    benefits: [
      'Turn hours of video into actionable insights',
      'Real-time security threat detection',
      'Automated content repurposing for social media',
      'Optimize retail layouts based on customer behavior'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$5,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-creatives-1',
    title: 'AI Creative Studio',
    subtitle: 'On-demand AI-powered graphic design, copywriting, and brand asset generation',
    category: 'ai',
    subcategory: 'Creative AI',
    description: 'Generate marketing materials, social media content, ad copy, and brand-consistent creative assets using AI, reviewed and refined by your brand guidelines.',
    features: [
      'Brand-consistent image generation',
      'Social media post and ad copy generation',
      'Logo, color palette, and style guide enforcement',
      'A/B test variant generation',
      'Multi-format output (web, print, social)',
      'Campaign brainstorming and copywriting',
      'Template library and customization',
      'Collaboration and approval workflows'
    ],
    benefits: [
      '10x faster creative content production',
      'Maintain brand consistency across all channels',
      'Reduce creative agency costs by 70%+',
      'Generate hundreds of campaign variants for A/B testing'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-email-1',
    title: 'AI Email Intelligence & Automation',
    subtitle: 'Smart inbox management, automated responses, and email analytics',
    category: 'ai',
    subcategory: 'Email AI',
    description: 'Transform email workflows with AI-powered triage, auto-responses, sentiment detection, and smart scheduling. Integrates with Gmail, Outlook, and custom servers.',
    features: [
      'Smart inbox prioritization and categorization',
      'AI-drafted replies based on context and tone',
      'Email sentiment analysis',
      'Follow-up reminder automation',
      'Meeting scheduling intelligence',
      'Newsletter personalization at scale',
      'Spam and phishing detection',
      'Email analytics and response time tracking'
    ],
    benefits: [
      'Save 2+ hours per day per employee on email',
      'Never miss important emails or follow-ups',
      'Improve response quality and consistency',
      'Protect against phishing with AI detection'
    ],
    pricing: { Starter: '$699/mo', Professional: '$1,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-translation-1',
    title: 'AI Translation & Localization',
    subtitle: 'Human-quality AI translation for websites, apps, documents, and customer communications',
    category: 'ai',
    subcategory: 'Translation AI',
    description: 'Fast, accurate neural machine translation with cultural adaptation for websites, software, marketing materials, and customer support — in 50+ languages.',
    features: [
      'Neural machine translation (NMT) quality',
      'Content-aware translation (technical, marketing, legal)',
      'Website and app localization pipelines',
      'Translation memory and glossary management',
      'Cultural adaptation and tone adjustment',
      'Real-time translation API',
      'Human review and QA integration',
      'Continuous improvement from corrections'
    ],
    benefits: [
      'Launch in new markets 5x faster',
      'Reduce translation costs by 60%+',
      'Maintain consistency across languages',
      'Cultural sensitivity for local markets'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-sentiment-1',
    title: 'Customer Sentiment & Social Listening AI',
    subtitle: 'Monitor brand sentiment, track trends, and understand customer emotions across channels',
    category: 'ai',
    subcategory: 'Sentiment Analysis',
    description: 'Real-time monitoring of customer sentiment across social media, reviews, support tickets, and surveys. AI-powered trend detection and competitive analysis.',
    features: [
      'Monitor 100+ social media platforms and review sites',
      'Real-time alerting on sentiment shifts',
      'Competitive sentiment comparison',
      'Topic and theme clustering',
      'Crisis detection and escalation workflows',
      'Influencer and ambassador identification',
      'Cross-language sentiment analysis',
      'Custom dashboards and automated reports'
    ],
    benefits: [
      'Detect PR crises before they escalate',
      'Identify product improvements from customer feedback',
      'Track campaign impact in real-time',
      'Benchmark against competitors continuously'
    ],
    pricing: { Starter: '$1,299/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-triage-1',
    title: 'AI-Powered Customer Triage & Routing',
    subtitle: 'Intelligent ticket classification and routing for support teams',
    category: 'ai',
    subcategory: 'Support AI',
    description: 'Automatically classify, prioritize, and route customer support tickets using AI analysis of ticket content, customer history, and sentiment.',
    features: [
      'Auto-categorization of tickets by topic and urgency',
      'Sentiment-based priority escalation',
      'Intelligent agent routing and skill matching',
      'Suggested responses for agents',
      'SLA compliance monitoring',
      'Automated resolution for common issues',
      'Real-time queue management',
      'Integration with Zendesk, Freshdesk, ServiceNow'
    ],
    benefits: [
      'Reduce average response time by 60%',
      'Improve first contact resolution by 35%',
      'Route tickets to the right agent instantly',
      'Automatically escalate angry customers'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-healthcare-1',
    title: 'AI for Healthcare — Diagnostics & Compliance',
    subtitle: 'HIPAA-compliant AI for clinical documentation, diagnostics support, and healthcare automation',
    category: 'ai',
    subcategory: 'Healthcare AI',
    description: 'AI solutions for healthcare providers: clinical note transcription, diagnostic assistance, patient triage, and HIPAA-compliant data processing.',
    features: [
      'Automated clinical documentation from patient conversations',
      'Diagnostic decision support systems',
      'Patient triage and symptom analysis chatbot',
      'HIPAA-compliant data processing pipeline',
      'Medical image analysis (X-rays, MRIs)',
      'Drug interaction and contraindication checking',
      'EHR/EMR integration (Epic, Cerner)',
      'Audit trail and compliance reporting'
    ],
    benefits: [
      'Reduce clinician documentation time by 50%',
      'Improve diagnostic accuracy with AI assistance',
      'Maintain strict HIPAA compliance',
      'Enable faster patient triage'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$6,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  // ═══ MOST RECENT ADDITIONS ═══
  {
    id: 'ai-education-1',
    title: 'AI-Powered Learning & Training Platform',
    subtitle: 'Adaptive learning experiences powered by AI for employee onboarding and development',
    category: 'ai',
    subcategory: 'EdTech AI',
    description: 'Create personalized learning paths, interactive training simulations, and automated assessments using AI. Scales training across the organization.',
    features: [
      'Adaptive learning paths based on learner progress',
      'Interactive AI tutoring and Q&A',
      'Automated assessment and grading',
      'Content generation from company documentation',
      'Gamification and engagement tracking',
      'Competency gap analysis',
      'SCORM/xAPI compliance',
      'Multi-language training delivery'
    ],
    benefits: [
      'Reduce training costs by 60%',
      'Accelerate employee onboarding by 40%',
      'Improve knowledge retention with adaptive content',
      'Measurable skill development tracking'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-legal-1',
    title: 'AI Legal Document Analysis',
    subtitle: 'Contract analysis, clause extraction, and legal risk assessment',
    category: 'ai',
    subcategory: 'Legal AI',
    description: 'AI-powered analysis of contracts, legal documents, and regulatory filings. Extract key clauses, identify risks, and compare against your contract standards.',
    features: [
      'Automated contract clause extraction',
      'Risk and red-flag identification',
      'Comparison against standard templates',
      'Regulatory compliance checking',
      'Due diligence document analysis',
      'Patent and IP review support',
      'Multi-language legal document processing',
      'Seamless integration with legal tech platforms'
    ],
    benefits: [
      'Review contracts 90% faster than manual review',
      'Identify risks and non-standard clauses automatically',
      'Reduce legal review costs by 50-70%',
      'Ensure regulatory compliance at scale'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$5,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-financial-1',
    title: 'AI Financial Analysis & Reporting',
    subtitle: 'Automated financial reporting, forecasting, and compliance analysis',
    category: 'ai',
    subcategory: 'Financial AI',
    description: 'Extract financial data from documents, generate reports, perform variance analysis, and automate regulatory compliance reporting.',
    features: [
      'Automated financial statement generation',
      'Variance analysis and trend identification',
      'Invoice and receipt processing',
      'Regulatory compliance reporting (SOX, GAAP, IFRS)',
      'Cash flow forecasting',
      'Anomaly detection in financial transactions',
      'Dashboard and reporting automation',
      'ERP integration (SAP, Oracle, NetSuite)'
    ],
    benefits: [
      'Close books 5x faster',
      'Reduce manual data entry errors by 95%',
      'Real-time financial insights and dashboards',
      'Automated audit-ready documentation'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-cv-1',
    title: 'AI-Powered Computer Vision for Retail & Manufacturing',
    subtitle: 'Smart shelf monitoring, quality control, and inventory management',
    category: 'ai',
    subcategory: 'Retail & Manufacturing AI',
    description: 'Real-time computer vision solutions for retail shelf monitoring, manufacturing quality control, inventory tracking, and safety compliance.',
    features: [
      'Automated shelf monitoring (out-of-stock, misplaced items)',
      'Manufacturing defect detection',
      'Real-time inventory counting',
      'Safety compliance monitoring (PPE, hazards)',
      'Planogram compliance checking',
      'Checkout-free store technology',
      'Product recognition and SKU mapping',
      'Edge deployment for low latency'
    ],
    benefits: [
      'Increase shelf availability by 15-25%',
      'Reduce product waste through early detection',
      'Automate labor-intensive inventory counts',
      'Improve workplace safety compliance'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-iot-1',
    title: 'AI of Things (IoT) Intelligence',
    subtitle: 'AI-powered analytics and automation for IoT device networks',
    category: 'ai',
    subcategory: 'IoT AI',
    description: 'Connect, monitor, and optimize IoT device fleets with AI-powered analytics, predictive maintenance, and automated anomaly detection.',
    features: [
      'Real-time IoT data ingestion and processing',
      'Predictive maintenance analytics',
      'Edge AI for device-level intelligence',
      'Fleet management and monitoring dashboard',
      'Automated alerting and incident response',
      'Time-series anomaly detection',
      'Integration with MQTT, Kafka, and cloud IoT platforms',
      'Remote device configuration and updates'
    ],
    benefits: [
      'Reduce unplanned downtime by 40-60%',
      'Optimize energy consumption across facilities',
      'Scale IoT management across thousands of devices',
      'Predict equipment failures before they happen'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$6,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-automation-1',
    title: 'AI Decision Automation',
    subtitle: 'Automate business decisions with AI-driven decision engines',
    category: 'ai',
    subcategory: 'Decision AI',
    description: 'Build decision engines that automatically process applications, claims, loans, and requests based on configurable rules and AI risk assessment.',
    features: [
      'Configurable decision rules and scoring models',
      'Real-time and batch processing',
      'Explainable AI decision reasoning',
      'Human escalation paths',
      'A/B testing for decision strategies',
      'Integration with business systems',
      'Continuous model improvement',
      'Audit trail and compliance logging'
    ],
    benefits: [
      'Process 10,000+ decisions/day with sub-second latency',
      'Reduce manual review workload by 90%',
      'Consistent, bias-aware decisioning',
      'Measurable ROI within 3 months'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-music-1',
    title: 'AI Music & Audio Generation',
    subtitle: 'Generate custom background music, sound effects, and audio content',
    category: 'ai',
    subcategory: 'Audio AI',
    description: 'Create original, royalty-free music and sound effects tailored to your brand, videos, apps, and content using AI-powered composition.',
    features: [
      'Custom music generation by genre, mood, duration',
      'Brand-sonic identity creation',
      'Audio jingle and podcast intro generation',
      'Sound effects and ambient sound creation',
      'Multiple style and instrument options',
      'Licensing included',
      'API for programmatic generation',
      'Interactive music editing tools'
    ],
    benefits: [
      'Eliminate royalty-free music licensing headaches',
      'Create unique brand audio identity',
      'Generate 50+ variations in minutes',
      'Cost-effective alternative to composers'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-pharma-1',
    title: 'AI for Pharmaceutical & Life Sciences',
    subtitle: 'Drug discovery acceleration, clinical trial optimization, and regulatory analytics',
    category: 'ai',
    subcategory: 'Pharma AI',
    description: 'AI-accelerated drug discovery pipelines, clinical trial design optimization, and regulatory submission automation for pharmaceutical companies.',
    features: [
      'Molecular property prediction and generation',
      'Clinical trial site selection and optimization',
      'Literature mining and drug target identification',
      'Regulatory document generation (FDA, EMA)',
      'Patient recruitment optimization',
      'Adverse event signal detection',
      'Biomarker identification',
      'Patent landscape analysis'
    ],
    benefits: [
      'Reduce drug discovery time by 30-50%',
      'Optimize clinical trial success rates',
      'Accelerate regulatory submissions',
      'Identify novel drug targets from literature'
    ],
    pricing: { Starter: '$4,999/mo', Professional: '$12,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-energy-1',
    title: 'AI Energy Optimization & Sustainability',
    subtitle: 'Reduce energy costs and carbon footprint with intelligent optimization',
    category: 'ai',
    subcategory: 'Energy AI',
    description: 'AI-powered energy consumption optimization for buildings, facilities, and industrial operations. Reduces costs and environmental impact.',
    features: [
      'Real-time energy consumption monitoring',
      'Predictive energy demand forecasting',
      'HVAC and lighting optimization',
      'Renewable energy integration optimization',
      'Carbon footprint tracking and reporting',
      'Equipment efficiency analysis',
      'Automated energy-saving recommendations',
      'Utility bill anomaly detection'
    ],
    benefits: [
      'Reduce energy costs by 15-30%',
      'Achieve sustainability and ESG goals',
      'Predict energy peaks and optimize usage',
      'Automated reporting for ESG compliance'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-sports-1',
    title: 'AI Sports Analytics & Performance',
    subtitle: 'Data-driven athlete performance optimization and game strategy',
    category: 'ai',
    subcategory: 'Sports AI',
    description: 'Wearable sensor integration, performance analytics, and AI-powered coaching for professional and amateur sports teams.',
    features: [
      'Wearable data ingestion and analytics',
      'Injury risk prediction and prevention',
      'Game strategy simulation and optimization',
      'Player performance scoring',
      'Opponent pattern analysis',
      'Recovery optimization recommendations',
      'Real-time match analytics dashboard',
      'Talent scouting through data analysis'
    ],
    benefits: [
      'Reduce injury rates by 30-50%',
      'Optimize game strategies with data',
      'Improve athlete performance outcomes',
      'Gain competitive edge through analytics'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$7,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-marketing-1',
    title: 'AI Marketing Attribution & Optimization',
    subtitle: 'Understand which channels and campaigns truly drive revenue',
    category: 'ai',
    subcategory: 'Marketing AI',
    description: 'Multi-touch marketing attribution, automated bidding optimization, and customer journey analytics powered by AI.',
    features: [
      'Multi-touch attribution modeling',
      'Automated ad bidding optimization',
      'Customer journey mapping and analysis',
      'Predictive customer lifetime value',
      'Channel mix optimization',
      'Campaign performance forecasting',
      'Automated budget reallocation',
      'Cross-channel analytics dashboard'
    ],
    benefits: [
      'Maximize marketing ROI by 20-40%',
      'Optimize spend across all channels',
      'Identify high-value customer segments',
      'Predict and prevent churn'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$4,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-telecom-1',
    title: 'AI Network Optimization for Telecom',
    subtitle: 'Intelligent telecom network management and optimization',
    category: 'ai',
    subcategory: 'Telecom AI',
    description: 'AI-driven network performance optimization, predictive maintenance, and capacity planning for telecom operators.',
    features: [
      'Network congestion prediction',
      'Anomaly detection in network traffic',
      'Automated root cause analysis',
      'Capacity planning and forecasting',
      'Cell tower optimization',
      '5G network slicing management',
      'Quality of experience (QoE) monitoring',
      'Self-healing network capabilities'
    ],
    benefits: [
      'Reduce network outages by 40%',
      'Optimize network infrastructure investments',
      'Improve customer quality of experience',
      'Proactive rather than reactive maintenance'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$8,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-digitaltwin-1',
    title: 'Digital Twin Simulation & Optimization',
    subtitle: 'Create virtual replicas of physical assets, processes, and systems for real-time simulation',
    category: 'ai',
    subcategory: 'Digital Twin',
    description: 'Build digital twins of manufacturing lines, supply chains, buildings, or infrastructure. Run what-if simulations, predict failures, and optimize operations in a risk-free virtual environment.',
    features: [
      '3D visualization of physical assets and processes',
      'Real-time sensor data synchronization',
      'Predictive maintenance simulation',
      'What-if scenario modeling',
      'Process optimization recommendations',
      'Integration with IoT and SCADA systems',
      'Collaborative virtual walkthroughs',
      'Lifecycle tracking and comparison'
    ],
    benefits: [
      'Reduce physical prototyping costs by 50-70%',
      'Predict and prevent equipment failures',
      'Optimize processes without production disruption',
      'Accelerate product development cycles by 40%'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$8,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-autonomous-1',
    title: 'Autonomous Business Process Orchestrator',
    subtitle: 'End-to-end automation of complex business processes with self-healing capabilities',
    category: 'ai',
    subcategory: 'Autonomous Systems',
    description: 'Deploy AI orchestrators that autonomously manage multi-step business processes — from order fulfillment to vendor management — with self-correction and exception handling.',
    features: [
      'Multi-step process automation with branching logic',
      'Self-healing and automatic retry on failures',
      'Cross-system orchestration (ERP, CRM, WMS)',
      'Real-time process monitoring and bottleneck detection',
      'Human escalation for edge cases',
      'Continuous process optimization via reinforcement learning',
      'SLA tracking and compliance enforcement',
      'Natural language process definition'
    ],
    benefits: [
      'Automate 95%+ of order-to-cash cycles',
      'Reduce process cycle times by 80%',
      'Self-correcting operations with minimal human intervention',
      'Scale operations 10x without proportional headcount'
    ],
    pricing: { Starter: '$4,999/mo', Professional: '$12,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-quantum-1',
    title: 'Quantum Computing Readiness & Hybrid Algorithms',
    subtitle: 'Prepare your organization for quantum advantage with quantum-ready algorithms and hybrid computing',
    category: 'ai',
    subcategory: 'Quantum Computing',
    description: 'Quantum computing consulting and hybrid algorithm development — identify quantum-advantage use cases, build quantum-ready systems, and run hybrid classical-quantum workloads.',
    features: [
      'Quantum readiness assessment and roadmap',
      'Hybrid classical-quantum algorithm design',
      'Quantum chemistry and materials simulation',
      'Optimization problem formulation for quantum solvers',
      'Qiskit, Cirq, and PennyLane integration',
      'Cloud quantum access (IBM, AWS Braket, Azure)',
      'Post-quantum cryptography assessment',
      'Quantum ML pipeline development'
    ],
    benefits: [
      'Gain first-mover advantage in quantum computing',
      'Solve optimization problems 1000x faster',
      'Future-proof encryption against quantum threats',
      'Access quantum hardware without in-house expertise'
    ],
    pricing: { Starter: '$4,999/mo', Professional: '$14,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-predictive-1',
    title: 'Predictive Maintenance & Asset Intelligence',
    subtitle: 'Predict equipment failures before they happen with multi-sensor AI analytics',
    category: 'ai',
    subcategory: 'Predictive Maintenance',
    description: 'Industrial-grade predictive maintenance using vibration analysis, thermal imaging, acoustic monitoring, and machine learning to predict failures weeks in advance.',
    features: [
      'Multi-sensor data fusion (vibration, thermal, acoustic)',
      'Remaining useful life (RUL) estimation',
      'Automated work order generation',
      'Failure mode classification and root cause analysis',
      'Condition-based maintenance scheduling',
      'Digital twin integration for simulation',
      'Mobile inspection app with AR overlays',
      'Fleet-wide asset health dashboard'
    ],
    benefits: [
      'Reduce unplanned downtime by 50-70%',
      'Extend equipment lifespan by 20-40%',
      'Cut maintenance costs by 25-30%',
      'Eliminate catastrophic equipment failures'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-sustainability-1',
    title: 'AI for Climate & Environmental Monitoring',
    subtitle: 'Real-time environmental monitoring and climate risk assessment powered by AI',
    category: 'ai',
    subcategory: 'Environmental AI',
    description: 'Monitor air quality, water quality, deforestation, and climate risks using satellite imagery, IoT sensors, and AI-powered analytics for ESG compliance and environmental protection.',
    features: [
      'Satellite imagery analysis for land use changes',
      'Air and water quality sensor network analytics',
      'Carbon sequestration measurement and verification',
      'Climate risk scoring for assets and supply chains',
      'Biodiversity monitoring and species detection',
      'Pollution source identification',
      'Automated EPA and regulatory reporting',
      'Real-time environmental alerting system'
    ],
    benefits: [
      'Achieve ESG and sustainability compliance',
      'Detect environmental violations before penalties',
      'Quantify and reduce environmental footprint',
      'Generate revenue through carbon credit verification'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$5,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-ethics-1',
    title: 'AI Ethics & Fairness Auditing',
    subtitle: 'Detect bias, ensure fairness, and build trust in AI systems with comprehensive ethics audits',
    category: 'ai',
    subcategory: 'AI Ethics',
    description: 'Independent AI ethics auditing service that evaluates your AI systems for bias, fairness, transparency, and regulatory compliance. Includes algorithmic impact assessments and remediation roadmaps.',
    features: [
      'Algorithmic bias detection across protected attributes',
      'Fairness metrics and disparity analysis',
      'Model explainability and transparency reports',
      'EU AI Act and regulatory compliance readiness',
      'AI governance framework design',
      'Stakeholder impact assessments',
      'Ethical AI policy development',
      'Continuous monitoring and drift alerts'
    ],
    benefits: [
      'Mitigate legal and reputational risks from biased AI',
      'Build customer trust through transparent AI',
      'Meet EU AI Act and upcoming regulatory requirements',
      'Ensure fair outcomes across all demographic groups'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-supplychain-1',
    title: 'AI Supply Chain Optimization',
    subtitle: 'Intelligent supply chain planning, risk mitigation, and logistics optimization',
    category: 'ai',
    subcategory: 'Supply Chain AI',
    description: 'End-to-end AI-powered supply chain optimization — demand sensing, inventory optimization, supplier risk assessment, and logistics planning for complex global networks.',
    features: [
      'AI demand sensing and forecasting',
      'Dynamic inventory optimization',
      'Supplier risk scoring and monitoring',
      'Multi-echelon inventory planning',
      'Route and logistics optimization',
      'Procurement spend analytics',
      'Disruption detection and response',
      'Carbon-aware supply chain planning'
    ],
    benefits: [
      'Reduce inventory carrying costs by 20-35%',
      'Improve service levels to 98%+',
      'Detect supply disruptions weeks in advance',
      'Optimize working capital across the supply chain'
    ],
    pricing: { Starter: '$3,499/mo', Professional: '$8,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-devtools-1',
    title: 'AI-Powered Developer Experience Platform',
    subtitle: 'Enterprise AI coding assistant, code review, and developer productivity platform',
    category: 'ai',
    subcategory: 'Developer Tools AI',
    description: 'Transform developer productivity with AI-powered code generation, intelligent code review, automated documentation, and personalized developer coaching — trained on your codebase.',
    features: [
      'Context-aware code completion (supports 30+ languages)',
      'Automated code review with security scanning',
      'AI-generated documentation and changelogs',
      'Technical debt identification and prioritization',
      'Onboarding assistant for new developers',
      'Architecture decision record (ADR) generation',
      'PR review bot with learning from team patterns',
      'IDE integration (VS Code, JetBrains, Neovim)'
    ],
    benefits: [
      'Increase developer velocity by 35-50%',
      'Reduce code review time by 60%',
      'Catch security vulnerabilities before merge',
      'Accelerate onboarding of new team members'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-simulation-1',
    title: 'AI Simulation & Digital Experimentation',
    subtitle: 'Run thousands of business scenarios and what-if analyses using AI-powered simulation',
    category: 'ai',
    subcategory: 'Simulation & Modeling',
    description: 'Build and run complex business simulations to test strategies, optimize decisions, and de-risk initiatives before real-world deployment — powered by AI agents and Monte Carlo methods.',
    features: [
      'Monte Carlo and agent-based simulation engines',
      'Business scenario modeling and stress testing',
      'Market and competitive dynamics simulation',
      'Financial model simulation and risk analysis',
      'Operational process simulation',
      'Automated experiment design and analysis',
      'Interactive scenario dashboards',
      'Integration with real-time data feeds'
    ],
    benefits: [
      'Test strategies risk-free before investing',
      'Quantify uncertainty and downside risks',
      'Optimize pricing, staffing, and resource allocation',
      'Reduce costly real-world experimentation by 80%'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$6,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-biometrics-1',
    title: 'Biometric Authentication & Behavioral AI',
    subtitle: 'Secure, frictionless identity verification using biometrics and behavioral patterns',
    category: 'ai',
    subcategory: 'Biometric AI',
    description: 'AI-powered biometric authentication including facial recognition, voice verification, behavioral biometrics, and liveness detection for secure and seamless user identity verification.',
    features: [
      'Multi-modal biometric fusion (face + voice + behavioral)',
      'Liveness detection and anti-spoofing',
      'Continuous authentication during sessions',
      'Behavioral biometrics (keystroke, mouse, gait patterns)',
      'FIDO2/WebAuthn integration',
      'Privacy-preserving on-device processing',
      'Real-time risk scoring per authentication',
      'Compliance with NIST SP 800-63 and eIDAS'
    ],
    benefits: [
      'Eliminate password fatigue and phishing risk',
      'Reduce fraud losses by 95%+',
      'Frictionless user experience (1-second verification)',
      'Meet regulatory KYC/AML requirements'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$9,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  {
    id: 'ai-compliance-automation',
    title: 'AI-Powered Compliance Automation',
    subtitle: 'Automate regulatory compliance monitoring and reporting across frameworks',
    category: 'ai',
    subcategory: 'Compliance Automation',
    description: `Automated compliance monitoring for SOC 2, HIPAA, GDPR, PCI DSS, and ISO 27001. Continuously scans systems, generates evidence, and flags violations in real-time.`,
    features: [
    'Automated evidence collection across 50+ cloud services',
    'Real-time compliance drift detection and alerting',
    'Pre-built policy templates for SOC 2, HIPAA, GDPR, PCI DSS',
    'AI-powered gap analysis with remediation playbooks',
    'Audit-ready report generation in minutes',
    'Continuous control monitoring with screenshot proof',
    'Integration with GRC platforms (Drata, Vanta, Secureframe)',
    'Regulatory change tracking and impact assessment',
    ],
    benefits: [
    'Cut audit prep time by 90%',
    'Maintain continuous compliance instead of point-in-time snapshots',
    'Reduce compliance operating costs by 60%',
    'Avoid costly compliance violations with real-time monitoring',
    ],
    pricing: {
    Starter: '$499/mo',
    Professional: '$1,999/mo',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'ai-voice-agent-studio',
    title: 'AI Voice Agent Studio',
    subtitle: 'Build and deploy custom AI voice agents for customer service and operations',
    category: 'ai',
    subcategory: 'Voice AI',
    description: `Design, train, and deploy natural-sounding AI voice agents that handle customer calls, bookings, and support with human-level conversation quality.`,
    features: [
    'No-code voice agent builder with drag-and-drop flow designer',
    'Real-time voice cloning and custom TTS voices',
    'Multi-language support (50+ languages)',
    'Context-aware conversation with memory across calls',
    'Seamless human handoff with warm transfers',
    'CRM integration (Salesforce, HubSpot, Zendesk)',
    'Call analytics and sentiment tracking dashboard',
    'IVR replacement with natural conversation routing',
    ],
    benefits: [
    'Handle 10,000+ calls simultaneously 24/7',
    'Reduce call center costs by up to 80%',
    'Consistent, professional customer experience every time',
    'Deploy new voice agents in hours, not months',
    ],
    pricing: {
    Starter: '$999/mo',
    Professional: '$3,999/mo',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'ai-code-review-mentor',
    title: 'AI Code Review & Mentoring Platform',
    subtitle: 'Instant, context-aware code reviews that teach developers to write better code',
    category: 'ai',
    subcategory: 'Developer Tools',
    description: `AI-powered code review that goes beyond linting — understands context, architecture, security, and performance, providing educational explanations that improve your team over time.`,
    features: [
    'Deep contextual code analysis beyond static analysis',
    'Security vulnerability detection with OWASP mapping',
    'Performance anti-pattern identification',
    'Educational explanations for every suggestion',
    'Architecture-level feedback and design pattern recommendations',
    'Custom rules engine for team coding standards',
    'PR auto-review with approval-gated merging',
    'Integration with GitHub, GitLab, Bitbucket, and Azure DevOps',
    ],
    benefits: [
    'Catch bugs and security issues before merge',
    'Level up junior developers with inline teaching',
    'Reduce code review cycle time by 70%',
    'Enforce consistent coding standards across teams',
    ],
    pricing: {
    Starter: '$299/mo',
    Professional: '$799/mo',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'ai-financial-forecasting',
    title: 'AI Financial Forecasting & FP&A',
    subtitle: 'Intelligent financial planning, budgeting, and forecasting powered by machine learning',
    category: 'ai',
    subcategory: 'Finance & FP&A',
    description: `AI-driven financial forecasting that learns from your historical data, market trends, and business patterns to deliver more accurate revenue, expense, and cash flow predictions.`,
    features: [
    'Automated revenue forecasting with scenario modeling',
    'Expense pattern detection and anomaly alerts',
    'Cash flow prediction with 13-week rolling forecast',
    'Variance analysis with AI-generated explanations',
    'Board-ready financial dashboards and reports',
    'Integration with QuickBooks, Xero, NetSuite, SAP',
    'Monte Carlo simulation for risk-adjusted projections',
    'Real-time budget vs. actual tracking',
    ],
    benefits: [
    'Improve forecast accuracy by 30-50%',
    'Reduce FP&A team workload by 60%',
    'Make data-driven decisions with confidence intervals',
    'Identify financial risks weeks before they materialize',
    ],
    pricing: {
    Starter: '$1,499/mo',
    Professional: '$4,999/mo',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'ai-recruitment-intelligence',
    title: 'AI Recruitment Intelligence Platform',
    subtitle: 'End-to-end AI-powered recruiting with bias-free candidate matching and predictive hiring',
    category: 'ai',
    subcategory: 'HR & Recruitment',
    description: `Intelligent recruiting platform that uses AI to source, screen, rank, and match candidates to open roles — reducing bias and time-to-hire while improving quality of hire.`,
    features: [
    'AI-powered resume parsing and skill extraction',
    'Bias-free candidate scoring and ranking',
    'Predictive candidate-job fit modeling',
    'Automated outreach and interview scheduling',
    'Talent pool analytics and market benchmarking',
    'Diversity and inclusion dashboards',
    'Integration with LinkedIn, Indeed, and ATS platforms',
    'Offer letter generation and negotiation guidance',
    ],
    benefits: [
    'Reduce time-to-hire from 42 days to 12 days',
    'Improve hire retention by 35% with better matching',
    'Eliminate unconscious bias in screening',
    'Build a talent pipeline that\'s always warm and ready',
    ],
    pricing: {
    Starter: '$999/mo',
    Professional: '$2,999/mo',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'ai-research-assistant',
    title: 'AI Research & Knowledge Synthesis Agent',
    subtitle: 'Automated research agent that reads thousands of sources and synthesizes actionable intelligence briefs',
    category: 'ai',
    subcategory: 'Knowledge Management',
    description: `An AI research agent that ingests market reports, academic papers, news feeds, and internal documents to produce structured intelligence briefs, competitive analyses, and trend reports on demand.`,
    features: [
    'Automated deep research across web, academic, and proprietary sources',
    'Structured intelligence brief generation (executive summaries)',
    'Competitive analysis and market landscape mapping',
    'Citation tracking with source verification',
    'Custom research workflows and automated reporting schedules',
    'Knowledge graph construction from research findings',
    'Multi-format export (PDF, slide decks, wiki entries)',
    'Integration with internal knowledge bases and Slack',
    ],
    benefits: [
    'Compress 40 hours of research into 15 minutes',
    'Never miss a critical industry development',
    'Build institutional knowledge at scale',
    'Make better decisions with structured, cited intelligence',
    ],
    pricing: {
    Starter: '$1,999/mo',
    Professional: '$4,999/mo',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'ai-sustainability-deep',
    title: 'AI Sustainability & ESG Intelligence Platform',
    subtitle: 'Measure, manage, and report your environmental impact with AI-driven sustainability analytics',
    category: 'ai',
    subcategory: 'Sustainability & ESG',
    description: `Comprehensive ESG management platform that uses AI to measure carbon footprint, analyze supply chain sustainability, generate regulatory reports (CSRD, SEC, TCFD), and identify reduction opportunities.`,
    features: [
    'Automated carbon accounting across Scope 1, 2, and 3 emissions',
    'AI-powered supply chain sustainability scoring',
    'Regulatory report generation (CSRD, SEC climate, TCFD)',
    'Energy consumption optimization recommendations',
    'Sustainability KPI tracking and benchmarking',
    'Lifecycle assessment automation',
    'Waste and circular economy optimization',
    'Stakeholder and investor ESG reporting portal',
    ],
    benefits: [
    'Meet mandatory ESG disclosure requirements',
    'Reduce carbon footprint by 15-25% with AI recommendations',
    'Win contracts requiring sustainability commitments',
    'Turn sustainability from cost center to competitive advantage',
    ],
    pricing: {
    Starter: '$1,299/mo',
    Professional: '$3,999/mo',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'ai-gen-app-dev-1',
    title: 'AI-Powered Application Development',
    subtitle: 'Build production-ready AI apps with LLM orchestration, RAG, and agent frameworks',
    category: 'ai',
    subcategory: 'GenAI Application Development',
    description: `End-to-end development service for building production-ready AI applications — from LLM-powered chatbots and RAG systems to multi-agent workflows and AI-native products.`,
    features: [
      'LLM application architecture and design',
      'RAG (Retrieval-Augmented Generation) implementation',
      'Multi-agent system design and orchestration (LangChain, LangGraph, CrewAI)',
      'Vector database selection and optimization (Pinecone, Weaviate, Qdrant)',
      'Prompt engineering and fine-tuning workflows',
      'AI safety, guardrails, and output validation',
      'Scalable deployment with cost optimization',
      'Evaluation frameworks and A/B testing for AI outputs',
    ],
    benefits: [
      'Go from idea to production AI app in weeks, not months',
      'Leverage the latest LLM advances without the R&D burden',
      'Build AI features that scale to millions of users',
      'Reduce hallucinations and improve accuracy with RAG',
    ],
    pricing: {
      Starter: '$4,999/mo',
      Professional: '$14,999/mo',
      Enterprise: 'Custom'
    },
    contactUrl: '/contact'
  },
  {
    id: 'ai-ethics-audit-1',
    title: 'AI Ethics Audit & Bias Assessment',
    subtitle: 'Comprehensive AI ethics audits ensuring your AI systems are fair, transparent, and trustworthy',
    category: 'ai',
    subcategory: 'AI Ethics & Governance',
    description: `Independent AI ethics audits examining your AI systems for bias, fairness, transparency, and regulatory compliance. Includes algorithmic impact assessments, bias testing across protected classes, and governance framework design.`,
    features: [
      'Algorithmic bias detection across race, gender, age, and geography',
      'Model interpretability and explainability analysis (XAI)',
      'EU AI Act compliance assessment and readiness',
      'AI impact assessment for high-risk applications',
      'Fairness metrics evaluation (demographic parity, equalized odds)',
      'AI governance framework design (NIST AI RMF, OECD)',
      'Transparency report and model card documentation',
      'Stakeholder engagement and AI literacy workshops',
    ],
    benefits: [
      'Demonstrate responsible AI to regulators and stakeholders',
      'Prevent PR disasters from biased AI outputs',
      'Build customer trust through AI transparency',
      'Stay ahead of global AI regulation requirements',
    ],
    pricing: {
      Starter: '$7,999/project',
      Professional: '$24,999/project',
      Enterprise: 'Custom'
    },
    contactUrl: '/contact'
  },
// ═══════════════════════════════════════════════════
// BATCH 7: AI SERVICES ADDITIONS
// ═══════════════════════════════════════════════════

  {
    id: 'ai-content-intelligence-2',
    title: 'AI Content Intelligence & Optimization Platform',
    subtitle: 'Data-driven content strategy powered by AI analytics and SEO intelligence',
    category: 'ai',
    subcategory: 'Content Intelligence',
    description: 'An AI-powered platform that analyzes your content ecosystem, identifies gaps, optimizes for search intent, and predicts which topics will drive the most engagement and conversions. Combines NLP analysis with competitive intelligence and real-time trend detection.',
    features: [
      'AI-powered content gap analysis across 50+ competitors',
      'Real-time SEO optimization with semantic keyword clustering',
      'Predictive content performance scoring before publication',
      'Automated content brief generation with source attribution',
      'Multilingual content optimization for 30+ languages',
      'Integration with Google Search Console, Ahrefs, and SEMrush',
      'Content ROI tracking with revenue attribution modeling',
      'Automated internal linking and topic cluster recommendations'
    ],
    benefits: [
      'Increase organic traffic by 40-70% within 6 months',
      'Reduce content research time by 65%',
      'Improve content ROI with data-driven topic selection',
      'Dominate niche SERPs with AI-optimized content clusters'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-predictive-analytics-2',
    title: 'Predictive Analytics & Forecasting Engine',
    subtitle: 'Enterprise-grade predictive models for revenue, churn, and demand forecasting',
    category: 'ai',
    subcategory: 'Predictive Analytics',
    description: 'Deploy production-ready predictive models for sales forecasting, customer churn prediction, demand planning, and revenue optimization. Includes automated feature engineering, model selection, and continuous retraining pipelines.',
    features: [
      'Automated time-series forecasting (ARIMA, Prophet, DeepAR)',
      'Customer churn prediction with survival analysis',
      'Revenue forecasting with Monte Carlo simulations',
      'Demand sensing using external signals (weather, events, economics)',
      'Automated feature store and feature engineering pipelines',
      'Model interpretability with SHAP and LIME explanations',
      'Real-time prediction APIs with sub-100ms latency',
      'Continuous model monitoring and automated retraining'
    ],
    benefits: [
      'Improve forecast accuracy by 30-50% vs. traditional methods',
      'Reduce customer churn by up to 25% with early intervention',
      'Optimize inventory and reduce waste by 20-35%',
      'Make data-driven decisions with explainable predictions'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-voice-assistant-enterprise-2',
    title: 'Enterprise Voice AI Assistant Platform',
    subtitle: 'Conversational voice AI for enterprise workflows, meetings, and customer interactions',
    category: 'ai',
    subcategory: 'Voice & Conversational AI',
    description: 'Build and deploy enterprise-grade voice AI assistants that handle complex multi-turn conversations, integrate with business systems, and process natural language voice commands. Supports real-time transcription, sentiment analysis, and automated action execution.',
    features: [
      'Real-time speech-to-text with 99%+ accuracy in 40+ languages',
      'Custom wake words and voice cloning (with consent)',
      'Multi-turn conversational flows with context memory',
      'Integration with CRM, ERP, and helpdesk systems',
      'Real-time meeting transcription and action item extraction',
      'Sentiment and emotion detection during conversations',
      'Voice biometrics for secure authentication',
      'Auto-summarization and follow-up email generation'
    ],
    benefits: [
      'Handle 80%+ of routine voice inquiries automatically',
      'Improve customer satisfaction with instant 24/7 voice support',
      'Reduce call center costs by up to 50%',
      'Boost meeting productivity with automated notes and actions'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-autonomous-trading-2',
    title: 'AI-Powered Autonomous Trading Bot',
    subtitle: 'Intelligent algorithmic trading system with risk management and portfolio optimization',
    category: 'ai',
    subcategory: 'Financial AI',
    description: 'Deploy an AI-driven algorithmic trading system that executes strategies across crypto, forex, and equities markets. Features autonomous decision-making, real-time risk management, and adaptive strategy optimization powered by reinforcement learning.',
    features: [
      'Multi-asset trading: crypto, forex, stocks, and commodities',
      'Reinforcement learning strategy optimization',
      'Real-time risk management with configurable drawdown limits',
      'Sentiment analysis from news, social media, and on-chain data',
      'Backtesting engine with 10+ years of historical data',
      'Portfolio rebalancing with Modern Portfolio Theory optimization',
      'Real-time P&L tracking and performance dashboards',
      'Automated stop-loss, take-profit, and trailing stops'
    ],
    benefits: [
      'Execute trades 24/7 without emotional bias',
      'Backtest strategies against 10+ years of historical data',
      'Adaptive algorithms that improve with market conditions',
      'Reduce portfolio risk with intelligent diversification'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-predictive-maintenance-3',
    title: 'AI Predictive Maintenance for Industrial Assets',
    subtitle: 'Predict equipment failures before they happen with sensor fusion and machine learning',
    category: 'ai',
    subcategory: 'Predictive Maintenance',
    description: 'Reduce unplanned downtime by up to 50% using AI-powered predictive maintenance. Analyzes sensor data from IoT devices, vibration patterns, thermal imaging, and historical failure data to predict equipment failures weeks in advance.',
    features: [
      'Multi-sensor data fusion (vibration, thermal, acoustic, pressure)',
      'Remaining useful life (RUL) estimation per asset',
      'Anomaly detection with unsupervised learning models',
      'Automated work order generation and dispatch',
      'Digital twin integration for simulation',
      'Maintenance scheduling optimization',
      'Spare parts inventory prediction',
      'Condition-based monitoring dashboards'
    ],
    benefits: [
      'Reduce unplanned downtime by 30-50%',
      'Extend equipment lifespan by 20-40%',
      'Cut maintenance costs by 25-30%',
      'Eliminate catastrophic equipment failures'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-drug-discovery-3',
    title: 'AI Drug Discovery & Molecular Design',
    subtitle: 'Accelerate pharmaceutical R&D with AI-powered molecular design and virtual screening',
    category: 'ai',
    subcategory: 'Drug Discovery',
    description: 'Leverage generative AI and molecular simulation to accelerate drug candidate identification, optimize molecular properties, and reduce time-to-clinical-trial by months.',
    features: [
      'De novo molecular generation with reinforcement learning',
      'Virtual screening of billions of compounds',
      'ADMET property prediction (absorption, toxicity, metabolism)',
      'Protein structure prediction and docking simulation',
      'Clinical trial outcome prediction',
      'Patent landscape analysis and freedom-to-operate',
      'Automated research report generation',
      'Integration with LIMS and cheminformatics platforms'
    ],
    benefits: [
      'Reduce drug discovery timeline by 40-60%',
      'Identify novel drug candidates with higher success rates',
      'Cut R&D costs by $50M+ per program',
      'Prioritize compounds with best safety profiles'
    ],
    pricing: { Starter: '$4,999/mo', Professional: '$14,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-adaptive-learning-3',
    title: 'AI Adaptive Learning Platform',
    subtitle: 'Personalized education powered by AI that adapts to each learner\'s pace, style, and knowledge gaps',
    category: 'ai',
    subcategory: 'EdTech AI',
    description: 'An intelligent learning platform that uses AI to create personalized learning paths, adapt content difficulty in real-time, identify knowledge gaps, and maximize knowledge retention.',
    features: [
      'Adaptive learning paths personalized per student',
      'Real-time mastery assessment and gap analysis',
      'AI-generated practice problems and explanations',
      'Spaced repetition optimization for long-term retention',
      'Learning style detection (visual, auditory, kinesthetic)',
      'Gamified engagement and progress tracking',
      'Teacher dashboard with class-level analytics',
      'Integration with LMS and curriculum standards'
    ],
    benefits: [
      'Improve learning outcomes by 40%+',
      'Reduce time to mastery by 30%',
      'Increase student engagement and completion rates',
      'Enable teachers to focus on high-impact instruction'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-smart-cities-3',
    title: 'AI Smart City Infrastructure Platform',
    subtitle: 'Intelligent urban management — traffic optimization, energy management, and public safety',
    category: 'ai',
    subcategory: 'Smart Cities',
    description: 'AI-powered urban infrastructure platform that optimizes traffic flow, reduces energy consumption, manages waste systems, and enhances public safety across smart city deployments.',
    features: [
      'Real-time traffic signal optimization with reinforcement learning',
      'Energy grid load balancing and demand prediction',
      'Waste collection route optimization',
      'Public safety anomaly detection from camera feeds',
      'Air quality monitoring and pollution source tracking',
      'Citizen engagement and reporting portal',
      'Cross-department data integration hub',
      'Digital twin of city infrastructure for simulation'
    ],
    benefits: [
      'Reduce traffic congestion by 25-35%',
      'Cut municipal energy costs by 20-30%',
      'Improve emergency response times by 30%',
      'Enhance quality of life metrics for residents'
    ],
    pricing: { Starter: '$4,999/mo', Professional: '$14,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-precision-agriculture-3',
    title: 'AI Precision Agriculture Platform',
    subtitle: 'Boost crop yields and reduce waste with AI-powered farming intelligence',
    category: 'ai',
    subcategory: 'Agriculture AI',
    description: 'Transform farming operations with AI-powered crop monitoring, yield prediction, irrigation optimization, pest detection, and harvest planning using satellite imagery and IoT sensor data.',
    features: [
      'Satellite and drone imagery analysis for crop health',
      'AI-powered pest and disease detection',
      'Precision irrigation scheduling optimization',
      'Yield prediction with weather integration',
      'Soil analysis and fertilizer recommendation',
      'Automated harvest timing optimization',
      'Supply chain coordination for perishables',
      'Sustainability and carbon credit tracking'
    ],
    benefits: [
      'Increase crop yields by 15-25%',
      'Reduce water usage by 30-40%',
      'Minimize pesticide use with targeted application',
      'Optimize harvest timing to reduce waste'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$5,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-legal-research-3',
    title: 'AI Legal Research & Contract Intelligence',
    subtitle: 'Transform legal workflows with AI-powered research, contract analysis, and compliance monitoring',
    category: 'ai',
    subcategory: 'Legal AI',
    description: 'AI-powered legal assistant that accelerates contract review, legal research, case analysis, and regulatory compliance monitoring — reducing hours of manual work to minutes.',
    features: [
      'AI-powered legal research with case law analysis',
      'Contract clause extraction and risk scoring',
      'Automated contract comparison and redlining',
      'Regulatory change monitoring and impact alerts',
      'Litigation prediction and outcome modeling',
      'Document summarization with key issue extraction',
      'Multi-jurisdiction compliance checking',
      'Integration with legal practice management systems'
    ],
    benefits: [
      'Reduce contract review time by 80%',
      'Identify risks and opportunities in minutes, not days',
      'Stay current with regulatory changes automatically',
      'Improve billing efficiency and client satisfaction'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$7,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-digital-twin-3',
    title: 'AI-Powered Digital Twin Platform',
    subtitle: 'Create intelligent digital replicas of physical assets, processes, and environments for simulation and optimization',
    category: 'ai',
    subcategory: 'Digital Twin',
    description: 'Build real-time digital twins of manufacturing lines, buildings, supply chains, or infrastructure — powered by physics-informed AI models for predictive simulation and optimization.',
    features: [
      'Real-time 3D visualization and simulation environment',
      'Physics-informed machine learning models',
      'Live data ingestion from IoT sensors and SCADA',
      'What-if scenario simulation and optimization',
      'Predictive maintenance and failure modeling',
      'Multi-domain coupling (thermal, structural, fluid)',
      'Collaborative digital twin workspaces',
      'Automated report generation and KPI dashboards'
    ],
    benefits: [
      'Predict failures and optimize before physical changes',
      'Reduce prototyping costs by 60-80%',
      'Enable scenario testing without production risk',
      'Accelerate time-to-market for complex systems'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$12,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-creative-studio-3',
    title: 'AI Creative Studio — Design, Video & Content Generation',
    subtitle: 'Enterprise-grade AI creative platform for generating brand-consistent designs, videos, and multimedia content',
    category: 'ai',
    subcategory: 'Creative AI',
    description: 'Generate on-brand creative assets — logos, marketing materials, product photos, videos, animations, and copy — using enterprise AI models trained on your brand guidelines.',
    features: [
      'Brand-aware image generation and editing',
      'AI video generation and editing from text/scripts',
      'Automated design template system with brand guardrails',
      'Multi-format content adaptation (social, print, web)',
      'AI-powered copywriting in brand voice',
      '3D asset generation and product visualization',
      'Creative workflow automation and approval chains',
      'Analytics on creative performance and engagement'
    ],
    benefits: [
      'Produce 10x more creative assets in a fraction of the time',
      'Maintain brand consistency across all channels',
      'Reduce creative production costs by 60-70%',
      'Rapidly test and iterate on creative concepts'
    ],
    pricing: { Starter: '$999/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-telecom-3',
    title: 'AI Telecom Network Optimization',
    subtitle: 'Self-optimizing telecom networks with AI-driven planning, anomaly detection, and capacity management',
    category: 'ai',
    subcategory: 'Telecom AI',
    description: 'AI-powered network intelligence for telecom operators — automate network planning, detect anomalies, predict capacity demands, and optimize quality of experience across 4G/5G networks.',
    features: [
      'Network anomaly detection and root cause analysis',
      'Predictive capacity planning and load forecasting',
      'AI-driven radio network optimization (SON)',
      'QoE prediction and proactive service assurance',
      'Automated fault detection and self-healing networks',
      'Energy optimization for base station operations',
      'Fiber and fixed-network planning automation',
      'Real-time network health dashboard'
    ],
    benefits: [
      'Reduce network outages by 40-60%',
      'Optimize spectrum and capacity allocation by 25%',
      'Cut energy costs in network operations by 20%',
      'Improve customer quality of experience scores'
    ],
    pricing: { Starter: '$3,499/mo', Professional: '$9,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-pharma-quality-3',
    title: 'AI Pharmaceutical Quality & Compliance',
    subtitle: 'Automated pharmaceutical quality control, deviation management, and regulatory compliance',
    category: 'ai',
    subcategory: 'Pharma AI',
    description: 'AI platform for pharmaceutical manufacturing quality — automate deviation management, batch review, FDA compliance documentation, and predictive quality risk assessment.',
    features: [
      'Automated batch record review and anomaly flagging',
      'Predictive quality risk scoring per batch',
      'Deviation and CAPA management automation',
      'FDA 21 CFR Part 11 compliant electronic records',
      'Real-time process parameter monitoring and alerts',
      'Stability study prediction and shelf-life modeling',
      'Audit trail with full traceability',
      'Integration with ERP, LIMS, and MES systems'
    ],
    benefits: [
      'Reduce batch review time by 80%',
      'Predict quality issues before batch failure',
      'Ensure continuous FDA and EMA compliance',
      'Cut quality-related costs by 30-40%'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$10,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'ai-creator-economy-3',
    title: 'AI Creator Economy Platform',
    subtitle: 'Empower content creators with AI tools for monetization, audience growth, and content optimization',
    category: 'ai',
    subcategory: 'Creator Economy',
    description: 'AI-powered platform for content creators — generating, optimizing, and monetizing content across YouTube, TikTok, podcasts, newsletters, and blogs with intelligent growth analytics.',
    features: [
      'AI script and content generation across formats',
      'Thumbnail and video title optimization with CTR prediction',
      'Audience growth analytics with best-time-to-post AI',
      'Revenue optimization (ad rates, sponsorship pricing, merch suggestions)',
      'Cross-platform content repurposing engine',
      'Viewer sentiment and comment analysis',
      'Membership and subscription funnel optimization',
      'Competitor channel benchmarking'
    ],
    benefits: [
      'Grow audience 3x faster with data-driven strategies',
      'Increase content monetization by 50%+',
      'Produce 5x more content with AI assistance',
      'Make smarter creative decisions with real analytics'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
];

// ═══ IT Services (new additions) ═══

// ═══════════════════════════════════════════════════════
// SECTION 2: IT SERVICES & SOLUTIONS
// ═══════════════════════════════════════════════════════

export const itServices: Service[] = [
  // Existing Services
  {
    id: 'it-cloud-1',
    title: 'Cloud Infrastructure & Migration',
    subtitle: 'Seamless cloud migration, architecture design, and multi-cloud management',
    category: 'it',
    subcategory: 'Cloud Services',
    description: 'Expert cloud architecture, migration planning and execution, cost optimization, and multi-cloud management across AWS, Azure, and Google Cloud.',
    features: [
      'Multi-cloud strategy and architecture (AWS, Azure, GCP)',
      'Lift-and-shift or re-architect migration',
      'Cloud cost optimization and FinOps',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Auto-scaling and serverless architecture',
      '24/7 cloud infrastructure monitoring',
      'Disaster recovery and business continuity',
      'Security hardening and compliance'
    ],
    benefits: [
      'Reduce infrastructure costs by 20-40%',
      'Zero-downtime migrations',
      'Auto-scaling for traffic spikes',
      '99.99%+ uptime SLA'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-cybersecurity-1',
    title: 'Cybersecurity Solutions & Penetration Testing',
    subtitle: 'Comprehensive security assessments, monitoring, and incident response',
    category: 'it',
    subcategory: 'Cybersecurity',
    description: 'Full-spectrum cybersecurity services including vulnerability assessment, penetration testing, security monitoring, incident response, and compliance management.',
    features: [
      'Network and application penetration testing',
      'Vulnerability scanning and management',
      '24/7 Security Operations Center (SOC)',
      'Incident response and forensic analysis',
      'Compliance audits (SOC 2, PCI DSS, HIPAA)',
      'Security awareness training',
      'Endpoint detection and response (EDR)',
      'Threat intelligence and hunting'
    ],
    benefits: [
      'Identify vulnerabilities before attackers do',
      'Meet compliance requirements',
      'Incident response in under 1 hour',
      'Reduce breach risk by 90%+'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-devops-1',
    title: 'DevOps & CI/CD Automation',
    subtitle: 'Accelerate software delivery with automated pipelines and infrastructure',
    category: 'it',
    subcategory: 'DevOps & Automation',
    description: 'CI/CD pipeline setup, infrastructure automation, container orchestration, and deployment strategies for faster, more reliable software delivery.',
    features: [
      'CI/CD pipeline design and implementation (GitHub Actions, GitLab CI)',
      'Container orchestration (Kubernetes, Docker Swarm)',
      'Infrastructure as Code (Terraform, Ansible)',
      'Blue-green, canary, and rolling deployments',
      'Automated testing gates',
      'Secrets management',
      'GitOps workflows',
      'Production readiness assessment'
    ],
    benefits: [
      'Deploy code 50x more frequently',
      'Reduce deployment failures by 80%',
      'Mean time to recovery under 5 minutes',
      'Consistent environments from dev to production'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-mobile-1',
    title: 'Custom Mobile App Development',
    subtitle: 'Native and cross-platform mobile applications for iOS and Android',
    category: 'it',
    subcategory: 'Mobile Development',
    description: 'Custom mobile app development using React Native, Flutter, or native technologies. From MVP to enterprise-grade mobile applications.',
    features: [
      'Cross-platform (React Native, Flutter, Kotlin Multiplatform)',
      'Native iOS and Android development',
      'Push notification systems',
      'Offline mode and data sync',
      'Payment and subscription integration',
      'App Store and Play Store deployment',
      'Performance optimization',
      'Analytics integration'
    ],
    benefits: [
      'Reach mobile users with native-performance apps',
      '25% faster time-to-market with cross-platform',
      'Increase customer engagement by 40%',
      'Drive revenue with mobile-first strategy'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$8,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-webdev-1',
    title: 'Custom Web Application Development',
    subtitle: 'Scalable web applications built with modern frameworks and architectures',
    category: 'it',
    subcategory: 'Web Development',
    description: 'Full-stack web application development using Next.js, React, Vue, Node.js, and modern architectures. Scalable, performant, and maintainable web solutions.',
    features: [
      'Modern frameworks (Next.js, React, Vue, Nuxt)',
      'Backend API development (Node.js, Python, Rust)',
      'Real-time features (WebSockets, Server-Sent Events)',
      'Microservices and API-first architecture',
      'Database design (PostgreSQL, MongoDB, Redis)',
      'Authentication and authorization systems',
      'Performance optimization and caching',
      'Progressive Web App (PWA) capabilities'
    ],
    benefits: [
      'Fast, SEO-friendly web applications',
      'Handle millions of users and requests',
      'Modern architecture for easy maintenance',
      'Reduced development time with component libraries'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-data-1',
    title: 'Data Engineering & Analytics',
    subtitle: 'Build data pipelines, warehouses, and analytics platforms',
    category: 'it',
    subcategory: 'Data Engineering',
    description: 'End-to-end data engineering — ETL pipelines, data warehousing, analytics platforms, and business intelligence dashboards.',
    features: [
      'ETL/ELT pipeline design and automation',
      'Data warehouse setup (Snowflake, BigQuery, Redshift)',
      'Real-time streaming (Kafka, Spark Streaming)',
      'Business intelligence dashboards (Tableau, Power BI, Looker)',
      'Data modeling and schema design',
      'Data quality monitoring and governance',
      'API and third-party data integration',
      'Cost-effective storage and query optimization'
    ],
    benefits: [
      'Make data-driven decisions in real-time',
      'Reduce reporting time by 80%',
      'Unify data across all systems',
      'Scalable to petabytes of data'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-cloudops-1',
    title: 'DevOps & Cloud Operations',
    subtitle: 'Reliable, automated deployment and operations with CI/CD pipelines',
    category: 'it',
    subcategory: 'DevOps & CloudOps',
    description: 'End-to-end DevOps services including CI/CD pipeline design, infrastructure automation, monitoring, and incident management.',
    features: [
      'CI/CD pipeline design (GitHub Actions, GitLab CI, Jenkins)',
      'Infrastructure as Code (Terraform, Pulumi, CloudFormation)',
      'Container orchestration (EKS, AKS, GKE, Docker Swarm)',
      'Blue-green and canary deployments',
      '24/7 infrastructure monitoring (Prometheus, Grafana, Datadog)',
      'Automated scaling and resource optimization',
      'Incident management and on-call support',
      'GitOps workflows with ArgoCD / Flux'
    ],
    benefits: [
      'Deploy multiple times per day with confidence',
      'Reduce downtime and mean time to recovery',
      'Cut cloud costs by 20-40% with right-sizing',
      'Eliminate manual deployment errors'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  // ═══ NEW IT SERVICES ═══

  {
    id: 'it-blockchain-1',
    title: 'Blockchain Development & Web3 Solutions',
    subtitle: 'Decentralized applications, smart contracts, and token ecosystems',
    category: 'it',
    subcategory: 'Blockchain & Web3',
    description: 'Build decentralized applications (dApps), smart contracts, and token ecosystems for Web3 use cases including DeFi, NFTs, and supply chain transparency.',
    features: [
      'Smart contract development (Solidity, Rust, Clarity)',
      'dApp front-end and back-end development',
      'Tokenomics design and implementation',
      'NFT marketplaces and collection platforms',
      'DeFi protocol development',
      'Blockchain integration with existing systems',
      'Audit and security review of smart contracts',
      'Multi-chain deployment (Ethereum, Solana, Polygon, Base)'
    ],
    benefits: [
      'Build transparent and trustless business systems',
      'Token-based incentive and loyalty programs',
      'Immutable record-keeping for compliance',
      'Access to the growing Web3 ecosystem'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$7,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-lowcode-1',
    title: 'Low-Code / No-Code Platform Development',
    subtitle: 'Rapid application development without traditional coding',
    category: 'it',
    subcategory: 'Low-Code Development',
    description: 'Build internal tools, business process automation, and customer-facing portals using low-code platforms like Retool, Bubble, Appian, or custom solutions.',
    features: [
      'Rapid prototyping (MVP in hours, not months)',
      'Integration with existing databases and APIs',
      'Drag-and-drop interface builder',
      'Role-based access and business logic',
      'Automated testing and version control',
      'Custom component development',
      'Scalable from prototype to production',
      'Vendor-neutral platform recommendations'
    ],
    benefits: [
      'Build applications 5-10x faster',
      'Empower business teams to build their own tools',
      'Reduce development costs by 60-70%',
      'Iterate quickly with visual development environment'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-erp-1',
    title: 'ERP Integration & Customization',
    subtitle: 'Connect, customize, and optimize your enterprise resource planning system',
    category: 'it',
    subcategory: 'ERP Solutions',
    description: 'ERP implementation, customization, and integration services for systems like SAP, Oracle, NetSuite, Microsoft Dynamics, and Odoo.',
    features: [
      'ERP implementation and go-live support',
      'Custom module development and configuration',
      'Data migration from legacy systems',
      'Third-party integration (CRM, e-commerce, HR)',
      'Business process reengineering',
      'Custom reporting and dashboard development',
      'User training and change management',
      'Ongoing support and optimization'
    ],
    benefits: [
      'Unify finance, operations, and HR in one system',
      'Real-time business performance visibility',
      'Reduce manual data transfer across systems',
      'Automate 80%+ of financial workflows'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-saasmigration-1',
    title: 'SaaS Migration & Integration',
    subtitle: 'Seamlessly migrate between platforms and integrate your SaaS stack',
    category: 'it',
    subcategory: 'SaaS Integration',
    description: 'Migration and integration services for your entire SaaS ecosystem — move between platforms, connect tools, and eliminate data silos.',
    features: [
      'CRM migration (Salesforce, HubSpot, Zoho)',
      'Marketing platform migration (Marketo, HubSpot, Pardot)',
      'E-commerce platform migration (Shopify, Magento, BigCommerce)',
      'Custom API integrations and middleware',
      'Data mapping and transformation',
      'Minimal downtime migration strategy',
      'Parallel running and validation',
      'Post-migration support and optimization'
    ],
    benefits: [
      'Zero data loss during migration',
      'Reduce manual process dependencies',
      'Unify data across platforms',
      'Optimize licensing costs by 25-40%'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-voice-1',
    title: 'VoIP & Unified Communications',
    subtitle: 'Enterprise-grade cloud phone and communication systems',
    category: 'it',
    subcategory: 'UC & Communications',
    description: 'Deploy and manage VoIP phone systems, unified communications platforms, and contact center solutions for businesses of all sizes.',
    features: [
      'Cloud PBX and phone systems',
      'Video conferencing and screen sharing',
      'Call routing and IVR setup',
      'CRM integration for caller ID',
      'Voicemail transcription with AI',
      'Mobile softphone and BYOD support',
      'Real-time analytics and reporting',
      'Disaster recovery and failover'
    ],
    benefits: [
      'Save 40-60% on phone bills vs. traditional telephony',
      'Unified messaging across all devices',
      'Scalable from 10 to 10,000 users',
      '99.99% uptime SLA'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-dba-1',
    title: 'Database Administration & Optimization',
    subtitle: 'Expert database management for performance, reliability, and scale',
    category: 'it',
    subcategory: 'Database Services',
    description: 'Database administration, performance tuning, migration, backup strategy, and scalability planning for PostgreSQL, MySQL, MongoDB, SQL Server, and Oracle.',
    features: [
      '24/7 database monitoring and alerting',
      'Query optimization and index tuning',
      'High availability and replication setup',
      'Automated backup and disaster recovery',
      'Database security hardening',
      'Capacity planning and scaling',
      'Schema versioning and migration management',
      'Performance benchmarking and SLAs'
    ],
    benefits: [
      'Reduce query response times by 80%',
      'Zero-downtime database maintenance',
      'Automated failover and data protection',
      'Support for 100K+ concurrent connections'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-helpdesk-1',
    title: 'IT Helpdesk & Support Services',
    subtitle: 'Dedicated IT support teams with SLAs for resolution times',
    category: 'it',
    subcategory: 'Support Services',
    description: 'Managed IT support — remote and on-site troubleshooting, incident management, user onboarding/offboarding, and proactive monitoring.',
    features: [
      'Tiered support (L1/L2/L3)',
      'Remote and on-site support options',
      'Knowledge base and self-service portal',
      'Incident and problem management',
      'Change management process',
      'Asset and inventory management',
      'Proactive monitoring and alerting',
      'Monthly reporting and SLA tracking'
    ],
    benefits: [
      'Reduce IT downtime by 60%',
      'Standardized support experience',
      'Proactive issue detection before users report',
      'Detailed SLAs for resolution guarantees'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-backup-1',
    title: 'Disaster Recovery & Business Continuity',
    subtitle: 'Resilient backup strategies and rapid recovery solutions',
    category: 'it',
    subcategory: 'Disaster Recovery',
    description: 'Comprehensive disaster recovery planning, backup strategy implementation, and rapid recovery services to minimize downtime during critical incidents.',
    features: [
      'Automated backup scheduling (real-time, daily, weekly)',
      'Geographically redundant backup storage',
      'RTO/RPO target planning and testing',
      'Full disaster recovery drills and testing',
      'Cloud-native backup (AWS, Azure, GCP)',
      'Hybrid and on-premises backup solutions',
      'Compliance-aligned retention policies',
      '24/7 monitoring and failover'
    ],
    benefits: [
      'Recover from disasters in minutes, not hours',
      'Meet compliance requirements for data retention',
      'Protect against ransomware with immutable backups',
      'Tested recovery plans you can trust'
    ],
    pricing: { Starter: '$799/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-networking-1',
    title: 'Network Design & Infrastructure Solutions',
    subtitle: 'Custom network architecture for performance, security, and reliability',
    category: 'it',
    subcategory: 'Networking',
    description: 'Design, deploy, and manage enterprise networks including LAN/WAN, SD-WAN, VPN, firewalls, and network security.',
    features: [
      'SD-WAN design and deployment',
      'Zero-trust network architecture',
      'Firewall and IDS/IPS configuration',
      'Site-to-site and client VPN setup',
      'Network segmentation and microsegmentation',
      'QoS optimization',
      'Wi-Fi design and coverage analysis',
      'Network monitoring and reporting'
    ],
    benefits: [
      '99.99% network uptime',
      'Secure remote access for all employees',
      'Optimized bandwidth and performance',
      'Scalable infrastructure for growth'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-virtualization-1',
    title: 'Virtualization & Containerization',
    subtitle: 'VM management, container orchestration, and hybrid infrastructure solutions',
    category: 'it',
    subcategory: 'Virtualization',
    description: 'Server virtualization, Docker containerization, Kubernetes orchestration, and hybrid-cloud infrastructure management.',
    features: [
      'VM design and management (VMware, Hyper-V, Proxmox)',
      'Docker and Kubernetes orchestration',
      'Microservices architecture',
      'Container security and scanning',
      'Auto-scaling and self-healing clusters',
      'Hybrid and multi-cloud orchestration',
      'CI/CD integration with containers',
      'Performance monitoring and optimization'
    ],
    benefits: [
      'Increase server utilization by 70%+',
      'Scale applications on-demand',
      'Portability across cloud providers',
      'Reduce hardware and infrastructure costs'
    ],
    pricing: { Starter: '$1,299/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-identity-1',
    title: 'Identity & Access Management (IAM)',
    subtitle: 'Secure user identity, SSO, MFA, and access governance',
    category: 'it',
    subcategory: 'Identity & Security',
    description: 'Implement and manage identity providers (Azure AD, Okta, Auth0), single sign-on, multi-factor authentication, and role-based access control.',
    features: [
      'SSO integration (SAML, OAuth, OIDC)',
      'Multi-factor authentication (MFA)',
      'Role-Based Access Control (RBAC)',
      'Privileged access management (PAM)',
      'Identity governance and compliance',
      'User lifecycle management (Joiners-Movers-Leavers)',
      'Conditional access policies',
      'Audit logging and reporting'
    ],
    benefits: [
      'Secure access to all applications with one login',
      'Reduce unauthorized access risk by 99%',
      'Meet compliance requirements for access controls',
      'Onboard/offboard users in minutes'
    ],
    pricing: { Starter: '$799/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  // ═══ MORE NEW IT SERVICES ═══

  {
    id: 'it-api-1',
    title: 'API Design, Development & Management',
    subtitle: 'Build, document, secure, and manage APIs at scale',
    category: 'it',
    subcategory: 'API Services',
    description: 'Full API lifecycle management — design, development, documentation, versioning, security, and monetization.',
    features: [
      'API design and architecture (REST, GraphQL, gRPC)',
      'API gateway setup (Kong, AWS API Gateway, Apigee)',
      'API documentation (OpenAPI/Swagger)',
      'Rate limiting, throttling, and authentication',
      'API versioning strategy and migration',
      'Developer portal setup',
      'API monetization and billing',
      'Performance monitoring and analytics'
    ],
    benefits: [
      'Unlock new revenue streams through APIs',
      'Reduce integration time for partners by 80%',
      'Ensure consistent API design across teams',
      'Scale to millions of API calls/day'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$4,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-observability-1',
    title: 'Observability & Monitoring Platform',
    subtitle: 'Logs, metrics, traces, and alerts for full-stack visibility',
    category: 'it',
    subcategory: 'Observability',
    description: 'Full-stack observability with centralized logging, metrics, distributed tracing, and intelligent alerting across all infrastructure.',
    features: [
      'Centralized logging (ELK, Loki, CloudWatch)',
      'Metrics collection and dashboarding (Prometheus, Grafana)',
      'Distributed tracing (Jaeger, OpenTelemetry)',
      'AIOps-powered anomaly detection',
      'Custom alerting and escalation rules',
      'SLO/SLA tracking and reporting',
      'Real user monitoring (RUM)',
      'Synthetic monitoring and uptime checks'
    ],
    benefits: [
      'Detect and resolve issues 10x faster',
      'Full visibility across microservices',
      'Proactive incident prevention',
      'Data-driven capacity planning'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-automation-1',
    title: 'Robotic Process Automation (RPA)',
    subtitle: 'Automate repetitive business processes with software robots',
    category: 'it',
    subcategory: 'Process Automation',
    description: 'Implement RPA to automate repetitive, rule-based tasks — from data entry to invoice processing to report generation.',
    features: [
      'Bot design and development (UiPath, Power Automate, custom)',
      'Process discovery and assessment',
      'Bot orchestration and scheduling',
      'Exception handling and error recovery',
      'Integration with ERP, CRM, and legacy systems',
      'Bot monitoring and analytics',
      'Security and compliance controls',
      'Citizen developer enablement'
    ],
    benefits: [
      'Automate 80%+ of repetitive tasks',
      'Reduce operational costs by 40-60%',
      'Eliminate human errors in manual processes',
      '24/7 automated operations'
    ],
    pricing: { Starter: '$1,299/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-edge-1',
    title: 'Edge Computing Solutions',
    subtitle: 'Process data closer to source for real-time insights and reduced latency',
    category: 'it',
    subcategory: 'Edge Computing',
    description: 'Design and deploy edge computing infrastructure for real-time processing of data from IoT devices, cameras, sensors, and industrial equipment.',
    features: [
      'Edge node provisioning and management',
      'Containerized workloads at the edge',
      'Edge-to-cloud data pipeline',
      'Real-time local processing (sub-10ms)',
      'Edge AI inference',
      'Bandwidth optimization',
      'Offline operation capability',
      'Centralized fleet management'
    ],
    benefits: [
      'Process data 100x faster by computing locally',
      'Reduce bandwidth costs by 70%+',
      'Enable real-time decision making',
      'Operate reliably in connectivity-challenged environments'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$5,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-qa-1',
    title: 'Quality Assurance & Testing Services',
    subtitle: 'Comprehensive testing strategies for reliable software delivery',
    category: 'it',
    subcategory: 'QA & Testing',
    description: 'Full-spectrum QA services including automated testing, performance testing, security testing, and test strategy consulting.',
    features: [
      'Functional and regression test automation',
      'Performance and load testing',
      'Security testing and vulnerability scanning',
      'UI/UX testing across browsers and devices',
      'API testing and contract testing',
      'Test strategy consulting and test pyramid design',
      'CI/CD test integration',
      'Manual exploratory testing services'
    ],
    benefits: [
      'Reduce production bugs by 80%',
      'Faster time-to-market with automated testing',
      'Ensure reliability at scale',
      'Meet compliance testing requirements'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-git-1',
    title: 'GitOps & Source Code Management',
    subtitle: 'Optimize your code repository strategy and collaboration workflows',
    category: 'it',
    subcategory: 'Version Control & Collaboration',
    description: 'Git workflow optimization, repository management, code review processes, and collaboration tooling for development teams.',
    features: [
      'Git branching strategy design (Trunk-based, GitFlow)',
      'GitHub/GitLab/Bitbucket administration',
      'Code review workflows and standards',
      'Protected branch rules and merge strategies',
      'CI/CD pipeline integration',
      'Repository migration and consolidation',
      'Developer experience (DX) optimization',
      'Training and onboarding programs'
    ],
    benefits: [
      'Reduce merge conflicts by 70%',
      'Faster code reviews with standardized workflows',
      'Improved developer productivity',
      'Better code quality across teams'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-legacy-1',
    title: 'Legacy System Modernization',
    subtitle: 'Transform outdated systems into modern, maintainable architectures',
    category: 'it',
    subcategory: 'Modernization',
    description: 'Strategic modernization of legacy applications — from monolith decomposition to microservices, from outdated frameworks to modern stacks.',
    features: [
      'Legacy system assessment and roadmap',
      'Monolith-to-microservices decomposition',
      'Technology stack upgrades',
      'Data migration strategy',
      'Strangler fig migration pattern',
      'Parallel running strategy',
      'Technical debt assessment and prioritization',
      'Team training and knowledge transfer'
    ],
    benefits: [
      'Reduce maintenance costs by 50-70%',
      'Improve system performance by 3-10x',
      'Enable cloud-native deployment',
      'Attract and retain modern development talent'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-gov-1',
    title: 'IT Governance & Compliance',
    subtitle: 'Framework alignment, risk management, and regulatory compliance',
    category: 'it',
    subcategory: 'IT Governance',
    description: 'IT governance consulting, risk assessment, and compliance management across frameworks including ISO 27001, SOC 2, GDPR, HIPAA, and PCI DSS.',
    features: [
      'Gap analysis against regulatory frameworks',
      'Policy and procedure development',
      'Risk assessment and treatment planning',
      'Compliance audit preparation',
      'Security awareness training programs',
      'Vendor risk management',
      'Data protection impact assessments (DPIA)',
      'Continuous compliance monitoring'
    ],
    benefits: [
      'Achieve and maintain compliance certifications',
      'Reduce risk of fines and penalties',
      'Build stakeholder trust through demonstrated compliance',
      'Streamline vendor compliance management'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-training-1',
    title: 'IT Training & Skill Development',
    subtitle: 'Custom training programs for teams and individuals',
    category: 'it',
    subcategory: 'IT Training',
    description: 'Tailored IT training programs covering cloud technologies, security, development, data science, and management skills.',
    features: [
      'Custom curriculum design',
      'Hands-on labs and exercises',
      'Certification exam preparation',
      'Instructor-led and self-paced options',
      'Role-based learning paths',
      'Progress tracking and assessment',
      'Real-world scenario workshops',
      'Post-training support and mentoring'
    ],
    benefits: [
      'Upskill teams 3x faster than self-learning',
      'Boost employee retention with development opportunities',
      'Reduce reliance on external contractors',
      'Certify teams for compliance and standards'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-email-1',
    title: 'Email Infrastructure & Delivery',
    subtitle: 'Enterprise email setup, deliverability optimization, and management',
    category: 'it',
    subcategory: 'Email Infrastructure',
    description: 'Email infrastructure design, implementation, and deliverability optimization — including cold email sequencing for outreach campaigns.',
    features: [
      'Email server setup and configuration',
      'Cold email sequencing and automation',
      'Domain authentication (SPF, DKIM, DMARC)',
      'IP warming strategy and monitoring',
      'Deliverability optimization and testing',
      'Bounce and complaint management',
      'Cold email campaign analytics',
      'Dedicated rotating IP management'
    ],
    benefits: [
      'Achieve 99%+ inbox placement rates',
      'Automate outbound campaigns at scale',
      'Protect brand reputation',
      'Track and optimize open/click rates'
    ],
    pricing: { Starter: '$799/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-dns-1',
    title: 'DNS Management & Email Infrastructure',
    subtitle: 'DNS setup, propagation management, and email deliverability',
    category: 'it',
    subcategory: 'DNS & Email',
    description: 'DNS configuration, management, migration, and propagation monitoring.',
    features: [
      'DNS setup and migration',
      'Propagation monitoring',
      'Email deliverability optimization',
      'DNS security (DNSSEC)',
      'DMARC/DKIM/SPF configuration',
      'DNS performance optimization',
      'Load balancing via DNS',
      'Health checks and failover'
    ],
    benefits: [
      'Zero-downtime DNS migrations',
      'Improved email deliverability',
      'DNS-based load balancing',
      'Enhanced security with DNSSEC'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-workspace-1',
    title: 'Digital Workplace & Workspace Solutions',
    subtitle: 'Productive and secure digital workspaces for distributed teams',
    category: 'it',
    subcategory: 'Digital Workplace',
    description: 'Set up and manage digital workstations, virtual desktops, and collaboration platforms for hybrid work environments.',
    features: [
      'Virtual desktop infrastructure (VDI)',
      'Collaboration platform setup (Teams, Slack, Notion)',
      'Remote work enablement',
      'Endpoint management and security',
      'Software delivery and updates',
      'Digital experience monitoring',
      'Workspace analytics',
      'BYOD policy implementation'
    ],
    benefits: [
      'Boost productivity with streamlined tools',
      'Secure access from anywhere',
      'Reduce hardware costs by 40-50%',
      'Centralized management and compliance'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-integration-1',
    title: 'System Integration & API Orchestration',
    subtitle: 'Connect and orchestrate all your business systems seamlessly',
    category: 'it',
    subcategory: 'System Integration',
    description: 'Connect disparate business systems, automate data flows, and create unified workflows across your technology stack.',
    features: [
      'CRM, ERP, and SaaS integrations',
      'Custom middleware and API orchestration',
      'Event-driven architecture (Kafka, RabbitMQ)',
      'Webhook and polling-based integrations',
      'Data transformation and mapping',
      'Error handling and retry logic',
      'Integration monitoring and alerting',
      'Vendor-agnostic approach'
    ],
    benefits: [
      'Eliminate data silos across systems',
      'Automate data flow and reduce manual work',
      'Real-time synchronization across platforms',
      'Reduce integration costs by 60%+'
    ],
    pricing: { Starter: '$1,299/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  {
    id: 'it-zero-trust-1',
    title: 'Zero Trust Security as a Service',
    subtitle: 'Implement end-to-end zero trust architecture for identity, devices, and applications',
    category: 'it',
    subcategory: 'Zero Trust Security',
    description: 'Comprehensive zero trust implementation — micro-segmentation, identity-aware proxies, continuous verification, and least-privilege access across your entire infrastructure.',
    features: [
      'Identity-aware proxy deployment (Zscaler, Cloudflare)',
      'Micro-segmentation for workloads and applications',
      'Continuous authentication and device trust scoring',
      'Policy engine for least-privilege access',
      'Network traffic inspection and threat detection',
      'Integration with IAM and SIEM systems',
      'Compliance automation (SOC 2, HIPAA, PCI)',
      '24/7 managed zero trust operations'
    ],
    benefits: [
      'Eliminate lateral movement for attackers',
      'Reduce breach blast radius by 90%',
      'Meet compliance requirements seamlessly',
      'Enable secure remote work at scale'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$8,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-finops-1',
    title: 'Cloud FinOps & Cost Optimization',
    subtitle: 'Maximize cloud ROI with intelligent cost management, rightsizing, and spend governance',
    category: 'it',
    subcategory: 'Cloud FinOps',
    description: 'Full-spectrum cloud financial management — cost visibility, waste elimination, reserved instance optimization, and automated governance policies to control cloud spend.',
    features: [
      'Multi-cloud cost visibility dashboard',
      'Automated rightsizing recommendations',
      'Reserved instance and savings plan optimization',
      'Anomaly detection for spend spikes',
      'Tag enforcement and allocation governance',
      'Showback/chargeback reporting',
      'Automated shutdown of idle resources',
      'Cost anomaly alerting workflows'
    ],
    benefits: [
      'Reduce cloud costs by 25-40%',
      'Eliminate cloud waste and orphaned resources',
      'Predict and budget cloud spend accurately',
      'Governance without slowing innovation'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-gitops-1',
    title: 'GitOps Platform & Developer Experience',
    subtitle: 'Streamline developer workflows with GitOps practices and internal developer platforms',
    category: 'it',
    subcategory: 'GitOps & Developer Platform',
    description: 'Build and manage an Internal Developer Platform (IDP) with GitOps principles — self-service deployments, golden pipelines, and developer productivity tooling.',
    features: [
      'ArgoCD / FluxGitOps workflow setup',
      'Internal developer portal (Backstage)',
      'Golden pipeline templates for CI/CD',
      'Self-service environment provisioning',
      'Kubernetes workload management',
      'Policy as Code (OPA Gatekeeper)',
      'Developer experience (DX) metrics',
      'Onboarding automation for new services'
    ],
    benefits: [
      'Deploy to production in minutes, not days',
      'Standardize deployments across teams',
      'Reduce operational toil by 60%',
      'Improve developer satisfaction and retention'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-sre-1',
    title: 'Site Reliability Engineering (SRE)',
    subtitle: 'Build and maintain highly reliable, scalable systems with SRE best practices',
    category: 'it',
    subcategory: 'Site Reliability Engineering',
    description: 'SRE services — SLO definition, error budget management, chaos engineering, incident management, toil reduction, and reliability improvement across your production systems.',
    features: [
      'SLO/SLI definition and monitoring',
      'Error budget tracking and alerting',
      'Chaos engineering program (Gremlin, Litmus)',
      'Incident command and post-mortem facilitation',
      'Toil identification and automation',
      'Capacity planning and load testing',
      'Runbook creation and automation',
      'Reliability review for major changes'
    ],
    benefits: [
      'Achieve 99.99%+ uptime targets',
      'Reduce incident frequency by 60%',
      'Faster incident resolution (MTTD/MTTR)',
      'Proactive vs. reactive operations culture'
    ],
    pricing: { Starter: '$3,499/mo', Professional: '$8,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-observability-ai-1',
    title: 'AIOps & Intelligent Observability',
    subtitle: 'AI-powered monitoring that predicts and prevents incidents before they impact users',
    category: 'it',
    subcategory: 'AIOps',
    description: 'Next-generation observability platform with AI-driven anomaly detection, root cause analysis, and predictive alerting — reducing MTTR from hours to seconds.',
    features: [
      'AI-powered anomaly detection across metrics, logs, and traces',
      'Automatic root cause analysis and blast radius assessment',
      'Predictive alerting before incidents occur',
      'Automated incident correlation and deduplication',
      'Natural language incident investigation',
      'Smart dashboards that surface the unknown unknowns',
      'Integration with existing monitoring stack (Prometheus, Datadog, etc.)',
      'SLO-driven alerting and error budget management'
    ],
    benefits: [
      'Detect incidents 10x faster with AI-driven alerting',
      'Reduce MTTR by 80% with automatic root cause analysis',
      'Eliminate alert fatigue with intelligent deduplication',
      'Predict and prevent outages before users are affected'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-cloudnative-1',
    title: 'Cloud-Native Application Development',
    subtitle: 'Design and build cloud-native applications using microservices, containers, and serverless',
    category: 'it',
    subcategory: 'Cloud-Native Development',
    description: 'Build resilient, scalable, cloud-native applications using microservices architecture, containers, serverless functions, and cloud-native databases and messaging.',
    features: [
      'Microservices architecture design and implementation',
      'Container-based development (Docker, Kubernetes)',
      'Serverless function development (Lambda, Cloud Functions)',
      'Event-driven architecture with message queues (Kafka, SQS)',
      'Cloud-native databases (DynamoDB, Cosmos DB, Cloud Spanner)',
      'CI/CD pipelines for cloud-native apps',
      'Distributed tracing and debugging',
      'Resilience patterns (circuit breaker, retry, saga)'
    ],
    benefits: [
      'Scale individual components independently',
      'Deploy 50x more frequently with zero downtime',
      'Reduce infrastructure costs with pay-per-use models',
      'Build systems that handle millions of concurrent users'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-compliance-1',
    title: 'Automated Compliance & Audit Platform',
    subtitle: 'Continuous compliance monitoring and automated audit evidence collection',
    category: 'it',
    subcategory: 'Compliance Automation',
    description: 'Automate compliance workflows across SOC 2, ISO 27001, HIPAA, PCI DSS, and GDPR — with continuous monitoring, evidence collection, and audit-ready reporting.',
    features: [
      'Continuous compliance monitoring across frameworks',
      'Automated evidence collection from cloud and on-prem systems',
      'Policy-as-code enforcement and drift detection',
      'Risk register with automated risk scoring',
      'Audit-ready report generation',
      'Control mapping across multiple frameworks',
      'Third-party vendor risk assessments',
      'Real-time compliance dashboards and alerts'
    ],
    benefits: [
      'Cut audit preparation time by 80%',
      'Maintain continuous compliance instead of point-in-time',
      'Reduce compliance costs by 50%+',
      'Identify compliance gaps before auditors do'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-architecture-1',
    title: 'Solution Architecture & Technical Design',
    subtitle: 'Expert architecture design for scalable, secure, and maintainable systems',
    category: 'it',
    subcategory: 'Solution Architecture',
    description: 'Enterprise-grade solution architecture services — from system design and technology selection to architecture reviews, scalability planning, and technical specification documentation.',
    features: [
      'Architecture design for greenfield and brownfield projects',
      'Technology selection and evaluation',
      'Scalability and performance modeling',
      'Security architecture and threat modeling',
      'API-first design and microservices decomposition',
      'Architecture decision records (ADRs)',
      'Technical specification and blueprint documentation',
      'Architecture review and modernization assessment'
    ],
    benefits: [
      'Avoid costly architectural mistakes',
      'Build systems that scale to millions of users',
      'Reduce technical debt from day one',
      'Clear roadmap for engineering teams'
    ],
    pricing: { Starter: '$3,999/project', Professional: '$12,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-dataops-1',
    title: 'DataOps & Analytics Engineering',
    subtitle: 'Modernize your data stack with automated pipelines, data quality, and self-serve analytics',
    category: 'it',
    subcategory: 'DataOps',
    description: 'Build and manage modern data stacks with automated ETL/ELT pipelines, data quality monitoring, dbt transformations, and self-serve analytics for data-driven organizations.',
    features: [
      'Automated ETL/ELT pipeline orchestration (Airflow, Dagster)',
      'dbt-based data transformation and modeling',
      'Data quality monitoring and anomaly detection',
      'Data catalog and lineage tracking',
      'Modern data stack setup (Snowflake, BigQuery, dbt, Looker)',
      'Real-time streaming pipelines (Kafka, Flink)',
      'Self-serve analytics enablement',
      'Data governance and access controls'
    ],
    benefits: [
      'Reduce data pipeline maintenance by 60%',
      'Enable business users with self-serve analytics',
      'Improve data quality and trust',
      'Scale data infrastructure with your growth'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$5,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-devsecops-1',
    title: 'DevSecOps & Security Automation',
    subtitle: 'Integrate security into every stage of your software delivery pipeline',
    category: 'it',
    subcategory: 'Security Automation',
    description: 'Embed security into CI/CD pipelines with automated SAST, DAST, SCA, container scanning, and infrastructure-as-code security checks — shifting security left without slowing delivery.',
    features: [
      'Automated SAST/DAST scanning in CI/CD',
      'Software composition analysis (SCA) for dependencies',
      'Container and Kubernetes security scanning',
      'Infrastructure-as-code security validation (Terraform, CloudFormation)',
      'Secrets detection and rotation automation',
      'SBOM generation and vulnerability tracking',
      'Threat modeling automation',
      'Compliance-as-code policy enforcement'
    ],
    benefits: [
      'Catch vulnerabilities 10x earlier and 100x cheaper',
      'Automate compliance evidence collection',
      'Deploy faster with confidence, not fear',
      'Reduce security incident risk by 80%'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-platform-engineering-1',
    title: 'Internal Developer Platform (IDP) Engineering',
    subtitle: 'Build a self-service developer platform that boosts engineering productivity by 40%',
    category: 'it',
    subcategory: 'Platform Engineering',
    description: 'Design and build an Internal Developer Platform (IDP) that provides self-service capabilities for developers — spinning up environments, deploying applications, and managing infrastructure through golden paths.',
    features: [
      'Self-service environment provisioning (Backstage, Port, or custom)',
      'Golden path templates for common architectures',
      'Internal API marketplace and service catalog',
      'Automated deployment pipelines per service type',
      'Developer portal with documentation and onboarding',
      'Abstractions over cloud services for simplicity',
      'Usage tracking and cost attribution per team',
      'Platform observability and SLO management'
    ],
    benefits: [
      'Reduce time-to-first-deploy from weeks to hours',
      'Empower developers to self-serve without ops bottlenecks',
      'Standardize best practices across all teams',
      'Improve developer satisfaction and retention'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$8,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'cloud-finops-1',
    title: 'Cloud FinOps & Cost Intelligence',
    subtitle: 'Bring financial accountability to cloud spend with automated cost optimization and FinOps practices',
    category: 'it',
    subcategory: 'Cloud FinOps',
    description: 'Comprehensive cloud cost management service combining automated tooling, reserved instance optimization, anomaly detection, and organizational FinOps culture to reduce cloud spend by 30-40% without performance impact.',
    features: [
      'Multi-cloud cost visibility and chargeback/showback',
      'AI-driven rightsizing recommendations',
      'Automated reserved instance and savings plan optimization',
      'Real-time cost anomaly detection and budget alerts',
      'Kubernetes cost optimization (HPA, node optimization)',
      'Tag governance and resource ownership tracking',
      'FinOps maturity assessment and roadmap',
      'Monthly cost optimization reviews and savings tracking'
    ],
    benefits: [
      'Reduce cloud spend by 30-40% sustainably',
      'Eliminate cloud waste and orphaned resources',
      'Allocate costs accurately to teams and projects',
      'Build a culture of cloud cost awareness'
    ],
    pricing: { Starter: '$999/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
// ═══════════════════════════════════════════════════
// BATCH 7: IT SERVICES ADDITIONS
// ═══════════════════════════════════════════════════

  {
    id: 'it-edge-computing-2',
    title: 'Edge Computing Deployment & Management',
    subtitle: 'Distributed edge infrastructure for low-latency, high-availability applications',
    category: 'it',
    subcategory: 'Edge Computing',
    description: 'Design, deploy, and manage edge computing infrastructure that brings processing power closer to your users and IoT devices. Reduces latency, bandwidth costs, and enables real-time applications in manufacturing, retail, healthcare, and smart cities.',
    features: [
      'Edge node deployment across 100+ global locations',
      'Containerized workloads with Kubernetes at the edge',
      'Real-time data processing with sub-10ms latency',
      'IoT device management and OTA firmware updates',
      'Edge-to-cloud data synchronization pipelines',
      'Distributed CDN and content caching optimization',
      'Edge security with hardware-based TPM attestation',
      'Centralized monitoring and orchestration dashboard'
    ],
    benefits: [
      'Reduce latency by 80% for real-time applications',
      'Cut bandwidth costs by processing data locally',
      'Meet data sovereignty and residency requirements',
      'Enable mission-critical applications in remote locations'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-zero-trust-2',
    title: 'Zero Trust Security Architecture Implementation',
    subtitle: 'End-to-end zero-trust network implementation with identity-first security',
    category: 'it',
    subcategory: 'Cybersecurity Architecture',
    description: 'Implement a comprehensive Zero Trust security architecture based on NIST 800-207 principles. Includes identity verification, micro-segmentation, continuous monitoring, and least-privilege access controls across your entire digital infrastructure.',
    features: [
      'Identity-aware proxy (ZTNA) deployment and configuration',
      'Micro-segmentation of network and application boundaries',
      'Multi-factor authentication with adaptive risk scoring',
      'Continuous device posture assessment and compliance checks',
      'Encrypted micro-tunnel connections for all applications',
      'Real-time threat detection with behavioral analytics',
      'Policy engine for dynamic access control decisions',
      'Integration with SIEM, SOAR, and identity providers'
    ],
    benefits: [
      'Eliminate lateral movement for 99% of attack vectors',
      'Reduce breach impact radius by 85%',
      'Achieve compliance with NIST, SOC 2, and ISO 27001',
      'Enable secure remote work without VPN dependency'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$9,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-api-gateway-2',
    title: 'API Gateway Management & Monetization Platform',
    subtitle: 'Full-lifecycle API management with developer portal and revenue optimization',
    category: 'it',
    subcategory: 'API Management',
    description: 'Comprehensive API gateway solution covering design, security, rate limiting, analytics, and developer experience. Includes monetization features, API marketplace capabilities, and automated documentation generation.',
    features: [
      'High-performance API gateway with 100K+ RPS capacity',
      'Automated OpenAPI/Swagger documentation generation',
      'API key management, OAuth 2.0, and JWT validation',
      'Rate limiting, throttling, and quota management per tier',
      'Developer portal with interactive API sandbox',
      'API usage analytics and revenue tracking dashboard',
      'Webhook management and event-driven API subscriptions',
      'Canary deployments and blue-green API versioning'
    ],
    benefits: [
      'Reduce API development time by 40% with generated docs',
      'Monetize APIs with tiered pricing and usage billing',
      'Protect backend services with centralized security policies',
      'Onboard developers 3x faster with self-service portal'
    ],
    pricing: { Starter: '$799/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

// ── 6 new IT services ──
  {
    id: 'it-quantum-2',
    title: 'Post-Quantum Cryptography & Migration',
    subtitle: 'Prepare your cryptographic infrastructure for the quantum era',
    category: 'it',
    subcategory: 'Quantum Security',
    description: 'Assess and migrate your cryptographic infrastructure to post-quantum algorithms. Includes cryptographic audit, PQC algorithm selection, hybrid deployment, and quantum-readiness roadmap.',
    features: [
      'Cryptographic inventory and algorithm assessment',
      'Post-quantum algorithm selection (CRYSTALS-Kyber, CRYSTALS-Dilithium)',
      'Hybrid classical-quantum cryptographic deployment',
      'Certificate lifecycle management for PQC',
      'Crypto-agility framework implementation',
      'Data-in-transit and data-at-rest quantum protection',
      'Regulatory compliance (NIST PQC standards)',
      'Quantum risk assessment and timeline planning'
    ],
    benefits: [
      'Protect data against future quantum attacks',
      'Meet emerging NIST PQC compliance requirements',
      'Build crypto-agile infrastructure for long-term security',
      'Reduce quantum migration risk with phased approach'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$10,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-5g-2',
    title: '5G Network Design & Private 5G Deployments',
    subtitle: 'Enterprise-grade private 5G network design, deployment, and optimization',
    category: 'it',
    subcategory: '5G & Wireless',
    description: 'Design and deploy private 5G networks for enterprise campuses, manufacturing facilities, and smart infrastructure with full network slicing and edge integration.',
    features: [
      'Private 5G network architecture design (NSA/SA)',
      'Network slicing for multi-tenant environments',
      '5G core deployment (Open5GCore, OAI)',
      'Edge computing integration (MEC)',
      'Spectrum licensing and regulatory compliance',
      'RF planning and site survey',
      'Interference management and optimization',
      'Network performance monitoring and analytics'
    ],
    benefits: [
      'Ultra-low latency (<1ms) for critical applications',
      'Massive IoT connectivity (up to 1M devices/sq km)',
      'Replace legacy WiFi with reliable private 5G',
      'Enable Industry 4.0 use cases (AGV, AR/VR, drones)'
    ],
    pricing: { Starter: '$4,999/mo', Professional: '$14,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-sustainability-2',
    title: 'Green IT Infrastructure Optimization',
    subtitle: 'Reduce IT energy consumption and carbon footprint with sustainable infrastructure design',
    category: 'it',
    subcategory: 'Green IT',
    description: 'Comprehensive green IT assessment and optimization — reduce energy consumption, e-waste, and carbon emissions across your IT infrastructure while improving performance.',
    features: [
      'IT energy audit and carbon footprint baseline',
      'Data center PUE optimization',
      'Server consolidation and right-sizing',
      'Workload migration to renewable-powered cloud regions',
      'Hardware lifecycle and refresh planning',
      'Energy-efficient cooling and power design',
      'E-waste reduction and responsible recycling',
      'Sustainability reporting and ESG compliance'
    ],
    benefits: [
      'Reduce IT energy costs by 25-40%',
      'Achieve carbon-neutral IT operations',
      'Meet ESG and sustainability reporting requirements',
      'Extend hardware lifespan and reduce e-waste'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$4,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-edge-computing-2',
    title: 'Edge Computing Deployment & Management',
    subtitle: 'Distributed edge infrastructure for low-latency, high-availability applications',
    category: 'it',
    subcategory: 'Edge Computing',
    description: 'Design, deploy, and manage edge computing infrastructure that brings processing power closer to your users and IoT devices. Reduces latency, bandwidth costs, and enables real-time applications in manufacturing, retail, healthcare, and smart cities.',
    features: [
      'Edge node deployment across 100+ global locations',
      'Containerized workloads with Kubernetes at the edge',
      'Real-time data processing with sub-10ms latency',
      'IoT device management and OTA firmware updates',
      '5G MEC integration for mobile edge use cases',
      'Edge-native security with zero-trust architecture',
      'Centralized multi-edge orchestration platform',
      'Cost optimization and workload placement AI'
    ],
    benefits: [
      'Reduce latency by 90% compared to cloud-only',
      'Process data locally for privacy-sensitive applications',
      'Distribute workloads to optimal geographic locations',
      'Enable AR/VR, gaming, and autonomous systems at scale'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$8,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-privacy-2',
    title: 'Privacy Engineering & Data Protection',
    subtitle: 'Build privacy-by-design systems and ensure regulatory compliance across jurisdictions',
    category: 'it',
    subcategory: 'Privacy Engineering',
    description: 'Privacy engineering services — implement privacy-by-design architectures, data protection impact assessments, consent management, and cross-border data transfer compliance.',
    features: [
      'Privacy-by-design architecture review and implementation',
      'Data Protection Impact Assessment (DPIA)',
      'Consent management platform implementation',
      'Cross-border data transfer compliance (GDPR, LGPD, CCPA)',
      'Data minimization and retention policy design',
      'Anonymization and differential privacy strategies',
      'Regulatory audit preparation and support',
      'Privacy engineering training for development teams'
    ],
    benefits: [
      'Achieve compliance with GDPR, CCPA, LGPD, and beyond',
      'Build customer trust through demonstrated privacy practices',
      'Reduce risk of data protection fines (up to 4% of revenue)',
      'Enable international expansion with privacy confidence'
    ],
    pricing: { Starter: '$2,499/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'it-saas-ops-2',
    title: 'SaaS Operations & Vendor Management',
    subtitle: 'Centralize, optimize, and govern your entire SaaS portfolio',
    category: 'it',
    subcategory: 'SaaS Operations',
    description: 'Full-service SaaS management — discover, optimize, and govern every SaaS application in your organization. Eliminate shadow IT, reduce costs, and ensure security compliance.',
    features: [
      'Automated SaaS discovery and shadow IT detection',
      'Usage analytics and license optimization',
      'Vendor risk assessment and compliance scoring',
      'Contract lifecycle management and renewal tracking',
      'Onboarding/offboarding automation for SaaS apps',
      'Security policy enforcement across SaaS stack',
      'Cost allocation and departmental chargeback',
      'Integration with ITSM and procurement systems'
    ],
    benefits: [
      'Reduce SaaS costs by 25-40%',
      'Eliminate shadow IT and unauthorized apps',
      'Streamline vendor onboarding by 60%',
      'Ensure compliance across all SaaS applications'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
];

// ═══════════════════════════════════════════════════════
// SECTION 3: MICRO SAAS SOLUTIONS
// ═══════════════════════════════════════════════════════

export const saasSolutions: Service[] = [
  // Existing Services
  {
    id: 'saas-crm-1',
    title: 'CRM Automation & Sales Pipeline',
    subtitle: 'Automated sales workflows and customer relationship management',
    category: 'saas',
    subcategory: 'CRM & Sales',
    description: 'Automate your entire sales pipeline — from lead capture to close. Includes CRM setup, email sequences, pipeline management, and conversion analytics.',
    features: [
      'Automated lead capture and scoring',
      'Email sequence automation',
      'Pipeline management and visualization',
      'Deal tracking and forecasting',
      'Follow-up reminders and task automation',
      'Sales analytics and conversion reporting',
      'Integration with email/calendar/phone',
      'Customer 360-degree views'
    ],
    benefits: [
      'Increase sales conversion by 25-35%',
      'Never miss a follow-up or opportunity',
      'Real-time pipeline visibility',
      'Reduce sales cycle time by 20%+'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-seo-1',
    title: 'SEO Automation & Content Optimization',
    subtitle: 'AI-driven SEO strategy with automated content optimization',
    category: 'saas',
    subcategory: 'SEO & Content',
    description: 'Comprehensive SEO automation — keyword research, on-page optimization, technical SEO auditing, automated content scheduling, and ranking tracking.',
    features: [
      'Automated keyword research and clustering',
      'On-page SEO optimization suggestions',
      'Technical SEO audits (crawl, speed, mobile)',
      'Automated content scheduling',
      'Backlink analysis and monitoring',
      'Competitor analysis and gap identification',
      'Schema markup generation',
      'Rank tracking for unlimited keywords'
    ],
    benefits: [
      'Increase organic traffic by 50-200%',
      'Save 20+ hours/month on SEO tasks',
      'Stay ahead of algorithm updates',
      'Data-driven content strategy'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-email-1',
    title: 'Email Marketing Automation',
    subtitle: 'Automated email campaigns, drip sequences, and subscriber management',
    category: 'saas',
    subcategory: 'Email Marketing',
    description: 'Create and automate personalized email campaigns, behavioral triggers, A/B testing, and subscriber journeys.',
    features: [
      'Drag-and-drop email builder',
      'Automated drip campaigns and workflows',
      'Behavioral triggers and segmentation',
      'A/B testing with statistical significance',
      'Subscriber management and tagging',
      'Deliverability monitoring and optimization',
      'Landing page integration',
      'Analytics and ROI tracking'
    ],
    benefits: [
      'Increase email revenue by 30-50%',
      'Save 15+ hours/week on campaign management',
      'Personalized content increases engagement 3x',
      'Automated welcome sequences boost retention'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-social-1',
    title: 'Social Media Management & Automation',
    subtitle: 'Schedule, automate, and optimize social media across all platforms',
    category: 'saas',
    subcategory: 'Social Media',
    description: 'Manage all your social media accounts from one place — with AI-powered content suggestions, auto-scheduling, engagement tracking, and reporting.',
    features: [
      'Multi-platform management (10+ platforms)',
      'AI-powered content calendar and suggestions',
      'Batch scheduling and auto-posting',
      'Engagement monitoring and response',
      'Hashtag and trending topic analysis',
      'Competitor benchmarking',
      'Analytics and performance reporting',
      'Team collaboration and approval workflows'
    ],
    benefits: [
      'Save 10+ hours/week on social media management',
      'Increase engagement by 40%+',
      'Maintain consistent brand voice across platforms',
      'Real-time trend capitalization'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-analytics-1',
    title: 'Business Intelligence & Analytics Dashboard',
    subtitle: 'Real-time dashboards and custom reports for data-driven decisions',
    category: 'saas',
    subcategory: 'Analytics & Reporting',
    description: 'Custom dashboards and automated reports that turn your data into actionable insights — with scheduled delivery and natural language queries.',
    features: [
      'Real-time dashboard creation',
      'Custom report generator',
      'Scheduled report delivery',
      'Natural language data queries',
      'Multi-source data integration',
      'KPI tracking and alerting',
      'Drill-down and filtering',
      'Embed dashboards in client portals'
    ],
    benefits: [
      'Make decisions 5x faster with real-time data',
      'Eliminate manual report creation',
      'Track KPIs proactively',
      'Share insights across your organization'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-hr-1',
    title: 'HR Automation & Employee Lifecycle',
    subtitle: 'Streamline HR processes from onboarding to offboarding',
    category: 'saas',
    subcategory: 'HR Automation',
    description: 'Automate human resources workflows — onboarding, offboarding, time tracking, performance reviews, and document management.',
    features: [
      'Automated onboarding workflows',
      'Document collection and e-signatures',
      'Time tracking and attendance management',
      'Performance review automation',
      'Payroll integration',
      'Leave and absence management',
      'Offboarding and asset management',
      'Compliance documentation'
    ],
    benefits: [
      'Reduce onboarding time by 60%',
      'Eliminate manual paperwork',
      'Ensure HR compliance',
      'Improve employee experience from day one'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-finance-1',
    title: 'Financial Automation & Invoicing',
    subtitle: 'Automated invoicing, expense tracking, and financial workflows',
    category: 'saas',
    subcategory: 'Financial Automation',
    description: 'Automate your financial operations — invoicing, expense tracking, payment processing, and financial reporting.',
    features: [
      'Automated invoice generation and delivery',
      'Recurring billing and subscription management',
      'Expense tracking and approval workflows',
      'Payment processing (Stripe, PayPal, etc.)',
      'Financial reporting and tax preparation',
      'Accounts receivable automation',
      'Multi-currency support',
      'Bank reconciliation'
    ],
    benefits: [
      'Get paid 50% faster on average',
      'Eliminate billing errors',
      'Reduce accounting overhead by 40%',
      'Real-time cash flow visibility'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-project-1',
    title: 'Project & Task Management',
    subtitle: 'Automated project tracking, resource allocation, and team collaboration',
    category: 'saas',
    subcategory: 'Project Management',
    description: 'Automate project management workflows — task creation, resource allocation, sprint planning, and progress tracking with intelligent automation.',
    features: [
      'Automated task creation from requests',
      'Intelligent resource allocation',
      'Sprint planning and velocity tracking',
      'Gantt charts and dependencies',
      'Time tracking integration',
      'Automated status reports',
      'Integration with Dev, CRM, and communication tools',
      'Custom workflows and approval chains'
    ],
    benefits: [
      'Improve project delivery by 30%',
      'Reduce planning overhead by 50%',
      'Real-time project visibility for stakeholders',
      'Eliminate manual status updates'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-scheduling-1',
    title: 'Scheduling & Appointment Booking',
    subtitle: 'AI-powered scheduling and appointment management',
    category: 'saas',
    subcategory: 'Scheduling',
    description: 'Intelligent appointment booking, calendar management, and resource scheduling with automated reminders and conflict resolution.',
    features: [
      'Self-service online booking',
      'AI-powered conflict resolution',
      'Automated reminders (email, SMS, push)',
      'Resource and room management',
      'Multi-timezone support',
      'Waitlist and overflow management',
      'Calendar sync (Google, Outlook, Apple)',
      'Analytics and utilization reporting'
    ],
    benefits: [
      'Reduce no-shows by 50%',
      'Increase booking utilization by 35%',
      '24/7 self-service booking',
      'Optimize resource utilization'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-support-1',
    title: 'AI Customer Support Platform',
    subtitle: 'Multi-channel helpdesk with AI-powered ticket management and resolution',
    category: 'saas',
    subcategory: 'Customer Support',
    description: 'Unified support platform with AI chatbot, ticket management, knowledge base, and customer satisfaction analytics.',
    features: [
      'AI-powered chatbot and live chat',
      'Multi-channel support (email, chat, social, voice)',
      'Automated ticket routing and prioritization',
      'Knowledge base and self-service portal',
      'Customer satisfaction (CSAT) tracking',
      'SLA management and escalation',
      'Agent performance analytics',
      'Integration with CRM and billing'
    ],
    benefits: [
      'Handle 80%+ of tickets automatically',
      'Improve CSAT scores by 25%+',
      'Reduce support costs by 50-60%',
      'Faster response times (sub-5-min average)'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-community-1',
    title: 'Community & Membership Platform',
    subtitle: 'Build and manage online communities and membership programs',
    category: 'saas',
    subcategory: 'Community',
    description: 'Create branded community spaces with forums, events, content management, and membership/subscription management.',
    features: [
      'Discussion forums and groups',
      'Event management (virtual and in-person)',
      'Content management and publishing',
      'Tiered membership and subscriptions',
      'Gamification and engagement tools',
      'Analytics and member insights',
      'Integration with payment gateways',
      'Custom branding and white-labeling'
    ],
    benefits: [
      'Build audience loyalty and reduce churn',
      'Increase engagement with gamification',
      'Generate recurring revenue (5-figure MRR)',
      'Centralize community management'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  // ═══ NEW MICRO SAAS SERVICES ═══

  {
    id: 'saas-vendor-1',
    title: 'Vendor Management & Procurement SaaS',
    subtitle: 'Automate vendor evaluation, onboarding, compliance, and relationship management',
    category: 'saas',
    subcategory: 'Vendor Management',
    description: 'Streamline supplier and vendor management with automated evaluation, risk scoring, contract lifecycle management, and performance tracking.',
    features: [
      'Vendor evaluation and scoring matrices',
      'Automated onboarding workflows',
      'Contract lifecycle management',
      'Performance scorecards and KPIs',
      'Risk and compliance monitoring',
      'Spend analytics and optimization',
      'Vendor portal and self-service',
      'Integration with procurement and ERP'
    ],
    benefits: [
      'Reduce vendor onboarding time by 70%',
      'Cut procurement costs by 15-25%',
      'Ensure compliance across all vendors',
      'Real-time vendor risk visibility'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-ops-1',
    title: 'Operations & Workflow Automation SaaS',
    subtitle: 'Automate multi-step business workflows across teams and systems',
    category: 'saas',
    subcategory: 'Workflow Automation',
    description: 'Visual workflow builder that automates complex business processes — approvals, document flows, notifications, and cross-system orchestrations.',
    features: [
      'Visual drag-and-drop workflow builder',
      'Conditional logic and branching',
      'Multi-step approval chains',
      'Document generation and routing',
      'Automated notifications (email, Slack, Teams)',
      'Webhook and API triggers',
      'Audit trails and version history',
      'Template library for common workflows'
    ],
    benefits: [
      'Automate 90%+ of manual workflows',
      'Reduce process cycle times by 60%',
      'Ensure compliance and consistency',
      'Scale operations without headcount growth'
    ],
    pricing: { Starter: '$799/mo', Professional: '$1,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-lms-1',
    title: 'Learning Management System (LMS)',
    subtitle: 'Enterprise training platform with course authoring, tracking, and certification',
    category: 'saas',
    subcategory: 'EdTech / LMS',
    description: 'Build your own branded LMS — create courses, manage enrollments, track progress, issue certificates, and measure learning outcomes.',
    features: [
      'Course builder with multimedia support',
      'SCORM and xAPI compliance',
      'Automated enrollment and progression',
      'Quiz and assessment engine',
      'Digital certificates and badges',
      'Learner analytics and reporting',
      'Gamification (points, leaderboards, achievements)',
      'Multi-language support'
    ],
    benefits: [
      'Reduce training costs by 60%',
      'Track employee compliance and skills',
      'Scale training to unlimited users',
      'Increase knowledge retention by 40%'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-reputation-1',
    title: 'Online Reputation Management',
    subtitle: 'Monitor, manage, and improve your online reputation across review platforms',
    category: 'saas',
    subcategory: 'Reputation Management',
    description: 'Monitor and respond to reviews across Google, Yelp, Trustpilot, and 50+ platforms. Includes sentiment analysis, review generation, and competitive benchmarking.',
    features: [
      'Monitor 50+ review platforms in real-time',
      'AI-generated response suggestions',
      'Negative review alerting and escalation',
      'Review request automation (post-interaction)',
      'Sentiment analysis and trend tracking',
      'Competitor review benchmarking',
      'Star rating impact analytics',
      'Centralized team response management'
    ],
    benefits: [
      'Increase star ratings by 0.5-1.0 average',
      'Respond to reviews within minutes',
      'Identify and resolve issues before they trend',
      'Improve search ranking through review volume'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-recruitment-1',
    title: 'AI Recruitment & Talent Sourcing',
    subtitle: 'Automate hiring pipelines and source top talent with AI',
    category: 'saas',
    subcategory: 'HR Tech / Recruitment',
    description: 'AI-powered recruitment platform — job distribution, candidate screening, interview scheduling, and talent pool management.',
    features: [
      'AI-based candidate screening and ranking',
      'Automated interview scheduling',
      'Multi-channel job distribution',
      'Talent pool and CRM management',
      'Resume parsing and skill extraction',
      'Diversity analytics and reporting',
      'Hiring pipeline automation',
      'Integration with ATS and HRIS systems'
    ],
    benefits: [
      'Reduce time-to-hire by 50%',
      'Screen 1000+ applications per hour',
      'Improve candidate quality matches',
      'Reduce cost-per-hire by 35%'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-security-1',
    title: 'Security Awareness & Training Platform',
    subtitle: 'Train employees to recognize and prevent security threats',
    category: 'saas',
    subcategory: 'Cybersecurity Training',
    description: 'Gamified security awareness training with phishing simulations, compliance training, and behavioral analytics.',
    features: [
      'Phishing simulation campaigns',
      'Security training modules (100+ topics)',
      'Gamification and engagement tracking',
      'Automated risk scoring per employee',
      'Compliance reporting (SOC 2, HIPAA, GDPR)',
      'Real-world attack simulations',
      'Role-based training paths',
      'Management dashboard and metrics'
    ],
    benefits: [
      'Reduce phishing click rates by 80%',
      'Meet compliance training requirements',
      'Create a culture of security awareness',
      'Track and reduce human-related security risks'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-accounting-1',
    title: 'AI-Powered Accounting & Bookkeeping',
    subtitle: 'Automated bookkeeping, expense management, and tax preparation',
    category: 'saas',
    subcategory: 'Accounting',
    description: 'Automate your accounting workflows — transaction categorization, reconciliation, tax preparation, and financial reporting.',
    features: [
      'Automated transaction categorization',
      'Bank and card feed integration',
      'Receipt scanning and OCR',
      'Accounts payable/receivable automation',
      'Tax preparation and filing assistance',
      'Multi-currency handling',
      'Financial reporting (P&L, Balance Sheet, Cash Flow)',
      'Integration with QuickBooks, Xero, Sage'
    ],
    benefits: [
      'Save 15+ hours/month on bookkeeping',
      'Reduce accounting errors by 95%',
      'Real-time financial visibility',
      'Tax-ready financials year-round'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-notification-1',
    title: 'Omnichannel Notification Engine',
    subtitle: 'SMS, email, push, Slack, and WhatsApp notifications — unified',
    category: 'saas',
    subcategory: 'Notification & Communication',
    description: 'Send and manage notifications across SMS, email, push, WhatsApp, Slack, Teams, and more — from a single API and dashboard.',
    features: [
      'Multi-channel delivery (SMS, Email, Push, WhatsApp, Slack)',
      'Visual notification builder',
      'Audience segmentation and targeting',
      'Delivery tracking and analytics',
      'Template management and personalization',
      'Scheduling and automation triggers',
      'Two-way messaging support',
      'API-first for developer integration'
    ],
    benefits: [
      'Reach customers on their preferred channel',
      'Increase delivery rates by 40%',
      'Centralize all communication channels',
      'Real-time delivery analytics'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-landing-1',
    title: 'Landing Page & Conversion Builder',
    subtitle: 'Create high-converting landing pages with AI assistance',
    category: 'saas',
    subcategory: 'Marketing & Landing Pages',
    description: 'Build and optimize landing pages with AI-generated copy, A/B testing, heatmaps, and conversion analytics.',
    features: [
      'AI-powered copy generation and optimization',
      'Drag-and-drop page builder',
      'A/B and multivariate testing',
      'Heatmaps and session recordings',
      'Conversion analytics and attribution',
      'SEO-optimized templates',
      'Form and lead capture optimization',
      'Personalization by audience segment'
    ],
    benefits: [
      'Increase conversion rates by 30-60%',
      'Launch pages in minutes, not weeks',
      'Data-driven optimization with A/B testing',
      'Reduce cost per acquisition'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-feedback-1',
    title: 'Customer Feedback & Survey Automation',
    subtitle: 'Collect, analyze, and action customer feedback at scale',
    category: 'saas',
    subcategory: 'Feedback & Surveys',
    description: 'Automated customer feedback collection with NPS, CSAT, and custom surveys. AI-powered analysis and action item generation.',
    features: [
      'NPS, CSAT, and CES survey templates',
      'In-app, email, and SMS survey delivery',
      'AI-powered sentiment analysis (open-ended)',
      'Automated follow-up workflows',
      'Feedback-to-task conversion',
      'Trend analysis and alerting',
      'Competitive benchmarking',
      'Executive summary reports'
    ],
    benefits: [
      'Identify at-risk customers before churn',
      'Automatically categorize 1000s of feedback items',
      'Close the feedback loop with automated actions',
      'Improve NPS by 10-20 points'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-kpi-1',
    title: 'KPI Tracking & OKR Management',
    subtitle: 'Align teams with measurable objectives and track progress in real-time',
    category: 'saas',
    subcategory: 'Performance Management',
    description: 'Set, track, and manage OKRs and KPIs across your organization with automated progress calculation and executive dashboards.',
    features: [
      'OKR creation and cascading',
      'Real-time KPI dashboards',
      'Automated progress calculation',
      'Weekly/monthly status reports',
      '1-on-1 and review integration',
      'Goal alignment visualization',
      'Custom metrics and formulas',
      'Alerts and accountability tracking'
    ],
    benefits: [
      'Align teams to strategic objectives',
      'Real-time visibility into company performance',
      'Reduce goal-setting overhead by 60%',
      'Drive accountability across all levels'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-freelance-1',
    title: 'Freelancer & Agency Marketplace Platform',
    subtitle: 'Build your own marketplace to connect businesses with freelance talent',
    category: 'saas',
    subcategory: 'Marketplace',
    description: 'Launch and manage a marketplace connecting businesses with vetted freelancers and agencies — with built-in payments, contracts, and review systems.',
    features: [
      'Marketplace builder with category management',
      'Profile and portfolio management',
      'Job posting and bidding system',
      'Escrow and milestone-based payments',
      'Review and rating system',
      'Matching algorithm for talent pairing',
      'Dispute resolution system',
      'Commission and revenue management'
    ],
    benefits: [
      'Launch a multi-vendor marketplace quickly',
      'Built-in trust and payment systems',
      'Scale to thousands of service providers',
      'Generate recurring commission revenue'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-compliance-1',
    title: 'Compliance & Audit Management SaaS',
    subtitle: 'Manage audits, controls, and regulatory compliance across frameworks',
    category: 'saas',
    subcategory: 'Compliance',
    description: 'Centralized compliance management for SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS — with control management, evidence collection, and audit tracking.',
    features: [
      'Framework mapping (SOC 2, ISO, HIPAA, GDPR, PCI DSS)',
      'Control library and gap analysis',
      'Evidence collection automation',
      'Audit trail and change history',
      'Risk register and mitigation tracking',
      'Policy and procedure management',
      'Automated compliance reporting',
      'Third-party vendor compliance tracking'
    ],
    benefits: [
      'Cut audit prep time by 80%',
      'Maintain continuous compliance',
      'Reduce compliance costs by 50%+',
      'Single source of truth for all frameworks'
    ],
    pricing: { Starter: '$799/mo', Professional: '$1,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-white-label-1',
    title: 'White-Label Service Delivery Platform',
    subtitle: 'Brand our services under your company name and resell to your clients',
    category: 'saas',
    subcategory: 'White-Label Solutions',
    description: 'Offer professional IT and AI services under your own brand. We handle delivery while you get the revenue and client relationship.',
    features: [
      'Custom branding and domain',
      'Client-facing portal with your logo',
      'Service delivery and project management',
      'Client billing and reporting',
      'Automated onboarding for clients',
      'Support under your brand name',
      'Revenue sharing model',
      'Full API access for customization'
    ],
    benefits: [
      'Expand your service offering without building in-house',
      'New revenue stream from day one',
      'Retain full client ownership',
      'Access to enterprise-grade infrastructure'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$4,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-docket-1',
    title: 'Legal & Contract Management SaaS',
    subtitle: 'Create, negotiate, track, and manage contracts and legal documents',
    category: 'saas',
    subcategory: 'Contract Management',
    description: 'Streamline your contract lifecycle — creation, review, approval, e-signature, renewal tracking, and clause analytics.',
    features: [
      'Template-based contract generation',
      'AI-powered clause library',
      'Electronic signature integration',
      'Renewal and expiration alerting',
      'Contract analytics (value, risk, obligation)',
      'Collaborative redlining',
      'Audit trail and version control',
      'Integration with Salesforce, HubSpot'
    ],
    benefits: [
      'Reduce contract cycle time by 60%',
      'Ensure compliance with legal standards',
      'Prevent revenue leakage from expired contracts',
      'Centralize all legal documents in one place'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-dispatch-1',
    title: 'Field Service & Dispatch Management',
    subtitle: 'Optimize field operations, scheduling, and technician dispatch',
    category: 'saas',
    subcategory: 'Field Service',
    description: 'Manage field service operations — work orders, technician dispatch, route optimization, and real-time job tracking.',
    features: [
      'Work order creation and assignment',
      'GPS-based technician tracking',
      'Automated route optimization',
      'Real-time job status updates',
      'Mobile field app for technicians',
      'Parts and inventory management',
      'Scheduling optimization algorithms',
      'Customer self-service portal'
    ],
    benefits: [
      'Reduce travel time by 35%',
      'Increase first-time fix rate by 25%',
      'Real-time visibility into field operations',
      'Improve customer satisfaction with accurate ETAs'
    ],
    pricing: { Starter: '$799/mo', Professional: '$1,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-livechat-1',
    title: 'Live Chat & Conversational Marketing',
    subtitle: 'Real-time chat with AI assistance for lead capture and support',
    category: 'saas',
    subcategory: 'Live Chat',
    description: 'AI-enhanced live chat platform for websites with lead qualification, appointment booking, and proactive engagement.',
    features: [
      'AI-powered chatbot with human handoff',
      'Proactive chat triggers and pop-ups',
      'Lead qualification and routing',
      'Appointment booking integration',
      'Canned responses and templates',
      'Chat analytics and conversion metrics',
      'Multi-agent coordination',
      'CRM integration for context'
    ],
    benefits: [
      'Convert 30%+ of website visitors into leads',
      '24/7 availability with AI chatbot',
      'Qualify leads in real-time',
      'Average response time under 30 seconds'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  // Even more new micro-SaaS
  {
    id: 'saas-payroll-1',
    title: 'Global Payroll & Compliance',
    subtitle: 'Run payroll in 150+ countries with automated tax compliance',
    category: 'saas',
    subcategory: 'Payroll',
    description: 'Pay employees and contractors worldwide with automated tax withholding, compliance reporting, and multi-currency payments.',
    features: [
      'Multi-country payroll processing',
      'Automated tax calculation and filing',
      'Contractor and freelancer payment management',
      'Benefits administration',
      'Payroll analytics and cost reporting',
      'Direct deposit and international payments',
      'Compliance with local labor laws',
      'Integration with HRIS and accounting systems'
    ],
    benefits: [
      'Pay anyone anywhere in 120+ currencies',
      'Stay compliant with local regulations',
      'Reduce payroll processing time by 90%',
      'Single dashboard for global workforce'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-ip-1',
    title: 'Intellectual Property Management',
    subtitle: 'Manage patents, trademarks, and IP portfolios',
    category: 'saas',
    subcategory: 'IP Management',
    description: 'Track and manage intellectual property — patents, trademarks, copyrights, and trade secrets — with renewal tracking and portfolio analytics.',
    features: [
      'Patent and trademark tracking',
      'Renewal deadline management',
      'IP portfolio analytics',
      'Prior art search capabilities',
      'Document and filing management',
      'Multi-jurisdiction support',
      'Licensing and revenue tracking',
      'Competitor IP monitoring'
    ],
    benefits: [
      'Never miss a renewal deadline',
      'Maximize IP portfolio value',
      'Monitor competitive IP landscape',
      'Reduce legal costs by 40%'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-sustainability-1',
    title: 'ESG & Sustainability Reporting',
    subtitle: 'Track, measure, and report environmental, social, and governance metrics',
    category: 'saas',
    subcategory: 'Sustainability',
    description: 'Comply with ESG reporting requirements including CSRD, GRI, TCFD, and SFDR. Track carbon emissions, diversity metrics, and governance practices.',
    features: [
      'Carbon footprint tracking and analytics',
      'Diversity and inclusion reporting',
      'Governance policy tracking',
      'Regulatory compliance (CSRD, GRI, TCFD, SFDR)',
      'Automated ESG report generation',
      'Supply chain sustainability scoring',
      'Goal setting and progress tracking',
      'Audit-ready documentation'
    ],
    benefits: [
      'Meet mandatory ESG reporting deadlines',
      'Improve ESG scores and investor confidence',
      'Reduce sustainability reporting time by 75%',
      'Identify reduction opportunities across operations'
    ],
    pricing: { Starter: '$1,299/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-health-1',
    title: 'Employee Wellness & Health Platform',
    subtitle: 'Track employee wellness, manage benefits, and promote healthy behaviors',
    category: 'saas',
    subcategory: 'Employee Wellness',
    description: 'Comprehensive employee wellness platform with health tracking, mental health support, benefits management, and wellness program automation.',
    features: [
      'Health assessment and wellness scoring',
      'Mental health resources and EAP integration',
      'Benefits enrollment and management',
      'Fitness and activity tracking',
      'Absenteeism and leave tracking',
      'Manager wellness dashboards',
      'Gamified wellness challenges',
      'HIPAA-compliant data handling'
    ],
    benefits: [
      'Reduce absenteeism by 25%',
      'Improve employee retention and satisfaction',
      'Lower healthcare costs',
      'Demonstrate duty of care to employees'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-logistics-1',
    title: 'Supply Chain & Logistics Optimization',
    subtitle: 'End-to-end supply chain visibility and optimization',
    category: 'saas',
    subcategory: 'Supply Chain',
    description: 'Track inventory, optimize routes, manage suppliers, and predict demand across your entire supply chain.',
    features: [
      'Real-time inventory tracking',
      'Route optimization and fleet management',
      'Supplier performance monitoring',
      'Demand forecasting with AI',
      'Warehouse management (WMS)',
      'Customs and trade compliance',
      'Multi-modal transportation management',
      'Real-time shipment visibility'
    ],
    benefits: [
      'Reduce logistics costs by 15-25%',
      'Improve delivery times by 30%',
      'Minimize stockouts and overstock',
      'End-to-end supply chain visibility'
    ],
    pricing: { Starter: '$1,499/mo', Professional: '$3,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-insurance-1',
    title: 'InsurTech — Insurance Automation Platform',
    subtitle: 'Streamline insurance operations with AI-powered underwriting and claims',
    category: 'saas',
    subcategory: 'InsurTech',
    description: 'Modernize insurance operations — from underwriting and risk assessment to claims processing and fraud detection.',
    features: [
      'AI-powered risk assessment and scoring',
      'Automated policy generation and underwriting',
      'Claims processing and adjudication automation',
      'Fraud detection and investigation',
      'Policy administration and renewals',
      'Regulatory compliance (state and federal)',
      'Customer self-service portal',
      'Data analytics and actuarial modeling'
    ],
    benefits: [
      'Reduce claims processing time by 70%',
      'Improve underwriting accuracy by 40%',
      'Detect fraud before payout',
      'Automate 60%+ of manual processes'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$6,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-proptech-1',
    title: 'PropTech — Property Management Platform',
    subtitle: 'Manage properties, tenants, and maintenance from one platform',
    category: 'saas',
    subcategory: 'PropTech',
    description: 'Comprehensive property management — tenant screening, lease management, maintenance tracking, rent collection, and financial reporting.',
    features: [
      'Tenant screening and onboarding',
      'Lease management and document generation',
      'Maintenance ticketing and scheduling',
      'Online rent collection and payment processing',
      'Property inspection management',
      'Financial reporting (P&L per property)',
      'Tenant and owner portals',
      'Vacancy and listing management'
    ],
    benefits: [
      'Reduce vacancy rates by 30%',
      'Automate 80%+ of maintenance requests',
      'Improve rent collection to 99%+',
      'Scale property management operations'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-edtech-1',
    title: 'EdTech Platform — Online Learning & Certification',
    subtitle: 'Full-featured online learning platform with course creation and student management',
    category: 'saas',
    subcategory: 'EdTech',
    description: 'Build and sell online courses with video lessons, assessments, certificates, student management, and payment processing.',
    features: [
      'Course authoring with multimedia support',
      'Video hosting and streaming',
      'Automated grading and certification',
      'Student progress tracking',
      'Drip content and scheduled releases',
      'Discussion forums and peer learning',
      'Payment processing and subscriptions',
      'Affiliate and instructor management'
    ],
    benefits: [
      'Launch your course in days, not months',
      'Scale to thousands of students',
      'Generate recurring subscription revenue',
      'Track student outcomes and completion rates'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-healthtech-1',
    title: 'HealthTech — Telemedicine & Patient Management',
    subtitle: 'HIPAA-compliant telemedicine and patient engagement platform',
    category: 'saas',
    subcategory: 'HealthTech',
    description: 'Telemedicine platform with video consultations, electronic health records, appointment management, and patient engagement tools.',
    features: [
      'HIPAA-compliant video consultations',
      'Electronic health record (EHR) management',
      'Online appointment booking',
      'E-prescribing and pharmacy integration',
      'Patient portal and medical records access',
      'Billing and insurance claim processing',
      'Clinical decision support tools',
      'Remote patient monitoring integration'
    ],
    benefits: [
      'Increase patient access to care by 50%',
      'Reduce administrative overhead by 40%',
      'Meet HIPAA compliance requirements',
      'Improve patient satisfaction and outcomes'
    ],
    pricing: { Starter: '$1,999/mo', Professional: '$4,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-fintech-1',
    title: 'FinTech — Payment & Banking Platform',
    subtitle: 'Build custom financial products — payments, lending, and banking features',
    category: 'saas',
    subcategory: 'FinTech',
    description: 'Payment processing, digital banking features, lending automation, and financial product APIs for fintech startups and businesses.',
    features: [
      'Payment gateway integration (Stripe, Square, Adyen)',
      'Digital wallet and card management',
      'Loan origination and underwriting',
      'AML/KYC compliance automation',
      'Real-time fraud detection',
      'Account and ledger management',
      'Multi-currency support',
      'Open banking API integration'
    ],
    benefits: [
      'Launch financial products 3x faster',
      'Built-in compliance reduces regulatory risk',
      'Process payments with 99.99% uptime',
      'Scale to millions of transactions'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$7,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  {
    id: 'saas-pwa-1',
    title: 'Progressive Web App (PWA) Builder',
    subtitle: 'Build app-like PWAs from your existing website — no app store required',
    category: 'saas',
    subcategory: 'App Builder',
    description: 'Turn any website into a fast, offline-capable, installable progressive web app. Push notifications, home screen presence, and native-like experience without app store submission.',
    features: [
      'One-click PWA conversion from any URL',
      'Offline mode with service worker caching',
      'Push notification engine',
      'Splash screen and manifest customization',
      'App-like navigation and gestures',
      'Background sync for data freshness',
      'Analytics and engagement tracking',
      'Multi-domain support for agencies'
    ],
    benefits: [
      'Reach users without app store friction',
      '3x faster load times vs. native apps',
      'Work offline and on low-quality networks',
      'Push notifications boost re-engagement by 3x'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-datashare-1',
    title: 'Secure Client Data Sharing Portal',
    subtitle: 'Share and receive sensitive documents with clients through encrypted, branded portals',
    category: 'saas',
    subcategory: 'Data Sharing',
    description: 'Create branded, secure portals for sharing sensitive documents with clients — with granular permissions, audit trails, and automatic expiration.',
    features: [
      'Branded upload/download portals',
      'End-to-end encryption (AES-256)',
      'Granular access controls and permissions',
      'Document watermarking and DRM',
      'Automatic link expiration and revocation',
      'Audit trail with download tracking',
      'Large file support (up to 5GB)',
      'Integration with CRM and email systems'
    ],
    benefits: [
      'Eliminate insecure email attachments',
      'Track when and how clients access documents',
      'Professional branded experience for clients',
      'Meet compliance requirements for data handling'
    ],
    pricing: { Starter: '$199/mo', Professional: '$499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-testimonial-1',
    title: 'Social Proof & Testimonial Engine',
    subtitle: 'Collect, manage, and display customer reviews, testimonials, and social proof across your marketing channels',
    category: 'saas',
    subcategory: 'Social Proof',
    description: 'Automate collection of customer reviews and testimonials, display them with beautiful widgets, and leverage social proof to increase conversions across your website and marketing.',
    features: [
      'Automated review request emails after purchase',
      'Multi-platform review aggregation (Google, Trustpilot, Facebook)',
      'Customizable review widgets for websites',
      'Video testimonial collection and hosting',
      'Review moderation and approval workflow',
      'AI-powered review sentiment analysis',
      'Display rules (targeting by page, product, audience)',
      'Fake review detection and filtering'
    ],
    benefits: [
      'Increase conversion rates by 15-30%',
      'Automate testimonial collection process',
      'Build trust with new prospects',
      'Centralize all social proof in one dashboard'
    ],
    pricing: { Starter: '$149/mo', Professional: '$399/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-forms-1',
    title: 'Intelligent Form & Survey Platform',
    subtitle: 'Build smart forms with conditional logic, AI analysis, and automated follow-ups',
    category: 'saas',
    subcategory: 'Forms & Surveys',
    description: 'Create dynamic, intelligent forms and surveys with conditional logic, AI-powered response analysis, automated follow-up workflows, and CRM integration.',
    features: [
      'Drag-and-drop form builder with conditional logic',
      'AI-powered response analysis and summarization',
      'Automated follow-up emails based on responses',
      'CRM integration (Salesforce, HubSpot)',
      'Multi-step and conversational form formats',
      'A/B testing for form optimization',
      'Payment collection within forms',
      'Advanced analytics and submission tracking'
    ],
    benefits: [
      'Capture 40%+ more qualified leads',
      'Automate lead qualification with smart routing',
      'Reduce manual data review time by 80%',
      'Improve response rates with conversational forms'
    ],
    pricing: { Starter: '$99/mo', Professional: '$299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-onboarding-1',
    title: 'Employee Onboarding Automation',
    subtitle: 'Automate new hire onboarding with workflows, document management, and training assignments',
    category: 'saas',
    subcategory: 'Onboarding',
    description: 'Streamline employee onboarding with automated workflows, digital document collection, training assignment, equipment provisioning, and first-week task checklists.',
    features: [
      'Custom onboarding workflow builder',
      'Digital document collection and e-signatures',
      'Automated training assignment and tracking',
      'IT provisioning automation (accounts, devices, access)',
      'First-week task checklist and manager notifications',
      'Buddy/mentor assignment workflows',
      'Onboarding analytics and time-to-productivity tracking',
      'Multi-location and remote worker support'
    ],
    benefits: [
      'Reduce onboarding time by 60%',
      'Ensure consistent experience for every new hire',
      'Decrease new hire turnover in first 90 days',
      'Eliminate manual paperwork and follow-ups'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-warranty-1',
    title: 'Warranty & Returns Management',
    subtitle: 'Automate warranty claims, returns processing, and product lifecycle management',
    category: 'saas',
    subcategory: 'Warranty Management',
    description: 'End-to-end warranty and returns management platform — automate claim processing, track product serial numbers, manage RMA workflows, and analyze return patterns.',
    features: [
      'Automated warranty claim processing',
      'Serial number and product lifecycle tracking',
      'RMA (Return Merchandise Authorization) workflow',
      'AI-powered return reason analysis',
      'Inventory reintegration tracking',
      'Warranty fraud detection',
      'Multi-channel claim submission (web, email, mobile)',
      'Supplier and manufacturer integration'
    ],
    benefits: [
      'Reduce warranty processing time by 70%',
      'Identify product quality issues early',
      'Decrease fraudulent warranty claims by 40%',
      'Improve customer satisfaction with faster resolutions'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-research-1',
    title: 'Market Research & Competitive Intelligence',
    subtitle: 'AI-powered market research, competitor tracking, and industry trend analysis',
    category: 'saas',
    subcategory: 'Market Research',
    description: 'Automated market research platform that monitors competitors, tracks industry trends, analyzes customer reviews, and generates actionable intelligence reports.',
    features: [
      'Automated competitor monitoring and alerts',
      'AI-powered review and sentiment aggregation',
      'Market trend identification and forecasting',
      'Feature gap analysis vs. competitors',
      'Pricing intelligence and positioning analysis',
      'Custom research report generation',
      'Social listening and brand monitoring',
      'Share of voice and brand perception tracking'
    ],
    benefits: [
      'Make data-driven strategic decisions',
      'Identify market opportunities before competitors',
      'Reduce manual research time by 80%',
      'Stay ahead of industry trends and shifts'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-affiliate-1',
    title: 'Affiliate Marketing & Partner Management',
    subtitle: 'Build, manage, and optimize your affiliate marketing program with automated tracking and payouts',
    category: 'saas',
    subcategory: 'Affiliate Marketing',
    description: 'Complete affiliate marketing platform — recruit partners, track referrals, automate payouts, and optimize program performance with real-time analytics.',
    features: [
      'Affiliate portal and self-service signup',
      'Real-time referral tracking and attribution',
      'Automated commission calculations and payouts',
      'Multi-tier and multi-level commission structures',
      'Affiliate recruitment and CRM tools',
      'Performance dashboards and reporting',
      'Fraud detection and click validation',
      'Integration with payment gateways (Stripe, PayPal)'
    ],
    benefits: [
      'Scale customer acquisition with partner channels',
      'Pay only for verified results (CPA model)',
      'Reduce affiliate management overhead by 70%',
      'Optimize program ROI with data-driven insights'
    ],
    pricing: { Starter: '$399/mo', Professional: '$999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-appointment-1',
    title: 'Smart Appointment & Queue Management',
    subtitle: 'AI-powered appointment booking, queue management, and customer flow optimization',
    category: 'saas',
    subcategory: 'Queue & Booking Management',
    description: 'Intelligent appointment and queue management for service businesses — salons, clinics, government offices, and retail — with AI-optimized scheduling and wait time predictions.',
    features: [
      'AI-optimized appointment scheduling',
      'Real-time queue management and digital queuing',
      'Wait time predictions and customer notifications',
      'Walk-in and hybrid appointment management',
      'Staff allocation optimization',
      'Customer self-service kiosk mode',
      'No-show prediction and prevention',
      'Analytics on utilization and peak hours'
    ],
    benefits: [
      'Reduce customer wait times by 40%',
      'Increase appointment utilization by 25%',
      'Minimize no-shows with smart reminders',
      'Improve customer satisfaction with transparent wait times'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-virtualevent-1',
    title: 'Virtual Event & Webinar Platform',
    subtitle: 'Host, manage, and monetize virtual events, webinars, and hybrid conferences',
    category: 'saas',
    subcategory: 'Event Management',
    description: 'Full-featured virtual event platform with live streaming, attendee engagement tools, sponsorship management, analytics, and on-demand content delivery.',
    features: [
      'HD live streaming with low latency',
      'Interactive features (Q&A, polls, chat, networking)',
      'Virtual expo booths and sponsor showcases',
      'Ticketing and registration management',
      'Agenda builder and speaker management',
      'On-demand replay and content library',
      'Attendee analytics and engagement scoring',
      'Hybrid event support (in-person + virtual)'
    ],
    benefits: [
      'Host events for 10 to 100,000+ attendees',
      'Generate revenue through ticket sales and sponsorships',
      'Measure engagement with detailed analytics',
      'Reduce event costs by 60% vs. in-person only'
    ],
    pricing: { Starter: '$299/mo', Professional: '$899/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
// ═══════════════════════════════════════════════════
// BATCH 7: MICRO SAAS ADDITIONS

  {
    id: 'saas-smart-scheduler-2',
    title: 'AI-Powered Smart Appointment Scheduler',
    subtitle: 'Intelligent scheduling that learns preferences and eliminates back-and-forth',
    category: 'saas',
    subcategory: 'Scheduling & Booking',
    description: 'AI-driven appointment scheduling platform that automatically finds optimal meeting times across teams, clients, and time zones. Learns scheduling patterns, handles cancellations and reschedules intelligently, and integrates with all major calendar systems.',
    features: [
      'AI-powered optimal time suggestion based on habits and preferences',
      'Multi-timezone auto-adjustment with daylight saving awareness',
      'Smart buffer time between meetings to prevent burnout',
      'Automated rescheduling when conflicts or cancellations occur',
      'Calendar sync with Google, Outlook, Apple, and Calendly',
      'Booking page builder with custom branding in 2 minutes',
      'No-show prediction and automated reminder sequences',
      'Revenue tracking per appointment type and team member'
    ],
    benefits: [
      'Reduce scheduling coordination time by 90%',
      'Eliminate double bookings and timezone errors',
      'Increase show rates by 35% with smart reminders',
      'Boost revenue per appointment with optimized slot utilization'
    ],
    pricing: { Starter: '$29/mo', Professional: '$79/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-doc-automation-2',
    title: 'Intelligent Document Automation Platform',
    subtitle: 'AI-powered document generation, extraction, and workflow automation',
    category: 'saas',
    subcategory: 'Document Automation',
    description: 'Automate your entire document lifecycle — from creation and approval to e-signature and archival. Uses AI to extract data from unstructured documents, generate contracts and reports from templates, and route documents through intelligent approval workflows.',
    features: [
      'AI-powered OCR and data extraction from scanned documents',
      'Template-based document generation with conditional logic',
      'Automated approval workflows with role-based routing',
      'Built-in e-signature with legal compliance (ESIGN, eIDAS)',
      'Document version control with full audit trails',
      'Bulk document processing with batch operations',
      'Integration with Salesforce, HubSpot, and ERP systems',
      'Smart search across all documents with AI-powered semantic search'
    ],
    benefits: [
      'Reduce document processing time by 80%',
      'Eliminate manual data entry errors',
      'Accelerate contract turnaround from days to hours',
      'Ensure compliance with automated audit trails'
    ],
    pricing: { Starter: '$49/mo', Professional: '$149/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-feedback-intelligence-2',
    title: 'Customer Feedback Intelligence Platform',
    subtitle: 'AI-powered customer feedback collection, analysis, and action management',
    category: 'saas',
    subcategory: 'Feedback & Analytics',
    description: 'Collect, analyze, and act on customer feedback from all channels — surveys, reviews, support tickets, and social media. AI-powered sentiment analysis and topic clustering automatically surface actionable insights and trend alerts.',
    features: [
      'Omnichannel feedback collection from 20+ sources',
      'Real-time AI sentiment analysis with emotion detection',
      'Automatic topic and theme clustering across feedback',
      'Competitive benchmarking against industry NPS and CSAT',
      'Automated alert system for negative feedback spikes',
      'Feedback-to-action pipeline with task assignment',
      'Trend analysis with predictive churn signals',
      'Executive dashboards with drill-down to individual responses'
    ],
    benefits: [
      'Understand the "why" behind every score with AI analysis',
      'Reduce churn by 20% through proactive issue detection',
      'Prioritize product improvements with data-driven insights',
      'Close the feedback loop with automated action tracking'
    ],
    pricing: { Starter: '$99/mo', Professional: '$299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-workflow-automation-2',
    title: 'No-Code Workflow Automation Engine',
    subtitle: 'Visual workflow builder that automates complex business processes without code',
    category: 'saas',
    subcategory: 'Workflow Automation',
    description: 'Build powerful automated workflows with a visual drag-and-drop interface. Connect 200+ apps and services, add branching logic, conditions, and approvals, and deploy enterprise-grade automation without writing a single line of code.',
    features: [
      'Visual drag-and-drop workflow builder with pre-built templates',
      '200+ pre-built integrations (Slack, Salesforce, Google, SAP, etc.)',
      'Conditional branching, parallel execution, and error handling',
      'Built-in approval gates with multi-level sign-off',
      'Scheduled, triggered, and event-driven workflow execution',
      'Real-time execution monitoring with detailed audit logs',
      'Custom webhooks and API triggers for any event',
      'Version control and rollback for workflow changes'
    ],
    benefits: [
      'Automate repetitive tasks and save 15+ hours per week',
      'Reduce process errors by 95% with automated execution',
      'Deploy workflows 10x faster than custom development',
      'Scale operations without proportional headcount increases'
    ],
    pricing: { Starter: '$79/mo', Professional: '$249/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

// ── 12 new Micro SAAS Solutions ──
  {
    id: 'saas-ai-writer-2',
    title: 'AI Content & Copywriting Platform',
    subtitle: 'Generate SEO-optimized, brand-consistent content at scale using AI',
    category: 'saas',
    subcategory: 'AI Content',
    description: 'AI-powered content generation platform that produces blog posts, ad copy, product descriptions, and social media content tailored to your brand voice and optimized for search engines.',
    features: [
      'AI blog post and article generation',
      'Ad copy and landing page copywriter',
      'Product description generator for e-commerce',
      'Brand voice training and consistency enforcement',
      'SEO optimization with keyword integration',
      'Content calendar and publishing automation',
      'Multi-language content generation (50+ languages)',
      'Plagiarism checker and content originality scoring'
    ],
    benefits: [
      'Produce 10x more content in a fraction of the time',
      'Increase organic traffic by 40-80%',
      'Maintain consistent brand voice across all channels',
      'Reduce content creation costs by 70%'
    ],
    pricing: { Starter: '$49/mo', Professional: '$149/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-voice-clone-2',
    title: 'AI Voice Cloning & Text-to-Speech',
    subtitle: 'Create realistic AI voiceovers and clone voices for content, training, and accessibility',
    category: 'saas',
    subcategory: 'Voice AI',
    description: 'Generate natural-sounding AI voiceovers from text, clone professional voices with consent, and create multilingual audio content for training, marketing, and accessibility.',
    features: [
      'Instant voice cloning from 60 seconds of audio',
      '200+ realistic AI voices in 50+ languages',
      'Emotion and tone control for voice output',
      'Batch audio generation for large projects',
      'Real-time text-to-speech API',
      'Audio content editor with timeline controls',
      'Background noise removal and audio enhancement',
      'SSML and pronunciation customization'
    ],
    benefits: [
      'Produce studio-quality audio without recording',
      'Launch multilingual content 10x faster',
      'Create accessible content for visually impaired users',
      'Reduce voiceover costs by 90%'
    ],
    pricing: { Starter: '$19/mo', Professional: '$49/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-video-gen-2',
    title: 'AI Video Generation & Editing',
    subtitle: 'Create professional videos from text, images, and templates using AI',
    category: 'saas',
    subcategory: 'Video AI',
    description: 'Transform text, blog posts, and presentations into engaging videos with AI-powered script generation, voiceover, stock footage matching, and automated editing.',
    features: [
      'Blog-to-video and article-to-video conversion',
      'AI-generated scripts and storyboards',
      'Auto-matched stock footage and images',
      'AI voiceover in 50+ languages',
      'Captions, subtitles, and translations',
      'Customizable templates for social media',
      'Screen recording and webcam overlay',
      'Brand kit integration (colors, logos, fonts)'
    ],
    benefits: [
      'Create videos 15x faster than traditional production',
      'Increase social media engagement by 40%+',
      'Repurpose blog content into video at scale',
      'Reduce video production costs by 80%'
    ],
    pricing: { Starter: '$29/mo', Professional: '$99/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-cyber-range-2',
    title: 'Cybersecurity Simulation & Training Platform',
    subtitle: 'Hands-on cyber ranges and attack simulations for security team training',
    category: 'saas',
    subcategory: 'Cybersecurity Training',
    description: 'Cloud-based cyber range platform with realistic attack simulations, capture-the-flag exercises, red team/blue team scenarios, and automated skill assessment for security teams.',
    features: [
      'Realistic attack simulation environments',
      'Capture-the-flag (CTF) challenge builder',
      'Red team vs blue team scenario engine',
      'Automated skill assessment and scoring',
      'Pre-built training modules (phishing, ransomware, APT)',
      'Customizable threat scenarios and difficulty levels',
      'Team leaderboards and progress tracking',
      'Compliance-aligned training paths (NIST, MITRE ATT&CK)'
    ],
    benefits: [
      'Improve incident response time by 50%+',
      'Validate security team readiness against real attack vectors',
      'Meet compliance training requirements with automated proof',
      'Build a security culture with gamified learning'
    ],
    pricing: { Starter: '$199/mo', Professional: '$599/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-carbon-2',
    title: 'Carbon Accounting & Emissions Tracking',
    subtitle: 'Automate carbon footprint measurement, reporting, and reduction across Scope 1, 2, and 3',
    category: 'saas',
    subcategory: 'Carbon Management',
    description: 'Automated carbon accounting platform that measures, tracks, and reports greenhouse gas emissions across all scopes — with AI-powered reduction recommendations and regulatory report generation.',
    features: [
      'Automated Scope 1, 2, and 3 emissions calculation',
      'AI-powered emission reduction recommendations',
      'Carbon credit marketplace and offset purchasing',
      'Regulatory report generation (CSRD, SEC, TCFD)',
      'Supply chain emissions tracking',
      'Real-time emission dashboards and alerts',
      'Integration with ERP, procurement, and travel systems',
      'Science-based target (SBTi) progress tracking'
    ],
    benefits: [
      'Achieve carbon neutrality with data-driven insights',
      'Meet mandatory climate disclosure requirements',
      'Identify reduction opportunities worth millions',
      'Build investor confidence with verified emissions data'
    ],
    pricing: { Starter: '$299/mo', Professional: '$899/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-smart-hr-2',
    title: 'AI-Powered People Analytics',
    subtitle: 'Predictive workforce analytics with AI-driven insights on retention, engagement, and performance',
    category: 'saas',
    subcategory: 'People Analytics',
    description: 'Advanced people analytics platform that uses AI to predict employee attrition, measure engagement, optimize compensation, and identify flight risks before they impact your business.',
    features: [
      'Predictive attrition modeling with 90%+ accuracy',
      'Employee sentiment analysis from multiple sources',
      'Compensation benchmarking and equity analysis',
      'Skills gap analysis and workforce planning',
      'DEI analytics and pay equity monitoring',
      'Manager effectiveness scoring',
      'Automated stay interviews and pulse surveys',
      'Integration with HRIS, Slack, and collaboration tools'
    ],
    benefits: [
      'Reduce employee turnover by 25-35%',
      'Save $15K+ per avoided departure',
      'Identify flight risks 3 months before resignation',
      'Optimize compensation with market data'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,299/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-threat-intel-2',
    title: 'Threat Intelligence & Dark Web Monitoring',
    subtitle: 'Proactive threat intelligence with dark web monitoring, credential leak detection, and attack surface management',
    category: 'saas',
    subcategory: 'Threat Intelligence',
    description: 'Continuous threat intelligence platform that monitors the dark web for credential leaks, tracks your attack surface, and provides actionable alerts to prevent breaches before they happen.',
    features: [
      'Dark web monitoring for leaked credentials',
      'Attack surface discovery and management',
      'Threat actor tracking and attribution',
      'Automated credential exposure alerts',
      'Vulnerability intelligence and zero-day alerts',
      'Brand impersonation detection',
      'Executive and VIP credential monitoring',
      'Integration with SIEM and SOAR platforms'
    ],
    benefits: [
      'Detect credential leaks before attackers exploit them',
      'Reduce mean time to threat detection by 80%',
      'Protect executives and brand from targeted attacks',
      'Prioritize remediation with risk-scored intelligence'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-iot-2',
    title: 'IoT Device Management & Analytics',
    subtitle: 'Manage, monitor, and extract insights from IoT device fleets at scale',
    category: 'saas',
    subcategory: 'IoT Management',
    description: 'Cloud-based IoT platform for device provisioning, remote monitoring, firmware management, and real-time analytics across thousands of connected devices.',
    features: [
      'Device provisioning at scale (zero-touch)',
      'Remote device monitoring and control',
      'OTA firmware update management',
      'Real-time telemetry and log ingestion',
      'Device health and anomaly detection',
      'Rules engine for automated actions',
      'Digital twin integration per device',
      'Multi-protocol support (MQTT, CoAP, HTTP)'
    ],
    benefits: [
      'Manage 100K+ devices from a single dashboard',
      'Reduce device downtime by 40%',
      'Accelerate IoT deployments by 60%',
      'Extract actionable insights from device data'
    ],
    pricing: { Starter: '$999/mo', Professional: '$2,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-privacy-2',
    title: 'Privacy Compliance Automation (DSAR/CCPA/GDPR)',
    subtitle: 'Automate data subject rights requests and privacy compliance workflows',
    category: 'saas',
    subcategory: 'Privacy Compliance',
    description: 'Automate DSAR fulfillment, consent management, data mapping, and privacy impact assessments across GDPR, CCPA, and global privacy frameworks.',
    features: [
      'Automated DSAR intake and fulfillment (access, delete, portability)',
      'Consent management with granular preferences',
      'Automated data mapping and inventory',
      'Privacy impact assessment (PIA) automation',
      'Cross-system data discovery and classification',
      'Regulatory change tracking and gap analysis',
      'Audit trail and compliance reporting',
      'Integration with major CRM, marketing, and cloud platforms'
    ],
    benefits: [
      'Fulfill DSARs in hours instead of weeks',
      'Maintain continuous compliance with GDPR and CCPA',
      'Reduce privacy program costs by 60%',
      'Build trust with transparent data practices'
    ],
    pricing: { Starter: '$299/mo', Professional: '$799/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-drone-2',
    title: 'Drone Fleet Management & Analytics',
    subtitle: 'Manage drone operations, automate flight planning, and analyze aerial data with AI',
    category: 'saas',
    subcategory: 'Drone Operations',
    description: 'Enterprise drone fleet management platform — automated flight planning, airspace compliance, real-time telemetry, and AI-powered aerial data analysis for inspections, surveying, and mapping.',
    features: [
      'Automated flight path planning and optimization',
      'Real-time drone telemetry and live video',
      'AI-powered aerial image analysis (infrared, LiDAR, RGB)',
      'Airspace compliance and no-fly zone management',
      'Fleet health monitoring and maintenance alerts',
      'Automated inspection reporting (construction, agriculture, energy)',
      '3D mapping and volumetric measurement',
      'Pilot certification and compliance tracking'
    ],
    benefits: [
      'Complete inspections 5x faster than manual methods',
      'Reduce human risk in hazardous inspections',
      'Generate survey-grade accuracy maps',
      'Optimize fleet utilization across 100+ drones'
    ],
    pricing: { Starter: '$499/mo', Professional: '$1,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-smart-contract-2',
    title: 'Smart Contract Audit & Monitoring',
    subtitle: 'Automated smart contract security auditing and real-time monitoring for DeFi and Web3',
    category: 'saas',
    subcategory: 'Smart Contract Security',
    description: 'Automated smart contract auditing platform with vulnerability detection, formal verification, real-time exploit monitoring, and compliance reporting for DeFi protocols and NFT projects.',
    features: [
      'Automated vulnerability scanning (reentrancy, overflow, logic bugs)',
      'Formal verification and mathematical proof of correctness',
      'Real-time exploit and flash loan attack monitoring',
      'Gas optimization recommendations',
      'Comprehensive audit reports with severity ratings',
      'Continuous monitoring post-deployment',
      'Integration with GitHub and CI/CD pipelines',
      'Insurance and risk scoring integration'
    ],
    benefits: [
      'Detect critical vulnerabilities before deployment',
      'Reduce smart contract exploit risk by 95%',
      'Get audit reports in 48 hours (vs. weeks)',
      'Continuous protection after deployment'
    ],
    pricing: { Starter: '$999/mo', Professional: '$3,499/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-ai-agent-2',
    title: 'AI Agent Builder & Orchestration Platform',
    subtitle: 'Build, deploy, and manage autonomous AI agents for business process automation',
    category: 'saas',
    subcategory: 'AI Agent Platform',
    description: 'No-code platform to build autonomous AI agents that can browse the web, execute code, manage emails, book meetings, and automate complex multi-step business workflows.',
    features: [
      'Visual AI agent builder with drag-and-drop',
      'Pre-built agent templates (sales, support, research, devops)',
      'Multi-agent orchestration and collaboration',
      'Web browsing and data extraction capabilities',
      'Code execution in sandboxed environments',
      'Email and calendar integration for autonomous actions',
      'Human-in-the-loop approval workflows',
      'Agent performance monitoring and analytics'
    ],
    benefits: [
      'Automate complex workflows without code',
      'Deploy agents in hours, not months',
      'Scale operations 24/7 with autonomous AI',
      'Reduce operational costs by 50-70%'
    ],
    pricing: { Starter: '$199/mo', Professional: '$599/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'saas-neurosafety-2',
    title: 'AI Safety & Content Moderation',
    subtitle: 'Real-time AI content moderation, toxicity detection, and safety guardrails for platforms',
    category: 'saas',
    subcategory: 'AI Safety',
    description: 'AI-powered content moderation and safety platform for social platforms, marketplaces, and community apps — detecting harmful content, enforcing policies, and protecting users.',
    features: [
      'Real-time text, image, and video content moderation',
      'Toxicity, hate speech, and harassment detection',
      'AI-generated content detection (deepfakes, synthetic text)',
      'Custom policy engine with configurable rules',
      'Age verification and child safety protections',
      'Appeal workflow and human review queue',
      'Safety analytics dashboard and trend reporting',
      'API-first for integration into any platform'
    ],
    benefits: [
      'Moderate millions of content pieces daily with 99% accuracy',
      'Reduce manual moderation costs by 80%',
      'Protect brand reputation and user safety',
      'Meet regulatory requirements (DSA, Online Safety Act)'
    ],
    pricing: { Starter: '$299/mo', Professional: '$899/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
];

// ═══════════════════════════════════════════════════════
// SECTION 4: IT CONSULTING & STRATEGY
// ═══════════════════════════════════════════════════════

export const consultingServices: Service[] = [
  {
    id: 'consult-digital-1',
    title: 'Digital Transformation Strategy',
    subtitle: 'Roadmap and execution plan for enterprise digital transformation',
    category: 'consulting',
    subcategory: 'Strategy',
    description: 'Strategic consulting to define and execute your digital transformation roadmap — from assessment to implementation across technology, people, and process.',
    features: [
      'Current state technology assessment',
      'Digital maturity scoring',
      'Technology roadmap and architecture blueprint',
      'Change management strategy',
      'ROI analysis and business case',
      'Vendor selection guidance',
      'Phased implementation planning',
      'Executive sponsorship alignment'
    ],
    benefits: [
      'Clear, actionable transformation roadmap',
      'Reduce risk of failed digital initiatives',
      'Align technology investments to business goals',
      'Measurable ROI projections'
    ],
    pricing: { Starter: '$3,999/project', Professional: '$12,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-cloud-1',
    title: 'Cloud Strategy & Migration Consulting',
    subtitle: 'Expert guidance for cloud adoption and optimization',
    category: 'consulting',
    subcategory: 'Cloud Consulting',
    description: 'Strategic cloud advisory — choose the right cloud provider, design your architecture, plan migrations, and optimize costs.',
    features: [
      'Cloud readiness assessment',
      'TCO analysis and comparison (AWS vs Azure vs GCP)',
      'Migration planning and execution support',
      'Cloud cost optimization (FinOps)',
      'Well-Architected Reviews',
      'Multi-cloud and hybrid strategy',
      'Governance and compliance framework',
      'Team upskilling and training'
    ],
    benefits: [
      'Save 20-40% on cloud infrastructure costs',
      'Avoid vendor lock-in with smart architecture',
      'Accelerate cloud adoption timelines',
      'Minimize migration risk and downtime'
    ],
    pricing: { Starter: '$2,999/project', Professional: '$9,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-security-1',
    title: 'Cybersecurity Strategy & Risk Assessment',
    subtitle: 'Comprehensive security strategy and risk management',
    category: 'consulting',
    subcategory: 'Security Consulting',
    description: 'Enterprise cybersecurity consulting — risk assessments, security architecture design, compliance, and incident response planning.',
    features: [
      'Security risk assessment and gap analysis',
      'Security architecture design',
      'Compliance roadmap (SOC 2, HIPAA, PCI DSS)',
      'Incident response planning and tabletop exercises',
      'Third-party risk management',
      'Zero-trust architecture design',
      'Security awareness program design',
      'Board-level security reporting'
    ],
    benefits: [
      'Identify critical vulnerabilities before attackers',
      'Meet regulatory requirements with confidence',
      'Reduce cyber insurance premiums',
      'Build a culture of security awareness'
    ],
    pricing: { Starter: '$4,999/project', Professional: '$14,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-ai-1',
    title: 'AI Strategy & Implementation Consulting',
    subtitle: 'Define your AI strategy and accelerate implementation',
    category: 'consulting',
    subcategory: 'AI Consulting',
    description: 'Strategic AI consulting — identify use cases, build business cases, design AI governance, and oversee implementation for maximum business value.',
    features: [
      'AI readiness and maturity assessment',
      'Use case identification and prioritization',
      'AI business case development and ROI analysis',
      'Data strategy and infrastructure planning',
      'AI governance and ethics framework',
      'Vendor and technology selection',
      'Pilot program design and execution',
      'Organizational change management for AI adoption'
    ],
    benefits: [
      'Identify highest-ROI AI opportunities',
      'Avoid common AI project failures',
      'Build AI capabilities sustainably',
      'Competitive advantage through strategic AI adoption'
    ],
    pricing: { Starter: '$4,999/project', Professional: '$14,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-data-1',
    title: 'Data Strategy & Analytics Consulting',
    subtitle: 'Unlock the value of your data with a comprehensive data strategy',
    category: 'consulting',
    subcategory: 'Data Consulting',
    description: 'Data strategy consulting — assess your data maturity, design your data architecture, and build analytics capabilities for competitive advantage.',
    features: [
      'Data maturity assessment',
      'Data architecture design',
      'Governance and quality framework',
      'Analytics roadmap and prioritization',
      'Data lakehouse design and implementation',
      'Advanced analytics and AI/ML roadmap',
      'Team building and capability development',
      'ROI measurement and value tracking'
    ],
    benefits: [
      'Turn data into a strategic asset',
      'Reduce time to insight by 60%',
      'Build a scalable, future-proof data architecture',
      'Make evidence-based strategic decisions'
    ],
    pricing: { Starter: '$3,999/project', Professional: '$12,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  // NEW consulting services
  {
    id: 'consult-startup-1',
    title: 'Startup CTO & Technical Advisory',
    subtitle: 'Fractional CTO services for startups and growing businesses',
    category: 'consulting',
    subcategory: 'Technical Advisory',
    description: 'Fractional CTO services providing strategic technology leadership, architecture decisions, team scaling, and technical due diligence for startups and growth-stage companies.',
    features: [
      'Strategic technology roadmap',
      'Architecture review and design',
      'Engineering team hiring and mentoring',
      'Technical due diligence for fundraising',
      'Code quality and process audits',
      'Technology stack selection and guidance',
      'Scalability planning and cost optimization',
      'Monthly strategy sessions and ongoing advisory'
    ],
    benefits: [
      'Access to senior CTO expertise without full-time cost',
      'Make the right technical decisions early',
      'Scale your engineering team efficiently',
      'Build investor-ready technical foundations'
    ],
    pricing: { Starter: '$2,999/mo', Professional: '$7,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-automation-1',
    title: 'Business Process Automation Consulting',
    subtitle: 'Identify and automate manual processes to reduce costs and improve efficiency',
    category: 'consulting',
    subcategory: 'Process Automation',
    description: 'End-to-end process automation consulting — from process discovery and design to implementation and optimization using RPA and AI.',
    features: [
      'Process discovery and mapping',
'ROI analysis and prioritization',
      'Center of Excellence (CoE) setup'
    ],
    benefits: [
      'Reduce operational costs by 30-60%',
      'Eliminate manual process bottlenecks',
      'Improve process cycle times by 50%+',
      'Measurable ROI with full audit trail'
    ],
    pricing: { Starter: '$3,999/project', Professional: '$12,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  {
    id: 'consult-quantum-1',
    title: 'Quantum Computing Readiness & Strategy',
    subtitle: 'Prepare your organization for the quantum era with strategic planning and use case identification',
    category: 'consulting',
    subcategory: 'Quantum Computing',
    description: `Strategic consulting to assess quantum computing readiness, identify use cases in optimization, cryptography, and drug discovery, and build a quantum-ready roadmap for your organization.`,
    features: [
    'Quantum readiness assessment and maturity scoring',
    'Quantum use case identification and prioritization',
    'Post-quantum cryptography migration planning',
    'Quantum cloud platform selection (AWS Braket, Azure Quantum, IBM Q)',
    'Proof-of-concept design and execution',
    'Quantum talent acquisition and training strategy',
    'Hybrid classical-quantum architecture design',
    'Quantum advantage benchmarking framework',
    ],
    benefits: [
    'Get ahead of quantum disruption before competitors',
    'Protect cryptographic infrastructure from quantum threats',
    'Identify $10M+ optimization opportunities quantum can unlock',
    'Build quantum literacy across your technical teams',
    ],
    pricing: {
    Starter: '$9,999/project',
    Professional: '$29,999/project',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'consult-datascience-1',
    title: 'Data Science Center of Excellence (CoE) Setup',
    subtitle: 'Stand up a world-class data science function with the right people, processes, and platform',
    category: 'consulting',
    subcategory: 'Data Science',
    description: `End-to-end consulting to establish or transform your data science organization — from hiring strategy and team structure to platform selection, MLOps, and governance.`,
    features: [
    'Data science talent strategy and recruitment support',
    'Team structure design (centralized vs. embedded vs. hub-and-spoke)',
    'MLOps platform selection and implementation',
    'Model lifecycle governance framework',
    'Feature store and experiment tracking setup',
    'Data science workflow standardization',
    'Executive dashboards for model ROI tracking',
    'Continuous learning and upskilling program design',
    ],
    benefits: [
    'Build a data science team that delivers real business value',
    'Avoid common pitfalls that cause 85% of DS projects to fail',
    'Accelerate time-to-value from data science investments',
    'Create a scalable foundation for AI and ML maturity',
    ],
    pricing: {
    Starter: '$7,999/project',
    Professional: '$24,999/project',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'consult-web3-blockchain-1',
    title: 'Web3 & Blockchain Strategy Consulting',
    subtitle: 'Navigate the decentralized future with strategic blockchain consulting and implementation',
    category: 'consulting',
    subcategory: 'Blockchain & Web3',
    description: `Expert consulting on blockchain technology strategy, decentralized application (dApp) architecture, token economy design, and integration of Web3 capabilities into existing enterprise systems.`,
    features: [
    'Blockchain technology assessment and platform selection',
    'Use case identification and feasibility analysis',
    'Smart contract architecture and security review',
    'Token economy and governance model design',
    'DeFi protocol integration strategy',
    'NFT strategy for brand and customer engagement',
    'Decentralized identity (DID) implementation planning',
    'Web3 regulatory compliance guidance',
    ],
    benefits: [
    'Leverage blockchain for transparency, trust, and efficiency',
    'Explore new revenue models through tokenization',
    'Stay ahead of the decentralized economy curve',
    'Reduce blockchain project risk with expert guidance',
    ],
    pricing: {
    Starter: '$5,999/project',
    Professional: '$19,999/project',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'consult-digital-twin-1',
    title: 'Digital Twin Strategy & Implementation',
    subtitle: 'Build virtual replicas of physical assets, processes, and systems for simulation and optimization',
    category: 'consulting',
    subcategory: 'Digital Twin',
    description: `Strategic consulting for designing and implementing digital twins of manufacturing processes, supply chains, buildings, and infrastructure for real-time monitoring, simulation, and predictive optimization.`,
    features: [
    'Digital twin readiness and feasibility assessment',
    'IoT sensor and data infrastructure planning',
    '3D modeling and simulation platform selection',
    'Real-time data integration architecture',
    'Predictive maintenance model design',
    'Scenario simulation and what-if analysis',
    'Digital twin governance and versioning',
    'Integration with existing ERP/MES/SCADA systems',
    ],
    benefits: [
    'Predict failures before they happen — save millions',
    'Optimize operations without disrupting production',
    'Reduce physical prototyping costs by up to 70%',
    'Enable data-driven decision-making across operations',
    ],
    pricing: {
    Starter: '$12,999/project',
    Professional: '$39,999/project',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'consult-green-tech-1',
    title: 'Green IT & Sustainable Technology Consulting',
    subtitle: 'Reduce your technology carbon footprint while saving money and improving performance',
    category: 'consulting',
    subcategory: 'Green IT',
    description: `Consulting to optimize your IT infrastructure for sustainability — reducing energy consumption, e-waste, and carbon emissions while improving efficiency and meeting ESG goals.`,
    features: [
    'IT carbon footprint assessment and baseline measurement',
    'Data center optimization and right-sizing',
    'Workload migration to carbon-aware cloud regions',
    'Energy-efficient hardware refresh planning',
    'E-waste reduction and responsible disposal strategy',
    'Green software engineering practices',
    'Carbon-aware scheduling and demand response',
    'Sustainability reporting and ESG compliance support',
    ],
    benefits: [
    'Reduce IT energy costs by 20-40%',
    'Meet ESG and sustainability commitments',
    'Attract ESG-conscious customers and investors',
    'Future-proof against tightening environmental regulations',
    ],
    pricing: {
    Starter: '$5,999/project',
    Professional: '$19,999/project',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'consult-edge-computing-1',
    title: 'Edge Computing Strategy & Deployment',
    subtitle: 'Bring computation closer to where data is generated for ultra-low latency and bandwidth savings',
    category: 'consulting',
    subcategory: 'Edge Computing',
    description: `Strategic consulting for deploying edge computing infrastructure to reduce latency, improve reliability, and enable real-time processing for IoT, manufacturing, retail, and autonomous systems.`,
    features: [
    'Edge computing assessment and use case prioritization',
    'Edge architecture design (AWS Wavelength, Azure Edge, custom)',
    'Latency-sensitive application design',
    'Edge-to-cloud data orchestration strategy',
    '5G integration and network optimization',
    'Edge security and zero-trust at the edge',
    'Container and Kubernetes at the edge (K3s, KubeEdge)',
    'Monitoring and management of distributed edge nodes',
    ],
    benefits: [
    'Achieve sub-10ms latency for critical applications',
    'Reduce bandwidth costs by processing data locally',
    'Enable real-time AI inference at the edge',
    'Improve reliability when cloud connectivity is limited',
    ],
    pricing: {
    Starter: '$7,999/project',
    Professional: '$24,999/project',
    Enterprise: 'Custom',
    },
    contactUrl: '/contact'
  },

  {
    id: 'consult-rpa-1',
    title: 'RPA & AI Process Automation',
    subtitle: 'Intelligent automation combining RPA with AI for end-to-end process transformation',
    category: 'consulting',
    subcategory: 'RPA & Process Automation',
    description: 'Design and deploy Robotic Process Automation enhanced with AI to automate repetitive, rule-based tasks across your organization — from invoice processing to HR workflows.',
    features: [
      'RPA and AI solution design',
      'Implementation and testing support',
      'Change management and training',
      'Continuous improvement program',
      'Center of Excellence (CoE) setup',
      'Process mining and discovery',
      'Bot orchestration and monitoring',
      'Intelligent document processing integration'
    ],
    benefits: [
      'Reduce operational costs by 30-60%',
      'Eliminate human errors and bottlenecks',
      'Free up staff for higher-value work',
      'Measurable, scalable automation outcomes'
    ],
    pricing: { Starter: '$3,999/project', Professional: '$12,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-integration-1',
    title: 'Systems Integration & Digital Transformation Consulting',
    subtitle: 'Expert consulting for complex system integrations and digital ecosystems',
    category: 'consulting',
    subcategory: 'Integration Consulting',
    description: 'Consulting for complex integration challenges — MuleSoft, Dell Boomi, custom APIs, and enterprise service buses connecting diverse systems.',
    features: [
      'Integration architecture design',
      'Platform selection (MuleSoft, Boomi, Workato, custom)',
      'API strategy and management consulting',
      'Legacy system integration support',
      'Data harmonization strategies',
      'Microservices architecture design',
      'Performance testing and optimization',
      'DevOps and deployment automation'
    ],
    benefits: [
      'Unify disparate systems into a seamless ecosystem',
      'Reduce integration complexity and cost',
      'Enable real-time data flows across systems',
      'Future-proof your technology investments'
    ],
    pricing: { Starter: '$4,999/project', Professional: '$14,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-iot-1',
    title: 'IoT Strategy & Architecture Consulting',
    subtitle: 'Design and plan your IoT strategy for maximum business impact',
    category: 'consulting',
    subcategory: 'IoT Consulting',
    description: 'Strategic IoT consulting — device selection, platform architecture, data strategy, and deployment planning for IoT initiatives.',
    features: [
      'IoT readiness and feasibility assessment',
      'Device and sensor selection guidance',
      'IoT platform architecture design (AWS IoT, Azure IoT Hub)',
      'Data pipeline and analytics strategy',
      'Security and privacy framework',
      'Edge computing strategy',
      'Pilot program design and execution',
      'Scalability and fleet management planning'
    ],
    benefits: [
      'Reduce IoT project failure risk',
      'Optimize device and platform costs',
      'Generate actionable insights from sensor data',
      'Build scalable, secure IoT infrastructure'
    ],
    pricing: { Starter: '$3,999/project', Professional: '$12,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

  {
    id: 'consult-responsible-ai-1',
    title: 'AI Ethics & Responsible AI Consulting',
    subtitle: 'Build ethical, fair, and transparent AI systems with governance frameworks and bias audits',
    category: 'consulting',
    subcategory: 'AI Ethics',
    description: 'Ensure your AI systems are fair, transparent, and accountable. Includes bias auditing, explainability consulting, AI governance design, and regulatory compliance for responsible AI.',
    features: [
      'Algorithmic bias detection and remediation',
      'AI explainability and transparency frameworks',
      'AI ethics policy and governance design',
      'Fairness testing across demographics',
      'AI impact assessments',
      'Regulatory compliance (EU AI Act, NIST AI RMF)',
      'Stakeholder engagement and AI literacy training',
      'Responsible AI maturity assessment'
    ],
    benefits: [
      'Build trust with customers and regulators',
      'Avoid reputational damage from biased AI',
      'Meet EU AI Act and upcoming global regulations',
      'Competitive advantage through ethical AI'
    ],
    pricing: { Starter: '$4,999/project', Professional: '$14,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-green-1',
    title: 'Green IT & Sustainable Technology Consulting',
    subtitle: 'Reduce your technology carbon footprint and align IT with ESG goals',
    category: 'consulting',
    subcategory: 'Green IT',
    description: 'Green IT consulting — optimize infrastructure for energy efficiency, implement sustainable technology practices, and achieve carbon-neutral IT operations.',
    features: [
      'IT carbon footprint measurement and reporting',
      'Server and data center optimization',
      'Sustainable cloud migration strategies',
      'E-waste reduction and responsible disposal',
      'Energy-efficient architecture design',
      'Renewable energy integration for IT',
      'ESG-compliant technology procurement',
      'Green software development practices'
    ],
    benefits: [
      'Reduce IT energy costs by 20-35%',
      'Achieve carbon-neutral IT operations',
      'Meet ESG and sustainability reporting requirements',
      'Attract environmentally-conscious customers and talent'
    ],
    pricing: { Starter: '$3,999/mo', Professional: '$9,999/mo', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-llm-1',
    title: 'LLM Integration & Prompt Engineering Consulting',
    subtitle: 'Expert consulting to integrate large language models into your products and workflows',
    category: 'consulting',
    subcategory: 'LLM Consulting',
    description: 'Strategic consulting for integrating large language models (GPT-4, Claude, Gemini, open-source) into your products, internal tools, and customer-facing applications.',
    features: [
      'LLM technology assessment and selection',
      'Prompt engineering and prompt library design',
      'RAG system architecture and implementation',
      'Fine-tuning strategy and execution',
      'Cost optimization for LLM usage',
      'Safety, guardrails, and content filtering',
      'Custom LLM training with proprietary data',
      'Multi-model orchestration design'
    ],
    benefits: [
      'Identify the optimal LLM for your use cases',
      'Reduce LLM API costs by 40-60%',
      'Build production-ready AI features fast',
      'Ensure safety and compliance in AI outputs'
    ],
    pricing: { Starter: '$4,999/project', Professional: '$14,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-web3-1',
    title: 'Web3 & DeFi Strategy Consulting',
    subtitle: 'Navigate the decentralized future with expert Web3 and DeFi advisory',
    category: 'consulting',
    subcategory: 'Web3 / DeFi',
    description: 'Strategic consulting for blockchain adoption, DeFi protocol development, DAO governance, tokenomics design, and digital asset strategy.',
    features: [
      'Blockchain adoption strategy and assessment',
      'DeFi protocol audit and risk assessment',
      'DAO governance design and implementation',
      'Tokenomics modeling and token launch support',
      'NFT strategy and digital asset monetization',
      'Smart contract security review',
      'Metaverse and digital identity strategy',
      'Web3 regulatory compliance guidance'
    ],
    benefits: [
      'Navigate complex and evolving Web3 landscape',
      'Launch blockchain projects with confidence',
      'Mitigate risks in DeFi and token economics',
      'Stay compliant with evolving crypto regulations'
    ],
    pricing: { Starter: '$4,999/project', Professional: '$14,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-startup-2',
    title: 'Venture Due Diligence & Tech Assessment',
    subtitle: 'Technical due diligence for investors, acquirers, and startups preparing for funding rounds',
    category: 'consulting',
    subcategory: 'Technical Due Diligence',
    description: 'Comprehensive technical due diligence for M&A, VC funding, and acquisition scenarios — evaluating code quality, architecture, scalability, security, and technical debt.',
    features: [
      'Source code quality assessment',
      'Architecture scalability review',
      'Security and vulnerability audit',
      'Technical debt quantification',
      'Team and process evaluation',
      'Infrastructure and DevOps maturity',
      'Scalability stress testing',
      'Investment risk scoring and recommendations'
    ],
    benefits: [
      'Identify hidden technical risks before investment',
      'Objective assessment of build vs. rebuild decisions',
      'Negotiate better deal terms with data-driven insights',
      'Accelerate investor confidence and close deals faster'
    ],
    pricing: { Starter: '$9,999/project', Professional: '$24,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-datascience-1',
    title: 'Data Science & Advanced Analytics Consulting',
    subtitle: 'Transform raw data into predictive models and advanced analytics capabilities',
    category: 'consulting',
    subcategory: 'Data Science',
    description: 'End-to-end data science consulting — from data strategy and feature engineering to model development, deployment, and continuous optimization of ML/AI models.',
    features: [
      'Data strategy and maturity assessment',
      'Feature engineering and data pipeline design',
      'Predictive model development and validation',
      'Deep learning and NLP model development',
      'Model deployment and MLOps setup',
      'Experiment design and A/B testing',
      'Causal inference and advanced analytics',
      'Model monitoring and retraining strategy'
    ],
    benefits: [
      'Turn data into competitive advantage',
      'Reduce time-to-insight by 70%',
      'Build production-ready predictive models',
      'Measure and optimize business impact of AI/ML investments'
    ],
    pricing: { Starter: '$7,999/project', Professional: '$19,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
// ═══════════════════════════════════════════════════
// BATCH 7: CONSULTING ADDITIONS
// ═══════════════════════════════════════════════════

  {
    id: 'consult-cloud-native-2',
    title: 'Cloud-Native Transformation Consulting',
    subtitle: 'Guided migration to cloud-native architecture with microservices, containers, and DevOps',
    category: 'consulting',
    subcategory: 'Cloud Architecture',
    description: 'End-to-end consulting service to transform legacy monolithic applications into modern cloud-native architectures. Covers containerization, microservices decomposition, Kubernetes orchestration, CI/CD pipeline design, and observability implementation.',
    features: [
      'Legacy application assessment and modernization roadmap',
      'Monolith-to-microservices decomposition strategy',
      'Containerization with Docker and Kubernetes orchestration',
      'CI/CD pipeline design with GitOps best practices',
      'Service mesh implementation (Istio/Linkerd)',
      'Observability stack: logging, metrics, tracing with OpenTelemetry',
      'Cloud cost optimization and FinOps integration',
      'Team training and knowledge transfer program'
    ],
    benefits: [
      'Scale applications elastically with 99.95%+ uptime',
      'Deploy 10x faster with automated CI/CD pipelines',
      'Reduce infrastructure costs by 30-50%',
      'Improve developer productivity and deployment frequency'
    ],
    pricing: { Starter: '$14,999/project', Professional: '$49,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-ai-readiness-2',
    title: 'AI Readiness Assessment & Strategy Consulting',
    subtitle: 'Comprehensive AI maturity assessment and enterprise AI adoption roadmap',
    category: 'consulting',
    subcategory: 'AI Strategy',
    description: 'Assess your organization\'s readiness for AI adoption across data infrastructure, talent, processes, and culture. Delivers a prioritized AI roadmap with ROI projections, risk assessment, and governance frameworks tailored to your industry.',
    features: [
      'AI maturity assessment across 6 organizational dimensions',
      'Data infrastructure readiness and gap analysis',
      'AI use case identification and business case development',
      'Risk and ethical AI framework design',
      'Talent gap analysis and upskilling roadmap',
      'Vendor evaluation and technology stack recommendation',
      'Phased AI adoption roadmap with quick-win identification',
      'AI governance and responsible AI policy development'
    ],
    benefits: [
      'Prioritize AI investments with highest ROI potential',
      'Avoid costly mistakes with proven adoption frameworks',
      'Build internal AI competency for long-term success',
      'Navigate ethical and regulatory AI requirements confidently'
    ],
    pricing: { Starter: '$9,999/project', Professional: '$29,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },

// ── 4 new IT Consulting Services ──
  {
    id: 'consult-risk-2',
    title: 'Enterprise Risk Management Consulting',
    subtitle: 'Holistic enterprise risk identification, quantification, and mitigation strategy',
    category: 'consulting',
    subcategory: 'Risk Management',
    description: 'Comprehensive enterprise risk management — identify, quantify, and mitigate strategic, operational, financial, and cyber risks across your organization with integrated risk frameworks.',
    features: [
      'Enterprise risk register development and maintenance',
      'Quantitative risk modeling and Monte Carlo simulation',
      'Scenario analysis and stress testing',
      'Risk appetite and tolerance framework design',
      'Third-party and supply chain risk assessment',
      'Integrated risk reporting for boards and regulators',
      'Business continuity and crisis management planning',
      'Regulatory risk mapping and horizon scanning'
    ],
    benefits: [
      'Reduce enterprise risk exposure by 40-60%',
      'Proactive risk identification prevents costly incidents',
      'Meet board and regulatory risk reporting requirements',
      'Build organizational resilience against disruptions'
    ],
    pricing: { Starter: '$9,999/project', Professional: '$29,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-mlops-2',
    title: 'MLOps & AI Production Consulting',
    subtitle: 'Production-grade ML operations — from model training to deployment, monitoring, and governance',
    category: 'consulting',
    subcategory: 'MLOps',
    description: 'Expert consulting to build production-ready ML systems — covering model deployment, monitoring, retraining, feature stores, and ML governance for reliable, scalable AI.',
    features: [
      'MLOps architecture design and platform selection',
      'CI/CD pipelines for ML models (model versioning, testing)',
      'Feature engineering and feature store implementation',
      'Model monitoring (drift detection, performance degradation)',
      'A/B testing framework for ML model comparison',
      'ML governance and model risk management',
      'Automated retraining and model lifecycle management',
      'Kubeflow, MLflow, or Vertex AI implementation'
    ],
    benefits: [
      'Deploy ML models to production 5x faster',
      'Maintain model accuracy with automated drift detection',
      'Reduce ML infrastructure costs by 40%',
      'Governance and auditability for regulated industries'
    ],
    pricing: { Starter: '$9,999/project', Professional: '$29,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-devsecops-2',
    title: 'DevSecOps Transformation Consulting',
    subtitle: 'Embed security into every phase of your software delivery lifecycle',
    category: 'consulting',
    subcategory: 'Security Transformation',
    description: 'Transform your development and security practices with DevSecOps — shifting security left with automated testing, compliance-as-code, and security culture transformation.',
    features: [
      'DevSecOps maturity assessment and roadmap',
      'SAST/DAST/SCA toolchain design and implementation',
      'Security training and champion network setup',
      'Compliance-as-code policy development',
      'Container and Kubernetes security hardening',
      'Secrets management and rotation implementation',
      'Threat modeling as a service',
      'Executive security dashboard and metrics'
    ],
    benefits: [
      'Reduce security incidents by 70%',
      'Ship secure software 3x faster',
      'Meet compliance requirements without slowing delivery',
      'Build a self-sustaining security culture'
    ],
    pricing: { Starter: '$9,999/project', Professional: '$29,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
  {
    id: 'consult-metaverse-1',
    title: 'Metaverse & Spatial Computing Strategy',
    subtitle: 'Navigate the future of spatial computing — VR/AR, digital twins, and immersive experiences',
    category: 'consulting',
    subcategory: 'Spatial Computing',
    description: 'Strategic consulting for metaverse and spatial computing adoption — from VR/AR experiences and digital twins to immersive training and virtual collaboration platforms.',
    features: [
      'Metaverse readiness and use case assessment',
      'VR/AR experience design and architecture',
      'Digital twin creation for facilities and products',
      'Spatial computing platform selection (Unity, Unreal, WebXR)',
      'Immersive training program design',
      'Virtual collaboration and meeting space implementation',
      '3D asset pipeline and content strategy',
      'Hardware and device strategy'
    ],
    benefits: [
      'Identify $5M+ spatial computing opportunities',
      'Reduce training costs by 60% with immersive VR',
      'Differentiate your brand with immersive customer experiences',
      'Future-proof your digital strategy for spatial web'
    ],
    pricing: { Starter: '$12,999/project', Professional: '$39,999/project', Enterprise: 'Custom' },
    contactUrl: '/contact'
  },
];

// ═══════════════════════════════════════════════════════
// COMBINED EXPORT
// ═══════════════════════════════════════════════════════

export const allServices: Service[] = [
  ...aiServices,
  ...itServices,
  ...saasSolutions,
  ...consultingServices,
];

// Category metadata for navigation and filtering
export const categoryMeta = {
  ai: { label: 'AI Services', icon: 'brain-circuit', count: aiServices.length },
  it: { label: 'IT Services', icon: 'server-cog', count: itServices.length },
  saas: { label: 'Micro SAAS Solutions', icon: 'rocket', count: saasSolutions.length },
  consulting: { label: 'IT Consulting', icon: 'briefcase-badge', count: consultingServices.length },
};