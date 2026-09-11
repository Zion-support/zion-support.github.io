#!/usr/bin/env python3
import json
from datetime import datetime, timezone
import sys

# Read existing
with open('/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json') as f:
    data = json.load(f)

services = data['services']
max_id = max(s['id'] for s in services)
existing_slugs = {s['slug'] for s in services}
existing_names = {s['name'] for s in services}

# New services to add - 70 services
new_services = [
    # MESSAGING (10)
    {"name": "Telegram Bot Automation", "slug": "telegram-bot-automation", "category": "messaging", "icon": "MessageCircle", "price": 1297, "description": "Automação de bots Telegram com respostas IA, comandos personalizados e integração com CRM."},
    {"name": "Slack Workflow Automation", "slug": "slack-workflow-automation", "category": "messaging", "icon": "Slack", "price": 1597, "description": "Automação de fluxos Slack com triggers, notificações e integração com ferramentas DevOps."},
    {"name": "Discord Community Bot", "slug": "discord-community-bot", "category": "messaging", "icon": "MessageSquare", "price": 997, "description": "Bot Discord para moderação, onboarding e engajamento de comunidades tech."},
    {"name": "SMS Marketing Platform", "slug": "sms-marketing-platform", "category": "messaging", "icon": "Smartphone", "price": 897, "description": "Plataforma de campanhas SMS com segmentação, agendamento e métricas em tempo real."},
    {"name": "Email Sequence Automation", "slug": "email-sequence-automation", "category": "messaging", "icon": "Mail", "price": 1197, "description": "Automação de sequências de email com personalização IA e A/B testing."},
    {"name": "Microsoft Teams Integration", "slug": "microsoft-teams-integration", "category": "messaging", "icon": "Users", "price": 1397, "description": "Integração automática com Teams para notificações, workflows e relatórios."},
    {"name": "Instagram DM Automation", "slug": "instagram-dm-automation", "category": "messaging", "icon": "Instagram", "price": 1097, "description": "Automação de direct messages Instagram com respostas inteligentes e qualificação."},
    {"name": "LinkedIn Outreach Bot", "slug": "linkedin-outreach-bot", "category": "messaging", "icon": "Linkedin", "price": 1897, "description": "Bot de prospecção LinkedIn com mensagens personalizadas e follow-up automático."},
    {"name": "Chatbot Multi-Channel", "slug": "chatbot-multi-channel", "category": "messaging", "icon": "Bot", "price": 2197, "description": "Chatbot unificado para web, mobile e redes sociais com IA conversacional."},
    {"name": "Voice Call Automation", "slug": "voice-call-automation", "category": "messaging", "icon": "Phone", "price": 1697, "description": "Automação de chamadas de voz com transcrição, análise de sentimento e roteamento IA."},
    # DEVOPS (10)
    {"name": "CI/CD Pipeline Builder", "slug": "cicd-pipeline-builder", "category": "devops", "icon": "GitBranch", "price": 1997, "description": "Construtor de pipelines CI/CD com templates para GitHub Actions, GitLab CI e Jenkins."},
    {"name": "Docker Container Management", "slug": "docker-container-management", "category": "devops", "icon": "Container", "price": 1497, "description": "Gerenciamento automatizado de containers Docker com monitoramento e scaling."},
    {"name": "Kubernetes Orchestration", "slug": "kubernetes-orchestration", "category": "devops", "icon": "Cloud", "price": 2497, "description": "Orquestração K8s com auto-scaling, deploy canary e rollback automático."},
    {"name": "Infrastructure as Code", "slug": "infrastructure-as-code", "category": "devops", "icon": "Code", "price": 1797, "description": "Templates Terraform e Pulumi para provisionamento automatizado de infraestrutura cloud."},
    {"name": "Monitoring & Alerting", "slug": "monitoring-alerting", "category": "devops", "icon": "Activity", "price": 1297, "description": "Stack de monitoramento com Prometheus, Grafana e alertas inteligentes via IA."},
    {"name": "Log Aggregation System", "slug": "log-aggregation-system", "category": "devops", "icon": "FileText", "price": 1097, "description": "Agregação de logs centralizada com ELK Stack e análise de anomalias."},
    {"name": "GitOps Workflow Engine", "slug": "gitops-workflow-engine", "category": "devops", "icon": "GitMerge", "price": 1897, "description": "Engine GitOps com ArgoCD, sync automático e drift detection."},
    {"name": "Serverless Deployment", "slug": "serverless-deployment", "category": "devops", "icon": "Zap", "price": 1397, "description": "Deploy serverless automatizado para AWS Lambda, GCP Functions e Azure Functions."},
    {"name": "Database Migration Tool", "slug": "database-migration-tool", "category": "devops", "icon": "Database", "price": 1197, "description": "Ferramenta de migração de banco de dados com versionamento e rollback seguro."},
    {"name": "Environment Provisioning", "slug": "environment-provisioning", "category": "devops", "icon": "Server", "price": 1597, "description": "Provisionamento automatizado de ambientes dev/staging/prod com configuração declarativa."},
    # SECURITY (10)
    {"name": "Vulnerability Scanner", "slug": "vulnerability-scanner", "category": "security", "icon": "Shield", "price": 1997, "description": "Scanner de vulnerabilidades contínuo para aplicações, containers e infraestrutura."},
    {"name": "Penetration Testing Suite", "slug": "penetration-testing-suite", "category": "security", "icon": "Lock", "price": 2997, "description": "Suite de pentest automatizado com relatórios detalhados e remediação guiada."},
    {"name": "SIEM Integration", "slug": "siem-integration", "category": "security", "icon": "Eye", "price": 2497, "description": "Integração SIEM com coleta de logs, correlação de eventos e resposta a incidentes."},
    {"name": "Zero Trust Architecture", "slug": "zero-trust-architecture", "category": "security", "icon": "ShieldCheck", "price": 3497, "description": "Implementação de arquitetura Zero Trust com micro-segmentação e identidade."},
    {"name": "Secrets Management", "slug": "secrets-management", "category": "security", "icon": "Key", "price": 1297, "description": "Gerenciamento de secrets com HashiCorp Vault, rotação automática e auditoria."},
    {"name": "WAF Configuration", "slug": "waf-configuration", "category": "security", "icon": "ShieldAlert", "price": 1597, "description": "Configuração de Web Application Firewall com regras customizadas e bot mitigation."},
    {"name": "Compliance Automation", "slug": "compliance-automation", "category": "security", "icon": "CheckSquare", "price": 1897, "description": "Automação de compliance com auditoria contínua e relatórios regulatórios."},
    {"name": "Incident Response Bot", "slug": "incident-response-bot", "category": "security", "icon": "AlertTriangle", "price": 2197, "description": "Bot de resposta a incidentes com playbooks automatizados e escalação inteligente."},
    {"name": "Identity Access Management", "slug": "identity-access-management", "category": "security", "icon": "UserCheck", "price": 1797, "description": "Gestão de identidade e acesso com SSO, MFA e provisionamento automático."},
    {"name": "Threat Intelligence Feed", "slug": "threat-intelligence-feed", "category": "security", "icon": "Radio", "price": 1497, "description": "Feed de inteligência de ameaças com indicadores de compromisso e alertas proativos."},
    # DATA (10)
    {"name": "Data Pipeline Orchestration", "slug": "data-pipeline-orchestration", "category": "data", "icon": "GitBranch", "price": 1997, "description": "Orquestração de pipelines de dados com Apache Airflow e monitoramento em tempo real."},
    {"name": "Real-time Analytics", "slug": "real-time-analytics", "category": "data", "icon": "BarChart", "price": 2197, "description": "Analytics em tempo real com Apache Kafka, Flink e dashboards interativos."},
    {"name": "Data Warehouse Automation", "slug": "data-warehouse-automation", "category": "data", "icon": "Database", "price": 2497, "description": "Automação de data warehouse com ETL, modelagem e governança de dados."},
    {"name": "ML Feature Store", "slug": "ml-feature-store", "category": "data", "icon": "Cpu", "price": 1897, "description": "Feature store para ML com versionamento, lineage e serving de features."},
    {"name": "Data Quality Framework", "slug": "data-quality-framework", "category": "data", "icon": "CheckCircle", "price": 1397, "description": "Framework de qualidade de dados com validação, profiling e alertas de anomalias."},
    {"name": "ETL Pipeline Builder", "slug": "etl-pipeline-builder", "category": "data", "icon": "ArrowRight", "price": 1597, "description": "Construtor de pipelines ETL com conectores pré-build e transformações declarativas."},
    {"name": "Data Catalog System", "slug": "data-catalog-system", "category": "data", "icon": "BookOpen", "price": 1697, "description": "Catálogo de dados automatizado com metadata harvesting e lineage tracking."},
    {"name": "Predictive Analytics Engine", "slug": "predictive-analytics-engine", "category": "data", "icon": "TrendingUp", "price": 2297, "description": "Engine de analytics preditivo com modelos ML e forecasting automatizado."},
    {"name": "Customer Data Platform", "slug": "customer-data-platform", "category": "data", "icon": "Users", "price": 2797, "description": "Plataforma de dados de cliente unificada com segmentação e ativação em tempo real."},
    {"name": "Data Lake Architecture", "slug": "data-lake-architecture", "category": "data", "icon": "Layers", "price": 2597, "description": "Arquitetura data lake com Delta Lake, governança e acesso self-service."},
    # CRM (10)
    {"name": "Sales Pipeline Automation", "slug": "sales-pipeline-automation", "category": "crm", "icon": "TrendingUp", "price": 1497, "description": "Automação de pipeline de vendas com scoring, previsão e next-best-action."},
    {"name": "Customer Support Bot", "slug": "customer-support-bot", "category": "crm", "icon": "Headphones", "price": 1297, "description": "Bot de suporte ao cliente com IA, base de conhecimento e escalação inteligente."},
    {"name": "Lead Scoring Engine", "slug": "lead-scoring-engine", "category": "crm", "icon": "Target", "price": 1197, "description": "Engine de scoring de leads com machine learning e enriquecimento de dados."},
    {"name": "CRM Data Enrichment", "slug": "crm-data-enrichment", "category": "crm", "icon": "Database", "price": 997, "description": "Enriquecimento automático de dados CRM com fontes externas e validação."},
    {"name": "Customer Journey Mapping", "slug": "customer-journey-mapping", "category": "crm", "icon": "Map", "price": 1697, "description": "Mapeamento de jornada do cliente com analytics de touchpoints e otimização."},
    {"name": "Contract Management", "slug": "contract-management", "category": "crm", "icon": "FileText", "price": 1397, "description": "Gestão de contratos com renovação automática, alertas e assinatura digital."},
    {"name": "Customer Feedback Loop", "slug": "customer-feedback-loop", "category": "crm", "icon": "MessageCircle", "price": 897, "description": "Loop de feedback automatizado com NPS, análise de sentimento e action items."},
    {"name": "Account Health Score", "slug": "account-health-score", "category": "crm", "icon": "Heart", "price": 1097, "description": "Score de saúde de contas com indicadores de churn e expansão."},
    {"name": "Proposal Generator", "slug": "proposal-generator", "category": "crm", "icon": "File", "price": 797, "description": "Gerador de propostas comerciais com templates IA e precificação dinâmica."},
    {"name": "Customer Onboarding Flow", "slug": "customer-onboarding-flow", "category": "crm", "icon": "UserPlus", "price": 1197, "description": "Fluxo de onboarding automatizado com checklists, tutoriais e milestones."},
    # AI (10)
    {"name": "AI Model Monitoring", "slug": "ai-model-monitoring", "category": "ai", "icon": "Activity", "price": 1997, "description": "Monitoramento de modelos ML com drift detection, performance tracking e alertas."},
    {"name": "LLM Fine-tuning Pipeline", "slug": "llm-finetuning-pipeline", "category": "ai", "icon": "Brain", "price": 2997, "description": "Pipeline de fine-tuning para LLMs com dataset management e avaliação automatizada."},
    {"name": "AI Content Generation", "slug": "ai-content-generation", "category": "ai", "icon": "PenTool", "price": 1497, "description": "Geração de conteúdo com IA para marketing, documentação e social media."},
    {"name": "Computer Vision Pipeline", "slug": "computer-vision-pipeline", "category": "ai", "icon": "Eye", "price": 2497, "description": "Pipeline de computer vision com detecção, classificação e segmentação de objetos."},
    {"name": "NLP Text Analytics", "slug": "nlp-text-analytics", "category": "ai", "icon": "Type", "price": 1697, "description": "Analytics de texto com NLP para extração de entidades, sentimento e sumarização."},
    {"name": "Recommendation Engine", "slug": "recommendation-engine", "category": "ai", "icon": "ThumbsUp", "price": 2197, "description": "Engine de recomendação com collaborative filtering e deep learning."},
    {"name": "AI Agent Orchestration", "slug": "ai-agent-orchestration", "category": "ai", "icon": "Bot", "price": 3497, "description": "Orquestração de agentes IA com multi-agent coordination e tool use."},
    {"name": "Speech-to-Text Service", "slug": "speech-to-text-service", "category": "ai", "icon": "Mic", "price": 1297, "description": "Serviço de transcrição de áudio com suporte multi-idioma e diarização."},
    {"name": "Anomaly Detection System", "slug": "anomaly-detection-system", "category": "ai", "icon": "AlertCircle", "price": 1897, "description": "Sistema de detecção de anomalias com modelos não-supervisionados e alertas."},
    {"name": "AI Ethics & Bias Audit", "slug": "ai-ethics-bias-audit", "category": "ai", "icon": "Scale", "price": 1597, "description": "Auditoria de ética e viés em modelos IA com relatórios de fairness e explicabilidade."},
    # COMPLIANCE (5)
    {"name": "GDPR Compliance Suite", "slug": "gdpr-compliance-suite", "category": "compliance", "icon": "Shield", "price": 2497, "description": "Suite completa de compliance GDPR com DPIA, consent management e data mapping."},
    {"name": "SOC2 Automation", "slug": "soc2-automation", "category": "compliance", "icon": "CheckSquare", "price": 2997, "description": "Automação SOC2 com coleta de evidências, controles e relatórios de auditoria."},
    {"name": "HIPAA Compliance Tool", "slug": "hipaa-compliance-tool", "category": "compliance", "icon": "Heart", "price": 2797, "description": "Ferramenta de compliance HIPAA com criptografia, auditoria e access controls."},
    {"name": "PCI DSS Scanner", "slug": "pci-dss-scanner", "category": "compliance", "icon": "CreditCard", "price": 2197, "description": "Scanner PCI DSS com assessment de vulnerabilidades e gap analysis."},
    {"name": "Data Retention Policy", "slug": "data-retention-policy", "category": "compliance", "icon": "Clock", "price": 1397, "description": "Política de retenção de dados com automação de purging e archival."},
    # INDUSTRY-SPECIFIC (5)
    {"name": "Healthcare Patient Portal", "slug": "healthcare-patient-portal", "category": "industry", "icon": "Heart", "price": 3497, "description": "Portal de pacientes com agendamento, telemedicine e prontuário eletrônico."},
    {"name": "Fintech KYC Automation", "slug": "fintech-kyc-automation", "category": "industry", "icon": "DollarSign", "price": 2997, "description": "Automação KYC/AML com verificação de identidade, documentação e risk scoring."},
    {"name": "E-commerce Personalization", "slug": "ecommerce-personalization", "category": "industry", "icon": "ShoppingCart", "price": 1997, "description": "Personalização de e-commerce com recomendações, pricing dinâmico e A/B testing."},
    {"name": "EdTech Learning Platform", "slug": "edtech-learning-platform", "category": "industry", "icon": "GraduationCap", "price": 2497, "description": "Plataforma de ensino com cursos adaptativos, gamificação e analytics de aprendizado."},
    {"name": "PropTech Smart Building", "slug": "proptech-smart-building", "category": "industry", "icon": "Building", "price": 3997, "description": "Solução de smart building com IoT, energy management e predictive maintenance."},
]

# Generate services
now = datetime.now(timezone.utc).isoformat()
added = 0
skipped = 0
for svc in new_services:
    if svc['slug'] in existing_slugs or svc['name'] in existing_names:
        skipped += 1
        continue
    max_id += 1
    new_svc = {
        "id": max_id,
        "name": svc['name'],
        "slug": svc['slug'],
        "description": svc['description'],
        "category": svc['category'],
        "icon": svc['icon'],
        "price": svc['price'],
        "features": [
            f"Automação completa de {svc['slug'].replace('-', ' ')}",
            "Dashboard de métricas em tempo real",
            "Suporte prioritário 24/7",
            "Integrações com ferramentas populares",
            "Documentação e treinamento incluídos"
        ],
        "status": "active",
        "created_at": now,
        "updated_at": now
    }
    services.append(new_svc)
    added += 1

# Write back
with open('/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Added: {added}")
print(f"Skipped: {skipped}")
print(f"Total: {len(services)}")
