  Rocket;
  Clock;
  CheckCircle;
  AlertCircle;
  Play;
  Eye;
  Settings;
  Globe;
  Activity;
  Calendar;
  User;
  Building2;
  Shield;
  TrendingUp;
  Users;
  Zap;
  Sparkles;
  ArrowRight;
  RefreshCw;
  Pause;
  StopCircle;
  MapPin;
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
  // TODO: Implement
}
  id: string;,
  instanceName: string;
  status: 'pending' | 'deploying' | 'completed' | 'failed' | 'paused';',
  createdAt: string;
  updatedAt: string;,
  progress: number;
  features: string[];,
  vertical: string;
  governanceType: string;
  domain?: string;
  subdomain?: string;
  region?: string;
  country?: string;


        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>;
</div>
          <div className='flex items-center gap-3'>;
            <div className='p-2 bg-yellow-500/20 rounded-lg'>;
              <Clock className='w-5 h-5 text-yellow-400' />;

            </div>;
            <div>;
              <p className='text-2xl font-bold'>{getStatusCount('pending')}</p>;
              <p className='text-sm text-white/60'>Pending</p>;
            <div className='p-2 bg-blue-500/20 rounded-lg'>;
              <Activity className='w-5 h-5 text-blue-400' />;

              <p className='text-2xl font-bold'>;
</p>
              </p>;
              <p className='text-sm text-white/60'>Active</p>;
            <div className='p-2 bg-green-500/20 rounded-lg'>;
              <CheckCircle className='w-5 h-5 text-green-400' />;

              <p className='text-sm text-white/60'>Live</p>;
            <div className='p-2 bg-red-500/20 rounded-lg'>;
              <AlertCircle className='w-5 h-5 text-red-400' />;

              <p className='text-2xl font-bold'>{getStatusCount('failed')}</p>;
              <p className='text-sm text-white/60'>Failed</p>            </div>  return (
    <div className="space-y-8">"
</div>"
      <div className="border-b border-white/10 pb-6">"
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">"
</h1>
        </h1>"
        <p className="text-white/70 mt-2">Monitor and manage your Zion ecosystem deployments</p>"
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">"
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">"
          <div className="flex items-center gap-3">"
            <div className="p-2 bg-blue-500/20 rounded-lg">"
              <Rocket className="w-5 h-5 text-blue-400" />"

            <div>
              <p className="text-2xl font-bold">{deployments.length}</p>""
              <p className="text-sm text-white/60">Total</p>"
            <div className="p-2 bg-yellow-500/20 rounded-lg">"
              <Clock className="w-5 h-5 text-yellow-400" />"

</div>)"
              <p className="text-2xl font-bold">{getStatusCount('pending')}</p>
              <p className="text-sm text-white/60">Pending</p>"
              <CheckCircle className="w-5 h-5 text-blue-400" />"

              <p className="text-2xl font-bold">{getStatusCount('deploying')}</p>
              <p className="text-sm text-white/60">Active</p>"
            <div className="p-2 bg-green-500/20 rounded-lg">"
              <CheckCircle className="w-5 h-5 text-green-400" />"

              <p className="text-2xl font-bold">{getStatusCount('completed')}</p>
              <p className="text-sm text-white/60">Live</p>"
            <div className="p-2 bg-red-500/20 rounded-lg">"
              <AlertCircle className="w-5 h-5 text-red-400" />"

              <p className="text-2xl font-bold">{getStatusCount('failed')}</p>
              <p className="text-sm text-white/60">Failed</p>"
      <div className='flex flex-wrap gap-2'>
          <button;
            key={key}
            onClick={() => setFilter(key as any)}
