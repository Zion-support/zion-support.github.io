"use client",

<<<<<<< HEAD
import { useState, useEffect } from "react",
import { 
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
  MapPin
} from "lucide-react",

interface Deployment {
  id: string,
  instanceName: string,
  status: 'pending' | 'deploying' | 'completed' | 'failed' | 'paused',
  createdAt: string,
  updatedAt: string,
  progress: number,
  features: string[],
  vertical: string,
  governanceType: string,
  domain?: string,
  subdomain?: string,
  region?: string,
  country?: string
}

// Mock data - replace with actual API calls
const mockDeployments: Deployment[] = [
  {
    id: "deploy-001",
    instanceName: "Zion Health Network",
    status: "completed",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T11:45:00Z",
    progress: 100,
    features: ["marketplace", "zion_gpt", "kyc_aml", "dao_voting"],
    vertical: "HEALTH",
    governanceType: "DAO_FULL",
    domain: "health.zion.network",
    region: "North America",
    country: "United States"
  },
  {
    id: "deploy-002",
    instanceName: "EduDAO Academy",
    status: "deploying",
    createdAt: "2024-01-15T14:20:00Z",
    updatedAt: "2024-01-15T15:10:00Z",
    progress: 65,
    features: ["academy", "zion_gpt", "incubator_grants"],
    vertical: "EDUCATION",
    governanceType: "DAO_LITE",
    subdomain: "edu",
    region: "Europe",
    country: "Germany"
  },
  {
    id: "deploy-003",
    instanceName: "LegalTech DAO",
    status: "pending",
    createdAt: "2024-01-15T16:00:00Z",
    updatedAt: "2024-01-15T16:00:00Z",
    progress: 0,
    features: ["marketplace", "onchain_contracts", "web3_login"],
    vertical: "LAW",
    governanceType: "DAO_FULL",
    domain: "legal.zion.network",
    region: "Asia Pacific",
    country: "Singapore"
  }
],

