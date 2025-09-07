<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
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
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  status: 'pending' | 'deploying' | 'completed' | 'failed' | 'paused';
  createdAt: string;
  updatedAt: string;
  progress: number;
  features: string[];
<<<<<<< HEAD
=======
  // TODO: Implement
}
  id: string;,
  instanceName: string;
  status: 'pending' | 'deploying' | 'completed' | 'failed' | 'paused';',
  createdAt: string;
  updatedAt: string;,
  progress: number;
  features: string[];,
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  vertical: string;
  governanceType: string;
  domain?: string;
  subdomain?: string;
  region?: string;
  country?: string;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>;
          <div className='flex items-center gap-3'>;
            <div className='p-2 bg-yellow-500/20 rounded-lg'>;
              <Clock className='w-5 h-5 text-yellow-400' />;
<<<<<<< HEAD
=======


        <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>;
</div>
          <div className='flex items-center gap-3'>;
            <div className='p-2 bg-yellow-500/20 rounded-lg'>;
              <Clock className='w-5 h-5 text-yellow-400' />;

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
export default function DeploymentsPage() {
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
  };

  const filteredDeployments = deployments.filter(
    deployment => filter === 'all' || deployment.status === filter
  );
  const getStatusCount = (status: string) => {
    return deployments.filter(d => d.status === status).length;
  };

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
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


              <p className='text-sm text-white/60'>Failed</p>            </div>  return (
    <div className="space-y-8">;
      {/* Header Section */}

      <div className="border-b border-white/10 pb-6">;
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">;
          Deployment Management;
        </h1>;
        <p className="text-white/70 mt-2">Monitor and manage your Zion ecosystem deployments</p>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">"
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">"
          <div className="flex items-center gap-3">"
            <div className="p-2 bg-blue-500/20 rounded-lg">"
              <Rocket className="w-5 h-5 text-blue-400" />
            </div>
            <div>"
              <p className="text-2xl font-bold">{deployments.length}</p>"
              <p className="text-sm text-white/60">Total</p>
            </div>
          </div>
        </div>"
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">"
          <div className="flex items-center gap-3">"
            <div className="p-2 bg-yellow-500/20 rounded-lg">"
              <Clock className="w-5 h-5 text-yellow-400" />
            </div>
            <div>"
              <p className="text-2xl font-bold">{getStatusCount('pending')}</p>"
              <p className="text-sm text-white/60">Pending</p>
            </div>
          </div>
        </div>"
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">"
          <div className="flex items-center gap-3">"
            <div className="p-2 bg-blue-500/20 rounded-lg">"
              <CheckCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div>'"
              <p className="text-2xl font-bold">{getStatusCount('deploying')}</p>"
              <p className="text-sm text-white/60">Active</p>
            </div>
          </div>
        </div>"
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">"
          <div className="flex items-center gap-3">"
            <div className="p-2 bg-green-500/20 rounded-lg">"
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>'"
              <p className="text-2xl font-bold">{getStatusCount('completed')}</p>"
              <p className="text-sm text-white/60">Live</p>
            </div>
          </div>
        </div>"
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">"
          <div className="flex items-center gap-3">"
            <div className="p-2 bg-red-500/20 rounded-lg">"
              <AlertCircle className="w-5 h-5 text-red-400" />
            </div>
            <div>'"
              <p className="text-2xl font-bold">{getStatusCount('failed')}</p>"
              <p className="text-sm text-white/60">Failed</p>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
              <p className='text-sm text-white/60'>Failed</p>
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      {/* Filter Tabs */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className='flex flex-wrap gap-2'>
          { key: 'all', label: 'All Deployments', count: deployments.length }
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      <div className='flex flex-wrap gap-2'>
          { key: 'all', label: 'All Deployments', count: deployments.length }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
<div className='flex flex-wrap gap-2'>
        {[
          { key: 'all', label: 'All Deployments', count: deployments.length },
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
      <div className='flex flex-wrap gap-2'>
          { key: 'all', label: 'All Deployments', count: deployments.length }
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90'
            }`}
          >
            {label} ({count})
          </button>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

pr-12325
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
<<<<<<< HEAD
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
=======
          <button
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            key={key}
            onClick={() => setFilter(key as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${;
              filter === key;
                ? 'bg-blue-600 text-white shadow-lg';
<<<<<<< HEAD
<<<<<<< HEAD
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90';
=======
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90'            }`}              filter === key ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90';
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90'            }`}              filter === key ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90';
<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            }`}
          >;
            {label} ({count});
          </button>;
<<<<<<< HEAD
        ))}
      </div>;
      {/* Deployments Grid */}
=======

      </div>;

<<<<<<< HEAD

      {/* Deployments Grid */}'
=======
      {/* Deployments Grid */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>;
        {filteredDeployments && filteredDeployments.map(deployment => (;
      </div>
      {/* Deployments Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredDeployments.map((deployment) => (
=======
<<<<<<< HEAD
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
        {filteredDeployments.map(deployment => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          <div
=======
      {/* Filter Tabs */}          <div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            key={deployment && deployment.id}
=======


          <div;
            key={deployment && deployment.id}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className='group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5'>;
            {/* Status Header */}'
            <div className='p-6 border-b border-white/10'>;'
              <div className='flex items-start justify-between mb-4'>;'
                <div className='flex items-center gap-3'>;'
                  <div className='p-2 bg-white/10 rounded-lg'>;
                    {getVerticalIcon(deployment && deployment.vertical)}
                  </div>;
                  <div>;'
                    <h3 className='font-bold text-lg text-white group-hover:text-white/90 transition-colors'>;
                      {deployment && deployment.instanceName}
                    </h3>;'
                    <div className='flex items-center gap-2 mt-1'>;'
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80'>;
                        {deployment && deployment.vertical}
                      </span>;'
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400'>                        {deployment && deployment.governanceType}          <div;
            key={deployment && deployment.id}"
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;
            {/* Status Header */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400'>
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
                      deployment.status.slice(1)}
                  </span>
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
                      className='bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out'
                      style={{ width: `${deployment.progress}%` }}
                    ></div>
                  </div>
<<<<<<< HEAD
                </div>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


        ))}
      </div>
      {/* Deployments Grid */}

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredDeployments.map((deployment) => (
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
        {filteredDeployments.map(deployment => (
origin/cursor/expand-services-advertise-and-build-project-c28b
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
<div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
        {filteredDeployments.map(deployment => (
          <div
            key={deployment.id}
            className='group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5'
          >
            {/* Status Header */}
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
pr-12325
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
                      <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400'>
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
                      deployment.status.slice(1)}
                  </span>
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
                      className='bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out'
                      style={{ width: `${deployment.progress}%` }}
                    ></div>
                  </div>
                </div>
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


        ))}
      </div>
      {/* Deployments Grid */}

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">;
        {filteredDeployments.map((deployment) => (;"
          <div key={deployment.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;
            {/* Status Header */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <div className="p-6 border-b border-white/10">;
              <div className="flex items-start justify-between mb-4">;
                <div className="flex items-center gap-3">;
=======

"
            <div className="p-6 border-b border-white/10">;"
              <div className="flex items-start justify-between mb-4">;"
                <div className="flex items-center gap-3">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <div className="p-2 bg-white/10 rounded-lg">;
                    {getVerticalIcon(deployment && deployment.vertical)}
                  </div>;
                  <div>;"
                    <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">;
                      {deployment && deployment.instanceName}
                    </h3>;"
                    <div className="flex items-center gap-2 mt-1">;"
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">;
                        {deployment && deployment.vertical}
                      </span>;"
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">;
                        {deployment && deployment.governanceType}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      </span>;
                    </div>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


              {/* Progress Bar for Active Deployments */}
              {deployment && deployment.status === 'deploying' && (;
                <div className='space-y-2'>;
                  <div className='flex justify-between text-sm text-white/70'>;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                </div>      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">;
        {filteredDeployments.map((deployment) => (;
          <div key={deployment.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;
            {/* Status Header */}                      </span>;
                    </div>;
                  </div>;
                </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <span>Deployment Progress</span>;
                    <span>{deployment && deployment.progress}%</span>;
                  </div>;'
                  <div className='w-full bg-white/10 rounded-full h-2'>;
                    <div'`
                      className='bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out'                      style={{ width: `${deployment && deployment.progress}%` }}                    <span>Deployment Progress</span>;
                    <span>{deployment && deployment.progress}%</span>;
                  </div>;"
                  <div className="w-full bg-white/10 rounded-full h-2">;
                    <div"
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"`
                      style={{ width: `${deployment && deployment.progress}%` }}></div>;
                  </div>;
                </div>;
              )}
            </div>
            {/* Deployment Details */}