</button>
  const [deployments, setDeployments] = useState<Deployment[]>(mockDeployments),;

  const [filter, setFilter] = useState<'all' | 'pending' | 'deploying' | 'completed' | 'failed'>('all'),;
  const getStatusColor = (status: string) => {;
    switch (status) {;
      case 'completed': return 'text-green-400',;
      case 'deploying': return 'text-blue-400',;
      case 'pending': return 'text-yellow-400',;
      case 'failed': return 'text-red-400',;
      case 'paused': return 'text-orange-400',;
      default: return 'text-gray-400';
  },;
  const getStatusIcon = (status: string) => {;
      case 'completed': return <CheckCircle className="w-5 h-5" />,;"
"
      case 'deploying': return <Activity className="w-5 h-5" />,;"
      case 'pending': return <Clock className="w-5 h-5" />,;"
      case 'failed': return <AlertCircle className="w-5 h-5" />,;"
      case 'paused': return <Pause className="w-5 h-5" />,;"
      default: return <Clock className="w-5 h-5" />;"
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />,;"
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />,;"
</Building2>"
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />,;"
      case "GOV": return <Users className="w-4 h-4 text-red-400" />,;"
      default: return <Globe className="w-4 h-4 text-gray-400" />;"
      case "ADMIN": return <User className="w-4 h-4 text-yellow-400" />,;"
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />,;"
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />,;"
      default: return <User className="w-4 h-4 text-gray-400" />;"
    <div className="space-y-8">;"
          </button>;
      </div>;"
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>;
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">"
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div;
            key={deployment && deployment.id}
            className='group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5'>;
            <div className='p-6 border-b border-white/10'>;
              <div className='flex items-start justify-between mb-4'>;
                  <div className='p-2 bg-white/10 rounded-lg'>;
                    <h3 className='font-bold text-lg text-white group-hover:text-white/90 transition-colors'>;
</h3>
                    </h3>;
                    <div className='flex items-center gap-2 mt-1'>;
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80'>;
</span>
                      </span>;
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400'>                        {deployment && deployment.governanceType}          <div;
            key={deployment.id}
            className='group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5
          >
            <div className='p-6 border-b border-white/10'>
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-white/10 rounded-lg'>
                    <h3 className='font-bold text-lg text-white group-hover:text-white/90 transition-colors'>
                    <div className='flex items-center gap-2 mt-1'>
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80'>
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400'>                        {deployment.governanceType}          <div;
            <div className="p-6 border-b border-white/10">"
              <div className="flex items-start justify-between mb-4">"
                  <div className="p-2 bg-white/10 rounded-lg">"
                    <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">"
                    </h3>"
                    <div className="flex items-center gap-2 mt-1">"
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">"
                      </span>"
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">"
                <div className='flex items-center gap-2'>
                  <span;
                    className={`text-sm font-medium ${getStatusColor(deployment.status)}`}
                      deployment.status.slice(1)}                  </span>                <div className="flex items-center gap-2">"
</div>`;
                  <span className={`text-sm font-medium ${getStatusColor(deployment.status)}`}>
                <div className='space-y-2'>
                  <div className='flex justify-between text-sm text-white/70'>
                    <span>Deployment Progress</span>
                    <span>{deployment.progress}%</span>
                  <div className='w-full bg-white/10 rounded-full h-2'>
                    <div;`;
                      className='bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out'                      style={{ width: `${deployment.progress}%` }}                    <span>Deployment Progress</span>
                  <div className="w-full bg-white/10 rounded-full h-2">"
                    <div;"
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out""`;
                      style={{ width: `${deployment.progress}%` }}
                    ></div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">;"
          <div key={deployment.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;"
            <div className="p-6 border-b border-white/10">;"
              <div className="flex items-start justify-between mb-4">;"
                <div className="flex items-center gap-3">;"
                  <div className="p-2 bg-white/10 rounded-lg">;"
                    <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">;"
                    </h3>;"
                    <div className="flex items-center gap-2 mt-1">;"
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">;"
                      </span>;"
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">;"
                    <span>Deployment Progress</span>;
                    <span>{deployment && deployment.progress}%</span>;
                  <div className='w-full bg-white/10 rounded-full h-2'>;
                      className='bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out'                      style={{ width: `${deployment && deployment.progress}%` }}                    <span>Deployment Progress</span>;
                  <div className="w-full bg-white/10 rounded-full h-2">;"
                      style={{ width: `${deployment && deployment.progress}%` }}></div>;
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div className='flex items-center gap-2 text-white/70'>
                  <Globe className='w-4 h-4' />

                  <span className='font-mono'>
                    <MapPin className='w-4 h-4' />

                    <span>
                    </span>                  </div>              {/* Domain & Location */}
                    ></div>;
                </div>)}
              <div className="grid grid-cols-2 gap-4 text-sm">"
                <div className="flex items-center gap-2 text-white/70">"
                  <span></span>"
                  <span className="font-mono">"
                    <span></span>
                    <span>{deployment.region} {deployment.country}</span>
              <div className='grid grid-cols-2 gap-4 text-sm'>;
                <div className='flex items-center gap-2 text-white/70'>;
                  <Globe className='w-4 h-4' />;

                  <span className='font-mono'>;
                    <MapPin className='w-4 h-4' />;

                    <span>;
              <div className="grid grid-cols-2 gap-4 text-sm">;"
                <div className="flex items-center gap-2 text-white/70">;"
                  <span>🌐</span>;"
                  <span className="font-mono">;"
                    <span>📍</span>;
                    <span>{deployment && deployment.region} {deployment && deployment.country}</span>;
            <div className='p-6 space-y-4'>


                  <span>🌐</span>"
                    <span>📍</span>
            <div className="p-6 space-y-4">;"
                  <Globe className="w-4 h-4" />;"
                    <MapPin className="w-4 h-4" />;"

                    <span>{[deployment.region, deployment.country].filter(Boolean).join()}</span>;
              <div className="space-y-2">;"
                <div className="text-sm font-medium text-white/80">Active Features</div>;""
                <div className="flex flex-wrap gap-2">;"
                    <span key={feature} className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">;"
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">;"
              <div className='flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10'>;
                <div className='flex items-center gap-1'>;
                  <Calendar className='w-3 h-3' />;

                  <span>Created: {formatDate(deployment && deployment.createdAt)}</span>;
                    <RefreshCw className='w-3 h-3' />                    <span>Updated: {formatDate(deployment && deployment.updatedAt)}</span>              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">;"
                <div className="flex items-center gap-1">;"
                  <span>📅</span>;
                    <span>🔄</span>;
              <div className='flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10'>
                <div className='flex items-center gap-1'>
                  <Calendar className='w-3 h-3' />

                  <span>Created: {formatDate(deployment.createdAt)}</span>
                    <RefreshCw className='w-3 h-3' />                    <span>Updated: {formatDate(deployment.updatedAt)}</span>              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">"
                <div className="flex items-center gap-1">"
                  <span>📅</span>
                    <span>🔄</span>
                    <span>Updated: {formatDate(deployment.updatedAt)}</span>
              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">;"
                  <Calendar className="w-3 h-3" />;"

                  <span>Created: {formatDate(deployment.createdAt)}</span>;
                    <RefreshCw className="w-3 h-3" />;"

                    <span>Updated: {formatDate(deployment.updatedAt)}</span>;
                  <>;"
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;"
                    </button>;"
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;"
                  </>;
                )}"
                {deployment && deployment.status === 'completed' && (;
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;"
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;"
                <button className="flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm font-medium rounded-lg transition-colors duration-200">;"
            <a;"
              href='/admin/os-deploy
              className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200'>;
</a>
              <Rocket className='w-4 h-4' />              Deploy First Instance;

            </a>;
            <div className='p-6 pt-0'>
              <div className='flex gap-2'>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">"
                  </button>"
            <div className='p - 6 space - y-4'>;
              <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                <div className='flex items - center gap - 2 text - white / 70'>;
                  <Globe className='w - 4 h - 4' />;

                  <span className='font - mono'>;
                    <MapPin className='w - 4 h - 4' />;

              <div className="grid grid - cols - 2 gap - 4 text - sm">;"
                <div className="flex items - center gap - 2 text - white / 70">;"
                  <span className="font - mono">;"
                    <span>{deployment.region} {deployment.country}</span>;)
              <div className='space - y-2'>;
                <div className='text - sm font - medium text - white / 80'>;
                <div className='flex flex - wrap gap - 2'>;
                      key={feature}
                      className='inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70';
                    >;
                    </span>))}
                    <span className='inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70'>                      +{deployment.features.length - 4} more                    <span;
                    <span className="inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70">;"
                    </span>)}
              <div className='flex items - center justify - between text - xs text - white / 60 pt - 2 border - t border - white / 10'>;
                <div className='flex items - center gap - 1'>;
                  <Calendar className='w - 3 h - 3' />;

                  <span > Created: {format_date (deployment.created_at)}</span>;
                    <RefreshCw className='w - 3 h - 3' />                    <span > Updated: {format_date (deployment.updated_at)}</span>              <div className="flex items - center justify - between text - xs text - white / 60 pt - 2 border - t border - white / 10">;"
                <div className="flex items - center gap - 1">;"
            <div className='p - 6 pt - 0'>;
              <div className='flex gap - 2'>;
                  <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;
                    <Play className='w - 4 h - 4' />;

                  </button>)}
                  <>;
                    <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - orange - 600 hover:bg - orange - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;
                      <Pause className='w - 4 h - 4' />;

                    <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - red - 600 hover:bg - red - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;
                      <StopCircle className='w - 4 h - 4' />;

                  </>)}
                {deployment.status === 'completed' && (
                  <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - green - 600 hover:bg - green - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;
                    <Eye className='w - 4 h - 4' />;
)
                    <RefreshCw className='w - 4 h - 4' />;

                <button className='flex items - center justify - center px - 3 py - 2 bg - white / 10 hover:bg - white / 20 text - white / 80 text - sm font - medium rounded - lg transition - colors duration - 200'>;
                  <Settings className='w - 4 h - 4' />                </button>                {deployment.status === 'pending' && (

                  <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200">;"
</button>)
                    <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - orange - 600 hover:bg - orange - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200">;"
                    <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - red - 600 hover:bg - red - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200">;"
                  </>)}"
                  <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - green - 600 hover:bg - green - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200">;"
                  </button>)}"
                <button className="flex items - center justify - center px - 3 py - 2 bg - white / 10 hover:bg - white / 20 text - white / 80 text - sm font - medium rounded - lg transition - colors duration - 200">;"
          </div>))}
        </div>          </div>;"
          <h3 className="text-lg font-medium text-white/60 mb-2">No deployments found</h3>;""
          <p className="text-white/40 mb-6">;"
              href="/admin/os-deploy"""
              <Rocket className="w-4 h-4" />;"
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">;"
          <h2 className="text-xl font-semibold">Deployments</h2>;"
        <div className="overflow-x-auto">;"
          <table className="w-full">;"
</table>"
            <thead className="bg-white/5">;"
</thead>
              <tr>;
</tr>"
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Name</th>;""
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Status</th>;""
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Region</th>;""
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Version</th>;""
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Last Deployed</th>;""
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Actions</th>;"
              </tr>;
            </thead>;"
            <tbody className="divide-y divide-white/10">;"
</tbody>"
                <tr key={deployment && deployment.id} className="hover:bg-white/5">;"
                  <td className="px-6 py-4 whitespace-nowrap">;"
</td>"
                    <div className="text-sm font-medium text-white">{deployment && deployment.name}</div>;""
                    <div className="text-sm text-white/60">ID: {deployment && deployment.id}</div>;"
                  </td>;"
</td>`;
                    <span className={`inline-flex items-center px-2 && 2.5 py-0 && 0.5 rounded-full text-xs font-medium ${getStatusColor(deployment && deployment.status)}`}>;
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">{deployment && deployment.region}</td>;""
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">{deployment && deployment.version}</td>;""
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">{deployment && deployment.lastDeployed}</td>;""
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">;"
                    <button className="text-blue-400 hover:text-blue-300 mr-4">View</button>;""
                    <button className="text-green-400 hover:text-green-300 mr-4">Deploy</button>;""
                    <button className="text-red-400 hover:text-red-300">Stop</button>;"
                  </td>;
                </tr>;"
        <div className='text - center py - 16'>;
          <div className='w - 16 h - 16 mx - auto mb - 4 p - 4 bg - white / 10 rounded - full'>;
            <Rocket className='w - 8 h - 8 text - white / 40' />;

          <h3 className='text - lg font - medium text - white / 60 mb - 2'>;
          <p className='text - white / 40 mb - 6'>;
            <a;
              href='/admin / os - deploy';
              className='inline - flex items - center gap - 2 px - 6 py - 3 bg - blue - 600 hover:bg - blue - 700 text - white font - medium rounded - lg transition - colors duration - 200';
              <Rocket className='w - 4 h - 4' />              Deploy First Instance;

            </a>)}
        </div>          </div>;
          <h3 className="text - lg font - medium text - white / 60 mb - 2">No deployments found</h3>;""
          <p className="text - white / 40 mb - 6">;"
              href="/admin / os - deploy";""
              className="inline - flex items - center gap - 2 px - 6 py - 3 bg - blue - 600 hover:bg - blue - 700 text - white font - medium rounded - lg transition - colors duration - 200";"
