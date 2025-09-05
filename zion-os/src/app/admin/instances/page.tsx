// import { prisma } from &quot;@/lib/prisma&quot;;

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
  let instances: InstanceWithCounts[] = [];
  let error: string | null = null;

  try {
    instances = await prisma.instance.findMany({
      include: {
        daoConfig: true,
        _count: { select: { deployments: true, features: true } }},
      orderBy: { createdAt: &quot;desc&quot; }});
  } catch (err) {
    console.error(&quot;Database connection error:&quot;, err);
    error = &quot;Unable to connect to database&quot;;
  }

  const instances: any[] = []; // Temporary empty array

export default function InstancesPage() {
  return (
    <div className=&quot;min-h-screen py-8 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Header */}
        <div className=&quot;text-center mb-12&quot;>
          <h1 className=&quot;text-4xl font-bold mb-4&quot;>📊 Manage Your Instances</h1>
          <p className=&quot;text-xl text-white/70 max-w-2xl mx-auto&quot;>
            Monitor and manage your deployed digital economies, track performance, and access configuration settings.
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className=&quot;mb-8 p-6 bg-red-900/20 border border-red-500/20 rounded-xl text-center&quot;>
            <div className=&quot;text-red-400 mb-2&quot;>⚠️ Database Connection Error</div>
            <p className=&quot;text-white/70 mb-4&quot;>{error}</p>
            <p className=&quot;text-sm text-white/50&quot;>
              Please ensure your database is properly configured and the DATABASE_URL environment variable is set.
            </p>
          </div>
        )}

        {/* Stats Overview */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6 mb-8&quot;>
          <div className=&quot;glass-effect rounded-xl p-6 text-center&quot;>
            <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>{instances.length}</div>
            <div className=&quot;text-white/70&quot;>Total Instances</div>
          </div>
          <div className=&quot;glass-effect rounded-xl p-6 text-center&quot;>
            <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>
              {instances.filter(i => i.isPublic).length}
            </div>
            <div className=&quot;text-white/70&quot;>Public Instances</div>
          </div>
          <div className=&quot;glass-effect rounded-xl p-6 text-center&quot;>
            <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>
              {instances.reduce((sum, i) => sum + i._count.deployments, 0)}
            </div>
            <div className=&quot;text-white/70&quot;>Total Deployments</div>
          </div>
          <div className=&quot;glass-effect rounded-xl p-6 text-center&quot;>
            <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>
              {instances.reduce((sum, i) => sum + i._count.features, 0)}
            </div>
            <div className=&quot;text-white/70&quot;>Active Features</div>
          </div>
        </div>

        {/* Instances Grid */}
        {instances.length > 0 && (
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {instances.map((inst) => (
              <div key={inst.id} className=&quot;feature-card group hover-lift&quot;>
                <div className=&quot;flex items-start justify-between mb-4&quot;>
                  <div className=&quot;flex items-center gap-3&quot;>
                    <div className={`w-3 h-3 rounded-full ${
                      inst.isPublic ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <div className=&quot;font-semibold text-lg text-white group-hover:text-blue-400 transition-colors&quot;>
                      {inst.name}
                    </div>
                  </div>
                  <span className=&quot;text-xs px-2 py-1 rounded-full bg-white/10 text-white/70&quot;>
                    {inst.vertical}
                  </span>
                </div>
                
                <div className=&quot;space-y-3 mb-4&quot;>
                  <div className=&quot;flex items-center gap-2 text-sm text-white/70&quot;>
                    <span className=&quot;w-4 h-4&quot;>🌐</span>
                    <span className=&quot;truncate&quot;>
                      {inst.domain || inst.subdomain || inst.slug}
                    </span>
                  </div>
                  
                  <div className=&quot;flex items-center gap-2 text-sm text-white/70&quot;>
                    <span className=&quot;w-4 h-4&quot;>🗳️</span>
                    <span>Governance: {getGovernanceLabel(inst.governanceType)}</span>
                  </div>
                  
                  {inst.region && (
                    <div className=&quot;flex items-center gap-2 text-sm text-white/70&quot;>
                      <span className=&quot;w-4 h-4&quot;>📍</span>
                      <span>{inst.region}{inst.country ? `, ${inst.country}` : ''}</span>
                    </div>
                  )}
                  
                  <div className=&quot;flex items-center gap-2 text-sm text-white/70&quot;>
                    <span className=&quot;w-4 h-4&quot;>🔧</span>
                    <span>Token: {getTokenSystemLabel(inst.tokenSystem)}</span>
                  </div>
                </div>
                
                <div className=&quot;flex items-center justify-between text-xs text-white/60&quot;>
                  <div className=&quot;flex items-center gap-4&quot;>
                    <span>🚀 {inst._count.deployments} deployments</span>
                    <span>⚡ {inst._count.features} features</span>
                  </div>
                  <span className=&quot;text-white/40&quot;>
                    {new Date(inst.createdAt).toLocaleDateString()}
                  </span>
                </div>
                
                <div className=&quot;mt-4 pt-4 border-t border-white/10&quot;>
                  <div className=&quot;flex gap-2&quot;>
                    <a 
                      href={`/admin/instances/${inst.id}`} 
                      className=&quot;flex-1 text-center py-2 px-3 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors&quot;
                    >
                      Manage
                    </Link>
                    <a 
                      href={`/admin/instances/${inst.id}/deployments`} 
                      className=&quot;flex-1 text-center py-2 px-3 text-sm border border-white/20 hover:border-white/40 text-white rounded-lg transition-colors&quot;
                    >
                      Deployments
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {instances.length === 0 && !error && (
          <div className=&quot;text-center py-16&quot;>
            <div className=&quot;w-24 h-24 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center&quot;>
              <span className=&quot;text-4xl&quot;>🚀</span>
            </div>
            <h3 className=&quot;text-2xl font-semibold mb-4&quot;>No Instances Yet</h3>
            <p className=&quot;text-white/70 mb-8 max-w-md mx-auto&quot;>
              You haven't deployed any digital economies yet. Start building your first instance to get started.
            </p>
            <a href=&quot;/multiverse/launch&quot; className=&quot;btn-primary&quot;>
              🚀 Launch Your First Economy
            </Link>
          </div>
        )}
      </div>

      {/* Stats Overview */}
      <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6&quot;>
        <div className=&quot;card text-center&quot;>
          <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>{instances.length}</div>
          <div className=&quot;text-white/60 text-sm&quot;>Total Instances</div>
        </div>
        <div className=&quot;card text-center&quot;>
          <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>
            {instances.filter(i => i.isPublic).length}
          </div>
          <div className=&quot;text-white/60 text-sm&quot;>Public Instances</div>
        </div>
        <div className=&quot;card text-center&quot;>
          <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>
            {instances.filter(i => i.governanceType !== 'ADMIN').length}
          </div>
          <div className=&quot;text-white/60 text-sm&quot;>DAO Instances</div>
        </div>
        <div className=&quot;card text-center&quot;>
          <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>
            {instances.reduce((acc, i) => acc + i._count.deployments, 0)}
          </div>
          <div className=&quot;text-white/60 text-sm&quot;>Total Deployments</div>
        </div>
      </div>

      {/* Instances Grid */}
      {instances.length === 0 ? (
        <div className=&quot;card text-center py-12&quot;>
          <div className=&quot;text-6xl mb-4&quot;>🚀</div>
          <h2 className=&quot;text-2xl font-semibold mb-2&quot;>No Instances Yet</h2>
          <p className=&quot;text-white/70 mb-6&quot;>
            Get started by launching your first digital economy instance
          </p>
          <a href=&quot;/multiverse/launch&quot; className=&quot;btn-primary&quot;>
            Launch First Instance
          </Link>
        </div>
      ) : (
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {instances.map((inst) => (
            <div key={inst.id} className=&quot;card card-hover&quot;>
              {/* Instance Header */}
              <div className=&quot;flex items-start justify-between mb-4&quot;>
                <div className=&quot;flex-1&quot;>
                  <h3 className=&quot;text-xl font-semibold text-white mb-1&quot;>{inst.name}</h3>
                  <div className=&quot;flex items-center space-x-2 mb-2&quot;>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      inst.vertical === 'GENERAL' ? 'bg-blue-500/20 text-blue-400' :
                      inst.vertical === 'HEALTH' ? 'bg-green-500/20 text-green-400' :
                      inst.vertical === 'EDUCATION' ? 'bg-purple-500/20 text-purple-400' :
                      inst.vertical === 'LAW' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {inst.vertical}
                    </span>
                    {inst.isPublic && (
                      <span className=&quot;px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400&quot;>
                        Public
                      </span>
                    )}
                  </div>
                </div>
                <div className=&quot;w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center&quot;>
                  <span className=&quot;text-white font-bold text-xs&quot;>Z</span>
                </div>
              </div>

              {/* Instance Details */}
              <div className=&quot;space-y-3 mb-4&quot;>
                <div className=&quot;flex items-center space-x-2 text-sm text-white/70&quot;>
                  <span>🌐</span>
                  <span>{inst.domain || inst.subdomain || inst.slug}</span>
                </div>
                
                <div className=&quot;flex items-center space-x-2 text-sm text-white/70&quot;>
                  <span>🏛️</span>
                  <span>Governance: {inst.governanceType}</span>
                </div>
                
                {inst.region && (
                  <div className=&quot;flex items-center space-x-2 text-sm text-white/70&quot;>
                    <span>📍</span>
                    <span>{inst.region}{inst.country ? `, ${inst.country}` : ''}</span>
                  </div>
                )}
                
                <div className=&quot;flex items-center space-x-2 text-sm text-white/70&quot;>
                  <span>💎</span>
                  <span>Token: {inst.tokenSystem}</span>
                </div>
              </div>

              {/* Stats */}
              <div className=&quot;grid grid-cols-2 gap-4 mb-4&quot;>
                <div className=&quot;text-center p-3 rounded-lg bg-white/5&quot;>
                  <div className=&quot;text-lg font-semibold text-blue-400&quot;>{inst._count.deployments}</div>
                  <div className=&quot;text-xs text-white/60&quot;>Deployments</div>
                </div>
                <div className=&quot;text-center p-3 rounded-lg bg-white/5&quot;>
                  <div className=&quot;text-lg font-semibold text-green-400&quot;>{inst._count.features}</div>
                  <div className=&quot;text-xs text-white/60&quot;>Features</div>
                </div>
              </div>

              {/* Actions */}
              <div className=&quot;flex space-x-2&quot;>
                <a 
                  href={`/admin/instances/${inst.id}`} 
                  className=&quot;flex-1 btn-secondary text-center text-sm py-2&quot;
                >
                  Manage
                </Link>
                <a 
                  href={`/admin/instances/${inst.id}/deployments`} 
                  className=&quot;flex-1 btn-secondary text-center text-sm py-2&quot;
                >
                  Deployments
                </Link>
              </div>

              {/* Created Date */}
              <div className=&quot;text-xs text-white/40 mt-3 pt-3 border-t border-white/10&quot;>
                Created: {new Date(inst.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className=&quot;card text-center py-8&quot;>
        <h2 className=&quot;text-2xl font-semibold mb-4&quot;>Quick Actions</h2>
        <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
          <a href=&quot;/multiverse/launch&quot; className=&quot;btn-primary&quot;>
            🚀 Launch New Instance
          </Link>
          <a href=&quot;/admin/os-deploy&quot; className=&quot;btn-secondary&quot;>
            ⚙️ Advanced Deployment
          </Link>
        </div>
      </div>

      {/* Admin Navigation */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          <div className=&quot;bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105&quot;>
            <div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
              <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot; />
              </svg>
            </div>
            <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>AI Systems Management</h3>
            <p className=&quot;text-gray-300 mb-4&quot;>
              Monitor and manage your deployed AI autonomous systems and their performance.
            </p>
            <Link href=&quot;/admin/ai-systems&quot; className=&quot;text-blue-400 hover:text-blue-300 font-medium&quot;>
              Manage Systems →
            </Link>
          </div>

          <div className=&quot;bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105&quot;>
            <div className=&quot;w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
              <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
              </svg>
            </div>
            <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Quantum Computing</h3>
            <p className=&quot;text-gray-300 mb-4&quot;>
              Access and manage your quantum computing resources and algorithms.
            </p>
            <Link href=&quot;/admin/quantum&quot; className=&quot;text-green-400 hover:text-green-300 font-medium&quot;>
              Quantum Dashboard →
            </Link>
          </div>

          <div className=&quot;bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105&quot;>
            <div className=&quot;w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
              <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z&quot; />
              </svg>
            </div>
            <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Research & Development</h3>
            <p className=&quot;text-gray-300 mb-4&quot;>
              Access research tools and development environments for AI consciousness evolution.
            </p>
            <Link href=&quot;/admin/research&quot; className=&quot;text-purple-400 hover:text-purple-300 font-medium&quot;>
              Research Tools →
            </Link>
          </div>

          <div className=&quot;bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105&quot;>
            <div className=&quot;w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
              <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
              </svg>
            </div>
            <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Security & Compliance</h3>
            <p className=&quot;text-gray-300 mb-4&quot;>
              Monitor security protocols and ensure compliance with AI governance frameworks.
            </p>
            <Link href=&quot;/admin/security&quot; className=&quot;text-orange-400 hover:text-orange-300 font-medium&quot;>
              Security Dashboard →
            </Link>
          </div>

          <div className=&quot;bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105&quot;>
            <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
              <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1&quot; />
              </svg>
            </div>
            <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Business Intelligence</h3>
            <p className=&quot;text-gray-300 mb-4&quot;>
              Access comprehensive business analytics and performance metrics.
            </p>
            <Link href=&quot;/admin/analytics&quot; className=&quot;text-cyan-400 hover:text-cyan-300 font-medium&quot;>
              Analytics Dashboard →
            </Link>
          </div>

          <div className=&quot;bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105&quot;>
            <div className=&quot;w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
              <svg className=&quot;w-8 h-8 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z&quot; />
                <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot; />
              </svg>
            </div>
            <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>System Settings</h3>
            <p className=&quot;text-gray-300 mb-4&quot;>
              Configure system parameters and customize your AI platform settings.
            </p>
            <Link href=&quot;/admin/settings&quot; className=&quot;text-indigo-400 hover:text-indigo-300 font-medium&quot;>
              System Settings →
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20&quot;>
        <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center&quot;>System Overview</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6&quot;>
          <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center&quot;>
            <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>12</div>
            <div className=&quot;text-lg font-semibold text-white mb-2&quot;>Active AI Systems</div>
            <p className=&quot;text-gray-300 text-sm&quot;>Running autonomously</p>
          </div>
          <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center&quot;>
            <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>99.9%</div>
            <div className=&quot;text-lg font-semibold text-white mb-2&quot;>Uptime</div>
            <p className=&quot;text-gray-300 text-sm&quot;>System reliability</p>
          </div>
          <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center&quot;>
            <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>24/7</div>
            <div className=&quot;text-lg font-semibold text-white mb-2&quot;>Monitoring</div>
            <p className=&quot;text-gray-300 text-sm&quot;>Active surveillance</p>
          </div>
          <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 text-center&quot;>
            <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>5</div>
            <div className=&quot;text-lg font-semibold text-white mb-2&quot;>Quantum Nodes</div>
            <p className=&quot;text-gray-300 text-sm&quot;>Processing power</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
        <div className=&quot;bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12&quot;>
          <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>
            Need Technical Support?
          </h2>
          <p className=&quot;text-xl text-gray-300 mb-8&quot;>
            Our expert team is available 24/7 to help you manage and optimize your AI systems.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <Link href=&quot;/contact&quot; className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105&quot;>
              Contact Support
            </Link>
            <Link href=&quot;/services&quot; className=&quot;border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10&quot;>
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {instances.length === 0 && (
        <div className=&quot;text-center py-16&quot;>
          <div className=&quot;w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full&quot;>
            <Globe className=&quot;w-8 h-8 text-white/40&quot; />
          </div>
          <h3 className=&quot;text-lg font-medium text-white/60 mb-2&quot;>No instances yet</h3>
          <p className=&quot;text-white/40 mb-6&quot;>Create your first Zion ecosystem to get started</p>
          <a 
            href=&quot;/admin/os-deploy&quot; 
            className=&quot;inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200&quot;
          >
            <Rocket className=&quot;w-4 h-4&quot; />
            Deploy First Instance
          </Link>
        </div>
      )}
    </div>
  );
}

function getGovernanceLabel(type: string) {
  switch (type) {
    case &quot;ADMIN&quot;: return &quot;Admin Control&quot;;
    case &quot;DAO_LITE&quot;: return &quot;DAO-lite&quot;;
    case &quot;DAO_FULL&quot;: return &quot;Full DAO&quot;;
    default: return type;
  }
}

function getTokenSystemLabel(type: string) {
  switch (type) {
    case &quot;SHARED&quot;: return &quot;ZION$ Shared&quot;;
    case &quot;LOCAL&quot;: return &quot;Local Token&quot;;
    default: return type;
  }
}