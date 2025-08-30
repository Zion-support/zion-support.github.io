import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  ArrowRight,
  Server,
  Network,
  Database,
  Cloud,
  Lock,
  Globe,
  TrendingUp,
  Activity,
  Target,
  Eye,
  AlertTriangle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIHealthcareAnalytics = () => {
  const features = [
    {
      icon: Brain,
      title: "Predictive Diagnostics",
      description: "AI-powered diagnostic tools that analyze patient data to predict diseases and conditions before they become critical.",
      benefits: ["Early disease detection", "Improved patient outcomes", "Reduced healthcare costs", "Preventive care optimization"]
    },
    {
      icon: BarChart3,
      title: "Patient Data Analysis",
      description: "Comprehensive analysis of patient records, lab results, and medical history to identify patterns and trends.",
      benefits: ["Data-driven insights", "Personalized treatment plans", "Risk assessment", "Population health insights"]
    },
    {
      icon: Target,
      title: "Treatment Optimization",
      description: "AI algorithms that recommend optimal treatment plans based on patient data, medical research, and outcomes.",
      benefits: ["Better treatment efficacy", "Reduced side effects", "Faster recovery", "Cost optimization"]
    },
    {
      icon: Users,
      title: "Population Health Analytics",
      description: "Large-scale analysis of population health data to identify trends, risk factors, and public health opportunities.",
      benefits: ["Public health insights", "Epidemic prediction", "Resource allocation", "Preventive programs"]
    }
  ];

  const healthcareModules = [
    {
      name: "Clinical Decision Support",
      description: "AI-powered clinical decision support system for physicians and healthcare providers",
      icon: Brain,
      features: ["Diagnostic assistance", "Treatment recommendations", "Drug interaction alerts", "Clinical guidelines"]
    },
    {
      name: "Medical Imaging Analysis",
      description: "Advanced AI analysis of X-rays, MRIs, CT scans, and other medical imaging",
      icon: Eye,
      features: ["Automated detection", "Image enhancement", "Comparative analysis", "Radiology support"]
    },
    {
      name: "Electronic Health Records",
      description: "Intelligent EHR management with AI-powered data extraction and analysis",
      icon: Database,
      features: ["Data mining", "Natural language processing", "Automated coding", "Quality metrics"]
    },
    {
      name: "Telemedicine Platform",
      description: "AI-enhanced telemedicine with symptom analysis and remote monitoring",
      icon: Network,
      features: ["Symptom assessment", "Remote monitoring", "Virtual consultations", "Health tracking"]
    },
    {
      name: "Drug Discovery Support",
      description: "AI-powered drug discovery and pharmaceutical research assistance",
      icon: Activity,
      features: ["Molecular modeling", "Drug repurposing", "Clinical trial optimization", "Safety prediction"]
    },
    {
      name: "Healthcare Operations",
      description: "AI optimization of healthcare operations and resource management",
      icon: TrendingUp,
      features: ["Resource optimization", "Staff scheduling", "Inventory management", "Cost analysis"]
    }
  ];

  const pricingTiers = [
    {
      name: "Clinical",
      price: 599,
      period: "month",
      description: "For individual clinics and small practices",
      features: [
        "Up to 1000 patients",
        "Basic AI diagnostics",
        "Clinical decision support",
        "Patient analytics",
        "HIPAA compliance",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: 1499,
      period: "month",
      description: "For hospitals and larger healthcare organizations",
      features: [
        "Up to 10,000 patients",
        "Advanced AI features",
        "Medical imaging analysis",
        "Population health analytics",
        "Custom integrations",
        "Priority support",
        "Advanced reporting",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 2999,
      period: "month",
      description: "For large healthcare systems and research institutions",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "Research tools",
        "White-label options",
        "Dedicated support team",
        "Custom integrations",
        "SLA guarantees",
        "On-site deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      company: "Metro General Hospital",
      content: "AI Healthcare Analytics has transformed our diagnostic accuracy. We've improved early detection rates by 30% and reduced misdiagnoses significantly.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Research Director",
      company: "National Medical Research Institute",
      content: "The population health analytics have revealed patterns we never would have discovered manually. Our research has accelerated dramatically.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Healthcare Administrator",
      company: "Community Health Network",
      content: "Our operational efficiency has improved by 40% thanks to AI optimization. We're serving more patients with better outcomes.",
      rating: 5
    }
  ];

  const complianceFeatures = [
    "HIPAA Compliance",
    "HITECH Act Support",
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR Compliance",
    "FDA Guidelines",
    "Clinical Validation",
    "Data Encryption"
  ];

  const useCases = [
    {
      category: "Diagnostics",
      examples: ["Early cancer detection", "Cardiovascular risk assessment", "Neurological disorder prediction", "Infectious disease screening"]
    },
    {
      category: "Treatment",
      examples: ["Personalized medicine", "Drug response prediction", "Treatment outcome forecasting", "Side effect minimization"]
    },
    {
      category: "Operations",
      examples: ["Resource optimization", "Staff scheduling", "Inventory management", "Cost reduction"]
    },
    {
      category: "Research",
      examples: ["Clinical trial optimization", "Drug discovery", "Epidemiological studies", "Public health research"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Healthcare Analytics — Zion Tech Group | AI-Powered Healthcare Solutions"
        description="Revolutionary AI-powered healthcare analytics platform for predictive diagnostics, treatment optimization, and population health insights. Improve patient outcomes by 30%."
        keywords="AI healthcare, medical AI, predictive diagnostics, healthcare analytics, population health, clinical decision support"
        canonical="https://ziontechgroup.com/services/ai-healthcare-analytics"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2"/>
              AI-Powered Healthcare
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Analytics
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform healthcare delivery with AI-powered analytics. Improve diagnostic accuracy by 30%, 
              optimize treatment plans, and gain population health insights for better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="/request-quote" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Healthcare Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI Healthcare Analytics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">30% Better Diagnostics</h3>
              <p className="text-gray-300">AI improves accuracy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">40% Cost Reduction</h3>
              <p className="text-gray-300">Optimize operations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Population Insights</h3>
              <p className="text-gray-300">Public health benefits</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">HIPAA Compliant</h3>
              <p className="text-gray-300">Secure & compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced AI Healthcare Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-8 hover:border-green-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
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

      {/* Healthcare Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Comprehensive Healthcare Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareModules.map((module, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <module.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{module.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Healthcare Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">{useCase.category}</h3>
                <ul className="space-y-3">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Healthcare Compliance & Security</h2>
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-white"/>
                  </div>
                  <p className="text-white font-semibold text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Our platform meets the highest standards of healthcare compliance and security, ensuring patient data protection 
                and regulatory adherence across all healthcare environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Healthcare Analytics Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 border rounded-xl p-8 relative ${
                tier.popular 
                  ? 'border-green-500/50 bg-slate-800/70' 
                  : 'border-white/10'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${tier.price}</span>
                    <span className="text-gray-400 ml-2">/{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105'
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

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Healthcare Leaders Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
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
            Join hundreds of healthcare organizations already using AI Healthcare Analytics to improve patient outcomes, 
            reduce costs, and gain valuable insights for better care delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
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
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="text-green-400 hover:text-green-300">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalytics;
