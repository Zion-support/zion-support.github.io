
} from 'lucide-react';
interface Deployment {
  id: string;
  instanceName: string;
  status: 'pending' | 'deploying' | 'completed' | 'failed' | 'paused';
  createdAt: string;
  updatedAt: string;
  progress: number;
  features: string[];
  vertical: string;
  governanceType: string;
  domain?: string;
  subdomain?: string;
  region?: string;
  country?: string;
// Mock data - replace with actual API calls
const mockDeployments: Deployment[] = [
  {
    id: 'deploy-001'
    instanceName: 'Zion Health Network'
    status: 'completed'
    createdAt: '2024-01-15T10:30:00Z'
    updatedAt: '2024-01-15T11:45:00Z'
    progress: 100
    features: ['marketplace', 'zion_gpt', 'kyc_aml', 'dao_voting']
    vertical: 'HEALTH'
    governanceType: 'DAO_FULL'
    domain: 'health.zion.network'
    region: 'North America'
    country: 'United States'
  }
  {
    id: 'deploy-002'
    instanceName: 'EduDAO Academy'
    status: 'deploying'
    createdAt: '2024-01-15T14:20:00Z'
    updatedAt: '2024-01-15T15:10:00Z'
    progress: 65
    features: ['academy', 'zion_gpt', 'incubator_grants']
    vertical: 'EDUCATION'
    governanceType: 'DAO_LITE'
    subdomain: 'edu'
    region: 'Europe'
    country: 'Germany'
  }
  {
    id: 'deploy-003'
    instanceName: 'LegalTech DAO'
    status: 'pending'
    createdAt: '2024-01-15T16:00:00Z'
    updatedAt: '2024-01-15T16:00:00Z'
    progress: 0
    features: ['marketplace', 'onchain_contracts', 'web3_login']
    vertical: 'LAW'
    governanceType: 'DAO_FULL'
    domain: 'legal.zion.network'
    region: 'Asia Pacific'
    country: 'Singapore'
  }
];

  const [deployments, setDeployments] = useState<Deployment[]>(mockDeployments);
  const [filter, setFilter] = useState<
    'all' | 'pending' | 'deploying' | 'completed' | 'failed'
  >('all');
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
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
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
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
  }
