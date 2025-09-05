"use client&quot;;

import { useState } from &quot;react&quot;;

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

interface ServicePricing {
  serviceName: string;
  category: string;
  description: string;
  tiers: PricingTier[];
  features: string[];
  benefits: string[];
}

const servicePricing: ServicePricing[] = [
  {
    serviceName: &quot;Zion OS Platform&quot;,
    category: &quot;Core Platform&quot;,
    description: &quot;Unified deployment protocol for sovereign AI-powered digital economies&quot;,
    features: [&quot;Instance deployment&quot;, &quot;Feature toggles&quot;, &quot;Multi-vertical support&quot;, &quot;Governance systems&quot;, &quot;API management&quot;, &quot;Multi-region support&quot;],
    benefits: [&quot;Reduce deployment time from months to minutes&quot;, &quot;Built-in compliance and governance&quot;, &quot;Scalable architecture&quot;],
    tiers: [
      {
        name: &quot;Starter&quot;,
        price: &quot;$99&quot;,
        period: &quot;/month&quot;,
        description: &quot;Perfect for small businesses and startups&quot;,
        features: [&quot;Up to 3 instances&quot;, &quot;Basic feature set&quot;, &quot;Community support&quot;, &quot;Standard deployment&quot;, &quot;Basic analytics&quot;],
        cta: &quot;Start Free Trial&quot;,
        ctaLink: &quot;/multiverse/launch&quot;
      },
      {
        name: &quot;Professional&quot;,
        price: &quot;$299&quot;,
        period: &quot;/month&quot;,
        description: &quot;Ideal for growing businesses&quot;,
        features: [&quot;Up to 10 instances&quot;, &quot;Advanced features&quot;, &quot;Priority support&quot;, &quot;Custom domains&quot;, &quot;Advanced analytics&quot;, &quot;API access&quot;],
        popular: true,
        cta: &quot;Get Started&quot;,
        ctaLink: &quot;/multiverse/launch&quot;
      },
      {
        name: &quot;Enterprise&quot;,
        price: &quot;$999&quot;,
        period: &quot;/month&quot;,
        description: &quot;For large organizations with complex needs&quot;,
        features: [&quot;Unlimited instances&quot;, &quot;All features&quot;, &quot;24/7 support&quot;, &quot;Custom integrations&quot;, &quot;White-label options&quot;, &quot;Dedicated account manager&quot;],
        cta: &quot;Contact Sales&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      }
    ]
  },
  {
    serviceName: &quot;ZionGPT Core&quot;,
    category: &quot;AI Services&quot;,
    description: &quot;Advanced AI language model optimized for business applications&quot;,
    features: [&quot;Custom fine-tuning&quot;, &quot;Multi-language support&quot;, &quot;Industry-specific models&quot;, &quot;API access&quot;, &quot;Enterprise security&quot;, &quot;Real-time processing&quot;],
    benefits: [&quot;Improve customer service efficiency by 60%&quot;, &quot;Reduce content creation time&quot;, &quot;Ensure compliance accuracy&quot;],
    tiers: [
      {
        name: &quot;Starter&quot;,
        price: &quot;$49&quot;,
        period: &quot;/month&quot;,
        description: &quot;For small teams and individual users&quot;,
        features: [&quot;100 API calls/day&quot;, &quot;Basic models&quot;, &quot;Email support&quot;, &quot;Standard response time&quot;, &quot;Basic documentation&quot;],
        cta: &quot;Start Free Trial&quot;,
        ctaLink: &quot;/services/zion-gpt&quot;
      },
      {
        name: &quot;Professional&quot;,
        price: &quot;$149&quot;,
        period: &quot;/month&quot;,
        description: &quot;For growing businesses&quot;,
        features: [&quot;1,000 API calls/day&quot;, &quot;Advanced models&quot;, &quot;Priority support&quot;, &quot;Custom fine-tuning&quot;, &quot;Multi-language support&quot;, &quot;Analytics dashboard&quot;],
        cta: &quot;Get Started&quot;,
        ctaLink: &quot;/services/zion-gpt&quot;
      },
      {
        name: &quot;Enterprise&quot;,
        price: &quot;$499&quot;,
        period: &quot;/month&quot;,
        description: &quot;For large organizations&quot;,
        features: [&quot;Unlimited API calls&quot;, &quot;Custom models&quot;, &quot;24/7 support&quot;, &quot;Dedicated infrastructure&quot;, &quot;SLA guarantee&quot;, &quot;Custom integrations&quot;],
        cta: &quot;Contact Sales&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      }
    ]
  },
  {
    serviceName: &quot;AI Content Hub&quot;,
    category: &quot;AI Services&quot;,
    description: &quot;Comprehensive content creation and management platform powered by AI&quot;,
    features: [&quot;AI content generation&quot;, &quot;SEO optimization&quot;, &quot;Multi-platform publishing&quot;, &quot;Content calendar&quot;, &quot;Performance analytics&quot;, &quot;Team collaboration&quot;],
    benefits: [&quot;Generate 10x more content&quot;, &quot;Improve SEO rankings&quot;, &quot;Save 20+ hours per week&quot;],
    tiers: [
      {
        name: &quot;Starter&quot;,
        price: &quot;$39&quot;,
        period: &quot;/month&quot;,
        description: &quot;For content creators and small teams&quot;,
        features: [&quot;50 AI-generated articles/month&quot;, &quot;Basic SEO tools&quot;, &quot;Social media integration&quot;, &quot;Content calendar&quot;, &quot;Basic analytics&quot;],
        cta: &quot;Start Free Trial&quot;,
        ctaLink: &quot;/services/ai-content-hub&quot;
      },
      {
        name: &quot;Professional&quot;,
        price: &quot;$99&quot;,
        period: &quot;/month&quot;,
        description: &quot;For growing content teams&quot;,
        features: [&quot;200 AI-generated articles/month&quot;, &quot;Advanced SEO optimization&quot;, &quot;Multi-platform publishing&quot;, &quot;Team collaboration&quot;, &quot;Advanced analytics&quot;, &quot;API access&quot;],
        cta: &quot;Get Started&quot;,
        ctaLink: &quot;/services/ai-content-hub&quot;
      },
      {
        name: &quot;Enterprise&quot;,
        price: &quot;$299&quot;,
        period: &quot;/month&quot;,
        description: &quot;For large content operations&quot;,
        features: [&quot;Unlimited content generation&quot;, &quot;Custom AI models&quot;, &quot;White-label options&quot;, &quot;Advanced integrations&quot;, &quot;Dedicated support&quot;, &quot;Custom workflows&quot;],
        cta: &quot;Contact Sales&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      }
    ]
  },
  {
    serviceName: &quot;Digital Marketplace Platform&quot;,
    category: &quot;E-commerce & Services&quot;,
    description: &quot;Complete marketplace solution for jobs, talent, projects, and services&quot;,
    features: [&quot;Job posting & matching&quot;, &quot;Talent marketplace&quot;, &quot;Project management&quot;, &quot;Payment processing&quot;, &quot;Rating system&quot;, &quot;Analytics dashboard&quot;],
    benefits: [&quot;Launch marketplace in 24 hours&quot;, &quot;Reduce operational costs by 30%&quot;, &quot;Increase revenue through commissions&quot;],
    tiers: [
      {
        name: &quot;Starter&quot;,
        price: &quot;$79&quot;,
        period: &quot;/month&quot;,
        description: &quot;For small marketplaces&quot;,
        features: [&quot;Up to 100 users&quot;, &quot;Basic marketplace features&quot;, &quot;Payment processing&quot;, &quot;Basic analytics&quot;, &quot;Email support&quot;],
        cta: &quot;Start Free Trial&quot;,
        ctaLink: &quot;/services/marketplace&quot;
      },
      {
        name: &quot;Professional&quot;,
        price: &quot;$199&quot;,
        period: &quot;/month&quot;,
        description: &quot;For growing marketplaces&quot;,
        features: [&quot;Up to 1,000 users&quot;, &quot;Advanced features&quot;, &quot;Custom branding&quot;, &quot;Advanced analytics&quot;, &quot;API access&quot;, &quot;Priority support&quot;],
        cta: &quot;Get Started&quot;,
        ctaLink: &quot;/services/marketplace&quot;
      },
      {
        name: &quot;Enterprise&quot;,
        price: &quot;$599&quot;,
        period: &quot;/month&quot;,
        description: &quot;For large marketplaces&quot;,
        features: [&quot;Unlimited users&quot;, &quot;Custom development&quot;, &quot;White-label options&quot;, &quot;Advanced integrations&quot;, &quot;Dedicated support&quot;, &quot;Custom workflows&quot;],
        cta: &quot;Contact Sales&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      }
    ]
  },
  {
    serviceName: &quot;Cloud Migration Services&quot;,
    category: &quot;IT Services&quot;,
    description: &quot;Professional cloud migration and optimization services&quot;,
    features: [&quot;Infrastructure assessment&quot;, &quot;Migration planning&quot;, &quot;Data migration&quot;, &quot;Performance optimization&quot;, &quot;24/7 support&quot;, &quot;Post-migration support&quot;],
    benefits: [&quot;Reduce infrastructure costs by 40%&quot;, &quot;Improve scalability&quot;, &quot;Enhanced security&quot;],
    tiers: [
      {
        name: &quot;Basic Migration&quot;,
        price: &quot;$2,500&quot;,
        period: &quot;one-time&quot;,
        description: &quot;Simple infrastructure migration&quot;,
        features: [&quot;Infrastructure assessment&quot;, &quot;Basic migration plan&quot;, &quot;Data migration&quot;, &quot;Basic testing&quot;, &quot;Documentation&quot;],
        cta: &quot;Get Quote&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      },
      {
        name: &quot;Standard Migration&quot;,
        price: &quot;$7,500&quot;,
        period: &quot;one-time&quot;,
        description: &quot;Comprehensive migration with optimization&quot;,
        features: [&quot;Detailed assessment&quot;, &quot;Comprehensive plan&quot;, &quot;Data migration&quot;, &quot;Performance optimization&quot;, &quot;Testing & validation&quot;, &quot;Training&quot;],
        cta: &quot;Get Quote&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      },
      {
        name: &quot;Enterprise Migration&quot;,
        price: &quot;$15,000+&quot;,
        period: &quot;one-time&quot;,
        description: &quot;Complex enterprise migration&quot;,
        features: [&quot;Full assessment&quot;, &quot;Custom migration strategy&quot;, &quot;Advanced optimization&quot;, &quot;Custom integrations&quot;, &quot;Ongoing support&quot;, &quot;SLA guarantee&quot;],
        cta: &quot;Contact Sales&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      }
    ]
  },
  {
    serviceName: &quot;Cybersecurity Audit & Compliance&quot;,
    category: &quot;IT Services&quot;,
    description: &quot;Comprehensive security assessments and compliance consulting&quot;,
    features: [&quot;Security assessment&quot;, &quot;Penetration testing&quot;, &quot;Compliance audit&quot;, &quot;Security training&quot;, &quot;Incident response planning&quot;, &quot;Ongoing monitoring&quot;],
    benefits: [&quot;Protect against cyber threats&quot;, &quot;Meet compliance requirements&quot;, &quot;Reduce security risks&quot;],
    tiers: [
      {
        name: &quot;Basic Audit&quot;,
        price: &quot;$1,500&quot;,
        period: &quot;one-time&quot;,
        description: &quot;Essential security assessment&quot;,
        features: [&quot;Basic security scan&quot;, &quot;Vulnerability assessment&quot;, &quot;Compliance checklist&quot;, &quot;Basic report&quot;, &quot;Email support&quot;],
        cta: &quot;Get Quote&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      },
      {
        name: &quot;Standard Audit&quot;,
        price: &quot;$4,500&quot;,
        period: &quot;one-time&quot;,
        description: &quot;Comprehensive security assessment&quot;,
        features: [&quot;Full security audit&quot;, &quot;Penetration testing&quot;, &quot;Compliance audit&quot;, &quot;Detailed report&quot;, &quot;Remediation guidance&quot;, &quot;Phone support&quot;],
        cta: &quot;Get Quote&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      },
      {
        name: &quot;Enterprise Audit&quot;,
        price: &quot;$9,000+&quot;,
        period: &quot;one-time&quot;,
        description: &quot;Advanced security assessment&quot;,
        features: [&quot;Advanced testing&quot;, &quot;Custom compliance&quot;, &quot;Ongoing monitoring&quot;, &quot;Security training&quot;, &quot;Incident response&quot;, &quot;Dedicated support&quot;],
        cta: &quot;Contact Sales&quot;,
        ctaLink: &quot;mailto:kleber@ziontechgroup.com&quot;
      }
    ]
  }
];

