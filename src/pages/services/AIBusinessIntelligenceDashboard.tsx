import React from "react"
import { motion } from "framer-motion"
import { ;
  BarChart3,;
  TrendingUp, ;
  Brain, ;
  Zap, ;
  Shield, ;
  Globe, ;
  Users, ;
  Database,;
  PieChart,;
  LineChart,;
  Activity,;
  Target,;
  CheckCircle,;
  Star,;
  ArrowRight,;
  Eye,;
  Lock,;
  Cloud,;
  Smartphone,;
  Monitor,;
  Play,;
  Phone,;
  Mail,;
  MapPin;
} from "lucide-react"
import { SEO } from "../../components/SEO"
const AIBusinessIntelligenceDashboard = () => {;
  const features = [;
    {;
      icon: Brain,title: "AI-Powered Insights",description: "Advanced machine learning algorithms that automatically identify trends, anomalies, and opportunities in your data"
    },;
    {;
      icon: BarChart3,title: "Real-time Analytics",description: "Live dashboards with real-time data updates from multiple sources including CRM, ERP, and external APIs"
    },;
    {;
      icon: TrendingUp,title: "Predictive Analytics",description: "Forecast future trends and outcomes using historical data and AI models with 95%+ accuracy"
    };
    {;
      icon: Zap,title: "Automated Reporting",description: "Intelligent report generation that adapts to your business needs and automatically highlights key insights"
    };
    {;
      icon: Shield,title: "Enterprise Security",description: "Bank-grade security with role-based access control, data encryption, and compliance with GDPR, HIPAA, and SOC 2"
    },;
    {;
      icon: Globe,title: "Multi-platform Access",description: "Access your dashboards from anywhere - web, mobile apps, and integrate with existing business tools"
    };
  ],;

  const pricingPlans = [;
    {;
      name: "Starter",price: "$299",period: "/month",description: "Perfect for small businesses and startups",features: [;
        "Up to 5 data sources"
        "Basic AI insights",;
        "5 user licenses",;
        "Standard reports",;
        "Email support",;
        "Basic integrations"
      ],;
      popular: false;
    };
    {;
      name: "Professional",price: "$799",period: "/month",description: "Ideal for growing businesses and teams",features: [;
        "Up to 20 data sources"
        "Advanced AI analytics",;
        "25 user licenses",;
        "Custom dashboards",;
        "Priority support",;
        "API access",;
        "Advanced integrations",;
        "White-label options"
      ],;
      popular: true;
    };
    {;
      name: "Enterprise",price: "$2,499",;
      period: "/month",description: "For large organizations with complex needs",features: [;
        "Unlimited data sources"
        "Custom AI models",;
        "Unlimited users",;
        "Advanced security",;
        "Dedicated support",;
        "Custom development",;
        "On-premise options",;
        "SLA guarantees"
      ],;
      popular: false;
    };
  ];
  const useCases = [;
    {;
      title: "Sales Performance Analytics",description: "Track sales metrics, pipeline analysis, and revenue forecasting with AI-powered insights",;
      icon: TrendingUp;
    };
    {;
      title: "Customer Behavior Analysis",description: "Understand customer patterns, churn prediction, and lifetime value optimization",;
      icon: Users;
    };
    {;
      title: "Financial Performance Tracking",description: "Monitor KPIs, budget vs actual, and financial forecasting with automated alerts",;
      icon: BarChart3;
    };
    {;
      title: "Operational Efficiency",description: "Identify bottlenecks, optimize processes, and improve productivity across teams",;
      icon: Activity;
    };
  ];
  const testimonials = [;
    {;
      name: "Sarah Johnson",role: "VP of Operations",company: "TechFlow Solutions",content: "The AI insights have transformed how we make decisions. We've increased efficiency by 40% and reduced costs significantly.",rating: 5;
    };
    {;
      name: "Michael Chen",role: "Data Scientist",company: "InnovateCorp",content: "The predictive analytics capabilities are incredible. We can now forecast trends with remarkable accuracy.",rating: 5;
    };
    {;
      name: "Emily Rodriguez",role: "CEO",company: "StartupXYZ",content: "This dashboard has given us enterprise-level insights at a fraction of the cost. Game-changer for our business.",rating: 5;
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <SEO ;
        title="AI-Powered Business Intelligence Dashboard - Zion Tech Group"
        description="Transform your business with AI-powered BI dashboards. Real-time analytics, predictive insights, and automated reporting. Start from $299/month."
      />;
      ;
      {/* Hero Section */};
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">;
              <[^>]*/>
              AI-Powered Business Intelligence;
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-7xl font-bold mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">;
                AI Business Intelligence;
              </[^>]*>
              <[^>]*/>
              <span className="text-white">Dashboard</[^>]*>
            </[^>]*>
            ;
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">;
              Transform your business data into actionable insights with our AI-powered business intelligence platform. ;
              Get real-time analytics, predictive insights, and automated reporting that drives growth.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <a;
                href="https://ziontechgroup.com/contact"
                className="[^"]*"
              >;
                Start Free Trial;
                <[^>]*/>
              </[^>]*>
              <a;
                href="#demo"
                className="[^"]*"
              >;
                <[^>]*/>
                Watch Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        ;
        {/* Background Elements */};
        <div className="absolute inset-0 overflow-hidden pointer-events-none">;
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></[^>]*>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">;
        <div className="max-w-7xl mx-auto">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">;
                Powerful Features;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Everything you need to transform your business data into actionable intelligence;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">;
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">;
                    {feature.title};
                  </[^>]*>
                  <p className="text-gray-300 leading-relaxed">;
                    {feature.description};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">;
        <div className="max-w-7xl mx-auto">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">;
                Use Cases;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              See how businesses are using our AI BI platform to drive growth and efficiency;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm">;
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">;
                    {useCase.title};
                  </[^>]*>
                  <p className="text-gray-300 leading-relaxed">;
                    {useCase.description};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">;
        <div className="max-w-7xl mx-auto">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">;
                Pricing Plans;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Choose the plan that fits your business needs. All plans include a 14-day free trial.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {pricingPlans.map((plan, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className={`relative ${plan.popular ? 'lg:-mt-8' : ''}`};
              >;
                {plan.popular && (;&& (; (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </[^>]*>
                  </[^>]*>
                )};
                ;
                <div className={`glass rounded-2xl p-8 border transition-all duration-300 backdrop-blur-sm h-full ${;
                  plan.popular ;
                    ? 'border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' ;
                    : 'border-white/20 hover:border-cyan-400/40'
                }`}>;
                  <div className="text-center mb-8">;
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</[^>]*>
                    <div className="flex items-baseline justify-center">;
                      <span className="text-5xl font-bold text-white">{plan.price}</[^>]*>
                      <span className="text-gray-400 ml-1">{plan.period}</[^>]*>
                    </[^>]*>
                    <p className="text-gray-300 mt-2">{plan.description}</[^>]*>
                  </[^>]*>
                  ;
                  <ul className="space-y-4 mb-8">;
                    {plan.features.map((feature, idx) => (;
                      <li key={idx} className="flex items-center text-gray-300">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>
                  ;
                  <a;
                    href="https://ziontechgroup.com/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${;
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                        : 'border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                    }`};
                  >;
                    Start Free Trial;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Testimonials Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">;
        <div className="max-w-7xl mx-auto">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">;
                What Our Clients Say;
              </[^>]*>
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {testimonials.map((testimonial, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">;
                  <div className="flex items-center mb-4">;
                    {[...Array(testimonial.rating)].map((_, i) => (;
                      <[^>]*/>
                    ))};
                  </[^>]*>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</[^>]*>
                  <div>;
                    <div className="font-semibold text-white">{testimonial.name}</[^>]*>
                    <div className="text-sm text-cyan-400">{testimonial.role}</[^>]*>
                    <div className="text-sm text-gray-400">{testimonial.company}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 relative">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join thousands of businesses that are already using AI-powered insights to drive growth and efficiency.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <a;
                href="https://ziontechgroup.com/contact"
                className="[^"]*"
              >;
                Start Free Trial;
                <[^>]*/>
              </[^>]*>
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call +1 302 464 0950;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-4xl mx-auto text-center">;
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <div className="text-white font-semibold">Phone</[^>]*>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
                +1 302 464 0950;
              </[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <div className="text-white font-semibold">Email</[^>]*>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">;
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <div className="text-white font-semibold">Address</[^>]*>
              <div className="text-gray-300 text-sm">;
                364 E Main St STE 1008<[^>]*/>
                Middletown DE 19709;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default AIBusinessIntelligenceDashboard;