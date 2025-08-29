import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Brain,
  Clock,
  DollarSign,
  ArrowRight,
  Activity,
  Heart,
  Stethoscope,
  Pill,
  Microscope
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIHealthcareAnalyticsPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Patient Risk Assessment",
      description: "Advanced machine learning algorithms analyze patient data to predict health risks, enabling proactive intervention and personalized care plans.",
      benefits: ["Reduce readmission rates by 30%", "Early disease detection", "Personalized treatment plans"]
    },
    {
      icon: Activity,
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring of patient vital signs and health metrics with AI-driven alerts for critical changes requiring immediate attention.",
      benefits: ["24/7 patient monitoring", "Instant critical alerts", "Reduced response time"]
    },
    {
      icon: Stethoscope,
      title: "Predictive Diagnosis Support",
      description: "AI-powered diagnostic assistance that analyzes symptoms, medical history, and test results to suggest potential diagnoses and treatment options.",
      benefits: ["Improve diagnostic accuracy by 40%", "Faster treatment decisions", "Reduced misdiagnosis"]
    },
    {
      icon: BarChart3,
      title: "Population Health Analytics",
      description: "Comprehensive analysis of population health trends, disease patterns, and healthcare utilization to inform public health strategies.",
      benefits: ["Population health insights", "Resource optimization", "Preventive care strategies"]
    }
  ];

  const integrations = [
    { name: "Epic", description: "Full EHR integration and data synchronization" },
    { name: "Cerner", description: "Seamless patient data management" },
    { name: "Allscripts", description: "Electronic health record integration" },
    { name: "Meditech", description: "Healthcare information system sync" },
    { name: "HL7 FHIR", description: "Standard healthcare data exchange" },
    { name: "DICOM", description: "Medical imaging data integration" }
  ];

  const pricingTiers = [
    {
      name: "Clinical",
      price: 899,
      period: "month",
      description: "Perfect for small clinics and practices",
      features: [
        "Up to 50 patient records",
        "Basic risk assessment",
        "Patient monitoring",
        "Diagnostic support",
        "Basic analytics",
        "Email support",
        "Standard compliance"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: 2499,
      period: "month",
      description: "Ideal for hospitals and medical centers",
      features: [
        "Up to 1000 patient records",
        "Advanced AI features",
        "Real-time monitoring",
        "Predictive analytics",
        "Full integrations",
        "Priority support",
        "Custom dashboards",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 5999,
      period: "month",
      description: "For large healthcare systems and networks",
      features: [
        "Unlimited patient records",
        "Custom AI models",
        "Advanced analytics",
        "API access",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      company: "Metro Health System",
      content: "AI Healthcare Analytics Platform has revolutionized our patient care. We've reduced readmission rates by 30% and improved diagnostic accuracy significantly.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Director of Analytics",
      company: "Regional Medical Center",
      content: "The predictive analytics and real-time monitoring have given us unprecedented insights into patient health. Our care quality has improved dramatically.",
      rating: 5
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Clinical Informatics Lead",
      company: "Community Health Network",
      content: "The AI-powered diagnostic support helps our physicians make better decisions faster. Patient outcomes have improved across all departments.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Healthcare Analytics Platform — Zion Tech Group | Intelligent Healthcare Analytics"
        description="Transform healthcare delivery with AI-powered patient risk assessment, real-time monitoring, predictive diagnosis, and population health analytics. Reduce readmission rates by 30%."
        keywords="AI healthcare, healthcare analytics, patient monitoring, predictive diagnosis, population health, medical AI"
        canonical="https://ziontechgroup.com/services/ai-healthcare-analytics-platform"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2"/>
              AI-Powered Healthcare Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize healthcare delivery with intelligent automation. AI-powered patient risk assessment, 
              real-time monitoring, predictive diagnosis, and population health analytics to improve patient outcomes by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="/request-quote" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI Healthcare Analytics Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">30% Reduction in Readmissions</h3>
              <p className="text-gray-300">AI-powered risk assessment and monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Patient Monitoring</h3>
              <p className="text-gray-300">Real-time health tracking and alerts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">40% Diagnostic Accuracy</h3>
              <p className="text-gray-300">AI-powered diagnostic assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Population Health Insights</h3>
              <p className="text-gray-300">Comprehensive health trend analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful AI Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Seamless Healthcare Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 border ${
                tier.popular ? 'border-blue-500 bg-blue-500/10' : 'border-slate-700'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/request-quote" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105' 
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Healthcare Professionals Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading healthcare organizations already using AI to improve patient outcomes and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008<br/>
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;