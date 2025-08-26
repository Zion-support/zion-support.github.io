import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  Users, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Award, 
  Globe
} from 'lucide-react';
import { SERVICE_PRICING_TIERS, CONTACT_INFO } from '../data/comprehensiveServices';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: selectedPlan === 'monthly' ? 99 : 990,
      period: selectedPlan === 'monthly' ? 'month' : 'year',
      features: [
        'Up to 5 users',
        'Basic AI services',
        'Email support',
        'Standard security',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: selectedPlan === 'monthly' ? 299 : 2990,
      period: selectedPlan === 'monthly' ? 'month' : 'year',
      features: [
        'Up to 25 users',
        'Advanced AI services',
        'Priority support',
        'Enhanced security',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Training sessions'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: selectedPlan === 'monthly' ? 999 : 9990,
      period: selectedPlan === 'monthly' ? 'month' : 'year',
      features: [
        'Unlimited users',
        'All AI services',
        '24/7 dedicated support',
        'Enterprise security',
        'Custom analytics',
        'Full API access',
        'Custom development',
        'On-site training',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const serviceCategories = [
    {
      name: 'Micro SAAS Solutions',
      icon: Zap,
      services: [
        { name: 'AI-Powered Lead Scoring', price: '$299/month', features: ['Predictive analytics', 'Automated scoring', 'CRM integration'] },
        { name: 'SmartContract AI', price: '$499/month', features: ['AI contract review', 'Risk assessment', 'Compliance checking'] },
        { name: 'Quantum Analytics', price: '$799/month', features: ['Quantum algorithms', 'Complex optimization', 'Research tools'] },
        { name: 'Blockchain Supply Chain', price: '$599/month', features: ['Transparent tracking', 'Smart contracts', 'Audit trails'] },
        { name: 'AR/VR Business Solutions', price: '$899/month', features: ['Immersive training', '3D visualization', 'Interactive experiences'] }
      ]
    },
    {
      name: 'AI Services',
      icon: Brain,
      services: [
        { name: 'Quantum Machine Learning', price: '$1,299/month', features: ['Quantum algorithms', 'ML optimization', 'Research platform'] },
        { name: 'AI Ethics & Governance', price: '$899/month', features: ['Ethical AI framework', 'Bias detection', 'Compliance tools'] },
        { name: 'Edge AI & IoT Intelligence', price: '$699/month', features: ['Edge processing', 'Real-time AI', 'IoT analytics'] },
        { name: 'AI-Powered Cybersecurity', price: '$799/month', features: ['Threat detection', 'AI analysis', 'Incident response'] },
        { name: 'Generative AI & Content Creation', price: '$599/month', features: ['Content generation', 'AI writing', 'Creative tools'] }
      ]
    },
    {
      name: 'IT Infrastructure',
      icon: Server,
      services: [
        { name: 'Enterprise Network Infrastructure', price: 'From $5,000', features: ['Network design', 'Security implementation', 'Performance optimization'] },
        { name: 'Cybersecurity Assessment', price: 'From $3,000', features: ['Security audit', 'Vulnerability assessment', 'Compliance review'] },
        { name: 'Cloud Migration & Optimization', price: 'From $8,000', features: ['Cloud strategy', 'Migration planning', 'Cost optimization'] },
        { name: 'Data Center Design', price: 'From $15,000', features: ['Infrastructure design', 'Capacity planning', 'Energy efficiency'] },
        { name: 'IT Support & Managed Services', price: 'From $2,500/month', features: ['24/7 monitoring', 'Proactive maintenance', 'Help desk support'] }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Zap,
      services: [
        { name: 'Quantum Computing Solutions', price: '$2,500/month', features: ['Quantum simulation', 'Algorithm development', 'Research support'] },
        { name: 'Blockchain Development', price: '$1,800/month', features: ['Smart contracts', 'DApp development', 'DeFi solutions'] },
        { name: 'IoT Platform Management', price: '$950/month', features: ['Device management', 'Data analytics', 'Predictive maintenance'] },
        { name: 'Edge Computing Solutions', price: '$1,200/month', features: ['Edge AI', 'Real-time processing', 'Low latency'] },
        { name: 'AR/VR Development', price: '$1,500/month', features: ['Immersive experiences', '3D modeling', 'Interactive applications'] }
      ]
    },
    {
      name: 'Industry Solutions',
      icon: Building,
      services: [
        { name: 'Healthcare IT Solutions', price: 'From $4,500/month', features: ['HIPAA compliance', 'Patient management', 'Telemedicine platform'] },
        { name: 'Financial Technology', price: 'From $3,800/month', features: ['Digital banking', 'Payment processing', 'Regulatory compliance'] },
        { name: 'Manufacturing Intelligence', price: 'From $2,900/month', features: ['Industry 4.0', 'Predictive maintenance', 'Quality control'] },
        { name: 'Retail Technology', price: 'From $2,200/month', features: ['E-commerce platform', 'Inventory management', 'Customer analytics'] },
        { name: 'Education Technology', price: 'From $1,800/month', features: ['LMS platform', 'Online learning', 'Student management'] }
      ]
    }
  ];

  const addOnServices = [
    {
      name: 'Custom AI Model Development',
      description: 'Tailored AI solutions for your specific needs',
      price: 'From $25,000',
      icon: Brain
    },
    {
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      price: 'From $5,000',
      icon: Shield
    },
    {
      name: 'Digital Transformation Consulting',
      description: 'Strategic guidance for your digital journey',
      price: 'From $15,000',
      icon: Zap
    },
    {
      name: '24/7 Support & Monitoring',
      description: 'Round-the-clock technical support and system monitoring',
      price: 'From $2,000/month',
      icon: Server
    },
    {
      name: 'Quantum Computing Consultation',
      description: 'Expert guidance on quantum computing implementation',
      price: 'From $8,000',
      icon: Brain
    },
    {
      name: 'Blockchain Strategy & Development',
      description: 'Complete blockchain solution design and implementation',
      price: 'From $12,000',
      icon: Shield
    },
    {
      name: 'IoT Platform Customization',
      description: 'Tailored IoT solutions for your industry needs',
      price: 'From $6,000',
      icon: Server
    },
    {
      name: 'AR/VR Content Creation',
      description: 'Custom immersive content and applications',
      price: 'From $4,500',
      icon: Zap
    }
  ];

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive AI, IT, and Micro SAAS services"
        canonical="https://ziontechgroup.com/pricing"
      />
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core services with transparent pricing.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg ${selectedPlan === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <button
                onClick={() => setSelectedPlan(selectedPlan === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-zion-cyan transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    selectedPlan === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${selectedPlan === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly
                <span className="ml-2 text-zion-cyan text-sm">Save 20%</span>
              </span>
            </div>
          </div>

      {/* Pricing Tiers */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {SERVICE_PRICING_TIERS.map((tier) => (
                <Card key={tier.name} className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {tier.name === 'professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zion-gold text-zion-blue-dark px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{tier.title}</h3>
                    <div className="text-4xl font-bold text-zion-gold mb-2">
                      ${formatPrice(tier.priceValue)}
                    </div>
                    <div className="text-zion-slate-light">
                      per {billingCycle === 'yearly' ? 'month' : tier.billingCycle}
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-zion-gold mt-2">
                        Billed annually (${getDiscountedPrice(tier.priceValue)})
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-zion-gold flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-zion-gold text-zion-blue-dark py-3 rounded-lg font-semibold hover:bg-zion-gold-light transition-colors">
                    Get Started
                  </button>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Service-Specific Pricing
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="py-3 border-b border-zion-blue-light/30 last:border-b-0">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-zion-slate-light font-medium">{service.name}</span>
                            <span className="text-zion-cyan font-semibold text-sm">{service.price}</span>
                          </div>
                          {service.features && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {service.features.map((feature, featureIndex) => (
                                <span key={featureIndex} className="px-2 py-1 text-xs bg-zion-blue-light/20 text-zion-slate-light rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add-on Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Add-on Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addOnServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                        <span className="text-zion-cyan font-semibold text-lg">{service.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan at any time?</h3>
                <p className="text-zion-slate-light">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing for enterprise clients?</h3>
                <p className="text-zion-slate-light">Absolutely! We provide custom pricing for enterprise clients with specific requirements. Contact our sales team for a personalized quote.</p>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-zion-slate-light">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
              </div>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Is there a setup fee?</h3>
                <p className="text-zion-slate-light">No setup fees for our standard plans. Custom implementations may have associated costs, which we'll discuss upfront.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your specific needs and get a personalized quote for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-8 py-4 rounded-lg font-semibold transition-colors">
                  Get Custom Quote
                </button>
                <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/20 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PricingPage;