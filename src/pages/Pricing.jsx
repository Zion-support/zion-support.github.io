import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Brain, Cloud, Users, MessageCircle, FileText } from "lucide-react";

const Pricing = () => {
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
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "AI Content Generation (2000 credits/month)",
        "AI Code Assistant (Advanced)",
        "AI Data Analytics Platform",
        "AI Threat Detection",
        "Multi-Cloud Management",
        "AI-Powered CRM",
        "Business Process Automation",
        "AI Meeting Assistant (Unlimited)",
        "AI Translation (100+ languages)",
        "24/7 Support",
        "Custom Integrations",
        "API Access (10000 calls/month)",
        "Advanced Security Features"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/signup?plan=business"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Everything in Business",
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "Zero Trust Security Suite",
        "Edge Computing Solutions",
        "AI Market Research Platform",
        "AI Legal Document Review",
        "AI Financial Advisor",
        "AI Healthcare Assistant",
        "Dedicated Account Manager",
        "Custom Development",
        "On-Premise Deployment",
        "SLA Guarantees",
        "Compliance Certifications"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      description: "Custom AI models, machine learning solutions, and predictive analytics"
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8 text-green-400" />,
      description: "Cloud infrastructure, CI/CD pipelines, and deployment automation"
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="h-8 w-8 text-red-400" />,
      description: "Security audits, threat detection, and compliance solutions"
    },
    {
      name: "Digital Transformation",
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      description: "Strategic consulting and process optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <Star className="h-12 w-12 text-blue-400"/>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your AI and technology needs. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all ${
                  tier.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <CardDescription className="text-gray-400">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    asChild 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  >
                    <Link to={tier.link}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Service Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Service Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((category, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-slate-800/50 border-slate-700 max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-white mb-4">
                  Ready to Get Started?
                </CardTitle>
                <CardDescription className="text-xl text-gray-300">
                  Join thousands of businesses already using Zion's AI-powered solutions to accelerate growth, 
                  improve efficiency, and stay ahead of the competition.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-600/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-2">14 Days</div>
                    <div className="text-blue-400/70">Free Trial</div>
                  </div>
                  <div className="bg-blue-600/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-blue-400/70">Expert Support</div>
                  </div>
                  <div className="bg-blue-600/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-2">99.9%</div>
                    <div className="text-blue-400/70">Uptime SLA</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/signup">
                    Start Free Trial
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                  <Link to="/contact">
                    <MessageCircle className="h-5 w-5 mr-2"/>
                    Contact Sales
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">What's included in the free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    All plans include a 14-day free trial with full access to all features. 
                    No credit card required. You can upgrade, downgrade, or cancel anytime.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Can I change my plan later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                    and we'll prorate any billing adjustments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Do you offer enterprise discounts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, we offer volume discounts for enterprise customers. Contact our sales team 
                    for custom pricing and dedicated support options.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">What support options are available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    All plans include email support. Professional and Business plans include priority support, 
                    while Enterprise plans include 24/7 dedicated support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
