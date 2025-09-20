import React from "react"
import { motion } from "framer-motion"
import { 
  Activity
  Heart, 
  Brain, 
  Zap, 
  CheckCircle, 
  Clock, 
  DollarSign
  Users
  BarChart3
  Shield
  TrendingUp
  Award
  Star
  ArrowRight
  Phone
  Mail
  MapPin
  ExternalLink
  Stethoscope
  Pill
  Microscope
  Database
} from "lucide-react"
import { SEO } from "../../components/SEO"
export default function AIHealthcareAnalytics() {
  const features = [
    {
      ic,
  o: n: <Brain className="w-6 h-6" />,tit,
  l: e: "Predictive Patient Analytics",descripti,
  o: n: "AI algorithms predict patient outcomes, readmission risks, and treatment effectiveness with 96% accuracy"
    }, {
      ic,
  o: n: <Activity className="w-6 h-6" />,tit,
  l: e: "Real-time Health Monitoring",descripti,
  o: n: "Continuous monitoring of patient vitals with early warning systems and automated alerts for critical changes"
    }, {
      ic,
  o: n: <Database className="w-6 h-6" />,tit,
  l: e: "Clinical Data Integration",descripti,
  o: n: "Seamless integration with EHR systems, medical devices, and wearable technology for comprehensive data analysis"
    }, {
      ic,
  o: n: <Microscope className="w-6 h-6" />,tit,
  l: e: "Medical Image Analysis",descripti,
  o: n: "Advanced AI-powered analysis of X-rays, MRIs, and CT scans for faster and more accurate diagnoses"
    }, {
      ic,
  o: n: <Shield className="w-6 h-6" />,tit,
  l: e: "HIPAA-Compliant Security",descripti,
  o: n: "Enterprise-grade security with end-to-end encryption and full HIPAA compliance for patient data protection"
    }, {
      ic,
  o: n: <BarChart3 className="w-6 h-6" />,tit,
  l: e: "Population Health Insights",descripti,
  o: n: "Comprehensive analytics for population health management, disease trends, and preventive care strategies"
    }
  ]

  const pricing = [
    {
      na,
  m: e: "Clinic",pri,
  c: e: "$399",peri,
  o: d: "/month",featur,
  e: s: [
        "Up to 1,000 patients"
        "Basic predictive analytics"
        "Standard reporting"
        "Email support"
        "HIPAA compliance"
      ]
      popul,
  a: r: false
    }, {
      na,
  m: e: "Hospital",pri,
  c: e: "$1,199"
      peri,
  o: d: "/month",featur,
  e: s: [
        "Up to 10,000 patients"
        "Advanced AI analytics"
        "Real-time monitoring"
        "Priority support"
        "Custom dashboards"
        "API access"
        "Integration support"
      ]
      popul,
  a: r: true
    }, {
      na,
  m: e: "Health System",pri,
  c: e: "$2,999"
      peri,
  o: d: "/month",featur,
  e: s: [
        "Unlimited patients"
        "Custom AI models"
        "Advanced analytics"
        "Dedicated support"
        "White-label options"
        "SLA guarantees"
        "On-premise deployment"
      ]
      popula,
  r: false
    }
  ]
  const benefits = [
    "Reduce readmission rates by 30%"
    "Improve diagnostic accuracy by 25%"
    "Reduce healthcare costs by 20-35%"
    "Enhance patient outcomes and satisfaction"
    "Streamline clinical workflows"
    "Enable proactive patient care"
  ]

  const useCases = [
    {
      special,
  t: y: "Cardiology",descripti,
  o: n: "Predict heart failure risks, monitor cardiac function, and optimize treatment plans"
      improveme,
  n: t: "40% risk reduction"
    }, {
      special,
  t: y: "Oncology",descripti,
  o: n: "Personalized treatment recommendations, drug response prediction, and survival analysis"
      improveme,
  n: t: "35% treatment efficacy"
    }, {
      special,
  t: y: "Emergency Medicine",descripti,
  o: n: "Triage optimization, resource allocation, and patient flow management"
      improveme,
  n: t: "50% efficiency gain"
    }, {
      special,
  t: y: "Primary Care",descripti,
  o: n: "Preventive care planning, chronic disease management, and population health insights"
      improveme,
  n: t: "45% preventive care"
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Healthcare Analytics Platform - Zion Tech Group"
        description="Revolutionary AI platform for healthcare analytics, patient monitoring, and clinical insights. Improve patient outcomes while reducing healthcare costs by 20-35%."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
          >
            <h1 className="text-5xl,
  m: d: text-6xl font-bold text-white mb-6">
              AI-Powered Healthcare Analytics
            </h1>
            <p className="text-xl m,
  d:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with intelligent analytics, predictive insights, and real-time patient monitoring. 
              Improve patient outcomes while reducing costs by 20-35%.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a
                href="htt,
  p: s://ziontechgroup.com/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg,
  hove: r:from-red-700,
  hove: r:to-pink-700 transition-all duration-300,
  transform: hover:scale-105";"
              >
                Transform Your Healthcare
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg,
  hove: r:bg-red-500 hove,
  r:text-white transition-all duration-300";"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4,
  s: m: px-6 l,
  g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Healthcare Analytics Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built by healthcare experts and AI engineers, our platform delivers unprecedented insights and patient care improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className="className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700,
  hove: r:border-red-500 transition-all duration-300";"
              >
                <CheckCircle className="w-8 h-8 text-red-400 mb-4" />
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Healthcare Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to deliver better patient care and achieve operational excellence in healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className="className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700,
  hove: r: border-red-500 transition-all duration-300 group";"
              >
                <div className="text-red-400 mb-4 group-hove,
  r:text-red-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Specialty-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI analytics for different medical specialties and healthcare delivery models.
            </p>
          </div>
          
          <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className="className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700,
  hove: r:border-red-500 transition-all duration-300";"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.specialty}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-red-400 font-semibold">{useCase.improvement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare organization size and analytics needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 }
                className={`relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500 ring-2 ring-red-500/20' 
                    : 'border-slate-700'
                } hov,
  e: r:border-red-500 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="htt,
  p: s: //ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white,
  hove: r:from-red-700,
  hove: r:to-pink-700'
                      : 'bg-slate-700 text-white hove,
  r:bg-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={ opacit,
  y: 0, x: -20 }
              whileInView={ opaci,
  t: y: 1, x: 0 }
              transition={ durati,
  o: n: 0.8 }
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Market-Leading Healthcare Solution
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-red-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Market Price Range</p>
                    <p className="text-gray-300">$600 - $4,000/month for similar solutions</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Implementation Time</p>
                    <p className="text-gray-300">6-10 weeks for full deployment</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">ROI Timeline</p>
                    <p className="text-gray-300">350% return within 12 months</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Target Market</p>
                    <p className="text-gray-300">Hospitals, clinics, health systems, medical practices</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={ opaci,
  t: y: 0, x: 20 }
              whileInView={ opaci,
  t: y: 1, x: 0 }
              transition={ durati,
  o: n: 0.8 }
              className="className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700";"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Clinical Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Readmission Reduction</span>
                  <span className="text-red-400 font-semibold">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Diagnostic Accuracy</span>
                  <span className="text-blue-400 font-semibold">+25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-purple-400 font-semibold">20-35%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Patient Satisfaction</span>
                  <span className="text-yellow-400 font-semibold">+40%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-red-500/30";"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations who have already revolutionized patient care with AI analytics.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a
                href="htt,
  p: s://ziontechgroup.com/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg,
  hove: r:from-red-700,
  hove: r:to-pink-700 transition-all duration-300,
  transform: hover:scale-105";"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="t,
  e: l:+13024640950"
                className="className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg,
  hove: r:bg-red-500 hove,
  r:text-white transition-all duration-300";"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-white font-semibold mb-2">Phone</p>
              <a href="t,
  e: l:+13024640950" className="text-gray-300,
  hove: r:text-red-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-white font-semibold mb-2">Email</p>
              <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-gray-300,
  hove: r:text-red-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-white font-semibold mb-2">Address</p>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="htt,
  p: s://ziontechgroup.com"
              className="className="inline-flex items-center text-red-400 hove,
  r:text-red-300 transition-colors";"
            >
              Visit our website
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}