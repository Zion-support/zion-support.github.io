>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

// import { prisma } from "@/lib/prisma",;
interface InstanceWithCounts {;
  id: string,;
  name: string,;
  slug: string,;
  domain: string | null,;
  subdomain: string | null,;
  vertical: string,;
  defaultLanguage: string,;
  tokenSystem: string,;
  governanceType: string,;
  isPublic: boolean,;
  region: string | null,;
  country: string | null,;
  createdAt: Date,;
  updatedAt: Date,;
  daoConfig: any | null,;
  _count: {;
    deployments: number,;
    features: number;
  }
}
;
export default function InstancesPage() {;
  const instances: any[] = [], // Temporary empty array;
  const error: string | null = null,;


  return (;
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;

;

                    </span>;
                  </div>;
                  <div className="flex items - center gap - 2 text - sm text - white / 70">;
                    <span className="w - 4 h - 4">🗳️</span>;
                    <span > Governance: {getGovernanceLabel (inst.governance_type)}</span>;
                  </div>;
                  {inst.region && (
                    <div className="flex items - center gap - 2 text - sm text - white / 70">;
                      <span className="w - 4 h - 4">📍</span>;
                      <span>{inst.region}{inst.country ? `, ${inst.country}` : ''}</span>;
;


                  <div className="flex items-center gap-2 text-sm text-white/70">;
                    <span className="w-4 h-4">🔧</span>;
                    <span>Token: {getTokenSystemLabel(inst.tokenSystem)}</span>;
                      href={`/admin/instances/${inst.id}`} ;


                      className="flex-1 text-center py-2 px-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors";

                  href={`/admin/instances/${inst.id}/deployments`} ;


                  className="flex-1 btn-secondary text-center text-sm py-2";

;

=======;
function getGovernanceLabel(type: string) {;
  switch (type) {;
    case "ADMIN": return "Admin Control",;
    case "DAO_LITE": return "DAO-lite",;
    case "DAO_FULL": return "Full DAO",;
    default: return type;
  }
}
;
function getTokenSystemLabel(type: string) {;
  switch (type) {;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    case "SHARED": return "ZION$ Shared";
    case "LOCAL": return "Local Token";
    default: return type;
  }
}
}