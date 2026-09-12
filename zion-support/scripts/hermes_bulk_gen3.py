#!/usr/bin/env python3
"""Generate NEW unique Hermes Agent services — batch 2, zero overlap."""
import json
from datetime import datetime, timezone

with open('/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json') as f:
    data = json.load(f)

services = data['services']
max_id = max(s['id'] for s in services)
existing_slugs = {s['slug'] for s in services}
existing_names = {s['name'] for s in services}

# 100 NEW services — completely unique names with v2/v3/specific descriptors
new_services = [
    # === MESSAGING (15) — v2 variants ===
    {"name": "Hermes WhatsApp Commerce Engine", "slug": "hermes-whatsapp-commerce-engine", "category": "messaging", "icon": "ShoppingCart", "price": 1997, "description": "Motor deCommerce WhatsApp com catálogo, carrinho e pagamento integrado."},
    {"name": "Hermes Telegram Subscription Bot", "slug": "hermes-telegram-subscription-bot", "category": "messaging", "icon": "Repeat", "price": 1497, "description": "Bot de assinaturas Telegram com trial, billing e gestão de subscribers."},
    {"name": "Hermes Discord Role Manager", "slug": "hermes-discord-role-manager", "category": "messaging", "icon": "Users", "price": 1297, "description": "Gestor de roles Discord com auto-role, reaction roles e leveling."},
    {"name": "Hermes Slack Analytics Dashboard", "slug": "hermes-slack-analytics-dashboard", "category": "messaging", "icon": "BarChart", "price": 1597, "description": "Dashboard analytics Slack com engagement metrics, active users e sentiment."},
    {"name": "Hermes Email Deliverability Pro", "slug": "hermes-email-deliverability-pro", "category": "messaging", "icon": "Mail", "price": 1397, "description": "Pro deliverability com SPF, DKIM, DMARC, warming e inbox placement."},
    {"name": "Hermes Teams Bot Framework", "slug": "hermes-teams-bot-framework", "category": "messaging", "icon": "Bot", "price": 1797, "description": "Framework de bots Teams com adaptive cards, task modules e messaging extensions."},
    {"name": "Hermes Instagram DM Automation", "slug": "hermes-instagram-dm-automation", "category": "messaging", "icon": "MessageCircle", "price": 1497, "description": "Automação DMs Instagram com respostas, qualifiers e handoff para humanos."},
    {"name": "Hermes LinkedIn Auto Messenger", "slug": "hermes-linkedin-auto-messenger", "category": "messaging", "icon": "Send", "price": 2197, "description": "Mensageiro LinkedIn com connection requests, follow-ups e sequence builder."},
    {"name": "Hermes Voice AI Call Center", "slug": "hermes-voice-ai-call-center", "category": "messaging", "icon": "Phone", "price": 3497, "description": "Call center IA com voicebot, sentiment analysis e call routing."},
    {"name": "Hermes SMS Two-Way Platform", "slug": "hermes-sms-twoway-platform", "category": "messaging", "icon": "Smartphone", "price": 1197, "description": "Plataforma SMS bidirecional com short codes, keywords e auto-reply."},
    {"name": "Hermes WeChat Mini Program Dev", "slug": "hermes-wechat-miniprogram-dev", "category": "messaging", "icon": "Code", "price": 2497, "description": "Desenvolvimento WeChat Mini Programs com templates, CI/CD e publishing."},
    {"name": "Hermes Matrix Decentralized Chat", "slug": "hermes-matrix-decentralized-chat", "category": "messaging", "icon": "Globe", "price": 1997, "description": "Chat descentralizado Matrix com bridges, e2ee e self-hosting."},
    {"name": "Hermes Viber Business Inbox", "slug": "hermes-viber-business-inbox", "category": "messaging", "icon": "MessageSquare", "price": 1097, "description": "Inbox Viber Business com chatbot, broadcast e rich messages."},
    {"name": "Hermes TikTok Live Commerce", "slug": "hermes-tiktok-live-commerce", "category": "messaging", "icon": "Video", "price": 2997, "description": "TikTok Live Commerce com product showcase, coupons e order tracking."},
    {"name": "Hermes Unified Inbox Pro", "slug": "hermes-unified-inbox-pro", "category": "messaging", "icon": "Inbox", "price": 2497, "description": "Inbox unificado com todas as plataformas, SLA tracking e collision detection."},

    # === DEVOPS (15) — v2 ===
    {"name": "Hermes GitHub Advanced Security", "slug": "hermes-github-advanced-security", "category": "devops", "icon": "Shield", "price": 1897, "description": "GitHub Advanced Security com code scanning, secret scanning e dependency review."},
    {"name": "Hermes Podman Container Runtime", "slug": "hermes-podman-container-runtime", "category": "devops", "icon": "Container", "price": 1197, "description": "Runtime Podman com rootless containers, pods e systemd integration."},
    {"name": "Hermes Rancher Kubernetes Platform", "slug": "hermes-rancher-k8s-platform", "category": "devops", "icon": "Package", "price": 2197, "description": "Plataforma Rancher K8s com multi-cluster management e Istio service mesh."},
    {"name": "Hermes Pulumi IaC Generator", "slug": "hermes-pulumi-iac-generator", "category": "devops", "icon": "Code", "price": 1597, "description": "Generator Pulumi com TypeScript, Python, Go e stack references."},
    {"name": "Hermes Datadog Infrastructure Mon", "slug": "hermes-datadog-infra-monitor", "category": "devops", "icon": "Activity", "price": 1897, "description": "Monitoramento Datadog com APM, logs, synthetics e custom metrics."},
    {"name": "Hermes ELK Stack Deployer", "slug": "hermes-elk-stack-deployer", "category": "devops", "icon": "FileText", "price": 1497, "description": "Deployer ELK com Elasticsearch, Logstash, Kibana e Beats."},
    {"name": "Hermes ArgoCD GitOps Engine", "slug": "hermes-argocd-gitops-engine", "category": "devops", "icon": "GitBranch", "price": 1697, "description": "Engine ArgoCD com app-of-apps, sync waves e hooks."},
    {"name": "Hermes OpenFaaS Serverless", "slug": "hermes-openfaas-serverless", "category": "devops", "icon": "Zap", "price": 1397, "description": "Serverless OpenFaaS com store, async invocations e scale-to-zero."},
    {"name": "Hermes Vitess Database Cluster", "slug": "hermes-vitess-db-cluster", "category": "devops", "icon": "Database", "price": 2497, "description": "Cluster Vitess com sharding, VReplication e vtctl."},
    {"name": "Hermes Boundary Access Manager", "slug": "hermes-boundary-access-manager", "category": "devops", "icon": "Key", "price": 1997, "description": "Manager Boundary com sessions, targets e just-in-time access."},
    {"name": "Hermes Puppet Enterprise Config", "slug": "hermes-puppet-enterprise-config", "category": "devops", "icon": "Settings", "price": 1597, "description": "Config Puppet Enterprise com modules, Hiera e Bolt tasks."},
    {"name": "Hermes Drone CI Pipeline", "slug": "hermes-drone-ci-pipeline", "category": "devops", "icon": "GitMerge", "price": 1197, "description": "Pipeline Drone CI com steps, secrets e parallel execution."},
    {"name": "Hermes Traefik Edge Router", "slug": "hermes-traefik-edge-router", "category": "devops", "icon": "Globe", "price": 1297, "description": "Edge router Traefik com Let's Encrypt, middlewares e TCP/UDP routing."},
    {"name": "Hermes Thanos Long-Term Metrics", "slug": "hermes-thanos-longterm-metrics", "category": "devops", "icon": "Clock", "price": 1897, "description": "Métricas Thanos com downsampling, compaction e global query view."},
    {"name": "Hermes Chaos Engineering Toolkit", "slug": "hermes-chaos-engineering-toolkit", "category": "devops", "icon": "Zap", "price": 2197, "description": "Toolkit chaos engineering com Litmus, Gremlin e experiment tracking."},

    # === SECURITY (15) — v2 ===
    {"name": "Hermes IAST Interactive Scanner", "slug": "hermes-iast-interactive-scanner", "category": "security", "icon": "Search", "price": 2497, "description": "Scanner IAST com Contrast, Seeker e runtime vulnerability detection."},
    {"name": "Hermes Container Image Scanner", "slug": "hermes-container-image-scanner", "category": "security", "icon": "Container", "price": 1897, "description": "Scanner container images com Trivy, Grype e SBOM generation."},
    {"name": "Hermes Cloudflare WAF Manager", "slug": "hermes-cloudflare-waf-manager", "category": "security", "icon": "Shield", "price": 1497, "description": "Manager Cloudflare WAF com custom rules, rate limiting e bot management."},
    {"name": "Hermes Okta Identity Lifecycle", "slug": "hermes-okta-identity-lifecycle", "category": "security", "icon": "UserCheck", "price": 2197, "description": "Lifecycle Okta com provisioning, deprovisioning e access reviews."},
    {"name": "Hermes Let's Encrypt Orchestrator", "slug": "hermes-letsencrypt-orchestrator", "category": "security", "icon": "Award", "price": 997, "description": "Orquestrador Let's Encrypt com cert-manager, DNS-01 e wildcard certs."},
    {"name": "Hermes Cilium Network Policies", "slug": "hermes-cilium-network-policies", "category": "security", "icon": "Network", "price": 1697, "description": "Políticas Cilium com eBPF, Hubble observability e cluster mesh."},
    {"name": "Hermes Kong API Gateway Sec", "slug": "hermes-kong-api-gateway-sec", "category": "security", "icon": "ShieldCheck", "price": 1997, "description": "Gateway Kong com OIDC, ACL, rate limiting e request transformer."},
    {"name": "Hermes Incident Response Playbook", "slug": "hermes-ir-playbook", "category": "security", "icon": "AlertTriangle", "price": 2997, "description": "Playbook IR com TheHive, Cortex e case management."},
    {"name": "Hermes CycloneDX SBOM Studio", "slug": "hermes-cyclonedx-sbom-studio", "category": "security", "icon": "Package", "price": 1797, "description": "Studio CycloneDX com generation, analysis e vulnerability exploitability."},
    {"name": "Hermes Prisma Cloud Defender", "slug": "hermes-prisma-cloud-defender", "category": "security", "icon": "Cloud", "price": 2997, "description": "Defender Prisma Cloud com CWPP, CSPM e runtime protection."},
    {"name": "Hermes TruffleHog Secret Scan", "slug": "hermes-trufflehog-secret-scan", "category": "security", "icon": "Key", "price": 1497, "description": "Scan TruffleHog com entropy analysis, verification e historical scan."},
    {"name": "Hermes Patch My PC Third-Party", "slug": "hermes-patchmypc-thirdparty", "category": "security", "icon": "Wrench", "price": 1997, "description": "Patch third-party com Patch My PC, Chocolatey e auto-approval rules."},
    {"name": "Hermes AuditBoard Compliance", "slug": "hermes-auditboard-compliance", "category": "security", "icon": "ClipboardCheck", "price": 2497, "description": "Compliance AuditBoard com SOX, ITGC e control testing."},
    {"name": "Hermes Pentest Automation Suite", "slug": "hermes-pentest-automation-suite", "category": "security", "icon": "Target", "price": 3497, "description": "Suite pentest automation com Nuclei, ffuf e custom templates."},
    {"name": "Hermes MISP Threat Sharing", "slug": "hermes-misp-threat-sharing", "category": "security", "icon": "Share2", "price": 2497, "description": "Threat sharing MISP com correlation, feeds e warning lists."},

    # === DATA (15) — v2 ===
    {"name": "Hermes Prefect Workflow Orchestrator", "slug": "hermes-prefect-workflow-orchestrator", "category": "data", "icon": "GitBranch", "price": 1697, "description": "Orquestrador Prefect com flows, tasks e work pools."},
    {"name": "Hermes Redshift Spectrum Query", "slug": "hermes-redshift-spectrum-query", "category": "data", "icon": "Database", "price": 2197, "description": "Query Redshift Spectrum com external tables, partitioning e federated queries."},
    {"name": "Hermes BigQuery Cost Optimizer", "slug": "hermes-bigquery-cost-optimizer", "category": "data", "icon": "CloudSnow", "price": 1997, "description": "Otimizador BigQuery com slot commitments, partitioning e materialized views."},
    {"name": "Hermes Tecton Feature Platform", "slug": "hermes-tecton-feature-platform", "category": "data", "icon": "Cpu", "price": 2997, "description": "Platform Tecton com feature views, feature services e training datasets."},
    {"name": "Hermes Soda Data Quality", "slug": "hermes-soda-data-quality", "category": "data", "icon": "CheckCircle", "price": 1397, "description": "Data quality Soda com SodaCL, automated monitoring e anomaly detection."},
    {"name": "Hermes Meshstack Data Contracts", "slug": "hermes-meshstack-data-contracts", "category": "data", "icon": "FileSignature", "price": 1597, "description": "Data contracts Meshstack com schema enforcement, SLAs e ownership."},
    {"name": "Hermes Amundsen Data Catalog", "slug": "hermes-amundsen-data-catalog", "category": "data", "icon": "BookOpen", "price": 1797, "description": "Catálogo Amundsen com search, lineage e user annotations."},
    {"name": "Hermes NeuralProphet Forecast", "slug": "hermes-neuralprophet-forecast", "category": "data", "icon": "TrendingUp", "price": 1897, "description": "Forecast NeuralProphet com AR-Net, seasonality e events."},
    {"name": "Hermes mParticle Data Mastery", "slug": "hermes-mparticle-data-mastery", "category": "data", "icon": "Users", "price": 2497, "description": "Data mastery mParticle com audience builder, kit integrations e real-time."},
    {"name": "Hermes Apache Iceberg Lakehouse", "slug": "hermes-apache-iceberg-lakehouse", "category": "data", "icon": "Layers", "price": 2497, "description": "Lakehouse Iceberg com schema evolution, partition evolution e hidden partitioning."},
    {"name": "Hermes Ray Distributed Compute", "slug": "hermes-ray-distributed-compute", "category": "data", "icon": "Zap", "price": 2997, "description": "Compute Ray com actors, placement groups e autoscaling."},
    {"name": "Hermes dbt Semantic Layer", "slug": "hermes-dbt-semantic-layer", "category": "data", "icon": "Layers", "price": 1897, "description": "Semantic layer dbt com metrics store, exports e caching."},
    {"name": "Hermes Azure Synapse Pipeline", "slug": "hermes-azure-synapse-pipeline", "category": "data", "icon": "Cloud", "price": 2997, "description": "Pipeline Azure Synapse com dedicated serverless SQL, Spark e data flows."},
    {"name": "Hermes Druid Real-Time Analytics", "slug": "hermes-druid-realtime-analytics", "category": "data", "icon": "BarChart", "price": 2497, "description": "Analytics Druid com ingestion, rollup e approximate aggregations."},
    {"name": "Hermes RisingWave Streaming DB", "slug": "hermes-risingwave-streaming-db", "category": "data", "icon": "Activity", "price": 2197, "description": "Streaming DB RisingWave com materialized views, joins e exactly-once."},

    # === CRM (10) — v2 ===
    {"name": "Hermes Salesforce Flow Builder", "slug": "hermes-salesforce-flow-builder", "category": "crm", "icon": "GitBranch", "price": 1997, "description": "Builder Salesforce Flow com screen flows, record triggers e scheduled paths."},
    {"name": "Hermes Freshdesk Auto Resolver", "slug": "hermes-freshdesk-auto-resolver", "category": "crm", "icon": "CheckCircle", "price": 1397, "description": "Auto resolver Freshdesk com AI suggestions, canned responses e dispatch."},
    {"name": "Hermes Close CRM Sales Acceleration", "slug": "hermes-close-crm-sales-accel", "category": "crm", "icon": "TrendingUp", "price": 1797, "description": "Sales acceleration Close CRM com power dialer, sequences e smart views."},
    {"name": "Hermes Zoho CRM Customization", "slug": "hermes-zoho-crm-customization", "category": "crm", "icon": "Settings", "price": 1497, "description": "Customização Zoho CRM com Deluge, custom functions e widgets."},
    {"name": "Hermes Clearbit Enrichment Pro", "slug": "hermes-clearbit-enrichment-pro", "category": "crm", "icon": "Database", "price": 1297, "description": "Enrichment Clearbit com firmographics, technographics e intent data."},
    {"name": "Hermes Mailchimp Journey Builder", "slug": "hermes-mailchimp-journey-builder", "category": "crm", "icon": "Map", "price": 1597, "description": "Journey builder Mailchimp com conditional splits, A/B testing e send time."},
    {"name": "Hermes DocuSign CLM Suite", "slug": "hermes-docusign-clm-suite", "category": "crm", "icon": "FileSignature", "price": 2497, "description": "CLM DocuSign com contract lifecycle, AI analysis e smart clauses."},
    {"name": "Hermes Typeform Analytics Pro", "slug": "hermes-typeform-analytics-pro", "category": "crm", "icon": "BarChart", "price": 1097, "description": "Analytics Typeform com drop-off analysis, hidden fields e result tracking."},
    {"name": "Hermes Gainsight CS Operations", "slug": "hermes-gainsight-cs-operations", "category": "crm", "icon": "Heart", "price": 2997, "description": "CS operations Gainsight com health score, CTAs e journey orchestrator."},
    {"name": "Hermes PandaDoc CPQ Engine", "slug": "hermes-pandadoc-cpq-engine", "category": "crm", "icon": "DollarSign", "price": 1997, "description": "CPQ PandaDoc com pricing rules, approvals e quote generation."},

    # === AI (10) — v2 ===
    {"name": "Hermes RAG Pipeline Builder", "slug": "hermes-rag-pipeline-builder", "category": "ai", "icon": "Search", "price": 2497, "description": "Builder RAG pipeline com chunking, embedding, retrieval e reranking."},
    {"name": "Hermes vLLM Inference Server", "slug": "hermes-vllm-inference-server", "category": "ai", "icon": "Server", "price": 2997, "description": "Server vLLM com PagedAttention, continuous batching e tensor parallelism."},
    {"name": "Hermes Stable Diffusion Studio", "slug": "hermes-stable-diffusion-studio", "category": "ai", "icon": "Palette", "price": 1997, "description": "Studio Stable Diffusion com ControlNet, LoRA training e img2img."},
    {"name": "Hermes SAM Segmentation Toolkit", "slug": "hermes-segment-anything-toolkit", "category": "ai", "icon": "Eye", "price": 1797, "description": "Toolkit SAM com zero-shot segmentation, prompts e mask generation."},
    {"name": "Hermes LangGraph Agent Builder", "slug": "hermes-langgraph-agent-builder", "category": "ai", "icon": "Bot", "price": 2197, "description": "Builder LangGraph com nodes, edges, state management e checkpointer."},
    {"name": "Hermes Bandit A/B Test Engine", "slug": "hermes-bandit-ab-test-engine", "category": "ai", "icon": "ThumbsUp", "price": 1997, "description": "Engine bandit com Thompson sampling, UCB e multi-armed optimization."},
    {"name": "Hermes CrewAI Multi-Agent", "slug": "hermes-crewai-multi-agent", "category": "ai", "icon": "Users", "price": 2997, "description": "Multi-agent CrewAI com roles, tasks, tools e process orchestration."},
    {"name": "Hermes WhisperX Diarization", "slug": "hermes-whisperx-diarization", "category": "ai", "icon": "Mic", "price": 1697, "description": "Diarization WhisperX com word timestamps, alignment e speaker ID."},
    {"name": "Hermes W&B Experiment Pro", "slug": "hermes-wandb-experiment-pro", "category": "ai", "icon": "GitBranch", "price": 1497, "description": "Experiment W&B com sweeps, reports e artifact versioning."},
    {"name": "Hermes H2O AutoML Platform", "slug": "hermes-h2o-automl-platform", "category": "ai", "icon": "Cpu", "price": 2497, "description": "Platform H2O AutoML com Driverless AI, feature engineering e explainability."},

    # === COMPLIANCE (10) — v2 ===
    {"name": "Hermes ANPD LGPD Compliance", "slug": "hermes-anpd-lgpd-compliance", "category": "compliance", "icon": "Shield", "price": 2497, "description": "Compliance ANPD com DPO as a service, incident response e DPIA."},
    {"name": "Hermes NIST CSF Framework", "slug": "hermes-nist-csf-framework", "category": "compliance", "icon": "CheckSquare", "price": 2197, "description": "Framework NIST CSF com Identify, Protect, Detect, Respond, Recover."},
    {"name": "Hermes HITRUST CSF Certification", "slug": "hermes-hitrust-certification", "category": "compliance", "icon": "Award", "price": 3497, "description": "Certification HITRUST com risk assessment, controls mapping e validation."},
    {"name": "Hermes PCI DSS v4.0 Toolkit", "slug": "hermes-pci-dss-v4-toolkit", "category": "compliance", "icon": "CreditCard", "price": 2997, "description": "Toolkit PCI DSS v4.0 com SAQ, ASQ, segmentation testing e ROC."},
    {"name": "Hermes OneTrust Privacy", "slug": "hermes-onetrust-privacy", "category": "compliance", "icon": "Lock", "price": 2497, "description": "Privacy OneTrust com consent, DSAR, assessments e cookie compliance."},
    {"name": "Hermes Vanta SOC 2 Automation", "slug": "hermes-vanta-soc2-automation", "category": "compliance", "icon": "Activity", "price": 2997, "description": "Automation Vanta SOC 2 com evidence collection, vendor management e monitoring."},
    {"name": "Hermes Osano Cookie Consent", "slug": "hermes-osano-cookie-consent", "category": "compliance", "icon": "ShieldCheck", "price": 1497, "description": "Cookie consent Osano com scanning, categorization e geo-targeting."},
    {"name": "Hermes BigID Data Discovery", "slug": "hermes-bigid-data-discovery", "category": "compliance", "icon": "Search", "price": 2997, "description": "Data discovery BigID com classification, catalog e privacy requests."},
    {"name": "Hermes LogicGate Risk Cloud", "slug": "hermes-logicgate-risk-cloud", "category": "compliance", "icon": "Cloud", "price": 2497, "description": "Risk cloud LogicGate com workflow automation, dashboards e integrations."},
    {"name": "Hermes DocuVault Records", "slug": "hermes-docuvault-records", "category": "compliance", "icon": "Archive", "price": 1597, "description": "Records DocuVault com retention policies, legal holds e disposition."},

    # === INDUSTRY (10) — v2 ===
    {"name": "Hermes Redox Healthcare Integration", "slug": "hermes-redox-healthcare-integration", "category": "industry", "icon": "Heart", "price": 3497, "description": "Integration Redox com EHR interoperability, FHIR APIs e data normalization."},
    {"name": "Hermes Plaid Financial Data", "slug": "hermes-plaid-financial-data", "category": "industry", "icon": "DollarSign", "price": 2497, "description": "Financial data Plaid com Auth, Balance, Identity e Investments."},
    {"name": "Hermes WooCommerce Plus", "slug": "hermes-woocommerce-plus", "category": "industry", "icon": "ShoppingCart", "price": 1997, "description": "WooCommerce Plus com subscriptions, bookings e product add-ons."},
    {"name": "Hermes Canvas LMS Bridge", "slug": "hermes-canvas-lms-bridge", "category": "industry", "icon": "GraduationCap", "price": 1797, "description": "Bridge Canvas LMS com LTI 1.3, SIS import e outcomes."},
    {"name": "Hermes Azure IoT Hub Connector", "slug": "hermes-azure-iothub-connector", "category": "industry", "icon": "Building", "price": 2997, "description": "Connector Azure IoT Hub com device twins, direct methods e routing."},
    {"name": "Hermes Oracle NetSuite SuiteCloud", "slug": "hermes-netsuite-suitecloud", "category": "industry", "icon": "Package", "price": 4497, "description": "SuiteCloud NetSuite com SuiteScript, workflows e SuiteTalk."},
    {"name": "Hermes MessageBird Omnichannel", "slug": "hermes-messagebird-omnichannel", "category": "industry", "icon": "MessageSquare", "price": 2497, "description": "Omnichannel MessageBird com SMS, Voice, WhatsApp e Chat."},
    {"name": "Hermes ShipStation Fulfillment", "slug": "hermes-shipstation-fulfillment", "category": "industry", "icon": "Package", "price": 1797, "description": "Fulfillment ShipStation com multi-carrier, automation rules e branded tracking."},
    {"name": "Hermes Acuity Scheduling Pro", "slug": "hermes-acuity-scheduling-pro", "category": "industry", "icon": "Calendar", "price": 1297, "description": "Scheduling Acuity com group classes, appointments e payment collection."},
    {"name": "Hermes Xero Accounting Sync", "slug": "hermes-xero-accounting-sync", "category": "industry", "icon": "DollarSign", "price": 1697, "description": "Sync Xero com bank feeds, invoices, bills e reconciliation."},
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
with open('/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json', 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"\nAdded: {added}")
print(f"Skipped: {skipped}")
print(f"Total: {len(services)}")
