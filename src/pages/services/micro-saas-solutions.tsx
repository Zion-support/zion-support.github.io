import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Zap, Settings, Users, Shield, Globe, ArrowRight, CheckCircle, Play, Download, Mail, Target, Activity, BarChart3, Database, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MicroSAASSolutions() {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Build and scale your micro SaaS business with our comprehensive solutions. From development to deployment and growth strategies." />
        <meta name="keywords" content="micro SaaS, software as a service, SaaS development, SaaS marketing, SaaS growth, subscription business" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-8">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Micro SaaS Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS
                <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent"> Solutions</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Build, launch, and scale your micro SaaS business with our comprehensive solutions. 
                From development to marketing, we help you create profitable subscription businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-violet-500/30 text-violet-400 font-semibold rounded-lg hover:bg-violet-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Micro SaaS Platform
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our micro SaaS platform provides everything you need to build, launch, and grow 
                your subscription business successfully.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Rocket,
                  title: "SaaS Development",
                  description: "Custom SaaS application development with modern technologies and best practices."
                },
                {
                  icon: ShoppingCart,
                  title: "Subscription Management",
                  description: "Complete subscription billing, payment processing, and customer management."
                },
                {
                  icon: Users,
                  title: "User Management",
                  description: "User authentication, role-based access control, and team collaboration features."
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description: "Enterprise-grade security with SOC 2 compliance and data protection."
                },
                {
                  icon: Zap,
                  title: "Analytics & Insights",
                  description: "Comprehensive analytics for user behavior, revenue tracking, and business insights."
                },
                {
                  icon: Globe,
                  title: "Multi-tenant Architecture",
                  description: "Scalable multi-tenant architecture for growing SaaS businesses."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SaaS Categories Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SaaS Categories
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Discover profitable micro SaaS niches and business opportunities across different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Business Tools",
                  description: "Productivity, project management, and business automation tools.",
                  icon: Settings,
                  benefits: ["Project management", "Time tracking", "Task automation"]
                },
                {
                  title: "Marketing & Sales",
                  description: "Lead generation, email marketing, and sales automation platforms.",
                  icon: Target,
                  benefits: ["Lead generation", "Email marketing", "Sales automation"]
                },
                {
                  title: "Finance & Accounting",
                  description: "Invoicing, expense tracking, and financial management tools.",
                  icon: BarChart3,
                  benefits: ["Invoicing", "Expense tracking", "Financial reporting"]
                },
                {
                  title: "HR & Recruitment",
                  description: "Employee management, hiring, and HR automation solutions.",
                  icon: Users,
                  benefits: ["Employee management", "Hiring automation", "HR workflows"]
                },
                {
                  title: "Customer Support",
                  description: "Helpdesk, live chat, and customer service automation.",
                  icon: Activity,
                  benefits: ["Helpdesk", "Live chat", "Support automation"]
                },
                {
                  title: "Content & SEO",
                  description: "Content management, SEO tools, and digital marketing platforms.",
                  icon: Database,
                  benefits: ["Content management", "SEO tools", "Digital marketing"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-slate-300 mb-4">{category.description}</p>
                  <ul className="space-y-1">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-violet-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                SaaS Development Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our proven development methodology ensures successful SaaS product delivery and launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "Market research, user interviews, and product strategy development."
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description: "User experience design, wireframes, and interactive prototypes."
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description: "Agile development, continuous testing, and quality assurance."
                },
                {
                  step: "04",
                  title: "Launch & Growth",
                  description: "Product launch, marketing, and continuous improvement."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Modern Technology Stack
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Built on cutting-edge technologies for maximum performance, scalability, and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "React/Next.js for frontend development and user experience",
                    "Node.js/Python for backend services and API development",
                    "PostgreSQL/MongoDB for scalable database solutions",
                    "AWS/Azure for cloud infrastructure and deployment",
                    "Docker/Kubernetes for containerization and orchestration",
                    "CI/CD pipelines for automated testing and deployment"
                  ].map((technology, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{technology}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
                <div className="space-y-4">
                  {[
                    { feature: "Responsive Design", icon: Globe, color: "from-blue-500 to-cyan-500" },
                    { feature: "API Integration", icon: Settings, color: "from-purple-500 to-pink-500" },
                    { feature: "Real-time Updates", icon: Zap, color: "from-green-500 to-emerald-500" },
                    { feature: "Mobile Apps", icon: Rocket, color: "from-orange-500 to-red-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-300">{item.feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Strategies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                SaaS Growth Strategies
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Proven strategies to acquire customers, increase revenue, and scale your micro SaaS business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Customer Acquisition</h3>
                <div className="space-y-4">
                  {[
                    "Content marketing and thought leadership",
                    "SEO optimization and organic traffic generation",
                    "Social media marketing and community building",
                    "Referral programs and affiliate marketing",
                    "Free trials and freemium models",
                    "Partnerships and integrations"
                  ].map((strategy, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Revenue Optimization</h3>
                <div className="space-y-4">
                  {[
                    "Pricing strategy optimization and A/B testing",
                    "Upselling and cross-selling strategies",
                    "Customer success and retention programs",
                    "Churn reduction and win-back campaigns",
                    "Revenue analytics and performance tracking",
                    "Subscription model optimization"
                  ].map((strategy, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Success Metrics
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Track the right metrics to measure and improve your SaaS business performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "MRR",
                  title: "Monthly Recurring Revenue",
                  description: "Track predictable monthly revenue growth"
                },
                {
                  metric: "Churn Rate",
                  title: "Customer Churn",
                  description: "Monitor customer retention and satisfaction"
                },
                {
                  metric: "LTV",
                  title: "Customer Lifetime Value",
                  description: "Measure long-term customer value"
                },
                {
                  metric: "CAC",
                  title: "Customer Acquisition Cost",
                  description: "Optimize marketing and sales efficiency"
                }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{metric.metric}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{metric.title}</h3>
                  <p className="text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Transform your idea into a profitable subscription business with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-violet-500/30 text-violet-400 font-semibold rounded-lg hover:bg-violet-500/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}