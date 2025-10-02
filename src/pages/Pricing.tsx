import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Users, Shield, Phone, Mail } from 'lucide-react';

const Pricing: React.FC = () => {
  const microSaasPricing = [
    {
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content with AI',
      price: '$29',
      period: '/month',
      features: [
        '1,000 words/month',
        '3 languages supported',
        'Basic SEO optimization',
        'Email support',
        'Content scheduling'
      ],
      popular: false,
      link: '/services/ai-content-generator'
    },
    {
      name: 'Smart Appointment Scheduler',
      description: 'Healthcare-focused appointment management',
      price: '$49',
      period: '/month',
      features: [
        'Up to 5 providers',
        '500 appointments/month',
        'Basic telemedicine',
        'HIPAA compliance',
        'Email support'
      ],
      popular: true,
      link: '/services/smart-appointment-scheduler'
    }
  ];

  const aiServicesPricing = [
    {
      name: 'AI Virtual Assistant',
      description: '24/7 AI-powered customer support',
      price: '$199',
      period: '/month',
      features: [
        '95% accuracy rate',
        'Multilingual support',
        'CRM integration',
        'Voice & text support',
        '24/7 availability'
      ],
      popular: false,
      link: '/services/ai-virtual-assistant'
    },
    {
      name: 'AI Data Analytics',
      description: 'Advanced data insights and reporting',
      price: '$299',
      period: '/month',
      features: [
        'Predictive analytics',
        'Automated reporting',
        'Real-time dashboards',
        'Data visualization',
        'ML models included'
      ],
      popular: true,
      link: '/services/ai-data-analytics'
    },
    {
      name: 'AI Document Processing',
      description: 'Intelligent document automation',
      price: '$149',
      period: '/month',
      features: [
        '99% accuracy',
        'OCR technology',
        'NLP processing',
        'Document classification',
        'Data extraction'
      ],
      popular: false,
      link: '/services/ai-document-processing'
    }
  ];

  const itServicesPricing = [
    {
      name: 'Cloud Migration',
      description: 'Seamless cloud platform migration',
      price: '$5,000',
      period: 'one-time',
      features: [
        'Zero downtime migration',
        'Multi-cloud support',
        'Cost optimization',
        'Security compliance',
        '24/7 support'
      ],
      popular: false,
      link: '/services/cloud-migration'
    },
    {
      name: 'DevOps Automation',
      description: 'Complete DevOps transformation',
      price: '$3,000',
      period: '/month',
      features: [
        'CI/CD pipelines',
        'Infrastructure as code',
        'Automated testing',
        'Monitoring & alerting',
        'Security scanning'
      ],
      popular: true,
      link: '/services/devops-automation'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform apps',
      price: '$15,000',
      period: 'starting',
      features: [
        'Native & cross-platform',
        'Modern frameworks',
        'App store optimization',
        'Performance optimization',
        'Maintenance included'
      ],
      popular: false,
      link: '/services/mobile-app-development'
    }
  ];

  const PricingCard = ({ service, category }: { service: any, category: string }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
      {service.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold text-gray-900">{service.price}</span>
            <span className="text-gray-600 ml-1">{service.period}</span>
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={service.link}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors block ${
            service.popular
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Learn More
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Service Pricing</title>
        <meta name="description" content="Transparent pricing for our AI, micro SaaS, and IT services. Find the perfect plan for your business needs with competitive rates and flexible options." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All our services come with transparent pricing, 
              no hidden fees, and flexible options to scale with your growth.
            </p>
            
            {/* Contact CTA */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Pricing?</h2>
              <p className="text-gray-600 mb-6">Contact us for enterprise solutions and custom pricing tailored to your specific needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Us
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </div>

          {/* Micro SaaS Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Affordable, specialized software solutions designed for specific business needs with quick deployment and easy scaling.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {microSaasPricing.map((service, index) => (
                <PricingCard key={index} service={service} category="micro-saas" />
              ))}
            </div>
          </section>

          {/* AI Services Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI & Machine Learning Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Advanced artificial intelligence solutions that automate processes, analyze data, and provide intelligent insights.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {aiServicesPricing.map((service, index) => (
                <PricingCard key={index} service={service} category="ai-services" />
              ))}
            </div>
          </section>

          {/* IT Services Pricing */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">IT & Technology Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT services including cloud migration, DevOps automation, and cutting-edge technology implementations.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {itServicesPricing.map((service, index) => (
                <PricingCard key={index} service={service} category="it-services" />
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional value through innovation, expertise, and customer-focused solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Expertise</h3>
                <p className="text-gray-600">10+ years of experience in AI and IT solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Measurable Results</h3>
                <p className="text-gray-600">Average 75% cost reduction and 10x efficiency gains</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-grade security measures and compliance</p>
              </div>
            </div>
          </section>

          {/* Market Comparison */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-16 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Competitive Market Pricing</h2>
              <p className="text-xl opacity-90">
                Our pricing is competitive with industry leaders while providing superior value and service.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">AI Services</h3>
                <p className="text-lg opacity-90">30% below market average</p>
                <p className="text-sm opacity-75">Compared to major AI service providers</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Micro SaaS</h3>
                <p className="text-lg opacity-90">40% more affordable</p>
                <p className="text-sm opacity-75">Than comparable SaaS solutions</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">IT Services</h3>
                <p className="text-lg opacity-90">25% cost savings</p>
                <p className="text-sm opacity-75">Compared to traditional IT consulting</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for a free consultation and custom pricing tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Us Today
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Pricing;