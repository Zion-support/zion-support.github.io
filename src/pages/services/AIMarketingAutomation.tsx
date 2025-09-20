import React from "react"
import { motion } from "framer-motion"
import { ;
  Target,;
  TrendingUp, ;
  Users, ;
  Clock, ;
  BarChart3, ;
  Shield, ;
  Zap, ;
  CheckCircle,;
  Brain,;
  Workflow,;
  MessageSquare,;
  Mail,;
  Smartphone,;
  Globe,;
  Star,;
  ArrowRight,;
  Play,;
  Cpu,;
  Heart,;
  Eye;
} from "lucide-react"
import { SEO } from "../../components/SEO"
const AIMarketingAutomation = () => {;
  const features = [;
    {;
      icon: Brain,title: "AI-Powered Audience Targeting",description: "Machine learning algorithms identify and target your ideal customers with precision",price: "$59/month"
    };
    {;
      icon: Target,title: "Smart Campaign Optimization",description: "AI continuously optimizes campaigns for maximum ROI and engagement",price: "$79/month"
    };
    {;
      icon: MessageSquare,title: "Personalized Content Generation",description: "AI creates personalized marketing content for each customer segment",price: "$69/month"
    };
    {;
      icon: Workflow,title: "Automated Marketing Workflows",description: "Intelligent automation that nurtures leads and converts prospects",price: "$89/month"
    };
    {;
      icon: BarChart3,title: "Predictive Analytics",description: "AI predicts customer behavior and campaign performance",price: "$99/month"
    };
    {;
      icon: Users,title: "Multi-Channel Orchestration",description: "Seamlessly coordinate campaigns across email, social, and web",;
      price: "$119/month"
    };
  ];
  const pricingPlans = [;
    {;
      name: "Starter",price: "$59",period: "/month",description: "Perfect for small businesses starting with AI marketing",features: [;
        "Basic audience targeting"
        "Email automation",;
        "Social media posting",;
        "Email support"
      ],;
      popular: false;
    };
    {;
      name: "Professional",price: "$149",period: "/month",description: "Ideal for growing businesses with multiple marketing channels",features: [;
        "All Starter features"
        "Advanced AI targeting",;
        "Multi-channel campaigns",;
        "Priority support",;
        "Custom integrations"
      ],;
      popular: true;
    };
    {;
      name: "Enterprise",price: "$399",period: "/month",description: "For large organizations with complex marketing needs",features: [;
        "All Professional features"
        "Custom AI models",;
        "Advanced analytics",;
        "Dedicated support",;
        "White-label options"
      ],;
      popular: false;
    };
  ];
  const benefits = [;
    {;
      icon: TrendingUp,title: "300% Higher ROI",description: "AI-optimized campaigns deliver significantly better returns"
    };
    {;
      icon: Clock,title: "80% Time Savings",description: "Automate repetitive marketing tasks and focus on strategy"
    };
    {;
      icon: Target,title: "5x Better Targeting",description: "AI identifies and reaches your ideal customers with precision"
    };
    {;
      icon: Heart,title: "Personalized Experience",description: "Every customer receives relevant, personalized content"
    };
  ],;

  return (
    <>;
      <SEO ;
        title="AI Marketing Automation - Zion Tech Group"
        description="Revolutionary AI-powered marketing automation platform that personalizes campaigns, optimizes performance, and delivers exceptional ROI through intelligent automation."
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */};
        <section className="relative overflow-hidden py-20 px-4">;
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></[^>]*>
          <div className="container mx-auto max-w-7xl relative z-10">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-400 text-sm font-medium mb-6">;
                <[^>]*/>
                AI Marketing Automation;
              </[^>]*>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
                <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">;
                  AI Marketing Automation;
                </[^>]*>
                <[^>]*/>
                <span className="text-white">That Converts</[^>]*>
              </[^>]*>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Transform your marketing with AI that personalizes campaigns, optimizes performance, and delivers ;
                exceptional ROI. Automate what you can, personalize what matters.;
              </[^>]*>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  <[^>]*/>
                  Start Free Trial;
                </[^>]*>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Watch Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Benefits Section */};
        <section className="py-20 px-4">;
          <div className="container mx-auto max-w-7xl">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                Transform Your Marketing Results;
              </[^>]*>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                See measurable improvements in ROI, customer engagement, and campaign performance;
              </[^>]*>
            </[^>]*>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits.map((benefit, index) => (;
                <motion.div
                  key={index};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  className="[^"]*"
                >;
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</[^>]*>
                  <p className="text-gray-300">{benefit.description}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Features Section */};
        <section className="py-20 px-4 bg-slate-800/30">;
          <div className="container mx-auto max-w-7xl">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                AI-Powered Features That Revolutionize Marketing;
              </[^>]*>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our AI doesn't just automate—it personalizes, optimizes, and delivers results that matter;
              </[^>]*>
            </[^>]*>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {features.map((feature, index) => (;
                <motion.div
                  key={index};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  className="[^"]*"
                >;
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</[^>]*>
                  <p className="text-gray-300 mb-4">{feature.description}</[^>]*>
                  <div className="text-pink-400 font-semibold">{feature.price}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Pricing Section */};
        <section className="py-20 px-4">;
          <div className="container mx-auto max-w-7xl">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                Choose Your AI Marketing Plan;
              </[^>]*>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Start with our free trial and scale as you grow. All plans include our core AI features.;
              </[^>]*>
            </[^>]*>

            <div className="grid md:grid-cols-3 gap-8">;
              {pricingPlans.map((plan, index) => (;
                <motion.div
                  key={index};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${;
                    plan.popular ;
                      ? 'border-pink-400 shadow-lg shadow-pink-400/20' ;
                      : 'border-slate-700/50'
                  }`};
                >;
                  {plan.popular && (;&& (; (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                        Most Popular;
                      </[^>]*>
                    </[^>]*>
                  )};
                  ;
                  <div className="text-center mb-6">;
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</[^>]*>
                    <div className="flex items-baseline justify-center mb-2">;
                      <span className="text-4xl font-bold text-white">{plan.price}</[^>]*>
                      <span className="text-gray-400 ml-1">{plan.period}</[^>]*>
                    </[^>]*>
                    <p className="text-gray-300">{plan.description}</[^>]*>
                  </[^>]*>

                  <ul className="space-y-3 mb-8">;
                    {plan.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-gray-300">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  <motion.button
                    whileHover={{ scale: 1.02 }};
                    whileTap={{ scale: 0.98 }};
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${;
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                    }`};
                  >;
                    Get Started;
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* CTA Section */};
        <section className="py-20 px-4 bg-slate-800/30">;
          <div className="container mx-auto max-w-4xl text-center">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Marketing?;
              </[^>]*>
              <p className="text-xl text-gray-300 mb-8">;
                Join thousands of businesses already using AI to create personalized, high-converting campaigns;
              </[^>]*>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
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
export default AIMarketingAutomation;