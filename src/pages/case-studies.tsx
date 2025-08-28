import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Building2, 
  Heart, 
  TrendingUp, 
  Shield, 
  Factory, 
  ShoppingCart,
  ArrowRight,
  Star,
  CheckCircle,
  Users,
  DollarSign,
  Clock,
  Target,
  BarChart3,
  Zap
} from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Healthcare AI Transformation',
      company: 'MetroHealth Systems',
      industry: 'Healthcare',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      challenge: 'MetroHealth Systems faced challenges with patient data management, diagnostic accuracy, and operational efficiency across their network of 15 hospitals.',
      solution: 'Implemented comprehensive AI-powered healthcare platform including diagnostic AI, patient management systems, and predictive analytics.',
      results: [
        '40% improvement in diagnostic accuracy',
        '30% reduction in patient wait times',
        '$2.5M annual cost savings',
        '95% patient satisfaction rate'
      ],
      featured: true,
      duration: '8 months',
      team: '12 specialists'
    },
    {
      title: 'Financial Services Automation',
      company: 'GlobalBank Financial',
      industry: 'Financial Services',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      challenge: 'GlobalBank needed to automate compliance processes, improve risk management, and enhance customer experience while maintaining regulatory standards.',
      solution: 'Deployed AI-powered compliance automation, risk assessment systems, and intelligent customer service platforms.',
      results: [
        '60% faster compliance processing',
        '45% reduction in operational costs',
        '99.9% compliance accuracy rate',
        'Enhanced customer satisfaction scores'
      ],
      featured: true,
      duration: '6 months',
      team: '8 specialists'
    },
    {
      title: 'Manufacturing Digital Twin',
      company: 'TechManufacturing Co.',
      industry: 'Manufacturing',
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      challenge: 'TechManufacturing struggled with production inefficiencies, quality control issues, and predictive maintenance across their 8 production facilities.',
      solution: 'Implemented comprehensive digital twin platform with IoT sensors, AI analytics, and predictive maintenance systems.',
      results: [
        '25% increase in production efficiency',
        '35% reduction in downtime',
        '20% improvement in quality control',
        '$1.8M annual savings'
      ],
      featured: false,
      duration: '10 months',
      team: '15 specialists'
    },
    {
      title: 'Retail E-commerce Platform',
      company: 'Modern Retail Group',
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-pink-500 to-rose-500',
      challenge: 'Modern Retail Group needed to modernize their e-commerce platform, improve customer experience, and implement AI-powered personalization.',
      solution: 'Built next-generation e-commerce platform with AI personalization, advanced analytics, and omnichannel integration.',
      results: [
        '150% increase in online sales',
        '45% improvement in customer retention',
        '60% faster page load times',
        'Enhanced mobile experience'
      ],
      featured: false,
      duration: '7 months',
      team: '10 specialists'
    },
    {
      title: 'Government Digital Services',
      company: 'City of Innovation',
      industry: 'Government & Public Sector',
      icon: Shield,
      color: 'from-slate-500 to-gray-500',
      challenge: 'The City of Innovation needed to digitize citizen services, improve transparency, and enhance operational efficiency.',
      solution: 'Developed comprehensive digital government platform with citizen portals, automated workflows, and data analytics.',
      results: [
        '80% reduction in service processing time',
        '90% citizen satisfaction improvement',
        'Significant cost savings for taxpayers',
        'Enhanced transparency and accountability'
      ],
      featured: false,
      duration: '12 months',
      team: '20 specialists'
    },
    {
      title: 'Enterprise AI Integration',
      company: 'Fortune 500 Corporation',
      industry: 'Enterprise',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      challenge: 'A Fortune 500 corporation needed to integrate AI across their global operations, improve decision-making, and optimize business processes.',
      solution: 'Implemented enterprise-wide AI platform with business intelligence, process automation, and predictive analytics.',
      results: [
        '30% improvement in decision-making speed',
        '25% reduction in operational costs',
        'Enhanced global collaboration',
        'Improved competitive positioning'
      ],
      featured: false,
      duration: '18 months',
      team: '25 specialists'
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our healthcare operations with their AI solutions. The results exceeded our expectations.",
      author: "Dr. Sarah Johnson",
      position: "CTO, MetroHealth Systems",
      company: "MetroHealth Systems"
    },
    {
      quote: "The AI automation platform revolutionized our compliance processes and significantly improved our operational efficiency.",
      author: "Michael Chen",
      position: "Head of Technology",
      company: "GlobalBank Financial"
    },
    {
      quote: "Working with Zion Tech Group was a game-changer for our manufacturing operations. The digital twin solution is incredible.",
      author: "Robert Martinez",
      position: "Operations Director",
      company: "TechManufacturing Co."
    }
  ];

  const industries = [
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Retail & E-commerce',
    'Government',
    'Enterprise',
    'Education',
    'Energy',
    'Space & Aerospace',
    'Legal Services'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and implementation results from our clients across various industries. See how our AI solutions drive measurable business outcomes."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our AI solutions have transformed businesses across industries. 
              Real results, measurable outcomes, and proven success stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Start Your Success Story
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most impactful case studies showcasing real business transformation and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
              <div
                key={caseStudy.title}
                className="group relative p-8 rounded-2xl border border-green-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-green-400/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <caseStudy.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-lg text-green-400 font-semibold">{caseStudy.company}</p>
                    <p className="text-gray-400">{caseStudy.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Duration: {caseStudy.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Team: {caseStudy.team}
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors group/link"
                >
                  Learn More About This Project
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of success stories across all industries and solution types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.title}
                className="group p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${caseStudy.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <caseStudy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-green-400 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-green-400 font-medium text-sm">{caseStudy.company}</p>
                    <p className="text-gray-400 text-sm">{caseStudy.industry}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {caseStudy.challenge.substring(0, 120)}...
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>Duration: {caseStudy.duration}</span>
                  <span>Team: {caseStudy.team}</span>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium text-sm transition-colors group/link"
                >
                  Read Full Case Study
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear directly from the leaders who have experienced our transformative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t border-slate-700/50 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-green-400 text-sm">{testimonial.position}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions have been successfully implemented across diverse industries, 
              delivering measurable results and driving transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="text-center p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the growing list of organizations that have transformed their operations 
              with our AI-powered solutions. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;