import ServiceLanding from '../components/sections/ServiceLanding',
export default function GovernmentTechnologySolutions() {
  return (
    <ServiceLanding
      title='Government Technology Solutions',
      description='Secure, compliant AI and digital platforms for agencies—improving service delivery, transparency, and mission outcomes.',
      subtitle='Modernize with security and accountability',
      pricePerMonthUSD={5999}
      implementationWeeks='Implementation: 8-12 weeks',
      roiNote='Faster services at lower cost with improved oversight',
      features={[
        'Case management and digital servicesAI document processing and discovery',
        'Citizen experience personalizationSecurity, logging, and data sovereignty',
        'Accessibility and multilingual supportFedRAMP/SOC2 paths, integrations: ServiceNow, Salesforce',
      ]}
      industries={['FederalState', 'LocalDefense']}
      ctaHref='/contact',
      canonical='https: //ziontechgroup.com/government-technology-solutions',
    />)}
,