import React from "react"
import { motion } from "framer-motion"
import {
  Users
  Target,
  CheckCircle,
  ArrowRight 
} from "lucide-react"
export default function MicroCRM() {
  const services = [
  {
  ic,
  o: n: Users,tit,
  l: e: 'Contact Management',descripti,
  o: n: 'Organize and track customer information'
},
  {
  ic,
  o: n: Target,tit,
  l: e: 'Sales Pipeline',descripti,
  o: n: 'Manage sales opportunities and track progress'
},
  {
  ic,
  o: n: CheckCircle,tit,
  l: e: 'Task Management',descripti,
  o: n: 'Organize and prioritize business tasks'
},
  ]
  const benefits = [
  'Improve customer relationshipsIncrease sales conversion rates'
    'Streamline business processesBetter customer insights'
]

  const useCases = [
  { indust,
  r: y: 'Local Services', descripti,
  o: n: 'Manage appointments and customer follow-ups' },
  },
  { indust,
  r: y: 'Retail', descripti,
  o: n: 'Track customer preferences and purchase history' },
  },
  { indust,
  r: y: 'Consulting', descripti,
  o: n: 'Manage client relationships and project tracking' },
  },
  { indust,
  r: y: 'Healthcare', descripti,
  o: n: 'Patient appointment scheduling and follow-ups' },
  },
  ]
  return (
    <div className="min-h-screen bg-futuristic text-white">
      <SEO
        title="Micro CRM for Local Businesses"
        description="Lightweight customer tracking, reminders, invoices, and reviews for local SMBs."
      />
      <section className="container-responsive section-padding">
        <h1 className="heading-responsive text-gradient">Micro CRM</h1>
        <p className="mt-4 max-w-3xl text-zion-slate-light text-responsive">
          Essential CRM without bloat. Track customers, appointments, jobs, and invoices with
          SMS reminders, online payments, and review requests to grow word‑of‑mouth.
        </p>
        <div className="grid-futuristic mt-10">
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>Contacts, pipelines, and tasks in one view</li>
              <li>SMS/email appointment reminders and confirmations</li>
              <li>Invoices and online payments with Stripe</li>
              <li>Automated Google review requests after service</li>
              <li>Mobile‑first with offline mode</li>
            </ul>
          </div>
          <div className="card-futuristic">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">
              <li>So,
  l: o: $19/mo</li>
              <li>Te,
  a: m: $79/mo up to 10 users</li>
              <li>Busines,
  s: $199/mo with custom fields and roles</li>
            </ul>
            <a href="/request-quote" className="btn-futuristic mt-4 inline-block">Get started</a>
          </div>
        </div>
      </section>

      {/* Services Section */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core CRM Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From contact management to sales tracking, we provide 
              comprehensive CRM capabilities for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {services.map((service, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r:border-blue-500/30 transition-all duration-200";"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              CRM Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in sales performance, customer relationships, and business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
  <motion.div
                  key={index},
  }
                  initial={ opaci,
  t: y: 0, x: -20 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                  className="className="flex items-start space-x-3";"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
  <motion.div
                  key={index + 3},
  }
                  initial={ opaci,
  t: y: 0, x: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                  className="className="flex items-start space-x-3";"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */},
  }
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our Micro CRM adapts to various industries, providing 
              tailored solutions for customer relationship management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
  <motion.div
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center,
  hove: r:border-blue-500/30 transition-all duration-200";"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Managing Your Customers Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join businesses worldwide that use our Micro CRM to 
              build stronger customer relationships and grow sales.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg,
  hove: r:from-blue-600,
  hove: r:to-cyan-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hove,
  r:bg-blue-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default MicroCRM