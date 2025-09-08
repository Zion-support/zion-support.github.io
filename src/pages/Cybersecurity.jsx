import React from 'react';
import SEOHead from "@/components/SEOHead";
import { Shield, Lock, Eye, Users, Database, Network, Zap, Target, CheckCircle, BarChart3 } from 'lucide-react';
const Cybersecurity = () => {
    const securityServices = [
        {
            icon: Shield,
            title: "Advanced Threat Detection",
            description: "AI-powered threat detection and prevention systems",
            features: ["Real-time Monitoring", "Behavioral Analysis", "Machine Learning", "Automated Response"],
            path: "/ai-powered-enterprise-security"
        },
        {
            icon: Lock,
            title: "SOC2 Compliance Automation",
            description: "Automated compliance management and reporting",
            features: ["Automated Auditing", "Real-time Monitoring", "Compliance Reporting", "Risk Assessment"],
            path: "/soc2-compliance-automation"
        },
        {
            icon: Eye,
            title: "Zero Trust Architecture",
            description: "Comprehensive zero trust security implementation",
            features: ["Identity Verification", "Continuous Monitoring", "Least Privilege Access", "Micro-segmentation"],
            path: "/zero-trust-network-architecture"
        },
        {
            icon: Network,
            title: "Network Security",
            description: "Advanced network protection and monitoring",
            features: ["Firewall Management", "Intrusion Detection", "Traffic Analysis", "Vulnerability Scanning"],
            path: "/network-security"
        },
        {
            icon: Database,
            title: "Data Protection",
            description: "Comprehensive data security and privacy solutions",
            features: ["Encryption", "Access Control", "Data Loss Prevention", "Privacy Compliance"],
            path: "/data-protection"
        },
        {
            icon: Users,
            title: "Identity & Access Management",
            description: "Secure identity management and access control",
            features: ["Multi-Factor Authentication", "Single Sign-On", "Role-Based Access", "Identity Governance"],
            path: "/identity-access-management"
        }
    ];
    const securityFeatures = [
        {
            icon: CheckCircle,
            title: "24/7 Monitoring",
            description: "Continuous security monitoring and threat detection"
        },
        {
            icon: Zap,
            title: "Real-time Response",
            description: "Instant automated response to security incidents"
        },
        {
            icon: Target,
            title: "Proactive Defense",
            description: "Predictive security using AI and machine learning"
        },
        {
            icon: BarChart3,
            title: "Comprehensive Reporting",
            description: "Detailed security analytics and compliance reporting"
        }
    ];
    return (<div className="min-h-screen bg-background pt-20">
      <SEOHead title="Cybersecurity Solutions - Zion Tech Group" description="Comprehensive cybersecurity solutions including threat detection, compliance automation, zero trust architecture, and advanced security services from Zion Tech Group." keywords="cybersecurity, threat detection, SOC2 compliance, zero trust, network security, data protection" canonical="https://ziontechgroup.com/cybersecurity"/>









