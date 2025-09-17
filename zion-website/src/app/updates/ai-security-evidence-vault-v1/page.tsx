<<<<<<< HEAD
import React from 'react';

const page: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">page</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default page;
=======
export const metadata = {
	title: 'AI Security Evidence Vault v1.0 — Launch',
	description:
		'Centralized evidence bundles with automated chain-of-custody and policy checks.',
}

export default function Page() {
	return (
		<main className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24 text-gray-200">
				<p className="text-sm text-blue-300">Launch • 2025-09-16</p>
				<h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">AI Security Evidence Vault v1.0</h1>
				<p className="mt-6 text-lg text-gray-300">
					Secure storage and verification for AI change evidence with signed artifacts, policy
					validation, and audit-ready exports.
				</p>
				<section className="mt-10 space-y-4">
					<h2 className="text-2xl font-semibold text-white">Highlights</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>Immutable evidence bundles with chain-of-custody</li>
						<li>Automated policy conformance checks and alerts</li>
						<li>Compliance exports for audits and certifications</li>
					</ul>
				</section>
				<div className="mt-10">
					<a href="/updates" className="text-blue-400 hover:text-blue-300">Back to updates →</a>
				</div>
			</div>
		</main>
	)
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
