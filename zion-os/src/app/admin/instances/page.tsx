  return (;
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;  return (;
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}
        <div className="text - center mb-12">;
          <h1 className="text - 4xl font - bold mb-4">📊 Manage Your Instances</h1>;
          <p className="text - xl text - white / 70 max - w-2xl mx-auto">;
            Monitor and manage your deployed digital economies, track performance, and access configuration settings.;
          </p>;
        </div>;
        {/* Error State */}
        {error && (
          <div className="mb - 8 p - 6 bg - red - 900 / 20 border border - red - 500 / 20 rounded - xl text-center">;
            <div className="text - red - 400 mb-2">⚠️ Database Connection Error</div>;
            <p className="text - white / 70 mb-4">{error}</p>;
            <p className="text - sm text-white / 50">;
              Please ensure your database is properly configured and the DATABASE_URL environment variable is set.;
            </p>;
        {/* Stats Overview */}
        <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 6 mb-8">;
          <div className="glass - effect rounded - xl p - 6 text-center">;
            <div className="text - 3xl font - bold text - blue - 400 mb-2">{instances.length}</div>;
            <div className="text-white / 70">Total Instances</div>;
          </div>;
          <div className="glass - effect rounded - xl p - 6 text-center">;
            <div className="text - 3xl font - bold text - green - 400 mb-2">;
              {instances.filter (index => i.is_public).length}
            </div>;
            <div className="text-white / 70">Public Instances</div>;
          </div>;
          <div className="glass - effect rounded - xl p - 6 text-center">;
            <div className="text - 3xl font - bold text - purple - 400 mb-2">;
              {instances.reduce ((sum, i) => sum + i._count.deployments, 0)}
            </div>;
            <div className="text-white / 70">Total Deployments</div>;
          </div>;
          <div className="glass - effect rounded - xl p - 6 text-center">;
            <div className="text - 3xl font - bold text - orange - 400 mb-2">;
              {instances.reduce ((sum, i) => sum + i._count.features, 0)}
            </div>;
            <div className="text-white / 70">Active Features</div>;
          </div>;
        </div>;
        {/* Instances Grid */}
                    }`}></div>;
                    <div className="font - semibold text - lg text - white group - hover:text - blue - 400 transition-colors">;
                      {inst.name}
                    </div>;
                  </div>;
                  <span className="text - xs px - 2 py - 1 rounded - full bg - white / 10 text-white / 70">;
                    {inst.vertical}
                  </span>;
                </div>;
                <div className="space - y-3 mb-4">;
                  <div className="flex items - center gap - 2 text - sm text-white / 70">;
                    <span className="w - 4 h-4">🌐</span>;
                    <span className="truncate">;
                    </span>;
                  </div>;
                  <div className="flex items - center gap - 2 text - sm text-white / 70">;
                    <span className="w - 4 h-4">🗳️</span>;
                    <span > Governance: {getGovernanceLabel (inst.governance_type)}</span>;
                  </div>;
                  {inst.region && (
                    <div className="flex items - center gap - 2 text - sm text-white / 70">;
                      <span className="w - 4 h-4">📍</span>;
                      <span>{inst.region}{inst.country ? `, ${inst.country}` : ''}</span>;
                  <div className="flex items-center gap-2 text-sm text-white/70">;
                    <span className="w-4 h-4">🔧</span>;
                    <span>Token: {getTokenSystemLabel(inst.tokenSystem)}</span>;                  <div className="flex items-center gap-2 text-sm text-white/70">;
                    <span className="w-4 h-4">🔧</span>;
                    <span>Token: {getTokenSystemLabel(inst.tokenSystem)}</span>;
                  </div>;
                </div>;
                <div className="flex items - center justify - between text - xs text-white / 60">;
                  <div className="flex items - center gap-4">;
                    <span>🚀 {inst._count.deployments} deployments</span>;
                    <span>⚡ {inst._count.features} features</span>;
                  </div>;
                  <span className="text-white / 40">;
                    {new Date (inst.created_at).toLocaleDateString ()}
                  </span>;
                </div>;
                <div className="mt - 4 pt - 4 border - t border-white / 10">;
                  <div className="flex gap-2">;
                    <a;
                      className="flex-1 text-center py-2 px-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors";                      className="flex-1 text-center py-2 px-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors";
                    >;
                      Manage;
                    </a>;
                    <a;
                      className="flex-1 text-center py-2 px-3 text-sm border border-white/20 hover:border-white/40 text-white rounded-lg transition-colors";                      className="flex-1 text-center py-2 px-3 text-sm border border-white/20 hover:border-white/40 text-white rounded-lg transition-colors";
                    >;
                      Deployments;
                    </a>;
                  </div>;
                </div>;
        {/* Empty State */}
        {instances.length === 0 && !error && (
          <div className="text - center py-16">;
            <div className="w - 24 h - 24 mx - auto mb - 6 bg - white / 5 rounded - full flex items - center justify-center">;
              <span className="text-4xl">🚀</span>;
            </div>;
            <h3 className="text - 2xl font - semibold mb-4">No Instances Yet</h3>;
            <p className="text - white / 70 mb - 8 max - w-md mx-auto">;
              You haven't deployed any digital economies yet. Start building your first instance to get started.;
            </p>;
            <a href="/multiverse / launch" className="btn-primary">;
              🚀 Launch Your First Economy;
            </a>;
          </div>)}
      </div>;
      {/* Stats Overview */}
      <div className="grid grid - cols - 1 md:grid - cols - 4 gap-6">;
        <div className="card text-center">;
          <div className="text - 3xl font - bold text - blue - 400 mb-2">{instances.length}</div>;
          <div className="text - white / 60 text-sm">Total Instances</div>;
        </div>;
        <div className="card text-center">;
          <div className="text - 3xl font - bold text - green - 400 mb-2">;
            {instances.filter (index => i.is_public).length}
          </div>;
          <div className="text - white / 60 text-sm">Public Instances</div>;
        </div>;
        <div className="card text-center">;
          <div className="text - 3xl font - bold text - purple - 400 mb-2">;
            {instances.filter (index => i.governance_type !== 'ADMIN').length}
          </div>;
          <div className="text - white / 60 text-sm">DAO Instances</div>;
        </div>;
        <div className="card text-center">;
          <div className="text - 3xl font - bold text - orange - 400 mb-2">;
            {instances.reduce ((acc, i) => acc + i._count.deployments, 0)}
          </div>;
          <div className="text - white / 60 text-sm">Total Deployments</div>;
        </div>;
      </div>;
      {/* Instances Grid */}
      {instances.length === 0 ? (
        <div className="card text - center py-12">;
          <div className="text - 6xl mb-4">🚀</div>;
          <h2 className="text - 2xl font - semibold mb-2">No Instances Yet</h2>;
          <p className="text - white / 70 mb-6">;
            Get started by launching your first digital economy instance;
          </p>;
          <a href="/multiverse / launch" className="btn-primary">;
            Launch First Instance;
          </a>;
        </div>) : (
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">;
          {instances.map ((inst) => (
            <div key={inst.id} className="card card-hover">;
              {/* Instance Header */}
                      inst.vertical === 'EDUCATION' ? 'bg-purple-500/20 text-purple-400' :;
                      inst.vertical === 'LAW' ? 'bg-yellow-500/20 text-yellow-400' :;
                      'bg-gray-500/20 text-gray-400';
  );
};