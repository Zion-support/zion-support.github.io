import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Globe, 
  Building2, 
  Users2, 
  TrendingUp, 
  Award,
  Star,
  Zap,
  Shield,
  Lightbulb
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      title: "Strategic Alliance",
      description: "Long-term partnerships focused on joint innovation and market expansion",
      icon: Users2,
      benefits: [
        "Joint product development",
        "Shared marketing initiatives",
        "Revenue sharing opportunities",
        "Exclusive market access"
      ]
    },
    {
      title: "Technology Partnership",
      description: "Collaborative development of cutting-edge technology solutions",
      icon: Zap,
      benefits: [
        "Co-innovation programs",
        "Technology licensing",
        "Joint IP development",
        "Technical expertise sharing"
      ]
    },
    {
      title: "Channel Partnership",
      description: "Distribution and sales partnerships for mutual market growth",
      icon: Globe,
      benefits: [
        "Expanded market reach",
        "Local market expertise",
        "Joint sales initiatives",
        "Training and certification"
      ]
    },
    {
      title: "Solution Partnership",
      description: "Integration partnerships for comprehensive customer solutions",
      icon: Building2,
      benefits: [
        "Integrated service offerings",
        "Seamless customer experience",
        "Joint go-to-market strategies",
        "Shared customer success"
      ]
    }
  ];

  const currentPartners = [
    {
      name: "Microsoft",
      logo: "Microsoft",
      category: "Technology",
      description: "Strategic cloud and AI partnership for enterprise solutions",
      partnership: "Strategic Alliance",
      year: "2023"
    },
    {
      name: "Amazon Web Services",
      logo: "AWS",
      category: "Cloud Services",
      description: "Cloud infrastructure and AI services collaboration",
      partnership: "Technology Partnership",
      year: "2023"
    },
    {
      name: "Google Cloud",
      logo: "Google Cloud",
      category: "Cloud & AI",
      description: "AI and machine learning platform partnership",
      partnership: "Technology Partnership",
      year: "2023"
    },
    {
      name: "IBM",
      logo: "IBM",
      category: "Enterprise",
      description: "Enterprise AI and consulting services collaboration",
      partnership: "Strategic Alliance",
      year: "2023"
    },
    {
      name: "Oracle",
      logo: "Oracle",
      category: "Database & Cloud",
      description: "Database and cloud infrastructure partnership",
      partnership: "Technology Partnership",
      year: "2023"
    },
    {
      name: "Salesforce",
      logo: "Salesforce",
      category: "CRM & AI",
      description: "AI-powered customer relationship management solutions",
      partnership: "Solution Partnership",
      year: "2023"
    }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: "Market Expansion",
      description: "Access new markets and customer segments through our global partner network"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Share risks and costs while leveraging collective expertise and resources"
    },
    {
      icon: Lightbulb,
      title: "Innovation Acceleration",
      description: "Faster product development and innovation through collaborative R&D"
    },
    {
      icon: Award,
      title: "Enhanced Credibility",
      description: "Build trust and credibility through established partner relationships"
    }
  ];

  const successMetrics = [
    {
      metric: "500+",
      label: "Active Partners",
      description: "Global network of technology and business partners"
    },
    {
      metric: "$2B+",
      label: "Joint Revenue",
      description: "Combined revenue generated through partnerships"
    },
    {
      metric: "95%",
      label: "Partner Satisfaction",
      description: "High satisfaction rate among our partner network"
    },
    {
      metric: "150+",
      label: "Countries Served",
      description: "Global reach through our partner ecosystem"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Partnerships</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Join our ecosystem of technology leaders, innovators, and industry experts. 
              Together, we're building the future of AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
              >
                Become a Partner
              </Link>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                View Partnership Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Models</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We offer flexible partnership models designed to create mutual value and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-zion-slate-light mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Partner Network</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We're proud to collaborate with industry leaders and innovators across the technology landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {partner.partnership}
                  </span>
                </div>
                <p className="text-zion-slate-light text-sm mb-3">{partner.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zion-slate-light">{partner.category}</span>
                  <span className="text-zion-cyan">{partner.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem and growing your business with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Success</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our partnerships deliver measurable results and create lasting value for all stakeholders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-zion-cyan" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{metric.metric}</h3>
                <p className="text-zion-cyan font-medium mb-2">{metric.label}</p>
                <p className="text-zion-slate-light text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Partner Network?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's explore how we can work together to create innovative solutions and drive mutual growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium flex items-center justify-center"
            >
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
              Download Partnership Guide
            </button>
          </div>
          
          <div className="mt-12 p-6 bg-zion-blue-light/10 rounded-lg border border-zion-blue-light/20">
            <h3 className="text-lg font-semibold text-white mb-3">Partnership Process</h3>
            <p className="text-zion-slate-light text-sm">
              Our partnership process is simple: initial discussion, mutual evaluation, agreement development, 
              and launch. We provide comprehensive support throughout the entire journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
}
