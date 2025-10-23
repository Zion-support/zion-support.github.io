'use client';
import React from 'react';
import {CheckSquare, CheckCircle, Phone, Star} from 'lucide-react';;

constTaskManagerProPage: React.FC= () =>{constfeatures= [
    {
      icon: CheckSquare,
      title: 'AI Task Prioritization',
      description: 'Intelligent task prioritization that analyzes deadlines, dependencies, and importance to optimize your workflow.',
      benefit: 'Increase productivity by40%'
   },
    {icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and intelligent task assignment.',
      benefit: 'Improve team efficiency by60%'
   },
    {icon: Brain,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that considers your work patterns, energy levels, and optimal focus times.',
      benefit: 'Complete tasks30% faster'
   },
    {icon: Zap,
      title: 'Automated Workflows',
      description: 'Create custom automation rules that trigger actions based on task completion, deadlines, and team updates.',
      benefit: 'Reduce manual work by70%'
   },
    {icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track SMART goals with AI insights on progress, roadblocks, and optimization opportunities.',
      benefit: 'Achieve85% of your goals'
   },
    {icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics on productivity patterns, team performance, and project success metrics.',
      benefit: 'Data-driven improvements'
   }
  ];

  constpricingPlans= [
    {name: 'Individual',
      price: '$1 9',
      period: '/month',
      description: 'Perfect for personal use',
      features: [
        'Unlimited personal tasks',
        'Basic AI prioritization',
        'Mobile app access',
        'Basic reporting',
        'Email support',
        '1 year data retention'
      ],
      popular: false
   },
    {name: 'Team',
      price: '$4 9',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10team members',
        'Advanced AI features',
        'Team collaboration',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        '2 years data retention'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$14 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Premium AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Unlimited data retention',
        'Custom compliance'
      ],
      popular: false
   }
  ];

  constintegrations= [
    {name: 'Slack', icon: '💬', description: 'Team communication'},
    {name: 'Microsoft Teams', icon: '👥', description: 'Collaboration platform'},
    {name: 'Google Workspace', icon: '📧', description: 'Productivity suite'},
    {name: 'Jira', icon: '🎯', description: 'Project management'},
    {name: 'Asana', icon: '📋', description: 'Task management'},
    {name: 'Trello', icon: '📌', description: 'Visual boards'},
    {name: 'Notion', icon: '📝', description: 'Documentation'},
    {name: 'GitHub', icon: '💻', description: 'Development workflow'}
  ];

  consttestimonials= [
    {name: 'Rachel Green',
      company: 'Marketing Agency',
      role: 'Project Manager',
      content: 'Task Manager Pro transformed our team productivity. We complete projects40% faster with better quality.',
      rating:5},
    {name: 'Tom Anderson',
      company: 'Software Startup',
      role: 'CEO',
      content: 'The AI prioritization is incredible. It knows exactly what to focus on and when. Our team loves it.',
      rating:5},
    {name: 'Lisa Park',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The automation features saved us 15hours per week. We can now focus on high-value work.',
      rating:5}
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">{/* HeroSection */}
    <sectionclassName="container mx-autopx-4py-16pt-24"><divclassName="text-centermb-16"><divclassName="inline-flex items-center justify-center w-20h-20bg-gradient-to-r from-cyan-40 0to-purple-500rounded-fullmb-6"><CheckSquareclassName="w-10h-10text-white" /></di><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">Task Manager Pro
        </h><spanclassName="text-xlmd:text-2 xltext-cyan-400mb-8font-medium"></className="text-xlmd:text-2 xltext-cyan-400mb-8font-medium">AI-Powered Productivity Platform
        </p><spanclassName="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed"></className="text-lg text-gray-300max-w-4 xl mx-automb-8leading-relaxed">Supercharge your productivity with our AI-powered task management platform. 
            Get intelligent prioritization, automated workflows, and team collaboration 
            tools that help you achieve more in less time.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial
          </a></di></di>{/* KeyBenefits */}
      <divclassName="grid grid-cols-1 md:grid-cols-4 gap-8mb-16"><divclassName="text-center"><divclassName="text-4 xl font-bold text-cyan-400mb-2">40%</di><divclassName="text-whitefont-semiboldmb-2">MoreProductive</di><divclassName="text-gray-300text-sm">WithAIprioritization</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-purple-400mb-2">60%</di><divclassName="text-whitefont-semiboldmb-2">TeamEfficiency</di><divclassName="text-gray-300text-sm">Bettercollaborationtools</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-green-400mb-2">70%</di><divclassName="text-whitefont-semiboldmb-2">LessManualWork</di><divclassName="text-gray-300text-sm">Withautomation</di></di><divclassName="text-center"><divclassName="text-4 xl font-bold text-orange-400mb-2">85%</di><divclassName="text-whitefont-semiboldmb-2">GoalAchievement</di><divclassName="text-gray-300text-sm">Withsmarttracking</di></di></di>{/* FeaturesSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Powerful Task Management Features
        </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{features.map((featureindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20 hover:border-cyan-40 0/40transition-allduration-300"><feature.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-boldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300mb-4leading-relaxed">{feature.description}</p><divclassName="text-cyan-400font-semiboldtext-sm">{feature.benefit}</di></di>))}
        </di></sectio>{/* IntegrationsSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Works with Your Tools
        </h><divclassName="grid grid-cols-2md:grid-cols-4gap-6">{integrations.map((integrationindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-50 0/20text-centerhover:border-cyan-40 0/40transition-allduration-300"><divclassName="text-4xlmb-3">{integration.icon}</di><h3className="text-lg font-boldtext-whitemb-2">{integration.name}</h><pclassName="text-gray-300text-sm">{integration.description}</p></di>))}
        </di></sectio>{/* PricingSection */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">Simple, Transparent Pricing
        </h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricingPlans.map((planindex) => (
           <divkey={index} className={`bg-slate-80 0/50backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300${
                plan.popular 
                  ? 'border-cyan-400scale-10 5' 
                   : 'border-slate-700 hover:border-cyan-50 0/5 0'
            }`}>{plan.popular && (
                <divclassName="bg-cyan-400text-slate-900px-4 py-2 rounded-full text-sm font-semiboldtext-centermb-4">Most Popular
                </di>)}
              <h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-6">{plan.description}</p><divclassName="mb-6"><spanclassName="text-4 xlfont-boldtext-white">{plan.price}</spa><spanclassName="text-gray-300">{plan.period}</spa></di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                  </l>))}
              </u>< className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-40 0 to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}></ className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30 0 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400to-purple-500text-whitehover:from-cyan-500 hover:to-purple-60 0'
                     : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-white'
              }`}>Get Started
              </butto></di>))}
        </di></sectio>{/* Testimonials */}
      <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center"></spa></className="text-3 xlmd:text-4 xl font-bold text-white mb-12text-center">What Our Users Say
        </h><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                 <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
              </di><pclassName="text-gray-300mb-4italic">"{testimonial.content}"</p><di v><divclassName="font-semiboldtext-white">{testimonial.name}</di><divclassName="text-cyan-400text-sm">{testimonial.role}</di><divclassName="text-gray-400text-sm">{testimonial.company}</di></di></di>))}
        </di></sectio>{/* CTASection */}
      <sectionclassName="text-center bg-gradient-to-r from-cyan-50 0/10to-purple-50 0/10rounded-lg p-12border border-cyan-500/20"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-6"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-6">Ready to Supercharge Your Productivity?
        </h><spanclassName="text-lg text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-lg text-gray-300mb-8 max-w-2xlmx-auto">Join thousands of professionals using Task Manager Pro to achieve more, 
            work smarter, and reach their goals faster.
        </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="tel:+13024640950"
             className="bg-gradient-to-r from-cyan-40 0 to-purple-500text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-500 hover:to-purple-600transition-allduration-300flexitems-center"
            ><PhoneclassName="w-5h-5mr-2" />Call: (30 2)464-0950</a><ahref="/contact"
             className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-indigo-600transition-allduration-300"
            >Start Free Trial
          </a></di></sectio></sectio></di>
  );
};

export default TaskManagerProPage