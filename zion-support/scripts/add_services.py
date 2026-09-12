#!/usr/bin/env python3
"""Add new Hermes agent services to servicesData.json"""
import json
from datetime import datetime, timezone

with open('/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json') as f:
    data = json.load(f)

services = data['services']
existing_slugs = {s['slug'] for s in services}
last_id = max(s['id'] for s in services)

new_services = [
    {"name": "Hermes Discord Community Manager", "slug": "hermes-discord-community-manager", "description": "Gestão de comunidades Discord com moderação automática, roles e analytics.", "category": "messaging", "icon": "MessageCircle", "price": 897},
    {"name": "Hermes SMS Campaign Engine", "slug": "hermes-sms-campaign-engine", "description": "Campanhas SMS com segmentação, A/B testing e delivery tracking.", "category": "messaging", "icon": "Send", "price": 1197},
    {"name": "Hermes Email Sequence Builder", "slug": "hermes-email-sequence-builder", "description": "Sequências de email automation com triggers comportamentais e personalização.", "category": "messaging", "icon": "Mail", "price": 1497},
    {"name": "Hermes LinkedIn Outreach Agent", "slug": "hermes-linkedin-outreach-agent", "description": "Outreach LinkedIn automatizado com connection requests e follow-ups.", "category": "messaging", "icon": "Linkedin", "price": 1997},
    {"name": "Hermes Instagram DM Automation", "slug": "hermes-instagram-dm-automation", "description": "Automação de DMs Instagram com respostas inteligentes e lead capture.", "category": "messaging", "icon": "MessageSquare", "price": 1297},
    {"name": "Hermes Facebook Messenger Bot", "slug": "hermes-facebook-messenger-bot", "description": "Bot Facebook Messenger com flows, quick replies e handover para humanos.", "category": "messaging", "icon": "MessageSquare", "price": 1097},
    {"name": "Hermes Signal Secure Comms", "slug": "hermes-signal-secure-comms", "description": "Comunicação segura Signal com criptografia e auto-destruct messages.", "category": "messaging", "icon": "Lock", "price": 1597},
    {"name": "Hermes Slack Analytics Pro", "slug": "hermes-slack-analytics-pro", "description": "Analytics Slack com engagement metrics, channel health e sentiment analysis.", "category": "messaging", "icon": "BarChart", "price": 997},
    {"name": "Hermes Teams Meeting Bot", "slug": "hermes-teams-meeting-bot", "description": "Bot Microsoft Teams com agendamento, transcripts e action items.", "category": "messaging", "icon": "Video", "price": 1397},
    {"name": "Hermes WhatsApp Multi-Agent", "slug": "hermes-whatsapp-multi-agent", "description": "Multi-agent WhatsApp com roteamento inteligente e escalação automática.", "category": "messaging", "icon": "Users", "price": 1797},
    {"name": "Hermes Kubernetes Orchestrator", "slug": "hermes-kubernetes-orchestrator", "description": "Orquestração K8s com auto-scaling, rolling updates e health checks.", "category": "devops", "icon": "Container", "price": 2497},
    {"name": "Hermes CI/CD Pipeline Builder", "slug": "hermes-cicd-pipeline-builder", "description": "Pipelines CI/CD com multi-stage, caching e parallel execution.", "category": "devops", "icon": "GitBranch", "price": 1997},
    {"name": "Hermes Infrastructure as Code", "slug": "hermes-infrastructure-as-code", "description": "IaC com Terraform, Pulumi e state management automatizado.", "category": "devops", "icon": "Code", "price": 1797},
    {"name": "Hermes Monitoring & Alerting", "slug": "hermes-monitoring-alerting", "description": "Monitoramento com Prometheus, Grafana e alertas inteligentes.", "category": "devops", "icon": "Activity", "price": 1497},
    {"name": "Hermes Log Aggregation Engine", "slug": "hermes-log-aggregation-engine", "description": "Agregação de logs com ELK stack, parsing e anomaly detection.", "category": "devops", "icon": "FileText", "price": 1297},
    {"name": "Hermes Docker Compose Manager", "slug": "hermes-docker-compose-manager", "description": "Gestão Docker Compose com multi-env, secrets e networking.", "category": "devops", "icon": "Package", "price": 997},
    {"name": "Hermes GitOps Workflow", "slug": "hermes-gitops-workflow", "description": "GitOps com ArgoCD, sync automático e rollback inteligente.", "category": "devops", "icon": "GitMerge", "price": 1897},
    {"name": "Hermes Cloud Cost Optimizer", "slug": "hermes-cloud-cost-optimizer", "description": "Otimização de custos cloud com rightsizing e reserved instances.", "category": "devops", "icon": "DollarSign", "price": 1597},
    {"name": "Hermes Incident Response Bot", "slug": "hermes-incident-response-bot", "description": "Resposta a incidentes com runbooks automáticos e post-mortems.", "category": "devops", "icon": "AlertTriangle", "price": 2197},
    {"name": "Hermes Release Manager", "slug": "hermes-release-manager", "description": "Gestão de releases com changelogs, versioning e deployment gates.", "category": "devops", "icon": "GitBranch", "price": 1397},
    {"name": "Hermes Vulnerability Scanner", "slug": "hermes-vulnerability-scanner", "description": "Scanner de vulnerabilidades com CVE matching e remediation.", "category": "security", "icon": "ShieldAlert", "price": 1997},
    {"name": "Hermes Penetration Testing Agent", "slug": "hermes-penetration-testing-agent", "description": "Pentest automatizado com exploit detection e reporting.", "category": "security", "icon": "Shield", "price": 2997},
    {"name": "Hermes SIEM Integration", "slug": "hermes-siem-integration", "description": "Integração SIEM com correlation rules e threat hunting.", "category": "security", "icon": "Eye", "price": 2497},
    {"name": "Hermes Compliance Auditor", "slug": "hermes-compliance-auditor", "description": "Auditoria de compliance com SOC2, ISO27001 e PCI-DSS.", "category": "security", "icon": "ClipboardCheck", "price": 1797},
    {"name": "Hermes Secrets Manager", "slug": "hermes-secrets-manager", "description": "Gestão de secrets com rotation, vault integration e audit.", "category": "security", "icon": "Key", "price": 1497},
    {"name": "Hermes WAF Configuration", "slug": "hermes-waf-configuration", "description": "Configuração WAF com OWASP rules e bot protection.", "category": "security", "icon": "ShieldCheck", "price": 1297},
    {"name": "Hermes DDoS Protection Agent", "slug": "hermes-ddos-protection-agent", "description": "Proteção DDoS com rate limiting e traffic analysis.", "category": "security", "icon": "AlertCircle", "price": 1897},
    {"name": "Hermes Identity Access Manager", "slug": "hermes-identity-access-manager", "description": "Gestão de identidade com SSO, MFA e RBAC.", "category": "security", "icon": "UserCheck", "price": 1597},
    {"name": "Hermes Data Loss Prevention", "slug": "hermes-data-loss-prevention", "description": "DLP com content inspection e policy enforcement.", "category": "security", "icon": "Lock", "price": 1697},
    {"name": "Hermes Threat Intelligence Feed", "slug": "hermes-threat-intelligence-feed", "description": "Feed de threat intelligence com IOC matching e alerts.", "category": "security", "icon": "Radio", "price": 2197},
    {"name": "Hermes ETL Pipeline Builder", "slug": "hermes-etl-pipeline-builder", "description": "Pipelines ETL com transformações e data quality checks.", "category": "data", "icon": "Database", "price": 1797},
    {"name": "Hermes Data Warehouse Agent", "slug": "hermes-data-warehouse-agent", "description": "Data warehouse com modeling, partitioning e query optimization.", "category": "data", "icon": "Server", "price": 2197},
    {"name": "Hermes Real-time Analytics", "slug": "hermes-real-time-analytics", "description": "Analytics em tempo real com streaming e dashboards.", "category": "data", "icon": "Activity", "price": 1597},
    {"name": "Hermes Data Catalog Manager", "slug": "hermes-data-catalog-manager", "description": "Catálogo de dados com lineage, glossary e discovery.", "category": "data", "icon": "BookOpen", "price": 1297},
    {"name": "Hermes ML Feature Store", "slug": "hermes-ml-feature-store", "description": "Feature store com versioning, serving e monitoring.", "category": "data", "icon": "Brain", "price": 1997},
    {"name": "Hermes Data Quality Monitor", "slug": "hermes-data-quality-monitor", "description": "Monitor de data quality com validation rules e alerts.", "category": "data", "icon": "CheckCircle", "price": 1097},
    {"name": "Hermes Data Migration Tool", "slug": "hermes-data-migration-tool", "description": "Migração de dados com schema mapping e validation.", "category": "data", "icon": "RefreshCw", "price": 1497},
    {"name": "Hermes Business Intelligence Agent", "slug": "hermes-business-intelligence-agent", "description": "BI com dashboards, KPIs e automated reporting.", "category": "data", "icon": "BarChart", "price": 1697},
    {"name": "Hermes Data Lake Organizer", "slug": "hermes-data-lake-organizer", "description": "Organização de data lake com partitioning e compaction.", "category": "data", "icon": "Layers", "price": 1897},
    {"name": "Hermes Predictive Analytics", "slug": "hermes-predictive-analytics", "description": "Analytics preditivo com forecasting e anomaly detection.", "category": "data", "icon": "TrendingUp", "price": 2297},
    {"name": "Hermes Salesforce Sync Agent", "slug": "hermes-salesforce-sync-agent", "description": "Sync Salesforce com bi-directional sync e conflict resolution.", "category": "crm", "icon": "Cloud", "price": 1797},
    {"name": "Hermes HubSpot Integration", "slug": "hermes-hubspot-integration", "description": "Integração HubSpot com workflows, scoring e reporting.", "category": "crm", "icon": "Users", "price": 1497},
    {"name": "Hermes Pipeline Manager", "slug": "hermes-pipeline-manager", "description": "Gestão de pipeline com stages, probabilities e forecasting.", "category": "crm", "icon": "GitBranch", "price": 1297},
    {"name": "Hermes Lead Scoring Engine", "slug": "hermes-lead-scoring-engine", "description": "Lead scoring com behavioral data e predictive models.", "category": "crm", "icon": "Target", "price": 1597},
    {"name": "Hermes Customer Success Bot", "slug": "hermes-customer-success-bot", "description": "Bot de CS com health scores, playbooks e churn prediction.", "category": "crm", "icon": "Heart", "price": 1397},
    {"name": "Hermes Contact Enrichment", "slug": "hermes-contact-enrichment", "description": "Enriquecimento de contatos com social data e firmographics.", "category": "crm", "icon": "UserPlus", "price": 997},
    {"name": "Hermes Deal Desk Agent", "slug": "hermes-deal-desk-agent", "description": "Deal desk com approval workflows e pricing guidance.", "category": "crm", "icon": "DollarSign", "price": 1697},
    {"name": "Hermes CRM Data Cleansing", "slug": "hermes-crm-data-cleansing", "description": "Limpeza de dados CRM com deduplication e normalization.", "category": "crm", "icon": "ClipboardList", "price": 897},
    {"name": "Hermes LLM Fine-tuning Agent", "slug": "hermes-llm-finetuning-agent", "description": "Fine-tuning de LLMs com LoRA, QLoRA e evaluation.", "category": "ai", "icon": "Brain", "price": 2997},
    {"name": "Hermes RAG Pipeline Builder", "slug": "hermes-rag-pipeline-builder", "description": "Pipelines RAG com chunking, embedding e retrieval.", "category": "ai", "icon": "Search", "price": 2497},
    {"name": "Hermes Prompt Engineering Studio", "slug": "hermes-prompt-engineering-studio", "description": "Studio de prompt engineering com versioning e A/B testing.", "category": "ai", "icon": "PenTool", "price": 1497},
    {"name": "Hermes AI Model Evaluator", "slug": "hermes-ai-model-evaluator", "description": "Avaliação de modelos AI com benchmarks e metrics.", "category": "ai", "icon": "CheckSquare", "price": 1797},
    {"name": "Hermes Vector Database Manager", "slug": "hermes-vector-database-manager", "description": "Gestão de vector DB com indexing, search e scaling.", "category": "ai", "icon": "Database", "price": 1997},
    {"name": "Hermes AI Agent Orchestrator", "slug": "hermes-ai-agent-orchestrator", "description": "Orquestração de agentes AI com routing e coordination.", "category": "ai", "icon": "Workflow", "price": 2797},
    {"name": "Hermes NLP Processing Engine", "slug": "hermes-nlp-processing-engine", "description": "Engine NLP com NER, sentiment e summarization.", "category": "ai", "icon": "Type", "price": 1597},
    {"name": "Hermes Computer Vision Agent", "slug": "hermes-computer-vision-agent", "description": "Computer vision com OCR, object detection e classification.", "category": "ai", "icon": "Camera", "price": 2197},
    {"name": "Hermes Speech-to-Text Service", "slug": "hermes-speech-to-text-service", "description": "Transcrição de áudio com multi-language e speaker diarization.", "category": "ai", "icon": "Mic", "price": 1297},
    {"name": "Hermes AI Content Generator", "slug": "hermes-ai-content-generator", "description": "Geração de content AI com brand voice e SEO optimization.", "category": "ai", "icon": "FileText", "price": 1097},
    {"name": "Hermes GDPR Compliance Agent", "slug": "hermes-gdpr-compliance-agent", "description": "Compliance GDPR com data mapping e consent management.", "category": "compliance", "icon": "ShieldCheck", "price": 1797},
    {"name": "Hermes HIPAA Audit Tool", "slug": "hermes-hipaa-audit-tool", "description": "Auditoria HIPAA com PHI tracking e breach notification.", "category": "compliance", "icon": "FileCheck", "price": 2197},
    {"name": "Hermes SOC2 Report Generator", "slug": "hermes-soc2-report-generator", "description": "Gerador de relatórios SOC2 com evidence collection.", "category": "compliance", "icon": "ClipboardCheck", "price": 1997},
    {"name": "Hermes PCI-DSS Scanner", "slug": "hermes-pcidss-scanner", "description": "Scanner PCI-DSS com cardholder data discovery.", "category": "compliance", "icon": "CreditCard", "price": 2497},
    {"name": "Hermes Data Retention Policy", "slug": "hermes-data-retention-policy", "description": "Política de retenção com automated deletion e legal holds.", "category": "compliance", "icon": "Clock", "price": 1297},
    {"name": "Hermes Privacy Impact Assessment", "slug": "hermes-privacy-impact-assessment", "description": "PIA com risk scoring e mitigation recommendations.", "category": "compliance", "icon": "Scale", "price": 1597},
    {"name": "Hermes Regulatory Change Tracker", "slug": "hermes-regulatory-change-tracker", "description": "Tracker de mudanças regulatórias com impact analysis.", "category": "compliance", "icon": "RefreshCw", "price": 1397},
    {"name": "Hermes Healthcare EHR Integration", "slug": "hermes-healthcare-ehr-integration", "description": "Integração EHR com HL7 FHIR e patient data sync.", "category": "healthcare", "icon": "Heart", "price": 2497},
    {"name": "Hermes Fintech KYC Agent", "slug": "hermes-fintech-kyc-agent", "description": "KYC com document verification e sanctions screening.", "category": "fintech", "icon": "UserCheck", "price": 1997},
    {"name": "Hermes Legal Contract Analyzer", "slug": "hermes-legal-contract-analyzer", "description": "Análise de contratos com clause extraction e risk assessment.", "category": "legal", "icon": "FileSignature", "price": 1797},
    {"name": "Hermes Real Estate CRM", "slug": "hermes-real-estate-crm", "description": "CRM imobiliário com property matching e lead nurturing.", "category": "realestate", "icon": "Home", "price": 1497},
    {"name": "Hermes Education LMS Agent", "slug": "hermes-education-lms-agent", "description": "LMS com course management e student progress tracking.", "category": "education", "icon": "GraduationCap", "price": 1297},
    {"name": "Hermes Logistics Route Optimizer", "slug": "hermes-logistics-route-optimizer", "description": "Otimização de rotas com real-time tracking e ETA.", "category": "logistics", "icon": "Truck", "price": 1697},
    {"name": "Hermes Sustainability Carbon Tracker", "slug": "hermes-sustainability-carbon-tracker", "description": "Tracker de carbono com emissions calculation e offset.", "category": "sustainability", "icon": "Leaf", "price": 1397},
    {"name": "Hermes Manufacturing IoT Agent", "slug": "hermes-manufacturing-iot-agent", "description": "IoT manufacturing com predictive maintenance e OEE.", "category": "industry", "icon": "Cpu", "price": 2197},
    {"name": "Hermes Retail Inventory Optimizer", "slug": "hermes-retail-inventory-optimizer", "description": "Otimização de inventário com demand forecasting e reorder.", "category": "industry", "icon": "ShoppingCart", "price": 1597},
    {"name": "Hermes Insurance Claims Agent", "slug": "hermes-insurance-claims-agent", "description": "Processamento de claims com fraud detection e payout.", "category": "industry", "icon": "FileCheck", "price": 1897},
]

new_services = [s for s in new_services if s['slug'] not in existing_slugs]
print(f"New unique services to add: {len(new_services)}")

now = datetime.now(timezone.utc).isoformat()
added = 0
for svc in new_services:
    last_id += 1
    svc['id'] = last_id
    svc['features'] = [
        f"Automação completa de {svc['slug']}",
        "Dashboard de métricas em tempo real",
        "Suporte prioritário 24/7",
        "Integrações com ferramentas populares",
        "Documentação e treinamento incluídos"
    ]
    svc['status'] = 'active'
    svc['created_at'] = now
    svc['updated_at'] = now
    added += 1

services.extend(new_services)

with open('/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Added {added} new services")
print(f"Total services: {len(services)}")
print(f"First new ID: {new_services[0]['id']}, Last new ID: {new_services[-1]['id']}")
