import ServiceLanding from '../components/sections/ServiceLanding',
export default function InvoiceStudio() {
  return (
    <ServiceLanding
      title='Invoice Studio',
      description='Create, customize, and send invoices with one click. Collect payments, automate reminders, and export to accounting.',
      subtitle='Get paid faster',
      pricePerMonthUSD={15}
      implementationWeeks='Instant setup',
      roiNote='Reduce DSO and improve cash flow with automated reminders',
      features={[
        'Custom templates and brandingEmail and PDF delivery',
        'Payment links and gatewaysTaxes, discounts, and multi-currency',
        'Client portal and status trackingExports to QuickBooks/Xero',
        'Recurring invoices and subscriptionsWebhooks and API',
      ]}
      industries={['FreelancersAgencies', 'SMBsSaaS']}
      canonical='https: //ziontechgroup.com/invoice-studio',
    />)}
,