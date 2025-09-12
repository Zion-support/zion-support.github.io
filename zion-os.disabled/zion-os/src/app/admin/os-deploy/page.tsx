"use client";

import { useState } from "react";
import { FeatureKeys } from "@/lib/zod";
<<<<<<< HEAD:zion-os.disabled/zion-os/src/app/admin/os-deploy/page.tsx
=======
import LoadingSpinner from "@/app/components/LoadingSpinner";
>>>>>>> autobot/2025-08-24T03-49-38-332Z:zion-os/src/app/admin/os-deploy/page.tsx

export default function AdminDeployPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
<<<<<<< HEAD:zion-os.disabled/zion-os/src/app/admin/os-deploy/page.tsx
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    instanceName: '',
    domain: '',
    subdomain: '',
    vertical: 'GENERAL',
    defaultLanguage: 'en',
    tokenSystem: 'SHARED',
    governanceType: 'ADMIN',
    region: '',
    country: '',
    features: {} as Record<string, boolean>,
    addons: {
      paymentGateway: '',
      sovereignTreasury: false,
      dualGovernance: false,
      aiModeration: false,
      affiliatePanel: false,
    },
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (feature: string, enabled: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: enabled
      }
    }));
  };

  const handleAddonToggle = (addon: string, enabled: boolean) => {
    setFormData(prev => ({
      ...prev,
      addons: {
        ...prev.addons,
        [addon]: enabled
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
=======
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
>>>>>>> autobot/2025-08-24T03-49-38-332Z:zion-os/src/app/admin/os-deploy/page.tsx

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
<<<<<<< HEAD:zion-os.disabled/zion-os/src/app/admin/os-deploy/page.tsx

    const payload = {
      instanceName: formData.instanceName,
      domain: formData.domain || undefined,
      subdomain: formData.subdomain || undefined,
      vertical: formData.vertical,
      defaultLanguage: formData.defaultLanguage,
      tokenSystem: formData.tokenSystem,
      governanceType: formData.governanceType,
      region: formData.region || undefined,
      country: formData.country || undefined,
      features: formData.features,
      addons: formData.addons,
    };

    try {
      const res = await fetch("/api/deploy", { 
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload) 
      });
      
=======
    
    const formData = new FormData(event.currentTarget);
    const features: Record<string, boolean> = {};
    FeatureKeys.forEach((k) => (features[k] = formData.get(k) === "on"));

      const payload = {
        instanceName: String(formData.get("instanceName") || ""),
        domain: String(formData.get("domain") || "" ) || undefined,
        subdomain: String(formData.get("subdomain") || "" ) || undefined,
        vertical: String(formData.get("vertical") || "GENERAL"),
        defaultLanguage: String(formData.get("defaultLanguage") || "en"),
        tokenSystem: String(formData.get("tokenSystem") || "SHARED"),
        governanceType: String(formData.get("governanceType") || "ADMIN"),
        region: String(formData.get("region") || "") || undefined,
        country: String(formData.get("country") || "") || undefined,
        features,
        addons: {
          paymentGateway: String(formData.get("paymentGateway") || "") || undefined,
          sovereignTreasury: formData.get("sovereignTreasury") === "on",
          dualGovernance: formData.get("dualGovernance") === "on",
          aiModeration: formData.get("aiModeration") === "on",
          affiliatePanel: formData.get("affiliatePanel") === "on",
        },
      };

    try {
      const res = await fetch("/api/deploy", { method: "POST", body: JSON.stringify(payload) });
>>>>>>> autobot/2025-08-24T03-49-38-332Z:zion-os/src/app/admin/os-deploy/page.tsx
      const data = await res.json();
      
      if (!res.ok) {
        setMessageType('error');
        setMessage(data.error || "Deployment failed");
        return;
      }
      
      setMessageType('success');
<<<<<<< HEAD:zion-os.disabled/zion-os/src/app/admin/os-deploy/page.tsx
      setMessage(`Deployment queued successfully! Deployment ID: ${data.deploymentId}`);
      setFormData({
        instanceName: '',
        domain: '',
        subdomain: '',
        vertical: 'GENERAL',
        defaultLanguage: 'en',
        tokenSystem: 'SHARED',
        governanceType: 'ADMIN',
        region: '',
        country: '',
        features: {},
        addons: {
          paymentGateway: '',
          sovereignTreasury: false,
          dualGovernance: false,
          aiModeration: false,
          affiliatePanel: false,
        },
      });
      setCurrentStep(1);
=======
      setMessage(`✅ Deployment queued successfully! ID: ${data.deploymentId}`);
      (event.target as HTMLFormElement).reset();
>>>>>>> autobot/2025-08-24T03-49-38-332Z:zion-os/src/app/admin/os-deploy/page.tsx
    } catch (error) {
      setMessageType('error');
      setMessage("Network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

<<<<<<< HEAD:zion-os.disabled/zion-os/src/app/admin/os-deploy/page.tsx
  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              i + 1 < currentStep 
                ? 'bg-green-500 text-white' 
                : i + 1 === currentStep 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-600 text-gray-300'
            }`}>
              {i + 1 < currentStep ? '✓' : i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div className={`w-16 h-1 mx-2 ${
                i + 1 < currentStep ? 'bg-green-500' : 'bg-gray-600'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <span className="text-sm text-gray-400">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Basic Configuration</h3>
        <p className="text-gray-400 mb-6">Set up the fundamental details for your digital economy instance.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Instance Name *</label>
          <input
            type="text"
            value={formData.instanceName}
            onChange={(e) => handleInputChange('instanceName', e.target.value)}
            required
            className="input-field"
            placeholder="My Digital Economy"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Vertical</label>
          <select
            value={formData.vertical}
            onChange={(e) => handleInputChange('vertical', e.target.value)}
            className="input-field"
          >
            <option value="GENERAL">General</option>
            <option value="HEALTH">Healthcare</option>
            <option value="EDUCATION">Education</option>
            <option value="LAW">Legal</option>
            <option value="GOV">Government</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Domain</label>
          <input
            type="text"
            value={formData.domain}
            onChange={(e) => handleInputChange('domain', e.target.value)}
            className="input-field"
            placeholder="zion.example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Subdomain</label>
          <input
            type="text"
            value={formData.subdomain}
            onChange={(e) => handleInputChange('subdomain', e.target.value)}
            className="input-field"
            placeholder="latam"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Governance & Token Settings</h3>
        <p className="text-gray-400 mb-6">Configure how your economy will be governed and managed.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Token System</label>
          <select
            value={formData.tokenSystem}
            onChange={(e) => handleInputChange('tokenSystem', e.target.value)}
            className="input-field"
          >
            <option value="SHARED">ZION$ Shared</option>
            <option value="LOCAL">Local Tokens</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Governance Type</label>
          <select
            value={formData.governanceType}
            onChange={(e) => handleInputChange('governanceType', e.target.value)}
            className="input-field"
          >
            <option value="ADMIN">Admin Control</option>
            <option value="DAO_LITE">DAO-lite</option>
            <option value="DAO_FULL">Full DAO</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Region</label>
          <input
            type="text"
            value={formData.region}
            onChange={(e) => handleInputChange('region', e.target.value)}
            className="input-field"
            placeholder="North America"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Country</label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="input-field"
            placeholder="United States"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Core Features</h3>
        <p className="text-gray-400 mb-6">Select the features you want to enable for your economy.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FeatureKeys.map((feature) => (
          <label key={feature} className="flex items-center space-x-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer">
            <input
              type="checkbox"
              checked={formData.features[feature] || false}
              onChange={(e) => handleFeatureToggle(feature, e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <div>
              <span className="font-medium">{labelFor(feature)}</span>
              <p className="text-sm text-gray-400">{getFeatureDescription(feature)}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Optional Add-ons</h3>
        <p className="text-gray-400 mb-6">Enhance your economy with additional capabilities.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Payment Gateway</label>
          <select
            value={formData.addons.paymentGateway}
            onChange={(e) => handleInputChange('addons', { ...formData.addons, paymentGateway: e.target.value })}
            className="input-field"
          >
            <option value="">None</option>
            <option value="stripe">Stripe</option>
            <option value="coinbase-commerce">Coinbase Commerce</option>
          </select>
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.addons.sovereignTreasury}
              onChange={(e) => handleAddonToggle('sovereignTreasury', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span>Sovereign DAO Treasury</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.addons.dualGovernance}
              onChange={(e) => handleAddonToggle('dualGovernance', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span>Dual Governance (Local + Global)</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.addons.aiModeration}
              onChange={(e) => handleAddonToggle('aiModeration', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span>AI Moderation System</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.addons.affiliatePanel}
              onChange={(e) => handleAddonToggle('affiliatePanel', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span>Government/Institution Affiliate Panel</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
=======
  const getVerticalIcon = (vertical: string) => {
    switch (vertical) {
      case "HEALTH": return <Shield className="w-5 h-5 text-blue-400" />;
      case "EDUCATION": return <Building2 className="w-5 h-5 text-green-400" />;
      case "LAW": return <Shield className="w-5 h-5 text-purple-400" />;
      case "GOV": return <Users className="w-5 h-5 text-red-400" />;
      default: return <Globe className="w-5 h-5 text-gray-400" />;
    }
  };

  const getGovernanceIcon = (type: string) => {
    switch (type) {
      case "ADMIN": return <Crown className="w-5 h-5 text-yellow-400" />;
      case "DAO_LITE": return <Users className="w-5 h-5 text-blue-400" />;
      case "DAO_FULL": return <Zap className="w-5 h-5 text-purple-400" />;
      default: return <Crown className="w-5 h-5 text-gray-400" />;
>>>>>>> autobot/2025-08-24T03-49-38-332Z:zion-os/src/app/admin/os-deploy/page.tsx
    }
  };

  return (
<<<<<<< HEAD:zion-os.disabled/zion-os/src/app/admin/os-deploy/page.tsx
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Deploy Your Digital Economy</h1>
        <p className="text-xl text-gray-400">
          Configure and launch your sovereign AI-powered digital economy in minutes
        </p>
      </div>

      {renderStepIndicator()}

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="card">
          {renderCurrentStep()}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Deploying...</span>
                </div>
              ) : (
                'Deploy Instance'
              )}
            </button>
          )}
        </div>

        {message && (
          <div className={`p-4 rounded-lg ${
            messageType === 'success' 
              ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
              : messageType === 'error'
              ? 'bg-red-500/20 border border-red-500/30 text-red-400'
              : 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
          }`}>
            {message}
          </div>
        )}
      </form>
=======
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
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="My Digital Economy"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Vertical
                </label>
                <select name="vertical" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
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
                  defaultValue="en" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Region
                </label>
                <input 
                  name="region" 
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
                <select name="tokenSystem" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <option value="SHARED">ZION$ Shared</option>
                  <option value="LOCAL">Local Token</option>
                  <option value="HYBRID">Hybrid System</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Governance Type
                </label>
                <select name="governanceType" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                  <option value="ADMIN">Admin Control</option>
                  <option value="DAO_LITE">DAO-lite</option>
                  <option value="DAO_FULL">Full DAO</option>
                  <option value="HYBRID">Hybrid Governance</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Country
                </label>
                <input 
                  name="country" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="United States"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Payment Gateway
                </label>
                <select name="paymentGateway" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
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
                <label key={k} className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">
                  <input type="checkbox" name={k} className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
                  <div>
                    <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                      {labelFor(k)}
                    </div>
                    <div className="text-sm text-white/60">
                      {getFeatureDescription(k)}
                    </div>
                  </div>
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Vertical
                  <select name="vertical" className="select-field mt-2">
                    <option value="GENERAL">General</option>
                    <option value="HEALTH">Healthcare</option>
                    <option value="EDUCATION">Education</option>
                    <option value="LAW">Legal</option>
                    <option value="GOV">Government</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Domain
                  <input 
                    name="domain" 
                    className="input-field mt-2" 
                    placeholder="zion.example.com"
                  />
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Subdomain
                  <input 
                    name="subdomain" 
                    className="input-field mt-2" 
                    placeholder="latam"
                />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Default Language
                  <input 
                    name="defaultLanguage" 
                    defaultValue="en" 
                    className="input-field mt-2"
                  />
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Token System
                  <select name="tokenSystem" className="select-field mt-2">
                    <option value="SHARED">ZION$ Shared</option>
                    <option value="LOCAL">Local</option>
                  </select>
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Governance Type
                  <select name="governanceType" className="select-field mt-2">
                    <option value="ADMIN">Admin</option>
                    <option value="DAO_LITE">DAO-lite</option>
                    <option value="DAO_FULL">Full DAO</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Region
                  <input 
                    name="region" 
                    className="input-field mt-2" 
                    placeholder="North America"
                  />
                </label>
              </div>
              
              <div className="space-y-2">
                <label className="block text-white font-medium">
                  Country
                  <input 
                    name="country" 
                    className="input-field mt-2" 
                    placeholder="United States"
                  />
                </label>
              </div>
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
                <input type="checkbox" name="sovereignTreasury" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
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
                <input type="checkbox" name="dualGovernance" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
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
                <input type="checkbox" name="aiModeration" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
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
                <input type="checkbox" name="affiliatePanel" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />
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
            
            {message && (
              <div className={`mt-6 p-4 rounded-lg ${
                messageType === 'success' 
                  ? 'bg-green-900/20 border border-green-500/20 text-green-400' 
                  : 'bg-red-900/20 border border-red-500/20 text-red-400'
              }`}>
                {message}
              </div>
            )}
          </div>
        </form>
      </div>
>>>>>>> autobot/2025-08-24T03-49-38-332Z:zion-os/src/app/admin/os-deploy/page.tsx
    </div>
  );
}

function labelFor(key: string) {
  switch (key) {
<<<<<<< HEAD:zion-os.disabled/zion-os/src/app/admin/os-deploy/page.tsx
    case "marketplace": return "Marketplace (Jobs, Talent, Projects)";
    case "zion_gpt": return "ZionGPT Core";
    case "resume_ai": return "Resume Builder + Proposal AI";
    case "token_rewards": return "Token system + rewards";
    case "onchain_contracts": return "On-chain contract builder";
    case "kyc_aml": return "KYC/AML + ID verification";
    case "dao_voting": return "DAO proposal voting";
    case "incubator_grants": return "Incubator + Grants";
    case "academy": return "Zion Academy";
    case "partner_api": return "API access for partners";
    case "regional_dashboards": return "Regional/institutional dashboards";
    case "vendor_plugin": return "White-label vendor plugin";
    case "web3_login": return "Web3 login + DID";
    case "multi_currency": return "Multi-currency support";
=======
    case "marketplace": return "Marketplace";
    case "zion_gpt": return "ZionGPT Core";
    case "resume_ai": return "Resume AI";
    case "token_rewards": return "Token System";
    case "onchain_contracts": return "Smart Contracts";
    case "kyc_aml": return "KYC/AML";
    case "dao_voting": return "DAO Voting";
    case "incubator_grants": return "Incubator";
    case "academy": return "Zion Academy";
    case "partner_api": return "Partner API";
    case "regional_dashboards": return "Regional Dashboards";
    case "vendor_plugin": return "Vendor Plugin";
    case "web3_login": return "Web3 Login";
    case "multi_currency": return "Multi-Currency";
>>>>>>> autobot/2025-08-24T03-49-38-332Z:zion-os/src/app/admin/os-deploy/page.tsx
    default: return key;
  }
}

function getFeatureDescription(key: string) {
  switch (key) {
<<<<<<< HEAD:zion-os.disabled/zion-os/src/app/admin/os-deploy/page.tsx
    case "marketplace": return "Complete marketplace for jobs, talent, and projects";
    case "zion_gpt": return "Core AI assistant for your economy";
    case "resume_ai": return "AI-powered resume building and proposal generation";
    case "token_rewards": return "Token-based reward and incentive system";
    case "onchain_contracts": return "Smart contract builder and management";
    case "kyc_aml": return "Identity verification and compliance";
    case "dao_voting": return "Decentralized governance and voting";
    case "incubator_grants": return "Startup incubation and grant management";
    case "academy": return "Educational platform and training";
    case "partner_api": return "API access for third-party integrations";
    case "regional_dashboards": return "Regional and institutional analytics";
    case "vendor_plugin": return "White-label solutions for vendors";
    case "web3_login": return "Web3 wallet and DID authentication";
    case "multi_currency": return "Support for multiple currencies";
=======
    case "marketplace": return "Jobs, talent, and project marketplace";
    case "zion_gpt": return "Core AI intelligence system";
    case "resume_ai": return "AI-powered resume and proposal builder";
    case "token_rewards": return "Token system with rewards";
    case "onchain_contracts": return "Smart contract builder";
    case "kyc_aml": return "Identity verification and compliance";
    case "dao_voting": return "Proposal and voting system";
    case "incubator_grants": return "Startup incubation and funding";
    case "academy": return "Educational platform";
    case "partner_api": return "API access for partners";
    case "regional_dashboards": return "Regional and institutional views";
    case "vendor_plugin": return "White-label vendor solutions";
    case "web3_login": return "Web3 authentication and DID";
    case "multi_currency": return "Multi-currency support";
>>>>>>> autobot/2025-08-24T03-49-38-332Z:zion-os/src/app/admin/os-deploy/page.tsx
    default: return "Core platform feature";
  }
}