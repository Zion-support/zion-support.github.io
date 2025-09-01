import React from 'react';
import { SEO } from '../../components/SEO';
import { Brain, Zap, Users, TrendingUp, Shield, Clock, Target, BarChart3, CheckCircle, ArrowRight, Star, DollarSign, Globe, Lock, Smartphone, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIProductivitySuite() {

  const features = [
    {

      title: "AI-Powered Task Management",
      description: "Intelligent task prioritization, deadline optimization, and automated scheduling based on your work patterns",
      icon: Target,
      benefits: ["Smart prioritization", "Automated scheduling", "Workload balancing", "Performance insights"]
    },
    {

      title: "Intelligent Document Processing",
      description: "AI-driven document analysis, summarization, and content extraction from any format",
      icon: Brain,
      benefits: ["Document summarization", "Content extraction", "Format conversion", "Search optimization"]
    },
    {

      title: "Smart Meeting Assistant",
      description: "Automated meeting notes, action item tracking, and follow-up reminders with CRM integration",
      icon: Users,
      benefits: ["Auto-transcription", "Action tracking", "CRM sync", "Follow-up automation"]
    },
    {

      title: "Predictive Analytics Dashboard",
      description: "Real-time insights into productivity patterns, bottlenecks, and optimization opportunities",
      icon: BarChart3,
      benefits: ["Performance metrics", "Bottleneck detection", "Optimization suggestions", "Trend analysis"]
    },
    {

      title: "Cross-Platform Synchronization",
      description: "Seamless integration across all devices and platforms with real-time sync",
      icon: Cloud,
      benefits: ["Multi-device sync", "Offline access", "Real-time updates", "Cross-platform compatibility"]
    }
  ];

  const pricingPlans = [
    {

      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "AI task management",
        "Basic document processing",
        "Meeting assistant (5 hours/month)",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {

      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Everything in Starter",
        "Advanced AI features",
        "Unlimited meeting assistance",
        "Advanced analytics",
        "Priority support",
        "Team collaboration tools"
      ],
      popular: true
    },
    {

      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Professional",
        "Custom AI training",
        "Advanced integrations",
        "Dedicated support",
        "Custom reporting",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const useCases = [
    {

      industry: "Legal",
      description: "Automated contract analysis, case research, and document management",
      benefits: ["Time savings", "Accuracy improvement", "Cost reduction"]
    },
    {

      industry: "Healthcare",
      description: "Patient data analysis, appointment scheduling, and medical record management",
      benefits: ["Efficiency gains", "Compliance adherence", "Patient satisfaction"]
    },
    {

      industry: "Finance",
      description: "Financial document processing, compliance monitoring, and risk assessment",
      benefits: ["Risk reduction", "Compliance automation", "Operational efficiency"]
    },
    {

      industry: "Education",
      description: "Student performance tracking, content creation, and administrative automation",
      benefits: ["Student engagement", "Administrative efficiency", "Personalized learning"]
    }
  ];

  const testimonials = [
    {

      name: "Sarah Chen",
      role: "Operations Director",
      company: "TechFlow Solutions",
      content: "The AI Productivity Suite has transformed our workflow. We've seen a 40% increase in team productivity and significant time savings on routine tasks.",
      rating: 5
    },
    {

      name: "Michael Rodriguez",
      role: "CEO",
      company: "InnovateCorp",
      content: "The intelligent task management and meeting assistance features have streamlined our operations. ROI was achieved within the first quarter.",
      rating: 5
    },
    {

      name: "Dr. Emily Watson",
      role: "Medical Director",
      company: "HealthFirst Clinic",
      content: "Document processing and patient data management have never been easier. The AI accuracy is impressive and saves us hours daily.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Productivity Suite - Zion Tech Group"
        description="Transform your workflow with our comprehensive AI-powered productivity suite. Intelligent task management, document processing, and analytics to boost efficiency."
        keywords="AI productivity, task management, document processing, meeting assistant, workflow automation, business efficiency"
        canonical="https://ziontechgroup.com/services/ai-productivity-suite"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Productivity Suite
            <span className="block text-3xl md:text-4xl text-cyan-400 mt-2">
              Supercharge Your Workflow
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your daily operations with intelligent automation, smart task management, and AI-powered insights. 
            Boost productivity by up to 60% while reducing manual work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to streamline your workflow and boost productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${

                plan.popular ? 'border-cyan-500' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${

                    plan.popular 
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries leverage our AI Productivity Suite
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.industry} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs text-cyan-400">
                      <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from businesses that have transformed their productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already revolutionized their workflow with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
          <div className="mt-8 text-cyan-100">
            <p>Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}