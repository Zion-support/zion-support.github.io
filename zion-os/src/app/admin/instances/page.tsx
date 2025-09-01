// import { prisma } from "@/lib/prisma";

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
  daoConfig: any | null;
  _count: {
    deployments: number;
    features: number;
  };
}

export default async function InstancesPage() {
  // Temporarily commented out for build
  // const instances = await prisma.instance.findMany({
  //   include: {
  //     daoConfig: true,
  //     _count: { select: { deployments: true, features: true } },
  //   },
  //   orderBy: { createdAt: "desc" },
  // });

  const instances: any[] = []; // Temporary empty array

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Instances</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {instances.length === 0 ? (
          <div className="col-span-2 text-center py-8 text-gray-500">
            No instances found
          </div>
        ) : (
          instances.map((inst) => (
            <div key={inst.id} className="rounded border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{inst.name}</div>
                <span className="text-xs opacity-70">{inst.vertical}</span>
              </div>
              <div className="text-sm opacity-80">{inst.domain || inst.subdomain || inst.slug}</div>
              <div className="text-xs opacity-70 mt-2">Governance: {inst.governanceType}</div>
              <div className="text-xs opacity-70">Deployments: {inst._count.deployments} • Features: {inst._count.features}</div>
            </div>
          ))
        )}
      </div>
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