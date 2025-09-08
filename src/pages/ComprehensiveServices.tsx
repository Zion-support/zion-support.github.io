import React from 'react';
import { SEO  } from '@/components/SEO';
import { Link  } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Sparkles, Shield, Cpu, Cloud, Database, Workflow, Rocket, DollarSign, Phone, Mail, MapPin, ExternalLink  } from 'lucide-react';

const ComprehensiveServices: React.FC = (): JSX.Element => {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const microSaaS = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      services: [
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence" },
        { name: "AI Workflow Automation", path: "/services/ai-workflow-automation" },
        { name: "AI Cybersecurity", path: "/services/ai-cybersecurity" },
        { name: "AI Content Generation", path: "/services/ai-content-generator" }
      ],
      featured: true
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: Atom,
      services: [
        { name: "Quantum Computing Solutions", path: "/services/quantum-computing-solutions" },
        { name: "Quantum Neural Networks", path: "/services/quantum-neural-networks" },
        { name: "Quantum Financial Trading", path: "/services/quantum-financial-trading" }
      ],
      featured: true
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure solutions",
      icon: Cloud,
      services: [
        { name: "Cloud DevOps", path: "/services/cloud-devops" },
        { name: "Cloud FinOps Optimization", path: "/services/cloud-finops-optimizer" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure" }
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Smart device solutions",
      icon: Cpu,
      services: [
        { name: "IoT Edge Computing", path: "/services/iot-edge-computing" },
        { name: "Digital Twin Platform", path: "/services/digital-twin" },
        { name: "Smart Manufacturing", path: "/services/manufacturing-solutions" }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      description: "Productized business tools",
      icon: Rocket,
      services: [
        { name: "Micro SaaS Solutions", path: "/services/micro-saas-solutions" },
        { name: "Micro CRM", path: "/services/micro-crm" },
        { name: "Website Analytics", path: "/services/website-analytics" }
      ]
    },
    {
      title: "Business Intelligence",
      description: "Data-driven insights",
      icon: BarChart3,
      services: [
        { name: "Data Analytics", path: "/services/data-analytics" },
        { name: "AI Data Analytics", path: "/services/ai-data-analytics" },
        { name: "Business Intelligence", path: "/services/ai-business-intelligence" }
      ]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services - Zion Tech Group"
        description="Explore our complete portfolio of innovative technology solutions including AI, Quantum Computing, Cloud DevOps, IoT, and Micro SaaS services."
        keywords="technology services, AI solutions, quantum computing, cloud services, IoT solutions, Zion Tech Group"
      />

  const linkItem = (href: string, label = 'Learn more') => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-zion-cyan hover:underline">
      <span>{label}</span>
      <ExternalLink className="ml-2 h-4 w-4" />
    </a>
  );

  const Section: React.FC<{ icon: React.ReactNode; title: string; description: string; items: { title: string; desc: string; price: string; cta: string; features: string[]; }[]; gradient: string; }>
    = ({ icon, title, description, items, gradient }) => (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${gradient} text-white`}> 
          <div className="flex items-center mb-6">
            <div className="mr-3">{icon}</div>
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          </div>
          <p className="text-white/80 mb-6">{description}</p>
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((svc)  => (
              <div key={svc.title} className="bg-black/30 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-white/80 mb-4">{svc.desc}</p>
                <div className="text-zion-cyan font-semibold mb-4 flex items-center"><DollarSign className="h-4 w-4 mr-1" />{svc.price}</div>
                <ul className="space-y-2 mb-4">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start"><CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 mt-1" /><span className="text-white/90">{f}</span></li>
                  ))}
                </ul>
                {linkItem(svc.cta)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )};

      {/* Contact Information */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zion-cyan"/>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan"/>
              <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-zion-blue-dark py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5"/>
              <Input placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light"/>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Category"/>
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-blue-light">
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (<SelectItem key={category} value={category}>{category}</SelectItem>))}
              </SelectContent>
            </Select>
            <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Pricing Tier"/>
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-blue-light">
                <SelectItem value="all">All Tiers</SelectItem>
                {Object.keys(PRICING_TIERS).map(tier => (<SelectItem key={tier} value={tier}>{tier}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (<Card key={service.id} className="bg-zion-blue border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg flex items-center justify-center text-zion-cyan mb-3">
                      <Building className="w-6 h-6"/>
                    </div>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (<Badge key={tag} variant="secondary" className="bg-zion-blue-light text-zion-cyan">
                        {tag}
                      </Badge>))}
                  </div>

                  {/* Service Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Clock className="w-4 h-4"/>
                      <span className="text-sm">{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Globe className="w-4 h-4"/>
                      <span>{service.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                      <Phone className="w-4 h-4 mr-2"/>
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                      <Eye className="w-4 h-4"/>
                    </Button>
                  </div>
                </CardContent>
              </Card>))}
          </div>

          {filteredServices.length === 0 && (<div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setPriceRange('all');
            }}>
                Clear Filters
              </Button>
            </div>)}
        </div>
      </div>

      {/* Service Categories Overview */}
      <div className="py-16 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-zion-slate-light text-lg">
              Explore our comprehensive range of technology services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
                icon: <Zap className="w-8 h-8"/>,
                title: "Innovation First",
                description: "Cutting-edge AI and technology solutions that keep you ahead of the competition"
            },
            {
                icon: <Shield className="w-8 h-8"/>,
                title: "Enterprise Security",
                description: "Bank-level security and compliance for all our solutions and services"
            },
            {
                icon: <Building className="w-8 h-8"/>,
                title: "Proven Results",
                description: "Track record of successful implementations and measurable business outcomes"
            },
            {
                icon: <Users className="w-8 h-8"/>,
                title: "Expert Support",
                description: "24/7 technical support and dedicated account management for enterprise clients"
            }
        ].map((feature, index) => (<div key={index} className="text-center p-6 rounded-lg border border-zion-blue-light">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 text-zion-cyan">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your technology needs and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan hover:text-white">
              <Phone className="w-5 h-5 mr-2"/>
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="w-5 h-5 mr-2"/>
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>);
}
