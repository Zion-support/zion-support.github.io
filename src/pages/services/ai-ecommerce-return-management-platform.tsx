import React from 'react';
import { motion } from 'framer-motion';
import { ;
  RotateCcw,
  Bot,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Smartphone,
  Clock,
  Target,
  DollarSign,
  Eye,
  MousePointer,
  Palette,
  Database,
  Cpu,
  Network,
  Lock,
  Phone,
  MapPin,
  PieChart,
  Activity,
  CreditCard,
  UserCheck,
  Settings,
  Package,
  Truck,
  AlertTriangle,
  FileText,
  QrCode,
  Mail;
} from 'lucide-react';
const AIEcommerceReturnManagementPlatform = () => {;
  const features = [;
    {;
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Return Prediction",
      description: "Machine learning algorithms predict return likelihood and reasons, enabling proactive customer service and inventory optimization.";
},
    {;
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Automated Return Processing",
      description: "Streamlined return workflows with automatic approval, label generation, and tracking updates for faster processing.";
},
    {;
      icon: <QrCode className="w-6 h-6" />,
      title: "Smart Return Labels",
      description: "Generate QR code return labels with automatic routing, condition assessment, and restocking instructions.";
},
    {;
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Return Analytics Dashboard",
      description: "Comprehensive analytics on return patterns, reasons, costs, and customer satisfaction with actionable insights.";
},
    {;
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Detection",
      description: "AI-powered fraud detection to identify suspicious return patterns and prevent abuse while maintaining customer satisfaction.";
},
    {;
      icon: <Zap className="w-6 h-6" />,
      title: "Inventory Optimization",
      description: "Automated restocking decisions based on return condition, demand forecasting, and inventory levels.";
}
  ];
  const pricingTiers = [;
    {;
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small e-commerce stores",
      features: [ "Up to 1,000 returns/month",
        "Basic return processing",
        "Standard analytics",
        "Email support",
        "Basic fraud detection",
        "Integration with 5 platforms" ],
      cta: "Start Free Trial",
      popular: false;
},
    {;
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [ "Up to 10,000 returns/month",
        "Advanced AI features",
        "Predictive analytics",
        "Priority support",
        "Advanced fraud detection",
        "Integration with 20+ platforms",
        "Custom workflows",
        "API access" ],
      cta: "Start Free Trial",
      popular: true;
},
    {;
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large e-commerce operations",
      features: [ "Unlimited returns",
        "Custom AI models",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Advanced reporting",
        "SLA guarantee" ],
      cta: "Contact Sales",
      popular: false;
}
  ];
  const benefits = [;
    {;
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "60% Faster Processing",
      description: "Automated workflows reduce return processing time from days to hours.";
},
    {;
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: "40% Cost Reduction",
      description: "Optimized return handling and inventory management reduce operational costs.";
},
    {;
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "85% Customer Satisfaction",
      description: "Streamlined return experience improves customer satisfaction and retention.";
},
    {;
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "90% Fraud Prevention",
      description: "AI-powered fraud detection prevents return abuse and protects your business.";
}
  ];
  const integrations = [;
    { name: "Shopify", logo: "🛍️" },
    { name: "WooCommerce", logo: "🛒" },
    { name: "Magento", logo: "🏪" },
    { name: "BigCommerce", logo: "🛒" },
    { name: "Amazon", logo: "📦" },
    { name: "eBay", logo: "🏷️" },
    { name: "Etsy", logo: "🎨" },
    { name: "Walmart", logo: "🏪" },
    { name: "FedEx", logo: "🚚" },
    { name: "UPS", logo: "📦" },
    { name: "USPS", logo: "📮" },
    { name: "DHL", logo: "🌍" }
  ];
  const workflowSteps = [;
    {;
      step: "1",
      title: "Return Request",
      description: "Customer initiates return through your website or mobile app with AI-guided reason selection.";
},
    {;
      step: "2",
      title: "AI Assessment",
      description: "AI analyzes return reason, customer history, and product condition to determine approval.";
},
    {;
      step: "3",
      title: "Label Generation",
      description: "Automatic return label generation with QR codes and tracking information.";
},
    {;
      step: "4",
      title: "Processing",
      description: "Automated processing upon receipt with condition assessment and restocking decisions.";
},
    {;
      step: "5",
      title: "Refund/Exchange",
      description: "Automatic refund processing or exchange fulfillment based on return condition.";
}
  ];
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">;
              <RotateCcw className="w-4 h-4 mr-2" />;
              AI-Powered Return Management;
            </div>;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              AI E-commerce Return;
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Management Platform</span>;
            </h1>;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Streamline your return process with AI-powered automation, fraud detection, and inventory optimization. ;
              Achieve 60% faster processing and 40% cost reduction.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center">;
                Start Free Trial;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </button>;
              <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-semibold transition-colors">;
                Watch Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Advanced AI Features;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our platform combines cutting-edge AI with proven return management strategies to deliver exceptional results.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-colors">;
                <div className="text-orange-400 mb-4">;
                  {feature.icon}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">;
                  {feature.title}
                </h3>;
                <p className="text-gray-300">;
                  {feature.description}
                </p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Workflow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Streamlined Return Workflow;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered workflow automates every step of the return process for maximum efficiency.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">;
            {workflowSteps.map((step, index) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center">;
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">;
                  {step.step}
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">;
                  {step.title}
                </h3>;
                <p className="text-gray-300 text-sm">;
                  {step.description}
                </p>;
                {index < workflowSteps.length - 1 && (;
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-500/30 transform translate-x-4"></div>;
                )}
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Proven Results;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Join thousands of e-commerce businesses achieving remarkable results with our AI-powered platform.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center">;
                <div className="flex justify-center mb-4">;
                  {benefit.icon}
                </div>;
                <h3 className="text-2xl font-bold text-white mb-2">;
                  {benefit.title}
                </h3>;
                <p className="text-gray-300">;
                  {benefit.description}
                </p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Seamless Integrations;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Connect with your favorite e-commerce platforms and shipping providers for a unified experience.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">;
            {integrations.map((integration, index) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-orange-500/50 transition-colors">;
                <div className="text-3xl mb-2">{integration.logo}</div>;
                <div className="text-white font-medium">{integration.name}</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transparent Pricing;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Choose the plan that fits your e-commerce business size. All plans include our core AI features.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingTiers.map((tier, index) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${;
                  tier.popular ;
                    ? 'border-orange-500 ring-2 ring-orange-500/20' ;
                    : 'border-slate-700';
}`}
              >;
                {tier.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">;
                      Most Popular;
                    </span>;
                  </div>;
                )}

                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">;
                    {tier.name}
                  </h3>;
                  <p className="text-gray-300 mb-4">;
                    {tier.description}
                  </p>;
                  <div className="flex items-baseline justify-center">;
                    <span className="text-4xl font-bold text-white">;
                      {tier.price}
                    </span>;
                    <span className="text-gray-400 ml-1">;
                      {tier.period}
                    </span>;
                  </div>;
                </div>;

                <ul className="space-y-4 mb-8">;
                  {tier.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />;
                      <span className="text-gray-300">{feature}</span>;
                    </li>;
                  ))}
                </ul>;

                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${;
                  tier.popular;
                    ? 'bg-orange-600 hover:bg-orange-700 text-white';
                    : 'bg-slate-700 hover:bg-slate-600 text-white';
}`}>;
                  {tier.cta}
                </button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Optimize Your Return Process?;
            </h2>;
            <p className="text-xl text-orange-100 mb-8">;
              Join thousands of e-commerce businesses using AI to streamline their return management.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">;
                Start Free Trial;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </button>;
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">;
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              <div>;
                <h3 className="text-2xl font-bold text-white mb-4">;
                  Get in Touch;
                </h3>;
                <p className="text-gray-300 mb-6">;
                  Ready to revolutionize your return management? Contact our team to learn more about our AI-powered platform.;
                </p>;
                <div className="space-y-4">;
                  <div className="flex items-center">;
                    <Phone className="w-5 h-5 text-orange-400 mr-3" />;
                    <span className="text-white">+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items-center">;
                    <Mail className="w-5 h-5 text-orange-400 mr-3" />;
                    <span className="text-white">kleber@ziontechgroup.com</span>;
                  </div>;
                  <div className="flex items-center">;
                    <MapPin className="w-5 h-5 text-orange-400 mr-3" />;
                    <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>;
                  </div>;
                </div>;
              </div>;
              <div>;
                <form className="space-y-4">;
                  <input;
                    type="text";
                    placeholder="Your Name";
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500";
                  />;
                  <input;
                    type="email";
                    placeholder="Your Email";
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500";
                  />;
                  <textarea;
                    placeholder="Your Message";
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500";
                  />;
                  <button className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors">;
                    Send Message;
                  </button>;
                </form>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export default AIEcommerceReturnManagementPlatform;