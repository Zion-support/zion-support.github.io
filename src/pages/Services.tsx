import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, Shield, Database, TrendingUp, Cpu, Zap, Globe, MessageSquare, 
  BarChart3, FileText, CheckCircle, Star, Phone, Mail, MapPin, ExternalLink, 
  Lock, Wifi, Server, Smartphone, Code, Monitor, Users, Target, Rocket, 
  Lightbulb, Eye, Building, Calendar, CreditCard, Users as UsersIcon,
  Cloud, Settings, HardDrive, ArrowRight
} from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      name: "Micro SAAS Solutions",
      description: "Affordable, specialized software solutions for modern businesses",
      icon: <Globe className="h-12 w-12 text-blue-500"/>,
      services: [
        {
          title: "ZionCRM Pro",
          description: "Complete customer relationship management solution",
          price: "$29/month",
          badge: "Popular",
          link: "https://ziontechgroup.com/zion-crm",
          icon: <UsersIcon className="h-6 w-6 text-blue-500"/>
        },
        {
          title: "ZionProject Hub",
          description: "Project management platform with team collaboration",
          price: "$19/month",
          badge: "Essential",
          link: "https://ziontechgroup.com/zion-project",
          icon: <Calendar className="h-6 w-6 text-green-500"/>
        },
        {
          title: "ZionAnalytics",
          description: "Business intelligence platform with real-time dashboards",
          price: "$39/month",
          badge: "Insightful",
          link: "https://ziontechgroup.com/zion-analytics",
          icon: <BarChart3 className="h-6 w-6 text-purple-500"/>
        },
        {
          title: "ZionAI Writer",
          description: "AI-powered content generation platform",
          price: "$39/month",
          badge: "AI-Powered",
          link: "https://ziontechgroup.com/zion-ai-writer",
          icon: <Brain className="h-6 w-6 text-rose-500"/>
        },
        {
          title: "ZionWallet",
          description: "Secure cryptocurrency wallet with DeFi integration",
          price: "Free",
          badge: "Web3 Ready",
          link: "https://ziontechgroup.com/zion-wallet",
          icon: <Globe className="h-6 w-6 text-emerald-500"/>
        },
        {
          title: "ZionQuantum",
          description: "Quantum computing platform for complex problem solving",
          price: "$299/month",
          badge: "Cutting-Edge",
          link: "https://ziontechgroup.com/zion-quantum",
          icon: <Cpu className="h-6 w-6 text-indigo-500"/>
        }
      ],
      color: "blue",
      link: "/micro-saas"
    },
    {
      name: "IT Services & Infrastructure",
      description: "Comprehensive IT solutions for enterprise and small businesses",
      icon: <Server className="h-12 w-12 text-teal-500"/>,
      services: [
        {
          title: "Cloud Infrastructure Management",
          description: "Multi-cloud services with 24/7 monitoring",
          price: "$1,500 - $8,000/month",
          badge: "Popular",
          link: "https://ziontechgroup.com/cloud-infrastructure",
          icon: <Cloud className="h-6 w-6 text-blue-500"/>
        },
        {
          title: "Cybersecurity Services",
          description: "Complete security solutions and threat detection",
          price: "$2,000 - $15,000",
          badge: "Premium",
          link: "https://ziontechgroup.com/cybersecurity",
          icon: <Shield className="h-6 w-6 text-red-500"/>
        },
        {
          title: "DevOps & CI/CD",
          description: "Automated development and deployment pipelines",
          price: "$3,000 - $12,000/month",
          badge: "Efficient",
          link: "https://ziontechgroup.com/devops",
          icon: <Zap className="h-6 w-6 text-yellow-500"/>
        },
        {
          title: "Network Infrastructure",
          description: "Enterprise-grade network solutions",
          price: "$2,500 - $20,000",
          badge: "Robust",
          link: "https://ziontechgroup.com/network-infrastructure",
          icon: <Globe className="h-6 w-6 text-purple-500"/>
        },
        {
          title: "Managed IT Services",
          description: "Complete IT management and support",
          price: "$500 - $5,000/month",
          badge: "New",
          link: "https://ziontechgroup.com/managed-it",
          icon: <Settings className="h-6 w-6 text-indigo-500"/>
        },
        {
          title: "Disaster Recovery",
          description: "Business continuity and recovery solutions",
          price: "$2,000 - $15,000",
          badge: "Critical",
          link: "https://ziontechgroup.com/disaster-recovery",
          icon: <HardDrive className="h-6 w-6 text-red-500"/>
        }
      ],
      color: "teal",
      link: "/it-services"
    },
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: <Brain className="h-12 w-12 text-pink-500"/>,
      services: [
        {
          title: "AI Strategy & Consulting",
          description: "Comprehensive AI strategy development",
          price: "$150/hour",
          badge: "Foundation",
          link: "https://ziontechgroup.com/ai-strategy",
          icon: <Brain className="h-6 w-6 text-pink-500"/>
        },
        {
          title: "Machine Learning Solutions",
          description: "Custom ML models and algorithms",
          price: "$5,000 - $200,000",
          badge: "Core",
          link: "https://ziontechgroup.com/machine-learning",
          icon: <Cpu className="h-6 w-6 text-blue-500"/>
        },
        {
          title: "NLP & Text Analytics",
          description: "Advanced natural language processing",
          price: "$8,000 - $250,000",
          badge: "Advanced",
          link: "https://ziontechgroup.com/nlp-solutions",
          icon: <MessageSquare className="h-6 w-6 text-green-500"/>
        },
        {
          title: "Computer Vision & Image AI",
          description: "Visual AI solutions for automation",
          price: "$12,000 - $300,000",
          badge: "Innovative",
          link: "https://ziontechgroup.com/computer-vision",
          icon: <Eye className="h-6 w-6 text-purple-500"/>
        },
        {
          title: "AI Process Automation",
          description: "Intelligent workflow automation",
          price: "$4,000 - $150,000",
          badge: "Efficient",
          link: "https://ziontechgroup.com/ai-automation",
          icon: <Zap className="h-6 w-6 text-yellow-500"/>
        },
        {
          title: "AI Infrastructure & MLOps",
          description: "Enterprise AI deployment solutions",
          price: "$15,000 - $500,000",
          badge: "Enterprise",
          link: "https://ziontechgroup.com/ai-infrastructure",
          icon: <Server className="h-6 w-6 text-indigo-500"/>
        }
      ],
      color: "pink",
      link: "/ai-services"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        hover: "hover:bg-blue-100",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-200",
        text: "text-teal-600",
        hover: "hover:bg-teal-100",
        button: "bg-teal-600 hover:bg-teal-700"
      },
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-200",
        text: "text-pink-600",
        hover: "hover:bg-pink-100",
        button: "bg-pink-600 hover:bg-pink-700"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including micro SAAS solutions, IT infrastructure, and AI services. Transform your business with Zion Tech Group."
        keywords="technology services, micro SAAS, IT services, AI services, business solutions, digital transformation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Comprehensive technology solutions including micro SAAS platforms, IT infrastructure, and cutting-edge AI services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Rocket className="h-5 w-5 mr-2"/>
                Explore Services
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold">
                <Phone className="h-5 w-5 mr-2"/>
                Get Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-blue-400/30">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400"/>
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400"/>
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400"/>
                <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From micro SAAS solutions to enterprise AI infrastructure, we provide comprehensive technology services 
              to help your business thrive in the digital age.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div key={index} className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`${colors.bg} p-3 rounded-xl`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{category.name}</h3>
                      <p className="text-lg text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start mb-3">
                            <div className={`${colors.bg} p-2 rounded-lg`}>
                              {service.icon}
                            </div>
                            {service.badge && (
                              <Badge className={`${colors.text} ${colors.bg} border-0`}>
                                {service.badge}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-3">
                          <div className="text-center mb-4">
                            <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                          </div>
                        </CardContent>
                        <CardHeader className="pt-0">
                          <Button asChild className={`w-full ${colors.button} text-white`}>
                            <a href={service.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2"/>
                              Learn More
                            </a>
                          </Button>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button asChild className={`${colors.button} text-white px-8 py-3 text-lg`}>
                      <a href={category.link}>
                        View All {category.name}
                        <ArrowRight className="h-5 w-5 ml-2"/>
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Start with a consultation and see how our technology services can streamline your operations, 
              improve productivity, and drive innovation across your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Rocket className="h-5 w-5 mr-2"/>
                Start Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold">
                <Phone className="h-5 w-5 mr-2"/>
                Call +1 302 464 0950
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

