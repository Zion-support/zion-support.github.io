import React from 'react';
import { SEO } from '../../components/SEO';
import { GradientHeading } from '../../components/ui/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { CheckCircle, TrendingUp, BarChart3, Zap, Shield, Users, Globe, Clock } from 'lucide-react';

const AIBusinessIntelligenceDashboard: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      title: "Real-time Analytics",
      description: "Monitor business metrics in real-time with AI-powered insights and predictive analytics"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
      title: "Advanced Reporting",
      description: "Generate comprehensive reports with automated insights and actionable recommendations"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "AI-Powered Insights",
      description: "Get intelligent insights and recommendations based on your data patterns"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "Data Security",
      description: "Enterprise-grade security with role-based access control and data encryption"
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-500" />,
      title: "Team Collaboration",
      description: "Share dashboards and insights with your team for better decision-making"
    },
    {
      icon: <Globe className="h-6 w-6 text-teal-500" />,
      title: "Multi-platform Access",
      description: "Access your dashboards from anywhere with responsive web and mobile interfaces"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with BI",
      features: [
        "Up to 5 users",
        "10 data sources",
        "Basic AI insights",
        "Standard reports",
        "Email support",
        "1GB data storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with advanced BI needs",
      features: [
        "Up to 25 users",
        "Unlimited data sources",
        "Advanced AI insights",
        "Custom dashboards",
        "Priority support",
        "10GB data storage",
        "API access",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large enterprises requiring maximum scalability",
      features: [
        "Unlimited users",
        "Unlimited data sources",
        "Premium AI insights",
        "Custom development",
        "24/7 dedicated support",
        "Unlimited data storage",
        "Advanced security",
        "On-premise options",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Faster decision making with real-time insights"
    },
    {
      metric: "60%",
      description: "Reduction in manual reporting time"
    },
    {
      metric: "85%",
      description: "Improvement in data accuracy and reliability"
    },
    {
      metric: "3x",
      description: "Increase in team productivity and collaboration"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Business Intelligence Dashboard - Zion Tech Group"
        description="Transform your business data into actionable intelligence with our AI-powered BI dashboard. Real-time analytics, predictive insights, and comprehensive reporting."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <GradientHeading className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered Business Intelligence Dashboard
            </GradientHeading>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable intelligence with our cutting-edge AI-powered BI dashboard. 
              Get real-time insights, predictive analytics, and comprehensive reporting that drives better decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-slate-900">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Business Intelligence</h2>
          <p className="text-gray-300 text-lg">See measurable improvements in your business operations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">{benefit.metric}</div>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-gray-300 text-lg">Everything you need for comprehensive business intelligence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-gray-300 text-lg">Choose the plan that fits your business needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`relative ${tier.popular ? 'border-zion-cyan ring-2 ring-zion-cyan' : 'border-slate-700'} bg-slate-800/50`}>
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-slate-900">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <CardDescription className="text-gray-300">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-zion-purple hover:bg-zion-purple/90">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business Intelligence?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of businesses that have already transformed their data into actionable insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple/90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-slate-900">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-300">Round-the-clock assistance for all your needs</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Expert Consultation</h4>
              <p className="text-gray-300">Get personalized guidance from our BI experts</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Global Reach</h4>
              <p className="text-gray-300">Serving businesses worldwide with local expertise</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-300 mb-4">
              <strong>Contact us:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
            </p>
            <p className="text-gray-300">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBusinessIntelligenceDashboard;