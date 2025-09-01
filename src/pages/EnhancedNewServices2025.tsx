import { Link } from 'react - router - dom.ts';
import React from 'react.ts';
export function EnhancedNewServices2025 (...args: any[]) : any {

import {

import { motion } from 'framer - motion.ts';

  Brain,
  Atom,
  Shield,
  Cloud,
  Rocket,
  BarChart3,
  Heart,
  Users,
  Target,
  TrendingUp,
  Eye,
  Activity,
  Satellite,
  Leaf,
  Lock,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Server,
  Smartphone,
  Watch,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Building2,
  Factory,
  Warehouse,
  Truck,
  Bank,
  Insurance,
  Law,
  Gavel,
  GraduationCap,
  BookOpen,
  TestTube,
  Pill,
  Stethoscope,
  Calculator,
  Microscope,
  Telescope,
  Palette,
  Code,
  FileText,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Navigation,
  Search,
  Filter,
  Sort,
  Download,
  Upload,
  Share,
  Link as LinkIcon,
  Copy,
  Edit,
  Trash,
  Save,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  Settings,
  User,
  LogOut,
  LogIn,
  UserPlus,
  UserMinus,
  Key,
  Unlock,
  EyeOff,
  RefreshCw,
  RotateCcw,
  Power,
  PowerOff,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume,
  VolumeX,
  Volume1,
  Volume2,
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  Image,
  File,
  Folder,
  HardDrive,
  MemoryStick,
  Usb,
  Cable,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  Plug,
  Charging,
  Flash,
  Thunder,
  Rain,
  Snow,
  Cloud as CloudIcon,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Moon,
  Sunrise,
  Sunset,
  Star as StarIcon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Omega,
  Theta,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Phone,
  Mail,
  MapPin,
  Package} from 'lucide - react.ts';

  const newServices = [
    {

      id: 'agent - ops - monitor',
      title: 'AgentOps Reliability Monitor',
      description:
        'Production monitoring for AI agents. Detect tool - call failures, long - running chains, and hallucination spikes. Alert to Slack, auto - open Jira with traces.',
      icon: Brain,
      color: 'from - cyan - 600 to - blue - 700',
      price: '$99 / month',
      category: 'AI Quality & Monitoring',
      features: [
        'Latency, error and hallucination tracking',
        'Workflow heatmaps and slow - step detection',
        'PII guardrail violations dashboard',
        'Slack / PagerDuty alerts with deep links',
        'Jira / Linear ticket auto - creation',
      ],
      benefits: [
        'Reduce AI agent failures by 30–60%',
        'Real - time monitoring and alerting',
        'Automated incident response',
        'Comprehensive audit trails',
        'Integration with existing tools',
      ],
      useCases: [
        'AI platform teams',
        'Product development',
        'Quality assurance',
        'Operations monitoring',
        'Compliance management',
      ],
      marketPrice: '$500 - $2,000 / month',
      roi: '300 - 500%',
      launchDate: 'Q1 2025',
      technology: ['Next.js', 'OpenTelemetry', 'Postgres', 'Redis'],
      integrations: ['Slack', 'PagerDuty', 'Jira', 'Linear'],
      competitors: ['Langfuse', 'Arize', 'WhyLabs'],
      marketSize: '$3B AI Observability',
      growthRate: 'High'},
    {

      id: 'pii - privacy - scanner',
      title: 'Data Lake PII & Privacy Scanner',
      description:
        'Scan object stores and warehouses for PII / PHI with classifiers and regex + ML. Map owners, file tickets, and track remediation SLAs.',
      icon: Shield,
      color: 'from - rose - 600 to - orange - 700',
      price: '$149 / month',
      category: 'Security & Compliance',
      features: [
        'Prebuilt PII detectors (SSN, CCN, PHI) ',
        'Custom rules and dictionaries',
        'Owners and data lineage lookups',
        'Remediation tickets and SLA tracking',
        'Compliance export packs',
      ],
      benefits: [
        'Cut privacy review time by 50–70%',
        'Automated compliance monitoring',
        'Real - time PII detection',
        'Comprehensive audit trails',
        'Regulatory compliance assurance',
      ],
      useCases: [
        'Data engineering teams',
        'Security compliance',
        'GDPR / CCPA compliance',
        'Data governance',
        'Risk management',
      ],
      marketPrice: '$300 - $1,500 / month',
      roi: '250 - 400%',
      launchDate: 'Q1 2025',
      technology: ['Node.js', 'Python', 'Snowflake', 'S3'],
      integrations: ['AWS', 'GCP', 'Snowflake', 'BigQuery', 'Jira'],
      competitors: ['BigID', 'OneTrust'],
      marketSize: '$8B Data Privacy',
      growthRate: 'High'},
    {

      id: 'vector - db - benchmark',
      title: 'Vector DB Benchmark & Tuning',
      description:
        'Benchmark Pinecone, Weaviate, Qdrant or pgvector using your corpus. Get query plans, ANN configs and recall / latency trade - offs with recommendations.',
      icon: Database,
      color: 'from - emerald - 600 to - teal - 700',
      price: '$79 / month',
      category: 'AI & Data',
      features: [
        'Corpus sampling and ground - truth evals',
        'Latency / recall trade - off explorer',
        'ANN / hnsw / ivf config generator',
        'Cost projection by provider',
        'One - click config export',
      ],
      benefits: [
        'Improve recall 10–30% with same budget',
        'Optimized vector database performance',
        'Cost - effective solution selection',
        'Data - driven configuration',
        'Performance benchmarking',
      ],
      useCases: [
        'Search and platform teams',
        'RAG optimization',
        'Cost optimization',
        'Performance tuning',
        'Technology selection',
      ],
      marketPrice: '$200 - $1,000 / month',
      roi: '200 - 350%',
      launchDate: 'Q1 2025',
      technology: ['Typescript', 'Docker', 'Python'],
      integrations: ['Pinecone', 'Weaviate', 'Qdrant', 'Postgres'],
      competitors: ['Self - built harnesses'],
      marketSize: '$1B Vector DB Tools',
      growthRate: 'Strong'},
    {

      id: 'llm - prompt - safety - scanner',
      title: 'LLM Prompt Safety Scanner',
      description:
        'Scan prompts, tools and context windows for injection vectors. Generate red - team prompts and propose mitigations with policy diffs.',
      icon: Lock,
      color: 'from - purple - 600 to - pink - 700',
      price: '$59 / month',
      category: 'AI Security',
      features: [
        'Prompt injection pattern library',
        'Content policy diffing',
        'Automatic test corpus generation',
        'CI / CD gate with pass / fail',
        'Report exports for security review',
      ],
      benefits: [
        'Reduce safety incidents 40%',
        'Shift - left AI safety testing',
        'Automated security validation',
        'Comprehensive threat detection',
        'Developer - friendly security',
      ],
      useCases: [
        'AppSec and platform teams',
        'Pre - prod safety testing',
        'Policy hardening',
        'Regulatory readiness',
        'Security compliance',
      ],
      marketPrice: '$150 - $800 / month',
      roi: '200 - 300%',
      launchDate: 'Q1 2025',
      technology: ['Node.js', 'OpenAI', 'Anthropic'],
      integrations: ['GitHub', 'GitLab', 'Jenkins', 'Vercel'],
      competitors: ['Promptfoo', 'Guardrails libraries'],
      marketSize: '$1B AI Safety',
      growthRate: 'Emerging'},
    {

      id: 'rfp - auto - responder',
      title: 'RFP Auto - Responder',
      description:
        'Upload RFP PDFs, map to knowledge base, and generate answers with citations and policy references. Export clean DOCX / Google Docs.',
      icon: FileText,
      color: 'from - blue - 600 to - indigo - 700',
      price: '$129 / month',
      category: 'AI & Business',
      features: [
        'Document parsing and mapping',
        'Policy / KB grounding with citations',
        'Gaps highlighting and follow - ups',
        'Export to DOCX / Google Docs',
        'Collaborative review modes',
      ],
      benefits: [
        'Cut response time 60–80%',
        'Automated RFP processing',
        'Consistent response quality',
        'Knowledge base integration',
        'Collaborative workflow',
      ],
      useCases: [
        'Sales engineering teams',
        'RFP responses',
        'Security questionnaires',
        'Due diligence',
        'Compliance documentation',
      ],
      marketPrice: '$400 - $2,000 / month',
      roi: '300 - 500%',
      launchDate: 'Q1 2025',
      technology: ['Next.js', 'OpenAI', 'Pinecone'],
      integrations: ['Google Drive', 'Confluence', 'Notion'],
      competitors: ['Loopio', 'Responsive'],
      marketSize: '$2B RFP Tech',
      growthRate: 'Strong'},
    {

      id: 'ai - red - team - simulator',
      title: 'AI Red Team Simulator',
      description:
        'Continuously attack your AI stack with curated jailbreak prompts and tool abuse scenarios. Track regressions, export reports for auditors.',
      icon: Shield,
      color: 'from - amber - 600 to - red - 700',
      price: '$199 / month',
      category: 'AI Security',
      features: [
        'Curated jailbreak corpora',
        'Tool - abuse and exfiltration scenarios',
        'Scoring and trend reports',
        'CI / CD gating and webhooks',
        'Auditor - friendly exports',
      ],
      benefits: [
        'Reduce time - to - fix 30%',
        'Continuous security testing',
        'Automated threat simulation',
        'Comprehensive risk assessment',
        'Audit compliance',
      ],
      useCases: [
        'Security teams',
        'Platform security',
        'Risk assessment',
        'Compliance auditing',
        'Security training',
      ],
      marketPrice: '$500 - $3,000 / month',
      roi: '250 - 400%',
      launchDate: 'Q1 2025',
      technology: ['Node.js', 'Docker', 'OpenAI'],
      integrations: ['GitHub', 'GitLab', 'Jenkins'],
      competitors: ['External red team services'],
      marketSize: '$1B AI Security',
      growthRate: 'High'},
    {

      id: 'speech - analytics - center',
      title: 'Contact Center Speech Analytics',
      description:
        'Ingest call recordings or live streams, transcribe, detect topics and sentiment, and score QA with dashboards. Coach agents with snippets.',
      icon: Mic,
      color: 'from - indigo - 600 to - violet - 700',
      price: '$179 / month',
      category: 'Customer Support & Success',
      features: [
        'Accurate transcription with diarization',
        'Sentiment and topic mining',
        'QA auto - scoring and calibration',
        'Coaching snippets and playbooks',
        'PII redaction and access controls',
      ],
      benefits: [
        'Improve CSAT and AHT 10–20%',
        'Automated quality assurance',
        'Real - time insights',
        'Agent performance improvement',
        'Compliance and privacy',
      ],
      useCases: [
        'Contact centers',
        'Customer support',
        'Sales teams',
        'Quality assurance',
        'Training and coaching',
      ],
      marketPrice: '$300 - $2,000 / month',
      roi: '200 - 350%',
      launchDate: 'Q1 2025',
      technology: ['Whisper', 'VAD', 'Next.js'],
      integrations: ['Twilio', 'Amazon Connect', 'Five9'],
      competitors: ['Gong', 'Chorus', 'Observe.AI'],
      marketSize: '$6B Speech Analytics',
      growthRate: 'High'},
    {

      id: 'synthetic - data - studio',
      title: 'Synthetic Data Studio',
      description:
        'Create class - balanced datasets with differentially private generators. Export to parquet / CSV and seed sandboxes for testing.',
      icon: TestTube,
      color: 'from - teal - 600 to - emerald - 700',
      price: '$199 / month',
      category: 'AI & Data',
      features: [
        'DP and k - anonymity options',
        'Imbalance correction and sampling',
        'Drift detection on synthetic sets',
        'Row / column level lineage',
        'Governed export with approvals',
      ],
      benefits: [
        'Reduce manual data prep 50%',
        'Privacy - safe data generation',
        'Balanced datasets',
        'Compliance assurance',
        'Testing and development',
      ],
      useCases: [
        'Data science teams',
        'ML platform development',
        'Privacy - safe analytics',
        'Model testing',
        'Research and development',
      ],
      marketPrice: '$400 - $2,500 / month',
      roi: '200 - 400%',
      launchDate: 'Q1 2025',
      technology: ['Python', 'JAX / PyTorch', 'Postgres'],
      integrations: ['S3', 'GCS', 'Snowflake'],
      competitors: ['Gretel.ai', 'Mostly AI'],
      marketSize: '$2B Synthetic Data',
      growthRate: 'High'},
    {

      id: 'feature - store - starter',
      title: 'Feature Store Starter',
      description:
        'Bootstrap an offline + online feature store with transformations, point - in - time joins and approvals. Ship faster with templates.',
      icon: Database,
      color: 'from - amber - 600 to - yellow - 700',
      price: '$99 / month',
      category: 'AI & Data',
      features: [
        'Point - in - time correctness',
        'Transformation registry',
        'Approval workflows',
        'Lineage and ownership',
        'Rollbacks and versioning',
      ],
      benefits: [
        'Accelerate feature shipping 2×',
        'Governed feature management',
        'Real - time feature serving',
        'Comprehensive lineage tracking',
        'Production - ready templates',
      ],
      useCases: [
        'ML platform teams',
        'Feature engineering',
        'Real - time ML',
        'Model serving',
        'Data governance',
      ],
      marketPrice: '$500 - $3,000 / month',
      roi: '300 - 500%',
      launchDate: 'Q1 2025',
      technology: ['Kafka', 'Postgres', 'Redis'],
      integrations: ['dbt', 'Airflow', 'Spark'],
      competitors: ['Feast', 'Tecton (enterprise) '],
      marketSize: '$1B Feature Platforms',
      growthRate: 'Growing'},
    {

      id: 'model - registry - lite',
      title: 'Model Registry Lite',
      description:
        'Lightweight model registry with artifacts, metrics and stage transitions. Webhooks to CI for canary rollouts.',
      icon: Package,
      color: 'from - sky - 600 to - cyan - 700',
      price: '$79 / month',
      category: 'AI & Data',
      features: [
        'Artifacts and signatures',
        'Metrics and evals',
        'Stage transitions and approvals',
        'RBAC and audit logs',
        'Webhooks and rollback',
      ],
      benefits: [
        'Reduce release risk 20–40%',
        'Governed model deployment',
        'Automated workflows',
        'Comprehensive tracking',
        'Production safety',
      ],
      useCases: [
        'ML platform teams',
        'Model governance',
        'Deployment management',
        'Compliance tracking',
        'Risk management',
      ],
      marketPrice: '$300 - $2,000 / month',
      roi: '250 - 400%',
      launchDate: 'Q1 2025',
      technology: ['S3', 'Postgres', 'Next.js'],
      integrations: ['MLflow', 'Weights & Biases', 'Arize'],
      competitors: ['MLflow (self - hosted) '],
      marketSize: '$1B MLOps',
      growthRate: 'High'},
    {

      id: 'data - quality - monitoring',
      title: 'Data Quality Monitoring',
      description:
        'Monitor tables, streams and ML features for freshness, volume and validity. Alert owners and auto - create issues with owners preset.',
      icon: Activity,
      color: 'from - lime - 600 to - green - 700',
      price: '$129 / month',
      category: 'Data Observability',
      features: [
        'Freshness and volume checks',
        'Anomaly detection on metrics',
        'Schema drift notifications',
        'Ownership and runbooks',
        'Incident export and trends',
      ],
      benefits: [
        'Reduce incidents and firefighting 30%',
        'Proactive data quality monitoring',
        'Automated alerting',
        'Ownership accountability',
        'Incident prevention',
      ],
      useCases: [
        'Data engineering teams',
        'Analytics reliability',
        'ML pipeline health',
        'Data governance',
        'Operational excellence',
      ],
      marketPrice: '$400 - $2,500 / month',
      roi: '250 - 400%',
      launchDate: 'Q1 2025',
      technology: ['dbt', 'Airflow', 'OpenTelemetry'],
      integrations: ['Snowflake', 'BigQuery', 'Redshift'],
      competitors: ['Monte Carlo', 'Bigeye'],
      marketSize: '$2B Data Reliability',
      growthRate: 'High'},
    {

      id: 'privacy - request - automation',
      title: 'Privacy Request Automation',
      description:
        'Automate data subject access requests across SaaS and data stores. Identity verification, redact / export, and audit - ready logs.',
      icon: FileText,
      color: 'from - fuchsia - 600 to - pink - 700',
      price: '$89 / month',
      category: 'Security & Compliance',
      features: [
        'Identity verification and portals',
        'Connector library for SaaS and data',
        'Redaction and export pipelines',
        'Approvals and audit logs',
        'SLA tracking and escalations',
      ],
      benefits: [
        'Reduce manual work 70%',
        'Automated compliance workflows',
        'Real - time request processing',
        'Comprehensive audit trails',
        'Regulatory compliance',
      ],
      useCases: [
        'Legal and compliance teams',
        'Data privacy operations',
        'DSAR automation',
        'Regulatory compliance',
        'Data governance',
      ],
      marketPrice: '$300 - $2,000 / month',
      roi: '200 - 350%',
      launchDate: 'Q1 2025',
      technology: ['Node.js', 'Workers', 'Queues'],
      integrations: ['Google Workspace', 'Salesforce', 'HubSpot'],
      competitors: ['Transcend', 'OneTrust'],
      marketSize: '$4B Privacy Ops',
      growthRate: 'High'},
    {

      id: 'customer - 360 - cdp - starter',
      title: 'Customer 360 CDP Starter',
      description:
        'Ingest web / app events, stitch identities, and build segments for activation with basic RT engagement dashboards.',
      icon: Users,
      color: 'from - cyan - 600 to - sky - 700',
      price: '$149 / month',
      category: 'AI & Data',
      features: [
        'Event schema and SDKs',
        'Identity stitching and dedupe',
        'Segments and audiences',
        'Warehouse sync and reverse ETL',
        'Consent and governance basics',
      ],
      benefits: [
        'Increase conversion 5–15%',
        'Unified customer view',
        'Real - time segmentation',
        'Data - driven marketing',
        'Privacy compliance',
      ],
      useCases: [
        'Growth and data teams',
        'Customer personalization',
        'Lifecycle marketing',
        'Attribution analysis',
        'Customer insights',
      ],
      marketPrice: '$500 - $3,000 / month',
      roi: '200 - 400%',
      launchDate: 'Q1 2025',
      technology: ['Next.js', 'Kafka', 'Snowflake'],
      integrations: ['Segment', 'RudderStack', 'HubSpot'],
      competitors: ['Twilio Segment', 'mParticle'],
      marketSize: '$5B CDP',
      growthRate: 'High'},
    {

      id: 'ab - testing - lab',
      title: 'A / B Testing Lab',
      description:
        'Run experiments with CUPED / Sequential testing, guardrail metrics and sample ratio checks. SDKs for web and backend.',
      icon: TestTube,
      color: 'from - pink - 600 to - rose - 700',
      price: '$89 / month',
      category: 'Developer Tools',
      features: [
        'Bucketing and targeting',
        'CUPED / Sequential methods',
        'Guardrails and SRM detection',
        'Feature flags and killswitches',
        'Dashboards and exports',
      ],
      benefits: [
        'Ship safer and faster',
        'Data - driven decisions',
        'Risk mitigation',
        'Performance optimization',
        'Statistical rigor',
      ],
      useCases: [
        'Product and growth teams',
        'Feature rollout',
        'Experimentation',
        'Performance optimization',
        'Risk management',
      ],
      marketPrice: '$300 - $2,000 / month',
      roi: '200 - 350%',
      launchDate: 'Q1 2025',
      technology: ['Typescript', 'Postgres', 'ClickHouse'],
      integrations: ['Segment', 'RudderStack', 'Snowplow'],
      competitors: ['Optimizely', 'VWO'],
      marketSize: '$2B Experimentation',
      growthRate: 'Strong'},
  ];

  const categories = [...new Set (newServices.map (service => service.category) ) ];

  return (<div className="min - h-screen py - 8">
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">
        {/* Page Header */}
        <div className="text - center mb - 16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text - 5xl font - bold text - white mb - 6">
              Revolutionary New Services 2025
            </h1>
            <p className="text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed mb - 8">
              Discover our cutting - edge micro SAAS services, AI - powered
              platforms, and emerging technology solutions. Each service is
              designed with proven ROI, market - leading capabilities, and
              real - world implementation.
            </p>
            <div className="flex flex - wrap justify - center gap - 4">
              {categories.map ( (category, index) => (<motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px - 4 py - 2 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 border border - cyan - 500 / 30 rounded - full text - cyan - 400 font - medium"
                >
                  {category}
                </motion.div>) ) }
            </div>
          </motion.div>
        </div>

        {/* Services Grid by Category */}
        {categories.map ( (category, categoryIndex) => (<div key={category} className="mb - 16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text - center mb - 12"
            >
              <h2 className="text - 3xl font - bold text - white mb - 4">{category}</h2>
              <div className="w - 24 h - 1 bg - gradient - to - r from - cyan - 500 to - blue - 500 mx - auto"></div>
            </motion.div>

            <div className="grid grid - cols - 1 md: anygrid - cols - 2 lg:grid - cols - 3 gap - 8">
              {newServices
                .filter (service => service.category === category) .map ( (service, index) => (<motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg - gray - 800 rounded - xl p - 8 hover:bg - gray - 700 transition - all duration - 300 border border - gray - 700 hover:border - cyan - 500 / 30 group"
                  >
                    {/* Service Header */}
                    <div className="flex items - center space - x-4 mb - 6">
                      <div
                        className={`w - 16 h - 16 bg - gradient - to - r ${service.color} rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300`}
                      >
                        <service.icon className="w - 8 h - 8 text - white" />
                      </div>
                      <div>
                        <h3 className="text - xl font - bold text - white">
                          {service.title}
                        </h3>
                        <div className="flex items - center space - x-2 mt - 1">
                          <span className="text - cyan - 400 font - bold text - lg">
                            {service.price}
                          </span>
                          {service.popular && (<span className="px - 2 py - 1 bg - yellow - 500 / 20 text - yellow - 400 text - xs rounded - full border border - yellow - 500 / 30">
                              Popular
                            </span>) }
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text - gray - 400 mb - 6 leading - relaxed">
                      {service.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid - cols - 2 gap - 4 mb - 6">
                      <div className="text - center p - 3 bg - gray - 700 / 50 rounded - lg">
                        <div className="text - cyan - 400 font - bold text - sm">
                          Market Price
                        </div>
                        <div className="text - white text - xs">
                          {service.marketPrice}
                        </div>
                      </div>
                      <div className="text - center p - 3 bg - gray - 700 / 50 rounded - lg">
                        <div className="text - green - 400 font - bold text - sm">
                          ROI
                        </div>
                        <div className="text - white text - xs">{service.roi}</div>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="space - y-2 mb - 6">
                      {service.features
                        .slice (0, 3) .map ( (feature, featureIndex) => (<div
                            key={featureIndex}
                            className="flex items - center space - x-2 text - sm text - gray - 300"
                          >
                            <CheckCircle className="w - 4 h - 4 text - cyan - 400" />
                            <span>{feature}</span>
                          </div>) ) }
                      {service.features.length > 3 && (<div className="text - sm text - gray - 500 text - center">
                          +{service.features.length - 3} more features
                        </div>) }
                    </div>

                    {/* Technology Stack */}
                    <div className="mb - 6">
                      <div className="text - sm text - gray - 400 mb - 2">
                        Technology Stack:
                      </div>
                      <div className="flex flex - wrap gap - 2">
                        {service.technology
                          .slice (0, 3) .map ( (tech, techIndex) => (<span
                              key={techIndex}
                              className="px - 2 py - 1 bg - gray - 700 text - gray - 300 text - xs rounded border border - gray - 600"
                            >
                              {tech}
                            </span>) ) }
                        {service.technology.length > 3 && (<span className="px - 2 py - 1 bg - gray - 700 text - gray - 500 text - xs rounded border border - gray - 600">
                            +{service.technology.length - 3} more
                          </span>) }
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb - 6 p - 4 bg - gray - 700 / 50 rounded - lg">
                      <div className="grid grid - cols - 2 gap - 4 text - xs">
                        <div>
                          <div className="text - gray - 400">Market Size</div>
                          <div className="text - white font - medium">
                            {service.marketSize}
                          </div>
                        </div>
                        <div>
                          <div className="text - gray - 400">Growth</div>
                          <div className="text - white font - medium">
                            {service.growthRate}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space - y-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="block w - full text - center bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 4 py - 3 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 transform hover:scale - 105"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="block w - full text - center bg - transparent text - cyan - 400 px - 4 py - 3 rounded - lg font - semibold border border - cyan - 400 hover:bg - cyan - 400 / 10 transition - colors"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </motion.div>) ) }
            </div>
          </div>) ) }

        {/* CTA Section */}
        <div className="text - center mt - 16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - 2xl p - 12"
          >
            <h2 className="text - 3xl font - bold text - white mb - 4">
              Ready to Transform Your Business?
            </h2>
            <p className="text - xl text - purple - 100 mb - 8 max - w-2xl mx - auto">
              Our revolutionary new services are designed to give you a
              competitive edge in 2025. Get started with a free consultation and
              discover how we can accelerate your digital transformation.
            </p>

            <div className="flex flex - col sm:flex - row gap - 4 justify - center">
              <Link
                to="/contact"
                className="inline - flex items - center space - x-2 px - 8 py - 4 bg - white text - purple - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 200 font - semibold text - lg shadow - lg hover:shadow - xl transform hover:scale - 105"
              >
                <span > Get Started Today</span>
                <ArrowRight className="w - 5 h - 5" />
              </Link>
              <Link
                to="/request - quote"
                className="inline - flex items - center space - x-2 px - 8 py - 4 bg - transparent text - white rounded - lg hover:bg - white / 10 transition - all duration - 200 font - semibold text - lg border - 2 border - white"
              >
                <span > Request a Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <div className="text - center mt - 16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg - gray - 800 rounded - 2xl p - 8 border border - gray - 700"
          >
            <h3 className="text - 2xl font - bold text - white mb - 6">Get in Touch</h3>
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">
              <div className="flex items - center justify - center space - x-3 text - gray - 300">
                <Phone className="w - 5 h - 5 text - cyan - 400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items - center justify - center space - x-3 text - gray - 300">
                <Mail className="w - 5 h - 5 text - cyan - 400" />
                <span > kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items - center justify - center space - x-3 text - gray - 300">
                <MapPin className="w - 5 h - 5 text - cyan - 400" />
                <span > 364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt - 6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline - flex items - center space - x-2 text - cyan - 400 hover:text - cyan - 300 transition - colors"
              >
                <Globe className="w - 5 h - 5" />
                <span > Visit our website</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>) ;
}