<<<<<<< HEAD
<<<<<<< HEAD
<div className='p-6 space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
<div className='p-6 space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {/* Domain & Location */}
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div className='flex items-center gap-2 text-white/70'>
                  <Globe className='w-4 h-4' />
=======
              {/* Domain & Location */}'
              <div className='grid grid-cols-2 gap-4 text-sm'>'
                <div className='flex items-center gap-2 text-white/70'>'
                  <Globe className='w-4 h-4' />'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <span className='font-mono'>
                    {deployment.domain |
                      deployment.subdomain |'
                      'No domain set'}
                  </span>
                </div>
                {(deployment.region |deployment.country) && ('
                  <div className='flex items-center gap-2 text-white/70'>'
                    <MapPin className='w-4 h-4' />
                    <span>
                      {[deployment.region, deployment.country]
                        .filter(Boolean)'
                        .join(', ')}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    </span>                  </div>              {/* Domain & Location */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      style={{ width: `${deployment.progress}%` }}
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                    </span>                  </div>              {/* Domain & Location */}
                      style={{ width: `${deployment.progress}%` }}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <div className="flex items-center gap-2">
                  {getStatusIcon(deployment.status)}
                  <span className={`text-sm font-medium ${getStatusColor(deployment.status)}`}>
                    {deployment.status.charAt(0).toUpperCase() + deployment.status.slice(1)}
                  </span>
                </div>
              </div>
              {/* Progress Bar for Active Deployments */}
              {deployment.status === 'deploying' && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-white/70">
                    <span>Deployment Progress</span>
                    <span>{deployment.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                <div className='flex items - center gap - 2'>;
                  {getStatusIcon (deployment.status)}
                  <span;
                    className={`text - sm font - medium ${getStatusColor (deployment.status)}`}
                  >;
                    {deployment.status.char_at (0).toUpperCase () +;
                      deployment.status.slice (1)}                  </span>                <div className="flex items - center gap - 2">;
                  {getStatusIcon (deployment.status)}
                  <span className={`text - sm font - medium ${getStatusColor (deployment.status)}`}>;
                    {deployment.status.char_at (0).toUpperCase () + deployment.status.slice (1)}
                </div>;
              </div>;
              {/* Progress Bar for Active Deployments */}
              {deployment.status === 'deploying' && (
                <div className='space - y-2'>;
                  <div className='flex justify - between text - sm text - white / 70'>;
                    <span > Deployment Progress</span>;
                    <span>{deployment.progress}%</span>;
                  </div>;
                  <div className='w - full bg - white / 10 rounded - full h - 2'>;
                    <div;
                      className='bg - blue - 500 h - 2 rounded - full transition - all duration - 500 ease - out'                      style={{ width: `${deployment.progress}%` }}                    <span > Deployment Progress</span>;
                    <span>{deployment.progress}%</span>;
                  </div>;
                  <div className="w - full bg - white / 10 rounded - full h - 2">;
                    <div;
                      className="bg - blue - 500 h - 2 rounded - full transition - all duration - 500 ease - out";
<<<<<<< HEAD
<<<<<<< HEAD
                      style={{ width: `${deployment.progress}%` }}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                      style={{ width: `${deployment.progress}%` }}                      style={{ width: `${deployment.progress}%` }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    ></div>;
                  </div>;
                </div>)}
            </div>;
            {/* Deployment Details */}
              {/* Domain & Location */}"
              <div className="grid grid-cols-2 gap-4 text-sm">"
                <div className="flex items-center gap-2 text-white/70">
                  <span></span>"
                  <span className="font-mono">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      style={{ width: `${deployment.progress}%` }}
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
                    </span>                  </div>              {/* Domain & Location */}
                      style={{ width: `${deployment.progress}%` }}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>
                </div>
                {(deployment.region || deployment.country) && ("
                  <div className="flex items-center gap-2 text-white/70">
                    <span></span>
                    <span>{deployment.region} {deployment.country}</span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                  </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

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


ursor/fix-website-loading-errors-and-merge-6662
                )}
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
                  </div>
                )}
              </div>
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <div className='grid grid-cols-2 gap-4 text-sm'>;
=======
                  </div>              <div className='grid grid-cols-2 gap-4 text-sm'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <div className='flex items-center gap-2 text-white/70'>;
                  <Globe className='w-4 h-4' />;
=======

                )}
              </div>

'
              <div className='grid grid-cols-2 gap-4 text-sm'>;'
                <div className='flex items-center gap-2 text-white/70'>;'
                  <Globe className='w-4 h-4' />;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <span className='font-mono'>;
                    {deployment && deployment.domain ||;
                      deployment && deployment.subdomain ||;'
                      'No domain set'}
                  </span>;
                </div>;
                {(deployment && deployment.region || deployment && deployment.country) && (;'
                  <div className='flex items-center gap-2 text-white/70'>;'
                    <MapPin className='w-4 h-4' />;
                    <span>;
                      {[deployment && deployment.region, deployment && deployment.country];
                        .filter(Boolean);'
                        .join(', ')}
                    </span>                  </div>              {/* Domain & Location */}"
              <div className="grid grid-cols-2 gap-4 text-sm">;"
                <div className="flex items-center gap-2 text-white/70">;
                  <span>🌐</span>;"
                  <span className="font-mono">;'
                    {deployment && deployment.domain || deployment && deployment.subdomain || 'No domain set'}
                  </span>;
                </div>;
                {(deployment && deployment.region || deployment && deployment.country) && (;"
                  <div className="flex items-center gap-2 text-white/70">;
                    <span>📍</span>;
                    <span>{deployment && deployment.region} {deployment && deployment.country}</span>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {/* Features */}
<div className='space-y-2'>
                <div className='text-sm font-medium text-white/80'>
                  Active Features
                </div>
                <div className='flex flex-wrap gap-2'>
                  {deployment.features.slice(0, 4).map(feature => (
                    <span
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      key={feature}
                      className='inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70'
                    >
                      {feature.replace('_', ' ')}
                    </span>
                  ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  {deployment.features.length > 4 && (
                    <span className='inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70'>
                      +{deployment.features.length - 4} more
                    </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                  )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              {/* Timestamps */}
                    ></div>
                  </div>
                </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">;
        {filteredDeployments.map((deployment) => (;
          <div key={deployment.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;
            {/* Status Header */}
            <div className="p-6 border-b border-white/10">;
              <div className="flex items-start justify-between mb-4">;
                <div className="flex items-center gap-3">;
                  <div className="p-2 bg-white/10 rounded-lg">;
                    {getVerticalIcon(deployment.vertical)}
                  </div>;
                  <div>;
                    <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">;
                      {deployment.instanceName}
                    </h3>;
                    <div className="flex items-center gap-2 mt-1">;
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">;
                        {deployment.vertical}
                      </span>;
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">;
                        {deployment.governanceType}
                      </span>;
                    </div>;
                  </div>;
                </div>;
                <div className="flex items-center gap-2">;
                  {getStatusIcon(deployment.status)}
                  <span className={`text-sm font-medium ${getStatusColor(deployment.status)}`}>;
                    {deployment.status.charAt(0).toUpperCase() + deployment.status.slice(1)}
                  </span>;
                </div>;
              </div>;
              {/* Progress Bar for Active Deployments */}
              {deployment.status === 'deploying' && (;
                <div className="space-y-2">;
                  <div className="flex justify-between text-sm text-white/70">;
                    <span>Deployment Progress</span>;
                    <span>{deployment.progress}%</span>;
                  </div>;
                  <div className="w-full bg-white/10 rounded-full h-2">;
                    <div;
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out";
                      style={{ width: `${deployment.progress}%` }}
                    ></div>;
                  </div>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              )}
            </div>;
            {/* Deployment Details */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    {deployment.domain ||
                      deployment.subdomain ||
                      'No domain set'}
                  </span>
                </div>
                {(deployment.region || deployment.country) && (

=======
                  )}
              {/* Timestamps */}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
                {(deployment.region |deployment.country) && (
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
                    {deployment.domain ||
                      deployment.subdomain ||
                      'No domain set'}
                  </span>
                </div>
                {(deployment.region || deployment.country) && (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <div className='flex items-center gap-2 text-white/70'>
=======
'
                  <div className='flex items-center gap-2 text-white/70'>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <MapPin className='w-4 h-4' />
                    <span>
                      {[deployment.region, deployment.country]
                        .filter(Boolean)'
                        .join(', ')}
                    </span>                  </div>              {/* Domain & Location */}"
              <div className="grid grid-cols-2 gap-4 text-sm">"
                <div className="flex items-center gap-2 text-white/70">
                  <span>🌐</span>"
                  <span className="font-mono">
<<<<<<< HEAD
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>
                </div>
                {(deployment.region || deployment.country) && (

=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <div className="flex items-center gap-2 text-white/70">
                    <span>📍</span>
                    <span>{deployment.region} {deployment.country}</span>
                  </div>
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <div className="p-6 space-y-4">;
              {/* Domain & Location */}"
              <div className="grid grid-cols-2 gap-4 text-sm">;"
                <div className="flex items-center gap-2 text-white/70">;"
                  <Globe className="w-4 h-4" />;"
                  <span className="font-mono">;'
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>;
                </div>;
                {(deployment.region || deployment.country) && (;"
                  <div className="flex items-center gap-2 text-white/70">;"
                    <MapPin className="w-4 h-4" />;
                    <span>{[deployment.region, deployment.country].filter(Boolean).join()}</span>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                )}
              </div>;
              {/* Features */}
<<<<<<< HEAD
=======


                      key={feature}"
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">;
                      {feature}
                    </span>;
                  ))}



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="space-y-2">;
                <div className="text-sm font-medium text-white/80">Active Features</div>;
=======
"
              <div className="space-y-2">;"
                <div className="text-sm font-medium text-white/80">Active Features</div>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className="flex flex-wrap gap-2">;
                  {deployment.features.slice(0, 4).map((feature) => (;"
                    <span key={feature} className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">;'
                      {feature.replace('_ ')}
                    </span>;
                  ))}
                  {deployment.features.length > 4 && (;"
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">;
                      +{deployment.features.length - 4} more;
                    </span>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  )}
                </div>;
              </div>;
              {/* Timestamps */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
                    {deployment.domain |deployment.subdomain |'No domain set'}
                  </span>
                </div>
                {(deployment.region |deployment.country) && (                  <div className="flex items-center gap-2 text-white/70">
=======
<<<<<<< HEAD
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>
                </div>
                {(deployment.region || deployment.country) && (

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    {deployment.domain |deployment.subdomain |'No domain set'}
                  </span>
                </div>
                {(deployment.region |deployment.country) && (
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>
                </div>
                {(deployment.region || deployment.country) && (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <div className="flex items-center gap-2 text-white/70">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <span>📍</span>
                    <span>{deployment.region} {deployment.country}</span>
                  </div>                  )}

                </div>;
              </div>;

<<<<<<< HEAD
<<<<<<< HEAD
              {/* Timestamps */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                )}
              </div>;
              {/* Features */}

                      key={feature}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-white/10 text-white/70">;
                      {feature}
                    </span>;
                  ))}



              <div className="space-y-2">;
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

<<<<<<< HEAD
<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  )}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </div>;
              </div>;

<<<<<<< HEAD
<<<<<<< HEAD

              {/* Timestamps */}
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD

              {/* Timestamps */}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
<div className='flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {/* Timestamps */}
origin/cursor/expand-services-advertise-and-build-project-c28b
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
              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
              <div className='flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10'>
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
<div className='flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <div className='flex items-center gap-1'>
                  <Calendar className='w-3 h-3' />
                  <span>Created: {formatDate(deployment.createdAt)}</span>
                </div>
                {deployment.updatedAt !== deployment.createdAt && (
                  <div className='flex items-center gap-1'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    <RefreshCw className='w-3 h-3' />                    <span>Updated: {formatDate(deployment.updatedAt)}</span>              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
              {/* Timestamps */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

              {/* Timestamps */}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className="flex items-center gap-1">
                  <span>📅</span>
                  <span>Created: {formatDate(deployment.createdAt)}</span>
                </div>
                {deployment.updatedAt !== deployment.createdAt && ("
                  <div className="flex items-center gap-1">
                    <span>🔄</span>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <RefreshCw className='w-3 h-3' />
origin/cursor/automate-test-improve-and-merge-code-2533
                    <span>Updated: {formatDate(deployment.updatedAt)}</span>
<<<<<<< HEAD
<<<<<<< HEAD
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
                  </div>
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


              {/* Timestamps */}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <RefreshCw className='w-3 h-3' />                    <span>Updated: {formatDate(deployment.updatedAt)}</span>              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">
origin/cursor/expand-services-advertise-and-build-project-c28b
                <div className="flex items-center gap-1">
                  <span>📅</span>
                  <span>Created: {formatDate(deployment.createdAt)}</span>
                </div>
                {deployment.updatedAt !== deployment.createdAt && (
                  <div className="flex items-center gap-1">
                    <span>🔄</span>
                    <RefreshCw className='w-3 h-3' />
origin/cursor/automate-test-improve-and-merge-code-2533
                    <span>Updated: {formatDate(deployment.updatedAt)}</span>
                  </div>

              {/* Timestamps */}

<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">;
=======
                  </div>              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <div className="flex items-center gap-1">;
=======
"
              <div className="flex items-center justify-between text-xs text-white/60 pt-2 border-t border-white/10">;"
                <div className="flex items-center gap-1">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <Calendar className="w-3 h-3" />;
                  <span>Created: {formatDate(deployment.createdAt)}</span>;
                </div>;
                {deployment.updatedAt !== deployment.createdAt && (;"
                  <div className="flex items-center gap-1">;"
                    <RefreshCw className="w-3 h-3" />;
                    <span>Updated: {formatDate(deployment.updatedAt)}</span>;
                  </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                )}
            {/* Action Buttons */}
<<<<<<< HEAD
                )}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======


                )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


ursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
                )}
            {/* Action Buttons */}
                )}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                )}
            {/* Action Buttons */}
                )}

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                )}
              </div>;
            </div>;
            {/* Action Buttons */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="p-6 pt-0">;
              <div className="flex gap-2">;
                {deployment.status === 'pending' && (;
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                    <Play className="w-4 h-4" />;
                    Start Deployment;
                  </button>;
                )}
;
                {deployment.status === 'deploying' && (;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


                )}'
                {deployment && deployment.status === 'deploying' && (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                  <>;
=======

                  <>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                      <Pause className="w-4 h-4" />;
                      Pause;
                    </button>;
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                      <StopCircle className="w-4 h-4" />;
                      Stop;
                    </button>;
                  </>;
                )}
;
                {deployment.status === 'completed' && (;
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
<<<<<<< HEAD
                    <Eye className="w-4 h-4" />;
=======
=======
                )}
            {/* Action Buttons */}
                )}                )}

              </div>;
            </div>;

            {/* Action Buttons */}
<<<<<<< HEAD
<<<<<<< HEAD
                )}                  <>;
=======


                )}
                {deployment && deployment.status === 'deploying' && (;
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
                )}

                )}
                {deployment && deployment.status === 'deploying' && (;
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                      ⏸️ Pause;
                    </button>;"
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                      ⏹️ Stop;
                    </button>;
                  </>;
                )}'
                {deployment && deployment.status === 'completed' && (;"
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    👁️ View Instance;
                  </button>;
                )}'
                {deployment && deployment.status === 'failed' && (;"
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                    🔄 Retry;
                  </button>;
                )}"
                <button className="flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm font-medium rounded-lg transition-colors duration-200">;
                  ⚙️;
                </button>;
              </div>;
            </div>;
          </div>;

<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        ))}

      </div>;

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {/* Empty State */}
=======
      {/* Empty State */}"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              : `No deployments with status "${filter}" found`}
          </p>;'
          {filter === 'all' && (;
            <a'
              href='/admin/os-deploy''
              className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200'>;'
              <Rocket className='w-4 h-4' />              Deploy First Instance;
            </a>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  );
}
      {filteredDeployments.length === 0 && (;
        <div className="text-center py-16">;
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">;
            <Rocket className="w-8 h-8 text-white/40" />;
          </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

            <div className="p-6 pt-0">
              <div className="flex gap-2">
            <div className='p-6 pt-0'>
<div className='p-6 pt-0'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <div className='flex gap-2'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {deployment.status === 'pending' && (
<<<<<<< HEAD
=======
  );
}
      {filteredDeployments.length === 0 && (;
        <div className="text-center py-16">;
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">;
            <Rocket className="w-8 h-8 text-white/40" />;
          </div>;                {deployment.status === 'pending' && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
                {deployment.status === 'pending' && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    ▶️ Start Deployment;
                  </button>
                )}'
            <div className='p - 6 space - y-4'>;
              {/* Domain & Location */}'
              <div className='grid grid - cols - 2 gap - 4 text - sm'>;'
                <div className='flex items - center gap - 2 text - white / 70'>;'
                  <Globe className='w - 4 h - 4' />;'
                  <span className='font - mono'>;
                    {deployment.domain ||;
                      deployment.subdomain ||;'
                      'No domain set'}
                  </span>;
                </div>;
                {(deployment.region || deployment.country) && ('
                  <div className='flex items - center gap - 2 text - white / 70'>;'
                    <MapPin className='w - 4 h - 4' />;
                    <span>;
                      {[deployment.region, deployment.country];
                        .filter (Boolean);'
                        .join (', ')}
<<<<<<< HEAD
                    </span>                  </div>              {/* Domain & Location */}
<<<<<<< HEAD
              <div className="grid grid - cols - 2 gap - 4 text - sm">;
                <div className="flex items - center gap - 2 text - white / 70">;
                  <span>🌐</span>;
                  <span className="font - mono">;
=======
              <div className="grid grid - cols - 2 gap - 4 text-sm">;
                <div className="flex items - center gap - 2 text-white / 70">;
                  <span>🌐</span>;
                  <span className="font-mono">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>;
                </div>;
                {(deployment.region || deployment.country) && (
<<<<<<< HEAD
=======
                    </span>                  </div>              {/* Domain & Location */}"
              <div className="grid grid - cols - 2 gap - 4 text - sm">;"
                <div className="flex items - center gap - 2 text - white / 70">;
                  <span>🌐</span>;"
                  <span className="font - mono">;'
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>;
                </div>;
                {(deployment.region || deployment.country) && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <div className="flex items - center gap - 2 text - white / 70">;
=======
                  <div className="flex items - center gap - 2 text-white / 70">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    <span>📍</span>;
                    <span>{deployment.region} {deployment.country}</span>;
                  </div>)}
              </div>;
              {/* Features */}'
              <div className='space - y-2'>;'
                <div className='text - sm font - medium text - white / 80'>;
                  Active Features;
                </div>;'
                <div className='flex flex - wrap gap - 2'>;
                  {deployment.features.slice (0, 4).map (feature => (
                    <span;
                      key={feature}'
                      className='inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70';
                    >;'
                      {feature.replace ('_', ' ')}
                    </span>))}
                  {deployment.features.length > 4 && ('
                    <span className='inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70'>                      +{deployment.features.length - 4} more                    <span;
<<<<<<< HEAD
                      key={feature}
<<<<<<< HEAD
=======
                      key={feature}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      className="inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70";
=======
                      className="inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text-white / 70";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    >;
                      {feature}
                    </span>))}
<<<<<<< HEAD
                  {deployment.features?.length > 4 && (
<<<<<<< HEAD
=======
                  {deployment.features?.length > 4 && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <span className="inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70">;
=======
                    <span className="inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text-white / 70">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      +{deployment.features.length - 4} more;
                    </span>)}
                </div>;
              </div>;
              {/* Timestamps */}'
              <div className='flex items - center justify - between text - xs text - white / 60 pt - 2 border - t border - white / 10'>;'
                <div className='flex items - center gap - 1'>;'
                  <Calendar className='w - 3 h - 3' />;
                  <span > Created: {format_date (deployment.created_at)}</span>;
                </div>;
<<<<<<< HEAD
                {deployment.updated_at !== deployment.created_at && (
                  <div className='flex items - center gap - 1'>;
<<<<<<< HEAD
                    <RefreshCw className='w - 3 h - 3' />                    <span > Updated: {format_date (deployment.updated_at)}</span>              <div className="flex items - center justify - between text - xs text - white / 60 pt - 2 border - t border - white / 10">;
=======
                {deployment.updated_at !== deployment.created_at && ('
                  <div className='flex items - center gap - 1'>;'"
                    <RefreshCw className='w - 3 h - 3' />                    <span > Updated: {format_date (deployment.updated_at)}</span>              <div className="flex items - center justify - between text - xs text - white / 60 pt - 2 border - t border - white / 10">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <div className="flex items - center gap - 1">;
=======
                    <RefreshCw className='w - 3 h - 3' />                    <span > Updated: {format_date (deployment.updated_at)}</span>              <div className="flex items - center justify - between text - xs text - white / 60 pt - 2 border - t border-white / 10">;
                <div className="flex items - center gap-1">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <span>📅</span>;
                  <span > Created: {format_date (deployment.created_at)}</span>;
                </div>;
<<<<<<< HEAD
                {deployment.updated_at !== deployment.created_at && (
<<<<<<< HEAD
=======
                {deployment.updated_at !== deployment.created_at && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <div className="flex items - center gap - 1">;
=======
                  <div className="flex items - center gap-1">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    <span>🔄</span>;
                  </div>)}
              </div>;
            </div>;
            {/* Action Buttons */}'
            <div className='p - 6 pt - 0'>;'
              <div className='flex gap - 2'>;'
                {deployment.status === 'pending' && ('
                  <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;'
                    <Play className='w - 4 h - 4' />;
                    Start Deployment;
                  </button>)}'
                {deployment.status === 'deploying' && (
                  <>;'
                    <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - orange - 600 hover:bg - orange - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;'
                      <Pause className='w - 4 h - 4' />;
                      Pause;
                    </button>;'
                    <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - red - 600 hover:bg - red - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;'
                      <StopCircle className='w - 4 h - 4' />;
                      Stop;
                    </button>;
                  </>)}'
                {deployment.status === 'completed' && ('
                  <button className='flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - green - 600 hover:bg - green - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200'>;'
                    <Eye className='w - 4 h - 4' />;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    View Instance;
                  </button>;
                )}
;
                {deployment.status === 'failed' && (;
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                    <RefreshCw className="w-4 h-4" />;
                    Retry;
                  </button>;
                )}
;
                <button className="flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm font-medium rounded-lg transition-colors duration-200">;
                  <Settings className="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
          </div>;
        ))}
      </div>;
      {/* Empty State */}
<<<<<<< HEAD
      {filteredDeployments.length === 0 && (;
        <div className="text-center py-16">;
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">;
            <Rocket className="w-8 h-8 text-white/40" />;
          </div>;
          <h3 className="text-lg font-medium text-white/60 mb-2">No deployments found</h3>;
          <p className="text-white/40 mb-6">;
=======
=======
                    View Instance;
                  </button>)}'
                {deployment.status === 'failed' && (
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

        </div>          </div>;
          <h3 className="text-lg font-medium text-white/60 mb-2">No deployments found</h3>;
          <p className="text-white/40 mb-6">;
            {filter === 'all' ;
              ? 'Start by creating your first Zion ecosystem deployment' ;
              : `No deployments with status "${filter}" found`;
<<<<<<< HEAD
=======

                {deployment.status === 'pending' && (
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
            <div className='p-6 pt-0'>
              <div className='flex gap-2'>
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                {deployment.status === 'pending' && (
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
              <div className="grid grid - cols - 2 gap - 4 text - sm">;
                <div className="flex items - center gap - 2 text - white / 70">;
                  <span>🌐</span>;
                  <span className="font - mono">;
                    {deployment.domain || deployment.subdomain || 'No domain set'}
                  </span>;
                </div>;
                {(deployment.region || deployment.country) && (
                  <div className="flex items - center gap - 2 text - white / 70">;
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
                      className="inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70";
                    >;
                      {feature}
                    </span>))}
                  {deployment.features?.length > 4 && (
                    <span className="inline - flex items - center px - 2 py - 1 rounded - md text - xs bg - white / 10 text - white / 70">;
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
                    <RefreshCw className='w - 3 h - 3' />                    <span > Updated: {format_date (deployment.updated_at)}</span>              <div className="flex items - center justify - between text - xs text - white / 60 pt - 2 border - t border - white / 10">;
                <div className="flex items - center gap - 1">;
                  <span>📅</span>;
                  <span > Created: {format_date (deployment.created_at)}</span>;
                </div>;
                {deployment.updated_at !== deployment.created_at && (
                  <div className="flex items - center gap - 1">;
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

pr-12325
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
                  <button className="flex - 1 flex items - center justify - center gap - 2 px - 3 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white text - sm font - medium rounded - lg transition - colors duration - 200">;
                    ▶️ Start Deployment;
                  </button>)}

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
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            }
          </p>;
          {filter === 'all' && (;
            <a;
              href="/admin/os-deploy";
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200";
            >;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

            }
          </p>;
          {filter === 'all' && (;
            <a
              href="/admin/os-deploy"

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Rocket className="w-4 h-4" />;
              Deploy First Instance;
            </a>;
          )}
        </div>;
      )}
    </div>;

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            {filter === 'all';
              ? 'Start by creating your first Zion ecosystem deployment';
              : `No deployments with status "${filter}" found`;
            }
          </p>;
<<<<<<< HEAD
          {filter === 'all' && (;
            <a;
              href="/admin/os-deploy";
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200";
            >;
              <Rocket className="w-4 h-4" />;
=======
            }
          </p>;
          {filter === 'all' && (;
            <a;
              href="/admin/os-deploy";
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200";
            >;              <Rocket className="w-4 h-4" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              Deploy First Instance;
            </a>;
          )}
        </div>;
      )}
<<<<<<< HEAD
    </div>;
  );
}
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Rocket className="w-4 h-4" />
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
                  <Settings className='w-4 h-4' />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
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
              : `No deployments with status "${filter}" found`}
          </p>
          {filter === 'all' && (
            <a
              href='/admin/os-deploy'
              className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200'
            >
              <Rocket className='w-4 h-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
              Deploy First Instance
            </a>
          )}
        </div>
      )}
    </div>

        </div>;
      )}
    </div>;


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  );
}

=======
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );
}
    </div>))}
    </div>);
}
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {filteredDeployments.length === 0 && (;
=======
    </div>;  );
}
    </div>))}
    </div>);
}      {filteredDeployments.length === 0 && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className="text-center py-16">;
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">;
=======



  );
}


      {filteredDeployments.length === 0 && (;"
        <div className="text-center py-16">;"
          <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Rocket className="w-8 h-8 text-white/40" />;
          </div>;"
          <h3 className="text-lg font-medium text-white/60 mb-2">No deployments found</h3>;"
          <p className="text-white/40 mb-6">;'
            {filter === 'all';'
              ? 'Start by creating your first Zion ecosystem deployment';"`
              : `No deployments with status "${filter}" found`;
            }
          </p>;'
          {filter === 'all' && (;
            <a;"
              href="/admin/os-deploy";"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200";
            >;"
              <Rocket className="w-4 h-4" />;
              Deploy First Instance;
            </a>;
          )}
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD


  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </div>))}
    </div>);
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    </div>;  );
}
    </div>))}
    </div>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======


