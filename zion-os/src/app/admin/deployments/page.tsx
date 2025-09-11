export default function DeploymentsPage() {;
  const [deployments, setDeployments] = useState<Deployment[]>(mockDeployments);
  const [filter, setFilter] = useState<
    'all' | 'pending' | 'deploying' | 'completed' | 'failed'
  >('all');
  const getStatusColor = (status: string) => {;
    switch (status) {;
      case 'completed':;
        return 'text-green-400';
      case 'deploying':
        return 'text-blue-400';
      case 'pending':
        return 'text-yellow-400';
      case 'failed':
        return 'text-red-400';
      case 'paused':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  ];
  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'completed':;
        return <CheckCircle className='w-5 h-5' />;
      case 'deploying':
        return <Activity className='w-5 h-5' />;
      case 'pending':
        return <Clock className='w-5 h-5' />;
      case 'failed':
        return <AlertCircle className='w-5 h-5' />;
      case 'paused':
        return <Pause className='w-5 h-5' />;
      default:
        return <Clock className='w-5 h-5' />;
    }
  };
  const getVerticalIcon = (vertical: string) => {;
    switch (vertical) {;
      case 'HEALTH':;
        return <Shield className='w-4 h-4 text-blue-400' />;
      case 'EDUCATION':
        return <Building2 className='w-4 h-4 text-green-400' />;
      case 'LAW':
        return <Shield className='w-4 h-4 text-purple-400' />;
      case 'GOV':
        return <Users className='w-4 h-4 text-red-400' />;
      default:
        return <Globe className='w-4 h-4 text-gray-400' />;
    }
  };
  const getGovernanceIcon = (type: string) => {;
    switch (type) {;
      case 'ADMIN':;
        return <User className='w-4 h-4 text-yellow-400' />;
      case 'DAO_LITE':
        return <Users className='w-4 h-4 text-blue-400' />;
      case 'DAO_FULL':
        return <Zap className='w-4 h-4 text-purple-400' />;
      default:
        return <User className='w-4 h-4 text-gray-400' />;
    }
  };
  const formatDate = (dateString: string) => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      month: 'short',;
      day: 'numeric',;
      hour: '2-digit',;
      minute: '2-digit',;
    });
  };
  const filteredDeployments = deployments && deployments.filter(;
    deployment => filter === 'all' || deployment && deployment.status === filter;
  );  const deployments = []; // This should be populated from your data source;
  const filter = 'all'; // This should be managed with state;
  const filteredDeployments = deployments && deployments.filter(deployment => filter === 'all' || deployment && deployment.status === filter);
    return deployments && deployments.filter(d => d && d.status === status).length;
  };
  return (
    <div className='space-y-8'>
      {/* Header Section */}
      <div className='border-b border-white/10 pb-6'>;
        <h1 className='text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>;
          Deployment Management;
        </h1>;
        <p className='text-white/70 mt-2'>;
          Monitor and manage your Zion ecosystem deployments;
        </p>;
      </div>;
"use client";
import { Rocket, CheckCircle, Clock, AlertCircle, XCircle } from 'lucide-react';
const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'text-green-400';
    case 'pending':
      return 'text-yellow-400';
    case 'failed':
      return 'text-red-400';
    case 'stopped':
      return 'text-gray-400';
    default: return 'text-gray-400',
  }
};
export default function DeploymentsPage() {
  const deployments = []; // This should be populated from your data source
  const filter = 'all'; // This should be managed with state
  const filteredDeployments = deployments.filter(deployment => filter === 'all' || deployment.status === filter);
  const getStatusCount = (status: string) => {
    return deployments.filter(d => d.status === status).length;
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-400" />;
      case 'stopped':
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-400" />,
    }
  };
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
    <div className="space-y-8">
      {/* Header Section */}

              <p className='text-sm text-white/60'>Failed</p>            </div>  return (
    <div className="space-y-8">;
      {/* Header Section */}

      <div className="border-b border-white/10 pb-6">;
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">;
          Deployment Management;
        </h1>;
        <p className="text-white/70 mt-2">Monitor and manage your Zion ecosystem deployments</p>;
      </div>;
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-blue-500/20 rounded-lg">;
              <Rocket className="w-5 h-5 text-blue-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{deployments && deployments.length}</p>;
              <p className="text-sm text-white/60">Total</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-yellow-500/20 rounded-lg">;
              <Clock className="w-5 h-5 text-yellow-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('pending')}</p>;
              <p className="text-sm text-white/60">Pending</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-blue-500/20 rounded-lg">;
              <CheckCircle className="w-5 h-5 text-blue-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('deploying')}</p>;
              <p className="text-sm text-white/60">Active</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-green-500/20 rounded-lg">;
              <CheckCircle className="w-5 h-5 text-green-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('completed')}</p>;
              <p className="text-sm text-white/60">Live</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-red-500/20 rounded-lg">;
              <AlertCircle className="w-5 h-5 text-red-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('failed')}</p>;
              <p className="text-sm text-white/60">Failed</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Filter Tabs */}

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
      {/* Filter Tabs */}
      <div className='flex flex-wrap gap-2'>
          { key: 'all', label: 'All Deployments', count: deployments.length }
          {
            key: 'pending'
            label: 'Pending'
            count: getStatusCount('pending')
          }
          {
            key: 'deploying'
            label: 'Deploying'
            count: getStatusCount('deploying')
          }
          {
            key: 'completed'
            label: 'Completed'
            count: getStatusCount('completed')
          }          { key: 'failed', label: 'Failed', count: getStatusCount('failed') }
        ].map(({ key, label, count }) => (
          <button
            key={key}
      <div className="border-b border-white/10 pb-6">;
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">;
          Deployment Management;
        </h1>;
        <p className="text-white/70 mt-2">Monitor and manage your Zion ecosystem deployments</p>;
      </div>;
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-blue-500/20 rounded-lg">;
              <Rocket className="w-5 h-5 text-blue-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{deployments && deployments.length}</p>;
              <p className="text-sm text-white/60">Total</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-yellow-500/20 rounded-lg">;
              <Clock className="w-5 h-5 text-yellow-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('pending')}</p>;
              <p className="text-sm text-white/60">Pending</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-blue-500/20 rounded-lg">;
              <CheckCircle className="w-5 h-5 text-blue-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('deploying')}</p>;
              <p className="text-sm text-white/60">Active</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-green-500/20 rounded-lg">;
              <CheckCircle className="w-5 h-5 text-green-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('completed')}</p>;
              <p className="text-sm text-white/60">Live</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-red-500/20 rounded-lg">;
              <AlertCircle className="w-5 h-5 text-red-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('failed')}</p>;
              <p className="text-sm text-white/60">Failed</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Filter Tabs */}
      {/* Deployments Grid */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>;
        {filteredDeployments && filteredDeployments.map(deployment => (;
      </div>
      {/* Deployments Grid */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
        {filteredDeployments.map(deployment => (
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

        ))}
      </div>
      {/* Deployments Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">;
        {filteredDeployments.map((deployment) => (;
          <div key={deployment.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;
            {/* Status Header */}
// Mock data - replace with actual API calls;
const mock_deployments: Deployment[] = [;
  {
    id: 'deploy - 001',
    instance_name: 'Zion Health Network',
    status: 'completed',
    created_at: '2024 - 01 - 15T10:30:00Z',
    updated_at: '2024 - 01 - 15T11:45:00Z',
    progress: 100,
    features: ['marketplace', 'zion_gpt', 'kyc_aml', 'dao_voting'],
    vertical: 'HEALTH',
    governance_type: 'DAO_FULL',
    domain: 'health.zion.network',
    region: 'North America',
    country: 'United States',
  },
  {
    id: 'deploy - 002',
    instance_name: 'EduDAO Academy',
    status: 'deploying',
    created_at: '2024 - 01 - 15T14:20:00Z',
    updated_at: '2024 - 01 - 15T15:10:00Z',
    progress: 65,
    features: ['academy', 'zion_gpt', 'incubator_grants'],
    vertical: 'EDUCATION',
    governance_type: 'DAO_LITE',
    subdomain: 'edu',
    region: 'Europe',
    country: 'Germany',
  },
  {
    id: 'deploy - 003',
    instance_name: 'LegalTech DAO',
    status: 'pending',
    created_at: '2024 - 01 - 15T16:00:00Z',
    updated_at: '2024 - 01 - 15T16:00:00Z',
    progress: 0,
    features: ['marketplace', 'onchain_contracts', 'web3_login'],
    vertical: 'LAW',
    governance_type: 'DAO_FULL',
    domain: 'legal.zion.network',
    region: 'Asia Pacific',
    country: 'Singapore',
  },
];
;
export default /**
 * DeploymentsPage - Function description
 */
function DeploymentsPage() {
  const [deployments, set_deployments] = useState < Deployment[]>(mock_deployments);
  const [filter, set_filter] = useState<;
    'all' | 'pending' | 'deploying' | 'completed' | 'failed';
  >('all');
;
  const getStatusColor = (status: string) =>: any {
    switch (status) {
      case 'completed':;
        return 'text - green - 400';
      case 'deploying':;
        return 'text - blue - 400';
      case 'pending':;
        return 'text - yellow - 400';
      case 'failed':;
        return 'text - red - 400';
      case 'paused':;
        return 'text - orange - 400';
      default:;
        return 'text - gray - 400';
    }
  ];
;
  const getStatusIcon = (status: string) =>: any {
    switch (status) {
      case 'completed':;
        return <CheckCircle className='w - 5 h - 5' />;
      case 'deploying':;
        return <Activity className='w - 5 h - 5' />;
      case 'pending':;
        return <Clock className='w - 5 h - 5' />;
      case 'failed':;
        return <AlertCircle className='w - 5 h - 5' />;
      case 'paused':;
        return <Pause className='w - 5 h - 5' />;
      default:;
        return <Clock className='w - 5 h - 5' />;
    }
  }
;
const getVerticalIcon = (vertical: string) =>: any {
    switch (vertical) {
      case 'HEALTH':;
        return <Shield className='w - 4 h - 4 text - blue - 400' />;
      case 'EDUCATION':;
        return <Building2 className='w - 4 h - 4 text - green - 400' />;
      case 'LAW':;
        return <Shield className='w - 4 h - 4 text - purple - 400' />;
      case 'GOV':;
        return <Users className='w - 4 h - 4 text - red - 400' />;
      default:;
        return <Globe className='w - 4 h - 4 text - gray - 400' />;
    }
  }
;
  const getGovernanceIcon = (type: string) =>: any {
    switch (type) {
      case 'ADMIN':;
        return <User className='w - 4 h - 4 text - yellow - 400' />;
      case 'DAO_LITE':;
        return <Users className='w - 4 h - 4 text - blue - 400' />;
      case 'DAO_FULL':;
        return <Zap className='w - 4 h - 4 text - purple - 400' />;
      default:;
        return <User className='w - 4 h - 4 text - gray - 400' />;
    }
  }
;
  const format_date = (date_string: string) =>: any {
    return new Date (date_string).toLocaleDateString ('en - US', {
      month: 'short',
      day: 'numeric',
      hour: '2 - digit',
      minute: '2 - digit',
    });
  }
;
  const filtered_deployments = deployments.filter (
    deployment => filter === 'all' || deployment.status === filter);  const deployments = []; // This should be populated from your data source;
  const filter = 'all'; // This should be managed with state;
  const filtered_deployments = deployments.filter (deployment => filter === 'all' || deployment.status === filter);
    return deployments.filter (d => d.status === status).length;
  }
;
  return (
    <div className='space - y-8'>;
      {/* Header Section */}
      <div className='border - b border - white / 10 pb - 6'>;
        <h1 className='text - 3xl font - bold bg - gradient - to - r from - white to - white / 80 bg - clip - text text - transparent'>;
          Deployment Management;
        </h1>;
        <p className="text-white/70 mt-2">Monitor and manage your Zion ecosystem deployments</p>;
      </div>;
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-blue-500/20 rounded-lg">;
              <Rocket className="w-5 h-5 text-blue-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{deployments.length}</p>;
              <p className="text-sm text-white/60">Total</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-yellow-500/20 rounded-lg">;
              <Clock className="w-5 h-5 text-yellow-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('pending')}</p>;
              <p className="text-sm text-white/60">Pending</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-blue-500/20 rounded-lg">;
              <Activity className="w-5 h-5 text-blue-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('deploying')}</p>;
              <p className="text-sm text-white/60">Active</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-green-500/20 rounded-lg">;
              <CheckCircle className="w-5 h-5 text-green-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('completed')}</p>;
              <p className="text-sm text-white/60">Live</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">;
          <div className="flex items-center gap-3">;
            <div className="p-2 bg-red-500/20 rounded-lg">;
              <AlertCircle className="w-5 h-5 text-red-400" />;
            </div>;
            <div>;
              <p className="text-2xl font-bold">{getStatusCount('failed')}</p>;
              <p className="text-sm text-white/60">Failed</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">;
        {[;
          { key: 'all', label: 'All Deployments', count: deployments.length },;
          { key: 'pending', label: 'Pending', count: getStatusCount('pending') },;
          { key: 'deploying', label: 'Deploying', count: getStatusCount('deploying') };
          { key: 'completed', label: 'Completed', count: getStatusCount('completed') };
          { key: 'failed', label: 'Failed', count: getStatusCount('failed') }
        ].map(({ key, label, count }) => (;
          <button;
            key={key}
            onClick={() => setFilter(key as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${;
              filter === key;
                ? 'bg-blue-600 text-white shadow-lg';
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90';
            }`}
          >;
            {label} ({count});
          </button>;

      </div>;


      {/* Deployments Grid */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>;
        {filteredDeployments && filteredDeployments.map(deployment => (;
      </div>
      {/* Deployments Grid */}
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
                </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">;
        {filteredDeployments.map((deployment) => (;
          <div key={deployment.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;
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

;
// Mock data - replace with actual API calls;
const mock_deployments: Deployment[] = [;
  {
    id: 'deploy - 001',
    instance_name: 'Zion Health Network',
    status: 'completed',
    created_at: '2024 - 01 - 15T10:30:00Z',
    updated_at: '2024 - 01 - 15T11:45:00Z',
    progress: 100,
    features: ['marketplace', 'zion_gpt', 'kyc_aml', 'dao_voting'],
    vertical: 'HEALTH',
    governance_type: 'DAO_FULL',
    domain: 'health.zion.network',
    region: 'North America',
    country: 'United States',
  },
  {
    id: 'deploy - 002',
    instance_name: 'EduDAO Academy',
    status: 'deploying',
    created_at: '2024 - 01 - 15T14:20:00Z',
    updated_at: '2024 - 01 - 15T15:10:00Z',
    progress: 65,
    features: ['academy', 'zion_gpt', 'incubator_grants'],
    vertical: 'EDUCATION',
    governance_type: 'DAO_LITE',
    subdomain: 'edu',
    region: 'Europe',
    country: 'Germany',
  },
  {
    id: 'deploy - 003',
    instance_name: 'LegalTech DAO',
    status: 'pending',
    created_at: '2024 - 01 - 15T16:00:00Z',
    updated_at: '2024 - 01 - 15T16:00:00Z',
    progress: 0,
    features: ['marketplace', 'onchain_contracts', 'web3_login'],
    vertical: 'LAW',
    governance_type: 'DAO_FULL',
    domain: 'legal.zion.network',
    region: 'Asia Pacific',
    country: 'Singapore',
  },
];
;
export default /**
 * DeploymentsPage - Function description
 */
function DeploymentsPage() {
  const [deployments, set_deployments] = useState < Deployment[]>(mock_deployments);
  const [filter, set_filter] = useState<;
    'all' | 'pending' | 'deploying' | 'completed' | 'failed';
  >('all');
;
  const getStatusColor = (status: string) =>: any {
    switch (status) {
      case 'completed':;
        return 'text - green - 400';
      case 'deploying':;
        return 'text - blue - 400';
      case 'pending':;
        return 'text - yellow - 400';
      case 'failed':;
        return 'text - red - 400';
      case 'paused':;
        return 'text - orange - 400';
      default:;
        return 'text - gray - 400';
    }
  ];
;
  const getStatusIcon = (status: string) =>: any {
    switch (status) {
      case 'completed':;
        return <CheckCircle className='w - 5 h - 5' />;
      case 'deploying':;
        return <Activity className='w - 5 h - 5' />;
      case 'pending':;
        return <Clock className='w - 5 h - 5' />;
      case 'failed':;
        return <AlertCircle className='w - 5 h - 5' />;
      case 'paused':;
        return <Pause className='w - 5 h - 5' />;
      default:;
        return <Clock className='w - 5 h - 5' />;
    }
  }
;
const getVerticalIcon = (vertical: string) =>: any {
    switch (vertical) {
      case 'HEALTH':;
        return <Shield className='w - 4 h - 4 text - blue - 400' />;
      case 'EDUCATION':;
        return <Building2 className='w - 4 h - 4 text - green - 400' />;
      case 'LAW':;
        return <Shield className='w - 4 h - 4 text - purple - 400' />;
      case 'GOV':;
        return <Users className='w - 4 h - 4 text - red - 400' />;
      default:;
        return <Globe className='w - 4 h - 4 text - gray - 400' />;
    }
  }
;
  const getGovernanceIcon = (type: string) =>: any {
    switch (type) {
      case 'ADMIN':;
        return <User className='w - 4 h - 4 text - yellow - 400' />;
      case 'DAO_LITE':;
        return <Users className='w - 4 h - 4 text - blue - 400' />;
      case 'DAO_FULL':;
        return <Zap className='w - 4 h - 4 text - purple - 400' />;
      default:;
        return <User className='w - 4 h - 4 text - gray - 400' />;
    }
  }
;
  const format_date = (date_string: string) =>: any {
    return new Date (date_string).toLocaleDateString ('en - US', {
      month: 'short',
      day: 'numeric',
      hour: '2 - digit',
      minute: '2 - digit',
    });
  }
;
  const filtered_deployments = deployments.filter (
    deployment => filter === 'all' || deployment.status === filter);  const deployments = []; // This should be populated from your data source;
  const filter = 'all'; // This should be managed with state;
  const filtered_deployments = deployments.filter (deployment => filter === 'all' || deployment.status === filter);
    return deployments.filter (d => d.status === status).length;
  }
;
  return (
    <div className='space - y-8'>;
      {/* Header Section */}
      <div className='border - b border - white / 10 pb - 6'>;
        <h1 className='text - 3xl font - bold bg - gradient - to - r from - white to - white / 80 bg - clip - text text - transparent'>;
          Deployment Management;
        </h1>;
        <p className='text - white / 70 mt - 2'>;
          Monitor and manage your Zion ecosystem deployments;
        </p>;
      </div>;
      {/* Stats Overview */}
      <div className='grid grid - cols - 1 md:grid - cols - 5 gap - 4 mb - 8'>;
        <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10'>;
          <div className='flex items - center gap - 3'>;
            <div className='p - 2 bg - blue - 500 / 20 rounded - lg'>;
              <Rocket className='w - 5 h - 5 text - blue - 400' />;
            </div>;
            <div>;
              <p className='text - 2xl font - bold'>{deployments.length}</p>;
              <p className='text - sm text - white / 60'>Total</p>;
            </div>;
          </div>;
        </div>;
        <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10'>;
          <div className='flex items - center gap - 3'>;
            <div className='p - 2 bg - yellow - 500 / 20 rounded - lg'>;
              <Clock className='w - 5 h - 5 text - yellow - 400' />;
            </div>;
            <div>;
              <p className='text - 2xl font - bold'>{getStatusCount ('pending')}</p>;
              <p className='text - sm text - white / 60'>Pending</p>;
            </div>;
          </div>;
        </div>;
        <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10'>;
          <div className='flex items - center gap - 3'>;
            <div className='p - 2 bg - blue - 500 / 20 rounded - lg'>;
              <Activity className='w - 5 h - 5 text - blue - 400' />;
            </div>;
            <div>;
              <p className='text - 2xl font - bold'>;
                {getStatusCount ('deploying')}
              </p>;
              <p className='text - sm text - white / 60'>Active</p>;
            </div>;
          </div>;
        </div>;
        <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10'>;
          <div className='flex items - center gap - 3'>;
            <div className='p - 2 bg - green - 500 / 20 rounded - lg'>;
              <CheckCircle className='w - 5 h - 5 text - green - 400' />;
            </div>;
            <div>;
              <p className='text - 2xl font - bold'>;
                {getStatusCount ('completed')}
              </p>;
              <p className='text - sm text - white / 60'>Live</p>;
            </div>;
          </div>;
        </div>;
        <div className='bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10'>;
          <div className='flex items - center gap - 3'>;
            <div className='p - 2 bg - red - 500 / 20 rounded - lg'>;
              <AlertCircle className='w - 5 h - 5 text - red - 400' />;
            </div>;
            <div>;
              <p className='text - 2xl font - bold'>{getStatusCount ('failed')}</p>;
              <p className='text - sm text - white / 60'>Failed</p>            </div>  return (
    <div className="space - y-8">;
      {/* Header Section */}
      <div className="border - b border - white / 10 pb - 6">;
        <h1 className="text - 3xl font - bold bg - gradient - to - r from - white to - white / 80 bg - clip - text text - transparent">;
          Deployment Management;
        </h1>;
        <p className="text - white / 70 mt - 2">Monitor and manage your Zion ecosystem deployments</p>;
      </div>;
      {/* Stats Overview */}
      <div className="grid grid - cols - 1 md:grid - cols - 5 gap - 4 mb - 8">;
        <div className="bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10">;
          <div className="flex items - center gap - 3">;
            <div className="p - 2 bg - blue - 500 / 20 rounded - lg">;
              <Rocket className="w - 5 h - 5 text - blue - 400" />;
            </div>;
            <div>;
              <p className="text - 2xl font - bold">{deployments.length}</p>;
              <p className="text - sm text - white / 60">Total</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10">;
          <div className="flex items - center gap - 3">;
            <div className="p - 2 bg - yellow - 500 / 20 rounded - lg">;
              <Clock className="w - 5 h - 5 text - yellow - 400" />;
            </div>;
            <div>;
              <p className="text - 2xl font - bold">{getStatusCount ('pending')}</p>;
              <p className="text - sm text - white / 60">Pending</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10">;
          <div className="flex items - center gap - 3">;
            <div className="p - 2 bg - blue - 500 / 20 rounded - lg">;
              <CheckCircle className="w - 5 h - 5 text - blue - 400" />;
            </div>;
            <div>;
              <p className="text - 2xl font - bold">{getStatusCount ('deploying')}</p>;
              <p className="text - sm text - white / 60">Active</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10">;
          <div className="flex items - center gap - 3">;
            <div className="p - 2 bg - green - 500 / 20 rounded - lg">;
              <CheckCircle className="w - 5 h - 5 text - green - 400" />;
            </div>;
            <div>;
              <p className="text - 2xl font - bold">{getStatusCount ('completed')}</p>;
              <p className="text - sm text - white / 60">Live</p>;
            </div>;
          </div>;
        </div>;
        <div className="bg - white / 5 backdrop - blur - sm rounded - xl p - 4 border border - white / 10">;
          <div className="flex items - center gap - 3">;
            <div className="p - 2 bg - red - 500 / 20 rounded - lg">;
              <AlertCircle className="w - 5 h - 5 text - red - 400" />;
            </div>;
            <div>;
              <p className="text - 2xl font - bold">{getStatusCount ('failed')}</p>;
              <p className="text - sm text - white / 60">Failed</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Filter Tabs */}
      <div className='flex flex - wrap gap - 2'>;
          { key: 'all', label: 'All Deployments', count: deployments.length },
          {
            key: 'pending',
            label: 'Pending',
            count: getStatusCount ('pending'),
          },
          {
            key: 'deploying',
            label: 'Deploying',
            count: getStatusCount ('deploying'),
          },
          {
            key: 'completed',
            label: 'Completed',
            count: getStatusCount ('completed'),
          },
          { key: 'failed', label: 'Failed', count: getStatusCount ('failed') },
        ].map (({ key, label, count }) => (
          <button;
            key={key}
            on_click={() => set_filter (key as any)}
            className={`px - 4 py - 2 rounded - lg font - medium transition - all duration - 200 ${
              filter === key;
                ? 'bg - blue - 600 text - white shadow - lg';
                : 'bg - white / 5 text - white / 70 hover:bg - white / 10 hover:text - white / 90'            }`}              filter === key ? 'bg - blue - 600 text - white shadow - lg' : 'bg - white / 5 text - white / 70 hover:bg - white / 10 hover:text - white / 90';
            }`}
          >;
            {label} ({count});
          </button>))}
      </div>;
      {/* Deployments Grid */}
      <div className='grid grid - cols - 1 xl:grid - cols - 2 gap - 6'>;
        {filtered_deployments.map (deployment => (
          <div;
            key={deployment.id}
            className='group relative bg - white / 5 backdrop - blur - sm rounded - xl border border - white / 10 hover:border - white / 20 transition - all duration - 300 hover:shadow - xl hover:shadow - white / 5';
          >;
            {/* Status Header */}
            <div className='p - 6 border - b border - white / 10'>;
              <div className='flex items - start justify - between mb - 4'>;
                <div className='flex items - center gap - 3'>;
                  <div className='p - 2 bg - white / 10 rounded - lg'>;
                    {getVerticalIcon (deployment.vertical)}
                  </div>;
                  <div>;
                    <h3 className='font - bold text - lg text - white group - hover:text - white / 90 transition - colors'>;
                      {deployment.instance_name}
                    </h3>;
                    <div className='flex items - center gap - 2 mt - 1'>;
                      <span className='inline - flex items - center px - 2 py - 1 rounded - full text - xs font - medium bg - white / 10 text - white / 80'>;
                        {deployment.vertical}
                      </span>;
                      <span className='inline - flex items - center px - 2 py - 1 rounded - full text - xs font - medium bg - blue - 500 / 20 text - blue - 400'>                        {deployment.governance_type}          <div;
            key={deployment.id}
            className="group relative bg - white / 5 backdrop - blur - sm rounded - xl border border - white / 10 hover:border - white / 20 transition - all duration - 300 hover:shadow - xl hover:shadow - white / 5";
          >;
            {/* Status Header */}
            <div className="p - 6 border - b border - white / 10">;
              <div className="flex items - start justify - between mb - 4">;
                <div className="flex items - center gap - 3">;
                  <div className="p - 2 bg - white / 10 rounded - lg">;
                    {getVerticalIcon (deployment.vertical)}
                  </div>;
                  <div>;
                    <h3 className="font - bold text - lg text - white group - hover:text - white / 90 transition - colors">;
                      {deployment.instance_name}
                    </h3>;
                    <div className="flex items - center gap - 2 mt - 1">;
                      <span className="inline - flex items - center px - 2 py - 1 rounded - full text - xs font - medium bg - white / 10 text - white / 80">;
                        {deployment.vertical}
                      </span>;
                      <span className="inline - flex items - center px - 2 py - 1 rounded - full text - xs font - medium bg - blue - 500 / 20 text - blue - 400">;
                        {deployment.governance_type}

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


                  <div className='flex items-center gap-2 text-white/70'>
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


                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>
                </div>
                {(deployment.region || deployment.country) && (


                  <div className="flex items-center gap-2 text-white/70">
                    <span>📍</span>
                    <span>{deployment.region} {deployment.country}</span>
                  </div>


                <div className="text-sm font-medium text-white/80">Active Features</div>;
                <div className="flex flex-wrap gap-2">;
                  {deployment.features.slice(0, 4).map((feature) => (;
                    <span key={feature} className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">;
                      {feature.replace('_ ')}
                    </span>;
                  ))}
                  {deployment.features.length > 4 && (;
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">;
                      +{deployment.features.length - 4} more;
                    </span>;

                </div>;
              </div>;


              {/* Timestamps */}


                </div>;
              </div>;


              {/* Timestamps */}
              {/* Timestamps */}
              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
              <div className='flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10'>
                <div className='flex items-center gap-1'>
                  <Calendar className='w-3 h-3' />
                  <span>Created: {formatDate(deployment.createdAt)}</span>
                </div>
                {deployment.updatedAt !== deployment.createdAt && (
                  <div className='flex items-center gap-1'>
                    <RefreshCw className='w-3 h-3' />                    <span>Updated: {formatDate(deployment.updatedAt)}</span>              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1">
                  <span>📅</span>
                  <span>Created: {formatDate(deployment.createdAt)}</span>
                </div>
                {deployment.updatedAt !== deployment.createdAt && (
                  <div className="flex items-center gap-1">
                    <span>🔄</span>
                    <span>Updated: {formatDate(deployment.updatedAt)}</span>
                  </div>

              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">;
                <div className="flex items-center gap-1">;
                  <Calendar className="w-3 h-3" />;
                  <span>Created: {formatDate(deployment.createdAt)}</span>;
                </div>;
                {deployment.updatedAt !== deployment.createdAt && (;
                  <div className="flex items-center gap-1">;
                    <RefreshCw className="w-3 h-3" />;
                    <span>Updated: {formatDate(deployment.updatedAt)}</span>;
                  </div>;

              </div>;
            </div>;


            {/* Action Buttons */}

              </div>;
            </div>;


            {/* Action Buttons */}


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



        ))}
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
            <div className="p-6 pt-0">
              <div className="flex gap-2">
            <div className='p-6 pt-0'>
              <div className='flex gap-2'>
                {deployment.status === 'pending' && (
            <div className='p-6 pt-0'>
              <div className='flex gap-2'>
                {deployment.status === 'pending' && (
                  <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200'>
                    <Play className='w-4 h-4' />
                    Start Deployment
                  </button>
                )}
                {deployment.status === 'deploying' && (
                  <>
                    <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors duration-200'>
                      <Pause className='w-4 h-4' />
                      Pause
                    </button>
                    <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200'>
                      <StopCircle className='w-4 h-4' />
                      Stop
                    </button>
                  </>
                )}
                {deployment.status === 'completed' && (
                  <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200'>
                    <Eye className='w-4 h-4' />
                    View Instance
                  </button>
                )}
                {deployment.status === 'failed' && (
                  <button className='flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200'>
                    <RefreshCw className='w-4 h-4' />
                    Retry
                  </button>
                )}
                <button className='flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm font-medium rounded-lg transition-colors duration-200'>
                  <Settings className='w-4 h-4' />                </button>                {deployment.status === 'pending' && (                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    ▶️ Start Deployment
                  </button>
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
        ))}

      </div>;


      {/* Empty State */}
      {filteredDeployments.length === 0 && (
        <div className='text-center py-16'>
          <div className='w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full'>
            <Rocket className='w-8 h-8 text-white/40' />
          </div>
          <h3 className='text-lg font-medium text-white/60 mb-2'>
            No deployments found
          </h3>
          <p className='text-white/40 mb-6'>
            {filter === 'all'
              ? 'Start by creating your first Zion ecosystem deployment'
              : `No deployments with status "${filter}" found`}            }
          </p>;
          {filter === 'all' && (;
            <a
              href="/admin/os-deploy"

              <Rocket className="w-4 h-4" />;
              Deploy First Instance;
            </a>;
          )}

        </div>;
      </div>;

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
  );
}
          </p>;
          {filter === 'all' && (;
            <a
              href='/admin/os-deploy'
              className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200'>;
              <Rocket className='w-4 h-4' />              Deploy First Instance;
            </a>;
          )}

            <div className="p-6 pt-0">
              <div className="flex gap-2">
            >
              <Rocket className="w-4 h-4" />
              Deploy First Instance
            </a>
          )}
        </div>
      )}
    </div>

        </div>;
      )}
    </div>;


  );
}
  );
}
      {filteredDeployments.length === 0 && (;
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
    </div>;
  );
}
