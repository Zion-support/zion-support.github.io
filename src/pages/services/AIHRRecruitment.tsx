import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Brain, 
  Target, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Shield,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  TrendingUp,
  UserCheck,
  UserPlus,
  UserX,
  Briefcase,
  GraduationCap,
  Heart,
  DollarSign,
  Graph
} from 'lucide-react';

const AIHRRecruitment: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Candidate Matching",
      description: "Advanced algorithms that analyze skills, experience, and cultural fit to find the perfect candidates for your organization.",
      benefits: ["Skill-based matching", "Cultural fit analysis", "Predictive success modeling"]
    },
    {
      icon: Target,
      title: "Intelligent Sourcing",
      description: "Automated talent discovery across multiple platforms and databases to identify passive candidates and expand your talent pool.",
      benefits: ["Multi-platform sourcing", "Passive candidate discovery", "Talent pipeline building"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven insights that forecast hiring success, employee retention, and workforce planning needs.",
      benefits: ["Hiring success prediction", "Retention forecasting", "Workforce planning"]
    },
    {
      icon: Zap,
      title: "Automated Screening",
      description: "Intelligent pre-screening processes that save time and improve candidate quality through AI-powered assessments.",
      benefits: ["Automated assessments", "Skill validation", "Cultural fit evaluation"]
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Built-in compliance features and data security measures to ensure your recruitment process meets all legal requirements.",
      benefits: ["GDPR compliance", "Data encryption", "Audit trails"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous learning algorithms that improve recruitment outcomes based on historical data and success patterns.",
      benefits: ["Learning algorithms", "Success pattern analysis", "Continuous improvement"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Hiring",
      description: "Reduce time-to-hire by up to 60% with automated processes and intelligent candidate matching."
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Lower recruitment costs through automation and improved candidate quality."
    },
    {
      icon: Star,
      title: "Better Quality",
      description: "Improve candidate quality with AI-powered screening and predictive analytics."
    },
    {
      icon: Users,
      title: "Scalable Process",
      description: "Handle any volume of applications without compromising quality or speed."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      features: [
        "Up to 50 job postings",
        "Basic AI candidate matching",
        "Standard screening tools",
        "Email support"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      features: [
        "Up to 200 job postings",
        "Advanced AI algorithms",
        "Predictive analytics",
        "Multi-platform sourcing",
        "Priority support"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "per month",
      features: [
        "Unlimited job postings",
        "Custom AI models",
        "Advanced analytics dashboard",
        "API access",
        "Dedicated support team"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI HR Recruitment
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Transform your hiring process with AI-powered recruitment solutions that find the best talent faster
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/solutions"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            AI-Powered Recruitment Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-slate-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI HR Recruitment?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border ${
                  plan.recommended 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.recommended && (
                  <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.recommended
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Recruitment?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let our AI experts help you build a smarter, more efficient hiring process
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/solutions"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHRRecruitment;