const getVerticalIcon = (vertical: string) => {
    switch (vertical) {
      case 'HEALTH':
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
  }
  const getGovernanceIcon = (type: string) => {
    switch (type) {
      case 'ADMIN':
        return <User className='w-4 h-4 text-yellow-400' />;
      case 'DAO_LITE':
        return <Users className='w-4 h-4 text-blue-400' />;
      case 'DAO_FULL':
        return <Zap className='w-4 h-4 text-purple-400' />;
      default:
        return <User className='w-4 h-4 text-gray-400' />;
    }
  }
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short'
      day: 'numeric'
      hour: '2-digit'
      minute: '2-digit'
    });
  }
  const filteredDeployments = deployments.filter(
    deployment => filter === 'all' |deployment.status === filter
  );  const deployments = []; // This should be populated from your data source
  const filter = 'all'; // This should be managed with state
  const filteredDeployments = deployments.filter(deployment => filter === 'all' |deployment.status === filter);
    return deployments.filter(d => d.status === status).length;
  }
  return (
    <div className='space-y-8'>
      {/* Header Section */}
      <div className='border-b border-white/10 pb-6'>
        <h1 className='text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent'>
          Deployment Management
        </h1>
        <p className='text-white/70 mt-2'>
          Monitor and manage your Zion ecosystem deployments
        </p>
      </div>
      {/* Stats Overview */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-8'>
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-blue-500/20 rounded-lg'>
              <Rocket className='w-5 h-5 text-blue-400' />
            </div>
            <div>
              <p className='text-2xl font-bold'>{deployments.length}</p>
              <p className='text-sm text-white/60'>Total</p>
            </div>
          </div>
        </div>
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-yellow-500/20 rounded-lg'>
              <Clock className='w-5 h-5 text-yellow-400' />
            </div>
            <div>
              <p className='text-2xl font-bold'>{getStatusCount('pending')}</p>
              <p className='text-sm text-white/60'>Pending</p>
            </div>
          </div>
        </div>
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-blue-500/20 rounded-lg'>
              <Activity className='w-5 h-5 text-blue-400' />
            </div>
            <div>
              <p className='text-2xl font-bold'>
                {getStatusCount('deploying')}
              </p>
              <p className='text-sm text-white/60'>Active</p>
            </div>
          </div>
        </div>
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-green-500/20 rounded-lg'>
              <CheckCircle className='w-5 h-5 text-green-400' />
            </div>
            <div>
              <p className='text-2xl font-bold'>
                {getStatusCount('completed')}
              </p>
              <p className='text-sm text-white/60'>Live</p>
            </div>
          </div>
        </div>
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-red-500/20 rounded-lg'>
              <AlertCircle className='w-5 h-5 text-red-400' />
            </div>
            <div>
              <p className='text-2xl font-bold'>{getStatusCount('failed')}</p>
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
          }
          { key: 'failed', label: 'Failed', count: getStatusCount('failed') }
        ].map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => setFilter(key as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              filter === key
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90'            }`}              filter === key ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90'
            }`}
          >
            {label} ({count})
          </button>

"use client",;
import { useState, useEffect } from "react",;
import {;
  Rocket,;
  Clock,;
  CheckCircle,;
  AlertCircle,;
  Play,;
  Eye,;
  Settings,;
  Globe,;
  Activity,;
  Calendar,;
  User,;
  Building2,;
  Shield,;
  TrendingUp,;
  Users,;
  Zap,;
  Sparkles,;
  ArrowRight,;
  RefreshCw,;
  Pause,;
  StopCircle,;
  MapPin;
} from "lucide-react",;
interface Deployment {;
  id: string,;
  instanceName: string,;
  status: 'pending' | 'deploying' | 'completed' | 'failed' | 'paused',;
  createdAt: string,;
  updatedAt: string,;
  progress: number,;
  features: string[],;
  vertical: string,;
  governanceType: string,;
  domain?: string,;
  subdomain?: string,;
  region?: string,;
  country?: string;
}
;
// Mock data - replace with actual API calls;
const mockDeployments: Deployment[] = [;
  {;
    id: "deploy-001",;
    instanceName: "Zion Health Network",;
    status: "completed",;
    createdAt: "2024-01-15T10:30:00Z",;
    updatedAt: "2024-01-15T11:45:00Z",;
    progress: 100,;
    features: ["marketplace", "zion_gpt", "kyc_aml", "dao_voting"],;
    vertical: "HEALTH",;
    governanceType: "DAO_FULL",;
    domain: "health.zion.network",;
    region: "North America",;
    country: "United States";
  },;
  {;
    id: "deploy-002",;
    instanceName: "EduDAO Academy",;
    status: "deploying",;
    createdAt: "2024-01-15T14:20:00Z",;
    updatedAt: "2024-01-15T15:10:00Z",;
    progress: 65,;
    features: ["academy", "zion_gpt", "incubator_grants"],;
    vertical: "EDUCATION",;
    governanceType: "DAO_LITE",;
    subdomain: "edu",;
    region: "Europe",;
    country: "Germany";
  },;
  {;
    id: "deploy-003",;
    instanceName: "LegalTech DAO",;
    status: "pending",;
    createdAt: "2024-01-15T16:00:00Z",;
    updatedAt: "2024-01-15T16:00:00Z",;
    progress: 0,;
    features: ["marketplace", "onchain_contracts", "web3_login"],;
    vertical: "LAW",;
    governanceType: "DAO_FULL",;
    domain: "legal.zion.network",;
    region: "Asia Pacific",;
    country: "Singapore";
  }
],;
export default function DeploymentsPage() {;
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
    }
  },;
  const getStatusIcon = (status: string) => {;
    switch (status) {;
      case 'completed': return <CheckCircle className="w-5 h-5" />,;
      case 'deploying': return <Activity className="w-5 h-5" />,;
      case 'pending': return <Clock className="w-5 h-5" />,;
      case 'failed': return <AlertCircle className="w-5 h-5" />,;
      case 'paused': return <Pause className="w-5 h-5" />,;
      default: return <Clock className="w-5 h-5" />;
    }
  },;
  const getVerticalIcon = (vertical: string) => {;
    switch (vertical) {;
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />,;
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />,;
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />,;
      case "GOV": return <Users className="w-4 h-4 text-red-400" />,;
      default: return <Globe className="w-4 h-4 text-gray-400" />;
    }
  },;
  const getGovernanceIcon = (type: string) => {;
    switch (type) {;
      case "ADMIN": return <User className="w-4 h-4 text-yellow-400" />,;
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />,;
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />,;
      default: return <User className="w-4 h-4 text-gray-400" />;
    }
  },;
  const formatDate = (dateString: string) => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      month: 'short',;
      day: 'numeric',;
      hour: '2-digit',;
      minute: '2-digit';
    });
  },;
  const filteredDeployments = deployments.filter(deployment =>;
    filter === 'all' || deployment.status === filter;
  ),;
  const getStatusCount = (status: string) => {;
    return deployments.filter(d => d.status === status).length;
  },;
  return (;
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

        ))}
      </div>
      {/* Deployments Grid */}

              )}
            </div>
            {/* Deployment Details */}

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

                  <div className="flex items-center gap-2 text-white/70">
                    <span>📍</span>
                    <span>{deployment.region} {deployment.country}</span>
                  </div>

            <div className="p-6 space-y-4">;
              {/* Domain & Location */}
              <div className="grid grid-cols-2 gap-4 text-sm">;
                <div className="flex items-center gap-2 text-white/70">;
                  <Globe className="w-4 h-4" />;
                  <span className="font-mono">;
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>;
                </div>;
                {(deployment.region || deployment.country) && (;
                  <div className="flex items-center gap-2 text-white/70">;
                    <MapPin className="w-4 h-4" />;
                    <span>{[deployment.region, deployment.country].filter(Boolean).join()}</span>;
                  </div>;

                )}
              </div>
              {/* Features */}

                  )}
                </div>
              </div>
              {/* Timestamps */}

                )}
              </div>
            </div>
            {/* Action Buttons */}

        ))}
      </div>
      {/* Empty State */}

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