=======
  );
}
    </div>))}
    </div>);
}
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
      </div>;
      {/* Deployments Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">;
        {filteredDeployments.map((deployment) => (;
          <div key={deployment.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-white/5">;
            {/* Status Header */}
            <div className="p-6 border-b border-white/10">;
              <div className="flex items-start justify-between mb-4">;
                <div className="flex items-center gap-3">;
                  <div className="p-2 bg-white/10 rounded-lg">;
                    {getVerticalIcon(deployment.vertical)}
                  </div>;
                  <div>;
                    <h3 className="font-bold text-lg text-white group-hover:text-white/90 transition-colors">;
                      {deployment.instanceName}
                    </h3>;
                    <div className="flex items-center gap-2 mt-1">;
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">;
                        {deployment.vertical}
                      </span>;
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">;
                        {deployment.governanceType}
                      </span>;
                    </div>;
                  </div>;
                </div>;
                <div className="flex items-center gap-2">;
                  {getStatusIcon(deployment.status)}
                  <span className={`text-sm font-medium ${getStatusColor(deployment.status)}`}>;
                    {deployment.status.charAt(0).toUpperCase() + deployment.status.slice(1)}
                  </span>;
                </div>;
              </div>;
              {/* Progress Bar for Active Deployments */}
              {deployment.status === 'deploying' && (;
                <div className="space-y-2">;
                  <div className="flex justify-between text-sm text-white/70">;
                    <span>Deployment Progress</span>;
                    <span>{deployment.progress}%</span>;
                  </div>;
                  <div className="w-full bg-white/10 rounded-full h-2">;
                    <div;
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out";
                      style={{ width: `${deployment.progress}%` }}
                    ></div>;
                  </div>;
                </div>;
              )}
            </div>;
            {/* Deployment Details */}
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
              </div>;
              {/* Features */}
              <div className="space-y-2">;
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
                  )}
                </div>;
              </div>;
              {/* Timestamps */}
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
                )}
              </div>;
            </div>;
            {/* Action Buttons */}
            <div className="p-6 pt-0">;
              <div className="flex gap-2">;
                {deployment.status === 'pending' && (;
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                    <Play className="w-4 h-4" />;
                    Start Deployment;
                  </button>;
                )}
