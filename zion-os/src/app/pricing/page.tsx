<<<<<<< HEAD
"use client",

import { useState } from "react",
interface PricingTier {
  name: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  popular?: boolean,
  cta: string,
  ctaLink: string
}

interface ServicePricing {
  serviceName: string,
  category: string,
  description: string,
  tiers: PricingTier[],
  features: string[],
  benefits: string[]
}
=======
"use client";


interface PricingTier {_name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;}

interface ServicePricing {_serviceName: string;
  category: string;
  description: string;
  tiers: PricingTier[];
  features: string[];
  benefits: string[];}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const servicePricing: ServicePricing[] = [
  {_serviceName: "Zion OS Platform", _category: "Core Platform", _description: "Unified deployment protocol for sovereign AI-powered digital economies", _features: ["Instance deployment", _"Feature toggles", _"Multi-vertical support", _"Governance systems", _"API management", _"Multi-region support"], _benefits: ["Reduce deployment time from months to minutes", _"Built-in compliance and governance", _"Scalable architecture"], _tiers: [
      {
        name: "Starter", _price: "$99", _period: "/month", _description: "Perfect for small businesses and startups", _features: ["Up to 3 instances", _"Basic feature set", _"Community support", _"Standard deployment", _"Basic analytics"], _cta: "Start Free Trial", _ctaLink: "/multiverse/launch"},
      {_name: "Professional", _price: "$299", _period: "/month", _description: "Ideal for growing businesses", _features: ["Up to 10 instances", _"Advanced features", _"Priority support", _"Custom domains", _"Advanced analytics", _"API access"], _popular: true, _cta: "Get Started", _ctaLink: "/multiverse/launch"},
      {_name: "Enterprise", _price: "$999", _period: "/month", _description: "For large organizations with complex needs", _features: ["Unlimited instances", _"All features", _"24/7 support", _"Custom integrations", _"White-label options", _"Dedicated account manager"], _cta: "Contact Sales", _ctaLink: "mailto:kleber@ziontechgroup.com"}
    ]
  },
  {_serviceName: "ZionGPT Core", _category: "AI Services", _description: "Advanced AI language model optimized for business applications", _features: ["Custom fine-tuning", _"Multi-language support", _"Industry-specific models", _"API access", _"Enterprise security", _"Real-time processing"], _benefits: ["Improve customer service efficiency by 60%", _"Reduce content creation time", _"Ensure compliance accuracy"], _tiers: [
      {
        name: "Starter", _price: "$49", _period: "/month", _description: "For small teams and individual users", _features: ["100 API calls/day", _"Basic models", _"Email support", _"Standard response time", _"Basic documentation"], _cta: "Start Free Trial", _ctaLink: "/services/zion-gpt"},
      {_name: "Professional", _price: "$149", _period: "/month", _description: "For growing businesses", _features: ["1, _000 API calls/day", _"Advanced models", _"Priority support", _"Custom fine-tuning", _"Multi-language support", _"Analytics dashboard"], _cta: "Get Started", _ctaLink: "/services/zion-gpt"},
      {_name: "Enterprise", _price: "$499", _period: "/month", _description: "For large organizations", _features: ["Unlimited API calls", _"Custom models", _"24/7 support", _"Dedicated infrastructure", _"SLA guarantee", _"Custom integrations"], _cta: "Contact Sales", _ctaLink: "mailto:kleber@ziontechgroup.com"}
    ]
  },
  {_serviceName: "AI Content Hub", _category: "AI Services", _description: "Comprehensive content creation and management platform powered by AI", _features: ["AI content generation", _"SEO optimization", _"Multi-platform publishing", _"Content calendar", _"Performance analytics", _"Team collaboration"], _benefits: ["Generate 10x more content", _"Improve SEO rankings", _"Save 20+ hours per week"], _tiers: [
      {
        name: "Starter", _price: "$39", _period: "/month", _description: "For content creators and small teams", _features: ["50 AI-generated articles/month", _"Basic SEO tools", _"Social media integration", _"Content calendar", _"Basic analytics"], _cta: "Start Free Trial", _ctaLink: "/services/ai-content-hub"},
      {_name: "Professional", _price: "$99", _period: "/month", _description: "For growing content teams", _features: ["200 AI-generated articles/month", _"Advanced SEO optimization", _"Multi-platform publishing", _"Team collaboration", _"Advanced analytics", _"API access"], _cta: "Get Started", _ctaLink: "/services/ai-content-hub"},
      {_name: "Enterprise", _price: "$299", _period: "/month", _description: "For large content operations", _features: ["Unlimited content generation", _"Custom AI models", _"White-label options", _"Advanced integrations", _"Dedicated support", _"Custom workflows"], _cta: "Contact Sales", _ctaLink: "mailto:kleber@ziontechgroup.com"}
    ]
  },
  {_serviceName: "Digital Marketplace Platform", _category: "E-commerce & Services", _description: "Complete marketplace solution for jobs, _talent, _projects, _and services", _features: ["Job posting & matching", _"Talent marketplace", _"Project management", _"Payment processing", _"Rating system", _"Analytics dashboard"], _benefits: ["Launch marketplace in 24 hours", _"Reduce operational costs by 30%", _"Increase revenue through commissions"], _tiers: [
      {
        name: "Starter", _price: "$79", _period: "/month", _description: "For small marketplaces", _features: ["Up to 100 users", _"Basic marketplace features", _"Payment processing", _"Basic analytics", _"Email support"], _cta: "Start Free Trial", _ctaLink: "/services/marketplace"},
      {_name: "Professional", _price: "$199", _period: "/month", _description: "For growing marketplaces", _features: ["Up to 1, _000 users", _"Advanced features", _"Custom branding", _"Advanced analytics", _"API access", _"Priority support"], _cta: "Get Started", _ctaLink: "/services/marketplace"},
      {_name: "Enterprise", _price: "$599", _period: "/month", _description: "For large marketplaces", _features: ["Unlimited users", _"Custom development", _"White-label options", _"Advanced integrations", _"Dedicated support", _"Custom workflows"], _cta: "Contact Sales", _ctaLink: "mailto:kleber@ziontechgroup.com"}
    ]
  },
  {_serviceName: "Cloud Migration Services", _category: "IT Services", _description: "Professional cloud migration and optimization services", _features: ["Infrastructure assessment", _"Migration planning", _"Data migration", _"Performance optimization", _"24/7 support", _"Post-migration support"], _benefits: ["Reduce infrastructure costs by 40%", _"Improve scalability", _"Enhanced security"], _tiers: [
      {
        name: "Basic Migration", _price: "$2, _500", _period: "one-time", _description: "Simple infrastructure migration", _features: ["Infrastructure assessment", _"Basic migration plan", _"Data migration", _"Basic testing", _"Documentation"], _cta: "Get Quote", _ctaLink: "mailto:kleber@ziontechgroup.com"},
      {_name: "Standard Migration", _price: "$7, _500", _period: "one-time", _description: "Comprehensive migration with optimization", _features: ["Detailed assessment", _"Comprehensive plan", _"Data migration", _"Performance optimization", _"Testing & validation", _"Training"], _cta: "Get Quote", _ctaLink: "mailto:kleber@ziontechgroup.com"},
      {_name: "Enterprise Migration", _price: "$15, _000+", _period: "one-time", _description: "Complex enterprise migration", _features: ["Full assessment", _"Custom migration strategy", _"Advanced optimization", _"Custom integrations", _"Ongoing support", _"SLA guarantee"], _cta: "Contact Sales", _ctaLink: "mailto:kleber@ziontechgroup.com"}
    ]
  },
  {_serviceName: "Cybersecurity Audit & Compliance", _category: "IT Services", _description: "Comprehensive security assessments and compliance consulting", _features: ["Security assessment", _"Penetration testing", _"Compliance audit", _"Security training", _"Incident response planning", _"Ongoing monitoring"], _benefits: ["Protect against cyber threats", _"Meet compliance requirements", _"Reduce security risks"], _tiers: [
      {
        name: "Basic Audit", _price: "$1, _500", _period: "one-time", _description: "Essential security assessment", _features: ["Basic security scan", _"Vulnerability assessment", _"Compliance checklist", _"Basic report", _"Email support"], _cta: "Get Quote", _ctaLink: "mailto:kleber@ziontechgroup.com"},
      {_name: "Standard Audit", _price: "$4, _500", _period: "one-time", _description: "Comprehensive security assessment", _features: ["Full security audit", _"Penetration testing", _"Compliance audit", _"Detailed report", _"Remediation guidance", _"Phone support"], _cta: "Get Quote", _ctaLink: "mailto:kleber@ziontechgroup.com"},
      {_name: "Enterprise Audit", _price: "$9, _000+", _period: "one-time", _description: "Advanced security assessment", _features: ["Advanced testing", _"Custom compliance", _"Ongoing monitoring", _"Security training", _"Incident response", _"Dedicated support"], _cta: "Contact Sales", _ctaLink: "mailto:kleber@ziontechgroup.com"}
    ]
  }
],

