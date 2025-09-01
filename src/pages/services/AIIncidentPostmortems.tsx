import { AlertTriangle, 
  Clock, 
  TrendingUp, 
  Shield, 
  Users, 
  Database, 
  BarChart3, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Target,
  Globe,
  Lock,
  Search,
  FileText,
  Calendar,
  MessageSquare,
  Bell,
  Phone,
  Mail,
  MapPin,
  Server
} from 'lucide-react';

export default function AIIncidentPostmortems(...args[]): {
  ;
  ;
  ;
  website: 'https://ziontechgroup.com';
  }},;
    {;
      icon: Database,;
      title: 'Centralized Knowledge Base',;
      description: 'Maintain a searchable repository of all incidents and resolutions'};
  ];

  
    'Reduce incident resolution time by 60%',;
    'Improve team productivity by 45%',;
    'Decrease repeat incidents by 80%',;
    'Enhance customer satisfaction scores',;
    'Streamline compliance reporting',;
    'Optimize resource allocation';
  ];

  
        'Up to 10 incidents per month',
        'Basic AI analysis',
        'Email support',
        'Standard reporting',
        'Team collaboration (up to 5 users)',
        'Basic integrations'
      ],;
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing organizations',
      features[;
        'Up to 50 incidents per month',
        'Advanced AI analysis',
        'Priority support',
        'Custom reporting',
        'Team collaboration (up to 20 users)',
        'Advanced integrations',
        'API access',
        'Custom workflows'
      ],;
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large enterprises with complex needs',
      features[;
        'Unlimited incidents',
        'Premium AI analysis',
        '24/7 dedicated support',
        'Custom dashboards',
        'Unlimited team members',
        'Enterprise integrations',
        'Advanced analytics',
        'Custom AI models',;
        'On-premise deployment option',;
        'Dedicated account manager';
      ],;
      cta: 'Contact Sales',;
      popular: false};
  ]},;
    {;
      title: 'Customer Support',;
      description: 'Improve customer experience with faster incident resolution and communication',;
      icon: MessageSquare};
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO title="AI Incident Postmortems Platform | Zion Tech Group"
        description="Revolutionize your incident management with AI-powered postmortems. Automate root cause analysis, prevent future incidents, and improve team productivity."
        keywords="AI incident management, incident postmortems, root cause analysis, DevOps, IT operations, incident response"
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

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/10 border border-purple-200/20 text-purple-200 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2"  />
              AI-Powered Incident Management
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Incident Postmortems
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Platform
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your incident management with AI-powered postmortems. Automate root cause analysis,
              prevent future incidents, and build a culture of continuous improvement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-200/20 text-purple-200 font-semibold rounded-lg hover:bg-purple-200/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>;

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
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
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to manage incidents effectively and build a culture of continuous improvement
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
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
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"

                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
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
              Why Choose AI Incident Postmortems?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your incident management process and unlock new levels of efficiency
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index)  => (
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
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="flex items-start space-x-3"

                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0"  />
                <span className="text-slate-300 text-lg">{benefit}</span>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your team size and incident volume
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {pricingPlans.map((plan, index)  => (
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
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-pink-900/20'
                    : 'border-slate-700/50'
                }`}

                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"  />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
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
              Perfect for Every Team
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Whether you're in IT, DevOps, Security, or Customer Support, our platform adapts to your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index)  => (
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
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="text-center"

                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
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
              Ready to Transform Your Incident Management?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of teams who have already improved their incident response with AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-200/20 text-purple-200 font-semibold rounded-lg hover:bg-purple-200/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            <p className="text-slate-400 mt-6">
              No credit card required • 14-day free trial • Cancel time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
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
              Have Questions?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team is here to help you get started and answer  questions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-3"  />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">{contactInfo.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-3"  />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-3"  />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">{contactInfo.address}</p>
              </div>
            </div>

            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"

              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2"  />
            </a>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  )}

