'use client';
import {CheckCircle, Phone, Star, BarChart} from 'lucide-react';
import React from 'react';

constSmartAnalyticsPage: React.FC= () =>{constfeatures= [
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business performance with live dashboards that update automatically and provide instant insights.',
      benefit: 'Make decisions10x faster'
   },
    {icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and industry benchmarks.',
      benefit: 'Discover hidden opportunities'
   },
    {icon: Target,
      title: 'Custom Metrics',
      description: 'Track exactly what matters to your business with customizable KPIs and automated reporting.',
      benefit: 'Focus on what drives growth'
   },
    {icon: Zap,
      title: 'Automated Alerts',
      description: 'Get instant notifications when important metrics change or when action is needed.',
      benefit: 'Never miss critical changes'
   },
    {icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and reports with your team with role-based access and collaborative features.',
      benefit: 'Align your entire organization'
   },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, access controls, and compliance with industry standards.',
      benefit: '10 0% data protection'
   }
  ];

  constpricingPlans= [
    {name: 'Starter',
      price: '$19 9',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to5data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account',
        '3 0-day data retention'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$39 9',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 2 0 data sources',
        'Advanced dashboards',
        'AI-powered insights',
        'Priority support',
        'Up to 10users',
        '1-year data retention',
        'Custom metrics',
        'API access'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$79 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced AI analytics',
        'Dedicated support',
        'Unlimited users',
        'Unlimited data retention',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
   }
  ];

  constintegrations= [
    {name: 'Google Analytics', icon: '📊', description: 'Website traffic and behavior'},
    {name: 'Salesforce', icon: '💼', description: 'CRM and sales data'},
    {name: 'HubSpot', icon: '🎯', description: 'Marketing automation'},
    {name: 'Shopify', icon: '🛒', description: 'E-commerce analytics'},
    {name: 'Facebook Ads', icon: '📱', description: 'Social media advertising'},
    {name: 'Stripe', icon: '💳', description: 'Payment processing'},
    {name: 'Mailchimp', icon: '📧', description: 'Email marketing'},
    {name: 'Slack', icon: '💬', description: 'Team communication'}
  ];

  consttestimonials= [
    {name: 'Alex Thompson',
      company: 'GrowthCo',
      role: 'CEO',
      content: 'Smart Analytics helped us identify a 3 0% revenue opportunity we never knew existed. The AI insights are game-changing.',
      rating:5},
    {name: 'Maria Garcia',
      company: 'Digital Marketing Pro',
      role: 'Marketing Director',
      content: 'We can now track ROI across all channels in real-time. Our marketing efficiency improved by 5 0% in just2months.',
      rating:5},
    {name: 'James Wilson',
      company: 'E-commerce Solutions',
      role: 'Operations Manager',
      content: 'The automated alerts saved us from a potential crisis. We caught a40% drop in conversions within minutes.',
      rating:5}
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">{/* HeroSection */}
    <sectionclassName="container mx-autopx-4py-16pt-24"><divclassName="text-centermb-16"><divclassName="inline-flex items-center justify-center w-20h-20bg-gradient-to-r from-cyan-40 0to-purple-500rounded-fullmb-6"><BarChartclassName="w-10h-10text-white" /></di><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">Smart Analytics
        </h><spanclassName="text-xlmd:text-2 xltext-cyan-400mb-8font-medium"></className="text-xlmd:text-2 xltext-cyan-400mb-8font-medium">AI-Powered Business Intelligence
        </p><spanclassName="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed"></className="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed">Transform your data into actionable insights with our AI-powered analytics platform. 
            Get real-time dashboards, predictive analytics, and intelligent recommendations that 
            drive growth and optimize performance.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Get Free Demo
          </a></di></di>{/* KeyBenefits */}
      <divclassName="grid grid-cols-1 md:grid-cols-4 gap-8mb-16"><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">10x</di><divclassName="text-whitefont-semiboldmb-2">FasterDecisions</di><divclassName="text-gray-300text-sm">Real-time insights forinstantaction</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-purple-400mb-2">50%</di><divclassName="text-whitefont-semiboldmb-2">BetterPerformance</di><divclassName="text-gray-300text-sm">AI recommendationsimproveresults</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-green-400mb-2">30%</di><divclassName="text-whitefont-semiboldmb-2">RevenueGrowth</di><divclassName="text-gray-300text-sm">Identifyhiddenopportunities</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-orange-400mb-2">100%</di><divclassName="text-whitefont-semiboldmb-2">DataSecurity</di><divclassName="text-gray-300text-sm">Enterprise-gradeprotection</di></di></di>{/* FeaturesSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Powerful Analytics Features
        </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{features.map((featureindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20 hover:border-cyan-40 0/40transition-allduration-300"><feature.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4leading-relaxed">{feature.description}</p><divclassName="text-cyan-400font-semiboldtext-sm">{feature.benefit}</di></di>))}
        </di></sectio>{/* IntegrationsSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Connect All Your Data Sources
        </h><divclassName="grid grid-cols-2md:grid-cols-4gap-6">{integrations.map((integrationindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20text-centerhover:border-cyan-40 0/40transition-allduration-300"><divclassName="text-4xlmb-3">{integration.icon}</di><h3className="text-lg font-boldtext-whitemb-2">{integration.name}</h><pclassName="text-gray-300text-sm">{integration.description}</p></di>))}
        </di></sectio>{/* PricingSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Simple, Transparent Pricing
        </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricingPlans.map((planindex) => (
           <divkey={index} className={`bg-slate-80 0/50backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300${
                plan.popular 
                  ? 'border-cyan-400scale-10 5' 
                   : 'border-slate-700 hover:border-cyan-50 0/5 0'
            }`}>{plan.popular && (
                <divclassName="bg-cyan-400text-slate-900px-4 py-2 rounded-full text-sm font-semiboldtext-centermb-4">Most Popular
                </di>)}
              <h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-6">{plan.description}</p><divclassName="mb-6"><spanclassName="text-4 xlfont-boldtext-white">{plan.price}</spa><spanclassName="text-gray-300">{plan.period}</spa></di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                  </l>))}
              </u>< className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-40 0 to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}></ className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}>Get Started
              </butto></di>))}
        </di></sectio>{/* Testimonials */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">What Our Customers Say
        </h><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                 <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
              </di><pclassName="text-gray-300mb-4italic">"{testimonial.content}"</p><di v><divclassName="font-semiboldtext-white">{testimonial.name}</di><divclassName="text-cyan-400text-sm">{testimonial.role}</di><divclassName="text-gray-400text-sm">{testimonial.company}</di></di></di>))}
        </di></sectio>{/* CTASection */}
      <sectionclassName="text-center bg-gradient-to-r from-cyan-50 0/10to-purple-50 0/10rounded-lg p-12border border-cyan-500/20"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Ready to Unlock Your Data's Potential?
        </h><spanclassName="text-lg text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-lg text-gray-300mb-8 max-w-2xlmx-auto">Join thousands of businesses using Smart Analytics to make data-driven decisions 
            and accelerate growth.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial
          </a></di></sectio></sectio></di>
  );
};

export default SmartAnalyticsPage;