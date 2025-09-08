import React, { useState } from 'react';
import { Link   } from 'react-router-dom';
import { Calculator, 
  Check, 
  X, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  ShoppingCart,
  MessageCircle,
  Users,
  TrendingUp,
  Target,
  Award,
  Clock,
  DollarSign,
  BarChart3,
  Rocket,
  Leaf,
  Lock,
  Heart,
  Globe,
  Atom,
  Satellite
  } from 'lucide-react';
import { SEO   } from '../components/SEO';

export default function PricingGuide(...args: any[]): any {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const currencyRates = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.85 },
    GBP: { symbol: '£', rate: 0.73 }
  };

  const pricingPlans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small businesses getting started with AI",
      price: { monthly: 299, yearly: 2990 },
      features: [
        "AI Business Intelligence Basic",
        "Cloud Infrastructure (10GB)",
        "Basic Support (Email)",
        "Monthly Reports",
        "2 User Licenses"
      ],
      notIncluded: [
        "Advanced Analytics",
        "Custom AI Models",
        "Priority Support",
        "API Access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      icon: Brain,
      description: "Ideal for growing companies with advanced needs",
      price: { monthly: 799, yearly: 7990 },
      features: [
        "Everything in Starter",
        "Advanced AI Analytics",
        "Custom AI Model Training",
        "Cloud Infrastructure (100GB)",
        "Priority Support (Phone + Email)",
        "API Access",
        "10 User Licenses",
        "Quarterly Strategy Sessions"
      ],
      notIncluded: [
        "Enterprise Security",
        "Custom Development",
        "Dedicated Account Manager"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "Full-scale solutions for large organizations",
      price: { monthly: 2499, yearly: 24990 },
      features: [
        "Everything in Professional",
        "Enterprise Security Suite",
        "Custom Development",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "Unlimited Cloud Storage",
        "Unlimited User Licenses",
        "Monthly Strategy Sessions",
        "Custom Integration",
        "SLA Guarantees"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const servicePricing = [
    {
      category: "AI & Machine Learning",
      icon: Brain,
      services: [
        { name: "AI Business Intelligence", price: "From $299/month", description: "Advanced analytics and insights" },
        { name: "AI Sales Copilot", price: "From $199/month", description: "Intelligent sales automation" },
        { name: "AI Compliance Assistant", price: "From $399/month", description: "Automated compliance management" },
        { name: "LLM Content Studio", price: "From $149/month", description: "AI-powered content creation" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      services: [
        { name: "Cloud DevOps", price: "From $599/month", description: "End-to-end cloud solutions" },
        { name: "Cloud FinOps Optimizer", price: "From $299/month", description: "Cost optimization strategies" },
        { name: "FinOps Advisor", price: "From $499/month", description: "Financial operations consulting" }
      ]
    },
    {
      category: "Cybersecurity",
      icon: Shield,
      services: [
        { name: "AI Compliance Copilot", price: "From $399/month", description: "AI-powered security compliance" },
        { name: "Zero Trust Architecture", price: "From $799/month", description: "Modern security framework" },
        { name: "Incident Response Platform", price: "From $599/month", description: "Rapid threat response" }
      ]
    },
    {
      category: "IT Infrastructure",
      icon: Cpu,
      services: [
        { name: "IT Infrastructure Management", price: "From $699/month", description: "Enterprise infrastructure management" },
        { name: "Digital Twin", price: "From $899/month", description: "Virtual infrastructure modeling" },
        { name: "IT Consulting", price: "From $299/hour", description: "Strategic IT guidance" },
        { name: "Onsite Support", price: "From $199/hour", description: "Local technical assistance" }
      ]
    }
  ];

  const calculatePrice = (price: anynumber)   => {
    const rate = currencyRates[selectedCurrency as keyof typeof currencyRates].rate;
    const symbol = currencyRates[selectedCurrency as keyof typeof currencyRates].symbol;
    const adjustedPrice = selectedPeriod === 'yearly' ? price * 0.9 : price;
    return `${symbol}${Math.round(adjustedPrice * rate)}`;
  };

  const savings = selectedPeriod === 'yearly' ? 10 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing Guide - Zion Tech Group"
        description="Comprehensive pricing information for AI, cloud, cybersecurity, and emerging technology services. Transparent pricing with flexible plans for all business sizes."
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services Pricing Guide
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transparent pricing for enterprise technology solutions. Compare our competitive rates 
            with market averages and discover the value we deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan hover:text-white">
              <Phone className="w-5 h-5 mr-2"/>
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="w-5 h-5 mr-2"/>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark py-6 px-4 border-b border-zion-blue-light">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5"/>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg: anygrid-cols-3 gap-8">
            {pricingPlans.map((plan, index)   => (
              <div key={index} className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-cyan-500/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20' 
                  : 'border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4">
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-white">
                      {calculatePrice(plan.price[selectedPeriod as keyof typeof plan.price])}
                      <span className="text-lg text-slate-400 font-normal">
                        /{selectedPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>
                  
                  <Link
                    to={plan.cta === "Contact Sales" ? "/contact" : "/request-quote"}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included: any</h4>
                  {plan.features.map((feature, featureIndex)   => (
                    <div key={featureIndex} className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="text-lg font-semibold text-white mb-4 mt-6">Not Included: any</h4>
                      {plan.notIncluded.map((feature, featureIndex)   => (
                        <div key={featureIndex} className="flex items-center text-slate-500">
                          <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </React.Fragment>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Service-Specific Pricing</h2>
            <p className="text-xl text-slate-300">Detailed pricing for individual services and solutions</p>
          </div>
          
          <div className="grid grid-cols-1 lg: anygrid-cols-2 gap-8">
            {servicePricing.map((category, index)   => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{service.description}</p>
                    </div>
                  )}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <Card className="bg-white/5 border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-blue-500/20 text-blue-400 mb-4">
                  <Shield className="w-8 h-8"/>
                </div>
                <CardTitle className="text-white">ROI Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-400 mb-2">300%+</p>
                <p className="text-zion-slate-light">Average return on investment within 12 months</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-purple-500/20 text-purple-400 mb-4">
                  <Star className="w-8 h-8"/>
                </div>
                <CardTitle className="text-white">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-400 mb-2">99.9%</p>
                <p className="text-zion-slate-light">Client satisfaction rate and SLA compliance</p>
              </CardContent>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant={selectedCategory === 'all' ? 'default' : 'outline'} onClick={() => setSelectedCategory('all')} className="bg-zion-purple hover:bg-zion-purple-dark">
              All Categories
            </Button>
            {EXPANDED_SERVICE_CATEGORIES.map((category) => (<Button key={category.value} variant={selectedCategory === category.value ? 'default' : 'outline'} onClick={() => setSelectedCategory(category.value)} className={selectedCategory === category.value ? 'bg-zion-purple hover:bg-zion-purple-dark' : ''}>
                {category.label}
              </Button>))}
          </div>

          {/* Services Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => {
            const marketComparison = getMarketComparison(service.price, service.category);
            return (<Card key={service.id} className="bg-white/5 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-zion-purple/20 text-zion-cyan">
                        {getCategoryIcon(service.category)}
                      </div>
                      {service.featured && (<Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                          Featured
                        </Badge>)}
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {/* Pricing Section */}
                    <div className="bg-zion-blue-dark/50 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-zion-slate-light text-sm">Our Price</p>
                          <p className="text-3xl font-bold text-zion-cyan">{formatPrice(service.price)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-zion-slate-light text-sm">Market Average</p>
                          <p className="text-2xl font-bold text-zion-slate-light">{formatPrice(marketComparison.avg)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <Check className="w-4 h-4"/>
                        <span className="text-sm font-medium">Save {marketComparison.savings}% vs market average</span>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Clock className="w-4 h-4"/>
                        <span className="text-sm">Delivery: {service.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Globe className="w-4 h-4"/>
                        <span className="text-sm">Location: {service.location}</span>
                      </div>
                      {service.rating && (<div className="flex items-center gap-2 text-zion-slate-light">
                          <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                          <span className="text-sm">{service.rating} ({service.reviewCount} reviews)</span>
                        </div>)}
                      {service.aiScore && (<div className="flex items-center gap-2 text-zion-slate-light">
                          <Brain className="w-4 h-4 text-zion-cyan"/>
                          <span className="text-sm">AI Score: {service.aiScore}%</span>
                        </div>)}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.slice(0, 4).map((tag) => (<Badge key={tag} variant="secondary" className="bg-zion-blue-light text-zion-cyan">
                          {tag}
                        </Badge>))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white flex-1">
                        <Mail className="w-4 h-4 mr-1"/>
                        Get Quote
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>);
        })}
          </div>

          {filteredServices.length === 0 && (<div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">No services found in this category</div>
              <Button onClick={() => setSelectedCategory('all')}>
                View All Services
              </Button>
            </div>)}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-16 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">
              We deliver exceptional value through expertise, innovation, and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-zion-purple/20 text-zion-cyan mb-4">
                  <Star className="w-6 h-6"/>
                </div>
                <CardTitle className="text-white">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  Certified professionals with 10+ years of experience in enterprise technology
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-zion-purple/20 text-zion-cyan mb-4">
                  <Shield className="w-6 h-6"/>
                </div>
                <CardTitle className="text-white">SLA Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  99.9% uptime guarantee with comprehensive service level agreements
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-zion-purple/20 text-zion-cyan mb-4">
                  <TrendingUp className="w-6 h-6"/>
                </div>
                <CardTitle className="text-white">ROI Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  Every solution designed to maximize return on investment and business value
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue border-zion-blue-light text-center">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-zion-purple/20 text-zion-cyan mb-4">
                  <Globe className="w-6 h-6"/>
                </div>
                <CardTitle className="text-white">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light text-sm">
                  Services available worldwide with local expertise and global best practices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and consultation. Our experts will help you 
            choose the right services for your business needs and budget.
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
