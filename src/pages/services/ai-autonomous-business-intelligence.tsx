import React from 'react';
import { Link } from 'react-router-dom';
import { ;
  Brain,
  BarChart3,
  TrendingUp,
  Target,
  Zap,
  Shield,
  Users,
  Globe,
  Database,
  Cpu,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Eye,
  Lock,
  RefreshCw,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Scatter,
  Calendar,
  Bell,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  Plus,
  Minus,
  Play,
  Pause,
  RotateCcw;
} from 'lucide-react';
import { motion } from 'framer-motion';
const AIAutonomousBusinessIntelligence: React.FC = () => {;
  const features = [;
    {;
      icon: Brain,
      title: 'Autonomous Data Analysis',
      description: 'AI continuously analyzes data patterns and generates insights without human intervention';
},
    {;
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Advanced ML models predict future trends and business outcomes with high accuracy';
},
    {;
      icon: Target,
      title: 'Intelligent KPI Tracking',
      description: 'Automatically identifies and tracks the most relevant KPIs for your business';
},
    {;
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Processes data in real-time with sub-second response times for instant insights';
},
    {;
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant with end-to-end encryption and role-based access control';
},
    {;
      icon: Globe,
      title: 'Multi-Platform Integration',
      description: 'Seamlessly integrates with 100+ business applications and data sources';
}
  ];
  const useCases = [;
    {;
      title: 'Financial Performance Analysis',
      description: 'Automated financial reporting, budget forecasting, and ROI analysis',
      icon: DollarSign;
},
    {;
      title: 'Customer Behavior Insights',
      description: 'Deep customer segmentation and behavior pattern analysis',
      icon: Users;
},
    {;
      title: 'Operational Efficiency',
      description: 'Process optimization and resource allocation recommendations',
      icon: Activity;
},
    {;
      title: 'Market Intelligence',
      description: 'Competitive analysis and market trend predictions',
      icon: Globe;
}
  ];
  const pricingPlans = [;
    {;
      name: 'Starter',
      price: 299,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [;
        'Up to 5 data sources',
        'Basic AI insights',
        'Standard reports',
        'Email support',
        '5GB data storage',
        'Basic integrations';
      ],
      popular: false;
},
    {;
      name: 'Professional',
      price: 799,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [;
        'Up to 25 data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        '50GB data storage',
        'Advanced integrations',
        'API access',
        'White-label options';
      ],
      popular: true;
},
    {;
      name: 'Enterprise',
      price: 2499,
      period: 'month',
      description: 'For large organizations',
      features: [;
        'Unlimited data sources',
        'Full AI autonomy',
        'Custom AI models',
        '24/7 dedicated support',
        'Unlimited storage',
        'All integrations',
        'Full API access',
        'Custom development',
        'On-premise option',
        'SLA guarantee';
      ],
      popular: false;
}
  ];
  const contactInfo = {;
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com';
};
  return (;
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">;
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 text-white py-20">;
        <div className="absolute inset-0 bg-black opacity-20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              AI Autonomous Business Intelligence;
            </h1>;
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-cyan-100">;
              Transform your business with AI-powered autonomous intelligence that continuously ;
              analyzes, predicts, and optimizes your operations without human intervention.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">;
                Get Started;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <Link;
                to="#demo";
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center">;
                Watch Demo;
                <Play className="ml-2 w-5 h-5" />;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Revolutionary AI-Powered Features;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Our autonomous AI system continuously learns and adapts to provide ;
              unprecedented business intelligence capabilities.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">;
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>;
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Transform Your Business Operations;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Discover how AI Autonomous Business Intelligence can revolutionize ;
              every aspect of your business.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {useCases.map((useCase, index) => (;
              <motion.div;
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">;
                <div className="flex items-start space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">;
                    <useCase.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>;
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Pricing Section */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Transparent Pricing Plans;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Choose the perfect plan for your business needs. All plans include ;
              our core AI capabilities with enterprise-grade security.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingPlans.map((plan, index) => (;
              <motion.div;
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-xl shadow-lg border-2 ${;
                  plan.popular ;
                    ? 'border-cyan-500 shadow-cyan-100' ;
                    : 'border-gray-200';
}`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}

                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>;
                  <p className="text-gray-600 mb-6">{plan.description}</p>;
                  <div className="flex items-baseline justify-center">;
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>;
                    <span className="text-gray-600 ml-2">/{plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature) => (;
                    <li key={feature} className="flex items-center space-x-3">;
                      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />;
                      <span className="text-gray-700">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <Link;
                  to="/contact";
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${;
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600';
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200';
}`}
                >;
                  Get Started;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Enterprise-Grade Technology;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Built with cutting-edge technology to ensure reliability, security,
              and performance at scale.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">;
                <Cpu className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Models</h3>;
              <p className="text-gray-600">GPT-4, Claude, Custom Models</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">;
                <Database className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>;
              <p className="text-gray-600">100+ Integrations</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>;
              <p className="text-gray-600">SOC 2 Type II, GDPR</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">;
                <Zap className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>;
              <p className="text-gray-600">99.9% Uptime SLA</p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Contact Section */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Contact our team to learn how AI Autonomous Business Intelligence ;
              can revolutionize your operations and drive unprecedented growth.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
            <div>;
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">;
                Get in Touch;
              </h3>;
              <div className="space-y-6">;
                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <Phone className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Phone</h4>;
                    <a href={`tel:${contactInfo.phone}`} className="text-cyan-600 hover:text-cyan-700">;
                      {contactInfo.phone}
                    </a>;
                  </div>;
                </div>;
                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <Mail className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Email</h4>;
                    <a href={`mailto:${contactInfo.email}`} className="text-cyan-600 hover:text-cyan-700">;
                      {contactInfo.email}
                    </a>;
                  </div>;
                </div>;
                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <MapPin className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Address</h4>;
                    <p className="text-gray-600">{contactInfo.address}</p>;
                  </div>;
                </div>;
                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <Globe className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Website</h4>;
                    <a href={contactInfo.website} className="text-cyan-600 hover:text-cyan-700">;
                      {contactInfo.website.replace('https://', '')}
                    </a>;
                  </div>;
                </div>;
              </div>;
            </div>;
            <div className="bg-gray-50 p-8 rounded-xl">;
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">;
                Request a Demo;
              </h3>;
              <form className="space-y-4">;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Company Name;
                  </label>;
                  <input;
                    type="text";
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                    placeholder="Enter your company name";
                  />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Email Address;
                  </label>;
                  <input;
                    type="email";
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                    placeholder="Enter your email";
                  />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Phone Number;
                  </label>;
                  <input;
                    type="tel";
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                    placeholder="Enter your phone number";
                  />;
                </div>;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Message;
                  </label>;
                  <textarea;
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                    placeholder="Tell us about your business intelligence needs"></textarea>;
                </div>;
                <button;
                  type="submit";
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors">;
                  Request Demo;
                </button>;
              </form>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold mb-6">;
            Start Your AI Transformation Today;
          </h2>;
          <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">;
            Join thousands of businesses already leveraging AI Autonomous Business Intelligence ;
            to drive growth, optimize operations, and stay ahead of the competition.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/contact";
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">;
              Get Started Now;
              <ArrowRight className="ml-2 w-5 h-5" />;
            </Link>;
            <Link;
              to="/pricing";
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">;
              View Pricing;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export default AIAutonomousBusinessIntelligence;