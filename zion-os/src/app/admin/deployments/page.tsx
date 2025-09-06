"use client";

import { useState, useEffect } from 'react';
import { Rocket, Clock, Activity, CheckCircle, AlertCircle, Filter, Search, RefreshCw } from 'lucide-react';

interface Deployment {
  id: string;
  name: string;
  status: 'pending' | 'deploying' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
  environment: string;
  region: string;
  version: string;
}

const mockDeployments: Deployment[] = [
  {
    id: '1',
    name: 'Zion Economy Alpha',
    status: 'completed',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T11:45:00Z',
    environment: 'production',
    region: 'us-east-1',
    version: 'v1.2.3'
  },
  {
    id: '2',
    name: 'Test Environment',
    status: 'deploying',
    createdAt: '2024-01-16T14:20:00Z',
    updatedAt: '2024-01-16T14:25:00Z',
    environment: 'staging',
    region: 'eu-west-1',
    version: 'v1.3.0-beta'
  },
  {
    id: '3',
    name: 'Development Instance',
    status: 'pending',
    createdAt: '2024-01-16T16:00:00Z',
    updatedAt: '2024-01-16T16:00:00Z',
    environment: 'development',
    region: 'us-west-2',
    version: 'v1.3.0-dev'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'text-green-400 bg-green-500/20';
    case 'deploying':
      return 'text-blue-400 bg-blue-500/20';
    case 'pending':
      return 'text-yellow-400 bg-yellow-500/20';
    case 'failed':
      return 'text-red-400 bg-red-500/20';
    default:
      return 'text-gray-400 bg-gray-500/20';
  }
};

const getStatusCount = (status: string, deployments: Deployment[]) => {
  return deployments.filter(deployment => deployment.status === status).length;
};

export default function DeploymentsPage() {
  const [deployments, setDeployments] = useState<Deployment[]>(mockDeployments);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const filteredDeployments = deployments.filter(deployment => {
    const matchesFilter = filter === 'all' || deployment.status === filter;
    const matchesSearch = deployment.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleRefresh = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
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
              <p className="text-2xl font-bold">{getStatusCount('pending', deployments)}</p>
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
              <p className="text-2xl font-bold">{getStatusCount('deploying', deployments)}</p>
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
              <p className="text-2xl font-bold">{getStatusCount('completed', deployments)}</p>
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
              <p className="text-2xl font-bold">{getStatusCount('failed', deployments)}</p>
              <p className="text-sm text-white/60">Failed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex gap-2">
          {['all', 'pending', 'deploying', 'completed', 'failed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search deployments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 hover:bg-white/10 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Deployments List */}
      <div className="space-y-4">
        {filteredDeployments.map((deployment) => (
          <div
            key={deployment.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(deployment.status)}`}>
                  {deployment.status}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{deployment.name}</h3>
                  <p className="text-sm text-white/60">
                    {deployment.environment} • {deployment.region} • {deployment.version}
                  </p>
                </div>
              </div>
              <div className="text-right text-sm text-white/60">
                <p>Created: {new Date(deployment.createdAt).toLocaleDateString()}</p>
                <p>Updated: {new Date(deployment.updatedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDeployments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/60">No deployments found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}