"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Rocket, Settings, Trash2, Eye } from 'lucide-react';

interface Instance {
  id: string;
  name: string;
  description: string;
  isPublic: boolean;
  status: 'active' | 'inactive' | 'deploying' | 'error';
  createdAt: string;
  lastDeployed: string;
  count: {
    deployments: number;
    features: number;
  };
  region: string;
  version: string;

export default function InstancesPage() {
  const [instances, setInstances] = useState<Instance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const mockInstances: Instance[] = [
      {
        id: '1',
        name: 'Zion Main Economy',
        description: 'Primary digital economy instance',
        isPublic: true,
        status: 'active',
        createdAt: '2024-01-15',
        lastDeployed: '2024-01-20',
        count: { deployments: 12, features: 8 },
        region: 'us-east-1',
        version: 'v2.1.0'
      }
    ];

    setTimeout(() => {
      setInstances(mockInstances);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400 bg-green-400/20';
      case 'inactive':
        return 'text-gray-400 bg-gray-400/20';
      case 'deploying':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'error':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-white/70">Loading instances...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">📊 Manage Your Instances</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Monitor and manage your deployed digital economies, track performance, and access configuration settings.
          </p>
        </div>

        {error && (
          <div className="mb-8 p-6 bg-red-900/20 border border-red-500/20 rounded-xl text-center">
            <div className="text-red-400 mb-2">⚠️ Database Connection Error</div>
            <p className="text-white/70 mb-4">{error}</p>
            <p className="text-sm text-white/50">
              Please ensure your database is properly configured and the DATABASE URL environment variable is set.
            </p>
          </div>
        )}

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

        {instances.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {instances.map((instance) => (
              <div key={instance.id} className="glass-effect rounded-xl p-6 hover:bg-white/5 transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Globe className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{instance.name}</h3>
                      <p className="text-sm text-white/60">{instance.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(instance.status)}`}>
                    {instance.status}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
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

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    <Eye className="w-4 h-4 inline mr-2" />
                    View
                  </button>
                  <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    <Settings className="w-4 h-4 inline mr-2" />
                    Configure
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 p-4 bg-white/10 rounded-full">
              <Globe className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-lg font-medium text-white/60 mb-2">No instances yet</h3>
            <p className="text-white/40 mb-6">Create your first Zion ecosystem to get started</p>
            <Link href="/admin/os-deploy" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
              <Rocket className="w-4 h-4" />
              Deploy First Instance
            </Link>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Need Technical Support?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert team is available 24/7 to help you manage and optimize your AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Contact Support
              </Link>
              <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
