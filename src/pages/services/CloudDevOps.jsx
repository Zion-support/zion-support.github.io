import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Zap, Database, Server, GitBranch, Cpu, Globe, Shield } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/Button';

export default function CloudDevOps() {
    const cloudServices = [
        {
            icon: Cloud,
            title: "Cloud Migration",
            description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",
            features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"]
        },
        {
            icon: Server,
            title: "Infrastructure as Code",
            description: "Automated infrastructure provisioning and management using modern DevOps practices.",
            features: ["Terraform", "AWS CloudFormation", "Azure ARM", "Kubernetes"]
        },
        {
            icon: GitBranch,
            title: "CI/CD Pipelines",
            description: "Automated build, test, and deployment pipelines for faster, more reliable releases.",
            features: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
        },
        {
            icon: Database,
            title: "Database Management",
            description: "Scalable database solutions with high availability and disaster recovery.",
            features: ["AWS RDS", "Azure SQL", "MongoDB Atlas", "Redis"]
        },
        {
            icon: Cpu,
            title: "DevOps Implementation",
            description: "Streamline development and operations with modern DevOps practices",
            features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Monitoring & Logging"]
        },
        {
            icon: Globe,
            title: "Container Orchestration",
            description: "Manage containerized applications at scale with Kubernetes",
            features: ["Cluster Management", "Service Discovery", "Load Balancing", "Auto-scaling"]
        }
    ];

    const cloudPlatforms = [
        { 
            name: "AWS", 
            features: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"],
            icon: "☁️"
        },
        { 
            name: "Azure", 
            features: ["Virtual Machines", "Blob Storage", "Functions", "SQL Database", "ARM Templates"],
            icon: "🔷"
        },
        { 
            name: "Google Cloud", 
            features: ["Compute Engine", "Cloud Storage", "Cloud Functions", "Cloud SQL", "Deployment Manager"],
            icon: "🔵"
        },
        { 
            name: "Multi-Cloud", 
            features: ["Hybrid Strategy", "Cross-Platform Management", "Cost Optimization", "Risk Distribution"],
            icon: "🌐"
        }
    ];

    const devOpsTools = [
        { 
            category: "CI/CD", 
            tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"],
            icon: "🔄"
        },
        { 
            category: "Infrastructure", 
            tools: ["Terraform", "Ansible", "Puppet", "Chef", "CloudFormation"],
            icon: "🏗️"
        },
        { 
            category: "Monitoring", 
            tools: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"],
            icon: "📊"
        },
        { 
            category: "Security", 
            tools: ["Vault", "AWS IAM", "Azure AD", "Google IAM", "Prisma Cloud"],
            icon: "🔒"
        }
    ];

    return (
        <>
            <SEO 
                title="Cloud & DevOps Services - Zion Tech Group" 
                description="Transform your infrastructure with our cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices." 
                canonical="https://ziontechgroup.com/services/cloud-devops" 
            />
            
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
                            <Cloud className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Cloud & DevOps Services
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Transform your infrastructure with modern cloud solutions and DevOps practices. 
                            Scale efficiently, deploy faster, and maintain reliability.
                        </p>
                    </div>

                    {/* Cloud Services Grid */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Cloud Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cloudServices.map((service, index) => (
                                <div 
                                    key={index}
                                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                                            <service.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                                    </div>
                                    
                                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                                    
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-300 mb-2">Features:</h4>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-xs text-gray-400">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cloud Platforms */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Supported Cloud Platforms</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cloudPlatforms.map((platform, index) => (
                                <div 
                                    key={index}
                                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="text-4xl mb-4">{platform.icon}</div>
                                    <h3 className="text-lg font-semibold text-white mb-3">{platform.name}</h3>
                                    <ul className="space-y-1">
                                        {platform.features.map((feature, idx) => (
                                            <li key={idx} className="text-xs text-gray-400">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DevOps Tools */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">DevOps Tools & Technologies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {devOpsTools.map((category, index) => (
                                <div 
                                    key={index}
                                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="text-2xl mb-4">{category.icon}</div>
                                    <h3 className="text-lg font-semibold text-white mb-3">{category.category}</h3>
                                    <ul className="space-y-1">
                                        {category.tools.map((tool, idx) => (
                                            <li key={idx} className="text-xs text-gray-400">
                                                {tool}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/20 rounded-xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Transform Your Infrastructure?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let our cloud and DevOps experts help you build a scalable, reliable, and efficient infrastructure 
                            that grows with your business.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                to="/contact" 
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                            >
                                Get Started Today
                            </Link>
                            <Link 
                                to="/services" 
                                className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                            >
                                Explore All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
