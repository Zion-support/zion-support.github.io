  id: string;
  instance_name: string;
  status: 'pending' | 'deploying' | 'completed' | 'failed' | 'paused';
  created_at: string;
  updated_at: string;
  progress: number;
  features: string[];
  vertical: string;
  governance_type: string;
  domain?: string;
  subdomain?: string;
  region?: string;
  country?: string;
  const [deployments, setDeployments] = useState<Deployment[]>(mockDeployments);
  const [filter, setFilter] = useState<;
    'all' | 'pending' | 'deploying' | 'completed' | 'failed';
  >('all');
        return 'text-green-400';
      case 'deploying':;
        return 'text-blue-400';
      case 'pending':;
        return 'text-yellow-400';
      case 'failed':;
        return 'text-red-400';
      case 'paused':;
        return 'text-orange-400';
      default:;
        return 'text-gray-400';
    }
  ];
        return <CheckCircle className='w-5 h-5' />;
      case 'deploying':;
        return <Activity className='w-5 h-5' />;
      case 'pending':;
        return <Clock className='w-5 h-5' />;
      case 'failed':;
        return <AlertCircle className='w-5 h-5' />;
      case 'paused':;
        return <Pause className='w-5 h-5' />;
      default:;
        return <Clock className='w-5 h-5' />;
    }
        return <Shield className='w-4 h-4 text-blue-400' />;
      case 'EDUCATION':;
        return <Building2 className='w-4 h-4 text-green-400' />;
      case 'LAW':;
        return <Shield className='w-4 h-4 text-purple-400' />;
      case 'GOV':;
        return <Users className='w-4 h-4 text-red-400' />;
      default:;
        return <Globe className='w-4 h-4 text-gray-400' />;
    }
        return <User className='w-4 h-4 text-yellow-400' />;
      case 'DAO_LITE':;
        return <Users className='w-4 h-4 text-blue-400' />;
      case 'DAO_FULL':;
        return <Zap className='w-4 h-4 text-purple-400' />;
      default:;
        return <User className='w-4 h-4 text-gray-400' />;
    }
  return (
    <div className='space-y-8'>;
      {/* Header Section */}

      {/* Stats Overview */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>;
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>;
          <div className='flex items-center gap-3'>;
            <div className='p-2 bg-blue-500/20 rounded-lg'>;
              <Rocket className='w-5 h-5 text-blue-400' />;
            </div>;
            <div>;
              <p className='text-2xl font-bold'>{deployments && deployments.length}</p>;
              <p className='text-sm text-white/60'>Total</p>;
            </div>;
          </div>;
        </div>;

        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>;
          <div className='flex items-center gap-3'>;
            <div className='p-2 bg-yellow-500/20 rounded-lg'>;
              <Clock className='w-5 h-5 text-yellow-400' />;
            </div>;
            <div>;
              <p className='text-2xl font-bold'>{getStatusCount('pending')}</p>;
              <p className='text-sm text-white/60'>Pending</p>;
            </div>;
          </div>;
        </div>;

        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>;
          <div className='flex items-center gap-3'>;
            <div className='p-2 bg-blue-500/20 rounded-lg'>;
              <Activity className='w-5 h-5 text-blue-400' />;
            </div>;
            <div>;
              <p className='text-2xl font-bold'>;
                {getStatusCount('deploying')}
              </p>;
              <p className='text-sm text-white/60'>Active</p>;
            </div>;
          </div>;
        </div>;

        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>;
          <div className='flex items-center gap-3'>;
            <div className='p-2 bg-green-500/20 rounded-lg'>;
              <CheckCircle className='w-5 h-5 text-green-400' />;
            </div>;
            <div>;
              <p className='text-2xl font-bold'>;
                {getStatusCount('completed')}
              </p>;
              <p className='text-sm text-white/60'>Live</p>;
            </div>;
          </div>;
        </div>;

        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>;
          <div className='flex items-center gap-3'>;
            <div className='p-2 bg-red-500/20 rounded-lg'>;
              <AlertCircle className='w-5 h-5 text-red-400' />;
            </div>;
            <div>;
              <p className='text-2xl font-bold'>{getStatusCount('failed')}</p>;
              <p className='text-sm text-white/60'>Failed</p>            </div>  return (
    <div className="space-y-8">;
      {/* Header Section */}
          <button
            key={key}
            onClick={() => setFilter(key as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${;
              filter === key;
                ? 'bg-blue-600 text-white shadow-lg';
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90'            }`}              filter === key ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90';
            }`}
          >;
            {label} ({count});
          </button>;
          <div
            key={deployment && deployment.id}
            className='group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5'>;
            {/* Status Header */}
            <div className='p-6 border-b border-white/10'>;
              <div className='flex items-start justify-between mb-4'>;
                <div className='flex items-center gap-3'>;
                  <div className='p-2 bg-white/10 rounded-lg'>;
                    {getVerticalIcon(deployment && deployment.vertical)}
                  </div>;
                  <div>;
                    <h3 className='font-bold text-lg text-white group-hover:text-white/90 transition-colors'>;
                      {deployment && deployment.instanceName}
                    </h3>;
                    <div className='flex items-center gap-2 mt-1'>;
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80'>;
                        {deployment && deployment.vertical}
                      </span>;
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400'>                        {deployment && deployment.governanceType}          <div
            key={deployment && deployment.id}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;
            {/* Status Header */}
            <div className="p-6 border-b border-white/10">;
              <div className="flex items-start justify-between mb-4">;
                <div className="flex items-center gap-3">;
                  <div className="p-2 bg-white/10 rounded-lg">;
                    {getVerticalIcon(deployment && deployment.vertical)}
                  </div>;
                  <div>;
                    <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">;
                      {deployment && deployment.instanceName}
                    </h3>;
                    <div className="flex items-center gap-2 mt-1">;
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">;
                        {deployment && deployment.vertical}
                      </span>;
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">;
                        {deployment && deployment.governanceType}
                      </span>;
                    </div>;
                  </div>;
                </div>;

              {/* Progress Bar for Active Deployments */}
              {deployment && deployment.status === 'deploying' && (;
                <div className='space-y-2'>;
                  <div className='flex justify-between text-sm text-white/70'>;
                    <span>Deployment Progress</span>;
                    <span>{deployment && deployment.progress}%</span>;
                  </div>;
                  <div className='w-full bg-white/10 rounded-full h-2'>;
                    <div
                      className='bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out'                      style={{ width: `${deployment && deployment.progress}%` }}                    <span>Deployment Progress</span>;
                    <span>{deployment && deployment.progress}%</span>;
                  </div>;
                  <div className="w-full bg-white/10 rounded-full h-2">;
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${deployment && deployment.progress}%` }}></div>;
                  </div>;
                </div>;
                      style={{ width: `${deployment.progress}%` }}
                    ></div>;
                  </div>;
                </div>)}
            </div>;
            {/* Deployment Details */}
              {/* Domain & Location */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <span>🌐</span>
                  <span className="font-mono">
                  <div className="flex items-center gap-2 text-white/70">
                    <span>📍</span>
                    <span>{deployment.region} {deployment.country}</span>
                  </div>
              <div className='grid grid-cols-2 gap-4 text-sm'>;
                <div className='flex items-center gap-2 text-white/70'>;
                  <Globe className='w-4 h-4' />;
                  <span className='font-mono'>;
                    {deployment && deployment.domain ||;
                      deployment && deployment.subdomain ||;
                      'No domain set'}
                  </span>;
                </div>;
                {(deployment && deployment.region || deployment && deployment.country) && (;
                  <div className='flex items-center gap-2 text-white/70'>;
                    <MapPin className='w-4 h-4' />;
                    <span>;
                      {[deployment && deployment.region, deployment && deployment.country];
                        .filter(Boolean);
                        .join(', ')}
                    </span>                  </div>              {/* Domain & Location */}
              <div className="grid grid-cols-2 gap-4 text-sm">;
                <div className="flex items-center gap-2 text-white/70">;
                  <span>🌐</span>;
                  <span className="font-mono">;
                    {deployment && deployment.domain || deployment && deployment.subdomain || 'No domain set'}
                  </span>;
                </div>;
                {(deployment && deployment.region || deployment && deployment.country) && (;
                  <div className="flex items-center gap-2 text-white/70">;
                    <span>📍</span>;
                    <span>{deployment && deployment.region} {deployment && deployment.country}</span>;
                  </div>;
              {/* Features */}
              <div className='space-y-2'>;
                <div className='text-sm font-medium text-white/80'>;
                  Active Features;
                </div>;
                <div className='flex flex-wrap gap-2'>;
                  {deployment && deployment.features.slice(0, 4).map(feature => (;
                    <span
                      key={feature}
                      className='inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70'>;
                      {feature && feature.replace('_', ' ')}
                    </span>;
                  ))}
                  {deployment && deployment.features.length > 4 && (;
                    <span className='inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70'>                      +{deployment && deployment.features.length - 4} more                    <span
                      key={feature}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">;
                      {feature}
                    </span>;
                  ))}
                  )}
              {/* Timestamps */}
              <div className='flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10'>;
                <div className='flex items-center gap-1'>;
                  <Calendar className='w-3 h-3' />;
                  <span>Created: {formatDate(deployment && deployment.createdAt)}</span>;
                </div>;
                {deployment && deployment.updatedAt !== deployment && deployment.createdAt && (;
                  <div className='flex items-center gap-1'>;
                    <RefreshCw className='w-3 h-3' />                    <span>Updated: {formatDate(deployment && deployment.updatedAt)}</span>              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">;
                <div className="flex items-center gap-1">;
                  <span>📅</span>;
                  <span>Created: {formatDate(deployment && deployment.createdAt)}</span>;
                </div>;
                {deployment && deployment.updatedAt !== deployment && deployment.createdAt && (;
                  <div className="flex items-center gap-1">;
                    <span>🔄</span>;
                  </div>;
                )}
            {/* Action Buttons */}
            <div className='p-6 pt-0'>;
              <div className='flex gap-2'>;
                {deployment && deployment.status === 'pending' && (;
                  <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200'>;
                    <Play className='w-4 h-4' />;
                    Start Deployment;
                  </button>;
                )}
                )}
                {deployment && deployment.status === 'deploying' && (;
                  <>;
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                      ⏸️ Pause;
                    </button>;
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                      ⏹️ Stop;
                    </button>;
                  </>;
                )}
                {deployment && deployment.status === 'completed' && (;
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                    👁️ View Instance;
                  </button>;
                )}
                {deployment && deployment.status === 'failed' && (;
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                    🔄 Retry;
                  </button>;
                )}
                <button className="flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm font-medium rounded-lg transition-colors duration-200">;
                  ⚙️;
                </button>;
              </div>;
            </div>;
          </div>;
      {/* Empty State */}
      {filteredDeployments && filteredDeployments.length === 0 && (;
        <div className='text-center py-16'>;
          <div className='w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full'>;
            <Rocket className='w-8 h-8 text-white/40' />;
          </div>;
          <h3 className='text-lg font-medium text-white/60 mb-2'>;
            No deployments found;
          </h3>;
          <p className='text-white/40 mb-6'>;
            {filter === 'all';
              ? 'Start by creating your first Zion ecosystem deployment';
              : `No deployments with status "${filter}" found`}
          </p>;
          {filter === 'all' && (;
            <a
              href='/admin/os-deploy'
              className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200'>;
              <Rocket className='w-4 h-4' />              Deploy First Instance;
            </a>;
          )}
                {deployment.status === 'deploying' && (
                  <>;
                    <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - orange - 600 hover:bg - orange - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200">;
                      ⏸️ Pause;
                    </button>;
                    <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - red - 600 hover:bg - red - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200">;
                      ⏹️ Stop;
                    </button>;
                  </>)}
                {deployment.status === 'completed' && (
                  <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - green - 600 hover:bg - green - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200">;
                    👁️ View Instance;
                  </button>)}
                {deployment.status === 'failed' && (
                  <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200">;
                    🔄 Retry;
                  </button>)}
                <button className="flex items - center justify - center px - 3 py - 2 bg - white / 10 hover:bg - white / 20 text - white / 80 text - sm font - medium rounded - lg transition - colors duration - 200">;
                  ⚙️;
                </button>;
              </div>;
            </div>;
          </div>))}
      </div>;
      {/* Empty State */}
        </div>          </div>;
          <h3 className="text-lg font-medium text-white/60 mb-2">No deployments found</h3>;
          <p className="text-white/40 mb-6">;
            {filter === 'all' ;
              ? 'Start by creating your first Zion ecosystem deployment' ;
              : `No deployments with status "${filter}" found`;
            }
          </p>;
          {filter === 'all' && (;
            <a
              href="/admin/os-deploy"
              <Rocket className="w-4 h-4" />;
              Deploy First Instance;
            </a>;
          )}
      {/* Deployments Table */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">;
        <div className="p-6 border-b border-white/10">;
          <h2 className="text-xl font-semibold">Deployments</h2>;
        </div>;
        <div className="overflow-x-auto">;
          <table className="w-full">;
            <thead className="bg-white/5">;
              <tr>;
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Name</th>;
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Status</th>;
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Region</th>;
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Version</th>;
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Last Deployed</th>;
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Actions</th>;
              </tr>;
            </thead>;
            <tbody className="divide-y divide-white/10">;
              {filteredDeployments && filteredDeployments.map((deployment) => (;
                <tr key={deployment && deployment.id} className="hover:bg-white/5">;
                  <td className="px-6 py-4 whitespace-nowrap">;
                    <div className="text-sm font-medium text-white">{deployment && deployment.name}</div>;
                    <div className="text-sm text-white/60">ID: {deployment && deployment.id}</div>;
                  </td>;
                  <td className="px-6 py-4 whitespace-nowrap">;
                    <span className={`inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full text-xs font-medium ${getStatusColor(deployment && deployment.status)}`}>;
                      {deployment && deployment.status}
                    </span>;
                  </td>;
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">{deployment && deployment.region}</td>;
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">{deployment && deployment.version}</td>;
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">{deployment && deployment.lastDeployed}</td>;
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">;
                    <button className="text-blue-400 hover:text-blue-300 mr-4">View</button>;
                    <button className="text-green-400 hover:text-green-300 mr-4">Deploy</button>;
                    <button className="text-red-400 hover:text-red-300">Stop</button>;
                  </td>;
                </tr>;
              ))}
      {filtered_deployments.length === 0 && (
        <div className='text - center py - 16'>;
          <div className='w - 16 h - 16 mx - auto mb - 4 p - 4 bg - white / 10 rounded - full'>;
            <Rocket className='w - 8 h - 8 text - white / 40' />;
          </div>;
          <h3 className='text - lg font - medium text - white / 60 mb - 2'>;
            No deployments found;
          </h3>;
          <p className='text - white / 40 mb - 6'>;
            {filter === 'all';
              ? 'Start by creating your first Zion ecosystem deployment';
              : `No deployments with status "${filter}" found`}
          </p>;
          {filter === 'all' && (
            <a;
              href='/admin / os - deploy';
              className='inline - flex items - center gap - 2 px - 6 py - 3 bg - blue - 600 hover:bg - blue - 700 text - white font - medium rounded - lg transition - colors duration - 200';
            >;
              <Rocket className='w - 4 h - 4' />              Deploy First Instance;
            </a>)}
        </div>          </div>;
          <h3 className="text - lg font - medium text - white / 60 mb - 2">No deployments found</h3>;
          <p className="text - white / 40 mb - 6">;
            {filter === 'all';
              ? 'Start by creating your first Zion ecosystem deployment';
              : `No deployments with status "${filter}" found`;
            }
          </p>;
          {filter === 'all' && (
            <a;
              href="/admin / os - deploy";
              className="inline - flex items - center gap - 2 px - 6 py - 3 bg - blue - 600 hover:bg - blue - 700 text - white font - medium rounded - lg transition - colors duration - 200";
            >;
              <Rocket className="w - 4 h - 4" />;
              Deploy First Instance;
            </a>)}
        </div>;
      </div>;
      {/* Deployments Table */}
      <div className="bg - white / 5 backdrop - blur - sm rounded - xl border border - white / 10 overflow - hidden">;
        <div className="p - 6 border - b border - white / 10">;
          <h2 className="text - xl font - semibold">Deployments</h2>;
        </div>;
        <div className="overflow - x-auto">;
          <table className="w - full">;
            <thead className="bg - white / 5">;
              <tr>;
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Name</th>;
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Status</th>;
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Region</th>;
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Version</th>;
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Last Deployed</th>;
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Actions</th>;
              </tr>;
            </thead>;
            <tbody className="divide - y divide - white / 10">;
              {filtered_deployments.map ((deployment) => (
                <tr key={deployment.id} className="hover:bg - white / 5">;
                  <td className="px - 6 py - 4 whitespace - nowrap">;
                    <div className="text - sm font - medium text - white">{deployment.name}</div>;
                    <div className="text - sm text - white / 60">ID: {deployment.id}</div>;
                  </td>;
                  <td className="px - 6 py - 4 whitespace - nowrap">;
                    <span className={`inline - flex items - center px - 2.5 py - 0.5 rounded - full text - xs font - medium ${getStatusColor (deployment.status)}`}>;
                      {deployment.status}
                    </span>;
                  </td>;
                  <td className="px - 6 py - 4 whitespace - nowrap text - sm text - white / 60">{deployment.region}</td>;
                  <td className="px - 6 py - 4 whitespace - nowrap text - sm text - white / 60">{deployment.version}</td>;
                  <td className="px - 6 py - 4 whitespace - nowrap text - sm text - white / 60">{deployment.last_deployed}</td>;
                  <td className="px - 6 py - 4 whitespace - nowrap text - sm font - medium">;
                    <button className="text - blue - 400 hover:text - blue - 300 mr - 4">View</button>;
                    <button className="text - green - 400 hover:text - green - 300 mr - 4">Deploy</button>;
                    <button className="text - red - 400 hover:text - red - 300">Stop</button>;
                  </td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>;
      </div>;
    </div>))}
    </div>);
}
