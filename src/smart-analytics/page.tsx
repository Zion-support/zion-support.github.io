'use client'
import { Brain, BarChart, Target } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, Phone, BarChart } from 'lucide-react'

constSmartAnalyticsPage: React.FC= () =>{constfeatures= [
    {
      ico,
  n: BarChart,
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
      benefit: '100% data protection'
    }
  ]

  constpricingPlans= []
    {name: 'Starter',
      price: '$19 9',
      period: '/month',
      description: 'Perfect for small businesses',
      features: []
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
      features: []
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
      features: []
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
  ]

  const integrations = $2;
export default Page;
