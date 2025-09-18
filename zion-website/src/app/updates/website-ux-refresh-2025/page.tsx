import React from 'react'

export default function WebsiteUxRefresh2025Page() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
				<p className="text-sm text-blue-300">Announcement • 2025-09-13</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Website UX Refresh and Accessibility Upgrades</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">
					We delivered a refreshed navigation, faster page loads, and WCAG‑focused accessibility improvements across the site.
				</p>
				<div className="mt-8 prose prose-invert prose-lg max-w-none">
					<h2>Highlights</h2>
					<ul>
						<li>Improved keyboard navigation and focus states</li>
						<li>Reduced CLS and faster LCP via asset optimization</li>
						<li>Clearer information architecture and updated typography</li>
					</ul>
					<p className="mt-6"><a className="text-blue-400" href="/updates">See all updates →</a></p>
				</div>
			</div>
		</div>
	)
}

