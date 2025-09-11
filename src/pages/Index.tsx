import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight, Users, Zap, Settings, Sparkles, BarChart3, Smartphone, Shield, Globe, Code } from 'lucide-react';

export default function Index() {
    // Tools and features showcase
    const toolsFeatures = [
        {
            title: "AI-Powered Matching",
            description: "Find the perfect talent and services with our advanced AI matching system",
            icon: <Sparkles className="h-6 w-6 text-blue-400"/>,
            link: "/services"
        },
        {
            title: "Global Talent Network",
            description: "Access top-tier professionals from around the world",
            icon: <Users className="h-6 w-6 text-purple-400"/>,
            link: "/talent"
        },
        {
            title: "Enterprise Solutions",
            description: "Comprehensive IT and AI services for businesses of all sizes",
            icon: <Zap className="h-6 w-6 text-green-400"/>,
            link: "/services"
        },
        {
            title: "Advanced Analytics",
            description: "Data-driven insights to optimize your business operations",
            icon: <BarChart3 className="h-6 w-6 text-orange-400"/>,
            link: "/analytics"
        },
        {
            title: "Cybersecurity",
            description: "Protect your digital assets with our cutting-edge security solutions",
            icon: <Shield className="h-6 w-6 text-red-400"/>,
            link: "/services/cybersecurity"
        },
        {
            title: "Global Reach",
            description: "Serving clients worldwide with localized expertise",
            icon: <Globe className="h-6 w-6 text-cyan-400"/>,
            link: "/about"
        }
    ];

    const services = [
        {
            title: "AI & Machine Learning",
            description: "Transform your business with intelligent automation and AI solutions",
            icon: <Code className="h-8 w-8 text-blue-400"/>,
            link: "/services/ai"
        },
        {
            title: "Cloud Infrastructure",
            description: "Scalable, secure, and reliable cloud solutions for modern businesses",
            icon: <Settings className="h-8 w-8 text-green-400"/>,
            link: "/services/cloud"
        },
        {
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for iOS and Android",
            icon: <Smartphone className="h-8 w-8 text-purple-400"/>,
            link: "/services/mobile"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <SEO 
                title="Zion Tech Group - AI-Powered Technology Solutions"
                description="Leading provider of AI, cloud, and technology solutions. Transform your business with our innovative services and global talent network."
                keywords="AI, technology, cloud, cybersecurity, mobile development, enterprise solutions"
            />
            
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Zion Tech Group
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Empowering businesses worldwide with cutting-edge AI, cloud, and technology solutions
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/services" 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            Explore Services
                            <ArrowRight className="h-5 w-5"/>
                        </Link>
                        <Link 
                            to="/contact" 
                            className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tools and Features Section */}
            <section className="py-16 bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Why Choose Zion Tech Group?
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            We combine cutting-edge technology with global expertise to deliver exceptional results
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {toolsFeatures.map((tool, index) => (
                            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-400 transition-colors">
                                <div className="flex items-center mb-4">
                                    {tool.icon}
                                    <h3 className="text-xl font-semibold ml-3">{tool.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-4">{tool.description}</p>
                                <Link 
                                    to={tool.link}
                                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
                                >
                                    Learn More
                                    <ArrowRight className="h-4 w-4"/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Our Core Services
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Comprehensive technology solutions tailored to your business needs
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 hover:border-purple-400 transition-colors">
                                <div className="flex items-center mb-6">
                                    {service.icon}
                                    <h3 className="text-2xl font-semibold ml-4">{service.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-6">{service.description}</p>
                                <Link 
                                    to={service.link}
                                    className="text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors font-semibold"
                                >
                                    Discover More
                                    <ArrowRight className="h-4 w-4"/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of companies that trust Zion Tech Group for their technology needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/contact" 
                            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            Start Your Project
                        </Link>
                        <Link 
                            to="/case-studies" 
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-colors"
                        >
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}