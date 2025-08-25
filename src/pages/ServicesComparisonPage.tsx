import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
<<<<<<< HEAD
=======
import { ADVANCED_SERVICES, SERVICE_CATEGORIES, ENTERPRISE_PRICING, CONTACT_INFO } from '@/data/advancedServices';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1ab5
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  Shield, 
<<<<<<< HEAD
  Cloud, 
  Database, 
  Zap,
  DollarSign,
  Clock,
  Users,
  Globe,
  Award,
  X,
  BarChart3,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const competitorComparison = {
  "AI Process Automation": {
    ziontech: {
      price: "$2,999",
      delivery: "2-3 weeks",
      features: ["Process mapping", "RPA integration", "Analytics dashboard", "AI optimization", "24/7 support"],
      rating: 4.9,
      reviews: 156
    },
    competitors: {
      "IBM Automation": {
        price: "$8,500",
        delivery: "6-8 weeks",
        features: ["Process mapping", "RPA integration", "Basic analytics", "Email support"],
        rating: 4.2,
        reviews: 89
      },
      "Microsoft Power Automate": {
        price: "$5,200",
        delivery: "4-6 weeks",
        features: ["Process mapping", "RPA integration", "Analytics", "Phone support"],
        rating: 4.5,
        reviews: 234
      }
    }
  },
  "Zero Trust Security": {
    ziontech: {
      price: "$8,999",
      delivery: "4-6 weeks",
      features: ["Identity verification", "Device trust scoring", "Network segmentation", "Continuous monitoring", "Compliance automation"],
      rating: 4.9,
      reviews: 67
    },
    competitors: {
      "Cisco Zero Trust": {
        price: "$18,500",
        delivery: "8-12 weeks",
        features: ["Identity verification", "Device trust", "Network segmentation", "Basic monitoring"],
        rating: 4.3,
        reviews: 156
      },
      "Palo Alto Networks": {
        price: "$22,000",
        delivery: "10-14 weeks",
        features: ["Identity verification", "Device trust", "Network segmentation", "Advanced monitoring"],
        rating: 4.6,
        reviews: 203
      }
    }
  },
  "Multi-Cloud Orchestration": {
    ziontech: {
      price: "$5,499",
      delivery: "3-4 weeks",
      features: ["AWS integration", "Azure integration", "GCP integration", "Cost optimization", "Performance monitoring"],
      rating: 4.8,
      reviews: 112
    },
    competitors: {
      "HashiCorp Terraform": {
        price: "$12,000",
        delivery: "6-8 weeks",
        features: ["Multi-cloud support", "Infrastructure as code", "Basic monitoring"],
        rating: 4.4,
        reviews: 445
      },
      "VMware vRealize": {
        price: "$15,500",
        delivery: "8-10 weeks",
        features: ["Multi-cloud support", "Advanced monitoring", "Cost management"],
        rating: 4.1,
        reviews: 178
      }
    }
  },
  "Real-Time Analytics": {
    ziontech: {
      price: "$7,999",
      delivery: "5-6 weeks",
      features: ["Streaming analytics", "Sub-second latency", "ML insights", "Custom dashboards", "API access"],
      rating: 4.8,
      reviews: 34
    },
    competitors: {
      "Apache Kafka": {
        price: "$18,000",
        delivery: "8-12 weeks",
        features: ["Streaming platform", "High throughput", "Basic analytics"],
        rating: 4.2,
        reviews: 567
      },
      "AWS Kinesis": {
        price: "$25,000",
        delivery: "6-8 weeks",
        features: ["Streaming analytics", "Managed service", "ML integration"],
        rating: 4.5,
        reviews: 892
      }
    }
  },
  "Enterprise Blockchain": {
    ziontech: {
      price: "$14,999",
      delivery: "8-10 weeks",
      features: ["Custom blockchain", "Smart contracts", "Supply chain integration", "Audited security", "24/7 support"],
      rating: 4.8,
      reviews: 18
    },
    competitors: {
      "IBM Blockchain": {
        price: "$35,000",
        delivery: "16-20 weeks",
        features: ["Hyperledger Fabric", "Smart contracts", "Basic support"],
        rating: 4.1,
        reviews: 89
      },
      "Microsoft Azure Blockchain": {
        price: "$28,500",
        delivery: "12-16 weeks",
        features: ["Ethereum integration", "Smart contracts", "Managed service"],
        rating: 4.3,
        reviews: 156
      }
    }
  }
};

