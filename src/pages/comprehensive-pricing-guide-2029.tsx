import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Shield,
  Cloud,
  BarChart3,
  Zap,
  Users,
  Rocket,
  Globe,
  Lock,
  Eye,
  Server,
  Database,
  TrendingUp,
  Target,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

const ComprehensivePricingGuide2029: React.FC = () => {
  const [selectedService, setSelectedService] = useState('all');

  const allServices = [
    {
      id: 'ai-automation',
      name: 'AI Business Automation Platform',
      description: 'Transform your business with AI-powered automation',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      plans: [
        {
          name: 'Starter',
          price: '$299',
          period: '/month',
          features: [
            'Basic AI automation workflows',
            'Up to 5 user accounts',
            'Standard integrations',
            'Email support',
            'Basic analytics dashboard',
            '5GB data storage'
          ],
          cta: 'Start Free Trial',
          popular: false
        },
        {
          name: 'Professional',
          price: '$799',
          period: '/month',
          features: [
            'Advanced AI algorithms',
            'Up to 25 user accounts',
            'Premium integrations',
            'Priority support',
            'Advanced analytics',
            '50GB data storage',
            'Custom workflows',
            'API access'
          ],
          cta: 'Get Started',
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$2,499',
          period: '/month',
          features: [
            'Custom AI models',
            'Unlimited user accounts',
            'Enterprise integrations',
            '24/7 dedicated support',
            'Custom analytics',
            'Unlimited storage',
            'White-label solution',
            'On-premise deployment',
            'Custom training',
            'SLA guarantee'
          ],
          cta: 'Contact Sales',
          popular: false
        }
      ]
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      description: 'Military-grade AI-powered security protection',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      plans: [
        {
          name: 'Essential',
          price: '$499',
          period: '/month',
          features: [
            'Basic threat detection',
            'Up to 10 endpoints',
            'Email security',
            'Basic firewall',
            'Security awareness training',
            '24/7 monitoring',
            'Incident response',
            'Monthly reports'
          ],
          cta: 'Start Free Trial',
          popular: false
        },
        {
          name: 'Professional',
          price: '$1,299',
          period: '/month',
          features: [
            'Advanced AI threat detection',
            'Up to 100 endpoints',
            'Advanced email security',
            'Next-gen firewall',
            'Advanced training modules',
            '24/7 SOC support',
            'Automated response',
            'Weekly reports',
            'Compliance tools',
            'Vulnerability scanning'
          ],
          cta: 'Get Started',
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$3,999',
          period: '/month',
          features: [
            'Custom AI models',
            'Unlimited endpoints',
            'Enterprise integrations',
            'Custom training',
            'Dedicated security team',
            'Custom compliance',
            'Advanced analytics',
            'White-label solution',
            'On-premise deployment',
            'SLA guarantee'
          ],
          cta: 'Contact Sales',
          popular: false
        }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps Platform',
      description: 'Accelerate development with advanced DevOps tools',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      plans: [
        {
          name: 'Starter',
          price: '$399',
          period: '/month',
          features: [
            'Basic cloud management',
            'Up to 10 environments',
            'Standard CI/CD pipelines',
            'Basic monitoring',
            'Email support',
            'Community documentation',
            'Basic security scanning',
            '5GB log storage'
          ],
          cta: 'Start Free Trial',
          popular: false
        },
        {
          name: 'Professional',
          price: '$1,199',
          period: '/month',
          features: [
            'Advanced cloud management',
            'Up to 50 environments',
            'Advanced CI/CD pipelines',
            'Advanced monitoring',
            'Priority support',
            'Premium documentation',
            'Advanced security scanning',
            '50GB log storage',
            'Custom integrations',
            'API access',
            'Advanced analytics',
            'Compliance tools'
          ],
          cta: 'Get Started',
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$3,999',
          period: '/month',
          features: [
            'Custom cloud solutions',
            'Unlimited environments',
            'Custom CI/CD pipelines',
            'Custom monitoring',
            '24/7 dedicated support',
            'Custom documentation',
            'Custom security scanning',
            'Unlimited log storage',
            'Custom integrations',
            'White-label solution',
            'On-premise deployment',
            'Custom training',
            'SLA guarantee'
          ],
          cta: 'Contact Sales',
          popular: false
        }
      ]
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics Platform',
      description: 'Transform data into actionable insights',
      icon: BarChart3,
      color: 'from-emerald-500 to-teal-500',
      plans: [
        {
          name: 'Starter',
          price: '$199',
          period: '/month',
          features: [
            'Basic analytics dashboard',
            'Up to 5 data sources',
            'Standard reports',
            'Basic ML insights',
            'Email support',
            'Community documentation',
            '5GB data storage',
            'Up to 10 users'
          ],
          cta: 'Start Free Trial',
          popular: false
        },
        {
          name: 'Professional',
          price: '$799',
          period: '/month',
          features: [
            'Advanced analytics dashboard',
            'Up to 25 data sources',
            'Advanced reports',
            'Advanced ML insights',
            'Priority support',
            'Premium documentation',
            '50GB data storage',
            'Up to 50 users',
            'Custom dashboards',
            'API access',
            'Advanced security',
            'Compliance tools'
          ],
          cta: 'Get Started',
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$2,999',
          period: '/month',
          features: [
            'Custom analytics solutions',
            'Unlimited data sources',
            'Custom reports',
            'Custom ML models',
            '24/7 dedicated support',
            'Custom documentation',
            'Unlimited storage',
            'Unlimited users',
            'White-label solution',
            'On-premise deployment',
            'Custom training',
            'SLA guarantee'
          ],
          cta: 'Contact Sales',
          popular: false
        }
      ]
    }
  ];

  const filteredServices = selectedService === 'all' 
    ? allServices 
    : allServices.filter(service => service.id === selectedService);

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai-automation', name: 'AI Automation', icon: Brain },
    { id: 'ai-cybersecurity', name: 'AI Cybersecurity', icon: Shield },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3 }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and boost productivity by up to 300%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "AI-powered threat detection with 99.9% accuracy",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Faster Development",
      description: "Deploy 10x faster with automated CI/CD pipelines",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Better Insights",
      description: "Transform data into actionable insights with 300% ROI improvement",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechFlow Solutions",
      content: "Zion Tech Group's AI automation platform transformed our operations. We've seen a 300% increase in efficiency and our team can now focus on strategic initiatives.",
      rating: 5,
      service: "AI Automation"
    },
    {
      name: "David Thompson",
      position: "CISO, SecureBank",
      content: "The cybersecurity platform has transformed our security posture. We've reduced security incidents by 95% and achieved full compliance with all regulatory requirements.",
      rating: 5,
      service: "AI Cybersecurity"
    },
    {
      name: "Jennifer Kim",
      position: "DevOps Engineer, TechCorp",
      content: "The DevOps platform transformed our deployment process. We went from weekly deployments to multiple daily deployments with zero downtime.",
      rating: 5,
      service: "Cloud & DevOps"
    },
    {
      name: "Rachel Green",
      position: "Data Scientist, RetailCorp",
      content: "The analytics platform transformed our data strategy. We've increased our conversion rates by 35% and reduced customer churn by 40% through data-driven insights.",
      rating: 5,
      service: "Data Analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Comprehensive
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {' '}Pricing Guide 2029
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Transparent pricing for all our AI-powered platforms and services. 
                Choose the perfect plan for your business needs and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View All Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-xl hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                >
                  Get Custom Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the future of technology with our cutting-edge platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Service
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Select the service category to view detailed pricing
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedService(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedService === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          {filteredServices.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {service.name}
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {service.plans.map((plan, planIndex) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: planIndex * 0.1 }}
                    className={`relative bg-white/5 border rounded-2xl p-8 ${
                      plan.popular 
                        ? `border-purple-400 bg-gradient-to-br from-purple-500/10 to-blue-500/10` 
                        : 'border-white/10'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-slate-400 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={plan.name === 'Enterprise' ? '/contact' : '#contact'}
                      className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                          : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from businesses using our platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm">{testimonial.position}</p>
                  </div>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact our team to discuss your specific needs and get a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-xl hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to discuss your technology needs? Contact our team today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2029;