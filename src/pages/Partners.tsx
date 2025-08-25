<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Handshake, 
  Building, 
  Users, 
  Globe, 
  Star, 
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  Shield,
  Cloud,
  Cpu,
  Database,
  Network,
  Zap
} from 'lucide-react';
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98

export default function Partners() {
  const partnerCategories = [
    {
<<<<<<< HEAD
      title: "Technology Partners",
      description: "Leading technology companies that provide infrastructure and platforms",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      partners: [
        { name: "Microsoft Azure", logo: "/api/placeholder/120/60", tier: "Platinum", description: "Cloud infrastructure and AI services" },
        { name: "Amazon Web Services", logo: "/api/placeholder/120/60", tier: "Platinum", description: "Cloud computing and machine learning" },
        { name: "Google Cloud", logo: "/api/placeholder/120/60", tier: "Gold", description: "AI and data analytics platforms" },
        { name: "IBM", logo: "/api/placeholder/120/60", tier: "Gold", description: "Enterprise AI and quantum computing" }
      ]
    },
    {
      title: "Solution Partners",
      description: "Specialized solution providers that complement our offerings",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      partners: [
        { name: "Salesforce", logo: "/api/placeholder/120/60", tier: "Gold", description: "CRM and business automation" },
        { name: "Oracle", logo: "/api/placeholder/120/60", tier: "Silver", description: "Database and enterprise software" },
        { name: "SAP", logo: "/api/placeholder/120/60", tier: "Silver", description: "Enterprise resource planning" },
        { name: "ServiceNow", logo: "/api/placeholder/120/60", tier: "Silver", description: "IT service management" }
      ]
    },
    {
      title: "Channel Partners",
      description: "Resellers and distributors that help us reach new markets",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      partners: [
        { name: "TechCorp Solutions", logo: "/api/placeholder/120/60", tier: "Platinum", description: "North American distribution" },
        { name: "GlobalTech Partners", logo: "/api/placeholder/120/60", tier: "Gold", description: "European market expansion" },
        { name: "AsiaTech Alliance", logo: "/api/placeholder/120/60", tier: "Gold", description: "APAC region coverage" },
        { name: "Innovation Hub", logo: "/api/placeholder/120/60", tier: "Silver", description: "Startup ecosystem" }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      title: "Joint Go-to-Market",
      description: "Collaborative marketing and sales initiatives to reach new customers",
      icon: TrendingUp
    },
    {
      title: "Technology Integration",
      description: "Seamless integration between our solutions and partner platforms",
      icon: Network
    },
    {
      title: "Training & Certification",
      description: "Comprehensive training programs for partner teams",
      icon: Award
    },
    {
      title: "Revenue Sharing",
      description: "Attractive revenue sharing models for successful partnerships",
      icon: Star
=======
      title: 'Technology Partners',
      description: 'Leading technology companies that power our solutions',
      partners: [
        {
          name: 'Microsoft',
          logo: '🔵',
          description: 'Azure cloud infrastructure and AI services',
          tier: 'Platinum'
        },
        {
          name: 'Amazon Web Services',
          logo: '🟠',
          description: 'Cloud computing and machine learning platforms',
          tier: 'Platinum'
        },
        {
          name: 'Google Cloud',
          logo: '🔴',
          description: 'AI and data analytics solutions',
          tier: 'Gold'
        },
        {
          name: 'IBM',
          logo: '🔵',
          description: 'Quantum computing and enterprise AI',
          tier: 'Gold'
        }
      ]
    },
    {
      title: 'AI & ML Partners',
      description: 'Specialized AI and machine learning technology providers',
      partners: [
        {
          name: 'OpenAI',
          logo: '🤖',
          description: 'Advanced language models and AI research',
          tier: 'Strategic'
        },
        {
          name: 'Anthropic',
          logo: '🧠',
          description: 'Constitutional AI and safety-focused models',
          tier: 'Strategic'
        },
        {
          name: 'Hugging Face',
          logo: '🤗',
          description: 'Open-source AI models and datasets',
          tier: 'Silver'
        },
        {
          name: 'Databricks',
          logo: '💎',
          description: 'Data engineering and ML platform',
          tier: 'Silver'
        }
      ]
    },
    {
      title: 'Cybersecurity Partners',
      description: 'Security experts and compliance specialists',
      partners: [
        {
          name: 'CrowdStrike',
          logo: '🦅',
          description: 'Endpoint security and threat intelligence',
          tier: 'Gold'
        },
        {
          name: 'Palo Alto Networks',
          logo: '🛡️',
          description: 'Network security and cloud protection',
          tier: 'Gold'
        },
        {
          name: 'Qualys',
          logo: '🔒',
          description: 'Vulnerability management and compliance',
          tier: 'Silver'
        }
      ]
    },
    {
      title: 'Consulting Partners',
      description: 'Strategic consulting and implementation partners',
      partners: [
        {
          name: 'McKinsey & Company',
          logo: '📊',
          description: 'Strategic consulting and digital transformation',
          tier: 'Platinum'
        },
        {
          name: 'Deloitte',
          logo: '🔷',
          description: 'Technology consulting and implementation',
          tier: 'Platinum'
        },
        {
          name: 'Accenture',
          logo: '🔶',
          description: 'Digital transformation and technology services',
          tier: 'Gold'
        }
      ]
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
    }
  ];

  const partnershipTiers = [
    {
<<<<<<< HEAD
      name: "Platinum",
      description: "Strategic partnerships with highest level of collaboration",
      benefits: [
        "Exclusive market access",
        "Joint product development",
        "Priority support and resources",
        "Highest revenue sharing rates",
        "Executive relationship management"
      ],
      requirements: [
        "Annual revenue commitment: $10M+",
        "Dedicated partnership team",
        "Joint marketing investment",
        "Regular strategic reviews"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Gold",
      description: "Established partnerships with significant business impact",
      benefits: [
        "Preferred partner status",
        "Joint go-to-market programs",
        "Enhanced technical support",
        "Competitive revenue sharing",
        "Quarterly business reviews"
      ],
      requirements: [
        "Annual revenue commitment: $5M+",
        "Certified technical team",
        "Marketing collaboration",
        "Quarterly performance reviews"
      ],
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Silver",
      description: "Growing partnerships with mutual business opportunities",
      benefits: [
        "Standard partner benefits",
        "Technical enablement",
        "Marketing support",
        "Standard revenue sharing",
        "Annual business reviews"
      ],
      requirements: [
        "Annual revenue commitment: $1M+",
        "Basic technical certification",
        "Marketing participation",
        "Annual performance reviews"
      ],
      color: "from-amber-600 to-yellow-600"
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Building, 
  Globe, 
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Partners() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const categories = [
    { id: 'all', name: 'All Partners', count: 45 },
    { id: 'technology', name: 'Technology', count: 18 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 12 },
    { id: 'consulting', name: 'Consulting & Services', count: 8 },
    { id: 'academic', name: 'Academic & Research', count: 7 }
  ];

  const regions = [
    { id: 'all', name: 'All Regions', count: 45 },
    { id: 'north-america', name: 'North America', count: 25 },
    { id: 'europe', name: 'Europe', count: 12 },
    { id: 'asia-pacific', name: 'Asia Pacific', count: 8 }
  ];

  const partners = [
    {
      id: 1,
      name: "Microsoft Azure",
      logo: "/partners/microsoft-azure.png",
      category: "cloud",
      region: "north-america",
      description: "Strategic cloud partner providing enterprise-grade infrastructure and AI services",
      partnershipType: "Strategic Alliance",
      since: "2020",
      services: ["Cloud Infrastructure", "AI Services", "Enterprise Solutions"],
      benefits: [
        "Joint go-to-market initiatives",
        "Technical integration support",
        "Co-innovation programs",
        "Shared customer success stories"
      ],
      website: "https://azure.microsoft.com",
      contact: {
        name: "Azure Partnership Team",
        email: "partnerships@microsoft.com",
        phone: "+1 (425) 882-8080"
      },
      featured: true
    },
    {
      id: 2,
      name: "Amazon Web Services",
      logo: "/partners/aws.png",
      category: "cloud",
      region: "north-america",
      description: "Leading cloud computing platform partner for scalable AI and ML solutions",
      partnershipType: "Technology Partner",
      since: "2021",
      services: ["Cloud Computing", "Machine Learning", "IoT Solutions"],
      benefits: [
        "AWS Marketplace integration",
        "Technical certification programs",
        "Joint solution development",
        "Customer referral programs"
      ],
      website: "https://aws.amazon.com",
      contact: {
        name: "AWS Partner Network",
        email: "partner-support@amazon.com",
        phone: "+1 (206) 266-1000"
      },
      featured: true
    },
    {
      id: 3,
      name: "Google Cloud",
      logo: "/partners/google-cloud.png",
      category: "cloud",
      region: "north-america",
      description: "Innovative cloud partner specializing in AI and data analytics solutions",
      partnershipType: "Technology Partner",
      since: "2022",
      services: ["AI/ML Platform", "Data Analytics", "Cloud Infrastructure"],
      benefits: [
        "Google Cloud Partner Program",
        "Technical training and certification",
        "Joint customer workshops",
        "Innovation lab access"
      ],
      website: "https://cloud.google.com",
      contact: {
        name: "Google Cloud Partnerships",
        email: "partnerships@google.com",
        phone: "+1 (650) 253-0000"
      },
      featured: false
    },
    {
      id: 4,
      name: "IBM",
      logo: "/partners/ibm.png",
      category: "technology",
      region: "north-america",
      description: "Enterprise technology partner for quantum computing and AI solutions",
      partnershipType: "Strategic Partner",
      since: "2019",
      services: ["Quantum Computing", "AI Solutions", "Enterprise Software"],
      benefits: [
        "Quantum computing access",
        "Joint research initiatives",
        "Enterprise customer base",
        "Technical expertise sharing"
      ],
      website: "https://www.ibm.com",
      contact: {
        name: "IBM Partner Ecosystem",
        email: "partners@ibm.com",
        phone: "+1 (800) 426-4968"
      },
      featured: true
    },
    {
      id: 5,
      name: "Oracle",
      logo: "/partners/oracle.png",
      category: "technology",
      region: "north-america",
      description: "Database and enterprise software partner for comprehensive business solutions",
      partnershipType: "Technology Partner",
      since: "2021",
      services: ["Database Solutions", "Enterprise Software", "Cloud Services"],
      benefits: [
        "Oracle Partner Network",
        "Technical certification",
        "Joint solution development",
        "Customer success programs"
      ],
      website: "https://www.oracle.com",
      contact: {
        name: "Oracle Partner Network",
        email: "partner-support@oracle.com",
        phone: "+1 (800) 633-0738"
      },
      featured: false
    },
    {
      id: 6,
      name: "SAP",
      logo: "/partners/sap.png",
      category: "technology",
      region: "europe",
      description: "Enterprise software partner for business process optimization and AI integration",
      partnershipType: "Technology Partner",
      since: "2022",
      services: ["ERP Solutions", "Business Intelligence", "AI Integration"],
      benefits: [
        "SAP PartnerEdge Program",
        "Technical training and support",
        "Joint go-to-market",
        "Customer success collaboration"
      ],
      website: "https://www.sap.com",
      contact: {
        name: "SAP Partner Network",
        email: "partner-network@sap.com",
        phone: "+49 (0) 6227 7-47474"
      },
      featured: false
    },
    {
      id: 7,
      name: "Accenture",
      logo: "/partners/accenture.png",
      category: "consulting",
      region: "north-america",
      description: "Global consulting partner for digital transformation and AI implementation",
      partnershipType: "Strategic Alliance",
      since: "2020",
      services: ["Digital Transformation", "AI Implementation", "Change Management"],
      benefits: [
        "Joint client engagements",
        "Shared expertise and resources",
        "Co-innovation initiatives",
        "Global market access"
      ],
      website: "https://www.accenture.com",
      contact: {
        name: "Accenture Partnerships",
        email: "partnerships@accenture.com",
        phone: "+1 (312) 737-5678"
      },
      featured: true
    },
    {
      id: 8,
      name: "MIT Technology Review",
      logo: "/partners/mit-tech-review.png",
      category: "academic",
      region: "north-america",
      description: "Academic partner for technology research and innovation insights",
      partnershipType: "Research Partner",
      since: "2023",
      services: ["Technology Research", "Innovation Insights", "Academic Collaboration"],
      benefits: [
        "Research collaboration",
        "Technology trend insights",
        "Academic network access",
        "Publication opportunities"
      ],
      website: "https://www.technologyreview.com",
      contact: {
        name: "MIT Technology Review",
        email: "partnerships@technologyreview.com",
        phone: "+1 (617) 475-8000"
      },
      featured: false
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
    }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || partner.region === selectedRegion;
    return matchesCategory && matchesRegion;
  });

  const featuredPartners = filteredPartners.filter(partner => partner.featured);
  const regularPartners = filteredPartners.filter(partner => !partner.featured);
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <Handshake className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Strategic Partnerships
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our ecosystem of technology leaders, solution providers, and channel partners 
            to deliver exceptional value to customers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200">
              <span>Partner Portal</span>
            </button>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Partner Ecosystem
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We collaborate with industry leaders across technology, solutions, and channels 
              to create comprehensive value for our customers.
            </p>
          </div>
          
          <div className="space-y-16">
            {partnerCategories.map((category, idx) => (
              <div key={idx} className="space-y-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIdx) => (
                    <div key={partnerIdx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                      <div className="text-center">
                        <div className="w-24 h-12 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">{partner.name}</span>
                        </div>
                        <div className="mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            partner.tier === 'Gold' ? 'bg-gray-400/20 text-gray-400 border border-gray-400/30' :
                            'bg-amber-600/20 text-amber-400 border border-amber-600/30'
                          }`}>
                            {partner.tier}
                          </span>
                        </div>
                        <h4 className="font-semibold mb-2">{partner.name}</h4>
                        <p className="text-gray-400 text-sm">{partner.description}</p>
                      </div>
=======
      name: 'Platinum',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Exclusive access to beta features',
        'Joint go-to-market initiatives',
        'Dedicated partner success manager',
        'Priority support and escalation',
        'Co-marketing and co-selling opportunities',
        'Custom integration development'
      ]
    },
    {
      name: 'Gold',
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Early access to new features',
        'Joint marketing campaigns',
        'Partner success manager',
        'Enhanced support',
        'Training and certification programs'
      ]
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Standard partner benefits',
        'Marketing materials and resources',
        'Basic support',
        'Partner portal access'
      ]
    }
  ];

  const becomePartnerSteps = [
    {
      step: '1',
      title: 'Initial Contact',
      description: 'Reach out to discuss partnership opportunities'
    },
    {
      step: '2',
      title: 'Assessment',
      description: 'We evaluate mutual fit and opportunities'
    },
    {
      step: '3',
      title: 'Agreement',
      description: 'Define partnership terms and objectives'
    },
    {
      step: '4',
      title: 'Launch',
      description: 'Begin partnership activities and initiatives'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Strategic Partnerships
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our ecosystem of technology leaders, innovators, and industry experts. Together, we're building the future of AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Become a Partner
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300">
              Partner Resources
            </button>
          </div>
        </div>
      </div>

      {/* Partnership Tiers */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the partnership level that best fits your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div key={index} className="p-8 rounded-2xl border-2 border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                    {tier.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Categories */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Partner Network
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leading organizations across technology, AI, and business consulting
            </p>
          </div>

          <div className="space-y-16">
            {partnerCategories.map((category, index) => (
              <div key={index}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{partner.logo}</div>
                        <h4 className="text-lg font-semibold text-white mb-1">{partner.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          partner.tier === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                          partner.tier === 'Gold' ? 'bg-yellow-500/20 text-yellow-400' :
                          partner.tier === 'Silver' ? 'bg-gray-500/20 text-gray-400' :
                          'bg-cyan-500/20 text-cyan-400'
                        }`}>
                          {partner.tier}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm text-center">{partner.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive support and resources to help our partners succeed 
              and grow their business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the partnership level that best fits your business goals and commitment level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-400">{tier.description}</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-400">Benefits</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIdx) => (
                        <li key={benefitIdx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-green-400">Requirements</h4>
                    <ul className="space-y-2">
                      {tier.requirements.map((requirement, reqIdx) => (
                        <li key={reqIdx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
=======
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Strategic Alliances
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Collaborating with industry leaders to deliver innovative solutions and drive digital transformation across enterprises worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Regions */}
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedRegion === region.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {region.name}
                  <span className="ml-1 text-xs opacity-75">({region.count})</span>
                </button>
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Partner Ecosystem?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can work together to deliver exceptional value 
            to customers and grow our businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Partnership Discussion</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/partner-portal"
              className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
            >
              Partner Portal Access
            </Link>
          </div>
=======
      {/* Featured Partners */}
      {featuredPartners.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Strategic Partners</h2>
              <p className="text-gray-300">Our key alliance partners driving innovation and growth</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Building className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Strategic Partner
                      </span>
                      <span className="text-gray-400 text-sm capitalize">{partner.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2">Partnership Benefits:</h4>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {regions.find(r => r.id === partner.region)?.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Since {partner.since}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {partner.services.slice(0, 3).map((service) => (
                          <span key={service} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {service}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button className="p-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors duration-200">
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Partners */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technology Partners</h2>
            <p className="text-gray-300">
              {filteredPartners.length > 0 
                ? `Showing ${filteredPartners.length} partners` 
                : 'No partners found matching your criteria'
              }
            </p>
          </div>
          
          {regularPartners.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Building className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 text-sm capitalize">{partner.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2 text-sm">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {partner.services.slice(0, 2).map((service) => (
                          <span key={service} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {regions.find(r => r.id === partner.region)?.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {partner.since}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {partner.partnershipType}
                      </span>
                      
                      <div className="flex gap-2">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-md hover:bg-cyan-500/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <button className="p-1.5 bg-gray-700/50 text-gray-300 rounded-md hover:bg-gray-600/50 transition-colors duration-200">
                          <Mail className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {regularPartners.length === 0 && (
            <div className="text-center py-12">
              <Handshake className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No partners found</h3>
              <p className="text-gray-300">Try adjusting your filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <Handshake className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and help shape the future of enterprise technology. 
              Let's explore opportunities for collaboration and mutual growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4">
                <Users className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Access to Markets</h3>
                <p className="text-gray-300 text-sm text-center">Reach new customers through our global network</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Star className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Innovation Support</h3>
                <p className="text-gray-300 text-sm text-center">Collaborate on cutting-edge technology solutions</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Award className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Recognition</h3>
                <p className="text-gray-300 text-sm text-center">Gain industry recognition and credibility</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Apply for Partnership
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Partnership Guide
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
        </div>
      </section>
=======
      </div>

      {/* Become a Partner */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our ecosystem and unlock new opportunities for growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {becomePartnerSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can work together to drive innovation and create value for our customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Partnership Discussion
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Partnership Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Benefits */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the advantages of joining our partner ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Innovation Leadership',
                description: 'Access to cutting-edge AI and emerging technologies'
              },
              {
                icon: '🌍',
                title: 'Global Reach',
                description: 'Expand your market presence with our global network'
              },
              {
                icon: '💼',
                title: 'Revenue Growth',
                description: 'New revenue streams through joint solutions and referrals'
              },
              {
                icon: '🔧',
                title: 'Technical Support',
                description: 'Comprehensive technical resources and training'
              },
              {
                icon: '📈',
                title: 'Market Insights',
                description: 'Access to industry trends and customer insights'
              },
              {
                icon: '🤝',
                title: 'Collaborative Development',
                description: 'Co-develop solutions that address market needs'
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-bc98
    </div>
  );
}
=======
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Partners() {
  return (
    <>
      <SEO
        title="Partners - Zion Tech Group"
        description="Partner with Zion Tech Group and grow your business together."
        canonical="https://ziontechgroup.com/partners"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Partners</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Partner with Zion Tech Group and unlock new opportunities for growth and success.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our partnership program is currently under development.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
