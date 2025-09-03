import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  FileText, 
  Globe, 
  Check, 
  Star, 
  TrendingUp,
  Clock,
  Smartphone,
  Mail,
  Phone
} from 'lucide-react';

export default function AIContentGenerationSuite() {
  const features = [
    {
      title: "AI Blog Post Generation",
      description: "Create high-quality, SEO-optimized blog posts in minutes with our advanced AI writing engine.",
      icon: FileText,
      benefits: [
        "Generate 2000+ word articles in 5 minutes",
        "SEO-optimized content with keyword integration",
        "Multiple writing styles and tones",
        "Plagiarism-free, original content"
      ]
    },
    {
      title: "Social Media Content",
      description: "Automatically generate engaging social media posts for all platforms with optimal timing.",
      icon: Smartphone,
      benefits: [
        "Platform-specific content optimization",
        "Hashtag research and integration",
        "Visual content suggestions",
        "Optimal posting time recommendations"
      ]
    },
    {
      title: "Marketing Copy",
      description: "Create compelling marketing materials including ads, emails, and landing pages.",
      icon: Brain,
      benefits: [
        "A/B testing variations",
        "Conversion-optimized copy",
        "Brand voice consistency",
        "Multi-channel campaign support"
      ]
    },
    {
      title: "Multi-Language Support",
      description: "Generate content in 50+ languages with native-level quality and cultural adaptation.",
      icon: Globe,
      benefits: [
        "50+ language support",
        "Cultural context awareness",
        "Local market optimization",
        "Translation with localization"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "10,000 words per month",
        "5 social media accounts",
        "Basic AI templates",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599/month",
      description: "Ideal for growing companies and agencies",
      features: [
        "50,000 words per month",
        "Unlimited social media accounts",
        "Advanced AI templates",
        "Priority support",
        "Premium integrations",
        "Team collaboration tools",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299/month",
      description: "For large organizations with high content needs",
      features: [
        "Unlimited words per month",
        "Unlimited accounts",
        "Custom AI models",
        "24/7 dedicated support",
        "All integrations",
        "White-label options",
        "API access",
        "Custom workflows"
      ],
      popular: false
    }
  ];

  const marketComparison = [
    { feature: "AI Content Quality", zion: "95% accuracy", market: "70-85% accuracy", advantage: "Superior" },
    { feature: "Generation Speed", zion: "5 minutes", market: "15-30 minutes", advantage: "3x Faster" },
    { feature: "Language Support", zion: "50+ languages", market: "10-20 languages", advantage: "Comprehensive" },
    { feature: "SEO Optimization", zion: "Advanced AI", market: "Basic", advantage: "Leading" }
  ];

  return (
    <>
      <Head>
        <title>AI Content Generation Suite - Zion Tech Group</title>
        <meta name="description" content="AI-powered content creation for blogs, social media, and marketing. Reduce content creation time by 80% with SEO-optimized, brand-consistent results." />
      </Head>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-20 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Content Generation Suite
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Revolutionary AI Content Creation</h1>
            <p className="text-purple-100 text-xl max-w-3xl mx-auto mb-8">Generate high-quality, SEO-optimized content in minutes. Blogs, social posts, and marketing copy with 95% accuracy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#pricing" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">View Pricing</Link>
              <Link href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">Get Started</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Content Suite?</h2>
              <p className="text-gray-600 text-lg">Transform your content strategy with cutting-edge AI</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4"><Clock className="w-8 h-8 text-white" /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">80% Time Savings</h3>
                <p className="text-gray-600">From hours to minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4"><TrendingUp className="w-8 h-8 text-white" /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">300% Traffic Increase</h3>
                <p className="text-gray-600">SEO-optimized content</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4"><Star className="w-8 h-8 text-white" /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">95% Accuracy</h3>
                <p className="text-gray-600">Industry-leading quality</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4"><Globe className="w-8 h-8 text-white" /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">50+ Languages</h3>
                <p className="text-gray-600">Global localization</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-gray-600 text-lg">Everything you need to create exceptional content</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" /><span className="text-sm text-gray-600">{benefit}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Comparison</h2>
              <p className="text-gray-600 text-lg">How we compare</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-purple-600">Zion Tech Group</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Market</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {marketComparison.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                        <td className="px-6 py-4 text-sm text-purple-600 font-semibold">{item.zion}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.market}</td>
                        <td className="px-6 py-4 text-sm text-green-600 font-semibold">{item.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
              <p className="text-gray-600 text-lg">Choose the plan that fits your needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                  {plan.popular && (<div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Most Popular</div>)}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-purple-600 mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-3" /><span className="text-gray-600">{feature}</span></li>
                    ))}
                  </ul>
                  <Link href="#contact" className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">Get Started</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-purple-600">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Talk to Us</h2>
            <p className="text-purple-100 text-lg mb-8">+1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">Call Now</a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">Email Us</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import React from 'react';
import { 
  FileText, 
  Brain, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react';

const AIContentGenerationSuite = () => {
  const features = [
    'AI-powered blog post generation',
    'Social media content creation',
    'Email marketing campaigns',
    'SEO-optimized content',
    'Multi-language support',
    'Brand voice consistency',
    'Content calendar management',
    'Performance analytics'
  ];

  const benefits = [
    'Save 80% content creation time',
    'Consistent brand voice across all channels',
    'Multi-language content generation',
    'SEO-optimized output for better rankings',
    'Scalable content production',
    'Cost-effective solution',
    '24/7 content generation capability',
    'Integration with popular platforms'
  ];

  const pricing = {
    starter: {
      name: 'Starter',
      price: '$199/month',
      features: ['Up to 50 articles/month', '3 social media accounts', 'Basic SEO optimization', 'Email support'],
      marketPrice: '$299/month'
    },
    professional: {
      name: 'Professional',
      price: '$399/month',
      features: ['Up to 200 articles/month', '10 social media accounts', 'Advanced SEO optimization', 'Priority support', 'Multi-language support'],
      marketPrice: '$599/month',
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      price: '$799/month',
      features: ['Unlimited articles', 'Unlimited social accounts', 'Custom AI training', 'Dedicated support', 'API access', 'White-label solution'],
      marketPrice: '$1,299/month'
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mb-6"
            >
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              AI Content Generation Suite
            </h1>
            <p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Transform your content marketing with AI-powered content creation that saves time, maintains brand consistency, and drives engagement across all channels.
            </p>
            <div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-lg font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Content Features</h2>
          <p className="text-xl text-gray-600">Everything you need to create engaging content at scale</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Content Suite?</h2>
            <p className="text-xl text-gray-600">Measurable results that drive business growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your content needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(pricing).map(([key, plan], index) => (
            <div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 relative ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                <p className="text-gray-500 line-through">{plan.marketPrice}</p>
                <p className="text-green-600 font-semibold">Save up to 40%</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={`tel:${contactInfo.phone}`}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Content Strategy?</h2>
            <p className="text-xl text-gray-300">Contact us today for a free consultation and demo</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300">
                {contactInfo.phone}
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">
                {contactInfo.email}
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Website</h3>
              <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
                {contactInfo.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Professional AI content generation services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AIContentGenerationSuite;