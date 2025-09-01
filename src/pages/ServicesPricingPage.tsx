import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { ; CheckCircle,; Star,; Users,; Zap,; Shield,; Cloud,; Brain,; Database,; Server,; Lock,; BarChart3,; Code,; TrendingUp,; Award,; Clock,; Mail,; Phone,; ArrowRight; } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
;
const ServicesPricingPage: React.FC = () => {;
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
;
  const plans = [;
    {;
      id: 'starter',;
      name: 'Starter',;
      description: 'Perfect for small businesses getting started with AI',;
      price: { monthly: 299, annual: 2999 },;
      features: [;
        'AI Business Intelligence Basic',;
        'Up to 5 users',;
        'Basic reporting & analytics',;
        'Email support',;
        'Standard security features';
      ],;
      popular: false,;
      icon: Brain;
    },;
    {;
      id: 'professional',;
      name: 'Professional',;
      description: 'Ideal for growing businesses with advanced needs',;
      price: { monthly: 599, annual: 5999 },;
      features: [;
        'AI Business Intelligence Pro',;
        'AI Sales Copilot',;
        'Up to 25 users',;
        'Advanced analytics & dashboards',;
        'Priority support',;
        'Enhanced security features',;
        'Custom integrations';
      ],;
      popular: true,;
      icon: Zap;
    },;
    {;
      id: 'enterprise',;
      name: 'Enterprise',;
      description: 'Comprehensive solution for large organizations',;
      price: { monthly: 1299, annual: 12999 },;
      features: [;
        'All AI services included',;
        'Unlimited users',;
        'Custom AI model training',;
        'Advanced security & compliance',;
        'Dedicated account manager',;
        '24/7 phone support',;
        'Custom development',;
        'On-premise deployment option';
      ],;
      popular: false,;
      icon: Shield;
    };
  ];
;
  const services = [;
    {;
      icon: Brain,;
      title: 'AI Business Intelligence',;
      description: 'Transform your data into actionable insights with advanced AI analytics',;
      startingPrice: 299,;
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'API Integration'];
    },;
    {;
      icon: Zap,;
      title: 'AI Sales Copilot',;
      description: 'Boost sales performance with intelligent automation and insights',;
      startingPrice: 199,;
      features: ['Lead Scoring', 'Sales Forecasting', 'Automated Follow-ups', 'Performance Analytics'];
    },;
    {;
      icon: Shield,;
      title: 'AI Compliance Assistant',;
      description: 'Ensure regulatory compliance with AI-powered monitoring and reporting',;
      startingPrice: 399,;
      features: ['Compliance Monitoring', 'Risk Assessment', 'Automated Reporting', 'Audit Trails'];
    },;
    {;
      icon: Cloud,;
      title: 'Cloud DevOps',;
      description: 'Streamline development and deployment with modern cloud practices',;
      startingPrice: 499,;
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security Integration'];
    },;
    {;
      icon: Database,;
      title: 'Data Analytics',;
      description: 'Unlock the value of your data with comprehensive analytics solutions',;
      startingPrice: 349,;
      features: ['Data Warehousing', 'Business Intelligence', 'Advanced Analytics', 'Data Governance'];
    },;
    {;
      icon: Code,;
      title: 'Custom Development',;
      description: 'Tailored software solutions designed for your specific business needs',;
      startingPrice: 150,;
      features: ['Custom Applications', 'API Development', 'System Integration', 'Maintenance & Support'];
    };
  ];
;
  const getPrice = (plan: any) => {;
    return billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual;
  };
;
  const getSavings = (plan: any) => {;
    if (billingCycle === 'annual') {;
      const monthlyTotal = plan.price.monthly * 12;
      const annualPrice = plan.price.annual;
      return Math.round(((monthlyTotal - annualPrice) / monthlyTotal) * 100);
    };
    return 0;
  };
