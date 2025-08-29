import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Zap, 
  Users, 
  BarChart3, 
  CheckCircle, 
  Shield, 
  Globe, 
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Network,
  Database,
  Key,
  Fingerprint,
  ShieldCheck,
  Activity,
  Clock,
  Calendar,
  DollarSign,
  CreditCard,
  Wallet,
  Rocket,
  Microscope,
  Beaker,
  TestTube,
  Calculator,
  Code,
  Server,
  Cloud,
  Circuit,
  Binary,
  Hexagon,
  Cube,
  Pyramid,
  Stethoscope,
  Pill,
  Syringe,
  Thermometer,
  Eye,
  Activity,
  Pulse,
  Monitor,
  Building,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Brain,
    title: "Predictive Disease Modeling",
    description: "Advanced AI algorithms that predict disease progression and identify high-risk patients",
    benefits: ["Early disease detection", "Risk stratification", "Prognostic modeling", "Preventive care planning"]
  },
  {
    icon: Activity,
    title: "Real-Time Patient Monitoring",
    description: "Continuous monitoring of patient vital signs and health metrics with AI-powered alerts",
    benefits: ["24/7 monitoring", "Instant alerts", "Trend analysis", "Remote patient care"]
  },
  {
    icon: Stethoscope,
    title: "Clinical Decision Support",
    description: "AI-powered clinical recommendations based on patient data and medical literature",
    benefits: ["Evidence-based recommendations", "Treatment optimization", "Drug interaction alerts", "Clinical guidelines"]
  },
  {
    icon: Eye,
    title: "Medical Image Analysis",
    description: "Advanced AI for analyzing X-rays, MRIs, CT scans, and other medical imaging",
    benefits: ["Automated diagnosis", "Image enhancement", "Quantitative analysis", "Radiology support"]
  },
  {
    icon: BarChart3,
    title: "Population Health Analytics",
    description: "Comprehensive analysis of population health trends and disease patterns",
    benefits: ["Epidemiological insights", "Public health planning", "Resource allocation", "Outcome prediction"]
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Full compliance with healthcare data protection regulations and security standards",
    benefits: ["Data encryption", "Access controls", "Audit trails", "Regulatory compliance"]
  }
];

const pricingPlans = [
  {
    name: "Clinical",
    price: 299,
    period: "month",
    description: "Perfect for small clinics and medical practices",
    features: [
      "Basic AI analytics",
      "Patient monitoring",
      "Clinical decision support",
      "HIPAA compliance",
      "Up to 1000 patients",
      "Email support",
      "Standard reporting"
    ],
    popular: false,
    color: "from-blue-600 to-cyan-600"
  },
  {
    name: "Hospital",
    price: 599,
    period: "month",
    description: "Ideal for hospitals and healthcare systems",
    features: [
      "Advanced AI analytics",
      "Real-time monitoring",
      "Medical image analysis",
      "Population health insights",
      "Up to 10000 patients",
      "Priority support",
      "Custom integrations",
      "Advanced analytics"
    ],
    popular: true,
    color: "from-green-600 to-emerald-600"
  },
  {
    name: "Enterprise",
    price: 1199,
    period: "month",
    description: "For large healthcare organizations and research institutions",
    features: [
      "Enterprise AI platform",
      "Custom AI models",
      "Research tools",
      "Dedicated support team",
      "Unlimited patients",
      "24/7 phone support",
      "Custom workflows",
      "SLA guarantees"
    ],
    popular: false,
    color: "from-purple-600 to-pink-600"
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "40% Improvement in Diagnostic Accuracy",
    description: "AI-powered analysis reduces diagnostic errors and improves patient outcomes"
  },
  {
    icon: DollarSign,
    title: "25% Reduction in Healthcare Costs",
    description: "Optimize resource allocation and reduce unnecessary procedures"
  },
  {
    icon: Clock,
    title: "Faster Diagnosis and Treatment",
    description: "Reduce time to diagnosis and improve treatment planning"
  },
  {
    icon: Users,
    title: "Enhanced Patient Experience",
    description: "Better care coordination and personalized treatment plans"
  }
];

const useCases = [
  {
    title: "Hospitals",
    description: "Comprehensive healthcare analytics for inpatient and outpatient care",
    icon: Building,
    features: ["Patient monitoring", "Clinical decision support", "Resource optimization", "Quality improvement"]
  },
  {
    title: "Clinics",
    description: "AI-powered tools for primary care and specialty practices",
    icon: Stethoscope,
    features: ["Patient screening", "Risk assessment", "Treatment planning", "Follow-up care"]
  },
  {
    title: "Research Institutions",
    description: "Advanced analytics for medical research and clinical trials",
    icon: Microscope,
    features: ["Data analysis", "Clinical research", "Outcome studies", "Population health"]
  },
  {
    title: "Healthcare Startups",
    description: "Innovative AI solutions for emerging healthcare technologies",
    icon: Rocket,
    features: ["Product development", "Clinical validation", "Market research", "Regulatory compliance"]
  }
];

const healthcareSolutions = [
  {
    title: "Cardiology",
    description: "AI-powered heart disease detection and monitoring",
    icon: Heart,
    features: ["ECG analysis", "Risk prediction", "Treatment optimization", "Outcome monitoring"]
  },
  {
    title: "Oncology",
    description: "Cancer detection, staging, and treatment planning",
    icon: Microscope,
    features: ["Tumor detection", "Staging analysis", "Treatment response", "Survival prediction"]
  },
  {
    title: "Neurology",
    description: "Brain and nervous system disorder analysis",
    icon: Brain,
    features: ["Brain imaging", "Cognitive assessment", "Disease progression", "Treatment monitoring"]
  },
  {
    title: "Radiology",
    description: "Advanced medical imaging analysis and diagnosis",
    icon: Eye,
    features: ["Image enhancement", "Automated detection", "Quantitative analysis", "Report generation"]
  }
];

export default function AIHealthcareAnalytics() {
  return (
    <>
      <SEO 
        title="AI Healthcare Analytics Pro - Zion Tech Group"
        description="Advanced AI-powered healthcare analytics platform for predictive diagnostics, patient monitoring, and clinical insights. Transform healthcare with intelligent analytics."
        canonical="/services/ai-healthcare-analytics"
        url="https://ziontechgroup.com/services/ai-healthcare-analytics"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
              <Heart className="w-4 h-4 mr-2" />
              AI Healthcare
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
              AI Healthcare Analytics Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with AI-powered analytics, predictive diagnostics, and intelligent patient monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                <Link to="/request-quote">
                  Transform Healthcare
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered analytics for every medical specialty and healthcare need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcareSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive healthcare platform combines cutting-edge AI with medical expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of healthcare with AI-powered insights and analytics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Organizations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for every type of healthcare provider and organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Healthcare Analytics Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable AI healthcare solutions for organizations of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 border-2 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105 border-green-200' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
                      : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'
                  }`}
                >
                  <Link to="/request-quote">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join healthcare organizations worldwide using AI to improve patient outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                <Link to="/request-quote">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-gray-900 font-semibold">Phone</p>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-gray-900 font-semibold">Email</p>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-gray-900 font-semibold">Address</p>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}