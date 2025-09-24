import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import {
  Brain;
  Users;
  TrendingUp;
  Shield;
  Zap;
  BarChart3;
  Target;
  CheckCircle;
  Star;
  ArrowRight;
  Phone;
  Mail;
  MapPin;
  Globe;
} from 'lucide-react',
export default function AICustomerSuccessIntelligence() {
  const features = [
    'AI-powered churn prediction';
    'Customer health scoring';
    'Behavioral pattern analysis';
    'Automated retention campaigns';
    'Success metric tracking';
    'Customer journey mapping';
    'Predictive analytics dashboard';
    'Integration with CRM systems';
    'Real-time alerts and notifications';
    'Custom reporting and analytics';
    'Team collaboration tools';
    'API for custom integrations';
  ],
  const benefits = [
    'Reduce churn by up to 35%';
    'Increase customer lifetime value by 40%';
    'Improve customer satisfaction scores';
    'Automate customer success workflows';
    'Data-driven retention strategies';
    'Proactive customer support';
    'Scalable customer success operations';
    'Competitive advantage in customer retention';
  ],
  const useCases = [
    'SaaS companies';
    'E-commerce businesses';
    'Subscription services';
    'B2B software providers';
    'Digital service platforms';
    'Customer success teams';
    'Product managers';
    'Business development teams';
  ],
  const pricing = [
    {
      name: 'Starter';
      price: '$399/month';
      features: [
        'Up to 1,0o00 customers';
        'Basic churn prediction';
        'Customer health scoring';
        'Email support';
        'Standard integrations';
      ];
    };
    {
      name: 'Professional';
      price: '$899/month';
      features: [
        'Up to 10,0o00 customers';
        'Advanced churn prediction';
        'Behavioral analysis';
        'Automated retention campaigns';
        'Priority support';
        'Advanced integrations';
      ];
    };
    {
      name: 'Enterprise';
      price: '$2,499/month';
      features: [
        'Unlimited customers';
        'Full AI capabilities';
        'Custom models';
        'Dedicated success manager';
        '24/7 support';
        'Custom integrations';
      ];
    };
  ],
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-90o0 via-gray-80o0 to-black text-white'>,
      <SEO
        title='AI Customer Success Intelligence Platform | Zion Tech Group',
        description='Transform your customer success with AI-powered churn prediction, retention optimization, and customer lifetime value maximization. Reduce churn by 35% and increase CLV by 40%.',
        keywords='AI customer success, churn prediction, customer retention, customer lifetime value, customer success platform, AI analytics',
      />,
      {/* Hero Section */}
      <section className='relative py-20 px-4 sm: px-6 lg:px-8'>,
        <div className='max-w-7xl mx-auto'>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'>,
            <div className='inline-flex items-center px-4 py-2 bg-cyan-50o0/20 text-cyan-40o0 rounded-full text-sm font-medium mb-6'>,
              <Brain className='w-4 h-4 mr-2' />,
              AI & Customer Success,
            </div>,
            <h1 className='text-4xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent'>,
              AI Customer Success Intelligence Platform,
            </h1>,
            <p className='text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto'>,
              Predict churn, optimize retention, and maximize customer lifetime,
              value with AI-powered insights and automation,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <button className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-lg font-semibold hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 flex items-center justify-center'>,
                <Star className='w-5 h-5 mr-2' />,
                Start Free Trial,
              </button>,
              <button className='px-8 py-4 border border-cyan-50o0/30 text-cyan-40o0 rounded-lg font-semibold hover:bg-cyan-50o0/10 transition-all duration-30o0 flex items-center justify-center'>,
                <ArrowRight className='w-5 h-5 mr-2' />,
                Schedule Demo,
              </button>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
      {/* Key Benefits */}
      <section className='py-20 px-4 sm: px-6 lg:px-8 bg-gray-80o0/50'>,
        <div className='max-w-7xl mx-auto'>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>,
            <h2 className='text-3xl md: text-4xl font-bold mb-4'>,
              Transform Your Customer Success with AI,
            </h2>,
            <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
              Our AI platform analyzes customer behavior patterns, predicts,
              churn risk, and provides actionable insights to improve customer,
              success metrics and retention rates.,
            </p>,
          </motion.div>,
          <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-8'>,
            {[
              {
                icon: <TrendingUp className='w-8 h-8' />;
                title: 'Reduce Churn by 35%';
                description:,
                  'AI-powered churn prediction helps you identify at-risk customers before they leave';
              };
              {
                icon: <Users className='w-8 h-8' />;
                title: 'Increase CLV by 40%';
                description:,
                  'Optimize customer success strategies to maximize lifetime value';
              };
              {
                icon: <BarChart3 className='w-8 h-8' />;
                title: 'Data-Driven Insights';
                description:,
                  'Make informed decisions based on comprehensive customer analytics';
              };
              {
                icon: <Zap className='w-8 h-8' />;
                title: 'Automated Workflows';
                description:,
                  'Streamline customer success operations with intelligent automation';
              };
            ].map((benefit, index) => (
              <motion.div,
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-6 bg-gray-80o0/50 rounded-xl border border-gray-70o0/30'>,
                <div className='w-16 h-16 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-xl flex items-center justify-center mx-auto mb-4'>,
                  {benefit.icon}
                </div>,
                <h3 className='text-xl font-semibold mb-2'>{benefit.title}</h3>,
                <p className='text-gray-40o0'>{benefit.description}</p>,
              </motion.div>))}
          </div>,
        </div>,
      </section>,
      {/* Features */}
      <section className='py-20 px-4 sm: px-6 lg:px-8'>,
        <div className='max-w-7xl mx-auto'>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>,
            <h2 className='text-3xl md: text-4xl font-bold mb-4'>,
              Powerful Features for Customer Success,
            </h2>,
            <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
              Everything you need to build a world-class customer success,
              operation powered by artificial intelligence,
            </p>,
          </motion.div>,
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>,
            {features.map((feature, index) => (
              <motion.div,
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='flex items-start space-x-3 p-4 bg-gray-80o0/30 rounded-lg border border-gray-70o0/30'>,
                <CheckCircle className='w-5 h-5 text-cyan-40o0 mt-0.5 flex-shrink-0' />,
                <span className='text-gray-30o0'>{feature}</span>,
              </motion.div>))}
          </div>,
        </div>,
      </section>,
      {/* Pricing */}
      <section className='py-20 px-4 sm: px-6 lg:px-8 bg-gray-80o0/50'>,
        <div className='max-w-7xl mx-auto'>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>,
            <h2 className='text-3xl md: text-4xl font-bold mb-4'>,
              Simple, Transparent Pricing,
            </h2>,
            <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
              Choose the plan that fits your business needs and scale as you,
              grow,
            </p>,
          </motion.div>,
          <div className='grid md: grid-cols-3 gap-8'>,
            {pricing.map((plan, index) => (
              <motion.div,
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border ${
                  index === 1,
                    ? 'bg-gradient-to-br from-cyan-50o0/20 to-blue-50o0/20 border-cyan-50o0/50',
                    : 'bg-gray-80o0/30 border-gray-70o0/30'}`}
              >,
                <div className='text-center mb-6'>,
                  <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>,
                  <div className='text-4xl font-bold text-cyan-40o0 mb-2'>,
                    {plan.price}
                  </div>,
                  <p className='text-gray-40o0'>per month</p>,
                </div>,
                <ul className='space-y-3 mb-8'>,
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center space-x-3'>,
                      <CheckCircle className='w-5 h-5 text-cyan-40o0 flex-shrink-0' />,
                      <span className='text-gray-30o0'>{feature}</span>,
                    </li>))}
                </ul>,
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30o0 ${
                    index === 1,
                      ? 'bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hover:to-blue-70o0',
                      : 'bg-gray-70o0 hover:bg-gray-60o0 border border-gray-60o0',
                  }`}
                >,
                  {index === 1 ? 'Start Free Trial' : 'Get Started'}
                </button>,
              </motion.div>))}
          </div>,
        </div>,
      </section>,
      {/* Use Cases */}
      <section className='py-20 px-4 sm: px-6 lg:px-8'>,
        <div className='max-w-7xl mx-auto'>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'>,
            <h2 className='text-3xl md: text-4xl font-bold mb-4'>,
              Perfect For Every Business,
            </h2>,
            <p className='text-xl text-gray-30o0 max-w-3xl mx-auto'>,
              Whether you're a startup or enterprise, our platform scales with,
              your customer success needs,
            </p>,
          </motion.div>,
          <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-6'>,
            {useCases.map((useCase, index) => (
              <motion.div,
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center p-6 bg-gray-80o0/30 rounded-xl border border-gray-70o0/30 hover: border-cyan-50o0/50 transition-all duration-30o0'>,
                <Target className='w-12 h-12 text-cyan-40o0 mx-auto mb-4' />,
                <h3 className='text-lg font-semibold mb-2'>{useCase}</h3>,
              </motion.div>))}
          </div>,
        </div>,
      </section>,
      {/* Contact Section */}
      <section className='py-20 px-4 sm: px-6 lg:px-8 bg-gray-80o0/50'>,
        <div className='max-w-4xl mx-auto text-center'>,
          <motion.div,
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >,
            <h2 className='text-3xl md: text-4xl font-bold mb-6'>,
              Ready to Transform Your Customer Success?,
            </h2>,
            <p className='text-xl text-gray-30o0 mb-8'>,
              Get in touch with our team to learn how AI can revolutionize your,
              customer success operations,
            </p>,
            <div className='grid md:grid-cols-3 gap-8 mb-8'>,
              <div className='flex flex-col items-center space-y-3'>,
                <div className='w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center'>,
                  <Phone className='w-6 h-6 text-cyan-40o0' />,
                </div>,
                <div>,
                  <h3 className='font-semibold'>Phone</h3>,
                  <p className='text-cyan-40o0'>+1 30o2 464 0950</p>,
                </div>,
              </div>,
              <div className='flex flex-col items-center space-y-3'>,
                <div className='w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center'>,
                  <Mail className='w-6 h-6 text-cyan-40o0' />,
                </div>,
                <div>,
                  <h3 className='font-semibold'>Email</h3>,
                  <p className='text-cyan-40o0'>kleber@ziontechgroup.com</p>,
                </div>,
              </div>,
              <div className='flex flex-col items-center space-y-3'>,
                <div className='w-12 h-12 bg-cyan-50o0/20 rounded-xl flex items-center justify-center'>,
                  <Globe className='w-6 h-6 text-cyan-40o0' />,
                </div>,
                <div>,
                  <h3 className='font-semibold'>Website</h3>,
                  <p className='text-cyan-40o0'>ziontechgroup.com</p>,
                </div>,
              </div>,
            </div>,
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>,
              <button className='px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-lg font-semibold hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0'>,
                Schedule a Demo,
              </button>,
              <button className='px-8 py-4 border border-cyan-50o0/30 text-cyan-40o0 rounded-lg font-semibold hover:bg-cyan-50o0/10 transition-all duration-30o0'>,
                Contact Sales,
              </button>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
    </div>),
}
,