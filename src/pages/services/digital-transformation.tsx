import React from 'react.ts';
import { Helmet  } from 'react-helmet-async.ts';
import { RefreshCw, TrendingUp, BarChart3, Settings, Users, Shield, ArrowRight, CheckCircle, Play, Download, Mail, Target, Activity, Database, Calculator, PieChart, Globe, Clock, Zap, Eye, Brain, Cpu, Cloud, Smartphone  } from 'lucide-react.ts';
import { Link  } from 'react-router-dom.ts';

export default function DigitalTransformation(...args: []):  {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with comprehensive digital transformation services. Modernize operations, enhance customer experience, and drive innovation." />
        <meta name="keywords" content="digital transformation, business modernization, digital strategy, technology consulting, process automation, digital innovation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
                <RefreshCw className="w-4 h-4 mr-2" />
                Business Transformation
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Digital
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Transformation</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your business with comprehensive digital transformation services. Modernize operations, 
                enhance customer experience, and drive innovation across your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
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
                Comprehensive Digital Transformation
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our digital transformation services cover every aspect of modernizing your business 
                for the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Digital Strategy",
                  description: "Develop comprehensive digital transformation roadmap and strategy."
                },
                {
                  icon: Cloud,
                  title: "Cloud Migration",
                  description: "Migrate legacy systems to modern cloud infrastructure and platforms."
                },
                {
                  icon: Settings,
                  title: "Process Automation",
                  description: "Automate manual processes and workflows for improved efficiency."
                },
                {
                  icon: Users,
                  title: "Customer Experience",
                  description: "Enhance customer journey and digital touchpoints across all channels."
                },
                {
                  icon: Shield,
                  title: "Digital Security",
                  description: "Implement robust cybersecurity and data protection measures."
                },
                {
                  icon: TrendingUp,
                  title: "Data Analytics",
                  description: "Leverage data insights for informed decision-making and optimization."
                }
              ].map((feature, index)  => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Areas Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Digital Transformation Areas
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive transformation across all critical business functions and processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Technology Infrastructure",
                  description: "Modernize IT infrastructure with cloud, automation, and scalability.",
                  icon: Cpu,
                  benefits: ["Cloud migration", "Infrastructure automation", "Scalability planning"]
                },
                {
                  title: "Business Processes",
                  description: "Streamline and automate business processes for efficiency gains.",
                  icon: Settings,
                  benefits: ["Process mapping", "Workflow automation", "Efficiency optimization"]
                },
                {
                  title: "Customer Experience",
                  description: "Transform customer interactions and digital touchpoints.",
                  icon: Users,
                  benefits: ["Omnichannel strategy", "Digital touchpoints", "Customer journey mapping"]
                },
                {
                  title: "Data & Analytics",
                  description: "Implement data-driven decision making and analytics capabilities.",
                  icon: BarChart3,
                  benefits: ["Data strategy", "Analytics implementation", "Business intelligence"]
                },
                {
                  title: "Digital Culture",
                  description: "Foster digital-first mindset and organizational change.",
                  icon: Brain,
                  benefits: ["Change management", "Digital literacy", "Innovation culture"]
                },
                {
                  title: "Security & Compliance",
                  description: "Ensure digital security and regulatory compliance.",
                  icon: Shield,
                  benefits: ["Cybersecurity", "Data protection", "Compliance frameworks"]
                }
              ].map((area, index)  => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-slate-300 mb-4">{area.description}</p>
                  <ul className="space-y-1">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-purple-400 flex items-center">
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

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Modern Technology Stack
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Leverage cutting-edge technologies for your digital transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cloud Platforms",
                  description: "AWS, Azure, Google Cloud for scalable infrastructure.",
                  icon: Cloud,
                  features: ["Multi-cloud strategy", "Serverless computing", "Container orchestration"]
                },
                {
                  title: "AI & Machine Learning",
                  description: "Intelligent automation and predictive analytics.",
                  icon: Brain,
                  features: ["Predictive analytics", "Process automation", "Intelligent insights"]
                },
                {
                  title: "Mobile & Web",
                  description: "Modern web and mobile application development.",
                  icon: Smartphone,
                  features: ["Progressive web apps", "Native mobile apps", "Responsive design"]
                },
                {
                  title: "Data & Analytics",
                  description: "Big data processing and business intelligence tools.",
                  icon: BarChart3,
                  features: ["Data lakes", "Real-time analytics", "Business intelligence"]
                },
                {
                  title: "DevOps & Automation",
                  description: "Continuous integration and deployment automation.",
                  icon: Settings,
                  features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing"]
                },
                {
                  title: "Security & Compliance",
                  description: "Advanced cybersecurity and compliance solutions.",
                  icon: Shield,
                  features: ["Zero-trust security", "Compliance automation", "Threat detection"]
                }
              ].map((tech, index)  => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.title}</h3>
                  <p className="text-slate-300 mb-4">{tech.description}</p>
                  <ul className="space-y-1">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-purple-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Digital Transformation Benefits
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Transform your business operations with measurable improvements and competitive advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "25-40% improvement in operational efficiency",
                    "30-50% reduction in operational costs",
                    "Enhanced customer satisfaction and engagement",
                    "Improved decision-making with data insights",
                    "Increased agility and market responsiveness",
                    "Better employee productivity and satisfaction"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Transformation Metrics</h3>
                <div className="space-y-4">
                  {[
                    { metric: "25-40%", label: "Efficiency", description: "Operational improvement" },
                    { metric: "30-50%", label: "Cost Reduction", description: "Operational costs" },
                    { metric: "60%+", label: "Customer Satisfaction", description: "Improvement" },
                    { metric: "80%+", label: "Digital Adoption", description: "Technology adoption" }
                  ].map((item, index)  => (
                    <div key={index} className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400 mb-1">{item.metric}</div>
                      <div className="text-sm text-slate-300">{item.label}</div>
                      <div className="text-xs text-slate-400">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformation Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our systematic approach ensures successful digital transformation implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Evaluate current state and identify transformation opportunities."
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Develop comprehensive digital transformation roadmap and strategy."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Execute transformation initiatives with agile methodology."
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuously monitor, optimize, and scale digital capabilities."
                }
              ].map((step, index)  => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Start your digital transformation journey with comprehensive strategy and implementation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
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