;
  return (;
    <div className="min-h-screen bg-slate-900">;""
      <SEO";""
        title="Services & Pricing - Zion Tech Group";""
        description="Explore our comprehensive AI services and competitive pricing plans. Find the perfect solution for your business needs and budget.";""
        keywords="AI services, pricing, business intelligence, sales copilot, compliance, cloud DevOps, Zion Tech Group";"
      />;""
      {/* Header */}";""
      <section className="pt-32 pb-16 px-4">";""
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.6 }};""
          >";""
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">;"
              Services & Pricing;""
            </h1>";""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Choose the perfect AI-powered solution for your business. All plans include implementation,;
              training, and ongoing support to ensure your success.;
            </p>;
          </motion.div>;
        </div>;"
      </section>;""
      {/* Pricing Plans */}";""
      <section className="py-16 px-4">";""
        <div className="max-w-7xl mx-auto">;""
          {/* Billing Toggle */}";""
          <div className="text-center mb-12">";""
            <div className="inline-flex bg-slate-800/50 rounded-lg p-1">;
              <button;
                onClick={() => setBillingCycle('monthly')};
                className={`px-6 py-2 rounded-md transition-all duration-200 ${;
                  billingCycle === 'monthly';
                    ? 'bg-cyan-500 text-white';
                    : 'text-gray-400 hover:text-white';
                }`};
              >;
                Monthly;
              </button>;
              <button;
                onClick={() => setBillingCycle('annual')};
                className={`px-6 py-2 rounded-md transition-all duration-200 ${;
                  billingCycle === 'annual';
                    ? 'bg-cyan-500 text-white';
                    : 'text-gray-400 hover:text-white';
                }`};
              >;"
                Annual;""
                {billingCycle === 'annual' && (";""
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">;
                    Save up to 20%;
                  </span>;
                )};
              </button>;
            </div>;"
          </div>;""
          {/* Plans Grid */}";""
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {plans.map((plan, index) => (;
              <motion.div;
                key={plan.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                viewport={{ once: true }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className={`relative ${;
                  plan.popular ? 'scale-105' : '';
                }`};"
              >;""
                {plan.popular && (";""
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";""
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;"
                )};";""
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full">";""
                  <div className="text-center mb-8">";""
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">";""
                      <plan.icon className="w-8 h-8 text-white" />;""
                    </div>";""
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>";""
                    <p className="text-gray-300 mb-6">{plan.description}</p>;";""
                    <div className="mb-4">";""
                      <span className="text-4xl font-bold text-white">${getPrice(plan)}</span>";""
                      <span className="text-gray-400 ml-2">;
                        /{billingCycle === 'monthly' ? 'month' : 'year'};
                      </span>;"
                    </div>;""
                    {billingCycle === 'annual' && getSavings(plan) > 0 && (";""
                      <div className="text-green-400 text-sm mb-6">;
                        Save {getSavings(plan)}% with annual billing;
                      </div>;
                    )};"
                  </div>;";""
                  <ul className="space-y-3 mb-8">;""
                    {plan.features.map((feature, idx) => (";""
                      <li key={idx} className="flex items-center text-gray-300">";""
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />;
                        {feature};
                      </li>;
                    ))};
                  </ul>;
                  <Button;
                    onClick={() => setSelectedPlan(plan.id)};
                    className={`w-full ${;
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600';
                        : 'bg-slate-700 hover:bg-slate-600';
                    } text-white`};"
                  >;""
                    Get Started";""
                    <ArrowRight className="w-4 h-4 ml-2" />;
                  </Button>;
                </div>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* Services Overview */}";""
      <section className="py-16 px-4 bg-slate-800/30">";""
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              Our Services;""
            </h2>";""
            <p className="text-gray-300 max-w-2xl mx-auto">;
              Comprehensive AI and technology solutions designed to transform your business operations;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {services.map((service, index) => (;
              <motion.div;
                key={service.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300";""
              >";""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">";""
                  <service.icon className="w-8 h-8 text-white" />;""
                </div>";""
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>";""
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>;";""
                <div className="mb-4">";""
                  <span className="text-2xl font-bold text-cyan-400">${service.startingPrice}</span>";""
                  <span className="text-gray-400 text-sm ml-2">/month starting</span>;"
                </div>;";""
                <ul className="space-y-2 mb-4">;""
                  {service.features.map((feature, idx) => (";""
                    <li key={idx} className="flex items-center text-gray-300 text-sm">";""
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />;
                      {feature};
                    </li>;
                  ))};"
                </ul>;";""
                <Button variant="outline" className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">;""
                  Learn More";""
                  <ArrowRight className="w-4 h-4 ml-2" />;
                </Button>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* FAQ Section */}";""
      <section className="py-16 px-4">";""
        <div className="max-w-4xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;"
              Frequently Asked Questions;""
            </h2>";""
            <p className="text-gray-300">;
              Get answers to common questions about our services and pricing;
            </p>;"
          </motion.div>;";""
          <div className="space-y-6">";""
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">;""
              <CardHeader>";""
                <CardTitle className="text-cyan-400">What's included in your pricing?</CardTitle>;"
              </CardHeader>;""
              <CardContent>";""
                <p className="text-gray-300">;
                  All our services include implementation, training, documentation, and 24/7 support.;
                  Custom integrations and additional features can be added based on your requirements.;
                </p>;
              </CardContent>;"
            </Card>;";""
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">;""
              <CardHeader>";""
                <CardTitle className="text-cyan-400">Do you offer custom pricing?</CardTitle>;"
              </CardHeader>;""
              <CardContent>";""
                <p className="text-gray-300">;
                  Yes, we provide custom pricing for enterprise solutions and specialized requirements.;
                  Contact us for a personalized quote tailored to your business needs.;
                </p>;
              </CardContent>;"
            </Card>;";""
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">;""
              <CardHeader>";""
                <CardTitle className="text-cyan-400">What payment terms do you offer?</CardTitle>;"
              </CardHeader>;""
              <CardContent>";""
                <p className="text-gray-300">;
                  We offer flexible payment terms including upfront payment, milestone-based payments,;
                  and monthly/annual subscription options for ongoing services.;
                </p>;
              </CardContent>;"
            </Card>;";""
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">;""
              <CardHeader>";""
                <CardTitle className="text-cyan-400">Is there a money-back guarantee?</CardTitle>;"
              </CardHeader>;""
              <CardContent>";""
                <p className="text-gray-300">;
                  We offer a satisfaction guarantee. If you're not completely satisfied with our services;
                  within the first 30 days, we'll work to make it right or provide a refund.;
                </p>;
              </CardContent>;
            </Card>;
          </div>;
        </div>;"
      </section>;""
      {/* Contact CTA Section */}";""
      <section className="py-16 px-4">";""
        <div className="max-w-4xl mx-auto">";""
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 text-center text-white">";""
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>";""
            <p className="text-xl mb-6 text-cyan-100">;"
              Let's discuss your project requirements and find the perfect solution for your business;""
            </p>";""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
              <Button ";""
                size="lg";""
                className="bg-white text-cyan-600 hover:bg-gray-100";"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Service Consultation', '_blank')};""
              >";""
                <Mail className="h-5 w-5 mr-2" />;
                Schedule Consultation;"
              </Button>;""
              <Button ";""
                size="lg";""
                variant="outline";""
                className="border-white text-white hover:bg-white/10";"
                onClick={() => window.open('tel:+13024640950', '_blank')};""
              >";""
                <Phone className="h-5 w-5 mr-2" />;
                Call Now;
              </Button>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;"
export default ServicesPricingPage;";""