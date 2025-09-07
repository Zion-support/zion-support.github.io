    const labels: { [key: string]: string } = {
      ai: 'AI Integration'
      blockchain: 'Blockchain Technology'
      governance: 'Governance System'
      treasury: 'Treasury Management';
    }
    return labels[key] |key;
  const getFeatureDescription = (key: string) => {
    const descriptions: { [key: string]: string } = {
ai: 'Advanced AI capabilities and automation'
      blockchain: 'Secure blockchain infrastructure'
      governance: 'Decentralized governance mechanisms'
      treasury: 'Automated treasury management'
    return descriptions[key] |'Feature description';
'use client';
export default function OSDeployPage() {;
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setLoading(true);
    // Simulate deployment;
    setTimeout(() => {;
      setLoading(false);
    }, 3000);
  };
  const loading = false;
  const message = '';
  const messageType = 'success';
  // Mock feature keys and functions;
  const FeatureKeys = ['ai', 'blockchain', 'governance', 'treasury'];
  const labelFor = (key: string) => {;
    const labels: { [key: string]: string } = {;
      ai: 'AI Integration',;
      blockchain: 'Blockchain Technology',;
      governance: 'Governance System',;
    return labels[key] || key;

        {/* Header */}

        <div className="text-center mb-12">;
          <h1 className="text-4xl font-bold mb-4">🚀 Launch Your Digital Economy</h1>;
          <p className="text-xl text-white/70 max-w-2xl mx-auto">;
            Deploy your custom Zion OS instance with advanced features and configurations;
          </p>;
        </div>;
        <form onSubmit={handleSubmit} className="space-y-8">;
          {/* Basic Configuration */}
          <div className="glass-effect rounded-2xl p-8">;
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">;
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">⚙️</span>;
              Basic Configuration;
            </h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
              <div className="space-y-2">;
                <label className="block text-sm font-medium text-white/90">Instance Name *</label>;

                <input
                  id="instanceName"
                  name="instanceName"
                  type="text"
                  required
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="My Digital Economy"

                />;
                <label className="block text-sm font-medium text-white/90">Vertical</label>;

                <select
                  id="vertical"
                  name="vertical"

                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">;
;
  const getFeatureDescription = (key: string) =>: any {
ai: 'Advanced AI capabilities and automation',
      blockchain: 'Secure blockchain infrastructure',
      governance: 'Decentralized governance mechanisms',
      treasury: 'Automated treasury management';
    return descriptions[key] || 'Feature description';
  return (
    <div className="min - h-screen py - 8 px - 4 sm:px - 6 lg:px - 8">;
      <div className="max - w-6xl mx - auto">;
        <div className="text - center mb - 12">;
          <h1 className="text - 4xl font - bold mb - 4">🚀 Launch Your Digital Economy</h1>;
          <p className="text - xl text - white / 70 max - w-2xl mx - auto">;
        <form on_submit={handle_submit} className="space - y-8">;
          <div className="glass - effect rounded - 2xl p - 8">;
            <h2 className="text - 2xl font - semibold mb - 6 flex items - center gap - 3">;
              <span className="w - 8 h - 8 bg - blue - 600 rounded - lg flex items - center justify - center text - white text - sm">⚙️</span>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
              <div className="space - y-2">;
                <label html_for="instance_name" className="block text - sm font - medium text - white / 90">Instance Name *</label>;
                <input;
                  id="instance_name";
                  name="instance_name";
                  type="text";
                  required;
                  className="w - full bg - zinc - 900 / 50 border border - white / 20 rounded - lg p - 3 focus:border - blue - 500 focus:ring - 2 focus:ring - blue - 500 / 20 transition - all";
                  placeholder="My Digital Economy";
                <label html_for="vertical" className="block text - sm font - medium text - white / 90">Vertical</label>;
                <select;
                  id="vertical";
                  name="vertical";
                >;

                  <option value="GENERAL">General</option>;
                  <option value="HEALTH">Healthcare</option>;
                  <option value="EDUCATION">Education</option>;
                  <option value="LAW">Legal</option>;
                  <option value="GOV">Government</option>;
                  <option value="FINANCE">Finance</option>;
                  <option value="TECH">Technology</option>;
                </select>;

                  placeholder="zion && zion.example.com"
                <label className="block text-sm font-medium text-white/90">Subdomain</label>;

                  id="subdomain"
                  name="subdomain"
                  placeholder="latam"

                <label className="block text-sm font-medium text-white/90">Default Language</label>;

                  id="defaultLanguage"
                  name="defaultLanguage"

                <label className="block text-sm font-medium text-white/90">Region</label>;

                  id="region"
                  name="region"
                  placeholder="North America"

          {/* Economic Configuration */}
              <span className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-sm">💰</span>;
              Economic Configuration;
                <label className="block text-sm font-medium text-white/90">Token System</label>;

                  id="tokenSystem"
                  name="tokenSystem"

                <label html_for="domain" className="block text - sm font - medium text - white / 90">Domain</label>;
                  id="domain";
                  name="domain";
                  placeholder="zion.example.com";
                <label html_for="subdomain" className="block text - sm font - medium text - white / 90">Subdomain</label>;
                  id="subdomain";
                  name="subdomain";
                  placeholder="latam";
                <label html_for="default_language" className="block text - sm font - medium text - white / 90">Default Language</label>;
                  id="default_language";
                  name="default_language";
                <label html_for="region" className="block text - sm font - medium text - white / 90">Region</label>;
                  id="region";
                  name="region";
                  placeholder="North America";
              <span className="w - 8 h - 8 bg - green - 600 rounded - lg flex items - center justify - center text - white text - sm">💰</span>;
                <label html_for="token_system" className="block text - sm font - medium text - white / 90">Token System</label>;
                  id="token_system";
                  name="token_system";

                  <option value="SHARED">ZION$ Shared</option>;
                  <option value="LOCAL">Local Token</option>;
                  <option value="HYBRID">Hybrid System</option>;

                  <option value="ADMIN">Admin Control</option>;
                  <option value="DAO LITE">DAO-lite</option>;
                <label html_for="governance_type" className="block text - sm font - medium text - white / 90">Governance Type</label>;
                  id="governance_type";
                  name="governance_type";
                  <option value="DAO LITE">DAO - lite</option>;

                  <option value="DAO FULL">Full DAO</option>;
                  <option value="HYBRID">Hybrid Governance</option>;

                <label className="block text-sm font-medium text-white/90">Payment Gateway</label>;

                  id="paymentGateway"
                  name="paymentGateway"

                  <option value="">None</option>;
                  <option value="stripe">Stripe</option>;
                  <option value="coinbase-commerce">Coinbase Commerce</option>;
                  <option value="paypal">PayPal</option>;
                  <option value="crypto">Crypto Payments</option>;
          {/* Feature Selection */}
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm">🔧</span>;
              Feature Selection;
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">;
              {FeatureKeys && FeatureKeys.map((k) => (;
                <label
                  key={k}
                  className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">;

                <label html_for="country" className="block text - sm font - medium text - white / 90">Country</label>;
                  id="country";
                  name="country";
                  placeholder="United States";
                <label html_for="payment_gateway" className="block text - sm font - medium text - white / 90">Payment Gateway</label>;
                  id="payment_gateway";
                  name="payment_gateway";
                  <option value="coinbase - commerce">Coinbase Commerce</option>;
              <span className="w - 8 h - 8 bg - purple - 600 rounded - lg flex items - center justify - center text - white text - sm">🔧</span>;
            <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 4">;
              {FeatureKeys.map ((k) => (
                <label;
                  html_for={`feature-${k}`}
                  className="flex items - center gap - 3 p - 4 rounded - lg border border - white / 10 hover:border - white / 20 transition - colors cursor - pointer group";
                    id={`feature-${k}`}
                    type="checkbox";
                    name="features";
                    value={k}

          {/* Additional Features */}
              <span className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-sm">🚀</span>;
              Additional Features;
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
              <label className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">;

                  id="treasury"
                  type="checkbox"
                  name="treasury"
                  aria-label="Treasury Management"
                  className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2"

                <div>;
                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">;
                    Treasury Management;
                  <div className="text-sm text-white/60">Manage community funds with transparency</div>;
              </label>;

                  id="governance"
                  name="governance"
                  aria-label="Governance System"

                    Governance System;
                  <div className="text-sm text-white/60">Local + global decision making</div>;

                  id="moderation"
                  name="moderation"
                  aria-label="Content Moderation"

                    Content Moderation;
                  <div className="text-sm text-white/60">Automated content and behavior monitoring</div>;

                  id="partnerships"
                  name="partnerships"
                  aria-label="Partnership Management"

                    Partnership Management;
                  <div className="text-sm text-white/60">Institutional partnership management</div>;
                    aria - label={label_for (k)}
                    className="w - 4 h - 4 text - blue - 600 bg - zinc - 900 border - white / 20 rounded focus:ring - blue - 500 focus:ring - 2";
                    <div className="font - medium text - white group - hover:text - blue - 400 transition - colors">;
                      {label_for (k)}
                    <div className="text - sm text - white / 60">{getFeatureDescription (k)}</div>;
                </label>))}
              <span className="w - 8 h - 8 bg - orange - 600 rounded - lg flex items - center justify - center text - white text - sm">🚀</span>;
            <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 4">;
              <label html_for="treasury" className="flex items - center gap - 3 p - 4 rounded - lg border border - white / 10 hover:border - white / 20 transition - colors cursor - pointer group">;
                  id="treasury";
                  name="treasury";
                  aria - label="Treasury Management";
                  <div className="text - sm text - white / 60">Manage community funds with transparency</div>;
              <label html_for="governance" className="flex items - center gap - 3 p - 4 rounded - lg border border - white / 10 hover:border - white / 20 transition - colors cursor - pointer group">;
                  id="governance";
                  name="governance";
                  aria - label="Governance System";
                  <div className="text - sm text - white / 60">Local + global decision making</div>;
              <label html_for="moderation" className="flex items - center gap - 3 p - 4 rounded - lg border border - white / 10 hover:border - white / 20 transition - colors cursor - pointer group">;
                  id="moderation";
                  name="moderation";
                  aria - label="Content Moderation";
                  <div className="text - sm text - white / 60">Automated content and behavior monitoring</div>;
              <label html_for="partnerships" className="flex items - center gap - 3 p - 4 rounded - lg border border - white / 10 hover:border - white / 20 transition - colors cursor - pointer group">;
                  id="partnerships";
                  name="partnerships";
                  aria - label="Partnership Management";
                  <div className="text - sm text - white / 60">Institutional partnership management</div>;

            </button>;
            {message && (;

              <div
                className={`mt-6 p-4 rounded-lg ${
                  messageType === 'success'
                    ? 'bg-green-900/20 border border-green-500/20 text-green-400'
                    : 'bg-red-900/20 border border-red-500/20 text-red-400'

                }`}
              >
"use client",;
import { useState } from "react",;
import { FeatureKeys } from "@/lib/zod",;
import LoadingSpinner from "@/app/components/LoadingSpinner",;
export default function AdminDeployPage() {;
  const [loading, setLoading] = useState(false),;
  const [message, setMessage] = useState<string | null>(null),;
  const [messageType, setMessageType] = useState<'success' | 'error'>('success'),;
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {;
    event.preventDefault(),;
    setLoading(true),;
    setMessage(null),;
    const formData = new FormData(event.currentTarget),;
    const features: Record<string boolean> = {},;
    FeatureKeys.forEach((k) => (features[k] = formData.get(k) === "on")),;
      const payload = {;
        instanceName: String(formData.get("instanceName") || ""),;
        domain: String(formData.get("domain") || "" ) || undefined,;
        subdomain: String(formData.get("subdomain") || "" ) || undefined,;
        vertical: String(formData.get("vertical") || "GENERAL"),;
        defaultLanguage: String(formData.get("defaultLanguage") || "en"),;
        tokenSystem: String(formData.get("tokenSystem") || "SHARED"),;
        governanceType: String(formData.get("governanceType") || "ADMIN"),;
        region: String(formData.get("region") || "") || undefined,;
        country: String(formData.get("country") || "") || undefined,;
        features,;
        addons: {;
          paymentGateway: String(formData.get("paymentGateway") || "") || undefined,;
          sovereignTreasury: formData.get("sovereignTreasury") === "on",;
          dualGovernance: formData.get("dualGovernance") === "on",;
          aiModeration: formData.get("aiModeration") === "on",;
          affiliatePanel: formData.get("affiliatePanel") === "on"}},;
    try {;
      const res = await fetch("/api/deploy", { method: "POST", body: JSON.stringify(payload) }),;
      const data = await res.json(),;
      if (!res.ok) {;
        setMessageType('error'),;
        setMessage(data.error || "Deployment failed"),;
        return;
      setMessageType('success'),;
      setMessage(`✅ Deployment queued successfully! ID: ${data.deploymentId}`),;
      (event.target as HTMLFormElement).reset();
    } catch (error) {;
      setMessage("Network error occurred. Please try again.");
    } finally {;
  const getVerticalIcon = (vertical: string) => {;
    switch (vertical) {;
      case "HEALTH": return <Shield className="w-5 h-5 text-blue-400" />,;
      case "EDUCATION": return <Building2 className="w-5 h-5 text-green-400" />,;
      case "LAW": return <Shield className="w-5 h-5 text-purple-400" />,;
      case "GOV": return <Users className="w-5 h-5 text-red-400" />,;
      default: return <Globe className="w-5 h-5 text-gray-400" />;
  },;
  const getGovernanceIcon = (type: string) => {;
    switch (type) {;
      case "ADMIN": return <Crown className="w-5 h-5 text-yellow-400" />,;
      case "DAO_LITE": return <Users className="w-5 h-5 text-blue-400" />,;
      case "DAO_FULL": return <Zap className="w-5 h-5 text-purple-400" />,;
      default: return <Crown className="w-5 h-5 text-gray-400" />;
  return (;
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-6xl mx-auto">;
            Configure and deploy your sovereign AI-powered digital economy with our unified deployment protocol.;
        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-8">;
                <label className="block text-sm font-medium text-white/90">;
                  Instance Name *;
                  name="instanceName";
                  className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all";
                  Vertical;
                <select name="vertical" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">;
                  Domain;
                  Subdomain;
                  Default Language;
                  name="defaultLanguage";
                  defaultValue="en";
                  Region;
          {/* Economy Settings */}
              Economy Settings;
                  Token System;
                <select name="tokenSystem" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">;
                  Governance Type;
                <select name="governanceType" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">;
                  <option value="DAO_LITE">DAO-lite</option>;
                  <option value="DAO_FULL">Full DAO</option>;
                  Country;
                  Payment Gateway;
                <select name="paymentGateway" className="w-full bg-zinc-900/50 border border-white/20 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">;
          {/* Feature Toggles */}
              Core Features;
              {FeatureKeys.map((k) => (;
                <label key={k} className="flex items-center gap-3 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer group">;
                  <input type="checkbox" name={k} className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />;
                      {labelFor(k)}
                    <div className="text-sm text-white/60">;
                      {getFeatureDescription(k)}
                <label className="block text-white font-medium">;
                  <select name="vertical" className="select-field mt-2">;
                    className="input-field mt-2";
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                  <select name="tokenSystem" className="select-field mt-2">;
                    <option value="LOCAL">Local</option>;
                  <select name="governanceType" className="select-field mt-2">;
                    <option value="ADMIN">Admin</option>;
          {/* Add-ons */}
              Premium Add-ons;
                <input type="checkbox" name="sovereignTreasury" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />;
                    Sovereign DAO Treasury;
                    Manage community funds with transparency;
                <input type="checkbox" name="dualGovernance" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />;
                    Dual Governance;
                    Local + global decision making;
                <input type="checkbox" name="aiModeration" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />;
                    AI Moderation System;
                    Automated content and behavior monitoring;
                <input type="checkbox" name="affiliatePanel" className="w-4 h-4 text-blue-600 bg-zinc-900 border-white/20 rounded focus:ring-blue-500 focus:ring-2" />;
                    Government Affiliate Panel;
                    Institutional partnership management;
          {/* Submit Section */}
          <div className="text-center">;
            <button;
              disabled={loading} ;
              className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed hover-lift";
              {loading ? (;
                <LoadingSpinner size="sm" text="Deploying..." />;
              ) : (;
                "🚀 Deploy Instance";
              )}
              <div className={`mt-6 p-4 rounded-lg ${;
                messageType === 'success';
                  ? 'bg-green-900/20 border border-green-500/20 text-green-400';
                  : 'bg-red-900/20 border border-red-500/20 text-red-400';
              }`}>;

                {message}
          </div>
        </form>
  );
        </form>;
    </div>);

function labelFor(key: string) {;
  switch (key) {;
    case "marketplace": return "Marketplace",;
    case "zion_gpt": return "ZionGPT Core",;
    case "resume_ai": return "Resume AI",;
    case "token_rewards": return "Token System",;
    case "onchain_contracts": return "Smart Contracts",;
    case "kyc_aml": return "KYC/AML",;
    case "dao_voting": return "DAO Voting",;
    case "incubator_grants": return "Incubator",;
    case "academy": return "Zion Academy",;
    case "partner_api": return "Partner API",;
    case "regional_dashboards": return "Regional Dashboards",;
    case "vendor_plugin": return "Vendor Plugin",;
    case "web3_login": return "Web3 Login",;
    case "multi_currency": return "Multi-Currency",;
    default: return key;
function getFeatureDescription(key: string) {;
    case "marketplace": return "Jobs, talent, and project marketplace",;
    case "zion_gpt": return "Core AI intelligence system",;
    case "resume_ai": return "AI-powered resume and proposal builder",;
    case "token_rewards": return "Token system with rewards",;
    case "onchain_contracts": return "Smart contract builder",;
    case "kyc_aml": return "Identity verification and compliance",;
    case "dao_voting": return "Proposal and voting system",;
    case "incubator_grants": return "Startup incubation and funding",;
    case "academy": return "Educational platform",;
    case "partner_api": return "API access for partners",;
    case "regional_dashboards": return "Regional and institutional views",;
    case "vendor_plugin": return "White-label vendor solutions",;
    case "web3_login": return "Web3 authentication and DID";
    case "multi_currency": return "Multi-currency support";
    default: return "Core platform feature";
