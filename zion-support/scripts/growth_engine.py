#!/usr/bin/env python3
"""Generate 80 NEW unique Hermes Agent services avoiding all existing ones."""
import json
from datetime import datetime, timezone

DATA_PATH = 'app/data/servicesData.json'

with open(DATA_PATH) as f:
    data = json.load(f)

services = data['services']
max_id = max(s['id'] for s in services)
existing_slugs = {s['slug'] for s in services}
existing_names = {s['name'] for s in services}

NEW_SERVICES = [
    # HEALTHCARE
    {"name": "Hermes HIPAA Data Masking", "slug": "hermes-hipaa-data-masking", "category": "healthcare", "icon": "Shield", "price": 2297, "description": "Mascaramento automático de PHI em ambientes dev/staging."},
    {"name": "Hermes Telemedicine Scheduler", "slug": "hermes-telemedicine-scheduler", "category": "healthcare", "icon": "Calendar", "price": 1597, "description": "Agendamento integrado para telemedicina com lembretes e filas."},
    {"name": "Hermes e-Prescription Gateway", "slug": "hermes-eprescription-gateway", "category": "healthcare", "icon": "FileText", "price": 2897, "description": "Gateway de receituário digital com assinatura e validação."},
    {"name": "Hermes Medical Coding AI", "slug": "hermes-medical-coding-ai", "category": "healthcare", "icon": "Brain", "price": 1997, "description": "Codificação automática AI de CID-10, TUSS e CBHPM."},
    {"name": "Hermes Lab Integration", "slug": "hermes-lab-integration", "category": "healthcare", "icon": "Activity", "price": 1797, "description": "Integração com laboratórios — recebimento de laudos via HL7/FHIR."},
    {"name": "Hermes Insurance Claims", "slug": "hermes-insurance-claims", "category": "healthcare", "icon": "CreditCard", "price": 1697, "description": "Automação de guias TISS com validação e envio automático."},
    {"name": "Hermes Patient Outreach", "slug": "hermes-patient-outreach", "category": "healthcare", "icon": "Users", "price": 1397, "description": "Campanhas de outreach para pacientes com follow-up inteligente."},
    {"name": "Hermes Clinical Trial Tracker", "slug": "hermes-clinical-trial-tracker", "category": "healthcare", "icon": "ClipboardList", "price": 2497, "description": "Tracking de ensaios clínicos com milestones e compliance."},
    {"name": "Hermes Pharmacovigilance", "slug": "hermes-pharmacovigilance", "category": "healthcare", "icon": "AlertTriangle", "price": 2197, "description": "Farmacovigilância com detecção de eventos adversos e relatórios."},
    {"name": "Hermes Wearable Data Hub", "slug": "hermes-wearable-data-hub", "category": "healthcare", "icon": "Watch", "price": 1897, "description": "Integração com wearables — Apple Health, Fitbit, Garmin data hub."},

    # REAL ESTATE / PROPTECH
    {"name": "Hermes ZAP Imoveis Sync", "slug": "hermes-zap-imoveis-sync", "category": "realestate", "icon": "Home", "price": 1897, "description": "Sync ZAP/Imóveis com MLS, portais e CRM imobiliário."},
    {"name": "Hermes iugu Billing", "slug": "hermes-iugu-billing", "category": "realestate", "icon": "DollarSign", "price": 1297, "description": "Cobrança recorrente iugu para aluguéis e condomínios."},
    {"name": "Hermes Virtual Tour Engine", "slug": "hermes-virtual-tour-engine", "category": "realestate", "icon": "Camera", "price": 2497, "description": "Engine de tours virtuais com Matterport e renders 3D."},
    {"name": "Hermes Proprietor Portal", "slug": "hermes-proprietor-portal", "category": "realestate", "icon": "UserCheck", "price": 1597, "description": "Portal do proprietário com extratos, documentos e boletos."},
    {"name": "Hermes Lease Automation", "slug": "hermes-lease-automation", "category": "realestate", "icon": "FileSignature", "price": 1797, "description": "Automação de contratos de locação com assinatura digital."},
    {"name": "Hermes Property Valuation", "slug": "hermes-property-valuation", "category": "realestate", "icon": "BarChart", "price": 1997, "description": "Avaliação imobiliária automatizada com comparativos de mercado."},
    {"name": "Hermes Syndication Platform", "slug": "hermes-syndication-platform", "category": "realestate", "icon": "TrendingUp", "price": 2997, "description": "Plataforma de syndication para crowdfunding imobiliário."},
    {"name": "Hermes Facility Management", "slug": "hermes-facility-management", "category": "realestate", "icon": "Building", "price": 1697, "description": "Gestão de facilities com manutenção preventiva e tickets."},
    {"name": "Hermes Lead Qualification RE", "slug": "hermes-lead-qualification-re", "category": "realestate", "icon": "Target", "price": 1197, "description": "Qualificação de leads imobiliários com scoring e nurturing."},
    {"name": "Hermes Neighborhood Analytics", "slug": "hermes-neighborhood-analytics", "category": "realestate", "icon": "Map", "price": 1497, "description": "Análise de bairro com demografia, infraestrutura e preço/m²."},

    # LEGAL / LEGALTECH
    {"name": "Hermes Contract Analyzer", "slug": "hermes-contract-analyzer", "category": "legal", "icon": "FileText", "price": 2297, "description": "Análise de contratos com IA — cláusulas, riscos e sugestões."},
    {"name": "Hermes Process Monitor", "slug": "hermes-process-monitor", "category": "legal", "icon": "Gavel", "price": 1897, "description": "Monitoramento de processos judiciais com andamentos automáticos."},
    {"name": "Hermes Legal CRM", "slug": "hermes-legal-crm", "category": "legal", "icon": "Users", "price": 1597, "description": "CRM jurídico com prazos, publicações e intimações."},
    {"name": "Hermes E-Doc Signer", "slug": "hermes-edoc-signer", "category": "legal", "icon": "PenTool", "price": 1297, "description": "Assinatura eletrônica de documentos com validade jurídica."},
    {"name": "Hermes ODR Platform", "slug": "hermes-odr-platform", "category": "legal", "icon": "Scale", "price": 1997, "description": "Plataforma ODR — resolução online de disputas com mediação."},
    {"name": "Hermes Compliance Checker", "slug": "hermes-compliance-checker", "category": "legal", "icon": "CheckSquare", "price": 1797, "description": "Verificador de compliance com legislação atualizada."},
    {"name": "Hermes IP Portfolio", "slug": "hermes-ip-portfolio", "category": "legal", "icon": "Shield", "price": 2497, "description": "Gestão de portfolio de PI com renovamentos e monitoramento."},
    {"name": "Hermes Discovery Engine", "slug": "hermes-discovery-engine", "category": "legal", "icon": "Search", "price": 2197, "description": "E-discovery com coleta, processamento e review de documentos."},
    {"name": "Hermes Notary Bot", "slug": "hermes-notary-bot", "category": "legal", "icon": "FileCheck", "price": 1397, "description": "Bot para reconhecimento de firma e autenticações digitais."},
    {"name": "Hermes Precedent Search", "slug": "hermes-precedent-search", "category": "legal", "icon": "BookOpen", "price": 1697, "description": "Busca de jurisprudência e precedentes com IA."},

    # EDUCATION / EDTECH
    {"name": "Hermes Adaptive Learning", "slug": "hermes-adaptive-learning", "category": "education", "icon": "Brain", "price": 2497, "description": "Plataforma de aprendizado adaptativo com IA e spaced repetition."},
    {"name": "Hermes Cert Validator", "slug": "hermes-cert-validator", "category": "education", "icon": "Award", "price": 1197, "description": "Validação de certificados com blockchain e verificação QR."},
    {"name": "Hermes Exam Proctor", "slug": "hermes-exam-proctor", "category": "education", "icon": "Eye", "price": 1897, "description": "Proctoring de provas online com detecção de fraude por IA."},
    {"name": "Hermes Content Authoring", "slug": "hermes-content-authoring", "category": "education", "icon": "PenTool", "price": 1597, "description": "Autoria de conteúdo SCORM/xAPI com templates e assets."},
    {"name": "Hermes Student Success", "slug": "hermes-student-success", "category": "education", "icon": "TrendingUp", "price": 1997, "description": "Plataforma de student success com alertas e intervenções."},
    {"name": "Hermes Cohort Analytics", "slug": "hermes-cohort-analytics", "category": "education", "icon": "BarChart", "price": 1697, "description": "Analytics de cohort com retention, completion e NPS."},
    {"name": "Hermes Peer Review", "slug": "hermes-peer-review", "category": "education", "icon": "Users", "price": 1297, "description": "Sistema de peer review com rubricas e feedback estruturado."},
    {"name": "Hermes MOOC Platform", "slug": "hermes-mooc-platform", "category": "education", "icon": "Globe", "price": 2997, "description": "Plataforma MOOC com vídeos, quizzes e community."},
    {"name": "Hermes Skill Gap Analyzer", "slug": "hermes-skill-gap-analyzer", "category": "education", "icon": "Target", "price": 1797, "description": "Análise de skill gaps com plano de desenvolvimento individual."},
    {"name": "Hermes Internship Hub", "slug": "hermes-internship-hub", "category": "education", "icon": "Briefcase", "price": 1497, "description": "Hub de estágios com vagas, candidaturas e avaliação."},

    # LOGISTICS / SUPPLY CHAIN
    {"name": "Hermes Last Mile Tracker", "slug": "hermes-last-mile-tracker", "category": "logistics", "icon": "MapPin", "price": 1897, "description": "Rastreamento last mile com ETAs, fotos e proof of delivery."},
    {"name": "Hermas Route Optimizer", "slug": "hermes-route-optimizer", "category": "logistics", "icon": "Navigation", "price": 1997, "description": "Otimizador de rotas com múltiplas paradas e restrições."},
    {"name": "Hermes Fleet Management", "slug": "hermes-fleet-management", "category": "logistics", "icon": "Truck", "price": 2297, "description": "Gestão de frota com telemetria, manutenção e custos."},
    {"name": "Hermes Warehouse WMS", "slug": "hermes-warehouse-wms", "category": "logistics", "icon": "Package", "price": 2797, "description": "WMS com picking, packing, inventário e integração e-commerce."},
    {"name": "Hermes Freight Marketplace", "slug": "hermes-freight-marketplace", "category": "logistics", "icon": "Globe", "price": 2497, "description": "Marketplace de fretes com cotação e booking automático."},
    {"name": "Hermes Cold Chain Monitor", "slug": "hermes-cold-chain-monitor", "category": "logistics", "icon": "Thermometer", "price": 1697, "description": "Monitoramento de cadeia de frio com alertas de temperatura."},
    {"name": "Hermes Returns Portal", "slug": "hermes-returns-portal", "category": "logistics", "icon": "RefreshCw", "price": 1397, "description": "Portal de devoluções com autorização, coleta e estorno."},
    {"name": "Hermes Cross Dock", "slug": "hermes-cross-dock", "category": "logistics", "icon": "GitMerge", "price": 1597, "description": "Cross-docking com consolidação e expedição automática."},
    {"name": "Hermes Supplier Portal", "slug": "hermes-supplier-portal", "category": "logistics", "icon": "Users", "price": 1797, "description": "Portal do fornecedor com pedidos, notas e compliance."},
    {"name": "Hermes Demand Forecast", "slug": "hermes-demand-forecast", "category": "logistics", "icon": "TrendingUp", "price": 2197, "description": "Forecasting de demanda com machine learning e promoções."},

    # SUSTAINABILITY / ESG
    {"name": "Hermes Carbon Tracker", "slug": "hermes-carbon-tracker", "category": "sustainability", "icon": "Leaf", "price": 1997, "description": "Rastreamento de emissões de carbono com inventário GHG."},
    {"name": "Hermes ESG Reporter", "slug": "hermes-esg-reporter", "category": "sustainability", "icon": "BarChart", "price": 2297, "description": "Relatórios ESG com frameworks GRI, SASB, TCFD."},
    {"name": "Hermes Waste Optimizer", "slug": "hermes-waste-optimizer", "category": "sustainability", "icon": "RefreshCw", "price": 1697, "description": "Otimização de resíduos com rastreabilidade e destinação."},
    {"name": "Hermes Green Procurement", "slug": "hermes-green-procurement", "category": "sustainability", "icon": "ShoppingCart", "price": 1497, "description": "Compras sustentáveis com score ambiental de fornecedores."},
    {"name": "Hermes Energy Monitor", "slug": "hermes-energy-monitor", "category": "sustainability", "icon": "Zap", "price": 1797, "description": "Monitoramento de energia com eficiência e renewáveis."},
    {"name": "Hermes Circular Economy", "slug": "hermes-circular-economy", "category": "sustainability", "icon": "RefreshCw", "price": 1897, "description": "Economia circular com logística reversa e reciclagem."},
    {"name": "Hermes Biodiversity Index", "slug": "hermes-biodiversity-index", "category": "sustainability", "icon": "Eye", "price": 1597, "description": "Índice de biodiversidade com monitoramento e relatórios."},
    {"name": "Hermes Water Stewardship", "slug": "hermes-water-stewardship", "category": "sustainability", "icon": "Activity", "price": 1397, "description": "Gestão hídrica com consumo, reuso e eficiência."},
    {"name": "Hermes Social Impact", "slug": "hermes-social-impact", "category": "sustainability", "icon": "Heart", "price": 1697, "description": "Medição de impacto social com indicadores e storytelling."},
    {"name": "Hermes Climate Risk", "slug": "hermes-climate-risk", "category": "sustainability", "icon": "AlertTriangle", "price": 2197, "description": "Análise de risco climático com cenários e mitigação."},

    # FINTECH ADVANCED
    {"name": "Hermes Pix Instant", "slug": "hermes-pix-instant", "category": "fintech", "icon": "Zap", "price": 1497, "description": "PIX instantâneo com conciliação e cashback automático."},
    {"name": "Hermes Open Finance Hub", "slug": "hermes-open-finance-hub", "category": "fintech", "icon": "Cloud", "price": 2797, "description": "Hub Open Finance com consent, dados e iniciação de pagamento."},
    {"name": "Hermes Fraud Detection", "slug": "hermes-fraud-detection", "category": "fintech", "icon": "ShieldAlert", "price": 2297, "description": "Detecção de fraude com ML em tempo real e scoring."},
    {"name": "Hermes Credit Bureau", "slug": "hermes-credit-bureau", "category": "fintech", "icon": "BarChart", "price": 1997, "description": "Integração credit bureau com scoring e decision engine."},
    {"name": "Hermes Crypto Custody", "slug": "hermes-crypto-custody", "category": "fintech", "icon": "Lock", "price": 2997, "description": "Custódia criptográfica institucional com multi-sig e HSM."},
    {"name": "Hermes BNPL Engine", "slug": "hermes-bnpl-engine", "category": "fintech", "icon": "CreditCard", "price": 1797, "description": "Engine BNPL com checkout, parcelamento e cobrança."},
    {"name": "Hermes RegTech KYC", "slug": "hermes-regtech-kyc", "category": "fintech", "icon": "UserCheck", "price": 1697, "description": "KYC/AML com document verification, screening e due diligence."},
    {"name": "Hermes Embedded Finance", "slug": "hermes-embedded-finance", "category": "fintech", "icon": "Code", "price": 2497, "description": "Embedded finance com APIs banking-as-a-service."},
    {"name": "Hermes Neobank Core", "slug": "hermes-neobank-core", "category": "fintech", "icon": "DollarSign", "price": 3497, "description": "Core bancário de neobank com ledger, contas e cartões."},
    {"name": "Hermes Chargeback Defender", "slug": "hermes-chargeback-defender", "category": "fintech", "icon": "Shield", "price": 1897, "description": "Defesa de chargebacks com automação e representment."},
]

now = datetime.now(timezone.utc).isoformat()
added = 0
skipped = 0

for svc in NEW_SERVICES:
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

data['services'] = services

with open(DATA_PATH, 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Added: {added}")
print(f"Skipped: {skipped}")
print(f"Total: {len(services)}")
print(f"New max ID: {max_id}")
