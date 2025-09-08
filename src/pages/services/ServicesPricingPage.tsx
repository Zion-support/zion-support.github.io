import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, CONTACT_INFO } from "@/data/microSaasServices";
import { 
    Brain, Cloud, Shield, BarChart3, Code, DollarSign, Heart, ShoppingCart, 
    GraduationCap, Star, TrendingUp, Zap, CheckCircle, ArrowRight, Phone, Mail, 
    MapPin, Globe, Award, Users, Clock, Target, Rocket, Lightbulb, Cpu, 
    Database, Network, Lock, ChartBar, Palette, Video, MessageSquare, Languages, 
    Bitcoin, Stethoscope, BookOpen, Store, Building2, Atom, Wifi, Eye, 
    Zap as ZapIcon, Crown, Sparkles, Check, X
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryIcons = {
    'AI Business Solutions': Brain,
    'IT Infrastructure': Cloud,
    'Data Analytics': BarChart3,
    'AI Development': Code,
    'FinTech': DollarSign,
    'HealthTech': Heart,
    'E-commerce': ShoppingCart,
    'EdTech': GraduationCap,
    'Emerging Tech': Atom
};

const categoryColors = {
    'AI Business Solutions': 'from-purple-500 to-indigo-600',
    'IT Infrastructure': 'from-blue-500 to-cyan-600',
    'Data Analytics': 'from-green-500 to-emerald-600',
    'AI Development': 'from-orange-500 to-red-600',
    'FinTech': 'from-yellow-500 to-orange-600',
    'HealthTech': 'from-pink-500 to-rose-600',
    'E-commerce': 'from-indigo-500 to-purple-600',
    'EdTech': 'from-teal-500 to-green-600',
    'Emerging Tech': 'from-violet-500 to-purple-600'
};

const pricingTiers = [
    {
        name: "Starter",
        price: "From $29",
        description: "Perfect for small businesses and startups",
        features: [
            "Basic features",
            "Email support",
            "Standard integrations",
            "Community forum"
        ],
        color: "from-blue-500 to-cyan-600"
    },
    {
        name: "Professional",
        price: "From $99",
        description: "Ideal for growing businesses",
        features: [
            "Advanced features",
            "Priority support",
            "Custom integrations",
            "API access",
            "White-label options"
        ],
        color: "from-purple-500 to-indigo-600",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations",
        features: [
            "All features",
            "24/7 dedicated support",
            "Custom development",
            "SLA guarantees",
            "On-premise options",
            "Dedicated account manager"
        ],
        color: "from-orange-500 to-red-600"
    }
];

export default function ServicesPricingPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedTier, setSelectedTier] = useState('professional');

    const filteredServices = selectedCategory === 'all' 
        ? MICRO_SAAS_SERVICES 
        : MICRO_SAAS_SERVICES.filter(service => service.category === selectedCategory);

    const getServiceTier = (service) => {
        if (service.price <= 49) return 'starter';
        if (service.price <= 199) return 'professional';
        return 'enterprise';
    };

    const getTierServices = (tier) => {
        return filteredServices.filter(service => getServiceTier(service) === tier);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
            {/* Hero Section */}
            <div className="py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Transparent Pricing
                    </h1>
                    <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
                        Choose the perfect plan for your business. All our micro SAAS services come with 
                        enterprise-grade features at startup-friendly prices.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                                <Phone className="h-5 w-5 mr-2"/>
                                Get Custom Quote
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                                <Mail className="h-5 w-5 mr-2"/>
                                Schedule Demo
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Pricing Tiers */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-zion-blue mb-4">
                            Choose Your Plan
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Start with what you need and scale as you grow. All plans include our core features 
                            and 30-day money-back guarantee.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingTiers.map((tier, index) => (
                            <Card 
                                key={index} 
                                className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                                    tier.popular ? 'ring-2 ring-zion-purple scale-105' : ''
                                }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-zion-purple text-white px-4 py-2">
                                            <Crown className="h-4 w-4 mr-2"/>
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}
                                
                                <CardHeader className="text-center">
                                    <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                                    <div className="text-4xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                                    <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                                </CardHeader>
                                
                                <CardContent>
                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center">
                                                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"/>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <Button 
                                        className={`w-full bg-gradient-to-r ${tier.color} text-white hover:opacity-90 transition-opacity`}
                                        onClick={() => setSelectedTier(tier.name.toLowerCase())}
                                    >
                                        {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                        <ArrowRight className="h-4 w-4 ml-2"/>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-zion-blue mb-4">
                            Browse Services by Category
                        </h2>
                        <p className="text-lg text-gray-600">
                            Filter our comprehensive service catalog to find exactly what you need
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Button
                            variant={selectedCategory === 'all' ? 'default' : 'outline'}
                            onClick={() => setSelectedCategory('all')}
                            className="bg-zion-purple hover:bg-zion-purple-dark"
                        >
                            All Categories ({MICRO_SAAS_SERVICES.length})
                        </Button>
                        {MICRO_SAAS_CATEGORIES.map((category) => (
                            <Button
                                key={category.value}
                                variant={selectedCategory === category.label ? 'default' : 'outline'}
                                onClick={() => setSelectedCategory(category.label)}
                                className={selectedCategory === category.label ? 'bg-zion-purple hover:bg-zion-purple-dark' : ''}
                            >
                                {category.label} ({category.count})
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services by Tier */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Tabs value={selectedTier} onValueChange={setSelectedTier} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
                            <TabsTrigger value="starter" className="text-sm md:text-base">Starter</TabsTrigger>
                            <TabsTrigger value="professional" className="text-sm md:text-base">Professional</TabsTrigger>
                            <TabsTrigger value="enterprise" className="text-sm md:text-base">Enterprise</TabsTrigger>
                        </TabsList>

                        {pricingTiers.map((tier) => (
                            <TabsContent key={tier.name} value={tier.name.toLowerCase()}>
                                <div className="text-center mb-12">
                                    <h3 className="text-3xl font-bold text-zion-blue mb-4">
                                        {tier.name} Tier Services
                                    </h3>
                                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                        {tier.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {getTierServices(tier.name.toLowerCase()).map((service) => (
                                        <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                            <div className="relative">
                                                <img 
                                                    src={service.images[0]} 
                                                    alt={service.title} 
                                                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <Badge className="absolute top-4 right-4 bg-zion-purple">
                                                    {service.category}
                                                </Badge>
                                                {service.featured && (
                                                    <Badge className="absolute top-4 left-4 bg-yellow-500">
                                                        <Star className="h-3 w-3 mr-1"/>
                                                        Featured
                                                    </Badge>
                                                )}
                                            </div>
                                            
                                            <CardHeader>
                                                <CardTitle className="text-xl group-hover:text-zion-purple transition-colors">
                                                    {service.title}
                                                </CardTitle>
                                                <CardDescription className="text-gray-600">
                                                    {service.description.substring(0, 100)}...
                                                </CardDescription>
                                            </CardHeader>
                                            
                                            <CardContent>
                                                {/* Rating and AI Score */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center">
                                                        <Star className="h-4 w-4 text-yellow-400 mr-1"/>
                                                        <span className="text-sm font-medium">{service.rating}</span>
                                                        <span className="text-gray-500 text-sm ml-1">({service.reviewCount})</span>
                                                    </div>
                                                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                                                        AI Score: {service.aiScore}
                                                    </Badge>
                                                </div>

                                                {/* Pricing */}
                                                <div className="text-center mb-4">
                                                    <div className="text-3xl font-bold text-zion-cyan">
                                                        ${service.price}
                                                        <span className="text-sm text-gray-500 font-normal">/month</span>
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        Market: {service.marketPrice}
                                                    </div>
                                                </div>

                                                {/* Key Features */}
                                                <div className="mb-4">
                                                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                                                    <div className="space-y-2">
                                                        {service.features.slice(0, 4).map((feature, index) => (
                                                            <div key={index} className="flex items-start text-sm">
                                                                <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"/>
                                                                <span className="text-gray-700">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="space-y-2">
                                                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                                                        <Eye className="h-4 w-4 mr-2"/>
                                                        View Details
                                                    </Button>
                                                    <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                                                        <Mail className="h-4 w-4 mr-2"/>
                                                        Get Quote
                                                    </Button>
                                                </div>

                                                {/* Availability */}
                                                <div className="mt-4 text-center">
                                                    <Badge variant="outline" className="text-xs">
                                                        <Clock className="h-3 w-3 mr-1"/>
                                                        {service.availability}
                                                    </Badge>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                {getTierServices(tier.name.toLowerCase()).length === 0 && (
                                    <div className="text-center py-12">
                                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Lightbulb className="h-12 w-12 text-gray-400"/>
                                        </div>
                                        <h4 className="text-xl font-medium text-gray-600 mb-2">No services in this tier</h4>
                                        <p className="text-gray-500">
                                            Try selecting a different category or tier to see available services.
                                        </p>
                                    </div>
                                )}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </div>

            {/* Pricing Comparison Table */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-zion-blue mb-4">
                            Detailed Pricing Comparison
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Compare features and pricing across all our service tiers to make the best choice for your business
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-lg">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left p-6 font-semibold text-zion-blue">Feature</th>
                                    <th className="text-center p-6 font-semibold text-blue-600">Starter</th>
                                    <th className="text-center p-6 font-semibold text-purple-600">Professional</th>
                                    <th className="text-center p-6 font-semibold text-orange-600">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-6 font-medium">Starting Price</td>
                                    <td className="text-center p-6 text-2xl font-bold text-blue-600">$29</td>
                                    <td className="text-center p-6 text-2xl font-bold text-purple-600">$99</td>
                                    <td className="text-center p-6 text-2xl font-bold text-orange-600">Custom</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-6 font-medium">Support</td>
                                    <td className="text-center p-6">Email</td>
                                    <td className="text-center p-6">Priority</td>
                                    <td className="text-center p-6">24/7 Dedicated</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-6 font-medium">Integrations</td>
                                    <td className="text-center p-6">Standard</td>
                                    <td className="text-center p-6">Custom</td>
                                    <td className="text-center p-6">Unlimited</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-6 font-medium">API Access</td>
                                    <td className="text-center p-6">
                                        <X className="h-5 w-5 text-red-500 mx-auto"/>
                                    </td>
                                    <td className="text-center p-6">
                                        <Check className="h-5 w-5 text-green-500 mx-auto"/>
                                    </td>
                                    <td className="text-center p-6">
                                        <Check className="h-5 w-5 text-green-500 mx-auto"/>
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-6 font-medium">White-label</td>
                                    <td className="text-center p-6">
                                        <X className="h-5 w-5 text-red-500 mx-auto"/>
                                    </td>
                                    <td className="text-center p-6">
                                        <Check className="h-5 w-5 text-green-500 mx-auto"/>
                                    </td>
                                    <td className="text-center p-6">
                                        <Check className="h-5 w-5 text-green-500 mx-auto"/>
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-6 font-medium">SLA Guarantee</td>
                                    <td className="text-center p-6">Standard</td>
                                    <td className="text-center p-6">99.9%</td>
                                    <td className="text-center p-6">99.99%</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium">Account Manager</td>
                                    <td className="text-center p-6">
                                        <X className="h-5 w-5 text-red-500 mx-auto"/>
                                    </td>
                                    <td className="text-center p-6">
                                        <X className="h-5 w-5 text-red-500 mx-auto"/>
                                    </td>
                                    <td className="text-center p-6">
                                        <Check className="h-5 w-5 text-green-500 mx-auto"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Why Our Pricing */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-zion-blue mb-4">
                            Why Our Pricing is Different
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We believe in transparent, fair pricing that gives you enterprise-grade solutions without enterprise costs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ZapIcon className="h-10 w-10 text-blue-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-zion-blue mb-2">No Hidden Fees</h3>
                            <p className="text-gray-600">What you see is what you pay. No setup fees, no surprise charges.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-10 w-10 text-green-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-zion-blue mb-2">30-Day Guarantee</h3>
                            <p className="text-gray-600">Try any service risk-free with our money-back guarantee.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-10 w-10 text-purple-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-zion-blue mb-2">Scale as You Grow</h3>
                            <p className="text-gray-600">Start small and upgrade your plan as your business grows.</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-10 w-10 text-orange-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-zion-blue mb-2">Enterprise Quality</h3>
                            <p className="text-gray-600">Get enterprise-grade features at startup-friendly prices.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-2xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-zion-blue mb-4">
                                Need a Custom Solution?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our team can create a custom package tailored to your specific needs and budget
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold text-zion-blue mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-zion-purple mr-3"/>
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p className="text-gray-600">{CONTACT_INFO.mobile}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-zion-purple mr-3"/>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-gray-600">{CONTACT_INFO.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-zion-purple mr-3"/>
                                        <div>
                                            <p className="font-medium">Address</p>
                                            <p className="text-gray-600">{CONTACT_INFO.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-bold text-zion-blue mb-6">Get Started</h3>
                                <div className="space-y-4">
                                    <Link to="/contact">
                                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                                            Request Custom Quote
                                        </Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                                            Schedule Consultation
                                        </Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                                            View All Services
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div className="mt-8 p-6 bg-zion-blue/5 rounded-lg border border-zion-blue/20">
                                    <h4 className="font-medium text-zion-blue mb-2">Custom Package Includes:</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Personalized service selection</li>
                                        <li>• Volume discounts</li>
                                        <li>• Custom integrations</li>
                                        <li>• Dedicated support</li>
                                        <li>• Flexible payment terms</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link to="/contact">
                                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                                    Start Building Your Custom Package
                                    <ArrowRight className="h-5 w-5 ml-2"/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}