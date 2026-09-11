#!/usr/bin/env python3
"""Generate NEW Hermes Agent services that don't overlap with existing ones."""
import json
from datetime import datetime, timezone

with open('/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json') as f:
    data = json.load(f)

services = data['services']
max_id = max(s['id'] for s in services)
existing_slugs = {s['slug'] for s in services}
existing_names = {s['name'] for s in services}

# 70 NEW services — Hermes Agent flavored
new_services = [
    # HERMES MESSAGING (10)
    {"name": "Hermes WhatsApp ERP Bridge", "slug": "hermes-whatsapp-erp-bridge", "category": "messaging", "icon": "MessageSquare", "price": 1897, "description": "Ponte WhatsApp Business com ERPs via Hermes Agent — pedidos, NFs e estoque."},
    {"name": "Hermes Telegram Commerce", "slug": "hermes-telegram-commerce", "category": "messaging", "icon": "ShoppingBag", "price": 1497, "description": "Bot Telegram de e-commerce com catálogo, carrinho e pagamento via PIX."},
    {"name": "Hermes Discord DevOps Hub", "slug": "hermes-discord-devops-hub", "category": "messaging", "icon": "Terminal", "price": 1297, "description": "Hub Discord com alerts CI/CD, logs deploy e integração com ZTG pipelines."},
    {"name": "Hermes Slack Incident Bot", "slug": "hermes-slack-incident-bot", "category": "messaging", "icon": "AlertTriangle", "price": 1697, "description": "Bot Slack de incidentes com runbook automático e escalação on-call."},
    {"name": "Hermes Email Drip AI", "slug": "hermes-email-drip-ai", "category": "messaging", "icon": "Mail", "price": 1197, "description": "Sequências de email com copywriting GPT-4 e segmentação comportamental."},
    {"name": "Hermes Teams Status Sync", "slug": "hermes-teams-status-sync", "category": "messaging", "icon": "RefreshCw", "price": 997, "description": "Sincroniza status Teams com Jira, Linear e GitHub Projects automaticamente."},
    {"name": "Hermes Instagram Shop Agent", "slug": "hermes-instagram-shop-agent", "category": "messaging", "icon": "ShoppingCart", "price": 1597, "description": "Agent Instagram DM com respostas produto, link de pagamento e follow-up."},
    {"name": "Hermes LinkedIn Sales Navigator", "slug": "hermes-linkedin-sales-navigator", "category": "messaging", "icon": "Target", "price": 2197, "description": "Automação LinkedIn com prospecção, conexão e sequência de nurturing."},
    {"name": "Hermes Voice AI Receptionist", "slug": "hermes-voice-ai-receptionist", "category": "messaging", "icon": "PhoneIncoming", "price": 2497, "description": "Recepcionista de voz com IA — agenda, roteamento e transcrição."},
    {"name": "Hermes SMS OTP Service", "slug": "hermes-sms-otp-service", "category": "messaging", "icon": "Smartphone", "price": 897, "description": "Serviço de SMS OTP e verificação com fallback WhatsApp."},

    # HERMES DEVOPS (10)
    {"name": "Hermes GitHub Actions Forge", "slug": "hermes-github-actions-forge", "category": "devops", "icon": "GitBranch", "price": 1997, "description": "Templates GitHub Actions otimizados — matrix builds, caching, deploy auto."},
    {"name": "Hermes Docker Swarm Ops", "slug": "hermes-docker-swarm-ops", "category": "devops", "icon": "Container", "price": 1597, "description": "Orquestração Docker Swarm com rolling updates e health checks."},
    {"name": "Hermes K8s Helm Charts", "slug": "hermes-k8s-helm-charts", "category": "devops", "icon": "Package", "price": 1797, "description": "Helm charts customizados para K8s — ingress, cert-manager, autoscaling."},
    {"name": "Hermes Terraform Modules", "slug": "hermes-terraform-modules", "category": "devops", "icon": "Code", "price": 2197, "description": "Módulos Terraform reutilizáveis para AWS, GCP e Azure."},
    {"name": "Hermes Prometheus Stack", "slug": "hermes-prometheus-stack", "category": "devops", "icon": "Activity", "price": 1497, "description": "Stack Prometheus + Grafana com dashboards pré-configurados e alertas."},
    {"name": "Hermes ELK Log Center", "slug": "hermes-elk-log-center", "category": "devops", "icon": "FileText", "price": 1297, "description": "Central de logs ELK com parsing automático e alertas de anomalias."},
    {"name": "Hermes ArgoCD Sync", "slug": "hermes-argocd-sync", "category": "devops", "icon": "GitMerge", "price": 1697, "description": "Sync GitOps via ArgoCD com drift detection e auto-reconcile."},
    {"name": "Hermes Lambda Deploy", "slug": "hermes-lambda-deploy", "category": "devops", "icon": "Zap", "price": 1197, "description": "Deploy serverless automatizado — Lambda, Functions e edge workers."},
    {"name": "Hermes DB Schema Sync", "slug": "hermes-db-schema-sync", "category": "devops", "icon": "Database", "price": 1397, "description": "Sincronização de schema de banco com versionamento e rollback."},
    {"name": "Hermes Env Cloner", "slug": "hermes-env-cloner", "category": "devops", "icon": "Clone", "price": 1097, "description": "Clonagem de ambientes dev/staging com dados anonimizados."},

    # HERMES SECURITY (10)
    {"name": "Hermes OWASP Scanner", "slug": "hermes-owasp-scanner", "category": "security", "icon": "Shield", "price": 1897, "description": "Scanner OWASP Top 10 — SQLi, XSS, CSRF com relatório executivo."},
    {"name": "Hermes Pentest Agent", "slug": "hermes-pentest-agent", "category": "security", "icon": "Lock", "price": 2997, "description": "Agente de pentest com reconnaissance, exploitation e relatório."},
    {"name": "Hermes Splunk Connector", "slug": "hermes-splunk-connector", "category": "security", "icon": "Eye", "price": 2197, "description": "Conector Splunk com correlação de eventos e alertas customizados."},
    {"name": "Hermes Zero Trust Gate", "slug": "hermes-zero-trust-gate", "category": "security", "icon": "ShieldCheck", "price": 3497, "description": "Gateway Zero Trust com mTLS, identity-aware proxy e micro-segmentação."},
    {"name": "Hermes Vault Operator", "slug": "hermes-vault-operator", "category": "security", "icon": "Key", "price": 1597, "description": "Operador HashiCorp Vault com rotação dinâmica de secrets."},
    {"name": "Hermes Cloudflare WAF", "slug": "hermes-cloudflare-waf", "category": "security", "icon": "ShieldAlert", "price": 1297, "description": "Gerenciamento Cloudflare WAF com regras customizadas e bot fight mode."},
    {"name": "Hermes SOC2 Auditor", "slug": "hermes-soc2-auditor", "category": "security", "icon": "ClipboardCheck", "price": 2497, "description": "Auditoria SOC2 automatizada com coleta de evidências e gap analysis."},
    {"name": "Hermes Incident Playbook", "slug": "hermes-incident-playbook", "category": "security", "icon": "AlertTriangle", "price": 1997, "description": "Playbooks de resposta a incidentes com runbooks automatizados."},
    {"name": "Hermes Okta Provisioner", "slug": "hermes-okta-provisioner", "category": "security", "icon": "UserCheck", "price": 1797, "description": "Provisionamento Okta/SSO com lifecycle management e MFA enforcement."},
    {"name": "Hermes CVE Monitor", "slug": "hermes-cve-monitor", "category": "security", "icon": "Radio", "price": 1197, "description": "Monitor de CVEs com alertas para dependências do seu stack."},

    # HERMES DATA (10)
    {"name": "Hermes Airflow DAGs", "slug": "hermes-airflow-dags", "category": "data", "icon": "GitBranch", "price": 1897, "description": "DAGs Apache Airflow prontas para ETL, ML pipelines e data sync."},
    {"name": "Hermes Kafka Streams", "slug": "hermes-kafka-streams", "category": "data", "icon": "Activity", "price": 2197, "description": "Streams Kafka com processamento real-time e connectores pré-build."},
    {"name": "Hermes Snowflake Sync", "slug": "hermes-snowflake-sync", "category": "data", "icon": "CloudSnow", "price": 2497, "description": "Sync Snowflake com pipelines CDC, clustering e performance tuning."},
    {"name": "Hermes Feast Feature Store", "slug": "hermes-feast-feature-store", "category": "data", "icon": "Cpu", "price": 1997, "description": "Feature store Feast com offline/online serving e point-in-time joins."},
    {"name": "Hermes Great Expectations", "slug": "hermes-great-expectations", "category": "data", "icon": "CheckCircle", "price": 1497, "description": "Data validation Great Expectations com suites customizadas e alertas."},
    {"name": "Hermes DBT Transform", "slug": "hermes-dbt-transform", "category": "data", "icon": "ArrowRight", "price": 1697, "description": "Transformações DBT com testes, docs e lineage automatizados."},
    {"name": "Hermes DataHub Catalog", "slug": "hermes-datahub-catalog", "category": "data", "icon": "BookOpen", "price": 1897, "description": "Catálogo DataHub com metadata harvesting, lineage e ownership."},
    {"name": "Hermes Prophet Forecast", "slug": "hermes-prophet-forecast", "category": "data", "icon": "TrendingUp", "price": 1797, "description": "Forecasting com Prophet — séries temporais, holidays e changepoints."},
    {"name": "Hermes CDP Segment", "slug": "hermes-cdp-segment", "category": "data", "icon": "Users", "price": 2797, "description": "Customer Data Platform com segmentação unificada e activation APIs."},
    {"name": "Hermes Delta Lake House", "slug": "hermes-delta-lake-house", "category": "data", "icon": "Layers", "price": 2597, "description": "Lakehouse com Delta Lake, time travel, vacuum e Z-ordering."},

    # HERMES CRM (10)
    {"name": "Hermes HubSpot Sync", "slug": "hermes-hubspot-sync", "category": "crm", "icon": "RefreshCw", "price": 1497, "description": "Sync bidirecional HubSpot com mapeamento de campos customizados."},
    {"name": "Hermes Zendesk Agent", "slug": "hermes-zendesk-agent", "category": "crm", "icon": "Headphones", "price": 1297, "description": "Bot Zendesk com triagem IA, sugestão de macros e SLA tracking."},
    {"name": "Hermes Pipedrive Forge", "slug": "hermes-pipedrive-forge", "category": "crm", "icon": "TrendingUp", "price": 1197, "description": "Pipeline Pipedrive com automação de atividades e follow-up."},
    {"name": "Hermes Salesforce Link", "slug": "hermes-salesforce-link", "category": "crm", "icon": "Cloud", "price": 2497, "description": "Integração Salesforce com sync de leads, opportunities e custom objects."},
    {"name": "Hermes Lead Enrichment", "slug": "hermes-lead-enrichment", "category": "crm", "icon": "Database", "price": 997, "description": "Enriquecimento de leads com Clearbit, Apollo e validação de emails."},
    {"name": "Hermes Journey Builder", "slug": "hermes-journey-builder", "category": "crm", "icon": "Map", "price": 1697, "description": "Construtor de jornadas com triggers, splits e personalização."},
    {"name": "Hermes DocuSign Flow", "slug": "hermes-docusign-flow", "category": "crm", "icon": "FileSignature", "price": 1397, "description": "Automação DocuSign com templates, lembretes e archiving."},
    {"name": "Hermes NPS Collector", "slug": "hermes-nps-collector", "category": "crm", "icon": "Star", "price": 797, "description": "Coleta NPS multi-canal com análise de sentimento e follow-up."},
    {"name": "Hermes Churn Predictor", "slug": "hermes-churn-predictor", "category": "crm", "icon": "AlertCircle", "price": 1997, "description": "Modelo de churn prediction com scoring diário e retention triggers."},
    {"name": "Hermes Proposal AI", "slug": "hermes-proposal-ai", "category": "crm", "icon": "FileText", "price": 1597, "description": "Gerador de propostas com IA, pricing engine e aprovação workflow."},

    # HERMES AI (10)
    {"name": "Hermes Evals Suite", "slug": "hermes-evals-suite", "category": "ai", "icon": "BarChart", "price": 2497, "description": "Suite de avaliação LLM — MMLU, GSM8K, HumanEval, MT-Bench."},
    {"name": "Hermes Axolotl Tuner", "slug": "hermes-axolotl-tuner", "category": "ai", "icon": "Brain", "price": 2997, "description": "Fine-tuning via Axolotl — LoRA, QLoRA, GPTQ com dataset pipelines."},
    {"name": "Hermes ComfyUI Flows", "slug": "hermes-comfyui-flows", "category": "ai", "icon": "Palette", "price": 1497, "description": "Workflows ComfyUI para geração de imagens, vídeos e áudio IA."},
    {"name": "Hermes Ultralytics YOLO", "slug": "hermes-ultralytics-yolo", "category": "ai", "icon": "Eye", "price": 2197, "description": "Pipeline YOLO para detecção, segmentação e tracking de objetos."},
    {"name": "Hermes LangChain RAG", "slug": "hermes-langchain-rag", "category": "ai", "icon": "Search", "price": 1897, "description": "RAG com LangChain — chunking, embeddings, reranking e evaluation."},
    {"name": "Hermes RecSys Engine", "slug": "hermes-recsys-engine", "category": "ai", "icon": "ThumbsUp", "price": 2297, "description": "Sistema de recomendação com two-tower, ANN e A/B testing."},
    {"name": "Hermes CrewAI Swarm", "slug": "hermes-crewai-swarm", "category": "ai", "icon": "Bot", "price": 3497, "description": "Orquestração multi-agente com CrewAI, AutoGen e tool calling."},
    {"name": "Hermes Whisper Transcribe", "slug": "hermes-whisper-transcribe", "category": "ai", "icon": "Mic", "price": 1297, "description": "Transcrição Whisper com diarização, timestamps e tradução."},
    {"name": "Hermes PyOD Anomaly", "slug": "hermes-pyod-anomaly", "category": "ai", "icon": "AlertCircle", "price": 1697, "description": "Detecção de anomalias PyOD — Isolation Forest, LOF, autoencoders."},
    {"name": "Hermes SHAP Explainer", "slug": "hermes-shap-explainer", "category": "ai", "icon": "Scale", "price": 1597, "description": "Explicabilidade SHAP/LIME com relatórios de fairness e bias audit."},

    # HERMES COMPLIANCE (5)
    {"name": "Hermes LGPD Guardian", "slug": "hermes-lgpd-guardian", "category": "compliance", "icon": "Shield", "price": 2497, "description": "Compliance LGPD com DPIA, consentimento, data mapping e DSR automation."},
    {"name": "Hermes ISO 27001 Kit", "slug": "hermes-iso27001-kit", "category": "compliance", "icon": "CheckSquare", "price": 2997, "description": "Kit ISO 27001 com ISMS, risk assessment e tratamento de não-conformidades."},
    {"name": "Hermes HIPAA Vault", "slug": "hermes-hipaa-vault", "category": "compliance", "icon": "Heart", "price": 2797, "description": "Vault HIPAA com criptografia PHI, audit trail e BAA management."},
    {"name": "Hermes PCI QSA Prep", "slug": "hermes-pci-qsa-prep", "category": "compliance", "icon": "CreditCard", "price": 2197, "description": "Preparação PCI DSS com SAQ, ASV scanning e compensating controls."},
    {"name": "Hermes Data Lifecycle", "slug": "hermes-data-lifecycle", "category": "compliance", "icon": "Clock", "price": 1397, "description": "Lifecycle de dados com retention policies, archival e right to erasure."},

    # HERMES INDUSTRY (5)
    {"name": "Hermes Health FHIR", "slug": "hermes-health-fhir", "category": "industry", "icon": "Heart", "price": 3497, "description": "Integração FHIR para healthtechs — EHR, telemedicine e interoperabilidade."},
    {"name": "Hermes Fintech Open Banking", "slug": "hermes-fintech-open-banking", "category": "industry", "icon": "DollarSign", "price": 2997, "description": "Open Banking com consent, PIX, boletos e account aggregation."},
    {"name": "Hermes E-com MercadoLivre", "slug": "hermes-ecom-mercadolivre", "category": "industry", "icon": "ShoppingCart", "price": 1997, "description": "Integração Mercado Livre — listings, orders, shipping e reviews."},
    {"name": "Hermes EdTech LMS", "slug": "hermes-edtech-lms", "category": "industry", "icon": "GraduationCap", "price": 2497, "description": "LMS com cursos adaptativos, SCORM, gamificação e analytics."},
    {"name": "Hermes IoT Smart City", "slug": "hermes-iot-smart-city", "category": "industry", "icon": "Building", "price": 3997, "description": "Plataforma IoT smart city — sensores, dashboards e predictive analytics."},
]

# Generate
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
