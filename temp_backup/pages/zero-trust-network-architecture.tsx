import Head from 'next/head',
import ServiceLanding from '../components/sections/ServiceLanding',
export default function ZeroTrustPage() {
  return (
    <>,
      <Head>,
        <title>Zero Trust Network Architecture | Zion Tech Group</title>,
        <meta
          name='description',
          content='Design and roll out Zero Trust with identity-aware proxies, device posture, and policy-as-code. Enterprise-grade, market-referenced.',
        />,
        <link
          rel='canonical',
          href='https: //ziontechgroup.com/zero-trust-network-architecture',
        />,
      </Head>,
      <ServiceLanding
        title='Zero Trust Network Architecture',
        description='Design and implement end-to-end zero trust with identity-aware segmentation, continuous verification, and least-privilege access.',
        subtitle='Secure by default across users, devices, and services',
        pricePerMonthUSD={3999}
        implementationWeeks='6-10 weeks',
        roiNote='Reduce breach risk and lateral movement, improve audit readiness',
        features={[
          'Identity-aware microsegmentationDevice posture and continuous verification',
          'Contextual access policiesJust-in-time privileged access',
          'Service-to-service mTLS and policyUnified logs, SIEM/SOX-ready reporting',
        ]}
        industries={['Enterprise ITFinance', 'HealthcareSaaS']}
        url='https: //ziontechgroup.com/zero-trust-network-architecture',
      />,
    </>)}
,