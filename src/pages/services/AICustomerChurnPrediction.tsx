<<<<<<< HEAD
import React from 'react.ts';
import { SEO              } from '@/components/SEO';
import { motion              } from 'framer-motion.ts';
import { TrendingDown,
  Brain,
  BarChart3,
  Shield,
  Zap,
  Users,
  Target,
=======
import React from 'react.ts';
import { SEO               } from '@/components/SEO';
import { motion               } from 'framer-motion.ts';
import { TrendingDown, 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  Target, 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign
<<<<<<< HEAD
const AICustomerChurnPrediction: React.FC = (): JSX.Element => {
=======
              } from 'lucide-react.ts';

const AICustomerChurnPrediction: React.FC = (): JSX.Element => {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning models that predict customer churn with 95%+ accuracy using behavioral patterns and engagement metrics."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards showing customer health scores, risk factors, and predictive insights updated every 15 minutes."
    },
    {
      icon: Target,
      title: "Proactive Interventions",
<<<<<<< HEAD
      description: "Automated alerts and recommended actions to prevent churn before it happens, with success rate tracking."
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      description: "Intelligent clustering of customers by risk level, value, and behavior patterns for targeted retention strategies."

=======
      description: "Automated alerts and recommended actions to prevent churn before it happens, with success rate tracking.";
    },;
    {;
      icon: Users,;
      title: "Customer Segmentation",;
      description: "Intelligent clustering of customers by risk level, value, and behavior patterns for targeted retention strategies.";
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const benefits = [;
    "Reduce customer churn by 40-60%",;
    "Increase customer lifetime value by 35%",;
    "Save $50K+ annually on customer acquisition",;
    "Improve customer satisfaction scores by 25%",;
    "Automate 80% of retention workflows";
  ];

  const integrations = [;
    "Salesforce, HubSpot, Pipedrive",;
    "Stripe, PayPal, Square",;
    "Intercom, Zendesk, Freshdesk",;
    "Google Analytics, Mixpanel, Amplitude",;
    "Slack, Microsoft Teams, Email";
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299",
      period: "/month",
      features["Up to 1,000 customers", "Basic churn predictions", "Email alerts", "Standard support"],
      popular: false
    },
    {
      plan: "Growth",
      price: "$799",
      period: "/month",
      features["Up to 10,000 customers", "Advanced ML models", "Custom dashboards", "Priority support", "API access"],
      popular: true
    },
    {
      plan: "Enterprise",
<<<<<<< HEAD
      price: "Custom",
      period: "",
      features["Unlimited customers", "Custom ML models", "White-label solution", "Dedicated support", "SLA guarantees"],
      popular: false
<<<<<<< HEAD

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO
=======
    };
=======;
      price: "Custom",;
      period: "",;
      features: ["Unlimited customers", "Custom ML models", "White-label solution", "Dedicated support", "SLA guarantees"],;
      popular: false;
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        title="AI Customer Churn Prediction Platform - Zion Tech Group"
        description="Predict and prevent customer churn with AI-powered analytics. Reduce churn by 40-60% and increase customer lifetime value with our advanced machine learning platform."
        keywords="customer churn prediction, AI analytics, customer retention, machine learning, predictive analytics, customer success"
        canonical="https://ziontechgroup.com/services/ai-customer-churn-prediction"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-slate-800 to-blue-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="mb-8"

            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <TrendingDown className="w-4 h-4 mr-2" />
              Churn Prevention Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AI Customer Churn Prediction
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Stop losing customers before they leave. Our AI platform predicts churn with 95%+ accuracy and automatically triggers retention strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-cyan-400 font-semibold">
                <Star className="w-5 h-5 mr-2 fill-current" />
                4.9/5 Rating
              </div>
              <div className="flex items-center text-green-400 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                95%+ Accuracy
              </div>
              <div className="flex items-center text-blue-400 font-semibold">
                <Clock className="w-5 h-5 mr-2" />
                Real-time Updates
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced AI capabilities designed to predict, prevent, and manage customer churn effectively
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {features.map((feature, index)              => (
=======
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {features.map((feature, index)               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -30 : 30 






}}
                whileInView = {
  { opacity: 1,
  x: 0 






}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-red-500 transition-all duration-300"

                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our platform delivers measurable business outcomes that directly impact your bottom line
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index)              => (
=======
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index)               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <motion.div
                key={benefit}
                initial = {
  { opacity: 0,
  y: 30 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 text-center"

                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-300 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows without disruption
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 lg:grid-cols-5 gap-6">
            {integrations.map((integration, index)              => (
=======
          
          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 lg:grid-cols-5 gap-6">
            {integrations.map((integration, index)               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <motion.div
                key={integration}
                initial = {
  { opacity: 0,
  scale: 0.8 






}}
                whileInView = {
  { opacity: 1,
  scale: 1 






}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center hover:border-blue-500 transition-colors"

                <p className="text-slate-300 text-sm font-medium">{integration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs with no hidden fees
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index)              => (
=======
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index)               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <motion.div
                key={plan.plan}
                initial = {
  { opacity: 0,
  y: 30 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                viewport={{ once: true }}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border ${
                  plan.popular
                    ? 'border-red-500 shadow-lg shadow-red-500/20'
                    : 'border-slate-700'
                }`}

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Stop Customer Churn?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join 500+ companies that have reduced churn and increased customer lifetime value with our AI platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"

                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"

                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-slate-300">
              <div>
                <DollarSign className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="font-semibold">Starting at $299/month</p>
                <p className="text-sm">No setup fees, cancel time</p>
              </div>
              <div>
                <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="font-semibold">Setup in 24 hours</p>
                <p className="text-sm">Quick integration with your tools</p>
              </div>
              <div>
                <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="font-semibold">Enterprise Security</p>
                <p className="text-sm">SOC 2, GDPR, HIPAA compliant</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700">
              <p className="text-slate-300 mb-4">
                <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
              </p>
              <p className="text-slate-300">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
<<<<<<< HEAD
            </div>
          </div>
        </div>
      </section>;
    </div>;
  )};
=======
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default AICustomerChurnPrediction;}}}