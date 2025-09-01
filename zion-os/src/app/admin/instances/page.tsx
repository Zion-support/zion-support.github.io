import { prisma } from "@/lib/prisma";
import { 
  Globe, 
  Users, 
  Settings, 
  Rocket, 
  Shield, 
  TrendingUp,
  Calendar,
  Activity,
  Play,
  Eye,
  Settings as SettingsIcon
} from "lucide-react";

export default async function InstancesPage() {
  const instances = await prisma.instance.findMany({
    include: {
      daoConfig: true,
      _count: { select: { deployments: true, features: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  const getStatusColor = (deploymentCount: number) => {
    if (deploymentCount === 0) return "text-yellow-400";
    if (deploymentCount > 0) return "text-green-400";
    return "text-gray-400";
  };

  const getStatusIcon = (deploymentCount: number) => {
    if (deploymentCount === 0) return <Activity className="w-4 h-4" />;
    if (deploymentCount > 0) return <Rocket className="w-4 h-4" />;
    return <Settings className="w-4 h-4" />;
  };

  const getVerticalIcon = (vertical: string) => {
    switch (vertical) {
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />;
      case "EDUCATION": return <TrendingUp className="w-4 h-4 text-green-400" />;
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />;
      case "GOV": return <Users className="w-4 h-4 text-red-400" />;
      default: return <Globe className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-high-contrast">Instances</h1>
        <p className="text-[var(--fg-secondary)] mt-2">
          Manage and monitor your deployed Zion instances, API keys, and governance settings.
        </p>
      </header>

      <section aria-labelledby="instances-list">
        <h2 id="instances-list" className="sr-only">Instances List</h2>
        
        {instances.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-[var(--fg-secondary)] text-lg mb-4">No instances deployed yet</div>
            <a href="/multiverse/launch" className="btn-primary">
              Deploy Your First Instance
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instances.map((inst) => (
              <article key={inst.id} className="card group">
                <header className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg group-hover:text-[var(--accent)] transition-colors">
                      {inst.name}
                    </h3>
                    <span 
                      className="text-xs px-2 py-1 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-secondary)]"
                      aria-label={`Vertical: ${inst.vertical}`}
                    >
                      {inst.vertical}
                    </span>
                  </div>
                  <div className="text-sm text-[var(--fg-secondary)]">
                    {inst.domain || inst.subdomain || inst.slug}
                  </div>
                </header>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--fg-secondary)]">Governance:</span>
                    <span className="font-medium">{inst.governanceType}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[var(--fg-secondary)]">
                    <span>
                      <span className="font-medium">{inst._count.deployments}</span> deployments
                    </span>
                    <span>
                      <span className="font-medium">{inst._count.features}</span> features
                    </span>
                  </div>
                </div>
                
                <footer className="mt-4 pt-3 border-t border-[var(--border)]">
                  <div className="flex items-center justify-between text-xs text-[var(--fg-secondary)]">
                    <span>
                      Created {new Date(inst.createdAt).toLocaleDateString()}
                    </span>
                    <a 
                      href={`/admin/instances/${inst.id}`}
                      className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                      aria-label={`View details for ${inst.name}`}
                    >
                      View Details →
                    </a>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function getGovernanceLabel(type: string) {
  switch (type) {
    case "ADMIN": return "Admin Control";
    case "DAO_LITE": return "DAO-lite";
    case "DAO_FULL": return "Full DAO";
    default: return type;
  }
}

function getTokenSystemLabel(type: string) {
  switch (type) {
    case "SHARED": return "ZION$ Shared";
    case "LOCAL": return "Local Token";
    default: return type;
  }
}