import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Handshake, Users, TrendingUp, Globe, Award, Star, Building, Zap } from 'lucide-react';

export default function Partners() {
    const partnershipTypes = [
        {
            id: 'technology',
            name: 'Technology Partners',
            description: 'Integrate your technology solutions with our platform',
            icon: Zap,
            benefits: ['API Access', 'Technical Support', 'Co-marketing', 'Revenue Sharing'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'reseller',
            name: 'Reseller Partners',
            description: 'Sell our services to your customer base',
            icon: Users,
            benefits: ['Competitive Pricing', 'Sales Training', 'Marketing Materials', 'Dedicated Support'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 'consulting',
            name: 'Consulting Partners',
            description: 'Deliver joint consulting and implementation services',
            icon: Building,
            benefits: ['Joint Projects', 'Certification Program', 'Technical Training', 'Lead Sharing'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 'strategic',
            name: 'Strategic Partners',
            description: 'Deep integration and long-term collaboration',
            icon: Handshake,
            benefits: ['Product Integration', 'Joint Development', 'Market Expansion', 'Equity Opportunities'],
            color: 'from-orange-500 to-red-500'
        }
    ];

    const partnerBenefits = [
        {
            icon: TrendingUp,
            title: 'Revenue Growth',
            description: 'Access new markets and customer segments through our platform'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Expand your business internationally with our global presence'
        },
        {
            icon: Award,
            title: 'Brand Recognition',
            description: 'Leverage our established brand and market position'
        },
        {
            icon: Star,
            title: 'Innovation',
            description: 'Stay ahead with access to cutting-edge technology and insights'
        }
    ];

    return (
        <>
            <SEO 
                title="Partners - Zion Tech Group" 
                description="Partner with Zion Tech Group and grow your business together." 
                canonical="https://ziontechgroup.com/partners" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                <Handshake className="w-4 h-4 mr-2" />
                                Partnership Program
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Partner with
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Zion Tech Group</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                Join our partner ecosystem and unlock new opportunities for growth, innovation, and mutual success in the technology industry.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                    Become a Partner
                                </Button>
                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partnership Types */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Partnership Opportunities
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Choose the partnership model that best fits your business goals and objectives
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {partnershipTypes.map((type) => (
                                <Card key={type.id} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan/30 transition-all duration-300">
                                    <CardHeader className="text-center pb-4">
                                        <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                                            <type.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <CardTitle className="text-white text-lg">{type.name}</CardTitle>
                                        <CardDescription className="text-slate-300 text-sm">
                                            {type.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <ul className="space-y-2">
                                            {type.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-center text-slate-300 text-sm">
                                                    <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="w-full mt-6 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partner Benefits */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Why Partner With Us?
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Discover the advantages of joining our partner ecosystem
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {partnerBenefits.map((benefit, index) => (
                                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan/30 transition-all duration-300">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 bg-zion-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <benefit.icon className="w-8 h-8 text-zion-cyan" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                        <p className="text-slate-300 text-sm">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Card className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border-zion-cyan/30">
                            <CardContent className="p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    Ready to Partner With Us?
                                </h2>
                                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                                    Join our partner ecosystem and start growing your business with Zion Tech Group. 
                                    Let's discuss how we can work together to achieve mutual success.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90">
                                        Get Started
                                    </Button>
                                    <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                                        Contact Sales
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
