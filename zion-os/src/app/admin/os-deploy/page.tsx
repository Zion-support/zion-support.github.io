"use client";

import { useState } from "react";
import { FeatureKeys } from "@/lib/zod";
import { 
  Rocket, 
  Globe, 
  Settings, 
  Shield, 
  Users, 
  CreditCard,
  Building2,
  Languages,
  Coins,
  Crown,
  MapPin,
  Flag,
  CheckCircle,
  AlertCircle,
  Play,
  Zap,
  Sparkles
} from "lucide-react";

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
      const data = await res.json();
      
      if (!res.ok) {
        setMessageType('error');
        setMessage(data.error || "Deployment failed");
        return;
      }
      
      setMessageType('success');
      setMessage(`✅ Deployment queued successfully! ID: ${data.deploymentId}`);
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setMessageType('error');
      setMessage("Network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

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
    }
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-high-contrast">Unified Deployment</h1>
        <p className="text-[var(--fg-secondary)] mt-2">
          Configure and deploy a new Zion instance with your preferred features and settings.
        </p>
      </header>

      <form onSubmit={onSubmit} className="space-y-8" aria-label="Instance deployment configuration">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="space-y-6" aria-labelledby="basic-config">
            <h2 id="basic-config" className="text-xl font-semibold">Basic Configuration</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="instanceName" className="block font-medium mb-2">
                  Instance Name <span className="text-[var(--error)]" aria-label="required">*</span>
                </label>
                <input 
                  id="instanceName"
                  name="instanceName" 
                  required 
                  className="form-input"
                  aria-describedby="instanceName-help"
                />
                <div id="instanceName-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                  A unique name for your Zion instance
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="domain" className="block font-medium mb-2">Domain</label>
                  <input 
                    id="domain"
                    name="domain" 
                    placeholder="zion.example.com" 
                    className="form-input"
                    aria-describedby="domain-help"
                  />
                  <div id="domain-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                    Custom domain (optional)
                  </div>
                </div>
                <div>
                  <label htmlFor="subdomain" className="block font-medium mb-2">Subdomain</label>
                  <input 
                    id="subdomain"
                    name="subdomain" 
                    placeholder="latam" 
                    className="form-input"
                    aria-describedby="subdomain-help"
                  />
                  <div id="subdomain-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                    Subdomain for your instance
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="vertical" className="block font-medium mb-2">Vertical</label>
                  <select 
                    id="vertical"
                    name="vertical" 
                    className="form-input"
                    aria-describedby="vertical-help"
                  >
                    <option value="GENERAL">General</option>
                    <option value="HEALTH">Health</option>
                    <option value="EDUCATION">Education</option>
                    <option value="LAW">Law</option>
                    <option value="GOV">Government</option>
                  </select>
                  <div id="vertical-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                    Industry focus area
                  </div>
                </div>
                <div>
                  <label htmlFor="defaultLanguage" className="block font-medium mb-2">Default Language</label>
                  <input 
                    id="defaultLanguage"
                    name="defaultLanguage" 
                    defaultValue="en" 
                    className="form-input"
                    aria-describedby="language-help"
                  />
                  <div id="language-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                    Primary language code
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tokenSystem" className="block font-medium mb-2">Token System</label>
                  <select 
                    id="tokenSystem"
                    name="tokenSystem" 
                    className="form-input"
                    aria-describedby="token-help"
                  >
                    <option value="SHARED">ZION$ Shared</option>
                    <option value="LOCAL">Local</option>
                  </select>
                  <div id="token-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                    Token system type
                  </div>
                </div>
                <div>
                  <label htmlFor="governanceType" className="block font-medium mb-2">Governance</label>
                  <select 
                    id="governanceType"
                    name="governanceType" 
                    className="form-input"
                    aria-describedby="governance-help"
                  >
                    <option value="ADMIN">Admin</option>
                    <option value="DAO_LITE">DAO-lite</option>
                    <option value="DAO_FULL">Full DAO</option>
                  </select>
                  <div id="governance-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                    Governance structure
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="region" className="block font-medium mb-2">Region</label>
                  <input 
                    id="region"
                    name="region" 
                    className="form-input"
                    aria-describedby="region-help"
                  />
                  <div id="region-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                    Geographic region
                  </div>
                </div>
                <div>
                  <label htmlFor="country" className="block font-medium mb-2">Country</label>
                  <input 
                    id="country"
                    name="country" 
                    className="form-input"
                    aria-describedby="country-help"
                  />
                  <div id="country-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                    Target country
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6" aria-labelledby="features-addons">
            <h2 id="features-addons" className="text-xl font-semibold">Features & Add-ons</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-3">Feature Toggles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FeatureKeys.map((k) => (
                    <label key={k} className="flex items-center gap-3 text-sm cursor-pointer">
                      <input 
                        type="checkbox" 
                        name={k} 
                        className="w-4 h-4 text-[var(--accent)] bg-[var(--bg-secondary)] border-[var(--border)] rounded focus:ring-[var(--focus-ring)]"
                      />
                      <span>{labelFor(k)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Optional Add-ons</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="sovereignTreasury" 
                      className="w-4 h-4 text-[var(--accent)] bg-[var(--bg-secondary)] border-[var(--border)] rounded focus:ring-[var(--focus-ring)]"
                    />
                    <span>Sovereign DAO treasury</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="dualGovernance" 
                      className="w-4 h-4 text-[var(--accent)] bg-[var(--bg-secondary)] border-[var(--border)] rounded focus:ring-[var(--focus-ring)]"
                    />
                    <span>Dual governance (local + global)</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="aiModeration" 
                      className="w-4 h-4 text-[var(--accent)] bg-[var(--bg-secondary)] border-[var(--border)] rounded focus:ring-[var(--focus-ring)]"
                    />
                    <span>AI moderation system</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="affiliatePanel" 
                      className="w-4 h-4 text-[var(--accent)] bg-[var(--bg-secondary)] border-[var(--border)] rounded focus:ring-[var(--focus-ring)]"
                    />
                    <span>Gov/institution affiliate panel</span>
                  </label>
                  
                  <div>
                    <label htmlFor="paymentGateway" className="block font-medium mb-2">Payment Gateway</label>
                    <select 
                      id="paymentGateway"
                      name="paymentGateway" 
                      className="form-input"
                      aria-describedby="payment-help"
                    >
                      <option value="">None</option>
                      <option value="stripe">Stripe</option>
                      <option value="coinbase-commerce">Coinbase Commerce</option>
                    </select>
                    <div id="payment-help" className="text-sm text-[var(--fg-secondary)] mt-1">
                      Payment processing integration
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="border-t border-[var(--border)] pt-6">
          <div className="flex items-center gap-4">
            <button 
              type="submit"
              disabled={loading} 
              className="btn-primary"
              aria-describedby="submit-help"
            >
              {loading ? "Deploying..." : "Deploy Instance"}
            </button>
            {message && (
              <div 
                className={`text-sm px-3 py-2 rounded ${
                  message.includes("failed") 
                    ? "bg-[var(--error)]/10 text-[var(--error)] border border-[var(--error)]/20" 
                    : "bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/20"
                }`}
                role="status"
                aria-live="polite"
              >
                {message}
              </div>
            )}
          </div>
          <div id="submit-help" className="text-sm text-[var(--fg-secondary)] mt-2">
            Click to deploy your configured Zion instance
          </div>
        </section>
      </form>
    </div>
  );
}

function labelFor(key: string) {
  switch (key) {
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
    default: return key;
  }
}

function getFeatureDescription(key: string) {
  switch (key) {
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
    default: return "Core platform feature";
  }
}