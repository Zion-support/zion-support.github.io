"use client";

import { useState } from 'react';
import { Rocket } from 'lucide-react';

interface FormData {
  instanceName: string;
  vertical: string;
  domain: string;
  subdomain: string;
  defaultLanguage: string;
  region: string;
  country: string;
  tokenSystem: string;
  governanceType: string;
  paymentGateway: string;
  sovereignTreasury: boolean;
  dualGovernance: boolean;
  aiModeration: boolean;
  affiliatePanel: boolean;
}

const FeatureKeys = [
  'aiAssistant',
  'blockchainIntegration',
  'paymentSystem',
  'userManagement',
  'contentManagement',
  'analytics',
  'notifications',
  'apiAccess',
  'customDomain',
  'sslCertificate',
  'backupSystem',
  'monitoring'
] as const;

const labelFor = (key: string) => {
  const labels: Record<string, string> = {
    aiAssistant: 'AI Assistant',
    blockchainIntegration: 'Blockchain Integration',
    paymentSystem: 'Payment System',
    userManagement: 'User Management',
    contentManagement: 'Content Management',
    analytics: 'Analytics',
    notifications: 'Notifications',
    apiAccess: 'API Access',
    customDomain: 'Custom Domain',
    sslCertificate: 'SSL Certificate',
    backupSystem: 'Backup System',
    monitoring: 'Monitoring'
  };
  return labels[key] || key;
};

const getFeatureDescription = (key: string) => {
  const descriptions: Record<string, string> = {
    aiAssistant: 'Intelligent AI assistant for user interactions',
    blockchainIntegration: 'Blockchain and Web3 integration',
    paymentSystem: 'Integrated payment processing',
    userManagement: 'User registration and authentication',
    contentManagement: 'Content creation and management tools',
    analytics: 'Advanced analytics and reporting',
    notifications: 'Real-time notification system',
    apiAccess: 'RESTful API access',
    customDomain: 'Custom domain configuration',
    sslCertificate: 'SSL certificate management',
    backupSystem: 'Automated backup system',
    monitoring: 'System monitoring and alerts'
  };
  return descriptions[key] || 'Feature description';
};

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }: { size?: 'sm' | 'md' | 'lg', text?: string }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`${sizeClasses[size]} border-2 border-white/20 border-t-white rounded-full animate-spin`}></div>
      <span>{text}</span>
    </div>
  );
};

export default function OSDeployPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    instanceName: '',
    vertical: 'GENERAL',
    domain: '',
    subdomain: '',
    defaultLanguage: 'en',
    region: '',
    country: '',
    tokenSystem: 'SHARED',
    governanceType: 'ADMIN',
    paymentGateway: '',
    sovereignTreasury: false,
    dualGovernance: false,
    aiModeration: false,
    affiliatePanel: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Deployment data:', formData);
      alert('Deployment initiated successfully!');
    } catch (error) {
      console.error('Deployment failed:', error);
      alert('Deployment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🚀 Launch Your Digital Economy</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Configure and deploy your sovereign AI-powered digital economy with our unified deployment protocol.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-8">
          {/* Basic Configuration */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">⚙️</span>
              Basic Configuration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Instance Name *
                </label>
                <input
                  name="instanceName"
                  required
                  value={formData.instanceName}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="My Digital Economy"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Vertical
                </label>
                <select
                  name="vertical"
                  value={formData.vertical}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="GENERAL">General</option>
                  <option value="HEALTH">Healthcare</option>
                  <option value="EDUCATION">Education</option>
                  <option value="LAW">Legal</option>
                  <option value="GOV">Government</option>
                  <option value="FINANCE">Finance</option>
                  <option value="TECH">Technology</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Domain
                </label>
                <input
                  name="domain"
                  value={formData.domain}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="zion.example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Subdomain
                </label>
                <input
                  name="subdomain"
                  value={formData.subdomain}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="latam"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Default Language
                </label>
                <input
                  name="defaultLanguage"
                  value={formData.defaultLanguage}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Region
                </label>
                <input
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="North America"
                />
              </div>
            </div>
          </div>

          {/* Economy Settings */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-sm">💰</span>
              Economy Settings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Token System
                </label>
                <select
                  name="tokenSystem"
                  value={formData.tokenSystem}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="SHARED">ZION$ Shared</option>
                  <option value="LOCAL">Local Token</option>
                  <option value="HYBRID">Hybrid System</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Governance Type
                </label>
                <select
                  name="governanceType"
                  value={formData.governanceType}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="ADMIN">Admin Control</option>
                  <option value="DAO LITE">DAO-lite</option>
                  <option value="DAO FULL">Full DAO</option>
                  <option value="HYBRID">Hybrid Governance</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Country
                </label>
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="United States"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Payment Gateway
                </label>
                <select
                  name="paymentGateway"
                  value={formData.paymentGateway}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="">None</option>
                  <option value="stripe">Stripe</option>
                  <option value="coinbase-commerce">Coinbase Commerce</option>
                  <option value="paypal">PayPal</option>
                  <option value="crypto">Crypto Payments</option>
                </select>
              </div>
            </div>
          </div>

          {/* Feature Toggles */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm">🔧</span>
              Core Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FeatureKeys.map((k) => (
                <label
                  key={k}
                  className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    name={k}
                    className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <div>
                    <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                      {labelFor(k)}
                    </div>
                    <div className="text-sm text-white/60">
                      {getFeatureDescription(k)}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-sm">🚀</span>
              Premium Add-ons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                <input
                  type="checkbox"
                  name="sovereignTreasury"
                  checked={formData.sovereignTreasury}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                />
                <div>
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    Sovereign DAO Treasury
                  </div>
                  <div className="text-sm text-white/60">
                    Manage community funds with transparency
                  </div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                <input
                  type="checkbox"
                  name="dualGovernance"
                  checked={formData.dualGovernance}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                />
                <div>
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    Dual Governance
                  </div>
                  <div className="text-sm text-white/60">
                    Local + global decision making
                  </div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                <input
                  type="checkbox"
                  name="aiModeration"
                  checked={formData.aiModeration}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                />
                <div>
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    AI Moderation System
                  </div>
                  <div className="text-sm text-white/60">
                    Automated content and behavior monitoring
                  </div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                <input
                  type="checkbox"
                  name="affiliatePanel"
                  checked={formData.affiliatePanel}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                />
                <div>
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    Government Affiliate Panel
                  </div>
                  <div className="text-sm text-white/60">
                    Institutional partnership management
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Section */}
          <div className="text-center">
            <button
              disabled={loading}
              className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed hover-lift"
            >
              {loading ? (
                <LoadingSpinner size="sm" text="Deploying..." />
              ) : (
                "🚀 Deploy Instance"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}