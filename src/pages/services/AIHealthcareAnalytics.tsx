import React from 'react';
import { SEO } from '../../components/SEO';
import { Brain, Heart, Activity, Users, TrendingUp, Shield, Clock, Target, BarChart3, CheckCircle, ArrowRight, Star, DollarSign, Globe, Lock, Smartphone, Cloud, Database, FileText, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIHealthcareAnalytics() {
  const healthcareFeatures = [
    {
      title: "Predictive Patient Analytics",
      description: "AI-powered risk assessment and early warning systems for patient deterioration and readmission prevention",
      icon: Brain,
      benefits: ["Risk scoring", "Early warning alerts", "Readmission prediction", "Outcome forecasting"]
    },
    {
      title: "Clinical Decision Support",
      description: "Real-time clinical insights and treatment recommendations based on patient data and medical literature",
      icon: Heart,
      benefits: ["Treatment recommendations", "Drug interaction alerts", "Clinical guidelines", "Evidence-based insights"]
    },
    {
      title: "Population Health Management",
      description: "Comprehensive population health analytics for disease prevention and health outcome optimization",
      icon: Users,
      benefits: ["Disease surveillance", "Prevention programs", "Health equity analysis", "Population segmentation"]
    },
    {
      title: "Operational Intelligence",
      description: "Healthcare operations optimization with AI-driven insights for resource allocation and workflow efficiency",
      icon: Activity,
      benefits: ["Resource optimization", "Workflow automation", "Capacity planning", "Performance metrics"]
    },
    {
      title: "Compliance & Audit Automation",
      description: "Automated compliance monitoring for HIPAA, HITECH, and other healthcare regulatory requirements",
      icon: Shield,
      benefits: ["HIPAA compliance", "Audit automation", "Privacy monitoring", "Security controls"]
    },
    {
      title: "Real-time Monitoring Dashboard",
      description: "Comprehensive healthcare analytics dashboard with real-time insights and customizable reporting",
      icon: BarChart3,
      benefits: ["Real-time data", "Custom dashboards", "Executive reporting", "Mobile access"]
    }
  ];

  const pricingPlans = [
    {
      name: "Clinical",
      price: "$899",
      period: "/month",
      description: "Perfect for individual practices and small clinics",
      features: [
        "Patient analytics dashboard",
        "Basic clinical decision support",
        "HIPAA compliance monitoring",
        "Standard reporting",
        "Email support",
        "Up to 1,000 patients"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Ideal for hospitals and healthcare systems",
      features: [
        "Everything in Clinical",
        "Advanced predictive analytics",
        "Population health management",
        "Custom integrations",
        "24/7 support",
        "Unlimited patients",
        "API access"
      ],
      popular: true
    },
    {
      name: "Research",
      price: "$4,999",
      period: "/month",
      description: "For research institutions and pharmaceutical companies",
      features: [
        "Everything in Enterprise",
        "Advanced research tools",
        "Clinical trial analytics",
        "Custom AI models",
        "Dedicated support",
        "Research collaboration tools",
        "Publication support"
      ],
      popular: false
    }
  ];

  const healthcareSolutions = [
    {
      category: "Clinical Analytics",
      solutions: [
        "Patient outcome prediction",
        "Treatment effectiveness analysis",
        "Clinical pathway optimization",
        "Quality metrics tracking"
      ]
    },
    {
      category: "Operational Analytics",
      solutions: [
        "Resource utilization optimization",
        "Staff scheduling optimization",
        "Inventory management",
        "Revenue cycle analytics"
      ]
    },
    {
      category: "Financial Analytics",
      solutions: [
        "Cost analysis and optimization",
        "Revenue forecasting",
        "Claims processing analytics",
        "Risk-based contracting"
      ]
    },
    {
      category: "Quality & Safety",
      solutions: [
        "Patient safety monitoring",
        "Quality improvement tracking",
        "Infection control analytics",
        "Medication safety monitoring"
      ]
    }
  ];

  const complianceFrameworks = [
    {
      framework: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      features: ["Data encryption", "Access controls", "Audit logging", "Breach notification"]
    },
    {
      framework: "HITECH",
      description: "Health Information Technology for Economic and Clinical Health Act",
      features: ["Meaningful use", "Electronic health records", "Health information exchange", "Privacy protection"]
    },
    {
      framework: "SOC 2",
      description: "Service Organization Control 2 compliance",
      features: ["Security controls", "Availability monitoring", "Processing integrity", "Confidentiality"]
    },
    {
      framework: "ISO 27001",
      description: "Information security management system",
      features: ["Risk management", "Security policies", "Incident management", "Business continuity"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      role: "Chief Medical Officer",
      company: "Metro Health System",
      content: "The AI Healthcare Analytics Platform has transformed our clinical decision-making. We've seen a 25% improvement in patient outcomes and significant cost savings.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Director of Analytics",
      company: "Regional Medical Center",
      content: "Population health management has never been more effective. The platform provides insights that help us prevent diseases and improve community health.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director",
      company: "University Medical Center",
      content: "The research capabilities are exceptional. We've accelerated our clinical trials and published findings that are advancing medical science.",
      rating: 5
    }
  ];

  const healthcareMetrics = [
    { metric: "25%", label: "Improved Patient Outcomes" },
    { metric: "40%", label: "Reduced Readmissions" },
    { metric: "30%", label: "Cost Savings" },
    { metric: "99.9%", label: "HIPAA Compliance" }
  ];

  const useCases = [
    {
      scenario: "Chronic Disease Management",
      description: "Predictive analytics for diabetes, heart disease, and other chronic conditions",
      benefits: ["Early intervention", "Better outcomes", "Cost reduction"]
    },
    {
      scenario: "Emergency Department Optimization",
      description: "Real-time analytics for ED triage, resource allocation, and patient flow",
      benefits: ["Faster care", "Resource efficiency", "Patient satisfaction"]
    },
    {
      scenario: "Pharmaceutical Research",
      description: "Clinical trial analytics and drug effectiveness studies",
      benefits: ["Faster trials", "Better insights", "Cost efficiency"]
    },
    {
      scenario: "Population Health",
      description: "Community health monitoring and disease prevention programs",
      benefits: ["Preventive care", "Health equity", "Community wellness"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Analytics Platform - Zion Tech Group"
        description="Transform healthcare delivery with AI-powered analytics. Predictive patient insights, clinical decision support, and population health management for better outcomes."
        keywords="AI healthcare analytics, clinical decision support, population health, patient analytics, healthcare compliance, medical AI"
        canonical="https://ziontechgroup.com/services/ai-healthcare-analytics"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Analytics Platform
            <span className="block text-3xl md:text-4xl text-green-400 mt-2">
              Transforming Healthcare with Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Leverage the power of artificial intelligence to improve patient outcomes, optimize operations, 
            and advance medical research. HIPAA-compliant, secure, and designed for healthcare professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </Link>
            <Link 
              to="/request-quote"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Healthcare Metrics */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {healthcareMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{item.metric}</div>
                <div className="text-gray-300 text-sm md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Advanced Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered analytics designed specifically for healthcare
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Solutions */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Healthcare Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics across all aspects of healthcare delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareSolutions.map((category, index) => (
              <div key={category.category} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how healthcare organizations are leveraging AI analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.scenario} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{useCase.scenario}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs text-green-400">
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

      {/* Compliance Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with healthcare-grade security and compliance standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={framework.framework} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{framework.framework}</h3>
                <p className="text-gray-300 mb-4 text-sm">{framework.description}</p>
                <div className="space-y-2">
                  {framework.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-green-400">
                      <Shield className="w-3 h-3 mr-2 flex-shrink-0" />
                      {feature}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Healthcare Analytics Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare organization's needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                plan.popular ? 'border-green-500' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'border border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what healthcare professionals say about our AI Analytics Platform
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Transform Healthcare with AI
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join leading healthcare organizations that are already leveraging AI to improve patient care and outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Demo
            </Link>
            <Link 
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
          <div className="mt-8 text-green-100">
            <p>Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}