;
                {deployment.status === 'deploying' && (;
                  <>;
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                      <Pause className="w-4 h-4" />;
                      Pause;
                    </button>;
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                      <StopCircle className="w-4 h-4" />;
                      Stop;
                    </button>;
                  </>;
                )}
;
                {deployment.status === 'completed' && (;
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                    <Eye className="w-4 h-4" />;
                    View Instance;
                  </button>;
                )}
;
                {deployment.status === 'failed' && (;
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">;
                    <RefreshCw className="w-4 h-4" />;
                    Retry;
                  </button>;
                )}
;
                <button className="flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm font-medium rounded-lg transition-colors duration-200">;
                  <Settings className="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
          </div>;
        ))}
      </div>;
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
</div>

      {/* Deployments Table */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-semibold">Deployments</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Region</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Version</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Last Deployed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredDeployments.map((deployment) => (
                <tr key={deployment.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-white">{deployment.name}</div>
                    <div className="text-sm text-white/60">ID: {deployment.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(deployment.status)}`}>
                      {deployment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">{deployment.region}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">{deployment.version}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">{deployment.lastDeployed}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-400 hover:text-blue-300 mr-4">View</button>
                    <button className="text-green-400 hover:text-green-300 mr-4">Deploy</button>
                    <button className="text-red-400 hover:text-red-300">Stop</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
  );
}
    </div>))}
    </div>);
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
