"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Rocket } from 'lucide-react';

interface Instance {
  id: string;
  name: string;
  vertical: string;
  governanceType: string;
  isPublic: boolean;
  domain?: string;
  subdomain?: string;
  slug?: string;
  region?: string;
  country?: string;
  tokenSystem: string;
  count: {
    deployments: number;
    features: number;
  };
  createdAt: string;
}

const getGovernanceLabel = (governanceType: string) => {
  switch (governanceType) {
    case 'DAO': return 'Decentralized Autonomous Organization';
    case 'ADMIN': return 'Administrative Control';
    case 'HYBRID': return 'Hybrid Governance';
    default: return governanceType;
  }
};

const getTokenSystemLabel = (tokenSystem: string) => {
  switch (tokenSystem) {
    case 'NATIVE': return 'Native Token';
    case 'ETHEREUM': return 'Ethereum-based';
    case 'POLYGON': return 'Polygon-based';
    case 'CUSTOM': return 'Custom Token';
    default: return tokenSystem;
  }
};

export default function InstancesPage() {
  const [instances, setInstances] = useState<Instance[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockInstances: Instance[] = [
      {
        id: '1',
        name: 'Healthcare AI Platform',
        vertical: 'HEALTH',
        governanceType: 'DAO',
        isPublic: true,
        domain: 'healthcare.ziontechgroup.com',
        region: 'US-East',
        country: 'United States',
        tokenSystem: 'NATIVE',
        count: {
          deployments: 3,
          features: 12
        },
        createdAt: '2024-01-15T10:00:00Z'
      },
      {
        id: '2',
        name: 'Education Portal',
        vertical: 'EDUCATION',
        governanceType: 'ADMIN',
        isPublic: false,
        subdomain: 'education.ziontechgroup.com',
        region: 'EU-West',
        country: 'Germany',
        tokenSystem: 'ETHEREUM',
        count: {
          deployments: 1,
          features: 8
        },
        createdAt: '2024-01-16T09:00:00Z'
      }
    ];
    
    setInstances(mockInstances);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-white">Loading instances...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">📊 Manage Your Instances</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Monitor and manage your deployed digital economies, track performance, and access configuration settings.
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8 p-6 bg-red-900/20 border border-red-500/20 rounded-xl text-center">
            <div className="text-red-400 mb-2">⚠️ Database Connection Error</div>
            <p className="text-white/70 mb-4">{error}</p>
            <p className="text-sm text-white/50">
              Please ensure your database is properly configured and the DATABASE URL environment variable is set.
            </p>
          </div>
        )}

        {/* Stats Overview */}
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
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {instances.reduce((sum, i) => sum + i.count.deployments, 0)}
            </div>
            <div className="text-white/60 text-sm">Total Deployments</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {instances.reduce((sum, i) => sum + i.count.features, 0)}
            </div>
            <div className="text-white/60 text-sm">Active Features</div>
          </div>
        </div>

        {/* Instances Grid */}
        {instances.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instances.map((inst) => (
              <div key={inst.id} className="card card-hover">
                {/* Instance Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{inst.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        inst.vertical === 'GENERAL' ? 'bg-blue-500/20 text-blue-400' :
                        inst.vertical === 'HEALTH' ? 'bg-green-500/20 text-green-400' :
                        inst.vertical === 'EDUCATION' ? 'bg-purple-500/20 text-purple-400' :
                        inst.vertical === 'LAW' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {inst.vertical}
                      </span>
                      {inst.isPublic && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                          Public
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Z</span>
                  </div>
                </div>

                {/* Instance Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-white/70">
                    <span>🌐</span>
                    <span>{inst.domain || inst.subdomain || inst.slug}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-white/70">
                    <span>🏛️</span>
                    <span>Governance: {inst.governanceType}</span>
                  </div>
                  {inst.region && (
                    <div className="flex items-center space-x-2 text-sm text-white/70">
                      <span>📍</span>
                      <span>{inst.region}{inst.country ? `, ${inst.country}` : ''}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2 text-sm text-white/70">
                    <span>💎</span>
                    <span>Token: {inst.tokenSystem}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-lg font-semibold text-blue-400">{inst.count.deployments}</div>
                    <div className="text-xs text-white/60">Deployments</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-lg font-semibold text-green-400">{inst.count.features}</div>
                    <div className="text-xs text-white/60">Features</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link 
                    href={`/admin/instances/${inst.id}`}
                    className="flex-1 btn-secondary text-center text-sm py-2"
                  >
                    Manage
                  </Link>
                  <Link 
                    href={`/admin/instances/${inst.id}/deployments`}
                    className="flex-1 btn-secondary text-center text-sm py-2"
                  >
                    Deployments
                  </Link>
                </div>

                {/* Created Date */}
                <div className="text-xs text-white/40 mt-3 pt-3 border-t border-white/10">
                  Created: {new Date(inst.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">No Instances Yet</h3>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              You haven&apos;t deployed any digital economies yet. Start building your first instance to get started.
            </p>
            <Link href="/multiverse/launch" className="btn-primary">
              🚀 Launch Your First Economy
            </Link>
          </div>
        )}

        {/* Quick Actions */}
        <div className="card text-center py-8 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/multiverse/launch" className="btn-primary">
              🚀 Launch New Instance
            </Link>
            <Link href="/admin/os-deploy" className="btn-secondary">
              ⚙️ Advanced Deployment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}