'use client'
import { Brain, BarChart, Target } from 'lucide-react'
import React from 'react'
import { CheckCircle, Star, Phone, BarChart } from 'lucide-react'

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
      benefit: '100% data protection'
    }
  ]

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
  ]

  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Website traffic and behavior' },
    { name: 'Salesforce', icon: '💼', description: 'CRM and sales data' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing automation' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce analytics' },
    { name: 'Facebook Ads', icon: '📱', description: 'Social media advertising' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing' },
    { name: 'Slack', icon: '💬', description: 'Team communication' }
  ]

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
      content: 'The automated alerts saved us from a potential crisis. We caught a 40% drop in conversions within minutes.',
      rating: 5
    }
  ]

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page;