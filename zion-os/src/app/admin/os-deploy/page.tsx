"use client&quot;;

import { useState } from &quot;react&quot;;
import { FeatureKeys } from &quot;@/lib/zod&quot;;
import LoadingSpinner from &quot;@/app/components/LoadingSpinner&quot;;

export default function AdminDeployPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    
    const formData = new FormData(event.currentTarget);
    const features: Record<string, boolean> = {};
    FeatureKeys.forEach((k) => (features[k] = formData.get(k) === &quot;on&quot;));

      const payload = {
        instanceName: String(formData.get(&quot;instanceName&quot;) || "&quot;),
        domain: String(formData.get(&quot;domain&quot;) || "&quot; ) || undefined,
        subdomain: String(formData.get(&quot;subdomain&quot;) || "&quot; ) || undefined,
        vertical: String(formData.get(&quot;vertical&quot;) || &quot;GENERAL&quot;),
        defaultLanguage: String(formData.get(&quot;defaultLanguage&quot;) || &quot;en&quot;),
        tokenSystem: String(formData.get(&quot;tokenSystem&quot;) || &quot;SHARED&quot;),
        governanceType: String(formData.get(&quot;governanceType&quot;) || &quot;ADMIN&quot;),
        region: String(formData.get(&quot;region&quot;) || "&quot;) || undefined,
        country: String(formData.get(&quot;country&quot;) || "&quot;) || undefined,
        features,
        addons: {
          paymentGateway: String(formData.get(&quot;paymentGateway&quot;) || "&quot;) || undefined,
          sovereignTreasury: formData.get(&quot;sovereignTreasury&quot;) === &quot;on&quot;,
          dualGovernance: formData.get(&quot;dualGovernance&quot;) === &quot;on&quot;,
          aiModeration: formData.get(&quot;aiModeration&quot;) === &quot;on&quot;,
          affiliatePanel: formData.get(&quot;affiliatePanel&quot;) === &quot;on&quot;}};

    try {
      const res = await fetch(&quot;/api/deploy&quot;, { method: &quot;POST&quot;, body: JSON.stringify(payload) });
      const data = await res.json();
      
      if (!res.ok) {
        setMessageType('error');
        setMessage(data.error || &quot;Deployment failed&quot;);
        return;
      }
      
      setMessageType('success');
      setMessage(`✅ Deployment queued successfully! ID: ${data.deploymentId}`);
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setMessageType('error');
      setMessage(&quot;Network error occurred. Please try again.&quot;);
    } finally {
      setLoading(false);
    }
  }

  const getVerticalIcon = (vertical: string) => {
    switch (vertical) {
      case &quot;HEALTH": return <Shield className="w-5 h-5 text-blue-400&quot; />;
      case &quot;EDUCATION": return <Building2 className="w-5 h-5 text-green-400&quot; />;
      case &quot;LAW": return <Shield className="w-5 h-5 text-purple-400&quot; />;
      case &quot;GOV": return <Users className="w-5 h-5 text-red-400" />;
      default: return <Globe className="w-5 h-5 text-gray-400&quot; />;
    }
  };

  const getGovernanceIcon = (type: string) => {
    switch (type) {
      case &quot;ADMIN": return <Crown className="w-5 h-5 text-yellow-400&quot; />;
      case &quot;DAO_LITE": return <Users className="w-5 h-5 text-blue-400&quot; />;
      case &quot;DAO_FULL": return <Zap className="w-5 h-5 text-purple-400" />;
      default: return <Crown className="w-5 h-5 text-gray-400" />;
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
                <label className="block text-sm font-medium text-white/90&quot;>
                  Instance Name *
                </label>
                <input 
                  name=&quot;instanceName" 
                  required 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all&quot;
                  placeholder=&quot;My Digital Economy"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90&quot;>
                  Vertical
                </label>
                <select name=&quot;vertical" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all&quot;>
                  <option value=&quot;GENERAL&quot;>General</option>
                  <option value=&quot;HEALTH&quot;>Healthcare</option>
                  <option value=&quot;EDUCATION&quot;>Education</option>
                  <option value=&quot;LAW&quot;>Legal</option>
                  <option value=&quot;GOV&quot;>Government</option>
                  <option value=&quot;FINANCE&quot;>Finance</option>
                  <option value=&quot;TECH">Technology</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90&quot;>
                  Domain
                </label>
                <input 
                  name=&quot;domain" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all&quot;
                  placeholder=&quot;zion.example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90&quot;>
                  Subdomain
                </label>
                <input 
                  name=&quot;subdomain" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all&quot;
                  placeholder=&quot;latam"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90&quot;>
                  Default Language
                </label>
                <input 
                  name=&quot;defaultLanguage&quot; 
                  defaultValue=&quot;en" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90&quot;>
                  Region
                </label>
                <input 
                  name=&quot;region" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all&quot;
                  placeholder=&quot;North America"
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
                <label className="block text-sm font-medium text-white/90&quot;>
                  Token System
                </label>
                <select name=&quot;tokenSystem" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all&quot;>
                  <option value=&quot;SHARED&quot;>ZION$ Shared</option>
                  <option value=&quot;LOCAL&quot;>Local Token</option>
                  <option value=&quot;HYBRID">Hybrid System</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90&quot;>
                  Governance Type
                </label>
                <select name=&quot;governanceType" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all&quot;>
                  <option value=&quot;ADMIN&quot;>Admin Control</option>
                  <option value=&quot;DAO_LITE&quot;>DAO-lite</option>
                  <option value=&quot;DAO_FULL&quot;>Full DAO</option>
                  <option value=&quot;HYBRID">Hybrid Governance</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90&quot;>
                  Country
                </label>
                <input 
                  name=&quot;country" 
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all&quot;
                  placeholder=&quot;United States"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90&quot;>
                  Payment Gateway
                </label>
                <select name=&quot;paymentGateway" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all&quot;>
                  <option value="&quot;>None</option>
                  <option value=&quot;stripe&quot;>Stripe</option>
                  <option value=&quot;coinbase-commerce&quot;>Coinbase Commerce</option>
                  <option value=&quot;paypal&quot;>PayPal</option>
                  <option value=&quot;crypto&quot;>Crypto Payments</option>
                </select>
              </div>
            </div>
          </div>

          {/* Feature Toggles */}
          <div className=&quot;glass-effect rounded-2xl p-8&quot;>
            <h2 className=&quot;text-2xl font-semibold mb-6 flex items-center gap-3&quot;>
              <span className=&quot;w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm&quot;>🔧</span>
              Core Features
            </h2>
            
            <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
              {FeatureKeys.map((k) => (
                <label key={k} className=&quot;flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group&quot;>
                  <input type=&quot;checkbox&quot; name={k} className=&quot;w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2&quot; />
                  <div>
                    <div className=&quot;font-medium text-white group-hover:text-blue-400 transition-colors&quot;>
                      {labelFor(k)}
                    </div>
                    <div className=&quot;text-sm text-white/60&quot;>
                      {getFeatureDescription(k)}
                    </div>
                  </div>
                </label>
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <label className=&quot;block text-white font-medium&quot;>
                  Vertical
                  <select name=&quot;vertical&quot; className=&quot;select-field mt-2&quot;>
                    <option value=&quot;GENERAL&quot;>General</option>
                    <option value=&quot;HEALTH&quot;>Healthcare</option>
                    <option value=&quot;EDUCATION&quot;>Education</option>
                    <option value=&quot;LAW&quot;>Legal</option>
                    <option value=&quot;GOV&quot;>Government</option>
                  </select>
                </label>
              </div>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
              <div className=&quot;space-y-2&quot;>
                <label className=&quot;block text-white font-medium&quot;>
                  Domain
                  <input 
                    name=&quot;domain&quot; 
                    className=&quot;input-field mt-2&quot; 
                    placeholder=&quot;zion.example.com&quot;
                  />
                </label>
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <label className=&quot;block text-white font-medium&quot;>
                  Subdomain
                  <input 
                    name=&quot;subdomain&quot; 
                    className=&quot;input-field mt-2&quot; 
                    placeholder=&quot;latam&quot;
                />
                </label>
              </div>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
              <div className=&quot;space-y-2&quot;>
                <label className=&quot;block text-white font-medium&quot;>
                  Default Language
                  <input 
                    name=&quot;defaultLanguage&quot; 
                    defaultValue=&quot;en&quot; 
                    className=&quot;input-field mt-2&quot;
                  />
                </label>
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <label className=&quot;block text-white font-medium&quot;>
                  Token System
                  <select name=&quot;tokenSystem&quot; className=&quot;select-field mt-2&quot;>
                    <option value=&quot;SHARED&quot;>ZION$ Shared</option>
                    <option value=&quot;LOCAL&quot;>Local</option>
                  </select>
                </label>
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <label className=&quot;block text-white font-medium&quot;>
                  Governance Type
                  <select name=&quot;governanceType&quot; className=&quot;select-field mt-2&quot;>
                    <option value=&quot;ADMIN&quot;>Admin</option>
                    <option value=&quot;DAO_LITE&quot;>DAO-lite</option>
                    <option value=&quot;DAO_FULL&quot;>Full DAO</option>
                  </select>
                </label>
              </div>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
              <div className=&quot;space-y-2&quot;>
                <label className=&quot;block text-white font-medium&quot;>
                  Region
                  <input 
                    name=&quot;region&quot; 
                    className=&quot;input-field mt-2&quot; 
                    placeholder=&quot;North America&quot;
                  />
                </label>
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <label className=&quot;block text-white font-medium&quot;>
                  Country
                  <input 
                    name=&quot;country&quot; 
                    className=&quot;input-field mt-2&quot; 
                    placeholder=&quot;United States&quot;
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className=&quot;glass-effect rounded-2xl p-8&quot;>
            <h2 className=&quot;text-2xl font-semibold mb-6 flex items-center gap-3&quot;>
              <span className=&quot;w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-sm&quot;>🚀</span>
              Premium Add-ons
            </h2>
            
            <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-4&quot;>
              <label className=&quot;flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group&quot;>
                <input type=&quot;checkbox&quot; name=&quot;sovereignTreasury&quot; className=&quot;w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2&quot; />
                <div>
                  <div className=&quot;font-medium text-white group-hover:text-blue-400 transition-colors&quot;>
                    Sovereign DAO Treasury
                  </div>
                  <div className=&quot;text-sm text-white/60&quot;>
                    Manage community funds with transparency
                  </div>
                </div>
              </label>
              
              <label className=&quot;flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group&quot;>
                <input type=&quot;checkbox&quot; name=&quot;dualGovernance&quot; className=&quot;w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2&quot; />
                <div>
                  <div className=&quot;font-medium text-white group-hover:text-blue-400 transition-colors&quot;>
                    Dual Governance
                  </div>
                  <div className=&quot;text-sm text-white/60&quot;>
                    Local + global decision making
                  </div>
                </div>
              </label>
              
              <label className=&quot;flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group&quot;>
                <input type=&quot;checkbox&quot; name=&quot;aiModeration&quot; className=&quot;w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2&quot; />
                <div>
                  <div className=&quot;font-medium text-white group-hover:text-blue-400 transition-colors&quot;>
                    AI Moderation System
                  </div>
                  <div className=&quot;text-sm text-white/60&quot;>
                    Automated content and behavior monitoring
                  </div>
                </div>
              </label>
              
              <label className=&quot;flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group&quot;>
                <input type=&quot;checkbox&quot; name=&quot;affiliatePanel&quot; className=&quot;w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2&quot; />
                <div>
                  <div className=&quot;font-medium text-white group-hover:text-blue-400 transition-colors&quot;>
                    Government Affiliate Panel
                  </div>
                  <div className=&quot;text-sm text-white/60&quot;>
                    Institutional partnership management
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Section */}
          <div className=&quot;text-center&quot;>
            <button 
              disabled={loading} 
              className=&quot;btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed hover-lift&quot;
            >
              {loading ? (
                <LoadingSpinner size=&quot;sm&quot; text=&quot;Deploying...&quot; />
              ) : (
                &quot;🚀 Deploy Instance&quot;
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
    </div>
  );
}

function labelFor(key: string) {
  switch (key) {
    case &quot;marketplace&quot;: return &quot;Marketplace&quot;;
    case &quot;zion_gpt&quot;: return &quot;ZionGPT Core&quot;;
    case &quot;resume_ai&quot;: return &quot;Resume AI&quot;;
    case &quot;token_rewards&quot;: return &quot;Token System&quot;;
    case &quot;onchain_contracts&quot;: return &quot;Smart Contracts&quot;;
    case &quot;kyc_aml&quot;: return &quot;KYC/AML&quot;;
    case &quot;dao_voting&quot;: return &quot;DAO Voting&quot;;
    case &quot;incubator_grants&quot;: return &quot;Incubator&quot;;
    case &quot;academy&quot;: return &quot;Zion Academy&quot;;
    case &quot;partner_api&quot;: return &quot;Partner API&quot;;
    case &quot;regional_dashboards&quot;: return &quot;Regional Dashboards&quot;;
    case &quot;vendor_plugin&quot;: return &quot;Vendor Plugin&quot;;
    case &quot;web3_login&quot;: return &quot;Web3 Login&quot;;
    case &quot;multi_currency&quot;: return &quot;Multi-Currency&quot;;
    default: return key;
  }
}

function getFeatureDescription(key: string) {
  switch (key) {
    case &quot;marketplace&quot;: return &quot;Jobs, talent, and project marketplace&quot;;
    case &quot;zion_gpt&quot;: return &quot;Core AI intelligence system&quot;;
    case &quot;resume_ai&quot;: return &quot;AI-powered resume and proposal builder&quot;;
    case &quot;token_rewards&quot;: return &quot;Token system with rewards&quot;;
    case &quot;onchain_contracts&quot;: return &quot;Smart contract builder&quot;;
    case &quot;kyc_aml&quot;: return &quot;Identity verification and compliance&quot;;
    case &quot;dao_voting&quot;: return &quot;Proposal and voting system&quot;;
    case &quot;incubator_grants&quot;: return &quot;Startup incubation and funding&quot;;
    case &quot;academy&quot;: return &quot;Educational platform&quot;;
    case &quot;partner_api&quot;: return &quot;API access for partners&quot;;
    case &quot;regional_dashboards&quot;: return &quot;Regional and institutional views&quot;;
    case &quot;vendor_plugin&quot;: return &quot;White-label vendor solutions&quot;;
    case &quot;web3_login&quot;: return &quot;Web3 authentication and DID&quot;;
    case &quot;multi_currency&quot;: return &quot;Multi-currency support&quot;;
    default: return &quot;Core platform feature&quot;;
  }
}