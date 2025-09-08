import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Settings, BarChart3, Shield, Zap, Globe, TrendingUp, CheckCircle, ArrowRight, Zap as Cpu, Cloud, Smartphone, TrendingUp as Activity } from "lucide-react";
import { TrustedBySection } from "@/components/TrustedBySection";
const iotServices = [
    {
        id: "iot-platform",
        title: "IoT Device Management Platform",
        description: "Complete IoT solution including device provisioning, monitoring, data collection, and analytics dashboard.",
        price: 1200,
        currency: "$",
        period: "/month",
        features: [
            "Device provisioning & onboarding",
            "Real-time monitoring",
            "Data collection & storage",
            "Analytics dashboard",
            "Alert management",
            "API integration"
        ],
        icon: <Settings className="h-8 w-8"/>,
        category: "Platform",
        badge: "Popular",
        link: "/services",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "iot-analytics",
        title: "IoT Data Analytics & Insights",
        description: "Advanced analytics platform for IoT data processing, machine learning, and predictive maintenance.",
        price: 800,
        currency: "$",
        period: "/month",
        features: [
            "Real-time data processing",
            "Machine learning models",
            "Predictive maintenance",
            "Custom dashboards",
            "Data visualization",
            "Export capabilities"
        ],
        icon: <BarChart3 className="h-8 w-8"/>,
        category: "Analytics",
        badge: "Advanced",
        link: "/services",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "iot-security",
        title: "IoT Security & Compliance",
        description: "Comprehensive security solutions for IoT devices including encryption, authentication, and threat detection.",
        price: 1500,
        currency: "$",
        period: "/month",
        features: [
            "Device authentication",
            "Data encryption",
            "Threat detection",
            "Compliance monitoring",
            "Security audits",
            "Incident response"
        ],
        icon: <Shield className="h-8 w-8"/>,
        category: "Security",
        badge: "Critical",
        link: "/services",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "iot-edge",
        title: "Edge Computing for IoT",
        description: "Edge computing solutions for real-time IoT data processing and local decision making.",
        price: 2000,
        currency: "$",
        period: "/month",
        features: [
            "Edge node deployment",
            "Local data processing",
            "Real-time analytics",
            "Offline operation",
            "Edge AI models",
            "Cloud synchronization"
        ],
        icon: <Cpu className="h-8 w-8"/>,
        category: "Edge Computing",
        badge: "Innovative",
        link: "/services",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "iot-integration",
        title: "IoT System Integration",
        description: "Seamless integration of IoT devices with existing enterprise systems and cloud platforms.",
        price: 3000,
        currency: "$",
        period: "/project",
        features: [
            "System integration",
            "API development",
            "Data mapping",
            "Workflow automation",
            "Testing & validation",
            "Training & support"
        ],
        icon: <Cloud className="h-8 w-8"/>,
        category: "Integration",
        badge: "Custom",
        link: "/services",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
    },
    {
        id: "iot-mobile",
        title: "IoT Mobile Applications",
        description: "Mobile apps for IoT device control, monitoring, and management on iOS and Android platforms.",
        price: 2500,
        currency: "$",
        period: "/app",
        features: [
            "Cross-platform development",
            "Real-time monitoring",
            "Push notifications",
            "Offline capabilities",
            "User management",
            "App store deployment"
        ],
        icon: <Smartphone className="h-8 w-8"/>,
        category: "Mobile",
        badge: "Featured",
        link: "/services",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"
    }
];
const iotBenefits = [
    {
        title: "Real-time Monitoring",
        description: "Monitor your assets and processes in real-time for immediate insights and rapid response",
        icon: <Activity className="h-6 w-6"/>
    },
    {
        title: "Data-Driven Decisions",
        description: "Make informed decisions based on comprehensive data collection and advanced analytics",
        icon: <BarChart3 className="h-6 w-6"/>
    },
    {
        title: "Operational Efficiency",
        description: "Automate processes and optimize operations to reduce costs and improve productivity",
        icon: <Zap className="h-6 w-6"/>
    },
    {
        title: "Predictive Maintenance",
        description: "Prevent equipment failures with predictive analytics and proactive maintenance scheduling",
        icon: <TrendingUp className="h-6 w-6"/>
    }
];
const iotUseCases = [
    {
        title: "Smart Manufacturing",
        description: "Monitor production lines, predict maintenance needs, and optimize manufacturing processes",
        icon: <Cpu className="h-6 w-6"/>
    },
    {
        title: "Smart Cities",
        description: "Manage traffic, utilities, and public services with connected IoT infrastructure",
        icon: <Globe className="h-6 w-6"/>
    },
    {
        title: "Connected Healthcare",
        description: "Remote patient monitoring, medical device management, and healthcare analytics",
        icon: <Activity className="h-6 w-6"/>
    },
    {
        title: "Smart Agriculture",
        description: "Precision farming, environmental monitoring, and automated irrigation systems",
        icon: <Settings className="h-6 w-6"/>
    }
];
export default function IoTServicesPage() {
    return (<div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Solutions for the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Connected World
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Connect, monitor, and optimize your business with cutting-edge IoT technology. From device management to 
              advanced analytics, we deliver comprehensive IoT solutions that drive innovation and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/request-quote">
                <Button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Start IoT Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>












