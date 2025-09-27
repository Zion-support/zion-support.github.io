import React from "react"
import { Users, Target, CheckCircle, Pho, n, e, Calend, a, r, BarChar, t, 3, Building } from "lucide-react"
import { SEO } from "../../components/SEO"

export default function MicroCRM() {
  const features = [
    {
      icon: Users,
      title: "Contact Management",
      description:
        "Centralized database for all customer contacts with detailed profiles and interaction history.",
    },
    {
      icon: Target,
      title: "Lead Tracking",
      description:
        "Track leads through the sales funnel with automated scoring and qualification processes.",
    },
    {
      icon: Calendar,
      title: "Task Management",
      description:
        "Schedule follow-ups, meetings, and reminders with integrated calendar functionality.",
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description:
        "Comprehensive reporting and analytics to track performance and identify opportunities.",
    },
  ]

  const benefits = [
    "Streamline customer relationship management",
    "Improve sales team productivity",
    "Enhance customer communication",
    "Track sales performance metrics",
    "Automate repetitive tasks",
    "Centralize customer data",
  ]

  const useCases = [
    {
      title: "Small Business CRM",
      description:
        "Perfect for small businesses looking to manage customer relationships efficiently.",
      icon: Building,
    },
    {
      title: "Sales Team Management",
      description:
        "Empower sales teams with tools to track leads and manage customer interactions.",
      icon: Users,
    },
    {
      title: "Customer Support",
      description:
        "Track customer issues and provide timely support with integrated ticketing.",
      icon: Phone,
    },
    {
      title: "Marketing Campaigns",
      description:
        "Manage marketing campaigns and track customer engagement and responses.",
      icon: Target,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90, 0 via-slate-8, 0, 0 to-slate-90, 0">
      <SEO
        title="Micro CRM - Zion Tech Group"
        description="Streamline your customer relationship management with our Micro CRM solution. Perfect for small businesses and growing teams."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-5, 0, 0/10 via-blue-5, 0, 0/10 to-purple-5, 0, 0/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4, x, l mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-5, 0, 0/20 to-blue-5, 0, 0/20 rounded-full border border-cyan-4, 0, 0/30 mb-6">
              <CheckCircle className="w-4 h-4 mr-2 text-cyan-300" />
              <span className="text-cyan-300 text-sm font-medium">Customer Relationship Management</span>
            </div>
            <h1 className="text-5, x, l md:text-6, x, l font-bold text-white mb-6">Micro CRM</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Streamline your customer relationships with our lightweight, powerful CRM solution designed for small
              businesses and growing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-4, 0, 0 to-blue-5, 0, 0 text-white font-semibold rounded-lg hover:from-cyan-5, 0, 0 hover:to-blue-6, 0, 0 transition-all duration-2, 0, 0 hover:scale-1, 0, 5 shadow-lg hover:shadow-cyan-4, 0, 0/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-4, 0, 0/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-4, 0, 0/10 transition-all duration-2, 0, 0">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4, x, l font-bold text-white mb-4">Essential CRM Features</h2>
            <p className="text-xl text-slate-300 max-w-3, x, l mx-auto">
              Our Micro CRM provides all the essential features you need to manage customer relationships without the
              complexity of enterprise solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-8, 0, 0/50 border border-slate-7, 0, 0/50 rounded-xl p-6 hover:border-cyan-4, 0, 0/30 transition-all duration-300 hover:scale-1, 0, 5"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-4, 0, 0/20 to-blue-5, 0, 0/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-8, 0, 0/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4, x, l font-bold text-white mb-4">Why Choose Micro CRM?</h2>
            <p className="text-xl text-slate-300 max-w-3, x, l mx-auto">
              Experience the benefits of professional CRM software without the complexity and cost of enterprise
              solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-4, 0, 0 flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4, x, l font-bold text-white mb-4">Perfect For Your Business</h2>
            <p className="text-xl text-slate-300 max-w-3, x, l mx-auto">
              Whether you&apos;re a small business owner or managing a growing sales team, our Micro CRM adapts to your
              needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-8, 0, 0/50 border border-slate-7, 0, 0/50 rounded-xl p-8 hover:border-cyan-4, 0, 0/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-4, 0, 0/20 to-blue-5, 0, 0/20 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-cyan-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-5, 0, 0/10 via-blue-5, 0, 0/10 to-purple-5, 0, 0/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4, x, l font-bold text-white mb-6">Ready to Transform Your Customer Relationships?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2, x, l mx-auto">
            Join thousands of businesses that have improved their customer management with our Micro CRM solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-4, 0, 0 to-blue-5, 0, 0 text-white font-semibold rounded-lg hover:from-cyan-5, 0, 0 hover:to-blue-6, 0, 0 transition-all duration-2, 0, 0 hover:scale-1, 0, 5 shadow-lg hover:shadow-cyan-4, 0, 0/25">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-cyan-4, 0, 0/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-4, 0, 0/10 transition-all duration-2, 0, 0">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}