import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Brain, Cloud, Users, MessageCircle, FileText, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and small teams getting started with AI tools",
      features: [
        "AI Content Generation (100 credits/month)",
        "Basic AI Image Editing",
        "AI Meeting Assistant (5 hours/month)",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/signup?plan=starter"
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for growing businesses and professional teams",
      features: [
        "Everything in Starter",
        "AI Content Generation (500 credits/month)",
        "Advanced AI Image & Video Editing",
        "AI Code Assistant (Basic)",
        "AI Meeting Assistant (20 hours/month)",
        "AI Translation (10 languages)",
        "Priority Support",
        "Advanced Analytics",
        "API Access (1000 calls/month)",
        "Team Collaboration Tools"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/signup?plan=professional"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Comprehensive solution for large organizations and enterprises",
      features: [
        "Everything in Professional",
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "Advanced AI Code Assistant",
        "AI Meeting Assistant (Unlimited)",
        "AI Translation (100+ languages)",
        "24/7 Priority Support",
        "Custom Analytics & Reporting",
        "Unlimited API Access",
        "Advanced Security & Compliance",
        "Dedicated Account Manager",
        "Custom Integrations"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact?plan=enterprise"
    }
  ];

  const addOns = [
    {
      name: "AI Model Training",
      description: "Custom AI model training for your specific use case",
      price: "$2,500",
      period: "/project",
      icon: Brain
    },
    {
      name: "Premium Support",
      description: "24/7 dedicated support with response time guarantee",
      price: "$500",
      period: "/month",
      icon: MessageCircle
    },
    {
      name: "Custom Integration",
      description: "Bespoke integration with your existing systems",
      price: "$1,500",
      period: "/project",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-zion-cyan/20 rounded-full">
              <Zap className="h-12 w-12 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                  tier.popular ? 'ring-2 ring-zion-cyan ring-opacity-50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-cyan text-zion-blue-dark font-semibold px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-white mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {tier.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-zion-slate-light">{tier.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Link to={tier.link} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-zion-blue-dark font-semibold">
                      {tier.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Enhance your experience with our premium add-on services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <addon.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-xl text-white">{addon.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {addon.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pb-4">
                  <div className="text-2xl font-bold text-white mb-2">
                    {addon.price}
                    <span className="text-sm text-zion-slate-light">{addon.period}</span>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan later?</h3>
              <p className="text-zion-slate-light">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">What's included in the free trial?</h3>
              <p className="text-zion-slate-light">
                The free trial includes full access to all features of the Professional plan for 14 days. No credit card required.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing?</h3>
              <p className="text-zion-slate-light">
                Yes, we offer custom pricing for enterprise customers and organizations with specific requirements. Contact our sales team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered solutions to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-zion-blue-dark font-semibold px-8 py-4 text-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold px-8 py-4 text-lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