const featureMatrix = [
  {
    feature: "24/7 Support",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "Custom Development",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "AI Integration",
    ziontech: true,
    competitors: [false, true, false, false, false]
  },
  {
    feature: "Compliance Automation",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "Real-time Monitoring",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "Multi-language Support",
    ziontech: true,
    competitors: [true, false, false, false, false]
  },
  {
    feature: "API Access",
    ziontech: true,
    competitors: [false, false, false, false, false]
  },
  {
    feature: "Training & Documentation",
    ziontech: true,
    competitors: [false, false, false, false, false]
  }
];

const marketAnalysis = [
  {
    metric: "Average Cost Savings",
    ziontech: "46%",
    industry: "15%",
    advantage: "31% better"
  },
  {
    metric: "Implementation Speed",
    ziontech: "3-6 weeks",
    industry: "8-16 weeks",
    advantage: "2.5x faster"
  },
  {
    metric: "Customer Satisfaction",
    ziontech: "4.9/5",
    industry: "4.2/5",
    advantage: "17% higher"
  },
  {
    metric: "Support Response Time",
    ziontech: "< 2 hours",
    industry: "24-48 hours",
    advantage: "12x faster"
  },
  {
    metric: "Customization Level",
    ziontech: "100%",
    industry: "40-60%",
    advantage: "67% more flexible"
  }
];

