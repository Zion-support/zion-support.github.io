export type ServiceItem = { "id": "string, "title": string, "description": string, "category": 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems', "price": string, "billing": 'month' | 'project' | 'hour', "features": string[], "ctaLabel": string, "href": string, external?: boolean"}, export type ServiceCategory = { "name": 'string, "slug": "string, "items": ServiceItem[],' "}, export const "servicesCatalog": "ServiceCategory[] = [, { "name": 'Micro SaaS'","slug": 'micro-saas',"items": "[ { "id": 'smart-contract-risk-scanner'","title": 'Smart Contract Risk Scanner',"description": 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',"category": 'Micro SaaS',"price": '$299',"billing": 'month',"features": "[ 'Real-time vulnerability detection'",'Automated security scoringCompliance reporting','Integration with major blockchains24/7 monitoring dashboard' ],"ctaLabel": 'Start Free Trial',"href": '"https": "}",{ "id": 'ai-content-optimizer',"title": 'AI Content Optimizer Pro',"description": 'Advanced content optimization using AI to improve SEO,readability,and engagement across all digital platforms.',"category": 'Micro SaaS',"price": '$199',"billing": 'month',"features": "[ 'AI-powered SEO optimization'",'Content readability scoringMulti-language support','Performance analyticsAutomated A/B testing' ],"ctaLabel": 'Get Started',"href": '"https": "} ] "},{ "name": 'AI Solutions',"slug": 'ai-solutions',"items": "[ { "id": 'autonomous-business-manager'","title": 'Autonomous Business Manager',"description": 'AI-powered business management system that autonomously handles operations,decision-making,and strategic planning.',"category": 'AI Solutions',"price": '$2,999',"billing": 'month',"features": "[ 'Autonomous decision making'",'Predictive business modelingResource optimization','Risk assessmentContinuous learning' ],"ctaLabel": 'Request Demo',"href": '"https": "}",{ "id": 'consciousness-simulation-platform',"title": 'Consciousness Simulation Platform',"description": 'Advanced AI platform for simulating and understanding consciousness,enabling breakthrough research in cognitive science.',"category": 'AI Solutions',"price": '$5,999',"billing": 'month',"features": "[ 'Neural network simulation'",'Consciousness modelingResearch tools','Data visualizationCollaborative workspace' ],"ctaLabel": 'Research Access',"href": '"https": "}",{ "id": 'quantum-neural-network',"title": 'Quantum Neural Network Platform',"description": 'Revolutionary platform combining quantum computing with neural networks for unprecedented AI capabilities.',"category": 'AI Solutions',"price": '$8,999',"billing": 'month',"features": "[ 'Quantum neural processing'",'Hybrid classical-quantumAdvanced training algorithms','Quantum advantageResearch collaboration' ],"ctaLabel": 'Quantum Access',"href": '"https": "}",{ "id": 'ai-autonomous-vehicles',"title": 'AI Autonomous Vehicle Platform',"description": 'Complete autonomous vehicle management system with AI-driven navigation,safety,and fleet optimization.',"category": 'AI Solutions',"price": '$4,999',"billing": 'month',"features": "[ 'Autonomous navigation'",'Safety monitoringFleet management','Predictive maintenanceRegulatory compliance' ],"ctaLabel": 'Vehicle Integration',"href": '"https": "}",{ "id": 'enterprise-rag-search',"title": 'Enterprise RAG Search Platform',"description": 'Private,secure Retrieval-Augmented Generation over your docs,wikis,tickets,and data.',"category": 'AI Solutions',"price": '$3,499',"billing": 'month',"features": "[ 'Hybrid vector + keyword search'",'PII redaction and access controlGrounding citations','"Plugins": 'Confluence',Google Drive,SharePointOn-prem or VPC deployment' ],"ctaLabel": 'Launch Secure Chat',"href": '"https": "}",{ "id": 'agentic-copilot-suite',"title": 'Agentic Copilot Suite (Sales,Support,DevOps)',"description": 'Task-driven AI agents that execute workflows across CRM,ticketing,CI/CD,and cloud.',"category": 'AI Solutions',"price": '$4,999',"billing": 'month',"features": "[ 'Guardrailed tool use'",'Human-in-the-loop approvalsObservability and audit trails','"Connectors": 'Salesforce',Zendesk,GitHub,AWSOkta and SSO ready' ],"ctaLabel": 'Deploy Copilots',"href": '"https": "}",{ "id": 'quantum-consciousness-simulation-2030',"title": 'Quantum Consciousness Simulation Platform 2030',"description": 'Revolutionary quantum computing platform that simulates human consciousness,enabling breakthrough research in cognitive science,psychology,and artificial general intelligence.',"category": 'AI Solutions',"price": '$25,000',"billing": 'month',"features": "[ 'Quantum neural network simulation'",'Consciousness modeling algorithmsReal-time cognitive state analysis','Multi-dimensional consciousness mappingQuantum memory and learning systems','Consciousness transfer protocolsAdvanced research tools and APIs','Collaborative research workspaceReal-time visualization and analytics','Quantum-classical hybrid processing' ],"ctaLabel": 'Research Access',"href": '"https": "}",{ "id": 'autonomous-healthcare-diagnostics-2026',"title": 'Autonomous Healthcare Diagnostics Platform 2026',"description": 'AI-powered autonomous healthcare diagnostics platform that provides real-time medical imaging analysis,disease prediction,and treatment recommendations with FDA approval and HIPAA compliance.',"category": 'AI Solutions',"price": '$7,999',"billing": 'month',"features": "[ 'AI-powered medical imaging analysis'",'Real-time disease detection and classificationPredictive health analytics','Automated radiology reportingTreatment recommendation engine','Patient risk assessmentClinical decision support','HIPAA-compliant data handlingFDA-approved algorithms','Multi-modality imaging support' ],"ctaLabel": 'Healthcare Integration',"href": '"https": "}",{ "id": 'quantum-creative-ai-studio-2026',"title": 'Quantum Creative AI Studio 2026',"description": 'Revolutionary quantum-powered creative AI platform that generates high-quality content,designs,and creative assets with unprecedented creativity and originality.',"category": 'AI Solutions',"price": '$3,999',"billing": 'month',"features": "[ 'Quantum-powered content generation'",'AI-driven design creationMulti-format content generation','Brand consistency automationCreative asset optimization','Real-time collaboration toolsVersion control and management','Performance analyticsMobile app for creators','API integration capabilities' ],"ctaLabel": 'Creative Access',"href": '"https": "}",{ "id": 'synthetic-data-generator',"title": 'Synthetic Data Generator',"description": 'Privacy-safe synthetic data for analytics,testing,and ML with differential privacy.',"category": 'AI Solutions',"price": '$119',"billing": 'month',"features": "[ 'DP and PII masking'",'Tabular/time-series/text modesUtility and drift reports','SDKs and REST APIWarehouse integrations' ],"ctaLabel": 'Generate Data',"href": '"https": "}",{ "id": 'ai-meeting-notes-agent',"title": 'AI Meeting Notes Agent',"description": 'Transcribes meetings,extracts action items,and syncs summaries to CRM/PM tools.',"category": 'AI Solutions',"price": '$69',"billing": 'month',"features": "[ 'Accurate transcripts'",'Action items and ownersCRM/PM sync','Security and auditabilityMulti-platform support' ],"ctaLabel": 'Start Recording',"href": '"https": "} ] "},{ "name": 'IT Services',"slug": 'it-services',"items": "[ { "id": 'zero-trust-architecture'","title": 'Zero Trust Network Architecture',"description": 'Comprehensive zero trust security implementation with continuous verification and adaptive access control.',"category": 'IT Services',"price": '$15,000',"billing": 'project',"features": "[ 'Identity verification'",'Micro-segmentationContinuous monitoring','Threat detectionCompliance reporting' ],"ctaLabel": 'Security Assessment',"href": '"https": "}",{ "id": 'five-g-enterprise-network',"title": '5G Enterprise Network Solutions',"description": 'Custom 5G network infrastructure for enterprises with ultra-low latency and massive IoT connectivity.',"category": 'IT Services',"price": '$25,000',"billing": 'project',"features": "[ 'Private 5G networks'",'Network slicingEdge computing','IoT integrationPerformance optimization' ],"ctaLabel": 'Network Design',"href": '"https": "}",{ "id": 'quantum-edge-computing',"title": 'Quantum Edge Computing Platform',"description": 'Next-generation edge computing platform leveraging quantum principles for ultra-fast processing and decision making.',"category": 'IT Services',"price": '$35,000',"billing": 'project',"features": "[ 'Quantum edge processing'",'Real-time analyticsDistributed computing','Energy optimizationScalable architecture' ],"ctaLabel": 'Edge Deployment',"href": '"https": "}",{ "id": 'platform-engineering-kubernetes',"title": 'Platform Engineering on Kubernetes',"description": 'Golden paths,IDP,and paved roads for developers with secure,standardized delivery.',"category": 'IT Services',"price": '$40,000',"billing": 'project',"features": "[ 'Backstage developer portal'",'GitOps with Argo CD or FluxPolicy-as-code (OPA/Gatekeeper)','Multi-cluster and multi-cloudSRE playbooks and training' ],"ctaLabel": 'Build Your IDP',"href": '"https": "}",{ "id": 'finops-cloud-cost-optimization',"title": 'FinOps Cloud Cost Optimization',"description": 'Reduce cloud spend 20–40% with rightsizing,reservations,and architectural optimizations.',"category": 'IT Services',"price": '$12,000',"billing": 'project',"features": "[ 'Cost anomaly detection'",'RI/Savings Plan strategyWorkload rightsizing','Kubernetes cost allocationExecutive reporting' ],"ctaLabel": 'Cut Cloud Costs',"href": '"https": "}",{ "id": 'managed-kubernetes-sre',"title": 'Managed Kubernetes SRE',"description": 'Hands-on SRE for "clusters": "upgrades",security baselines,autoscaling,and incident response.',"category": 'IT Services',"price": '$2,500',"billing": 'month',"features": "[ '24/7 on-call rotation'",'Golden paths and GitOpsSLOs and error budgets','DR and backup testingCost and performance tuning' ],"ctaLabel": 'Stabilize Clusters',"href": '"https": "}",{ "id": 'zero-trust-rollout-coaching',"title": 'Zero Trust Rollout Coaching',"description": 'Architect and guide a pragmatic Zero Trust deployment with measurable milestones and runbooks.',"category": 'IT Services',"price": '$4,000',"billing": 'project',"features": "[ 'Current-state assessment'",'Policy and identity baselinesZTN,SWG,CASB patterns','Pilot-to-prod planExecutive reporting' ],"ctaLabel": 'Plan Zero Trust',"href": '"https": "} ] "},{ "name": 'Cybersecurity',"slug": 'cybersecurity',"items": "[ { "id": 'ai-threat-intelligence'","title": 'AI Threat Intelligence Suite',"description": 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',"category": 'Cybersecurity',"price": '$3,999',"billing": 'month',"features": "[ 'AI threat detection'",'Behavioral analysisAutomated response','Threat huntingIncident management' ],"ctaLabel": 'Security Demo',"href": '"https": "}",{ "id": 'quantum-cryptography',"title": 'Quantum Cryptography Solutions',"description": 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.',"category": 'Cybersecurity',"price": '$12,000',"billing": 'project',"features": "[ 'Quantum key distribution'",'Post-quantum cryptoSecure communication','Key managementCompliance ready' ],"ctaLabel": 'Quantum Security',"href": '"https": "}",{ "id": 'managed-detection-response',"title": 'Managed Detection & Response (MDR)',"description": '24/7 monitoring,threat hunting,and incident response with SIEM/SOAR integration.',"category": 'Cybersecurity',"price": '$3,499',"billing": 'month',"features": "[ 'SIEM setup and tuning'",'Playbooks and automationPhishing and EDR integration','Compliance-ready reportingIncident response retainers' ],"ctaLabel": 'Activate MDR',"href": '"https": "}",{ "id": 'sase-rollout',"title": 'Secure Access Service Edge (SASE) Rollout',"description": 'Consolidate network and security with ZTNA,SWG,CASB,and SD-WAN.',"category": 'Cybersecurity',"price": '$20,000',"billing": 'project',"features": "[ 'Architecture and vendor selection'",'Pilot and phased migrationPolicy baselines','User experience optimizationRunbooks and training' ],"ctaLabel": 'Deploy SASE',"href": '"https": "}",{ "id": 'gdpr-dsar-portal',"title": 'GDPR DSAR Portal',"description": 'Secure intake,verification,and fulfillment of Data Subject Access Requests with audit trails.',"category": 'Cybersecurity',"price": '$129',"billing": 'month',"features": "[ 'Identity verification'",'Data discovery connectorsAudit logs and exports','Self-service portal and SLA trackingWebhook automation' ],"ctaLabel": 'Launch Portal',"href": '"https": "}",{ "id": 'email-deliverability-monitor-saas',"title": 'Email Deliverability Monitor',"description": 'Inbox placement checks,DMARC/SPF/DKIM validation,and reputation alerts for marketing and transactional mail.',"category": 'Cybersecurity',"price": '$39',"billing": 'month',"features": "[ 'DMARC/SPF/DKIM verification'",'Inbox placement and blocklist trackingRecommendations and weekly reports','"Integrations": 'SES',SendGrid,MailgunAlerts to Slack/Email' ],"ctaLabel": 'Improve Inbox Rate',"href": '"https": "}",{ "id": 'pdf-render-api-saas',"title": 'PDF Render API',"description": 'Reliable HTML-to-PDF at scale with templates,assets,and async callbacks.',"category": 'Cybersecurity',"price": '$29',"billing": 'month',"features": "[ 'Chromium renderer with fonts'",'Async rendering and webhooksTemplates and asset hosting','Storage destinations (S3/GCS/Azure)Usage analytics and quotas' ],"ctaLabel": 'Generate PDFs',"href": '"https": "} ] "},{ "name": 'Data & Analytics',"slug": 'data-analytics',"items": "[ { "id": 'quantum-data-analytics'","title": 'Quantum Data Analytics Platform',"description": 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',"category": 'Data & Analytics',"price": '$6,999',"billing": 'month',"features": "[ 'Quantum pattern recognition'",'Complex data modelingReal-time insights','Predictive analyticsVisualization tools' ],"ctaLabel": 'Analytics Demo',"href": '"https": "}",{ "id": 'ai-business-intelligence',"title": 'AI Business Intelligence Suite',"description": 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.',"category": 'Data & Analytics',"price": '$2,499',"billing": 'month',"features": "[ 'Automated insights'",'Natural language queriesPredictive modeling','Custom dashboardsData integration' ],"ctaLabel": 'BI Assessment',"href": '"https": "}",{ "id": 'data-quality-observability',"title": 'Data Quality & Observability',"description": 'Monitor freshness,completeness,and lineage to trust your analytics and AI.',"category": 'Data & Analytics',"price": '$1,499',"billing": 'month',"features": "[ 'Column-level lineage'",'Great Expectations policiesAlerting and incident Mgmt','"Connectors": 'Snowflake',BigQuery,DatabricksRoot-cause analysis' ],"ctaLabel": 'Improve Data Trust',"href": '"https": "}",{ "id": 'modern-etl-migration',"title": 'Modern ETL/ELT Migration',"description": 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.',"category": 'Data & Analytics',"price": '$18,000',"billing": 'project',"features": "[ 'dbt modeling and tests'",'Incremental loadsCI for analytics','Cost-efficient storageKnowledge transfer' ],"ctaLabel": 'Migrate Workloads',"href": '"https": "} ] "},{ "name": 'Cloud & DevOps',"slug": 'cloud-devops',"items": "[ { "id": 'autonomous-devops-platform'","title": 'Autonomous DevOps Platform',"description": 'Self-managing DevOps platform that automatically optimizes deployments,scaling,and infrastructure management.',"category": 'Cloud & DevOps',"price": '$4,999',"billing": 'month',"features": "[ 'Automated deployments'",'Self-healing infrastructurePerformance optimization','Cost managementContinuous monitoring' ],"ctaLabel": 'DevOps Demo',"href": '"https": "}",{ "id": 'quantum-cloud-infrastructure',"title": 'Quantum Cloud Infrastructure',"description": 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.',"category": 'Cloud & DevOps',"price": '$18,000',"billing": 'project',"features": "[ 'Quantum cloud services'",'Hybrid infrastructureQuantum optimization','Scalable architectureEnterprise support' ],"ctaLabel": 'Cloud Migration',"href": '"https": "}",{ "id": 'serverless-application-factory',"title": 'Serverless Application Factory',"description": 'Blueprints and accelerators to build secure,low-cost serverless backends fast.',"category": 'Cloud & DevOps',"price": '$16,000',"billing": 'project',"features": "[ '"Patterns": EventBridge",Step FunctionsIaC with CDK/Terraform','Observability baked-inSECaaS and guardrails','Cost-efficiency targets' ],"ctaLabel": 'Build Serverless',"href": '"https": "}",{ "id": 'disaster-recovery-blueprints',"title": 'Disaster Recovery Blueprints (RTO/RPO)',"description": 'Design and test DR strategies with automated failover and periodic game days.',"category": 'Cloud & DevOps',"price": '$20,000',"billing": 'project',"features": "[ 'Multi-region architectures'",'Automated chaos testsBackup and restore pipelines','Compliance documentationExecutive tabletop exercises' ],"ctaLabel": 'Harden Resilience',"href": '"https": "}",{ "id": 'data-contracts-platform',"title": 'Data Contracts Platform',"description": 'Define and enforce data contracts across services with schema checks,drift alerts,and lineage.',"category": 'Cloud & DevOps',"price": '$149',"billing": 'month',"features": "[ 'Contract registry and versioning'",'CI gates and PR annotationsDrift detection and alerts','Lineage and impact analysisConnectors for CI/CD and warehouses' ],"ctaLabel": 'Enforce Contracts',"href": '"https": "} ] "},{ "name": 'Quantum Computing',"slug": 'quantum-computing',"items": "[ { "id": 'quantum-cybersecurity-suite-2026'","title": 'Quantum Cybersecurity Suite 2026',"description": 'Revolutionary cybersecurity platform leveraging quantum-resistant algorithms and quantum key distribution for unbreakable encryption and threat detection.',"category": 'Quantum Computing',"price": '$8,999',"billing": 'month',"features": "[ 'Quantum-resistant encryption algorithms'",'Quantum key distribution (QKD)AI-powered threat detection with 99.99% accuracy','Zero-trust architecture implementationReal-time threat intelligence feeds','Automated incident responseCompliance automation (SOC 2,ISO 27001,NIST)','Quantum-safe certificate managementAdvanced behavioral analytics','Cloud-native security architecture' ],"ctaLabel": 'Quantum Security',"href": '"https": "}",{ "id": 'quantum-financial-trading-platform-2026',"title": 'Quantum Financial Trading Platform 2026',"description": 'Revolutionary quantum computing-powered financial trading platform that provides ultra-fast market analysis,risk assessment,and automated trading strategies with quantum advantage.',"category": 'Quantum Computing',"price": '$15,999',"billing": 'month',"features": "[ 'Quantum-powered market analysis'",'Ultra-fast trading execution (<1ms latency)AI-driven risk assessment','Portfolio optimization algorithmsReal-time market sentiment analysis','Automated trading strategiesRegulatory compliance automation','Multi-asset class supportAdvanced risk management','Performance analytics dashboard' ],"ctaLabel": 'Quantum Trading',"href": '"https": "}",{ "id": 'quantum-logistics-optimization-2026',"title": 'Quantum Logistics Optimization Platform 2026',"description": 'Revolutionary quantum computing-powered logistics platform that optimizes routes,reduces costs,and improves efficiency for complex supply chain and transportation networks.',"category": 'Quantum Computing',"price": '$6,999',"billing": 'month',"features": "[ 'Quantum route optimization algorithms'",'Real-time traffic and weather integrationMulti-modal transportation optimization','Dynamic pricing optimizationFleet management automation','Predictive maintenance schedulingSustainability optimization','Real-time tracking and visibilityAutomated dispatching','Performance analytics dashboard' ],"ctaLabel": 'Quantum Logistics',"href": '"https": "}",{ "id": 'quantum-biological-computing-2030',"title": 'Quantum Biological Computing Platform 2030',"description": 'Revolutionary platform that combines quantum computing with biological systems,enabling unprecedented breakthroughs in drug discovery,genetic engineering,and biological computing.',"category": 'Quantum Computing',"price": '$18,999',"billing": 'month',"features": "[ 'Quantum-biological hybrid processing'",'DNA computing integrationProtein folding simulation','Drug discovery accelerationGenetic engineering optimization','Biological circuit designReal-time biological monitoring','Quantum biological sensorsBiological data encryption','Advanced research tools' ],"ctaLabel": 'Quantum Biology',"href": '"https": "} ] "},{ "name": 'Blockchain & Web3',"slug": 'blockchain-web3',"items": "[ { "id": 'decentralized-ai-marketplace'","title": 'Decentralized AI Marketplace',"description": 'Web3-powered marketplace for AI models,data,and computational resources with blockchain-based governance.',"category": 'Blockchain & Web3',"price": '$1,999',"billing": 'month',"features": "[ 'AI model marketplace'",'Decentralized governanceSmart contracts','Token economicsCommunity-driven' ],"ctaLabel": 'Marketplace Access',"href": '"https": "}",{ "id": 'quantum-blockchain-platform',"title": 'Quantum Blockchain Platform',"description": 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.',"category": 'Blockchain & Web3',"price": '$8,999',"billing": 'month',"features": "[ 'Quantum-resistant crypto'",'Enhanced consensusScalable architecture','InteroperabilityEnterprise features' ],"ctaLabel": 'Blockchain Demo',"href": '"https": "} ] "},{ "name": 'IoT & Edge',"slug": 'iot-edge',"items": "[ { "id": 'quantum-iot-platform'","title": 'Quantum IoT Platform',"description": 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',"category": 'IoT & Edge',"price": '$3,999',"billing": 'month',"features": "[ 'Quantum edge processing'",'Device optimizationIntelligent routing','Energy efficiencyScalable deployment' ],"ctaLabel": 'IoT Demo',"href": '"https": "}",{ "id": 'autonomous-edge-ai',"title": 'Autonomous Edge AI Platform',"description": 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.',"category": 'IoT & Edge',"price": '$2,999',"billing": 'month',"features": "[ 'Autonomous optimization'",'Edge AI processingNetwork intelligence','Resource managementPerformance monitoring' ],"ctaLabel": 'Edge AI Demo',"href": '"https": "}",{ "id": 'predictive-maintenance-iot',"title": 'Predictive Maintenance for IoT Fleets',"description": 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',"category": 'IoT & Edge',"price": '$2,499',"billing": 'month',"features": "[ 'Edge telemetry ingestion'",'ML failure predictionWork order integration (EAM/CMMS)','Kitting and rollout playbooksDashboards and alerts' ],"ctaLabel": 'Reduce Downtime',"href": '"https": "}",{ "id": 'digital-twin-starter',"title": 'Digital Twin Starter Kit',"description": 'Model physical systems with twins to simulate scenarios and optimize operations.',"category": 'IoT & Edge',"price": '$14,000',"billing": 'project',"features": "[ '3D/graph models'",'Stream processingIntegration with PLC/SCADA','KPI definition and alertsPilot-to-production plan' ],"ctaLabel": 'Build a Twin',"href": '"https": "} ] "},{ "name": 'Green Tech',"slug": 'green-tech',"items": "[ { "id": 'quantum-energy-optimization'","title": 'Quantum Energy Optimization',"description": 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',"category": 'Green Tech',"price": '$12,000',"billing": 'month',"features": "[ 'Quantum energy modeling'",'Renewable optimizationGrid management','Carbon trackingSustainability reporting' ],"ctaLabel": 'Energy Assessment',"href": '"https": "}",{ "id": 'ai-climate-prediction',"title": 'AI Climate Prediction Platform',"description": 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.',"category": 'Green Tech',"price": '$7,999',"billing": 'month',"features": "[ 'AI climate modeling'",'Quantum simulationsReal-time predictions','Risk assessmentPolicy recommendations' ],"ctaLabel": 'Climate Demo',"href": '"https": "}",{ "id": 'carbon-accounting-saas',"title": 'Carbon Accounting & ESG Reporting',"description": 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',"category": 'Green Tech',"price": '$999',"billing": 'month',"features": "[ 'GHG Protocol-aligned factors'",'Automated data pipelinesSupplier questionnaires','Assurance-ready exportsTarget tracking (SBTi)' ],"ctaLabel": 'Start ESG Tracking',"href": '"https": "} ] "},{ "name": 'Space Tech',"slug": 'space-tech',"items": "[ { "id": 'satellite-ai-orchestrator'","title": 'Satellite AI Orchestrator',"description": 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',"category": 'Space Tech',"price": '$15,000',"billing": 'month',"features": "[ 'Autonomous orbital optimization'",'AI-powered data analysisReal-time monitoring','Collision avoidanceGlobal coverage' ],"ctaLabel": 'Launch Satellites',"href": '"https": "}",{ "id": 'quantum-space-communications',"title": 'Quantum Space Communications',"description": 'Next-generation quantum communication system for secure,ultra-fast data transmission between Earth and space.',"category": 'Space Tech',"price": '$25,000',"billing": 'month',"features": "[ 'Quantum entanglement'",'Unhackable encryptionLight-speed transmission','Deep space coverageInterplanetary network' ],"ctaLabel": 'Connect Space',"href": '"https": "}",{ "id": 'satellite-imagery-analytics',"title": 'Satellite Imagery Analytics',"description": 'Computer vision on multi-spectral imagery for agriculture,insurance,and defense insights.',"category": 'Space Tech',"price": '$5,999',"billing": 'month',"features": "[ 'Change detection'",'Crop yield estimationObject and damage detection','APIs and dashboardsTasking provider integrations' ],"ctaLabel": 'Analyze Imagery',"href": '"https": "} ] "},{ "name": 'BioTech & Health',"slug": 'biotech-health',"items": "[ { "id": 'ai-drug-discovery-platform'","title": 'AI Drug Discovery Platform',"description": 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',"category": 'BioTech & Health',"price": '$35,000',"billing": 'month',"features": "[ 'AI molecular modeling'",'Quantum simulationsClinical trial optimization','Drug repurposingRegulatory compliance' ],"ctaLabel": 'Discover Drugs',"href": '"https": "}",{ "id": 'quantum-genome-analyzer',"title": 'Quantum Genome Analyzer',"description": 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.',"category": 'BioTech & Health',"price": '$18,000',"billing": 'month',"features": "[ 'Quantum DNA sequencing'",'Personalized medicineDisease prediction','Genetic counselingResearch collaboration' ],"ctaLabel": 'Analyze Genome',"href": '"https": "}",{ "id": 'telemedicine-ai-triage',"title": 'Telemedicine AI Triage',"description": 'AI symptom checker with escalation workflows to clinicians and EHR integration.',"category": 'BioTech & Health',"price": '$1,999',"billing": 'month',"features": "[ 'Clinical safety guardrails'",'HL7/FHIR integrationLanguage and accessibility','Analytics and outcomes trackingPrivacy and consent management' ],"ctaLabel": 'Enable Triage',"href": '"https": "} ] "},{ "name": 'FinTech & DeFi',"slug": 'fintech-defi',"items": "[ { "id": 'quantum-trading-algorithm'","title": 'Quantum Trading Algorithm',"description": 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',"category": 'FinTech & DeFi',"price": '$45,000',"billing": 'month',"features": "[ 'Quantum market analysis'",'Microsecond tradingRisk management','Portfolio optimizationRegulatory compliance' ],"ctaLabel": 'Start Trading',"href": '"https": "}",{ "id": 'autonomous-defi-protocol',"title": 'Autonomous DeFi Protocol',"description": 'Self-managing DeFi protocol that automatically optimizes yields,manages risks,and executes strategies.',"category": 'FinTech & DeFi',"price": '$12,000',"billing": 'month',"features": "[ 'Autonomous yield farming'",'Risk managementStrategy optimization','Cross-chain integrationSmart contract security' ],"ctaLabel": 'Deploy Protocol',"href": '"https": "}",{ "id": 'kyc-aml-transaction-monitoring',"title": 'KYC/AML Transaction Monitoring',"description": 'Detect suspicious activity using rules + ML with investigator case management.',"category": 'FinTech & DeFi',"price": '$2,499',"billing": 'month',"features": "[ 'Entity resolution'",'Sanctions and watchlistsGraph analytics','Case workflow and SAR exportsAudit and model governance' ],"ctaLabel": 'Strengthen Compliance',"href": '"https": "} ] "},{ "name": 'Metaverse & AR/VR',"slug": 'metaverse-ar-vr',"items": "[ { "id": 'quantum-metaverse-engine'","title": 'Quantum Metaverse Engine',"description": 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',"category": 'Metaverse & AR/VR',"price": '$28,000',"billing": 'month',"features": "[ 'Quantum rendering'",'Infinite scalabilityRealistic physics','Cross-platform supportAI-powered NPCs' ],"ctaLabel": 'Enter Metaverse',"href": '"https": "}",{ "id": 'autonomous-ar-navigation',"title": 'Autonomous AR Navigation',"description": 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.',"category": 'Metaverse & AR/VR',"price": '$8,500',"billing": 'month',"features": "[ 'Real-time AR overlays'",'Autonomous navigationSmart city integration','Traffic optimizationSafety monitoring' ],"ctaLabel": 'Navigate AR',"href": '"https": "}",{ "id": 'vr-training-simulators',"title": 'VR Training Simulators',"description": 'Enterprise-grade immersive learning for safety,field ops,and medical procedures.',"category": 'Metaverse & AR/VR',"price": '$30,000',"billing": 'project',"features": "[ 'Curriculum design'",'Multi-user scenariosLMS integration and analytics','Hardware procurement guidanceOperations and support' ],"ctaLabel": 'Build Simulator',"href": '"https": "} ] "},{ "name": 'Autonomous Systems',"slug": 'autonomous-systems',"items": "[ { "id": 'quantum-ai-controller'","title": 'Quantum AI Controller',"description": 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',"category": 'Autonomous Systems',"price": '$32,000',"billing": 'month',"features": "[ 'Quantum decision making'",'Autonomous learningSystem optimization','Predictive maintenanceMulti-system coordination' ],"ctaLabel": 'Control Systems',"href": '"https": "}",{ "id": 'autonomous-robotics-platform',"title": 'Autonomous Robotics Platform',"description": 'Complete robotics platform for autonomous manufacturing,logistics,and service operations.',"category": 'Autonomous Systems',"price": '$22,000',"billing": 'month',"features": "[ 'Autonomous navigation'",'Task learningSafety protocols','Multi-robot coordinationPerformance analytics' ],"ctaLabel": 'Deploy Robots',"href": '"https": "}",{ "id": 'warehouse-robotics-orchestration',"title": 'Warehouse Robotics Orchestration',"description": 'Coordinate AMRs,conveyors,and pick stations to maximize throughput and safety.',"category": 'Autonomous Systems',"price": '$9,999',"billing": 'month',"features": "[ 'Task allocation and routing'",'3D digital twin monitoringWorkforce and robot collaboration','Safety zones and policiesKPIs and optimization' ],"ctaLabel": 'Orchestrate Robots',"href": '"https": "} ] "},{ "name": 'Supply Chain & Logistics',"slug": 'supply-chain-logistics',"items": "[ { "id": 'autonomous-supply-chain-platform-2026'","title": 'Autonomous Supply Chain Platform 2026',"description": 'AI-powered autonomous supply chain management platform that predicts disruptions,optimizes logistics,and automates decision-making for end-to-end supply chain visibility and efficiency.',"category": 'Supply Chain & Logistics',"price": '$5,999',"billing": 'month',"features": "[ 'AI-powered demand forecasting with 98% accuracy'",'Autonomous inventory optimizationReal-time supply chain visibility','Predictive disruption detectionAutomated supplier selection','Dynamic pricing optimizationSustainability tracking and reporting','Multi-modal transportation optimizationRisk assessment and mitigation','Compliance automation' ],"ctaLabel": 'Supply Chain',"href": '"https": "} ] "},{ "name": 'Energy Management',"slug": 'energy-management',"items": "[ { "id": 'autonomous-energy-management-2026'","title": 'Autonomous Energy Management Platform 2026',"description": 'AI-powered autonomous energy management platform that optimizes energy consumption,predicts demand,and automates energy trading for utilities,commercial buildings,and industrial facilities.',"category": 'Energy Management',"price": '$5,499',"billing": 'month',"features": "[ 'AI-powered energy consumption optimization'",'Real-time demand forecastingAutomated energy trading','Smart grid integrationRenewable energy optimization','Predictive maintenance for energy assetsCarbon footprint tracking','Energy efficiency recommendationsReal-time monitoring dashboard','Mobile app for energy managers' ],"ctaLabel": 'Energy Management',"href": '"https": "} ] "},{ "name": 'Manufacturing Intelligence',"slug": 'manufacturing-intelligence',"items": "[ { "id": 'autonomous-manufacturing-intelligence-2026'","title": 'Autonomous Manufacturing Intelligence Platform 2026',"description": 'AI-powered autonomous manufacturing platform that optimizes production,predicts maintenance,and automates quality control.',"category": 'Manufacturing Intelligence',"price": '$5,999',"billing": 'month',"features": "[ 'AI-powered production optimization'",'Predictive maintenance schedulingAutomated quality control','Real-time monitoring and alertingSupply chain integration','Energy efficiency optimizationSustainability tracking','Performance analytics dashboardMobile app for operators','API integration capabilities' ],"ctaLabel": 'Manufacturing',"href": '"https": "} ] "},{ "name": 'Data Center Management',"slug": 'data-center-management',"items": "[ { "id": 'autonomous-data-center-manager-2026'","title": 'Autonomous Data Center Manager 2026',"description": 'AI-powered autonomous data center management platform that optimizes performance,reduces costs,and prevents downtime through predictive analytics and automated operations.',"category": 'Data Center Management',"price": '$4,499',"billing": 'month',"features": "[ 'AI-powered performance optimization'",'Predictive maintenance schedulingAutomated capacity planning','Real-time monitoring and alertingEnergy efficiency optimization','Security threat detectionCompliance automation','Multi-cloud orchestrationDisaster recovery automation','Cost optimization engine' ],"ctaLabel": 'Data Center',"href": '"https": "} ] "} ];
export type ServiceItem = { id: string, title: string, description: string, category: &apos,Micro SaaS&apos, | &apos,IT Services&apos, | &apos,AI Solutions&apos, | &apos,Cybersecurity&apos, | &apos,Data & Analytics&apos, | &apos,Cloud & DevOps&apos, | &apos,Quantum Computing&apos, | &apos,Blockchain & Web3&apos, | &apos,IoT & Edge&apos, | &apos,Green Tech&apos, | &apos,Space Tech&apos, | &apos,BioTech & Health&apos, | &apos,FinTech & DeFi&apos, | &apos,Metaverse & AR/VR&apos, | &apos,Autonomous Systems&apos,&apos, price: string, billing: &apos,month&apos, | &apos,project&apos, | &apos,hour features: string[], ctaLabel: string, href: string, external?: boolean}, export type ServiceCategory = { name: string, slug: string, items: ServiceItem[],}, export const servicesCatalog: ServiceCategory[] = [, { name: &apos,Micro SaaS&apos,slug: &apos,micro-saas&apos,items: [ { id: &apos,smart-contract-risk-scanner&apos,title: &apos,Smart Contract Risk Scanner&apos,description: &apos,Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.&apos,category: &apos,Micro SaaS&apos,price: &apos,$299&apos,billing: &apos,month&apos,features: [ &apos,Real-time vulnerability detection&apos,&apos,Automated security scoring&apos,&apos,Compliance reporting&apos,&apos,Integration with major blockchains&apos,&apos,24/7 monitoring dashboard&apos, ],ctaLabel: &apos,Start Free Trial&apos,href: &apos,https:  ,},{ id: &apos,ai-content-optimizer&apos,title: &apos,AI Content Optimizer Pro&apos,description: &apos,Advanced content optimization using AI to improve SEO,readability,and engagement across all digital platforms.&apos,category: &apos,Micro SaaS&apos,price: &apos,$199&apos,billing: &apos,month&apos,features: [ &apos,AI-powered SEO optimization&apos,&apos,Content readability scoring&apos,&apos,Multi-language support&apos,&apos,Performance analytics&apos,&apos,Automated A/B testing&apos, ],ctaLabel: &apos,Get Started&apos,href: &apos,https:  ,} ] },{ name: &apos,AI Solutions&apos,slug: &apos,ai-solutions&apos,items: [ { id: &apos,autonomous-business-manager&apos,title: &apos,Autonomous Business Manager&apos,description: &apos,AI-powered business management system that autonomously handles operations,decision-making,and strategic planning.&apos,category: &apos,AI Solutions&apos,price: &apos,$2,999&apos,billing: &apos,month&apos,features: [ &apos,Autonomous decision making&apos,&apos,Predictive business modeling&apos,&apos,Resource optimization&apos,&apos,Risk assessment&apos,&apos,Continuous learning&apos, ],ctaLabel: &apos,Request Demo&apos,href: &apos,https:  ,},{ id: &apos,consciousness-simulation-platform&apos,title: &apos,Consciousness Simulation Platform&apos,description: &apos,Advanced AI platform for simulating and understanding consciousness,enabling breakthrough research in cognitive science.&apos,category: &apos,AI Solutions&apos,price: &apos,$5,999&apos,billing: &apos,month&apos,features: [ &apos,Neural network simulation&apos,&apos,Consciousness modeling&apos,&apos,Research tools&apos,&apos,Data visualization&apos,&apos,Collaborative workspace&apos, ],ctaLabel: &apos,Research Access&apos,href: &apos,https:  ,},{ id: &apos,quantum-neural-network&apos,title: &apos,Quantum Neural Network Platform&apos,description: &apos,Revolutionary platform combining quantum computing with neural networks for unprecedented AI capabilities.&apos,category: &apos,AI Solutions&apos,price: &apos,$8,999&apos,billing: &apos,month&apos,features: [ &apos,Quantum neural processing&apos,&apos,Hybrid classical-quantum&apos,&apos,Advanced training algorithms&apos,&apos,Quantum advantage&apos,&apos,Research collaboration&apos, ],ctaLabel: &apos,Quantum Access&apos,href: &apos,https:  ,},{ id: &apos,ai-autonomous-vehicles&apos,title: &apos,AI Autonomous Vehicle Platform&apos,description: &apos,Complete autonomous vehicle management system with AI-driven navigation,safety,and fleet optimization.&apos,category: &apos,AI Solutions&apos,price: &apos,$4,999&apos,billing: &apos,month&apos,features: [ &apos,Autonomous navigation&apos,&apos,Safety monitoring&apos,&apos,Fleet management&apos,&apos,Predictive maintenance&apos,&apos,Regulatory compliance&apos, ],ctaLabel: &apos,Vehicle Integration&apos,href: &apos,https:  ,},{ id: &apos,enterprise-rag-search&apos,title: &apos,Enterprise RAG Search Platform&apos,description: &apos,Private,secure Retrieval-Augmented Generation over your docs,wikis,tickets,and data.&apos,category: &apos,AI Solutions&apos,price: &apos,$3,499&apos,billing: &apos,month&apos,features: [ &apos,Hybrid vector + keyword search&apos,&apos,PII redaction and access control&apos,&apos,Grounding citations&apos,&apos,Plugins: Confluence,Google Drive,SharePoint&apos,&apos,On-prem or VPC deployment&apos, ],ctaLabel: &apos,Launch Secure Chat&apos,href: &apos,https:  ,},{ id: &apos,agentic-copilot-suite&apos,title: &apos,Agentic Copilot Suite (Sales,Support,DevOps)&apos,description: &apos,Task-driven AI agents that execute workflows across CRM,ticketing,CI/CD,and cloud.&apos,category: &apos,AI Solutions&apos,price: &apos,$4,999&apos,billing: &apos,month&apos,features: [ &apos,Guardrailed tool use&apos,&apos,Human-in-the-loop approvals&apos,&apos,Observability and audit trails&apos,&apos,Connectors: Salesforce,Zendesk,GitHub,AWS&apos,&apos,Okta and SSO ready&apos, ],ctaLabel: &apos,Deploy Copilots&apos,href: &apos,https:  ,},{ id: &apos,quantum-consciousness-simulation-2030&apos,title: &apos,Quantum Consciousness Simulation Platform 2030&apos,description: &apos,Revolutionary quantum computing platform that simulates human consciousness,enabling breakthrough research in cognitive science,psychology,and artificial general intelligence.&apos,category: &apos,AI Solutions&apos,price: &apos,$25,000&apos,billing: &apos,month&apos,features: [ &apos,Quantum neural network simulation&apos,&apos,Consciousness modeling algorithms&apos,&apos,Real-time cognitive state analysis&apos,&apos,Multi-dimensional consciousness mapping&apos,&apos,Quantum memory and learning systems&apos,&apos,Consciousness transfer protocols&apos,&apos,Advanced research tools and APIs&apos,&apos,Collaborative research workspace&apos,&apos,Real-time visualization and analytics&apos,&apos,Quantum-classical hybrid processing&apos, ],ctaLabel: &apos,Research Access&apos,href: &apos,https:  ,},{ id: &apos,autonomous-healthcare-diagnostics-2026&apos,title: &apos,Autonomous Healthcare Diagnostics Platform 2026&apos,description: &apos,AI-powered autonomous healthcare diagnostics platform that provides real-time medical imaging analysis,disease prediction,and treatment recommendations with FDA approval and HIPAA compliance.&apos,category: &apos,AI Solutions&apos,price: &apos,$7,999&apos,billing: &apos,month&apos,features: [ &apos,AI-powered medical imaging analysis&apos,&apos,Real-time disease detection and classification&apos,&apos,Predictive health analytics&apos,&apos,Automated radiology reporting&apos,&apos,Treatment recommendation engine&apos,&apos,Patient risk assessment&apos,&apos,Clinical decision support&apos,&apos,HIPAA-compliant data handling&apos,&apos,FDA-approved algorithms&apos,&apos,Multi-modality imaging support&apos, ],ctaLabel: &apos,Healthcare Integration&apos,href: &apos,https:  ,},{ id: &apos,quantum-creative-ai-studio-2026&apos,title: &apos,Quantum Creative AI Studio 2026&apos,description: &apos,Revolutionary quantum-powered creative AI platform that generates high-quality content,designs,and creative assets with unprecedented creativity and originality.&apos,category: &apos,AI Solutions&apos,price: &apos,$3,999&apos,billing: &apos,month&apos,features: [ &apos,Quantum-powered content generation&apos,&apos,AI-driven design creation&apos,&apos,Multi-format content generation&apos,&apos,Brand consistency automation&apos,&apos,Creative asset optimization&apos,&apos,Real-time collaboration tools&apos,&apos,Version control and management&apos,&apos,Performance analytics&apos,&apos,Mobile app for creators&apos,&apos,API integration capabilities&apos, ],ctaLabel: &apos,Creative Access&apos,href: &apos,https:  ,},{ id: &apos,synthetic-data-generator&apos,title: &apos,Synthetic Data Generator&apos,description: &apos,Privacy-safe synthetic data for analytics,testing,and ML with differential privacy.&apos,category: &apos,AI Solutions&apos,price: &apos,$119&apos,billing: &apos,month&apos,features: [ &apos,DP and PII masking&apos,&apos,Tabular/time-series/text modes&apos,&apos,Utility and drift reports&apos,&apos,SDKs and REST API&apos,&apos,Warehouse integrations&apos, ],ctaLabel: &apos,Generate Data&apos,href: &apos,https:  ,},{ id: &apos,ai-meeting-notes-agent&apos,title: &apos,AI Meeting Notes Agent&apos,description: &apos,Transcribes meetings,extracts action items,and syncs summaries to CRM/PM tools.&apos,category: &apos,AI Solutions&apos,price: &apos,$69&apos,billing: &apos,month&apos,features: [ &apos,Accurate transcripts&apos,&apos,Action items and owners&apos,&apos,CRM/PM sync&apos,&apos,Security and auditability&apos,&apos,Multi-platform support&apos, ],ctaLabel: &apos,Start Recording&apos,href: &apos,https:  ,} ] },{ name: &apos,IT Services&apos,slug: &apos,it-services&apos,items: [ { id: &apos,zero-trust-architecture&apos,title: &apos,Zero Trust Network Architecture&apos,description: &apos,Comprehensive zero trust security implementation with continuous verification and adaptive access control.&apos,category: &apos,IT Services&apos,price: &apos,$15,000&apos,billing: &apos,project&apos,features: [ &apos,Identity verification&apos,&apos,Micro-segmentation&apos,&apos,Continuous monitoring&apos,&apos,Threat detection&apos,&apos,Compliance reporting&apos, ],ctaLabel: &apos,Security Assessment&apos,href: &apos,https:  ,},{ id: &apos,five-g-enterprise-network&apos,title: &apos,5G Enterprise Network Solutions&apos,description: &apos,Custom 5G network infrastructure for enterprises with ultra-low latency and massive IoT connectivity.&apos,category: &apos,IT Services&apos,price: &apos,$25,000&apos,billing: &apos,project&apos,features: [ &apos,Private 5G networks&apos,&apos,Network slicing&apos,&apos,Edge computing&apos,&apos,IoT integration&apos,&apos,Performance optimization&apos, ],ctaLabel: &apos,Network Design&apos,href: &apos,https:  ,},{ id: &apos,quantum-edge-computing&apos,title: &apos,Quantum Edge Computing Platform&apos,description: &apos,Next-generation edge computing platform leveraging quantum principles for ultra-fast processing and decision making.&apos,category: &apos,IT Services&apos,price: &apos,$35,000&apos,billing: &apos,project&apos,features: [ &apos,Quantum edge processing&apos,&apos,Real-time analytics&apos,&apos,Distributed computing&apos,&apos,Energy optimization&apos,&apos,Scalable architecture&apos, ],ctaLabel: &apos,Edge Deployment&apos,href: &apos,https:  ,},{ id: &apos,platform-engineering-kubernetes&apos,title: &apos,Platform Engineering on Kubernetes&apos,description: &apos,Golden paths,IDP,and paved roads for developers with secure,standardized delivery.&apos,category: &apos,IT Services&apos,price: &apos,$40,000&apos,billing: &apos,project&apos,features: [ &apos,Backstage developer portal&apos,&apos,GitOps with Argo CD or Flux&apos,&apos,Policy-as-code (OPA/Gatekeeper)&apos,&apos,Multi-cluster and multi-cloud&apos,&apos,SRE playbooks and training&apos, ],ctaLabel: &apos,Build Your IDP&apos,href: &apos,https:  ,},{ id: &apos,finops-cloud-cost-optimization&apos,title: &apos,FinOps Cloud Cost Optimization&apos,description: &apos,Reduce cloud spend 20–40% with rightsizing,reservations,and architectural optimizations.&apos,category: &apos,IT Services&apos,price: &apos,$12,000&apos,billing: &apos,project&apos,features: [ &apos,Cost anomaly detection&apos,&apos,RI/Savings Plan strategy&apos,&apos,Workload rightsizing&apos,&apos,Kubernetes cost allocation&apos,&apos,Executive reporting&apos, ],ctaLabel: &apos,Cut Cloud Costs&apos,href: &apos,https:  ,},{ id: &apos,managed-kubernetes-sre&apos,title: &apos,Managed Kubernetes SRE&apos,description: &apos,Hands-on SRE for clusters: upgrades,security baselines,autoscaling,and incident response.&apos,category: &apos,IT Services&apos,price: &apos,$2,500&apos,billing: &apos,month&apos,features: [ &apos,24/7 on-call rotation&apos,&apos,Golden paths and GitOps&apos,&apos,SLOs and error budgets&apos,&apos,DR and backup testing&apos,&apos,Cost and performance tuning&apos, ],ctaLabel: &apos,Stabilize Clusters&apos,href: &apos,https:  ,},{ id: &apos,zero-trust-rollout-coaching&apos,title: &apos,Zero Trust Rollout Coaching&apos,description: &apos,Architect and guide a pragmatic Zero Trust deployment with measurable milestones and runbooks.&apos,category: &apos,IT Services&apos,price: &apos,$4,000&apos,billing: &apos,project&apos,features: [ &apos,Current-state assessment&apos,&apos,Policy and identity baselines&apos,&apos,ZTN,SWG,CASB patterns&apos,&apos,Pilot-to-prod plan&apos,&apos,Executive reporting&apos, ],ctaLabel: &apos,Plan Zero Trust&apos,href: &apos,https:  ,} ] },{ name: &apos,Cybersecurity&apos,slug: &apos,cybersecurity&apos,items: [ { id: &apos,ai-threat-intelligence&apos,title: &apos,AI Threat Intelligence Suite&apos,description: &apos,Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.&apos,category: &apos,Cybersecurity&apos,price: &apos,$3,999&apos,billing: &apos,month&apos,features: [ &apos,AI threat detection&apos,&apos,Behavioral analysis&apos,&apos,Automated response&apos,&apos,Threat hunting&apos,&apos,Incident management&apos, ],ctaLabel: &apos,Security Demo&apos,href: &apos,https:  ,},{ id: &apos,quantum-cryptography&apos,title: &apos,Quantum Cryptography Solutions&apos,description: &apos,Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.&apos,category: &apos,Cybersecurity&apos,price: &apos,$12,000&apos,billing: &apos,project&apos,features: [ &apos,Quantum key distribution&apos,&apos,Post-quantum crypto&apos,&apos,Secure communication&apos,&apos,Key management&apos,&apos,Compliance ready&apos, ],ctaLabel: &apos,Quantum Security&apos,href: &apos,https:  ,},{ id: &apos,managed-detection-response&apos,title: &apos,Managed Detection & Response (MDR)&apos,description: &apos,24/7 monitoring,threat hunting,and incident response with SIEM/SOAR integration.&apos,category: &apos,Cybersecurity&apos,price: &apos,$3,499&apos,billing: &apos,month&apos,features: [ &apos,SIEM setup and tuning&apos,&apos,Playbooks and automation&apos,&apos,Phishing and EDR integration&apos,&apos,Compliance-ready reporting&apos,&apos,Incident response retainers&apos, ],ctaLabel: &apos,Activate MDR&apos,href: &apos,https:  ,},{ id: &apos,sase-rollout&apos,title: &apos,Secure Access Service Edge (SASE) Rollout&apos,description: &apos,Consolidate network and security with ZTNA,SWG,CASB,and SD-WAN.&apos,category: &apos,Cybersecurity&apos,price: &apos,$20,000&apos,billing: &apos,project&apos,features: [ &apos,Architecture and vendor selection&apos,&apos,Pilot and phased migration&apos,&apos,Policy baselines&apos,&apos,User experience optimization&apos,&apos,Runbooks and training&apos, ],ctaLabel: &apos,Deploy SASE&apos,href: &apos,https:  ,},{ id: &apos,gdpr-dsar-portal&apos,title: &apos,GDPR DSAR Portal&apos,description: &apos,Secure intake,verification,and fulfillment of Data Subject Access Requests with audit trails.&apos,category: &apos,Cybersecurity&apos,price: &apos,$129&apos,billing: &apos,month&apos,features: [ &apos,Identity verification&apos,&apos,Data discovery connectors&apos,&apos,Audit logs and exports&apos,&apos,Self-service portal and SLA tracking&apos,&apos,Webhook automation&apos, ],ctaLabel: &apos,Launch Portal&apos,href: &apos,https:  ,},{ id: &apos,email-deliverability-monitor-saas&apos,title: &apos,Email Deliverability Monitor&apos,description: &apos,Inbox placement checks,DMARC/SPF/DKIM validation,and reputation alerts for marketing and transactional mail.&apos,category: &apos,Cybersecurity&apos,price: &apos,$39&apos,billing: &apos,month&apos,features: [ &apos,DMARC/SPF/DKIM verification&apos,&apos,Inbox placement and blocklist tracking&apos,&apos,Recommendations and weekly reports&apos,&apos,Integrations: SES,SendGrid,Mailgun&apos,&apos,Alerts to Slack/Email&apos, ],ctaLabel: &apos,Improve Inbox Rate&apos,href: &apos,https:  ,},{ id: &apos,pdf-render-api-saas&apos,title: &apos,PDF Render API&apos,description: &apos,Reliable HTML-to-PDF at scale with templates,assets,and async callbacks.&apos,category: &apos,Cybersecurity&apos,price: &apos,$29&apos,billing: &apos,month&apos,features: [ &apos,Chromium renderer with fonts&apos,&apos,Async rendering and webhooks&apos,&apos,Templates and asset hosting&apos,&apos,Storage destinations (S3/GCS/Azure)&apos,&apos,Usage analytics and quotas&apos, ],ctaLabel: &apos,Generate PDFs&apos,href: &apos,https:  ,} ] },{ name: &apos,Data & Analytics&apos,slug: &apos,data-analytics&apos,items: [ { id: &apos,quantum-data-analytics&apos,title: &apos,Quantum Data Analytics Platform&apos,description: &apos,Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.&apos,category: &apos,Data & Analytics&apos,price: &apos,$6,999&apos,billing: &apos,month&apos,features: [ &apos,Quantum pattern recognition&apos,&apos,Complex data modeling&apos,&apos,Real-time insights&apos,&apos,Predictive analytics&apos,&apos,Visualization tools&apos, ],ctaLabel: &apos,Analytics Demo&apos,href: &apos,https:  ,},{ id: &apos,ai-business-intelligence&apos,title: &apos,AI Business Intelligence Suite&apos,description: &apos,Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.&apos,category: &apos,Data & Analytics&apos,price: &apos,$2,499&apos,billing: &apos,month&apos,features: [ &apos,Automated insights&apos,&apos,Natural language queries&apos,&apos,Predictive modeling&apos,&apos,Custom dashboards&apos,&apos,Data integration&apos, ],ctaLabel: &apos,BI Assessment&apos,href: &apos,https:  ,},{ id: &apos,data-quality-observability&apos,title: &apos,Data Quality & Observability&apos,description: &apos,Monitor freshness,completeness,and lineage to trust your analytics and AI.&apos,category: &apos,Data & Analytics&apos,price: &apos,$1,499&apos,billing: &apos,month&apos,features: [ &apos,Column-level lineage&apos,&apos,Great Expectations policies&apos,&apos,Alerting and incident Mgmt&apos,&apos,Connectors: Snowflake,BigQuery,Databricks&apos,&apos,Root-cause analysis&apos, ],ctaLabel: &apos,Improve Data Trust&apos,href: &apos,https:  ,},{ id: &apos,modern-etl-migration&apos,title: &apos,Modern ETL/ELT Migration&apos,description: &apos,Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.&apos,category: &apos,Data & Analytics&apos,price: &apos,$18,000&apos,billing: &apos,project&apos,features: [ &apos,dbt modeling and tests&apos,&apos,Incremental loads&apos,&apos,CI for analytics&apos,&apos,Cost-efficient storage&apos,&apos,Knowledge transfer&apos, ],ctaLabel: &apos,Migrate Workloads&apos,href: &apos,https:  ,} ] },{ name: &apos,Cloud & DevOps&apos,slug: &apos,cloud-devops&apos,items: [ { id: &apos,autonomous-devops-platform&apos,title: &apos,Autonomous DevOps Platform&apos,description: &apos,Self-managing DevOps platform that automatically optimizes deployments,scaling,and infrastructure management.&apos,category: &apos,Cloud & DevOps&apos,price: &apos,$4,999&apos,billing: &apos,month&apos,features: [ &apos,Automated deployments&apos,&apos,Self-healing infrastructure&apos,&apos,Performance optimization&apos,&apos,Cost management&apos,&apos,Continuous monitoring&apos, ],ctaLabel: &apos,DevOps Demo&apos,href: &apos,https:  ,},{ id: &apos,quantum-cloud-infrastructure&apos,title: &apos,Quantum Cloud Infrastructure&apos,description: &apos,Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.&apos,category: &apos,Cloud & DevOps&apos,price: &apos,$18,000&apos,billing: &apos,project&apos,features: [ &apos,Quantum cloud services&apos,&apos,Hybrid infrastructure&apos,&apos,Quantum optimization&apos,&apos,Scalable architecture&apos,&apos,Enterprise support&apos, ],ctaLabel: &apos,Cloud Migration&apos,href: &apos,https:  ,},{ id: &apos,serverless-application-factory&apos,title: &apos,Serverless Application Factory&apos,description: &apos,Blueprints and accelerators to build secure,low-cost serverless backends fast.&apos,category: &apos,Cloud & DevOps&apos,price: &apos,$16,000&apos,billing: &apos,project&apos,features: [ &apos,Patterns: EventBridge,Step Functions&apos,&apos,IaC with CDK/Terraform&apos,&apos,Observability baked-in&apos,&apos,SECaaS and guardrails&apos,&apos,Cost-efficiency targets&apos, ],ctaLabel: &apos,Build Serverless&apos,href: &apos,https:  ,},{ id: &apos,disaster-recovery-blueprints&apos,title: &apos,Disaster Recovery Blueprints (RTO/RPO)&apos,description: &apos,Design and test DR strategies with automated failover and periodic game days.&apos,category: &apos,Cloud & DevOps&apos,price: &apos,$20,000&apos,billing: &apos,project&apos,features: [ &apos,Multi-region architectures&apos,&apos,Automated chaos tests&apos,&apos,Backup and restore pipelines&apos,&apos,Compliance documentation&apos,&apos,Executive tabletop exercises&apos, ],ctaLabel: &apos,Harden Resilience&apos,href: &apos,https:  ,},{ id: &apos,data-contracts-platform&apos,title: &apos,Data Contracts Platform&apos,description: &apos,Define and enforce data contracts across services with schema checks,drift alerts,and lineage.&apos,category: &apos,Cloud & DevOps&apos,price: &apos,$149&apos,billing: &apos,month&apos,features: [ &apos,Contract registry and versioning&apos,&apos,CI gates and PR annotations&apos,&apos,Drift detection and alerts&apos,&apos,Lineage and impact analysis&apos,&apos,Connectors for CI/CD and warehouses&apos, ],ctaLabel: &apos,Enforce Contracts&apos,href: &apos,https:  ,} ] },{ name: &apos,Quantum Computing&apos,slug: &apos,quantum-computing&apos,items: [ { id: &apos,quantum-cybersecurity-suite-2026&apos,title: &apos,Quantum Cybersecurity Suite 2026&apos,description: &apos,Revolutionary cybersecurity platform leveraging quantum-resistant algorithms and quantum key distribution for unbreakable encryption and threat detection.&apos,category: &apos,Quantum Computing&apos,price: &apos,$8,999&apos,billing: &apos,month&apos,features: [ &apos,Quantum-resistant encryption algorithms&apos,&apos,Quantum key distribution (QKD)&apos,&apos,AI-powered threat detection with 99.99% accuracy&apos,&apos,Zero-trust architecture implementation&apos,&apos,Real-time threat intelligence feeds&apos,&apos,Automated incident response&apos,&apos,Compliance automation (SOC 2,ISO 27001,NIST)&apos,&apos,Quantum-safe certificate management&apos,&apos,Advanced behavioral analytics&apos,&apos,Cloud-native security architecture&apos, ],ctaLabel: &apos,Quantum Security&apos,href: &apos,https:  ,},{ id: &apos,quantum-financial-trading-platform-2026&apos,title: &apos,Quantum Financial Trading Platform 2026&apos,description: &apos,Revolutionary quantum computing-powered financial trading platform that provides ultra-fast market analysis,risk assessment,and automated trading strategies with quantum advantage.&apos,category: &apos,Quantum Computing&apos,price: &apos,$15,999&apos,billing: &apos,month&apos,features: [ &apos,Quantum-powered market analysis&apos,&apos,Ultra-fast trading execution (<1ms latency)&apos,&apos,AI-driven risk assessment&apos,&apos,Portfolio optimization algorithms&apos,&apos,Real-time market sentiment analysis&apos,&apos,Automated trading strategies&apos,&apos,Regulatory compliance automation&apos,&apos,Multi-asset class support&apos,&apos,Advanced risk management&apos,&apos,Performance analytics dashboard&apos, ],ctaLabel: &apos,Quantum Trading&apos,href: &apos,https:  ,},{ id: &apos,quantum-logistics-optimization-2026&apos,title: &apos,Quantum Logistics Optimization Platform 2026&apos,description: &apos,Revolutionary quantum computing-powered logistics platform that optimizes routes,reduces costs,and improves efficiency for complex supply chain and transportation networks.&apos,category: &apos,Quantum Computing&apos,price: &apos,$6,999&apos,billing: &apos,month&apos,features: [ &apos,Quantum route optimization algorithms&apos,&apos,Real-time traffic and weather integration&apos,&apos,Multi-modal transportation optimization&apos,&apos,Dynamic pricing optimization&apos,&apos,Fleet management automation&apos,&apos,Predictive maintenance scheduling&apos,&apos,Sustainability optimization&apos,&apos,Real-time tracking and visibility&apos,&apos,Automated dispatching&apos,&apos,Performance analytics dashboard&apos, ],ctaLabel: &apos,Quantum Logistics&apos,href: &apos,https:  ,},{ id: &apos,quantum-biological-computing-2030&apos,title: &apos,Quantum Biological Computing Platform 2030&apos,description: &apos,Revolutionary platform that combines quantum computing with biological systems,enabling unprecedented breakthroughs in drug discovery,genetic engineering,and biological computing.&apos,category: &apos,Quantum Computing&apos,price: &apos,$18,999&apos,billing: &apos,month&apos,features: [ &apos,Quantum-biological hybrid processing&apos,&apos,DNA computing integration&apos,&apos,Protein folding simulation&apos,&apos,Drug discovery acceleration&apos,&apos,Genetic engineering optimization&apos,&apos,Biological circuit design&apos,&apos,Real-time biological monitoring&apos,&apos,Quantum biological sensors&apos,&apos,Biological data encryption&apos,&apos,Advanced research tools&apos, ],ctaLabel: &apos,Quantum Biology&apos,href: &apos,https:  ,} ] },{ name: &apos,Blockchain & Web3&apos,slug: &apos,blockchain-web3&apos,items: [ { id: &apos,decentralized-ai-marketplace&apos,title: &apos,Decentralized AI Marketplace&apos,description: &apos,Web3-powered marketplace for AI models,data,and computational resources with blockchain-based governance.&apos,category: &apos,Blockchain & Web3&apos,price: &apos,$1,999&apos,billing: &apos,month&apos,features: [ &apos,AI model marketplace&apos,&apos,Decentralized governance&apos,&apos,Smart contracts&apos,&apos,Token economics&apos,&apos,Community-driven&apos, ],ctaLabel: &apos,Marketplace Access&apos,href: &apos,https:  ,},{ id: &apos,quantum-blockchain-platform&apos,title: &apos,Quantum Blockchain Platform&apos,description: &apos,Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.&apos,category: &apos,Blockchain & Web3&apos,price: &apos,$8,999&apos,billing: &apos,month&apos,features: [ &apos,Quantum-resistant crypto&apos,&apos,Enhanced consensus&apos,&apos,Scalable architecture&apos,&apos,Interoperability&apos,&apos,Enterprise features&apos, ],ctaLabel: &apos,Blockchain Demo&apos,href: &apos,https:  ,} ] },{ name: &apos,IoT & Edge&apos,slug: &apos,iot-edge&apos,items: [ { id: &apos,quantum-iot-platform&apos,title: &apos,Quantum IoT Platform&apos,description: &apos,Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.&apos,category: &apos,IoT & Edge&apos,price: &apos,$3,999&apos,billing: &apos,month&apos,features: [ &apos,Quantum edge processing&apos,&apos,Device optimization&apos,&apos,Intelligent routing&apos,&apos,Energy efficiency&apos,&apos,Scalable deployment&apos, ],ctaLabel: &apos,IoT Demo&apos,href: &apos,https:  ,},{ id: &apos,autonomous-edge-ai&apos,title: &apos,Autonomous Edge AI Platform&apos,description: &apos,Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.&apos,category: &apos,IoT & Edge&apos,price: &apos,$2,999&apos,billing: &apos,month&apos,features: [ &apos,Autonomous optimization&apos,&apos,Edge AI processing&apos,&apos,Network intelligence&apos,&apos,Resource management&apos,&apos,Performance monitoring&apos, ],ctaLabel: &apos,Edge AI Demo&apos,href: &apos,https:  ,},{ id: &apos,predictive-maintenance-iot&apos,title: &apos,Predictive Maintenance for IoT Fleets&apos,description: &apos,Deploy sensors and analytics to predict failures and optimize uptime across assets.&apos,category: &apos,IoT & Edge&apos,price: &apos,$2,499&apos,billing: &apos,month&apos,features: [ &apos,Edge telemetry ingestion&apos,&apos,ML failure prediction&apos,&apos,Work order integration (EAM/CMMS)&apos,&apos,Kitting and rollout playbooks&apos,&apos,Dashboards and alerts&apos, ],ctaLabel: &apos,Reduce Downtime&apos,href: &apos,https:  ,},{ id: &apos,digital-twin-starter&apos,title: &apos,Digital Twin Starter Kit&apos,description: &apos,Model physical systems with twins to simulate scenarios and optimize operations.&apos,category: &apos,IoT & Edge&apos,price: &apos,$14,000&apos,billing: &apos,project&apos,features: [ &apos,3D/graph models&apos,&apos,Stream processing&apos,&apos,Integration with PLC/SCADA&apos,&apos,KPI definition and alerts&apos,&apos,Pilot-to-production plan&apos, ],ctaLabel: &apos,Build a Twin&apos,href: &apos,https:  ,} ] },{ name: &apos,Green Tech&apos,slug: &apos,green-tech&apos,items: [ { id: &apos,quantum-energy-optimization&apos,title: &apos,Quantum Energy Optimization&apos,description: &apos,Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.&apos,category: &apos,Green Tech&apos,price: &apos,$12,000&apos,billing: &apos,month&apos,features: [ &apos,Quantum energy modeling&apos,&apos,Renewable optimization&apos,&apos,Grid management&apos,&apos,Carbon tracking&apos,&apos,Sustainability reporting&apos, ],ctaLabel: &apos,Energy Assessment&apos,href: &apos,https:  ,},{ id: &apos,ai-climate-prediction&apos,title: &apos,AI Climate Prediction Platform&apos,description: &apos,Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.&apos,category: &apos,Green Tech&apos,price: &apos,$7,999&apos,billing: &apos,month&apos,features: [ &apos,AI climate modeling&apos,&apos,Quantum simulations&apos,&apos,Real-time predictions&apos,&apos,Risk assessment&apos,&apos,Policy recommendations&apos, ],ctaLabel: &apos,Climate Demo&apos,href: &apos,https:  ,},{ id: &apos,carbon-accounting-saas&apos,title: &apos,Carbon Accounting & ESG Reporting&apos,description: &apos,Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.&apos,category: &apos,Green Tech&apos,price: &apos,$999&apos,billing: &apos,month&apos,features: [ &apos,GHG Protocol-aligned factors&apos,&apos,Automated data pipelines&apos,&apos,Supplier questionnaires&apos,&apos,Assurance-ready exports&apos,&apos,Target tracking (SBTi)&apos, ],ctaLabel: &apos,Start ESG Tracking&apos,href: &apos,https:  ,} ] },{ name: &apos,Space Tech&apos,slug: &apos,space-tech&apos,items: [ { id: &apos,satellite-ai-orchestrator&apos,title: &apos,Satellite AI Orchestrator&apos,description: &apos,AI-powered satellite constellation management system for optimal orbital positioning and data collection.&apos,category: &apos,Space Tech&apos,price: &apos,$15,000&apos,billing: &apos,month&apos,features: [ &apos,Autonomous orbital optimization&apos,&apos,AI-powered data analysis&apos,&apos,Real-time monitoring&apos,&apos,Collision avoidance&apos,&apos,Global coverage&apos, ],ctaLabel: &apos,Launch Satellites&apos,href: &apos,https:  ,},{ id: &apos,quantum-space-communications&apos,title: &apos,Quantum Space Communications&apos,description: &apos,Next-generation quantum communication system for secure,ultra-fast data transmission between Earth and space.&apos,category: &apos,Space Tech&apos,price: &apos,$25,000&apos,billing: &apos,month&apos,features: [ &apos,Quantum entanglement&apos,&apos,Unhackable encryption&apos,&apos,Light-speed transmission&apos,&apos,Deep space coverage&apos,&apos,Interplanetary network&apos, ],ctaLabel: &apos,Connect Space&apos,href: &apos,https:  ,},{ id: &apos,satellite-imagery-analytics&apos,title: &apos,Satellite Imagery Analytics&apos,description: &apos,Computer vision on multi-spectral imagery for agriculture,insurance,and defense insights.&apos,category: &apos,Space Tech&apos,price: &apos,$5,999&apos,billing: &apos,month&apos,features: [ &apos,Change detection&apos,&apos,Crop yield estimation&apos,&apos,Object and damage detection&apos,&apos,APIs and dashboards&apos,&apos,Tasking provider integrations&apos, ],ctaLabel: &apos,Analyze Imagery&apos,href: &apos,https:  ,} ] },{ name: &apos,BioTech & Health&apos,slug: &apos,biotech-health&apos,items: [ { id: &apos,ai-drug-discovery-platform&apos,title: &apos,AI Drug Discovery Platform&apos,description: &apos,Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.&apos,category: &apos,BioTech & Health&apos,price: &apos,$35,000&apos,billing: &apos,month&apos,features: [ &apos,AI molecular modeling&apos,&apos,Quantum simulations&apos,&apos,Clinical trial optimization&apos,&apos,Drug repurposing&apos,&apos,Regulatory compliance&apos, ],ctaLabel: &apos,Discover Drugs&apos,href: &apos,https:  ,},{ id: &apos,quantum-genome-analyzer&apos,title: &apos,Quantum Genome Analyzer&apos,description: &apos,Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.&apos,category: &apos,BioTech & Health&apos,price: &apos,$18,000&apos,billing: &apos,month&apos,features: [ &apos,Quantum DNA sequencing&apos,&apos,Personalized medicine&apos,&apos,Disease prediction&apos,&apos,Genetic counseling&apos,&apos,Research collaboration&apos, ],ctaLabel: &apos,Analyze Genome&apos,href: &apos,https:  ,},{ id: &apos,telemedicine-ai-triage&apos,title: &apos,Telemedicine AI Triage&apos,description: &apos,AI symptom checker with escalation workflows to clinicians and EHR integration.&apos,category: &apos,BioTech & Health&apos,price: &apos,$1,999&apos,billing: &apos,month&apos,features: [ &apos,Clinical safety guardrails&apos,&apos,HL7/FHIR integration&apos,&apos,Language and accessibility&apos,&apos,Analytics and outcomes tracking&apos,&apos,Privacy and consent management&apos, ],ctaLabel: &apos,Enable Triage&apos,href: &apos,https:  ,} ] },{ name: &apos,FinTech & DeFi&apos,slug: &apos,fintech-defi&apos,items: [ { id: &apos,quantum-trading-algorithm&apos,title: &apos,Quantum Trading Algorithm&apos,description: &apos,Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.&apos,category: &apos,FinTech & DeFi&apos,price: &apos,$45,000&apos,billing: &apos,month&apos,features: [ &apos,Quantum market analysis&apos,&apos,Microsecond trading&apos,&apos,Risk management&apos,&apos,Portfolio optimization&apos,&apos,Regulatory compliance&apos, ],ctaLabel: &apos,Start Trading&apos,href: &apos,https:  ,},{ id: &apos,autonomous-defi-protocol&apos,title: &apos,Autonomous DeFi Protocol&apos,description: &apos,Self-managing DeFi protocol that automatically optimizes yields,manages risks,and executes strategies.&apos,category: &apos,FinTech & DeFi&apos,price: &apos,$12,000&apos,billing: &apos,month&apos,features: [ &apos,Autonomous yield farming&apos,&apos,Risk management&apos,&apos,Strategy optimization&apos,&apos,Cross-chain integration&apos,&apos,Smart contract security&apos, ],ctaLabel: &apos,Deploy Protocol&apos,href: &apos,https:  ,},{ id: &apos,kyc-aml-transaction-monitoring&apos,title: &apos,KYC/AML Transaction Monitoring&apos,description: &apos,Detect suspicious activity using rules + ML with investigator case management.&apos,category: &apos,FinTech & DeFi&apos,price: &apos,$2,499&apos,billing: &apos,month&apos,features: [ &apos,Entity resolution&apos,&apos,Sanctions and watchlists&apos,&apos,Graph analytics&apos,&apos,Case workflow and SAR exports&apos,&apos,Audit and model governance&apos, ],ctaLabel: &apos,Strengthen Compliance&apos,href: &apos,https:  ,} ] },{ name: &apos,Metaverse & AR/VR&apos,slug: &apos,metaverse-ar-vr&apos,items: [ { id: &apos,quantum-metaverse-engine&apos,title: &apos,Quantum Metaverse Engine&apos,description: &apos,Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.&apos,category: &apos,Metaverse & AR/VR&apos,price: &apos,$28,000&apos,billing: &apos,month&apos,features: [ &apos,Quantum rendering&apos,&apos,Infinite scalability&apos,&apos,Realistic physics&apos,&apos,Cross-platform support&apos,&apos,AI-powered NPCs&apos, ],ctaLabel: &apos,Enter Metaverse&apos,href: &apos,https:  ,},{ id: &apos,autonomous-ar-navigation&apos,title: &apos,Autonomous AR Navigation&apos,description: &apos,AI-powered augmented reality navigation system for autonomous vehicles and smart cities.&apos,category: &apos,Metaverse & AR/VR&apos,price: &apos,$8,500&apos,billing: &apos,month&apos,features: [ &apos,Real-time AR overlays&apos,&apos,Autonomous navigation&apos,&apos,Smart city integration&apos,&apos,Traffic optimization&apos,&apos,Safety monitoring&apos, ],ctaLabel: &apos,Navigate AR&apos,href: &apos,https:  ,},{ id: &apos,vr-training-simulators&apos,title: &apos,VR Training Simulators&apos,description: &apos,Enterprise-grade immersive learning for safety,field ops,and medical procedures.&apos,category: &apos,Metaverse & AR/VR&apos,price: &apos,$30,000&apos,billing: &apos,project&apos,features: [ &apos,Curriculum design&apos,&apos,Multi-user scenarios&apos,&apos,LMS integration and analytics&apos,&apos,Hardware procurement guidance&apos,&apos,Operations and support&apos, ],ctaLabel: &apos,Build Simulator&apos,href: &apos,https:  ,} ] },{ name: &apos,Autonomous Systems&apos,slug: &apos,autonomous-systems&apos,items: [ { id: &apos,quantum-ai-controller&apos,title: &apos,Quantum AI Controller&apos,description: &apos,Revolutionary AI controller using quantum computing for autonomous system management and decision making.&apos,category: &apos,Autonomous Systems&apos,price: &apos,$32,000&apos,billing: &apos,month&apos,features: [ &apos,Quantum decision making&apos,&apos,Autonomous learning&apos,&apos,System optimization&apos,&apos,Predictive maintenance&apos,&apos,Multi-system coordination&apos, ],ctaLabel: &apos,Control Systems&apos,href: &apos,https:  ,},{ id: &apos,autonomous-robotics-platform&apos,title: &apos,Autonomous Robotics Platform&apos,description: &apos,Complete robotics platform for autonomous manufacturing,logistics,and service operations.&apos,category: &apos,Autonomous Systems&apos,price: &apos,$22,000&apos,billing: &apos,month&apos,features: [ &apos,Autonomous navigation&apos,&apos,Task learning&apos,&apos,Safety protocols&apos,&apos,Multi-robot coordination&apos,&apos,Performance analytics&apos, ],ctaLabel: &apos,Deploy Robots&apos,href: &apos,https:  ,},{ id: &apos,warehouse-robotics-orchestration&apos,title: &apos,Warehouse Robotics Orchestration&apos,description: &apos,Coordinate AMRs,conveyors,and pick stations to maximize throughput and safety.&apos,category: &apos,Autonomous Systems&apos,price: &apos,$9,999&apos,billing: &apos,month&apos,features: [ &apos,Task allocation and routing&apos,&apos,3D digital twin monitoring&apos,&apos,Workforce and robot collaboration&apos,&apos,Safety zones and policies&apos,&apos,KPIs and optimization&apos, ],ctaLabel: &apos,Orchestrate Robots&apos,href: &apos,https:  ,} ] },{ name: &apos,Supply Chain & Logistics&apos,slug: &apos,supply-chain-logistics&apos,items: [ { id: &apos,autonomous-supply-chain-platform-2026&apos,title: &apos,Autonomous Supply Chain Platform 2026&apos,description: &apos,AI-powered autonomous supply chain management platform that predicts disruptions,optimizes logistics,and automates decision-making for end-to-end supply chain visibility and efficiency.&apos,category: &apos,Supply Chain & Logistics&apos,price: &apos,$5,999&apos,billing: &apos,month&apos,features: [ &apos,AI-powered demand forecasting with 98% accuracy&apos,&apos,Autonomous inventory optimization&apos,&apos,Real-time supply chain visibility&apos,&apos,Predictive disruption detection&apos,&apos,Automated supplier selection&apos,&apos,Dynamic pricing optimization&apos,&apos,Sustainability tracking and reporting&apos,&apos,Multi-modal transportation optimization&apos,&apos,Risk assessment and mitigation&apos,&apos,Compliance automation&apos, ],ctaLabel: &apos,Supply Chain&apos,href: &apos,https:  ,} ] },{ name: &apos,Energy Management&apos,slug: &apos,energy-management&apos,items: [ { id: &apos,autonomous-energy-management-2026&apos,title: &apos,Autonomous Energy Management Platform 2026&apos,description: &apos,AI-powered autonomous energy management platform that optimizes energy consumption,predicts demand,and automates energy trading for utilities,commercial buildings,and industrial facilities.&apos,category: &apos,Energy Management&apos,price: &apos,$5,499&apos,billing: &apos,month&apos,features: [ &apos,AI-powered energy consumption optimization&apos,&apos,Real-time demand forecasting&apos,&apos,Automated energy trading&apos,&apos,Smart grid integration&apos,&apos,Renewable energy optimization&apos,&apos,Predictive maintenance for energy assets&apos,&apos,Carbon footprint tracking&apos,&apos,Energy efficiency recommendations&apos,&apos,Real-time monitoring dashboard&apos,&apos,Mobile app for energy managers&apos, ],ctaLabel: &apos,Energy Management&apos,href: &apos,https:  ,} ] },{ name: &apos,Manufacturing Intelligence&apos,slug: &apos,manufacturing-intelligence&apos,items: [ { id: &apos,autonomous-manufacturing-intelligence-2026&apos,title: &apos,Autonomous Manufacturing Intelligence Platform 2026&apos,description: &apos,AI-powered autonomous manufacturing platform that optimizes production,predicts maintenance,and automates quality control.&apos,category: &apos,Manufacturing Intelligence&apos,price: &apos,$5,999&apos,billing: &apos,month&apos,features: [ &apos,AI-powered production optimization&apos,&apos,Predictive maintenance scheduling&apos,&apos,Automated quality control&apos,&apos,Real-time monitoring and alerting&apos,&apos,Supply chain integration&apos,&apos,Energy efficiency optimization&apos,&apos,Sustainability tracking&apos,&apos,Performance analytics dashboard&apos,&apos,Mobile app for operators&apos,&apos,API integration capabilities&apos, ],ctaLabel: &apos,Manufacturing&apos,href: &apos,https:  ,} ] },{ name: &apos,Data Center Management&apos,slug: &apos,data-center-management&apos,items: [ { id: &apos,autonomous-data-center-manager-2026&apos,title: &apos,Autonomous Data Center Manager 2026&apos,description: &apos,AI-powered autonomous data center management platform that optimizes performance,reduces costs,and prevents downtime through predictive analytics and automated operations.&apos,category: &apos,Data Center Management&apos,price: &apos,$4,499&apos,billing: &apos,month&apos,features: [ &apos,AI-powered performance optimization&apos,&apos,Predictive maintenance scheduling&apos,&apos,Automated capacity planning&apos,&apos,Real-time monitoring and alerting&apos,&apos,Energy efficiency optimization&apos,&apos,Security threat detection&apos,&apos,Compliance automation&apos,&apos,Multi-cloud orchestration&apos,&apos,Disaster recovery automation&apos,&apos,Cost optimization engine&apos, ],ctaLabel: &apos,Data Center&apos,href: &apos,https:  ,} ] } ],&apos;
export type ServiceItem = {,
	"id": string;
	title: string;
	description: string;
	category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems;
	price: string, // average market starting price,
	billing: 'month' | 'project' | 'hour,
	features: string[];
	ctaLabel: string;
	href: string, // internal path or external URL,
	external?: boolean};
export type ServiceCategory = {,
	"name": string;
	slug: string;
	items: ServiceItem[],};
export const "servicesCatalog": ServiceCategory[] = [;
	{,
		name: 'Micro SaaS';
		"slug": 'micro-saas';
		"items": [,
			{,
				id: 'smart-contract-risk-scanner';
				"title": 'Smart Contract Risk Scanner';
				"description": 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.';
				"category": 'Micro SaaS';
				"price": '$299';
				"billing": 'month';
				"features": [,
					'Real-time vulnerability detectionAutomated security scoring';
					'Compliance reportingIntegration with major blockchains';
					'24/7 monitoring dashboard',
				];
				"ctaLabel": 'Start Free Trial';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'ai-content-optimizer';
				"title": 'AI Content Optimizer Pro';
				"description": 'Advanced content optimization using AI to improve SEO, readability, and engagement across all digital platforms.';
				"category": 'Micro SaaS';
				"price": '$199';
				"billing": 'month';
				"features": ['AI-powered SEO optimizationContent readability scoring';
					'Multi-language supportPerformance analytics';
					'Automated A/B testing',
				];
				"ctaLabel": 'Get Started';
				"href": 'https: //ziontechgroup.com/contact',}
		],
	};
	{,
		"name": 'AI Solutions';
		"slug": 'ai-solutions';
		"items": [{,
				id: 'autonomous-business-manager';
				"title": 'Autonomous Business Manager';
				"description": 'AI-powered business management system that autonomously handles operations, decision-making, and strategic planning.';
				"category": 'AI Solutions';
				"price": '$2,999';
				"billing": 'month';
				"features": [,
					'Autonomous decision makingPredictive business modeling';
					'Resource optimizationRisk assessment';
					'Continuous learning',
				];
				"ctaLabel": 'Request Demo';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'consciousness-simulation-platform';
				"title": 'Consciousness Simulation Platform';
				"description": 'Advanced AI platform for simulating and understanding consciousness, enabling breakthrough research in cognitive science.';
				"category": 'AI Solutions';
				"price": '$5,999';
				"billing": 'month';
				"features": ['Neural network simulationConsciousness modeling';
					'Research toolsData visualization';
					'Collaborative workspace',
				];
				"ctaLabel": 'Research Access';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-neural-network';
				"title": 'Quantum Neural Network Platform';
				"description": 'Revolutionary platform combining quantum computing with neural networks for unprecedented AI capabilities.';
				"category": 'AI Solutions';
				"price": '$8,999';
				"billing": 'month';
				"features": ['Quantum neural processingHybrid classical-quantum';
					'Advanced training algorithmsQuantum advantage';
					'Research collaboration',
				];
				"ctaLabel": 'Quantum Access';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'ai-autonomous-vehicles';
				"title": 'AI Autonomous Vehicle Platform';
				"description": 'Complete autonomous vehicle management system with AI-driven navigation, safety, and fleet optimization.';
				"category": 'AI Solutions';
				"price": '$4,999';
				"billing": 'month';
				"features": ['Autonomous navigationSafety monitoring';
					'Fleet managementPredictive maintenance';
					'Regulatory compliance',
				];
				"ctaLabel": 'Vehicle Integration';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'enterprise-rag-search';
				"title": 'Enterprise RAG Search Platform';
				"description": 'Private, secure Retrieval-Augmented Generation over your docs, wikis, tickets, and data.';
				"category": 'AI Solutions';
				"price": '$3,499';
				"billing": 'month';
				"features": ['Hybrid vector + keyword searchPII redaction and access control';
					'Grounding citations"Plugins": Confluence, Google Drive, SharePoint';
					'On-prem or VPC deployment',
				];
				"ctaLabel": 'Launch Secure Chat';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'agentic-copilot-suite';
				"title": 'Agentic Copilot Suite (Sales, Support, DevOps)';
				"description": 'Task-driven AI agents that execute workflows across CRM, ticketing, CI/CD, and cloud.';
				"category": 'AI Solutions';
				"price": '$4,999';
				"billing": 'month';
				"features": ['Guardrailed tool useHuman-in-the-loop approvals';
					'Observability and audit trails"Connectors": Salesforce, Zendesk, GitHub, AWS';
					'Okta and SSO ready',
				];
				"ctaLabel": 'Deploy Copilots';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'quantum-consciousness-simulation-2030';
				"title": 'Quantum Consciousness Simulation Platform 2030';
				"description": 'Revolutionary quantum computing platform that simulates human consciousness, enabling breakthrough research in cognitive science, psychology, and artificial general intelligence.';
				"category": 'AI Solutions';
				"price": '$25,000';
				"billing": 'month';
				"features": ['Quantum neural network simulationConsciousness modeling algorithms';
					'Real-time cognitive state analysisMulti-dimensional consciousness mapping';
					'Quantum memory and learning systemsConsciousness transfer protocols';
					'Advanced research tools and APIsCollaborative research workspace';
					'Real-time visualization and analyticsQuantum-classical hybrid processing',
				];
				"ctaLabel": 'Research Access';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'autonomous-healthcare-diagnostics-2026';
				"title": 'Autonomous Healthcare Diagnostics Platform 2026';
				"description": 'AI-powered autonomous healthcare diagnostics platform that provides real-time medical imaging analysis, disease prediction, and treatment recommendations with FDA approval and HIPAA compliance.';
				"category": 'AI Solutions';
				"price": '$7,999';
				"billing": 'month';
				"features": ['AI-powered medical imaging analysisReal-time disease detection and classification';
					'Predictive health analyticsAutomated radiology reporting';
					'Treatment recommendation enginePatient risk assessment';
					'Clinical decision supportHIPAA-compliant data handling';
					'FDA-approved algorithmsMulti-modality imaging support',
				];
				"ctaLabel": 'Healthcare Integration';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-creative-ai-studio-2026';
				"title": 'Quantum Creative AI Studio 2026';
				"description": 'Revolutionary quantum-powered creative AI platform that generates high-quality content, designs, and creative assets with unprecedented creativity and originality.';
				"category": 'AI Solutions';
				"price": '$3,999';
				"billing": 'month';
				"features": ['Quantum-powered content generationAI-driven design creation';
					'Multi-format content generationBrand consistency automation';
					'Creative asset optimizationReal-time collaboration tools';
					'Version control and managementPerformance analytics';
					'Mobile app for creatorsAPI integration capabilities',
				];
				"ctaLabel": 'Creative Access';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'synthetic-data-generator';
				"title": 'Synthetic Data Generator';
				"description": 'Privacy-safe synthetic data for analytics, testing, and ML with differential privacy.';
				"category": 'AI Solutions';
				"price": '$119';
				"billing": 'month';
				"features": ['DP and PII maskingTabular/time-series/text modes';
					'Utility and drift reportsSDKs and REST API';
					'Warehouse integrations',
				];
				"ctaLabel": 'Generate Data';
				"href": 'https: //ziontechgroup.com/services/synthetic-data-generator',};
			{,
				"id": 'ai-meeting-notes-agent';
				"title": 'AI Meeting Notes Agent';
				"description": 'Transcribes meetings, extracts action items, and syncs summaries to CRM/PM tools.';
				"category": 'AI Solutions';
				"price": '$69';
				"billing": 'month';
				"features": ['Accurate transcriptsAction items and owners';
					'CRM/PM syncSecurity and auditability';
					'Multi-platform support',
				];
				"ctaLabel": 'Start Recording';
				"href": 'https: //ziontechgroup.com/services/ai-meeting-notes-agent',}
		],
	};
	{,
		"name": 'IT Services';
		"slug": 'it-services';
		"items": [{,
				id: 'zero-trust-architecture';
				"title": 'Zero Trust Network Architecture';
				"description": 'Comprehensive zero trust security implementation with continuous verification and adaptive access control.';
				"category": 'IT Services';
				"price": '$15,000';
				"billing": 'project';
				"features": [,
					'Identity verificationMicro-segmentation';
					'Continuous monitoringThreat detection';
					'Compliance reporting',
				];
				"ctaLabel": 'Security Assessment';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'five-g-enterprise-network';
				"title": '5G Enterprise Network Solutions';
				"description": 'Custom 5G network infrastructure for enterprises with ultra-low latency and massive IoT connectivity.';
				"category": 'IT Services';
				"price": '$25,000';
				"billing": 'project';
				"features": ['Private 5G networksNetwork slicing';
					'Edge computingIoT integration';
					'Performance optimization',
				];
				"ctaLabel": 'Network Design';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-edge-computing';
				"title": 'Quantum Edge Computing Platform';
				"description": 'Next-generation edge computing platform leveraging quantum principles for ultra-fast processing and decision making.';
				"category": 'IT Services';
				"price": '$35,000';
				"billing": 'project';
				"features": ['Quantum edge processingReal-time analytics';
					'Distributed computingEnergy optimization';
					'Scalable architecture',
				];
				"ctaLabel": 'Edge Deployment';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'platform-engineering-kubernetes';
				"title": 'Platform Engineering on Kubernetes';
				"description": 'Golden paths, IDP, and paved roads for developers with secure, standardized delivery.';
				"category": 'IT Services';
				"price": '$40,000';
				"billing": 'project';
				"features": ['Backstage developer portalGitOps with Argo CD or Flux';
					'Policy-as-code (OPA/Gatekeeper)Multi-cluster and multi-cloud';
					'SRE playbooks and training',
				];
				"ctaLabel": 'Build Your IDP';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'finops-cloud-cost-optimization';
				"title": 'FinOps Cloud Cost Optimization';
				"description": 'Reduce cloud spend 20–40% with rightsizing, reservations, and architectural optimizations.';
				"category": 'IT Services';
				"price": '$12,000';
				"billing": 'project';
				"features": ['Cost anomaly detectionRI/Savings Plan strategy';
					'Workload rightsizingKubernetes cost allocation';
					'Executive reporting',
				];
				"ctaLabel": 'Cut Cloud Costs';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'managed-kubernetes-sre';
				"title": 'Managed Kubernetes SRE';
				"description": 'Hands-on SRE for clusters: upgrades, security baselines, autoscaling, and incident response.';
				"category": 'IT Services';
				"price": '$2,500';
				"billing": 'month';
				"features": ['24/7 on-call rotationGolden paths and GitOps';
					'SLOs and error budgetsDR and backup testing';
					'Cost and performance tuning',
				];
				"ctaLabel": 'Stabilize Clusters';
				"href": 'https: //ziontechgroup.com/services/managed-kubernetes-sre',};
			{,
				"id": 'zero-trust-rollout-coaching';
				"title": 'Zero Trust Rollout Coaching';
				"description": 'Architect and guide a pragmatic Zero Trust deployment with measurable milestones and runbooks.';
				"category": 'IT Services';
				"price": '$4,000';
				"billing": 'project';
				"features": ['Current-state assessmentPolicy and identity baselines';
					'ZTN, SWG, CASB patternsPilot-to-prod plan';
					'Executive reporting',
				];
				"ctaLabel": 'Plan Zero Trust';
				"href": 'https: //ziontechgroup.com/services/zero-trust-rollout-coaching',}
		],
	};
	{,
		"name": 'Cybersecurity';
		"slug": 'cybersecurity';
		"items": [{,
				id: 'ai-threat-intelligence';
				"title": 'AI Threat Intelligence Suite';
				"description": 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.';
				"category": 'Cybersecurity';
				"price": '$3,999';
				"billing": 'month';
				"features": [,
					'AI threat detectionBehavioral analysis';
					'Automated responseThreat hunting';
					'Incident management',
				];
				"ctaLabel": 'Security Demo';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-cryptography';
				"title": 'Quantum Cryptography Solutions';
				"description": 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.';
				"category": 'Cybersecurity';
				"price": '$12,000';
				"billing": 'project';
				"features": ['Quantum key distributionPost-quantum crypto';
					'Secure communicationKey management';
					'Compliance ready',
				];
				"ctaLabel": 'Quantum Security';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'managed-detection-response';
				"title": 'Managed Detection & Response (MDR)';
				"description": '24/7 monitoring, threat hunting, and incident response with SIEM/SOAR integration.';
				"category": 'Cybersecurity';
				"price": '$3,499';
				"billing": 'month';
				"features": ['SIEM setup and tuningPlaybooks and automation';
					'Phishing and EDR integrationCompliance-ready reporting';
					'Incident response retainers',
				];
				"ctaLabel": 'Activate MDR';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'sase-rollout';
				"title": 'Secure Access Service Edge (SASE) Rollout';
				"description": 'Consolidate network and security with ZTNA, SWG, CASB, and SD-WAN.';
				"category": 'Cybersecurity';
				"price": '$20,000';
				"billing": 'project';
				"features": ['Architecture and vendor selectionPilot and phased migration';
					'Policy baselinesUser experience optimization';
					'Runbooks and training',
				];
				"ctaLabel": 'Deploy SASE';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'gdpr-dsar-portal';
				"title": 'GDPR DSAR Portal';
				"description": 'Secure intake, verification, and fulfillment of Data Subject Access Requests with audit trails.';
				"category": 'Cybersecurity';
				"price": '$129';
				"billing": 'month';
				"features": ['Identity verificationData discovery connectors';
					'Audit logs and exportsSelf-service portal and SLA tracking';
					'Webhook automation',
				];
				"ctaLabel": 'Launch Portal';
				"href": 'https: //ziontechgroup.com/services/gdpr-dsar-portal',};
			{,
				"id": 'email-deliverability-monitor-saas';
				"title": 'Email Deliverability Monitor';
				"description": 'Inbox placement checks, DMARC/SPF/DKIM validation, and reputation alerts for marketing and transactional mail.';
				"category": 'Cybersecurity';
				"price": '$39';
				"billing": 'month';
				"features": ['DMARC/SPF/DKIM verificationInbox placement and blocklist tracking';
					'Recommendations and weekly reports"Integrations": SES, SendGrid, Mailgun';
					'Alerts to Slack/Email',
				];
				"ctaLabel": 'Improve Inbox Rate';
				"href": 'https: //ziontechgroup.com/services/email-deliverability-monitor',};
			{,
				"id": 'pdf-render-api-saas';
				"title": 'PDF Render API';
				"description": 'Reliable HTML-to-PDF at scale with templates, assets, and async callbacks.';
				"category": 'Cybersecurity';
				"price": '$29';
				"billing": 'month';
				"features": ['Chromium renderer with fontsAsync rendering and webhooks';
					'Templates and asset hostingStorage destinations (S3/GCS/Azure)';
					'Usage analytics and quotas',
				];
				"ctaLabel": 'Generate PDFs';
				"href": 'https: //ziontechgroup.com/services/pdf-render-api',}
		],
	};
	{,
		"name": 'Data & Analytics';
		"slug": 'data-analytics';
		"items": [{,
				id: 'quantum-data-analytics';
				"title": 'Quantum Data Analytics Platform';
				"description": 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.';
				"category": 'Data & Analytics';
				"price": '$6,999';
				"billing": 'month';
				"features": [,
					'Quantum pattern recognitionComplex data modeling';
					'Real-time insightsPredictive analytics';
					'Visualization tools',
				];
				"ctaLabel": 'Analytics Demo';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'ai-business-intelligence';
				"title": 'AI Business Intelligence Suite';
				"description": 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.';
				"category": 'Data & Analytics';
				"price": '$2,499';
				"billing": 'month';
				"features": ['Automated insightsNatural language queries';
					'Predictive modelingCustom dashboards';
					'Data integration',
				];
				"ctaLabel": 'BI Assessment';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'data-quality-observability';
				"title": 'Data Quality & Observability';
				"description": 'Monitor freshness, completeness, and lineage to trust your analytics and AI.';
				"category": 'Data & Analytics';
				"price": '$1,499';
				"billing": 'month';
				"features": ['Column-level lineageGreat Expectations policies';
					'Alerting and incident Mgmt"Connectors": Snowflake, BigQuery, Databricks';
					'Root-cause analysis',
				];
				"ctaLabel": 'Improve Data Trust';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'modern-etl-migration';
				"title": 'Modern ETL/ELT Migration';
				"description": 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.';
				"category": 'Data & Analytics';
				"price": '$18,000';
				"billing": 'project';
				"features": ['dbt modeling and testsIncremental loads';
					'CI for analyticsCost-efficient storage';
					'Knowledge transfer',
				];
				"ctaLabel": 'Migrate Workloads';
				"href": 'https: //ziontechgroup.com/services',}
		],
	};
	{,
		"name": 'Cloud & DevOps';
		"slug": 'cloud-devops';
		"items": [{,
				id: 'autonomous-devops-platform';
				"title": 'Autonomous DevOps Platform';
				"description": 'Self-managing DevOps platform that automatically optimizes deployments, scaling, and infrastructure management.';
				"category": 'Cloud & DevOps';
				"price": '$4,999';
				"billing": 'month';
				"features": [,
					'Automated deploymentsSelf-healing infrastructure';
					'Performance optimizationCost management';
					'Continuous monitoring',
				];
				"ctaLabel": 'DevOps Demo';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-cloud-infrastructure';
				"title": 'Quantum Cloud Infrastructure';
				"description": 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.';
				"category": 'Cloud & DevOps';
				"price": '$18,000';
				"billing": 'project';
				"features": ['Quantum cloud servicesHybrid infrastructure';
					'Quantum optimizationScalable architecture';
					'Enterprise support',
				];
				"ctaLabel": 'Cloud Migration';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'serverless-application-factory';
				"title": 'Serverless Application Factory';
				"description": 'Blueprints and accelerators to build secure, low-cost serverless backends fast.';
				"category": 'Cloud & DevOps';
				"price": '$16,000';
				"billing": 'project';
				"features": ['Patterns: EventBridge, Step FunctionsIaC with CDK/Terraform';
					'Observability baked-inSECaaS and guardrails';
					'Cost-efficiency targets',
				];
				"ctaLabel": 'Build Serverless';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'disaster-recovery-blueprints';
				"title": 'Disaster Recovery Blueprints (RTO/RPO)';
				"description": 'Design and test DR strategies with automated failover and periodic game days.';
				"category": 'Cloud & DevOps';
				"price": '$20,000';
				"billing": 'project';
				"features": ['Multi-region architecturesAutomated chaos tests';
					'Backup and restore pipelinesCompliance documentation';
					'Executive tabletop exercises',
				];
				"ctaLabel": 'Harden Resilience';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'data-contracts-platform';
				"title": 'Data Contracts Platform';
				"description": 'Define and enforce data contracts across services with schema checks, drift alerts, and lineage.';
				"category": 'Cloud & DevOps';
				"price": '$149';
				"billing": 'month';
				"features": ['Contract registry and versioningCI gates and PR annotations';
					'Drift detection and alertsLineage and impact analysis';
					'Connectors for CI/CD and warehouses',
				];
				"ctaLabel": 'Enforce Contracts';
				"href": 'https: //ziontechgroup.com/services/data-contracts-platform',}
		],
	};
	{,
		"name": 'Quantum Computing';
		"slug": 'quantum-computing';
		"items": [{,
				id: 'quantum-cybersecurity-suite-2026';
				"title": 'Quantum Cybersecurity Suite 2026';
				"description": 'Revolutionary cybersecurity platform leveraging quantum-resistant algorithms and quantum key distribution for unbreakable encryption and threat detection.';
				"category": 'Quantum Computing';
				"price": '$8,999';
				"billing": 'month';
				"features": [,
					'Quantum-resistant encryption algorithmsQuantum key distribution (QKD)';
					'AI-powered threat detection with 99.99% accuracyZero-trust architecture implementation';
					'Real-time threat intelligence feedsAutomated incident response';
					'Compliance automation (SOC 2, ISO 27001, NIST)Quantum-safe certificate management';
					'Advanced behavioral analyticsCloud-native security architecture',
				];
				"ctaLabel": 'Quantum Security';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-financial-trading-platform-2026';
				"title": 'Quantum Financial Trading Platform 2026';
				"description": 'Revolutionary quantum computing-powered financial trading platform that provides ultra-fast market analysis, risk assessment, and automated trading strategies with quantum advantage.';
				"category": 'Quantum Computing';
				"price": '$15,999';
				"billing": 'month';
				"features": ['Quantum-powered market analysisUltra-fast trading execution (<1ms latency)';
					'AI-driven risk assessmentPortfolio optimization algorithms';
					'Real-time market sentiment analysisAutomated trading strategies';
					'Regulatory compliance automationMulti-asset class support';
					'Advanced risk managementPerformance analytics dashboard',
				];
				"ctaLabel": 'Quantum Trading';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-logistics-optimization-2026';
				"title": 'Quantum Logistics Optimization Platform 2026';
				"description": 'Revolutionary quantum computing-powered logistics platform that optimizes routes, reduces costs, and improves efficiency for complex supply chain and transportation networks.';
				"category": 'Quantum Computing';
				"price": '$6,999';
				"billing": 'month';
				"features": ['Quantum route optimization algorithmsReal-time traffic and weather integration';
					'Multi-modal transportation optimizationDynamic pricing optimization';
					'Fleet management automationPredictive maintenance scheduling';
					'Sustainability optimizationReal-time tracking and visibility';
					'Automated dispatchingPerformance analytics dashboard',
				];
				"ctaLabel": 'Quantum Logistics';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-biological-computing-2030';
				"title": 'Quantum Biological Computing Platform 2030';
				"description": 'Revolutionary platform that combines quantum computing with biological systems, enabling unprecedented breakthroughs in drug discovery, genetic engineering, and biological computing.';
				"category": 'Quantum Computing';
				"price": '$18,999';
				"billing": 'month';
				"features": ['Quantum-biological hybrid processingDNA computing integration';
					'Protein folding simulationDrug discovery acceleration';
					'Genetic engineering optimizationBiological circuit design';
					'Real-time biological monitoringQuantum biological sensors';
					'Biological data encryptionAdvanced research tools',
				];
				"ctaLabel": 'Quantum Biology';
				"href": 'https: //ziontechgroup.com/contact',}
		],
	};
	{,
		"name": 'Blockchain & Web3';
		"slug": 'blockchain-web3';
		"items": [{,
				id: 'decentralized-ai-marketplace';
				"title": 'Decentralized AI Marketplace';
				"description": 'Web3-powered marketplace for AI models, data, and computational resources with blockchain-based governance.';
				"category": 'Blockchain & Web3';
				"price": '$1,999';
				"billing": 'month';
				"features": [,
					'AI model marketplaceDecentralized governance';
					'Smart contractsToken economics';
					'Community-driven',
				];
				"ctaLabel": 'Marketplace Access';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-blockchain-platform';
				"title": 'Quantum Blockchain Platform';
				"description": 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.';
				"category": 'Blockchain & Web3';
				"price": '$8,999';
				"billing": 'month';
				"features": ['Quantum-resistant cryptoEnhanced consensus';
					'Scalable architectureInteroperability';
					'Enterprise features',
				];
				"ctaLabel": 'Blockchain Demo';
				"href": 'https: //ziontechgroup.com/contact',}
		],
	};
	{,
		"name": 'IoT & Edge';
		"slug": 'iot-edge';
		"items": [{,
				id: 'quantum-iot-platform';
				"title": 'Quantum IoT Platform';
				"description": 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.';
				"category": 'IoT & Edge';
				"price": '$3,999';
				"billing": 'month';
				"features": [,
					'Quantum edge processingDevice optimization';
					'Intelligent routingEnergy efficiency';
					'Scalable deployment',
				];
				"ctaLabel": 'IoT Demo';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'autonomous-edge-ai';
				"title": 'Autonomous Edge AI Platform';
				"description": 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.';
				"category": 'IoT & Edge';
				"price": '$2,999';
				"billing": 'month';
				"features": ['Autonomous optimizationEdge AI processing';
					'Network intelligenceResource management';
					'Performance monitoring',
				];
				"ctaLabel": 'Edge AI Demo';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'predictive-maintenance-iot';
				"title": 'Predictive Maintenance for IoT Fleets';
				"description": 'Deploy sensors and analytics to predict failures and optimize uptime across assets.';
				"category": 'IoT & Edge';
				"price": '$2,499';
				"billing": 'month';
				"features": ['Edge telemetry ingestionML failure prediction';
					'Work order integration (EAM/CMMS)Kitting and rollout playbooks';
					'Dashboards and alerts',
				];
				"ctaLabel": 'Reduce Downtime';
				"href": 'https: //ziontechgroup.com/services',};
			{,
				"id": 'digital-twin-starter';
				"title": 'Digital Twin Starter Kit';
				"description": 'Model physical systems with twins to simulate scenarios and optimize operations.';
				"category": 'IoT & Edge';
				"price": '$14,000';
				"billing": 'project';
				"features": ['3D/graph modelsStream processing';
					'Integration with PLC/SCADAKPI definition and alerts';
					'Pilot-to-production plan',
				];
				"ctaLabel": 'Build a Twin';
				"href": 'https: //ziontechgroup.com/services',}
		],
	};
	{,
		"name": 'Green Tech';
		"slug": 'green-tech';
		"items": [{,
				id: 'quantum-energy-optimization';
				"title": 'Quantum Energy Optimization';
				"description": 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.';
				"category": 'Green Tech';
				"price": '$12,000';
				"billing": 'month';
				"features": [,
					'Quantum energy modelingRenewable optimization';
					'Grid managementCarbon tracking';
					'Sustainability reporting',
				];
				"ctaLabel": 'Energy Assessment';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'ai-climate-prediction';
				"title": 'AI Climate Prediction Platform';
				"description": 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.';
				"category": 'Green Tech';
				"price": '$7,999';
				"billing": 'month';
				"features": ['AI climate modelingQuantum simulations';
					'Real-time predictionsRisk assessment';
					'Policy recommendations',
				];
				"ctaLabel": 'Climate Demo';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'carbon-accounting-saas';
				"title": 'Carbon Accounting & ESG Reporting';
				"description": 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.';
				"category": 'Green Tech';
				"price": '$999';
				"billing": 'month';
				"features": ['GHG Protocol-aligned factorsAutomated data pipelines';
					'Supplier questionnairesAssurance-ready exports';
					'Target tracking (SBTi)',
				];
				"ctaLabel": 'Start ESG Tracking';
				"href": 'https: //ziontechgroup.com/services',}
		],
	};
	{,
		"name": 'Space Tech';
		"slug": 'space-tech';
		"items": [{,
				id: 'satellite-ai-orchestrator';
				"title": 'Satellite AI Orchestrator';
				"description": 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.';
				"category": 'Space Tech';
				"price": '$15,000';
				"billing": 'month';
				"features": [,
					'Autonomous orbital optimizationAI-powered data analysis';
					'Real-time monitoringCollision avoidance';
					'Global coverage',
				];
				"ctaLabel": 'Launch Satellites';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-space-communications';
				"title": 'Quantum Space Communications';
				"description": 'Next-generation quantum communication system for secure, ultra-fast data transmission between Earth and space.';
				"category": 'Space Tech';
				"price": '$25,000';
				"billing": 'month';
				"features": ['Quantum entanglementUnhackable encryption';
					'Light-speed transmissionDeep space coverage';
					'Interplanetary network',
				];
				"ctaLabel": 'Connect Space';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'satellite-imagery-analytics';
				"title": 'Satellite Imagery Analytics';
				"description": 'Computer vision on multi-spectral imagery for agriculture, insurance, and defense insights.';
				"category": 'Space Tech';
				"price": '$5,999';
				"billing": 'month';
				"features": ['Change detectionCrop yield estimation';
					'Object and damage detectionAPIs and dashboards';
					'Tasking provider integrations',
				];
				"ctaLabel": 'Analyze Imagery';
				"href": 'https: //ziontechgroup.com/services',}
		],
	};
	{,
		"name": 'BioTech & Health';
		"slug": 'biotech-health';
		"items": [{,
				id: 'ai-drug-discovery-platform';
				"title": 'AI Drug Discovery Platform';
				"description": 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.';
				"category": 'BioTech & Health';
				"price": '$35,000';
				"billing": 'month';
				"features": [,
					'AI molecular modelingQuantum simulations';
					'Clinical trial optimizationDrug repurposing';
					'Regulatory compliance',
				];
				"ctaLabel": 'Discover Drugs';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'quantum-genome-analyzer';
				"title": 'Quantum Genome Analyzer';
				"description": 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.';
				"category": 'BioTech & Health';
				"price": '$18,000';
				"billing": 'month';
				"features": ['Quantum DNA sequencingPersonalized medicine';
					'Disease predictionGenetic counseling';
					'Research collaboration',
				];
				"ctaLabel": 'Analyze Genome';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'telemedicine-ai-triage';
				"title": 'Telemedicine AI Triage';
				"description": 'AI symptom checker with escalation workflows to clinicians and EHR integration.';
				"category": 'BioTech & Health';
				"price": '$1,999';
				"billing": 'month';
				"features": ['Clinical safety guardrailsHL7/FHIR integration';
					'Language and accessibilityAnalytics and outcomes tracking';
					'Privacy and consent management',
				];
				"ctaLabel": 'Enable Triage';
				"href": 'https: //ziontechgroup.com/services',}
		],
	};
	{,
		"name": 'FinTech & DeFi';
		"slug": 'fintech-defi';
		"items": [{,
				id: 'quantum-trading-algorithm';
				"title": 'Quantum Trading Algorithm';
				"description": 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.';
				"category": 'FinTech & DeFi';
				"price": '$45,000';
				"billing": 'month';
				"features": [,
					'Quantum market analysisMicrosecond trading';
					'Risk managementPortfolio optimization';
					'Regulatory compliance',
				];
				"ctaLabel": 'Start Trading';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'autonomous-defi-protocol';
				"title": 'Autonomous DeFi Protocol';
				"description": 'Self-managing DeFi protocol that automatically optimizes yields, manages risks, and executes strategies.';
				"category": 'FinTech & DeFi';
				"price": '$12,000';
				"billing": 'month';
				"features": ['Autonomous yield farmingRisk management';
					'Strategy optimizationCross-chain integration';
					'Smart contract security',
				];
				"ctaLabel": 'Deploy Protocol';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'kyc-aml-transaction-monitoring';
				"title": 'KYC/AML Transaction Monitoring';
				"description": 'Detect suspicious activity using rules + ML with investigator case management.';
				"category": 'FinTech & DeFi';
				"price": '$2,499';
				"billing": 'month';
				"features": ['Entity resolutionSanctions and watchlists';
					'Graph analyticsCase workflow and SAR exports';
					'Audit and model governance',
				];
				"ctaLabel": 'Strengthen Compliance';
				"href": 'https: //ziontechgroup.com/services',}
		],
	};
	{,
		"name": 'Metaverse & AR/VR';
		"slug": 'metaverse-ar-vr';
		"items": [{,
				id: 'quantum-metaverse-engine';
				"title": 'Quantum Metaverse Engine';
				"description": 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.';
				"category": 'Metaverse & AR/VR';
				"price": '$28,000';
				"billing": 'month';
				"features": [,
					'Quantum renderingInfinite scalability';
					'Realistic physicsCross-platform support';
					'AI-powered NPCs',
				];
				"ctaLabel": 'Enter Metaverse';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'autonomous-ar-navigation';
				"title": 'Autonomous AR Navigation';
				"description": 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.';
				"category": 'Metaverse & AR/VR';
				"price": '$8,500';
				"billing": 'month';
				"features": ['Real-time AR overlaysAutonomous navigation';
					'Smart city integrationTraffic optimization';
					'Safety monitoring',
				];
				"ctaLabel": 'Navigate AR';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'vr-training-simulators';
				"title": 'VR Training Simulators';
				"description": 'Enterprise-grade immersive learning for safety, field ops, and medical procedures.';
				"category": 'Metaverse & AR/VR';
				"price": '$30,000';
				"billing": 'project';
				"features": ['Curriculum designMulti-user scenarios';
					'LMS integration and analyticsHardware procurement guidance';
					'Operations and support',
				];
				"ctaLabel": 'Build Simulator';
				"href": 'https: //ziontechgroup.com/services',}
		],
	};
	{,
		"name": 'Autonomous Systems';
		"slug": 'autonomous-systems';
		"items": [{,
				id: 'quantum-ai-controller';
				"title": 'Quantum AI Controller';
				"description": 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.';
				"category": 'Autonomous Systems';
				"price": '$32,000';
				"billing": 'month';
				"features": [,
					'Quantum decision makingAutonomous learning';
					'System optimizationPredictive maintenance';
					'Multi-system coordination',
				];
				"ctaLabel": 'Control Systems';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'autonomous-robotics-platform';
				"title": 'Autonomous Robotics Platform';
				"description": 'Complete robotics platform for autonomous manufacturing, logistics, and service operations.';
				"category": 'Autonomous Systems';
				"price": '$22,000';
				"billing": 'month';
				"features": ['Autonomous navigationTask learning';
					'Safety protocolsMulti-robot coordination';
					'Performance analytics',
				];
				"ctaLabel": 'Deploy Robots';
				"href": 'https: //ziontechgroup.com/contact',};
			{,
				"id": 'warehouse-robotics-orchestration';
				"title": 'Warehouse Robotics Orchestration';
				"description": 'Coordinate AMRs, conveyors, and pick stations to maximize throughput and safety.';
				"category": 'Autonomous Systems';
				"price": '$9,999';
				"billing": 'month';
				"features": ['Task allocation and routing3D digital twin monitoring';
					'Workforce and robot collaborationSafety zones and policies';
					'KPIs and optimization',
				];
				"ctaLabel": 'Orchestrate Robots';
				"href": 'https: //ziontechgroup.com/services',}
		],
	};
	// New Service Categories Added,
	{,
		"name": 'Supply Chain & Logistics';
		"slug": 'supply-chain-logistics';
		"items": [{,
				id: 'autonomous-supply-chain-platform-2026';
				"title": 'Autonomous Supply Chain Platform 2026';
				"description": 'AI-powered autonomous supply chain management platform that predicts disruptions, optimizes logistics, and automates decision-making for end-to-end supply chain visibility and efficiency.';
				"category": 'Supply Chain & Logistics';
				"price": '$5,999';
				"billing": 'month';
				"features": [,
					'AI-powered demand forecasting with 98% accuracyAutonomous inventory optimization';
					'Real-time supply chain visibilityPredictive disruption detection';
					'Automated supplier selectionDynamic pricing optimization';
					'Sustainability tracking and reportingMulti-modal transportation optimization';
					'Risk assessment and mitigationCompliance automation',
				];
				"ctaLabel": 'Supply Chain';
				"href": 'https: //ziontechgroup.com/contact',}
		],
	};
	{,
		"name": 'Energy Management';
		"slug": 'energy-management';
		"items": [{,
				id: 'autonomous-energy-management-2026';
				"title": 'Autonomous Energy Management Platform 2026';
				"description": 'AI-powered autonomous energy management platform that optimizes energy consumption, predicts demand, and automates energy trading for utilities, commercial buildings, and industrial facilities.';
				"category": 'Energy Management';
				"price": '$5,499';
				"billing": 'month';
				"features": [,
					'AI-powered energy consumption optimizationReal-time demand forecasting';
					'Automated energy tradingSmart grid integration';
					'Renewable energy optimizationPredictive maintenance for energy assets';
					'Carbon footprint trackingEnergy efficiency recommendations';
					'Real-time monitoring dashboardMobile app for energy managers',
				];
				"ctaLabel": 'Energy Management';
				"href": 'https: //ziontechgroup.com/contact',}
		],
	};
	{,
		"name": 'Manufacturing Intelligence';
		"slug": 'manufacturing-intelligence';
		"items": [{,
				id: 'autonomous-manufacturing-intelligence-2026';
				"title": 'Autonomous Manufacturing Intelligence Platform 2026';
				"description": 'AI-powered autonomous manufacturing platform that optimizes production, predicts maintenance, and automates quality control.';
				"category": 'Manufacturing Intelligence';
				"price": '$5,999';
				"billing": 'month';
				"features": [,
					'AI-powered production optimizationPredictive maintenance scheduling';
					'Automated quality controlReal-time monitoring and alerting';
					'Supply chain integrationEnergy efficiency optimization';
					'Sustainability trackingPerformance analytics dashboard';
					'Mobile app for operatorsAPI integration capabilities',
				];
				"ctaLabel": 'Manufacturing';
				"href": 'https: //ziontechgroup.com/contact',}
		],
	};
	{,
		"name": 'Data Center Management';
		"slug": 'data-center-management';
		"items": [{,
				id: 'autonomous-data-center-manager-2026';
				"title": 'Autonomous Data Center Manager 2026';
				"description": 'AI-powered autonomous data center management platform that optimizes performance, reduces costs, and prevents downtime through predictive analytics and automated operations.';
				"category": 'Data Center Management';
				"price": '$4,499';
				"billing": 'month';
				"features": [,
					'AI-powered performance optimizationPredictive maintenance scheduling';
					'Automated capacity planningReal-time monitoring and alerting';
					'Energy efficiency optimizationSecurity threat detection';
					'Compliance automationMulti-cloud orchestration';
					'Disaster recovery automationCost optimization engine',
				];
				"ctaLabel": 'Data Center';
				"href": 'https: //ziontechgroup.com/contact',}
		],
	}
],';
export type ServiceItem = { id: string, title: string, description: string, category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems', price: string, billing: 'month' | 'project' | 'hour', features: string[], ctaLabel: string, href: string, external?: boolean}, export type ServiceCategory = { name: 'string, slug: string, items: ServiceItem[],' }, export const servicesCatalog: ServiceCategory[] = [, { name: 'Micro SaaS',slug: 'micro-saas',items: [ { id: 'smart-contract-risk-scanner',title: 'Smart Contract Risk Scanner',description: 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Real-time vulnerability detectionAutomated security scoring','Compliance reportingIntegration with major blockchains','24/7 monitoring dashboard' ],ctaLabel: 'Start Free Trial',href: 'https: ,},{ id: 'ai-content-optimizer',title: 'AI Content Optimizer Pro',description: 'Advanced content optimization using AI to improve SEO,readability,and engagement across all digital platforms.',category: 'Micro SaaS',price: '$199',billing: 'month',features: [ 'AI-powered SEO optimizationContent readability scoring','Multi-language supportPerformance analytics','Automated A/B testing' ],ctaLabel: 'Get Started',href: 'https: ,} ] },{ name: 'AI Solutions',slug: 'ai-solutions',items: [ { id: 'autonomous-business-manager',title: 'Autonomous Business Manager',description: 'AI-powered business management system that autonomously handles operations,decision-making,and strategic planning.',category: 'AI Solutions',price: '$2,999',billing: 'month',features: [ 'Autonomous decision makingPredictive business modeling','Resource optimizationRisk assessment','Continuous learning' ],ctaLabel: 'Request Demo',href: 'https: ,},{ id: 'consciousness-simulation-platform',title: 'Consciousness Simulation Platform',description: 'Advanced AI platform for simulating and understanding consciousness,enabling breakthrough research in cognitive science.',category: 'AI Solutions',price: '$5,999',billing: 'month',features: [ 'Neural network simulationConsciousness modeling','Research toolsData visualization','Collaborative workspace' ],ctaLabel: 'Research Access',href: 'https: ,},{ id: 'quantum-neural-network',title: 'Quantum Neural Network Platform',description: 'Revolutionary platform combining quantum computing with neural networks for unprecedented AI capabilities.',category: 'AI Solutions',price: '$8,999',billing: 'month',features: [ 'Quantum neural processingHybrid classical-quantum','Advanced training algorithmsQuantum advantage','Research collaboration' ],ctaLabel: 'Quantum Access',href: 'https: ,},{ id: 'ai-autonomous-vehicles',title: 'AI Autonomous Vehicle Platform',description: 'Complete autonomous vehicle management system with AI-driven navigation,safety,and fleet optimization.',category: 'AI Solutions',price: '$4,999',billing: 'month',features: [ 'Autonomous navigationSafety monitoring','Fleet managementPredictive maintenance','Regulatory compliance' ],ctaLabel: 'Vehicle Integration',href: 'https: ,},{ id: 'enterprise-rag-search',title: 'Enterprise RAG Search Platform',description: 'Private,secure Retrieval-Augmented Generation over your docs,wikis,tickets,and data.',category: 'AI Solutions',price: '$3,499',billing: 'month',features: [ 'Hybrid vector + keyword searchPII redaction and access control','Grounding citationsPlugins: 'Confluence',Google Drive,SharePointOn-prem or VPC deployment' ],ctaLabel: 'Launch Secure Chat',href: 'https: ,},{ id: 'agentic-copilot-suite',title: 'Agentic Copilot Suite (Sales,Support,DevOps)',description: 'Task-driven AI agents that execute workflows across CRM,ticketing,CI/CD,and cloud.',category: 'AI Solutions',price: '$4,999',billing: 'month',features: [ 'Guardrailed tool useHuman-in-the-loop approvals','Observability and audit trailsConnectors: 'Salesforce',Zendesk,GitHub,AWSOkta and SSO ready' ],ctaLabel: 'Deploy Copilots',href: 'https: ,},{ id: 'quantum-consciousness-simulation-2030',title: 'Quantum Consciousness Simulation Platform 2030',description: 'Revolutionary quantum computing platform that simulates human consciousness,enabling breakthrough research in cognitive science,psychology,and artificial general intelligence.',category: 'AI Solutions',price: '$25,000',billing: 'month',features: [ 'Quantum neural network simulationConsciousness modeling algorithms','Real-time cognitive state analysisMulti-dimensional consciousness mapping','Quantum memory and learning systemsConsciousness transfer protocols','Advanced research tools and APIsCollaborative research workspace','Real-time visualization and analyticsQuantum-classical hybrid processing' ],ctaLabel: 'Research Access',href: 'https: ,},{ id: 'autonomous-healthcare-diagnostics-2026',title: 'Autonomous Healthcare Diagnostics Platform 2026',description: 'AI-powered autonomous healthcare diagnostics platform that provides real-time medical imaging analysis,disease prediction,and treatment recommendations with FDA approval and HIPAA compliance.',category: 'AI Solutions',price: '$7,999',billing: 'month',features: [ 'AI-powered medical imaging analysisReal-time disease detection and classification','Predictive health analyticsAutomated radiology reporting','Treatment recommendation enginePatient risk assessment','Clinical decision supportHIPAA-compliant data handling','FDA-approved algorithmsMulti-modality imaging support' ],ctaLabel: 'Healthcare Integration',href: 'https: ,},{ id: 'quantum-creative-ai-studio-2026',title: 'Quantum Creative AI Studio 2026',description: 'Revolutionary quantum-powered creative AI platform that generates high-quality content,designs,and creative assets with unprecedented creativity and originality.',category: 'AI Solutions',price: '$3,999',billing: 'month',features: [ 'Quantum-powered content generationAI-driven design creation','Multi-format content generationBrand consistency automation','Creative asset optimizationReal-time collaboration tools','Version control and managementPerformance analytics','Mobile app for creatorsAPI integration capabilities' ],ctaLabel: 'Creative Access',href: 'https: ,},{ id: 'synthetic-data-generator',title: 'Synthetic Data Generator',description: 'Privacy-safe synthetic data for analytics,testing,and ML with differential privacy.',category: 'AI Solutions',price: '$119',billing: 'month',features: [ 'DP and PII maskingTabular/time-series/text modes','Utility and drift reportsSDKs and REST API','Warehouse integrations' ],ctaLabel: 'Generate Data',href: 'https: ,},{ id: 'ai-meeting-notes-agent',title: 'AI Meeting Notes Agent',description: 'Transcribes meetings,extracts action items,and syncs summaries to CRM/PM tools.',category: 'AI Solutions',price: '$69',billing: 'month',features: [ 'Accurate transcriptsAction items and owners','CRM/PM syncSecurity and auditability','Multi-platform support' ],ctaLabel: 'Start Recording',href: 'https: ,} ] },{ name: 'IT Services',slug: 'it-services',items: [ { id: 'zero-trust-architecture',title: 'Zero Trust Network Architecture',description: 'Comprehensive zero trust security implementation with continuous verification and adaptive access control.',category: 'IT Services',price: '$15,000',billing: 'project',features: [ 'Identity verificationMicro-segmentation','Continuous monitoringThreat detection','Compliance reporting' ],ctaLabel: 'Security Assessment',href: 'https: ,},{ id: 'five-g-enterprise-network',title: '5G Enterprise Network Solutions',description: 'Custom 5G network infrastructure for enterprises with ultra-low latency and massive IoT connectivity.',category: 'IT Services',price: '$25,000',billing: 'project',features: [ 'Private 5G networksNetwork slicing','Edge computingIoT integration','Performance optimization' ],ctaLabel: 'Network Design',href: 'https: ,},{ id: 'quantum-edge-computing',title: 'Quantum Edge Computing Platform',description: 'Next-generation edge computing platform leveraging quantum principles for ultra-fast processing and decision making.',category: 'IT Services',price: '$35,000',billing: 'project',features: [ 'Quantum edge processingReal-time analytics','Distributed computingEnergy optimization','Scalable architecture' ],ctaLabel: 'Edge Deployment',href: 'https: ,},{ id: 'platform-engineering-kubernetes',title: 'Platform Engineering on Kubernetes',description: 'Golden paths,IDP,and paved roads for developers with secure,standardized delivery.',category: 'IT Services',price: '$40,000',billing: 'project',features: [ 'Backstage developer portalGitOps with Argo CD or Flux','Policy-as-code (OPA/Gatekeeper)Multi-cluster and multi-cloud','SRE playbooks and training' ],ctaLabel: 'Build Your IDP',href: 'https: ,},{ id: 'finops-cloud-cost-optimization',title: 'FinOps Cloud Cost Optimization',description: 'Reduce cloud spend 20–40% with rightsizing,reservations,and architectural optimizations.',category: 'IT Services',price: '$12,000',billing: 'project',features: [ 'Cost anomaly detectionRI/Savings Plan strategy','Workload rightsizingKubernetes cost allocation','Executive reporting' ],ctaLabel: 'Cut Cloud Costs',href: 'https: ,},{ id: 'managed-kubernetes-sre',title: 'Managed Kubernetes SRE',description: 'Hands-on SRE for clusters: upgrades,security baselines,autoscaling,and incident response.',category: 'IT Services',price: '$2,500',billing: 'month',features: [ '24/7 on-call rotationGolden paths and GitOps','SLOs and error budgetsDR and backup testing','Cost and performance tuning' ],ctaLabel: 'Stabilize Clusters',href: 'https: ,},{ id: 'zero-trust-rollout-coaching',title: 'Zero Trust Rollout Coaching',description: 'Architect and guide a pragmatic Zero Trust deployment with measurable milestones and runbooks.',category: 'IT Services',price: '$4,000',billing: 'project',features: [ 'Current-state assessmentPolicy and identity baselines','ZTN,SWG,CASB patternsPilot-to-prod plan','Executive reporting' ],ctaLabel: 'Plan Zero Trust',href: 'https: ,} ] },{ name: 'Cybersecurity',slug: 'cybersecurity',items: [ { id: 'ai-threat-intelligence',title: 'AI Threat Intelligence Suite',description: 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',category: 'Cybersecurity',price: '$3,999',billing: 'month',features: [ 'AI threat detectionBehavioral analysis','Automated responseThreat hunting','Incident management' ],ctaLabel: 'Security Demo',href: 'https: ,},{ id: 'quantum-cryptography',title: 'Quantum Cryptography Solutions',description: 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.',category: 'Cybersecurity',price: '$12,000',billing: 'project',features: [ 'Quantum key distributionPost-quantum crypto','Secure communicationKey management','Compliance ready' ],ctaLabel: 'Quantum Security',href: 'https: ,},{ id: 'managed-detection-response',title: 'Managed Detection & Response (MDR)',description: '24/7 monitoring,threat hunting,and incident response with SIEM/SOAR integration.',category: 'Cybersecurity',price: '$3,499',billing: 'month',features: [ 'SIEM setup and tuningPlaybooks and automation','Phishing and EDR integrationCompliance-ready reporting','Incident response retainers' ],ctaLabel: 'Activate MDR',href: 'https: ,},{ id: 'sase-rollout',title: 'Secure Access Service Edge (SASE) Rollout',description: 'Consolidate network and security with ZTNA,SWG,CASB,and SD-WAN.',category: 'Cybersecurity',price: '$20,000',billing: 'project',features: [ 'Architecture and vendor selectionPilot and phased migration','Policy baselinesUser experience optimization','Runbooks and training' ],ctaLabel: 'Deploy SASE',href: 'https: ,},{ id: 'gdpr-dsar-portal',title: 'GDPR DSAR Portal',description: 'Secure intake,verification,and fulfillment of Data Subject Access Requests with audit trails.',category: 'Cybersecurity',price: '$129',billing: 'month',features: [ 'Identity verificationData discovery connectors','Audit logs and exportsSelf-service portal and SLA tracking','Webhook automation' ],ctaLabel: 'Launch Portal',href: 'https: ,},{ id: 'email-deliverability-monitor-saas',title: 'Email Deliverability Monitor',description: 'Inbox placement checks,DMARC/SPF/DKIM validation,and reputation alerts for marketing and transactional mail.',category: 'Cybersecurity',price: '$39',billing: 'month',features: [ 'DMARC/SPF/DKIM verificationInbox placement and blocklist tracking','Recommendations and weekly reportsIntegrations: 'SES',SendGrid,MailgunAlerts to Slack/Email' ],ctaLabel: 'Improve Inbox Rate',href: 'https: ,},{ id: 'pdf-render-api-saas',title: 'PDF Render API',description: 'Reliable HTML-to-PDF at scale with templates,assets,and async callbacks.',category: 'Cybersecurity',price: '$29',billing: 'month',features: [ 'Chromium renderer with fontsAsync rendering and webhooks','Templates and asset hostingStorage destinations (S3/GCS/Azure)','Usage analytics and quotas' ],ctaLabel: 'Generate PDFs',href: 'https: ,} ] },{ name: 'Data & Analytics',slug: 'data-analytics',items: [ { id: 'quantum-data-analytics',title: 'Quantum Data Analytics Platform',description: 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',category: 'Data & Analytics',price: '$6,999',billing: 'month',features: [ 'Quantum pattern recognitionComplex data modeling','Real-time insightsPredictive analytics','Visualization tools' ],ctaLabel: 'Analytics Demo',href: 'https: ,},{ id: 'ai-business-intelligence',title: 'AI Business Intelligence Suite',description: 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.',category: 'Data & Analytics',price: '$2,499',billing: 'month',features: [ 'Automated insightsNatural language queries','Predictive modelingCustom dashboards','Data integration' ],ctaLabel: 'BI Assessment',href: 'https: ,},{ id: 'data-quality-observability',title: 'Data Quality & Observability',description: 'Monitor freshness,completeness,and lineage to trust your analytics and AI.',category: 'Data & Analytics',price: '$1,499',billing: 'month',features: [ 'Column-level lineageGreat Expectations policies','Alerting and incident MgmtConnectors: 'Snowflake',BigQuery,DatabricksRoot-cause analysis' ],ctaLabel: 'Improve Data Trust',href: 'https: ,},{ id: 'modern-etl-migration',title: 'Modern ETL/ELT Migration',description: 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.',category: 'Data & Analytics',price: '$18,000',billing: 'project',features: [ 'dbt modeling and testsIncremental loads','CI for analyticsCost-efficient storage','Knowledge transfer' ],ctaLabel: 'Migrate Workloads',href: 'https: ,} ] },{ name: 'Cloud & DevOps',slug: 'cloud-devops',items: [ { id: 'autonomous-devops-platform',title: 'Autonomous DevOps Platform',description: 'Self-managing DevOps platform that automatically optimizes deployments,scaling,and infrastructure management.',category: 'Cloud & DevOps',price: '$4,999',billing: 'month',features: [ 'Automated deploymentsSelf-healing infrastructure','Performance optimizationCost management','Continuous monitoring' ],ctaLabel: 'DevOps Demo',href: 'https: ,},{ id: 'quantum-cloud-infrastructure',title: 'Quantum Cloud Infrastructure',description: 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.',category: 'Cloud & DevOps',price: '$18,000',billing: 'project',features: [ 'Quantum cloud servicesHybrid infrastructure','Quantum optimizationScalable architecture','Enterprise support' ],ctaLabel: 'Cloud Migration',href: 'https: ,},{ id: 'serverless-application-factory',title: 'Serverless Application Factory',description: 'Blueprints and accelerators to build secure,low-cost serverless backends fast.',category: 'Cloud & DevOps',price: '$16,000',billing: 'project',features: [ 'Patterns: EventBridge,Step FunctionsIaC with CDK/Terraform','Observability baked-inSECaaS and guardrails','Cost-efficiency targets' ],ctaLabel: 'Build Serverless',href: 'https: ,},{ id: 'disaster-recovery-blueprints',title: 'Disaster Recovery Blueprints (RTO/RPO)',description: 'Design and test DR strategies with automated failover and periodic game days.',category: 'Cloud & DevOps',price: '$20,000',billing: 'project',features: [ 'Multi-region architecturesAutomated chaos tests','Backup and restore pipelinesCompliance documentation','Executive tabletop exercises' ],ctaLabel: 'Harden Resilience',href: 'https: ,},{ id: 'data-contracts-platform',title: 'Data Contracts Platform',description: 'Define and enforce data contracts across services with schema checks,drift alerts,and lineage.',category: 'Cloud & DevOps',price: '$149',billing: 'month',features: [ 'Contract registry and versioningCI gates and PR annotations','Drift detection and alertsLineage and impact analysis','Connectors for CI/CD and warehouses' ],ctaLabel: 'Enforce Contracts',href: 'https: ,} ] },{ name: 'Quantum Computing',slug: 'quantum-computing',items: [ { id: 'quantum-cybersecurity-suite-2026',title: 'Quantum Cybersecurity Suite 2026',description: 'Revolutionary cybersecurity platform leveraging quantum-resistant algorithms and quantum key distribution for unbreakable encryption and threat detection.',category: 'Quantum Computing',price: '$8,999',billing: 'month',features: [ 'Quantum-resistant encryption algorithmsQuantum key distribution (QKD)','AI-powered threat detection with 99.99% accuracyZero-trust architecture implementation','Real-time threat intelligence feedsAutomated incident response','Compliance automation (SOC 2,ISO 27001,NIST)Quantum-safe certificate management','Advanced behavioral analyticsCloud-native security architecture' ],ctaLabel: 'Quantum Security',href: 'https: ,},{ id: 'quantum-financial-trading-platform-2026',title: 'Quantum Financial Trading Platform 2026',description: 'Revolutionary quantum computing-powered financial trading platform that provides ultra-fast market analysis,risk assessment,and automated trading strategies with quantum advantage.',category: 'Quantum Computing',price: '$15,999',billing: 'month',features: [ 'Quantum-powered market analysisUltra-fast trading execution (<1ms latency)','AI-driven risk assessmentPortfolio optimization algorithms','Real-time market sentiment analysisAutomated trading strategies','Regulatory compliance automationMulti-asset class support','Advanced risk managementPerformance analytics dashboard' ],ctaLabel: 'Quantum Trading',href: 'https: ,},{ id: 'quantum-logistics-optimization-2026',title: 'Quantum Logistics Optimization Platform 2026',description: 'Revolutionary quantum computing-powered logistics platform that optimizes routes,reduces costs,and improves efficiency for complex supply chain and transportation networks.',category: 'Quantum Computing',price: '$6,999',billing: 'month',features: [ 'Quantum route optimization algorithmsReal-time traffic and weather integration','Multi-modal transportation optimizationDynamic pricing optimization','Fleet management automationPredictive maintenance scheduling','Sustainability optimizationReal-time tracking and visibility','Automated dispatchingPerformance analytics dashboard' ],ctaLabel: 'Quantum Logistics',href: 'https: ,},{ id: 'quantum-biological-computing-2030',title: 'Quantum Biological Computing Platform 2030',description: 'Revolutionary platform that combines quantum computing with biological systems,enabling unprecedented breakthroughs in drug discovery,genetic engineering,and biological computing.',category: 'Quantum Computing',price: '$18,999',billing: 'month',features: [ 'Quantum-biological hybrid processingDNA computing integration','Protein folding simulationDrug discovery acceleration','Genetic engineering optimizationBiological circuit design','Real-time biological monitoringQuantum biological sensors','Biological data encryptionAdvanced research tools' ],ctaLabel: 'Quantum Biology',href: 'https: ,} ] },{ name: 'Blockchain & Web3',slug: 'blockchain-web3',items: [ { id: 'decentralized-ai-marketplace',title: 'Decentralized AI Marketplace',description: 'Web3-powered marketplace for AI models,data,and computational resources with blockchain-based governance.',category: 'Blockchain & Web3',price: '$1,999',billing: 'month',features: [ 'AI model marketplaceDecentralized governance','Smart contractsToken economics','Community-driven' ],ctaLabel: 'Marketplace Access',href: 'https: ,},{ id: 'quantum-blockchain-platform',title: 'Quantum Blockchain Platform',description: 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.',category: 'Blockchain & Web3',price: '$8,999',billing: 'month',features: [ 'Quantum-resistant cryptoEnhanced consensus','Scalable architectureInteroperability','Enterprise features' ],ctaLabel: 'Blockchain Demo',href: 'https: ,} ] },{ name: 'IoT & Edge',slug: 'iot-edge',items: [ { id: 'quantum-iot-platform',title: 'Quantum IoT Platform',description: 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',category: 'IoT & Edge',price: '$3,999',billing: 'month',features: [ 'Quantum edge processingDevice optimization','Intelligent routingEnergy efficiency','Scalable deployment' ],ctaLabel: 'IoT Demo',href: 'https: ,},{ id: 'autonomous-edge-ai',title: 'Autonomous Edge AI Platform',description: 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.',category: 'IoT & Edge',price: '$2,999',billing: 'month',features: [ 'Autonomous optimizationEdge AI processing','Network intelligenceResource management','Performance monitoring' ],ctaLabel: 'Edge AI Demo',href: 'https: ,},{ id: 'predictive-maintenance-iot',title: 'Predictive Maintenance for IoT Fleets',description: 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',category: 'IoT & Edge',price: '$2,499',billing: 'month',features: [ 'Edge telemetry ingestionML failure prediction','Work order integration (EAM/CMMS)Kitting and rollout playbooks','Dashboards and alerts' ],ctaLabel: 'Reduce Downtime',href: 'https: ,},{ id: 'digital-twin-starter',title: 'Digital Twin Starter Kit',description: 'Model physical systems with twins to simulate scenarios and optimize operations.',category: 'IoT & Edge',price: '$14,000',billing: 'project',features: [ '3D/graph modelsStream processing','Integration with PLC/SCADAKPI definition and alerts','Pilot-to-production plan' ],ctaLabel: 'Build a Twin',href: 'https: ,} ] },{ name: 'Green Tech',slug: 'green-tech',items: [ { id: 'quantum-energy-optimization',title: 'Quantum Energy Optimization',description: 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',category: 'Green Tech',price: '$12,000',billing: 'month',features: [ 'Quantum energy modelingRenewable optimization','Grid managementCarbon tracking','Sustainability reporting' ],ctaLabel: 'Energy Assessment',href: 'https: ,},{ id: 'ai-climate-prediction',title: 'AI Climate Prediction Platform',description: 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.',category: 'Green Tech',price: '$7,999',billing: 'month',features: [ 'AI climate modelingQuantum simulations','Real-time predictionsRisk assessment','Policy recommendations' ],ctaLabel: 'Climate Demo',href: 'https: ,},{ id: 'carbon-accounting-saas',title: 'Carbon Accounting & ESG Reporting',description: 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',category: 'Green Tech',price: '$999',billing: 'month',features: [ 'GHG Protocol-aligned factorsAutomated data pipelines','Supplier questionnairesAssurance-ready exports','Target tracking (SBTi)' ],ctaLabel: 'Start ESG Tracking',href: 'https: ,} ] },{ name: 'Space Tech',slug: 'space-tech',items: [ { id: 'satellite-ai-orchestrator',title: 'Satellite AI Orchestrator',description: 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',category: 'Space Tech',price: '$15,000',billing: 'month',features: [ 'Autonomous orbital optimizationAI-powered data analysis','Real-time monitoringCollision avoidance','Global coverage' ],ctaLabel: 'Launch Satellites',href: 'https: ,},{ id: 'quantum-space-communications',title: 'Quantum Space Communications',description: 'Next-generation quantum communication system for secure,ultra-fast data transmission between Earth and space.',category: 'Space Tech',price: '$25,000',billing: 'month',features: [ 'Quantum entanglementUnhackable encryption','Light-speed transmissionDeep space coverage','Interplanetary network' ],ctaLabel: 'Connect Space',href: 'https: ,},{ id: 'satellite-imagery-analytics',title: 'Satellite Imagery Analytics',description: 'Computer vision on multi-spectral imagery for agriculture,insurance,and defense insights.',category: 'Space Tech',price: '$5,999',billing: 'month',features: [ 'Change detectionCrop yield estimation','Object and damage detectionAPIs and dashboards','Tasking provider integrations' ],ctaLabel: 'Analyze Imagery',href: 'https: ,} ] },{ name: 'BioTech & Health',slug: 'biotech-health',items: [ { id: 'ai-drug-discovery-platform',title: 'AI Drug Discovery Platform',description: 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',category: 'BioTech & Health',price: '$35,000',billing: 'month',features: [ 'AI molecular modelingQuantum simulations','Clinical trial optimizationDrug repurposing','Regulatory compliance' ],ctaLabel: 'Discover Drugs',href: 'https: ,},{ id: 'quantum-genome-analyzer',title: 'Quantum Genome Analyzer',description: 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.',category: 'BioTech & Health',price: '$18,000',billing: 'month',features: [ 'Quantum DNA sequencingPersonalized medicine','Disease predictionGenetic counseling','Research collaboration' ],ctaLabel: 'Analyze Genome',href: 'https: ,},{ id: 'telemedicine-ai-triage',title: 'Telemedicine AI Triage',description: 'AI symptom checker with escalation workflows to clinicians and EHR integration.',category: 'BioTech & Health',price: '$1,999',billing: 'month',features: [ 'Clinical safety guardrailsHL7/FHIR integration','Language and accessibilityAnalytics and outcomes tracking','Privacy and consent management' ],ctaLabel: 'Enable Triage',href: 'https: ,} ] },{ name: 'FinTech & DeFi',slug: 'fintech-defi',items: [ { id: 'quantum-trading-algorithm',title: 'Quantum Trading Algorithm',description: 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',category: 'FinTech & DeFi',price: '$45,000',billing: 'month',features: [ 'Quantum market analysisMicrosecond trading','Risk managementPortfolio optimization','Regulatory compliance' ],ctaLabel: 'Start Trading',href: 'https: ,},{ id: 'autonomous-defi-protocol',title: 'Autonomous DeFi Protocol',description: 'Self-managing DeFi protocol that automatically optimizes yields,manages risks,and executes strategies.',category: 'FinTech & DeFi',price: '$12,000',billing: 'month',features: [ 'Autonomous yield farmingRisk management','Strategy optimizationCross-chain integration','Smart contract security' ],ctaLabel: 'Deploy Protocol',href: 'https: ,},{ id: 'kyc-aml-transaction-monitoring',title: 'KYC/AML Transaction Monitoring',description: 'Detect suspicious activity using rules + ML with investigator case management.',category: 'FinTech & DeFi',price: '$2,499',billing: 'month',features: [ 'Entity resolutionSanctions and watchlists','Graph analyticsCase workflow and SAR exports','Audit and model governance' ],ctaLabel: 'Strengthen Compliance',href: 'https: ,} ] },{ name: 'Metaverse & AR/VR',slug: 'metaverse-ar-vr',items: [ { id: 'quantum-metaverse-engine',title: 'Quantum Metaverse Engine',description: 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',category: 'Metaverse & AR/VR',price: '$28,000',billing: 'month',features: [ 'Quantum renderingInfinite scalability','Realistic physicsCross-platform support','AI-powered NPCs' ],ctaLabel: 'Enter Metaverse',href: 'https: ,},{ id: 'autonomous-ar-navigation',title: 'Autonomous AR Navigation',description: 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.',category: 'Metaverse & AR/VR',price: '$8,500',billing: 'month',features: [ 'Real-time AR overlaysAutonomous navigation','Smart city integrationTraffic optimization','Safety monitoring' ],ctaLabel: 'Navigate AR',href: 'https: ,},{ id: 'vr-training-simulators',title: 'VR Training Simulators',description: 'Enterprise-grade immersive learning for safety,field ops,and medical procedures.',category: 'Metaverse & AR/VR',price: '$30,000',billing: 'project',features: [ 'Curriculum designMulti-user scenarios','LMS integration and analyticsHardware procurement guidance','Operations and support' ],ctaLabel: 'Build Simulator',href: 'https: ,} ] },{ name: 'Autonomous Systems',slug: 'autonomous-systems',items: [ { id: 'quantum-ai-controller',title: 'Quantum AI Controller',description: 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',category: 'Autonomous Systems',price: '$32,000',billing: 'month',features: [ 'Quantum decision makingAutonomous learning','System optimizationPredictive maintenance','Multi-system coordination' ],ctaLabel: 'Control Systems',href: 'https: ,},{ id: 'autonomous-robotics-platform',title: 'Autonomous Robotics Platform',description: 'Complete robotics platform for autonomous manufacturing,logistics,and service operations.',category: 'Autonomous Systems',price: '$22,000',billing: 'month',features: [ 'Autonomous navigationTask learning','Safety protocolsMulti-robot coordination','Performance analytics' ],ctaLabel: 'Deploy Robots',href: 'https: ,},{ id: 'warehouse-robotics-orchestration',title: 'Warehouse Robotics Orchestration',description: 'Coordinate AMRs,conveyors,and pick stations to maximize throughput and safety.',category: 'Autonomous Systems',price: '$9,999',billing: 'month',features: [ 'Task allocation and routing3D digital twin monitoring','Workforce and robot collaborationSafety zones and policies','KPIs and optimization' ],ctaLabel: 'Orchestrate Robots',href: 'https: ,} ] },{ name: 'Supply Chain & Logistics',slug: 'supply-chain-logistics',items: [ { id: 'autonomous-supply-chain-platform-2026',title: 'Autonomous Supply Chain Platform 2026',description: 'AI-powered autonomous supply chain management platform that predicts disruptions,optimizes logistics,and automates decision-making for end-to-end supply chain visibility and efficiency.',category: 'Supply Chain & Logistics',price: '$5,999',billing: 'month',features: [ 'AI-powered demand forecasting with 98% accuracyAutonomous inventory optimization','Real-time supply chain visibilityPredictive disruption detection','Automated supplier selectionDynamic pricing optimization','Sustainability tracking and reportingMulti-modal transportation optimization','Risk assessment and mitigationCompliance automation' ],ctaLabel: 'Supply Chain',href: 'https: ,} ] },{ name: 'Energy Management',slug: 'energy-management',items: [ { id: 'autonomous-energy-management-2026',title: 'Autonomous Energy Management Platform 2026',description: 'AI-powered autonomous energy management platform that optimizes energy consumption,predicts demand,and automates energy trading for utilities,commercial buildings,and industrial facilities.',category: 'Energy Management',price: '$5,499',billing: 'month',features: [ 'AI-powered energy consumption optimizationReal-time demand forecasting','Automated energy tradingSmart grid integration','Renewable energy optimizationPredictive maintenance for energy assets','Carbon footprint trackingEnergy efficiency recommendations','Real-time monitoring dashboardMobile app for energy managers' ],ctaLabel: 'Energy Management',href: 'https: ,} ] },{ name: 'Manufacturing Intelligence',slug: 'manufacturing-intelligence',items: [ { id: 'autonomous-manufacturing-intelligence-2026',title: 'Autonomous Manufacturing Intelligence Platform 2026',description: 'AI-powered autonomous manufacturing platform that optimizes production,predicts maintenance,and automates quality control.',category: 'Manufacturing Intelligence',price: '$5,999',billing: 'month',features: [ 'AI-powered production optimizationPredictive maintenance scheduling','Automated quality controlReal-time monitoring and alerting','Supply chain integrationEnergy efficiency optimization','Sustainability trackingPerformance analytics dashboard','Mobile app for operatorsAPI integration capabilities' ],ctaLabel: 'Manufacturing',href: 'https: ,} ] },{ name: 'Data Center Management',slug: 'data-center-management',items: [ { id: 'autonomous-data-center-manager-2026',title: 'Autonomous Data Center Manager 2026',description: 'AI-powered autonomous data center management platform that optimizes performance,reduces costs,and prevents downtime through predictive analytics and automated operations.',category: 'Data Center Management',price: '$4,499',billing: 'month',features: [ 'AI-powered performance optimizationPredictive maintenance scheduling','Automated capacity planningReal-time monitoring and alerting','Energy efficiency optimizationSecurity threat detection','Compliance automationMulti-cloud orchestration','Disaster recovery automationCost optimization engine' ],ctaLabel: 'Data Center',href: 'https: ,} ] } ];
export type ServiceItem = { id: string, title: string, description: string, category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems, price: string, billing: 'month' | 'project' | 'hour features: string[], ctaLabel: string, href: string, external?: boolean}, export type ServiceCategory = { name: string, slug: string, items: ServiceItem[],}, export const servicesCatalog: ServiceCategory[] = [, { name: 'Micro SaaS',slug: 'micro-saas',items: [ { id: 'smart-contract-risk-scanner',title: 'Smart Contract Risk Scanner',description: 'Continuous vulnerability scanning and risk assessment for blockchain smart contracts with automated security recommendations.',category: 'Micro SaaS',price: '$299',billing: 'month',features: [ 'Real-time vulnerability detectionAutomated security scoring','Compliance reportingIntegration with major blockchains','24/7 monitoring dashboard' ],ctaLabel: 'Start Free Trial',href: 'https: ,},{ id: 'ai-content-optimizer',title: 'AI Content Optimizer Pro',description: 'Advanced content optimization using AI to improve SEO,readability,and engagement across all digital platforms.',category: 'Micro SaaS',price: '$199',billing: 'month',features: [ 'AI-powered SEO optimizationContent readability scoring','Multi-language supportPerformance analytics','Automated A/B testing' ],ctaLabel: 'Get Started',href: 'https: ,} ] },{ name: 'AI Solutions',slug: 'ai-solutions',items: [ { id: 'autonomous-business-manager',title: 'Autonomous Business Manager',description: 'AI-powered business management system that autonomously handles operations,decision-making,and strategic planning.',category: 'AI Solutions',price: '$2,999',billing: 'month',features: [ 'Autonomous decision makingPredictive business modeling','Resource optimizationRisk assessment','Continuous learning' ],ctaLabel: 'Request Demo',href: 'https: ,},{ id: 'consciousness-simulation-platform',title: 'Consciousness Simulation Platform',description: 'Advanced AI platform for simulating and understanding consciousness,enabling breakthrough research in cognitive science.',category: 'AI Solutions',price: '$5,999',billing: 'month',features: [ 'Neural network simulationConsciousness modeling','Research toolsData visualization','Collaborative workspace' ],ctaLabel: 'Research Access',href: 'https: ,},{ id: 'quantum-neural-network',title: 'Quantum Neural Network Platform',description: 'Revolutionary platform combining quantum computing with neural networks for unprecedented AI capabilities.',category: 'AI Solutions',price: '$8,999',billing: 'month',features: [ 'Quantum neural processingHybrid classical-quantum','Advanced training algorithmsQuantum advantage','Research collaboration' ],ctaLabel: 'Quantum Access',href: 'https: ,},{ id: 'ai-autonomous-vehicles',title: 'AI Autonomous Vehicle Platform',description: 'Complete autonomous vehicle management system with AI-driven navigation,safety,and fleet optimization.',category: 'AI Solutions',price: '$4,999',billing: 'month',features: [ 'Autonomous navigationSafety monitoring','Fleet managementPredictive maintenance','Regulatory compliance' ],ctaLabel: 'Vehicle Integration',href: 'https: ,},{ id: 'enterprise-rag-search',title: 'Enterprise RAG Search Platform',description: 'Private,secure Retrieval-Augmented Generation over your docs,wikis,tickets,and data.',category: 'AI Solutions',price: '$3,499',billing: 'month',features: [ 'Hybrid vector + keyword searchPII redaction and access control','Grounding citationsPlugins: Confluence,Google Drive,SharePoint','On-prem or VPC deployment' ],ctaLabel: 'Launch Secure Chat',href: 'https: ,},{ id: 'agentic-copilot-suite',title: 'Agentic Copilot Suite (Sales,Support,DevOps)',description: 'Task-driven AI agents that execute workflows across CRM,ticketing,CI/CD,and cloud.',category: 'AI Solutions',price: '$4,999',billing: 'month',features: [ 'Guardrailed tool useHuman-in-the-loop approvals','Observability and audit trailsConnectors: Salesforce,Zendesk,GitHub,AWS','Okta and SSO ready' ],ctaLabel: 'Deploy Copilots',href: 'https: ,},{ id: 'quantum-consciousness-simulation-2030',title: 'Quantum Consciousness Simulation Platform 2030',description: 'Revolutionary quantum computing platform that simulates human consciousness,enabling breakthrough research in cognitive science,psychology,and artificial general intelligence.',category: 'AI Solutions',price: '$25,000',billing: 'month',features: [ 'Quantum neural network simulationConsciousness modeling algorithms','Real-time cognitive state analysisMulti-dimensional consciousness mapping','Quantum memory and learning systemsConsciousness transfer protocols','Advanced research tools and APIsCollaborative research workspace','Real-time visualization and analyticsQuantum-classical hybrid processing' ],ctaLabel: 'Research Access',href: 'https: ,},{ id: 'autonomous-healthcare-diagnostics-2026',title: 'Autonomous Healthcare Diagnostics Platform 2026',description: 'AI-powered autonomous healthcare diagnostics platform that provides real-time medical imaging analysis,disease prediction,and treatment recommendations with FDA approval and HIPAA compliance.',category: 'AI Solutions',price: '$7,999',billing: 'month',features: [ 'AI-powered medical imaging analysisReal-time disease detection and classification','Predictive health analyticsAutomated radiology reporting','Treatment recommendation enginePatient risk assessment','Clinical decision supportHIPAA-compliant data handling','FDA-approved algorithmsMulti-modality imaging support' ],ctaLabel: 'Healthcare Integration',href: 'https: ,},{ id: 'quantum-creative-ai-studio-2026',title: 'Quantum Creative AI Studio 2026',description: 'Revolutionary quantum-powered creative AI platform that generates high-quality content,designs,and creative assets with unprecedented creativity and originality.',category: 'AI Solutions',price: '$3,999',billing: 'month',features: [ 'Quantum-powered content generationAI-driven design creation','Multi-format content generationBrand consistency automation','Creative asset optimizationReal-time collaboration tools','Version control and managementPerformance analytics','Mobile app for creatorsAPI integration capabilities' ],ctaLabel: 'Creative Access',href: 'https: ,},{ id: 'synthetic-data-generator',title: 'Synthetic Data Generator',description: 'Privacy-safe synthetic data for analytics,testing,and ML with differential privacy.',category: 'AI Solutions',price: '$119',billing: 'month',features: [ 'DP and PII maskingTabular/time-series/text modes','Utility and drift reportsSDKs and REST API','Warehouse integrations' ],ctaLabel: 'Generate Data',href: 'https: ,},{ id: 'ai-meeting-notes-agent',title: 'AI Meeting Notes Agent',description: 'Transcribes meetings,extracts action items,and syncs summaries to CRM/PM tools.',category: 'AI Solutions',price: '$69',billing: 'month',features: [ 'Accurate transcriptsAction items and owners','CRM/PM syncSecurity and auditability','Multi-platform support' ],ctaLabel: 'Start Recording',href: 'https: ,} ] },{ name: 'IT Services',slug: 'it-services',items: [ { id: 'zero-trust-architecture',title: 'Zero Trust Network Architecture',description: 'Comprehensive zero trust security implementation with continuous verification and adaptive access control.',category: 'IT Services',price: '$15,000',billing: 'project',features: [ 'Identity verificationMicro-segmentation','Continuous monitoringThreat detection','Compliance reporting' ],ctaLabel: 'Security Assessment',href: 'https: ,},{ id: 'five-g-enterprise-network',title: '5G Enterprise Network Solutions',description: 'Custom 5G network infrastructure for enterprises with ultra-low latency and massive IoT connectivity.',category: 'IT Services',price: '$25,000',billing: 'project',features: [ 'Private 5G networksNetwork slicing','Edge computingIoT integration','Performance optimization' ],ctaLabel: 'Network Design',href: 'https: ,},{ id: 'quantum-edge-computing',title: 'Quantum Edge Computing Platform',description: 'Next-generation edge computing platform leveraging quantum principles for ultra-fast processing and decision making.',category: 'IT Services',price: '$35,000',billing: 'project',features: [ 'Quantum edge processingReal-time analytics','Distributed computingEnergy optimization','Scalable architecture' ],ctaLabel: 'Edge Deployment',href: 'https: ,},{ id: 'platform-engineering-kubernetes',title: 'Platform Engineering on Kubernetes',description: 'Golden paths,IDP,and paved roads for developers with secure,standardized delivery.',category: 'IT Services',price: '$40,000',billing: 'project',features: [ 'Backstage developer portalGitOps with Argo CD or Flux','Policy-as-code (OPA/Gatekeeper)Multi-cluster and multi-cloud','SRE playbooks and training' ],ctaLabel: 'Build Your IDP',href: 'https: ,},{ id: 'finops-cloud-cost-optimization',title: 'FinOps Cloud Cost Optimization',description: 'Reduce cloud spend 20–40% with rightsizing,reservations,and architectural optimizations.',category: 'IT Services',price: '$12,000',billing: 'project',features: [ 'Cost anomaly detectionRI/Savings Plan strategy','Workload rightsizingKubernetes cost allocation','Executive reporting' ],ctaLabel: 'Cut Cloud Costs',href: 'https: ,},{ id: 'managed-kubernetes-sre',title: 'Managed Kubernetes SRE',description: 'Hands-on SRE for clusters: upgrades,security baselines,autoscaling,and incident response.',category: 'IT Services',price: '$2,500',billing: 'month',features: [ '24/7 on-call rotationGolden paths and GitOps','SLOs and error budgetsDR and backup testing','Cost and performance tuning' ],ctaLabel: 'Stabilize Clusters',href: 'https: ,},{ id: 'zero-trust-rollout-coaching',title: 'Zero Trust Rollout Coaching',description: 'Architect and guide a pragmatic Zero Trust deployment with measurable milestones and runbooks.',category: 'IT Services',price: '$4,000',billing: 'project',features: [ 'Current-state assessmentPolicy and identity baselines','ZTN,SWG,CASB patternsPilot-to-prod plan','Executive reporting' ],ctaLabel: 'Plan Zero Trust',href: 'https: ,} ] },{ name: 'Cybersecurity',slug: 'cybersecurity',items: [ { id: 'ai-threat-intelligence',title: 'AI Threat Intelligence Suite',description: 'Advanced threat detection and response system using AI to identify and neutralize cyber threats in real-time.',category: 'Cybersecurity',price: '$3,999',billing: 'month',features: [ 'AI threat detectionBehavioral analysis','Automated responseThreat hunting','Incident management' ],ctaLabel: 'Security Demo',href: 'https: ,},{ id: 'quantum-cryptography',title: 'Quantum Cryptography Solutions',description: 'Future-proof cryptography using quantum key distribution for unbreakable security in the quantum era.',category: 'Cybersecurity',price: '$12,000',billing: 'project',features: [ 'Quantum key distributionPost-quantum crypto','Secure communicationKey management','Compliance ready' ],ctaLabel: 'Quantum Security',href: 'https: ,},{ id: 'managed-detection-response',title: 'Managed Detection & Response (MDR)',description: '24/7 monitoring,threat hunting,and incident response with SIEM/SOAR integration.',category: 'Cybersecurity',price: '$3,499',billing: 'month',features: [ 'SIEM setup and tuningPlaybooks and automation','Phishing and EDR integrationCompliance-ready reporting','Incident response retainers' ],ctaLabel: 'Activate MDR',href: 'https: ,},{ id: 'sase-rollout',title: 'Secure Access Service Edge (SASE) Rollout',description: 'Consolidate network and security with ZTNA,SWG,CASB,and SD-WAN.',category: 'Cybersecurity',price: '$20,000',billing: 'project',features: [ 'Architecture and vendor selectionPilot and phased migration','Policy baselinesUser experience optimization','Runbooks and training' ],ctaLabel: 'Deploy SASE',href: 'https: ,},{ id: 'gdpr-dsar-portal',title: 'GDPR DSAR Portal',description: 'Secure intake,verification,and fulfillment of Data Subject Access Requests with audit trails.',category: 'Cybersecurity',price: '$129',billing: 'month',features: [ 'Identity verificationData discovery connectors','Audit logs and exportsSelf-service portal and SLA tracking','Webhook automation' ],ctaLabel: 'Launch Portal',href: 'https: ,},{ id: 'email-deliverability-monitor-saas',title: 'Email Deliverability Monitor',description: 'Inbox placement checks,DMARC/SPF/DKIM validation,and reputation alerts for marketing and transactional mail.',category: 'Cybersecurity',price: '$39',billing: 'month',features: [ 'DMARC/SPF/DKIM verificationInbox placement and blocklist tracking','Recommendations and weekly reportsIntegrations: SES,SendGrid,Mailgun','Alerts to Slack/Email' ],ctaLabel: 'Improve Inbox Rate',href: 'https: ,},{ id: 'pdf-render-api-saas',title: 'PDF Render API',description: 'Reliable HTML-to-PDF at scale with templates,assets,and async callbacks.',category: 'Cybersecurity',price: '$29',billing: 'month',features: [ 'Chromium renderer with fontsAsync rendering and webhooks','Templates and asset hostingStorage destinations (S3/GCS/Azure)','Usage analytics and quotas' ],ctaLabel: 'Generate PDFs',href: 'https: ,} ] },{ name: 'Data & Analytics',slug: 'data-analytics',items: [ { id: 'quantum-data-analytics',title: 'Quantum Data Analytics Platform',description: 'Revolutionary data analytics platform leveraging quantum computing for complex pattern recognition and insights.',category: 'Data & Analytics',price: '$6,999',billing: 'month',features: [ 'Quantum pattern recognitionComplex data modeling','Real-time insightsPredictive analytics','Visualization tools' ],ctaLabel: 'Analytics Demo',href: 'https: ,},{ id: 'ai-business-intelligence',title: 'AI Business Intelligence Suite',description: 'Intelligent business analytics platform that automatically discovers insights and generates actionable recommendations.',category: 'Data & Analytics',price: '$2,499',billing: 'month',features: [ 'Automated insightsNatural language queries','Predictive modelingCustom dashboards','Data integration' ],ctaLabel: 'BI Assessment',href: 'https: ,},{ id: 'data-quality-observability',title: 'Data Quality & Observability',description: 'Monitor freshness,completeness,and lineage to trust your analytics and AI.',category: 'Data & Analytics',price: '$1,499',billing: 'month',features: [ 'Column-level lineageGreat Expectations policies','Alerting and incident MgmtConnectors: Snowflake,BigQuery,Databricks','Root-cause analysis' ],ctaLabel: 'Improve Data Trust',href: 'https: ,},{ id: 'modern-etl-migration',title: 'Modern ETL/ELT Migration',description: 'Re-platform legacy pipelines to scalable ELT with dbt and cloud warehouses.',category: 'Data & Analytics',price: '$18,000',billing: 'project',features: [ 'dbt modeling and testsIncremental loads','CI for analyticsCost-efficient storage','Knowledge transfer' ],ctaLabel: 'Migrate Workloads',href: 'https: ,} ] },{ name: 'Cloud & DevOps',slug: 'cloud-devops',items: [ { id: 'autonomous-devops-platform',title: 'Autonomous DevOps Platform',description: 'Self-managing DevOps platform that automatically optimizes deployments,scaling,and infrastructure management.',category: 'Cloud & DevOps',price: '$4,999',billing: 'month',features: [ 'Automated deploymentsSelf-healing infrastructure','Performance optimizationCost management','Continuous monitoring' ],ctaLabel: 'DevOps Demo',href: 'https: ,},{ id: 'quantum-cloud-infrastructure',title: 'Quantum Cloud Infrastructure',description: 'Next-generation cloud infrastructure optimized for quantum computing workloads and hybrid classical-quantum applications.',category: 'Cloud & DevOps',price: '$18,000',billing: 'project',features: [ 'Quantum cloud servicesHybrid infrastructure','Quantum optimizationScalable architecture','Enterprise support' ],ctaLabel: 'Cloud Migration',href: 'https: ,},{ id: 'serverless-application-factory',title: 'Serverless Application Factory',description: 'Blueprints and accelerators to build secure,low-cost serverless backends fast.',category: 'Cloud & DevOps',price: '$16,000',billing: 'project',features: [ 'Patterns: EventBridge,Step FunctionsIaC with CDK/Terraform','Observability baked-inSECaaS and guardrails','Cost-efficiency targets' ],ctaLabel: 'Build Serverless',href: 'https: ,},{ id: 'disaster-recovery-blueprints',title: 'Disaster Recovery Blueprints (RTO/RPO)',description: 'Design and test DR strategies with automated failover and periodic game days.',category: 'Cloud & DevOps',price: '$20,000',billing: 'project',features: [ 'Multi-region architecturesAutomated chaos tests','Backup and restore pipelinesCompliance documentation','Executive tabletop exercises' ],ctaLabel: 'Harden Resilience',href: 'https: ,},{ id: 'data-contracts-platform',title: 'Data Contracts Platform',description: 'Define and enforce data contracts across services with schema checks,drift alerts,and lineage.',category: 'Cloud & DevOps',price: '$149',billing: 'month',features: [ 'Contract registry and versioningCI gates and PR annotations','Drift detection and alertsLineage and impact analysis','Connectors for CI/CD and warehouses' ],ctaLabel: 'Enforce Contracts',href: 'https: ,} ] },{ name: 'Quantum Computing',slug: 'quantum-computing',items: [ { id: 'quantum-cybersecurity-suite-2026',title: 'Quantum Cybersecurity Suite 2026',description: 'Revolutionary cybersecurity platform leveraging quantum-resistant algorithms and quantum key distribution for unbreakable encryption and threat detection.',category: 'Quantum Computing',price: '$8,999',billing: 'month',features: [ 'Quantum-resistant encryption algorithmsQuantum key distribution (QKD)','AI-powered threat detection with 99.99% accuracyZero-trust architecture implementation','Real-time threat intelligence feedsAutomated incident response','Compliance automation (SOC 2,ISO 27001,NIST)Quantum-safe certificate management','Advanced behavioral analyticsCloud-native security architecture' ],ctaLabel: 'Quantum Security',href: 'https: ,},{ id: 'quantum-financial-trading-platform-2026',title: 'Quantum Financial Trading Platform 2026',description: 'Revolutionary quantum computing-powered financial trading platform that provides ultra-fast market analysis,risk assessment,and automated trading strategies with quantum advantage.',category: 'Quantum Computing',price: '$15,999',billing: 'month',features: [ 'Quantum-powered market analysisUltra-fast trading execution (<1ms latency)','AI-driven risk assessmentPortfolio optimization algorithms','Real-time market sentiment analysisAutomated trading strategies','Regulatory compliance automationMulti-asset class support','Advanced risk managementPerformance analytics dashboard' ],ctaLabel: 'Quantum Trading',href: 'https: ,},{ id: 'quantum-logistics-optimization-2026',title: 'Quantum Logistics Optimization Platform 2026',description: 'Revolutionary quantum computing-powered logistics platform that optimizes routes,reduces costs,and improves efficiency for complex supply chain and transportation networks.',category: 'Quantum Computing',price: '$6,999',billing: 'month',features: [ 'Quantum route optimization algorithmsReal-time traffic and weather integration','Multi-modal transportation optimizationDynamic pricing optimization','Fleet management automationPredictive maintenance scheduling','Sustainability optimizationReal-time tracking and visibility','Automated dispatchingPerformance analytics dashboard' ],ctaLabel: 'Quantum Logistics',href: 'https: ,},{ id: 'quantum-biological-computing-2030',title: 'Quantum Biological Computing Platform 2030',description: 'Revolutionary platform that combines quantum computing with biological systems,enabling unprecedented breakthroughs in drug discovery,genetic engineering,and biological computing.',category: 'Quantum Computing',price: '$18,999',billing: 'month',features: [ 'Quantum-biological hybrid processingDNA computing integration','Protein folding simulationDrug discovery acceleration','Genetic engineering optimizationBiological circuit design','Real-time biological monitoringQuantum biological sensors','Biological data encryptionAdvanced research tools' ],ctaLabel: 'Quantum Biology',href: 'https: ,} ] },{ name: 'Blockchain & Web3',slug: 'blockchain-web3',items: [ { id: 'decentralized-ai-marketplace',title: 'Decentralized AI Marketplace',description: 'Web3-powered marketplace for AI models,data,and computational resources with blockchain-based governance.',category: 'Blockchain & Web3',price: '$1,999',billing: 'month',features: [ 'AI model marketplaceDecentralized governance','Smart contractsToken economics','Community-driven' ],ctaLabel: 'Marketplace Access',href: 'https: ,},{ id: 'quantum-blockchain-platform',title: 'Quantum Blockchain Platform',description: 'Next-generation blockchain platform with quantum-resistant cryptography and quantum-enhanced consensus.',category: 'Blockchain & Web3',price: '$8,999',billing: 'month',features: [ 'Quantum-resistant cryptoEnhanced consensus','Scalable architectureInteroperability','Enterprise features' ],ctaLabel: 'Blockchain Demo',href: 'https: ,} ] },{ name: 'IoT & Edge',slug: 'iot-edge',items: [ { id: 'quantum-iot-platform',title: 'Quantum IoT Platform',description: 'Revolutionary IoT platform using quantum computing for edge device optimization and intelligent data processing.',category: 'IoT & Edge',price: '$3,999',billing: 'month',features: [ 'Quantum edge processingDevice optimization','Intelligent routingEnergy efficiency','Scalable deployment' ],ctaLabel: 'IoT Demo',href: 'https: ,},{ id: 'autonomous-edge-ai',title: 'Autonomous Edge AI Platform',description: 'Self-managing edge AI platform that automatically optimizes performance and resource usage across IoT networks.',category: 'IoT & Edge',price: '$2,999',billing: 'month',features: [ 'Autonomous optimizationEdge AI processing','Network intelligenceResource management','Performance monitoring' ],ctaLabel: 'Edge AI Demo',href: 'https: ,},{ id: 'predictive-maintenance-iot',title: 'Predictive Maintenance for IoT Fleets',description: 'Deploy sensors and analytics to predict failures and optimize uptime across assets.',category: 'IoT & Edge',price: '$2,499',billing: 'month',features: [ 'Edge telemetry ingestionML failure prediction','Work order integration (EAM/CMMS)Kitting and rollout playbooks','Dashboards and alerts' ],ctaLabel: 'Reduce Downtime',href: 'https: ,},{ id: 'digital-twin-starter',title: 'Digital Twin Starter Kit',description: 'Model physical systems with twins to simulate scenarios and optimize operations.',category: 'IoT & Edge',price: '$14,000',billing: 'project',features: [ '3D/graph modelsStream processing','Integration with PLC/SCADAKPI definition and alerts','Pilot-to-production plan' ],ctaLabel: 'Build a Twin',href: 'https: ,} ] },{ name: 'Green Tech',slug: 'green-tech',items: [ { id: 'quantum-energy-optimization',title: 'Quantum Energy Optimization',description: 'Advanced energy optimization platform using quantum algorithms for sustainable infrastructure and renewable energy management.',category: 'Green Tech',price: '$12,000',billing: 'month',features: [ 'Quantum energy modelingRenewable optimization','Grid managementCarbon tracking','Sustainability reporting' ],ctaLabel: 'Energy Assessment',href: 'https: ,},{ id: 'ai-climate-prediction',title: 'AI Climate Prediction Platform',description: 'Advanced climate modeling platform using AI and quantum computing for accurate weather and climate predictions.',category: 'Green Tech',price: '$7,999',billing: 'month',features: [ 'AI climate modelingQuantum simulations','Real-time predictionsRisk assessment','Policy recommendations' ],ctaLabel: 'Climate Demo',href: 'https: ,},{ id: 'carbon-accounting-saas',title: 'Carbon Accounting & ESG Reporting',description: 'Automate Scope 1–3 emissions tracking with audit-ready ESG disclosures.',category: 'Green Tech',price: '$999',billing: 'month',features: [ 'GHG Protocol-aligned factorsAutomated data pipelines','Supplier questionnairesAssurance-ready exports','Target tracking (SBTi)' ],ctaLabel: 'Start ESG Tracking',href: 'https: ,} ] },{ name: 'Space Tech',slug: 'space-tech',items: [ { id: 'satellite-ai-orchestrator',title: 'Satellite AI Orchestrator',description: 'AI-powered satellite constellation management system for optimal orbital positioning and data collection.',category: 'Space Tech',price: '$15,000',billing: 'month',features: [ 'Autonomous orbital optimizationAI-powered data analysis','Real-time monitoringCollision avoidance','Global coverage' ],ctaLabel: 'Launch Satellites',href: 'https: ,},{ id: 'quantum-space-communications',title: 'Quantum Space Communications',description: 'Next-generation quantum communication system for secure,ultra-fast data transmission between Earth and space.',category: 'Space Tech',price: '$25,000',billing: 'month',features: [ 'Quantum entanglementUnhackable encryption','Light-speed transmissionDeep space coverage','Interplanetary network' ],ctaLabel: 'Connect Space',href: 'https: ,},{ id: 'satellite-imagery-analytics',title: 'Satellite Imagery Analytics',description: 'Computer vision on multi-spectral imagery for agriculture,insurance,and defense insights.',category: 'Space Tech',price: '$5,999',billing: 'month',features: [ 'Change detectionCrop yield estimation','Object and damage detectionAPIs and dashboards','Tasking provider integrations' ],ctaLabel: 'Analyze Imagery',href: 'https: ,} ] },{ name: 'BioTech & Health',slug: 'biotech-health',items: [ { id: 'ai-drug-discovery-platform',title: 'AI Drug Discovery Platform',description: 'Revolutionary drug discovery platform using AI and quantum computing for accelerated pharmaceutical development.',category: 'BioTech & Health',price: '$35,000',billing: 'month',features: [ 'AI molecular modelingQuantum simulations','Clinical trial optimizationDrug repurposing','Regulatory compliance' ],ctaLabel: 'Discover Drugs',href: 'https: ,},{ id: 'quantum-genome-analyzer',title: 'Quantum Genome Analyzer',description: 'Advanced genome analysis platform using quantum computing for personalized medicine and genetic research.',category: 'BioTech & Health',price: '$18,000',billing: 'month',features: [ 'Quantum DNA sequencingPersonalized medicine','Disease predictionGenetic counseling','Research collaboration' ],ctaLabel: 'Analyze Genome',href: 'https: ,},{ id: 'telemedicine-ai-triage',title: 'Telemedicine AI Triage',description: 'AI symptom checker with escalation workflows to clinicians and EHR integration.',category: 'BioTech & Health',price: '$1,999',billing: 'month',features: [ 'Clinical safety guardrailsHL7/FHIR integration','Language and accessibilityAnalytics and outcomes tracking','Privacy and consent management' ],ctaLabel: 'Enable Triage',href: 'https: ,} ] },{ name: 'FinTech & DeFi',slug: 'fintech-defi',items: [ { id: 'quantum-trading-algorithm',title: 'Quantum Trading Algorithm',description: 'Revolutionary trading algorithm using quantum computing for ultra-fast market analysis and automated trading.',category: 'FinTech & DeFi',price: '$45,000',billing: 'month',features: [ 'Quantum market analysisMicrosecond trading','Risk managementPortfolio optimization','Regulatory compliance' ],ctaLabel: 'Start Trading',href: 'https: ,},{ id: 'autonomous-defi-protocol',title: 'Autonomous DeFi Protocol',description: 'Self-managing DeFi protocol that automatically optimizes yields,manages risks,and executes strategies.',category: 'FinTech & DeFi',price: '$12,000',billing: 'month',features: [ 'Autonomous yield farmingRisk management','Strategy optimizationCross-chain integration','Smart contract security' ],ctaLabel: 'Deploy Protocol',href: 'https: ,},{ id: 'kyc-aml-transaction-monitoring',title: 'KYC/AML Transaction Monitoring',description: 'Detect suspicious activity using rules + ML with investigator case management.',category: 'FinTech & DeFi',price: '$2,499',billing: 'month',features: [ 'Entity resolutionSanctions and watchlists','Graph analyticsCase workflow and SAR exports','Audit and model governance' ],ctaLabel: 'Strengthen Compliance',href: 'https: ,} ] },{ name: 'Metaverse & AR/VR',slug: 'metaverse-ar-vr',items: [ { id: 'quantum-metaverse-engine',title: 'Quantum Metaverse Engine',description: 'Next-generation metaverse platform using quantum computing for infinite scalability and realistic simulations.',category: 'Metaverse & AR/VR',price: '$28,000',billing: 'month',features: [ 'Quantum renderingInfinite scalability','Realistic physicsCross-platform support','AI-powered NPCs' ],ctaLabel: 'Enter Metaverse',href: 'https: ,},{ id: 'autonomous-ar-navigation',title: 'Autonomous AR Navigation',description: 'AI-powered augmented reality navigation system for autonomous vehicles and smart cities.',category: 'Metaverse & AR/VR',price: '$8,500',billing: 'month',features: [ 'Real-time AR overlaysAutonomous navigation','Smart city integrationTraffic optimization','Safety monitoring' ],ctaLabel: 'Navigate AR',href: 'https: ,},{ id: 'vr-training-simulators',title: 'VR Training Simulators',description: 'Enterprise-grade immersive learning for safety,field ops,and medical procedures.',category: 'Metaverse & AR/VR',price: '$30,000',billing: 'project',features: [ 'Curriculum designMulti-user scenarios','LMS integration and analyticsHardware procurement guidance','Operations and support' ],ctaLabel: 'Build Simulator',href: 'https: ,} ] },{ name: 'Autonomous Systems',slug: 'autonomous-systems',items: [ { id: 'quantum-ai-controller',title: 'Quantum AI Controller',description: 'Revolutionary AI controller using quantum computing for autonomous system management and decision making.',category: 'Autonomous Systems',price: '$32,000',billing: 'month',features: [ 'Quantum decision makingAutonomous learning','System optimizationPredictive maintenance','Multi-system coordination' ],ctaLabel: 'Control Systems',href: 'https: ,},{ id: 'autonomous-robotics-platform',title: 'Autonomous Robotics Platform',description: 'Complete robotics platform for autonomous manufacturing,logistics,and service operations.',category: 'Autonomous Systems',price: '$22,000',billing: 'month',features: [ 'Autonomous navigationTask learning','Safety protocolsMulti-robot coordination','Performance analytics' ],ctaLabel: 'Deploy Robots',href: 'https: ,},{ id: 'warehouse-robotics-orchestration',title: 'Warehouse Robotics Orchestration',description: 'Coordinate AMRs,conveyors,and pick stations to maximize throughput and safety.',category: 'Autonomous Systems',price: '$9,999',billing: 'month',features: [ 'Task allocation and routing3D digital twin monitoring','Workforce and robot collaborationSafety zones and policies','KPIs and optimization' ],ctaLabel: 'Orchestrate Robots',href: 'https: ,} ] },{ name: 'Supply Chain & Logistics',slug: 'supply-chain-logistics',items: [ { id: 'autonomous-supply-chain-platform-2026',title: 'Autonomous Supply Chain Platform 2026',description: 'AI-powered autonomous supply chain management platform that predicts disruptions,optimizes logistics,and automates decision-making for end-to-end supply chain visibility and efficiency.',category: 'Supply Chain & Logistics',price: '$5,999',billing: 'month',features: [ 'AI-powered demand forecasting with 98% accuracyAutonomous inventory optimization','Real-time supply chain visibilityPredictive disruption detection','Automated supplier selectionDynamic pricing optimization','Sustainability tracking and reportingMulti-modal transportation optimization','Risk assessment and mitigationCompliance automation' ],ctaLabel: 'Supply Chain',href: 'https: ,} ] },{ name: 'Energy Management',slug: 'energy-management',items: [ { id: 'autonomous-energy-management-2026',title: 'Autonomous Energy Management Platform 2026',description: 'AI-powered autonomous energy management platform that optimizes energy consumption,predicts demand,and automates energy trading for utilities,commercial buildings,and industrial facilities.',category: 'Energy Management',price: '$5,499',billing: 'month',features: [ 'AI-powered energy consumption optimizationReal-time demand forecasting','Automated energy tradingSmart grid integration','Renewable energy optimizationPredictive maintenance for energy assets','Carbon footprint trackingEnergy efficiency recommendations','Real-time monitoring dashboardMobile app for energy managers' ],ctaLabel: 'Energy Management',href: 'https: ,} ] },{ name: 'Manufacturing Intelligence',slug: 'manufacturing-intelligence',items: [ { id: 'autonomous-manufacturing-intelligence-2026',title: 'Autonomous Manufacturing Intelligence Platform 2026',description: 'AI-powered autonomous manufacturing platform that optimizes production,predicts maintenance,and automates quality control.',category: 'Manufacturing Intelligence',price: '$5,999',billing: 'month',features: [ 'AI-powered production optimizationPredictive maintenance scheduling','Automated quality controlReal-time monitoring and alerting','Supply chain integrationEnergy efficiency optimization','Sustainability trackingPerformance analytics dashboard','Mobile app for operatorsAPI integration capabilities' ],ctaLabel: 'Manufacturing',href: 'https: ,} ] },{ name: 'Data Center Management',slug: 'data-center-management',items: [ { id: 'autonomous-data-center-manager-2026',title: 'Autonomous Data Center Manager 2026',description: 'AI-powered autonomous data center management platform that optimizes performance,reduces costs,and prevents downtime through predictive analytics and automated operations.',category: 'Data Center Management',price: '$4,499',billing: 'month',features: [ 'AI-powered performance optimizationPredictive maintenance scheduling','Automated capacity planningReal-time monitoring and alerting','Energy efficiency optimizationSecurity threat detection','Compliance automationMulti-cloud orchestration','Disaster recovery automationCost optimization engine' ],ctaLabel: 'Data Center',href: 'https: ,} ] } ],';