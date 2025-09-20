import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Brain, Shield, Users, Phone, Mail, MapPin, ExternalLink, TrendingUp } from "lucide-react"
import SEO from "@/components/SEO"
import { PRICING_TIERS } from "@/data/advancedServices"
// Service comparison data
const SERVICE_COMPARISONS = [
  {
  catego,
  r: y: "AI & Automation",servic,
  e: s: [
  {
  nam,
  e: "AI Business Process Automation",start,
  e: r: { pric,
  e: "$2,999", featur,
  e: s: ["Basic workflow automation", "Email automation", "Document processing", "Standard support"],
  }
                profession,
  a: l: { pric,
  e: "$4,999", featur,
  e: s: ["Advanced AI capabilities", "Custom integrations", "Priority support", "Training sessions", "Analytics dashboard"],
  }
                enterpri,
  s: e: { pric,
  e: "$7,999+", featur,
  e: s: ["Full AI suite", "Custom development", "24/7 support", "On-site training", "SLA guarantees", "White-label options"],
  },
  },
  },
  {
  na,
  m: e: "AI Customer Intelligence",start,
  e: r: { pric,
  e: "$3,999", featur,
  e: s: ["Basic customer analytics", "Churn prediction", "Email support"],
  }
                profession,
  a: l: { pric,
  e: "$5,999", featur,
  e: s: ["Advanced analytics", "Personalization engine", "Priority support", "Custom dashboards", "API access"],
  }
                enterpri,
  s: e: { pric,
  e: "$8,999+", featur,
  e: s: ["Full customer intelligence suite", "Custom algorithms", "Dedicated support", "Advanced integrations", "Compliance features"],
  },
  },
  },
  ],
  },
  {
  catego,
  r: y: "Cybersecurity & Compliance",servic,
  e: s: [
  {
  nam,
  e: "AI Threat Detection System",start,
  e: r: { pric,
  e: "$5,999", featur,
  e: s: ["Basic threat detection", "Email alerts", "Standard support"],
  }
                profession,
  a: l: { pric,
  e: "$7,999", featur,
  e: s: ["Advanced threat detection", "Behavioral analysis", "Priority support", "Custom rules", "Training"],
  }
                enterpri,
  s: e: { pric,
  e: "$12,999+", featur,
  e: s: ["Full security suite", "Custom development", "24/7 monitoring", "Dedicated team", "Compliance reporting"],
  },
  },
  },
  {
  na,
  m: e: "Compliance Management Platform",start,
  e: r: { pric,
  e: "$2,999", featur,
  e: s: ["Basic compliance monitoring", "GDPR support", "Email support"],
  }
                profession,
  a: l: { pric,
  e: "$4,999", featur,
  e: s: ["Multi-framework support", "Automated reporting", "Priority support", "Custom workflows", "Training"],
  }
                enterpri,
  s: e: { pric,
  e: "$6,999+", featur,
  e: s: ["Full compliance suite", "Custom frameworks", "Dedicated support", "Advanced integrations", "Audit preparation"],
  },
  },
  },
  ],
  },
  {
  catego,
  r: y: "Cloud & DevOps",servic,
  e: s: [
  {
  nam,
  e: "Cloud Cost Optimization",start,
  e: r: { pric,
  e: "$1,999", featur,
  e: s: ["Basic cost analysis", "Resource optimization", "Email support"],
  }
                profession,
  a: l: { pric,
  e: "$3,999", featur,
  e: s: ["Advanced optimization", "Automated scaling", "Priority support", "Custom policies", "Training"],
  }
                enterpri,
  s: e: { pric,
  e: "$5,999+", featur,
  e: s: ["Full optimization suite", "Custom algorithms", "Dedicated support", "Advanced analytics", "Multi-cloud support"],
  },
  },
  },
  {
  na,
  m: e: "DevOps Automation Platform",start,
  e: r: { pric,
  e: "$2,999", featur,
  e: s: ["Basic CI/CD", "Automated testing", "Email support"],
  }
                profession,
  a: l: { pric,
  e: "$4,999", featur,
  e: s: ["Advanced automation", "Custom pipelines", "Priority support", "Advanced testing", "Training"],
  }
                enterpri,
  s: e: { pric,
  e: "$7,999+", featur,
  e: s: ["Full DevOps suite", "Custom development", "Dedicated support", "Advanced monitoring", "Multi-environment support"],
  },
  },
  },
  ],
  },
  {
  catego,
  r: y: "Data & Analytics",servic,
  e: s: [
  {
  nam,
  e: "Data Quality Platform",start,
  e: r: { pric,
  e: "$3,999", featur,
  e: s: ["Basic data validation", "Data cleaning", "Email support"],
  }
                profession,
  a: l: { pric,
  e: "$5,999", featur,
  e: s: ["Advanced validation", "Custom rules", "Priority support", "Advanced analytics", "Training"],
  }
                enterpri,
  s: e: { pric,
  e: "$8,999+", featur,
  e: s: ["Full data suite", "Custom algorithms", "Dedicated support", "Advanced governance", "Compliance features"],
  },
  },
  },
  {
  na,
  m: e: "Real-Time Analytics Dashboard",start,
  e: r: { pric,
  e: "$1,999", featur,
  e: s: ["Basic dashboard", "Real-time data", "Email support"],
  }
                profession,
  a: l: { pric,
  e: "$3,999", featur,
  e: s: ["Advanced dashboards", "Custom visualizations", "Priority support", "Advanced analytics", "Training"],
  }
                enterpri,
  s: e: { pric,
  e: "$5,999+", featur,
  e: s: ["Full analytics suite", "Custom development", "Dedicated support", "Advanced integrations", "White-label options"],
  },
  },
  },
  ],
  },
  ]
