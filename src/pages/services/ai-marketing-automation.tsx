import React from 'react';"'"'
import React from 'react';'"
import { SEO } from '../../components/SEO';"''
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Users, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Lightbulb, 
  Sparkles, 
  Brain,
  Megaphone,
  Mail as MailIcon,
  Calendar,
  Share2,
  Eye,
  MousePointer,
  Filter,
  PieChart,
  LineChart,
  Globe,
  Clock,
  Send,
  UserPlus,
  UserCheck,;"
  Activity,;"'"
  DollarSign;",''
} from 'lucide-react';

const AIMarketingAutomation: React.FC = () => {
  const features = ["
    {"'"
      icon: Target,"'"'"
      title: 'AI Audience Targeting',"'"'"
      description: 'Intelligent audience segmentation and targeting based on behavior and preferences',"''
      color: 'from-blue-500 to-cyan-500',
},"
    {"'"
      icon: MailIcon,"'"'"
      title: 'Email Automation',"'"'"
      description: 'Automated email campaigns with personalized content and optimal send times',"''
      color: 'from-green-500 to-emerald-500',
},"
    {"'"
      icon: Share2,"'"'"
      title: 'Social Media Automation',"'"'"
      description: 'Automated social media posting, engagement, and content optimization',"''
      color: 'from-purple-500 to-pink-500',
},"
    {"'"
      icon: MousePointer,"'"'"
      title: 'Lead Scoring',"'"'"
      description: 'AI-powered lead scoring and qualification for better conversion rates',"''
      color: 'from-yellow-500 to-orange-500',
},"
    {"'"
      icon: BarChart3,"'"'"
      title: 'Campaign Analytics',"'"'"
      description: 'Real-time campaign performance tracking with AI-driven insights',"''
      color: 'from-red-500 to-pink-500',
},"
    {"'"
      icon: Brain,"'"'"
      title: 'Predictive Analytics',"'"'"
      description: 'Predict customer behavior and optimize campaigns for maximum ROI',"''
      color: 'from-indigo-500 to-blue-500',
};
  ];
"
  const marketingChannels = ["'"
    {"'"'"
      title: 'Email Marketing',"''"
      description: 'Automated email campaigns with personalization and A/B testing',"'"
      icon: MailIcon,"'"'"
      benefits: ['Drip campaigns', 'Personalization', 'A/B testing', 'Analytics'],"'"'"
      pricing: '$49/month',"''
      color: 'from-blue-500 to-cyan-500',"
},"'"
    {"'"'"
      title: 'Social Media',"''"
      description: 'Automated social media management and content optimization',"'"
      icon: Share2,"'"'"
      benefits: ['Auto-posting', 'Engagement tracking', 'Content optimization', 'Influencer outreach'],"'"'"
      pricing: '$39/month',"''
      color: 'from-green-500 to-emerald-500',"
},"'"
    {"'"'"
      title: 'SMS Marketing',"''"
      description: 'Automated SMS campaigns with high open rates and engagement',"'"
      icon: MessageCircle,"'"'"
      benefits: ['Bulk SMS', 'Personalization', 'Delivery tracking', 'Compliance'],"'"'"
      pricing: '$29/month',"''
      color: 'from-purple-500 to-pink-500',"
},"'"
    {"'"'"
      title: 'Retargeting',"''"
      description: 'AI-powered retargeting campaigns across multiple platforms',"'"
      icon: Target,"'"'"
      benefits: ['Cross-platform', 'Dynamic ads', 'Audience insights', 'Conversion tracking'],"'"'"
      pricing: '$59/month',"''
      color: 'from-yellow-500 to-orange-500',
};
  ];"
"'"
  const benefits = ["'"'"
    'Increase conversions by 200%',"'"'"
    'Reduce marketing costs by 50%',"'"'"
    '24/7 automated campaigns',"'"'"
    'Personalized experiences',"'"'"
    'Real-time optimization',"'"'"
    'Multi-channel integration',"'"'"
    'Advanced analytics',";''
    'ROI tracking',;
];"
"'"
  const integrations = ["'"'"
    'Facebook Ads',"'"'"
    'Google Ads',"'"'"
    'Instagram',"'"'"
    'LinkedIn',"'"'"
    'Twitter',"'"'"
    'TikTok',"'"'"
    'Mailchimp',"'"'"
    'HubSpot',"'"'"
    'Salesforce',"'"'"
    'Shopify',"'"'"
    'WooCommerce',";''
    'Zapier',;
];"
""
  return ("""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>""
      <SEO """
        title="AI Marketing Automation - Zion Tech Group"""
        description="Revolutionary AI-powered marketing automation platform. Automate campaigns, personalize experiences, and maximize ROI with intelligent marketing tools."""
        keywords="marketing automation, AI marketing, email automation, social media automation, lead generation, campaign optimization, Zion Tech Group"""
        ogType="website"""
      /" ></SEO>"
""
      {/* Hero Section */}"""
      <section className="relative overflow-hidden py-20 lg:py-32"></section>"""
        <div className="container-responsive"></div>"""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
            <motion .div
              initial={{ opacity: 0, x: -50 }}"
              animate={{ opacity: 1, x: 0 }}""
              transition={{ duration: 0.8 }}"""
              className="space-y-8"" ></motion>"""
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium"></div>"""
                <Megaphone className="w-4 h-4" /" ></Megaphone>"
                AI Marketing Automation""
              </div>"""
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight"></h1>""
                AI Marketing"""
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"></span>
                  Automation"
                </span>""
              </h1>"""
              <p className="text-xl text-gray-300 leading-relaxed"></p>"
                Transform your marketing with AI-powered automation. Create personalized campaigns, optimize performance, and maximize ROI across all channels with intelligent marketing tools.""
              </p>"""
              <div className="flex flex-col sm:flex-row gap-4"></div>"""
                <button className="btn-futuristic bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"></button>"""
                  <Target className="w-5 h-5" /" ></Target>"
                  Start Campaign""
                </button>"""
                <button className="btn-futuristic-outline"></button>"""
                  <BarChart3 className="w-5 h-5" /" ></BarChart3>
                  View Analytics
                </button>
              </div>
            </motion.div>
            <motion .div
              initial={{ opacity: 0, x: 50 }}"
              animate={{ opacity: 1, x: 0 }}""
              transition={{ duration: 0.8, delay: 0.2 }}"""
              className="relative"" ></motion>"""
              <div className="relative z-10"></div>"""
                <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center"></div>"""
                  <div className="text-center"></div>"""
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>"""
                      <Megaphone className="w-12 h-12 text-white" /" ></Megaphone>""
                    </div>"""
                    <h3 className="text-2xl font-bold text-white mb-2"></h>AI Marketing</h3>"""
                    <p className="text-gray-300">Automated Campaigns</p>
                  </div>"
                </div>""
              </div>"""
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-3xl"></di></div>
            </motion.div>
          </div>
        </div>
      </section>"
""
      {/* Features Section */}"""
      <section className="py-20 bg-slate-800/50"></section>"""
        <div className="container-responsive"></div>
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            viewport={{ once: true }}"""
            className="text-center mb-16"" ></motion>"""
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6"></h2>"
              Advanced Marketing Features""
            </h2>"""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our AI-powered marketing automation platform combines intelligent targeting with advanced analytics to maximize your marketing ROI."
            </p>""
          </motion.div>"""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (
              <motion .div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.6, delay: index * 0.1 }}""
                viewport={{ once: true }}"""
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-700/50"" ></motion>""
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}" ></div>"""
                  <feature .icon className="w-8 h-8 text-white" /" ></feature>""
                </div>"""
                <h3 className="text-xl font-semibold text-white mb-3"></h>{feature.title}</h3>"""
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* Marketing Channels Section */}"""
      <section className="py-20"></section>"""
        <div className="container-responsive"></div>
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            viewport={{ once: true }}"""
            className="text-center mb-16"" ></motion>"""
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6"></h2>"
              Marketing Channels""
            </h2>"""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Automate your marketing across all channels with AI-powered tools that deliver personalized experiences and maximize engagement."
            </p>""
          </motion.div>"""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
            {marketingChannels.map((channel, index) => (
              <motion .div
                key={channel.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}"
                transition={{ duration: 0.6, delay: index * 0.1 }}""
                viewport={{ once: true }}"""
                className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"" ></motion>"""
                <div className="flex items-start gap-4 mb-6"></div>`""
                  <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center flex-shrink-0`}" ></div>"""
                    <channel .icon className="w-8 h-8 text-white" /" ></channel>"
                  </div>""
                  <div></div>"""
                    <h3 className="text-2xl font-semibold text-white mb-2"></h>{channel.title}</h3>"""
                    <p className="text-gray-400 leading-relaxed mb-2">{channel.description}</p>"""
                    <div className="text-2xl font-bold text-purple-400"></di>{channel.pricing}</div>"
                  </div>""
                </div>"""
                <div className="space-y-3"></div>"""
                  <h4 className="text-lg font-semibold text-white"></h>Key Features:</h4>"""
                  <ul className="space-y-2"></ul>""
                    {channel.benefits.map((benefit, idx) => ("""
                      <li key={idx} className="flex items-center gap-3 text-gray-300"></li>"""
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" /" ></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* Benefits Section */}"""
      <section className="py-20 bg-slate-800/50"></section>"""
        <div className="container-responsive"></div>
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            viewport={{ once: true }}"""
            className="text-center mb-16"" ></motion>"""
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6"></h2>"
              Why Choose AI Marketing Automation?""
            </h2>"""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of intelligent marketing automation that works around the clock to grow your business."
            </p>""
          </motion.div>"""
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div>
            {benefits.map((benefit, index) => (
              <motion .div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}"
                transition={{ duration: 0.6, delay: index * 0.1 }}""
                viewport={{ once: true }}"""
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-600/50"" ></motion>"""
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>"""
                  <TrendingUp className="w-6 h-6 text-white" /" ></TrendingUp>""
                </div>"""
                <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* Integrations Section */}"""
      <section className="py-20"></section>"""
        <div className="container-responsive"></div>
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            viewport={{ once: true }}"""
            className="text-center mb-16"" ></motion>"""
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6"></h2>"
              Seamless Integrations""
            </h2>"""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Connect with your favorite marketing tools and platforms to create powerful automated campaigns."
            </p>""
          </motion.div>"""
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6"></div>
            {integrations.map((integration, index) => (
              <motion .div
                key={integration}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.6, delay: index * 0.1 }}""
                viewport={{ once: true }}"""
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-700/50 group"" ></motion>"""
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>"""
                  <Share2 className="w-6 h-6 text-white" /" ></Share2>""
                </div>"""
                <p className="text-white font-medium text-sm leading-relaxed">{integration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* CTA Section */}"""
      <section className="py-20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10"></section>"""
        <div className="container-responsive text-center"></div>
          <motion .div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            viewport={{ once: true }}"""
            className="max-w-4xl mx-auto"" ></motion>"""
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6"></h2>"
              Ready to Automate Your Marketing?""
            </h2>"""
            <p className="text-xl text-gray-300 mb-8"></p>"
              Join thousands of businesses using AI Marketing Automation to increase conversions and maximize ROI.""
            </p>"""
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"""
              <button className="btn-futuristic bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"></button>"""
                <MessageCircle className="w-5 h-5" /" ></MessageCircle>"
                Start Free Trial""
              </button>"""
              <button className="btn-futuristic-outline"></button>"""
                <Phone className="w-5 h-5" /" ></Phone>
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>"
""
      {/* Contact Section */}"""
      <section className="py-20"></section>"""
        <div className="container-responsive"></div>"""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
            <motion .div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}"
              transition={{ duration: 0.8 }}""
              viewport={{ once: true }}" ></motion>"""
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6"></h2>"
                Get Started Today""
              </h2>"""
              <p className="text-gray-300 mb-8 leading-relaxed"></p>"
                Ready to transform your marketing with AI automation? Our marketing automation team is here to help you implement intelligent campaigns that drive results.""
              </p>"""
              <div className="space-y-6"></div>"""
                <div className="flex items-center gap-4"></div>"""
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"></div>"""
                    <Phone className="w-6 h-6 text-white" /" ></Phone>"
                  </div>""
                  <div></div>"""
                    <p className="text-white font-semibold">Phone</p>"""
                    <p className="text-gray-300">+1 302 464 0950</p>"
                  </div>""
                </div>"""
                <div className="flex items-center gap-4"></div>"""
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"></div>"""
                    <Mail className="w-6 h-6 text-white" /" ></Mail>"
                  </div>""
                  <div></div>"""
                    <p className="text-white font-semibold">Email</p>"""
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>"
                  </div>""
                </div>"""
                <div className="flex items-center gap-4"></div>"""
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"></div>"""
                    <MapPin className="w-6 h-6 text-white" /" ></MapPin>"
                  </div>""
                  <div></div>"""
                    <p className="text-white font-semibold">Address</p>"""
                    <p className="text-gray-300">364 E Main St STE 1008<br /" ></br>Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion .div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}"
              transition={{ duration: 0.8, delay: 0.2 }}""
              viewport={{ once: true }}"""
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"" ></motion>"""
              <h3 className="text-2xl font-semibold text-white mb-6"></h>Request Marketing Demo</h3>"""
              <form className="space-y-6"></form>"""
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>""
                  <input """
                    type="text"""
                    placeholder="First Name"""
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"""
                  /" ></input>""
                  <input """
                    type="text"""
                    placeholder="Last Name"""
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"""
                  /" ></input>"
                </div>""
                <input """
                  type="email"""
                  placeholder="Email Address"""
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"""
                /" ></input>""
                <input """
                  type="text"""
                  placeholder="Company"""
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"""
                /" ></input>""
                <textarea """
                  placeholder="Tell us about your marketing needs..."""
                  rows={4}"""
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"" ></textare></textarea>""
                <button """
                  type="submit"""
                  className="w-full btn-futuristic bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"" ></button>"""
                  <MessageCircle className="w-5 h-5" /" ></MessageCircle>
                  Request Demo
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );,
};"
"'"
export default AIMarketingAutomation;"`'"'"