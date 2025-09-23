import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {;
  Brain,
  Cloud,
  Shield,
  Rocket,
  Zap,
  Users,
  Globe,
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  Clock,
  DollarSign,
  Target,
  Workflow,
  Atom,
  Truck,
  Factory,
  Leaf,
  Satellite,
  Building,
  Gauge,
  MessageCircle,
  Calendar,
  Package,
  CreditCard,
  Globe2,
  ShieldCheck,
  BookOpen,
  Award,
  Timer,
  Zap as ZapIcon;
} from 'lucide-react';
interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  savings?: string;
  marketPrice?: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  services: Array<{;
    name: string;
    description: string;
    pricingTiers: PricingTier[];
    marketComparison: string;
    roi: string;
    implementationTime: string;
}>;
}

export default function ComprehensivePricingGuide2025() {;
  const [selectedCategory, setSelectedCategory] = useState<string>('ai-saas');
  const serviceCategories: ServiceCategory[] = [;
    {;
      id: 'ai-saas',
      name: 'AI-Powered SaaS Solutions',
      description: 'Intelligent software solutions that leverage artificial intelligence to automate and optimize business processes',
      icon: Brain,
      services: [;
        {;
          name: 'AI Sales Copilot Pro',
          description: 'Intelligent sales automation platform with AI-powered lead scoring and follow-up automation',
          pricingTiers: [;
            {;
              name: 'Starter',
              price: '$299',
              period: '/month',
              description: 'Perfect for small sales teams',
              features: ['AI lead scoring', 'Basic automation', 'CRM integration', 'Email support'],
              marketPrice: '$800',
              savings: '63% savings';
},
            {;
              name: 'Professional',
              price: '$799',
              period: '/month',
              description: 'Ideal for growing businesses',
              features: ['Advanced AI features', 'Sales forecasting', 'Performance analytics', 'Priority support'],
              marketPrice: '$2,500',
              savings: '68% savings',
              popular: true;
},
            {;
              name: 'Enterprise',
              price: '$1,999',
              period: '/month',
              description: 'For large organizations',
              features: ['Custom AI models', 'Advanced analytics', 'Dedicated support', 'API access'],
              marketPrice: '$5,000',
              savings: '60% savings';
}
          ],
          marketComparison: 'Market leaders charge $2,500-$5,000/month for similar features',
          roi: '40% increase in sales within 3 months',
          implementationTime: '2-4 weeks';
},
        {;
          name: 'AI Business Intelligence Suite',
          description: 'Advanced analytics platform with predictive insights and custom dashboards',
          pricingTiers: [;
            {;
              name: 'Basic',
              price: '$499',
              period: '/month',
              description: 'Essential analytics for small teams',
              features: ['Basic dashboards', 'Data visualization', 'Standard reports', 'Email support'],
              marketPrice: '$1,500',
              savings: '67% savings';
},
            {;
              name: 'Advanced',
              price: '$1,499',
              period: '/month',
              description: 'Comprehensive analytics solution',
              features: ['Predictive analytics', 'Custom dashboards', 'Real-time reporting', 'Phone support'],
              marketPrice: '$4,000',
              savings: '63% savings',
              popular: true;
},
            {;
              name: 'Enterprise',
              price: '$2,499',
              period: '/month',
              description: 'Full-scale BI solution',
              features: ['AI-powered insights', 'Advanced modeling', 'Custom integrations', 'Dedicated support'],
              marketPrice: '$6,000',
              savings: '58% savings';
}
          ],
          marketComparison: 'Competitors charge $3,000-$6,000/month for comparable features',
          roi: '25% improvement in decision-making efficiency',
          implementationTime: '3-6 weeks';
}
      ];
},
    {;
      id: 'cloud-saas',
      name: 'Cloud & DevOps Solutions',
      description: 'Scalable cloud infrastructure and DevOps automation services',
      icon: Cloud,
      services: [;
        {;
          name: 'Cloud FinOps Optimizer',
          description: 'Comprehensive cloud cost management and optimization platform',
          pricingTiers: [;
            {;
              name: 'Starter',
              price: '$199',
              period: '/month',
              description: 'Basic cost monitoring',
              features: ['Cost tracking', 'Basic alerts', 'Single cloud', 'Email support'],
              marketPrice: '$800',
              savings: '75% savings';
},
            {;
              name: 'Professional',
              price: '$599',
              period: '/month',
              description: 'Advanced optimization features',
              features: ['Automated optimization', 'Multi-cloud support', 'Budget management', 'Priority support'],
              marketPrice: '$2,000',
              savings: '70% savings',
              popular: true;
},
            {;
              name: 'Enterprise',
              price: '$999',
              period: '/month',
              description: 'Full FinOps solution',
              features: ['Custom optimization', 'Advanced analytics', 'Compliance reporting', 'Dedicated support'],
              marketPrice: '$3,000',
              savings: '67% savings';
}
          ],
          marketComparison: 'Similar solutions cost $1,500-$3,000/month in the market',
          roi: '40% reduction in cloud costs',
          implementationTime: '1-3 weeks';
}
      ];
},
    {;
      id: 'security-saas',
      name: 'Cybersecurity & Compliance',
      description: 'Advanced security solutions and compliance management platforms',
      icon: Shield,
      services: [;
        {;
          name: 'AI Compliance Assistant',
          description: 'Automated compliance monitoring and reporting platform',
          pricingTiers: [;
            {;
              name: 'Basic',
              price: '$399',
              period: '/month',
              description: 'Essential compliance features',
              features: ['Basic monitoring', 'Standard reports', 'Email alerts', 'Basic support'],
              marketPrice: '$1,200',
              savings: '67% savings';
},
            {;
              name: 'Professional',
              price: '$999',
              period: '/month',
              description: 'Advanced compliance management',
              features: ['Real-time monitoring', 'Automated reporting', 'Multi-jurisdiction', 'Priority support'],
              marketPrice: '$2,800',
              savings: '64% savings',
              popular: true;
},
            {;
              name: 'Enterprise',
              price: '$1,499',
              period: '/month',
              description: 'Full compliance solution',
              features: ['Custom compliance', 'Advanced analytics', 'Audit trails', 'Dedicated support'],
              marketPrice: '$4,000',
              savings: '63% savings';
}
          ],
          marketComparison: 'Market rate for similar solutions: $2,000-$4,000/month',
          roi: '50% reduction in compliance risks',
          implementationTime: '4-8 weeks';
}
      ];
},
    {;
      id: 'business-saas',
      name: 'Business Process Automation',
      description: 'Streamlined solutions for optimizing core business operations',
      icon: Building,
      services: [;
        {;
          name: 'AI Project Management Platform',
          description: 'Smart project management with AI workflow optimization',
          pricingTiers: [;
            {;
              name: 'Team',
              price: '$299',
              period: '/month',
              description: 'For small project teams',
              features: ['Basic project management', 'Team collaboration', 'Basic reporting', 'Email support'],
              marketPrice: '$800',
              savings: '63% savings';
},
            {;
              name: 'Business',
              price: '$799',
              period: '/month',
              description: 'Advanced project management',
              features: ['AI optimization', 'Advanced analytics', 'Resource management', 'Priority support'],
              marketPrice: '$2,200',
              savings: '64% savings',
              popular: true;
},
            {;
              name: 'Enterprise',
              price: '$1,299',
              period: '/month',
              description: 'Full-scale PM solution',
              features: ['Custom workflows', 'Advanced AI', 'Enterprise integrations', 'Dedicated support'],
              marketPrice: '$3,500',
              savings: '63% savings';
}
          ],
          marketComparison: 'Competitive solutions cost $2,000-$4,500/month',
          roi: '30% improvement in project delivery time',
          implementationTime: '2-4 weeks';
}
      ];
}
  ];
  const selectedCategory = serviceCategories.find(cat => cat.id === selectedCategory) || serviceCategories[0];
  return (;
    <>;
      <Helmet>;
        <title>Comprehensive Pricing Guide 2025 - Zion Tech Group</title>;
        <meta name="description" content="Get detailed pricing information for our AI-powered micro SAAS services, IT solutions, and technology services. Compare our competitive rates with market prices." />;
        <meta name="keywords" content="pricing, AI services pricing, micro SAAS pricing, IT services cost, Zion Tech Group pricing" />;
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-guide-2025" />;
      </Helmet>;

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker">;
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
                Comprehensive Pricing Guide;
                <span className="text-zion-cyan"> 2025</span>;
              </h1>;
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
                Transparent pricing for our AI-powered micro SAAS services and IT solutions. ;
                Save up to 70% compared to market rates while getting superior technology and support.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  to="/contact";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">;
                  Get Custom Quote;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <a;
                  href="tel:+13024640950";
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
                  Call +1 (302) 464-0950;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Value Proposition */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              <motion.div;
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center">;
                <div className="p-4 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">;
                  <DollarSign className="w-8 h-8 text-zion-cyan" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">Up to 70% Savings</h3>;
                <p className="text-zion-slate-light">Our competitive pricing saves you thousands compared to market rates</p>;
              </motion.div>;

              <motion.div;
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center">;
                <div className="p-4 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">;
                  <Award className="w-8 h-8 text-zion-cyan" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">Superior Technology</h3>;
                <p className="text-zion-slate-light">Cutting-edge AI and advanced features that outperform competitors</p>;
              </motion.div>;

              <motion.div;
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center">;
                <div className="p-4 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">;
                  <Headphones className="w-8 h-8 text-zion-cyan" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>;
                <p className="text-zion-slate-light">Dedicated support team with deep technical expertise</p>;
              </motion.div>;
            </div>;
          </div>;
        </section>;

        {/* Category Navigation */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <div className="flex flex-wrap gap-4 justify-center">;
              {serviceCategories.map((category) => {;
                const Icon = category.icon;
                return (;
                  <button;
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${;
                      selectedCategory === category.id;
                        ? 'border-zion-cyan bg-zion-cyan text-white';
                        : 'border-zion-purple/30 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan';
}`}
                  >;
                    <Icon className="w-5 h-5" />;
                    {category.name}
                  </button>;
                );
})}
            </div>;
          </div>;
        </section>;

        {/* Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <div className="mb-12 text-center">;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                {selectedCategory.name}
              </h2>;
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
                {selectedCategory.description}
              </p>;
            </div>;

            <div className="space-y-16">;
              {selectedCategory.services.map((service, serviceIndex) => (;
                <motion.div;
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-slate-dark border border-zion-purple/30 rounded-xl p-8">;
                  <div className="text-center mb-8">;
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">;
                      {service.name}
                    </h3>;
                    <p className="text-zion-slate-light text-lg mb-6">;
                      {service.description}
                    </p>;
                    {/* Service Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">;
                      <div className="text-center">;
                        <div className="text-2xl font-bold text-zion-cyan mb-2">;
                          {service.roi}
                        </div>;
                        <div className="text-sm text-zion-slate-light">ROI</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-2xl font-bold text-zion-cyan mb-2">;
                          {service.implementationTime}
                        </div>;
                        <div className="text-sm text-zion-slate-light">Implementation</div>;
                      </div>;
                      <div className="text-center">;
                        <div className="text-2xl font-bold text-zion-cyan mb-2">;
                          {service.marketComparison}
                        </div>;
                        <div className="text-sm text-zion-slate-light">Market Comparison</div>;
                      </div>;
                    </div>;
                  </div>;

                  {/* Pricing Tiers */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                    {service.pricingTiers.map((tier, tierIndex) => (;
                      <motion.div;
                        key={tier.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: tierIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative bg-zion-slate-darker border rounded-xl p-6 ${;
                          tier.popular ;
                            ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20' ;
                            : 'border-zion-purple/30';
}`}
                      >;
                        {tier.popular && (;
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">;
                            <span className="px-4 py-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold rounded-full">;
                              Most Popular;
                            </span>;
                          </div>;
                        )}

                        <div className="text-center mb-6">;
                          <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>;
                          <div className="mb-2">;
                            <span className="text-3xl font-bold text-zion-cyan">{tier.price}</span>;
                            <span className="text-zion-slate-light">{tier.period}</span>;
                          </div>;
                          <p className="text-zion-slate-light text-sm">{tier.description}</p>;
                        </div>;

                        {/* Market Price Comparison */}
                        {tier.marketPrice && (;
                          <div className="mb-4 p-3 bg-zion-slate-dark rounded-lg">;
                            <div className="flex items-center justify-between text-sm">;
                              <span className="text-zion-slate-light">Market Price:</span>;
                              <span className="text-zion-slate-light line-through">{tier.marketPrice}</span>;
                            </div>;
                            <div className="text-center mt-2">;
                              <span className="text-zion-cyan font-semibold">{tier.savings}</span>;
                            </div>;
                          </div>;
                        )}

                        {/* Features */}
                        <ul className="space-y-3 mb-6">;
                          {tier.features.map((feature, idx) => (;
                            <li key={idx} className="flex items-center text-sm text-zion-slate-light">;
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />;
                              {feature}
                            </li>;
                          ))}
                        </ul>;

                        {/* CTA Button */}
                        <Link;
                          to="/contact";
                          className={`w-full text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 ${;
                            tier.popular;
                              ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light';
                              : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white';
}`}
                        >;
                          Get Started;
                        </Link>;
                      </motion.div>;
                    ))}
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Additional Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">;
          <div className="max-w-7xl mx-auto">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
                Beyond competitive pricing, we offer unmatched value and expertise;
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {[;
                {;
                  icon: Timer,
                  title: 'Fast Implementation',
                  description: 'Get up and running in weeks, not months';
},
                {;
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Experienced professionals with deep domain knowledge';
},
                {;
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-level security and compliance standards';
},
                {;
                  icon: Headphones,
                  title: '24/7 Support',
                  description: 'Round-the-clock technical support and maintenance';
}
              ].map((benefit, index) => {;
                const Icon = benefit.icon;
                return (;
                  <motion.div;
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center">;
                    <div className="p-4 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">;
                      <Icon className="w-8 h-8 text-zion-cyan" />;
                    </div>;
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>;
                    <p className="text-zion-slate-light text-sm">{benefit.description}</p>;
                  </motion.div>;
                );
})}
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Ready to Get Started?;
              </h2>;
              <p className="text-xl text-zion-slate-light mb-8">;
                Contact our team for a personalized quote and consultation;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  to="/contact";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300">;
                  Get Custom Quote;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <a;
                  href="tel:+13024640950";
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
                  Call +1 (302) 464-0950;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
}