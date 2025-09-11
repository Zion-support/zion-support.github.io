import React, { memo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  Rocket,
  ArrowRight,
  Crown,
  Sparkles,
  Target,
  Users,
  Clock,
  Phone,
  Mail
} from 'lucide-react';
import { SEO, useSEO } from '@/components/SEO';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const PricingCard = memo(({ 
  plan, 
  index, 
  isPopular = false 
}: { 
  plan: any; 
  index: number; 
  isPopular?: boolean; 
}) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
        isPopular ? 'ring-2 ring-cyan-500 scale-105' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
            <Crown className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
          <plan.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {plan.description}
        </p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-gray-600 dark:text-gray-400 ml-1">
              /{plan.period}
            </span>
          )}
        </div>
        {plan.originalPrice && (
          <div className="text-sm text-gray-500 line-through mt-1">
            {plan.originalPrice}
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8">
        {plan.features.map((feature: any, idx: number) => (
          <div key={idx} className="flex items-start">
            {feature.included ? (
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            ) : (
              <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
            )}
            <span className={`text-sm ${
              feature.included 
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <OptimizedButton
        variant={isPopular ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
        onClick={() => window.location.href = '/contact'}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4 ml-2" />
      </OptimizedButton>
    </motion.div>
  );
});

PricingCard.displayName = 'PricingCard';

const FAQItem = memo(({ 
  question, 
  answer, 
  index 
}: { 
  question: string; 
  answer: string; 
  index: number; 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border border-slate-200 dark:border-slate-700 rounded-lg"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
});

FAQItem.displayName = 'FAQItem';

export default function EnhancedPricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const seoData = useSEO({
    title: 'Pricing Plans - Zion Tech Group',
    description: 'Transparent pricing for AI, cloud, cybersecurity, and development services. Choose the plan that fits your business needs.',
    keywords: 'pricing, AI services pricing, cloud solutions cost, cybersecurity pricing, development services',
    canonical: '/pricing'
  });

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      price: billingCycle === 'monthly' ? "$2,500" : "$25,000",
      period: billingCycle === 'monthly' ? "month" : "year",
      originalPrice: billingCycle === 'yearly' ? "$30,000" : null,
      cta: "Get Started",
      features: [
        { text: "Basic AI integration", included: true },
        { text: "Cloud hosting (up to 10GB)", included: true },
        { text: "Email support", included: true },
        { text: "Basic analytics", included: true },
        { text: "Mobile app development", included: false },
        { text: "Advanced AI features", included: false },
        { text: "24/7 phone support", included: false },
        { text: "Custom integrations", included: false }
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      price: billingCycle === 'monthly' ? "$5,000" : "$50,000",
      period: billingCycle === 'monthly' ? "month" : "year",
      originalPrice: billingCycle === 'yearly' ? "$60,000" : null,
      cta: "Start Free Trial",
      features: [
        { text: "Advanced AI integration", included: true },
        { text: "Cloud hosting (up to 100GB)", included: true },
        { text: "Priority email support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Mobile app development", included: true },
        { text: "Advanced AI features", included: true },
        { text: "24/7 phone support", included: false },
        { text: "Custom integrations", included: false }
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      icon: Crown,
      color: "from-purple-500 to-pink-500",
      price: billingCycle === 'monthly' ? "$10,000" : "$100,000",
      period: billingCycle === 'monthly' ? "month" : "year",
      originalPrice: billingCycle === 'yearly' ? "$120,000" : null,
      cta: "Contact Sales",
      features: [
        { text: "Full AI suite", included: true },
        { text: "Unlimited cloud hosting", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom analytics dashboard", included: true },
        { text: "Mobile app development", included: true },
        { text: "Advanced AI features", included: true },
        { text: "24/7 phone support", included: true },
        { text: "Custom integrations", included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "The free trial includes access to all Professional plan features for 14 days, with no credit card required. You can explore our AI tools, cloud services, and development platform risk-free."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for large enterprises with specific requirements. Contact our sales team to discuss your needs and get a tailored quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice with net 30 terms."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any of our plans. The only cost is your monthly or annual subscription fee."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all plans. If you're not satisfied, contact us within 30 days for a full refund."
    }
  ];

  const handleBillingToggle = useCallback(() => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Choose the plan that fits your business needs. All plans include our core AI and cloud services.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
                Monthly
              </span>
              <button
                onClick={handleBillingToggle}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                index={index}
                isPopular={plan.name === 'Professional'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Compare All Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See exactly what's included in each plan to make the right choice for your business
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Professional
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  'AI Integration',
                  'Cloud Hosting',
                  'Email Support',
                  'Phone Support',
                  'Analytics',
                  'Mobile Apps',
                  'Custom Integrations',
                  'Dedicated Support'
                ].map((feature, index) => (
                  <tr key={feature}>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {index < 4 ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {index < 6 ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to know about our pricing and services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OptimizedButton
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Start Free Trial
              </OptimizedButton>
              <OptimizedButton
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Sales
              </OptimizedButton>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-slate-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                sales@ziontechgroup.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}