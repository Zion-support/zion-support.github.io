"use client";

import { useState } from 'react';
import { Eye, EyeOff, Settings, ExternalLink, Plus, Search } from 'lucide-react';

interface Instance {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  status: 'active' | 'inactive' | 'maintenance';
  createdAt: string;
  count: {
    deployments: number;
    features: number;
  };
  region: string;
  version: string;
}

const mockInstances: Instance[] = [
  {
    id: '1',
    name: 'Zion Economy Alpha',
    description: 'Production instance for the main Zion economy',
    isPublic: true,
    status: 'active',
    createdAt: '2024-01-15T10:30:00Z',
    count: { deployments: 12, features: 8 },
    region: 'us-east-1',
    version: 'v1.2.3'
  },
  {
    id: '2',
    name: 'Test Environment',
    description: 'Staging environment for testing new features',
    isPublic: false,
    status: 'active',
    createdAt: '2024-01-16T14:20:00Z',
    count: { deployments: 5, features: 3 },
    region: 'eu-west-1',
    version: 'v1.3.0-beta'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'text-green-400 bg-green-500/20';
    case 'inactive':
      return 'text-gray-400 bg-gray-500/20';
    case 'maintenance':
      return 'text-yellow-400 bg-yellow-500/20';
    default:
      return 'text-gray-400 bg-gray-500/20';
  }
};

export default function InstancesPage() {
  const [instances, setInstances] = useState<Instance[]>(mockInstances);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInstances = instances.filter(instance => {
    return instance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           instance.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const toggleVisibility = (id: string) => {
    setInstances(prev => prev.map(instance => 
      instance.id === id 
        ? { ...instance, isPublic: !instance.isPublic }
        : instance
    ));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">📊 Manage Your Instances</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Monitor and manage your deployed digital economies, track performance, and access configuration settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{instances.length}</div>
            <div className="text-white/70">Total Instances</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {instances.filter(i => i.isPublic).length}
            </div>
            <div className="text-white/70">Public Instances</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {instances.reduce((sum, i) => sum + i.count.deployments, 0)}
            </div>
            <div className="text-white/70">Total Deployments</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {instances.reduce((sum, i) => sum + i.count.features, 0)}
            </div>
            <div className="text-white/70">Active Features</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search instances..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInstances.map((instance) => (
            <div
              key={instance.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{instance.name}</h3>
                  <p className="text-sm text-white/60 mb-2">{instance.description}</p>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(instance.status)}`}>
                    {instance.status}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleVisibility(instance.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      instance.isPublic
                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                        : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                    }`}
                  >
                    {instance.isPublic ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Region:</span>
                  <span className="text-white">{instance.region}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Version:</span>
                  <span className="text-white">{instance.version}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Deployments:</span>
                  <span className="text-white">{instance.count.deployments}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Features:</span>
                  <span className="text-white">{instance.count.features}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm font-medium">
                    <ExternalLink className="w-4 h-4 inline mr-1" />
                    View
                  </button>
                  <button className="flex-1 px-3 py-2 bg-white/5 text-white/70 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredInstances.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 mb-4">No instances found matching your criteria.</p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Plus className="w-4 h-4 inline mr-2" />
              Create New Instance
            </button>
          </div>
        )}
      </div>
    </div>
  );
}