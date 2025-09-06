"use client";

export default function InstancesPage() {
  const error = null; // This should be managed with state
  
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">📊 Manage Your Instances</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Monitor and manage your deployed digital economies, track performance, and access configuration settings.
          </p>
        </div>
        
        {/* Error State */}
        {error && (
          <div className="mb-8 p-6 bg-red-900/20 border border-red-500/20 rounded-xl text-center">
            <div className="text-red-400 mb-2">⚠️ Database Connection Error</div>
            <p className="text-white/70 mb-4">{error}</p>
            <p className="text-sm text-white/50">
              Please ensure your database is properly configured and the DATABASE URL environment variable is set.
            </p>
          </div>
        )}
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{instances.length}</div>
            <div className="text-white/70">Total Instances</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {instances.filter(i => i.isPublic).length}
            </div>
            <div className="text-white/70">Public Instances</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {instances.reduce((sum, i) => sum + i.count.deployments, 0)}
            </div>
            <div className="text-white/70">Total Deployments</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {instances.reduce((sum, i) => sum + i.count.features, 0)}
            </div>
            <div className="text-white/70">Active Features</div>
          </div>
        </div>

        {/* Instances Grid */}
        {instances.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instances.map((inst) => (
              <div key={inst.id} className="feature-card group hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${inst.isPublic ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <div className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {inst.name}
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                    {inst.vertical}
                  </span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-4 h-4">🌐</span>
                    <span className="truncate">{inst.domain || inst.subdomain || inst.slug}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-4 h-4">🗳️</span>
                    <span>Governance: {getGovernanceLabel(inst.governanceType)}</span>
                  </div>
                  {inst.region && (
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-4 h-4">📍</span>
                      <span>
                        {inst.region}
                        {inst.country ? `, ${inst.country}` : ''}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-4 h-4">🔧</span>
                    <span>Token: {getTokenSystemLabel(inst.tokenSystem)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center gap-4">
                    <span>🚀 {inst.count.deployments} deployments</span>
                    <span>⚡ {inst.count.features} features</span>
                  </div>
                  <span className="text-white/40">
                    {new Date(inst.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <a
                      href={`/admin/instances/${inst.id}`}
                      className="flex-1 text-center py-2 px-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      Manage
                    </a>
                    <a
                      href={`/admin/instances/${inst.id}/deployments`}
                      className="flex-1 text-center py-2 px-3 text-sm border border-white/20 hover:border-white/40 text-white rounded-lg transition-colors"
                    >
                      Deployments
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {instances.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">No Instances Yet</h3>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              You haven't deployed any digital economies yet. Start building your first instance to get started.
            </p>
            <a href="/multiverse/launch" className="btn-primary">
              🚀 Launch Your First Economy
            </a>
          </div>
        )}
      </div>
    );
  }

  // Helper functions
  const getGovernanceLabel = (type: string) => {
    switch (type) {
      case 'ADMIN': return 'Admin Control';
      case 'DAO LITE': return 'DAO-lite';
      case 'DAO FULL': return 'Full DAO';
      case 'HYBRID': return 'Hybrid Governance';
      default: return type;
    }
  };

  const getTokenSystemLabel = (type: string) => {
    switch (type) {
      case 'SHARED': return 'ZION$ Shared';
      case 'LOCAL': return 'Local Token';
      case 'HYBRID': return 'Hybrid System';
      default: return type;
    }
  };

  // Mock data for instances
  const instances = [
    {
      id: '1',
      name: 'Sample Instance',
      vertical: 'GENERAL',
      isPublic: true,
      domain: 'example.zion.com',
      governanceType: 'DAO LITE',
      tokenSystem: 'SHARED',
      region: 'North America',
      country: 'United States',
      count: { deployments: 3, features: 12 },
      createdAt: new Date().toISOString()
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">📊 Manage Your Instances</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Monitor and manage your deployed digital economies, track performance, and access configuration settings.
          </p>
        </div>
        
        {/* Error State */}
        {error && (
          <div className="mb-8 p-6 bg-red-900/20 border border-red-500/20 rounded-xl text-center">
            <div className="text-red-400 mb-2">⚠️ Database Connection Error</div>
            <p className="text-white/70 mb-4">{error}</p>
            <p className="text-sm text-white/50">
              Please ensure your database is properly configured and the DATABASE URL environment variable is set.
            </p>
          </div>
        )}
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{instances.length}</div>
            <div className="text-white/70">Total Instances</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {instances.filter(i => i.isPublic).length}
            </div>
            <div className="text-white/70">Public Instances</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {instances.reduce((sum, i) => sum + i.count.deployments, 0)}
            </div>
            <div className="text-white/70">Total Deployments</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {instances.reduce((sum, i) => sum + i.count.features, 0)}
            </div>
            <div className="text-white/70">Active Features</div>
          </div>
        </div>

        {/* Instances Grid */}
        {instances.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instances.map((inst) => (
              <div key={inst.id} className="feature-card group hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${inst.isPublic ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <div className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {inst.name}
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                    {inst.vertical}
                  </span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-4 h-4">🌐</span>
                    <span className="truncate">{inst.domain || inst.subdomain || inst.slug}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-4 h-4">🗳️</span>
                    <span>Governance: {getGovernanceLabel(inst.governanceType)}</span>
                  </div>
                  {inst.region && (
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-4 h-4">📍</span>
                      <span>
                        {inst.region}
                        {inst.country ? `, ${inst.country}` : ''}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-4 h-4">🔧</span>
                    <span>Token: {getTokenSystemLabel(inst.tokenSystem)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <div className="flex items-center gap-4">
                    <span>🚀 {inst.count.deployments} deployments</span>
                    <span>⚡ {inst.count.features} features</span>
                  </div>
                  <span className="text-white/40">
                    {new Date(inst.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <a
                      href={`/admin/instances/${inst.id}`}
                      className="flex-1 text-center py-2 px-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      Manage
                    </a>
                    <a
                      href={`/admin/instances/${inst.id}/deployments`}
                      className="flex-1 text-center py-2 px-3 text-sm border border-white/20 hover:border-white/40 text-white rounded-lg transition-colors"
                    >
                      Deployments
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {instances.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">No Instances Yet</h3>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              You haven't deployed any digital economies yet. Start building your first instance to get started.
            </p>
            <a href="/multiverse/launch" className="btn-primary">
              🚀 Launch Your First Economy
            </a>
          </div>
        )}
      </div>
    );
  }