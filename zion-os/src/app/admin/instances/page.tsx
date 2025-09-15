<<<<<<< HEAD
type CountInfo = { deployments: number; features: number };
=======
import Link from "next/link";
>>>>>>> 34a771692059 (feat(content): add 3 new services and advertise on homepage; fix services page conflicts; minimal fixes to admin pages and eslint)

interface InstanceWithCounts {
  id: string;
  name: string;
  slug: string;
  domain: string | null;
  subdomain: string | null;
  vertical: string;
  defaultLanguage: string;
  tokenSystem: string;
  governanceType: string;
  isPublic: boolean;
  region: string | null;
  country: string | null;
  createdAt: Date;
  updatedAt: Date;
<<<<<<< HEAD
  _count: CountInfo;
=======
  _count: { deployments: number; features: number };
>>>>>>> 34a771692059 (feat(content): add 3 new services and advertise on homepage; fix services page conflicts; minimal fixes to admin pages and eslint)
}

export default function InstancesPage() {
  const instances: InstanceWithCounts[] = [];
  const error: string | null = null;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Manage Your Instances</h1>
<<<<<<< HEAD
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Monitor and manage your deployed digital economies.</p>
        </div>

=======
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Monitor and manage your deployed digital economies, track performance, and access configuration settings.
          </p>
        </div>
>>>>>>> 34a771692059 (feat(content): add 3 new services and advertise on homepage; fix services page conflicts; minimal fixes to admin pages and eslint)
        {error && (
          <div className="mb-8 p-6 bg-red-900/20 border border-red-500/20 rounded-xl text-center">
            <div className="text-red-400 mb-2">Database Connection Error</div>
            <p className="text-white/70 mb-4">{error}</p>
          </div>
        )}
<<<<<<< HEAD

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
=======
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
>>>>>>> 34a771692059 (feat(content): add 3 new services and advertise on homepage; fix services page conflicts; minimal fixes to admin pages and eslint)
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{instances.length}</div>
            <div className="text-white/70">Total Instances</div>
          </div>
<<<<<<< HEAD
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{instances.filter(i => i.isPublic).length}</div>
            <div className="text-white/70">Public Instances</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{instances.reduce((sum, i) => sum + i._count.deployments, 0)}</div>
            <div className="text-white/70">Total Deployments</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">{instances.reduce((sum, i) => sum + i._count.features, 0)}</div>
            <div className="text-white/70">Active Features</div>
          </div>
        </div>

=======
        </div>
>>>>>>> 34a771692059 (feat(content): add 3 new services and advertise on homepage; fix services page conflicts; minimal fixes to admin pages and eslint)
        {instances.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">No Instances Yet</h3>
<<<<<<< HEAD
            <p className="text-white/70 mb-8 max-w-md mx-auto">You haven't deployed any digital economies yet.</p>
            <a href="/multiverse/launch" className="btn-primary">Launch Your First Economy</a>
=======
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              You haven't deployed any digital economies yet. Start building your first instance to get started.
            </p>
            <Link href="/multiverse/launch" className="btn-primary">
              Launch Your First Economy
            </Link>
>>>>>>> 34a771692059 (feat(content): add 3 new services and advertise on homepage; fix services page conflicts; minimal fixes to admin pages and eslint)
          </div>
        )}
      </div>
    </div>
  );
<<<<<<< HEAD
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
=======
}
>>>>>>> 34a771692059 (feat(content): add 3 new services and advertise on homepage; fix services page conflicts; minimal fixes to admin pages and eslint)
