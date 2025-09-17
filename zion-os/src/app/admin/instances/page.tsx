type Instance = {
	id: string;
	name: string;
	slug: string;
	vertical: string;
	isPublic: boolean;
	_count: { deployments: number; features: number };
	createdAt: string;
	domain?: string | null;
	subdomain?: string | null;
	region?: string | null;
	country?: string | null;
	governanceType: string;
	tokenSystem: string;
};

const instances: Instance[] = [
	{
		id: "inst-001",
		name: "Zion Health Network",
		slug: "zion-health",
		vertical: "HEALTH",
		isPublic: true,
		_count: { deployments: 3, features: 12 },
		createdAt: "2024-01-10T00:00:00Z",
		domain: "health.zion.network",
		region: "North America",
		country: "United States",
		governanceType: "DAO_FULL",
		tokenSystem: "SHARED",
	},
];

function getGovernanceLabel(type: string) {
	switch (type) {
		case "ADMIN":
			return "Admin Control";
		case "DAO_LITE":
			return "DAO-lite";
		case "DAO_FULL":
			return "Full DAO";
		default:
			return type;
	}
}

function getTokenSystemLabel(type: string) {
	switch (type) {
		case "SHARED":
			return "ZION$ Shared";
		case "LOCAL":
			return "Local Token";
		default:
			return type;
	}
}

export default function InstancesPage() {
	return (
		<div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">Manage Your Instances</h1>
					<p className="text-xl text-white/70 max-w-2xl mx-auto">Monitor and manage your deployed digital economies.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
					<div className="glass-effect rounded-xl p-6 text-center">
						<div className="text-3xl font-bold text-blue-400 mb-2">{instances.length}</div>
						<div className="text-white/70">Total Instances</div>
					</div>
					<div className="glass-effect rounded-xl p-6 text-center">
						<div className="text-3xl font-bold text-green-400 mb-2">{instances.filter((i) => i.isPublic).length}</div>
						<div className="text-white/70">Public Instances</div>
					</div>
					<div className="glass-effect rounded-xl p-6 text-center">
						<div className="text-3xl font-bold text-purple-400 mb-2">{instances.reduce((s, i) => s + i._count.deployments, 0)}</div>
						<div className="text-white/70">Total Deployments</div>
					</div>
					<div className="glass-effect rounded-xl p-6 text-center">
						<div className="text-3xl font-bold text-orange-400 mb-2">{instances.reduce((s, i) => s + i._count.features, 0)}</div>
						<div className="text-white/70">Active Features</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{instances.map((inst) => (
						<div key={inst.id} className="feature-card group hover-lift">
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-center gap-3">
									<div className={`w-3 h-3 rounded-full ${inst.isPublic ? "bg-green-500" : "bg-yellow-500"}`}></div>
									<div className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">{inst.name}</div>
								</div>
								<span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">{inst.vertical}</span>
							</div>
							<div className="space-y-3 mb-4">
								<div className="flex items-center gap-2 text-sm text-white/70">
									<span>🌐</span>
									<span className="truncate">{inst.domain || inst.subdomain || inst.slug}</span>
								</div>
								<div className="flex items-center gap-2 text-sm text-white/70">
									<span>🏛️</span>
									<span>Governance: {getGovernanceLabel(inst.governanceType)}</span>
								</div>
								{inst.region && (
									<div className="flex items-center gap-2 text-sm text-white/70">
										<span>📍</span>
										<span>{inst.region}{inst.country ? `, ${inst.country}` : ""}</span>
									</div>
								)}
								<div className="flex items-center gap-2 text-sm text-white/70">
									<span>💎</span>
									<span>Token: {getTokenSystemLabel(inst.tokenSystem)}</span>
								</div>
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
	);
}