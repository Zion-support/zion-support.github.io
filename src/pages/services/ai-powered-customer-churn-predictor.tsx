<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { Link  } from 'react-router-dom'; import { ; TrendingDown,; Users,; BarChart3,; AlertTriangle,; CheckCircle,; Brain,; Zap,; ArrowRight,; Eye,; Phone,; Mail,; MapPin,; Target,; Clock,; Shield,; Database,; Network,; Globe,; PieChart,; Activity,; Bell,; Settings,; Lock;  } from 'lucide-react'; ; const AIPoweredCustomerChurnPredictor: React.FC = () => {; const features = [; {; icon: Brain,; title: "Predictive AI Analytics",";"";" description: "Advanced machine learning algorithms that predict customer churn with 95% accuracy up to 90 days in advance.";";" },;";" {;"";" icon: Users,";"";" title: "Customer Behavior Analysis",";"";" description: "Deep insights into customer usage patterns, engagement levels, and satisfaction indicators.";";" },;";" {;"";" icon: AlertTriangle,";"";" title: "Early Warning System",";"";" description: "Real-time alerts when customers show signs of potential churn, allowing proactive intervention.";";" },;";" {;"";" icon: BarChart3,";"";" title: "Churn Risk Scoring",";"";" description: "Individual customer churn risk scores with actionable recommendations for retention strategies.";";" },;";" {;"";" icon: Target,";"";" title: "Personalized Retention Campaigns",";"";" description: "AI-generated personalized retention strategies and campaigns for high-risk customers.";";" },;";" {;"";" icon: Activity,";"";" title: "Performance Tracking",";"";" description: "Comprehensive tracking of retention efforts and ROI measurement for all campaigns."; }; ];" ;";" const pricingTiers = [;";" {;";"";" name: "Starter",";"";" price: "$199",";"";" period: "/month",";"";" description: "Perfect for small businesses",;"";" features: [";"Up to 1,000 customers",";"Basic churn prediction",";"Email alerts",";"Basic analytics dashboard",";"Email support",";"Standard integrations",";"Monthly reports"; ],;" popular: false;";" },;";" {;";"";" name: "Professional",";"";" price: "$499",";"";" period: "/month",";"";" description: "Ideal for growing businesses",;"";" features: [";"Up to 10,000 customers",";"Advanced AI prediction models",";"Real-time alerts",";"Advanced analytics",";"Priority support",";"Custom integrations",";"Weekly reports",";"API access",";"Retention campaign templates"; ],;" popular: true;";" },;";" {;";"";" name: "Enterprise",";"";" price: "$1,299",";"";" period: "/month",";"";" description: "For large organizations",;"";" features: [";"Unlimited customers",";"Custom AI models",";"Advanced segmentation",";"24/7 support",";"Custom integrations",";"Advanced security",";"Compliance reporting",";"Dedicated account manager",";"White-label solutions"; ],; popular: false; }; ];" ;";" const benefits = [;";" {;"";" icon: TrendingDown,";"";" title: "Reduce Churn by 40%",";"";" description: "Proactive intervention strategies prevent customer loss before it happens";";" },;";" {;"";" icon: Zap,";"";" title: "Real-time Insights",";"";" description: "Instant notifications and alerts when customers show churn risk";";" },;";" {;"";" icon: CheckCircle,";"";" title: "Increased Revenue",";"";" description: "Retain valuable customers and improve lifetime value";";" },;";" {;"";" icon: Clock,";"";" title: "Early Intervention",";"";" description: "Identify at-risk customers up to 90 days before they churn"; }; ];" ;";" const useCases = [;";" {;";"";" title: "SaaS Companies",";"";" description: "Predict subscription cancellations and reduce monthly churn rates";";" },;";" {;";"";" title: "E-commerce",";"";" description: "Identify customers likely to stop purchasing and re-engage them";";" },;";" {;";"";" title: "Financial Services",";"";" description: "Predict account closures and prevent customer attrition";";" },;";" {;";"";" title: "Telecommunications",";"";" description: "Reduce customer turnover and improve retention rates";" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;"";" {}";"";" <section className="relative py-20 overflow-hidden">";"";" <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-purple-900/20"></div>";"";" <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium mb-6">";"";" <TrendingDown className="w-4 h-4" />;";" AI-Powered Retention;"";" </div>";"";" <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">;"";" AI-Powered Customer";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">;";" Churn Predictor;";" </span>;"";" </h1>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">;";" Stop losing customers before they leave.Our AI predicts churn with 95% accuracy;";" and provides actionable insights to retain your most valuable customers.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <Link";"";" to="/contact";"";" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-300";";" >;"";" Start Free Trial";"";" <ArrowRight className="w-5 h-5" />;"";" </Link>";"";" <button className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 transition-colors">";"";" <Eye className="w-5 h-5" />; Watch Demo; </button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;"";" Intelligent Churn";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">;";" Prediction & Prevention;";" </span>;"";" </h2>";"";" <p className="text-lg text-gray-300 max-w-2xl mx-auto">; Our AI analyzes thousands of data points to identify customers at risk of churning;" and provides personalized retention strategies.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div; key={feature.title};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300";"";" >";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">";"";" <feature.icon className="w-8 h-8 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>";"";" <p className="text-gray-300 leading-relaxed">{feature.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;"";" Transform Your";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">; Customer Retention;" </span>;";" </h2>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 gap-8">; {benefits.map((benefit, index) => (; <motion.div; key={benefit.title};" initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }};";" whileInView={{ opacity: 1, x: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="flex items-start gap-6";"";" >";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">";"";" <benefit.icon className="w-8 h-8 text-white" />;";" </div>;"";" <div>";"";" <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>";"";" <p className="text-gray-300 leading-relaxed">{benefit.description}</p>; </div>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;"";" Perfect For";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">;";" Every Industry;";" </span>;"";" </h2>";"";" <p className="text-lg text-gray-300 max-w-2xl mx-auto">;" Our AI-powered churn prediction works across all industries and business models.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">; {useCases.map((useCase, index) => (; <motion.div; key={useCase.title};" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.6, delay: index * 0.1 }};"";" viewport={{ once: true   }}";"";" className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center hover:border-red-500/50 transition-all duration-300";"";" >";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">";"";" <Target className="w-8 h-8 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>";"";" <p className="text-gray-300 leading-relaxed">{useCase.description}</p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;"";" Simple, Transparent";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">;";" Pricing;";" </span>;"";" </h2>";"";" <p className="text-lg text-gray-300 max-w-2xl mx-auto">; Choose the plan that fits your customer base and business needs.;" All plans include our core AI-powered churn prediction capabilities.;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">; {pricingTiers.map((tier, index) => (; <motion.div; key={tier.name}; initial={{ opacity: 0, y: 20 }}; whileInView={{ opacity: 1, y: 0 }}; transition={{ duration: 0.6, delay: index * 0.1 }}; viewport={{ once: true   }}; className={`relative bg-slate-800/50 border rounded-2xl p-8 ${; tier.popular; ? 'border-red-500 shadow-2xl shadow-red-500/20';" : 'border-slate-700';";" }`};";" >;"";" {tier.popular && (";"";" <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";"";" <span className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">; Most Popular;" </span>;";" </div>;";" )};";"";" <div className="text-center mb-8">";"";" <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>";"";" <div className="text-4xl font-bold text-white mb-2">;"";" {tier.price}";"";" <span className="text-lg text-gray-400 font-normal">{tier.period}</span>;"";" </div>";"";" <p className="text-gray-300">{tier.description}</p>;";" </div>;";"";" <ul className="space-y-4 mb-8">;"";" {tier.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center gap-3">";"";" <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />";"";" <span className="text-gray-300">{feature}</span>;" </li>;";" ))};";" </ul>;"";" <Link";"";" to="/contact"; className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${; tier.popular; ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white hover:from-red-600 hover:to-purple-600'; : 'bg-slate-700 text-white hover:bg-slate-600'; }`}; >; Get Started; </Link>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/50">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" viewport={{ once: true   }}";"";" className="max-w-4xl mx-auto";"";" >";"";" <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;"";" Ready to Stop";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">;";" Customer Churn?;";" </span>;"";" </h2>";"";" <p className="text-lg text-gray-300 mb-8">;";" Join thousands of businesses that have reduced churn and increased customer lifetime value;";" with our AI-powered prediction platform.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;"";" <Link";"";" to="/contact";"";" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-300";";" >;"";" Start Free Trial";"";" <ArrowRight className="w-5 h-5" />;";" </Link>;"";" <a";"";" href="tel:+13024640950";"";" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 transition-colors";"";" >";"";" <Phone className="w-5 h-5" />; Call Us; </a>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="container mx-auto px-4 sm:px-6 lg:px-8">";"";" <div className="max-w-4xl mx-auto text-center">";"";" <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">";"";" <div className="flex flex-col items-center gap-4">";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center">";"";" <Phone className="w-8 h-8 text-white" />;";" </div>;"";" <div>";"";" <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>";"";" <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">; +1 302 464 0950;" </a>;";" </div>;";" </div>;";"";" <div className="flex flex-col items-center gap-4">";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center">";"";" <Mail className="w-8 h-8 text-white" />;";" </div>;"";" <div>";"";" <h3 className="text-lg font-semibold text-white mb-2">Email</h3>";"";" <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">; kleber@ziontechgroup.com;" </a>;";" </div>;";" </div>;";"";" <div className="flex flex-col items-center gap-4">";"";" <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center">";"";" <MapPin className="w-8 h-8 text-white" />;";" </div>;"";" <div>";"";" <h3 className="text-lg font-semibold text-white mb-2">Address</h3>";"";" <p className="text-gray-300">; 364 E Main St STE 1008<br / / / / / />; Middletown DE 19709; </p>; </div>; </div>; </div>; </div>; </div>; </section>; </div>;" );";" };";" ;"";" export default AIPoweredCustomerChurnPredictor;";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiPoweredCustomerChurnPredictor() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Ai Powered Customer Churn Predictor Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Powered Customer Churn Predictor Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai powered customer churn predictor operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Powered Customer Churn Predictor Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive ai powered customer churn predictor solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Powered Customer Churn Predictor?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai powered customer churn predictor platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
