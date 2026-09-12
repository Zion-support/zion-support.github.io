#!/usr/bin/env python3
"""Growth Engine: generate 100 NEW unique Hermes Agent services (v3 batch)."""
import json
from datetime import datetime, timezone

DATA_PATH = '/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json'

with open(DATA_PATH) as f:
    data = json.load(f)

services = data['services']
max_id = max(s['id'] for s in services)
existing_slugs = {s['slug'] for s in services}
existing_names = {s['name'] for s in services}

# 100 NEW services — v3 naming: "Hermes [Descriptor] [Noun]"
new_services = [
    # === MESSAGING (14) ===
    {"name": "Hermes WhatsApp Lead Qualifier Bot", "slug": "hermes-whatsapp-lead-qualifier-bot", "category": "messaging", "icon": "Filter", "price": 1697, "description": "Bot WhatsApp com qualificação automática de leads, lead scoring e nurturing."},
    {"name": "Hermes Telegram E-Learning Platform", "slug": "hermes-telegram-elearning-platform", "category": "messaging", "icon": "BookOpen", "price": 2497, "description": "Plataforma de cursos no Telegram com quizzes, certificados e tracking."},
    {"name": "Hermes Discord Event Manager", "slug": "hermes-discord-event-manager", "category": "messaging", "icon": "Calendar", "price": 1497, "description": "Gestor de eventos Discord com RSVPs, reminders e community challenges."},
    {"name": "Hermes Slack Analytics Reporter", "slug": "hermes-slack-analytics-reporter", "category": "messaging", "icon": "BarChart", "price": 1597, "description": "Reporter Slack com engagement analytics, activity heatmaps e sentiment tracking."},
    {"name": "Hermes Email Warmup Engine", "slug": "hermes-email-warmup-engine", "category": "messaging", "icon": "Thermometer", "price": 1197, "description": "Engine de email warmup com gradual sending, reputation monitoring e ISP relations."},
    {"name": "Hermes Teams Poll & Survey Bot", "slug": "hermes-teams-poll-survey-bot", "category": "messaging", "icon": "ThumbsUp", "price": 897, "description": "Bot Teams com polls, surveys, quizzes e real-time results dashboard."},
    {"name": "Hermes Instagram Story Commerce", "slug": "hermes-instagram-story-commerce", "category": "messaging", "icon": "ShoppingBag", "price": 1797, "description": "Commerce em Instagram Stories com product tags, swipe-up e checkout integrado."},
    {"name": "Hermes LinkedIn Sales Navigator AI", "slug": "hermes-linkedin-sales-nav-ai", "category": "messaging", "icon": "Compass", "price": 2497, "description": "AI para LinkedIn Sales Navigator com lead recommendations e sequence automation."},
    {"name": "Hermes Voicebot Multi-Language", "slug": "hermes-voicebot-multilang", "category": "messaging", "icon": "Globe", "price": 3497, "description": "Voicebot multilíngue com TTS/STT, dialect detection e cultural adaptation."},
    {"name": "Hermes SMS Loyalty Platform", "slug": "hermes-sms-loyalty-platform", "category": "messaging", "icon": "Award", "price": 1497, "description": "Plataforma SMS loyalty com points, tiers, rewards e referral tracking."},
    {"name": "Hermes Facebook Messenger Commerce", "slug": "hermes-fbmessenger-commerce", "category": "messaging", "icon": "ShoppingCart", "price": 1897, "description": "Commerce via Facebook Messenger com catalog, cart e payment integration."},
    {"name": "Hermes Threema Work Secure Comms", "slug": "hermes-threema-work-secure", "category": "messaging", "icon": "Lock", "price": 2497, "description": "Comunicação segura Threema Work com Swiss hosting e GDPR compliance."},
    {"name": "Hermes Snapchat AR Commerce", "slug": "hermes-snapchat-ar-commerce", "category": "messaging", "icon": "Camera", "price": 2997, "description": "AR Commerce Snapchat com try-on, product visualization e shoppable lenses."},
    {"name": "Hermes Line Official Account AI", "slug": "hermes-line-official-ai", "category": "messaging", "icon": "Bot", "price": 2197, "description": "AI Line Official Account com rich menus, LIFF apps e message delivery."},

    # === DEVOPS (14) ===
    {"name": "Hermes GitLab CI/CD Accelerator", "slug": "hermes-gitlab-cicd-accelerator", "category": "devops", "icon": "GitBranch", "price": 1497, "description": "Accelerator GitLab CI/CD com templates, caching e deployment strategies."},
    {"name": "Hermes BuildKit Image Builder", "slug": "hermes-buildkit-image-builder", "category": "devops", "icon": "Container", "price": 1297, "description": "Builder BuildKit com multi-stage, layer caching e image optimization."},
    {"name": "Hermes Crossplane Cloud Composer", "slug": "hermes-crossplane-cloud-composer", "category": "devops", "icon": "Cloud", "price": 2197, "description": "Composer Crossplane com composite resources, claims e provider packages."},
    {"name": "Hermes Flux GitOps Controller", "slug": "hermes-flux-gitops-controller", "category": "devops", "icon": "GitMerge", "price": 1697, "description": "Controller Flux com Kustomization, HelmRelease e image automation."},
    {"name": "Hermes Cortex Metrics Backend", "slug": "hermes-cortex-metrics-backend", "category": "devops", "icon": "Activity", "price": 1897, "description": "Backend Cortex com blocks storage, alertmanager e multi-tenancy."},
    {"name": "Hermes Backstage Developer Portal", "slug": "hermes-backstage-dev-portal", "category": "devops", "icon": "Book", "price": 2997, "description": "Developer portal Backstage com software catalog, tech docs e plugins."},
    {"name": "Hermes Spinnaker Delivery Pipeline", "slug": "hermes-spinnaker-delivery-pipeline", "category": "devops", "icon": "GitBranch", "price": 2497, "description": "Pipeline Spinnaker com multi-cloud deployment, canary analysis e pipeline templates."},
    {"name": "Hermes Istio Service Mesh Ops", "slug": "hermes-istio-mesh-ops", "category": "devops", "icon": "Network", "price": 2197, "description": "Ops Istio com traffic management, security policies e observability."},
    {"name": "Hermes Envoy Edge Proxy", "slug": "hermes-envoy-edge-proxy", "category": "devops", "icon": "Globe", "price": 1897, "description": "Edge proxy Envoy with xDS, circuit breaking, retries e external auth."},
    {"name": "Hermes Nomad Workload Scheduler", "slug": "hermes-nomad-scheduler", "category": "devops", "icon": "Cpu", "price": 1697, "description": "Scheduler Nomad com task drivers, device plugins e multi-region."},
    {"name": "Hermes Tekton Pipeline Engine", "slug": "hermes-tekton-pipeline-engine", "category": "devops", "icon": "GitMerge", "price": 1497, "description": "Engine Tekton com Tasks, Pipelines, TriggerTemplates e interceptors."},
    {"name": "Hermes Fluent Bit Log Router", "slug": "hermes-fluentbit-log-router", "category": "devops", "icon": "FileText", "price": 1197, "description": "Router Fluent Bit com multi-output, filters e Kubernetes metadata."},
    {"name": "Hermes Linkerd Mesh Lite", "slug": "hermes-linkerd-mesh-lite", "category": "devops", "icon": "Network", "price": 1497, "description": "Mesh Linkerd com mTLS, traffic split e golden metrics."},
    {"name": "Hermes Vagrant Environment Builder", "slug": "hermes-vagrant-env-builder", "category": "devops", "icon": "Box", "price": 897, "description": "Builder Vagrant com multi-machine, providers e provisioning."},

    # === SECURITY (15) ===
    {"name": "Hermes Burp Suite Enterprise", "slug": "hermes-burp-suite-enterprise", "category": "security", "icon": "Target", "price": 3497, "description": "Enterprise Burp Suite com scan schedules, CI/CD integration e compliance reports."},
    {"name": "Hermes AWS IAM Access Analyzer", "slug": "hermes-aws-iam-analyzer", "category": "security", "icon": "UserCheck", "price": 1897, "description": "Analyzer AWS IAM com unused access, policy validation e cross-account analysis."},
    {"name": "Hermes Azure Sentinel SIEM", "slug": "hermes-azure-sentinel-siem", "category": "security", "icon": "Shield", "price": 3997, "description": "SIEM Azure Sentinel com analytics rules, hunting queries e threat intelligence."},
    {"name": "Hermes Keycloak Identity Broker", "slug": "hermes-keycloak-identity-broker", "category": "security", "icon": "Users", "price": 1997, "description": "Identity broker Keycloak com SSO, identity brokering e user federation."},
    {"name": "Hermes OWASP Dependency Check", "slug": "hermes-owasp-dependency-check", "category": "security", "icon": "Package", "price": 1297, "description": "Check OWASP com vulnerability detection, suppression e CVSS scoring."},
    {"name": "Hermes Falco Runtime Security", "slug": "hermes-falco-runtime-security", "category": "security", "icon": "AlertTriangle", "price": 2497, "description": "Runtime security Falco com custom rules, output plugins e incident response."},
    {"name": "Hermes WireGuard VPN Manager", "slug": "hermes-wireguard-vpn-manager", "category": "security", "icon": "Wifi", "price": 1497, "description": "Manager WireGuard com key management, peer routing e auto-configuration."},
    {"name": "Hermes CrowdStrike Falcon Deploy", "slug": "hermes-crowdstrike-falcon-deploy", "category": "security", "icon": "ShieldCheck", "price": 4497, "description": "Deploy CrowdStrike Falcon com EDR, threat hunting e IOA/IOC management."},
    {"name": "Hermes Qualys Vulnerability Mgmt", "slug": "hermes-qualys-vuln-mgmt", "category": "security", "icon": "Search", "price": 2997, "description": "Vulnerability management Qualys com scanning, prioritization e remediation workflows."},
    {"name": "Hermes Tenable.io Exposure Mgmt", "slug": "hermes-tenable-exposure-mgmt", "category": "security", "icon": "Eye", "price": 3497, "description": "Exposure management Tenable.io com asset discovery, risk scoring e predictive prioritization."},
    {"name": "Hermes Snyk Container Security", "slug": "hermes-snyk-container-security", "category": "security", "icon": "Container", "price": 1997, "description": "Container security Snyk com image scanning, base image recommendations e fix PRs."},
    {"name": "Hermes SonarQube Code Quality", "slug": "hermes-sonarqube-code-quality", "category": "security", "icon": "Code", "price": 2197, "description": "Code quality SonarQube com quality gates, security hotspots e technical debt."},
    {"name": "Hermes Checkmarx SAST Integration", "slug": "hermes-checkmarx-sast", "category": "security", "icon": "Search", "price": 2497, "description": "Integration Checkmarx com incremental scanning, query suite customization e reporting."},
    {"name": "Hermes Rapid7 InsightVM", "slug": "hermes-rapid7-insightvm", "category": "security", "icon": "ShieldAlert", "price": 3497, "description": "InsightVM Rapid7 com real-time vulnerability data, live dashboards e remediation."},
    {"name": "Hermes BeyondTrust PAM", "slug": "hermes-beyondtrust-pam", "category": "security", "icon": "Key", "price": 2997, "description": "PAM BeyondTrust com privileged session management, credential vaulting e access control."},

    # === DATA (15) ===
    {"name": "Hermes Spark Structured Streaming", "slug": "hermes-spark-structured-streaming", "category": "data", "icon": "Zap", "price": 2997, "description": "Structured streaming Spark com watermarking, state management e exactly-once."},
    {"name": "Hermes DuckDB Analytics Engine", "slug": "hermes-duckdb-analytics-engine", "category": "data", "icon": "Database", "price": 1497, "description": "Analytics engine DuckDB com columnar storage, vectorized execution e parallel queries."},
    {"name": "Hermes ClickHouse Columnar Store", "slug": "hermes-clickhouse-columnar", "category": "data", "icon": "Database", "price": 2497, "description": "Columnar store ClickHouse com MergeTree engines, materialized views e sharding."},
    {"name": "Hermes Delta Lake ACID Engine", "slug": "hermes-delta-lake-acid", "category": "data", "icon": "Layers", "price": 2497, "description": "ACID engine Delta Lake com time travel, vacuum e Z-ordering."},
    {"name": "Hermes Hudi Incremental Pipeline", "slug": "hermes-hudi-incremental-pipeline", "category": "data", "icon": "TrendingUp", "price": 2197, "description": "Incremental pipeline Hudi com COW/MOR tables, clustering e compaction."},
    {"name": "Hermes Flink Stream Processing", "slug": "hermes-flink-stream-processing", "category": "data", "icon": "Zap", "price": 3497, "description": "Stream processing Flink com event time, windows e stateful processing."},
    {"name": "Hermes Pulsar Messaging Storage", "slug": "hermes-pulsar-messaging-storage", "category": "data", "icon": "Radio", "price": 2197, "description": "Messaging storage Pulsar com tiered storage, geo-replication e schema registry."},
    {"name": "Hermes Cassandra NoSQL Scale", "slug": "hermes-cassandra-nosql-scale", "category": "data", "icon": "Database", "price": 2997, "description": "NoSQL scale Cassandra com multi-DC, vnodes e lightweight transactions."},
    {"name": "Hermes Neo4j Graph Analytics", "slug": "hermes-neo4j-graph-analytics", "category": "data", "icon": "Share2", "price": 2497, "description": "Graph analytics Neo4j com Cypher queries, graph algorithms e GDS library."},
    {"name": "Hermes ScyllaDB High-Perf NoSQL", "slug": "hermes-scylladb-highperf", "category": "data", "icon": "Database", "price": 2997, "description": "High-performance NoSQL ScyllaDB com shard-aware drivers e consistent performance."},
    {"name": "Hermes QuestDB Time-Series DB", "slug": "hermes-questdb-timeseries", "category": "data", "icon": "Clock", "price": 1897, "description": "Time-series DB QuestDB com SQL support, relational joins e high ingestion."},
    {"name": "Hermes TimescaleDB Hypertables", "slug": "hermes-timescaledb-hypertables", "category": "data", "icon": "Clock", "price": 2197, "description": "Hypertables TimescaleDB com compression, continuous aggregates e retention policies."},
    {"name": "Hermes InfluxDB Metrics Stack", "slug": "hermes-influxdb-metrics-stack", "category": "data", "icon": "Activity", "price": 1797, "description": "Metrics stack InfluxDB com TICK stack, Flux language e downsampling."},
    {"name": "Hermes Splunk Observability Suite", "slug": "hermes-splunk-observability", "category": "data", "icon": "BarChart", "price": 3997, "description": "Observability suite Splunk com logs, metrics, traces e IT service intelligence."},
    {"name": "Hermes Databricks Lakehouse Platform", "slug": "hermes-databricks-lakehouse", "category": "data", "icon": "Layers", "price": 4497, "description": "Lakehouse Databricks com Delta Lake, MLflow e Unity Catalog."},

    # === CRM (13) ===
    {"name": "Hermes HubSpot Operations Hub", "slug": "hermes-hubspot-ops-hub", "category": "crm", "icon": "Settings", "price": 1997, "description": "Operations Hub HubSpot com sync, programmable automation e data quality."},
    {"name": "Hermes Pipedrive Deal Intelligence", "slug": "hermes-pipedrive-deal-intel", "category": "crm", "icon": "TrendingUp", "price": 1697, "description": "Deal intelligence Pipedrive com AI scoring, activity reminders e goal tracking."},
    {"name": "Hermes Monday.com Workflows", "slug": "hermes-monday-com-workflows", "category": "crm", "icon": "Workflow", "price": 1497, "description": "Workflows Monday.com com automations, integrations e board templates."},
    {"name": "Hermes Notion CRM Workspace", "slug": "hermes-notion-crm-workspace", "category": "crm", "icon": "Book", "price": 1297, "description": "CRM workspace Notion com databases, relations e rollups."},
    {"name": "Hermes Airtable CRM Builder", "slug": "hermes-airtable-crm-builder", "category": "crm", "icon": "Grid", "price": 1097, "description": "CRM builder Airtable com linked records, automations e interface designer."},
    {"name": "Hermes Nimble Social CRM", "slug": "hermes-nimble-social-crm", "category": "crm", "icon": "Users", "price": 1797, "description": "Social CRM Nimble com social listening, contact enrichment e smart segments."},
    {"name": "Hermes Engagely Customer Success", "slug": "hermes-engagely-customer-success", "category": "crm", "icon": "Heart", "price": 2197, "description": "Customer success Engagely com CSAT, surveys, feedback e reporting."},
    {"name": "Hermes LoyaltyLion Rewards Platform", "slug": "hermes-loyaltylion-rewards", "category": "crm", "icon": "Award", "price": 2497, "description": "Rewards platform LoyaltyLion com points, tiers, referrals e VIP programs."},
    {"name": "Hermes Yotpo Reviews Engine", "slug": "hermes-yotpo-reviews-engine", "category": "crm", "icon": "Star", "price": 1997, "description": "Reviews engine Yotpo com visual UGC, reviews, ratings e loyalty."},
    {"name": "Hermes Intercom Fin AI Agent", "slug": "hermes-intercom-fin-agent", "category": "crm", "icon": "Bot", "price": 2497, "description": "AI Agent Intercom Fin com conversational support, smart routing e product tours."},
    {"name": "Hermes Zendesk AI Assistant", "slug": "hermes-zendesk-ai-assistant", "category": "crm", "icon": "Bot", "price": 1997, "description": "AI Assistant Zendesk com auto-tagging, macro suggestions e workflow automation."},
    {"name": "Hermes Kustomer Omnichannel Desk", "slug": "hermes-kustomer-omni-desk", "category": "crm", "icon": "Headphones", "price": 2997, "description": "Omnichannel desk Kustomer com customer timeline, AI chatbots e CRM."},
    {"name": "Hermes Freshworks 360 Platform", "slug": "hermes-freshworks-360", "category": "crm", "icon": "Package", "price": 3497, "description": "Platform Freshworks 360 com CRM, ITSM, HR e marketing automation."},

    # === AI (14) ===
    {"name": "Hermes AutoGen Multi-Agent Studio", "slug": "hermes-autogen-agent-studio", "category": "ai", "icon": "Users", "price": 2997, "description": "Multi-agent studio AutoGen com code execution, group chat e teachability."},
    {"name": "Hermes Semantic Kernel Orchestrator", "slug": "hermes-semantic-kernel-orch", "category": "ai", "icon": "Cpu", "price": 2197, "description": "Orchestrator Semantic Kernel com skills, planners e memory connectors."},
    {"name": "Hermes Prompt Flow Designer", "slug": "hermes-prompt-flow-designer", "category": "ai", "icon": "GitBranch", "price": 1497, "description": "Designer Prompt Flow com DAG building, variant management e evaluation."},
    {"name": "Hermes LLM Router & Gateway", "slug": "hermes-llm-router-gateway", "category": "ai", "icon": "Radio", "price": 1997, "description": "Router LLM com load balancing, fallback strategies e cost optimization."},
    {"name": "Hermes Evaluation Framework", "slug": "hermes-eval-framework", "category": "ai", "icon": "CheckCircle", "price": 1797, "description": "Evaluation framework com LLM-as-judge, human eval, benchmarks e reports."},
    {"name": "Hermes Guardrails AI Safety", "slug": "hermes-guardrails-ai-safety", "category": "ai", "icon": "ShieldCheck", "price": 1997, "description": "AI safety Guardrails com validation, redaction e output filtering."},
    {"name": "Hermes Replicate Model Hub", "slug": "hermes-replicate-model-hub", "category": "ai", "icon": "Cloud", "price": 1497, "description": "Model hub Replicate com Cog packages, hardware scaling e webhooks."},
    {"name": "Hermes Ollama Local Inference", "slug": "hermes-ollama-local-inference", "category": "ai", "icon": "Server", "price": 997, "description": "Local inference Ollama com model management, quantization e API proxy."},
    {"name": "Hermes Llama.cpp Optimized Engine", "slug": "hermes-llamacpp-optimized-engine", "category": "ai", "icon": "Cpu", "price": 1297, "description": "Optimized engine llama.cpp com GGUF support, GPU offloading e batched inference."},
    {"name": "Hermes Tokenizer Studio", "slug": "hermes-tokenizer-studio", "category": "ai", "icon": "Type", "price": 897, "description": "Tokenizer studio com BPE, WordPiece, Unigram e vocabulary optimization."},
    {"name": "Hermes Embedding Factory", "slug": "hermes-embedding-factory", "category": "ai", "icon": "Layers", "price": 1497, "description": "Embedding factory com vector storage, similarity search e re-ranking."},
    {"name": "Hermes Chainlit Chat UI Builder", "slug": "hermes-chainlit-chat-builder", "category": "ai", "icon": "MessageSquare", "price": 1297, "description": "Chat UI builder Chainlit com elements, steps e authentication."},
    {"name": "Hermes Griptape Framework", "slug": "hermes-griptape-framework", "category": "ai", "icon": "Zap", "price": 1997, "description": "Framework Griptape com structures, tools, memory e rulesets."},
    {"name": "Hermes LiteLLM Proxy Server", "slug": "hermes-litellm-proxy", "category": "ai", "icon": "Radio", "price": 1797, "description": "Proxy server LiteLLM com unified API, caching, budget management e logging."},

    # === COMPLIANCE (8) ===
    {"name": "Hermes ISO 27001 ISMS", "slug": "hermes-iso27001-isms", "category": "compliance", "icon": "Award", "price": 3497, "description": "ISMS ISO 27001 com risk assessment, statement of applicability e internal audits."},
    {"name": "Hermes DPA Generator AI", "slug": "hermes-dpa-generator-ai", "category": "compliance", "icon": "FileSignature", "price": 1497, "description": "DPA generator AI com clause library, jurisdiction-specific templates e review workflow."},
    {"name": "Hermes Cookiebot Consent Mgmt", "slug": "hermes-cookiebot-consent-mgmt", "category": "compliance", "icon": "ShieldCheck", "price": 1497, "description": "Consent management Cookiebot com scanning, Categorization e geo-targeting."},
    {"name": "Hermes Termly Policy Generator", "slug": "hermes-termly-policy-gen", "category": "compliance", "icon": "FileText", "price": 997, "description": "Policy generator Termly com privacy, terms, cookies e disclaimer."},
    {"name": "Hermes CIPP GDPR Compliance", "slug": "hermes-cipp-gdpr-compliance", "category": "compliance", "icon": "Globe", "price": 2497, "description": "GDPR compliance CIPP com data mapping, DSAR handling e breach notification."},
    {"name": "Hermes Standard Contractual Clauses", "slug": "hermes-scc-generator", "category": "compliance", "icon": "FileSignature", "price": 1997, "description": "SCC generator com EU 2021/914 templates, TIA workflow e multi-module support."},
    {"name": "Hermes DPOrganizer Privacy Suite", "slug": "hermes-dporganizer-privacy", "category": "compliance", "icon": "Shield", "price": 2997, "description": "Privacy suite DPOrganizer com data inventory, assessments e vendor management."},
    {"name": "Hermes Proteus Cyber Risk Mgmt", "slug": "hermes-proteus-cyber-risk", "category": "compliance", "icon": "AlertTriangle", "price": 2497, "description": "Cyber risk management Proteus com threat modeling, quantification e reporting."},

    # === INDUSTRY (7) ===
    {"name": "Hermes Shopify Plus Automation", "slug": "hermes-shopify-plus-automation", "category": "industry", "icon": "ShoppingBag", "price": 2997, "description": "Automation Shopify Plus com checkout extensibility, B2B e Shop Pay."},
    {"name": "Hermes Magento Commerce Cloud", "slug": "hermes-magento-cloud", "category": "industry", "icon": "ShoppingCart", "price": 3497, "description": "Commerce Cloud Magento com PWA Studio, B2B features e cloud hosting."},
    {"name": "Hermes BigCommerce Headless", "slug": "hermes-bigcommerce-headless", "category": "industry", "icon": "Globe", "price": 2497, "description": "Headless BigCommerce com Stencil themes, multi-storefront e APIs."},
    {"name": "Hermes HubSpot CMS Development", "slug": "hermes-hubspot-cms-dev", "category": "industry", "icon": "Code", "price": 2497, "description": "CMS development HubSpot com themes, modules e serverless functions."},
    {"name": "Hermes WordPress VIP Platform", "slug": "hermes-wp-vip-platform", "category": "industry", "icon": "Globe", "price": 2997, "description": "VIP platform WordPress com enterprise hosting, edge caching e workflows."},
    {"name": "Hermes Webflow Enterprise Design", "slug": "hermes-webflow-enterprise", "category": "industry", "icon": "Palette", "price": 2497, "description": "Enterprise design Webflow com CMS, e-commerce, localization e memberships."},
    {"name": "Hermes Docusaurus Doc Platform", "slug": "hermes-docusaurus-doc-platform", "category": "industry", "icon": "BookOpen", "price": 1497, "description": "Doc platform Docusaurus com versioning, search, i18n e MDX."},
]

# Generate with dedup check
now = datetime.now(timezone.utc).isoformat()
added = 0
skipped = 0

for svc in new_services:
    if svc['slug'] in existing_slugs or svc['name'] in existing_names:
        skipped += 1
        print(f"SKIP: {svc['slug']}")
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
    existing_slugs.add(svc['slug'])
    existing_names.add(svc['name'])
    added += 1

# Write back
with open(DATA_PATH, 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"\nAdded: {added}")
print(f"Skipped: {skipped}")
print(f"Total: {len(services)}")
