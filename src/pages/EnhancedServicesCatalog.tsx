import React from 'react'';
import { Helmet } from 'react-helmet-async'';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Network, 
  Server, 
  BarChart3, 
  Settings, 
  Zap, 
  Monitor, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  Globe,
  Lock,
  Database,
  Cpu,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Users,
  FileText,
  CreditCard,
  ShoppingCart,
  Camera,
  Mic,
  Video,
  Headphones,
  Wifi,
  Battery,
  Wrench,
  Tool,
  Palette,
  Lightbulb,
  PieChart,
  Layers,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Terminal,
  Command,
  Workflow,
  Activity,
  TrendingDown,
  AlertTriangle,
  CheckSquare,
  XSquare,
  Play,
  Pause,
  RotateCcw,
  Save,
  Download,
  Upload,
  Share,
  Link,
  ExternalLink,
  Eye,
  EyeOff,
  Filter,
  SortAsc,
  SortDesc,
  Calendar,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  Hourglass,
  RefreshCw,
  Repeat,
  Shuffle,
  Maximize,
  Minimize,
  Move,
  Copy,
  Edit,
  Trash,
  Plus,
  Minus,
  X,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  Menu,
  Grid,
  List,
  Table,
  Layout,
  Sidebar,
  SidebarOpen,
  SidebarClose,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  Split,
  Columns,
  Rows,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Wink,
  Angry,
  Sad,
  Surprised,
  Confused,
  Neutral,
  Happy,
  Excited,
  Tired,
  Sleepy,
  Dizzy,
  Sick,
  Mask,
  Glasses,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Umbrella,
  TreePine,
  Tree,
  Flower,
  Leaf,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Mouse,
  Squirrel,
  Turtle,
  Whale,
  Dolphin,
  Shark,
  Octopus,
  Crab,
  Lobster,
  Shrimp,
  Butterfly,
  Bee,
  Ant,
  Spider,
  Snail,
  Worm,
  Frog,
  Lizard,
  Snake,
  Crocodile,
  Elephant,
  Lion,
  Tiger,
  Bear,
  Wolf,
  Fox,
  Deer,
  Horse,
  Cow,
  Pig,
  Sheep,
  Goat,
  Chicken,
  Duck,
  Goose,
  Turkey,
  Eagle,
  Owl,
  Hawk,
  Falcon,
  Parrot,
  Peacock,
  Penguin,
  Flamingo,
  Swan,
  Stork,
  Crane,
  Heron,
  Pelican,
  Seagull,
  Crow,
  Raven,
  Magpie,
  Robin,
  Sparrow,
  Finch,
  Canary,
  Hummingbird,
  Woodpecker,
  Toucan,
  Kiwi,
  Ostrich,
  Emu,
  Cassowary,
  Rhea,
  Albatross,
  Petrel,
  StormPetrel,
  Shearwater,
  Booby,
  Gannet,
  Cormorant,
  Shag,
  Anhinga,
  Frigatebird,
  Tropicbird,
  Grebe,
  Loon,
  Auk,
  Puffin,
  Guillemot,
  Razorbill,
  Murre,
  Kittiwake,
  Tern,
  Skua,
  Jaeger,
  Gull,
  Noddy,
  SootyTern,
  BrownNoddy,
  BlackNoddy,
  LesserNoddy,
  BlueNoddy,
  GreyNoddy,
  WhiteNoddy,
  RedFootedBooby,
  BrownBooby,
  MaskedBooby,
  NazcaBooby,
  BlueFootedBooby,
  PeruvianBooby,
  AbbottBooby,
  CapeGannet,
  AustralasianGannet,
  NorthernGannet,
  RedFootedBooby,
  BrownBooby,
  MaskedBooby,
  NazcaBooby,
  BlueFootedBooby,
  PeruvianBooby,
  AbbottBooby
} from 'lucide-react'';

