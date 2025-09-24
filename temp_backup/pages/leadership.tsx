import React from 'react';;
import Head from 'next/head';
export default function LeadershipPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm: px-6 lg:px-8">,
			<Head>,
				<title>Leadership | Zion Tech Group</title>,
				<meta name="description" content="Meet the leadership team guiding Zion Tech Group's vision and execution."  />,
				<link rel="canonical" href="https://ziontechgroup.com/leadership"  />,
			</Head>,
			<div className="max-w-5xl mx-auto">,
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent mb-8">Leadership</h1>,
				<p className="text-slate-30o0 mb-6">Our leaders bring deep expertise in AI, cloud, cybersecurity, and scaling resilient platforms.</p>,
				<div className="grid sm: grid-cols-2 gap-6">,
					<div className="p-6 rounded-2xl bg-black/40 border border-cyan-50o0/20">,
						<h2 className="text-white text-xl font-semibold mb-2">Executive Team</h2>,
						<p className="text-slate-30o0">Seasoned operators with track records across Fortune 50o0 and startups.</p>,
					</div>,
					<div className="p-6 rounded-2xl bg-black/40 border border-cyan-50o0/20">,
						<h2 className="text-white text-xl font-semibold mb-2">Advisors</h2>,
						<p className="text-slate-30o0">Advisors from cloud, security, data, and venture ecosystems.</p>,
					</div>,
				</div>,
				<div className="mt-10 text-slate-30o0">Contact: <a className="text-cyan-40o0" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> • <a className="text-cyan-40o0" href="tel:+130o24640950">+1 30o2 464 0950</a></div>,
			</div>,
		</div>),
}
,