import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SEO from "@/components/SEO"
import { Shield, Eye, Target, Users, ArrowRight, CheckCircle, Star, AlertTriangle, Network, Database, Cloud, Smartphone, Server } from "lucide-react"
import { Link } from "react-router-dom"
export default function CybersecurityServices() {
    const services = [
        {
            tit,
  l: e: "Penetration Testing",descripti,
  o: n: "Comprehensive security assessments to identify vulnerabilities in your systems",ic,
  o: n: <Target className="h-6 w-6 text-zion-cyan"/>,pri,
  c: e: "From $2,500"
        }, {
            tit,
  l: e: "Security Audits",descripti,
  o: n: "Thorough review of your security policies, procedures, and infrastructure"
            ic,
  o: n: <Eye className="h-6 w-6 text-zion-purple"/>,pri,
  c: e: "From $1,800"
        }, {
            tit,
  l: e: "Incident Response",descripti,
  o: n: "24/7 emergency response team for security breaches and cyber attacks",ic,
  o: n: <AlertTriangle className="h-6 w-6 text-zion-blue"/>,pri,
  c: e: "From $5,000"
        }, {
            tit,
  l: e: "Security Training",descripti,
  o: n: "Employee cybersecurity awareness and best practices training",ic,
  o: n: <Users className="h-6 w-6 text-zion-cyan"/>,pri,
  c: e: "From $500"
        }
    ]
    const securitySolutions = [
        {
            tit,
  l: e: "Network Security",descripti,
  o: n: "Firewall configuration, intrusion detection, and network monitoring"
            ic,
  o: n: <Network className="h-8 w-8 text-zion-cyan"/>
        }, {
            tit,
  l: e: "Endpoint Protection",descripti,
  o: n: "Advanced antivirus, malware protection, and device security"
            ic,
  o: n: <Smartphone className="h-8 w-8 text-zion-purple"/>
        }, {
            tit,
  l: e: "Cloud Security",descripti,
  o: n: "AWS, Azure, and Google Cloud security assessment and hardening"
            ic,
  o: n: <Cloud className="h-8 w-8 text-zion-blue"/>
        }, {
            tit,
  l: e: "Data Protection",descripti,
  o: n: "Encryption, backup security, and data loss prevention"
            ic,
  o: n: <Database className="h-8 w-8 text-zion-cyan"/>
        }, {
            tit,
  l: e: "Server Security",descripti,
  o: n: "Server hardening, access control, and monitoring"
            ic,
  o: n: <Server className="h-8 w-8 text-zion-purple"/>
        }, {
            tit,
  l: e: "Compliance",descripti,
  o: n: "GDPR, HIPAA, SOC 2, and industry-specific compliance"
            ic,
  o: n: <Shield className="h-8 w-8 text-zion-blue"/>
        }
    ]
    const pricingPlans = [
        {
            na,
  m: e: "Basic Security",pri,
  c: e: "$299",peri,
  o: d: "/month",descripti,
  o: n: "Essential cybersecurity for small businesses",featur,
  e: s: [
                "Security assessment"
                "Basic monitoring"
                "Monthly reports"
                "Email support"
                "Security training"
            ]
            popula,
  r: false
        }, {
            na,
  m: e: "Professional Security",pri,
  c: e: "$799",peri,
  o: d: "/month",descripti,
  o: n: "Comprehensive protection for growing businesses",featur,
  e: s: [
                "Full security audit"
                "24/7 monitoring"
                "Incident response"
                "Priority support"
                "Advanced training"
                "Compliance assistance"
            ]
            popula,
  r: true
        }, {
            na,
  m: e: "Enterprise Security",pri,
  c: e: "$1,999"
            peri,
  o: d: "/month",descripti,
  o: n: "Full-scale cybersecurity for large organizations",featur,
  e: s: [
                "Custom security solutions"
                "Dedicated security team"
                "Advanced threat hunting"
                "White-label solutions"
                "Custom integrations"
                "Executive reporting"
            ]
            popula,
  r: false
        }
    ]
    const testimonials = [
        {
            na,
  m: e: "Michael Chen",ro,
  l: e: "CISO, FinTech Solutions"
            conte,
  n: t: "Zion's cybersecurity team helped us achieve SOC 2 compliance in record time. Their expertise is unmatched.",rati,
  n: g: 5
        }, {
            na,
  m: e: "Dr. Sarah Williams",ro,
  l: e: "IT Director, HealthCare Plus"
            conte,
  n: t: "The penetration testing revealed critical vulnerabilities we didn't know existed. Their thorough approach saved us.",rati,
  n: g: 5
        }, {
            na,
  m: e: "Robert Johnson",ro,
  l: e: "CEO, E-commerce Pro"
            conte,
  n: t: "24/7 incident response gives us peace of mind. Zion's team responds faster than any other provider we've used.",rati,
  n: g: 5
        }
    ]
    return (<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      <SEO title="Cybersecurity Services - Zion Tech Group" description="Protect your business with comprehensive cybersecurity services including penetration testing, security audits, and incident response." keywords="cybersecurity, penetration testing, security audit, incident response, Zion Tech Group" canonical="htt,
  p: s://ziontechgroup.com/cybersecurity-services"/>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20 animate-pulse"></div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            🛡️ Enterprise-Grade Security
          </Badge>
          <h1 className="text-5xl,
  m: d: text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Cybersecurity Services
          </h1>
          <p className="text-xl m,
  d:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Protect your business from evolving cyber threats with our comprehensive security services. 
            From penetration testing to incident response, we've got you covered 24/7.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark,
  hove: r:from-zion-purple-light,
  hove: r:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hove,
  r:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Emergency Response
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our expert cybersecurity team provides a full range of security services to protect your business assets and data.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {services.map((service, index) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20,
  hove: r: border-zion-purple/40 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-zion-purple/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-16 h-16 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-zion-cyan font-semibold">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Security Solutions Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Solutions for Every Need
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From network security to compliance, we provide comprehensive protection across all aspects of your infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {securitySolutions.map((solution, index) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20,
  hove: r: border-zion-purple/40 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-zion-purple/20 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-20 h-20 flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-white">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Security Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the security plan that fits your business needs. All plans include our core cybersecurity features.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (<Card key={index} className={`relative ${plan.popular ? 'border-zion-purple scale-105' : 'border-zion-slate-light'} bg-zion-slate-dark/50 transition-all duration-300,
  hove: r:shadow-2xl`}>
                {plan.popular && (<Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                    Most Popular
                  </Badge>)}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark,
  hove: r: from-zion-purple-light hove,
  r:to-zion-purple text-white">
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what our clients say about our cybersecurity expertise and commitment to protecting their businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20,
  hove: r:border-zion-purple/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="h-5 w-5 text-yellow-400 fill-current"/>))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zion-slate-light">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Don't wait until it's too late. Get expert cybersecurity protection today and sleep soundly knowing your business is secure.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark,
  hove: r:from-zion-purple-light,
  hove: r:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hove,
  r:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Contact Security Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>)
}
