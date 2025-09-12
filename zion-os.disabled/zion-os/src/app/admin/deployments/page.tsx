  Rocket
  Clock
  CheckCircle
  AlertCircle
  Play
  Eye
  Settings
  Globe
  Activity
  Calendar
  User
  Building2
  Shield
  TrendingUp
  Users
  Zap
  Sparkles
  ArrowRight
  RefreshCw
  Pause
  StopCircle
  MapPin
  Rocket,
  Clock,
  CheckCircle,
  AlertCircle,
  Play,
  Eye,
  Settings,
  Globe,
  Activity,
  Calendar,
  User,
  Building2,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Pause,
  StopCircle,
  MapPin,;
} from 'lucide-react';

interface Deployment {
  id: string;
  instanceName: string;
  vertical: string;
  governanceType: string;
  status: 'pending' | 'deploying' | 'completed' | 'failed';
  progress: number;
  domain?: string;
  subdomain?: string;
  region?: string;
  country?: string;

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
    <div className="space-y-8">
      {/* Header Section */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Deployment Management
        </h1>
        <p className="text-white/70 mt-2">Monitor and manage your Zion ecosystem deployments</p>
      </div>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Rocket className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{deployments.length}</p>
              <p className="text-sm text-white/60">Total</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Clock className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount('pending')}</p>
              <p className="text-sm text-white/60">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <CheckCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount('deploying')}</p>
              <p className="text-sm text-white/60">Active</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount('completed')}</p>
              <p className="text-sm text-white/60">Live</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount('failed')}</p>
              <p className="text-sm text-white/60">Failed</p>
            </div>
          </div>
        </div>
      </div>
      {/* Filter Tabs */}          <div
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
        ))}
      </div>
      {/* Deployments Grid */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
        {filteredDeployments.map(deployment => (
          <div
            key={deployment.id}
            className='group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5'
          >
            {/* Status Header */}
            <div className='p-6 border-b border-white/10'>
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-white/10 rounded-lg'>
                    {getVerticalIcon(deployment.vertical)}
                  </div>
                  <div>
                    <h3 className='font-bold text-lg text-white group-hover:text-white/90 transition-colors'>
                      {deployment.instanceName}
                    </h3>
                    <div className='flex items-center gap-2 mt-1'>
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80'>
                        {deployment.vertical}
                      </span>
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400'>                        {deployment.governanceType}          <div
            key={deployment.id}
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
          >
            {/* Status Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {getVerticalIcon(deployment.vertical)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">
                      {deployment.instanceName}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">
                        {deployment.vertical}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                        {deployment.governanceType}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  {getStatusIcon(deployment.status)}
                  <span
                    className={`text-sm font-medium ${getStatusColor(deployment.status)}`}
                  >
                    {deployment.status.charAt(0).toUpperCase() +
                      deployment.status.slice(1)}                  </span>                <div className="flex items-center gap-2">
                  {getStatusIcon(deployment.status)}
                  <span className={`text-sm font-medium ${getStatusColor(deployment.status)}`}>
                    {deployment.status.charAt(0).toUpperCase() + deployment.status.slice(1)}
                </div>
              </div>
              {/* Progress Bar for Active Deployments */}
              {deployment.status === 'deploying' && (
                <div className='space-y-2'>
                  <div className='flex justify-between text-sm text-white/70'>
                    <span>Deployment Progress</span>
                    <span>{deployment.progress}%</span>
                  </div>
                  <div className='w-full bg-white/10 rounded-full h-2'>
                    <div
                      className='bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out'                      style={{ width: `${deployment.progress}%` }}                    <span>Deployment Progress</span>
                    <span>{deployment.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${deployment.progress}%` }}
                    ></div>
                  </div>
                </div>      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">;
        {filteredDeployments.map((deployment) => (;
          <div key={deployment.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;
            {/* Status Header */}                      </span>;
                    </div>;
                  </div>;
                </div>;
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
              )}
            </div>
            {/* Deployment Details */}
              {/* Domain & Location */}
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div className='flex items-center gap-2 text-white/70'>
                  <Globe className='w-4 h-4' />
                  <span className='font-mono'>
                    {deployment.domain |
                      deployment.subdomain |
                      'No domain set'}
                  </span>
                </div>
                {(deployment.region |deployment.country) && (
                  <div className='flex items-center gap-2 text-white/70'>
                    <MapPin className='w-4 h-4' />
                    <span>
                      {[deployment.region, deployment.country]
                        .filter(Boolean)
                        .join(', ')}
                    </span>                  </div>              {/* Domain & Location */}
                      style={{ width: `${deployment.progress}%` }}                      style={{ width: `${deployment.progress}%` }}
                    ></div>;
                  </div>;
                </div>)}
            </div>;
            {/* Deployment Details */}
              {/* Domain & Location */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <span></span>
                  <span className="font-mono">
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>
                </div>
                {(deployment.region || deployment.country) && (
                  <div className="flex items-center gap-2 text-white/70">
                    <span></span>
                    <span>{deployment.region} {deployment.country}</span>
                  </div>              <div className='grid grid-cols-2 gap-4 text-sm'>;
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
                      key={feature}
                      className='inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70'
                    >
                      {feature.replace('_', ' ')}
                    </span>
                  ))}
                  )}
              )}
            </div>
            {/* Deployment Details */}
            <div className='p-6 space-y-4'>
              {/* Domain & Location */}
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div className='flex items-center gap-2 text-white/70'>
                  <Globe className='w-4 h-4' />
                  <span className='font-mono'>
                    {deployment.domain |
                      deployment.subdomain |
                      'No domain set'}
                  </span>
                </div>
                {(deployment.region |deployment.country) && (                  <div className='flex items-center gap-2 text-white/70'>
                    <MapPin className='w-4 h-4' />
                    <span>
                      {[deployment.region, deployment.country]
                        .filter(Boolean)
                        .join(', ')}
                    </span>                  </div>              {/* Domain & Location */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <span>🌐</span>
                  <span className="font-mono">
                    {deployment.domain |deployment.subdomain |'No domain set'}
                  </span>
                </div>
                {(deployment.region |deployment.country) && (                  <div className="flex items-center gap-2 text-white/70">
                    <span>📍</span>
                    <span>{deployment.region} {deployment.country}</span>
                  </div>                  )}

                </div>;
              </div>;

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

                </div>;
              </div>;

              {/* Timestamps */}
                <div className="flex items-center gap-1">
                  <span>📅</span>
                  <span>Created: {formatDate(deployment.createdAt)}</span>
                </div>
                {deployment.updatedAt !== deployment.createdAt && (
                  <div className="flex items-center gap-1">
                    <span>🔄</span>
                    <span>Updated: {formatDate(deployment.updatedAt)}</span>
                  </div>              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">;
                <div className="flex items-center gap-1">;
                  <Calendar className="w-3 h-3" />;
                  <span>Created: {formatDate(deployment.createdAt)}</span>;
                </div>;
                {deployment.updatedAt !== deployment.createdAt && (;
                  <div className="flex items-center gap-1">;
                    <RefreshCw className="w-3 h-3" />;
                    <span>Updated: {formatDate(deployment.updatedAt)}</span>;
                  </div>;
                )}
            {/* Action Buttons */}
                )}                )}

              </div>;
            </div>;

            {/* Action Buttons */}
                )}                  <>;
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

        ))}

      </div>;

      {/* Empty State */}
              : `No deployments with status "${filter}" found`}
          </p>;
          {filter === 'all' && (;
            <a
              href='/admin/os-deploy'
              className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200'>;
              <Rocket className='w-4 h-4' />              Deploy First Instance;
            </a>;
          )}
  );
}
      {filteredDeployments.length === 0 && (;
        <div className="text-center py-16">;
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">;
            <Rocket className="w-8 h-8 text-white/40" />;
          </div>;                {deployment.status === 'pending' && (
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    ▶️ Start Deployment
                  </button>
                )}
            <div className='p - 6 space - y-4'>;
              {/* Domain & Location */}
              <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                <div className='flex items - center gap - 2 text - white / 70'>;
                  <Globe className='w - 4 h - 4' />;
                  <span className='font - mono'>;
                    {deployment.domain ||;
                      deployment.subdomain ||;
                      'No domain set'}
                  </span>;
                </div>;
                {(deployment.region || deployment.country) && (
                  <div className='flex items - center gap - 2 text - white / 70'>;
                    <MapPin className='w - 4 h - 4' />;
                    <span>;
                      {[deployment.region, deployment.country];
                        .filter (Boolean);
                        .join (', ')}
                    </span>                  </div>              {/* Domain & Location */}
              <div className="grid grid - cols - 2 gap - 4 text-sm">;
                <div className="flex items - center gap - 2 text-white / 70">;
                  <span>🌐</span>;
                  <span className="font-mono">;
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>;
                </div>;
                {(deployment.region || deployment.country) && (
                  <div className="flex items - center gap - 2 text-white / 70">;
                    <span>📍</span>;
                    <span>{deployment.region} {deployment.country}</span>;
                  </div>)}
              </div>;
              {/* Features */}
              <div className='space - y-2'>;
                <div className='text - sm font - medium text - white / 80'>;
                  Active Features;
                </div>;
                <div className='flex flex - wrap gap - 2'>;
                  {deployment.features.slice (0, 4).map (feature => (
                    <span;
                      key={feature}
                      className='inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70';
                    >;
                      {feature.replace ('_', ' ')}
                    </span>))}
                  {deployment.features.length > 4 && (
                    <span className='inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70'>                      +{deployment.features.length - 4} more                    <span;
                      key={feature}
                      className="inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text-white / 70";
                    >;
                      {feature}
                    </span>))}
                  {deployment.features?.length > 4 && (
                    <span className="inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text-white / 70">;
                      +{deployment.features.length - 4} more;
                    </span>)}
                </div>;
              </div>;
              {/* Timestamps */}
              <div className='flex items - center justify - between text - xs text - white / 60 pt - 2 border - t border - white / 10'>;
                <div className='flex items - center gap - 1'>;
                  <Calendar className='w - 3 h - 3' />;
                  <span > Created: {format_date (deployment.created_at)}</span>;
                </div>;
                {deployment.updated_at !== deployment.created_at && (
                  <div className='flex items - center gap - 1'>;
                    <RefreshCw className='w - 3 h - 3' />                    <span > Updated: {format_date (deployment.updated_at)}</span>              <div className="flex items - center justify - between text - xs text - white / 60 pt - 2 border - t border-white / 10">;
                <div className="flex items - center gap-1">;
                  <span>📅</span>;
                  <span > Created: {format_date (deployment.created_at)}</span>;
                </div>;
                {deployment.updated_at !== deployment.created_at && (
                  <div className="flex items - center gap-1">;
                    <span>🔄</span>;
                  </div>)}
              </div>;
            </div>;
            {/* Action Buttons */}
            <div className='p - 6 pt - 0'>;
              <div className='flex gap - 2'>;
                {deployment.status === 'pending' && (
                  <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;
                    <Play className='w - 4 h - 4' />;
                    Start Deployment;
                  </button>)}
                {deployment.status === 'deploying' && (
                  <>;
                    <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - orange - 600 hover:bg - orange - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;
                      <Pause className='w - 4 h - 4' />;
                      Pause;
                    </button>;
                    <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - red - 600 hover:bg - red - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;
                      <StopCircle className='w - 4 h - 4' />;
                      Stop;
                    </button>;
                  </>)}
                {deployment.status === 'completed' && (
                  <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - green - 600 hover:bg - green - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;
                    <Eye className='w - 4 h - 4' />;
                    View Instance;
                  </button>)}
                {deployment.status === 'failed' && (
                  <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;
                    <RefreshCw className='w - 4 h - 4' />;
                    Retry;
                  </button>)}
                <button className='flex items - center justify - center px - 3 py - 2 bg - white / 10 hover:bg - white / 20 text - white / 80 text - sm font - medium rounded - lg transition - colors duration - 200'>;
                  <Settings className='w - 4 h - 4' />                </button>                {deployment.status === 'pending' && (
                  <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors duration-200">;
                    ▶️ Start Deployment;
                  </button>)}

                {deployment.status === 'deploying' && (
                  <>;
                    <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - orange - 600 hover:bg - orange - 700 text - white text - sm font - medium rounded - lg transition - colors duration-200">;
                      ⏸️ Pause;
                    </button>;
                    <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - red - 600 hover:bg - red - 700 text - white text - sm font - medium rounded - lg transition - colors duration-200">;
                      ⏹️ Stop;
                    </button>;
                  </>)}
                {deployment.status === 'completed' && (
                  <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - green - 600 hover:bg - green - 700 text - white text - sm font - medium rounded - lg transition - colors duration-200">;
                    👁️ View Instance;
                  </button>)}
                {deployment.status === 'failed' && (
                  <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors duration-200">;
                    🔄 Retry;
                  </button>)}
                <button className="flex items - center justify - center px - 3 py - 2 bg - white / 10 hover:bg - white / 20 text - white / 80 text - sm font - medium rounded - lg transition - colors duration-200">;
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
            <a;
              href="/admin/os-deploy";
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200";
            >;              <Rocket className="w-4 h-4" />;
              Deploy First Instance;
            </a>;
          )}
        </div>;
      )}
    </div>;  );
}
    </div>))}
    </div>);
}      {filteredDeployments.length === 0 && (;
        <div className="text-center py-16">;
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">;
            <Rocket className="w-8 h-8 text-white/40" />;
          </div>;
          <h3 className="text-lg font-medium text-white/60 mb-2">No deployments found</h3>;
          <p className="text-white/40 mb-6">;
            {filter === 'all';
              ? 'Start by creating your first Zion ecosystem deployment';
              : `No deployments with status "${filter}" found`;
            }
          </p>;
          {filter === 'all' && (;
            <a;
              href="/admin/os-deploy";
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200";
            >;
              <Rocket className="w-4 h-4" />;
              Deploy First Instance;
            </a>;
          )}
        </div>;
      )}
    </div>;  );
}
    </div>))}
    </div>);
}