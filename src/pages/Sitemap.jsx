import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
    const sitemapSections = [
        {
            title: "Main Pages",
            links: [
                { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
                { name: "About Us", path: "/about", description: "Our story and mission" },
                { name: "Contact", path: "/contact", description: "Get in touch with us" },
                { name: "Pricing", path: "/pricing", description: "Our service pricing" },
                { name: "Careers", path: "/careers", description: "Join our team" },
                { name: "Partners", path: "/partners", description: "Strategic partnerships" }
            ]
        },
        {
            title: "Services",
            links: [
                { name: "All Services", path: "/services", description: "Complete service overview" },
                { name: "AI Services", path: "/ai-services", description: "Artificial Intelligence services" },
                { name: "IT Services", path: "/it-services", description: "Information Technology solutions" },
                { name: "Cybersecurity", path: "/cybersecurity", description: "Security and threat protection" },
                { name: "Green IT", path: "/green-it", description: "Sustainable technology solutions" },
                { name: "Micro SaaS Services", path: "/micro-saas-services", description: "Scalable software solutions" },
                { name: "Enhanced Services", path: "/enhanced-services", description: "Advanced technology solutions" },
                { name: "Innovative Services 2027", path: "/innovative-services-2027", description: "Cutting-edge solutions" },
                { name: "Comprehensive Services", path: "/comprehensive-services", description: "Enterprise solutions" },
                { name: "Emerging Tech Services", path: "/emerging-tech-services-2027", description: "Next-generation technology" }
            ]
        },
        {
            title: "Marketplace & Solutions",
            links: [
                { name: "Marketplace", path: "/marketplace", description: "Technology marketplace" },
                { name: "AI Business Solutions", path: "/ai-business-solutions", description: "AI-powered business tools" },
                { name: "Digital Marketing", path: "/digital-marketing-services", description: "Marketing technology solutions" },
                { name: "Financial Solutions", path: "/financial-solutions", description: "Fintech and financial services" },
                { name: "Manufacturing Solutions", path: "/manufacturing-solutions", description: "Industry 4.0 solutions" },
                { name: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "Next-generation connectivity" }
            ]
        },
        {
            title: "Company & Resources",
            links: [
                { name: "Blog", path: "/blog", description: "Latest insights and news" },
                { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
                { name: "Sitemap", path: "/sitemap", description: "Complete site navigation" },
                { name: "Help Center", path: "/help", description: "Self-service support" },
                { name: "System Status", path: "/status", description: "Service status and uptime" },
                { name: "Security", path: "/security", description: "Security and compliance information" }
            ]
        },
        {
            title: "Legal & Compliance",
            links: [
                { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
                { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
                { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" },
                { name: "Accessibility", path: "/accessibility", description: "Accessibility information" }
            ]
        },
        {
            title: "User Account",
            links: [
                { name: "Login", path: "/login", description: "User authentication" },
                { name: "Sign Up", path: "/signup", description: "Create new account" },
                { name: "Dashboard", path: "/dashboard", description: "User dashboard" },
                { name: "Forgot Password", path: "/forgot-password", description: "Password recovery" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Site
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            {" "}Map
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Complete navigation guide to all pages and services on Zion Tech Group
                    </p>
                </div>

                {/* Sitemap Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sitemapSections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                            <h2 className="text-xl font-bold text-white mb-4 border-b border-zion-cyan/30 pb-2">
                                {section.title}
                            </h2>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link 
                                            to={link.path}
                                            className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 group"
                                        >
                                            <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                                {link.name}
                                            </div>
                                            <div className="text-sm text-gray-400 group-hover:text-zion-cyan/70 transition-colors">
                                                {link.description}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Quick Links</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link 
                            to="/contact"
                            className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:scale-105 transition-transform"
                        >
                            Get Started
                        </Link>
                        <Link 
                            to="/services"
                            className="px-6 py-3 border-2 border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
                        >
                            View Services
                        </Link>
                        <Link 
                            to="/help"
                            className="px-6 py-3 border-2 border-zion-purple text-zion-purple rounded-lg font-medium hover:bg-zion-purple hover:text-white transition-colors"
                        >
                            Get Help
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
