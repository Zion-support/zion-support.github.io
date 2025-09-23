export const metadata = {
	title: 'Careers - Zion Tech Group',
	description:
		'Join our team of AI innovators and help shape the future of autonomous business operations and digital economies.',
	keywords:
		'careers, jobs, Zion Tech Group, AI jobs, technology careers, quantum computing jobs',
};

export default function CareersPage() {
	const openPositions = [
		{
			title: 'Senior AI Research Engineer',
			department: 'Research & Development',
			location: 'Remote / Global',
			type: 'Full-time',
			description:
				'Lead cutting-edge research in AI consciousness, autonomous systems, and quantum neural networks.',
			requirements: [
				'PhD in Computer Science, AI, or related field',
				'5+ years experience in AI research',
				'Expertise in machine learning and neural networks',
				'Familiarity with quantum computing concepts',
			],
		},
	];

	const benefits = [
		{ title: 'Remote First', description: 'Work from anywhere in the world with our distributed team.', icon: '🌍' },
		{ title: 'Cutting-Edge Technology', description: 'Work with the latest AI and quantum technologies.', icon: '🚀' },
		{ title: 'Flexible Hours', description: "Work when you're most productive with flexible scheduling.", icon: '⏰' },
	];

	return (
		<div className="space-y-16 p-8">
			<section className="text-center">
				<h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
				<p className="text-lg opacity-80 mb-2">Help us build the future of AI-powered digital economies.</p>
			</section>
			<section>
				<h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
				<div className="space-y-4">
					{openPositions.map((position, index) => (
						<div key={index} className="p-4 rounded-lg border border-white/10">
							<h3 className="text-xl font-semibold mb-1">{position.title}</h3>
							<p className="opacity-70 mb-2">{position.department} • {position.location} • {position.type}</p>
							<p className="opacity-80 mb-2">{position.description}</p>
							<ul className="list-disc list-inside opacity-80">
								{position.requirements.map((req, i) => (
									<li key={i}>{req}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
			<section>
				<h2 className="text-2xl font-semibold mb-4">Why Work With Us</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{benefits.map((b, i) => (
						<div key={i} className="text-center p-6 border border-white/10 rounded-lg">
							<div className="text-4xl mb-2">{b.icon}</div>
							<h3 className="text-lg font-semibold mb-1">{b.title}</h3>
							<p className="opacity-80 text-sm">{b.description}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

