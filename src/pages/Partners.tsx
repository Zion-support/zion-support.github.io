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
} from 'lucide-react';

export default function Partners() {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Leading technology companies providing infrastructure and platforms",
      icon: Cpu,
      partners: [
        {
          name: "Microsoft Azure",
          logo: "/images/partners/microsoft-azure.png",
          description: "Cloud computing platform and services",
          partnership: "Strategic cloud partnership for enterprise solutions",
          benefits: ["Azure credits", "Technical support", "Joint go-to-market"],
          tier: "Platinum"
        },
        {
          name: "Amazon Web Services",
          logo: "/images/partners/aws.png",
          description: "Cloud computing and infrastructure services",
          partnership: "Advanced technology partnership for AI solutions",
          benefits: ["AWS credits", "Technical training", "Marketplace presence"],
          tier: "Platinum"
        },
        {
          name: "Google Cloud",
          logo: "/images/partners/google-cloud.png",
          description: "Cloud computing and AI platform services",
          partnership: "AI and machine learning technology partnership",
          benefits: ["GCP credits", "AI/ML tools", "Technical collaboration"],
          tier: "Gold"
        }
      ]
    },
    {
      title: "AI & Research Partners",
      description: "Academic institutions and research organizations",
      icon: Rocket,
      partners: [
        {
          name: "MIT Computer Science & AI Laboratory",
          logo: "/images/partners/mit-csail.png",
          description: "Leading AI research and development",
          partnership: "Research collaboration in autonomous systems",
          benefits: ["Research grants", "Student internships", "Joint publications"],
          tier: "Research"
        },
        {
          name: "Stanford AI Lab",
          logo: "/images/partners/stanford-ai.png",
          description: "Advanced AI and machine learning research",
          partnership: "Quantum computing and AI research collaboration",
          benefits: ["Research funding", "Academic collaboration", "Technology transfer"],
          tier: "Research"
        },
        {
          name: "Caltech Quantum Institute",
          logo: "/images/partners/caltech-quantum.png",
          description: "Quantum computing and quantum information science",
          partnership: "Quantum technology research and development",
          benefits: ["Quantum computing access", "Research collaboration", "Joint patents"],
          tier: "Research"
        }
      ]
    },
    {
      title: "Industry Partners",
      description: "Sector-specific partners across key industries",
      icon: Building,
      partners: [
        {
          name: "Johnson & Johnson",
          logo: "/images/partners/johnson-johnson.png",
          description: "Healthcare and pharmaceutical solutions",
          partnership: "AI-powered healthcare technology development",
          benefits: ["Industry expertise", "Regulatory guidance", "Market access"],
          tier: "Strategic"
        },
        {
          name: "JPMorgan Chase",
          logo: "/images/partners/jpmorgan-chase.png",
          description: "Financial services and banking solutions",
          partnership: "AI and cybersecurity for financial services",
          benefits: ["Financial expertise", "Compliance knowledge", "Enterprise access"],
          tier: "Strategic"
        },
        {
          name: "General Electric",
          logo: "/images/partners/ge.png",
          description: "Industrial and manufacturing solutions",
          partnership: "Industrial IoT and AI automation",
          benefits: ["Industrial expertise", "Manufacturing insights", "Global reach"],
          tier: "Strategic"
        }
      ]
    },
    {
      title: "Cybersecurity Partners",
      description: "Security and compliance solution providers",
      icon: Shield,
      partners: [
        {
          name: "CrowdStrike",
          logo: "/images/partners/crowdstrike.png",
          description: "Endpoint security and threat intelligence",
          partnership: "AI-powered threat detection and response",
          benefits: ["Security expertise", "Threat intelligence", "Joint solutions"],
          tier: "Gold"
        },
        {
          name: "Palo Alto Networks",
          logo: "/images/partners/palo-alto.png",
          description: "Network security and cloud protection",
          partnership: "Next-generation firewall and security solutions",
          benefits: ["Security tools", "Technical training", "Market collaboration"],
          tier: "Gold"
        },
        {
          name: "Vanta",
          logo: "/images/partners/vanta.png",
          description: "Compliance automation and SOC2 solutions",
          partnership: "Automated compliance and security monitoring",
          benefits: ["Compliance expertise", "Automation tools", "Joint go-to-market"],
          tier: "Silver"
        }
      ]
    }
  ];

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
    }
  ];

  const partnershipTiers = [
    {
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


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
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
=======
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We collaborate with leading technology companies, research institutions, 
              and industry leaders to deliver innovative solutions that transform businesses 
              and drive growth.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Handshake className="w-5 h-5 mr-2" />
                <span>50+ Partners</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Network</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Strategic Alliances</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-lg">{tier.name[0]}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">{tier.name}</h3>
              <p className="text-gray-300 text-sm mb-4 text-center">{tier.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
                <ul className="space-y-1">
                  {tier.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 text-xs flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-2">Requirements</p>
                <p className="text-xs text-gray-300">{tier.requirements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Categories */}
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
          </div>
        </div>
      </section>

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
=======
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
              Download Partner Kit
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