</a>"
              <Rocket className="w - 4 h - 4" />;"

      <div className="bg - white / 5 backdrop - blur - sm rounded - xl border border - white / 10 overflow - hidden">;"
        <div className="p - 6 border - b border - white / 10">;"
          <h2 className="text - xl font - semibold">Deployments</h2>;"
        <div className="overflow - x-auto">;"
          <table className="w - full">;"
            <thead className="bg - white / 5">;"
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Name</th>;""
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Status</th>;""
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Region</th>;""
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Version</th>;""
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Last Deployed</th>;""
                <th className="px - 6 py - 3 text - left text - xs font - medium text - white / 60 uppercase tracking - wider">Actions</th>;"
            <tbody className="divide - y divide - white / 10">;"
                <tr key={deployment.id} className="hover:bg - white / 5">;"
                  <td className="px - 6 py - 4 whitespace - nowrap">;"
                    <div className="text - sm font - medium text - white">{deployment.name}</div>;""
                    <div className="text - sm text - white / 60">ID: {deployment.id}</div>;"
                    <span className={`inline - flex items - center px - 2.5 py - 0.5 rounded - full text - xs font - medium ${getStatusColor (deployment.status)}`}>;
                  <td className="px - 6 py - 4 whitespace - nowrap text - sm text - white / 60">{deployment.region}</td>;""
                  <td className="px - 6 py - 4 whitespace - nowrap text - sm text - white / 60">{deployment.version}</td>;""
                  <td className="px - 6 py - 4 whitespace - nowrap text - sm text - white / 60">{deployment.last_deployed}</td>;""
                  <td className="px - 6 py - 4 whitespace - nowrap text - sm font - medium">;"
                    <button className="text - blue - 400 hover:text - blue - 300 mr - 4">View</button>;""
                    <button className="text - green - 400 hover:text - green - 300 mr - 4">Deploy</button>;""
                    <button className="text - red - 400 hover:text - red - 300">Stop</button>;"
                </tr>))}
            </tbody>;
          </table>;
    </div>);"
        <div className="text-center py-16">;"
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">;"
            <Rocket className="w-8 h-8 text-white/40" />;"

              href="/admin/os-deploy";""
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200";"

    </div>);"`;