export default function DeploymentsPage() {
  const [deployments, setDeployments] = useState<Deployment[]>(mockDeployments),
  const [filter, setFilter] = useState<'all' | 'pending' | 'deploying' | 'completed' | 'failed'>('all'),
=======
import {_Rocket, _Clock, _CheckCircle, _AlertCircle, _Play, _Eye, _Settings, _Globe, _Activity, _Calendar, _User, _Building2, _Shield, _TrendingUp, _Users, _Zap, _Sparkles, _ArrowRight, _RefreshCw, _Pause, _StopCircle, _MapPin} from "lucide-react";

interface Deployment {_id: string;
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
  country?: string;}

// Mock data - replace with actual API calls
const mockDeployments: Deployment[] = [
  {_id: "deploy-001", _instanceName: "Zion Health Network", _status: "completed", _createdAt: "2024-01-15T10:30:00Z", _updatedAt: "2024-01-15T11:45:00Z", _progress: 100, _features: ["marketplace", _"zion_gpt", _"kyc_aml", _"dao_voting"], _vertical: "HEALTH", _governanceType: "DAO_FULL", _domain: "health.zion.network", _region: "North America", _country: "United States"},
  {_id: "deploy-002", _instanceName: "EduDAO Academy", _status: "deploying", _createdAt: "2024-01-15T14:20:00Z", _updatedAt: "2024-01-15T15:10:00Z", _progress: 65, _features: ["academy", _"zion_gpt", _"incubator_grants"], _vertical: "EDUCATION", _governanceType: "DAO_LITE", _subdomain: "edu", _region: "Europe", _country: "Germany"},
  {_id: "deploy-003", _instanceName: "LegalTech DAO", _status: "pending", _createdAt: "2024-01-15T16:00:00Z", _updatedAt: "2024-01-15T16:00:00Z", _progress: 0, _features: ["marketplace", _"onchain_contracts", _"web3_login"], _vertical: "LAW", _governanceType: "DAO_FULL", _domain: "legal.zion.network", _region: "Asia Pacific", _country: "Singapore"}
];

export default function DeploymentsPage() {_const [deployments, _setDeployments] = useState<Deployment[]>(mockDeployments);
  const [filter, _setFilter] = useState<'all' | 'pending' | 'deploying' | 'completed' | 'failed'>('all');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _getStatusColor = (_status: string) => {
    switch (status) {
<<<<<<< HEAD
      case 'completed': return 'text-green-400',
      case 'deploying': return 'text-blue-400',
      case 'pending': return 'text-yellow-400',
      case 'failed': return 'text-red-400',
      case 'paused': return 'text-orange-400',
      default: return 'text-gray-400'
    }
  },

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5" />,
      case 'deploying': return <Activity className="w-5 h-5" />,
      case 'pending': return <Clock className="w-5 h-5" />,
      case 'failed': return <AlertCircle className="w-5 h-5" />,
      case 'paused': return <Pause className="w-5 h-5" />,
      default: return <Clock className="w-5 h-5" />
    }
  },

  const getVerticalIcon = (vertical: string) => {
    switch (vertical) {
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />,
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />,
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />,
      case "GOV": return <Users className="w-4 h-4 text-red-400" />,
      default: return <Globe className="w-4 h-4 text-gray-400" />
    }
  },

  const getGovernanceIcon = (type: string) => {
    switch (type) {
      case "ADMIN": return <User className="w-4 h-4 text-yellow-400" />,
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />,
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />,
      default: return <User className="w-4 h-4 text-gray-400" />
    }
  },

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  },
=======
      case 'completed': return 'text-green-400';
      case 'deploying': return 'text-blue-400';
      case 'pending': return 'text-yellow-400';
      case 'failed': return 'text-red-400';
      case 'paused': return 'text-orange-400';
      default: return 'text-gray-400';}
  };

  const _getStatusIcon = (_status: string) => {_switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5" />;
      case 'deploying': return <Activity className="w-5 h-5" />;
      case 'pending': return <Clock className="w-5 h-5" />;
      case 'failed': return <AlertCircle className="w-5 h-5" />;
      case 'paused': return <Pause className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;}
  };

  const _getVerticalIcon = (_vertical: string) => {_switch (vertical) {
      case "HEALTH": return <Shield className="w-4 h-4 text-blue-400" />;
      case "EDUCATION": return <Building2 className="w-4 h-4 text-green-400" />;
      case "LAW": return <Shield className="w-4 h-4 text-purple-400" />;
      case "GOV": return <Users className="w-4 h-4 text-red-400" />;
      default: return <Globe className="w-4 h-4 text-gray-400" />;}
  };

  const _getGovernanceIcon = (_type: string) => {_switch (type) {
      case "ADMIN": return <User className="w-4 h-4 text-yellow-400" />;
      case "DAO_LITE": return <Users className="w-4 h-4 text-blue-400" />;
      case "DAO_FULL": return <Zap className="w-4 h-4 text-purple-400" />;
      default: return <User className="w-4 h-4 text-gray-400" />;}
  };

  const _formatDate = (_dateString: string) => {_return new Date(dateString).toLocaleDateString('en-US', _{
      month: 'short', _day: 'numeric', _hour: '2-digit', _minute: '2-digit'});
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredDeployments = deployments.filter(deployment => 
    filter === 'all' || deployment.status === filter
  ),

<<<<<<< HEAD
  const getStatusCount = (status: string) => {
    return deployments.filter(d => d.status === status).length
  },
=======
  const _getStatusCount = (_status: string) => {_return deployments.filter(d => d.status === status).length;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className="space-y-8">
      {_/* Header Section */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Deployment Management
        </h1>
        <p className="text-white/70 mt-2">Monitor and manage your Zion ecosystem deployments</p>
      </div>

      {_/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Rocket className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{_deployments.length}</p>
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
              <p className="text-2xl font-bold">{_getStatusCount('pending')}</p>
              <p className="text-sm text-white/60">Pending</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{_getStatusCount('deploying')}</p>
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
              <p className="text-2xl font-bold">{_getStatusCount('completed')}</p>
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
              <p className="text-2xl font-bold">{_getStatusCount('failed')}</p>
              <p className="text-sm text-white/60">Failed</p>
            </div>
          </div>
        </div>
      </div>

      {_/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {_[
          { key: 'all', _label: 'All Deployments', _count: deployments.length},
          {_key: 'pending', _label: 'Pending', _count: getStatusCount('pending')},
          {_key: 'deploying', _label: 'Deploying', _count: getStatusCount('deploying')},
          {_key: 'completed', _label: 'Completed', _count: getStatusCount('completed')},
          {_key: 'failed', _label: 'Failed', _count: getStatusCount('failed')}
        ].map(_({_key, _label, _count}) => (_<button
            key={_key}
            onClick={_() => setFilter(key as any)}
            className={_`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              filter === key
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90'}`}
          >
            {_label} ({_count})
          </button>
        ))}
      </div>

      {_/* Deployments Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {_filteredDeployments.map(_(deployment) => (
          <div key={deployment.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">
            {_/* Status Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {_getVerticalIcon(deployment.vertical)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">
                      {_deployment.instanceName}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">
                        {_deployment.vertical}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                        {_deployment.governanceType}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {_getStatusIcon(deployment.status)}
                  <span className={_`text-sm font-medium ${getStatusColor(deployment.status)}`}>
                    {_deployment.status.charAt(0).toUpperCase() + deployment.status.slice(1)}
                  </span>
                </div>
              </div>

              {_/* Progress Bar for Active Deployments */}
              {_deployment.status === 'deploying' && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-white/70">
                    <span>Deployment Progress</span>
                    <span>{deployment.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                      style={_{ width: `${deployment.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {_/* Deployment Details */}
            <div className="p-6 space-y-4">
              {_/* Domain & Location */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <Globe className="w-4 h-4" />
                  <span className="font-mono">
                    {_deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>
                </div>
                {_(deployment.region || deployment.country) && (
                  <div className="flex items-center gap-2 text-white/70">
                    <MapPin className="w-4 h-4" />
<<<<<<< HEAD
                    <span>{[deployment.region, deployment.country].filter(Boolean).join()}</span>
=======
                    <span>{[deployment.region, _deployment.country].filter(Boolean).join(', _')}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                )}
              </div>

              {_/* Features */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-white/80">Active Features</div>
                <div className="flex flex-wrap gap-2">
                  {_deployment.features.slice(0, _4).map(_(feature) => (
                    <span key={feature} className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">
<<<<<<< HEAD
                      {feature.replace('_ ')}
=======
                      {_feature.replace('_', _' ')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  ))}
                  {_deployment.features.length > 4 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">
                      +{deployment.features.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {_/* Timestamps */}
              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Created: {_formatDate(deployment.createdAt)}</span>
                </div>
                {_deployment.updatedAt !== deployment.createdAt && (
                  <div className="flex items-center gap-1">
                    <RefreshCw className="w-3 h-3" />
                    <span>Updated: {formatDate(deployment.updatedAt)}</span>
                  </div>
                )}
              </div>
            </div>

            {_/* Action Buttons */}
            <div className="p-6 pt-0">
              <div className="flex gap-2">
                {_deployment.status === 'pending' && (
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    <Play className="w-4 h-4" />
                    Start Deployment
                  </button>
                )}
                
                {_deployment.status === 'deploying' && (
                  <>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                      <Pause className="w-4 h-4" />
                      Pause
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                      <StopCircle className="w-4 h-4" />
                      Stop
                    </button>
                  </>
                )}
                
                {_deployment.status === 'completed' && (
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    <Eye className="w-4 h-4" />
                    View Instance
                  </button>
                )}
                
                {_deployment.status === 'failed' && (
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    <RefreshCw className="w-4 h-4" />
                    Retry
                  </button>
                )}
                
                <button className="flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm font-medium rounded-lg transition-colors duration-200">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {_/* Empty State */}
      {_filteredDeployments.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">
            <Rocket className="w-8 h-8 text-white/40" />
          </div>
          <h3 className="text-lg font-medium text-white/60 mb-2">No deployments found</h3>
          <p className="text-white/40 mb-6">
            {filter === 'all' 
              ? 'Start by creating your first Zion ecosystem deployment'
              : `No deployments with status "${filter}" found`
            }
          </p>
          {_filter === 'all' && (
            <a 
              href="/admin/os-deploy" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Rocket className="w-4 h-4" />
              Deploy First Instance
            </a>
          )}
        </div>
      )}
    </div>
  )
}