const categories = [&quot;All&quot;, &quot;Core Platform&quot;, &quot;AI Services&quot;, &quot;IT Services&quot;, &quot;E-commerce & Services&quot;];

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState(&quot;All&quot;);

  const filteredServices = selectedCategory === &quot;All" 
    ? servicePricing 
    : servicePricing.filter(service => service.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Pricing & Plans</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our core features with transparent pricing and no hidden fees.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-2 bg-zinc-800 rounded-lg p-1">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Pricing */}
      <div className="space-y-12">
        {filteredServices.map((service, serviceIndex) => (
          <div key={serviceIndex} className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">{service.serviceName}</h2>
              <p className="text-lg opacity-80">{service.description}</p>
            </div>

            {/* Features & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.tiers.map((tier, tierIndex) => (
                <div
                  key={tierIndex}
                  className={`relative border rounded-lg p-6 ${
                    tier.popular
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/10'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    <div>
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-lg opacity-80">{tier.period}</span>
                    </div>
                    <p className="text-sm opacity-80">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <a
                      href={tier.ctaLink}
                      className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                        tier.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-zinc-700 hover:bg-zinc-600 text-white'
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Need Custom Solutions?</h2>
          <p className="opacity-90">
            We offer custom development, enterprise solutions, and specialized services tailored to your specific needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="font-semibold">Custom Development</h3>
              <p className="text-sm opacity-90">Tailored solutions from $5,000+</p>
            </div>
            <div>
              <h3 className="font-semibold">Enterprise Solutions</h3>
              <p className="text-sm opacity-90">Custom pricing for large organizations</p>
            </div>
            <div>
              <h3 className="font-semibold">Consulting Services</h3>
              <p className="text-sm opacity-90">Strategic guidance from $150/hour</p>
            </div>
          </div>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="inline-block px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Custom Quote
          </Link>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Questions About Pricing?</h2>
        <p className="opacity-80">
          Our team is here to help you choose the right plan for your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="opacity-80">+1 302 464 0950</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="opacity-80">kleber@ziontechgroup.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="opacity-80">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}