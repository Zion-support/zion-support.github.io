'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Phone, Mail } from 'lucide-react'

constPricingPage: React.FC= () =>{constpricingPlans= [
    {
      nam,
  e: 'Starter',
      price: '$29 9',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: []
        'Up to5AI services',
        'Basic IT support',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Get Started'
   },
    {name: 'Professional',
      price: '$59 9',
      period: '/month',
      description: 'Ideal for growing companies',
      features: []
        'Up to 15AI services',
        'Priority IT support',
        'Phone & email support',
        'Advanced security',
        'Weekly reports',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Most Popular'
   },
    {name: 'Enterprise',
      price: '$1,29 9',
      period: '/month',
      description: 'For large organizations',
      features: []
        'Unlimited AI services',
        '2 4/7 IT support',
        'Dedicated support team',
        'Enterprise security',
        'Real-time reports',
        'Custom analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  constaddOns= []
    {name: 'AI Model Training',
      price: '$19 9/month',
      description: 'Custom AI model training for your specific needs'
   },
    {name: 'Additional Storage',
      price: '$9 9/month',
      description: 'Extra1TB of cloud storage'
   },
    {name: 'Priority Support',
      price: '$14 9/month',
      description: '2 4/7 priority support with 1-hour response time'
   },
    {name: 'Custom Development',
      price: '$29 9/hour',
      description: 'Custom feature development and integrations'
    }
  ]

  constfaqs= []
    {question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or do wngrade your plan at any time. Changes take effect on your next billing cycle.'
   },
    {question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for more information.'
   },
    {question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
    },
    {}
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    }
  ]

const Page = $2;
export default Page;