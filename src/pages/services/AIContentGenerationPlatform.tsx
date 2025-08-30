<<<<<<< HEAD
import React from 'react.ts';
import { motion             } from 'framer-motion.ts';
import { SEO             } from '../../components/SEO';
import { PenTool, 
=======
import React from 'react.ts';
import { motion            } from 'framer-motion.ts';
<<<<<<< HEAD
import { SEO            } from '../../components/SEO';
import { PenTool,
  FileText,
  Brain,
  Zap,
  Shield,
  Users,
=======
import { SEO            } from '../../components/SEO';
import { PenTool, 
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  FileText, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Palette,
  Camera,
  Video,
  Mic,
  Code,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Award
<<<<<<< HEAD
export default function AIContentGenerationPlatform(...args: any[]): any {
=======
            } from 'lucide-react.ts';

export default function AIContentGenerationPlatform(...args[]: any):  {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced language models that generate high-quality, engaging content across multiple formats and industries.',
      benefits['SEO-optimized content', 'Brand voice consistency', 'Multi-language support', 'Context-aware generation']
    },
    {
      icon: Palette,
      title: 'Visual Content Creation',
      description: 'Generate stunning images, graphics, and visual assets using cutting-edge AI image generation technology.',
      benefits['Custom brand styling', 'High-resolution output', 'Style transfer', 'Batch generation']
    },
    {
      icon: Video,
      title: 'Video Content Generation',
      description: 'Create professional videos, animations, and multimedia content with AI-powered video generation tools.',
      benefits['Auto-script generation', 'Voice synthesis', 'Background music', 'Template library']
    },
    {
      icon: Code,
      title: 'Technical Content',
      description: 'Generate technical documentation, code comments, and developer resources with specialized AI models.',
      benefits['Code documentation', 'API guides', 'Tutorial generation', 'Technical writing']
    },
    {
      icon: Shield,
      title: 'Content Moderation',
      description: 'Built-in AI content filtering and moderation to ensure all generated content meets quality and safety standards.',
      benefits['Plagiarism detection', 'Content filtering', 'Quality scoring', 'Compliance checking']
    },
    {
<<<<<<< HEAD
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative workspace for teams to create, edit, and manage content with version control and approval workflows.',
<<<<<<< HEAD
      benefits: ['Real-time editing', 'Approval workflows', 'Version history', 'Team analytics']

=======
      benefits['Real-time editing', 'Approval workflows', 'Version history', 'Team analytics']
    };
=======;
      icon: Users,;
      title: 'Team Collaboration',;
      description: 'Collaborative workspace for teams to create, edit, and manage content with version control and approval workflows.',;
      benefits: ['Real-time editing', 'Approval workflows', 'Version history', 'Team analytics'];
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const useCases = [
    {
      industry: 'Marketing & Advertising',
      title: 'Campaign Content Creation',
      description: 'Generate complete marketing campaigns including copy, visuals, and video content for multiple channels.',
      metrics['50% faster campaign creation', '40% increase in engagement', '30% reduction in content costs']
    },
    {
      industry: 'E-commerce',
      title: 'Product Descriptions & Marketing',
      description: 'Create compelling product descriptions, marketing copy, and visual assets for online stores.',
      metrics['60% faster product onboarding', '35% improvement in conversion rates', '25% increase in SEO traffic']
    },
    {
      industry: 'Publishing & Media',
      title: 'Content Production',
      description: 'Generate articles, blog posts, and multimedia content for digital publishing platforms.',
      metrics['70% increase in content output', '45% reduction in editorial time', '40% improvement in reader engagement']
    },
    {
<<<<<<< HEAD
      industry: 'Corporate Communications',
      title: 'Business Content',
      description: 'Create professional reports, presentations, and corporate communications with consistent branding.',
<<<<<<< HEAD
      metrics: ['55% faster report creation', '50% improvement in brand consistency', '35% reduction in review cycles']

=======
      metrics['55% faster report creation', '50% improvement in brand consistency', '35% reduction in review cycles']
    };
=======;
      industry: 'Corporate Communications',;
      title: 'Business Content',;
      description: 'Create professional reports, presentations, and corporate communications with consistent branding.',;
      metrics: ['55% faster report creation', '50% improvement in brand consistency', '35% reduction in review cycles'];
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Generate high-quality content in minutes instead of hours or days.',
      value: '80-90%'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce content creation costs while maintaining or improving quality.',
      value: '40-60%'
    },
    {
      icon: Target,
      title: 'Quality Improvement',
      description: 'Consistent, high-quality content that resonates with your target audience.',
      value: '95%+'
<<<<<<< HEAD
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Scale content production without proportional increases in resources.',
      value: '10x'

=======
    },;
    {;
      icon: TrendingUp,;
      title: 'Scalability',;
      description: 'Scale content production without proportional increases in resources.',;
      value: '10x';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const technologies = [
    'GPT-4 & Claude Models',
    'DALL-E 3 & Midjourney',
    'Stable Diffusion',
    'Natural Language Processing',
    'Computer Vision',
    'Speech Synthesis',;
    'Machine Learning',;
    'Cloud Computing',;
    'Real-time Processing',;
    'API Integration',;
    'Content Management',;
    'Analytics & Insights';
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and individual creators',
      features[
        '10,000 words per month',
        '100 AI-generated images',
        '5 video generations',
        'Basic templates',
        'Email support',
        'Standard quality output'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features[
        '100,000 words per month',
        '1,000 AI-generated images',
        '50 video generations',
        'Advanced templates',
        'Priority support',
        'High-quality output',
        'Team collaboration',
        'Brand voice training'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with high-volume content needs',
      features[
        'Unlimited words',
        'Unlimited images',
        'Unlimited videos',
        'Custom templates',
        'Dedicated support',
        'Highest quality output',
<<<<<<< HEAD
        'Advanced analytics',
        'Custom integrations',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
=======
        'Advanced analytics',;
        'Custom integrations',;
        'SLA guarantees';
      ],;
      cta: 'Contact Sales',;
      popular: false;
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        title="AI Content Generation Platform - Zion Tech Group"
        description="Transform your content creation with our AI-powered platform. Generate high-quality text, images, videos, and more with advanced AI technology."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
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
            className="text-center mb-16"

            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <PenTool className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                {' '}Content Generation
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Revolutionize your content creation with our advanced AI platform. Generate high-quality text, images,
              videos, and multimedia content in minutes, not hours. Scale your content production while maintaining
              exceptional quality and brand consistency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"

                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"

                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.8,
  delay: 0.2 






}}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"

            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">80-90%</div>
              <div className="text-slate-400">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40-60%</div>
              <div className="text-slate-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%+</div>
              <div className="text-slate-400">Quality Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10x</div>
              <div className="text-slate-400">Scalability</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {' '}Content Creators
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI content generation platform combines cutting-edge technology with intuitive design
              to deliver exceptional content creation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)             => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 30 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300"

                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Real-World
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {' '}Applications
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See how our AI content generation platform is transforming industries and driving measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {useCases.map((useCase, index)             => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 30 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300"

                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Results: anyanyanyanyanyanyanyanyanyanyanyany</h4>
                  {useCase.metrics.map((metric, idx)             => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-slate-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {' '}Business Impact
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI content generation platform delivers quantifiable results that directly impact your content strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)             => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 30 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className="text-center"

                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-4">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {' '}Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built on the latest AI and machine learning technologies to deliver superior content generation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index)             => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  scale: 0.9 






}}
                whileInView = {
  { opacity: 1,
  scale: 1 






}}
                transition = {
  { duration: 0.6,
  delay: index * 0.05 






}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 text-center"

                <div className="text-white font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the perfect plan for your content creation needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index)             => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 30 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-purple-400/50 scale-105'
                    : 'border-slate-700/50 hover:border-purple-400/50'
                }`}

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.plan === 'Enterprise' ? '/contact' : '/signup'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:from-purple-500 hover:to-pink-600'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}

                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
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
            transition={{ duration: 0.8 }}

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {' '}Content Creation?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of content creators who have already revolutionized their workflow
              with our AI-powered content generation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"

                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"

                <span>Call +1 302 464 0950</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
              <p>Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">ziontechgroup.com</a></p>
<<<<<<< HEAD
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )};
=======;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
<<<<<<< HEAD
}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
