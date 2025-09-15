export default function InsightsIndex() {
	const articles = [
		{
			title: 'The State of Enterprise AI in 2025',
			summary: 'Key trends, adoption patterns, and ROI benchmarks for AI at scale.',
			href: '/insights/state-of-enterprise-ai-2025',
		},
		{
			title: 'Autonomous Ops: From Pilots to Production',
			summary: 'How to operationalize autonomy across core business functions.',
			href: '/insights/autonomous-ops-pilots-to-production',
		},
	]

	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Insights</h1>
					<p className="mt-6 text-lg leading-8 text-gray-300">Research, analysis, and thought leadership from Zion Tech Group.</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
						{articles.map((a) => (
							<article key={a.title} className="flex flex-col items-start group bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
								<div className="group relative">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors duration-200">
										<a href={a.href}>
											<span className="absolute inset-0" />
											{a.title}
										</a>
									</h3>
									<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{a.summary}</p>
								</div>
								<div className="relative mt-8 flex items-center gap-x-4">
									<div className="text-sm leading-6">
										<p className="font-semibold text-white">
											<a href={a.href} className="hover:text-blue-400 transition-colors duration-200">
												<span className="absolute inset-0" />
												Read article
											</a>
										</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
