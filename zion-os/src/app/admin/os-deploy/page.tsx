'use client';

import React from 'react';

export default function OSDeployPage() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

import { useState } from "react";
import { FeatureKeys } from "@/lib/zod";
import LoadingSpinner from "@/app/components/LoadingSpinner";
export default function AdminDeployPage() {
  const [loading, setLoading] = useState($2);
  const [message, setMessage] = useState<string | null>(null),
  const [messageType, setMessageType] = useState<'success' | 'error'>('success'),

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault($2);
    setLoading($2);
    setMessage($2);
    const formData = new FormData($2);
    const features: Record<string, boolean> = {},
    FeatureKeys.forEach((k) => (features[k] = formData.get(k) === "on")),

      const payload = $2;
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
          affiliatePanel: formData.get("affiliatePanel") === "on"}},

    try {
      const res = await fetch("/api/deploy", { method: "POST", body: JSON.stringify(payload) }),
      const data = await res.json($2);
      if (!res.ok) {
        setMessageType($2);
        setMessage($2);
        return
      }
      
      setMessageType($2);
      setMessage($2);
      (event.target as HTMLFormElement).reset()
    } catch (error) {
      setMessageType($2);
      setMessage("Network error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const getVerticalIcon = $2;
      case "EDUCATION": return <Building2 className = $2;
      case "LAW": return <Shield className = $2;
      case "GOV": return <Users className = $2;
      default: return <Globe className = $2;
  const getGovernanceIcon = $2;
      case "DAO_LITE": return <Users className = $2;
      case "DAO_FULL": return <Zap className = $2;
      default: return <Crown className = $2;
  return (
    <div className = $2;
    case "zion_gpt": return "ZionGPT Core",
    case "resume_ai": return "Resume AI",
    case "token_rewards": return "Token System",
    case "onchain_contracts": return "Smart Contracts",
    case "kyc_aml": return "KYC/AML",
    case "dao_voting": return "DAO Voting",
    case "incubator_grants": return "Incubator",
    case "academy": return "Zion Academy",
    case "partner_api": return "Partner API",
    case "regional_dashboards": return "Regional Dashboards",
    case "vendor_plugin": return "Vendor Plugin",
    case "web3_login": return "Web3 Login",
    case "multi_currency": return "Multi-Currency",
    default: return key
  }
}

function getFeatureDescription(key: string) {
  switch (key) {
    case "marketplace": return "Jobs, talent, and project marketplace",
    case "zion_gpt": return "Core AI intelligence system",
    case "resume_ai": return "AI-powered resume and proposal builder",
    case "token_rewards": return "Token system with rewards",
    case "onchain_contracts": return "Smart contract builder",
    case "kyc_aml": return "Identity verification and compliance",
    case "dao_voting": return "Proposal and voting system",
    case "incubator_grants": return "Startup incubation and funding",
    case "academy": return "Educational platform",
    case "partner_api": return "API access for partners",
    case "regional_dashboards": return "Regional and institutional views",
    case "vendor_plugin": return "White-label vendor solutions",
    case "web3_login": return "Web3 authentication and DID",
    case "multi_currency": return "Multi-currency support",
    default: return "Core platform feature"
  }
}