export default function EnhancedServicesCatalog() {
  const title = 'Enhanced Services Catalog — Zion Tech Group';';
  const description = 'Comprehensive catalog of micro SaaS, IT, and AI services with transparent pricing, proven ROI, and fast delivery.';';

  const serviceCategories = [
    {
      id: 'ai-micro-saas',';,
      title: 'AI-Powered Micro SaaS',';,
      icon: Brain,,
      color: 'purple',';,
      description: 'Intelligent software solutions for specific business needs',';,
      services: [,
        {
          name: 'AI Email Subject Line Optimizer',';,
          price: '$49 - $299/month',';,
          delivery: '1 week',';,
          features: ['AI-generated subject lines', 'A/B testing', 'Performance analytics'],';,
          benefits: ['23% increase in open rates', '40% improvement in CTR'],';,
          marketSize: '$7.5B email marketing',';,
          roi: '400% ROI in 3 months',
        },
        {
          name: 'Smart Meeting Analytics',';,
          price: '$99 - $499/month',';,
          delivery: '2 weeks',';,
          features: ['Real-time transcription', 'Action item extraction', 'Productivity dashboards'],';,
          benefits: ['35% reduction in meeting waste', '50% improvement in follow-ups'],';,
          marketSize: '$4.2B meeting software',';,
          roi: '300% ROI in 6 months',
        },
        {
          name: 'Healthcare Appointment Intelligence',';,
          price: '$199 - $999/month',';,
          delivery: '3 weeks',';,
          features: ['Smart scheduling', 'No-show prediction', 'Revenue optimization'],';,
          benefits: ['28% reduction in no-shows', '15% revenue increase'],';,
          marketSize: '$3.8B healthcare scheduling',';,
          roi: '250% ROI in 4 months',
        },
        {
          name: 'AI Content Localization',';,
          price: '$149 - $799/month',';,
          delivery: '2 weeks',';,
          features: ['Neural translation', 'Cultural adaptation', 'SEO optimization'],';,
          benefits: ['40% faster global deployment', '60% cost reduction'],';,
          marketSize: '$56B localization',';,
          roi: '500% ROI in 6 months',
        },
        {
          name: 'Smart Inventory Forecasting',';,
          price: '$299 - $1,499/month',';,
          delivery: '3 weeks',';,
          features: ['95% accurate forecasting', 'Automated reordering', 'Cost optimization'],';,
          benefits: ['25% reduction in stockouts', '20% cost savings'],';,
          marketSize: '$2.1B inventory management',';,
          roi: '400% ROI in 5 months',
        }
      ]
    },
    {
      id: 'advanced-ai',';,
      title: 'Advanced AI Services',';,
      icon: Cpu,,
      color: 'blue',';,
      description: 'Enterprise-grade AI solutions with machine learning capabilities',';,
      services: [,
        {
          name: 'AI Compliance Monitor Pro',';,
          price: '$999 - $4,999/month',';,
          delivery: '4 weeks',';,
          features: ['Real-time monitoring', 'Automated reporting', 'Risk assessment'],';,
          benefits: ['60% cost reduction', '90% fewer violations'],';,
          marketSize: '$12.3B compliance software',';,
          roi: '600% ROI in 8 months',
        },
        {
          name: 'Smart Lead Scoring Platform',';,
          price: '$199 - $999/month',';,
          delivery: '2 weeks',';,
          features: ['Behavioral scoring', 'Predictive qualification', 'Automated nurturing'],';,
          benefits: ['45% conversion improvement', '30% shorter sales cycles'],';,
          marketSize: '$6.8B sales automation',';,
          roi: '350% ROI in 4 months',
        },
        {
          name: 'AI Voice Analytics Platform',';,
          price: '$399 - $2,499/month',';,
          delivery: '3-4 weeks',';,
          features: ['Sentiment analysis', 'Call quality monitoring', 'Compliance tracking'],';,
          benefits: ['50% service quality improvement', '35% complaint reduction'],';,
          marketSize: '$2.8B voice analytics',';,
          roi: '400% ROI in 6 months',
        },
        {
          name: 'Predictive Maintenance AI',';,
          price: '$1,200 - $6,000/month',';,
          delivery: '4-8 weeks',';,
          features: ['IoT sensor analysis', 'Failure prediction', 'Maintenance optimization'],';,
          benefits: ['40% downtime reduction', '25% maintenance cost savings'],';,
          marketSize: '$4.5B predictive maintenance',';,
          roi: '500% ROI in 12 months',
        },
        {
          name: 'AI Content Moderation Suite',';,
          price: '$299 - $1,999/month',';,
          delivery: '2-4 weeks',';,
          features: ['Multi-modal analysis', 'Real-time moderation', 'False positive reduction'],';,
          benefits: ['70% cost reduction', '90% safety improvement'],';,
          marketSize: '$3.2B content moderation',';,
          roi: '450% ROI in 5 months',
        }
      ]
    },
    {
      id: 'it-infrastructure',';,
      title: 'IT Infrastructure Services',';,
      icon: Server,,
      color: 'green',';,
      description: 'Comprehensive IT solutions for modern businesses',';,
      services: [,
        {
          name: 'Zero Trust Security Architecture',';,
          price: '$4,500 - $22,000/month',';,
          delivery: '6-12 weeks',';,
          features: ['Identity management', 'Micro-segmentation', 'Continuous monitoring'],';,
          benefits: ['99.9% breach reduction', '50% overhead reduction'],';,
          marketSize: '$31.8B zero trust security',';,
          roi: '800% ROI in 18 months',
        },
        {
          name: 'Cloud Migration & Modernization',';,
          price: '$8,000 - $45,000/month',';,
          delivery: '8-16 weeks',';,
          features: ['Application modernization', 'Containerization', 'Cost optimization'],';,
          benefits: ['40% cost reduction', '60% performance improvement'],';,
          marketSize: '$445B cloud computing',';,
          roi: '600% ROI in 24 months',
        },
        {
          name: 'DevSecOps Pipeline Implementation',';,
          price: '$3,200 - $15,000/month',';,
          delivery: '4-8 weeks',';,
          features: ['Security automation', 'Compliance reporting', 'Performance optimization'],';,
          benefits: ['80% vulnerability reduction', '70% faster deployments'],';,
          marketSize: '$7.8B DevSecOps',';,
          roi: '500% ROI in 12 months',
        },
        {
          name: 'Disaster Recovery & Business Continuity',';,
          price: '$2,800 - $18,000/month',';,
          delivery: '6-10 weeks',';,
          features: ['Multi-region backup', 'Automated failover', 'RTO/RPO optimization'],';,
          benefits: ['99.99% continuity assurance', '80% recovery time reduction'],';,
          marketSize: '$12.4B disaster recovery',';,
          roi: '1000% ROI during disasters',
        },
        {
          name: 'API Gateway & Microservices Management',';,
          price: '$1,500 - $8,500/month',';,
          delivery: '3-6 weeks',';,
          features: ['API management', 'Security policies', 'Performance monitoring'],';,
          benefits: ['60% performance improvement', '50% overhead reduction'],';,
          marketSize: '$4.1B API management',';,
          roi: '400% ROI in 8 months',
        }
      ]
    },
    {
      id: 'emerging-tech',';,
      title: 'Emerging Technology Services',';,
      icon: Rocket,,
      color: 'orange',';,
      description: 'Cutting-edge solutions for the future of business',';,
      services: [,
        {
          name: 'AI Video Content Creator Pro',';,
          price: '$299 - $1,999/month',';,
          delivery: '3-4 weeks',';,
          features: ['AI avatar generation', 'Voice synthesis', 'Multi-language support'],';,
          benefits: ['70% cost reduction', '90% faster creation'],';,
          marketSize: '$15.7B video marketing',';,
          roi: '500% ROI in 6 months',
        },
        {
          name: 'Smart Contract Analytics Platform',';,
          price: '$499 - $2,999/month',';,
          delivery: '3-5 weeks',';,
          features: ['Real-time monitoring', 'Risk assessment', 'DeFi analytics'],';,
          benefits: ['80% risk reduction', '60% performance improvement'],';,
          marketSize: '$2.1B blockchain analytics',';,
          roi: '600% ROI in 8 months',
        },
        {
          name: 'AI Energy Optimization Platform',';,
          price: '$499 - $3,999/month',';,
          delivery: '4-6 weeks',';,
          features: ['Predictive analytics', 'Load balancing', 'Renewable integration'],';,
          benefits: ['30% cost reduction', '25% efficiency improvement'],';,
          marketSize: '$12.8B energy management',';,
          roi: '400% ROI in 12 months',
        },
        {
          name: 'AI Legal Document Analyzer',';,
          price: '$799 - $4,999/month',';,
          delivery: '4-6 weeks',';,
          features: ['Contract analysis', 'Risk assessment', 'Compliance checking'],';,
          benefits: ['75% time reduction', '90% accuracy improvement'],';,
          marketSize: '$12.4B legal tech',';,
          roi: '700% ROI in 10 months',
        },
        {
          name: 'Smart Fleet Management Platform',';,
          price: '$299 - $1,999/month',';,
          delivery: '3-5 weeks',';,
          features: ['GPS tracking', 'Predictive maintenance', 'Route optimization'],';,
          benefits: ['25% cost reduction', '30% efficiency improvement'],';,
          marketSize: '$5.8B fleet management',';,
          roi: '450% ROI in 12 months',
        }
      ]
    },
    {
      id: 'specialized-solutions',';,
      title: 'Specialized Solutions',';,
      icon: Target,,
      color: 'indigo',';,
      description: 'Industry-specific solutions for unique business needs',';,
      services: [,
        {
          name: 'AI-Powered SEO Content Optimizer',';,
          price: '$99 - $599/month',';,
          delivery: '1-2 weeks',';,
          features: ['Keyword research', 'Content optimization', 'Performance tracking'],';,
          benefits: ['120% traffic increase', '60% ranking improvement'],';,
          marketSize: '$6.8B SEO tools',';,
          roi: '300% ROI in 4 months',
        },
        {
          name: 'Smart Property Management System',';,
          price: '$199 - $999/month',';,
          delivery: '3-4 weeks',';,
          features: ['Tenant screening', 'Maintenance tracking', 'Payment processing'],';,
          benefits: ['35% cost reduction', '40% efficiency improvement'],';,
          marketSize: '$3.2B property management',';,
          roi: '250% ROI in 8 months',
        },
        {
          name: 'AI-Powered Email Deliverability Optimizer',';,
          price: '$149 - $799/month',';,
          delivery: '2-3 weeks',';,
          features: ['Deliverability monitoring', 'Reputation tracking', 'ISP optimization'],';,
          benefits: ['40% deliverability improvement', '25% spam reduction'],';,
          marketSize: '$7.5B email marketing',';,
          roi: '350% ROI in 6 months',
        },
        {
          name: 'AI Privacy Policy & Terms Generator',';,
          price: '$39 - $199/month',';,
          delivery: '1 week',';,
          features: ['Jurisdiction-aware policies', 'Auto-updates', 'Legal compliance'],';,
          benefits: ['90% faster updates', '100% compliance assurance'],';,
          marketSize: '$10.5B privacy tech',';,
          roi: '400% ROI in 3 months',
        },
        {
          name: 'AI Proposal & SOW Writer',';,
          price: '$29 - $149/month',';,
          delivery: '1 week',';,
          features: ['Requirements intake', 'Auto-scoping', 'Profitability guardrails'],';,
          benefits: ['3x faster sales cycles', '50% proposal accuracy'],';,
          marketSize: '$6.2B proposal software',';,
          roi: '500% ROI in 2 months',
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',';,
    email: 'kleber@ziontechgroup.com',';,
    website: 'https://ziontechgroup.com',';,
    address: '364 E Main St STE 1008, Middletown DE 19709',
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />"
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, automation, cloud services, enterprise software, pricing, ROI" />"
        <link rel="canonical" href="https: //ziontechgroup.com/enhanced-services-catalog" />"
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">"
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">"
          <div className="text-center mb-16">"
            <div className="flex items-center justify-center mb-4">"
              <Globe className="h-8 w-8 text-cyan-400 mr-3" />"
              <span className="text-lg font-semibold text-cyan-400">Enhanced Services Catalog</span>"
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">"
              Comprehensive Service Portfolio
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">"
              {description} Choose from our extensive catalog of proven solutions with transparent pricing and guaranteed ROI.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">"
              <div className="flex items-center">"
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />"
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center">"
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />"
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center">"
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />"
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center">"
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />"
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="container mx-auto px-6 py-12">"
          <div className="space-y-16">"
            {serviceCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">"
                  <div className="flex items-center gap-4 mb-8">"
                    <div className={`w-16 h-16 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-xl flex items-center justify-center`}>`;
                      <Icon className="w-8 h-8 text-white" />"
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>"
                      <p className="text-slate-300">{category.description}</p>"
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-3 gap-6">"
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="group bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50 hover: border-cyan-500/50 transition-all duration-300">"
                        <div className="mb-4">"
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover: text-cyan-400 transition-colors">"
                            {service.name}
                          </h3>
                          <div className="flex items-center justify-between text-sm mb-3">"
                            <span className="text-cyan-400 font-semibold">{service.price}</span>"
                            <span className="text-slate-400">{service.delivery}</span>"
                          </div>
                          <div className="text-xs text-green-400 font-semibold mb-2">{service.roi}</div>"
                          <div className="text-xs text-slate-400">{service.marketSize}</div>"
                        </div>

                        <div className="space-y-3 mb-4">"
                          <div>
                            <h4 className="text-xs font-semibold text-cyan-400 mb-1">Key Features: </h4>"
                            <ul className="space-y-1">"
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-xs text-slate-300">"
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />"
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-fuchsia-400 mb-1">Benefits: </h4>"
                            <ul className="space-y-1">"
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-xs text-slate-300">"
                                  <TrendingUp className="w-3 h-3 text-fuchsia-400 mr-2 flex-shrink-0" />"
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <a 
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover: from-cyan-600 hover:to-blue-600 transition-all duration-300 w-full justify-center
                        >
                          Get Started
                          <ArrowRight className="w-3 h-3" />"
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Pricing Summary */}
        <section className="container mx-auto px-6 py-16">"
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">"
            <div className="text-center mb-8">"
              <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing & Guaranteed ROI</h2>"
              <p className="text-blue-100 max-w-2xl mx-auto">"
                All our services come with transparent pricing, proven ROI, and fast delivery. Most implementations start with a comprehensive assessment and detailed proposal.
              </p>
            </div>
            
            <div className="grid md: grid-cols-3 gap-8 text-center mb-8">"
              <div className="bg-slate-800/50 rounded-xl p-6">"
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">"
                  <DollarSign className="w-6 h-6 text-cyan-400" />"
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Transparent Pricing</h3>"
                <p className="text-sm text-slate-300">No hidden fees. Clear pricing from $29/month to enterprise solutions. Fixed-price proposals with guaranteed delivery.</p>"
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6">"
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">"
                  <TrendingUp className="w-6 h-6 text-blue-400" />"
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>"
                <p className="text-sm text-slate-300">Average 300-1000% ROI within 3-18 months. All services backed by real client success stories and measurable results.</p>"
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6">"
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">"
                  <Clock className="w-6 h-6 text-fuchsia-400" />"
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>"
                <p className="text-sm text-slate-300">Implementation in 1-16 weeks depending on complexity. Most micro SaaS solutions deploy in 1-4 weeks.</p>"
              </div>
            </div>

            <div className="text-center">"
              <div className="flex flex-col sm: flex-row items-center justify-center gap-4 mb-6">"
                <a 
                  href={`tel:${contactInfo.phone}`} `;
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors
                >
                  <Smartphone className="w-4 h-4" />"
                  {contactInfo.phone}
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`} `;
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors
                >
                  <MessageSquare className="w-4 h-4" />"
                  {contactInfo.email}
                </a>
              </div>
              <p className="text-sm text-slate-400">"
                {contactInfo.address}
              </p>
              <p className="text-sm text-slate-400 mt-2">"
                Visit our website: <a href={contactInfo.website} className="text-cyan-400 hover:underline">{contactInfo.website}</a>"
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};