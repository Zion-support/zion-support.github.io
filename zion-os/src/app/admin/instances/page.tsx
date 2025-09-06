"use client";

export default function InstancesPage() {
  const error = null; // This should be managed with state
  const instances: any[] = []; // This should be populated from your data source
  
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
              {instances.reduce((sum, i) => sum + (i.count?.deployments || 0), 0)}
            </div>
            <div className="text-white/70">Total Deployments</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {instances.reduce((sum, i) => sum + (i.count?.features || 0), 0)}
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
                    <div className={`w-3 h-3 rounded-full ${
                      inst.isPublic ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <div className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {inst.name}
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                    {inst.vertical}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="text-sm text-white/70">
                    <div className="flex justify-between">
                      <span>Domain:</span>
                      <span className="font-mono">{inst.domain || 'Not set'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Region:</span>
                      <span>{inst.region || 'Not set'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Created:</span>
                      <span>{new Date(inst.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {inst.features?.slice(0, 3).map((feature: string) => (
                      <span key={feature} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        {feature}
                      </span>
                    ))}
                    {inst.features?.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/10 text-white/70 rounded">
                        +{inst.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors">
                      Manage
                    </button>
                    <button className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm rounded-lg transition-colors">
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {instances.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">
              <div className="text-2xl">📊</div>
            </div>
            <h3 className="text-lg font-medium text-white/60 mb-2">No instances found</h3>
            <p className="text-white/40 mb-6">
              Create your first digital economy instance to get started.
            </p>
            <a 
              href="/admin/os-deploy" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <span>🚀</span>
              Deploy First Instance
            </a>
          </div>
        )}
      </div>
    </div>
  );
}