import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Lock, 
  Rocket, 
  Globe, 
  Zap, 
  Star, 
  TrendingUp, 
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Users,
  Clock,
  Target,
  BarChart3,
  Cloud,
  Database,
  Network,
  Smartphone,
  Server,
  Chip,
  Atom,
  Blockchain,
  Leaf,
  Eye,
  Code,
  Palette,
  ShieldCheck,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Lock as LockIcon,
  Rocket as RocketIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Award as AwardIcon
} from 'lucide-react';
import { INNOVATIVE_SERVICES_2025 } from '@/data/innovativeServices2025';
import { COMPREHENSIVE_PRICING_GUIDE_2025 } from '@/data/comprehensivePricingGuide2025';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const serviceCategories = [
  {
    name: "AI & Analytics",
    icon: Brain,
    color: "from-purple-600 to-pink-600",
    description: "Cutting-edge artificial intelligence and data analytics solutions"
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    color: "from-red-600 to-orange-600",
    description: "Advanced AI-powered security and threat detection"
  },
  {
    name: "Emerging Technology",
    icon: Rocket,
    color: "from-indigo-600 to-purple-600",
    description: "Quantum computing, blockchain, and next-gen solutions"
  },
  {
    name: "Edge & IoT",
    icon: Cpu,
    color: "from-green-600 to-emerald-600",
    description: "Distributed computing and Internet of Things platforms"
  },
  {
    name: "Cloud & Infrastructure",
    icon: Cloud,
    color: "from-blue-600 to-cyan-600",
    description: "Scalable cloud solutions and infrastructure management"
  },
  {
    name: "Sustainability",
    icon: Leaf,
    color: "from-emerald-600 to-teal-600",
    description: "Green technology and environmental impact solutions"
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};

export default function InnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredServices = selectedCategory === "all" 
    ? INNOVATIVE_SERVICES_2025 
    : INNOVATIVE_SERVICES_2025.filter(service => service.category === selectedCategory);

  const getServicePricing = (serviceId: string) => {
    return COMPREHENSIVE_PRICING_GUIDE_2025.find(pricing => pricing.id === serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI, IT, and emerging technology solutions. From quantum computing to AI cybersecurity, explore the future of technology."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
              <Star className="w-4 h-4 mr-2" />
              Innovation 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary Technology
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Solutions 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of technology with our cutting-edge AI, quantum computing, 
              blockchain, and emerging technology solutions. Transform your business with 
              innovation that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              All Services
            </Button>
            {serviceCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={selectedCategory === category.name 
                  ? `bg-gradient-to-r ${category.color} text-white` 
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => {
              const pricing = getServicePricing(service.id);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`bg-gradient-to-r ${service.category === "AI Services" ? "from-purple-600 to-pink-600" : 
                          service.category === "IT Services" ? "from-blue-600 to-cyan-600" : 
                          "from-indigo-600 to-purple-600"} text-white border-0`}>
                          {service.category}
                        </Badge>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing */}
                      {pricing && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-cyan-400 mb-3">Starting Price</h4>
                          <div className="text-2xl font-bold text-white">
                            ${pricing.pricingTiers[0].price}
                            <span className="text-sm text-gray-400 font-normal">/month</span>
                          </div>
                          <p className="text-sm text-gray-400">{pricing.pricingTiers[0].description}</p>
                        </div>
                      )}

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technology Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technology</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologyStack.slice(0, 4).map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* ROI Metrics */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">ROI Impact</h4>
                        <div className="space-y-2">
                          {service.roiMetrics.slice(0, 2).map((metric, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <Target className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-3">
                        <Button 
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                          onClick={() => setSelectedService(service.id)}
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                          onClick={() => window.open(service.website, '_blank')}
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {INNOVATIVE_SERVICES_2025.find(s => s.id === selectedService)?.title}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>
              
              {(() => {
                const service = INNOVATIVE_SERVICES_2025.find(s => s.id === selectedService);
                const pricing = getServicePricing(selectedService);
                
                if (!service) return null;
                
                return (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Description</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>

                    {pricing && (
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3">Pricing Plans</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {pricing.pricingTiers.map((tier, idx) => (
                            <Card key={idx} className={`bg-slate-700 border-slate-600 ${tier.popular ? 'border-cyan-500 ring-2 ring-cyan-500' : ''}`}>
                              <CardHeader className="text-center">
                                <CardTitle className="text-white">{tier.name}</CardTitle>
                                <div className="text-3xl font-bold text-white">
                                  ${tier.price}
                                  <span className="text-sm text-gray-400 font-normal">/month</span>
                                </div>
                                <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                                {tier.popular && (
                                  <Badge className="bg-cyan-500 text-white">Most Popular</Badge>
                                )}
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-2">
                                  {tier.features.map((feature, featureIdx) => (
                                    <li key={featureIdx} className="flex items-center text-sm text-gray-300">
                                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                                <Button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                                  {tier.cta}
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologyStack.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-slate-700 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Use Cases</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <Target className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Compliance & Standards</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.complianceStandards.map((standard, idx) => (
                          <Badge key={idx} variant="outline" className="border-green-500 text-green-400">
                            {standard}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                        onClick={() => window.open(service.website, '_blank')}
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                        onClick={() => window.open(`mailto:${service.contactEmail}`, '_blank')}
                      >
                        Contact Sales
                        <Mail className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the future of technology with our innovative solutions. 
              Get in touch to discuss how we can help you achieve your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                onClick={() => window.open(contactInfo.website, '_blank')}
              >
                Visit Website
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}