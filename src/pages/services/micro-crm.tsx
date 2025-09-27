import React from "react"
<<<<<<< HEAD
import {UsersTargetCheckCirclePhoneCalendarBarChart3Building } from "lucide-react"
=======
import {Users, Target, CheckCircle, Pho, n, e, Calend, a, r, BarChar, t, 3, Building } from "lucide-react"
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
import {SEO } from "../../components/SEO"

export default function MicroCRM() {const features = [{
      icon: Users, title: "Contact, Management",
      description:
        "Centralized, database for, all customer, contacts with, detailed profiles, and interaction, history.",
    },
    {icon: Target, title: "Lead, Tracking",
      description:
        "Track, leads through, the sales, funnel with, automated scoring, and qualification, processes.",
    },
    {icon: Calendar, title: "Task, Management",
      description:
<<<<<<< HEAD
        "Schedule, follow-upsmeetingsand, reminders with, integrated calendar, functionality.",
=======
        "Schedule, follow-ups, meetings, and, reminders with, integrated calendar, functionality.",
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
    },
    {icon: BarChart3, title: "Sales, Analytics",
      description:
        "Comprehensive, reporting and, analytics to, track performance, and identify, opportunities.",
    }, ]

  const benefits = ["Streamline customer relationship management",
    "Improve sales team productivity",
    "Enhance customer communication",
    "Track sales performance metrics",
    "Automate repetitive tasks",
    "Centralize customer data", ]

  const useCases = [{title: "Small, Business CRM",
      description:
        "Perfect, for small, businesses looking, to manage, customer relationships, efficiently.",
      icon: Building,
    },
    {title: "Sales, Team Management",
      description:
        "Empower, sales teams, with tools, to track, leads and, manage customer, interactions.",
      icon: Users,
    },
    {title: "Customer, Support",
      description:
        "Track, customer issues, and provide, timely support, with integrated, ticketing.",
      icon: Phone,
    },
    {title: "Marketing, Campaigns",
      description:
        "Manage, marketing campaigns, and track, customer engagement, and responses.",
      icon: Target,
    }, ]

  return (<<<<<<< HEAD
    <div className ="min-h-screen, bg-gradient-to-br, from-slate-900, via-slate-800, to-slate-900">
=======
    <div className ="min-h-screen, bg-gradient-to-br, from-slate-90, 0, via-slate-8, 0, 0, to-slate-90, 0">
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
      <SEO title ="Micro, CRM - Zion, Tech Group"
        description="Streamline, your customer, relationship management, with our, Micro CRM, solution. Perfect, for small, businesses and, growing teams."
      />

      {/* Hero, Section */}
      <section className ="relative, py-20, overflow-hidden">
<<<<<<< HEAD
        <div className ="absolute, inset-0, bg-gradient-to-r, from-cyan-500/10, via-blue-500/10, to-purple-500/10" />
        <div className ="container, mx-auto, px-4, relative z-10">
          <div className ="text-center, max-w-4xl, mx-auto">
            <div className ="inline-flex, items-center, px-4, py-2, bg-gradient-to-r, from-cyan-500/20, to-blue-500/20, rounded-full, border border-cyan-400/30, mb-6">
              <CheckCircle className ="w-4, h-4, mr-2, text-cyan-300" />
              <span className ="text-cyan-300, text-sm, font-medium">Customer, Relationship Management</span>
            </div>
            <h1 className ="text-5xl, md:text-6xl, font-bold, text-white, mb-6">Micro, CRM</h1>
            <p className ="text-xl, text-slate-300, mb-8, leading-relaxed">
              Streamline, your customer, relationships with, our lightweightpowerful, CRM solution, designed for, small
              businesses, and growing, teams.
            </p>
            <div className ="flex, flex-col, sm:flex-row, gap-4, justify-center">
              <button className ="px-8, py-4, bg-gradient-to-r, from-cyan-400, to-blue-500, text-white, font-semibold, rounded-lg, hover:from-cyan-500, hover:to-blue-600, transition-all, duration-200, hover:scale-105, shadow-lg, hover:shadow-cyan-400/25">
                Start, Free Trial
              </button>
              <button className ="px-8, py-4, border border-cyan-400/30, text-cyan-300, font-semibold, rounded-lg, hover:bg-cyan-400/10, transition-all, duration-200">
=======
        <div className ="absolute, inset-0, bg-gradient-to-r, from-cyan-5, 0, 0/10, via-blue-5, 0, 0/10, to-purple-5, 0, 0/10" />
        <div className ="container, mx-auto, px-4, relative z-10">
          <div className ="text-center, max-w-4, x, l, mx-auto">
            <div className ="inline-flex, items-center, px-4, py-2, bg-gradient-to-r, from-cyan-5, 0, 0/20, to-blue-5, 0, 0/20, rounded-full, border border-cyan-4, 0, 0/30, mb-6">
              <CheckCircle className ="w-4, h-4, mr-2, text-cyan-300" />
              <span className ="text-cyan-300, text-sm, font-medium">Customer, Relationship Management</span>
            </div>
            <h1 className ="text-5, x, l, md:text-6, x, l, font-bold, text-white, mb-6">Micro, CRM</h1>
            <p className ="text-xl, text-slate-300, mb-8, leading-relaxed">
              Streamline, your customer, relationships with, our lightweight, powerful, CRM solution, designed for, small
              businesses, and growing, teams.
            </p>
            <div className ="flex, flex-col, sm:flex-row, gap-4, justify-center">
              <button className ="px-8, py-4, bg-gradient-to-r, from-cyan-4, 0, 0, to-blue-5, 0, 0, text-white, font-semibold, rounded-lg, hover:from-cyan-5, 0, 0, hover:to-blue-6, 0, 0, transition-all, duration-2, 0, 0, hover:scale-1, 0, 5, shadow-lg, hover:shadow-cyan-4, 0, 0/25">
                Start, Free Trial
              </button>
              <button className ="px-8, py-4, border border-cyan-4, 0, 0/30, text-cyan-300, font-semibold, rounded-lg, hover:bg-cyan-4, 0, 0/10, transition-all, duration-2, 0, 0">
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f, Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features, Section */}
      <section className ="py-20">
        <div className ="container, mx-auto, px-4">
          <div className ="text-center, mb-16">
<<<<<<< HEAD
            <h2 className ="text-4xl, font-bold, text-white, mb-4">Essential, CRM Features</h2>
            <p className ="text-xl, text-slate-300, max-w-3xl, mx-auto">
=======
            <h2 className ="text-4, x, l, font-bold, text-white, mb-4">Essential, CRM Features</h2>
            <p className ="text-xl, text-slate-300, max-w-3, x, l, mx-auto">
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f, Our Micro, CRM provides, all the, essential features, you need, to manage, customer relationships, without the, complexity of, enterprise solutions.
            </p>
          </div>
          <div className ="grid, md:grid-cols-2, lg:grid-cols-4, gap-8">
<<<<<<< HEAD
            {features.map((featureindex) => (<div key ={index}
                className="bg-slate-800/50, border border-slate-700/50, rounded-xl, p-6, hover:border-cyan-400/30, transition-all, duration-300, hover:scale-105"
              >
                <div className ="w-12, h-12, bg-gradient-to-br, from-cyan-400/20, to-blue-500/20, rounded-lg, flex items-center, justify-center, mb-4">
=======
            {features.map((feature, index) => (<div key ={index}
                className="bg-slate-8, 0, 0/50, border border-slate-7, 0, 0/50, rounded-xl, p-6, hover:border-cyan-4, 0, 0/30, transition-all, duration-300, hover:scale-1, 0, 5"
              >
                <div className ="w-12, h-12, bg-gradient-to-br, from-cyan-4, 0, 0/20, to-blue-5, 0, 0/20, rounded-lg, flex items-center, justify-center, mb-4">
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
                  <feature.icon, className ="w-6, h-6, text-cyan-300" />
                </div>
                <h3 className ="text-xl, font-semibold, text-white, mb-3">{feature.title}</h3>
                <p className ="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits, Section */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Micro CRM? </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
=======
      <section className="py-20 bg-slate-8, 0, 0/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4, x, l font-bold text-white mb-4">Why Choose Micro CRM?</h2>
            <p className="text-xl text-slate-300 max-w-3 : x : l mx-auto">
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
              Experience the benefits of professional CRM software without the complexity and cost of enterprise
              solutions.
            </p>
          </div>
          <div className="grid md :grid-cols-2 lg:grid-cols-3 gap-6">
<<<<<<< HEAD
            {benefits.map((benefitindex) => (<div key ={index} className="flex, items-start, space-x-3">
                <CheckCircle className ="w-5, h-5, text-cyan-400, flex-shrink-0, mt-1" />
=======
            {benefits.map((benefit, index) => (<div key ={index} className="flex, items-start, space-x-3">
                <CheckCircle className ="w-5, h-5, text-cyan-4, 0, 0, flex-shrink-0, mt-1" />
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
                <span className ="text-slate-300, text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use, Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-4">Perfect For Your Business</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you&apos;re a small business owner or managing a growing sales teamour Micro CRM adapts to your
=======
            <h2 className="text-4, x, l font-bold text-white mb-4">Perfect For Your Business</h2>
            <p className="text-xl text-slate-300 max-w-3, x, l mx-auto">
              Whether you&apos;re a small business owner or managing a growing sales team, our Micro CRM adapts to your
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
              needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {useCases.map((useCaseindex) => (<div key ={index}
                className="bg-slate-800/50, border border-slate-700/50, rounded-xl, p-8, hover:border-cyan-400/30, transition-all, duration-300"
              >
                <div className ="w-16, h-16, bg-gradient-to-br, from-cyan-400/20, to-blue-500/20, rounded-xl, flex items-center, justify-center, mb-6">
=======
            {useCases.map((useCase, index) => (<div key ={index}
                className="bg-slate-8, 0, 0/50, border border-slate-7, 0, 0/50, rounded-xl, p-8, hover:border-cyan-4, 0, 0/30, transition-all, duration-300"
              >
                <div className ="w-16, h-16, bg-gradient-to-br, from-cyan-4, 0, 0/20, to-blue-5, 0, 0/20, rounded-xl, flex items-center, justify-center, mb-6">
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
                  <useCase.icon, className ="w-8, h-8, text-cyan-300" />
                </div>
                <h3 className ="text-2xl, font-semibold, text-white, mb-4">{useCase.title}</h3>
                <p className ="text-slate-300, text-lg, leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA, Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Relationships?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have improved their customer management with our Micro CRM solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
=======
      <section className="py-20 bg-gradient-to-r from-cyan-5, 0, 0/10 via-blue-5, 0, 0/10 to-purple-5, 0, 0/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4, x, l font-bold text-white mb-6">Ready to Transform Your Customer Relationships? </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2 : x : l mx-auto">
            Join thousands of businesses that have improved their customer management with our Micro CRM solution.
          </p>
          <div className="flex flex-col sm :flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-4, 0, 0 to-blue-5, 0, 0 text-white font-semibold rounded-lg hover:from-cyan-5, 0, 0 hover:to-blue-6, 0, 0 transition-all duration-2, 0, 0 hover:scale-1, 0, 5 shadow-lg hover:shadow-cyan-4, 0, 0/25">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-cyan-4, 0, 0/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-4, 0, 0/10 transition-all duration-2, 0, 0">
>>>>>>> cursor/check-fix-push-and-merge-to-main-767f
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}