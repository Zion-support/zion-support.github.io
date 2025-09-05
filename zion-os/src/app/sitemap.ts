
<<<<<<< HEAD
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https: //ziontechgroup.com'
  
  const routes = [
    '',
    '/about/services/ai-services/quantum-services/cybersecurity/enterprise-it/research-development/space-tech',
    '/case-studies/news/events/webinars/white-papers/docs/contact/privacy',
    '/terms/cookies/accessibility/multiverse/launch/admin/instances/admin/os-deploy']

  const aiServices = [
    '/ai-autonomous-business-manager/ai-autonomous-business-operations/ai-autonomous-business-platform/ai-autonomous-business-process-automation/ai-autonomous-code-review/ai-autonomous-creative-director/ai-autonomous-data/ai-autonomous-decision-engine',
    '/ai-autonomous-decision-platform/ai-autonomous-devops/ai-autonomous-ecosystem-manager/ai-autonomous-ecosystem/ai-autonomous-education-professor/ai-autonomous-healthcare-physician/ai-autonomous-learning-system/ai-autonomous-legal-counsel',
    '/ai-autonomous-logistics/ai-autonomous-manufacturing/ai-autonomous-research-assistant/ai-autonomous-research/ai-autonomous-robotics/ai-autonomous-scientific-researcher/ai-autonomous-security/ai-autonomous-systems-platform',
    '/ai-autonomous-testing/ai-autonomous-vehicle-platform/ai-autonomous-vehicle/ai-autonomous-vehicles-platform/ai-autonomous-vehicles/ai-autonomous-venture-capitalist/ai-biomedical-research/ai-biotech-drug-discovery',
    '/ai-blockchain-analytics/ai-blockchain-governance/ai-brain-computer-interface/ai-brain-interface/ai-brand-personality-generator/ai-business-intelligence-elite-2026/ai-business-intelligence-pro/ai-business-intelligence-suite-2029',
    '/ai-business-intelligence-suite/ai-business-intelligence/ai-climate-prediction-engine/ai-climate-prediction-platform/ai-climate-prediction/ai-code-generation-enterprise/ai-code-review-copilot/ai-code-review',
    '/ai-compliance-automation/ai-computer-vision-platform/ai-consciousness-evolution-2025/ai-consciousness-evolution-2029/ai-consciousness-evolution-platform/ai-consciousness-evolution/ai-consciousness-simulation-platform/ai-consciousness-simulation',
    '/ai-consciousness-simulator/ai-content-creation-revolution/ai-content-creation/ai-content-factory/ai-content-generation-automation-2033/ai-content-generation-pro-2029/ai-content-generator/ai-content-marketing-automation',
    '/ai-content-personalization-engine/ai-creativity-studio/ai-market-research/ai-powered-enterprise-security/ai-powered-it-asset-management/ai-automation-services/advanced-ai-automation-services/ai-assistant',
    '/ai-agents/ai-agent-orchestrator/ai-analytics-copilot/ai-ad-creative-generator/agentic-rag-helpdesk/agentic-rag/agentic-sales-outreach/affiliate-attribution-hub',
    '/advanced-research-automation/advanced-cybersecurity-suite/advanced-it-infrastructure-services/accessibility-auditor/accessibility-scanner']

  const quantumServices = [
    '/quantum-neural-network-platform/quantum-cloud-infrastructure/quantum-financial-trading/quantum-network-optimization/quantum-private-network-solutions/quantum-private-network-solutions-2026']

  const networkServices = [
    '/5g-enterprise-network/5g-enterprise-solutions/5g-network-optimization']