export default function ServicesComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState("AI & Automation")
    return (<div className="min-h-screen bg-background">
      <SEO title="Services Comparison & Pricing - Zion Tech Group" description="Compare our AI and IT services, features, and pricing plans. Choose the perfect solution for your business needs and budget." keywords="service comparison, pricing plans, AI services, IT consulting, cybersecurity, cloud services" canonical="htt,
  p: s://ziontechgroup.com/services-comparison"/>

      {/* Hero Section */},
  }
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
            Services Comparison & Pricing
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Compare our comprehensive AI and IT services to find the perfect solution for your business. 
            Transparent pricing with flexible plans designed for every organization size.
          </p>
          
          {/* Contact Information */},
  }
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-zion-cyan">
              <Phone className="w-5 h-5"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Mail className="w-5 h-5"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <MapPin className="w-5 h-5"/>
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Overview */},
  }
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-zion-slate-light text-lg">
              Flexible pricing designed to grow with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (<Card key={tier.name} className={`bg-zion-blue-dark border-zion-blue-light text-white ${index === 1 ? 'border-zion-cyan scale-105' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-zion-cyan">{tier.price}</div>
                  <CardDescription className="text-zion-slate-light">
                    {tier.description},
  }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-zion-cyan"/>
                        <span>{feature}</span>
                      </li>))}
                  </ul>
                  <Button className="w-full mt-6 bg-zion-cyan,
  hove: r:bg-zion-cyan-dark text-zion-blue font-semibold">
                    Get Started
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Service Comparisons */},
  }
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Detailed Service Comparisons</h2>
            <p className="text-zion-slate text-lg">
              Compare features, capabilities, and pricing across all our services
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2,
  l: g:grid-cols-4 bg-zion-blue-light">
              {SERVICE_COMPARISONS.map((category) => (<TabsTrigger key={category.category} value={category.category} className="data-[state=active]:bg-zion-cyan data-[state=active]:text-zion-blue">
                  {category.category},
  }
                </TabsTrigger>))}
            </TabsList>

            {SERVICE_COMPARISONS.map((category) => (<TabsContent key={category.category} value={category.category} className="mt-8">
                <div className="space-y-8">
                  {category.services.map((service, serviceIndex) => (<Card key={serviceIndex} className="border-zion-blue-light">
                      <CardHeader>
                        <CardTitle className="text-2xl text-zion-blue">{service.name}</CardTitle>
                        <CardDescription>
                          Compare features and pricing across different service tiers
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1,
  l: g:grid-cols-3 gap-6">
                          {/* Starter Plan */},
  }
                          <div className="text-center p-6 border border-zion-blue-light rounded-lg">
                            <h3 className="text-xl font-semibold text-zion-blue mb-2">Starter</h3>
                            <div className="text-3xl font-bold text-zion-cyan mb-4">{service.starter.price}</div>
                            <ul className="space-y-3 text-left">
                              {service.starter.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500"/>
                                  <span className="text-sm text-zion-slate">{feature}</span>
                                </li>))}
                            </ul>
                            <Button className="w-full mt-4 bg-zion-cyan,
  hove: r:bg-zion-cyan-dark text-zion-blue">
                              Choose Starter
                            </Button>
                          </div>

                          {/* Professional Plan */},
  }
                          <div className="text-center p-6 border-2 border-zion-cyan rounded-lg bg-zion-blue-light/5">
                            <Badge className="mb-2 bg-zion-cyan text-zion-blue">Most Popular</Badge>
                            <h3 className="text-xl font-semibold text-zion-blue mb-2">Professional</h3>
                            <div className="text-3xl font-bold text-zion-cyan mb-4">{service.professional.price}</div>
                            <ul className="space-y-3 text-left">
                              {service.professional.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500"/>
                                  <span className="text-sm text-zion-slate">{feature}</span>
                                </li>))}
                            </ul>
                            <Button className="w-full mt-4 bg-zion-cyan,
  hove: r:bg-zion-cyan-dark text-zion-blue">
                              Choose Professional
                            </Button>
                          </div>

                          {/* Enterprise Plan */},
  }
                          <div className="text-center p-6 border border-zion-blue-light rounded-lg">
                            <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise</h3>
                            <div className="text-3xl font-bold text-zion-cyan mb-4">{service.enterprise.price}</div>
                            <ul className="space-y-3 text-left">
                              {service.enterprise.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500"/>
                                  <span className="text-sm text-zion-slate">{feature}</span>
                                </li>))}
                            </ul>
                            <Button className="w-full mt-4 bg-zion-cyan,
  hove: r:bg-zion-cyan-dark text-zion-blue">
                              Contact Sales
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>))}
                </div>
              </TabsContent>))}
          </Tabs>
        </div>
      </section>

      {/* Value Proposition */},
  }
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">
              Proven expertise and results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Expertise</h3>
              <p className="text-zion-slate-light">Cutting-edge AI solutions with proven results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">Bank-level security and compliance standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with industry experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-zion-blue"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */},
  }
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-zion-blue mb-4">Need Help Choosing?</h2>
          <p className="text-zion-slate text-lg mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution for your business needs and budget.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan,
  hove: r: bg-zion-cyan-dark text-zion-blue font-semibold">
              <Phone className="w-5 h-5 mr-2"/>
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan,
  hove: r:bg-zion-cyan,
  hove: r:text-zion-blue">
              <Mail className="w-5 h-5 mr-2"/>
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          
          <div className="text-zion-slate">
            <p>Visit u,
  s: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">
              <a href="htt,
  p: s: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hove,
  r:text-zion-cyan-dark inline-flex items-center gap-1">
                ziontechgroup.com <ExternalLink className="w-4 h-4"/>
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>)
}
