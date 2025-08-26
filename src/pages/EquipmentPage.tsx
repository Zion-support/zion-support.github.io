import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, Server, Network, Zap, Snowflake, HardDrive, Shield, Settings, Cloud, Brain, Bot } from 'lucide-react';

export default function EquipmentPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const equipmentCategories = [
        { id: 'all', name: 'All Equipment', icon: Server },
        { id: 'servers', name: 'Servers', icon: Server },
        { id: 'networking', name: 'Networking', icon: Network },
        { id: 'power', name: 'Power', icon: Zap },
        { id: 'cooling', name: 'Cooling', icon: Snowflake },
        { id: 'storage', name: 'Storage', icon: HardDrive },
        { id: 'security', name: 'Security', icon: Shield },
        { id: 'management', name: 'Management', icon: Settings },
        { id: 'infrastructure', name: 'Infrastructure', icon: Cloud },
        { id: 'ai', name: 'AI', icon: Brain },
        { id: 'robotics', name: 'Robotics', icon: Bot }
    ];

    const equipment = [
        {
            id: 'server-1',
            name: 'Dell PowerEdge R750',
            category: 'servers',
            description: 'High-performance dual-socket server with Intel Xeon processors',
            specs: ['2x Intel Xeon Gold 6338', '256GB DDR4 RAM', '4x 2.4TB NVMe SSDs'],
            price: '$2,999',
            availability: 'In Stock',
            condition: 'New',
            image: '/placeholder-server.jpg'
        },
        {
            id: 'network-1',
            name: 'Cisco Catalyst 9300',
            category: 'networking',
            description: 'Enterprise-grade network switch with advanced security features',
            specs: ['48x 1Gbps ports', '4x 10Gbps uplinks', 'PoE+ support'],
            price: '$1,499',
            availability: 'In Stock',
            condition: 'Refurbished',
            image: '/placeholder-switch.jpg'
        },
        {
            id: 'storage-1',
            name: 'NetApp AFF A400',
            category: 'storage',
            description: 'All-flash storage array with enterprise data management',
            specs: ['100TB raw capacity', 'NVMe over Fabrics', 'Data compression'],
            price: '$15,999',
            availability: 'Limited Stock',
            condition: 'New',
            image: '/placeholder-storage.jpg'
        }
    ];

    const filteredEquipment = equipment.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <SEO 
                title="Tech Equipment - Zion Tech Group" 
                description="Browse and rent professional tech equipment for your projects." 
                canonical="https://ziontechgroup.com/equipment" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                <Server className="w-4 h-4 mr-2" />
                                Tech Equipment
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Professional
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Tech Equipment</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                Access to professional-grade technology equipment for your development and testing needs.
                            </p>
                        </div>

                        {/* Search and Filter */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <div className="relative mb-6">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search equipment..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-gray-400"
                                />
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-2">
                                {equipmentCategories.map((category) => (
                                    <Button
                                        key={category.id}
                                        variant={selectedCategory === category.id ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`${
                                            selectedCategory === category.id
                                                ? 'bg-zion-cyan text-zion-blue-dark'
                                                : 'border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light/10'
                                        }`}
                                    >
                                        <category.icon className="w-4 h-4 mr-2" />
                                        {category.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Equipment Grid */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {filteredEquipment.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="w-24 h-24 bg-zion-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search className="w-12 h-12 text-zion-slate-light" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">No Equipment Found</h3>
                                <p className="text-zion-slate-light mb-8">
                                    Try adjusting your search terms or category filters.
                                </p>
                                <Button onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
                                }}>
                                    Clear Filters
                                </Button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredEquipment.map((item) => (
                                    <Card key={item.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10">
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                                                    <Server className="w-6 h-6 text-zion-cyan" />
                                                </div>
                                                <div className="text-right">
                                                    <Badge 
                                                        variant={item.availability === 'In Stock' ? 'default' : 'secondary'}
                                                        className={item.availability === 'In Stock' ? 'bg-green-500' : 'bg-yellow-500'}
                                                    >
                                                        {item.availability}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <CardTitle className="text-xl text-white mb-2">{item.name}</CardTitle>
                                            <CardDescription className="text-zion-slate-light">
                                                {item.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="mb-4">
                                                <h4 className="text-white font-semibold mb-2">Specifications:</h4>
                                                <ul className="space-y-1">
                                                    {item.specs.map((spec, index) => (
                                                        <li key={index} className="text-sm text-zion-slate-light flex items-center">
                                                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                                                            {spec}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-2xl font-bold text-zion-cyan">{item.price}</div>
                                                <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                                                    {item.condition}
                                                </Badge>
                                            </div>
                                            
                                            <div className="flex gap-2">
                                                <Button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                                    View Details
                                                </Button>
                                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                                    Contact Sales
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Coming Soon Section */}
                <section className="py-16 bg-zion-blue-dark">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
                            <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
                            <p className="text-zion-slate-light mb-6">
                                Our equipment marketplace is currently under development. Soon you'll be able to browse, rent, and purchase professional tech equipment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                    Get Notified
                                </Button>
                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
