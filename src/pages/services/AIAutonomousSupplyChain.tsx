import React from "react"
import { motion     } from "framer-motion";
import {
  Truck;
  Brain,
  Shield,
  Zap,
  BarChart3,
  Target,
  CheckCircle,
  Star;
  ArrowRight;
  Cpu;
  Lock;
  Globe;
  Users;
  Clock;
  Phone;
  Mail;
  MapPin;
  Package;
  Route;
  Warehouse;
  TrendingUp;
  AlertTriangle;
  Database;
  Network;
  Smartphone;
  Eye;
  ShoppingCart;
  Heart;
  Leaf;
}
}
}
}
 } from "lucide-react";
const AIAutonomousSupplyChain = () () => {
  const features = [
  {
  tit,
  l: e: "AI Demand Forecasting",descripti,
  o: n: "Machine learning algorithms predict demand with 95% accuracy, optimizing inventory levels and reducing waste"
      ic,
  o: n: Brain,col,
  o: r: "from-blue-500 to-indigo-500"
},
  {
  tit,
  l: e: "Autonomous Route Optimization",descripti,
  o: n: "AI-powered logistics optimization reduces delivery times by 30% and fuel costs by 25%",ic,
  o: n: Route,col,
  o: r: "from-green-500 to-emerald-500"
},
  {
  tit,
  l: e: "Real-time Inventory Management",descripti,
  o: n: "IoT sensors and AI analytics provide real-time visibility across all warehouses and distribution centers",ic,
  o: n: Warehouse,col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  tit,
  l: e: "Predictive Maintenance",descripti,
  o: n: "AI monitors equipment health and predicts failures before they occur, reducing downtime by 40%"
      ic,
  o: n: AlertTriangle,col,
  o: r: "from-red-500 to-orange-500"
},
  {
  tit,
  l: e: "Supplier Risk Assessment",descripti,
  o: n: "AI analyzes supplier performance, financial health, and geopolitical risks in real-time"
      ic,
  o: n: Shield,col,
  o: r: "from-yellow-500 to-orange-500"
},
  {
  tit,
  l: e: "End-to-End Visibility",descripti,
  o: n: "Complete transparency across the entire supply chain from raw materials to final delivery",ic,
  o: n: Eye,col,
  o: r: "from-cyan-500 to-blue-500"
},
  ]
  const pricingPlans = [
  {
  na,
  m: e: "Starter",pri,
  c: e: "$1,999"
      peri,
  o: d: "/month",descripti,
  o: n: "Perfect for small to medium businesses",featur,
  e: s: [
  "AI demand forecasting"
        "Basic inventory management"
        "Route optimization"
        "Up to 5 warehouses"
        "Email support"
        "Mobile app access"
]
      popula,
  r: false;
},
  {
  na,
  m: e: "Professional",pri,
  c: e: "$4,999"
      peri,
  o: d: "/month",descripti,
  o: n: "Ideal for growing enterprises",featur,
  e: s: [
  "Advanced AI algorithms"
        "Multi-warehouse management"
        "Predictive maintenance"
        "Supplier risk assessment"
        "Priority support"
        "API access"
        "Custom integrations"
]
      popula,
  r: true;
},
  {
  na,
  m: e: "Enterprise",pri,
  c: e: "$12,999"
      peri,
  o: d: "/month",descripti,
  o: n: "For large corporations and global operations",featur,
  e: s: [
  "Custom AI model development"
        "Global supply chain visibility"
        "Advanced analytics dashboard"
        "Dedicated support team"
        "SLA guarantees"
        "On-premise deployment"
        "White-label solutions"
]
      popula,
  r: false;
},
  ]
  const benefits = [
  {
  tit,
  l: e: "Cost Reduction",descripti,
  o: n: "Optimize operations and reduce supply chain costs significantly",metr,
  i: c: "25-40% savings"
},
  {
  tit,
  l: e: "Improved Efficiency",descripti,
  o: n: "Streamline processes and increase productivity across operations",metr,
  i: c: "35% efficiency gain"
},
  {
  tit,
  l: e: "Better Customer Service",descripti,
  o: n: "Faster delivery times and improved order accuracy",metr,
  i: c: "50% faster delivery"
},
  {
  tit,
  l: e: "Risk Mitigation",descripti,
  o: n: "Identify and prevent supply chain disruptions proactively",metr,
  i: c: "80% risk reduction"
},
  ]
  const useCases = [
  {
  tit,
  l: e: "Manufacturing",descripti,
  o: n: "Optimize production schedules, manage raw materials, and coordinate with suppliers"
      ic,
  o: n: Package,col,
  o: r: "from-blue-500 to-cyan-500"
},
  {
  tit,
  l: e: "Retail & E-commerce",descripti,
  o: n: "Manage inventory across multiple locations, optimize fulfillment, and improve customer experience"
      ic,
  o: n: ShoppingCart,col,
  o: r: "from-purple-500 to-pink-500"
},
  {
  tit,
  l: e: "Healthcare",descripti,
  o: n: "Ensure critical medical supplies are always available and properly distributed",ic,
  o: n: Heart,col,
  o: r: "from-red-500 to-pink-500"
},
  {
  tit,
  l: e: "Food & Beverage",descripti,
  o: n: "Manage perishable inventory, optimize delivery routes, and reduce food waste"
      ic,
  o: n: Leaf,col,
  o: r: "from-green-500 to-emerald-500"
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <div className="flex items-center justify-center mb-6">
              <Truck className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-5xl,
  l: g: text-7xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                AI Autonomous Supply Chain;
              </h1>
            </div>
            <p className="text-xl l,
  g:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI-powered automation. Optimize operations, reduce costs,
  and gain unprecedented visibility across your entire network.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a;
                href="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg,
  hove: r:from-blue-600,
  hove: r:to-green-600 transition-all duration-300,
  transform: hover:scale-105";"
              >
                Optimize Supply Chain;
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a;
                href="#demo"
                className="className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg,
  hove: r:bg-blue-400 hove,
  r:text-white transition-all duration-300";"
              >
                Watch Demo;
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  l: g:text-5xl font-bold text-white mb-6">
              Intelligent Supply Chain Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides comprehensive supply chain management with predictive analytics;
              autonomous optimization, and real-time visibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600,
  hove: r: border-blue-400 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105";"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  l: g: text-5xl font-bold text-white mb-6">
              Industry Solutions;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique challenges of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="text-center";"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
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
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  l: g: text-5xl font-bold text-white mb-6">
              Proven Results & Benefits;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform has delivered exceptional results for companies across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="text-center";"
              >
                <div className="text-4xl font-bold text-blue-400 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl,
  l: g: text-5xl font-bold text-white mb-6">
              Competitive Pricing Plans;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your supply chain needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 l,
  g:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                viewport={ on,
  c: e: true },
  }
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border-2 ${
  plan.popular;
                    ? 'border-blue-400 shadow-2xl shadow-blue-500/20' 
                    : 'border-slate-600'
}`}
              >
                {plan.popular && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular;
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
  <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a;
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
  plan.popular;
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white,
  hove: r: from-blue-600,
  hove: r:to-green-600'
                      : 'bg-slate-600 text-white hove,
  r:bg-slate-500'
}`}
                >
                  Get Started;
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20">
        <div className="max-w-4xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl,
  l: g: text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our AI platform.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <a;
                href="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg,
  hove: r:from-blue-600,
  hove: r:to-green-600 transition-all duration-300,
  transform: hover:scale-105";"
              >
                Start Free Trial;
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a;
                href="t,
  e: l:+13024640950"
                className="className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg,
  hove: r:bg-blue-400 hove,
  r:text-white transition-all duration-300";"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now;
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */},
  }
      <section className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Contact Zion Tech Group</h3>
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-300">Phone</p>
              <a href="t,
  e: l:+13024640950" className="text-white,
  hove: r:text-blue-400 transition-colors">
                +1 302 464 0950;
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-300">Email</p>
              <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-white hove,
  r:text-blue-400 transition-colors">
                kleber@ziontechgroup.com;
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-gray-300">Address</p>
              <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIAutonomousSupplyChain;