import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Zap, Shield, TrendingUp, Globe, BarChart3, Users, Phone, Mail, MapPin, ExternalLink, DollarSign, Clock, CheckCircle, ArrowRight } from "lucide-react"
import SEO from "@/components/SEO"
const pricingTiers = [
  {
  na,
  m: e: "Starter",descripti,
  o: n: "Perfect for small businesses and startups",pri,
  c: e: "From $500",priceRan,
  g: e: "500 - 1,999"
        featur,
  e: s: [
  "Basic AI Integration"
            "Standard Security"
            "Email Support"
            "Basic Analytics"
            "5 User Licenses"
            "Standard Templates"
]
        notInclud,
  e: d: [
  "Advanced Customization"
            "Priority Support"
            "Custom Integrations"
            "Advanced Analytics"
]
        colo,
  r: "from-emerald-500 to-green-600",popul,
  a: r: false
},
  {
  na,
  m: e: "Professional",descripti,
  o: n: "Ideal for growing businesses and teams",pri,
  c: e: "From $2,000"
        priceRan,
  g: e: "2,000 - 4,999"
        featur,
  e: s: [
  "Advanced AI Features"
            "Enhanced Security"
            "Priority Support"
            "Advanced Analytics"
            "Unlimited Users"
            "Custom Templates"
            "API Access"
            "Integration Support"
]
        notInclud,
  e: d: [
  "Enterprise Security"
            "Custom Development"
            "Dedicated Account Manager"
]
        colo,
  r: "from-blue-500 to-indigo-600",popul,
  a: r: true
},
  {
  na,
  m: e: "Enterprise",descripti,
  o: n: "For large organizations with complex needs",pri,
  c: e: "From $5,000"
        priceRan,
  g: e: "5,000 - 15,000"
        featur,
  e: s: [
  "Full AI Suite"
            "Enterprise Security"
            "24/7 Premium Support"
            "Custom Analytics"
            "Unlimited Everything"
            "Custom Development"
            "Dedicated Account Manager"
            "SLA Guarantees"
            "Custom Integrations"
            "Training & Onboarding"
]
        notInclude,
  d: [],col,
  o: r: "from-purple-500 to-indigo-600",popul,
  a: r: false
},
  ]
const serviceCategories = [
  {
  na,
  m: e: "AI Services",ic,
  o: n: <Zap className="w-6 h-6"/>,servic,
  e: s: [
  { nam,
  e: "AI Chatbot Platform", start,
  e: r: 899, profession,
  a: l: 2999, enterpri,
  s: e: 5999 },
  },
  { na,
  m: e: "Content Generation Suite", start,
  e: r: 499, profession,
  a: l: 899, enterpri,
  s: e: 1999 },
  },
  { na,
  m: e: "Data Analytics Platform", start,
  e: r: 999, profession,
  a: l: 1999, enterpri,
  s: e: 4999 },
  },
  { na,
  m: e: "Computer Vision API", start,
  e: r: 799, profession,
  a: l: 1499, enterpri,
  s: e: 3999 },
  },
  ],
  },
  {
  na,
  m: e: "IT Services",ic,
  o: n: <Shield className="w-6 h-6"/>,servic,
  e: s: [
  { nam,
  e: "Cloud Migration", start,
  e: r: 1999, profession,
  a: l: 4999, enterpri,
  s: e: 9999 },
  },
  { na,
  m: e: "Cybersecurity Audit", start,
  e: r: 1499, profession,
  a: l: 3999, enterpri,
  s: e: 7999 },
  },
  { na,
  m: e: "DevOps Automation", start,
  e: r: 999, profession,
  a: l: 3499, enterpri,
  s: e: 6999 },
  },
  { na,
  m: e: "Infrastructure Setup", start,
  e: r: 1299, profession,
  a: l: 2999, enterpri,
  s: e: 5999 },
  },
  ],
  },
  {
  na,
  m: e: "Business Solutions",ic,
  o: n: <TrendingUp className="w-6 h-6"/>,servic,
  e: s: [
  { nam,
  e: "Workflow Automation", start,
  e: r: 799, profession,
  a: l: 2499, enterpri,
  s: e: 4999 },
  },
  { na,
  m: e: "Customer Support System", start,
  e: r: 599, profession,
  a: l: 1799, enterpri,
  s: e: 3999 },
  },
  { na,
  m: e: "Project Management", start,
  e: r: 699, profession,
  a: l: 1999, enterpri,
  s: e: 4499 },
  },
  { na,
  m: e: "HR Management Suite", start,
  e: r: 899, profession,
  a: l: 2499, enterpri,
  s: e: 5499 },
  },
  ],
  },
  {
  na,
  m: e: "Digital Solutions",ic,
  o: n: <Globe className="w-6 h-6"/>,servic,
  e: s: [
  { nam,
  e: "E-commerce Optimization", start,
  e: r: 1499, profession,
  a: l: 3999, enterpri,
  s: e: 7999 },
  },
  { na,
  m: e: "Marketing Automation", start,
  e: r: 999, profession,
  a: l: 2999, enterpri,
  s: e: 5999 },
  },
  { na,
  m: e: "Web Development", start,
  e: r: 1999, profession,
  a: l: 4999, enterpri,
  s: e: 9999 },
  },
  { na,
  m: e: "Mobile App Development", start,
  e: r: 2999, profession,
  a: l: 6999, enterpri,
  s: e: 14999 },
  },
  ],
  },
  ]
const benefits = [
  {
  ic,
  o: n: <CheckCircle className="w-8 h-8"/>,tit,
  l: e: "Scalable Solutions",descripti,
  o: n: "Start with what you need and scale up as your business grows"
},
  {
  ic,
  o: n: <Shield className="w-8 h-8"/>,tit,
  l: e: "Enterprise Security",descripti,
  o: n: "Bank-level security and compliance for all our solutions"
},
  {
  ic,
  o: n: <Clock className="w-8 h-8"/>,tit,
  l: e: "Rapid Deployment",descripti,
  o: n: "Get up and running in days, not months"
},
  {
  ic,
  o: n: <Users className="w-8 h-8"/>,tit,
  l: e: "Expert Support",descripti,
  o: n: "24/7 technical support and dedicated account management"
},
  {
  ic,
  o: n: <TrendingUp className="w-8 h-8"/>,tit,
  l: e: "Proven ROI",descripti,
  o: n: "Track record of delivering measurable business outcomes"
},
  {
  ic,
  o: n: <BarChart3 className="w-8 h-8"/>,tit,
  l: e: "Continuous Innovation",descripti,
  o: n: "Regular updates and new features to keep you ahead"
},
  ]
export default function ServicesPricing() {
  const [selectedTier, setSelectedTier] = useState('professional')
    return (<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO title="Micro SAAS Services Pricing - Zion Tech Group" description="Transparent pricing for our comprehensive micro SAAS services. Choose from Starter, Professional, or Enterprise tiers to match your business needs and budget." keywords="micro SAAS pricing, service costs, AI services pricing, IT solutions pricing" url="htt,
  p: s://ziontechgroup.com/services-pricing"/>

      {/* Hero Section */},
  }
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl,
  m: d: text-6xl font-bold text-white mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. Our flexible pricing ensures you only pay for what you need
            with the ability to scale up as you grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark,
  hove: r:bg-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2"/>
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hove,
  r:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2"/>
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */},
  }
      <div className="bg-zion-blue-dark py-4 px-4 border-b border-zion-blue-light">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-cyan text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4"/>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4"/>
              <a href="htt,
  p: s: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hove,
  r:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */},
  }
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              All plans include our core features with additional capabilities as you scale up
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (<Card key={index} className={`relative bg-zion-blue-dark border-zion-blue-light,
  hove: r:border-zion-purple/50 transition-all duration-300 ${tier.popular ? 'ring-2 ring-zion-purple scale-105' : ''}`}>
                {tier.popular && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>)}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-white mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light mb-4">
                    {tier.description},
  }
                  </CardDescription>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-white">{tier.price}</div>
                    <div className="text-zion-slate-light text-sm">Ran,
  g: e: ${tier.priceRange}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-3">What's,
  Include: d:</h4>
                    {tier.features.map((feature, featureIndex) => (<div key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-zion-cyan"/>
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>))}
                  </div>
                  
                  {tier.notIncluded.length > 0 && (<div className="space-y-3 pt-4 border-t border-zion-blue-light">
                      <h4 className="text-white font-semibold mb-3">Not,
  Include: d:</h4>
                      {tier.notIncluded.map((feature, featureIndex) => (<div key={featureIndex} className="flex items-center gap-3">
                          <X className="w-5 h-5 text-zion-slate-light"/>
                          <span className="text-zion-slate-light text-sm">{feature}</span>
                        </div>))}
                    </div>)}
                  
                  <Button className={`w-full mt-6 bg-gradient-to-r ${tier.color} hov,
  e: r:opacity-90 text-white`} size="lg">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2"/>
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </div>

      {/* Service Category Pricing */},
  }
      <div className="py-20 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Service-Specific Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Detailed pricing for each service category. Contact us for custom enterprise solutions.
            </p>
          </div>

          <Tabs value={selectedTier} onValueChange={setSelectedTier} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-zion-blue border-zion-blue-light">
              <TabsTrigger value="starter" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Starter
              </TabsTrigger>
              <TabsTrigger value="professional" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Professional
              </TabsTrigger>
              <TabsTrigger value="enterprise" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Enterprise
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value={selectedTier} className="mt-8">
              <div className="space-y-8">
                {serviceCategories.map((category, index) => (<div key={index} className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-zion-cyan">
                        {category.icon},
  }
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-4">
                      {category.services.map((service, serviceIndex) => (<div key={serviceIndex} className="flex items-center justify-between p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
                          <span className="text-zion-slate-light">{service.name}</span>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-zion-cyan"/>
                            <span className="text-white font-semibold">
                              {service[selectedTier]?.toLocaleString()},
  }
                            </span>
                          </div>
                        </div>))}
                    </div>
                  </div>))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Benefits Section */},
  }
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver more than just software - we deliver business transformation
            </p>
          </div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (<div key={index} className="text-center p-6 rounded-lg border border-zion-blue-light bg-zion-blue-dark">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 text-zion-cyan">
                  {benefit.icon},
  }
                </div>
                <h3 className="text-white font-semibold mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">{benefit.description}</p>
              </div>))}
          </div>
        </div>
      </div>

      {/* CTA Section */},
  }
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-zion-cyan text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific needs and get a custom quote tailored to your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark,
  hove: r: bg-zion-cyan-light">
              <Phone className="w-5 h-5 mr-2"/>
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hove,
  r:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2"/>
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>)
}