export default function ServicesComparisonPage() {
  const [selectedService, setSelectedService] = useState<string>("AI Process Automation");

  const getCompetitorNames = (serviceKey: string) => {
    return Object.keys(competitorComparison[serviceKey as keyof typeof competitorComparison]?.competitors || {});
  };

  const renderFeatureComparison = (serviceKey: string) => {
    const service = competitorComparison[serviceKey as keyof typeof competitorComparison];
    if (!service) return null;

    const competitorNames = getCompetitorNames(serviceKey);
    
    return (
      <div className="space-y-6">
        {/* ZionTech vs Competitors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ZionTech */}
          <Card className="bg-gradient-to-br from-zion-purple to-zion-purple-dark text-white border-zion-purple">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                ZionTech
              </CardTitle>
              <div className="text-3xl font-bold text-zion-cyan">{service.ziontech.price}</div>
              <div className="text-zion-slate-light">Delivery: {service.ziontech.delivery}</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {service.ziontech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-zion-purple-light">
                <div className="flex items-center gap-2 text-zion-cyan">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{service.ziontech.rating}/5</span>
                  <span className="text-zion-slate-light">({service.ziontech.reviews} reviews)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competitors */}
          {competitorNames.map((competitor, idx) => (
            <Card key={idx} className="bg-zion-blue-dark border-zion-blue-light text-white">
              <CardHeader>
                <CardTitle>{competitor}</CardTitle>
                <div className="text-3xl font-bold text-zion-slate-light">{service.competitors[competitor].price}</div>
                <div className="text-zion-slate-light">Delivery: {service.competitors[competitor].delivery}</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.competitors[competitor].features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-zion-blue-light">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{service.competitors[competitor].rating}/5</span>
                    <span className="text-zion-slate-light">({service.competitors[competitor].reviews} reviews)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Savings Calculation */}
        <Card className="bg-zion-blue-dark border-zion-blue-light text-white">
          <CardHeader>
            <CardTitle className="text-zion-cyan">Cost Savings Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {competitorNames.map((competitor, idx) => {
                const ziontechPrice = parseInt(service.ziontech.price.replace('$', '').replace(',', ''));
                const competitorPrice = parseInt(service.competitors[competitor].price.replace('$', '').replace(',', ''));
                const savings = competitorPrice - ziontechPrice;
                const savingsPercent = Math.round((savings / competitorPrice) * 100);
                
                return (
                  <div key={idx} className="text-center p-4 bg-zion-blue rounded-lg">
                    <div className="text-lg font-semibold text-white mb-2">vs {competitor}</div>
                    <div className="text-2xl font-bold text-green-400">${savings.toLocaleString()}</div>
                    <div className="text-zion-cyan">{savingsPercent}% savings</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Services Comparison - ZionTech vs Competitors" 
        description="Compare ZionTech services with industry competitors. See how we deliver better value, faster implementation, and superior support at competitive prices."
        keywords="service comparison, competitive analysis, pricing comparison, IT services comparison, AI services comparison"
=======
  Zap, 
  Brain, 
  Users,
  Globe,
  Clock,
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState('ai-automation');

  const comparisonData = {
    'ai-automation': {
      title: 'AI Business Process Automation',
      ourService: {
        name: 'Zion AI Business Process Automation Suite',
        price: '$299/month',
        features: [
          'AI-powered workflow automation',
          '5 pre-built automation templates',
          'Custom workflow builder',
          'Real-time analytics dashboard',
          '24/7 AI monitoring',
          'Multi-platform integration',
          'Advanced error handling',
          'Scalable architecture'
        ],
        benefits: [
          'Reduce manual tasks by 80%',
          'Improve process efficiency by 60%',
          'Real-time insights and reporting',
          'Customizable to any business process'
        ]
      },
      competitors: [
        {
          name: 'UiPath',
          price: '$420/month',
          features: [
            'RPA automation',
            'Basic templates',
            'Limited customization',
            'Standard monitoring',
            'Business hours support',
            'Basic integrations',
            'Standard error handling',
            'Fixed architecture'
          ],
          benefits: [
            'Industry standard RPA',
            'Good for simple processes',
            'Established platform'
          ]
        },
        {
          name: 'Automation Anywhere',
          price: '$750/month',
          features: [
            'RPA automation',
            'Template library',
            'Moderate customization',
            'Enhanced monitoring',
            'Extended support hours',
            'Multiple integrations',
            'Advanced error handling',
            'Scalable options'
          ],
          benefits: [
            'Enterprise-grade RPA',
            'Good support',
            'Multiple deployment options'
          ]
        }
      ]
    },
    'cybersecurity': {
      title: 'AI-Powered Cybersecurity',
      ourService: {
        name: 'Zion AI Threat Detection System',
        price: '$799/month',
        features: [
          'AI-powered threat detection',
          'Real-time monitoring',
          'Behavioral analysis',
          'Automated response',
          '24/7 security operations',
          'Advanced threat intelligence',
          'Compliance reporting',
          'Custom security policies'
        ],
        benefits: [
          'Detect threats 10x faster',
          'Reduce false positives by 90%',
          'Automated incident response',
          'Continuous learning and adaptation'
        ]
      },
      competitors: [
        {
          name: 'CrowdStrike',
          price: '$1,200/month',
          features: [
            'Endpoint protection',
            'Threat detection',
            'Basic AI capabilities',
            'Manual response',
            'Business hours support',
            'Standard intelligence',
            'Basic reporting',
            'Pre-defined policies'
          ],
          benefits: [
            'Established security platform',
            'Good endpoint coverage',
            'Industry recognition'
          ]
        },
        {
          name: 'SentinelOne',
          price: '$950/month',
          features: [
            'Endpoint security',
            'AI threat detection',
            'Automated response',
            '24/7 monitoring',
            'Extended support',
            'Threat intelligence',
            'Compliance features',
            'Policy management'
          ],
          benefits: [
            'Strong AI capabilities',
            'Good automation',
            'Comprehensive coverage'
          ]
        }
      ]
    },
    'cloud-optimization': {
      title: 'AI Cloud Cost Optimization',
      ourService: {
        name: 'Zion AI Cloud Cost Optimization Engine',
        price: '$399/month',
        features: [
          'Multi-cloud optimization',
          'AI-powered cost prediction',
          'Automated resource scaling',
          'Real-time cost monitoring',
          'Custom optimization rules',
          'Cost allocation analysis',
          'Automated cost alerts',
          'ROI tracking and reporting'
        ],
        benefits: [
          'Reduce cloud costs by 30-50%',
          'Automated optimization',
          'Multi-cloud support',
          'Predictive cost management'
        ]
      },
      competitors: [
        {
          name: 'CloudHealth',
          price: '$800/month',
          features: [
            'Cost monitoring',
            'Basic optimization',
            'Manual scaling',
            'Cost reporting',
            'Limited automation',
            'Basic analysis',
            'Standard alerts',
            'Basic ROI tracking'
          ],
          benefits: [
            'Established platform',
            'Good reporting',
            'Multi-cloud support'
          ]
        },
        {
          name: 'CloudCheckr',
          price: '$600/month',
          features: [
            'Cost management',
            'Resource optimization',
            'Automated scaling',
            'Cost monitoring',
            'Policy management',
            'Cost analysis',
            'Alert system',
            'Compliance features'
          ],
          benefits: [
            'Good automation',
            'Policy-based management',
            'Comprehensive monitoring'
          ]
        }
      ]
    }
  };

  const selectedComparison = comparisonData[selectedCategory as keyof typeof comparisonData];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services Comparison - Zion Tech Group vs Competitors" 
        description="Compare our AI-powered services with industry competitors. See how Zion Tech Group delivers superior value, features, and ROI for your business."
        keywords="services comparison, AI services, cybersecurity, cloud optimization, Zion Tech Group, competitive analysis"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1ab5
        canonical="https://ziontechgroup.com/services-comparison"
      />

      {/* Hero Section */}
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ZionTech vs Competitors
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            See how our innovative technology services stack up against industry leaders. 
            Better features, faster delivery, and superior support at competitive prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <TrendingUp className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <BarChart3 className="w-5 h-5 mr-2" />
              Download Comparison PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={Object.keys(competitorComparison)[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-zion-blue-dark border-zion-blue-light">
              {Object.keys(competitorComparison).map((service) => (
                <TabsTrigger 
                  key={service} 
                  value={service}
                  className="text-white data-[state=active]:bg-zion-purple data-[state=active]:text-white"
                >
                  {service.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.keys(competitorComparison).map((service) => (
              <TabsContent key={service} value={service} className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{service}</h2>
                  <p className="text-zion-slate-light text-lg">
                    Comprehensive comparison with industry competitors
                  </p>
                </div>
                {renderFeatureComparison(service)}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Feature Matrix */}
      <div className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Feature Comparison Matrix</h2>
            <p className="text-zion-slate-light text-lg">
              See how our comprehensive feature set compares to industry standards
            </p>
          </div>

          <Card className="bg-zion-blue border-zion-blue-light text-white">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-zion-blue-light border-b border-zion-blue-light">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold text-zion-cyan">ZionTech</th>
                      <th className="text-center p-4 font-semibold">Industry Average</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureMatrix.map((feature, idx) => (
                      <tr key={idx} className="border-b border-zion-blue-light">
                        <td className="p-4 font-medium">{feature.feature}</td>
                        <td className="p-4 text-center">
                          {feature.ziontech ? (
                            <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-zion-slate-light">
                            {Math.round((feature.competitors.filter(c => c).length / feature.competitors.length) * 100)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Market Performance Analysis</h2>
            <p className="text-zion-slate-light text-lg">
              How ZionTech outperforms industry standards across key metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketAnalysis.map((metric, idx) => (
              <Card key={idx} className="bg-zion-blue-dark border-zion-blue-light text-white">
                <CardHeader>
                  <CardTitle className="text-zion-cyan">{metric.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">ZionTech:</span>
                      <span className="font-bold text-white">{metric.ziontech}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Industry:</span>
                      <span className="font-bold text-zion-slate-light">{metric.industry}</span>
                    </div>
                    <div className="text-center pt-2 border-t border-zion-blue-light">
                      <Badge className="bg-green-500 text-white">{metric.advantage}</Badge>
                    </div>
                  </div>
=======
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services Comparison
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            See how Zion Tech Group's AI-powered solutions deliver superior value, 
            features, and ROI compared to industry competitors
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
              <TrendingUp className="w-5 h-5 mr-2" />
              View All Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-12 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              Choose Service Category
            </h2>
            <p className="text-zion-slate-dark">
              Select a service category to compare features, pricing, and benefits
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(comparisonData).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-zion-cyan text-zion-blue" : "border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white"}
                onClick={() => setSelectedCategory(category)}
              >
                {comparisonData[category as keyof typeof comparisonData].title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">
              {selectedComparison.title} - Feature Comparison
            </h2>
            <p className="text-xl text-zion-slate-dark max-w-3xl mx-auto">
              See how our AI-powered solution stacks up against the competition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Zion Tech Group */}
            <Card className="relative border-2 border-zion-cyan shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-zion-cyan text-zion-blue px-4 py-2 text-sm font-semibold">
                  🏆 Zion Tech Group
                </Badge>
              </div>
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl text-zion-blue mb-2">
                  {selectedComparison.ourService.name}
                </CardTitle>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {selectedComparison.ourService.price}
                </div>
                <div className="text-zion-slate-dark">per month</div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-blue mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedComparison.ourService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-zion-slate-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-blue mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedComparison.ourService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-zion-slate-dark">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Competitors */}
            {selectedComparison.competitors.map((competitor, index) => (
              <Card key={index} className="border-zion-blue-light">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-zion-blue mb-2">
                    {competitor.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-zion-slate-dark mb-2">
                    {competitor.price}
                  </div>
                  <div className="text-zion-slate-dark text-sm">per month</div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-zion-blue mb-3">Features</h4>
                    <ul className="space-y-2">
                      {competitor.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-zion-slate-dark mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-zion-slate-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-zion-blue mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {competitor.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <Star className="w-4 h-4 text-zion-slate-dark mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-zion-slate-dark">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                    Learn More
                  </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1ab5
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the ZionTech Difference?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have chosen ZionTech for superior technology solutions, 
            faster implementation, and better value.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <X className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Users className="w-5 h-5 mr-2" />
              Talk to Sales Team
            </Button>
          </div>
        </div>
      </div>
=======
      </section>

      {/* Why Choose Zion Section */}
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-dark max-w-3xl mx-auto">
              Our AI-first approach and deep industry expertise deliver superior value 
              and results compared to traditional solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">AI-First Design</h3>
              <p className="text-zion-slate-dark">
                Built from the ground up with artificial intelligence, not retrofitted
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Better ROI</h3>
              <p className="text-zion-slate-dark">
                Lower costs with higher performance and faster implementation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Faster Deployment</h3>
              <p className="text-zion-slate-dark">
                Get up and running in days, not months
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-3">Expert Support</h3>
              <p className="text-zion-slate-dark">
                24/7 support from certified AI and IT professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Get in touch with our team to discuss how our AI-powered solutions 
              can transform your business and deliver superior ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <a href={`tel:${CONTACT_INFO.mobile}`} className="text-zion-slate-light hover:text-zion-cyan">
                      {CONTACT_INFO.mobile}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-zion-slate-light hover:text-zion-cyan">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-zion-slate-light">{CONTACT_INFO.address}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-zion-cyan mr-4" />
                  <div>
                    <div className="text-white font-semibold">Website</div>
                    <a 
                      href={CONTACT_INFO.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zion-slate-light hover:text-zion-cyan flex items-center"
                    >
                      {CONTACT_INFO.website}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-zion-blue mb-6">Request a Demo</h3>
              <p className="text-zion-slate-dark mb-6">
                See our AI-powered solutions in action. Schedule a personalized demo 
                to understand how we can transform your business.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
                
                <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Sales Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1ab5
    </div>
  );
}