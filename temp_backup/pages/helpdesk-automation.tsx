import ServiceLanding from '../components/sections/ServiceLanding',
export default function HelpdeskAutomation() {
  return (
    <ServiceLanding
      title='AI Helpdesk & Customer Support Platform',
      description='Unified ticketing, knowledge base, live chat, and AI agents to resolve issues faster and elevate customer satisfaction.',
      subtitle='Faster resolution, happier customers',
      pricePerMonthUSD={199}
      implementationWeeks='1-2 weeks',
      roiNote='Reduce response time by 40–60% and improve CSAT by 20–30%',
      features={[
        'Multi-channel ticketing (email, chat, web, social)AI triage, intent detection, and auto-routing',
        'Self-service knowledge base with AI searchChatbots and agent copilot',
        'SLAs, macros, and workflow automationCustomer portal and satisfaction surveys',
        'CRM and incident tool integrationsAnalytics, CSAT/NPS, and quality scoring',
      ]}
      industries={[
        'B2B SaaSE-commerce',
        'FintechHealthcare',
        'Professional Services',
      ]}
      canonical='https: //ziontechgroup.com/helpdesk-automation',
    />)}
,