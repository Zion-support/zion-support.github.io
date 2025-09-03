<<<<<<< HEAD
import React from 'react'; import { Link  } from 'react-router-dom'; import { ; Calendar,; Users,; Target,; BarChart3,; MessageSquare,; Phone,; Mail,; MapPin,; CheckCircle,; Star,; Zap,; Shield,; Brain,; Clock,; DollarSign,; ArrowRight,; TrendingUp,; AlertTriangle,; GitBranch,; FileText,;  } from 'lucide-react'; import { SEO } from '@/components/SEO'; ; const AIProjectManagementAssistant = () => {; const features = [; {; icon: Brain,; title: 'AI-Powered Task Prioritization',; description:; 'Intelligent algorithms automatically prioritize tasks based on deadlines, dependencies, team capacity, and business impact.',; benefits: [; 'Reduce project delays by 45%',; 'Optimize resource allocation',; 'Focus on high-impact tasks',; ],; },; {; icon: Users,; title: 'Smart Team Collaboration',; description:; 'AI-driven insights into team performance, workload distribution, and collaboration patterns to improve productivity.',; benefits: [; 'Increase team efficiency by 30%',; 'Better workload balance',; 'Enhanced communication',; ],; },; {; icon: Target,; title: 'Predictive Risk Management',; description:; 'Advanced analytics identify potential project risks before they occur, enabling proactive mitigation strategies.',; benefits: [; 'Prevent 60% of project issues',; 'Reduce unexpected delays',; 'Better resource planning',; ],; },; {; icon: BarChart3,; title: 'Real-time Progress Analytics',; description:; 'Comprehensive dashboards with AI-generated insights on project health, milestone tracking, and performance metrics.',; benefits: [; 'Instant project visibility',; 'Data-driven decisions',; 'Improved stakeholder communication',; ],; },; ]; ; const integrations = [; {; name: 'Jira',; description:; 'Full integration with issue tracking and project management',; },; { name: 'Asana', description: 'Seamless task and project synchronization' },; {; name: 'Microsoft Project',; description: 'Enterprise project management integration',; },; { name: 'Trello', description: 'Visual project board management' },; { name: 'Slack', description: 'Team communication and notifications' },; { name: 'GitHub', description: 'Code repository and development workflow' },; ]; ; const pricingTiers = [; {; name: 'Starter',; price: 299,; period: 'month',; description: 'Perfect for small project teams',; features: [; 'Up to 10 team members',; 'AI task prioritization',; 'Basic risk management',; 'Project templates',; 'Email integration',; 'Basic analytics',; 'Email support',; ],; popular: false,; },; {; name: 'Professional',; price: 599,; period: 'month',; description: 'Ideal for growing project organizations',; features: [; 'Up to 50 team members',; 'Advanced AI features',; 'Predictive risk management',; 'Team performance analytics',; 'Full integrations',; 'Priority support',; 'Custom workflows',; 'Advanced reporting',; ],; popular: true,; },; {; name: 'Enterprise',; price: 1299,; period: 'month',; description: 'For large organizations with complex projects',; features: [; 'Unlimited team members',; 'Custom AI models',; 'Advanced analytics',; 'API access',; 'White-label options',; 'Dedicated account manager',; 'Custom integrations',; 'SLA guarantees',; ],; popular: false,; },; ]; ; const testimonials = [; {; name: 'David Martinez',; role: 'Project Director',; company: 'InnovateTech Solutions',; content:; "AI Project Management Assistant has revolutionized our project delivery.We've reduced delays by 40% and improved team productivity significantly.",; rating: 5,; },; {; name: 'Jennifer Lee',; role: 'Program Manager',; company: 'Global Dynamics',; content:; 'The predictive risk management feature has saved us countless hours and prevented major project setbacks.ROI within the first quarter!',; rating: 5,; },; {; name: 'Robert Wilson',; role: 'Senior PMO',; company: 'TechFlow Enterprises',; content:; 'Real-time analytics and AI insights give us unprecedented visibility into project health.Stakeholder confidence has never been higher.',; rating: 5,; },; ]; ;" return (";" <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;" <SEO";" title="AI Project Management Assistant — Zion Tech Group | Intelligent Project Management";" description="Transform your project management with AI-powered task prioritization, risk management, team collaboration, and real-time analytics.Reduce delays by 45%.";" keywords="AI project management, project management software, task prioritization, risk management, team collaboration";" canonical="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function Aiprojectmanagementassistant() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Aiprojectmanagementassistant Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Aiprojectmanagementassistant Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your aiprojectmanagementassistant operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Aiprojectmanagementassistant Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive aiprojectmanagementassistant solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Aiprojectmanagementassistant?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered aiprojectmanagementassistant platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
