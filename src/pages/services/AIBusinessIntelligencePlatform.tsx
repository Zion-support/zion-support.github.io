>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
import React from 'react.ts';
import { motion               } from 'framer-motion.ts';
import { Brain, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  Clock,
  DollarSign,
  Target,
  PieChart,
  LineChart,
  Activity
 } from 'lucide-react';
import { SEO               } from '@/components/SEO';
import { Button               } from '@/components/ui/button';
import { Badge               } from '@/components/ui/badge';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function AIBusinessIntelligencePlatform(...args[]: any):  {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that automatically identify patterns, trends, and insights from your data."
    },
    {
      icon: TrendingUp,
      title: "Real-time Monitoring",
      description: "Live dashboards and alerts that keep you informed of critical business metrics and performance indicators."
    },
    {
      icon: BarChart3,
      title: "Predictive Modeling",
      description: "Forecast future trends and outcomes using historical data and advanced statistical models."
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically, saving hours of manual work each week."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with role-based access control and data encryption at rest and in transit.";
    },;
    {;
      icon: Users,;
      title: "Collaborative Insights",;
      description: "Share dashboards and reports with team members, enabling better collaboration and decision-making.";
    };
  ];
  const benefits = [;
    "Improve decision-making speed by 80%",;
    "Reduce manual reporting by 90%",;
    "Identify business opportunities 3x faster",;
    "Increase operational efficiency by 45%",;
    "Reduce data analysis time by 70%",;
    "Improve forecast accuracy by 60%";
  ];
  const pricingTiers = [
    {
      name: "Starter",
      price: 199,
      period: "month",
      description: "Perfect for small businesses getting started with AI analytics",
      features[
        "Up to 5 users",
        "Basic AI analytics",
        "Standard dashboards",
        "Email support",
        "Data integration (3 sources)",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 499,
      period: "month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features[
        "Up to 25 users",
        "Advanced AI algorithms",
        "Custom dashboards",
        "Priority support",
        "Data integration (10 sources)",
        "Real-time analytics",
        "Predictive modeling",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 1299,
      period: "month",
      description: "For large organizations with complex data analytics requirements",
      features[
        "Unlimited users",
        "Custom AI models",
        "White-label dashboards",
        "24/7 dedicated support",
        "Unlimited data sources",;
        "Advanced security features",;
        "Custom integrations",;
        "SLA guarantees";
      ],;
      popular: false;
    };
  ];
  const useCases = [
    {
      industry: "E-commerce",
      description: "Customer behavior analysis, inventory optimization, and sales forecasting"
    },
    {
      industry: "Healthcare",
      description: "Patient outcome prediction, resource optimization, and clinical analytics"
    },
    {
      industry: "Finance",
      description: "Risk assessment, fraud detection, and portfolio optimization"
    },
    {
      industry: "Manufacturing",;
      description: "Predictive maintenance, quality control, and supply chain optimization";
    },;
    {;
      industry: "Retail",;
      description: "Demand forecasting, customer segmentation, and store performance analysis";
    };
  ];
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Business Intelligence Platform - Zion Tech Group"
        description="Advanced AI-powered business intelligence platform providing real-time insights, predictive analytics, and automated reporting for data-driven decision making."
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
              AI-Powered Business Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Data Into
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Actionable Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered business intelligence platform that provides real-time insights,
              predictive analytics, and automated reporting for data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with intuitive design
              to deliver actionable business intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See measurable improvements in efficiency, decision-making, and business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  x: -20 
}}
                whileInView = {
  { opacity: 1,
  x: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
                <CheckCircle className="h-6 w-6 text-cyan-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {pricingTiers.map((tier, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  tier.popular
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20'
                    : 'border-slate-700'
                }`}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${tier.price}</span>
                    <span className="text-gray-400 ml-2">/{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to work across various industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI to make better decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions? Our team is here to help you get started.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Send Message
              </Button>
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
