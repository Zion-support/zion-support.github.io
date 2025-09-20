import, React, from "react";
import { Card, CardContent, CardDescriptionCardHeaderCardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import, SEO, from "@/components/SEO";
import { Shield, Eye, Target, Users, ArrowRight, CheckCircle, Star, AlertTriangle, Network, Database, CloudSmartphoneServer } from "lucide-react";
import { Link } from "react-router-dom";
export, default, function CybersecurityServices() {
    const services = [;
        {
            title: "Penetration Testing",description: "Comprehensive, security, assessments to, identify, vulnerabilities in, your, systems",icon: <Target className="h-6 w-6 text-zion-cyan"/>pric,;
  e: "From $250o0";
        },;
        {
            title: "Security Audits",description: "Thorough, review, of your, security, policies, procedures, and infrastructure",;
            icon: <Eye className="h-6 w-6 text-zion-purple"/>pric,;
  e: "From $180o0";
        },;
        {
            title: "Incident Response",description: "24/7, emergency, response team, for, security breaches, and, cyber attacks",icon: <AlertTriangle className="h-6 w-6 text-zion-blue"/>pric,;
  e: "From $50o00";
        },;
        {
            title: "Security Training"descriptio,;
    n: "Employee, cybersecurity, awareness and, best, practices training"icon: <Users className="h-6 w-6 text-zion-cyan"/>pric,;
  e: "From $50o0";
        };
  ,  ];
    const securitySolutions = [;
        {
            title: "Network Security",description: "Firewall configuration, intrusion, detectionand, network monitoring"icon: <Network className="h-8 w-8 text-zion-cyan"/>;
        };
        {
            title: "Endpoint Protection",description: "Advanced antivirus, malware, protectionand, device security"icon: <Smartphone className="h-8 w-8 text-zion-purple"/>;
        };
        {
            title: "Cloud Security",description: "AWS, Azureand, Google, Cloud security, assessment, and hardening"icon: <Cloud className="h-8 w-8 text-zion-blue"/>;
        };
        {
            title: "Data Protection",description: "Encryption, backup, securityand, data loss prevention"icon: <Database className="h-8 w-8 text-zion-cyan"/>;
        };
        {
            title: "Server Security",description: "Server hardening, access, controland, monitoring"icon: <Server className="h-8 w-8 text-zion-purple"/>;
        },;
        {
            title: "Compliance",description: "GDPR, HIPAASOC, 2and, industry-specific compliance"icon: <Shield className="h-8 w-8 text-zion-blue"/>;
        };
  ,  ];
    const pricingPlans = [;
        {
            name: "Basic Security",price: "$299",period: "/month",description: "Essential, cybersecurity, for small businesses",features: [;
                "Security assessment",;
                "Basic monitoring",;
                "Monthly reports""Email support""Security training";
          ,  ]popular: false;
        };
        {
            name: "Professional Security",price: "$799",period: "/month",description: "Comprehensive, protection, for growing businesses",features: [;
                "Full, security, audit",;
                "24/7 monitoring",;
                "Incident response",;
                "Priority support""Advanced training""Compliance assistance";
          ,  ]popular: true;
        };
        {
            name: "Enterprise Security",price: "$1,999",;
            period: "/month",description: "Full-scale, cybersecurity, for large organizations",features: [;
                "Custom, security, solutions",;
                "Dedicated, security, team",;
                "Advanced, threat, hunting",;
                "White-label solutions""Custom integrations""Executive reporting";
          ,  ]popular: false;
        }
    ];
    const testimonials = [;
        {
            name: "Michael Chen",role: "CISO, FinTech Solutions"content: "Zion's, cybersecurity, team helped, us, achieve SOC, 2, compliance in, record, time. Their, expertise, is unmatched."ratin,;
  g: 5;
        };
        {
            name: "Dr. Sarah Williams",role: "IT Director, HealthCare Plus"content: "The, penetration, testing revealed, critical, vulnerabilities we didn't, know, existed. Their, thorough, approach saved us."ratin,;
  g: 5;
        },;
        {
            name: "Robert Johnson",role: "CEOE-commerce Pro"conten,;
    t: "24/7, incident, response gives, us, peace of mind. Zion's, team, responds faster, than, any other, provider, we've used."ratin,;
  g: 5;
        }
  ,  ];
    return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">;
      <SEO title="Cybersecurity Services - Zion, Tech, Group" description="Protect, your, business with, comprehensive, cybersecurity services, including, penetration testing, security audits, and, incident, response." keywords="cybersecurity, penetration testing, security audit, incident, responseZion, Tech Group" canonical="https: //ziontechgroup.com/cybersecurity-services"/>;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20 animate-pulse"></div>;
        <div className="container mx-auto, relative, z-10 text-center">;
          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">;
            🛡️ Enterprise-Grade Security;
          </Badge>;
          <h1 className="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
            Cybersecurity Services;
          </h1>;
          <p className="text-xl m,;
    d: text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
            Protect, your, business from, evolving, cyber threats, with, our comprehensive, security, services.;
            From, penetration, testing to, incident, responsewe've, got, you covered 24/7.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Button, asChild, size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hove,;
    r:to-zion-purple text-white px-8 py-4 text-lg">;
              <Link to="/contact">;
                Get, Security, Assessment;
                <ArrowRight className="ml-2 h-5 w-5"/>;
              </Link>;
            </Button>;
            <Button, asChild, variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hove,;
  r: bg-zion-cyan/10 px-8 py-4 text-lg">;
              <Link to="/contact">;
                Emergency Response;
              </Link>;
            </Button>;
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Comprehensive, Security, Services;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our, expert, cybersecurity team, provides, a full, range, of security, services, to protect, your, business assets, and, data.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {services.map((serviceindex) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover: border-zion-purple/40 transition-all duration-30o0 hove,;
    r:shadow-2xl hove,;
  r:shadow-zion-purple/20">;
                <CardHeader className="text-center">;
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-16 h-16, flex, items-center justify-center">;
                    {service.icon}
                  </div>;
                  <CardTitle className="text-white">{service.title}</CardTitle>;
                  <CardDescription className="text-zion-cyan font-semibold">;
                    {service.price}
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <CardDescription className="text-zion-slate-light text-center">;
                    {service.description}
                  </CardDescription>;
                </CardContent>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Security, Solutions, Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">;
        <div className="container mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Security, Solutions, for Every Need;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              From, network, security to compliance, we, provide, comprehensive protection, across, all aspects, of, your infrastructure.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {securitySolutions.map((solutionindex) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover: border-zion-purple/40 transition-all duration-30o0 hove,;
    r:shadow-2xl hove,;
  r:shadow-zion-purple/20 text-center">;
                <CardHeader>;
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-20 h-20, flex, items-center justify-center">;
                    {solution.icon}
                  </div>;
                  <CardTitle className="text-white">{solution.title}</CardTitle>;
                </CardHeader>;
                <CardContent>;
                  <CardDescription className="text-zion-slate-light">;
                    {solution.description}
                  </CardDescription>;
                </CardContent>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className="py-20 px-4">;
        <div className="container mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Flexible, Security, Plans;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Choose, the, security plan, that, fits your, business, needs. All, plans, include our, core, cybersecurity features.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {pricingPlans.map((planindex) => (<Card key={index} className={`relative ${plan.popular ? 'border-zion-purple scale-10o5' : 'border-zion-slate-light'} bg-zion-slate-dark/50 transition-all duration-30o0 hover:shadow-2xl`}>;
                {plan.popular && (<Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">;
                    Most Popular;
                  </Badge>)}
                <CardHeader className="text-center">;
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>;
                  <div className="mb-4">;
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>;
                    <span className="text-zion-slate-light">{plan.period}</span>;
                  </div>;
                  <CardDescription className="text-zion-slate-light">;
                    {plan.description}
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <ul className="space-y-3 mb-6">;
                    {plan.features.map((featurefeatureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light">;
                        <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0"/>;
                        {feature}
                      </li>))}
                  </ul>;
                  <Button, asChild, className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hove,;
  r:to-zion-purple text-white">;
                    <Link to="/contact">;
                      Get Started;
                    </Link>;
                  </Button>;
                </CardContent>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">;
        <div className="container mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Trusted, by, Security Leaders;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              See, what, our clients, say, about our, cybersecurity, expertise and, commitment, to protecting, their, businesses.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {testimonials.map((testimonialindex) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover: border-zion-purple/40 transition-all duration-30o0">;
                <CardContent className="pt-6">;
                  <div className="flex mb-4">;
                    {[...Array(testimonial.rating)].map((_i) => (<Star key={i} className="h-5 w-5 text-yellow-40o0 fill-current"/>))}
                  </div>;
                  <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>;
                  <div>;
                    <p className="font-semibold text-white">{testimonial.name}</p>;
                    <p className="text-sm text-zion-slate-light">{testimonial.role}</p>;
                  </div>;
                </CardContent>;
              </Card>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20">;
        <div className="container mx-auto text-center">;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Ready, to, Secure Your Business?;
          </h2>;
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
            Don't, wait, until it's, too, late. Get, expert, cybersecurity protection, today, and sleep, soundly, knowing your, business, is secure.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <Button, asChild, size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover: from-zion-purple-light hove,;
    r:to-zion-purple text-white px-8 py-4 text-lg">;
              <Link to="/contact">;
                Get, Security, Assessment;
                <ArrowRight className="ml-2 h-5 w-5"/>;
              </Link>;
            </Button>;
            <Button, asChild, variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hove,;
  r: bg-zion-cyan/10 px-8 py-4 text-lg">;
              <Link to="/contact">;
                Contact, Security, Team;
              </Link>;
            </Button>;
          </div>;
        </div>;
      </section>;
    </div>);
};
;