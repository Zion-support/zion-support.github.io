"use client";
import { Rocket, Clock, XCircle, AlertCircle, Activity } from 'lucide-react';

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
    default:
      return 'text-gray-400';
  }
};

export default function DeploymentsPage() {
  const deployments = [
    {
      id: '1',
      name: 'Zion OS Main Instance',
      status: 'active',
      region: 'us-east-1',
      createdAt: '2024-01-15',
      lastDeployed: '2024-01-20',
      version: 'v2.1.0'
    },
    {
      id: '2',
      name: 'AI Research Lab',
      status: 'pending',
      region: 'eu-west-1',
      createdAt: '2024-01-18',
      lastDeployed: '2024-01-19',
      version: 'v2.0.5'
    },
    {
      id: '3',
      name: 'Quantum Computing Hub',
      status: 'failed',
      region: 'ap-southeast-1',
      createdAt: '2024-01-20',
      lastDeployed: '2024-01-20',
      version: 'v2.1.1'
    }
  ];

  const filter = 'all';
  const filteredDeployments = deployments.filter(deployment => filter === 'all' || deployment.status === filter);

  const getStatusCount = (status: string) => {
    return deployments.filter(d => d.status === status).length;
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
              <p className="text-2xl font-bold">{getStatusCount('pending')}</p>
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
              <p className="text-2xl font-bold">{getStatusCount('active')}</p>
              <p className="text-sm text-white/60">Active</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount('failed')}</p>
              <p className="text-sm text-white/60">Failed</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{getStatusCount('stopped')}</p>
              <p className="text-sm text-white/60">Stopped</p>
            </div>
          </div>
        </div>
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
}