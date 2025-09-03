<<<<<<< HEAD
import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { BarChart3, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  Database,
  PieChart,
  LineChart,
  Activity,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Eye,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  Play,
  Phone,
  Mail,
  MapPin
 } from 'lucide-react.ts';
import { SEO  } from '../../components/SEO';

const AIBusinessIntelligenceDashboard = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms that automatically identify trends, anomalies, and opportunities in your data"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards with real-time data updates from multiple sources including CRM, ERP, and external APIs"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using historical data and AI models with 95%+ accuracy"
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Intelligent report generation that adapts to your business needs and automatically highlights key insights"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with role-based access control, data encryption, and compliance with GDPR, HIPAA, and SOC 2"
    },
    {
      icon: Globe,
      title: "Multi-platform Access",
      description: "Access your dashboards from anywhere - web, mobile apps, and integrate with existing business tools"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 data sources",
        "Basic AI insights",
        "5 user licenses",
        "Standard reports",
        "Email support",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 20 data sources",
        "Advanced AI analytics",
        "25 user licenses",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Advanced integrations",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited data sources",
        "Custom AI models",
        "Unlimited users",
        "Advanced security",
        "Dedicated support",
        "Custom development",
        "On-premise options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Sales Performance Analytics",
      description: "Track sales metrics, pipeline analysis, and revenue forecasting with AI-powered insights",
      icon: TrendingUp
    },
    {
      title: "Customer Behavior Analysis",
      description: "Understand customer patterns, churn prediction, and lifetime value optimization",
      icon: Users
    },
    {
      title: "Financial Performance Tracking",
      description: "Monitor KPIs, budget vs actual, and financial forecasting with automated alerts",
      icon: BarChart3
    },
    {
      title: "Operational Efficiency",
      description: "Identify bottlenecks, optimize processes, and improve productivity across teams",
      icon: Activity
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Operations",
      company: "TechFlow Solutions",
      content: "The AI insights have transformed how we make decisions. We've increased efficiency by 40% and reduced costs significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "InnovateCorp",
      content: "The predictive analytics capabilities are incredible. We can now forecast trends with remarkable accuracy.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "StartupXYZ",
      content: "This dashboard has given us enterprise-level insights at a fraction of the cost. Game-changer for our business.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Business Intelligence Dashboard - Zion Tech Group"
        description="Transform your business with AI-powered BI dashboards. Real-time analytics, predictive insights, and automated reporting. Start from $299/month."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Brain className="w-4 h-4 mr-2 text-cyan-400" />
              AI-Powered Business Intelligence
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI Business Intelligence
              </span>
              <br />
              <span className="text-white">Dashboard</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business data into actionable insights with our AI-powered business intelligence platform. 
              Get real-time analytics, predictive insights, and automated reporting that drives growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your business data into actionable intelligence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: unknowngrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using our AI BI platform to drive growth and efficiency
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: unknowngrid-cols-2 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg: unknowngrid-cols-3 gap-8">
            {pricingPlans.map((plan, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'lg:-mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`glass rounded-2xl p-8 border transition-all duration-300 backdrop-blur-sm h-full ${
                  plan.popular 
                    ? 'border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-white/20 hover:border-cyan-400/40'
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                        : 'border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md: unknowngrid-cols-3 gap-8">
            {testimonials.map((testimonial, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.comp}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that are already using AI-powered insights to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligenceDashboard;

export { AIBusinessIntelligenceDashboard };

export { AIBusinessIntelligenceDashboard };

export { AIBusinessIntelligenceDashboard };

export { AIBusinessIntelligenceDashboard };

export { AIBusinessIntelligenceDashboard };
=======
<<<<<<< HEAD
import React from 'react'; import { SEO } from '../../components/SEO'; import { GradientHeading } from '../../components/ui/GradientHeading'; import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'; import { Badge } from '../../components/ui/badge'; import { Button } from '../../components/ui/button'; import { CheckCircle, TrendingUp, BarChart3, Zap, Shield, Users, Globe, Clock  } from 'lucide-react'; ; const AIBusinessIntelligenceDashboard: React.FC = (): JSX.Element => {; const features = [; {; icon: <TrendingUp className="h-6 w-6 text-green-500" />,";"";" title: "Real-time Analytics",";"";" description: "Monitor business metrics in real-time with AI-powered insights and predictive analytics";";" },;";" {;";"";" icon: <BarChart3 className="h-6 w-6 text-blue-500" />,";"";" title: "Advanced Reporting",";"";" description: "Generate comprehensive reports with automated insights and actionable recommendations";";" },;";" {;";"";" icon: <Zap className="h-6 w-6 text-yellow-500" />,";"";" title: "AI-Powered Insights",";"";" description: "Get intelligent insights and recommendations based on your data patterns";";" },;";" {;";"";" icon: <Shield className="h-6 w-6 text-purple-500" />,";"";" title: "Data Security",";"";" description: "Enterprise-grade security with role-based access control and data encryption";";" },;";" {;";"";" icon: <Users className="h-6 w-6 text-indigo-500" />,";"";" title: "Team Collaboration",";"";" description: "Share dashboards and insights with your team for better decision-making";";" },;";" {;";"";" icon: <Globe className="h-6 w-6 text-teal-500" />,";"";" title: "Multi-platform Access",";"";" description: "Access your dashboards from where with responsive web and mobile interfaces"; }; ];" ;";" const pricingTiers = [;";" {;";"";" name: "Starter",";"";" price: "$299",";"";" period: "/month",";"";" description: "Perfect for small businesses getting started with BI",;"";" features[";"Up to 5 users",";"10 data sources",";"Basic AI insights",";"Standard reports",";"Email support",";"1GB data storage"; ],;" popular: false;";" },;";" {;";"";" name: "Professional",";"";" price: "$799",";"";" period: "/month",";"";" description: "Ideal for growing businesses with advanced BI needs",;"";" features[";"Up to 25 users",";"Unlimited data sources",";"Advanced AI insights",";"Custom dashboards",";"Priority support",";"10GB data storage",";"API access",";"White-label options"; ],;" popular: true;";" },;";" {;";"";" name: "Enterprise",";"";" price: "$1,999",";"";" period: "/month",";"";" description: "For large enterprises requiring maximum scalability",;"";" features[";"Unlimited users",";"Unlimited data sources",";"Premium AI insights",";"Custom development",";"24/7 dedicated support",";"Unlimited data storage",";"Advanced security",";"On-premise options",";"Custom integrations"; ],; popular: false; }; ];" ;";" const benefits = [;";" {;";"";" metric: "40%",";"";" description: "Faster decision making with real-time insights";";" },;";" {;";"";" metric: "60%",";"";" description: "Reduction in manual reporting time";";" },;";" {;";"";" metric: "85%",";"";" description: "Improvement in data accuracy and reliability";";" },;";" {;";"";" metric: "3x",";"";" description: "Increase in team productivity and collaboration";" };";" ];";" ;"";" return(";"";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="AI-Powered Business Intelligence Dashboard - Zion Tech Group";"";" description="Transform your business data into actionable intelligence with our AI-powered BI dashboard.Real-time analytics, predictive insights, and comprehensive reporting.";";" />;"";" {}";"";" <div className="relative overflow-hidden">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">";"";" <div className="text-center">";"";" <GradientHeading className="text-5xl md:text-6xl font-bold mb-6">;";" AI-Powered Business Intelligence Dashboard;"";" </GradientHeading>";"";" <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;";" Transform your business data into actionable intelligence with our cutting-edge AI-powered BI dashboard.;";" Get real-time insights, predictive analytics, and comprehensive reporting that drives better decision-making.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <Button size="lg" className="bg-zion-purple hover:bg-zion-purple/90">;";" Start Free Trial;"";" </Button>";"";" <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-slate-900">; Schedule Demo; </Button>; </div>;" </div>;";" </div>;";" </div>;"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center mb-16">";"";" <h2 className="text-3xl font-bold text-white mb-4">Transform Your Business Intelligence</h2>";"";" <p className="text-gray-300 text-lg">See measurable improvements in your business operations</p>;";" </div>;";"";" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">;"";" {benefits.map((benefit, index) => (";"";" <div key={index} className="text-center">";"";" <div className="text-4xl font-bold text-zion-cyan mb-2">{benefit.metric}</div>";"";" <p className="text-gray-300">{benefit.description}</p>; </div>;" ))};";" </div>;";" </div>;"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center mb-16">";"";" <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>";"";" <p className="text-gray-300 text-lg">Everything you need for comprehensive business intelligence</p>;";" </div>;";"";" <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">;"";" {features.map((feature, index) => (";"";" <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-zion-cyan transition-colors">;"";" <CardHeader>";"";" <div className="flex items-center gap-3">;"";" {feature.icon}";"";" <CardTitle className="text-white">{feature.title}</CardTitle>;";" </div>;";" </CardHeader>;"";" <CardContent>";"";" <p className="text-gray-300">{feature.description}</p>; </CardContent>; </Card>;" ))};";" </div>;";" </div>;"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center mb-16">";"";" <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>";"";" <p className="text-gray-300 text-lg">Choose the plan that fits your business needs</p>;";" </div>;";"";" <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;";" {pricingTiers.map((tier, index) => (;";" <Card key={index} className={`relative ${tier.popular ? 'border-zion-cyan ring-2 ring-zion-cyan' : 'border-slate-700'} bg-slate-800/50`}>;"";" {tier.popular && (";"";" <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-slate-900">;";" Most Popular;";" </Badge>;"";" )}";"";" <CardHeader className="text-center">";"";" <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>";"";" <div className="flex items-baseline justify-center gap-1">";"";" <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>";"";" <span className="text-gray-400">{tier.period}</span>;"";" </div>";"";" <CardDescription className="text-gray-300">{tier.description}</CardDescription>;";" </CardHeader>;"";" <CardContent>";"";" <ul className="space-y-3 mb-6">;"";" {tier.features.map((feature, featureIndex) => (";"";" <li key={featureIndex} className="flex items-center gap-2">";"";" <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />";"";" <span className="text-gray-300">{feature}</span>;";" </li>;";" ))};"";" </ul>";"";" <Button className="w-full bg-zion-purple hover:bg-zion-purple/90">; Get Started; </Button>; </CardContent>; </Card>;" ))};";" </div>;";" </div>;"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center">";"";" <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business Intelligence?</h2>";"";" <p className="text-gray-300 text-lg mb-8">;";" Join thousands of businesses that have already transformed their data into actionable insights;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">";"";" <Button size="lg" className="bg-zion-purple hover:bg-zion-purple/90">;";" Start Free Trial;"";" </Button>";"";" <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-slate-900">; Contact Sales; </Button>;" </div>;";" </div>;";" </div>;"";" {}";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">";"";" <div className="text-center">";"";" <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>";"";" <div className="grid grid-cols-1 md:grid-cols-3 gap-8">";"";" <div className="text-center">";"";" <Clock className="h-12 w-12 text-zion-cyan mx-auto mb-4" />";"";" <h4 className="text-white font-semibold mb-2">24/7 Support</h4>";"";" <p className="text-gray-300">Round-the-clock assistance for all your needs</p>;"";" </div>";"";" <div className="text-center">";"";" <Users className="h-12 w-12 text-zion-cyan mx-auto mb-4" />";"";" <h4 className="text-white font-semibold mb-2">Expert Consultation</h4>";"";" <p className="text-gray-300">Get personalized guidance from our BI experts</p>;"";" </div>";"";" <div className="text-center">";"";" <Globe className="h-12 w-12 text-zion-cyan mx-auto mb-4" />";"";" <h4 className="text-white font-semibold mb-2">Global Reach</h4>";"";" <p className="text-gray-300">Serving businesses worldwide with local expertise</p>;";" </div>;"";" </div>";"";" <div className="mt-8">";"";" <p className="text-gray-300 mb-4">;";" <strong>Contact us:</strong> +1 302 464 0950 | kleber@ziontechgroup.com;"";" </p>";"";" <p className="text-gray-300">; <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709; </p>; </div>; </div>; </div>;" </div>;";" )};";" ;"";" export default AIBusinessIntelligenceDashboard;";"";"
=======
import React from "react"
import Link from "next/link"
import Head from "next/head"
const AIBusinessIntelligenceDashboard = () => {
  return (
    <>
      <Head>
        <title>Business Intelligence Dashboard - AI Services</title>
        <meta name="description" content="Professional Business Intelligence Dashboard services powered by AI"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Business Intelligence Dashboard
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Business Intelligence Dashboard services powered by artificial intelligence
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Advanced AI Solutions</li>
                  <li>• Custom Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Expert Consultation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default AIBusinessIntelligenceDashboard
>>>>>>> main
>>>>>>> main
