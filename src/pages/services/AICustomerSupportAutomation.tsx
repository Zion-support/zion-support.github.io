import React from "react"
import { motion } from "framer-motion"
import { ;
  MessageCircle,;
  Bot, ;
  Brain, ;
  Zap, ;
  Shield, ;
  Globe, ;
  Users, ;
  Clock,;
  CheckCircle,;
  Star,;
  ArrowRight,;
  Play,;
  Phone,;
  Mail,;
  MapPin,;
  Headphones,;
  Smartphone,;
  Monitor,;
  TrendingUp,;
  BarChart3,;
  Target,;
  Settings,;
  Database,;
  Cloud,;
  AlertCircle,;
  FileText,;
  Calendar,;
  UserCheck;
} from "lucide-react"
import { SEO } from "../../components/SEO"
const AICustomerSupportAutomation = () => {;
  const features = [;
    {;
      icon: Bot,title: "AI-Powered Chatbots",description: "Intelligent chatbots that understand context, handle complex queries, and provide accurate responses 24/7 with 95%+ accuracy"
    },;
    {;
      icon: Brain,title: "Natural Language Processing",description: "Advanced NLP that understands customer intent, sentiment, and provides personalized responses in multiple languages"
    },;
    {;
      icon: Clock,title: "24/7 Availability",description: "Round-the-clock customer support with instant responses, reducing wait times from hours to seconds"
    },;
    {;
      icon: BarChart3,title: "Smart Ticket Routing",description: "AI-powered ticket classification and routing to the right agents based on complexity, urgency, and expertise"
    },;
    {;
      icon: TrendingUp,title: "Performance Analytics",description: "Comprehensive insights into support metrics, customer satisfaction, and agent performance with actionable recommendations"
    },;
    {;
      icon: Shield,title: "Enterprise Security",description: "Bank-grade security with data encryption, GDPR compliance, and role-based access control for sensitive customer information"
    };
  ],;

  const pricingPlans = [;
    {;
      name: "Starter",price: "$199",period: "/month",description: "Perfect for small businesses and startups",features: [;
        "Up to 1,000 conversations/month",;
        "Basic AI chatbot",;
        "5 agent licenses",;
        "Email support",;
        "Basic integrations",;
        "Standard templates",;
        "Basic analytics"
      ],;
      popular: false;
    };
    {;
      name: "Professional",price: "$599",period: "/month",description: "Ideal for growing businesses and teams",features: [;
        "Up to 10,000 conversations/month",;
        "Advanced AI with NLP",;
        "25 agent licenses",;
        "Priority support",;
        "API access",;
        "Custom integrations",;
        "Advanced analytics",;
        "Multi-language support",;
        "White-label options"
      ],;
      popular: true;
    };
    {;
      name: "Enterprise",price: "$1,999",;
      period: "/month",description: "For large organizations with high support volumes",features: [;
        "Unlimited conversations"
        "Custom AI models",;
        "Unlimited agents",;
        "Dedicated support",;
        "Custom development",;
        "Advanced security",;
        "On-premise options",;
        "SLA guarantees",;
        "Custom training"
      ],;
      popular: false;
    };
  ];
  const useCases = [;
    {;
      title: "E-commerce Support",description: "Handle order inquiries, returns, and product questions automatically while escalating complex issues to human agents",;
      icon: ShoppingCart;
    };
    {;
      title: "SaaS Customer Success",description: "Provide instant technical support, onboarding assistance, and feature explanations to improve user adoption",;
      icon: Monitor;
    };
    {;
      title: "Financial Services",description: "Handle account inquiries, transaction questions, and basic banking operations with security and compliance",;
      icon: DollarSign;
    };
    {;
      title: "Healthcare Support",description: "Manage appointment scheduling, general inquiries, and provide health information while maintaining HIPAA compliance",;
      icon: Heart;
    };
  ];
  const benefits = [;
    {;
      icon: Clock,title: "Faster Response",value: "90%",description: "Reduce response times from hours to seconds"
    };
    {;
      icon: DollarSign,title: "Cost Reduction",value: "60-80%",description: "Lower support costs while improving quality"
    };
    {;
      icon: Users,title: "Customer Satisfaction",value: "40%",description: "Improve CSAT scores with instant support"
    };
    {;
      icon: TrendingUp,title: "Efficiency Gain",value: "3x",description: "Handle more support requests with fewer agents"
    };
  ];
  const testimonials = [;
    {;
      name: "Jennifer Adams",role: "Customer Success Director",company: "TechFlow Solutions",content: "Our AI support automation has transformed customer experience. Response times dropped from 4 hours to under 2 minutes.",rating: 5;
    };
    {;
      name: "Marcus Chen",role: "Operations Manager",company: "E-commerce Plus",content: "The chatbot handles 70% of our inquiries automatically, freeing our agents to focus on complex customer issues.",;
      rating: 5;
    };
    {;
      name: "Sarah Williams",role: "VP of Support",company: "CloudTech Inc",content: "Customer satisfaction increased by 35% while reducing support costs by 65%. Game-changing technology.",rating: 5;
    };
  ];
  const integrations = [;
    { name: "Slack", icon: MessageCircle, description: "Seamless team communication" };
    { name: "Zendesk", icon: Headphones, description: "Ticket management integration" };
    { name: "Salesforce", icon: Users, description: "CRM synchronization" };
    { name: "Intercom", icon: Bot, description: "Live chat integration" };
    { name: "HubSpot", icon: BarChart3, description: "Marketing automation" };
    { name: "Microsoft Teams", icon: Monitor, description: "Team collaboration" };
  ];
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="AI-Powered Customer Support Automation - Zion Tech Group"
        description="Transform customer support with AI automation. 24/7 availability, instant responses, and 60-80% cost reduction. Start from $199/month."
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
              AI-Powered Support Automation;
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-7xl font-bold mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">;
                Customer Support;
              </[^>]*>
              <[^>]*/>
              <span className="text-white">Automation</[^>]*>
            </[^>]*>
            ;
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">;
              Transform your customer support with AI automation that provides 24/7 availability;
              instant responses, and reduces support costs by 60-80% while improving customer satisfaction.;
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

      {/* Benefits Section */};
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
                Proven Results;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              See the measurable impact AI automation can have on your customer support;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">;
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">;
                    <[^>]*/>
                  </[^>]*>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.value}</[^>]*>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</[^>]*>
                  <p className="text-gray-300 text-sm">{benefit.description}</[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
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
                Powerful Features;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Everything you need to automate and optimize your customer support;
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
                Use Cases;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              See how different industries are transforming customer support with AI automation;
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

      {/* Integrations Section */};
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
                Seamless Integrations;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Connect with your existing tools and workflows for maximum efficiency;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {integrations.map((integration, index) => (;
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
                    {integration.name};
                  </[^>]*>
                  <p className="text-gray-300 leading-relaxed">;
                    {integration.description};
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
              Choose the plan that fits your support volume and business needs. All plans include a 14-day free trial.;
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
              Ready to Transform Your Customer Support?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join leading companies that are already reducing costs and improving customer satisfaction with AI-powered support automation.;
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
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">;
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

        {/* CTA Section */};
        <div className="py-20 px-4 bg-slate-800/30">;
          <div className="container mx-auto max-w-4xl text-center">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Customer Support?;
              </[^>]*>
              <p className="text-xl text-gray-300 mb-8">;
                Join thousands of businesses already using AI to provide exceptional customer experiences;
              </[^>]*>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Start Free Trial;
                  <[^>]*/>
                </[^>]*>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Contact Sales;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
      </[^>]*>
    );
};
//[^;]*
const ShoppingCart = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">;
    <[^>]*/>
  </[^>]*>
),;

const DollarSign = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">;
    <[^>]*/>
  </[^>]*>
),;

const Heart = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">;
    <[^>]*/>
  </[^>]*>
),;

export default AICustomerSupportAutomation;