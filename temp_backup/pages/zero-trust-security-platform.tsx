import React from 'react';
<<<<<<< HEAD
import ServiceLanding from '../components/sections/ServiceLanding';

export default function ZeroTrustSecurityPlatform() {
	return (
		<ServiceLanding
			title="Zero Trust Security Platform"
			description="Design and implement Zero Trust architecture: identity-aware access, micro-segmentation, continuous verification, and policy enforcement across apps, infra, and devices."
			subtitle="Never trust, always verify"
			pricePerMonthUSD={4999}
			implementationWeeks="3-6 weeks"
			roiNote="Reduce breach risk and blast radius; meet compliance faster"
			features={[
				"Identity and device posture checks",
				"Policy enforcement at network and application layers",
				"Service-to-service authentication (mTLS)",
				"Micro-segmentation and least privilege",
				"SIEM/SOAR integrations and automated response",
				"Reference architectures and runbooks]}
			]}
			industries={["Financial Services", "Healthcare", "SaaS", "Government"]}
			url="https://ziontechgroup.com/zero-trust-security-platform"
		/>
	);
}

// Disable static generation to prevent SSR issues
export async function getServerSideProps() {
  return {
    props: {}
  };
=======
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function ZeroTrustSecurityPlatformPage() {
	return (
		<>
			<Head>
				<title>Zero Trust Security Platform | Zion Tech Group</title>
				<meta name="description" content="Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege." />
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-security-platform" />
			</Head>
			<ServiceLanding
				title="Zero Trust Security Platform"
				description="Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services."
				subtitle="Trust nothing, verify everything"
				pricePerMonthUSD={3499}
				implementationWeeks="4-8 weeks"
				roiNote="Reduce breach impact and lateral movement risk; meet compliance faster"
				features={[
					"Policy-as-code and enforcement",
					"Identity-aware proxies and device posture",
					"Microsegmentation and service mesh integration",
					"Continuous authentication and authorization",
					"Visibility and audit for compliance",
					"Rollout playbooks and migration kits"
				]}
				industries={["Enterprise IT", "Financial Services", "Healthcare", "SaaS", "Public Sector"]}
				canonical="https://ziontechgroup.com/zero-trust-security-platform"
			/>
		</>
	);
>>>>>>> origin/auto/autonomy-17186719616
}