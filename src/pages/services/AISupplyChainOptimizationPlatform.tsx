<<<<<<< HEAD
; const AISupplyChainOptimizationPlatform: React.FC = (): JSX.Element => {; }; ]; const pricingPlans = [; {; "";"";" name: "Starter",";"";" price: "$399",";"";" period: "/month",";"";" description: "Perfect for small businesses optimizing their supply chain",";"";" features[;";"Up to 3 warehouses",";"Basic route optimization",";"Inventory tracking",";"Standard reporting",";"Email support","5GB data storage";" ],;";" popular: false;";" },;"";" {";";"";" name: "Professional",";"";" price: "$999",";"";" period: "/month",";"";" description: "Ideal for growing businesses with complex supply chain needs",";"";" features[;";"Up to 10 warehouses",";"Advanced AI optimization",";"Real-time monitoring",";"Custom dashboards",";"Priority support",";"25GB data storage",";"API access",";"Multi-currency support";" ],;";" popular: true;";" },;"";" {";";"";" name: "Enterprise",";"";" price: "$2,499",";"";" period: "/month",";"";" description: "For large enterprises with global supply chain operations",";"";" features[;";"Unlimited warehouses",";"Premium AI optimization",";"Custom development",";"24/7 dedicated support",";"Unlimited data storage",";"Advanced security",";"On-premise options",";"Custom integrations",";"White-label solutions";" ],;";" popular: false};";" ]};"";" ]}; ];";"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";"";" <SEO ";"";" title="AI-Powered Supply Chain Optimization Platform - Zion Tech Group" description="Revolutionize your supply chain with AI-powered optimization.Reduce costs, improve efficiency, and enhance customer satisfaction with intelligent logistics management.";"";" />";"";" {}";"";" <div className="relative overflow-hidden">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">";"";" <div className="text-center">";"";" <GradientHeading className="text-5xl md:text-6xl font-bold mb-6">;"";" AI-Powered Supply Chain Optimization Platform";"";" </GradientHeading>";"";" <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;";" Revolutionize your supply chain with cutting-edge AI technology.Optimize logistics, reduce costs,;"";" and enhance customer satisfaction with intelligent supply chain management.";"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <Button size="lg" className="bg-zion-purple hover:bg-zion-purple/90">;"";" Start Free Trial";"";" </Button>";"";" <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-slate-900">; Schedule Demo;" </Button>;";" </div>;";" </div>;"";" </section>";"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center mb-16">";"";" <h2 className="text-3xl font-bold text-white mb-4">Transform Your Supply Chain</h2>";"";" <p className="text-gray-300 text-lg">See measurable improvements in your logistics operations</p>;"";" </div>";";"";" <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">";"";" {benefits.map((benefit, index) => (";"";" <div key={index} className="text-center">";"";" <div className="text-4xl font-bold text-zion-cyan mb-2">{benefit.metric}</div>";"";" <p className="text-gray-300">{benefit.description}</p>;";" </div>;";" </div>;"";" </section>";"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center mb-16">";"";" <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>";"";" <p className="text-gray-300 text-lg">Everything you need for intelligent supply chain management</p>;"";" </div>";";"";" <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">";"";" {features.map((feature, index) => (";"";" <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan transition-colors">";"";" <CardHeader>";"";" <div className="flex items-center gap-3">";"";" {feature.icon}";"";" <CardTitle className="text-white">{feature.title}</CardTitle>;";" </div>;"";" </CardHeader>";"";" <CardContent>";"";" <p className="text-gray-300">{feature.description}</p>; </CardContent>;" </Card>;";" ))};";" </div>;"";" </div>";"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center mb-16">";"";" <h2 className="text-3xl font-bold text-white mb-4">Industry Use Cases</h2>";"";" <p className="text-gray-300 text-lg">Optimize supply chains across various industries</p>;"";" </div>";";"";" <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">";"";" {useCases.map((useCase, index) => (";"";" <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan transition-colors">";"";" <CardHeader>";"";" <CardTitle className="text-white">{useCase.title}</CardTitle>;"";" </CardHeader>";"";" <CardContent>";"";" <p className="text-gray-300">{useCase.description}</p>; </CardContent>;" </Card>;";" ))};";" </div>;"";" </div>";"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center mb-16">";"";" <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>";"";" <p className="text-gray-300 text-lg">Choose the plan that fits your supply chain needs</p>;"";" </div>";";"";" <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">;";" {pricingTiers.map((tier, index) => (';"";" <Card key={index} className={`relative ${tier.popular ? 'border-zion-cyan ring-2 ring-zion-cyan' : 'border-slate-700'} bg-slate-800/50`}>";"";" {tier.popular && (";"";" <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-slate-900">;";" Most Popular;"";" </Badge>";"";" )}";"";" <CardHeader className="text-center">";"";" <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>";"";" <div className="flex items-baseline justify-center gap-1">";"";" <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>";"";" <span className="text-gray-400">{tier.period}</span>";"";" </div>";"";" <CardDescription className="text-gray-300">{tier.description}</CardDescription>;"";" </CardHeader>";"";" <CardContent>";"";" <ul className="space-y-3 mb-6">";"";" {tier.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center gap-2">";"";" <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />" <span className="text-gray-300">{feature}</span>;";" </li>;"";" ))}";"";" </ul>";"";" <Button className="w-full bg-zion-purple hover:bg-zion-purple/90">; Get Started; </Button>; </CardContent>;" </Card>;";" ))};";" </div>;"";" </div>";"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center">";"";" <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Supply Chain?</h2>";"";" <p className="text-gray-300 text-lg mb-8">;"";" Join industry leaders who have already transformed their logistics operations";"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <Button size="lg" className="bg-zion-purple hover:bg-zion-purple/90">;"";" Start Free Trial";"";" </Button>";"";" <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-slate-900">; Contact Sales;" </Button>;";" </div>;";" </div>;"";" </div>";"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center">";"";" <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">";"";" <div className="text-center">";"";" <Clock className="h-12 w-12 text-zion-cyan mx-auto mb-4" />";"";" <h4 className="text-white font-semibold mb-2">24/7 Support</h4>";"";" <p className="text-gray-300">Round-the-clock assistance for all your needs</p>";"";" </div>";"";" <div className="text-center">";"";" <Users className="h-12 w-12 text-zion-cyan mx-auto mb-4" />";"";" <h4 className="text-white font-semibold mb-2">Expert Consultation</h4>";"";" <p className="text-gray-300">Get personalized guidance from our supply chain experts</p>";"";" </div>";"";" <div className="text-center">";"";" <Globe className="h-12 w-12 text-zion-cyan mx-auto mb-4" />";"";" <h4 className="text-white font-semibold mb-2">Global Reach</h4>" <p className="text-gray-300">Serving businesses worldwide with local expertise</p>;"";" </div>";"";" </div>";"";" <div className="mt-8">";"";" <p className="text-gray-300 mb-4">;"";" <strong>Contact us:</strong> +1 302 464 0950 | kleber@ziontechgroup.com";"";" </p>";"";" <p className="text-gray-300">; <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709; </p>; </div>;" </div>;";" </div>;";" </div>;"";" )};";"";" export default AISupplyChainOptimizationPlatform;'"`";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Aisupplychainoptimizationplatform() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Aisupplychainoptimizationplatform Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Aisupplychainoptimizationplatform Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your aisupplychainoptimizationplatform operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Aisupplychainoptimizationplatform Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive aisupplychainoptimizationplatform solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Aisupplychainoptimizationplatform?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered aisupplychainoptimizationplatform platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
