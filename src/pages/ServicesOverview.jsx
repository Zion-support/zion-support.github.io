import React from 'react';
import SEOHead from "@/components/SEOHead";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Database, Wifi, Link as LinkIcon, Zap, Server, Users, Target, Check, ArrowRight } from 'lucide-react';
export default function ServicesOverview() {
    const serviceCategories = [
        {
            name: "AI & Machine Learning",
            description: "Cutting-edge artificial intelligence solutions for business transformation",
            icon: Brain,
            color: "from-purple-600 to-blue-600",
            services: [
                {
                    name: "AI Strategy & Consulting",
                    description: "Strategic guidance on implementing AI solutions",
                    price: "From $2,500",
                    href: "/services/ai"
                },
                {
                    name: "Machine Learning Development",
                    description: "Custom ML models and algorithms",
                    price: "From $5,000",
                    href: "/services/ai"
                },
                {
                    name: "AI-Powered Applications",
                    description: "Intelligent automation and insights",
                    price: "From $8,500",
                    href: "/services/ai"
                }
            ]
        },
        {
            name: "Data Analytics & BI",
            description: "Transform raw data into actionable business intelligence",
            icon: Database,
            color: "from-blue-600 to-indigo-600",
            services: [
                {
                    name: "Business Intelligence & Reporting",
                    description: "Interactive dashboards and automated reporting",
                    price: "From $3,500/month",
                    href: "/services/data-analytics"
                },
                {
                    name: "Predictive Analytics & Forecasting",
                    description: "Machine learning for future insights",
                    price: "From $5,000/month",
                    href: "/services/data-analytics"
                },
                {
                    name: "Data Engineering & ETL",
                    description: "Robust data pipelines and warehouses",
                    price: "From $4,500/month",
                    href: "/services/data-analytics"
                }
            ]
        },
        {
            name: "IoT & Edge Computing",
            description: "Connected ecosystems and real-time edge processing",
            icon: Wifi,
            color: "from-green-600 to-emerald-600",
            services: [
                {
                    name: "IoT Device Management Platform",
                    description: "Comprehensive IoT device management",
                    price: "From $4,200/month",
                    href: "/services/iot-edge-computing"
                },
                {
                    name: "Edge Computing Infrastructure",
                    description: "Real-time data processing at the edge",
                    price: "From $5,500/month",
                    href: "/services/iot-edge-computing"
                },
                {
                    name: "Smart City & Industrial IoT",
                    description: "IoT solutions for smart cities and manufacturing",
                    price: "From $6,500/month",
                    href: "/services/iot-edge-computing"
                }
            ]
        },
        {
            name: "Blockchain & Web3",
            description: "Decentralized applications and blockchain solutions",
            icon: LinkIcon,
            color: "from-purple-600 to-indigo-600",
            services: [
                {
                    name: "Smart Contract Development",
                    description: "Secure, audited smart contracts",
                    price: "From $8,500/project",
                    href: "/services/blockchain-web3"
                },
                {
                    name: "DeFi Platform Development",
                    description: "Complete DeFi platforms and protocols",
                    price: "From $25,000/project",
                    href: "/services/blockchain-web3"
                },
                {
                    name: "NFT Marketplace & Collections",
                    description: "Custom NFT platforms and generative art",
                    price: "From $12,000/project",
                    href: "/services/blockchain-web3"
                }
            ]
        },
        {
            name: "DevOps & Cloud",
            description: "Modern software delivery and cloud infrastructure",
            icon: Cloud,
            color: "from-orange-600 to-red-600",
            services: [
                {
                    name: "Cloud Migration & Strategy",
                    description: "Multi-cloud strategy and migration",
                    price: "From $8,500/project",
                    href: "/services/devops-cloud"
                },
                {
                    name: "CI/CD Pipeline Development",
                    description: "Automated software delivery pipelines",
                    price: "From $6,500/project",
                    href: "/services/devops-cloud"
                },
                {
                    name: "Container Orchestration & Kubernetes",
                    description: "Enterprise-grade container management",
                    price: "From $7,500/project",
                    href: "/services/devops-cloud"
                }
            ]
        },
        {
            name: "Cybersecurity",
            description: "Advanced security solutions and threat protection",
            icon: Shield,
            color: "from-red-600 to-pink-600",
            services: [
                {
                    name: "Security Assessment & Auditing",
                    description: "Comprehensive security evaluations",
                    price: "From $5,000",
                    href: "/services/cybersecurity"
                },
                {
                    name: "Threat Detection & Response",
                    description: "Real-time security monitoring",
                    price: "From $4,500/month",
                    href: "/services/cybersecurity"
                },
                {
                    name: "Compliance & Governance",
                    description: "Regulatory compliance and security frameworks",
                    price: "From $6,000/month",
                    href: "/services/cybersecurity"
                }
            ]
        }
    ];
    const stats = [
        { label: "Services Offered", value: "50+", icon: Target },
        { label: "Industries Served", value: "15+", icon: Users },
        { label: "Technologies", value: "100+", icon: Server },
        { label: "Client Satisfaction", value: "98%", icon: Check }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (<div className="min-h-screen bg-background">
      <SEOHead title="All Services - Zion Tech Group Comprehensive Technology Solutions" description="Explore our complete range of technology services including AI, data analytics, IoT, blockchain, DevOps, and cybersecurity solutions." keywords="technology services, AI services, data analytics, IoT solutions, blockchain development, DevOps consulting, cybersecurity services" canonical="https://ziontechgroup.com/services"/>









