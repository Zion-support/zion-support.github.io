import Link from "next/link";

export const metadata = {
	title: "Cybersecurity Services - Zion Tech Group | Advanced Threat Protection",
	description:
		"Protect your organization with Zion Tech Group's comprehensive cybersecurity solutions. From threat detection to compliance management, we secure your digital assets.",
	keywords:
		"cybersecurity, threat protection, security services, compliance, Zion Tech Group, security solutions, threat detection",
};

export default function CybersecurityPage() {
	return (
		<div className="min-h-screen py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-4xl font-bold mb-4">Cybersecurity Services</h1>
				<p className="text-lg opacity-80 mb-6">Protect your organization from evolving cyber threats with our comprehensive solutions.</p>
				<Link href="/contact" className="text-blue-500 hover:underline">Secure Your Organization</Link>
			</div>
		</div>
	);
}