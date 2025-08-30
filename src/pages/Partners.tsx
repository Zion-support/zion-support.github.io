import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Partners: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partnershipTypes = [
    {
      id: 'technology',
      name: 'Technology Partners',
      description: 'Integrate our AI and cloud solutions into your platforms',
      icon: Zap,
      benefits: [
        'API Access & Documentation',
        'Technical Support',
        'Co-marketing Opportunities',
        'Revenue Sharing',
        'Joint Product Development'
      ],
      requirements: [
        'Technical expertise in relevant domains',
        'Active customer base',
        'Commitment to quality standards'
      ]
    },
    {
      id: 'channel',
      name: 'Channel Partners',
      description: 'Resell our services to your customers',
      icon: Users,
      benefits: [
        'Competitive Pricing',
        'Sales Training & Support',
        'Marketing Materials',
        'Lead Generation',
        'Dedicated Account Manager'
      ],
      requirements: [
        'Established sales channels',
        'Customer relationships',
        'Service delivery capabilities'
      ]
    },
    {
      id: 'strategic',
      name: 'Strategic Partners',
      description: 'Deep collaboration on joint ventures and initiatives',
      icon: Globe,
      benefits: [
        'Exclusive Market Access',
        'Joint Innovation Labs',
        'Shared IP Development',
        'Global Expansion Support',
        'Board-level Collaboration'
      ],
      requirements: [
        'Strategic alignment',
        'Significant market presence',
        'Long-term commitment'
      ]
    },
    {
      id: 'ecosystem',
      name: 'Ecosystem Partners',
      description: 'Join our technology ecosystem and marketplace',
      icon: Cloud,
      benefits: [
        'Marketplace Integration',
        'Developer Tools & SDKs',
        'Community Support',
        'Event Participation',
        'Thought Leadership'
      ],
      requirements: [
        'Innovative solutions',
        'Active development',
        'Community engagement'
      ]
    }
  ];

  const partnerBenefits = [
    {
      icon: Award,
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our global network'
    },
    {
      icon: Brain,
      title: 'Technology Innovation',
      description: 'Leverage cutting-edge AI and cloud technologies in your solutions'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards for your customers'
    },
    {
      icon: Users,
      title: 'Global Reach',
      description: 'Expand your business globally with our international presence'
    }
  ];

  const successStories = [
    {
      partner: 'TechFlow Solutions',
      type: 'Technology Partner',
      description: 'Integrated our AI analytics into their platform, resulting in 300% increase in user engagement',
      results: ['300% user engagement increase', 'New market expansion', 'Joint patent applications'],
      logo: '🚀'
    },
    {
      partner: 'Global Systems Inc.',
      type: 'Channel Partner',
      description: 'Successfully reselling our cloud services across 15 countries with 95% customer satisfaction',
      results: ['15 countries expansion', '95% customer satisfaction', '$2M+ annual revenue'],
      logo: '🌍'
    },
    {
      partner: 'InnovateCorp',
      type: 'Strategic Partner',
      description: 'Joint development of quantum computing solutions for financial services',
      results: ['Joint R&D facility', 'Quantum computing patents', 'Financial services focus'],
      logo: '⚡'
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Initial Contact',
      description: 'Reach out to discuss partnership opportunities and alignment',
      duration: '1-2 weeks',
      icon: Mail
    },
    {
      step: 2,
      title: 'Assessment',
      description: 'We evaluate your capabilities and strategic fit',
      duration: '2-3 weeks',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Agreement',
      description: 'Negotiate terms and sign partnership agreement',
      duration: '3-4 weeks',
      icon: Handshake
    },
    {
      step: 4,
      title: 'Launch',
      description: 'Begin partnership activities and go-to-market',
      duration: '1-2 weeks',
      icon: Zap
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Partnership Inquiries',
      value: 'partnerships@ziontechgroup.com',
      href: 'mailto:partnerships@ziontechgroup.com'
    },
    {
      icon: Phone,
      label: 'Partnership Team',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ];

  return (
    <>
      <SEO 
        title="Partnerships - Zion Tech Group"
        description="Join Zion Tech Group's partner ecosystem. Explore partnership opportunities in AI, cloud, and technology solutions."
        keywords="partnerships, technology partners, channel partners, strategic alliances, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
                <Handshake className="w-5 h-5 text-zion-purple mr-2" />
                <span className="text-zion-purple font-medium">Partnership Opportunities</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Partner With Us
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
                Join our ecosystem of technology innovators and business leaders. 
                Together, we're transforming industries through AI and technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Partnership Types
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities. 
                We offer flexible arrangements to support your growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-blue rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-white">
                        {type.name}
                      </CardTitle>
                      
                      <CardDescription className="text-zion-cyan-light">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {type.requirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem and 
                how we can help accelerate your business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-zion-cyan-light">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Partner Success Stories
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                See how our partners have achieved remarkable results through collaboration 
                with Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.partner}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">{story.logo}</div>
                      <CardTitle className="text-xl font-bold text-white">
                        {story.partner}
                      </CardTitle>
                      <CardDescription className="text-zion-cyan-light">
                        {story.type}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {story.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold">Key Results:</h4>
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2 text-sm">
                            <Star className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                How to Become a Partner
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Our partnership application process is straightforward and designed 
                to get you started quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-blue rounded-full mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    
                    {index < applicationSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-zion-purple to-zion-blue transform translate-x-4"></div>
                    )}
                  </div>
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-zion-cyan-light mb-2">
                    {step.description}
                  </p>
                  
                  <div className="text-sm text-zion-purple font-medium">
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
                Let's discuss how we can work together to create value for both our businesses 
                and your customers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-blue rounded-lg mb-4">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {contact.label}
                    </h3>
                    
                    <a
                      href={contact.href}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white"
                  onClick={() => window.open('mailto:partnerships@ziontechgroup.com?subject=Partnership Inquiry', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Partnership Discussion
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"
                  onClick={() => window.open('tel:+13024640950', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Partnership Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;
