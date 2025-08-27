import React from 'react';
import { Link } from 'react-router-dom';
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
                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                        {/* Partnership Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">150+</div>
                                <div className="text-zion-slate-light">Active Partners</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">$50M+</div>
                                <div className="text-zion-slate-light">Partner Revenue</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">25+</div>
                                <div className="text-zion-slate-light">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">95%</div>
                                <div className="text-zion-slate-light">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Partnership Types */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Partnership Types</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Choose the partnership model that best fits your business goals and capabilities
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {partnershipTypes.map((type) => (
                                <Card key={type.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-cyan transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center`}>
                                                <type.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                                                {type.id}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl text-white mb-2">{type.name}</CardTitle>
                                        <CardDescription className="text-zion-slate-light">
                                            {type.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                                            <div className="space-y-2">
                                                {type.benefits.map((benefit, index) => (
                                                    <div key={index} className="flex items-center text-sm text-zion-slate-light">
                                                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                                                        {benefit}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                            Learn More
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Partner Benefits */}
                <section className="py-16 bg-zion-blue-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Discover the advantages of joining our partner ecosystem
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {partnerBenefits.map((benefit, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <benefit.icon className="w-8 h-8 text-zion-cyan" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-zion-slate-light">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="py-16 bg-zion-blue">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
                        <p className="text-zion-slate-light mb-8">
                            Join our partner ecosystem and start growing your business with Zion Tech Group today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                Apply for Partnership
                            </Button>
                            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                Schedule a Call
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
</>
    );
}