=======
export default function sitemap(): MetadataRoute.Sitemap {_const _baseUrl = 'https://ziontechgroup.com'
  
  const _routes = [
    '', _'/about', _'/services', _'/ai-services', _'/quantum-services', _'/cybersecurity', _'/enterprise-it', _'/research-development', _'/space-tech', _'/case-studies', _'/news', _'/events', _'/webinars', _'/white-papers', _'/docs', _'/contact', _'/privacy', _'/terms', _'/cookies', _'/accessibility', _'/multiverse/launch', _'/admin/instances', _'/admin/os-deploy']

  const _aiServices = [
    '/ai-autonomous-business-manager', _'/ai-autonomous-business-operations', _'/ai-autonomous-business-platform', _'/ai-autonomous-business-process-automation', _'/ai-autonomous-code-review', _'/ai-autonomous-creative-director', _'/ai-autonomous-data', _'/ai-autonomous-decision-engine', _'/ai-autonomous-decision-platform', _'/ai-autonomous-devops', _'/ai-autonomous-ecosystem-manager', _'/ai-autonomous-ecosystem', _'/ai-autonomous-education-professor', _'/ai-autonomous-healthcare-physician', _'/ai-autonomous-learning-system', _'/ai-autonomous-legal-counsel', _'/ai-autonomous-logistics', _'/ai-autonomous-manufacturing', _'/ai-autonomous-research-assistant', _'/ai-autonomous-research', _'/ai-autonomous-robotics', _'/ai-autonomous-scientific-researcher', _'/ai-autonomous-security', _'/ai-autonomous-systems-platform', _'/ai-autonomous-testing', _'/ai-autonomous-vehicle-platform', _'/ai-autonomous-vehicle', _'/ai-autonomous-vehicles-platform', _'/ai-autonomous-vehicles', _'/ai-autonomous-venture-capitalist', _'/ai-biomedical-research', _'/ai-biotech-drug-discovery', _'/ai-blockchain-analytics', _'/ai-blockchain-governance', _'/ai-brain-computer-interface', _'/ai-brain-interface', _'/ai-brand-personality-generator', _'/ai-business-intelligence-elite-2026', _'/ai-business-intelligence-pro', _'/ai-business-intelligence-suite-2029', _'/ai-business-intelligence-suite', _'/ai-business-intelligence', _'/ai-climate-prediction-engine', _'/ai-climate-prediction-platform', _'/ai-climate-prediction', _'/ai-code-generation-enterprise', _'/ai-code-review-copilot', _'/ai-code-review', _'/ai-compliance-automation', _'/ai-computer-vision-platform', _'/ai-consciousness-evolution-2025', _'/ai-consciousness-evolution-2029', _'/ai-consciousness-evolution-platform', _'/ai-consciousness-evolution', _'/ai-consciousness-simulation-platform', _'/ai-consciousness-simulation', _'/ai-consciousness-simulator', _'/ai-content-creation-revolution', _'/ai-content-creation', _'/ai-content-factory', _'/ai-content-generation-automation-2033', _'/ai-content-generation-pro-2029', _'/ai-content-generator', _'/ai-content-marketing-automation', _'/ai-content-personalization-engine', _'/ai-creativity-studio', _'/ai-market-research', _'/ai-powered-enterprise-security', _'/ai-powered-it-asset-management', _'/ai-automation-services', _'/advanced-ai-automation-services', _'/ai-assistant', _'/ai-agents', _'/ai-agent-orchestrator', _'/ai-analytics-copilot', _'/ai-ad-creative-generator', _'/agentic-rag-helpdesk', _'/agentic-rag', _'/agentic-sales-outreach', _'/affiliate-attribution-hub', _'/advanced-research-automation', _'/advanced-cybersecurity-suite', _'/advanced-it-infrastructure-services', _'/accessibility-auditor', _'/accessibility-scanner']

  const _quantumServices = [
    '/quantum-neural-network-platform', _'/quantum-cloud-infrastructure', _'/quantum-financial-trading', _'/quantum-network-optimization', _'/quantum-private-network-solutions', _'/quantum-private-network-solutions-2026']

  const _networkServices = [
    '/5g-enterprise-network', _'/5g-enterprise-solutions', _'/5g-network-optimization']
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _complianceServices = [
    '/soc2-compliance-automation']

  const _allRoutes = [
    ...routes, _...aiServices, _...quantumServices, _...networkServices, _...complianceServices]

  return allRoutes.map(_(route) => ({
    url: `${baseUrl}${_route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8}))
}