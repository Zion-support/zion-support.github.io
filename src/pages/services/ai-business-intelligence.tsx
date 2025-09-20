import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ;
  Brain,;
  BarChart3, ;
  TrendingUp, ;
  Target, ;
  Zap, ;
  Shield, ;
  Cloud, ;
  Users,;
  CheckCircle,;
  ArrowRight,;
  Lightbulb,;
  Cpu,;
  Database,;
  Network,;
  Eye,;
  Sparkles,;
  Rocket,;
  Globe,;
  Clock,;
  Award,;
  Star,;
  MessageCircle,;
  Phone,;
  Mail,;
  ShoppingCart,;
  DollarSign,;
  Heart,;
  Factory;
} from "lucide-react"
import { SEO } from "../../components/SEO"
export default function AIBusinessIntelligence() {;
  const features = [;
    {;
      icon: Brain,title: 'Advanced Machine Learning',description: 'State-of-the-art ML algorithms that continuously learn and improve from your data'
    };
    {;
      icon: BarChart3,title: 'Real-time Analytics',description: 'Instant insights and dashboards updated in real-time for immediate decision-making'
    };
    {;
      icon: TrendingUp,title: 'Predictive Analytics',description: 'Forecast trends, identify opportunities, and predict potential risks before they occur'
    },;
    {;
      icon: Target,title: 'Intelligent Automation',description: 'Automate routine analysis tasks and focus on strategic decision-making'
    };
  ];
  const benefits = [;
    'Faster decision-making with real-time insightsImproved accuracy through machine learning',;
    'Cost reduction through process automationCompetitive advantage with predictive capabilities',;
    'Enhanced customer understanding and personalizationStreamlined operations and resource optimization'
  ],;

  const useCases = [;
    {;
      industry: 'Retail & E-commerce',applications: ['Customer segmentationDemand forecasting', 'Inventory optimizationPersonalized marketing'],;
      icon: ShoppingCart;
    };
    {;
      industry: 'Financial Services',applications: ['Risk assessmentFraud detection', 'Portfolio optimizationCustomer churn prediction'],;
      icon: DollarSign;
    };
    {;
      industry: 'Healthcare',applications: ['Patient outcome predictionResource allocation', 'Treatment optimizationDisease prevention'],;
      icon: Heart;
    };
    {;
      industry: 'Manufacturing',applications: ['Predictive maintenanceQuality control', 'Supply chain optimizationProduction planning'],;
      icon: Factory;
    };
  ];
  const technologies = [;
    'TensorFlow & PyTorchApache Spark',;
    'AWS SageMakerAzure Machine Learning',;
    'Google Cloud AISnowflake Data Platform',;
    'Tableau & Power BICustom ML Models'
  ],;

  const process = [;
    {;
      step: 1,title: 'Data Assessment',description: 'Evaluate your current data infrastructure and identify opportunities for improvement'
    };
    {;
      step: 2,title: 'Strategy Development',description: 'Create a comprehensive AI BI roadmap aligned with your business objectives'
    };
    {;
      step: 3,title: 'Implementation',description: 'Deploy AI-powered BI solutions with minimal disruption to existing operations'
    };
    {;
      step: 4,title: 'Training & Optimization',description: 'Train your team and continuously optimize the system for maximum performance'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="AI Business Intelligence - Zion Tech Group"
        description="Transform your business with AI-powered business intelligence solutions. Get real-time insights, predictive analytics, and intelligent automation."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20">;
        <[^>]*/>
        ;
        <div className="container mx-auto px-4 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="flex items-center justify-center space-x-3 mb-6">;
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">;
                <[^>]*/>
              </[^>]*>
              <span className="text-cyan-400 font-medium">AI-Powered Solutions</[^>]*>
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              AI Business <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Intelligence</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
              Transform your business data into actionable intelligence with cutting-edge AI and machine learning. ;
              Get real-time insights, predictive analytics, and intelligent automation that drive growth and innovation.;
            </[^>]*>
            ;
            <div className="flex flex-wrap justify-center gap-4">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Get Started;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI BI Features</[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered business intelligence platform combines cutting-edge technology with intuitive design ;
              to deliver insights that transform your business.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <div className="grid lg:grid-cols-2 gap-12 items-center">;
            <motion.div
              initial={{ opacity: 0, x: -20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
            >;
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose AI-Powered BI?</[^>]*>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">;
                Traditional business intelligence tools are limited by manual processes and static reports. ;
                Our AI-powered solutions provide dynamic, intelligent insights that adapt to your business needs.;
              </[^>]*>
              ;
              <div className="space-y-4">;
                {benefits.map((benefit, index) => (;
                  <motion.div
                    key={benefit};
                    initial={{ opacity: 0, x: -20 }};
                    whileInView={{ opacity: 1, x: 0 }};
                    transition={{ duration: 0.5, delay: index * 0.1 }};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    <span className="text-gray-300">{benefit}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
            ;
            <motion.div
              initial={{ opacity: 0, x: 20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30 flex items-center justify-center">;
                <div className="text-center">;
                  <[^>]*/>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Analytics Dashboard</[^>]*>
                  <p className="text-gray-300">Real-time insights at your fingertips</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI business intelligence solutions are transforming industries across the globe;
              delivering measurable results and competitive advantages.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-2 gap-8">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={useCase.industry};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center mb-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</[^>]*>
                </[^>]*>
                <div className="space-y-2">;
                  {useCase.applications.map((application) => (;
                    <div key={application} className="flex items-center space-x-2">;
                      <[^>]*/>
                      <span className="text-gray-300 text-sm">{application}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Technologies Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Cutting-Edge Technologies</[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We leverage the latest AI and machine learning technologies to deliver powerful;
              scalable business intelligence solutions.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-4 gap-6">;
            {technologies.map((tech, index) => (;
              <motion.div
                key={tech};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">;
                  <[^>]*/>
                </[^>]*>
                <span className="text-white text-sm font-medium">{tech}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Process Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Implementation Process</[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our proven implementation methodology ensures successful deployment of AI business intelligence ;
              solutions with minimal disruption to your operations.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {process.map((step, index) => (;
              <motion.div
                key={step.step};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">;
                  {step.step};
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</[^>]*>
                <p className="text-gray-300">{step.description}</[^>]*>
                ;
                {index < process.length - 1 && (;&& (; (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-x-1/2"></[^>]*>
                )};
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business Intelligence?</[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join the AI revolution and unlock the full potential of your business data. ;
              Let's discuss how our AI-powered BI solutions can drive growth and innovation for your organization.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Get Started Today;
              </[^>]*>
              <Link;
                to="/services"
                className="[^"]*"
              >;
                Explore All Services;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};