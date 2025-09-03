import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Star, Award, Users, Globe, MapPin } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { REAL_MICRO_SAAS_SERVICES_2025, SERVICE_CATEGORIES, PRICING_TIERS, ZION_CONTACT_INFO } from "../../data/realMicroSaasServices2025";


export default function Index() {
  const features = [
    "AI-powered customer churn prediction with 94% accuracy",
    "Real-time fraud detection and prevention",
    "Advanced supply chain optimization algorithms",
    "Healthcare diagnostics with 96% accuracy",
    "Intelligent content creation and marketing automation",
    "Predictive maintenance for industrial equipment"
  ];
  const benefits = [
    "Reduce operational costs by 25-40%",
    "Increase revenue through AI-driven insights",
    "Improve customer satisfaction and retention",
    "Enhance security and compliance",
    "Accelerate decision-making processes",
    "Scale operations efficiently"
  ];
  const useCases = [
    "SaaS companies reducing customer churn",
    "E-commerce businesses optimizing supply chains",
    "Healthcare providers improving diagnostics",
    "Financial institutions preventing fraud",
    "Manufacturing companies implementing predictive maintenance",
    "Marketing agencies scaling content creation"
  ];
  const pricing = [
    {
      name: "Starter",
      price: "$99/mo",
      details: ["Basic AI features", "Up to 1,000 users", "Email support", "Standard SLA"]
    },
    {
      name: "Professional",
      price: "$499/mo",
      details: ["Advanced AI features", "Up to 10,000 users", "Priority support", "99.9% SLA"]
    },
    {
      name: "Enterprise",
      price: "$1,999/mo",
      details: ["Full AI suite", "Unlimited users", "24/7 support", "99.99% SLA", "Custom integrations"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Revolutionary AI Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI-Powered Micro SAAS Solutions</h1>
          <p className="text-indigo-100 text-xl">
            Transform your business with our comprehensive suite of 20+ cutting-edge AI micro SAAS services.
            From customer analytics to quantum computing, we provide real solutions with proven ROI.
          </p>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                <span>{ZION_CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-indigo-400" />
                <span>{ZION_CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-indigo-400" />
                <span>{ZION_CONTACT_INFO.address}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="https://ziontechgroup.com"
                className="text-indigo-400 hover:text-indigo-300 font-semibold">
                Visit Our Website →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary AI Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
            <div className="mt-6">
              <Link
                href="/services/comprehensive-micro-saas-showcase"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                View All 15+ AI Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Business Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Target className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Trusted by 500+ companies worldwide with 98% customer satisfaction.
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <Users className="w-8 h-8 text-indigo-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Industry Focus</h3>
                <p className="text-gray-600 text-sm">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Flexible Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-sm border ${index === 1 ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'}`}>
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-4">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Join 500+ companies already using our AI solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Free Trial <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/services/comprehensive-micro-saas-showcase"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}