<<<<<<< HEAD
const categories = ["All", "Core Platform", "AI Services", "IT Services", "E-commerce & Services"],

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All"),
=======
const _categories = ["All", "Core Platform", "AI Services", "IT Services", "E-commerce & Services"];

export default function PricingPage() {_const [selectedCategory, _setSelectedCategory] = useState("All");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = selectedCategory === "All" 
    ? servicePricing 
    : servicePricing.filter(service => service.category === selectedCategory),

  return (_<div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Pricing & Plans</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our core features with transparent pricing and no hidden fees.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-2 bg-zinc-800 rounded-lg p-1">
          {_categories.map(category => (
            <button
              key={category}
              onClick={_() => setSelectedCategory(category)}
              className={_`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-zinc-700'}`}
            >
              {_category}
            </button>
          ))}
        </div>
      </div>

      {_/* Services Pricing */}
      <div className="space-y-12">
        {_filteredServices.map(_(service, _serviceIndex) => (_<div key={serviceIndex} className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">{_service.serviceName}</h2>
              <p className="text-lg opacity-80">{_service.description}</p>
            </div>

            {_/* Features & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {_service.features.map((feature, _index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {_feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {_service.benefits.map(_(benefit, _index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {_benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {_/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {_service.tiers.map(_(tier, _tierIndex) => (
                <div
                  key={tierIndex}
                  className={_`relative border rounded-lg p-6 ${
                    tier.popular
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/10'}`}
                >
                  {_tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold">{_tier.name}</h3>
                    <div>
                      <span className="text-3xl font-bold">{_tier.price}</span>
                      <span className="text-lg opacity-80">{_tier.period}</span>
                    </div>
                    <p className="text-sm opacity-80">{_tier.description}</p>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {_tier.features.map(_(feature, _index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {_feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <a
                      href={_tier.ctaLink}
                      className={_`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                        tier.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-zinc-700 hover:bg-zinc-600 text-white'}`}
                    >
                      {_tier.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {_/* Additional Services */}
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
          </a>
        </div>
      </div>

      {_/* Contact Information */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Questions About Pricing?</h2>
        <p className="opacity-80">
          Our team is here to help you choose the right plan for your business.
        </p>
        <div className="grid grid-cols-1 md: grid-cols-3 gap-4">
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
  )
}