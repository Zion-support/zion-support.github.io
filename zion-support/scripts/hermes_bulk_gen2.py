#!/usr/bin/env python3
"""Generate NEW unique Hermes Agent services — zero overlap."""
import json
from datetime import datetime, timezone

with open('/data/data/com.termux/files/home/.hermes/hermes-agent/zion-support/app/data/servicesData.json') as f:
    data = json.load(f)

services = data['services']
max_id = max(s['id'] for s in services)
existing_slugs = {s['slug'] for s in services}
existing_names = {s['name'] for s in services}

# 100 NEW services — unique naming convention: "Hermes <Category> <Descriptor>"
new_services = [
    # === MESSAGING (15) ===
    {"name": "Hermes WhatsApp Multi-Channel Hub", "slug": "hermes-whatsapp-multichannel-hub", "category": "messaging", "icon": "MessageSquare", "price": 1897, "description": "Hub multicanal WhatsApp com roteamento inteligente e fallback automático."},
    {"name": "Hermes Telegram Mini App Store", "slug": "hermes-telegram-miniapp-store", "category": "messaging", "icon": "ShoppingBag", "price": 2497, "description": "Loja Telegram Mini Apps com pagamentos in-app e analytics avançado."},
    {"name": "Hermes Discord Community Manager", "slug": "hermes-discord-community-manager", "category": "messaging", "icon": "Users", "price": 1397, "description": "Gestão de comunidades Discord com gamificação e moderação IA."},
    {"name": "Hermes Slack Workflow Automator", "slug": "hermes-slack-workflow-automator", "category": "messaging", "icon": "Workflow", "price": 1597, "description": "Automação de workflows Slack com triggers avançados e ações compostas."},
    {"name": "Hermes Email Sequence Optimizer", "slug": "hermes-email-sequence-optimizer", "category": "messaging", "icon": "Mail", "price": 1197, "description": "Otimização de sequências email com A/B testing e ML-based send time."},
    {"name": "Hermes Teams Meeting Intelligence", "slug": "hermes-teams-meeting-intelligence", "category": "messaging", "icon": "Video", "price": 1797, "description": "Inteligência de reuniões Teams — transcrição, action items e resumo IA."},
    {"name": "Hermes Instagram Commerce Suite", "slug": "hermes-instagram-commerce-suite", "category": "messaging", "icon": "ShoppingCart", "price": 1697, "description": "Suite e-commerce Instagram com checkout nativo e gestão de pedidos."},
    {"name": "Hermes LinkedIn Talent Pipeline", "slug": "hermes-linkedin-talent-pipeline", "category": "messaging", "icon": "Briefcase", "price": 2197, "description": "Pipeline de talentos LinkedIn com sourcing automático e nurturing."},
    {"name": "Hermes Voice IVR Navigator", "slug": "hermes-voice-ivr-navigator", "category": "messaging", "icon": "Phone", "price": 2497, "description": "Navegador IVR com NLP, reconhecimento de intenção e transferência inteligente."},
    {"name": "Hermes SMS Campaign Manager", "slug": "hermes-sms-campaign-manager", "category": "messaging", "icon": "Smartphone", "price": 997, "description": "Gestor de campanhas SMS com compliance, scheduling e delivery tracking."},
    {"name": "Hermes WeChat Business Gateway", "slug": "hermes-wechat-business-gateway", "category": "messaging", "icon": "Globe", "price": 1897, "description": "Gateway WeChat Business para mercado China com Mini Programs e Pay."},
    {"name": "Hermes Signal Secure Messenger", "slug": "hermes-signal-secure-messenger", "category": "messaging", "icon": "Lock", "price": 2997, "description": "Mensageiro seguro Signal com criptografia E2E e bots corporativos."},
    {"name": "Hermes Chatbot Training Studio", "slug": "hermes-chatbot-training-studio", "category": "messaging", "icon": "Brain", "price": 1997, "description": "Studio de treinamento de chatbots com NLU, intents e entity extraction."},
    {"name": "Hermes Video Conferencing Ops", "slug": "hermes-video-conferencing-ops", "category": "messaging", "icon": "Video", "price": 1497, "description": "Operações de videoconferência com recording, transcription e highlights."},
    {"name": "Hermes Omnichannel Orchestrator", "slug": "hermes-omnichannel-orchestrator", "category": "messaging", "icon": "GitMerge", "price": 3497, "description": "Orquestrador omnichannel com roteamento contextual e journey unificada."},

    # === DEVOPS (15) ===
    {"name": "Hermes GitHub Actions Matrix Forge", "slug": "hermes-github-actions-matrix-forge", "category": "devops", "icon": "GitBranch", "price": 1997, "description": "Templates GitHub Actions com matrix builds, caching avançado e deploy progressivo."},
    {"name": "Hermes Docker Compose Master", "slug": "hermes-docker-compose-master", "category": "devops", "icon": "Container", "price": 1297, "description": "Master Docker Compose com multi-env, scaling policies e health orchestration."},
    {"name": "Hermes Kubernetes Fleet Manager", "slug": "hermes-k8s-fleet-manager", "category": "devops", "icon": "Package", "price": 2497, "description": "Gestor de fleet K8s com multi-cluster, GitOps e progressive delivery."},
    {"name": "Hermes Terraform Cloud Automator", "slug": "hermes-terraform-cloud-automator", "category": "devops", "icon": "Code", "price": 1897, "description": "Automação Terraform Cloud com workspace management e policy as code."},
    {"name": "Hermes Grafana Dashboard Factory", "slug": "hermes-grafana-dashboard-factory", "category": "devops", "icon": "BarChart", "price": 1397, "description": "Fábrica de dashboards Grafana com templates, variáveis e alertas."},
    {"name": "Hermes Loki Log Aggregator", "slug": "hermes-loki-log-aggregator", "category": "devops", "icon": "FileText", "price": 1197, "description": "Agregador Loki com LogQL, log patterns e correlação de eventos."},
    {"name": "Hermes Argo Rollouts Engine", "slug": "hermes-argorollouts-engine", "category": "devops", "icon": "GitMerge", "price": 1697, "description": "Engine Argo Rollouts com canary, blue-green e analysis templates."},
    {"name": "Hermes Serverless Framework Pro", "slug": "hermes-serverless-framework-pro", "category": "devops", "icon": "Zap", "price": 1497, "description": "Serverless Framework Pro com multi-cloud, stages e domain management."},
    {"name": "Hermes Database Migration Kit", "slug": "hermes-database-migration-kit", "category": "devops", "icon": "Database", "price": 1297, "description": "Kit de migração de banco com Flyway, Liquibase e rollback automático."},
    {"name": "Hermes Vault Secrets Rotator", "slug": "hermes-vault-secrets-rotator", "category": "devops", "icon": "Key", "price": 1897, "description": "Rotator de secrets Vault com dynamic credentials e lease management."},
    {"name": "Hermes Ansible Playbook Library", "slug": "hermes-ansible-playbook-library", "category": "devops", "icon": "Book", "price": 1097, "description": "Biblioteca Ansible com roles, collections e molecule testing."},
    {"name": "Hermes Jenkins Pipeline Builder", "slug": "hermes-jenkins-pipeline-builder", "category": "devops", "icon": "HardHat", "price": 1397, "description": "Builder Jenkins pipelines com shared libraries e declarative syntax."},
    {"name": "Hermes Consul Service Mesh", "slug": "hermes-consul-service-mesh", "category": "devops", "icon": "Network", "price": 2197, "description": "Service mesh Consul com intentions, terminating gateways e metrics."},
    {"name": "Hermes Nginx Config Optimizer", "slug": "hermes-nginx-config-optimizer", "category": "devops", "icon": "Globe", "price": 997, "description": "Otimizador Nginx com rate limiting, caching e SSL automation."},
    {"name": "Hermes Monitoring Stack Deployer", "slug": "hermes-monitoring-stack-deployer", "category": "devops", "icon": "Activity", "price": 1697, "description": "Deployer de stack monitoring com Prometheus, Grafana e Alertmanager."},

    # === SECURITY (15) ===
    {"name": "Hermes SAST Code Scanner", "slug": "hermes-sast-code-scanner", "category": "security", "icon": "Code", "price": 2197, "description": "Scanner SAST com Semgrep, CodeQL e dependency vulnerability detection."},
    {"name": "Hermes DAST Web Tester", "slug": "hermes-dast-web-tester", "category": "security", "icon": "Globe", "price": 1997, "description": "DAST com OWASP ZAP, Burp e autenticação automática em apps web."},
    {"name": "Hermes WAF Rule Manager", "slug": "hermes-waf-rule-manager", "category": "security", "icon": "Shield", "price": 1597, "description": "Gestor de regras WAF com ModSecurity, OWRS e virtual patching."},
    {"name": "Hermes Identity Threat Detection", "slug": "hermes-identity-threat-detection", "category": "security", "icon": "UserX", "price": 2997, "description": "Detecção de ameaças identity com UEBA e adaptive authentication."},
    {"name": "Hermes Certificate Lifecycle Ops", "slug": "hermes-certificate-lifecycle-ops", "category": "security", "icon": "Award", "price": 1497, "description": "Lifecycle de certificados com ACME, auto-renewal e compliance tracking."},
    {"name": "Hermes Network Policy Enforcer", "slug": "hermes-network-policy-enforcer", "category": "security", "icon": "Network", "price": 1797, "description": "Enforcer de políticas de rede com Cilium, Calico e micro-segmentação."},
    {"name": "Hermes API Security Gateway", "slug": "hermes-api-security-gateway", "category": "security", "icon": "ShieldCheck", "price": 2497, "description": "Gateway de segurança API com OAuth, rate limiting e schema validation."},
    {"name": "Hermes Ransomware Defense", "slug": "hermes-ransomware-defense", "category": "security", "icon": "ShieldAlert", "price": 3497, "description": "Defesa ransomware com deception, immutable backups e incident response."},
    {"name": "Hermes Supply Chain SBOM", "slug": "hermes-supply-chain-sbom", "category": "security", "icon": "Package", "price": 1997, "description": "SBOM generation e vulnerability correlation para supply chain security."},
    {"name": "Hermes Cloud Security Posture", "slug": "hermes-cloud-security-posture", "category": "security", "icon": "Cloud", "price": 2197, "description": "CSPM com multi-cloud compliance, drift detection e auto-remediation."},
    {"name": "Hermes Secrets Detection Engine", "slug": "hermes-secrets-detection-engine", "category": "security", "icon": "Key", "price": 1697, "description": "Engine de detecção de secrets com GitLeaks, TruffleHog e pre-commit hooks."},
    {"name": "Hermes Zero Day Patch Manager", "slug": "hermes-zero-day-patch-manager", "category": "security", "icon": "Wrench", "price": 2497, "description": "Gestor de patches zero-day com virtual patching e emergency rollout."},
    {"name": "Hermes Compliance Evidence Collector", "slug": "hermes-compliance-evidence-collector", "category": "security", "icon": "ClipboardCheck", "price": 1897, "description": "Coletor de evidências compliance com continuous monitoring e reporting."},
    {"name": "Hermes Red Team Automation", "slug": "hermes-red-team-automation", "category": "security", "icon": "Target", "price": 3997, "description": "Automação red team com Caldera, Atomic e adversary emulation."},
    {"name": "Hermes Threat Intel Aggregator", "slug": "hermes-threat-intel-aggregator", "category": "security", "icon": "Radio", "price": 2997, "description": "Agregador de threat intel com STIX/TAXII, IOCs e confidence scoring."},

    # === DATA (15) ===
    {"name": "Hermes Airflow DAG Factory", "slug": "hermes-airflow-dag-factory", "category": "data", "icon": "GitBranch", "price": 1797, "description": "Fábrica de DAGs Airflow com templates, sensors e XCom otimizado."},
    {"name": "Hermes Kafka Connect Hub", "slug": "hermes-kafka-connect-hub", "category": "data", "icon": "Activity", "price": 1997, "description": "Hub Kafka Connect com CDC, schema registry e exactly-once semantics."},
    {"name": "Hermes Snowflake Query Optimizer", "slug": "hermes-snowflake-query-optimizer", "category": "data", "icon": "CloudSnow", "price": 2197, "description": "Otimizador Snowflake com clustering, search optimization e warehouse scaling."},
    {"name": "Hermes Feast ML Feature Pipeline", "slug": "hermes-feast-ml-feature-pipeline", "category": "data", "icon": "Cpu", "price": 2497, "description": "Pipeline Feast com feature engineering, registry e serving layer."},
    {"name": "Hermes Great Expectations Suite Pro", "slug": "hermes-ge-suite-pro", "category": "data", "icon": "CheckCircle", "price": 1597, "description": "Suite Great Expectations Pro com checkpoints, docs e profiler."},
    {"name": "Hermes DBT Model Generator", "slug": "hermes-dbt-model-generator", "category": "data", "icon": "ArrowRight", "price": 1397, "description": "Gerador DBT models com snapshots, exposures e incremental strategies."},
    {"name": "Hermes DataHub Metadata Sync", "slug": "hermes-datahub-metadata-sync", "category": "data", "icon": "BookOpen", "price": 1897, "description": "Sync DataHub com ingestação automática, glossary e ownership."},
    {"name": "Hermes Prophet AutoML Forecast", "slug": "hermes-prophet-automl-forecast", "category": "data", "icon": "TrendingUp", "price": 1997, "description": "AutoML Prophet com hyperparameter tuning e ensemble forecasting."},
    {"name": "Hermes Segment CDP Implementation", "slug": "hermes-segment-cdp-implementation", "category": "data", "icon": "Users", "price": 2997, "description": "Implementação Segment com sources, destinations e personas unificadas."},
    {"name": "Hermes Delta Lake Time Travel", "slug": "hermes-delta-lake-time-travel", "category": "data", "icon": "Layers", "price": 2197, "description": "Delta Lake com time travel, change data feed e liquid clustering."},
    {"name": "Hermes Spark Job Tuner", "slug": "hermes-spark-job-tuner", "category": "data", "icon": "Zap", "price": 2497, "description": "Tuner Spark com adaptive query execution, salting e partition pruning."},
    {"name": "Hermes DBT Test Framework", "slug": "hermes-dbt-test-framework", "category": "data", "icon": "CheckSquare", "price": 1297, "description": "Framework DBT tests com generic, singular e custom test macros."},
    {"name": "Hermes Databricks Workflow Manager", "slug": "hermes-databricks-workflow-manager", "category": "data", "icon": "Cloud", "price": 2997, "description": "Gestor Databricks workflows com Unity Catalog e MLflow integration."},
    {"name": "Hermes ClickHouse Analytics", "slug": "hermes-clickhouse-analytics", "category": "data", "icon": "BarChart", "price": 1997, "description": "Analytics ClickHouse com materialized views, sharding e replicated tables."},
    {"name": "Hermes Flink Stream Processor", "slug": "hermes-flink-stream-processor", "category": "data", "icon": "Activity", "price": 2797, "description": "Stream processor Flink com event time, windows e exactly-once processing."},

    # === CRM (10) ===
    {"name": "Hermes HubSpot Operations Hub", "slug": "hermes-hubspot-operations-hub", "category": "crm", "icon": "RefreshCw", "price": 1697, "description": "Operations Hub HubSpot com sync programável, timeline e webhooks."},
    {"name": "Hermes Zendesk AI Triage", "slug": "hermes-zendesk-ai-triage", "category": "crm", "icon": "Headphones", "price": 1497, "description": "Triagem IA Zendesk com classificação, prioridade e auto-resposta."},
    {"name": "Hermes Pipedrive Revenue Forecast", "slug": "hermes-pipedrive-revenue-forecast", "category": "crm", "icon": "TrendingUp", "price": 1297, "description": "Forecasting Pipedrive com pipeline analysis e win probability."},
    {"name": "Hermes Salesforce Data Cloud", "slug": "hermes-salesforce-data-cloud", "category": "crm", "icon": "Cloud", "price": 3497, "description": "Data Cloud Salesforce com identity resolution e activation segments."},
    {"name": "Hermes Apollo Enrichment Engine", "slug": "hermes-apollo-enrichment-engine", "category": "crm", "icon": "Database", "price": 1197, "description": "Engine de enriquecimento Apollo com buyer intent e technographics."},
    {"name": "Hermes ActiveCampaign Automation", "slug": "hermes-activecampaign-automation", "category": "crm", "icon": "Map", "price": 1397, "description": "Automação ActiveCampaign com conditional splits e site tracking."},
    {"name": "Hermes PandaDoc Document Flow", "slug": "hermes-pandadoc-document-flow", "category": "crm", "icon": "FileSignature", "price": 1197, "description": "Flow PandaDoc com templates, approval workflow e e-signature."},
    {"name": "Hermes Typeform Survey Engine", "slug": "hermes-typeform-survey-engine", "category": "crm", "icon": "Star", "price": 997, "description": "Engine Typeform com logic jumps, scoring e integração CRM."},
    {"name": "Hermes ChurnZero Health Score", "slug": "hermes-churnzero-health-score", "category": "crm", "icon": "AlertCircle", "price": 1997, "description": "Health score ChurnZero com playbooks e customer success automation."},
    {"name": "Hermes Proposify Quote Builder", "slug": "hermes-proposify-quote-builder", "category": "crm", "icon": "FileText", "price": 1497, "description": "Quote builder Proposify com pricing tables, signing e tracking."},

    # === AI (10) ===
    {"name": "Hermes LLM Evaluation Framework", "slug": "hermes-llm-eval-framework", "category": "ai", "icon": "BarChart", "price": 2497, "description": "Framework de avaliação LLM com benchmarks customizados e leaderboards."},
    {"name": "Hermes Axolotl MultiGPU Trainer", "slug": "hermes-axolotl-multigpu-trainer", "category": "ai", "icon": "Brain", "price": 3497, "description": "Treinador multi-GPU Axolotl com FSDP, DeepSpeed e gradient checkpointing."},
    {"name": "Hermes ComfyUI API Gateway", "slug": "hermes-comfyui-api-gateway", "category": "ai", "icon": "Palette", "price": 1697, "description": "Gateway ComfyUI com filas, GPU scaling e workflow versioning."},
    {"name": "Hermes YOLO Inference Optimizer", "slug": "hermes-yolo-inference-optimizer", "category": "ai", "icon": "Eye", "price": 1997, "description": "Otimizador YOLO com TensorRT, ONNX e batch inference."},
    {"name": "Hermes LangSmith Debug Suite", "slug": "hermes-langsmith-debug-suite", "category": "ai", "icon": "Search", "price": 1897, "description": "Suite LangSmith com tracing, annotation queues e prompt versioning."},
    {"name": "Hermes Recommendation A/B Framework", "slug": "hermes-recsys-ab-framework", "category": "ai", "icon": "ThumbsUp", "price": 2497, "description": "Framework A/B recomendação com bandits, offline eval e metrics."},
    {"name": "Hermes Multi-Agent Task Planner", "slug": "hermes-multi-agent-task-planner", "category": "ai", "icon": "Bot", "price": 2997, "description": "Planner multi-agent com CrewAI, delegation e tool orchestration."},
    {"name": "Hermes Whisper Turbo Transcription", "slug": "hermes-whisper-turbo-transcription", "category": "ai", "icon": "Mic", "price": 1497, "description": "Transcrição Whisper Turbo com faster-whisper e VAD otimizado."},
    {"name": "Hermes MLflow Experiment Tracker", "slug": "hermes-mlflow-experiment-tracker", "category": "ai", "icon": "GitBranch", "price": 1697, "description": "Tracker MLflow com model registry, artifacts e deployment tracking."},
    {"name": "Hermes AutoML Pipeline Builder", "slug": "hermes-automl-pipeline-builder", "category": "ai", "icon": "Cpu", "price": 2997, "description": "Builder AutoML com TPOT, Auto-sklearn e hyperparameter optimization."},

    # === COMPLIANCE (10) ===
    {"name": "Hermes LGPD Data Mapping Tool", "slug": "hermes-lgpd-data-mapping-tool", "category": "compliance", "icon": "Map", "price": 2197, "description": "Ferramenta LGPD data mapping com RoPA, data flows e retention schedules."},
    {"name": "Hermes ISO 27001 Risk Matrix", "slug": "hermes-iso27001-risk-matrix", "category": "compliance", "icon": "CheckSquare", "price": 2497, "description": "Matriz risco ISO 27001 com asset register, threat modeling e treatment plans."},
    {"name": "Hermes HIPAA Minimum Necessary", "slug": "hermes-hipaa-minimum-necessary", "category": "compliance", "icon": "Heart", "price": 2797, "description": "HIPAA minimum necessary com access controls, audit logs e BAAs."},
    {"name": "Hermes PCI Tokenization Service", "slug": "hermes-pci-tokenization-service", "category": "compliance", "icon": "CreditCard", "price": 1997, "description": "Serviço PCI tokenization com vault, detokenization e format-preserving."},
    {"name": "Hermes GDPR Consent Manager", "slug": "hermes-gdpr-consent-manager", "category": "compliance", "icon": "Shield", "price": 1897, "description": "Gestor GDPR consent com CMP, TCF e consent receipts."},
    {"name": "Hermes SOC 2 Continuous Monitor", "slug": "hermes-soc2-continuous-monitor", "category": "compliance", "icon": "Activity", "price": 3497, "description": "Monitor contínuo SOC 2 com Trust Services Criteria e exception tracking."},
    {"name": "Hermes CCPA Opt-Out Engine", "slug": "hermes-ccpa-optout-engine", "category": "compliance", "icon": "UserX", "price": 1697, "description": "Engine CCPA opt-out com GPC, deletion requests e verifiable consumer requests."},
    {"name": "Hermes Data Retention Automator", "slug": "hermes-data-retention-automator", "category": "compliance", "icon": "Clock", "price": 1497, "description": "Automator retention com legal hold, archival tiers e destruction certificates."},
    {"name": "Hermes Privacy Impact Assessment", "slug": "hermes-privacy-impact-assessment", "category": "compliance", "icon": "ClipboardCheck", "price": 1997, "description": "PIA/DPIA com risk scoring, mitigation workflows e regulatory templates."},
    {"name": "Hermes Records Management System", "slug": "hermes-records-management-system", "category": "compliance", "icon": "Archive", "price": 1797, "description": "Sistema gestão de registros com retention schedules, holds e disposition."},

    # === INDUSTRY (10) ===
    {"name": "Hermes HL7 FHIR API Gateway", "slug": "hermes-hl7-fhir-gateway", "category": "industry", "icon": "Heart", "price": 3997, "description": "Gateway FHIR com SMART on CDS Hooks, bulk data export e subscription."},
    {"name": "Hermes Open Banking Brazil", "slug": "hermes-open-banking-brazil", "category": "industry", "icon": "DollarSign", "price": 2997, "description": "Open Banking Brasil com DPIX, iniciação pagamento e dados cadastrais."},
    {"name": "Hermes Shopify Plus Connector", "slug": "hermes-shopify-plus-connector", "category": "industry", "icon": "ShoppingCart", "price": 2497, "description": "Conector Shopify Plus com bulk operations, scripts e checkout ext."},
    {"name": "Hermes Moodle LMS Integrator", "slug": "hermes-moodle-lms-integrator", "category": "industry", "icon": "GraduationCap", "price": 1997, "description": "Integrador Moodle com SSO, competências, badges e learning plans."},
    {"name": "Hermes AWS IoT Core Bridge", "slug": "hermes-aws-iot-core-bridge", "category": "industry", "icon": "Building", "price": 3497, "description": "Bridge AWS IoT Core com device shadows, rules engine e Greengrass."},
    {"name": "Hermes SAP B1 Integration Hub", "slug": "hermes-sap-b1-integration-hub", "category": "industry", "icon": "Package", "price": 4997, "description": "Hub SAP Business One com DI API, Service Layer e HANA queries."},
    {"name": "Hermes Twilio Super Network", "slug": "hermes-twilio-super-network", "category": "industry", "icon": "Phone", "price": 2997, "description": "Twilio Super Network com Elastic SIP, tracing e number porting."},
    {"name": "Hermes Printful Fulfillment API", "slug": "hermes-printful-fulfillment-api", "category": "industry", "icon": "Package", "price": 1997, "description": "API Printful fulfillment com mockups, warehousing e branded packaging."},
    {"name": "Hermes Calendly Scheduling Engine", "slug": "hermes-calendly-scheduling-engine", "category": "industry", "icon": "Calendar", "price": 1497, "description": "Engine Calendly scheduling com round-robin, collective e routing forms."},
    {"name": "Hermes QuickBooks Sync Pro", "slug": "hermes-quickbooks-sync-pro", "category": "industry", "icon": "DollarSign", "price": 1997, "description": "Sync QuickBooks Pro com chart of accounts, invoices e reconciliation."},
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
