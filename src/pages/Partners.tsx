import React from 'react';
=======
import { 
  Building, 
  Globe, 
  Handshake, 
  Award, 
  Users, 
  Rocket, 
  Shield, 
  Cpu,
  ArrowRight,
  ExternalLink,
  Star,
  TrendingUp,
  Zap
import { Helmet } from 'react-helmet-async';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Building,
  CheckCircle,
  Star
} from 'lucide-react';
const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      icon: Building,
=======
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology companies to deliver comprehensive solutions.',
      benefits: [
        'Access to cutting-edge technologies',
        'Joint solution development',
        'Shared go-to-market strategies',
        'Technical collaboration and support'
      ]
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships to expand our market reach and service delivery.',
      benefits: [
        'Revenue sharing opportunities',
        'Marketing and sales support',
        'Training and certification programs',
        'Dedicated partner success managers'
      ]
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'International partnerships to serve clients across different regions and markets.',
      benefits: [
        'Local market expertise',
        'Regional compliance knowledge',
        'Cultural and language support',
        'Expanded service coverage'
      ]
    },
    {
      icon: Award,
      title: 'Strategic Alliances',
      description: 'Long-term strategic partnerships focused on innovation and market leadership.',
      benefits: [
        'Joint research and development',
        'Innovation labs and centers',
        'Thought leadership collaboration',
        'Industry influence and recognition'
      ]
    }
  ];
  const currentPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and Microsoft 365 integration.'
    },
    {
      name: 'AWS',
      logo: 'A',
      category: 'Cloud Partner',
      description: 'Advanced consulting partner for AWS cloud infrastructure and services.'
    },
    {
      name: 'Google Cloud',
      logo: 'G',
      category: 'Cloud Partner',
      description: 'Partnership for Google Cloud Platform solutions and AI services.'
    },
    {
  const partnershipTiers = [
    {
      name: "Platinum",
      description: "Strategic technology partnerships with joint go-to-market initiatives",
      benefits: [
        "Joint product development",
        "Shared marketing campaigns",
        "Technical integration support",
        "Revenue sharing opportunities",
        "Executive relationship management"
      ],
      requirements: "Annual revenue >$100M, strategic alignment, technical integration",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Gold",
      description: "Technology partnerships with co-marketing and technical collaboration",
      benefits: [
        "Technical collaboration",
        "Co-marketing opportunities",
        "Training and certification",
        "Market development funds",
        "Dedicated partner manager"
      ],
      requirements: "Annual revenue >$50M, technical expertise, market presence",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Silver",
      description: "Solution partnerships with basic support and collaboration",
      benefits: [
        "Solution integration support",
        "Marketing materials",
        "Basic training resources",
        "Partner portal access",
        "Quarterly business reviews"
      ],
      requirements: "Annual revenue >$10M, solution alignment, customer success",
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Research",
      description: "Academic and research partnerships for innovation",
      benefits: [
        "Research collaboration",
        "Student internships",
        "Joint publications",
        "Technology transfer",
        "Academic recognition"
      ],
      requirements: "Research excellence, innovation focus, academic credibility",
      color: "from-blue-500 to-cyan-500"
    }
  ];
  const successStories = [
    {
      title: "Microsoft Azure Partnership Success",
      description: "Joint development of AI-powered enterprise solutions resulted in 200% revenue growth and 50+ enterprise customers.",
      metrics: ["200% Revenue Growth", "50+ Enterprise Customers", "3 Joint Solutions"],
      partner: "Microsoft Azure",
      category: "Technology"
    },
    {
      title: "MIT Research Collaboration",
      description: "Collaborative research in autonomous AI systems led to breakthrough algorithms and joint patent applications.",
      metrics: ["5 Research Papers", "2 Patent Applications", "10 Student Interns"],
      partner: "MIT CSAIL",
      category: "Research"
    },
    {
      title: "Healthcare Industry Partnership",
      description: "AI-powered healthcare solutions developed with industry partners improved patient outcomes by 30%.",
      metrics: ["30% Patient Outcome Improvement", "15 Healthcare Systems", "5 Joint Products"],
      partner: "Johnson & Johnson",
      category: "Industry"
      name: 'Cisco',
      logo: 'C',
      category: 'Network Partner',
      description: 'Strategic partnership for networking and cybersecurity solutions.'
    }
  ];
  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's partner network. Strategic partnerships for technology solutions, growth opportunities, and market expansion." />
        <meta name="keywords" content="partners, partnerships, technology partners, channel partners, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Partnership Opportunities</h1>
              <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                Join our network of strategic partners and unlock new opportunities for growth, 
                innovation, and market expansion in the technology sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#partnerships" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Explore Partnerships
                </a>
                <a 
                  href="#contact" 
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Become a Partner
                </a>
              </div>
            </div>
          </div>
        </div>
      {partnerCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-4">
              <category.icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.partners.map((partner, partnerIndex) => (
              <div
                key={partnerIndex}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div className="p-6">
                  {/* Partner Logo Placeholder */}
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      partner.tier === 'Platinum' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                      partner.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                      partner.tier === 'Silver' ? 'bg-gradient-to-r from-gray-400 to-gray-600 text-white' :
                      'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Partnership</h4>
                    <p className="text-gray-300 text-sm">{partner.partnership}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Success Stories */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                    {story.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{story.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{story.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Metrics</h4>
                  <div className="space-y-1">
                    {story.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-gray-300 text-sm">
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Partner</p>
                  <p className="text-sm text-white font-medium">{story.partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Become a Partner CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our network of strategic partners and help us deliver innovative 
            solutions that transform businesses and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
      {/* Featured Partners */}
      {featuredPartners.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Strategic Partners</h2>
              <p className="text-gray-300">Our key alliance partners driving innovation and growth</p>
        {/* Partnership Types */}
        <section id="partnerships" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various partnership models to suit different business needs and objectives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <type.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Current Partners */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud to work with leading technology companies and organizations worldwide.
              </p>
            </div>
=======
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
              Download Partner Kit
            </button>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{partner.logo}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{partner.category}</p>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Partner Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem and growing your business with Zion Tech Group.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Partnership Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Partnership Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Contact</h3>
                <p className="text-gray-600">Reach out to discuss partnership opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">Evaluate fit and alignment of objectives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agreement</h3>
                <p className="text-gray-600">Finalize partnership terms and conditions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
                <p className="text-gray-600">Begin partnership activities and collaboration</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can work together to create value for both our organizations and our clients.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </a>
              <a 
                href="mailto:partnerships@ziontechgroup.com" 
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Email Partnerships
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                <strong>Partnership Inquiries:</strong>
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-600">
                <div>
                  <strong>Email:</strong> <a href="mailto:partnerships@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">partnerships@ziontechgroup.com</a>
                </div>
                <div>
                  <strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 (302) 464-0950</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
export default function Partners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Partners"
        description="Strategic partnerships and collaborations with Zion Tech Group"
        keywords="partners, collaborations, strategic partnerships, Zion Tech Group"
        canonical="https://ziontechgroup.com/partners"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <GradientHeading>Our Partners</GradientHeading>
          <p className="text-xl text-zion-slate-light mt-4">
            Building the future of tech through strategic partnerships
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Partner cards would go here */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Strategic Partners</h3>
            <p className="text-zion-slate-light">
              We collaborate with leading technology companies to deliver innovative solutions.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Technology Partners</h3>
            <p className="text-zion-slate-light">
              Working with cutting-edge tech providers to enhance our platform capabilities.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Academic Partners</h3>
            <p className="text-zion-slate-light">
              Collaborating with universities and research institutions to advance AI technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
};
export default Partners;
