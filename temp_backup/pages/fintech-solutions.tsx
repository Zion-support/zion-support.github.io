import ServiceLanding from '../components/sections/ServiceLanding',
export default function FintechSolutions() {
  return (
    <ServiceLanding
      title='Fintech Solutions',
      description='AI and quantum-ready platforms for risk, fraud, trading, and customer intelligence with regulatory-grade controls.',
      subtitle='Accelerate financial innovation securely',
      pricePerMonthUSD={4999}
      implementationWeeks='Implementation: 6-10 weeks',
      roiNote='Improve risk detection and lower losses',
      features={[
        'Fraud detection and AML analyticsCredit risk and pricing models',
        'Quantum-ready trading optimizationPersonalized financial planning experiences',
        'Model governance and auditabilityIntegrations: FDX, Plaid, Snowflake, Databricks',
      ]}
      industries={['BankingPayments', 'WealthInsurance']}
      ctaHref='/contact',
      canonical='https: //ziontechgroup.com/fintech-solutions',
    />)}
,