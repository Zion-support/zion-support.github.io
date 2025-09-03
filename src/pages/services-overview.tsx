import React from "react"
import Head from "next/head"
import Link from "next/link"
import { 
  Brain, Zap, Target, Users, Shield, BarChart3, Cloud, Lock, 
  TrendingUp, Code, Database, Network, Smartphone, MessageSquare, 
  FileText, ShoppingCart, Headphones, Search, Clock, Camera, 
  CreditCard, Globe2, Monitor, Server, BarChart, PieChart, 
  LineChart, Activity, Building2, Home, Car, GraduationCap, 
  Heart, ShoppingBag, Briefcase, Palette, Music, Video, 
  BookOpen, Calendar, Bell, Eye, Download, Upload, Share2, 
  QrCode, Tablet, Laptop, Desktop, Watch, Speaker, Microphone, 
  Image, File, Folder, Archive, Edit, Plus, Check, AlertCircle, 
  Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, 
  ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, 
  Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, 
  ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, 
  Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, 
  SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, 
  Repeat1, Workflow, Building, Mail, Settings, Cpu, Lightbulb, 
  Rocket, Star, CheckCircle, Store, Globe, ArrowRight, Phone,
  MapPin
} from "lucide-react"
import ContactInfo from "../components/ContactInfo"

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: "AI Services",
      description: "Cutting-edge artificial intelligence solutions that transform business operations",
      icon: Brain,
      count: 25,
      color: "from-purple-400 to-pink-500",
      href: "/ai-services",
      featured: [
        "AI Autonomous Business Orchestrator",
        "AI Customer Insights Platform", 
        "AI Financial Forecasting Suite",
        "AI Code Review Assistant"
      ]
    },
    {
      name: "IT Services",
      description: "Comprehensive IT solutions for modern enterprise infrastructure",
      icon: Server,
      count: 18,
      color: "from-blue-400 to-cyan-500",
      href: "/it-services",
      featured: [
        "Quantum Cloud Infrastructure",
        "Cloud Migration & Modernization",
        "Advanced Cybersecurity Suite",
        "Data Engineering & Analytics"
      ]
    },
    {
      name: "Micro SaaS",
      description: "Innovative software-as-a-service solutions for specific business needs",
      icon: Cloud,
      count: 35,
      color: "from-green-400 to-emerald-500",
      href: "/micro-saas",
      featured: [
        "AI Code Review Assistant",
        "AI Customer Insights Platform",
        "AI Financial Forecasting Suite",
        "Smart Project Management Platform"
      ]
    }
  ]

  const keyBenefits = [
    {
      title: "Proven Results",
      description: "Our solutions deliver measurable business impact with documented ROI",
      icon: TrendingUp,
      stats: "95% client satisfaction rate"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for enterprise clients",
      icon: Clock,
      stats: "99.9% uptime guarantee"
    },
    {
      title: "Scalable Solutions",
      description: "Flexible architectures that grow with your business needs",
      icon: BarChart3,
      stats: "Unlimited scalability"
    },
    {
      title: "Security First",
      description: "Enterprise-grade security with compliance and data protection",
      icon: Shield,
      stats: "SOC 2 Type II certified"
    }
  ]

  const industries = [
    { name: "Technology", clients: "500+", growth: "+40%" },
    { name: "Healthcare", clients: "300+", growth: "+35%" },
    { name: "Finance", clients: "250+", growth: "+45%" },
    { name: "Manufacturing", clients: "200+", growth: "+30%" },
    { name: "Retail", clients: "150+", growth: "+25%" },
    { name: "Education", clients: "100+", growth: "+20%" }
  ]

  return (
    <>
      <Head>
        <title>Comprehensive Services - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive suite of AI services, IT solutions, and micro SaaS platforms designed to transform your business operations." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, business automation, cloud infrastructure, cybersecurity, data analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services-overview" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 py-20 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Comprehensive Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with Our Services
            </h1>
            <p className="text-indigo-100 text-xl max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI services, IT solutions, and micro SaaS platforms 
              designed to accelerate growth, optimize operations, and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#services" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center font-semibold">
                Explore Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
                Get Started <Phone className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section id="services" className="py-16 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions across three key areas</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">{category.count}</div>
                  <div className="text-sm text-gray-500">Available Solutions</div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Featured Solutions:</h4>
                  <ul className="space-y-1">
                    {category.featured.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={category.href} className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center font-semibold">
                  Explore {category.name} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-gray-600 text-lg">Proven expertise and commitment to excellence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                  <div className="text-sm font-semibold text-indigo-600">{benefit.stats}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Success */}
        <section className="py-16 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Across Industries</h2>
            <p className="text-gray-600 text-lg">Serving clients in diverse sectors with proven results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-1">{industry.clients}</div>
                <div className="text-sm text-gray-600 mb-2">Active Clients</div>
                <div className="text-sm text-green-600 font-semibold">{industry.growth} Growth</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-indigo-100 text-lg mb-8">
              Join thousands of companies using our innovative solutions to drive growth and efficiency.
            </p>
            <ContactInfo 
              variant="compact" 
              className="justify-center mb-8 text-indigo-100" 
              showTitle={false}
            />
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center font-semibold">
                Get Started Today <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
                View Pricing <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}